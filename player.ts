import AtomicMediaSource from "./AtomicMediaSource";
import EventEmitter from "events";

export class ContinuousPlayer extends EventEmitter {
  private audioCtx: AudioContext;
  private source: AudioBufferSourceNode | null = null;

  constructor() {
    super();

    this.audioCtx = new AudioContext();
  }

  start() {}

  async playChunk(audioData: ArrayBuffer) {
    const audioBuffer = await this.audioCtx.decodeAudioData(audioData);
    this.source = this.audioCtx.createBufferSource();
    this.source.buffer = audioBuffer;
    this.source.connect(this.audioCtx.destination);
    this.source.start();
    this.emit("speech-start");
    this.source.onended = () => this.emit("speech-end");
  }

  clear() {}
}
