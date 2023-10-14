import DailyIframe, { DailyCall } from "@daily-co/daily-js";

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
          "remote-participants-audio-level",
          ({ participantsAudioLevel }) =>
            this.handleParticipantsAudioLevel(participantsAudioLevel)
        );
        this.call.startRemoteParticipantsAudioLevelObserver(500);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  private handleParticipantsAudioLevel(participantsAudioLevel: any[]) {
    if (!participantsAudioLevel) return;
    const level = Object.values(participantsAudioLevel).reduce(
      (a, b) => a + b,
      0
    );
    console.log(level);
  }

  stop(): void {
    this.started = false;
    this.call?.destroy();
    this.call = null;
  }
}
