import Vapi from "../vapi";

let mockDailyCall: any = null;
const mockCreateWebCall = jest.fn();

jest.mock("@daily-co/daily-js", () => {
  return {
    __esModule: true,
    default: {
      createCallObject: () => mockDailyCall,
    },
  };
});

jest.mock("../client", () => {
  return {
    client: {
      baseUrl: "",
      setSecurityData: () => {},
      call: {
        callControllerCreateWebCall: (...args: any[]) =>
          mockCreateWebCall(...args),
      },
    },
  };
});

function createMockDailyCall() {
  return {
    on: jest.fn(),
    once: jest.fn(),
    join: jest.fn().mockResolvedValue(undefined),
    destroy: jest.fn().mockResolvedValue(undefined),
    iframe: jest.fn().mockReturnValue(null),
    setLocalAudio: jest.fn(),
    localAudio: jest.fn(),
    updateInputSettings: jest.fn().mockResolvedValue(undefined),
    startRemoteParticipantsAudioLevelObserver: jest.fn(),
    startLocalAudioLevelObserver: jest.fn(),
  };
}

function deferred<T>() {
  let resolve!: (value: T) => void;
  const promise = new Promise<T>((res) => {
    resolve = res;
  });
  return { promise, resolve };
}

// Lets start() run past the microphone preflight to the web call request.
async function untilWebCallRequested(times = 1) {
  for (let i = 0; i < 100 && mockCreateWebCall.mock.calls.length < times; i++) {
    await Promise.resolve();
  }
  expect(mockCreateWebCall).toHaveBeenCalledTimes(times);
}

const webCallResponse = {
  data: { id: "call_test", webCallUrl: "https://example.daily.co/test" },
};

describe("Vapi stop() while start() is connecting", () => {
  let vapi: Vapi;

  beforeEach(() => {
    mockCreateWebCall.mockReset();
    mockDailyCall = createMockDailyCall();
    const track = { readyState: "live", stop: jest.fn() };
    const stream = { getAudioTracks: () => [track], getTracks: () => [track] };
    Object.defineProperty(globalThis, "navigator", {
      configurable: true,
      value: {
        userAgent: "test",
        mediaDevices: { getUserMedia: jest.fn().mockResolvedValue(stream) },
      },
    });
    vapi = new Vapi("dummy_token");
    vapi.on("error", () => {});
  });

  it("does not join the call when stop() lands while the web call is being created", async () => {
    const pending = deferred<typeof webCallResponse>();
    mockCreateWebCall.mockReturnValue(pending.promise);

    const started = vapi.start("assistant_id");
    await untilWebCallRequested();
    await vapi.stop();
    pending.resolve(webCallResponse);

    await expect(started).resolves.toBeNull();
    expect(mockDailyCall.join).not.toHaveBeenCalled();
    expect(vapi.getDailyCallObject()).toBeNull();
  });

  it("does not report a cancelled start as a failure", async () => {
    const pending = deferred<typeof webCallResponse>();
    mockCreateWebCall.mockReturnValue(pending.promise);
    const failed = jest.fn();
    vapi.on("call-start-failed", failed);
    const success = jest.fn();
    vapi.on("call-start-success", success);

    const started = vapi.start("assistant_id");
    await untilWebCallRequested();
    await vapi.stop();
    pending.resolve(webCallResponse);
    await started;

    expect(failed).not.toHaveBeenCalled();
    expect(success).not.toHaveBeenCalled();
  });

  it("does not connect a cancelled start after a new start() has begun", async () => {
    const first = deferred<typeof webCallResponse>();
    const secondCall = createMockDailyCall();
    mockCreateWebCall
      .mockReturnValueOnce(first.promise)
      .mockResolvedValueOnce(webCallResponse);

    const firstStart = vapi.start("assistant_id");
    await untilWebCallRequested();
    await vapi.stop();
    mockDailyCall = secondCall;
    await vapi.start("assistant_id");
    first.resolve(webCallResponse);

    await expect(firstStart).resolves.toBeNull();
    expect(secondCall.join).toHaveBeenCalledTimes(1);
    expect(secondCall.destroy).not.toHaveBeenCalled();
    expect(vapi.getDailyCallObject()).toBe(secondCall);
  });

  it("does not report a failure when stop() destroys the call while join() is pending", async () => {
    const join = deferred<void>();
    mockDailyCall.join.mockReturnValue(join.promise);
    mockCreateWebCall.mockResolvedValue(webCallResponse);
    const failed = jest.fn();
    vapi.on("call-start-failed", failed);
    const success = jest.fn();
    vapi.on("call-start-success", success);

    const started = vapi.start("assistant_id");
    await new Promise((resolve) => setImmediate(resolve));
    expect(mockDailyCall.join).toHaveBeenCalledTimes(1);
    await vapi.stop();
    join.resolve();

    await expect(started).resolves.toBeNull();
    expect(failed).not.toHaveBeenCalled();
    expect(success).not.toHaveBeenCalled();
    expect(vapi.getDailyCallObject()).toBeNull();
  });

  it("does not join when stop() lands during the mobile permission wait", async () => {
    jest.spyOn(vapi as any, "isMobileDevice").mockReturnValue(true);
    jest.useFakeTimers();
    try {
      mockCreateWebCall.mockResolvedValue(webCallResponse);
      const failed = jest.fn();
      vapi.on("call-start-failed", failed);

      const started = vapi.start("assistant_id");
      await jest.advanceTimersByTimeAsync(0);
      await vapi.stop();
      await jest.advanceTimersByTimeAsync(1000);

      await expect(started).resolves.toBeNull();
      expect(mockDailyCall.join).not.toHaveBeenCalled();
      expect(failed).not.toHaveBeenCalled();
    } finally {
      jest.useRealTimers();
    }
  });
});
