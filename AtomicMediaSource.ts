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
    console.log("APPEND OP PUSHED");
    this.operationsQueue.push(() => {
      console.log("APPEND OP START");

      return new Promise((resolve, reject) => {
        if (this.sourceBuffer) {
          this.sourceBuffer.addEventListener(
            "updateend",
            () => {
              console.log("APPEND OP END");

              resolve();
            },
            { once: true }
          );
          this.sourceBuffer.appendBuffer(buffer);
        } else {
          reject();
        }
      });
    });
  }

  public clearBuffer() {
    console.log("CLEAR OP PUSHED");
    this.operationsQueue.push(() => {
      console.log("CLEAR OP START");

      return new Promise((resolve, reject) => {
        if (this.sourceBuffer) {
          this.sourceBuffer.addEventListener(
            "updateend",
            () => {
              console.log("CLEAR OP END");
              resolve();
            },
            { once: true }
          );
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
