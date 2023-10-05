import async, { QueueObject } from "async";

class AtomicMediaSource {
  mediaSource: MediaSource;
  private sourceBuffer: SourceBuffer | null = null;
  private operationsQueue: QueueObject<() => Promise<void>>;

  constructor() {
    this.mediaSource = new MediaSource();
    this.operationsQueue = this.createOperationQueue();

    this.mediaSource.addEventListener("sourceopen", () => {
      this.mediaSource.duration = Number.POSITIVE_INFINITY;
      this.sourceBuffer = this.mediaSource.addSourceBuffer(
        'audio/webm; codecs="opus"'
      );
      this.sourceBuffer.mode = "sequence";
    });
  }

  public appendBuffer(buffer: ArrayBuffer) {
    this.operationsQueue.push(() => {
      return new Promise((resolve, reject) => {
        if (this.sourceBuffer) {
          this.sourceBuffer.addEventListener("updateend", () => {
            resolve();
          });
          this.sourceBuffer.appendBuffer(buffer);
        } else {
          reject();
        }
      });
    });
  }

  public clearBuffer() {
    this.operationsQueue.push(() => {
      return new Promise((resolve, reject) => {
        if (this.sourceBuffer) {
          this.sourceBuffer.addEventListener("updateend", () => {
            this.mediaSource.duration = Number.POSITIVE_INFINITY;
            this.sourceBuffer!.timestampOffset = 0;
            resolve();
          });
          this.sourceBuffer.remove(0, this.mediaSource.duration);
        } else {
          reject();
        }
      });
    });
  }

  private createOperationQueue() {
    return async.queue<() => Promise<void>>((task, callback) => {
      task().then(() => callback());
    }, 1);
  }
}

export default AtomicMediaSource;
