import AtomicMediaSource from "./AtomicMediaSource";
import EventEmitter from "events";

export class ContinuousPlayer extends EventEmitter {
  private atomic: AtomicMediaSource;
  private audio: HTMLAudioElement;

  constructor() {
    super();
    this.atomic = new AtomicMediaSource();

    this.audio = document.createElement("audio");

    this.audio.addEventListener("playing", () => this.emit("speech-start"));
    this.audio.addEventListener("play", () => this.emit("speech-start"));
    this.audio.addEventListener("waiting", () => this.emit("speech-end"));

    this.audio.src = URL.createObjectURL(this.atomic.mediaSource);
    document.body.appendChild(this.audio);
  }

  start() {
    this.audio.play();
  }

  playChunk(audioData: ArrayBuffer) {
    this.atomic.appendBuffer(audioData);
  }

  clear() {
    this.atomic.clearBuffer();
  }
}
