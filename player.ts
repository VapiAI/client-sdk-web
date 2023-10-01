class ContinuousPlayer {
  private audioCtx: AudioContext;
  private nextStartTime: number;
  private isInitialized: boolean;

  constructor() {
    this.audioCtx = new AudioContext();
    this.nextStartTime = 0;
    this.isInitialized = false;
  }

  async playChunk(audioData: ArrayBuffer) {
    // Initialize on first chunk
    if (!this.isInitialized) {
      this.nextStartTime = this.audioCtx.currentTime;
      this.isInitialized = true;
    }

    // Decode the audio data
    const audioBuffer = await this.audioCtx.decodeAudioData(audioData);

    // Create a new buffer source for the decoded data
    const source = this.audioCtx.createBufferSource();
    source.buffer = audioBuffer;

    // Connect to the destination
    source.connect(this.audioCtx.destination);

    // Schedule it to play immediately after the last chunk
    source.start(this.nextStartTime);

    // Update the next start time
    this.nextStartTime += audioBuffer.duration;
  }
}
