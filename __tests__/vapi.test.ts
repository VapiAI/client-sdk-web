import Vapi from "../vapi"; // Adjust the import path based on your project structure

describe("Vapi", () => {
  let vapi: Vapi;
  let mockCall: any;

  beforeEach(() => {
    // Mock the DailyCall object
    mockCall = {
      setLocalAudio: jest.fn(),
      localAudio: jest.fn(),
      getLocalAudioLevel: jest.fn(),
      startLocalAudioLevelObserver: jest.fn().mockResolvedValue(undefined),
      stopLocalAudioLevelObserver: jest.fn(),
      isLocalAudioLevelObserverRunning: jest.fn(),
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

  describe("local audio level", () => {
    it("emits 'local-volume-level' with the audio level from Daily", () => {
      const listener = jest.fn();
      vapi.on("local-volume-level", listener);

      vapi["handleLocalAudioLevel"]({
        action: "local-audio-level",
        audioLevel: 0.42,
      } as any);

      expect(listener).toHaveBeenCalledWith(0.42);
    });

    it("getLocalAudioLevel returns the value from the call object", () => {
      mockCall.getLocalAudioLevel.mockReturnValue(0.7);
      expect(vapi.getLocalAudioLevel()).toBe(0.7);
    });

    it("getLocalAudioLevel returns 0 when there is no active call", () => {
      vapi["call"] = null;
      expect(vapi.getLocalAudioLevel()).toBe(0);
    });

    it("startLocalAudioLevelObserver forwards the interval to the call object", async () => {
      await vapi.startLocalAudioLevelObserver(250);
      expect(mockCall.startLocalAudioLevelObserver).toHaveBeenCalledWith(250);
    });

    it("startLocalAudioLevelObserver throws when there is no active call", async () => {
      vapi["call"] = null;
      await expect(vapi.startLocalAudioLevelObserver()).rejects.toThrow(
        "Call object is not available."
      );
    });

    it("stopLocalAudioLevelObserver delegates to the call object", () => {
      vapi.stopLocalAudioLevelObserver();
      expect(mockCall.stopLocalAudioLevelObserver).toHaveBeenCalled();
    });

    it("isLocalAudioLevelObserverRunning reflects the call object state", () => {
      mockCall.isLocalAudioLevelObserverRunning.mockReturnValue(true);
      expect(vapi.isLocalAudioLevelObserverRunning()).toBe(true);
    });

    it("isLocalAudioLevelObserverRunning returns false when there is no active call", () => {
      vapi["call"] = null;
      expect(vapi.isLocalAudioLevelObserverRunning()).toBe(false);
    });
  });
});
