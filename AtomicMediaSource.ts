import async, { QueueObject } from "async";

import EventEmitter from "events";

declare global {
  interface Window {
    ManagedMediaSource: any;
  }
}

// ManagedMediaSource needed for iOS Safari
function getMediaSource() {
  if (window.ManagedMediaSource) {
    return new window.ManagedMediaSource();
  }
  if (window.MediaSource) {
    return new window.MediaSource();
  }
}

class AtomicMediaSource extends EventEmitter {
  mediaSource: any;
  sourceBuffer: SourceBuffer | null = null;
  private operationsQueue: QueueObject<() => Promise<void>>;

  constructor() {
    super();
    this.mediaSource = getMediaSource();
    this.operationsQueue = this.createOperationQueue();

    this.mediaSource.addEventListener("sourceopen", () => {
      this.mediaSource.duration = Number.POSITIVE_INFINITY;
      this.sourceBuffer = this.mediaSource.addSourceBuffer(
        'audio/webm; codecs="opus"'
      );
      if (this.sourceBuffer) {
        this.sourceBuffer.mode = "sequence";
      }
    });
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
          reject();
        }
      });
    });
  }

  public clearBuffer() {
    // this.operationsQueue.push(() => {
    //   return new Promise((resolve, reject) => {
    //     if (this.sourceBuffer) {
    //       this.sourceBuffer.addEventListener(
    //         "updateend",
    //         () => {
    //           resolve();
    //         },
    //         { once: true }
    //       );
    //       if (this.sourceBuffer.buffered.length > 0) {
    //         this.sourceBuffer.remove(0, this.sourceBuffer.buffered.end(0));
    //       }
    //     } else {
    //       reject();
    //     }
    //   });
    // });
  }

  private createOperationQueue() {
    return async.queue<() => Promise<void>>((task, callback) => {
      task().then(() => callback());
    }, 1);
  }
}

export default AtomicMediaSource;
