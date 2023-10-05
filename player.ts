import AtomicMediaSource from "./AtomicMediaSource";
import EventEmitter from "events";

export class ContinuousPlayer extends EventEmitter {
  private atomic: AtomicMediaSource;
  private audio: HTMLAudioElement;

  constructor() {
    super();

    this.audio = document.createElement("audio");

    this.audio.addEventListener("playing", () => this.emit("speech-start"));
    this.audio.addEventListener("play", () => this.emit("speech-start"));
    this.audio.addEventListener("canplay", () => {
      this.audio.play();
    });

    this.audio.addEventListener("waiting", () => this.emit("speech-end"));

    this.atomic = new AtomicMediaSource();

    this.audio.src = URL.createObjectURL(this.atomic.mediaSource);
    document.body.appendChild(this.audio);
  }

  start() {
    this.audio.play();
  }

  playChunk(audioData: ArrayBuffer) {
    this.atomic.sourceBuffer?.addEventListener(
      "updateend",
      () => {
        this.audio.play().catch((error) => console.error("Play error:", error));
      },
      { once: true }
    );
    this.atomic.appendBuffer(audioData);
  }

  clear() {
    this.audio.pause();
    this.atomic.clearBuffer();
  }
}
