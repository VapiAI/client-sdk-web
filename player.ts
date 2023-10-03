import async, { QueueObject } from "async";

import EventEmitter from "events";

export class ContinuousPlayer extends EventEmitter {
  private mediaSource: MediaSource;
  private sourceBuffer: SourceBuffer | null = null;
  private audio: HTMLAudioElement;
  private nextTimestamp: number = 0;
  private audioQueue: QueueObject<ArrayBuffer>;

  constructor() {
    super();
    this.mediaSource = new MediaSource();

    this.audio = document.createElement("audio");
    this.audio.src = URL.createObjectURL(this.mediaSource);
    document.body.appendChild(this.audio);

    this.audioQueue = async.queue((task, callback) => {
      this.appendNextChunk(task, callback);
    }, 1);

    this.mediaSource.addEventListener("sourceopen", () => {
      this.sourceBuffer = this.mediaSource.addSourceBuffer(
        'audio/webm; codecs="opus"'
      );

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
      console.log("appending", this.sourceBuffer.timestampOffset);
      this.sourceBuffer.appendBuffer(chunk);
      this.audioQueue.pause();
    }
    callback(null);
  }

  clear(): void {
    if (this.sourceBuffer) {
      if (this.sourceBuffer.updating) {
        this.sourceBuffer.addEventListener("updateend", () => this.clear(), {
          once: true,
        });
      } else {
        this.sourceBuffer.abort();
        while (this.sourceBuffer.buffered.length > 0) {
          this.sourceBuffer.remove(0, this.sourceBuffer.buffered.end(0));
        }
      }
      this.sourceBuffer.timestampOffset = 0;
    }
  }
}
