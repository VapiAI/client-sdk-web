import type {
  DailyCall,
  DailyAdvancedConfig,
  DailyFactoryOptions,
} from '@daily-co/daily-js';

export interface SafeDailyAdvancedConfig extends Omit<DailyAdvancedConfig, 'alwaysIncludeMicInPermissionPrompt'> {
  alwaysIncludeMicInPermissionPrompt?: true; // Only allow true
}

export interface SafeDailyFactoryOptions extends Omit<DailyFactoryOptions, 'audioSource'> {
  audioSource?: string | boolean | MediaStreamTrack;
}

export function createSafeDailyConfig(
  config?: Pick<DailyAdvancedConfig, 'avoidEval' | 'alwaysIncludeMicInPermissionPrompt'>
): SafeDailyAdvancedConfig {
  if (!config) return {};
  
  const { alwaysIncludeMicInPermissionPrompt, ...rest } = config;
  
  // Force true or remove the property entirely. This can cause Chrome 140+ issues
  if (alwaysIncludeMicInPermissionPrompt === false) {
    console.warn(
      '[Vapi] alwaysIncludeMicInPermissionPrompt:false detected. ' +
      'This can cause Chrome 140+ issues. Removing the property.'
    );
    return rest;
  }
  
  return config as SafeDailyAdvancedConfig;
}

export function safeSetLocalAudio(call: DailyCall | null, enabled: boolean): void {
  if (!call) {
    throw new Error('Call object is not available.');
  }
  
  // Never use forceDiscardTrack. This can cause Chrome 140+ issues
  call.setLocalAudio(enabled);
}

export async function safeSetInputDevicesAsync(
  call: DailyCall | null,
  options: Parameters<DailyCall['setInputDevicesAsync']>[0]
): Promise<void> {
  if (!call) {
    throw new Error('Call object is not available.');
  }
  
  // Validate audioSource
  if ('audioSource' in options && options.audioSource === false) {
    console.warn(
      '[Vapi] setInputDevicesAsync with audioSource:false detected. ' +
      'This can cause Chrome 140+ issues. Using default device instead.'
    );
    
    const { audioSource, ...safeOptions } = options;
    await call.setInputDevicesAsync(safeOptions);
    return;
  }
  
  await call.setInputDevicesAsync(options);
}

export function createSafeDailyFactoryOptions(
  options?: Pick<DailyFactoryOptions, 'audioSource' | 'startAudioOff'>
): SafeDailyFactoryOptions {
  if (!options) return {};
  
  // Ensure audioSource is never false
  if (options.audioSource === false) {
    console.warn(
      '[Vapi] audioSource:false detected in factory options. ' +
      'This can cause Chrome 140+ issues. Defaulting to true.'
    );
    return { ...options, audioSource: true };
  }
  
  return options;
}
