import Vapi from "../vapi"; // Adjust the import path based on your project structure

// The DailyCall object the mocked daily-js factory hands back. It is read when
// createCallObject() is called, so each test installs its own fake first.
let mockDailyCall: any = null;

jest.mock("@daily-co/daily-js", () => {
  return {
    __esModule: true,
    default: {
      createCallObject: () => {
        return mockDailyCall;
      },
    },
  };
});

jest.mock("../client", () => {
  return {
    client: {
      baseUrl: "",
      setSecurityData: () => {},
      call: {
        callControllerCreateWebCall: () => {
          return Promise.resolve({
            data: {
              id: "call_test",
              webCallUrl: "https://example.daily.co/test",
            },
          });
        },
      },
    },
  };
});

// A DailyCall stand-in with only the members start()/reconnect() touch. The
// registered event handlers are kept so tests can fire Daily's events.
function createMockDailyCall(updateInputSettings: jest.Mock) {
  const handlers: Record<string, (event: any) => void> = {};
  return {
    handlers,
    updateInputSettings,
    on: jest.fn((event: string, handler: (event: any) => void) => {
      handlers[event] = handler;
    }),
    join: jest.fn().mockResolvedValue(undefined),
    destroy: jest.fn().mockResolvedValue(undefined),
    iframe: jest.fn().mockReturnValue(null),
    setLocalAudio: jest.fn(),
    localAudio: jest.fn(),
    startRemoteParticipantsAudioLevelObserver: jest.fn(),
    startLocalAudioLevelObserver: jest.fn(),
  };
}

type RejectionTracker = { handled: boolean };

// Jest runs test code in a vm sandbox that never delivers process-level
// "unhandledRejection" events, so an escaping rejection is asserted at its
// source instead: this wrapper records whether the SDK attaches a rejection
// handler anywhere on the chain it builds from the promise updateInputSettings()
// hands back. Without one, the rejection reaches the page unhandled.
function trackRejectionHandling(
  promise: Promise<unknown>,
  tracker: RejectionTracker
): any {
  return {
    then(onFulfilled?: any, onRejected?: any) {
      if (onRejected) {
        tracker.handled = true;
      }
      return trackRejectionHandling(
        promise.then(onFulfilled, onRejected),
        tracker
      );
    },
    catch(onRejected?: any) {
      tracker.handled = true;
      return trackRejectionHandling(promise.catch(onRejected), tracker);
    },
    finally(onFinally?: any) {
      return trackRejectionHandling(promise.finally(onFinally), tracker);
    },
  };
}

// Let the rejection handlers the SDK attached run before asserting on them.
async function flushRejections() {
  await new Promise((resolve) => {
    setImmediate(resolve);
  });
  await new Promise((resolve) => {
    setImmediate(resolve);
  });
}

describe("Vapi", () => {
  let vapi: Vapi;
  let mockCall: any;

  beforeEach(() => {
    // Mock the DailyCall object
    mockCall = {
      setLocalAudio: jest.fn(),
      localAudio: jest.fn(),
      destroy: jest.fn().mockResolvedValue(undefined),
      startRecording: jest.fn(),
      stopRecording: jest.fn(),
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

  describe("startRecording", () => {
    it("should start a recording", () => {
      vapi.startRecording();
      expect(mockCall.startRecording).toHaveBeenCalled();
    });

    it("should throw when call object is not available", () => {
      vapi["call"] = null; // Simulate call object not being available
      expect(() => vapi.startRecording()).toThrow(
        "Call object is not available."
      );
    });
  });

  describe("stopRecording", () => {
    it("should stop the recording", () => {
      vapi.stopRecording();
      expect(mockCall.stopRecording).toHaveBeenCalled();
    });

    it("should not throw when call object is not available", () => {
      vapi["call"] = null; // Simulate call object not being available
      expect(() => vapi.stopRecording()).not.toThrow();
    });
  });
});

// Daily applies input settings through its remotely loaded call machine, so a
// failure (e.g. Krisp's "KrispInitError: Canceled") arrives as a rejected
// promise. It must not escape to the page as an unhandled rejection, and it must
// stay observable on the SDK's own "error" event.
describe("Vapi audio processing failures", () => {
  const webCall = {
    id: "call_test",
    webCallUrl: "https://example.daily.co/test",
  };
  let tracker: RejectionTracker;
  let errors: any[];

  beforeEach(() => {
    tracker = { handled: false };
    errors = [];
  });

  afterEach(() => {
    mockDailyCall = null;
  });

  it("reports a rejected noise cancellation setup during start()", async () => {
    const updateInputSettings = jest.fn(() => {
      return trackRejectionHandling(
        Promise.reject(new Error("Canceled")),
        tracker
      );
    });
    mockDailyCall = createMockDailyCall(updateInputSettings as jest.Mock);
    const vapi = new Vapi("dummy_token");
    vapi.on("error", (error) => {
      errors.push(error);
    });

    const call = await vapi.start("dummy_assistant_id");
    await flushRejections();

    expect(updateInputSettings).toHaveBeenCalledWith({
      audio: { processor: { type: "noise-cancellation" } },
    });
    // Non-fatal: the call still starts.
    expect(call).not.toBeNull();
    expect(tracker.handled).toBe(true);
    const emitted = errors.find((error) => {
      return error?.type === "audio-processing-setup-error";
    });
    expect(emitted?.error?.message).toBe("Canceled");
  });

  it("reports a rejected processor reset during start()", async () => {
    const updateInputSettings = jest.fn((settings: any) => {
      if (settings?.audio?.processor?.type === "none") {
        return trackRejectionHandling(
          Promise.reject(new Error("Canceled")),
          tracker
        );
      }
      return Promise.resolve();
    });
    mockDailyCall = createMockDailyCall(updateInputSettings as jest.Mock);
    const vapi = new Vapi("dummy_token");
    vapi.on("error", (error) => {
      errors.push(error);
    });

    await vapi.start("dummy_assistant_id");
    mockDailyCall.handlers["nonfatal-error"]({ type: "audio-processor-error" });
    await flushRejections();

    expect(updateInputSettings).toHaveBeenCalledWith({
      audio: { processor: { type: "none" } },
    });
    expect(tracker.handled).toBe(true);
    const emitted = errors.find((error) => {
      return error?.type === "audio-processor-recovery-error";
    });
    expect(emitted?.error?.message).toBe("Canceled");
  });

  it("reports a rejected noise cancellation setup during reconnect()", async () => {
    const updateInputSettings = jest.fn(() => {
      return trackRejectionHandling(
        Promise.reject(new Error("Canceled")),
        tracker
      );
    });
    mockDailyCall = createMockDailyCall(updateInputSettings as jest.Mock);
    const vapi = new Vapi("dummy_token");
    vapi.on("error", (error) => {
      errors.push(error);
    });

    // Non-fatal: reconnect() resolves rather than rethrowing.
    await expect(vapi.reconnect(webCall)).resolves.toBeUndefined();
    await flushRejections();

    expect(updateInputSettings).toHaveBeenCalledWith({
      audio: { processor: { type: "noise-cancellation" } },
    });
    expect(tracker.handled).toBe(true);
    const emitted = errors.find((error) => {
      return error?.type === "audio-processing-setup-error";
    });
    expect(emitted?.error?.message).toBe("Canceled");
  });

  it("reports a rejected processor reset during reconnect()", async () => {
    const updateInputSettings = jest.fn((settings: any) => {
      if (settings?.audio?.processor?.type === "none") {
        return trackRejectionHandling(
          Promise.reject(new Error("Canceled")),
          tracker
        );
      }
      return Promise.resolve();
    });
    mockDailyCall = createMockDailyCall(updateInputSettings as jest.Mock);
    const vapi = new Vapi("dummy_token");
    vapi.on("error", (error) => {
      errors.push(error);
    });

    await vapi.reconnect(webCall);
    mockDailyCall.handlers["nonfatal-error"]({ type: "audio-processor-error" });
    await flushRejections();

    expect(updateInputSettings).toHaveBeenCalledWith({
      audio: { processor: { type: "none" } },
    });
    expect(tracker.handled).toBe(true);
    const emitted = errors.find((error) => {
      return error?.type === "audio-processor-recovery-error";
    });
    expect(emitted?.error?.message).toBe("Canceled");
  });
});

// Daily tears the local audio level observer down on any local track change, and
// its teardown closes the AudioContext that the observer's in-flight
// audioWorklet.addModule() is still loading into. Chrome and Firefox reject that
// load ("AbortError: Unable to load a worklet's module") and Daily responds by
// stopping the observer for the whole call. Enabling noise cancellation swaps the
// microphone track, so starting the observer before that swap loses the race.
// Upstream: https://github.com/daily-co/daily-js/issues/317
describe("Vapi local audio level observer", () => {
  const webCall = {
    id: "call_test",
    webCallUrl: "https://example.daily.co/test",
  };

  // A pending updateInputSettings() stands in for Krisp still initializing, so a
  // test can assert what the SDK does on each side of the track swap.
  function deferredInputSettings() {
    let settle = () => {};
    const pending = new Promise<void>((resolve) => {
      settle = () => resolve();
    });
    return { updateInputSettings: jest.fn(() => pending), settle };
  }

  afterEach(() => {
    mockDailyCall = null;
  });

  it("does not start the observer when nothing listens for local-volume-level", async () => {
    mockDailyCall = createMockDailyCall(jest.fn().mockResolvedValue(undefined));
    const vapi = new Vapi("dummy_token");

    await vapi.start("dummy_assistant_id");
    await flushRejections();

    expect(mockDailyCall.startLocalAudioLevelObserver).not.toHaveBeenCalled();
    // The assistant's level is a separate observer and stays unconditional.
    expect(
      mockDailyCall.startRemoteParticipantsAudioLevelObserver
    ).toHaveBeenCalledWith(100);
  });

  it("starts the observer when a local-volume-level listener is registered", async () => {
    mockDailyCall = createMockDailyCall(jest.fn().mockResolvedValue(undefined));
    const vapi = new Vapi("dummy_token");
    vapi.on("local-volume-level", () => {});

    await vapi.start("dummy_assistant_id");
    await flushRejections();

    expect(mockDailyCall.startLocalAudioLevelObserver).toHaveBeenCalledWith(100);
  });

  it("waits for the noise cancellation processor to settle before starting", async () => {
    const { updateInputSettings, settle } = deferredInputSettings();
    mockDailyCall = createMockDailyCall(updateInputSettings as jest.Mock);
    const vapi = new Vapi("dummy_token");
    vapi.on("local-volume-level", () => {});

    await vapi.start("dummy_assistant_id");
    await flushRejections();

    // Krisp is still initializing: starting now is what loses the race.
    expect(mockDailyCall.startLocalAudioLevelObserver).not.toHaveBeenCalled();

    settle();
    await flushRejections();

    expect(mockDailyCall.startLocalAudioLevelObserver).toHaveBeenCalledWith(100);
  });

  it("starts the observer even when noise cancellation fails", async () => {
    const updateInputSettings = jest.fn(() => {
      return Promise.reject(new Error("Canceled"));
    });
    mockDailyCall = createMockDailyCall(updateInputSettings as jest.Mock);
    const vapi = new Vapi("dummy_token");
    vapi.on("local-volume-level", () => {});
    // EventEmitter rethrows out of emit('error') with no listener registered,
    // which is reported separately from the observer start for that reason.
    vapi.on("error", () => {});

    await vapi.start("dummy_assistant_id");
    await flushRejections();

    expect(mockDailyCall.startLocalAudioLevelObserver).toHaveBeenCalledWith(100);
  });

  it("reports a rejected observer start rather than letting it escape", async () => {
    mockDailyCall = createMockDailyCall(jest.fn().mockResolvedValue(undefined));
    mockDailyCall.startLocalAudioLevelObserver.mockRejectedValue(
      new Error("Unable to load a worklet's module.")
    );
    const vapi = new Vapi("dummy_token");
    vapi.on("local-volume-level", () => {});
    const observerErrors: any[] = [];
    vapi.on("local-audio-level-observer-error", (error) => {
      observerErrors.push(error);
    });

    const call = await vapi.start("dummy_assistant_id");
    await flushRejections();

    // Non-fatal: the call still starts.
    expect(call).not.toBeNull();
    expect(observerErrors[0]?.message).toBe("Unable to load a worklet's module.");
  });

  it("does not start the observer on reconnect() when nothing listens", async () => {
    mockDailyCall = createMockDailyCall(jest.fn().mockResolvedValue(undefined));
    const vapi = new Vapi("dummy_token");

    await vapi.reconnect(webCall);
    await flushRejections();

    expect(mockDailyCall.startLocalAudioLevelObserver).not.toHaveBeenCalled();
  });

  it("waits for the processor to settle on reconnect() too", async () => {
    const { updateInputSettings, settle } = deferredInputSettings();
    mockDailyCall = createMockDailyCall(updateInputSettings as jest.Mock);
    const vapi = new Vapi("dummy_token");
    vapi.on("local-volume-level", () => {});

    await vapi.reconnect(webCall);
    await flushRejections();

    expect(mockDailyCall.startLocalAudioLevelObserver).not.toHaveBeenCalled();

    settle();
    await flushRejections();

    expect(mockDailyCall.startLocalAudioLevelObserver).toHaveBeenCalledWith(100);
  });
});
