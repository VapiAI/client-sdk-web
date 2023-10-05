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

    this.operationsQueue = this.createOperationQueue();

    this.mediaSource.addEventListener("sourceopen", () => {
      this.mediaSource.duration = Number.POSITIVE_INFINITY;
      this.sourceBuffer = this.mediaSource.addSourceBuffer(
        'audio/webm; codecs="opus"'
      );
      this.sourceBuffer.mode = "sequence";
    });
  }

  createOperationQueue() {
    return async.queue<() => Promise<void>>((task, callback) => {
      task().then(() => callback());
    }, 1);
  }

  start() {
    this.audio.play();
  }

  playChunk(audioData: ArrayBuffer) {
    this.operationsQueue.push(() => this.appendNextChunk(audioData));
  }

  private performBufferOperation(operation: () => void) {
    return new Promise<void>((resolve) => {
      if (!this.sourceBuffer) {
        resolve();
        return;
      }

      if (this.sourceBuffer.updating) {
        this.sourceBuffer.addEventListener(
          "updateend",
          () => {
            operation();
            resolve();
          },
          {
            once: true,
          }
        );
        return;
      }

      operation();
      resolve();
    });
  }

  private appendNextChunk(chunk: ArrayBuffer) {
    return this.performBufferOperation(() => {
      if (!this.sourceBuffer) return;
      this.sourceBuffer.appendBuffer(chunk);
    });
  }

  private removeBuffer() {
    return this.performBufferOperation(() => {
      if (!this.sourceBuffer) return;

      if (this.sourceBuffer.buffered.length > 0) {
        this.sourceBuffer.remove(
          0,
          this.sourceBuffer.buffered.end(this.sourceBuffer.buffered.length - 1)
        );
      }
    });
  }

  private resetTimestampOffset() {
    return this.performBufferOperation(() => {
      if (!this.sourceBuffer) return;
      this.sourceBuffer.timestampOffset = 0;
    });
  }

  clear() {
    if (!this.sourceBuffer) return;
    this.sourceBuffer.abort();

    this.operationsQueue.kill();
    this.operationsQueue = this.createOperationQueue();

    // this.operationsQueue.push(() => this.removeBuffer());
    // this.operationsQueue.push(() => this.resetTimestampOffset());
  }
}
