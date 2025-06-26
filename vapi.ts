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

export interface AddMessageMessage {
  type: 'add-message';
  message: ChatCompletionMessageParam;
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
  | SayMessage;

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
    this.dailyCallConfig = dailyCallConfig ?? {};
    this.dailyCallObject = dailyCallObject ?? {};
  }

  private cleanup() {
    this.started = false;
    this.hasEmittedCallEndedStatus = false;
    this.call?.destroy();
    this.call = null;
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
  ): Promise<Call | null> {
    const startTime = Date.now();
    
    // Input validation with detailed error messages
    if (!assistant && !squad && !workflow) {
      const error = new Error('Assistant or Squad or Workflow must be provided.');
      this.emit('error', { 
        type: 'validation-error', 
        stage: 'input-validation',
        message: error.message,
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
        this.cleanup();
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
        this.emit('call-start-progress', {
          stage: 'daily-call-object-creation',
          status: 'failed',
          duration: dailyCallDuration,
          timestamp: new Date().toISOString(),
          metadata: { error: error?.toString() }
        });
        this.emit('error', {
          type: 'daily-call-object-creation-error',
          stage: 'daily-call-object-creation',
          error,
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
        this.cleanup();
      });

      this.call.on('error', (error: any) => {
        this.emit('error', error);
        if (isVideoRecordingEnabled) {
          this.call?.stopRecording();
        }
      });

      this.call.on('camera-error', (error: any) => {
        this.emit('camera-error', error);
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
        this.emit('call-start-progress', {
          stage: 'daily-call-join',
          status: 'failed',
          duration: joinDuration,
          timestamp: new Date().toISOString(),
          metadata: { error: error?.toString() }
        });
        this.emit('error', {
          type: 'daily-call-join-error',
          stage: 'daily-call-join',
          error,
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
          this.emit('call-start-progress', {
            stage: 'video-recording-setup',
            status: 'failed',
            duration: recordingSetupDuration,
            timestamp: new Date().toISOString(),
            metadata: { error: error?.toString() }
          });
          this.emit('error', {
            type: 'video-recording-setup-error',
            stage: 'video-recording-setup',
            error,
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
        this.emit('call-start-progress', {
          stage: 'audio-observer-setup',
          status: 'failed',
          duration: audioObserverDuration,
          timestamp: new Date().toISOString(),
          metadata: { error: error?.toString() }
        });
        this.emit('error', {
          type: 'audio-observer-setup-error',
          stage: 'audio-observer-setup',
          error,
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
              this.call?.setLocalAudio(true);
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
        this.emit('call-start-progress', {
          stage: 'audio-processing-setup',
          status: 'failed',
          duration: audioProcessingDuration,
          timestamp: new Date().toISOString(),
          metadata: { error: error?.toString() }
        });
        this.emit('error', {
          type: 'audio-processing-setup-error',
          stage: 'audio-processing-setup',
          error,
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
      
      this.emit('call-start-failed', {
        stage: 'unknown',
        totalDuration,
        error: e?.toString() || 'Unknown error occurred',
        errorStack: e instanceof Error ? e.stack : 'No stack trace available',
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
        error: e,
        totalDuration,
        timestamp: new Date().toISOString(),
        context: {
          hasAssistant: !!assistant,
          hasSquad: !!squad,
          hasWorkflow: !!workflow,
          isMobile: this.isMobileDevice()
        }
      });
      
      this.cleanup();
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

  stop(): void {
    this.started = false;
    this.call?.destroy();
    this.call = null;
  }

  send(message: VapiClientToServerMessage): void {
    this.call?.sendAppMessage(JSON.stringify(message));
  }

  public setMuted(mute: boolean) {
    if (!this.call) {
      throw new Error('Call object is not available.');
    }
    this.call.setLocalAudio(!mute);
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

  public setInputDevicesAsync(
    options: Parameters<DailyCall['setInputDevicesAsync']>[0],
  ) {
    this.call?.setInputDevicesAsync(options);
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
      await this.call.setInputDevicesAsync({ audioSource: boostedTrack });      
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
}
