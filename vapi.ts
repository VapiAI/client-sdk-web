import { Agent, CreateAgentDTO } from "./api";

import { ContinuousPlayer } from "./player";
import EventEmitter from "events";
import { client } from "./client";
import { decode } from "base64-arraybuffer";

export default class Vapi extends EventEmitter {
  private started: boolean = false;
  private ws: WebSocket | null = null;
  private mediaRecorder: MediaRecorder | null = null;
  private player: ContinuousPlayer;

  constructor(apiToken: string) {
    super();
    client.setSecurityData(apiToken);
    this.player = new ContinuousPlayer();

    this.player.on("speech-start", () => this.emit("speech-start"));
    this.player.on("speech-end", () => this.emit("speech-end"));
  }

  start(agent: CreateAgentDTO | string): void {
    if (this.started) {
      return;
    }

    this.started = true;

    client.call
      .callControllerCreateWebCall({
        agent: typeof agent === "string" ? undefined : agent,
        agentId: typeof agent === "string" ? agent : undefined,
      })
      .then(({ data }) => {
        const { callId, url } = data;
        const socket = new WebSocket(url);

        this.ws = socket;

        socket.onopen = () => {
          socket.send(JSON.stringify({ event: "start", callId }));
          this.startRecording();
          this.emit("started");
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
      this.player.playChunk(audioData);
    }
    if (data.event === "clear") {
      this.clear();
    }
  }

  clear(): void {
    this.player.clear();
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
    this.emit("stopped");
  }
}
