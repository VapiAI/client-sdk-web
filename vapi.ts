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
  | 'daily-participant-updated';

type VapiEventListeners = {
  'call-end': () => void;
  'call-start': () => void;
  'volume-level': (volume: number) => void;
  'speech-start': () => void;
  'speech-end': () => void;
  video: (track: MediaStreamTrack) => void;
  message: (message: any) => void;
  error: (error: any) => void;
  'daily-participant-updated': (participant: DailyParticipant) => void;
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
  ): Promise<Call | null> {
    if (!assistant && !squad) {
      throw new Error('Assistant or Squad must be provided.');
    }

    if (this.started) {
      return null;
    }
    this.started = true;

    try {
      const webCall = (
        await client.call.callControllerCreateWebCall({
          assistant: typeof assistant === 'string' ? undefined : assistant,
          assistantId: typeof assistant === 'string' ? assistant : undefined,
          assistantOverrides,
          squad: typeof squad === 'string' ? undefined : squad,
          squadId: typeof squad === 'string' ? squad : undefined,
        })
      ).data;

      if (this.call) {
        this.cleanup();
      }

      const isVideoRecordingEnabled =
        webCall?.artifactPlan?.videoRecordingEnabled ?? false;

      const isVideoEnabled = webCall.transport?.assistantVideoEnabled ?? false;

      this.call = DailyIframe.createCallObject({
        audioSource: this.dailyCallObject.audioSource ?? true,
        videoSource: this.dailyCallObject.videoSource ?? isVideoRecordingEnabled,
        dailyConfig: this.dailyCallConfig,
      });
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
        this.emit('error', error);
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

      // Allow mobile devices to finish processing the microphone permissions
      // request before joining the call and playing the assistant's audio
      if (this.isMobileDevice()) {
        await this.sleep(1000);
      }

      await this.call.join({
        // @ts-expect-error This exists
        url: webCall.webCallUrl,
        subscribeToTracksAutomatically: false,
      });

      if (isVideoRecordingEnabled) {
        const recordingRequestedTime = new Date().getTime();

        this.call.startRecording({
          width: 1280,
          height: 720,
          backgroundColor: '#FF1F2D3D',
          layout: {
            preset: 'default',
          },
        });

        this.call.on('recording-started', () => {
          this.send({
            type: 'control',
            control: 'say-first-message',
            videoRecordingStartDelaySeconds:
              (new Date().getTime() - recordingRequestedTime) / 1000,
          });
        });
      }

      this.call.startRemoteParticipantsAudioLevelObserver(100);

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

      this.call.updateInputSettings({
        audio: {
          processor: {
            type: 'noise-cancellation',
          },
        },
      });

      return webCall;
    } catch (e) {
      console.error(e);
      this.emit('error', e);
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

  public say(message: string, endCallAfterSpoken?: boolean, interruptionsEnabled?: boolean) {
    this.send({
      type: 'say',
      message,
      endCallAfterSpoken,
      interruptionsEnabled: interruptionsEnabled ?? false,
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
