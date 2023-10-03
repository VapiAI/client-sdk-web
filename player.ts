import { QueueObject, queue } from "async"; // You need to install the async package

import EventEmitter from "events";

export class ContinuousPlayer extends EventEmitter {
  private audioCtx: AudioContext;
  private nextStartTime: number;
  private audioQueue: QueueObject<Promise<AudioBuffer>>;
  private crossFadeDuration: number; // Duration of the crossfade

  constructor(crossFadeDuration = 0.5) {
    super();
    this.audioCtx = new AudioContext();
    this.nextStartTime = 0;
    this.audioQueue = this.createQueue();
    this.crossFadeDuration = crossFadeDuration;
  }

  private createQueue() {
    const q = queue(
      async (audioPromise: Promise<AudioBuffer>, callback: Function) => {
        const audioBuffer = await audioPromise;
        const source = this.audioCtx.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(this.audioCtx.destination);

        // Create a gain node for crossfading
        const gainNode = this.audioCtx.createGain();
        source.connect(gainNode);
        gainNode.connect(this.audioCtx.destination);

        // Start the source at the next start time
        source.start(this.nextStartTime);

        // Schedule the crossfade
        gainNode.gain.setValueAtTime(0, this.nextStartTime);
        gainNode.gain.linearRampToValueAtTime(
          1,
          this.nextStartTime + this.crossFadeDuration
        );
        gainNode.gain.setValueAtTime(
          1,
          this.nextStartTime + audioBuffer.duration - this.crossFadeDuration
        );
        gainNode.gain.linearRampToValueAtTime(
          0,
          this.nextStartTime + audioBuffer.duration
        );

        source.onended = () => {
          this.nextStartTime += audioBuffer.duration;
          callback();
        };
      },
      1
    );

    q.drain(() => {
      this.emit("speech-end");
    });
    q.saturated(() => {
      this.emit("speech-start");
    });

    return q;
  }

  playChunk(audioData: ArrayBuffer) {
    const decodePromise = this.audioCtx.decodeAudioData(audioData);
    this.audioQueue.push(decodePromise);
  }

  async clear() {
    this.audioQueue.kill();
    this.audioQueue = this.createQueue();
    this.nextStartTime = 0;
  }
}
