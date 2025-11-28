import type { ChatCompletionMessageParam } from 'openai/resources';

import DailyIframe, {
  DailyCall,
  DailyAdvancedConfig,
  DailyFactoryOptions,
  DailyEventObjectAppMessage,
  DailyEventObjectParticipant,
  DailyEventObjectRemoteParticipantsAudioLevel,
  DailyParticipant,
  DailyVideoSendSettings,
} from '@daily-co/daily-js';
import EventEmitter from 'events';

import {
  Call,
  CreateSquadDTO,
  CreateAssistantDTO,
  AssistantOverrides,
  CreateWorkflowDTO,
  WorkflowOverrides,
} from './api';
import { client } from './client';
import {
  createSafeDailyConfig,
  createSafeDailyFactoryOptions,
  safeSetLocalAudio,
  safeSetInputDevicesAsync,
} from './daily-guards';

export interface EndCallMessage {
  type: 'end-call';
}

export interface AddMessageMessage {
  type: 'add-message';
  message: ChatCompletionMessageParam;
  triggerResponseEnabled?: boolean;
}

export interface ControlMessages {
  type: 'control';
  control: 'mute-assistant' | 'unmute-assistant' | 'say-first-message';
  videoRecordingStartDelaySeconds?: number;
}

export interface SayMessage {
  type: 'say';
  message: string;
  endCallAfterSpoken?: boolean;
  interruptionsEnabled?: boolean;
  interruptAssistantEnabled?: boolean;
}

type VapiClientToServerMessage =
  | AddMessageMessage
  | ControlMessages
  | SayMessage
  | EndCallMessage;

type VapiEventNames =
  | 'call-end'
  | 'call-start'
  | 'volume-level'
  | 'speech-start'
  | 'speech-end'
  | 'message'
  | 'video'
  | 'error'
  | 'camera-error'
  | 'network-quality-change'
  | 'network-connection'
  | 'daily-participant-updated'
  | 'call-start-progress'
  | 'call-start-success'
  | 'call-start-failed';

interface CallStartProgressEvent {
  stage: string;
  status: 'started' | 'completed' | 'failed';
  duration?: number;
  timestamp: string;
  metadata?: Record<string, any>;
}

interface CallStartSuccessEvent {
  totalDuration: number;
  callId?: string;
  timestamp: string;
}

interface CallStartFailedEvent {
  stage: string;
  totalDuration: number;
  error: string;
  errorStack?: string;
  timestamp: string;
  context: Record<string, any>;
}

interface SerializedError {
  message: string;
  name?: string;
  stack?: string;
  code?: string | number;
  cause?: string;
  [key: string]: any;
}

/**
 * Extracts error details into a plain object that serializes properly to JSON.
 * Error objects don't serialize well because their properties (message, stack, name) 
 * are not enumerable and get lost when using JSON.stringify().
 */
function serializeError(error: unknown): SerializedError {
  if (error === null || error === undefined) {
    return { message: 'Unknown error (null or undefined)' };
  }
  
  if (error instanceof Error) {
    const serialized: SerializedError = {
      message: error.message,
      name: error.name,
      stack: error.stack,
    };
    
    // Include any additional properties that might be on the error
    const errorAsAny = error as any;
    if (errorAsAny.code !== undefined) {
      serialized.code = errorAsAny.code;
    }
    if (errorAsAny.cause !== undefined) {
      serialized.cause = String(errorAsAny.cause);
    }
    if (errorAsAny.reason !== undefined) {
      serialized.reason = errorAsAny.reason;
    }
    if (errorAsAny.details !== undefined) {
      serialized.details = errorAsAny.details;
    }
    // Daily.co specific error properties
    if (errorAsAny.errorMsg !== undefined) {
      serialized.errorMsg = errorAsAny.errorMsg;
    }
    if (errorAsAny.error !== undefined && typeof errorAsAny.error === 'string') {
      serialized.errorDetail = errorAsAny.error;
    }
    
    return serialized;
  }
  
  if (typeof error === 'string') {
    return { message: error };
  }
  
  if (typeof error === 'object') {
    // It's already a plain object, but let's ensure message exists
    const errorObj = error as Record<string, any>;
    return {
      message: errorObj.message || errorObj.error || JSON.stringify(error),
      ...errorObj
    };
  }
  
  return { message: String(error) };
}

type VapiEventListeners = {
  'call-end': () => void;
  'call-start': () => void;
  'volume-level': (volume: number) => void;
  'speech-start': () => void;
  'speech-end': () => void;
  video: (track: MediaStreamTrack) => void;
  message: (message: any) => void;
  error: (error: any) => void;
  'camera-error': (error: any) => void;
  'network-quality-change': (event: any) => void;
  'network-connection': (event: any) => void;
  'daily-participant-updated': (participant: DailyParticipant) => void;
  'call-start-progress': (event: CallStartProgressEvent) => void;
  'call-start-success': (event: CallStartSuccessEvent) => void;
  'call-start-failed': (event: CallStartFailedEvent) => void;
};

type StartCallOptions = {
  /**
   * This determines whether the daily room will be deleted and all participants will be kicked once the user leaves the room.
   * If set to `false`, the room will be kept alive even after the user leaves, allowing clients to reconnect to the same room.
   * If set to `true`, the room will be deleted and reconnection will not be allowed.
   *
   * Defaults to `true`.
   * @example true
   */
  roomDeleteOnUserLeaveEnabled?: boolean;
}

type WebCall = {
  /**
   * The Vapi WebCall URL. This is the URL that the call will be joined on.
   * 
   * call.webCallUrl or call.transport.callUrl
   */
  webCallUrl: string;
  /**
   * The Vapi WebCall ID. This is the ID of the call.
   * 
   * call.id
   */
  id?: string;
  /**
   * The Vapi WebCall artifact plan. This is the artifact plan of the call.
   */
  artifactPlan?: { videoRecordingEnabled?: boolean };
  /**
   * The Vapi WebCall assistant. This is the assistant of the call.
   * 
   * call.assistant
   */
  assistant?: { voice?: { provider?: string } };
}

async function startAudioPlayer(
  player: HTMLAudioElement,
  track: MediaStreamTrack,
) {
  player.muted = false;
  player.autoplay = true;
  if (track != null) {
    player.srcObject = new MediaStream([track]);
    await player.play();
  }
}

async function buildAudioPlayer(
  track: MediaStreamTrack,
  participantId: string,
) {
  const player = document.createElement('audio');
  player.dataset.participantId = participantId;
  document.body.appendChild(player);
  await startAudioPlayer(player, track);
  return player;
}

function destroyAudioPlayer(participantId: string) {
  const player = document.querySelector(
    `audio[data-participant-id="${participantId}"]`,
  );
  player?.remove();
}

function subscribeToTracks(
  e: DailyEventObjectParticipant,
  call: DailyCall,
  isVideoRecordingEnabled?: boolean,
  isVideoEnabled?: boolean,
) {
  if (e.participant.local) return;

  call.updateParticipant(e.participant.session_id, {
    setSubscribedTracks: {
      audio: true,
      video: isVideoRecordingEnabled || isVideoEnabled,
    },
  });
}

class VapiEventEmitter extends EventEmitter {
  on<E extends VapiEventNames>(
    event: E,
    listener: VapiEventListeners[E],
  ): this {
    super.on(event, listener);
    return this;
  }
  once<E extends VapiEventNames>(
    event: E,
    listener: VapiEventListeners[E],
  ): this {
    super.once(event, listener);
    return this;
  }
  emit<E extends VapiEventNames>(
    event: E,
    ...args: Parameters<VapiEventListeners[E]>
  ): boolean {
    return super.emit(event, ...args);
  }
  removeListener<E extends VapiEventNames>(
    event: E,
    listener: VapiEventListeners[E],
  ): this {
    super.removeListener(event, listener);
    return this;
  }
  removeAllListeners(event?: VapiEventNames): this {
    super.removeAllListeners(event);
    return this;
  }
}

export default class Vapi extends VapiEventEmitter {
  private started: boolean = false;
  private call: DailyCall | null = null;
  private speakingTimeout: NodeJS.Timeout | null = null;
  private dailyCallConfig: DailyAdvancedConfig = {};
  private dailyCallObject: DailyFactoryOptions = {};

  private hasEmittedCallEndedStatus: boolean = false;

  constructor(
    apiToken: string,
    apiBaseUrl?: string,
    dailyCallConfig?: Pick<
      DailyAdvancedConfig,
      'avoidEval' | 'alwaysIncludeMicInPermissionPrompt'
    >,
    dailyCallObject?: Pick<DailyFactoryOptions, 'audioSource' | 'startAudioOff'>,
  ) {
    super();
    client.baseUrl = apiBaseUrl ?? 'https://api.vapi.ai';
    client.setSecurityData(apiToken);
    this.dailyCallConfig = createSafeDailyConfig(dailyCallConfig);
    this.dailyCallObject = createSafeDailyFactoryOptions(dailyCallObject);
  }

  private async cleanup() {
    this.started = false;
    this.hasEmittedCallEndedStatus = false;
    if (this.call) {
      await this.call.destroy();
      this.call = null;
    }
    this.speakingTimeout = null;
  }

  private isMobileDevice() {
    if (typeof navigator === 'undefined') {
      return false;
    }
    const userAgent = navigator.userAgent;
    return /android|iphone|ipad|ipod|iemobile|blackberry|bada/i.test(
      userAgent.toLowerCase(),
    );
  }

  private async sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async start(
    assistant?: CreateAssistantDTO | string,
    assistantOverrides?: AssistantOverrides,
    squad?: CreateSquadDTO | string,
    workflow?: CreateWorkflowDTO | string,
    workflowOverrides?: WorkflowOverrides,
    options?: StartCallOptions
  ): Promise<Call | null> {
    const startTime = Date.now();
    
    // Input validation with detailed error messages
    if (!assistant && !squad && !workflow) {
      const error = new Error('Assistant or Squad or Workflow must be provided.');
      this.emit('error', { 
        type: 'validation-error', 
        stage: 'input-validation',
        error: serializeError(error),
        timestamp: new Date().toISOString()
      });
      throw error;
    }

    if (this.started) {
      this.emit('call-start-progress', {
        stage: 'validation',
        status: 'failed',
        timestamp: new Date().toISOString(),
        metadata: { reason: 'already-started' }
      });
      return null;
    }
    
    this.emit('call-start-progress', {
      stage: 'initialization',
      status: 'started',
      timestamp: new Date().toISOString(),
      metadata: {
        hasAssistant: !!assistant,
        hasSquad: !!squad,
        hasWorkflow: !!workflow
      }
    });
    
    this.started = true;

    try {
            // Stage 1: Create web call
      this.emit('call-start-progress', {
        stage: 'web-call-creation',
        status: 'started',
        timestamp: new Date().toISOString()
      });
      
      const webCallStartTime = Date.now();
      
      const webCall = (
        await client.call.callControllerCreateWebCall({
          assistant: typeof assistant === 'string' ? undefined : assistant,
          assistantId: typeof assistant === 'string' ? assistant : undefined,
          assistantOverrides,
          squad: typeof squad === 'string' ? undefined : squad,
          squadId: typeof squad === 'string' ? squad : undefined,
          workflow: typeof workflow === 'string' ? undefined : workflow,
          workflowId: typeof workflow === 'string' ? workflow : undefined,
          workflowOverrides,
          roomDeleteOnUserLeaveEnabled: options?.roomDeleteOnUserLeaveEnabled,
        })
      ).data;
      
      const webCallDuration = Date.now() - webCallStartTime;
      this.emit('call-start-progress', {
        stage: 'web-call-creation',
        status: 'completed',
        duration: webCallDuration,
        timestamp: new Date().toISOString(),
        metadata: {
          callId: webCall?.id || 'unknown',
          videoRecordingEnabled: webCall?.artifactPlan?.videoRecordingEnabled ?? false,
          voiceProvider: webCall?.assistant?.voice?.provider || 'unknown'
        }
      });

      if (this.call) {
        this.emit('call-start-progress', {
          stage: 'daily-call-object-creation',
          status: 'started',
          timestamp: new Date().toISOString(),
          metadata: { action: 'cleanup-existing' }
        });
        await this.cleanup();
      }

      const isVideoRecordingEnabled =
        webCall?.artifactPlan?.videoRecordingEnabled ?? false;

      const isVideoEnabled = webCall?.assistant?.voice?.provider === 'tavus';

      // Stage 2: Create Daily call object
      this.emit('call-start-progress', {
        stage: 'daily-call-object-creation',
        status: 'started',
        timestamp: new Date().toISOString(),
        metadata: {
          audioSource: this.dailyCallObject.audioSource ?? true,
          videoSource: this.dailyCallObject.videoSource ?? isVideoRecordingEnabled,
          isVideoRecordingEnabled,
          isVideoEnabled
        }
      });
      
      const dailyCallStartTime = Date.now();
      
      try {
        this.call = DailyIframe.createCallObject({
          audioSource: this.dailyCallObject.audioSource ?? true,
          videoSource: this.dailyCallObject.videoSource ?? isVideoRecordingEnabled,
          dailyConfig: this.dailyCallConfig,
        });
        
        const dailyCallDuration = Date.now() - dailyCallStartTime;
        this.emit('call-start-progress', {
          stage: 'daily-call-object-creation',
          status: 'completed',
          duration: dailyCallDuration,
          timestamp: new Date().toISOString()
        });
      } catch (error) {
        const dailyCallDuration = Date.now() - dailyCallStartTime;
        const serializedError = serializeError(error);
        this.emit('call-start-progress', {
          stage: 'daily-call-object-creation',
          status: 'failed',
          duration: dailyCallDuration,
          timestamp: new Date().toISOString(),
          metadata: { error: serializedError.message }
        });
        this.emit('error', {
          type: 'daily-call-object-creation-error',
          stage: 'daily-call-object-creation',
          error: serializedError,
          timestamp: new Date().toISOString()
        });
        throw error;
      }
      
      this.call.iframe()?.style.setProperty('display', 'none');

      this.call.on('left-meeting', () => {
        this.emit('call-end');
        if (!this.hasEmittedCallEndedStatus) {
          this.emit('message', {
            type: 'status-update',
            status: 'ended',
            'endedReason': 'customer-ended-call',
          });
          this.hasEmittedCallEndedStatus = true;
        }
        if (isVideoRecordingEnabled) {
          this.call?.stopRecording();
        }
        this.cleanup().catch(console.error);
      });

      this.call.on('error', (error: any) => {
        this.emit('error', {
          type: 'daily-error',
          error: serializeError(error),
          timestamp: new Date().toISOString()
        });
        if (isVideoRecordingEnabled) {
          this.call?.stopRecording();
        }
      });

      this.call.on('camera-error', (error: any) => {
        this.emit('camera-error', {
          type: 'camera-error',
          error: serializeError(error),
          timestamp: new Date().toISOString()
        });
      });

      this.call.on('network-quality-change', (event: any) => {
        this.emit('network-quality-change', event);
      });

      this.call.on('network-connection', (event: any) => {
        this.emit('network-connection', event);
      });

      this.call.on('track-started', async (e) => {
        if (!e || !e.participant) {
          return;
        }
        if (e.participant?.local) {
          return;
        }
        if (e.participant?.user_name !== 'Vapi Speaker') {
          return;
        }
        if (e.track.kind === 'video') {
          this.emit('video', e.track);
        }
        if (e.track.kind === 'audio') {
          await buildAudioPlayer(e.track, e.participant.session_id);
        }
        this.call?.sendAppMessage('playable');
      });

      this.call.on('participant-joined', (e) => {
        if (!e || !this.call) return;
        subscribeToTracks(
          e,
          this.call,
          isVideoRecordingEnabled,
          isVideoEnabled,
        );
      });

      this.call.on('participant-updated', (e) => {
        if (!e) {
          return;
        }
        this.emit('daily-participant-updated', e.participant);
      });

      this.call.on('participant-left', (e) => {
        if (!e) {
          return;
        }
        destroyAudioPlayer(e.participant.session_id);
      });

      // Stage 3: Mobile device handling and permissions
      const isMobile = this.isMobileDevice();
      this.emit('call-start-progress', {
        stage: 'mobile-permissions',
        status: 'started',
        timestamp: new Date().toISOString(),
        metadata: { isMobile }
      });
      
      if (isMobile) {
        const mobileWaitStartTime = Date.now();
        await this.sleep(1000);
        const mobileWaitDuration = Date.now() - mobileWaitStartTime;
        this.emit('call-start-progress', {
          stage: 'mobile-permissions',
          status: 'completed',
          duration: mobileWaitDuration,
          timestamp: new Date().toISOString(),
          metadata: { action: 'permissions-wait' }
        });
      } else {
        this.emit('call-start-progress', {
          stage: 'mobile-permissions',
          status: 'completed',
          timestamp: new Date().toISOString(),
          metadata: { action: 'skipped-not-mobile' }
        });
      }

      // Stage 4: Join the call
      this.emit('call-start-progress', {
        stage: 'daily-call-join',
        status: 'started',
        timestamp: new Date().toISOString()
      });
      
      const joinStartTime = Date.now();
      
      try {
        await this.call.join({
          // @ts-expect-error This exists
          url: webCall.webCallUrl,
          subscribeToTracksAutomatically: false,
        });
        
        const joinDuration = Date.now() - joinStartTime;
        this.emit('call-start-progress', {
          stage: 'daily-call-join',
          status: 'completed',
          duration: joinDuration,
          timestamp: new Date().toISOString()
        });
      } catch (error) {
        const joinDuration = Date.now() - joinStartTime;
        const serializedError = serializeError(error);
        this.emit('call-start-progress', {
          stage: 'daily-call-join',
          status: 'failed',
          duration: joinDuration,
          timestamp: new Date().toISOString(),
          metadata: { error: serializedError.message }
        });
        this.emit('error', {
          type: 'daily-call-join-error',
          stage: 'daily-call-join',
          error: serializedError,
          duration: joinDuration,
          timestamp: new Date().toISOString()
        });
        throw error;
      }

      // Stage 5: Video recording setup (if enabled)
      if (isVideoRecordingEnabled) {
        this.emit('call-start-progress', {
          stage: 'video-recording-setup',
          status: 'started',
          timestamp: new Date().toISOString()
        });
        
        const recordingRequestedTime = new Date().getTime();
        const recordingStartTime = Date.now();

        try {
          this.call.startRecording({
            width: 1280,
            height: 720,
            backgroundColor: '#FF1F2D3D',
            layout: {
              preset: 'default',
            },
          });

          const recordingSetupDuration = Date.now() - recordingStartTime;
          this.emit('call-start-progress', {
            stage: 'video-recording-setup',
            status: 'completed',
            duration: recordingSetupDuration,
            timestamp: new Date().toISOString()
          });

          this.call.on('recording-started', () => {
            const totalRecordingDelay = (new Date().getTime() - recordingRequestedTime) / 1000;
            this.emit('call-start-progress', {
              stage: 'video-recording-started',
              status: 'completed',
              timestamp: new Date().toISOString(),
              metadata: { delaySeconds: totalRecordingDelay }
            });
            
            this.send({
              type: 'control',
              control: 'say-first-message',
              videoRecordingStartDelaySeconds: totalRecordingDelay,
            });
          });
        } catch (error) {
          const recordingSetupDuration = Date.now() - recordingStartTime;
          const serializedError = serializeError(error);
          this.emit('call-start-progress', {
            stage: 'video-recording-setup',
            status: 'failed',
            duration: recordingSetupDuration,
            timestamp: new Date().toISOString(),
            metadata: { error: serializedError.message }
          });
          this.emit('error', {
            type: 'video-recording-setup-error',
            stage: 'video-recording-setup',
            error: serializedError,
            timestamp: new Date().toISOString()
          });
          // Don't throw here, video recording is optional
        }
      } else {
        this.emit('call-start-progress', {
          stage: 'video-recording-setup',
          status: 'completed',
          timestamp: new Date().toISOString(),
          metadata: { action: 'skipped-not-enabled' }
        });
      }

      // Stage 6: Audio level observer setup
      this.emit('call-start-progress', {
        stage: 'audio-observer-setup',
        status: 'started',
        timestamp: new Date().toISOString()
      });
      
      const audioObserverStartTime = Date.now();
      
      try {
        this.call.startRemoteParticipantsAudioLevelObserver(100);
        const audioObserverDuration = Date.now() - audioObserverStartTime;
        this.emit('call-start-progress', {
          stage: 'audio-observer-setup',
          status: 'completed',
          duration: audioObserverDuration,
          timestamp: new Date().toISOString()
        });
      } catch (error) {
        const audioObserverDuration = Date.now() - audioObserverStartTime;
        const serializedError = serializeError(error);
        this.emit('call-start-progress', {
          stage: 'audio-observer-setup',
          status: 'failed',
          duration: audioObserverDuration,
          timestamp: new Date().toISOString(),
          metadata: { error: serializedError.message }
        });
        this.emit('error', {
          type: 'audio-observer-setup-error',
          stage: 'audio-observer-setup',
          error: serializedError,
          timestamp: new Date().toISOString()
        });
        // Don't throw here, this is non-critical
      }

      this.call.on('remote-participants-audio-level', (e) => {
        if (e) this.handleRemoteParticipantsAudioLevel(e);
      });

      this.call.on('app-message', (e) => this.onAppMessage(e));

      this.call.on('nonfatal-error', (e) => {
        // https://docs.daily.co/reference/daily-js/events/meeting-events#type-audio-processor-error
        if (e?.type === 'audio-processor-error') {
          this.call
            ?.updateInputSettings({
              audio: {
                processor: {
                  type: 'none',
                },
              },
            })
            .then(() => {
              safeSetLocalAudio(this.call, true);
            });
        }
      });

      // Stage 7: Audio processing setup
      this.emit('call-start-progress', {
        stage: 'audio-processing-setup',
        status: 'started',
        timestamp: new Date().toISOString()
      });
      
      const audioProcessingStartTime = Date.now();
      
      try {
        this.call.updateInputSettings({
          audio: {
            processor: {
              type: 'noise-cancellation',
            },
          },
        });
        
        const audioProcessingDuration = Date.now() - audioProcessingStartTime;
        this.emit('call-start-progress', {
          stage: 'audio-processing-setup',
          status: 'completed',
          duration: audioProcessingDuration,
          timestamp: new Date().toISOString()
        });
      } catch (error) {
        const audioProcessingDuration = Date.now() - audioProcessingStartTime;
        const serializedError = serializeError(error);
        this.emit('call-start-progress', {
          stage: 'audio-processing-setup',
          status: 'failed',
          duration: audioProcessingDuration,
          timestamp: new Date().toISOString(),
          metadata: { error: serializedError.message }
        });
        this.emit('error', {
          type: 'audio-processing-setup-error',
          stage: 'audio-processing-setup',
          error: serializedError,
          timestamp: new Date().toISOString()
        });
        // Don't throw here, this is non-critical
      }

      const totalDuration = Date.now() - startTime;
      this.emit('call-start-success', {
        totalDuration,
        callId: webCall?.id || 'unknown',
        timestamp: new Date().toISOString()
      });

      return webCall;
    } catch (e) {
      const totalDuration = Date.now() - startTime;
      const serializedError = serializeError(e);
      
      this.emit('call-start-failed', {
        stage: 'unknown',
        totalDuration,
        error: serializedError.message,
        errorStack: serializedError.stack || 'No stack trace available',
        timestamp: new Date().toISOString(),
        context: {
          hasAssistant: !!assistant,
          hasSquad: !!squad,
          hasWorkflow: !!workflow,
          isMobile: this.isMobileDevice()
        }
      });
      
      // Also emit the generic error event for backward compatibility
      this.emit('error', {
        type: 'start-method-error',
        stage: 'unknown',
        error: serializedError,
        totalDuration,
        timestamp: new Date().toISOString(),
        context: {
          hasAssistant: !!assistant,
          hasSquad: !!squad,
          hasWorkflow: !!workflow,
          isMobile: this.isMobileDevice()
        }
      });
      
      await this.cleanup();
      return null;
    }
  }

  private onAppMessage(e?: DailyEventObjectAppMessage) {
    if (!e) {
      return;
    }
    try {
      if (e.data === 'listening') {
        return this.emit('call-start');
      } else {
        try {
          const parsedMessage = JSON.parse(e.data);
          this.emit('message', parsedMessage);
          if (parsedMessage && 'type' in parsedMessage && 'status' in parsedMessage && parsedMessage.type === 'status-update' && parsedMessage.status === 'ended') {
            this.hasEmittedCallEndedStatus = true;
          }
        } catch (parseError) {
          console.log('Error parsing message data: ', parseError);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  private handleRemoteParticipantsAudioLevel(
    e: DailyEventObjectRemoteParticipantsAudioLevel,
  ) {
    const speechLevel = Object.values(e.participantsAudioLevel).reduce(
      (a, b) => a + b,
      0,
    );

    this.emit('volume-level', Math.min(1, speechLevel / 0.15));

    const isSpeaking = speechLevel > 0.01;

    if (!isSpeaking) {
      return;
    }

    if (this.speakingTimeout) {
      clearTimeout(this.speakingTimeout);
      this.speakingTimeout = null;
    } else {
      this.emit('speech-start');
    }

    this.speakingTimeout = setTimeout(() => {
      this.emit('speech-end');
      this.speakingTimeout = null;
    }, 1000);
  }

  /**
   * Stops the call by destroying the Daily call object.
   * 
   * If `roomDeleteOnUserLeaveEnabled` is set to `false`, the Vapi call will be kept alive, allowing reconnections to the same call using the `reconnect` method.
   * If `roomDeleteOnUserLeaveEnabled` is set to `true`, the Vapi call will also be destroyed, preventing any reconnections.
   */
  async stop(): Promise<void> {
    this.started = false;
    if (this.call) {
      await this.call.destroy();
      this.call = null;
    }
    this.speakingTimeout = null;
  }

  /**
   * Sends a Live Call Control message to the Vapi server.
   * 
   * Docs: https://docs.vapi.ai/calls/call-features
   */
  send(message: VapiClientToServerMessage): void {
    this.call?.sendAppMessage(JSON.stringify(message));
  }

  public setMuted(mute: boolean) {
    safeSetLocalAudio(this.call, !mute);
  }

  public isMuted() {
    if (!this.call) {
      return false;
    }
    return this.call.localAudio() === false;
  }

  public say(message: string, endCallAfterSpoken?: boolean, 
    interruptionsEnabled?: boolean, interruptAssistantEnabled?: boolean) {
    this.send({
      type: 'say',
      message,
      endCallAfterSpoken,
      interruptionsEnabled: interruptionsEnabled ?? false,
      interruptAssistantEnabled: interruptAssistantEnabled ?? false,
    });
  }

  /**
   * Ends the call immediately by sending a `end-call` message using Live Call Control, and destroys the Daily call object.
   * 
   * This method always ends the call, regardless of the `roomDeleteOnUserLeaveEnabled` option.
   */
  public end() {
    this.send({
      type: 'end-call',
    });
    this.stop();
  }

  public setInputDevicesAsync(
    options: Parameters<DailyCall['setInputDevicesAsync']>[0],
  ) {
    return safeSetInputDevicesAsync(this.call, options);
  }

  public async increaseMicLevel(gain: number) {
    if (!this.call) {
      throw new Error('Call object is not available.');
    }
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioContext = new AudioContext();
  
      const source = audioContext.createMediaStreamSource(stream);
      
      const gainNode = audioContext.createGain();
      gainNode.gain.value = gain;
      
      source.connect(gainNode);
      
      const destination = audioContext.createMediaStreamDestination();
      gainNode.connect(destination);
  
      const [boostedTrack] = destination.stream.getAudioTracks();
      await safeSetInputDevicesAsync(this.call, { audioSource: boostedTrack });      
    } catch (error) {
      console.error("Error adjusting microphone level:", error);
    }
  }  

  public setOutputDeviceAsync(
    options: Parameters<DailyCall['setOutputDeviceAsync']>[0],
  ) {
    this.call?.setOutputDeviceAsync(options);
  }

  public getDailyCallObject(): DailyCall | null {
    return this.call;
  }

  public startScreenSharing(displayMediaOptions?: DisplayMediaStreamOptions, screenVideoSendSettings?: DailyVideoSendSettings) {
    this.call?.startScreenShare({
      displayMediaOptions,
      screenVideoSendSettings,
    });
  }

  public stopScreenSharing() {
    this.call?.stopScreenShare();
  }

  /**
   * Reconnects to an active call.
   * 
   * 
   * @param webCall 
   */
  async reconnect(webCall: WebCall): Promise<void> {
    const startTime = Date.now();
    
    if (this.started) {
      throw new Error('Cannot reconnect while a call is already in progress. Call stop() first.');
    }

    if (!webCall.webCallUrl) {
      throw new Error('webCallUrl is required for reconnection.');
    }

    this.emit('call-start-progress', {
      stage: 'reconnect-initialization',
      status: 'started',
      timestamp: new Date().toISOString(),
      metadata: {
        callId: webCall.id || 'unknown',
        hasVideoRecording: !!webCall?.artifactPlan?.videoRecordingEnabled,
        voiceProvider: webCall?.assistant?.voice?.provider || 'unknown'
      }
    });

    this.started = true;

    try {
      // Clean up any existing call object
      if (this.call) {
        this.emit('call-start-progress', {
          stage: 'cleanup-existing-call',
          status: 'started',
          timestamp: new Date().toISOString()
        });
        await this.cleanup();
        this.emit('call-start-progress', {
          stage: 'cleanup-existing-call',
          status: 'completed',
          timestamp: new Date().toISOString()
        });
      }

      const isVideoRecordingEnabled = webCall?.artifactPlan?.videoRecordingEnabled ?? false;
      const isVideoEnabled = webCall?.assistant?.voice?.provider === 'tavus';

      // Stage 1: Create Daily call object
      this.emit('call-start-progress', {
        stage: 'daily-call-object-creation',
        status: 'started',
        timestamp: new Date().toISOString(),
        metadata: {
          audioSource: this.dailyCallObject.audioSource ?? true,
          videoSource: this.dailyCallObject.videoSource ?? isVideoRecordingEnabled,
          isVideoRecordingEnabled,
          isVideoEnabled
        }
      });

      const dailyCallStartTime = Date.now();
      this.call = DailyIframe.createCallObject({
        audioSource: this.dailyCallObject.audioSource ?? true,
        videoSource: this.dailyCallObject.videoSource ?? isVideoRecordingEnabled,
        dailyConfig: this.dailyCallConfig,
      });

      const dailyCallDuration = Date.now() - dailyCallStartTime;
      this.emit('call-start-progress', {
        stage: 'daily-call-object-creation',
        status: 'completed',
        duration: dailyCallDuration,
        timestamp: new Date().toISOString()
      });

      this.call.iframe()?.style.setProperty('display', 'none');

      // Set up event listeners
      this.call.on('left-meeting', () => {
        this.emit('call-end');
        if (!this.hasEmittedCallEndedStatus) {
          this.emit('message', {
            type: 'status-update',
            status: 'ended',
            'endedReason': 'customer-ended-call',
          });
          this.hasEmittedCallEndedStatus = true;
        }
        if (isVideoRecordingEnabled) {
          this.call?.stopRecording();
        }
        this.cleanup().catch(console.error);
      });

      this.call.on('error', (error: any) => {
        this.emit('error', {
          type: 'daily-error',
          error: serializeError(error),
          timestamp: new Date().toISOString()
        });
        if (isVideoRecordingEnabled) {
          this.call?.stopRecording();
        }
      });

      this.call.on('camera-error', (error: any) => {
        this.emit('camera-error', {
          type: 'camera-error',
          error: serializeError(error),
          timestamp: new Date().toISOString()
        });
      });

      this.call.on('network-quality-change', (event: any) => {
        this.emit('network-quality-change', event);
      });

      this.call.on('network-connection', (event: any) => {
        this.emit('network-connection', event);
      });

      this.call.on('track-started', async (e) => {
        if (!e || !e.participant) {
          return;
        }
        if (e.participant?.local) {
          return;
        }
        if (e.participant?.user_name !== 'Vapi Speaker') {
          return;
        }
        if (e.track.kind === 'video') {
          this.emit('video', e.track);
        }
        if (e.track.kind === 'audio') {
          await buildAudioPlayer(e.track, e.participant.session_id);
        }
        this.call?.sendAppMessage('playable');
      });

      this.call.on('participant-joined', (e) => {
        if (!e || !this.call) return;
        subscribeToTracks(
          e,
          this.call,
          isVideoRecordingEnabled,
          isVideoEnabled,
        );
      });

      this.call.on('participant-updated', (e) => {
        if (!e) {
          return;
        }
        this.emit('daily-participant-updated', e.participant);
      });

      this.call.on('participant-left', (e) => {
        if (!e) {
          return;
        }
        destroyAudioPlayer(e.participant.session_id);
      });

      this.call.on('remote-participants-audio-level', (e) => {
        if (e) this.handleRemoteParticipantsAudioLevel(e);
      });

      this.call.on('app-message', (e) => this.onAppMessage(e));

      this.call.on('nonfatal-error', (e) => {
        // https://docs.daily.co/reference/daily-js/events/meeting-events#type-audio-processor-error
        if (e?.type === 'audio-processor-error') {
          this.call
            ?.updateInputSettings({
              audio: {
                processor: {
                  type: 'none',
                },
              },
            })
            .then(() => {
              safeSetLocalAudio(this.call, true);
            });
        }
      });

      // Stage 2: Mobile device handling and permissions
      const isMobile = this.isMobileDevice();
      this.emit('call-start-progress', {
        stage: 'mobile-permissions',
        status: 'started',
        timestamp: new Date().toISOString(),
        metadata: { isMobile }
      });
      
      if (isMobile) {
        const mobileWaitStartTime = Date.now();
        await this.sleep(1000);
        const mobileWaitDuration = Date.now() - mobileWaitStartTime;
        this.emit('call-start-progress', {
          stage: 'mobile-permissions',
          status: 'completed',
          duration: mobileWaitDuration,
          timestamp: new Date().toISOString(),
          metadata: { action: 'permissions-wait' }
        });
      } else {
        this.emit('call-start-progress', {
          stage: 'mobile-permissions',
          status: 'completed',
          timestamp: new Date().toISOString(),
          metadata: { action: 'skipped-not-mobile' }
        });
      }

      // Stage 3: Join the call
      this.emit('call-start-progress', {
        stage: 'daily-call-join',
        status: 'started',
        timestamp: new Date().toISOString()
      });
      
      const joinStartTime = Date.now();
      await this.call.join({
        url: webCall.webCallUrl,
        subscribeToTracksAutomatically: false,
      });
      
      const joinDuration = Date.now() - joinStartTime;
      this.emit('call-start-progress', {
        stage: 'daily-call-join',
        status: 'completed',
        duration: joinDuration,
        timestamp: new Date().toISOString()
      });

      // Stage 4: Video recording setup (if enabled)
      if (isVideoRecordingEnabled) {
        this.emit('call-start-progress', {
          stage: 'video-recording-setup',
          status: 'started',
          timestamp: new Date().toISOString()
        });
        
        const recordingStartTime = Date.now();
        const recordingRequestedTime = new Date().getTime();

        try {
          this.call.startRecording({
            width: 1280,
            height: 720,
            backgroundColor: '#FF1F2D3D',
            layout: {
              preset: 'default',
            },
          });

          const recordingSetupDuration = Date.now() - recordingStartTime;
          this.emit('call-start-progress', {
            stage: 'video-recording-setup',
            status: 'completed',
            duration: recordingSetupDuration,
            timestamp: new Date().toISOString()
          });

          this.call.on('recording-started', () => {
            const totalRecordingDelay = (new Date().getTime() - recordingRequestedTime) / 1000;
            this.emit('call-start-progress', {
              stage: 'video-recording-started',
              status: 'completed',
              timestamp: new Date().toISOString(),
              metadata: { delaySeconds: totalRecordingDelay }
            });
            
            this.send({
              type: 'control',
              control: 'say-first-message',
              videoRecordingStartDelaySeconds: totalRecordingDelay,
            });
          });
        } catch (error) {
          const recordingSetupDuration = Date.now() - recordingStartTime;
          const serializedError = serializeError(error);
          this.emit('call-start-progress', {
            stage: 'video-recording-setup',
            status: 'failed',
            duration: recordingSetupDuration,
            timestamp: new Date().toISOString(),
            metadata: { error: serializedError.message }
          });
          // Don't throw here, video recording is optional
        }
      } else {
        this.emit('call-start-progress', {
          stage: 'video-recording-setup',
          status: 'completed',
          timestamp: new Date().toISOString(),
          metadata: { action: 'skipped-not-enabled' }
        });
      }

      // Stage 5: Audio level observer setup
      this.emit('call-start-progress', {
        stage: 'audio-observer-setup',
        status: 'started',
        timestamp: new Date().toISOString()
      });
      
      const audioObserverStartTime = Date.now();
      
      try {
        this.call.startRemoteParticipantsAudioLevelObserver(100);
        const audioObserverDuration = Date.now() - audioObserverStartTime;
        this.emit('call-start-progress', {
          stage: 'audio-observer-setup',
          status: 'completed',
          duration: audioObserverDuration,
          timestamp: new Date().toISOString()
        });
      } catch (error) {
        const audioObserverDuration = Date.now() - audioObserverStartTime;
        const serializedError = serializeError(error);
        this.emit('call-start-progress', {
          stage: 'audio-observer-setup',
          status: 'failed',
          duration: audioObserverDuration,
          timestamp: new Date().toISOString(),
          metadata: { error: serializedError.message }
        });
        // Don't throw here, this is non-critical
      }

      // Stage 6: Audio processing setup
      this.emit('call-start-progress', {
        stage: 'audio-processing-setup',
        status: 'started',
        timestamp: new Date().toISOString()
      });
      
      const audioProcessingStartTime = Date.now();
      
      try {
        this.call.updateInputSettings({
          audio: {
            processor: {
              type: 'noise-cancellation',
            },
          },
        });
        
        const audioProcessingDuration = Date.now() - audioProcessingStartTime;
        this.emit('call-start-progress', {
          stage: 'audio-processing-setup',
          status: 'completed',
          duration: audioProcessingDuration,
          timestamp: new Date().toISOString()
        });
      } catch (error) {
        const audioProcessingDuration = Date.now() - audioProcessingStartTime;
        const serializedError = serializeError(error);
        this.emit('call-start-progress', {
          stage: 'audio-processing-setup',
          status: 'failed',
          duration: audioProcessingDuration,
          timestamp: new Date().toISOString(),
          metadata: { error: serializedError.message }
        });
        // Don't throw here, this is non-critical
      }

      const totalDuration = Date.now() - startTime;
      this.emit('call-start-success', {
        totalDuration,
        callId: webCall?.id || 'unknown',
        timestamp: new Date().toISOString()
      });

      this.emit('call-start');

    } catch (e) {
      const totalDuration = Date.now() - startTime;
      const serializedError = serializeError(e);
      
      this.emit('call-start-failed', {
        stage: 'reconnect',
        totalDuration,
        error: serializedError.message,
        errorStack: serializedError.stack || 'No stack trace available',
        timestamp: new Date().toISOString(),
        context: {
          isReconnect: true,
          callId: webCall?.id || 'unknown',
          hasVideoRecording: !!webCall?.artifactPlan?.videoRecordingEnabled,
          voiceProvider: webCall?.assistant?.voice?.provider || 'unknown',
          isMobile: this.isMobileDevice()
        }
      });
      
      // Also emit the generic error event for backward compatibility
      this.emit('error', {
        type: 'reconnect-error',
        error: serializedError,
        totalDuration,
        timestamp: new Date().toISOString(),
        context: {
          isReconnect: true,
          callId: webCall?.id || 'unknown',
          hasVideoRecording: !!webCall?.artifactPlan?.videoRecordingEnabled,
          voiceProvider: webCall?.assistant?.voice?.provider || 'unknown',
          isMobile: this.isMobileDevice()
        }
      });
      
      await this.cleanup();
      throw e;
    }
  }

  /**
   * Runs all network connectivity tests for pre-call diagnostics.
   * Creates a temporary Daily call object for testing purposes.
   * 
   * Tests performed:
   * 1. Network connectivity (TURN server) - Tests if traffic can be relayed through TURN servers
   * 2. Websocket connectivity - Tests if websocket connections can be established  
   * 3. Call quality - Tests overall call quality metrics (if available in SDK version)
   * 
   * @returns {Promise<Record<string, any>>} Test results object with status for each test
   * 
   * @example
   * // Run pre-call network diagnostics
   * const results = await Vapi.runNetworkTestsStandalone();
   * if (results.networkConnectivity?.result === 'failed') {
   *   console.warn('Network issues detected - calls may not work properly');
   * }
   * 
   * @static
   */
  public static async runNetworkTestsStandalone(): Promise<Record<string, any>> {
    console.log('Starting standalone network connectivity tests...');
    
    const results: Record<string, any> = {};
    let tempCall: DailyCall | null = null;
    
    try {
      // Create a temporary call object for testing
      console.log('Creating temporary call object for testing...');
      tempCall = DailyIframe.createCallObject({
        audioSource: true,
        videoSource: true,
      });

      // Test 1: Network Connectivity (TURN server test)
      console.log('\n1. Testing network connectivity (TURN server)...');
      let videoTrack: MediaStreamTrack | null = null;
      
      try {
        // Create a dummy video track for the test
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoTrack = stream.getVideoTracks()[0];
        
        const networkTest = await tempCall.testNetworkConnectivity(videoTrack);
        results.networkConnectivity = networkTest;
        console.log('Network connectivity test result:', networkTest);
      } catch (error) {
        results.networkConnectivity = { result: 'error', error: error?.toString() };
        console.error('Network connectivity test error:', error);
      } finally {
        // Clean up the video track
        if (videoTrack) {
          videoTrack.stop();
        }
      }

      // Test 2: Websocket Connectivity
      console.log('\n2. Testing websocket connectivity...');
      try {
        const websocketTest = await tempCall.testWebsocketConnectivity();
        results.websocketConnectivity = websocketTest;
        console.log('Websocket connectivity test result:', websocketTest);
      } catch (error) {
        results.websocketConnectivity = { result: 'error', error: error?.toString() };
        console.error('Websocket connectivity test error:', error);
      }

      // Test 3: Call Quality (if available)
      console.log('\n3. Testing call quality...');
      try {
        // Check if the method exists
        if (typeof tempCall.testCallQuality === 'function') {
          // Call quality test requires startCamera to initialize call state
          try {
            // Use startCamera to initialize the call state without needing a room
            console.log('Initializing call state with startCamera...');
            await tempCall.startCamera();
            
            // Now run the call quality test
            const callQualityTest = await tempCall.testCallQuality();
            results.callQuality = callQualityTest;
            console.log('Call quality test result:', callQualityTest);
            
            // Camera will be cleaned up when we destroy the call object
          } catch (startCameraError: any) {
            // If startCamera fails, it might be due to permissions or other issues
            console.error('Failed to start camera for call quality test:', startCameraError);
            results.callQuality = { 
              result: 'error', 
              error: startCameraError?.toString(),
              message: 'Failed to initialize camera for call quality test. Check camera permissions.' 
            };
          }
        } else {
          results.callQuality = { result: 'not-available', message: 'testCallQuality method not available' };
          console.log('Call quality test not available in current Daily.co version');
        }
      } catch (error: any) {
        results.callQuality = { result: 'error', error: error?.toString() };
        console.error('Call quality test error:', error);
      }

    } catch (error) {
      console.error('Failed to create temporary call object:', error);
      results.error = error?.toString();
    } finally {
      // Clean up the temporary call object
      if (tempCall) {
        try {
          console.log('Cleaning up temporary call object...');
          await tempCall.destroy();
        } catch (error) {
          console.error('Error destroying temporary call object:', error);
        }
      }
    }

    // Summary
    console.log('\n=== Network Test Summary ===');
    console.log('Results:', JSON.stringify(results, null, 2));
    
    return results;
  }

}
