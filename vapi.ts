import DailyIframe, {
  DailyCall,
  DailyEventObjectActiveSpeakerChange,
  DailyEventObjectParticipant,
  DailyEventObjectRemoteParticipantsAudioLevel,
} from "@daily-co/daily-js";

import { CreateAssistantDTO } from "./api";
import EventEmitter from "events";
import { client } from "./client";

export default class Vapi extends EventEmitter {
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
        const { url } = data;

        this.call = DailyIframe.createFrame({
          audioSource: true,
          videoSource: false,
        });
        this.call.iframe()?.style.setProperty("display", "none");

        this.call.on("left-meeting", () => {
          this.emit("call-end");
        });

        this.call.on("error", () => {
          // Don't print to console
        });

        this.call.on("track-started", (e) => {
          console.log("TRACK");
          console.log(e);
          if (e?.participant?.user_name !== "Vapi Speaker") return;
          this.call?.sendAppMessage("playable");
          this.emit("call-start");
        });

        this.call.on("participant-joined", (e) => {
          console.log("JOINED");
          console.log(e);
          if (e?.participant.user_name !== "Vapi Speaker") return;

          this.call?.updateParticipant(e?.participant.session_id ?? "", {
            setSubscribedTracks: {
              audio: true,
              video: false,
            },
          });
        });

        await this.call.join({ url, subscribeToTracksAutomatically: false });

        this.call.startRemoteParticipantsAudioLevelObserver();
        this.call.on("remote-participants-audio-level", (e) =>
          this.handleRemoteParticipantsAudioLevel(e)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  private handleRemoteParticipantsAudioLevel(
    e: DailyEventObjectRemoteParticipantsAudioLevel
  ) {
    const isSpeaking = Object.values(e.participantsAudioLevel).some(
      (v) => v > 0.01
    );
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
    }, 500);
  }

  stop(): void {
    this.started = false;
    this.call?.destroy();
    this.call = null;
  }
}
