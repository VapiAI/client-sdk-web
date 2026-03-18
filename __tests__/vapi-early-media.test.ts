/**
 * Tests for early getUserMedia acquisition in Vapi.start()
 *
 * Mobile browsers enforce strict "user gesture" policies that only allow
 * a short window (~1-5s) between a user tap and a getUserMedia() call.
 * The SDK must call getUserMedia() BEFORE making any network requests
 * (e.g., the web call creation API call) to stay within that window.
 *
 * VAP-12773: https://linear.app/vapi/issue/VAP-12773
 */

// Track call ordering to verify getUserMedia runs before API call
let callOrder: string[] = [];

// Mock MediaStreamTrack
const mockAudioTrack = {
  kind: 'audio',
  id: 'mock-audio-track-id',
  enabled: true,
  stop: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
} as unknown as MediaStreamTrack;

const mockMediaStream = {
  getAudioTracks: () => [mockAudioTrack],
  getTracks: () => [mockAudioTrack],
} as unknown as MediaStream;

// Mock navigator.mediaDevices.getUserMedia
const mockGetUserMedia = jest.fn().mockImplementation(async () => {
  callOrder.push('getUserMedia');
  return mockMediaStream;
});

// Set up global navigator mock
Object.defineProperty(global, 'navigator', {
  value: {
    mediaDevices: {
      getUserMedia: mockGetUserMedia,
    },
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15',
  },
  writable: true,
  configurable: true,
});

// Set up global document mock for audio player creation
Object.defineProperty(global, 'document', {
  value: {
    createElement: jest.fn().mockReturnValue({
      dataset: {},
      style: { setProperty: jest.fn() },
      play: jest.fn().mockResolvedValue(undefined),
      muted: false,
      autoplay: false,
      srcObject: null,
    }),
    body: {
      appendChild: jest.fn(),
    },
    querySelector: jest.fn().mockReturnValue(null),
  },
  writable: true,
  configurable: true,
});

// Mock Daily.co
const mockDailyCallInstance = {
  join: jest.fn().mockResolvedValue(undefined),
  destroy: jest.fn().mockResolvedValue(undefined),
  iframe: jest.fn().mockReturnValue({
    style: { setProperty: jest.fn() },
  }),
  on: jest.fn(),
  sendAppMessage: jest.fn(),
  setLocalAudio: jest.fn(),
  localAudio: jest.fn().mockReturnValue(true),
  startRecording: jest.fn(),
  stopRecording: jest.fn(),
  startRemoteParticipantsAudioLevelObserver: jest.fn(),
  updateInputSettings: jest.fn(),
  updateParticipant: jest.fn(),
  setInputDevicesAsync: jest.fn().mockResolvedValue(undefined),
};

jest.mock('@daily-co/daily-js', () => ({
  __esModule: true,
  default: {
    createCallObject: jest.fn().mockImplementation((options: any) => {
      callOrder.push('createCallObject');
      return mockDailyCallInstance;
    }),
  },
}));

// Mock the API client
jest.mock('../client', () => ({
  client: {
    baseUrl: 'https://api.vapi.ai',
    setSecurityData: jest.fn(),
    call: {
      callControllerCreateWebCall: jest.fn().mockImplementation(async () => {
        callOrder.push('apiCall');
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 50));
        return {
          data: {
            id: 'test-call-id',
            webCallUrl: 'https://test.daily.co/test-room',
            artifactPlan: { videoRecordingEnabled: false },
            assistant: { voice: { provider: 'default' } },
          },
        };
      }),
    },
  },
}));

import Vapi from '../vapi';
import DailyIframe from '@daily-co/daily-js';

describe('Vapi.start() - Early getUserMedia Acquisition (VAP-12773)', () => {
  let vapi: Vapi;

  beforeEach(() => {
    callOrder = [];
    jest.clearAllMocks();
    vapi = new Vapi('test-token');
  });

  afterEach(async () => {
    try {
      await vapi.stop();
    } catch {
      // Ignore cleanup errors
    }
  });

  it('should call getUserMedia BEFORE the API call to create the web call', async () => {
    await vapi.start('test-assistant-id');

    // Verify getUserMedia was called
    expect(mockGetUserMedia).toHaveBeenCalled();

    // Verify the order: getUserMedia must come before the API call
    const getUserMediaIndex = callOrder.indexOf('getUserMedia');
    const apiCallIndex = callOrder.indexOf('apiCall');

    expect(getUserMediaIndex).not.toBe(-1);
    expect(apiCallIndex).not.toBe(-1);
    expect(getUserMediaIndex).toBeLessThan(apiCallIndex);
  });

  it('should pass the pre-acquired audio track to DailyIframe.createCallObject', async () => {
    await vapi.start('test-assistant-id');

    expect(DailyIframe.createCallObject).toHaveBeenCalledWith(
      expect.objectContaining({
        audioSource: mockAudioTrack,
      }),
    );
  });

  it('should still work when getUserMedia fails (fallback to default behavior)', async () => {
    mockGetUserMedia.mockRejectedValueOnce(new Error('Permission denied'));

    const result = await vapi.start('test-assistant-id');

    // Should still proceed with the call (DailyIframe handles getUserMedia internally as fallback)
    expect(DailyIframe.createCallObject).toHaveBeenCalledWith(
      expect.objectContaining({
        audioSource: true,
      }),
    );
    expect(result).not.toBeNull();
  });

  it('should request audio-only from getUserMedia (not video)', async () => {
    await vapi.start('test-assistant-id');

    expect(mockGetUserMedia).toHaveBeenCalledWith({ audio: true });
  });

  it('should stop pre-acquired tracks on cleanup if call creation fails', async () => {
    // Add error listener to prevent EventEmitter from throwing on 'error' events
    const errorHandler = jest.fn();
    vapi.on('error', errorHandler);

    // Make the API call fail
    const { client } = require('../client');
    client.call.callControllerCreateWebCall.mockRejectedValueOnce(
      new Error('API Error'),
    );

    const result = await vapi.start('test-assistant-id');

    // The call should have failed gracefully
    expect(result).toBeNull();

    // The pre-acquired track should be stopped to free the microphone
    expect(mockAudioTrack.stop).toHaveBeenCalled();

    // Clean up
    vapi.removeListener('error', errorHandler);
  });

  it('should accept a pre-acquired MediaStream in start options', async () => {
    const userProvidedTrack = {
      kind: 'audio',
      id: 'user-provided-track',
      enabled: true,
      stop: jest.fn(),
    } as unknown as MediaStreamTrack;

    const userProvidedStream = {
      getAudioTracks: () => [userProvidedTrack],
      getTracks: () => [userProvidedTrack],
    } as unknown as MediaStream;

    await vapi.start('test-assistant-id', undefined, undefined, undefined, undefined, {
      mediaStream: userProvidedStream,
    });

    // Should NOT call getUserMedia when a stream is provided
    expect(mockGetUserMedia).not.toHaveBeenCalled();

    // Should use the user-provided track
    expect(DailyIframe.createCallObject).toHaveBeenCalledWith(
      expect.objectContaining({
        audioSource: userProvidedTrack,
      }),
    );
  });

  it('should not call getUserMedia when start is called without being in a gesture context but audioSource is already a track', async () => {
    // If the user already configured audioSource as a MediaStreamTrack in the constructor,
    // we should not call getUserMedia again
    const existingTrack = {
      kind: 'audio',
      id: 'existing-track',
      enabled: true,
      stop: jest.fn(),
    } as unknown as MediaStreamTrack;

    const vapiWithTrack = new Vapi('test-token', undefined, undefined, {
      audioSource: existingTrack,
    });

    await vapiWithTrack.start('test-assistant-id');

    // Should NOT call getUserMedia when audioSource is already a track
    expect(mockGetUserMedia).not.toHaveBeenCalled();
  });
});
