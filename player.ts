import async, { QueueObject } from "async";

import EventEmitter from "events";

export class ContinuousPlayer extends EventEmitter {
  private mediaSource: MediaSource;
  private sourceBuffer: SourceBuffer | null = null;
  private audio: HTMLAudioElement;
  private operationsQueue: QueueObject<() => Promise<void>>;

  constructor() {
    super();
    this.mediaSource = new MediaSource();

    this.audio = document.createElement("audio");

    this.audio.addEventListener("playing", () => this.emit("speech-start"));
    this.audio.addEventListener("play", () => this.emit("speech-start"));

    this.audio.addEventListener("waiting", () => this.emit("speech-end"));

    this.audio.src = URL.createObjectURL(this.mediaSource);
    document.body.appendChild(this.audio);

    this.operationsQueue = async.queue((task, callback) => {
      task().then(() => callback());
    }, 1);

    this.mediaSource.addEventListener("sourceopen", () => {
      this.mediaSource.duration = Number.POSITIVE_INFINITY;
      this.sourceBuffer = this.mediaSource.addSourceBuffer(
        'audio/webm; codecs="opus"'
      );
      this.sourceBuffer.mode = "sequence";
    });
  }

  start() {
    this.audio.play();
  }

  playChunk(audioData: ArrayBuffer) {
    this.operationsQueue.push(() => this.appendNextChunk(audioData));
  }

  private performBufferOperation(operation: () => void) {
    console.log("performBufferOperation");
    return new Promise<void>((resolve) => {
      if (!this.sourceBuffer) {
        resolve();
        return;
      }

      this.sourceBuffer.addEventListener(
        "updateend",
        () => {
          console.log("update end");
          resolve();
        },
        {
          once: true,
        }
      );

      operation();
    });
  }

  private appendNextChunk(chunk: ArrayBuffer) {
    console.log("appendNextChunk");
    return this.performBufferOperation(() => {
      if (!this.sourceBuffer) return;
      this.sourceBuffer.appendBuffer(chunk);
    });
  }

  private removeBuffer() {
    console.log("removeBuffer");
    return this.performBufferOperation(() => {
      if (!this.sourceBuffer) return;
      while (this.sourceBuffer.buffered.length > 0) {
        this.sourceBuffer.remove(0, this.sourceBuffer.buffered.end(0));
      }
    });
  }

  private resetTimestampOffset() {
    console.log("resetTimestampOffset");
    return this.performBufferOperation(() => {
      if (!this.sourceBuffer) return;
      this.sourceBuffer.timestampOffset = 0;
    });
  }

  private async abortBuffer() {
    if (!this.sourceBuffer) return;
    // This does not emit updateend
    this.sourceBuffer.abort();
  }

  clear() {
    console.log("oyoiyo");
    this.operationsQueue.push(() => this.abortBuffer());
    this.operationsQueue.push(() => this.removeBuffer());
    this.operationsQueue.push(() => this.resetTimestampOffset());
  }
}
