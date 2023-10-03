import EventEmitter from "events";

export class ContinuousPlayer extends EventEmitter {
  private mediaSource: MediaSource;
  private sourceBuffer: SourceBuffer | null = null;
  private audio: HTMLAudioElement;
  private audioQueue: ArrayBuffer[] = [];

  constructor() {
    super();
    this.mediaSource = new MediaSource();

    this.audio = document.createElement("audio");
    this.audio.src = URL.createObjectURL(this.mediaSource);
    document.body.appendChild(this.audio);

    this.mediaSource.addEventListener("sourceopen", () => {
      this.sourceBuffer = this.mediaSource.addSourceBuffer(
        'audio/webm; codecs="opus"'
      );

      this.sourceBuffer.addEventListener("updateend", () => {
        this.appendNextChunk();
      });
    });
  }

  start() {
    this.audio.play();
  }

  playChunk(audioData: ArrayBuffer) {
    this.audioQueue.push(audioData);

    this.appendNextChunk();
  }

  private appendNextChunk(): void {
    console.log("appendNextChunk", this.audioQueue.length);
    if (
      this.sourceBuffer &&
      !this.sourceBuffer.updating &&
      this.audioQueue.length > 0
    ) {
      const chunk = this.audioQueue.shift();
      if (chunk) {
        if (this.sourceBuffer.buffered.length > 0) {
          this.sourceBuffer.timestampOffset = this.sourceBuffer.buffered.end(0);
        }

        this.sourceBuffer.appendBuffer(chunk);
        console.log("appended", this.audioQueue.length);
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
