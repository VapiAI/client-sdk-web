import { Call, CreateAssistantDTO, CreateSquadDTO, OverrideAssistantDTO } from './api';
import DailyIframe, {
  DailyCall,
  DailyEventObjectAppMessage,
  DailyEventObjectParticipant,
  DailyEventObjectRemoteParticipantsAudioLevel,
} from '@daily-co/daily-js';

import type { ChatCompletionMessageParam } from 'openai/resources';
import EventEmitter from 'events';
import { client } from './client';

function destroyAudioPlayer(participantId: string) {
  const player = document.querySelector(`audio[data-participant-id="${participantId}"]`);
  player?.remove();
}
async function startPlayer(player: HTMLAudioElement, track: any) {
  player.muted = false;
  player.autoplay = true;
  if (track != null) {
    player.srcObject = new MediaStream([track]);
    await player.play();
  }
}
async function buildAudioPlayer(track: any, participantId: string) {
  const player = document.createElement('audio');
  player.dataset.participantId = participantId;
  document.body.appendChild(player);
  await startPlayer(player, track);
  return player;
}
function subscribeToTracks(
  e: DailyEventObjectParticipant,
  call: DailyCall,
  isVideoRecordingEnabled?: boolean,
) {
  if (e.participant.local) return;

  call.updateParticipant(e.participant.session_id, {
    setSubscribedTracks: {
      audio: true,
      video: isVideoRecordingEnabled,
    },
  });
}

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
}

type VapiClientToServerMessage = AddMessageMessage | ControlMessages | SayMessage;

type VapiEventNames =
  | 'call-end'
  | 'call-start'
  | 'volume-level'
  | 'speech-start'
  | 'speech-end'
  | 'message'
  | 'error';

type VapiEventListeners = {
  'call-end': () => void;
  'call-start': () => void;
  'volume-level': (volume: number) => void;
  'speech-start': () => void;
  'speech-end': () => void;
  message: (message: any) => void;
  error: (error: any) => void;
};

class VapiEventEmitter extends EventEmitter {
  on<E extends VapiEventNames>(event: E, listener: VapiEventListeners[E]): this {
    super.on(event, listener);
    return this;
  }
  once<E extends VapiEventNames>(event: E, listener: VapiEventListeners[E]): this {
    super.once(event, listener);
    return this;
  }
  emit<E extends VapiEventNames>(event: E, ...args: Parameters<VapiEventListeners[E]>): boolean {
    return super.emit(event, ...args);
  }
  removeListener<E extends VapiEventNames>(event: E, listener: VapiEventListeners[E]): this {
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

  constructor(apiToken: string, apiBaseUrl?: string) {
    super();
    client.baseUrl = apiBaseUrl ?? 'https://api.vapi.ai';
    client.setSecurityData(apiToken);
  }

  private cleanup() {
    this.started = false;
    this.call?.destroy();
    this.call = null;
    this.speakingTimeout = null;
  }

  async start(
    assistant?: CreateAssistantDTO | string,
    assistantOverrides?: OverrideAssistantDTO,
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
      const isVideoRecordingEnabled = webCall?.artifactPlan?.videoRecordingEnabled ?? false;

      this.call = DailyIframe.createCallObject({
        audioSource: true,
        videoSource: isVideoRecordingEnabled,
      });
      this.call.iframe()?.style.setProperty('display', 'none');

      this.call.on('left-meeting', () => {
        this.emit('call-end');
        if (isVideoRecordingEnabled) {
          this.call?.stopRecording();
        }
        this.cleanup();
      });

      this.call.on('participant-left', (e) => {
        if (!e) return;
        destroyAudioPlayer(e.participant.session_id);
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
        if (!e || !e.participant) return;
        if (e.participant?.local) return;
        if (e.track.kind !== 'audio') return;

        await buildAudioPlayer(e.track, e.participant.session_id);

        if (e?.participant?.user_name !== 'Vapi Speaker') return;
        this.call?.sendAppMessage('playable');
      });

      this.call.on('participant-joined', (e) => {
        if (!e || !this.call) return;
        subscribeToTracks(e, this.call, isVideoRecordingEnabled);
      });

      await this.call.join({
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
            videoRecordingStartDelaySeconds: (new Date().getTime() - recordingRequestedTime) / 1000,
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
    if (!e) return;
    try {
      if (e.data === 'listening') {
        return this.emit('call-start');
      } else {
        try {
          const parsedMessage = JSON.parse(e.data);
          this.emit('message', parsedMessage);
        } catch (parseError) {
          console.log('Error parsing message data: ', parseError);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  private handleRemoteParticipantsAudioLevel(e: DailyEventObjectRemoteParticipantsAudioLevel) {
    const speechLevel = Object.values(e.participantsAudioLevel).reduce((a, b) => a + b, 0);

    this.emit('volume-level', Math.min(1, speechLevel / 0.15));

    const isSpeaking = speechLevel > 0.01;

    if (!isSpeaking) return;

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
    try {
      if (!this.call) {
        throw new Error('Call object is not available.');
      }
      this.call.setLocalAudio(!mute);
    } catch (error) {
      throw error;
    }
  }

  public isMuted() {
    try {
      if (!this.call) {
        return false;
      }
      return this.call.localAudio() === false;
    } catch (error) {
      throw error;
    }
  }

  public say(message: string, endCallAfterSpoken?: boolean) {
    this.send({
      type: 'say',
      message,
      endCallAfterSpoken,
    });
  }

  public setInputDevicesAsync(options: Parameters<DailyCall['setInputDevicesAsync']>[0]) {
    this.call?.setInputDevicesAsync(options);
  }

  public setOutputDeviceAsync(options: Parameters<DailyCall['setOutputDeviceAsync']>[0]) {
    this.call?.setOutputDeviceAsync(options);
  }
}
