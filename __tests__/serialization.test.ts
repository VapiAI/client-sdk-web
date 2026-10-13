/**
 * Tests for serialization utilities to prevent DataCloneError
 *
 * The structured clone algorithm used by postMessage cannot handle:
 * - Functions
 * - DOM nodes
 * - MediaStreamTrack objects
 * - Symbols
 * - WeakMap/WeakSet
 * - Error objects (partially)
 *
 * These tests verify that our sanitization utilities properly handle these cases.
 */

import { sanitizeForPostMessage, describeMediaSource } from '../vapi';

describe('sanitizeForPostMessage', () => {
  it('should pass through primitive values unchanged', () => {
    expect(sanitizeForPostMessage('hello')).toBe('hello');
    expect(sanitizeForPostMessage(123)).toBe(123);
    expect(sanitizeForPostMessage(true)).toBe(true);
    expect(sanitizeForPostMessage(false)).toBe(false);
    expect(sanitizeForPostMessage(null)).toBe(null);
    expect(sanitizeForPostMessage(undefined)).toBe(undefined);
  });

  it('should pass through simple objects unchanged', () => {
    const obj = { a: 1, b: 'test', c: true };
    const result = sanitizeForPostMessage(obj);
    expect(result).toEqual(obj);
  });

  it('should pass through arrays unchanged', () => {
    const arr = [1, 2, 'test', true];
    const result = sanitizeForPostMessage(arr);
    expect(result).toEqual(arr);
  });

  it('should convert functions to descriptive strings', () => {
    const fn = function testFunc() { return 42; };
    const result = sanitizeForPostMessage(fn);
    expect(result).toBe('[Function: testFunc]');
  });

  it('should convert arrow functions to descriptive strings', () => {
    const fn = () => 42;
    const result = sanitizeForPostMessage(fn);
    expect(typeof result).toBe('string');
    expect(result).toContain('[Function');
  });

  it('should convert anonymous functions to descriptive strings', () => {
    // Note: Modern JS engines infer function names from variable assignments
    // so `const fn = function() {}` results in a function named 'fn'
    // To get a truly anonymous function, we need to pass it directly
    const result = sanitizeForPostMessage(function() { return 42; });
    expect(result).toBe('[Function: anonymous]');
  });

  it('should sanitize nested objects with functions', () => {
    const obj = {
      name: 'test',
      callback: () => {},
      nested: {
        fn: function handler() {}
      }
    };
    const result = sanitizeForPostMessage(obj);
    expect(result).toEqual({
      name: 'test',
      callback: '[Function: callback]', // Arrow functions in object properties get inferred names
      nested: {
        fn: '[Function: handler]'
      }
    });
  });

  it('should sanitize arrays containing functions', () => {
    const arr = [1, () => {}, 'test'];
    const result = sanitizeForPostMessage(arr) as unknown[];
    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toBe(1);
    expect(typeof result[1]).toBe('string');
    expect(result[1]).toContain('[Function');
    expect(result[2]).toBe('test');
  });

  it('should convert Symbol values to strings', () => {
    const sym = Symbol('test');
    const result = sanitizeForPostMessage(sym);
    expect(result).toBe('Symbol(test)');
  });

  it('should handle objects with Symbol values', () => {
    const obj = {
      name: 'test',
      sym: Symbol('mySymbol')
    };
    const result = sanitizeForPostMessage(obj);
    expect(result).toEqual({
      name: 'test',
      sym: 'Symbol(mySymbol)'
    });
  });

  it('should handle Date objects', () => {
    const date = new Date('2024-01-15T12:00:00Z');
    const result = sanitizeForPostMessage(date);
    // Dates should be converted to ISO strings for safe serialization
    expect(result).toBe(date.toISOString());
  });

  it('should handle objects with circular references by returning a placeholder', () => {
    const obj: any = { name: 'test' };
    obj.self = obj;
    // This should not throw and should handle the circular reference
    const result = sanitizeForPostMessage(obj) as Record<string, unknown>;
    expect(result).toBeDefined();
    expect(result.name).toBe('test');
    expect(result.self).toBe('[Circular Reference]');
  });

  it('should handle deeply nested structures', () => {
    const obj = {
      level1: {
        level2: {
          level3: {
            value: 'deep',
            fn: () => {}
          }
        }
      }
    };
    const result = sanitizeForPostMessage(obj) as any;
    expect(result.level1.level2.level3.value).toBe('deep');
    expect(result.level1.level2.level3.fn).toContain('[Function');
  });
});

describe('describeMediaSource', () => {
  it('should return boolean values as-is', () => {
    expect(describeMediaSource(true)).toBe(true);
    expect(describeMediaSource(false)).toBe(false);
  });

  it('should return string device IDs as-is', () => {
    expect(describeMediaSource('device-123')).toBe('device-123');
  });

  it('should describe MediaStreamTrack objects', () => {
    // Create a mock MediaStreamTrack
    const mockTrack = {
      kind: 'audio',
      id: 'track-abc123',
      label: 'Built-in Microphone',
    };

    const result = describeMediaSource(mockTrack as unknown as MediaStreamTrack);
    expect(result).toBe('[MediaStreamTrack: audio, id=track-abc123]');
  });

  it('should handle MediaStreamTrack without label', () => {
    const mockTrack = {
      kind: 'video',
      id: 'track-xyz789',
    };

    const result = describeMediaSource(mockTrack as unknown as MediaStreamTrack);
    expect(result).toBe('[MediaStreamTrack: video, id=track-xyz789]');
  });

  it('should handle null and undefined', () => {
    expect(describeMediaSource(null as any)).toBe(null);
    expect(describeMediaSource(undefined as any)).toBe(undefined);
  });
});

describe('DataCloneError prevention in call-start-progress events', () => {
  it('should produce serializable metadata when audioSource is a MediaStreamTrack', () => {
    // Simulate what happens when a MediaStreamTrack is passed as audioSource
    const mockTrack = {
      kind: 'audio',
      id: 'track-123',
      readyState: 'live',
      enabled: true,
    };

    const metadata = {
      audioSource: describeMediaSource(mockTrack as unknown as MediaStreamTrack),
      videoSource: describeMediaSource(true),
      isVideoRecordingEnabled: false,
      isVideoEnabled: false,
    };

    // Verify it can be JSON serialized (which postMessage also requires)
    expect(() => JSON.stringify(metadata)).not.toThrow();

    // Verify the values are correct
    expect(metadata.audioSource).toBe('[MediaStreamTrack: audio, id=track-123]');
    expect(metadata.videoSource).toBe(true);
  });

  it('should handle typical call-start-progress event metadata', () => {
    const mockAudioTrack = {
      kind: 'audio',
      id: 'audio-track-456',
      readyState: 'live',
      enabled: true,
    };

    const mockVideoTrack = {
      kind: 'video',
      id: 'video-track-789',
      readyState: 'live',
      enabled: true,
    };

    const progressEvent = {
      stage: 'daily-call-object-creation',
      status: 'started',
      timestamp: new Date().toISOString(),
      metadata: {
        audioSource: describeMediaSource(mockAudioTrack as unknown as MediaStreamTrack),
        videoSource: describeMediaSource(mockVideoTrack as unknown as MediaStreamTrack),
        isVideoRecordingEnabled: true,
        isVideoEnabled: false,
      }
    };

    // Verify it can be serialized
    expect(() => JSON.stringify(progressEvent)).not.toThrow();

    // Verify structure
    expect(progressEvent.metadata.audioSource).toBe('[MediaStreamTrack: audio, id=audio-track-456]');
    expect(progressEvent.metadata.videoSource).toBe('[MediaStreamTrack: video, id=video-track-789]');
  });
});
