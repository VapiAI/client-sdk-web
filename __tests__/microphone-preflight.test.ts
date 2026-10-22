import Vapi from '../vapi';
import { client } from '../client';
import Daily from '@daily-co/daily-js';

jest.mock('@daily-co/daily-js', () => ({ __esModule: true, default: { createCallObject: jest.fn() } }));
jest.mock('../client', () => ({ client: { setSecurityData: jest.fn(), call: { callControllerCreateWebCall: jest.fn() } } }));

describe('microphone preflight', () => {
  let gum: jest.Mock;
  let track: any;
  let daily: any;
  let vapi: Vapi;
  let errors: any[];
  let failures: any[];
  const api = client.call.callControllerCreateWebCall as jest.Mock;
  beforeEach(() => {
    jest.clearAllMocks();
    track = { readyState: 'live', stop: jest.fn() };
    gum = jest.fn().mockResolvedValue({ getAudioTracks: () => [track], getTracks: () => [track] });
    Object.defineProperty(globalThis, 'navigator', { configurable: true, value: { userAgent: 'test', mediaDevices: { getUserMedia: gum } } });
    daily = { iframe: () => null, on: jest.fn(), join: jest.fn().mockResolvedValue(undefined), destroy: jest.fn().mockResolvedValue(undefined), startRemoteParticipantsAudioLevelObserver: jest.fn(), updateInputSettings: jest.fn().mockResolvedValue(undefined) };
    (Daily.createCallObject as jest.Mock).mockReturnValue(daily);
    api.mockResolvedValue({ data: { id: 'test', webCallUrl: 'https://test.daily.co/test' } });
    vapi = new Vapi('test');
    errors = []; failures = [];
    vapi.on('error', event => errors.push(event));
    vapi.on('call-start-failed', event => failures.push(event));
  });

  it('waits for access and reuses the acquired track', async () => {
    let grant!: (value: any) => void;
    gum.mockReturnValue(new Promise(resolve => { grant = resolve; }));
    const start = vapi.start('assistant');
    expect(api).not.toHaveBeenCalled();
    grant({ getAudioTracks: () => [track], getTracks: () => [track] });
    expect(await start).not.toBeNull();
    expect(gum).toHaveBeenCalledWith({ audio: true });
    expect(Daily.createCallObject).toHaveBeenCalledWith(expect.objectContaining({ audioSource: track }));
    await vapi.stop();
    expect(track.stop).toHaveBeenCalled();
  });

  it.each(['NotAllowedError', 'NotFoundError', 'NotReadableError'])('does not create a call on %s', async name => {
    gum.mockRejectedValue(new DOMException('microphone unavailable', name));
    expect(await vapi.start('assistant')).toBeNull();
    expect(api).not.toHaveBeenCalled();
    expect(errors[0].type).toBe(`microphone-preflight-${name}`);
    expect(failures[0].stage).toBe('microphone-preflight');
  });

  it('rejects an empty stream', async () => {
    gum.mockResolvedValue({ getAudioTracks: () => [], getTracks: () => [] });
    expect(await vapi.start('assistant')).toBeNull();
    expect(api).not.toHaveBeenCalled();
  });

  it.each(['api', 'join'])('stops the track on %s failure', async stage => {
    if (stage === 'api') api.mockRejectedValue(new Error('API failed'));
    else daily.join.mockRejectedValue(new Error('join failed'));
    expect(await vapi.start('assistant')).toBeNull();
    expect(track.stop).toHaveBeenCalled();
  });

  it('cancels a pending prompt and stops a late track without creating a call', async () => {
    let grant!: (value: any) => void;
    gum.mockReturnValue(new Promise(resolve => { grant = resolve; }));
    const start = vapi.start('assistant');
    expect(await vapi.start('assistant')).toBeNull();
    await vapi.stop();
    expect(await start).toBeNull();
    grant({ getAudioTracks: () => [track], getTracks: () => [track] });
    await Promise.resolve();
    expect(track.stop).toHaveBeenCalled();
    expect(api).not.toHaveBeenCalled();
    gum.mockResolvedValue({ getAudioTracks: () => [track], getTracks: () => [track] });
    expect(await vapi.start('assistant')).not.toBeNull();
    await vapi.stop();
  });

  it('supports opting out', async () => {
    expect(await vapi.start('assistant', undefined, undefined, undefined, undefined, { microphonePreflightEnabled: false })).not.toBeNull();
    expect(gum).not.toHaveBeenCalled();
    await vapi.stop();
  });

  it('preserves a selected device', async () => {
    vapi = new Vapi('test', undefined, undefined, { audioSource: 'device-id' });
    await vapi.start('assistant');
    expect(gum).toHaveBeenCalledWith({ audio: { deviceId: { exact: 'device-id' } } });
    await vapi.stop();
  });

  it('reuses a caller-owned track without acquiring or stopping it', async () => {
    vapi = new Vapi('test', undefined, undefined, { audioSource: track });
    await vapi.start('assistant');
    expect(gum).not.toHaveBeenCalled();
    expect(Daily.createCallObject).toHaveBeenCalledWith(expect.objectContaining({ audioSource: track }));
    await vapi.stop();
    expect(track.stop).not.toHaveBeenCalled();
  });

  it('fails locally when mediaDevices is unavailable', async () => {
    Object.defineProperty(globalThis, 'navigator', { configurable: true, value: { userAgent: 'test' } });
    expect(await vapi.start('assistant')).toBeNull();
    expect(api).not.toHaveBeenCalled();
    expect(failures[0].stage).toBe('microphone-preflight');
  });
});
