import { Agent, CreateAgentDTO } from "./api";
import {
  AudioContext,
  IAudioBufferSourceNode,
  IAudioContext,
} from "standardized-audio-context";
import async, { QueueObject } from "async";

import { client } from "./client";
import { decode } from "base64-arraybuffer";

export default class Vapi {
  private audioContext: AudioContext = new AudioContext();
  private source: IAudioBufferSourceNode<IAudioContext> | null = null;
  private started: boolean = false;
  private ws: WebSocket | null = null;
  private mediaRecorder: MediaRecorder | null = null;

  private nextClipTime: number = 0;

  private decodeQueue: QueueObject<ArrayBuffer>;

  constructor(apiToken: string) {
    client.setSecurityData(apiToken);

    this.decodeQueue = this.createQueue();
  }

  createQueue() {
    return async.queue<ArrayBuffer>((task, callback) => {
      this.source = this.audioContext.createBufferSource();

      this.audioContext.decodeAudioData(task, (buffer) => {
        if (!this.source) return;

        this.source.buffer = buffer;
        this.source.connect(this.audioContext.destination);

        // If the next clip time is in the past, set it to the current time
        this.nextClipTime = Math.max(
          this.nextClipTime,
          this.audioContext.currentTime
        );

        // Start the source at the next clip time
        this.source.start(this.nextClipTime);

        // Schedule the next clip time
        this.nextClipTime += buffer.duration;

        callback();
      });
    }, 1);
  }

  start(agent: CreateAgentDTO): void {
    if (this.started) {
      return;
    }

    this.started = true;

    client.call
      .callControllerCreateWebCall({
        agent,
      })
      .then(({ data }) => {
        const { callId, url } = data;
        const socket = new WebSocket(url);

        this.ws = socket;

        socket.onopen = () => {
          socket.send(JSON.stringify({ event: "start", callId }));
          this.startRecording();
        };
        socket.onmessage = (event) => {
          if (!socket) return;
          this.onMessage(socket, event);
        };
        socket.onclose = () => {
          this.stop();
        };
      })
      .catch((error) => {
        console.error(error);
      });
  }

  private startRecording(): void {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      this.mediaRecorder = new MediaRecorder(stream, {
        mimeType: "audio/webm;codecs=opus",
      });

      this.mediaRecorder.start(100);
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
      this.decodeQueue.push(audioData);
    }
    if (data.event === "clear") {
      this.clear();
    }
  }

  clear(): void {
    this.decodeQueue.kill();
    this.decodeQueue = this.createQueue();

    // Stop the source if it exists
    if (this.source) {
      this.source.stop();
      this.source.disconnect();
      this.source = null;
    }

    // Reset the next clip time
    this.nextClipTime = 0;
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
