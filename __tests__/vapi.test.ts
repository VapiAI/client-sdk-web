import Vapi from '../vapi'; // Adjust the import path based on your project structure

describe('Vapi', () => {
  let vapi: Vapi;
  let mockEmit: jest.SpyInstance;

  beforeEach(() => {
    vapi = new Vapi('dummyToken');
    // Mock the muteUnmuteLocalAudio method
    jest.spyOn(vapi as any, 'muteUnmuteLocalAudio').mockImplementation(() => {});
    // Spy on the emit method to assert it's called correctly
    mockEmit = jest.spyOn(vapi, 'emit');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should mute the audio and emit "audio-muted" on "mute-audio" message', () => {
    vapi['onAppMessage']({ data: 'mute-audio' } as any); // Simulate receiving a mute-audio message
    expect((vapi as any).muteUnmuteLocalAudio).toHaveBeenCalledWith(false);
    expect(mockEmit).toHaveBeenCalledWith('audio-muted');
  });

  it('should unmute the audio and emit "audio-unmuted" on "unmute-audio" message', () => {
    vapi['onAppMessage']({ data: 'unmute-audio' } as any); // Simulate receiving an unmute-audio message
    expect((vapi as any).muteUnmuteLocalAudio).toHaveBeenCalledWith(true);
    expect(mockEmit).toHaveBeenCalledWith('audio-unmuted');
  });
});