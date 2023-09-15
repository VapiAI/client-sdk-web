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
  private audioContext: AudioContext;
  private source: IAudioBufferSourceNode<IAudioContext> | null = null;
  private started: boolean = false;
  private ws: WebSocket | null = null;
  private mediaRecorder: MediaRecorder | null = null;

  constructor(apiToken: string) {
    this.apiToken = apiToken;
    this.audioContext = new AudioContext();
  }

  start(agent: Agent, startTalking = true): void {
    if (this.started) {
      return;
    }
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
        this.ws = new WebSocket(url);
        this.ws.onopen = () => {
          this.ws?.send(JSON.stringify({ event: "start", callId }));
          this.startRecording();
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
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      this.mediaRecorder = new MediaRecorder(stream);
      this.mediaRecorder.start(200);
      this.mediaRecorder.ondataavailable = (event) => {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
          this.ws.send(JSON.stringify({ event: "media", media: event.data }));
        }
      };
    });
  }

  private onMessage(ws: WebSocket, event: MessageEvent): void {
    const data = JSON.parse(event.data);
    if (data.event === "media") {
      const audioData = decode(data.media.payload);
      this.audioContext.decodeAudioData(audioData, (buffer) => {
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
  }
}

const vapi = new Vapi(process.env.VAPI_TOKEN || "");
vapi.start({
  name: "test",
  context: "I am John, a plumber.",
  voice: "en-US-Wavenet-D",
});
