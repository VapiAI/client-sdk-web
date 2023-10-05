import async, { QueueObject } from "async";

class AtomicMediaSource {
  mediaSource: MediaSource;
  private sourceBuffer: SourceBuffer | null = null;
  private operationsQueue: QueueObject<() => Promise<void>>;

  constructor() {
    this.mediaSource = new MediaSource();
    this.operationsQueue = this.createOperationQueue();

    this.mediaSource.addEventListener(
      "sourceopen",
      () => {
        this.resetBuffer();
      },
      { once: true }
    );
  }

  public appendBuffer(buffer: ArrayBuffer) {
    this.operationsQueue.push(() => {
      return new Promise((resolve, reject) => {
        if (this.sourceBuffer) {
          this.sourceBuffer.addEventListener(
            "updateend",
            () => {
              resolve();
            },
            { once: true }
          );
          this.sourceBuffer.appendBuffer(buffer);
        } else {
          console.error("No source buffer");
          reject();
        }
      });
    });
  }

  public resetBuffer() {
    this.operationsQueue.push(async () => {
      try {
        // Check if mediaSource exists
        if (!this.mediaSource) {
          console.error("mediaSource is not available.");
          return;
        }

        // Remove existing source buffer if it exists
        if (this.sourceBuffer) {
          const removalPromise = new Promise<void>((resolve, reject) => {
            const onRemoval = () => {
              this.mediaSource.removeEventListener("updateend", onRemoval);
              resolve();
            };

            this.mediaSource.addEventListener("updateend", onRemoval, {
              once: true,
            });
            try {
              this.mediaSource.removeSourceBuffer(this.sourceBuffer!);
            } catch (error) {
              reject(error);
            }
          });

          await removalPromise;
        }

        // Add a new source buffer
        try {
          this.sourceBuffer = this.mediaSource.addSourceBuffer(
            'audio/webm; codecs="opus"'
          );
          this.sourceBuffer.mode = "sequence";
        } catch (error) {
          console.error("Error adding source buffer:", error);
        }
      } catch (error) {
        console.error("Error in resetBuffer:", error);
      }
    });
  }

  private createOperationQueue() {
    return async.queue<() => Promise<void>>((task, callback) => {
      task().then(() => callback());
    }, 1);
  }
}

export default AtomicMediaSource;
