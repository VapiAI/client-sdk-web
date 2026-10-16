import Vapi from "../vapi";

let mockDailyCall: any = null;

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
      call: {},
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
    setInputDevicesAsync: jest.fn().mockResolvedValue(undefined),
    updateInputSettings: jest.fn().mockResolvedValue(undefined),
    startRemoteParticipantsAudioLevelObserver: jest.fn(),
    startLocalAudioLevelObserver: jest.fn(),
  };
}

const webCall = {
  id: "call_test",
  webCallUrl: "https://example.daily.co/test",
} as any;

// Records every microphone stream and audio context the SDK opens, so the test
// can check that each one is released.
const streams: { track: { stop: jest.Mock } }[] = [];
const contexts: { close: jest.Mock }[] = [];

function installWebAudioFakes() {
  Object.defineProperty(globalThis, "navigator", {
    configurable: true,
    value: {
      userAgent: "node",
      mediaDevices: {
        getUserMedia: jest.fn(async () => {
          const track = { stop: jest.fn() };
          const stream = { getTracks: () => [track], track };
          streams.push(stream);
          return stream;
        }),
      },
    },
  });
  (globalThis as any).AudioContext = class {
    close = jest.fn().mockResolvedValue(undefined);
    constructor() {
      contexts.push(this);
    }
    createMediaStreamSource() {
      return { connect: jest.fn() };
    }
    createGain() {
      return { gain: { value: 1 }, connect: jest.fn() };
    }
    createMediaStreamDestination() {
      return { stream: { getAudioTracks: () => [{}] } };
    }
  };
}

describe("Vapi increaseMicLevel()", () => {
  let vapi: Vapi;

  beforeEach(async () => {
    streams.length = 0;
    contexts.length = 0;
    installWebAudioFakes();
    mockDailyCall = createMockDailyCall();
    vapi = new Vapi("dummy_token");
    vapi.on("error", () => {});
    await vapi.reconnect(webCall);
  });

  it("releases the previous microphone stream and audio context when called again", async () => {
    await vapi.increaseMicLevel(2);
    await vapi.increaseMicLevel(3);

    expect(streams).toHaveLength(2);
    expect(streams[0].track.stop).toHaveBeenCalledTimes(1);
    expect(contexts[0].close).toHaveBeenCalledTimes(1);
    expect(streams[1].track.stop).not.toHaveBeenCalled();
    expect(contexts[1].close).not.toHaveBeenCalled();
  });

  it("releases the microphone stream and audio context when the call stops", async () => {
    await vapi.increaseMicLevel(2);
    await vapi.stop();

    expect(streams[0].track.stop).toHaveBeenCalledTimes(1);
    expect(contexts[0].close).toHaveBeenCalledTimes(1);
  });

  it("releases the microphone stream and audio context when the call is torn down while the boost is being set up", async () => {
    let release!: () => void;
    mockDailyCall.setInputDevicesAsync.mockReturnValue(
      new Promise<void>((resolve) => {
        release = resolve;
      }),
    );

    const boosting = vapi.increaseMicLevel(2);
    await new Promise((resolve) => setImmediate(resolve));
    await vapi.stop();
    release();
    await boosting;

    expect(streams[0].track.stop).toHaveBeenCalledTimes(1);
    expect(contexts[0].close).toHaveBeenCalledTimes(1);
  });

  it("releases the microphone stream and audio context when setting the input fails", async () => {
    mockDailyCall.setInputDevicesAsync.mockRejectedValue(new Error("boom"));
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});

    await vapi.increaseMicLevel(2);
    spy.mockRestore();

    expect(streams[0].track.stop).toHaveBeenCalledTimes(1);
    expect(contexts[0].close).toHaveBeenCalledTimes(1);
  });
});
