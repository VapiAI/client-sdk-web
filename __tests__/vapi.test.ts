import Vapi from "../vapi"; // Adjust the import path based on your project structure

describe("Vapi", () => {
  let vapi: Vapi;
  let mockCall: any;

  beforeEach(() => {
    // Mock the DailyCall object
    mockCall = {
      setLocalAudio: jest.fn(),
      localAudio: jest.fn(),
      destroy: jest.fn().mockResolvedValue(undefined),
    };
    // Initialize Vapi instance and inject the mock
    vapi = new Vapi("dummy_token");
    vapi["call"] = mockCall; // Assuming you have a way to set this for testing
  });

  describe("setMuted", () => {
    it("should mute the audio", () => {
      vapi["setMuted"](true);
      expect(mockCall.setLocalAudio).toHaveBeenCalledWith(false);
    });

    it("should unmute the audio", () => {
      vapi["setMuted"](false);
      expect(mockCall.setLocalAudio).toHaveBeenCalledWith(true);
    });

    it("should handle errors when call object is not available", () => {
      vapi["call"] = null; // Simulate call object not being available
      expect(() => vapi["setMuted"](true)).toThrow(
        "Call object is not available."
      );
    });
  });

  describe("isMuted", () => {
    it("should return false if false", () => {
      mockCall.localAudio.mockReturnValue(false); // Initially not muted
      const res = vapi.isMuted();
      expect(res).toBe(true);
    });

    it("should return true if true", () => {
      mockCall.localAudio.mockReturnValue(true); // Initially not muted
      const res = vapi.isMuted();
      expect(res).toBe(false);
    });

    it("should return false if no call in progress", () => {
      vapi["call"] = null; // Simulate call object not being available
      const res = vapi.isMuted();
      expect(res).toBe(false);
    });
  });

  describe("audio player access", () => {
    // The real element is built by buildAudioPlayer, which needs a DOM. These
    // tests cover everything downstream of that, which is where the reference
    // is kept, handed out, and dropped.
    const fakePlayer = () => ({ volume: 1 }) as HTMLAudioElement;

    it("should return null before any audio track has arrived", () => {
      expect(vapi.getAudioPlayer()).toBeNull();
    });

    it("should return the player once an audio track has arrived", () => {
      const player = fakePlayer();
      vapi["attachAudioPlayer"](player);
      expect(vapi.getAudioPlayer()).toBe(player);
    });

    it("should emit the player on the audio event", () => {
      const player = fakePlayer();
      const listener = jest.fn();
      vapi.on("audio", listener);

      vapi["attachAudioPlayer"](player);

      expect(listener).toHaveBeenCalledWith(player);
    });

    it("should store the player before emitting, so listeners can use it", () => {
      const player = fakePlayer();
      let seenDuringEvent: HTMLAudioElement | null = null;
      vapi.on("audio", () => {
        seenDuringEvent = vapi.getAudioPlayer();
      });

      vapi["attachAudioPlayer"](player);

      expect(seenDuringEvent).toBe(player);
    });
  });

  describe("setVolume", () => {
    it("should set the volume on the attached player", () => {
      const player = { volume: 1 } as HTMLAudioElement;
      vapi["attachAudioPlayer"](player);

      vapi.setVolume(0.25);

      expect(player.volume).toBe(0.25);
    });

    it("should do nothing when no audio track has arrived", () => {
      expect(() => vapi.setVolume(0.5)).not.toThrow();
    });

    // The DOM throws IndexSizeError outside 0-1, so clamp rather than hand
    // callers a browser exception from a setter.
    it("should clamp values above 1", () => {
      const player = { volume: 0.5 } as HTMLAudioElement;
      vapi["attachAudioPlayer"](player);

      vapi.setVolume(1.5);

      expect(player.volume).toBe(1);
    });

    it("should clamp values below 0", () => {
      const player = { volume: 0.5 } as HTMLAudioElement;
      vapi["attachAudioPlayer"](player);

      vapi.setVolume(-2);

      expect(player.volume).toBe(0);
    });

    // Clamping alone lets NaN through, and the DOM rejects a non-finite volume
    // with a TypeError. Untyped callers reach this via parseFloat("") and friends.
    it("should ignore NaN rather than writing it to the player", () => {
      const player = { volume: 0.5 } as HTMLAudioElement;
      vapi["attachAudioPlayer"](player);

      vapi.setVolume(NaN);

      expect(player.volume).toBe(0.5);
    });

    it("should ignore undefined from untyped callers", () => {
      const player = { volume: 0.5 } as HTMLAudioElement;
      vapi["attachAudioPlayer"](player);

      vapi.setVolume(undefined as unknown as number);

      expect(player.volume).toBe(0.5);
    });

    it("should not write to the player from a previous call after stop", async () => {
      const player = { volume: 1 } as HTMLAudioElement;
      vapi["attachAudioPlayer"](player);

      await vapi.stop();
      vapi.setVolume(0.25);

      expect(player.volume).toBe(1);
      expect(vapi.getAudioPlayer()).toBeNull();
    });
  });
});
