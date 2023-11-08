import DailyIframe, {
  DailyCall,
  DailyEventObjectActiveSpeakerChange,
  DailyEventObjectParticipant,
  DailyEventObjectRemoteParticipantsAudioLevel,
} from "@daily-co/daily-js";

import { CreateAssistantDTO } from "./api";
import EventEmitter from "events";
import { client } from "./client";

function destroyAudioPlayer(participantId: string) {
  const player = document.querySelector(
    `audio[data-participant-id="${participantId}"]`
  );
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
  const player = document.createElement("audio");
  player.dataset.participantId = participantId;
  document.body.appendChild(player);
  await startPlayer(player, track);
  return player;
}
function subscribeToTracks(e: DailyEventObjectParticipant, call: DailyCall) {
  if (e.participant.local) return;

  call.updateParticipant(e.participant.session_id, {
    setSubscribedTracks: {
      audio: true,
      video: false,
    },
  });
}

type VapiEventNames =
  | "call-end"
  | "call-start"
  | "volume-level"
  | "speech-start"
  | "speech-end"
  | "error";
type VapiEventListeners = {
  "call-end": () => void;
  "call-start": () => void;
  "volume-level": (volume: number) => void;
  "speech-start": () => void;
  "speech-end": () => void;
  error: (error: any) => void;
};

class VapiEventEmitter extends EventEmitter {
  on<E extends VapiEventNames>(
    event: E,
    listener: VapiEventListeners[E]
  ): this {
    super.on(event, listener);
    return this;
  }
  once<E extends VapiEventNames>(
    event: E,
    listener: VapiEventListeners[E]
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
    listener: VapiEventListeners[E]
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

  constructor(apiToken: string, apiBaseUrl?: string) {
    super();
    client.baseUrl = apiBaseUrl ?? "https://api.vapi.ai";
    client.setSecurityData(apiToken);
  }

  start(assistant: CreateAssistantDTO | string): void {
    if (this.started) {
      return;
    }

    this.started = true;

    client.call
      .callControllerCreateWebCall({
        assistant: typeof assistant === "string" ? undefined : assistant,
        assistantId: typeof assistant === "string" ? assistant : undefined,
      })
      .then(async ({ data }) => {
        const { webCallUrl } = data;

        this.call = DailyIframe.createCallObject({
          audioSource: true,
          videoSource: false,
        });
        this.call.iframe()?.style.setProperty("display", "none");

        this.call.on("left-meeting", () => {
          this.emit("call-end");
        });

        this.call.on("participant-left", (e) => {
          if (!e) return;
          destroyAudioPlayer(e.participant.session_id);
        });

        this.call.on("error", () => {
          // Ignore error
        });

        this.call.on("track-started", async (e) => {
          if (!e || !e.participant) return;
          if (e.participant?.local) return;
          if (e.track.kind !== "audio") return;

          await buildAudioPlayer(e.track, e.participant.session_id);

          if (e?.participant?.user_name !== "Vapi Speaker") return;
          this.call?.sendAppMessage("playable");
          this.emit("call-start");
        });

        this.call.on("participant-joined", (e) => {
          if (!e || !this.call) return;
          subscribeToTracks(e, this.call);
        });

        await this.call.join({
          url: webCallUrl,
          subscribeToTracksAutomatically: false,
        });

        this.call.startRemoteParticipantsAudioLevelObserver(100);
        this.call.on("remote-participants-audio-level", (e) =>
          this.handleRemoteParticipantsAudioLevel(e)
        );

        this.call.updateInputSettings({
          audio: {
            processor: {
              type: "noise-cancellation",
            },
          },
        });
      })
      .catch((res) => {
        console.error(res.error);
        this.emit("error", res.error);
        this.started = false;
      });
  }

  private handleRemoteParticipantsAudioLevel(
    e: DailyEventObjectRemoteParticipantsAudioLevel
  ) {
    const speechLevel = Object.values(e.participantsAudioLevel).reduce(
      (a, b) => a + b,
      0
    );
    this.emit("volume-level", speechLevel);

    const isSpeaking = speechLevel > 0.1;
    if (!isSpeaking) return;

    if (this.speakingTimeout) {
      clearTimeout(this.speakingTimeout);
      this.speakingTimeout = null;
    } else {
      this.emit("speech-start");
    }

    this.speakingTimeout = setTimeout(() => {
      this.emit("speech-end");
      this.speakingTimeout = null;
    }, 1000);
  }

  stop(): void {
    this.started = false;
    this.call?.destroy();
    this.call = null;
  }
}
