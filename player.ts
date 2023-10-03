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
    if (
      this.sourceBuffer &&
      !this.sourceBuffer.updating &&
      this.audioQueue.length > 0
    ) {
      const chunk = this.audioQueue.shift();
      if (chunk) {
        this.sourceBuffer.appendBuffer(chunk);
      }
    }
  }

  clear(): void {
    if (this.sourceBuffer) {
      this.sourceBuffer.abort();
      while (this.sourceBuffer.buffered.length > 0) {
        this.sourceBuffer.remove(0, this.sourceBuffer.buffered.end(0));
      }
    }
  }
}
