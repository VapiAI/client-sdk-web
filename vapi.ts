import { Agent, CreateAgentDTO } from "./api";
import {
  AudioContext,
  IAudioBufferSourceNode,
  IAudioContext,
} from "standardized-audio-context";

import { client } from "./client";
import { decode } from "base64-arraybuffer";

export default class Vapi {
  private audioContext: AudioContext | null = null;
  private source: IAudioBufferSourceNode<IAudioContext> | null = null;
  private started: boolean = false;
  private ws: WebSocket | null = null;
  private mediaRecorder: MediaRecorder | null = null;

  constructor(apiToken: string) {
    client.setSecurityData(apiToken);
  }

  start(agent: CreateAgentDTO): void {
    if (this.started) {
      return;
    }

    this.audioContext = new AudioContext();

    this.started = true;

    // client.call
    //   .callControllerCreateWebCall({
    //     agent,
    //   })
    //   .then(({ data }) => {
    //     const { callId, url } = data;
    const socket = new WebSocket("ws://localhost:3001");

    this.ws = socket;

    socket.onopen = () => {
      // socket.send(JSON.stringify({ event: "start", callId }));
      this.startRecording();
    };
    socket.onmessage = (event) => {
      if (!socket) return;
      this.onMessage(socket, event);
    };
    socket.onclose = () => {
      this.stop();
    };
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
  }

  private startRecording(): void {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      this.mediaRecorder = new MediaRecorder(stream, {
        mimeType: "audio/webm;codecs=opus",
      });

      this.mediaRecorder.start(40);
      this.mediaRecorder.ondataavailable = (event: BlobEvent) => {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
          this.ws.send(event.data);
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
