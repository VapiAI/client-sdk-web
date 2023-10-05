import async, { QueueObject } from "async";

class AtomicMediaSource {
  mediaSource: MediaSource;
  private sourceBuffer: SourceBuffer | null = null;
  private operationsQueue: QueueObject<() => Promise<void>>;

  constructor() {
    this.mediaSource = new MediaSource();
    this.operationsQueue = this.createOperationQueue();

    this.mediaSource.addEventListener("sourceopen", () => {
      this.resetBuffer();
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
          console.error("No source buffer");
          reject();
        }
      });
    });
  }

  public resetBuffer() {
    if (!this.sourceBuffer) return;

    this.mediaSource.removeSourceBuffer(this.sourceBuffer);
    this.sourceBuffer = this.mediaSource.addSourceBuffer(
      'audio/webm; codecs="opus"'
    );
    this.sourceBuffer.mode = "sequence";
  }

  private createOperationQueue() {
    return async.queue<() => Promise<void>>((task, callback) => {
      task().then(() => callback());
    }, 1);
  }
}

export default AtomicMediaSource;
