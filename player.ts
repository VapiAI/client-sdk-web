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
        this.checkForGaps();
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

  private checkForGaps(): void {
    if (this.sourceBuffer && this.sourceBuffer.buffered.length > 0) {
      console.log(
        this.sourceBuffer.buffered.end(this.sourceBuffer.buffered.length - 1)
      );

      console;
    }
    if (this.sourceBuffer) {
      for (let i = 0; i < this.sourceBuffer.buffered.length; i++) {
        // Start and end times of the buffered range
        let start = this.sourceBuffer.buffered.start(i);
        let end = this.sourceBuffer.buffered.end(i);

        // Check if there is a gap between the end of this range and the start of the next one
        if (i < this.sourceBuffer.buffered.length - 1) {
          let nextStart = this.sourceBuffer.buffered.start(i + 1);
          if (end < nextStart) {
            console.log(`Gap detected between ${end} and ${nextStart}`);
          }
        }
      }
    }
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
