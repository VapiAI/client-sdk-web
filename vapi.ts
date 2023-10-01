import { Agent, CreateAgentDTO } from "./api";

import { client } from "./client";
import { decode } from "base64-arraybuffer";

export default class Vapi {
  private started: boolean = false;
  private ws: WebSocket | null = null;
  private mediaRecorder: MediaRecorder | null = null;
  private mediaSource: MediaSource;
  private sourceBuffer: SourceBuffer | null = null;
  private audioQueue: ArrayBuffer[] = [];

  constructor(apiToken: string) {
    client.setSecurityData(apiToken);

    this.mediaSource = this.createMediaSource();
  }

  createMediaSource(): MediaSource {
    const source = new MediaSource();
    const audio = document.createElement("audio");
    audio.src = URL.createObjectURL(source);

    document.addEventListener("click", () => {
      audio.play();
    });

    source.addEventListener("sourceopen", () => {
      this.sourceBuffer = source.addSourceBuffer('audio/webm; codecs="opus"');
      this.sourceBuffer.addEventListener("updateend", () => {
        this.appendNextChunk();
      });
    });

    return source;
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
      this.audioQueue.push(audioData);
      this.appendNextChunk();
    }
    if (data.event === "clear") {
      this.clear();
    }
  }

  private appendNextChunk(): void {
    if (
      this.sourceBuffer &&
      !this.sourceBuffer.updating &&
      this.audioQueue.length > 0
    ) {
      const chunk = this.audioQueue.shift();
      if (chunk) {
        this.sourceBuffer.appendBuffer(chunk);
      }
    }
  }

  clear(): void {
    if (this.sourceBuffer) {
      this.sourceBuffer.abort();
      while (this.sourceBuffer.buffered.length > 0) {
        this.sourceBuffer.remove(0, this.sourceBuffer.buffered.end(0));
      }
    }
  }

  stop(): void {
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
