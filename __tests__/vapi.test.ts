import Vapi from '../vapi'; // Adjust the import path based on your project structure

describe('Vapi', () => {
  let vapi: Vapi;
  let mockCall: any;

  beforeEach(() => {
    // Mock the DailyCall object
    mockCall = {
      setLocalAudio: jest.fn(),
      localAudio: jest.fn(),
    };
    // Initialize Vapi instance and inject the mock
    vapi = new Vapi('dummy_token');
    vapi['call'] = mockCall; // Assuming you have a way to set this for testing
  });

  describe('setMuted', () => {
    it('should mute the audio', () => {
      vapi['setMuted'](true);
      expect(mockCall.setLocalAudio).toHaveBeenCalledWith(false);
    });

    it('should unmute the audio', () => {
      vapi['setMuted'](false);
      expect(mockCall.setLocalAudio).toHaveBeenCalledWith(true);
    });

    it('should handle errors when call object is not available', () => {
      vapi['call'] = null; // Simulate call object not being available
      expect(() => vapi['setMuted'](true)).toThrow('Call object is not available.');
    });
  });

  describe('toggleMute', () => {
    it('should toggle audio from unmuted to muted', () => {
      mockCall.localAudio.mockReturnValue(true); // Initially not muted
      vapi.toggleMute();
      expect(mockCall.setLocalAudio).toHaveBeenCalledWith(false); // Should mute
    });

    it('should toggle audio from muted to unmuted', () => {
      mockCall.localAudio.mockReturnValue(false); // Initially muted
      vapi.toggleMute();
      expect(mockCall.setLocalAudio).toHaveBeenCalledWith(true); // Should unmute
    });

    it('should handle errors when call object is not available', () => {
      vapi['call'] = null; // Simulate call object not being available
      expect(() => vapi.toggleMute()).toThrow('Call object is not available.');
    });
  });
});