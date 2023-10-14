import DailyIframe, {
  DailyCall,
  DailyEventObjectActiveSpeakerChange,
} from "@daily-co/daily-js";

import { CreateAssistantDTO } from "./api";
import EventEmitter from "events";
import { client } from "./client";

export default class Vapi extends EventEmitter {
  private started: boolean = false;
  private call: DailyCall | null = null;

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
      .then(({ data }) => {
        const { url } = data;

        this.call = DailyIframe.createFrame({
          audioSource: true,
          videoSource: false,
        });
        this.call.iframe()?.style.setProperty("display", "none");
        this.call.join({ url });

        this.call.on(
          "active-speaker-change",
          (e) => e && this.handleSpeakerChange(e)
        );
        this.call.on("remote-participants-audio-level", (e) => {
          console.log(e);
        });
        this.call.startRemoteParticipantsAudioLevelObserver();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  private handleSpeakerChange(e: DailyEventObjectActiveSpeakerChange) {
    if (e.activeSpeaker.peerId === this.call?.participants()?.local?.user_id) {
      this.emit("speech-end");
    } else {
      this.emit("speech-start");
    }
  }

  stop(): void {
    this.started = false;
    this.call?.destroy();
    this.call = null;
  }
}
