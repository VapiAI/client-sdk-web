import Vapi from "../vapi";

/**
 * Covers the track-started path that feeds getAudioPlayer/setVolume, which is
 * where the lifecycle bugs live. The two functions that actually touch the DOM
 * are substituted, so this runs in the repo's existing node environment with no
 * extra dependency. What is deliberately not covered here: the DOM calls
 * themselves, and the fact that volume is applied before play() is invoked.
 */

type FakePlayer = HTMLAudioElement & { removed: boolean };

const fakePlayer = (participantId: string): FakePlayer => {
  const player = {
    volume: 1,
    dataset: { participantId },
    removed: false,
    remove() {
      this.removed = true;
    },
  };
  return player as unknown as FakePlayer;
};

const trackStartedEvent = (
  kind: "audio" | "video" = "audio",
  sessionId = "bot-1",
) =>
  ({
    action: "track-started",
    type: kind,
    callClientId: "test-client",
    participant: {
      local: false,
      user_name: "Vapi Speaker",
      session_id: sessionId,
    },
    track: { kind },
  }) as unknown as Parameters<Vapi["handleTrackStarted"]>[0];

describe("assistant audio player", () => {
  let vapi: Vapi;
  let mockCall: any;
  let built: FakePlayer[];
  let destroyed: string[];
  /** Resolvers for in-flight builds, so tests can settle them out of order. */
  let releases: Array<(player: FakePlayer) => void>;
  let autoRelease: boolean;
  /** Volume argument each build was handed, so the normalizing is observable. */
  let builtWithVolume: Array<number | null | undefined>;

  beforeEach(() => {
    built = [];
    destroyed = [];
    releases = [];
    builtWithVolume = [];
    autoRelease = true;

    mockCall = {
      setLocalAudio: jest.fn(),
      localAudio: jest.fn(),
      sendAppMessage: jest.fn(),
      destroy: jest.fn().mockResolvedValue(undefined),
    };
    vapi = new Vapi("dummy_token");
    vapi["call"] = mockCall;

    vapi["audioPlayerBuild"] = ((
      _track: MediaStreamTrack,
      participantId: string,
      volume?: number | null,
    ) => {
      const player = fakePlayer(participantId);
      built.push(player);
      builtWithVolume.push(volume);
      if (typeof volume === "number") player.volume = volume;
      if (autoRelease) return Promise.resolve(player);
      return new Promise<FakePlayer>((resolve) => {
        releases.push(resolve);
      });
    }) as typeof vapi["audioPlayerBuild"];

    vapi["audioPlayerDestroy"] = ((participantId: string) => {
      destroyed.push(participantId);
    }) as typeof vapi["audioPlayerDestroy"];
  });

  it("attaches the player when the assistant's track starts", async () => {
    await vapi["handleTrackStarted"](trackStartedEvent());

    expect(vapi.getAudioPlayer()).toBe(built[0]);
    expect(mockCall.sendAppMessage).toHaveBeenCalledWith("playable");
  });

  it("ignores the local participant's own track", async () => {
    const event = trackStartedEvent();
    (event as any).participant.local = true;

    await vapi["handleTrackStarted"](event);

    expect(vapi.getAudioPlayer()).toBeNull();
    expect(built).toHaveLength(0);
  });

  it("ignores tracks from participants that are not the assistant", async () => {
    const event = trackStartedEvent();
    (event as any).participant.user_name = "Someone Else";

    await vapi["handleTrackStarted"](event);

    expect(vapi.getAudioPlayer()).toBeNull();
  });

  describe("a consumer listener that throws", () => {
    // playable is signalled on the same path, one statement after the emit.
    it("does not stop playable being signalled from the audio emit", async () => {
      const reported = jest
        .spyOn(console, "error")
        .mockImplementation(() => {});
      vapi.on("audio", () => {
        throw new Error("consumer bug");
      });

      await vapi["handleTrackStarted"](trackStartedEvent());

      expect(mockCall.sendAppMessage).toHaveBeenCalledWith("playable");
      expect(reported).toHaveBeenCalled();
      reported.mockRestore();
    });

    it("does not stop playable being signalled from the video emit", async () => {
      const reported = jest
        .spyOn(console, "error")
        .mockImplementation(() => {});
      vapi.on("video", () => {
        throw new Error("consumer bug");
      });

      await vapi["handleTrackStarted"](trackStartedEvent("video"));

      expect(mockCall.sendAppMessage).toHaveBeenCalledWith("playable");
      expect(reported).toHaveBeenCalled();
      reported.mockRestore();
    });
  });

  describe("builds that outlive what they were built for", () => {
    beforeEach(() => {
      autoRelease = false;
    });

    it("discards a player built for a call that has ended", async () => {
      const inFlight = vapi["handleTrackStarted"](trackStartedEvent());
      await vapi.stop();
      releases[0](built[0]);
      await inFlight;

      expect(vapi.getAudioPlayer()).toBeNull();
      expect(built[0].removed).toBe(true);
    });

    // Isolates the call-identity check: the call object is swapped without
    // going through stop(), so the pending-build bookkeeping is untouched and
    // only the identity comparison can catch this.
    it("discards a player built for a call that was replaced", async () => {
      const inFlight = vapi["handleTrackStarted"](trackStartedEvent());
      vapi["call"] = { ...mockCall, sendAppMessage: jest.fn() };
      releases[0](built[0]);
      await inFlight;

      expect(vapi.getAudioPlayer()).toBeNull();
      expect(built[0].removed).toBe(true);
    });

    it("discards a player whose participant left while it was building", async () => {
      const inFlight = vapi["handleTrackStarted"](trackStartedEvent());
      vapi["detachAudioPlayer"]("bot-1");
      releases[0](built[0]);
      await inFlight;

      expect(vapi.getAudioPlayer()).toBeNull();
      expect(built[0].removed).toBe(true);
    });

    // Scoped to the departing participant: anyone else leaving must not cost
    // us the assistant's audio.
    it("keeps a player when an unrelated participant leaves", async () => {
      const inFlight = vapi["handleTrackStarted"](trackStartedEvent());
      vapi["detachAudioPlayer"]("some-other-participant");
      releases[0](built[0]);
      await inFlight;

      expect(vapi.getAudioPlayer()).toBe(built[0]);
      expect(mockCall.sendAppMessage).toHaveBeenCalledWith("playable");
    });

    // Two builds settle independently, so the second can finish first.
    it("does not let an earlier build overwrite a later one", async () => {
      const first = vapi["handleTrackStarted"](trackStartedEvent());
      const second = vapi["handleTrackStarted"](trackStartedEvent());
      releases[1](built[1]);
      releases[0](built[0]);
      await Promise.all([first, second]);

      expect(vapi.getAudioPlayer()).toBe(built[1]);
      expect(built[0].removed).toBe(true);
      expect(built[1].removed).toBe(false);
    });

    it("forgets builds still in flight when the call is stopped", async () => {
      const inFlight = vapi["handleTrackStarted"](trackStartedEvent());
      expect(vapi["pendingAudioBuilds"].size).toBe(1);

      await vapi.stop();

      expect(vapi["pendingAudioBuilds"].size).toBe(0);
      releases[0](built[0]);
      await inFlight;
    });
  });

  it("removes the element it supersedes when the track is renegotiated", async () => {
    await vapi["handleTrackStarted"](trackStartedEvent());
    await vapi["handleTrackStarted"](trackStartedEvent());

    expect(vapi.getAudioPlayer()).toBe(built[1]);
    expect(built[0].removed).toBe(true);
    expect(built[1].removed).toBe(false);
  });

  describe("when playback fails to start", () => {
    // Not a real DOMException: jest's node environment supplies it from the
    // parent realm, so `instanceof Error` is false and serializeError would
    // take a branch it never takes in a browser. An in-realm Error with the
    // same `name` is the faithful stand-in.
    const autoplayBlocked = () => {
      const error = new Error(
        "play() failed because the user didn't interact with the document first.",
      );
      error.name = "NotAllowedError";
      return error;
    };

    beforeEach(() => {
      vapi["audioPlayerBuild"] = (() =>
        Promise.reject(autoplayBlocked())) as typeof vapi["audioPlayerBuild"];
    });

    it("reports rather than leaving an unhandled rejection", async () => {
      const reported = jest
        .spyOn(console, "error")
        .mockImplementation(() => {});

      await expect(
        vapi["handleTrackStarted"](trackStartedEvent()),
      ).resolves.toBeUndefined();

      expect(reported).toHaveBeenCalled();
      expect(vapi.getAudioPlayer()).toBeNull();
      reported.mockRestore();
    });

    it("emits a serialized error consumers can act on", async () => {
      jest.spyOn(console, "error").mockImplementation(() => {});
      const errors: any[] = [];
      vapi.on("error", (e) => errors.push(e));

      await vapi["handleTrackStarted"](trackStartedEvent());

      expect(errors).toHaveLength(1);
      expect(errors[0].type).toBe("audio-start-failed");
      expect(errors[0].error.name).toBe("NotAllowedError");
      // Serialized, not the raw exception: consumers forward this to loggers
      // and workers, and Error properties are not enumerable.
      expect(errors[0].error).not.toBeInstanceOf(Error);
      expect(JSON.parse(JSON.stringify(errors[0].error)).name).toBe(
        "NotAllowedError",
      );
      jest.restoreAllMocks();
    });

    it("does not throw with no error listener attached", async () => {
      const reported = jest
        .spyOn(console, "error")
        .mockImplementation(() => {});

      await expect(
        vapi["handleTrackStarted"](trackStartedEvent()),
      ).resolves.toBeUndefined();

      expect(reported).toHaveBeenCalled();
      reported.mockRestore();
    });

    it("forgets the failed build", async () => {
      jest.spyOn(console, "error").mockImplementation(() => {});

      await vapi["handleTrackStarted"](trackStartedEvent());

      expect(vapi["pendingAudioBuilds"].size).toBe(0);
      jest.restoreAllMocks();
    });
  });

  describe("teardown", () => {
    it("drops the reference and destroys the element when the assistant leaves", async () => {
      await vapi["handleTrackStarted"](trackStartedEvent());

      vapi["detachAudioPlayer"]("bot-1");

      expect(vapi.getAudioPlayer()).toBeNull();
      expect(destroyed).toContain("bot-1");
    });

    it("keeps the reference when a different participant leaves", async () => {
      await vapi["handleTrackStarted"](trackStartedEvent());

      vapi["detachAudioPlayer"]("someone-else");

      expect(vapi.getAudioPlayer()).toBe(built[0]);
    });

    it("clears the reference on cleanup, not just on stop", async () => {
      await vapi["handleTrackStarted"](trackStartedEvent());

      await vapi["cleanup"]();

      expect(vapi.getAudioPlayer()).toBeNull();
    });
  });

  describe("volume", () => {
    it("applies a volume chosen before the track arrived", async () => {
      vapi.setVolume(0.2);

      await vapi["handleTrackStarted"](trackStartedEvent());

      expect(vapi.getAudioPlayer()?.volume).toBe(0.2);
    });

    it("keeps the chosen volume across calls", async () => {
      await vapi["handleTrackStarted"](trackStartedEvent());
      vapi.setVolume(0.1);
      await vapi.stop();

      vapi["call"] = mockCall;
      await vapi["handleTrackStarted"](trackStartedEvent("audio", "bot-2"));

      expect(vapi.getAudioPlayer()?.volume).toBe(0.1);
    });

    it("keeps the chosen volume when the track is replaced mid-call", async () => {
      await vapi["handleTrackStarted"](trackStartedEvent());
      vapi.setVolume(0.3);

      await vapi["handleTrackStarted"](trackStartedEvent("audio", "bot-2"));

      expect(vapi.getAudioPlayer()?.volume).toBe(0.3);
    });

    it("defaults to full volume when the caller never set one", async () => {
      await vapi["handleTrackStarted"](trackStartedEvent());

      expect(vapi.getAudioPlayer()?.volume).toBe(1);
    });

    it("hands the build an already-clamped volume", async () => {
      vapi["desiredVolume"] = 5;

      await vapi["handleTrackStarted"](trackStartedEvent());

      expect(builtWithVolume).toEqual([1]);
    });

    it("hands the build nothing when the remembered volume is non-finite", async () => {
      vapi["desiredVolume"] = NaN;

      await vapi["handleTrackStarted"](trackStartedEvent());

      expect(builtWithVolume).toEqual([null]);
    });

    // The build is handed the volume as it was when the build started. If the
    // caller changes it while play() is still pending, only the reapply at
    // attach time catches that.
    it("applies a volume changed while the player was still building", async () => {
      autoRelease = false;
      vapi.setVolume(0.2);
      const inFlight = vapi["handleTrackStarted"](trackStartedEvent());

      vapi.setVolume(0.7);
      releases[0](built[0]);
      await inFlight;

      expect(builtWithVolume).toEqual([0.2]);
      expect(vapi.getAudioPlayer()?.volume).toBe(0.7);
    });

    it("hands the build the chosen volume", async () => {
      vapi.setVolume(0.35);

      await vapi["handleTrackStarted"](trackStartedEvent());

      expect(builtWithVolume).toEqual([0.35]);
    });

    // setVolume validates, so these guard the field being written directly.
    it("ignores a non-finite remembered volume", async () => {
      vapi["desiredVolume"] = NaN;

      await vapi["handleTrackStarted"](trackStartedEvent());

      expect(vapi.getAudioPlayer()?.volume).toBe(1);
    });

    it("clamps an out-of-range remembered volume", async () => {
      vapi["desiredVolume"] = 5;

      await vapi["handleTrackStarted"](trackStartedEvent());

      expect(vapi.getAudioPlayer()?.volume).toBe(1);
    });
  });
});
