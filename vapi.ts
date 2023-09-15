import {
  AudioContext,
  IAudioBufferSourceNode,
  IAudioContext,
} from "standardized-audio-context";

import { Chat } from "openai/resources";
import { decode } from "base64-arraybuffer";

export type Agent = {
  name?: string;
  context?: string;
  getContextFromCallback?: boolean;
  functions?: Chat.CompletionCreateParams.Function[];
  callbackUrl?: string;
  voice?: string;
};

export default class Vapi {
  private apiToken: string;
  private audioContext: AudioContext | null = null;
  private source: IAudioBufferSourceNode<IAudioContext> | null = null;
  private started: boolean = false;
  private ws: WebSocket | null = null;
  private mediaRecorder: MediaRecorder | null = null;
  private callId: string | null = null;

  constructor(apiToken: string) {
    this.apiToken = apiToken;
  }

  start(agent: Agent, startTalking = true): void {
    if (this.started) {
      return;
    }
    this.audioContext = new AudioContext();
    this.startRecording();
    this.started = true;
    const url = "https://phone-api-dev.onrender.com/web_call";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiToken}`,
      },
      body: JSON.stringify({ agent, startTalking }),
    })
      .then((response) => response.json())
      .then((data) => {
        const { url, callId } = data;
        this.callId = callId;
        this.ws = new WebSocket(url);
        this.ws.onopen = () => {
          this.ws?.send(JSON.stringify({ event: "start", callId }));
        };
        this.ws.onmessage = (event) => {
          if (!this.ws) return;
          this.onMessage(this.ws, event);
        };
        this.ws.onclose = () => {
          this.stop();
        };
      })
      .catch((error) => {
        console.error(error);
      });
  }

  private startRecording(): void {
    console.log("starting");
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      console.log("got stream");

      this.mediaRecorder = new MediaRecorder(stream);
      this.mediaRecorder.start(200);
      this.mediaRecorder.ondataavailable = (event) => {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
          const reader = new FileReader();
          reader.onloadend = () => {
            if (reader.result) {
              const buffer = new Uint8Array(reader.result as ArrayBuffer);
              // Convert the buffer to a base64 string
              const base64String = btoa(
                String.fromCharCode.apply(null, buffer)
              );
              console.log(base64String);
              this.ws?.send(
                JSON.stringify({
                  event: "media",
                  media: base64String,
                  callId: this.callId,
                })
              );
            }
          };
          reader.readAsArrayBuffer(event.data);
        }
      };
    });
  }

  private onMessage(ws: WebSocket, event: MessageEvent): void {
    const data = JSON.parse(event.data);
    if (data.event === "media") {
      const audioData = decode(data.media.payload);
      if (!this.audioContext) return;

      this.audioContext.decodeAudioData(audioData, (buffer) => {
        if (!this.audioContext) return;

        this.source = this.audioContext.createBufferSource();
        this.source.buffer = buffer;
        this.source.connect(this.audioContext.destination);
        this.source.start(0);
      });
    }
  }

  stop(): void {
    if (this.source) {
      this.source.stop();
    }
    this.started = false;
    if (this.ws) {
      this.ws.close();
    }
    this.ws = null;
    if (this.mediaRecorder) {
      this.mediaRecorder.stop();
    }
    this.mediaRecorder = null;

    if (this.audioContext) {
      this.audioContext.close();
    }
    this.audioContext = null;
  }
}
