import async, { QueueObject } from "async";

import EventEmitter from "events";

export class ContinuousPlayer extends EventEmitter {
  private mediaSource: MediaSource;
  private sourceBuffer: SourceBuffer | null = null;
  private audio: HTMLAudioElement;
  private audioQueue: QueueObject<ArrayBuffer>;

  constructor() {
    super();
    this.mediaSource = new MediaSource();

    this.audio = document.createElement("audio");

    this.audio.addEventListener("playing", () => this.emit("speech-start"));
    this.audio.addEventListener("play", () => this.emit("speech-start"));

    this.audio.addEventListener("waiting", () => this.emit("speech-end"));

    this.audio.src = URL.createObjectURL(this.mediaSource);
    document.body.appendChild(this.audio);

    this.audioQueue = async.queue((task, callback) => {
      this.appendNextChunk(task, callback);
    }, 1);

    this.mediaSource.addEventListener("sourceopen", () => {
      this.mediaSource.duration = Number.POSITIVE_INFINITY;
      this.sourceBuffer = this.mediaSource.addSourceBuffer(
        'audio/webm; codecs="opus"'
      );
      this.sourceBuffer.mode = "sequence";

      this.sourceBuffer.addEventListener("updateend", () => {
        this.audioQueue.resume();
      });
    });
  }

  start() {
    this.audio.play();
  }

  playChunk(audioData: ArrayBuffer) {
    this.audioQueue.push(audioData);
  }

  private appendNextChunk(
    chunk: ArrayBuffer,
    callback: async.ErrorCallback<Error>
  ): void {
    if (this.sourceBuffer && !this.sourceBuffer.updating) {
      this.audioQueue.pause();
      this.sourceBuffer.appendBuffer(chunk);
    }
    callback();
  }

  private performBufferOperation(operation: () => void) {
    return new Promise<void>((resolve) => {
      if (!this.sourceBuffer) {
        resolve();
        return;
      }

      this.sourceBuffer.addEventListener("updateend", () => resolve(), {
        once: true,
      });

      operation();
    });
  }

  private removeBuffer() {
    return this.performBufferOperation(() => {
      if (!this.sourceBuffer) return;
      while (this.sourceBuffer.buffered.length > 0) {
        this.sourceBuffer.remove(0, this.sourceBuffer.buffered.end(0));
      }
    });
  }

  private resetTimestampOffset() {
    return this.performBufferOperation(() => {
      if (!this.sourceBuffer) return;
      this.sourceBuffer.timestampOffset = 0;
    });
  }

  private abortBuffer() {
    return this.performBufferOperation(() => {
      if (!this.sourceBuffer) return;
      this.sourceBuffer.abort();
    });
  }

  async clear() {
    await this.removeBuffer();
    await this.abortBuffer();
    await this.resetTimestampOffset();
  }
}
