import DailyIframe, {
  DailyCall,
  DailyEventObjectActiveSpeakerChange,
  DailyEventObjectRemoteParticipantsAudioLevel,
} from "@daily-co/daily-js";

import { CreateAssistantDTO } from "./api";
import EventEmitter from "events";
import { client } from "./client";

export default class Vapi extends EventEmitter {
  private started: boolean = false;
  private call: DailyCall | null = null;
  private speaking = false;

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
        await this.call.join({ url });

        this.call.startRemoteParticipantsAudioLevelObserver(500);
        this.call.on(
          "remote-participants-audio-level",
          this.handleRemoteParticipantsAudioLevel
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
      (v) => v > 0
    );
    console.log(Object.values(e.participantsAudioLevel));
    if (isSpeaking === this.speaking) return;

    if (isSpeaking) {
      this.emit("speech-start");
    } else {
      this.emit("speech-end");
    }

    this.speaking = isSpeaking;
  }

  stop(): void {
    this.started = false;
    this.call?.destroy();
    this.call = null;
  }
}
