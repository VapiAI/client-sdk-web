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
