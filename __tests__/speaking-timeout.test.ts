import Vapi from "../vapi";

jest.mock("@daily-co/daily-js", () => ({
  __esModule: true,
  default: { createCallObject: () => null },
}));

jest.mock("../client", () => ({
  client: { baseUrl: "", setSecurityData: () => {}, call: {} },
}));

const speaking = { participantsAudioLevel: { assistant: 0.1 } } as any;

describe("speech-end timer", () => {
  let vapi: Vapi;
  let events: string[];

  beforeEach(() => {
    jest.useFakeTimers();
    vapi = new Vapi("dummy_token");
    vapi["call"] = { destroy: jest.fn().mockResolvedValue(undefined) } as any;
    events = [];
    vapi.on("speech-start", () => events.push("speech-start"));
    vapi.on("speech-end", () => events.push("speech-end"));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("emits speech-end once the assistant stops speaking", () => {
    vapi["handleRemoteParticipantsAudioLevel"](speaking);
    jest.advanceTimersByTime(1000);
    expect(events).toEqual(["speech-start", "speech-end"]);
  });

  it("does not fire a stale speech-end into the next call after stop()", async () => {
    vapi["handleRemoteParticipantsAudioLevel"](speaking);
    await vapi.stop();
    events.length = 0;

    // Next call: the assistant starts speaking 500 ms later.
    jest.advanceTimersByTime(500);
    vapi["handleRemoteParticipantsAudioLevel"](speaking);
    jest.advanceTimersByTime(600);

    // The old timer must not end the new call's speech early.
    expect(events).toEqual(["speech-start"]);
    jest.advanceTimersByTime(500);
    expect(events).toEqual(["speech-start", "speech-end"]);
  });

  it("emits speech-end when the call is torn down while the assistant speaks", async () => {
    vapi["handleRemoteParticipantsAudioLevel"](speaking);
    events.length = 0;
    await vapi.stop();
    expect(events).toEqual(["speech-end"]);
    jest.advanceTimersByTime(5000);
    expect(events).toEqual(["speech-end"]);
  });
});
