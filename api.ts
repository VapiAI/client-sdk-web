/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface FallbackTranscriberPlan {
  transcribers: (
    | FallbackAssemblyAITranscriber
    | FallbackAzureSpeechTranscriber
    | FallbackCustomTranscriber
    | FallbackDeepgramTranscriber
    | FallbackElevenLabsTranscriber
    | FallbackGladiaTranscriber
    | FallbackGoogleTranscriber
    | FallbackTalkscriberTranscriber
    | FallbackSpeechmaticsTranscriber
    | FallbackOpenAITranscriber
  )[];
}

export interface AssemblyAITranscriber {
  /** This is the transcription provider that will be used. */
  provider: 'assembly-ai';
  /** This is the language that will be set for the transcription. */
  language?: 'en';
  /** The WebSocket URL that the transcriber connects to. */
  realtimeUrl?: string;
  /** Add up to 2500 characters of custom vocabulary. */
  wordBoost?: string[];
  /** The duration of the end utterance silence threshold in milliseconds. */
  endUtteranceSilenceThreshold?: number;
  /**
   * Disable partial transcripts.
   * Set to `true` to not receive partial transcripts. Defaults to `false`.
   */
  disablePartialTranscripts?: boolean;
  /** This is the plan for voice provider fallbacks in the event that the primary voice provider fails. */
  fallbackPlan?: FallbackTranscriberPlan;
}

export interface AzureSpeechTranscriber {
  /** This is the transcription provider that will be used. */
  provider: 'azure';
  /** This is the language that will be set for the transcription. The list of languages Azure supports can be found here: https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support?tabs=stt */
  language?:
    | 'af-ZA'
    | 'am-ET'
    | 'ar-AE'
    | 'ar-BH'
    | 'ar-DZ'
    | 'ar-EG'
    | 'ar-IL'
    | 'ar-IQ'
    | 'ar-JO'
    | 'ar-KW'
    | 'ar-LB'
    | 'ar-LY'
    | 'ar-MA'
    | 'ar-OM'
    | 'ar-PS'
    | 'ar-QA'
    | 'ar-SA'
    | 'ar-SY'
    | 'ar-TN'
    | 'ar-YE'
    | 'az-AZ'
    | 'bg-BG'
    | 'bn-IN'
    | 'bs-BA'
    | 'ca-ES'
    | 'cs-CZ'
    | 'cy-GB'
    | 'da-DK'
    | 'de-AT'
    | 'de-CH'
    | 'de-DE'
    | 'el-GR'
    | 'en-AU'
    | 'en-CA'
    | 'en-GB'
    | 'en-GH'
    | 'en-HK'
    | 'en-IE'
    | 'en-IN'
    | 'en-KE'
    | 'en-NG'
    | 'en-NZ'
    | 'en-PH'
    | 'en-SG'
    | 'en-TZ'
    | 'en-US'
    | 'en-ZA'
    | 'es-AR'
    | 'es-BO'
    | 'es-CL'
    | 'es-CO'
    | 'es-CR'
    | 'es-CU'
    | 'es-DO'
    | 'es-EC'
    | 'es-ES'
    | 'es-GQ'
    | 'es-GT'
    | 'es-HN'
    | 'es-MX'
    | 'es-NI'
    | 'es-PA'
    | 'es-PE'
    | 'es-PR'
    | 'es-PY'
    | 'es-SV'
    | 'es-US'
    | 'es-UY'
    | 'es-VE'
    | 'et-EE'
    | 'eu-ES'
    | 'fa-IR'
    | 'fi-FI'
    | 'fil-PH'
    | 'fr-BE'
    | 'fr-CA'
    | 'fr-CH'
    | 'fr-FR'
    | 'ga-IE'
    | 'gl-ES'
    | 'gu-IN'
    | 'he-IL'
    | 'hi-IN'
    | 'hr-HR'
    | 'hu-HU'
    | 'hy-AM'
    | 'id-ID'
    | 'is-IS'
    | 'it-CH'
    | 'it-IT'
    | 'ja-JP'
    | 'jv-ID'
    | 'ka-GE'
    | 'kk-KZ'
    | 'km-KH'
    | 'kn-IN'
    | 'ko-KR'
    | 'lo-LA'
    | 'lt-LT'
    | 'lv-LV'
    | 'mk-MK'
    | 'ml-IN'
    | 'mn-MN'
    | 'mr-IN'
    | 'ms-MY'
    | 'mt-MT'
    | 'my-MM'
    | 'nb-NO'
    | 'ne-NP'
    | 'nl-BE'
    | 'nl-NL'
    | 'pa-IN'
    | 'pl-PL'
    | 'ps-AF'
    | 'pt-BR'
    | 'pt-PT'
    | 'ro-RO'
    | 'ru-RU'
    | 'si-LK'
    | 'sk-SK'
    | 'sl-SI'
    | 'so-SO'
    | 'sq-AL'
    | 'sr-RS'
    | 'sv-SE'
    | 'sw-KE'
    | 'sw-TZ'
    | 'ta-IN'
    | 'te-IN'
    | 'th-TH'
    | 'tr-TR'
    | 'uk-UA'
    | 'ur-IN'
    | 'uz-UZ'
    | 'vi-VN'
    | 'wuu-CN'
    | 'yue-CN'
    | 'zh-CN'
    | 'zh-CN-shandong'
    | 'zh-CN-sichuan'
    | 'zh-HK'
    | 'zh-TW'
    | 'zu-ZA';
  /** This is the plan for voice provider fallbacks in the event that the primary voice provider fails. */
  fallbackPlan?: FallbackTranscriberPlan;
}

export interface BackoffPlan {
  /**
   * This is the maximum number of retries to attempt if the request fails. Defaults to 0 (no retries).
   *
   * @default 0
   * @min 0
   * @max 10
   * @example 0
   */
  maxRetries: number;
  /**
   * This is the type of backoff plan to use. Defaults to fixed.
   *
   * @default fixed
   * @example "fixed"
   */
  type: 'fixed' | 'exponential';
  /**
   * This is the base delay in seconds. For linear backoff, this is the delay between each retry. For exponential backoff, this is the initial delay.
   * @min 0
   * @max 10
   * @example 1
   */
  baseDelaySeconds: number;
}

export interface Server {
  /**
   * This is the timeout in seconds for the request to your server. Defaults to 20 seconds.
   *
   * @default 20
   * @min 1
   * @max 120
   * @example 20
   */
  timeoutSeconds?: number;
  /** API endpoint to send requests to. */
  url: string;
  /**
   * This is the secret you can set that Vapi will send with every request to your server. Will be sent as a header called x-vapi-secret.
   *
   * Same precedence logic as server.
   */
  secret?: string;
  /**
   * These are the custom headers to include in the request sent to your server.
   *
   * Each key-value pair represents a header name and its value.
   */
  headers?: object;
  /** This is the backoff plan to use if the request fails. */
  backoffPlan?: BackoffPlan;
}

export interface CustomTranscriber {
  /** This is the transcription provider that will be used. Use `custom-transcriber` for providers that are not natively supported. */
  provider: 'custom-transcriber';
  /**
   * This is where the transcription request will be sent.
   *
   * Usage:
   * 1. Vapi will initiate a websocket connection with `server.url`.
   *
   * 2. Vapi will send an initial text frame with the sample rate. Format:
   * ```
   *     {
   *       "type": "start",
   *       "encoding": "linear16", // 16-bit raw PCM format
   *       "container": "raw",
   *       "sampleRate": {{sampleRate}},
   *       "channels": 2 // customer is channel 0, assistant is channel 1
   *     }
   * ```
   *
   * 3. Vapi will send the audio data in 16-bit raw PCM format as binary frames.
   *
   * 4. You can read the messages something like this:
   * ```
   * ws.on('message', (data, isBinary) => {
   *   if (isBinary) {
   *     pcmBuffer = Buffer.concat([pcmBuffer, data]);
   *     console.log(`Received PCM data, buffer size: ${pcmBuffer.length}`);
   *   } else {
   *     console.log('Received message:', JSON.parse(data.toString()));
   *   }
   * });
   * ```
   *
   * 5. You will respond with transcriptions as you have them. Format:
   * ```
   *  {
   *     "type": "transcriber-response",
   *     "transcription": "Hello, world!",
   *     "channel": "customer" | "assistant"
   *  }
   * ```
   */
  server: Server;
  /** This is the plan for voice provider fallbacks in the event that the primary voice provider fails. */
  fallbackPlan?: FallbackTranscriberPlan;
}

export interface DeepgramTranscriber {
  /** This is the transcription provider that will be used. */
  provider: 'deepgram';
  /** This is the Deepgram model that will be used. A list of models can be found here: https://developers.deepgram.com/docs/models-languages-overview */
  model?:
    | 'nova-3'
    | 'nova-3-general'
    | 'nova-2'
    | 'nova-2-general'
    | 'nova-2-meeting'
    | 'nova-2-phonecall'
    | 'nova-2-finance'
    | 'nova-2-conversationalai'
    | 'nova-2-voicemail'
    | 'nova-2-video'
    | 'nova-2-medical'
    | 'nova-2-drivethru'
    | 'nova-2-automotive'
    | 'nova'
    | 'nova-general'
    | 'nova-phonecall'
    | 'nova-medical'
    | 'enhanced'
    | 'enhanced-general'
    | 'enhanced-meeting'
    | 'enhanced-phonecall'
    | 'enhanced-finance'
    | 'base'
    | 'base-general'
    | 'base-meeting'
    | 'base-phonecall'
    | 'base-finance'
    | 'base-conversationalai'
    | 'base-voicemail'
    | 'base-video'
    | string;
  /** This is the language that will be set for the transcription. The list of languages Deepgram supports can be found here: https://developers.deepgram.com/docs/models-languages-overview */
  language?:
    | 'bg'
    | 'ca'
    | 'cs'
    | 'da'
    | 'da-DK'
    | 'de'
    | 'de-CH'
    | 'el'
    | 'en'
    | 'en-AU'
    | 'en-GB'
    | 'en-IN'
    | 'en-NZ'
    | 'en-US'
    | 'es'
    | 'es-419'
    | 'es-LATAM'
    | 'et'
    | 'fi'
    | 'fr'
    | 'fr-CA'
    | 'hi'
    | 'hi-Latn'
    | 'hu'
    | 'id'
    | 'it'
    | 'ja'
    | 'ko'
    | 'ko-KR'
    | 'lt'
    | 'lv'
    | 'ms'
    | 'multi'
    | 'nl'
    | 'nl-BE'
    | 'no'
    | 'pl'
    | 'pt'
    | 'pt-BR'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sv'
    | 'sv-SE'
    | 'ta'
    | 'taq'
    | 'th'
    | 'th-TH'
    | 'tr'
    | 'uk'
    | 'vi'
    | 'zh'
    | 'zh-CN'
    | 'zh-HK'
    | 'zh-Hans'
    | 'zh-Hant'
    | 'zh-TW';
  /**
   * This will be use smart format option provided by Deepgram. It's default disabled because it can sometimes format numbers as times but it's getting better.
   * @example false
   */
  smartFormat?: boolean;
  /**
   * This automatically switches the transcriber's language when the customer's language changes. Defaults to false.
   *
   * Usage:
   * - If your customers switch languages mid-call, you can set this to true.
   *
   * Note:
   * - To detect language changes, Vapi uses a custom trained model. Languages supported (X = limited support):
   *   1. Arabic
   *   2. Bengali
   *   3. Cantonese
   *   4. Chinese
   *   5. Chinese Simplified (X)
   *   6. Chinese Traditional (X)
   *   7. English
   *   8. Farsi (X)
   *   9. French
   *   10. German
   *   11. Haitian Creole (X)
   *   12. Hindi
   *   13. Italian
   *   14. Japanese
   *   15. Korean
   *   16. Portuguese
   *   17. Russian
   *   18. Spanish
   *   19. Thai
   *   20. Urdu
   *   21. Vietnamese
   * - To receive `language-change-detected` webhook events, add it to `assistant.serverMessages`.
   *
   * @default false
   * @example false
   */
  codeSwitchingEnabled?: boolean;
  /**
   * If set to true, this will add mip_opt_out=true as a query parameter of all API requests. See https://developers.deepgram.com/docs/the-deepgram-model-improvement-partnership-program#want-to-opt-out
   *
   * This will only be used if you are using your own Deepgram API key.
   *
   * @default false
   * @default false
   * @example false
   */
  mipOptOut?: boolean;
  /**
   * If set to true, this will cause deepgram to convert spoken numbers to literal numerals. For example, "my phone number is nine-seven-two..." would become "my phone number is 972..."
   *
   * @default false
   * @example false
   */
  numerals?: boolean;
  /** These keywords are passed to the transcription model to help it pick up use-case specific words. Anything that may not be a common word, like your company name, should be added here. */
  keywords?: string[];
  /** Keyterm Prompting allows you improve Keyword Recall Rate (KRR) for important keyterms or phrases up to 90%. */
  keyterm?: string[];
  /**
   * This is the timeout after which Deepgram will send transcription on user silence. You can read in-depth documentation here: https://developers.deepgram.com/docs/endpointing.
   *
   * Here are the most important bits:
   * - Defaults to 10. This is recommended for most use cases to optimize for latency.
   * - 10 can cause some missing transcriptions since because of the shorter context. This mostly happens for one-word utterances. For those uses cases, it's recommended to try 300. It will add a bit of latency but the quality and reliability of the experience will be better.
   * - If neither 10 nor 300 work, contact support@vapi.ai and we'll find another solution.
   *
   * @default 10
   * @min 10
   * @max 500
   */
  endpointing?: number;
  /** This is the plan for voice provider fallbacks in the event that the primary voice provider fails. */
  fallbackPlan?: FallbackTranscriberPlan;
}

export interface ElevenLabsTranscriber {
  /** This is the transcription provider that will be used. */
  provider: '11labs';
  /** This is the model that will be used for the transcription. */
  model?: 'scribe_v1';
  language?:
    | 'aa'
    | 'ab'
    | 'ae'
    | 'af'
    | 'ak'
    | 'am'
    | 'an'
    | 'ar'
    | 'as'
    | 'av'
    | 'ay'
    | 'az'
    | 'ba'
    | 'be'
    | 'bg'
    | 'bh'
    | 'bi'
    | 'bm'
    | 'bn'
    | 'bo'
    | 'br'
    | 'bs'
    | 'ca'
    | 'ce'
    | 'ch'
    | 'co'
    | 'cr'
    | 'cs'
    | 'cu'
    | 'cv'
    | 'cy'
    | 'da'
    | 'de'
    | 'dv'
    | 'dz'
    | 'ee'
    | 'el'
    | 'en'
    | 'eo'
    | 'es'
    | 'et'
    | 'eu'
    | 'fa'
    | 'ff'
    | 'fi'
    | 'fj'
    | 'fo'
    | 'fr'
    | 'fy'
    | 'ga'
    | 'gd'
    | 'gl'
    | 'gn'
    | 'gu'
    | 'gv'
    | 'ha'
    | 'he'
    | 'hi'
    | 'ho'
    | 'hr'
    | 'ht'
    | 'hu'
    | 'hy'
    | 'hz'
    | 'ia'
    | 'id'
    | 'ie'
    | 'ig'
    | 'ii'
    | 'ik'
    | 'io'
    | 'is'
    | 'it'
    | 'iu'
    | 'ja'
    | 'jv'
    | 'ka'
    | 'kg'
    | 'ki'
    | 'kj'
    | 'kk'
    | 'kl'
    | 'km'
    | 'kn'
    | 'ko'
    | 'kr'
    | 'ks'
    | 'ku'
    | 'kv'
    | 'kw'
    | 'ky'
    | 'la'
    | 'lb'
    | 'lg'
    | 'li'
    | 'ln'
    | 'lo'
    | 'lt'
    | 'lu'
    | 'lv'
    | 'mg'
    | 'mh'
    | 'mi'
    | 'mk'
    | 'ml'
    | 'mn'
    | 'mr'
    | 'ms'
    | 'mt'
    | 'my'
    | 'na'
    | 'nb'
    | 'nd'
    | 'ne'
    | 'ng'
    | 'nl'
    | 'nn'
    | 'no'
    | 'nr'
    | 'nv'
    | 'ny'
    | 'oc'
    | 'oj'
    | 'om'
    | 'or'
    | 'os'
    | 'pa'
    | 'pi'
    | 'pl'
    | 'ps'
    | 'pt'
    | 'qu'
    | 'rm'
    | 'rn'
    | 'ro'
    | 'ru'
    | 'rw'
    | 'sa'
    | 'sc'
    | 'sd'
    | 'se'
    | 'sg'
    | 'si'
    | 'sk'
    | 'sl'
    | 'sm'
    | 'sn'
    | 'so'
    | 'sq'
    | 'sr'
    | 'ss'
    | 'st'
    | 'su'
    | 'sv'
    | 'sw'
    | 'ta'
    | 'te'
    | 'tg'
    | 'th'
    | 'ti'
    | 'tk'
    | 'tl'
    | 'tn'
    | 'to'
    | 'tr'
    | 'ts'
    | 'tt'
    | 'tw'
    | 'ty'
    | 'ug'
    | 'uk'
    | 'ur'
    | 'uz'
    | 've'
    | 'vi'
    | 'vo'
    | 'wa'
    | 'wo'
    | 'xh'
    | 'yi'
    | 'yue'
    | 'yo'
    | 'za'
    | 'zh'
    | 'zu';
  /** This is the plan for voice provider fallbacks in the event that the primary voice provider fails. */
  fallbackPlan?: FallbackTranscriberPlan;
}

export interface GladiaTranscriber {
  /** This is the transcription provider that will be used. */
  provider: 'gladia';
  /** This is the Gladia model that will be used. Default is 'fast' */
  model?: 'fast' | 'accurate';
  /** Defines how the transcription model detects the audio language. Default value is 'automatic single language'. */
  languageBehaviour?: 'manual' | 'automatic single language' | 'automatic multiple languages';
  /** Defines the language to use for the transcription. Required when languageBehaviour is 'manual'. */
  language?:
    | 'af'
    | 'sq'
    | 'am'
    | 'ar'
    | 'hy'
    | 'as'
    | 'az'
    | 'ba'
    | 'eu'
    | 'be'
    | 'bn'
    | 'bs'
    | 'br'
    | 'bg'
    | 'ca'
    | 'zh'
    | 'hr'
    | 'cs'
    | 'da'
    | 'nl'
    | 'en'
    | 'et'
    | 'fo'
    | 'fi'
    | 'fr'
    | 'gl'
    | 'ka'
    | 'de'
    | 'el'
    | 'gu'
    | 'ht'
    | 'ha'
    | 'haw'
    | 'he'
    | 'hi'
    | 'hu'
    | 'is'
    | 'id'
    | 'it'
    | 'ja'
    | 'jv'
    | 'kn'
    | 'kk'
    | 'km'
    | 'ko'
    | 'lo'
    | 'la'
    | 'lv'
    | 'ln'
    | 'lt'
    | 'lb'
    | 'mk'
    | 'mg'
    | 'ms'
    | 'ml'
    | 'mt'
    | 'mi'
    | 'mr'
    | 'mn'
    | 'my'
    | 'ne'
    | 'no'
    | 'nn'
    | 'oc'
    | 'ps'
    | 'fa'
    | 'pl'
    | 'pt'
    | 'pa'
    | 'ro'
    | 'ru'
    | 'sa'
    | 'sr'
    | 'sn'
    | 'sd'
    | 'si'
    | 'sk'
    | 'sl'
    | 'so'
    | 'es'
    | 'su'
    | 'sw'
    | 'sv'
    | 'tl'
    | 'tg'
    | 'ta'
    | 'tt'
    | 'te'
    | 'th'
    | 'bo'
    | 'tr'
    | 'tk'
    | 'uk'
    | 'ur'
    | 'uz'
    | 'vi'
    | 'cy'
    | 'yi'
    | 'yo';
  /**
   * Provides a custom vocabulary to the model to improve accuracy of transcribing context specific words, technical terms, names, etc. If empty, this argument is ignored.
   * ⚠️ Warning ⚠️: Please be aware that the transcription_hint field has a character limit of 600. If you provide a transcription_hint longer than 600 characters, it will be automatically truncated to meet this limit.
   * @maxLength 600
   * @example "custom vocabulary"
   */
  transcriptionHint?: string;
  /**
   * If prosody is true, you will get a transcription that can contain prosodies i.e. (laugh) (giggles) (malefic laugh) (toss) (music)… Default value is false.
   * @example false
   */
  prosody?: boolean;
  /**
   * If true, audio will be pre-processed to improve accuracy but latency will increase. Default value is false.
   * @example false
   */
  audioEnhancer?: boolean;
  /** This is the plan for voice provider fallbacks in the event that the primary voice provider fails. */
  fallbackPlan?: FallbackTranscriberPlan;
}

export interface SpeechmaticsTranscriber {
  /** This is the transcription provider that will be used. */
  provider: 'speechmatics';
  /** This is the model that will be used for the transcription. */
  model?: 'default';
  language?:
    | 'auto'
    | 'ar'
    | 'ba'
    | 'eu'
    | 'be'
    | 'bn'
    | 'bg'
    | 'yue'
    | 'ca'
    | 'hr'
    | 'cs'
    | 'da'
    | 'nl'
    | 'en'
    | 'eo'
    | 'et'
    | 'fi'
    | 'fr'
    | 'gl'
    | 'de'
    | 'el'
    | 'he'
    | 'hi'
    | 'hu'
    | 'id'
    | 'ia'
    | 'ga'
    | 'it'
    | 'ja'
    | 'ko'
    | 'lv'
    | 'lt'
    | 'ms'
    | 'mt'
    | 'cmn'
    | 'mr'
    | 'mn'
    | 'no'
    | 'fa'
    | 'pl'
    | 'pt'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sl'
    | 'es'
    | 'sw'
    | 'sv'
    | 'ta'
    | 'th'
    | 'tr'
    | 'uk'
    | 'ur'
    | 'ug'
    | 'vi'
    | 'cy';
  /** This is the plan for voice provider fallbacks in the event that the primary voice provider fails. */
  fallbackPlan?: FallbackTranscriberPlan;
}

export interface TalkscriberTranscriber {
  /** This is the transcription provider that will be used. */
  provider: 'talkscriber';
  /** This is the model that will be used for the transcription. */
  model?: 'whisper';
  /** This is the language that will be set for the transcription. The list of languages Whisper supports can be found here: https://github.com/openai/whisper/blob/main/whisper/tokenizer.py */
  language?:
    | 'en'
    | 'zh'
    | 'de'
    | 'es'
    | 'ru'
    | 'ko'
    | 'fr'
    | 'ja'
    | 'pt'
    | 'tr'
    | 'pl'
    | 'ca'
    | 'nl'
    | 'ar'
    | 'sv'
    | 'it'
    | 'id'
    | 'hi'
    | 'fi'
    | 'vi'
    | 'he'
    | 'uk'
    | 'el'
    | 'ms'
    | 'cs'
    | 'ro'
    | 'da'
    | 'hu'
    | 'ta'
    | 'no'
    | 'th'
    | 'ur'
    | 'hr'
    | 'bg'
    | 'lt'
    | 'la'
    | 'mi'
    | 'ml'
    | 'cy'
    | 'sk'
    | 'te'
    | 'fa'
    | 'lv'
    | 'bn'
    | 'sr'
    | 'az'
    | 'sl'
    | 'kn'
    | 'et'
    | 'mk'
    | 'br'
    | 'eu'
    | 'is'
    | 'hy'
    | 'ne'
    | 'mn'
    | 'bs'
    | 'kk'
    | 'sq'
    | 'sw'
    | 'gl'
    | 'mr'
    | 'pa'
    | 'si'
    | 'km'
    | 'sn'
    | 'yo'
    | 'so'
    | 'af'
    | 'oc'
    | 'ka'
    | 'be'
    | 'tg'
    | 'sd'
    | 'gu'
    | 'am'
    | 'yi'
    | 'lo'
    | 'uz'
    | 'fo'
    | 'ht'
    | 'ps'
    | 'tk'
    | 'nn'
    | 'mt'
    | 'sa'
    | 'lb'
    | 'my'
    | 'bo'
    | 'tl'
    | 'mg'
    | 'as'
    | 'tt'
    | 'haw'
    | 'ln'
    | 'ha'
    | 'ba'
    | 'jw'
    | 'su'
    | 'yue';
  /** This is the plan for voice provider fallbacks in the event that the primary voice provider fails. */
  fallbackPlan?: FallbackTranscriberPlan;
}

export interface GoogleTranscriber {
  /** This is the transcription provider that will be used. */
  provider: 'google';
  /** This is the model that will be used for the transcription. */
  model?:
    | 'gemini-2.0-flash-thinking-exp'
    | 'gemini-2.0-pro-exp-02-05'
    | 'gemini-2.0-flash'
    | 'gemini-2.0-flash-lite'
    | 'gemini-2.0-flash-lite-preview-02-05'
    | 'gemini-2.0-flash-exp'
    | 'gemini-2.0-flash-realtime-exp'
    | 'gemini-1.5-flash'
    | 'gemini-1.5-flash-002'
    | 'gemini-1.5-pro'
    | 'gemini-1.5-pro-002'
    | 'gemini-1.0-pro';
  /** This is the language that will be set for the transcription. */
  language?:
    | 'Multilingual'
    | 'Arabic'
    | 'Bengali'
    | 'Bulgarian'
    | 'Chinese'
    | 'Croatian'
    | 'Czech'
    | 'Danish'
    | 'Dutch'
    | 'English'
    | 'Estonian'
    | 'Finnish'
    | 'French'
    | 'German'
    | 'Greek'
    | 'Hebrew'
    | 'Hindi'
    | 'Hungarian'
    | 'Indonesian'
    | 'Italian'
    | 'Japanese'
    | 'Korean'
    | 'Latvian'
    | 'Lithuanian'
    | 'Norwegian'
    | 'Polish'
    | 'Portuguese'
    | 'Romanian'
    | 'Russian'
    | 'Serbian'
    | 'Slovak'
    | 'Slovenian'
    | 'Spanish'
    | 'Swahili'
    | 'Swedish'
    | 'Thai'
    | 'Turkish'
    | 'Ukrainian'
    | 'Vietnamese';
  /** This is the plan for voice provider fallbacks in the event that the primary voice provider fails. */
  fallbackPlan?: FallbackTranscriberPlan;
}

export interface OpenAITranscriber {
  /** This is the transcription provider that will be used. */
  provider: 'openai';
  /** This is the model that will be used for the transcription. */
  model: 'gpt-4o-transcribe' | 'gpt-4o-mini-transcribe';
  /** This is the language that will be set for the transcription. */
  language?:
    | 'af'
    | 'ar'
    | 'hy'
    | 'az'
    | 'be'
    | 'bs'
    | 'bg'
    | 'ca'
    | 'zh'
    | 'hr'
    | 'cs'
    | 'da'
    | 'nl'
    | 'en'
    | 'et'
    | 'fi'
    | 'fr'
    | 'gl'
    | 'de'
    | 'el'
    | 'he'
    | 'hi'
    | 'hu'
    | 'is'
    | 'id'
    | 'it'
    | 'ja'
    | 'kn'
    | 'kk'
    | 'ko'
    | 'lv'
    | 'lt'
    | 'mk'
    | 'ms'
    | 'mr'
    | 'mi'
    | 'ne'
    | 'no'
    | 'fa'
    | 'pl'
    | 'pt'
    | 'ro'
    | 'ru'
    | 'sr'
    | 'sk'
    | 'sl'
    | 'es'
    | 'sw'
    | 'sv'
    | 'tl'
    | 'ta'
    | 'th'
    | 'tr'
    | 'uk'
    | 'ur'
    | 'vi'
    | 'cy';
  /** This is the plan for voice provider fallbacks in the event that the primary voice provider fails. */
  fallbackPlan?: FallbackTranscriberPlan;
}

export interface FallbackAssemblyAITranscriber {
  /** This is the transcription provider that will be used. */
  provider: 'assembly-ai';
  /** This is the language that will be set for the transcription. */
  language?: 'en';
  /** The WebSocket URL that the transcriber connects to. */
  realtimeUrl?: string;
  /** Add up to 2500 characters of custom vocabulary. */
  wordBoost?: string[];
  /** The duration of the end utterance silence threshold in milliseconds. */
  endUtteranceSilenceThreshold?: number;
  /**
   * Disable partial transcripts.
   * Set to `true` to not receive partial transcripts. Defaults to `false`.
   */
  disablePartialTranscripts?: boolean;
}

export interface FallbackAzureSpeechTranscriber {
  /** This is the transcription provider that will be used. */
  provider: 'azure';
  /** This is the language that will be set for the transcription. The list of languages Azure supports can be found here: https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support?tabs=stt */
  language?:
    | 'af-ZA'
    | 'am-ET'
    | 'ar-AE'
    | 'ar-BH'
    | 'ar-DZ'
    | 'ar-EG'
    | 'ar-IL'
    | 'ar-IQ'
    | 'ar-JO'
    | 'ar-KW'
    | 'ar-LB'
    | 'ar-LY'
    | 'ar-MA'
    | 'ar-OM'
    | 'ar-PS'
    | 'ar-QA'
    | 'ar-SA'
    | 'ar-SY'
    | 'ar-TN'
    | 'ar-YE'
    | 'az-AZ'
    | 'bg-BG'
    | 'bn-IN'
    | 'bs-BA'
    | 'ca-ES'
    | 'cs-CZ'
    | 'cy-GB'
    | 'da-DK'
    | 'de-AT'
    | 'de-CH'
    | 'de-DE'
    | 'el-GR'
    | 'en-AU'
    | 'en-CA'
    | 'en-GB'
    | 'en-GH'
    | 'en-HK'
    | 'en-IE'
    | 'en-IN'
    | 'en-KE'
    | 'en-NG'
    | 'en-NZ'
    | 'en-PH'
    | 'en-SG'
    | 'en-TZ'
    | 'en-US'
    | 'en-ZA'
    | 'es-AR'
    | 'es-BO'
    | 'es-CL'
    | 'es-CO'
    | 'es-CR'
    | 'es-CU'
    | 'es-DO'
    | 'es-EC'
    | 'es-ES'
    | 'es-GQ'
    | 'es-GT'
    | 'es-HN'
    | 'es-MX'
    | 'es-NI'
    | 'es-PA'
    | 'es-PE'
    | 'es-PR'
    | 'es-PY'
    | 'es-SV'
    | 'es-US'
    | 'es-UY'
    | 'es-VE'
    | 'et-EE'
    | 'eu-ES'
    | 'fa-IR'
    | 'fi-FI'
    | 'fil-PH'
    | 'fr-BE'
    | 'fr-CA'
    | 'fr-CH'
    | 'fr-FR'
    | 'ga-IE'
    | 'gl-ES'
    | 'gu-IN'
    | 'he-IL'
    | 'hi-IN'
    | 'hr-HR'
    | 'hu-HU'
    | 'hy-AM'
    | 'id-ID'
    | 'is-IS'
    | 'it-CH'
    | 'it-IT'
    | 'ja-JP'
    | 'jv-ID'
    | 'ka-GE'
    | 'kk-KZ'
    | 'km-KH'
    | 'kn-IN'
    | 'ko-KR'
    | 'lo-LA'
    | 'lt-LT'
    | 'lv-LV'
    | 'mk-MK'
    | 'ml-IN'
    | 'mn-MN'
    | 'mr-IN'
    | 'ms-MY'
    | 'mt-MT'
    | 'my-MM'
    | 'nb-NO'
    | 'ne-NP'
    | 'nl-BE'
    | 'nl-NL'
    | 'pa-IN'
    | 'pl-PL'
    | 'ps-AF'
    | 'pt-BR'
    | 'pt-PT'
    | 'ro-RO'
    | 'ru-RU'
    | 'si-LK'
    | 'sk-SK'
    | 'sl-SI'
    | 'so-SO'
    | 'sq-AL'
    | 'sr-RS'
    | 'sv-SE'
    | 'sw-KE'
    | 'sw-TZ'
    | 'ta-IN'
    | 'te-IN'
    | 'th-TH'
    | 'tr-TR'
    | 'uk-UA'
    | 'ur-IN'
    | 'uz-UZ'
    | 'vi-VN'
    | 'wuu-CN'
    | 'yue-CN'
    | 'zh-CN'
    | 'zh-CN-shandong'
    | 'zh-CN-sichuan'
    | 'zh-HK'
    | 'zh-TW'
    | 'zu-ZA';
}

export interface FallbackCustomTranscriber {
  /** This is the transcription provider that will be used. Use `custom-transcriber` for providers that are not natively supported. */
  provider: 'custom-transcriber';
  /**
   * This is where the transcription request will be sent.
   *
   * Usage:
   * 1. Vapi will initiate a websocket connection with `server.url`.
   *
   * 2. Vapi will send an initial text frame with the sample rate. Format:
   * ```
   *     {
   *       "type": "start",
   *       "encoding": "linear16", // 16-bit raw PCM format
   *       "container": "raw",
   *       "sampleRate": {{sampleRate}},
   *       "channels": 2 // customer is channel 0, assistant is channel 1
   *     }
   * ```
   *
   * 3. Vapi will send the audio data in 16-bit raw PCM format as binary frames.
   *
   * 4. You can read the messages something like this:
   * ```
   * ws.on('message', (data, isBinary) => {
   *   if (isBinary) {
   *     pcmBuffer = Buffer.concat([pcmBuffer, data]);
   *     console.log(`Received PCM data, buffer size: ${pcmBuffer.length}`);
   *   } else {
   *     console.log('Received message:', JSON.parse(data.toString()));
   *   }
   * });
   * ```
   *
   * 5. You will respond with transcriptions as you have them. Format:
   * ```
   *  {
   *     "type": "transcriber-response",
   *     "transcription": "Hello, world!",
   *     "channel": "customer" | "assistant"
   *  }
   * ```
   */
  server: Server;
}

export interface FallbackDeepgramTranscriber {
  /** This is the transcription provider that will be used. */
  provider: 'deepgram';
  /** This is the Deepgram model that will be used. A list of models can be found here: https://developers.deepgram.com/docs/models-languages-overview */
  model?:
    | 'nova-3'
    | 'nova-3-general'
    | 'nova-2'
    | 'nova-2-general'
    | 'nova-2-meeting'
    | 'nova-2-phonecall'
    | 'nova-2-finance'
    | 'nova-2-conversationalai'
    | 'nova-2-voicemail'
    | 'nova-2-video'
    | 'nova-2-medical'
    | 'nova-2-drivethru'
    | 'nova-2-automotive'
    | 'nova'
    | 'nova-general'
    | 'nova-phonecall'
    | 'nova-medical'
    | 'enhanced'
    | 'enhanced-general'
    | 'enhanced-meeting'
    | 'enhanced-phonecall'
    | 'enhanced-finance'
    | 'base'
    | 'base-general'
    | 'base-meeting'
    | 'base-phonecall'
    | 'base-finance'
    | 'base-conversationalai'
    | 'base-voicemail'
    | 'base-video'
    | string;
  /** This is the language that will be set for the transcription. The list of languages Deepgram supports can be found here: https://developers.deepgram.com/docs/models-languages-overview */
  language?:
    | 'bg'
    | 'ca'
    | 'cs'
    | 'da'
    | 'da-DK'
    | 'de'
    | 'de-CH'
    | 'el'
    | 'en'
    | 'en-AU'
    | 'en-GB'
    | 'en-IN'
    | 'en-NZ'
    | 'en-US'
    | 'es'
    | 'es-419'
    | 'es-LATAM'
    | 'et'
    | 'fi'
    | 'fr'
    | 'fr-CA'
    | 'hi'
    | 'hi-Latn'
    | 'hu'
    | 'id'
    | 'it'
    | 'ja'
    | 'ko'
    | 'ko-KR'
    | 'lt'
    | 'lv'
    | 'ms'
    | 'multi'
    | 'nl'
    | 'nl-BE'
    | 'no'
    | 'pl'
    | 'pt'
    | 'pt-BR'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sv'
    | 'sv-SE'
    | 'ta'
    | 'taq'
    | 'th'
    | 'th-TH'
    | 'tr'
    | 'uk'
    | 'vi'
    | 'zh'
    | 'zh-CN'
    | 'zh-HK'
    | 'zh-Hans'
    | 'zh-Hant'
    | 'zh-TW';
  /**
   * This will be use smart format option provided by Deepgram. It's default disabled because it can sometimes format numbers as times but it's getting better.
   * @example false
   */
  smartFormat?: boolean;
  /**
   * This automatically switches the transcriber's language when the customer's language changes. Defaults to false.
   *
   * Usage:
   * - If your customers switch languages mid-call, you can set this to true.
   *
   * Note:
   * - To detect language changes, Vapi uses a custom trained model. Languages supported (X = limited support):
   *   1. Arabic
   *   2. Bengali
   *   3. Cantonese
   *   4. Chinese
   *   5. Chinese Simplified (X)
   *   6. Chinese Traditional (X)
   *   7. English
   *   8. Farsi (X)
   *   9. French
   *   10. German
   *   11. Haitian Creole (X)
   *   12. Hindi
   *   13. Italian
   *   14. Japanese
   *   15. Korean
   *   16. Portuguese
   *   17. Russian
   *   18. Spanish
   *   19. Thai
   *   20. Urdu
   *   21. Vietnamese
   * - To receive `language-change-detected` webhook events, add it to `assistant.serverMessages`.
   *
   * @default false
   * @example false
   */
  codeSwitchingEnabled?: boolean;
  /**
   * If set to true, this will add mip_opt_out=true as a query parameter of all API requests. See https://developers.deepgram.com/docs/the-deepgram-model-improvement-partnership-program#want-to-opt-out
   *
   * This will only be used if you are using your own Deepgram API key.
   *
   * @default false
   * @default false
   * @example false
   */
  mipOptOut?: boolean;
  /**
   * If set to true, this will cause deepgram to convert spoken numbers to literal numerals. For example, "my phone number is nine-seven-two..." would become "my phone number is 972..."
   *
   * @default false
   * @example false
   */
  numerals?: boolean;
  /** These keywords are passed to the transcription model to help it pick up use-case specific words. Anything that may not be a common word, like your company name, should be added here. */
  keywords?: string[];
  /** Keyterm Prompting allows you improve Keyword Recall Rate (KRR) for important keyterms or phrases up to 90%. */
  keyterm?: string[];
  /**
   * This is the timeout after which Deepgram will send transcription on user silence. You can read in-depth documentation here: https://developers.deepgram.com/docs/endpointing.
   *
   * Here are the most important bits:
   * - Defaults to 10. This is recommended for most use cases to optimize for latency.
   * - 10 can cause some missing transcriptions since because of the shorter context. This mostly happens for one-word utterances. For those uses cases, it's recommended to try 300. It will add a bit of latency but the quality and reliability of the experience will be better.
   * - If neither 10 nor 300 work, contact support@vapi.ai and we'll find another solution.
   *
   * @default 10
   * @min 10
   * @max 500
   */
  endpointing?: number;
}

export interface FallbackElevenLabsTranscriber {
  /** This is the transcription provider that will be used. */
  provider: '11labs';
  /** This is the model that will be used for the transcription. */
  model?: 'scribe_v1';
  language?:
    | 'aa'
    | 'ab'
    | 'ae'
    | 'af'
    | 'ak'
    | 'am'
    | 'an'
    | 'ar'
    | 'as'
    | 'av'
    | 'ay'
    | 'az'
    | 'ba'
    | 'be'
    | 'bg'
    | 'bh'
    | 'bi'
    | 'bm'
    | 'bn'
    | 'bo'
    | 'br'
    | 'bs'
    | 'ca'
    | 'ce'
    | 'ch'
    | 'co'
    | 'cr'
    | 'cs'
    | 'cu'
    | 'cv'
    | 'cy'
    | 'da'
    | 'de'
    | 'dv'
    | 'dz'
    | 'ee'
    | 'el'
    | 'en'
    | 'eo'
    | 'es'
    | 'et'
    | 'eu'
    | 'fa'
    | 'ff'
    | 'fi'
    | 'fj'
    | 'fo'
    | 'fr'
    | 'fy'
    | 'ga'
    | 'gd'
    | 'gl'
    | 'gn'
    | 'gu'
    | 'gv'
    | 'ha'
    | 'he'
    | 'hi'
    | 'ho'
    | 'hr'
    | 'ht'
    | 'hu'
    | 'hy'
    | 'hz'
    | 'ia'
    | 'id'
    | 'ie'
    | 'ig'
    | 'ii'
    | 'ik'
    | 'io'
    | 'is'
    | 'it'
    | 'iu'
    | 'ja'
    | 'jv'
    | 'ka'
    | 'kg'
    | 'ki'
    | 'kj'
    | 'kk'
    | 'kl'
    | 'km'
    | 'kn'
    | 'ko'
    | 'kr'
    | 'ks'
    | 'ku'
    | 'kv'
    | 'kw'
    | 'ky'
    | 'la'
    | 'lb'
    | 'lg'
    | 'li'
    | 'ln'
    | 'lo'
    | 'lt'
    | 'lu'
    | 'lv'
    | 'mg'
    | 'mh'
    | 'mi'
    | 'mk'
    | 'ml'
    | 'mn'
    | 'mr'
    | 'ms'
    | 'mt'
    | 'my'
    | 'na'
    | 'nb'
    | 'nd'
    | 'ne'
    | 'ng'
    | 'nl'
    | 'nn'
    | 'no'
    | 'nr'
    | 'nv'
    | 'ny'
    | 'oc'
    | 'oj'
    | 'om'
    | 'or'
    | 'os'
    | 'pa'
    | 'pi'
    | 'pl'
    | 'ps'
    | 'pt'
    | 'qu'
    | 'rm'
    | 'rn'
    | 'ro'
    | 'ru'
    | 'rw'
    | 'sa'
    | 'sc'
    | 'sd'
    | 'se'
    | 'sg'
    | 'si'
    | 'sk'
    | 'sl'
    | 'sm'
    | 'sn'
    | 'so'
    | 'sq'
    | 'sr'
    | 'ss'
    | 'st'
    | 'su'
    | 'sv'
    | 'sw'
    | 'ta'
    | 'te'
    | 'tg'
    | 'th'
    | 'ti'
    | 'tk'
    | 'tl'
    | 'tn'
    | 'to'
    | 'tr'
    | 'ts'
    | 'tt'
    | 'tw'
    | 'ty'
    | 'ug'
    | 'uk'
    | 'ur'
    | 'uz'
    | 've'
    | 'vi'
    | 'vo'
    | 'wa'
    | 'wo'
    | 'xh'
    | 'yi'
    | 'yue'
    | 'yo'
    | 'za'
    | 'zh'
    | 'zu';
}

export interface FallbackGladiaTranscriber {
  /** This is the transcription provider that will be used. */
  provider: 'gladia';
  /** This is the Gladia model that will be used. Default is 'fast' */
  model?: 'fast' | 'accurate';
  /** Defines how the transcription model detects the audio language. Default value is 'automatic single language'. */
  languageBehaviour?: 'manual' | 'automatic single language' | 'automatic multiple languages';
  /** Defines the language to use for the transcription. Required when languageBehaviour is 'manual'. */
  language?:
    | 'af'
    | 'sq'
    | 'am'
    | 'ar'
    | 'hy'
    | 'as'
    | 'az'
    | 'ba'
    | 'eu'
    | 'be'
    | 'bn'
    | 'bs'
    | 'br'
    | 'bg'
    | 'ca'
    | 'zh'
    | 'hr'
    | 'cs'
    | 'da'
    | 'nl'
    | 'en'
    | 'et'
    | 'fo'
    | 'fi'
    | 'fr'
    | 'gl'
    | 'ka'
    | 'de'
    | 'el'
    | 'gu'
    | 'ht'
    | 'ha'
    | 'haw'
    | 'he'
    | 'hi'
    | 'hu'
    | 'is'
    | 'id'
    | 'it'
    | 'ja'
    | 'jv'
    | 'kn'
    | 'kk'
    | 'km'
    | 'ko'
    | 'lo'
    | 'la'
    | 'lv'
    | 'ln'
    | 'lt'
    | 'lb'
    | 'mk'
    | 'mg'
    | 'ms'
    | 'ml'
    | 'mt'
    | 'mi'
    | 'mr'
    | 'mn'
    | 'my'
    | 'ne'
    | 'no'
    | 'nn'
    | 'oc'
    | 'ps'
    | 'fa'
    | 'pl'
    | 'pt'
    | 'pa'
    | 'ro'
    | 'ru'
    | 'sa'
    | 'sr'
    | 'sn'
    | 'sd'
    | 'si'
    | 'sk'
    | 'sl'
    | 'so'
    | 'es'
    | 'su'
    | 'sw'
    | 'sv'
    | 'tl'
    | 'tg'
    | 'ta'
    | 'tt'
    | 'te'
    | 'th'
    | 'bo'
    | 'tr'
    | 'tk'
    | 'uk'
    | 'ur'
    | 'uz'
    | 'vi'
    | 'cy'
    | 'yi'
    | 'yo';
  /**
   * Provides a custom vocabulary to the model to improve accuracy of transcribing context specific words, technical terms, names, etc. If empty, this argument is ignored.
   * ⚠️ Warning ⚠️: Please be aware that the transcription_hint field has a character limit of 600. If you provide a transcription_hint longer than 600 characters, it will be automatically truncated to meet this limit.
   * @maxLength 600
   * @example "custom vocabulary"
   */
  transcriptionHint?: string;
  /**
   * If prosody is true, you will get a transcription that can contain prosodies i.e. (laugh) (giggles) (malefic laugh) (toss) (music)… Default value is false.
   * @example false
   */
  prosody?: boolean;
  /**
   * If true, audio will be pre-processed to improve accuracy but latency will increase. Default value is false.
   * @example false
   */
  audioEnhancer?: boolean;
}

export interface FallbackSpeechmaticsTranscriber {
  /** This is the transcription provider that will be used. */
  provider: 'speechmatics';
  /** This is the model that will be used for the transcription. */
  model?: 'default';
  language?:
    | 'auto'
    | 'ar'
    | 'ba'
    | 'eu'
    | 'be'
    | 'bn'
    | 'bg'
    | 'yue'
    | 'ca'
    | 'hr'
    | 'cs'
    | 'da'
    | 'nl'
    | 'en'
    | 'eo'
    | 'et'
    | 'fi'
    | 'fr'
    | 'gl'
    | 'de'
    | 'el'
    | 'he'
    | 'hi'
    | 'hu'
    | 'id'
    | 'ia'
    | 'ga'
    | 'it'
    | 'ja'
    | 'ko'
    | 'lv'
    | 'lt'
    | 'ms'
    | 'mt'
    | 'cmn'
    | 'mr'
    | 'mn'
    | 'no'
    | 'fa'
    | 'pl'
    | 'pt'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sl'
    | 'es'
    | 'sw'
    | 'sv'
    | 'ta'
    | 'th'
    | 'tr'
    | 'uk'
    | 'ur'
    | 'ug'
    | 'vi'
    | 'cy';
}

export interface FallbackTalkscriberTranscriber {
  /** This is the transcription provider that will be used. */
  provider: 'talkscriber';
  /** This is the model that will be used for the transcription. */
  model?: 'whisper';
  /** This is the language that will be set for the transcription. The list of languages Whisper supports can be found here: https://github.com/openai/whisper/blob/main/whisper/tokenizer.py */
  language?:
    | 'en'
    | 'zh'
    | 'de'
    | 'es'
    | 'ru'
    | 'ko'
    | 'fr'
    | 'ja'
    | 'pt'
    | 'tr'
    | 'pl'
    | 'ca'
    | 'nl'
    | 'ar'
    | 'sv'
    | 'it'
    | 'id'
    | 'hi'
    | 'fi'
    | 'vi'
    | 'he'
    | 'uk'
    | 'el'
    | 'ms'
    | 'cs'
    | 'ro'
    | 'da'
    | 'hu'
    | 'ta'
    | 'no'
    | 'th'
    | 'ur'
    | 'hr'
    | 'bg'
    | 'lt'
    | 'la'
    | 'mi'
    | 'ml'
    | 'cy'
    | 'sk'
    | 'te'
    | 'fa'
    | 'lv'
    | 'bn'
    | 'sr'
    | 'az'
    | 'sl'
    | 'kn'
    | 'et'
    | 'mk'
    | 'br'
    | 'eu'
    | 'is'
    | 'hy'
    | 'ne'
    | 'mn'
    | 'bs'
    | 'kk'
    | 'sq'
    | 'sw'
    | 'gl'
    | 'mr'
    | 'pa'
    | 'si'
    | 'km'
    | 'sn'
    | 'yo'
    | 'so'
    | 'af'
    | 'oc'
    | 'ka'
    | 'be'
    | 'tg'
    | 'sd'
    | 'gu'
    | 'am'
    | 'yi'
    | 'lo'
    | 'uz'
    | 'fo'
    | 'ht'
    | 'ps'
    | 'tk'
    | 'nn'
    | 'mt'
    | 'sa'
    | 'lb'
    | 'my'
    | 'bo'
    | 'tl'
    | 'mg'
    | 'as'
    | 'tt'
    | 'haw'
    | 'ln'
    | 'ha'
    | 'ba'
    | 'jw'
    | 'su'
    | 'yue';
}

export interface FallbackGoogleTranscriber {
  /** This is the transcription provider that will be used. */
  provider: 'google';
  /** This is the model that will be used for the transcription. */
  model?:
    | 'gemini-2.0-flash-thinking-exp'
    | 'gemini-2.0-pro-exp-02-05'
    | 'gemini-2.0-flash'
    | 'gemini-2.0-flash-lite'
    | 'gemini-2.0-flash-lite-preview-02-05'
    | 'gemini-2.0-flash-exp'
    | 'gemini-2.0-flash-realtime-exp'
    | 'gemini-1.5-flash'
    | 'gemini-1.5-flash-002'
    | 'gemini-1.5-pro'
    | 'gemini-1.5-pro-002'
    | 'gemini-1.0-pro';
  /** This is the language that will be set for the transcription. */
  language?:
    | 'Multilingual'
    | 'Arabic'
    | 'Bengali'
    | 'Bulgarian'
    | 'Chinese'
    | 'Croatian'
    | 'Czech'
    | 'Danish'
    | 'Dutch'
    | 'English'
    | 'Estonian'
    | 'Finnish'
    | 'French'
    | 'German'
    | 'Greek'
    | 'Hebrew'
    | 'Hindi'
    | 'Hungarian'
    | 'Indonesian'
    | 'Italian'
    | 'Japanese'
    | 'Korean'
    | 'Latvian'
    | 'Lithuanian'
    | 'Norwegian'
    | 'Polish'
    | 'Portuguese'
    | 'Romanian'
    | 'Russian'
    | 'Serbian'
    | 'Slovak'
    | 'Slovenian'
    | 'Spanish'
    | 'Swahili'
    | 'Swedish'
    | 'Thai'
    | 'Turkish'
    | 'Ukrainian'
    | 'Vietnamese';
}

export interface FallbackOpenAITranscriber {
  /** This is the transcription provider that will be used. */
  provider: 'openai';
  /** This is the model that will be used for the transcription. */
  model: 'gpt-4o-transcribe' | 'gpt-4o-mini-transcribe';
  /** This is the language that will be set for the transcription. */
  language?:
    | 'af'
    | 'ar'
    | 'hy'
    | 'az'
    | 'be'
    | 'bs'
    | 'bg'
    | 'ca'
    | 'zh'
    | 'hr'
    | 'cs'
    | 'da'
    | 'nl'
    | 'en'
    | 'et'
    | 'fi'
    | 'fr'
    | 'gl'
    | 'de'
    | 'el'
    | 'he'
    | 'hi'
    | 'hu'
    | 'is'
    | 'id'
    | 'it'
    | 'ja'
    | 'kn'
    | 'kk'
    | 'ko'
    | 'lv'
    | 'lt'
    | 'mk'
    | 'ms'
    | 'mr'
    | 'mi'
    | 'ne'
    | 'no'
    | 'fa'
    | 'pl'
    | 'pt'
    | 'ro'
    | 'ru'
    | 'sr'
    | 'sk'
    | 'sl'
    | 'es'
    | 'sw'
    | 'sv'
    | 'tl'
    | 'ta'
    | 'th'
    | 'tr'
    | 'uk'
    | 'ur'
    | 'vi'
    | 'cy';
}

export interface LangfuseObservabilityPlan {
  provider: 'langfuse';
  /** This is an array of tags to be added to the Langfuse trace. Tags allow you to categorize and filter traces. https://langfuse.com/docs/tracing-features/tags */
  tags: string[];
  /**
   * This is a JSON object that will be added to the Langfuse trace. Traces can be enriched with metadata to better understand your users, application, and experiments. https://langfuse.com/docs/tracing-features/metadata
   * By default it includes the call metadata, assistant metadata, and assistant overrides.
   */
  metadata?: object;
}

export interface TextContent {
  type: 'text';
  text: string;
  language:
    | 'aa'
    | 'ab'
    | 'ae'
    | 'af'
    | 'ak'
    | 'am'
    | 'an'
    | 'ar'
    | 'as'
    | 'av'
    | 'ay'
    | 'az'
    | 'ba'
    | 'be'
    | 'bg'
    | 'bh'
    | 'bi'
    | 'bm'
    | 'bn'
    | 'bo'
    | 'br'
    | 'bs'
    | 'ca'
    | 'ce'
    | 'ch'
    | 'co'
    | 'cr'
    | 'cs'
    | 'cu'
    | 'cv'
    | 'cy'
    | 'da'
    | 'de'
    | 'dv'
    | 'dz'
    | 'ee'
    | 'el'
    | 'en'
    | 'eo'
    | 'es'
    | 'et'
    | 'eu'
    | 'fa'
    | 'ff'
    | 'fi'
    | 'fj'
    | 'fo'
    | 'fr'
    | 'fy'
    | 'ga'
    | 'gd'
    | 'gl'
    | 'gn'
    | 'gu'
    | 'gv'
    | 'ha'
    | 'he'
    | 'hi'
    | 'ho'
    | 'hr'
    | 'ht'
    | 'hu'
    | 'hy'
    | 'hz'
    | 'ia'
    | 'id'
    | 'ie'
    | 'ig'
    | 'ii'
    | 'ik'
    | 'io'
    | 'is'
    | 'it'
    | 'iu'
    | 'ja'
    | 'jv'
    | 'ka'
    | 'kg'
    | 'ki'
    | 'kj'
    | 'kk'
    | 'kl'
    | 'km'
    | 'kn'
    | 'ko'
    | 'kr'
    | 'ks'
    | 'ku'
    | 'kv'
    | 'kw'
    | 'ky'
    | 'la'
    | 'lb'
    | 'lg'
    | 'li'
    | 'ln'
    | 'lo'
    | 'lt'
    | 'lu'
    | 'lv'
    | 'mg'
    | 'mh'
    | 'mi'
    | 'mk'
    | 'ml'
    | 'mn'
    | 'mr'
    | 'ms'
    | 'mt'
    | 'my'
    | 'na'
    | 'nb'
    | 'nd'
    | 'ne'
    | 'ng'
    | 'nl'
    | 'nn'
    | 'no'
    | 'nr'
    | 'nv'
    | 'ny'
    | 'oc'
    | 'oj'
    | 'om'
    | 'or'
    | 'os'
    | 'pa'
    | 'pi'
    | 'pl'
    | 'ps'
    | 'pt'
    | 'qu'
    | 'rm'
    | 'rn'
    | 'ro'
    | 'ru'
    | 'rw'
    | 'sa'
    | 'sc'
    | 'sd'
    | 'se'
    | 'sg'
    | 'si'
    | 'sk'
    | 'sl'
    | 'sm'
    | 'sn'
    | 'so'
    | 'sq'
    | 'sr'
    | 'ss'
    | 'st'
    | 'su'
    | 'sv'
    | 'sw'
    | 'ta'
    | 'te'
    | 'tg'
    | 'th'
    | 'ti'
    | 'tk'
    | 'tl'
    | 'tn'
    | 'to'
    | 'tr'
    | 'ts'
    | 'tt'
    | 'tw'
    | 'ty'
    | 'ug'
    | 'uk'
    | 'ur'
    | 'uz'
    | 've'
    | 'vi'
    | 'vo'
    | 'wa'
    | 'wo'
    | 'xh'
    | 'yi'
    | 'yue'
    | 'yo'
    | 'za'
    | 'zh'
    | 'zu';
}

export interface Condition {
  /** This is the operator you want to use to compare the parameter and value. */
  operator: 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte';
  /**
   * This is the name of the parameter that you want to check.
   * @maxLength 1000
   */
  param: string;
  /**
   * This is the value you want to compare against the parameter.
   * @maxLength 1000
   */
  value: object;
}

export interface ToolMessageStart {
  /**
   * This is an alternative to the `content` property. It allows to specify variants of the same content, one per language.
   *
   * Usage:
   * - If your assistants are multilingual, you can provide content for each language.
   * - If you don't provide content for a language, the first item in the array will be automatically translated to the active language at that moment.
   *
   * This will override the `content` property.
   */
  contents?: TextContent[];
  /**
   * This message is triggered when the tool call starts.
   *
   * This message is never triggered for async tools.
   *
   * If this message is not provided, one of the default filler messages "Hold on a sec", "One moment", "Just a sec", "Give me a moment" or "This'll just take a sec" will be used.
   */
  type: 'request-start';
  /**
   * This is an optional boolean that if true, the tool call will only trigger after the message is spoken. Default is false.
   *
   * @default false
   * @default false
   * @example false
   */
  blocking?: boolean;
  /**
   * This is the content that the assistant says when this message is triggered.
   * @maxLength 1000
   */
  content?: string;
  /** This is an optional array of conditions that the tool call arguments must meet in order for this message to be triggered. */
  conditions?: Condition[];
}

export interface ToolMessageComplete {
  /**
   * This is an alternative to the `content` property. It allows to specify variants of the same content, one per language.
   *
   * Usage:
   * - If your assistants are multilingual, you can provide content for each language.
   * - If you don't provide content for a language, the first item in the array will be automatically translated to the active language at that moment.
   *
   * This will override the `content` property.
   */
  contents?: TextContent[];
  /**
   * This message is triggered when the tool call is complete.
   *
   * This message is triggered immediately without waiting for your server to respond for async tool calls.
   *
   * If this message is not provided, the model will be requested to respond.
   *
   * If this message is provided, only this message will be spoken and the model will not be requested to come up with a response. It's an exclusive OR.
   */
  type: 'request-complete';
  /**
   * This is optional and defaults to "assistant".
   *
   * When role=assistant, `content` is said out loud.
   *
   * When role=system, `content` is passed to the model in a system message. Example:
   *     system: default one
   *     assistant:
   *     user:
   *     assistant:
   *     user:
   *     assistant:
   *     user:
   *     assistant: tool called
   *     tool: your server response
   *     <--- system prompt as hint
   *     ---> model generates response which is spoken
   * This is useful when you want to provide a hint to the model about what to say next.
   */
  role?: 'assistant' | 'system';
  /**
   * This is an optional boolean that if true, the call will end after the message is spoken. Default is false.
   *
   * This is ignored if `role` is set to `system`.
   *
   * @default false
   * @example false
   */
  endCallAfterSpokenEnabled?: boolean;
  /**
   * This is the content that the assistant says when this message is triggered.
   * @maxLength 1000
   */
  content?: string;
  /** This is an optional array of conditions that the tool call arguments must meet in order for this message to be triggered. */
  conditions?: Condition[];
}

export interface ToolMessageFailed {
  /**
   * This is an alternative to the `content` property. It allows to specify variants of the same content, one per language.
   *
   * Usage:
   * - If your assistants are multilingual, you can provide content for each language.
   * - If you don't provide content for a language, the first item in the array will be automatically translated to the active language at that moment.
   *
   * This will override the `content` property.
   */
  contents?: TextContent[];
  /**
   * This message is triggered when the tool call fails.
   *
   * This message is never triggered for async tool calls.
   *
   * If this message is not provided, the model will be requested to respond.
   *
   * If this message is provided, only this message will be spoken and the model will not be requested to come up with a response. It's an exclusive OR.
   */
  type: 'request-failed';
  /**
   * This is an optional boolean that if true, the call will end after the message is spoken. Default is false.
   *
   * @default false
   * @example false
   */
  endCallAfterSpokenEnabled?: boolean;
  /**
   * This is the content that the assistant says when this message is triggered.
   * @maxLength 1000
   */
  content?: string;
  /** This is an optional array of conditions that the tool call arguments must meet in order for this message to be triggered. */
  conditions?: Condition[];
}

export interface ToolMessageDelayed {
  /**
   * This is an alternative to the `content` property. It allows to specify variants of the same content, one per language.
   *
   * Usage:
   * - If your assistants are multilingual, you can provide content for each language.
   * - If you don't provide content for a language, the first item in the array will be automatically translated to the active language at that moment.
   *
   * This will override the `content` property.
   */
  contents?: TextContent[];
  /**
   * This message is triggered when the tool call is delayed.
   *
   * There are the two things that can trigger this message:
   * 1. The user talks with the assistant while your server is processing the request. Default is "Sorry, a few more seconds."
   * 2. The server doesn't respond within `timingMilliseconds`.
   *
   * This message is never triggered for async tool calls.
   */
  type: 'request-response-delayed';
  /**
   * The number of milliseconds to wait for the server response before saying this message.
   * @min 100
   * @max 120000
   * @example 1000
   */
  timingMilliseconds?: number;
  /**
   * This is the content that the assistant says when this message is triggered.
   * @maxLength 1000
   */
  content?: string;
  /** This is an optional array of conditions that the tool call arguments must meet in order for this message to be triggered. */
  conditions?: Condition[];
}

export interface JsonSchema {
  /**
   * This is the type of output you'd like.
   *
   * `string`, `number`, `integer`, `boolean` are the primitive types and should be obvious.
   *
   * `array` and `object` are more interesting and quite powerful. They allow you to define nested structures.
   *
   * For `array`, you can define the schema of the items in the array using the `items` property.
   *
   * For `object`, you can define the properties of the object using the `properties` property.
   */
  type: 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'object';
  /**
   * This is required if the type is "array". This is the schema of the items in the array.
   *
   * This is of type JsonSchema. However, Swagger doesn't support circular references.
   */
  items?: object;
  /**
   * This is required if the type is "object". This specifies the properties of the object.
   *
   * This is a map of string to JsonSchema. However, Swagger doesn't support circular references.
   */
  properties?: object;
  /** This is the description to help the model understand what it needs to output. */
  description?: string;
  /**
   * This is a list of properties that are required.
   *
   * This only makes sense if the type is "object".
   */
  required?: string[];
  /** This is a regex that will be used to validate data in question. */
  regex?: string;
  /** This the value that will be used in filling the property. */
  value?: string;
  /** This the target variable that will be filled with the value of this property. */
  target?: string;
  /** This array specifies the allowed values that can be used to restrict the output of the model. */
  enum?: string[];
}

export interface OpenAIFunctionParameters {
  /** This must be set to 'object'. It instructs the model to return a JSON object containing the function call properties. */
  type: 'object';
  /**
   * This provides a description of the properties required by the function.
   * JSON Schema can be used to specify expectations for each property.
   * Refer to [this doc](https://ajv.js.org/json-schema.html#json-data-type) for a comprehensive guide on JSON Schema.
   */
  properties: Record<string, JsonSchema>;
  /** This specifies the properties that are required by the function. */
  required?: string[];
}

export interface OpenAIFunction {
  /**
   * This is a boolean that controls whether to enable strict schema adherence when generating the function call. If set to true, the model will follow the exact schema defined in the parameters field. Only a subset of JSON Schema is supported when strict is true. Learn more about Structured Outputs in the [OpenAI guide](https://openai.com/index/introducing-structured-outputs-in-the-api/).
   *
   * @default false
   * @default false
   */
  strict?: boolean;
  /**
   * This is the the name of the function to be called.
   *
   * Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64.
   * @maxLength 64
   * @pattern /^[a-zA-Z0-9_-]{1,64}$/
   */
  name: string;
  /**
   * This is the description of what the function does, used by the AI to choose when and how to call the function.
   * @maxLength 1000
   */
  description?: string;
  /**
   * These are the parameters the functions accepts, described as a JSON Schema object.
   *
   * See the [OpenAI guide](https://platform.openai.com/docs/guides/function-calling) for examples, and the [JSON Schema reference](https://json-schema.org/understanding-json-schema) for documentation about the format.
   *
   * Omitting parameters defines a function with an empty parameter list.
   */
  parameters?: OpenAIFunctionParameters;
}

export interface CreateDtmfToolDTO {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "dtmf" for DTMF tool. */
  type: 'dtmf';
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface CreateEndCallToolDTO {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "endCall" for End Call tool. */
  type: 'endCall';
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface CreateVoicemailToolDTO {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "voicemail". This uses the model itself to determine if a voicemil was reached. Can be used alternatively/alongside with TwilioVoicemailDetection */
  type: 'voicemail';
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface CreateFunctionToolDTO {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "function" for Function tool. */
  type: 'function';
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface GhlToolMetadata {
  workflowId?: string;
  locationId?: string;
}

export interface CreateGhlToolDTO {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "ghl" for GHL tool. */
  type: 'ghl';
  metadata: GhlToolMetadata;
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface MakeToolMetadata {
  scenarioId?: number;
  triggerHookId?: number;
}

export interface CreateMakeToolDTO {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "make" for Make tool. */
  type: 'make';
  metadata: MakeToolMetadata;
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface CustomMessage {
  /**
   * This is an alternative to the `content` property. It allows to specify variants of the same content, one per language.
   *
   * Usage:
   * - If your assistants are multilingual, you can provide content for each language.
   * - If you don't provide content for a language, the first item in the array will be automatically translated to the active language at that moment.
   *
   * This will override the `content` property.
   */
  contents?: TextContent[];
  /** This is a custom message. */
  type: 'custom-message';
  /**
   * This is the content that the assistant will say when this message is triggered.
   * @maxLength 1000
   */
  content?: string;
}

export interface TransferDestinationAssistant {
  /**
   * This is spoken to the customer before connecting them to the destination.
   *
   * Usage:
   * - If this is not provided and transfer tool messages is not provided, default is "Transferring the call now".
   * - If set to "", nothing is spoken. This is useful when you want to silently transfer. This is especially useful when transferring between assistants in a squad. In this scenario, you likely also want to set `assistant.firstMessageMode=assistant-speaks-first-with-model-generated-message` for the destination assistant.
   *
   * This accepts a string or a ToolMessageStart class. Latter is useful if you want to specify multiple messages for different languages through the `contents` field.
   */
  message?: string | CustomMessage;
  type: 'assistant';
  /**
   * This is the mode to use for the transfer. Defaults to `rolling-history`.
   *
   * - `rolling-history`: This is the default mode. It keeps the entire conversation history and appends the new assistant's system message on transfer.
   *
   *   Example:
   *
   *   Pre-transfer:
   *     system: assistant1 system message
   *     assistant: assistant1 first message
   *     user: hey, good morning
   *     assistant: how can i help?
   *     user: i need help with my account
   *     assistant: (destination.message)
   *
   *   Post-transfer:
   *     system: assistant1 system message
   *     assistant: assistant1 first message
   *     user: hey, good morning
   *     assistant: how can i help?
   *     user: i need help with my account
   *     assistant: (destination.message)
   *     system: assistant2 system message
   *     assistant: assistant2 first message (or model generated if firstMessageMode is set to `assistant-speaks-first-with-model-generated-message`)
   *
   * - `swap-system-message-in-history`: This replaces the original system message with the new assistant's system message on transfer.
   *
   *   Example:
   *
   *   Pre-transfer:
   *     system: assistant1 system message
   *     assistant: assistant1 first message
   *     user: hey, good morning
   *     assistant: how can i help?
   *     user: i need help with my account
   *     assistant: (destination.message)
   *
   *   Post-transfer:
   *     system: assistant2 system message
   *     assistant: assistant1 first message
   *     user: hey, good morning
   *     assistant: how can i help?
   *     user: i need help with my account
   *     assistant: (destination.message)
   *     assistant: assistant2 first message (or model generated if firstMessageMode is set to `assistant-speaks-first-with-model-generated-message`)
   *
   * - `delete-history`: This deletes the entire conversation history on transfer.
   *
   *   Example:
   *
   *   Pre-transfer:
   *     system: assistant1 system message
   *     assistant: assistant1 first message
   *     user: hey, good morning
   *     assistant: how can i help?
   *     user: i need help with my account
   *     assistant: (destination.message)
   *
   *   Post-transfer:
   *     system: assistant2 system message
   *     assistant: assistant2 first message
   *     user: Yes, please
   *     assistant: how can i help?
   *     user: i need help with my account
   *
   * - `swap-system-message-in-history-and-remove-transfer-tool-messages`: This replaces the original system message with the new assistant's system message on transfer and removes transfer tool messages from conversation history sent to the LLM.
   *
   *   Example:
   *
   *   Pre-transfer:
   *     system: assistant1 system message
   *     assistant: assistant1 first message
   *     user: hey, good morning
   *     assistant: how can i help?
   *     user: i need help with my account
   *     transfer-tool
   *     transfer-tool-result
   *     assistant: (destination.message)
   *
   *   Post-transfer:
   *     system: assistant2 system message
   *     assistant: assistant1 first message
   *     user: hey, good morning
   *     assistant: how can i help?
   *     user: i need help with my account
   *     assistant: (destination.message)
   *     assistant: assistant2 first message (or model generated if firstMessageMode is set to `assistant-speaks-first-with-model-generated-message`)
   *
   * @default 'rolling-history'
   */
  transferMode?:
    | 'rolling-history'
    | 'swap-system-message-in-history'
    | 'swap-system-message-in-history-and-remove-transfer-tool-messages'
    | 'delete-history';
  /** This is the assistant to transfer the call to. */
  assistantName: string;
  /** This is the description of the destination, used by the AI to choose when and how to transfer the call. */
  description?: string;
}

export interface TransferDestinationStep {
  /**
   * This is spoken to the customer before connecting them to the destination.
   *
   * Usage:
   * - If this is not provided and transfer tool messages is not provided, default is "Transferring the call now".
   * - If set to "", nothing is spoken. This is useful when you want to silently transfer. This is especially useful when transferring between assistants in a squad. In this scenario, you likely also want to set `assistant.firstMessageMode=assistant-speaks-first-with-model-generated-message` for the destination assistant.
   *
   * This accepts a string or a ToolMessageStart class. Latter is useful if you want to specify multiple messages for different languages through the `contents` field.
   */
  message?: string | CustomMessage;
  type: 'step';
  /** This is the step to transfer to. */
  stepName: string;
  /** This is the description of the destination, used by the AI to choose when and how to transfer the call. */
  description?: string;
}

export interface SummaryPlan {
  /**
   * These are the messages used to generate the summary.
   *
   * @default: ```
   * [
   *   {
   *     "role": "system",
   *     "content": "You are an expert note-taker. You will be given a transcript of a call. Summarize the call in 2-3 sentences. DO NOT return anything except the summary."
   *   },
   *   {
   *     "role": "user",
   *     "content": "Here is the transcript:\n\n{{transcript}}\n\n"
   *   }
   * ]```
   *
   * You can customize by providing any messages you want.
   *
   * Here are the template variables available:
   * - {{transcript}}: The transcript of the call from `call.artifact.transcript`- {{systemPrompt}}: The system prompt of the call from `assistant.model.messages[type=system].content`
   */
  messages?: object[];
  /**
   * This determines whether a summary is generated and stored in `call.analysis.summary`. Defaults to true.
   *
   * Usage:
   * - If you want to disable the summary, set this to false.
   *
   * @default true
   */
  enabled?: boolean;
  /**
   * This is how long the request is tried before giving up. When request times out, `call.analysis.summary` will be empty.
   *
   * Usage:
   * - To guarantee the summary is generated, set this value high. Note, this will delay the end of call report in cases where model is slow to respond.
   *
   * @default 5 seconds
   * @min 1
   * @max 60
   */
  timeoutSeconds?: number;
}

export interface TransferPlan {
  /**
   * This configures how transfer is executed and the experience of the destination party receiving the call.
   *
   * Usage:
   * - `blind-transfer`: The assistant forwards the call to the destination without any message or summary.
   * - `blind-transfer-add-summary-to-sip-header`: The assistant forwards the call to the destination and adds a SIP header X-Transfer-Summary to the call to include the summary.
   * - `warm-transfer-say-message`: The assistant dials the destination, delivers the `message` to the destination party, connects the customer, and leaves the call.
   * - `warm-transfer-say-summary`: The assistant dials the destination, provides a summary of the call to the destination party, connects the customer, and leaves the call.
   * - `warm-transfer-wait-for-operator-to-speak-first-and-then-say-message`: The assistant dials the destination, waits for the operator to speak, delivers the `message` to the destination party, and then connects the customer.
   * - `warm-transfer-wait-for-operator-to-speak-first-and-then-say-summary`: The assistant dials the destination, waits for the operator to speak, provides a summary of the call to the destination party, and then connects the customer.
   * - `warm-transfer-twiml`: The assistant dials the destination, executes the twiml instructions on the destination call leg, connects the customer, and leaves the call.
   *
   * @default 'blind-transfer'
   */
  mode:
    | 'blind-transfer'
    | 'blind-transfer-add-summary-to-sip-header'
    | 'warm-transfer-say-message'
    | 'warm-transfer-say-summary'
    | 'warm-transfer-twiml'
    | 'warm-transfer-wait-for-operator-to-speak-first-and-then-say-message'
    | 'warm-transfer-wait-for-operator-to-speak-first-and-then-say-summary';
  /**
   * This is the message the assistant will deliver to the destination party before connecting the customer.
   *
   * Usage:
   * - Used only when `mode` is `blind-transfer-add-summary-to-sip-header`, `warm-transfer-say-message` or `warm-transfer-wait-for-operator-to-speak-first-and-then-say-message`.
   */
  message?: string | CustomMessage;
  /**
   * This specifies the SIP verb to use while transferring the call.
   * - 'refer': Uses SIP REFER to transfer the call (default)
   * - 'bye': Ends current call with SIP BYE
   * - 'dial': Uses SIP DIAL to transfer the call
   * @default "refer"
   */
  sipVerb?: 'refer' | 'bye' | 'dial';
  /**
   * This is the TwiML instructions to execute on the destination call leg before connecting the customer.
   *
   * Usage:
   * - Used only when `mode` is `warm-transfer-twiml`.
   * - Supports only `Play`, `Say`, `Gather`, `Hangup` and `Pause` verbs.
   * - Maximum length is 4096 characters.
   *
   * Example:
   * ```
   * <Say voice="alice" language="en-US">Hello, transferring a customer to you.</Say>
   * <Pause length="2"/>
   * <Say>They called about billing questions.</Say>
   * ```
   * @maxLength 4096
   */
  twiml?: string;
  /**
   * This is the plan for generating a summary of the call to present to the destination party.
   *
   * Usage:
   * - Used only when `mode` is `blind-transfer-add-summary-to-sip-header` or `warm-transfer-say-summary` or `warm-transfer-wait-for-operator-to-speak-first-and-then-say-summary`.
   */
  summaryPlan?: SummaryPlan;
}

export interface TransferDestinationNumber {
  /**
   * This is spoken to the customer before connecting them to the destination.
   *
   * Usage:
   * - If this is not provided and transfer tool messages is not provided, default is "Transferring the call now".
   * - If set to "", nothing is spoken. This is useful when you want to silently transfer. This is especially useful when transferring between assistants in a squad. In this scenario, you likely also want to set `assistant.firstMessageMode=assistant-speaks-first-with-model-generated-message` for the destination assistant.
   *
   * This accepts a string or a ToolMessageStart class. Latter is useful if you want to specify multiple messages for different languages through the `contents` field.
   */
  message?: string | CustomMessage;
  type: 'number';
  /**
   * This is the flag to toggle the E164 check for the `number` field. This is an advanced property which should be used if you know your use case requires it.
   *
   * Use cases:
   * - `false`: To allow non-E164 numbers like `+001234567890`, `1234`, or `abc`. This is useful for dialing out to non-E164 numbers on your SIP trunks.
   * - `true` (default): To allow only E164 numbers like `+14155551234`. This is standard for PSTN calls.
   *
   * If `false`, the `number` is still required to only contain alphanumeric characters (regex: `/^\+?[a-zA-Z0-9]+$/`).
   *
   * @default true (E164 check is enabled)
   * @default true
   */
  numberE164CheckEnabled?: boolean;
  /**
   * This is the phone number to transfer the call to.
   * @minLength 3
   * @maxLength 40
   */
  number: string;
  /**
   * This is the extension to dial after transferring the call to the `number`.
   * @minLength 1
   * @maxLength 10
   */
  extension?: string;
  /**
   * This is the caller ID to use when transferring the call to the `number`.
   *
   * Usage:
   * - If not provided, the caller ID will be the number the call is coming from. Example, +14151111111 calls in to and the assistant transfers out to +16470000000. +16470000000 will see +14151111111 as the caller.
   * - To change this behavior, provide a `callerId`.
   * - Set to '{{customer.number}}' to always use the customer's number as the caller ID.
   * - Set to '{{phoneNumber.number}}' to always use the phone number of the assistant as the caller ID.
   * - Set to any E164 number to always use that number as the caller ID. This needs to be a number that is owned or verified by your Transport provider like Twilio.
   *
   * For Twilio, you can read up more here: https://www.twilio.com/docs/voice/twiml/dial#callerid
   * @maxLength 40
   */
  callerId?: string;
  /**
   * This configures how transfer is executed and the experience of the destination party receiving the call. Defaults to `blind-transfer`.
   *
   * @default `transferPlan.mode='blind-transfer'`
   */
  transferPlan?: TransferPlan;
  /** This is the description of the destination, used by the AI to choose when and how to transfer the call. */
  description?: string;
}

export interface TransferDestinationSip {
  /**
   * This is spoken to the customer before connecting them to the destination.
   *
   * Usage:
   * - If this is not provided and transfer tool messages is not provided, default is "Transferring the call now".
   * - If set to "", nothing is spoken. This is useful when you want to silently transfer. This is especially useful when transferring between assistants in a squad. In this scenario, you likely also want to set `assistant.firstMessageMode=assistant-speaks-first-with-model-generated-message` for the destination assistant.
   *
   * This accepts a string or a ToolMessageStart class. Latter is useful if you want to specify multiple messages for different languages through the `contents` field.
   */
  message?: string | CustomMessage;
  type: 'sip';
  /** This is the SIP URI to transfer the call to. */
  sipUri: string;
  /**
   * This configures how transfer is executed and the experience of the destination party receiving the call. Defaults to `blind-transfer`.
   *
   * @default `transferPlan.mode='blind-transfer'`
   */
  transferPlan?: TransferPlan;
  /** These are custom headers to be added to SIP refer during transfer call. */
  sipHeaders?: object;
  /** This is the description of the destination, used by the AI to choose when and how to transfer the call. */
  description?: string;
}

export interface CreateTransferCallToolDTO {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  type: 'transferCall';
  /** These are the destinations that the call can be transferred to. If no destinations are provided, server.url will be used to get the transfer destination once the tool is called. */
  destinations?: (
    | TransferDestinationAssistant
    | TransferDestinationStep
    | TransferDestinationNumber
    | TransferDestinationSip
  )[];
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface CreateCustomKnowledgeBaseDTO {
  /** This knowledge base is bring your own knowledge base implementation. */
  provider: 'custom-knowledge-base';
  /**
   * This is where the knowledge base request will be sent.
   *
   * Request Example:
   *
   * POST https://{server.url}
   * Content-Type: application/json
   *
   * {
   *   "messsage": {
   *     "type": "knowledge-base-request",
   *     "messages": [
   *       {
   *         "role": "user",
   *         "content": "Why is ocean blue?"
   *       }
   *     ],
   *     ...other metadata about the call...
   *   }
   * }
   *
   * Response Expected:
   * ```
   * {
   *   "message": {
   *      "role": "assistant",
   *      "content": "The ocean is blue because water absorbs everything but blue.",
   *   }, // YOU CAN RETURN THE EXACT RESPONSE TO SPEAK
   *   "documents": [
   *     {
   *       "content": "The ocean is blue primarily because water absorbs colors in the red part of the light spectrum and scatters the blue light, making it more visible to our eyes.",
   *       "similarity": 1
   *     },
   *     {
   *       "content": "Blue light is scattered more by the water molecules than other colors, enhancing the blue appearance of the ocean.",
   *       "similarity": .5
   *     }
   *   ] // OR, YOU CAN RETURN AN ARRAY OF DOCUMENTS THAT WILL BE SENT TO THE MODEL
   * }
   * ```
   */
  server: Server;
}

export interface OpenAIMessage {
  /** @maxLength 100000000 */
  content: string | null;
  role: 'assistant' | 'function' | 'user' | 'system' | 'tool';
}

export interface AnyscaleModel {
  /** This is the starting state for the conversation. */
  messages?: OpenAIMessage[];
  /**
   * These are the tools that the assistant can use during the call. To use existing tools, use `toolIds`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  tools?: (
    | CreateDtmfToolDTO
    | CreateEndCallToolDTO
    | CreateVoicemailToolDTO
    | CreateFunctionToolDTO
    | CreateGhlToolDTO
    | CreateMakeToolDTO
    | CreateTransferCallToolDTO
    | CreateQueryToolDTO
    | CreateGoogleCalendarCreateEventToolDTO
    | CreateGoogleSheetsRowAppendToolDTO
  )[];
  /**
   * These are the tools that the assistant can use during the call. To use transient tools, use `tools`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  toolIds?: string[];
  /** These are the options for the knowledge base. */
  knowledgeBase?: CreateCustomKnowledgeBaseDTO;
  /** This is the ID of the knowledge base the model will use. */
  knowledgeBaseId?: string;
  provider: 'anyscale';
  /** This is the name of the model. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
  model: string;
  /**
   * This is the temperature that will be used for calls. Default is 0 to leverage caching for lower latency.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /**
   * This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation. Default is 250.
   * @min 50
   * @max 10000
   */
  maxTokens?: number;
  /**
   * This determines whether we detect user's emotion while they speak and send it as an additional info to model.
   *
   * Default `false` because the model is usually are good at understanding the user's emotion from text.
   *
   * @default false
   */
  emotionRecognitionEnabled?: boolean;
  /**
   * This sets how many turns at the start of the conversation to use a smaller, faster model from the same provider before switching to the primary model. Example, gpt-3.5-turbo if provider is openai.
   *
   * Default is 0.
   *
   * @default 0
   * @min 0
   */
  numFastTurns?: number;
}

export interface AnthropicThinkingConfig {
  type: 'enabled';
  /**
   * The maximum number of tokens to allocate for thinking.
   * Must be between 1024 and 100000 tokens.
   * @min 1024
   * @max 100000
   */
  budgetTokens: number;
}

export interface AnthropicModel {
  /** This is the starting state for the conversation. */
  messages?: OpenAIMessage[];
  /**
   * These are the tools that the assistant can use during the call. To use existing tools, use `toolIds`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  tools?: (
    | CreateDtmfToolDTO
    | CreateEndCallToolDTO
    | CreateVoicemailToolDTO
    | CreateFunctionToolDTO
    | CreateGhlToolDTO
    | CreateMakeToolDTO
    | CreateTransferCallToolDTO
    | CreateQueryToolDTO
    | CreateGoogleCalendarCreateEventToolDTO
    | CreateGoogleSheetsRowAppendToolDTO
  )[];
  /**
   * These are the tools that the assistant can use during the call. To use transient tools, use `tools`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  toolIds?: string[];
  /** These are the options for the knowledge base. */
  knowledgeBase?: CreateCustomKnowledgeBaseDTO;
  /** This is the ID of the knowledge base the model will use. */
  knowledgeBaseId?: string;
  /** The specific Anthropic/Claude model that will be used. */
  model:
    | 'claude-3-opus-20240229'
    | 'claude-3-sonnet-20240229'
    | 'claude-3-haiku-20240307'
    | 'claude-3-5-sonnet-20240620'
    | 'claude-3-5-sonnet-20241022'
    | 'claude-3-5-haiku-20241022'
    | 'claude-3-7-sonnet-20250219';
  /** The provider identifier for Anthropic. */
  provider: 'anthropic';
  /**
   * Optional configuration for Anthropic's thinking feature.
   * Only applicable for claude-3-7-sonnet-20250219 model.
   * If provided, maxTokens must be greater than thinking.budgetTokens.
   */
  thinking?: AnthropicThinkingConfig;
  /**
   * This is the temperature that will be used for calls. Default is 0 to leverage caching for lower latency.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /**
   * This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation. Default is 250.
   * @min 50
   * @max 10000
   */
  maxTokens?: number;
  /**
   * This determines whether we detect user's emotion while they speak and send it as an additional info to model.
   *
   * Default `false` because the model is usually are good at understanding the user's emotion from text.
   *
   * @default false
   */
  emotionRecognitionEnabled?: boolean;
  /**
   * This sets how many turns at the start of the conversation to use a smaller, faster model from the same provider before switching to the primary model. Example, gpt-3.5-turbo if provider is openai.
   *
   * Default is 0.
   *
   * @default 0
   * @min 0
   */
  numFastTurns?: number;
}

export interface CerebrasModel {
  /** This is the starting state for the conversation. */
  messages?: OpenAIMessage[];
  /**
   * These are the tools that the assistant can use during the call. To use existing tools, use `toolIds`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  tools?: (
    | CreateDtmfToolDTO
    | CreateEndCallToolDTO
    | CreateVoicemailToolDTO
    | CreateFunctionToolDTO
    | CreateGhlToolDTO
    | CreateMakeToolDTO
    | CreateTransferCallToolDTO
    | CreateQueryToolDTO
    | CreateGoogleCalendarCreateEventToolDTO
    | CreateGoogleSheetsRowAppendToolDTO
  )[];
  /**
   * These are the tools that the assistant can use during the call. To use transient tools, use `tools`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  toolIds?: string[];
  /** These are the options for the knowledge base. */
  knowledgeBase?: CreateCustomKnowledgeBaseDTO;
  /** This is the ID of the knowledge base the model will use. */
  knowledgeBaseId?: string;
  /** This is the name of the model. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
  model: 'llama3.1-8b' | 'llama-3.3-70b';
  provider: 'cerebras';
  /**
   * This is the temperature that will be used for calls. Default is 0 to leverage caching for lower latency.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /**
   * This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation. Default is 250.
   * @min 50
   * @max 10000
   */
  maxTokens?: number;
  /**
   * This determines whether we detect user's emotion while they speak and send it as an additional info to model.
   *
   * Default `false` because the model is usually are good at understanding the user's emotion from text.
   *
   * @default false
   */
  emotionRecognitionEnabled?: boolean;
  /**
   * This sets how many turns at the start of the conversation to use a smaller, faster model from the same provider before switching to the primary model. Example, gpt-3.5-turbo if provider is openai.
   *
   * Default is 0.
   *
   * @default 0
   * @min 0
   */
  numFastTurns?: number;
}

export interface CustomLLMModel {
  /** This is the starting state for the conversation. */
  messages?: OpenAIMessage[];
  /**
   * These are the tools that the assistant can use during the call. To use existing tools, use `toolIds`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  tools?: (
    | CreateDtmfToolDTO
    | CreateEndCallToolDTO
    | CreateVoicemailToolDTO
    | CreateFunctionToolDTO
    | CreateGhlToolDTO
    | CreateMakeToolDTO
    | CreateTransferCallToolDTO
    | CreateQueryToolDTO
    | CreateGoogleCalendarCreateEventToolDTO
    | CreateGoogleSheetsRowAppendToolDTO
  )[];
  /**
   * These are the tools that the assistant can use during the call. To use transient tools, use `tools`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  toolIds?: string[];
  /** These are the options for the knowledge base. */
  knowledgeBase?: CreateCustomKnowledgeBaseDTO;
  /** This is the ID of the knowledge base the model will use. */
  knowledgeBaseId?: string;
  /** This is the provider that will be used for the model. Any service, including your own server, that is compatible with the OpenAI API can be used. */
  provider: 'custom-llm';
  /**
   * This determines whether metadata is sent in requests to the custom provider.
   *
   * - `off` will not send any metadata. payload will look like `{ messages }`
   * - `variable` will send `assistant.metadata` as a variable on the payload. payload will look like `{ messages, metadata }`
   * - `destructured` will send `assistant.metadata` fields directly on the payload. payload will look like `{ messages, ...metadata }`
   *
   * Further, `variable` and `destructured` will send `call`, `phoneNumber`, and `customer` objects in the payload.
   *
   * Default is `variable`.
   */
  metadataSendMode?: 'off' | 'variable' | 'destructured';
  /** These is the URL we'll use for the OpenAI client's `baseURL`. Ex. https://openrouter.ai/api/v1 */
  url: string;
  /**
   * This sets the timeout for the connection to the custom provider without needing to stream any tokens back. Default is 20 seconds.
   * @min 20
   * @max 600
   */
  timeoutSeconds?: number;
  /** This is the name of the model. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
  model: string;
  /**
   * This is the temperature that will be used for calls. Default is 0 to leverage caching for lower latency.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /**
   * This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation. Default is 250.
   * @min 50
   * @max 10000
   */
  maxTokens?: number;
  /**
   * This determines whether we detect user's emotion while they speak and send it as an additional info to model.
   *
   * Default `false` because the model is usually are good at understanding the user's emotion from text.
   *
   * @default false
   */
  emotionRecognitionEnabled?: boolean;
  /**
   * This sets how many turns at the start of the conversation to use a smaller, faster model from the same provider before switching to the primary model. Example, gpt-3.5-turbo if provider is openai.
   *
   * Default is 0.
   *
   * @default 0
   * @min 0
   */
  numFastTurns?: number;
}

export interface DeepInfraModel {
  /** This is the starting state for the conversation. */
  messages?: OpenAIMessage[];
  /**
   * These are the tools that the assistant can use during the call. To use existing tools, use `toolIds`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  tools?: (
    | CreateDtmfToolDTO
    | CreateEndCallToolDTO
    | CreateVoicemailToolDTO
    | CreateFunctionToolDTO
    | CreateGhlToolDTO
    | CreateMakeToolDTO
    | CreateTransferCallToolDTO
    | CreateQueryToolDTO
    | CreateGoogleCalendarCreateEventToolDTO
    | CreateGoogleSheetsRowAppendToolDTO
  )[];
  /**
   * These are the tools that the assistant can use during the call. To use transient tools, use `tools`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  toolIds?: string[];
  /** These are the options for the knowledge base. */
  knowledgeBase?: CreateCustomKnowledgeBaseDTO;
  /** This is the ID of the knowledge base the model will use. */
  knowledgeBaseId?: string;
  provider: 'deepinfra';
  /** This is the name of the model. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
  model: string;
  /**
   * This is the temperature that will be used for calls. Default is 0 to leverage caching for lower latency.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /**
   * This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation. Default is 250.
   * @min 50
   * @max 10000
   */
  maxTokens?: number;
  /**
   * This determines whether we detect user's emotion while they speak and send it as an additional info to model.
   *
   * Default `false` because the model is usually are good at understanding the user's emotion from text.
   *
   * @default false
   */
  emotionRecognitionEnabled?: boolean;
  /**
   * This sets how many turns at the start of the conversation to use a smaller, faster model from the same provider before switching to the primary model. Example, gpt-3.5-turbo if provider is openai.
   *
   * Default is 0.
   *
   * @default 0
   * @min 0
   */
  numFastTurns?: number;
}

export interface DeepSeekModel {
  /** This is the starting state for the conversation. */
  messages?: OpenAIMessage[];
  /**
   * These are the tools that the assistant can use during the call. To use existing tools, use `toolIds`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  tools?: (
    | CreateDtmfToolDTO
    | CreateEndCallToolDTO
    | CreateVoicemailToolDTO
    | CreateFunctionToolDTO
    | CreateGhlToolDTO
    | CreateMakeToolDTO
    | CreateTransferCallToolDTO
    | CreateQueryToolDTO
    | CreateGoogleCalendarCreateEventToolDTO
    | CreateGoogleSheetsRowAppendToolDTO
  )[];
  /**
   * These are the tools that the assistant can use during the call. To use transient tools, use `tools`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  toolIds?: string[];
  /** These are the options for the knowledge base. */
  knowledgeBase?: CreateCustomKnowledgeBaseDTO;
  /** This is the ID of the knowledge base the model will use. */
  knowledgeBaseId?: string;
  /** This is the name of the model. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
  model: 'deepseek-chat' | 'deepseek-reasoner';
  provider: 'deep-seek';
  /**
   * This is the temperature that will be used for calls. Default is 0 to leverage caching for lower latency.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /**
   * This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation. Default is 250.
   * @min 50
   * @max 10000
   */
  maxTokens?: number;
  /**
   * This determines whether we detect user's emotion while they speak and send it as an additional info to model.
   *
   * Default `false` because the model is usually are good at understanding the user's emotion from text.
   *
   * @default false
   */
  emotionRecognitionEnabled?: boolean;
  /**
   * This sets how many turns at the start of the conversation to use a smaller, faster model from the same provider before switching to the primary model. Example, gpt-3.5-turbo if provider is openai.
   *
   * Default is 0.
   *
   * @default 0
   * @min 0
   */
  numFastTurns?: number;
}

export interface GeminiMultimodalLivePrebuiltVoiceConfig {
  voiceName: 'Puck' | 'Charon' | 'Kore' | 'Fenrir' | 'Aoede';
}

export interface GeminiMultimodalLiveVoiceConfig {
  prebuiltVoiceConfig: GeminiMultimodalLivePrebuiltVoiceConfig;
}

export interface GeminiMultimodalLiveSpeechConfig {
  voiceConfig: GeminiMultimodalLiveVoiceConfig;
}

export interface GoogleRealtimeConfig {
  /**
   * This is the nucleus sampling parameter that controls the cumulative probability of tokens considered during text generation.
   * Only applicable with the Gemini Flash 2.0 Multimodal Live API.
   */
  topP?: number;
  /**
   * This is the top-k sampling parameter that limits the number of highest probability tokens considered during text generation.
   * Only applicable with the Gemini Flash 2.0 Multimodal Live API.
   */
  topK?: number;
  /**
   * This is the presence penalty parameter that influences the model's likelihood to repeat information by penalizing tokens based on their presence in the text.
   * Only applicable with the Gemini Flash 2.0 Multimodal Live API.
   */
  presencePenalty?: number;
  /**
   * This is the frequency penalty parameter that influences the model's likelihood to repeat tokens by penalizing them based on their frequency in the text.
   * Only applicable with the Gemini Flash 2.0 Multimodal Live API.
   */
  frequencyPenalty?: number;
  /**
   * This is the speech configuration object that defines the voice settings to be used for the model's speech output.
   * Only applicable with the Gemini Flash 2.0 Multimodal Live API.
   */
  speechConfig?: GeminiMultimodalLiveSpeechConfig;
}

export interface GoogleModel {
  /** This is the starting state for the conversation. */
  messages?: OpenAIMessage[];
  /**
   * These are the tools that the assistant can use during the call. To use existing tools, use `toolIds`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  tools?: (
    | CreateDtmfToolDTO
    | CreateEndCallToolDTO
    | CreateVoicemailToolDTO
    | CreateFunctionToolDTO
    | CreateGhlToolDTO
    | CreateMakeToolDTO
    | CreateTransferCallToolDTO
    | CreateQueryToolDTO
    | CreateGoogleCalendarCreateEventToolDTO
    | CreateGoogleSheetsRowAppendToolDTO
  )[];
  /**
   * These are the tools that the assistant can use during the call. To use transient tools, use `tools`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  toolIds?: string[];
  /** These are the options for the knowledge base. */
  knowledgeBase?: CreateCustomKnowledgeBaseDTO;
  /** This is the ID of the knowledge base the model will use. */
  knowledgeBaseId?: string;
  /** This is the Google model that will be used. */
  model:
    | 'gemini-2.0-flash-thinking-exp'
    | 'gemini-2.0-pro-exp-02-05'
    | 'gemini-2.0-flash'
    | 'gemini-2.0-flash-lite'
    | 'gemini-2.0-flash-lite-preview-02-05'
    | 'gemini-2.0-flash-exp'
    | 'gemini-2.0-flash-realtime-exp'
    | 'gemini-1.5-flash'
    | 'gemini-1.5-flash-002'
    | 'gemini-1.5-pro'
    | 'gemini-1.5-pro-002'
    | 'gemini-1.0-pro';
  provider: 'google';
  /**
   * This is the session configuration for the Gemini Flash 2.0 Multimodal Live API.
   * Only applicable if the model `gemini-2.0-flash-realtime-exp` is selected.
   */
  realtimeConfig?: GoogleRealtimeConfig;
  /**
   * This is the temperature that will be used for calls. Default is 0 to leverage caching for lower latency.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /**
   * This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation. Default is 250.
   * @min 50
   * @max 10000
   */
  maxTokens?: number;
  /**
   * This determines whether we detect user's emotion while they speak and send it as an additional info to model.
   *
   * Default `false` because the model is usually are good at understanding the user's emotion from text.
   *
   * @default false
   */
  emotionRecognitionEnabled?: boolean;
  /**
   * This sets how many turns at the start of the conversation to use a smaller, faster model from the same provider before switching to the primary model. Example, gpt-3.5-turbo if provider is openai.
   *
   * Default is 0.
   *
   * @default 0
   * @min 0
   */
  numFastTurns?: number;
}

export interface GroqModel {
  /** This is the starting state for the conversation. */
  messages?: OpenAIMessage[];
  /**
   * These are the tools that the assistant can use during the call. To use existing tools, use `toolIds`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  tools?: (
    | CreateDtmfToolDTO
    | CreateEndCallToolDTO
    | CreateVoicemailToolDTO
    | CreateFunctionToolDTO
    | CreateGhlToolDTO
    | CreateMakeToolDTO
    | CreateTransferCallToolDTO
    | CreateQueryToolDTO
    | CreateGoogleCalendarCreateEventToolDTO
    | CreateGoogleSheetsRowAppendToolDTO
  )[];
  /**
   * These are the tools that the assistant can use during the call. To use transient tools, use `tools`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  toolIds?: string[];
  /** These are the options for the knowledge base. */
  knowledgeBase?: CreateCustomKnowledgeBaseDTO;
  /** This is the ID of the knowledge base the model will use. */
  knowledgeBaseId?: string;
  /** This is the name of the model. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
  model:
    | 'deepseek-r1-distill-llama-70b'
    | 'llama-3.3-70b-versatile'
    | 'llama-3.1-405b-reasoning'
    | 'llama-3.1-70b-versatile'
    | 'llama-3.1-8b-instant'
    | 'mixtral-8x7b-32768'
    | 'llama3-8b-8192'
    | 'llama3-70b-8192'
    | 'gemma2-9b-it';
  provider: 'groq';
  /**
   * This is the temperature that will be used for calls. Default is 0 to leverage caching for lower latency.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /**
   * This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation. Default is 250.
   * @min 50
   * @max 10000
   */
  maxTokens?: number;
  /**
   * This determines whether we detect user's emotion while they speak and send it as an additional info to model.
   *
   * Default `false` because the model is usually are good at understanding the user's emotion from text.
   *
   * @default false
   */
  emotionRecognitionEnabled?: boolean;
  /**
   * This sets how many turns at the start of the conversation to use a smaller, faster model from the same provider before switching to the primary model. Example, gpt-3.5-turbo if provider is openai.
   *
   * Default is 0.
   *
   * @default 0
   * @min 0
   */
  numFastTurns?: number;
}

export interface InflectionAIModel {
  /** This is the starting state for the conversation. */
  messages?: OpenAIMessage[];
  /**
   * These are the tools that the assistant can use during the call. To use existing tools, use `toolIds`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  tools?: (
    | CreateDtmfToolDTO
    | CreateEndCallToolDTO
    | CreateVoicemailToolDTO
    | CreateFunctionToolDTO
    | CreateGhlToolDTO
    | CreateMakeToolDTO
    | CreateTransferCallToolDTO
    | CreateQueryToolDTO
    | CreateGoogleCalendarCreateEventToolDTO
    | CreateGoogleSheetsRowAppendToolDTO
  )[];
  /**
   * These are the tools that the assistant can use during the call. To use transient tools, use `tools`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  toolIds?: string[];
  /** These are the options for the knowledge base. */
  knowledgeBase?: CreateCustomKnowledgeBaseDTO;
  /** This is the ID of the knowledge base the model will use. */
  knowledgeBaseId?: string;
  /** This is the name of the model. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
  model: 'inflection_3_pi';
  provider: 'inflection-ai';
  /**
   * This is the temperature that will be used for calls. Default is 0 to leverage caching for lower latency.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /**
   * This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation. Default is 250.
   * @min 50
   * @max 10000
   */
  maxTokens?: number;
  /**
   * This determines whether we detect user's emotion while they speak and send it as an additional info to model.
   *
   * Default `false` because the model is usually are good at understanding the user's emotion from text.
   *
   * @default false
   */
  emotionRecognitionEnabled?: boolean;
  /**
   * This sets how many turns at the start of the conversation to use a smaller, faster model from the same provider before switching to the primary model. Example, gpt-3.5-turbo if provider is openai.
   *
   * Default is 0.
   *
   * @default 0
   * @min 0
   */
  numFastTurns?: number;
}

export interface OpenAIModel {
  /** This is the starting state for the conversation. */
  messages?: OpenAIMessage[];
  /**
   * These are the tools that the assistant can use during the call. To use existing tools, use `toolIds`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  tools?: (
    | CreateDtmfToolDTO
    | CreateEndCallToolDTO
    | CreateVoicemailToolDTO
    | CreateFunctionToolDTO
    | CreateGhlToolDTO
    | CreateMakeToolDTO
    | CreateTransferCallToolDTO
    | CreateQueryToolDTO
    | CreateGoogleCalendarCreateEventToolDTO
    | CreateGoogleSheetsRowAppendToolDTO
  )[];
  /**
   * These are the tools that the assistant can use during the call. To use transient tools, use `tools`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  toolIds?: string[];
  /** These are the options for the knowledge base. */
  knowledgeBase?: CreateCustomKnowledgeBaseDTO;
  /** This is the ID of the knowledge base the model will use. */
  knowledgeBaseId?: string;
  /** This is the provider that will be used for the model. */
  provider: 'openai';
  /** This is the OpenAI model that will be used. */
  model:
    | 'gpt-4.5-preview'
    | 'chatgpt-4o-latest'
    | 'o3-mini'
    | 'o1-preview'
    | 'o1-preview-2024-09-12'
    | 'o1-mini'
    | 'o1-mini-2024-09-12'
    | 'gpt-4o-realtime-preview-2024-10-01'
    | 'gpt-4o-realtime-preview-2024-12-17'
    | 'gpt-4o-mini-realtime-preview-2024-12-17'
    | 'gpt-4o-mini'
    | 'gpt-4o-mini-2024-07-18'
    | 'gpt-4o'
    | 'gpt-4o-2024-05-13'
    | 'gpt-4o-2024-08-06'
    | 'gpt-4o-2024-11-20'
    | 'gpt-4-turbo'
    | 'gpt-4-turbo-2024-04-09'
    | 'gpt-4-turbo-preview'
    | 'gpt-4-0125-preview'
    | 'gpt-4-1106-preview'
    | 'gpt-4'
    | 'gpt-4-0613'
    | 'gpt-3.5-turbo'
    | 'gpt-3.5-turbo-0125'
    | 'gpt-3.5-turbo-1106'
    | 'gpt-3.5-turbo-16k'
    | 'gpt-3.5-turbo-0613';
  /**
   * These are the fallback models that will be used if the primary model fails. This shouldn't be specified unless you have a specific reason to do so. Vapi will automatically find the fastest fallbacks that make sense.
   * @example ["gpt-4-0125-preview","gpt-4-0613"]
   */
  fallbackModels?:
    | 'gpt-4.5-preview'
    | 'chatgpt-4o-latest'
    | 'o3-mini'
    | 'o1-preview'
    | 'o1-preview-2024-09-12'
    | 'o1-mini'
    | 'o1-mini-2024-09-12'
    | 'gpt-4o-realtime-preview-2024-10-01'
    | 'gpt-4o-realtime-preview-2024-12-17'
    | 'gpt-4o-mini-realtime-preview-2024-12-17'
    | 'gpt-4o-mini'
    | 'gpt-4o-mini-2024-07-18'
    | 'gpt-4o'
    | 'gpt-4o-2024-05-13'
    | 'gpt-4o-2024-08-06'
    | 'gpt-4o-2024-11-20'
    | 'gpt-4-turbo'
    | 'gpt-4-turbo-2024-04-09'
    | 'gpt-4-turbo-preview'
    | 'gpt-4-0125-preview'
    | 'gpt-4-1106-preview'
    | 'gpt-4'
    | 'gpt-4-0613'
    | 'gpt-3.5-turbo'
    | 'gpt-3.5-turbo-0125'
    | 'gpt-3.5-turbo-1106'
    | 'gpt-3.5-turbo-16k'
    | 'gpt-3.5-turbo-0613';
  /**
   * This is the temperature that will be used for calls. Default is 0 to leverage caching for lower latency.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /**
   * This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation. Default is 250.
   * @min 50
   * @max 10000
   */
  maxTokens?: number;
  /**
   * This determines whether we detect user's emotion while they speak and send it as an additional info to model.
   *
   * Default `false` because the model is usually are good at understanding the user's emotion from text.
   *
   * @default false
   */
  emotionRecognitionEnabled?: boolean;
  /**
   * This sets how many turns at the start of the conversation to use a smaller, faster model from the same provider before switching to the primary model. Example, gpt-3.5-turbo if provider is openai.
   *
   * Default is 0.
   *
   * @default 0
   * @min 0
   */
  numFastTurns?: number;
}

export interface OpenRouterModel {
  /** This is the starting state for the conversation. */
  messages?: OpenAIMessage[];
  /**
   * These are the tools that the assistant can use during the call. To use existing tools, use `toolIds`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  tools?: (
    | CreateDtmfToolDTO
    | CreateEndCallToolDTO
    | CreateVoicemailToolDTO
    | CreateFunctionToolDTO
    | CreateGhlToolDTO
    | CreateMakeToolDTO
    | CreateTransferCallToolDTO
    | CreateQueryToolDTO
    | CreateGoogleCalendarCreateEventToolDTO
    | CreateGoogleSheetsRowAppendToolDTO
  )[];
  /**
   * These are the tools that the assistant can use during the call. To use transient tools, use `tools`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  toolIds?: string[];
  /** These are the options for the knowledge base. */
  knowledgeBase?: CreateCustomKnowledgeBaseDTO;
  /** This is the ID of the knowledge base the model will use. */
  knowledgeBaseId?: string;
  provider: 'openrouter';
  /** This is the name of the model. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
  model: string;
  /**
   * This is the temperature that will be used for calls. Default is 0 to leverage caching for lower latency.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /**
   * This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation. Default is 250.
   * @min 50
   * @max 10000
   */
  maxTokens?: number;
  /**
   * This determines whether we detect user's emotion while they speak and send it as an additional info to model.
   *
   * Default `false` because the model is usually are good at understanding the user's emotion from text.
   *
   * @default false
   */
  emotionRecognitionEnabled?: boolean;
  /**
   * This sets how many turns at the start of the conversation to use a smaller, faster model from the same provider before switching to the primary model. Example, gpt-3.5-turbo if provider is openai.
   *
   * Default is 0.
   *
   * @default 0
   * @min 0
   */
  numFastTurns?: number;
}

export interface PerplexityAIModel {
  /** This is the starting state for the conversation. */
  messages?: OpenAIMessage[];
  /**
   * These are the tools that the assistant can use during the call. To use existing tools, use `toolIds`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  tools?: (
    | CreateDtmfToolDTO
    | CreateEndCallToolDTO
    | CreateVoicemailToolDTO
    | CreateFunctionToolDTO
    | CreateGhlToolDTO
    | CreateMakeToolDTO
    | CreateTransferCallToolDTO
    | CreateQueryToolDTO
    | CreateGoogleCalendarCreateEventToolDTO
    | CreateGoogleSheetsRowAppendToolDTO
  )[];
  /**
   * These are the tools that the assistant can use during the call. To use transient tools, use `tools`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  toolIds?: string[];
  /** These are the options for the knowledge base. */
  knowledgeBase?: CreateCustomKnowledgeBaseDTO;
  /** This is the ID of the knowledge base the model will use. */
  knowledgeBaseId?: string;
  provider: 'perplexity-ai';
  /** This is the name of the model. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
  model: string;
  /**
   * This is the temperature that will be used for calls. Default is 0 to leverage caching for lower latency.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /**
   * This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation. Default is 250.
   * @min 50
   * @max 10000
   */
  maxTokens?: number;
  /**
   * This determines whether we detect user's emotion while they speak and send it as an additional info to model.
   *
   * Default `false` because the model is usually are good at understanding the user's emotion from text.
   *
   * @default false
   */
  emotionRecognitionEnabled?: boolean;
  /**
   * This sets how many turns at the start of the conversation to use a smaller, faster model from the same provider before switching to the primary model. Example, gpt-3.5-turbo if provider is openai.
   *
   * Default is 0.
   *
   * @default 0
   * @min 0
   */
  numFastTurns?: number;
}

export interface TogetherAIModel {
  /** This is the starting state for the conversation. */
  messages?: OpenAIMessage[];
  /**
   * These are the tools that the assistant can use during the call. To use existing tools, use `toolIds`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  tools?: (
    | CreateDtmfToolDTO
    | CreateEndCallToolDTO
    | CreateVoicemailToolDTO
    | CreateFunctionToolDTO
    | CreateGhlToolDTO
    | CreateMakeToolDTO
    | CreateTransferCallToolDTO
    | CreateQueryToolDTO
    | CreateGoogleCalendarCreateEventToolDTO
    | CreateGoogleSheetsRowAppendToolDTO
  )[];
  /**
   * These are the tools that the assistant can use during the call. To use transient tools, use `tools`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  toolIds?: string[];
  /** These are the options for the knowledge base. */
  knowledgeBase?: CreateCustomKnowledgeBaseDTO;
  /** This is the ID of the knowledge base the model will use. */
  knowledgeBaseId?: string;
  provider: 'together-ai';
  /** This is the name of the model. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
  model: string;
  /**
   * This is the temperature that will be used for calls. Default is 0 to leverage caching for lower latency.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /**
   * This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation. Default is 250.
   * @min 50
   * @max 10000
   */
  maxTokens?: number;
  /**
   * This determines whether we detect user's emotion while they speak and send it as an additional info to model.
   *
   * Default `false` because the model is usually are good at understanding the user's emotion from text.
   *
   * @default false
   */
  emotionRecognitionEnabled?: boolean;
  /**
   * This sets how many turns at the start of the conversation to use a smaller, faster model from the same provider before switching to the primary model. Example, gpt-3.5-turbo if provider is openai.
   *
   * Default is 0.
   *
   * @default 0
   * @min 0
   */
  numFastTurns?: number;
}

export interface AIEdgeCondition {
  type: 'ai';
  /** @maxLength 100 */
  matches: string[];
}

export interface LogicEdgeCondition {
  type: 'logic';
  /** @maxLength 100 */
  liquid: string;
}

export interface FailedEdgeCondition {
  type: 'failed';
}

export interface Edge {
  condition?: AIEdgeCondition | LogicEdgeCondition | FailedEdgeCondition;
  /** @maxLength 80 */
  from: string;
  /** @maxLength 80 */
  to: string;
  /** This is for metadata you want to store on the edge. */
  metadata?: object;
}

export interface Workflow {
  nodes: (Say | Gather | ApiRequest | Hangup | Transfer)[];
  id: string;
  orgId: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  /** @maxLength 80 */
  name: string;
  edges: Edge[];
}

export interface VapiModel {
  /** This is the starting state for the conversation. */
  messages?: OpenAIMessage[];
  /**
   * These are the tools that the assistant can use during the call. To use existing tools, use `toolIds`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  tools?: (
    | CreateDtmfToolDTO
    | CreateEndCallToolDTO
    | CreateVoicemailToolDTO
    | CreateFunctionToolDTO
    | CreateGhlToolDTO
    | CreateMakeToolDTO
    | CreateTransferCallToolDTO
    | CreateQueryToolDTO
    | CreateGoogleCalendarCreateEventToolDTO
    | CreateGoogleSheetsRowAppendToolDTO
  )[];
  /**
   * These are the tools that the assistant can use during the call. To use transient tools, use `tools`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  toolIds?: string[];
  /** These are the options for the knowledge base. */
  knowledgeBase?: CreateCustomKnowledgeBaseDTO;
  /** This is the ID of the knowledge base the model will use. */
  knowledgeBaseId?: string;
  provider: 'vapi';
  /** This is the workflow that will be used for the call. To use a transient workflow, use `workflow` instead. */
  workflowId?: string;
  /** This is the workflow that will be used for the call. To use an existing workflow, use `workflowId` instead. */
  workflow?: Workflow;
  /** This is the name of the model. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
  model: string;
  /**
   * This is the temperature that will be used for calls. Default is 0 to leverage caching for lower latency.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /**
   * This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation. Default is 250.
   * @min 50
   * @max 10000
   */
  maxTokens?: number;
  /**
   * This determines whether we detect user's emotion while they speak and send it as an additional info to model.
   *
   * Default `false` because the model is usually are good at understanding the user's emotion from text.
   *
   * @default false
   */
  emotionRecognitionEnabled?: boolean;
  /**
   * This sets how many turns at the start of the conversation to use a smaller, faster model from the same provider before switching to the primary model. Example, gpt-3.5-turbo if provider is openai.
   *
   * Default is 0.
   *
   * @default 0
   * @min 0
   */
  numFastTurns?: number;
}

export interface XaiModel {
  /** This is the starting state for the conversation. */
  messages?: OpenAIMessage[];
  /**
   * These are the tools that the assistant can use during the call. To use existing tools, use `toolIds`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  tools?: (
    | CreateDtmfToolDTO
    | CreateEndCallToolDTO
    | CreateVoicemailToolDTO
    | CreateFunctionToolDTO
    | CreateGhlToolDTO
    | CreateMakeToolDTO
    | CreateTransferCallToolDTO
    | CreateQueryToolDTO
    | CreateGoogleCalendarCreateEventToolDTO
    | CreateGoogleSheetsRowAppendToolDTO
  )[];
  /**
   * These are the tools that the assistant can use during the call. To use transient tools, use `tools`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  toolIds?: string[];
  /** These are the options for the knowledge base. */
  knowledgeBase?: CreateCustomKnowledgeBaseDTO;
  /** This is the ID of the knowledge base the model will use. */
  knowledgeBaseId?: string;
  /** This is the name of the model. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
  model: 'grok-beta' | 'grok-2' | 'grok-3';
  provider: 'xai';
  /**
   * This is the temperature that will be used for calls. Default is 0 to leverage caching for lower latency.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /**
   * This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation. Default is 250.
   * @min 50
   * @max 10000
   */
  maxTokens?: number;
  /**
   * This determines whether we detect user's emotion while they speak and send it as an additional info to model.
   *
   * Default `false` because the model is usually are good at understanding the user's emotion from text.
   *
   * @default false
   */
  emotionRecognitionEnabled?: boolean;
  /**
   * This sets how many turns at the start of the conversation to use a smaller, faster model from the same provider before switching to the primary model. Example, gpt-3.5-turbo if provider is openai.
   *
   * Default is 0.
   *
   * @default 0
   * @min 0
   */
  numFastTurns?: number;
}

export interface ExactReplacement {
  /**
   * This is the exact replacement type. You can use this to replace a specific word or phrase with a different word or phrase.
   *
   * Usage:
   * - Replace "hello" with "hi": { type: 'exact', key: 'hello', value: 'hi' }
   * - Replace "good morning" with "good day": { type: 'exact', key: 'good morning', value: 'good day' }
   * - Replace a specific name: { type: 'exact', key: 'John Doe', value: 'Jane Smith' }
   * - Replace an acronym: { type: 'exact', key: 'AI', value: 'Artificial Intelligence' }
   * - Replace a company name with its phonetic pronunciation: { type: 'exact', key: 'Vapi', value: 'Vappy' }
   */
  type: 'exact';
  /** This is the key to replace. */
  key: string;
  /**
   * This is the value that will replace the match.
   * @maxLength 1000
   */
  value: string;
}

export interface RegexOption {
  /**
   * This is the type of the regex option. Options are:
   * - `ignore-case`: Ignores the case of the text being matched. Add
   * - `whole-word`: Matches whole words only.
   * - `multi-line`: Matches across multiple lines.
   */
  type: 'ignore-case' | 'whole-word' | 'multi-line';
  /**
   * This is whether to enable the option.
   *
   * @default false
   */
  enabled: boolean;
}

export interface RegexReplacement {
  /**
   * This is the regex replacement type. You can use this to replace a word or phrase that matches a pattern.
   *
   * Usage:
   * - Replace all numbers with "some number": { type: 'regex', regex: '\\d+', value: 'some number' }
   * - Replace email addresses with "[EMAIL]": { type: 'regex', regex: '\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b', value: '[EMAIL]' }
   * - Replace phone numbers with a formatted version: { type: 'regex', regex: '(\\d{3})(\\d{3})(\\d{4})', value: '($1) $2-$3' }
   * - Replace all instances of "color" or "colour" with "hue": { type: 'regex', regex: 'colou?r', value: 'hue' }
   * - Capitalize the first letter of every sentence: { type: 'regex', regex: '(?<=\\. |^)[a-z]', value: (match) => match.toUpperCase() }
   */
  type: 'regex';
  /**
   * This is the regex pattern to replace.
   *
   * Note:
   * - This works by using the `string.replace` method in Node.JS. Eg. `"hello there".replace(/hello/g, "hi")` will return `"hi there"`.
   *
   * Hot tip:
   * - In JavaScript, escape `\` when sending the regex pattern. Eg. `"hello\sthere"` will be sent over the wire as `"hellosthere"`. Send `"hello\\sthere"` instead.
   */
  regex: string;
  /**
   * These are the options for the regex replacement. Defaults to all disabled.
   *
   * @default []
   */
  options?: RegexOption[];
  /**
   * This is the value that will replace the match.
   * @maxLength 1000
   */
  value: string;
}

export interface FormatPlan {
  /**
   * This determines whether the chunk is formatted before being sent to the voice provider. This helps with enunciation. This includes phone numbers, emails and addresses. Default `true`.
   *
   * Usage:
   * - To rely on the voice provider's formatting logic, set this to `false`.
   *
   * If `voice.chunkPlan.enabled` is `false`, this is automatically `false` since there's no chunk to format.
   *
   * @default true
   * @example true
   */
  enabled?: boolean;
  /**
   * This is the cutoff after which a number is converted to individual digits instead of being spoken as words.
   *
   * Example:
   * - If cutoff 2025, "12345" is converted to "1 2 3 4 5" while "1200" is converted to "twelve hundred".
   *
   * Usage:
   * - If your use case doesn't involve IDs like zip codes, set this to a high value.
   * - If your use case involves IDs that are shorter than 5 digits, set this to a lower value.
   *
   * @default 2025
   * @min 0
   * @example 2025
   */
  numberToDigitsCutoff?: number;
  /**
   * These are the custom replacements you can make to the chunk before it is sent to the voice provider.
   *
   * Usage:
   * - To replace a specific word or phrase with a different word or phrase, use the `ExactReplacement` type. Eg. `{ type: 'exact', key: 'hello', value: 'hi' }`
   * - To replace a word or phrase that matches a pattern, use the `RegexReplacement` type. Eg. `{ type: 'regex', regex: '\\b[a-zA-Z]{5}\\b', value: 'hi' }`
   *
   * @default []
   */
  replacements?: (ExactReplacement | RegexReplacement)[];
  /**
   * List of formatters to apply. If not provided, all default formatters will be applied.
   * If provided, only the specified formatters will be applied.
   * Note: Some essential formatters like angle bracket removal will always be applied.
   * @default undefined
   */
  formattersEnabled?:
    | 'markdown'
    | 'asterisk'
    | 'quote'
    | 'dash'
    | 'newline'
    | 'colon'
    | 'acronym'
    | 'dollarAmount'
    | 'email'
    | 'date'
    | 'time'
    | 'distance'
    | 'unit'
    | 'percentage'
    | 'phoneNumber'
    | 'number';
}

export interface ChunkPlan {
  /**
   * This determines whether the model output is chunked before being sent to the voice provider. Default `true`.
   *
   * Usage:
   * - To rely on the voice provider's audio generation logic, set this to `false`.
   * - If seeing issues with quality, set this to `true`.
   *
   * If disabled, Vapi-provided audio control tokens like <flush /> will not work.
   *
   * @default true
   * @example true
   */
  enabled?: boolean;
  /**
   * This is the minimum number of characters in a chunk.
   *
   * Usage:
   * - To increase quality, set this to a higher value.
   * - To decrease latency, set this to a lower value.
   *
   * @default 30
   * @min 1
   * @max 80
   * @example 30
   */
  minCharacters?: number;
  /**
   * These are the punctuations that are considered valid boundaries for a chunk to be created.
   *
   * Usage:
   * - To increase quality, constrain to fewer boundaries.
   * - To decrease latency, enable all.
   *
   * Default is automatically set to balance the trade-off between quality and latency based on the provider.
   * @example ["。","，",".","!","?",";","،","۔","।","॥","|","||",",",":"]
   */
  punctuationBoundaries?:
    | '。'
    | '，'
    | '.'
    | '!'
    | '?'
    | ';'
    | ')'
    | '،'
    | '۔'
    | '।'
    | '॥'
    | '|'
    | '||'
    | ','
    | ':';
  /** This is the plan for formatting the chunk before it is sent to the voice provider. */
  formatPlan?: FormatPlan;
}

export interface FallbackPlan {
  /** This is the list of voices to fallback to in the event that the primary voice provider fails. */
  voices: (
    | FallbackAzureVoice
    | FallbackCartesiaVoice
    | FallbackHumeVoice
    | FallbackCustomVoice
    | FallbackDeepgramVoice
    | FallbackElevenLabsVoice
    | FallbackVapiVoice
    | FallbackLMNTVoice
    | FallbackOpenAIVoice
    | FallbackPlayHTVoice
    | FallbackRimeAIVoice
    | FallbackSmallestAIVoice
    | FallbackTavusVoice
  )[];
}

export interface AzureVoice {
  /** This is the voice provider that will be used. */
  provider: 'azure';
  /** This is the provider-specific ID that will be used. */
  voiceId: 'andrew' | 'brian' | 'emma' | string;
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
  /**
   * This is the speed multiplier that will be used.
   * @min 0.5
   * @max 2
   */
  speed?: number;
  /** This is the plan for voice provider fallbacks in the event that the primary voice provider fails. */
  fallbackPlan?: FallbackPlan;
}

export interface CartesiaExperimentalControls {
  /** @example "normal" */
  speed?: 'slowest' | 'slow' | 'normal' | 'fast' | 'fastest';
  /** @example ["happiness:high"] */
  emotion?:
    | 'anger:lowest'
    | 'anger:low'
    | 'anger:high'
    | 'anger:highest'
    | 'positivity:lowest'
    | 'positivity:low'
    | 'positivity:high'
    | 'positivity:highest'
    | 'surprise:lowest'
    | 'surprise:low'
    | 'surprise:high'
    | 'surprise:highest'
    | 'sadness:lowest'
    | 'sadness:low'
    | 'sadness:high'
    | 'sadness:highest'
    | 'curiosity:lowest'
    | 'curiosity:low'
    | 'curiosity:high'
    | 'curiosity:highest';
}

export interface CartesiaVoice {
  /** This is the voice provider that will be used. */
  provider: 'cartesia';
  /** The ID of the particular voice you want to use. */
  voiceId: string;
  /**
   * This is the model that will be used. This is optional and will default to the correct model for the voiceId.
   * @example "sonic-english"
   */
  model?: 'sonic-2' | 'sonic-english' | 'sonic-multilingual' | 'sonic-preview' | 'sonic';
  /**
   * This is the language that will be used. This is optional and will default to the correct language for the voiceId.
   * @example "en"
   */
  language?:
    | 'en'
    | 'de'
    | 'es'
    | 'fr'
    | 'ja'
    | 'pt'
    | 'zh'
    | 'hi'
    | 'it'
    | 'ko'
    | 'nl'
    | 'pl'
    | 'ru'
    | 'sv'
    | 'tr';
  /** Experimental controls for Cartesia voice generation */
  experimentalControls?: CartesiaExperimentalControls;
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
  /** This is the plan for voice provider fallbacks in the event that the primary voice provider fails. */
  fallbackPlan?: FallbackPlan;
}

export interface CustomVoice {
  /** This is the voice provider that will be used. Use `custom-voice` for providers that are not natively supported. */
  provider: 'custom-voice';
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
  /**
   * This is where the voice request will be sent.
   *
   * Request Example:
   *
   * POST https://{server.url}
   * Content-Type: application/json
   *
   * {
   *   "message": {
   *     "type": "voice-request",
   *     "text": "Hello, world!",
   *     "sampleRate": 24000,
   *     ...other metadata about the call...
   *   }
   * }
   *
   * Response Expected: 1-channel 16-bit raw PCM audio at the sample rate specified in the request. Here is how the response will be piped to the transport:
   * ```
   * response.on('data', (chunk: Buffer) => {
   *   outputStream.write(chunk);
   * });
   * ```
   */
  server: Server;
  /** This is the plan for voice provider fallbacks in the event that the primary voice provider fails. */
  fallbackPlan?: FallbackPlan;
}

export interface DeepgramVoice {
  /** This is the voice provider that will be used. */
  provider: 'deepgram';
  /** This is the provider-specific ID that will be used. */
  voiceId:
    | 'asteria'
    | 'luna'
    | 'stella'
    | 'athena'
    | 'hera'
    | 'orion'
    | 'arcas'
    | 'perseus'
    | 'angus'
    | 'orpheus'
    | 'helios'
    | 'zeus'
    | string;
  /**
   * If set to true, this will add mip_opt_out=true as a query parameter of all API requests. See https://developers.deepgram.com/docs/the-deepgram-model-improvement-partnership-program#want-to-opt-out
   *
   * This will only be used if you are using your own Deepgram API key.
   *
   * @default false
   * @default false
   * @example false
   */
  mipOptOut?: boolean;
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
  /** This is the plan for voice provider fallbacks in the event that the primary voice provider fails. */
  fallbackPlan?: FallbackPlan;
}

export interface ElevenLabsVoice {
  /** This is the voice provider that will be used. */
  provider: '11labs';
  /** This is the provider-specific ID that will be used. Ensure the Voice is present in your 11Labs Voice Library. */
  voiceId:
    | 'burt'
    | 'marissa'
    | 'andrea'
    | 'sarah'
    | 'phillip'
    | 'steve'
    | 'joseph'
    | 'myra'
    | 'paula'
    | 'ryan'
    | 'drew'
    | 'paul'
    | 'mrb'
    | 'matilda'
    | 'mark'
    | string;
  /**
   * Defines the stability for voice settings.
   * @min 0
   * @max 1
   * @example 0.5
   */
  stability?: number;
  /**
   * Defines the similarity boost for voice settings.
   * @min 0
   * @max 1
   * @example 0.75
   */
  similarityBoost?: number;
  /**
   * Defines the style for voice settings.
   * @min 0
   * @max 1
   * @example 0
   */
  style?: number;
  /**
   * Defines the use speaker boost for voice settings.
   * @example false
   */
  useSpeakerBoost?: boolean;
  /**
   * Defines the speed for voice settings.
   * @min 0.7
   * @max 1.2
   * @example 0.9
   */
  speed?: number;
  /**
   * Defines the optimize streaming latency for voice settings. Defaults to 3.
   * @min 0
   * @max 4
   * @example 3
   */
  optimizeStreamingLatency?: number;
  /**
   * This enables the use of https://elevenlabs.io/docs/speech-synthesis/prompting#pronunciation. Defaults to false to save latency.
   *
   * @default false
   * @example false
   */
  enableSsmlParsing?: boolean;
  /**
   * This is the model that will be used. Defaults to 'eleven_turbo_v2' if not specified.
   * @example "eleven_turbo_v2_5"
   */
  model?:
    | 'eleven_multilingual_v2'
    | 'eleven_turbo_v2'
    | 'eleven_turbo_v2_5'
    | 'eleven_flash_v2'
    | 'eleven_flash_v2_5'
    | 'eleven_monolingual_v1';
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
  /** This is the language (ISO 639-1) that is enforced for the model. Currently only Turbo v2.5 supports language enforcement. For other models, an error will be returned if language code is provided. */
  language?: string;
  /** This is the plan for voice provider fallbacks in the event that the primary voice provider fails. */
  fallbackPlan?: FallbackPlan;
}

export interface HumeVoice {
  /** This is the voice provider that will be used. */
  provider: 'hume';
  /**
   * This is the model that will be used.
   * @example "octave"
   */
  model?: 'octave';
  /** The ID of the particular voice you want to use. */
  voiceId: string;
  /**
   * Indicates whether the chosen voice is a preset Hume AI voice or a custom voice.
   * @example false
   */
  isCustomHumeVoice?: boolean;
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
  /**
   * Natural language instructions describing how the synthesized speech should sound, including but not limited to tone, intonation, pacing, and accent (e.g., 'a soft, gentle voice with a strong British accent').
   *
   * If a Voice is specified in the request, this description serves as acting instructions.
   * If no Voice is specified, a new voice is generated based on this description.
   */
  description?: string;
  /** This is the plan for voice provider fallbacks in the event that the primary voice provider fails. */
  fallbackPlan?: FallbackPlan;
}

export interface LMNTVoice {
  /** This is the voice provider that will be used. */
  provider: 'lmnt';
  /** This is the provider-specific ID that will be used. */
  voiceId: 'lily' | 'daniel' | string;
  /**
   * This is the speed multiplier that will be used.
   * @min 0.25
   * @max 2
   * @example null
   */
  speed?: number;
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
  /** This is the plan for voice provider fallbacks in the event that the primary voice provider fails. */
  fallbackPlan?: FallbackPlan;
}

export interface NeuphonicVoice {
  /** This is the voice provider that will be used. */
  provider: 'neuphonic';
  /** This is the provider-specific ID that will be used. */
  voiceId: string;
  /**
   * This is the model that will be used. Defaults to 'neu_fast' if not specified.
   * @example "neu_fast"
   */
  model?: 'neu_hq' | 'neu_fast';
  /**
   * This is the language (ISO 639-1) that is enforced for the model.
   * @example "en"
   */
  language: object;
  /**
   * This is the speed multiplier that will be used.
   * @min 0.25
   * @max 2
   * @example null
   */
  speed?: number;
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
  /** This is the plan for voice provider fallbacks in the event that the primary voice provider fails. */
  fallbackPlan?: FallbackPlan;
}

export interface OpenAIVoice {
  /** This is the voice provider that will be used. */
  provider: 'openai';
  /**
   * This is the provider-specific ID that will be used.
   * Please note that ash, ballad, coral, sage, and verse may only be used with realtime models.
   */
  voiceId:
    | 'alloy'
    | 'echo'
    | 'fable'
    | 'onyx'
    | 'nova'
    | 'shimmer'
    | 'ash'
    | 'ballad'
    | 'coral'
    | 'sage'
    | 'verse';
  /** This is the model that will be used for text-to-speech. */
  model?: 'tts-1' | 'tts-1-hd' | 'gpt-4o-mini-tts';
  /**
   * This is a prompt that allows you to control the voice of your generated audio.
   * Does not work with 'tts-1' or 'tts-1-hd' models.
   * @maxLength 10000
   */
  instructions?: string;
  /**
   * This is the speed multiplier that will be used.
   * @min 0.25
   * @max 4
   * @example null
   */
  speed?: number;
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
  /** This is the plan for voice provider fallbacks in the event that the primary voice provider fails. */
  fallbackPlan?: FallbackPlan;
}

export interface PlayHTVoice {
  /** This is the voice provider that will be used. */
  provider: 'playht';
  /** This is the provider-specific ID that will be used. */
  voiceId:
    | 'jennifer'
    | 'melissa'
    | 'will'
    | 'chris'
    | 'matt'
    | 'jack'
    | 'ruby'
    | 'davis'
    | 'donna'
    | 'michael'
    | string;
  /**
   * This is the speed multiplier that will be used.
   * @min 0.1
   * @max 5
   * @example null
   */
  speed?: number;
  /**
   * A floating point number between 0, exclusive, and 2, inclusive. If equal to null or not provided, the model's default temperature will be used. The temperature parameter controls variance. Lower temperatures result in more predictable results, higher temperatures allow each run to vary more, so the voice may sound less like the baseline voice.
   * @min 0.1
   * @max 2
   * @example null
   */
  temperature?: number;
  /**
   * An emotion to be applied to the speech.
   * @example null
   */
  emotion?:
    | 'female_happy'
    | 'female_sad'
    | 'female_angry'
    | 'female_fearful'
    | 'female_disgust'
    | 'female_surprised'
    | 'male_happy'
    | 'male_sad'
    | 'male_angry'
    | 'male_fearful'
    | 'male_disgust'
    | 'male_surprised';
  /**
   * A number between 1 and 6. Use lower numbers to reduce how unique your chosen voice will be compared to other voices.
   * @min 1
   * @max 6
   * @example null
   */
  voiceGuidance?: number;
  /**
   * A number between 1 and 30. Use lower numbers to to reduce how strong your chosen emotion will be. Higher numbers will create a very emotional performance.
   * @min 1
   * @max 30
   * @example null
   */
  styleGuidance?: number;
  /**
   * A number between 1 and 2. This number influences how closely the generated speech adheres to the input text. Use lower values to create more fluid speech, but with a higher chance of deviating from the input text. Higher numbers will make the generated speech more accurate to the input text, ensuring that the words spoken align closely with the provided text.
   * @min 1
   * @max 2
   * @example null
   */
  textGuidance?: number;
  /** Playht voice model/engine to use. */
  model?: 'PlayHT2.0' | 'PlayHT2.0-turbo' | 'Play3.0-mini' | 'PlayDialog';
  /** The language to use for the speech. */
  language?:
    | 'afrikaans'
    | 'albanian'
    | 'amharic'
    | 'arabic'
    | 'bengali'
    | 'bulgarian'
    | 'catalan'
    | 'croatian'
    | 'czech'
    | 'danish'
    | 'dutch'
    | 'english'
    | 'french'
    | 'galician'
    | 'german'
    | 'greek'
    | 'hebrew'
    | 'hindi'
    | 'hungarian'
    | 'indonesian'
    | 'italian'
    | 'japanese'
    | 'korean'
    | 'malay'
    | 'mandarin'
    | 'polish'
    | 'portuguese'
    | 'russian'
    | 'serbian'
    | 'spanish'
    | 'swedish'
    | 'tagalog'
    | 'thai'
    | 'turkish'
    | 'ukrainian'
    | 'urdu'
    | 'xhosa';
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
  /** This is the plan for voice provider fallbacks in the event that the primary voice provider fails. */
  fallbackPlan?: FallbackPlan;
}

export interface RimeAIVoice {
  /** This is the voice provider that will be used. */
  provider: 'rime-ai';
  /** This is the provider-specific ID that will be used. */
  voiceId:
    | 'abbie'
    | 'allison'
    | 'ally'
    | 'alona'
    | 'amber'
    | 'ana'
    | 'antoine'
    | 'armon'
    | 'brenda'
    | 'brittany'
    | 'carol'
    | 'colin'
    | 'courtney'
    | 'elena'
    | 'elliot'
    | 'eva'
    | 'geoff'
    | 'gerald'
    | 'hank'
    | 'helen'
    | 'hera'
    | 'jen'
    | 'joe'
    | 'joy'
    | 'juan'
    | 'kendra'
    | 'kendrick'
    | 'kenneth'
    | 'kevin'
    | 'kris'
    | 'linda'
    | 'madison'
    | 'marge'
    | 'marina'
    | 'marissa'
    | 'marta'
    | 'maya'
    | 'nicholas'
    | 'nyles'
    | 'phil'
    | 'reba'
    | 'rex'
    | 'rick'
    | 'ritu'
    | 'rob'
    | 'rodney'
    | 'rohan'
    | 'rosco'
    | 'samantha'
    | 'sandy'
    | 'selena'
    | 'seth'
    | 'sharon'
    | 'stan'
    | 'tamra'
    | 'tanya'
    | 'tibur'
    | 'tj'
    | 'tyler'
    | 'viv'
    | 'yadira'
    | 'marsh'
    | 'bayou'
    | 'creek'
    | 'brook'
    | 'flower'
    | 'spore'
    | 'glacier'
    | 'gulch'
    | 'alpine'
    | 'cove'
    | 'lagoon'
    | 'tundra'
    | 'steppe'
    | 'mesa'
    | 'grove'
    | 'rainforest'
    | 'moraine'
    | 'wildflower'
    | 'peak'
    | 'boulder'
    | 'gypsum'
    | 'zest'
    | string;
  /**
   * This is the model that will be used. Defaults to 'v1' when not specified.
   * @example "mistv2"
   */
  model?: 'v1' | 'mist' | 'mistv2';
  /**
   * This is the speed multiplier that will be used.
   * @min 0.1
   * @example null
   */
  speed?: number;
  /**
   * This is a flag that controls whether to add slight pauses using angle brackets. Example: “Hi. <200> I’d love to have a conversation with you.” adds a 200ms pause between the first and second sentences.
   * @example false
   */
  pauseBetweenBrackets?: boolean;
  /**
   * This is a flag that controls whether text inside brackets should be phonemized (converted to phonetic pronunciation) - Example: "{h'El.o} World" will pronounce "Hello" as expected.
   * @example false
   */
  phonemizeBetweenBrackets?: boolean;
  /**
   * This is a flag that controls whether to optimize for reduced latency in streaming. https://docs.rime.ai/api-reference/endpoint/websockets#param-reduce-latency
   * @example false
   */
  reduceLatency?: boolean;
  /**
   * This is a string that allows inline speed control using alpha notation. https://docs.rime.ai/api-reference/endpoint/websockets#param-inline-speed-alpha
   * @example null
   */
  inlineSpeedAlpha?: string;
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
  /** This is the plan for voice provider fallbacks in the event that the primary voice provider fails. */
  fallbackPlan?: FallbackPlan;
}

export interface SmallestAIVoice {
  /** This is the voice provider that will be used. */
  provider: 'smallest-ai';
  /** This is the provider-specific ID that will be used. */
  voiceId:
    | 'emily'
    | 'jasmine'
    | 'arman'
    | 'james'
    | 'mithali'
    | 'aravind'
    | 'raj'
    | 'diya'
    | 'raman'
    | 'ananya'
    | 'isha'
    | 'william'
    | 'aarav'
    | 'monika'
    | 'niharika'
    | 'deepika'
    | 'raghav'
    | 'kajal'
    | 'radhika'
    | 'mansi'
    | 'nisha'
    | 'saurabh'
    | 'pooja'
    | 'saina'
    | 'sanya'
    | string;
  /** Smallest AI voice model to use. Defaults to 'lightning' when not specified. */
  model?: 'lightning';
  /**
   * This is the speed multiplier that will be used.
   * @example null
   */
  speed?: number;
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
  /** This is the plan for voice provider fallbacks in the event that the primary voice provider fails. */
  fallbackPlan?: FallbackPlan;
}

export interface TavusConversationProperties {
  /**
   * The maximum duration of the call in seconds. The default `maxCallDuration` is 3600 seconds (1 hour).
   * Once the time limit specified by this parameter has been reached, the conversation will automatically shut down.
   */
  maxCallDuration?: number;
  /** The duration in seconds after which the call will be automatically shut down once the last participant leaves. */
  participantLeftTimeout?: number;
  /**
   * Starting from conversation creation, the duration in seconds after which the call will be automatically shut down if no participant joins the call.
   * Default is 300 seconds (5 minutes).
   */
  participantAbsentTimeout?: number;
  /** If true, the user will be able to record the conversation. */
  enableRecording?: boolean;
  /**
   * If true, the user will be able to transcribe the conversation.
   * You can find more instructions on displaying transcriptions if you are using your custom DailyJS components here.
   * You need to have an event listener on Daily that listens for `app-messages`.
   */
  enableTranscription?: boolean;
  /**
   * If true, the background will be replaced with a greenscreen (RGB values: `[0, 255, 155]`).
   * You can use WebGL on the frontend to make the greenscreen transparent or change its color.
   */
  applyGreenscreen?: boolean;
  /**
   * The language of the conversation. Please provide the **full language name**, not the two-letter code.
   * If you are using your own TTS voice, please ensure it supports the language you provide.
   * If you are using a stock replica or default persona, please note that only ElevenLabs and Cartesia supported languages are available.
   * You can find a full list of supported languages for Cartesia here, for ElevenLabs here, and for PlayHT here.
   */
  language?: string;
  /** The name of the S3 bucket where the recording will be stored. */
  recordingS3BucketName?: string;
  /** The region of the S3 bucket where the recording will be stored. */
  recordingS3BucketRegion?: string;
  /** The ARN of the role that will be assumed to access the S3 bucket. */
  awsAssumeRoleArn?: string;
}

export interface TavusVoice {
  /** This is the voice provider that will be used. */
  provider: 'tavus';
  /** This is the provider-specific ID that will be used. */
  voiceId: 'r52da2535a' | string;
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
  /** This is the unique identifier for the persona that the replica will use in the conversation. */
  personaId?: string;
  /** This is the url that will receive webhooks with updates regarding the conversation state. */
  callbackUrl?: string;
  /** This is the name for the conversation. */
  conversationName?: string;
  /** This is the context that will be appended to any context provided in the persona, if one is provided. */
  conversationalContext?: string;
  /** This is the custom greeting that the replica will give once a participant joines the conversation. */
  customGreeting?: string;
  /** These are optional properties used to customize the conversation. */
  properties?: TavusConversationProperties;
  /** This is the plan for voice provider fallbacks in the event that the primary voice provider fails. */
  fallbackPlan?: FallbackPlan;
}

export interface VapiVoice {
  /** This is the voice provider that will be used. */
  provider: 'vapi';
  /** The voices provided by Vapi */
  voiceId:
    | 'Elliot'
    | 'Rohan'
    | 'Lily'
    | 'Savannah'
    | 'Hana'
    | 'Neha'
    | 'Cole'
    | 'Harry'
    | 'Paige'
    | 'Spencer';
  /**
   * This is the speed multiplier that will be used.
   *
   * @default 1
   * @min 0.25
   * @max 2
   * @default 1
   */
  speed?: number;
  /**
   * This is the language code (ISO 639-1) that will be used.
   *
   * @default 'en-US'
   * @default "en-US"
   */
  language?:
    | 'en-US'
    | 'en-GB'
    | 'en-AU'
    | 'en-CA'
    | 'ja'
    | 'zh'
    | 'de'
    | 'hi'
    | 'fr-FR'
    | 'fr-CA'
    | 'ko'
    | 'pt-BR'
    | 'pt-PT'
    | 'it'
    | 'es-ES'
    | 'es-MX'
    | 'id'
    | 'nl'
    | 'tr'
    | 'fil'
    | 'pl'
    | 'sv'
    | 'bg'
    | 'ro'
    | 'ar-SA'
    | 'ar-AE'
    | 'cs'
    | 'el'
    | 'fi'
    | 'hr'
    | 'ms'
    | 'sk'
    | 'da'
    | 'ta'
    | 'uk'
    | 'ru'
    | 'hu'
    | 'no'
    | 'vi';
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
  /** This is the plan for voice provider fallbacks in the event that the primary voice provider fails. */
  fallbackPlan?: FallbackPlan;
}

export interface FallbackAzureVoice {
  /** This is the voice provider that will be used. */
  provider: 'azure';
  /** This is the provider-specific ID that will be used. */
  voiceId: 'andrew' | 'brian' | 'emma' | string;
  /**
   * This is the speed multiplier that will be used.
   * @min 0.5
   * @max 2
   */
  speed?: number;
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
}

export interface FallbackCartesiaVoice {
  /** This is the voice provider that will be used. */
  provider: 'cartesia';
  /** The ID of the particular voice you want to use. */
  voiceId: string;
  /**
   * This is the model that will be used. This is optional and will default to the correct model for the voiceId.
   * @example "sonic-english"
   */
  model?: 'sonic-2' | 'sonic-english' | 'sonic-multilingual' | 'sonic-preview' | 'sonic';
  /**
   * This is the language that will be used. This is optional and will default to the correct language for the voiceId.
   * @example "en"
   */
  language?:
    | 'en'
    | 'de'
    | 'es'
    | 'fr'
    | 'ja'
    | 'pt'
    | 'zh'
    | 'hi'
    | 'it'
    | 'ko'
    | 'nl'
    | 'pl'
    | 'ru'
    | 'sv'
    | 'tr';
  /** Experimental controls for Cartesia voice generation */
  experimentalControls?: CartesiaExperimentalControls;
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
}

export interface FallbackCustomVoice {
  /** This is the voice provider that will be used. Use `custom-voice` for providers that are not natively supported. */
  provider: 'custom-voice';
  /**
   * This is where the voice request will be sent.
   *
   * Request Example:
   *
   * POST https://{server.url}
   * Content-Type: application/json
   *
   * {
   *   "message": {
   *     "type": "voice-request",
   *     "text": "Hello, world!",
   *     "sampleRate": 24000,
   *     ...other metadata about the call...
   *   }
   * }
   *
   * Response Expected: 1-channel 16-bit raw PCM audio at the sample rate specified in the request. Here is how the response will be piped to the transport:
   * ```
   * response.on('data', (chunk: Buffer) => {
   *   outputStream.write(chunk);
   * });
   * ```
   */
  server: Server;
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
}

export interface FallbackDeepgramVoice {
  /** This is the voice provider that will be used. */
  provider: 'deepgram';
  /** This is the provider-specific ID that will be used. */
  voiceId:
    | 'asteria'
    | 'luna'
    | 'stella'
    | 'athena'
    | 'hera'
    | 'orion'
    | 'arcas'
    | 'perseus'
    | 'angus'
    | 'orpheus'
    | 'helios'
    | 'zeus'
    | string;
  /**
   * If set to true, this will add mip_opt_out=true as a query parameter of all API requests. See https://developers.deepgram.com/docs/the-deepgram-model-improvement-partnership-program#want-to-opt-out
   *
   * This will only be used if you are using your own Deepgram API key.
   *
   * @default false
   * @default false
   * @example false
   */
  mipOptOut?: boolean;
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
}

export interface FallbackElevenLabsVoice {
  /** This is the voice provider that will be used. */
  provider: '11labs';
  /** This is the provider-specific ID that will be used. Ensure the Voice is present in your 11Labs Voice Library. */
  voiceId:
    | 'burt'
    | 'marissa'
    | 'andrea'
    | 'sarah'
    | 'phillip'
    | 'steve'
    | 'joseph'
    | 'myra'
    | 'paula'
    | 'ryan'
    | 'drew'
    | 'paul'
    | 'mrb'
    | 'matilda'
    | 'mark'
    | string;
  /**
   * Defines the stability for voice settings.
   * @min 0
   * @max 1
   * @example 0.5
   */
  stability?: number;
  /**
   * Defines the similarity boost for voice settings.
   * @min 0
   * @max 1
   * @example 0.75
   */
  similarityBoost?: number;
  /**
   * Defines the style for voice settings.
   * @min 0
   * @max 1
   * @example 0
   */
  style?: number;
  /**
   * Defines the use speaker boost for voice settings.
   * @example false
   */
  useSpeakerBoost?: boolean;
  /**
   * Defines the speed for voice settings.
   * @min 0.7
   * @max 1.2
   * @example 0.9
   */
  speed?: number;
  /**
   * Defines the optimize streaming latency for voice settings. Defaults to 3.
   * @min 0
   * @max 4
   * @example 3
   */
  optimizeStreamingLatency?: number;
  /**
   * This enables the use of https://elevenlabs.io/docs/speech-synthesis/prompting#pronunciation. Defaults to false to save latency.
   *
   * @default false
   * @example false
   */
  enableSsmlParsing?: boolean;
  /**
   * This is the model that will be used. Defaults to 'eleven_turbo_v2' if not specified.
   * @example "eleven_turbo_v2_5"
   */
  model?:
    | 'eleven_multilingual_v2'
    | 'eleven_turbo_v2'
    | 'eleven_turbo_v2_5'
    | 'eleven_flash_v2'
    | 'eleven_flash_v2_5'
    | 'eleven_monolingual_v1';
  /** This is the language (ISO 639-1) that is enforced for the model. Currently only Turbo v2.5 supports language enforcement. For other models, an error will be returned if language code is provided. */
  language?: string;
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
}

export interface FallbackHumeVoice {
  /** This is the voice provider that will be used. */
  provider: 'hume';
  /**
   * This is the model that will be used.
   * @example "octave"
   */
  model?: 'octave';
  /** The ID of the particular voice you want to use. */
  voiceId: string;
  /**
   * Indicates whether the chosen voice is a preset Hume AI voice or a custom voice.
   * @example false
   */
  isCustomHumeVoice?: boolean;
  /**
   * Natural language instructions describing how the synthesized speech should sound, including but not limited to tone, intonation, pacing, and accent (e.g., 'a soft, gentle voice with a strong British accent').
   *
   * If a Voice is specified in the request, this description serves as acting instructions.
   * If no Voice is specified, a new voice is generated based on this description.
   */
  description?: string;
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
}

export interface FallbackLMNTVoice {
  /** This is the voice provider that will be used. */
  provider: 'lmnt';
  /** This is the provider-specific ID that will be used. */
  voiceId: 'lily' | 'daniel' | string;
  /**
   * This is the speed multiplier that will be used.
   * @min 0.25
   * @max 2
   * @example null
   */
  speed?: number;
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
}

export interface FallbackNeuphonicVoice {
  /** This is the voice provider that will be used. */
  provider: 'neuphonic';
  /** This is the provider-specific ID that will be used. */
  voiceId: string;
  /**
   * This is the model that will be used. Defaults to 'neu_fast' if not specified.
   * @example "neu_fast"
   */
  model?: 'neu_hq' | 'neu_fast';
  /**
   * This is the language (ISO 639-1) that is enforced for the model.
   * @example "en"
   */
  language: object;
  /**
   * This is the speed multiplier that will be used.
   * @min 0.25
   * @max 2
   * @example null
   */
  speed?: number;
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
}

export interface FallbackOpenAIVoice {
  /** This is the voice provider that will be used. */
  provider: 'openai';
  /**
   * This is the provider-specific ID that will be used.
   * Please note that ash, ballad, coral, sage, and verse may only be used with realtime models.
   */
  voiceId:
    | 'alloy'
    | 'echo'
    | 'fable'
    | 'onyx'
    | 'nova'
    | 'shimmer'
    | 'ash'
    | 'ballad'
    | 'coral'
    | 'sage'
    | 'verse';
  /** This is the model that will be used for text-to-speech. */
  model?: 'tts-1' | 'tts-1-hd' | 'gpt-4o-mini-tts';
  /**
   * This is a prompt that allows you to control the voice of your generated audio.
   * Does not work with 'tts-1' or 'tts-1-hd' models.
   * @maxLength 10000
   */
  instructions?: string;
  /**
   * This is the speed multiplier that will be used.
   * @min 0.25
   * @max 4
   * @example null
   */
  speed?: number;
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
}

export interface FallbackPlayHTVoice {
  /** This is the voice provider that will be used. */
  provider: 'playht';
  /** This is the provider-specific ID that will be used. */
  voiceId:
    | 'jennifer'
    | 'melissa'
    | 'will'
    | 'chris'
    | 'matt'
    | 'jack'
    | 'ruby'
    | 'davis'
    | 'donna'
    | 'michael'
    | string;
  /**
   * This is the speed multiplier that will be used.
   * @min 0.1
   * @max 5
   * @example null
   */
  speed?: number;
  /**
   * A floating point number between 0, exclusive, and 2, inclusive. If equal to null or not provided, the model's default temperature will be used. The temperature parameter controls variance. Lower temperatures result in more predictable results, higher temperatures allow each run to vary more, so the voice may sound less like the baseline voice.
   * @min 0.1
   * @max 2
   * @example null
   */
  temperature?: number;
  /**
   * An emotion to be applied to the speech.
   * @example null
   */
  emotion?:
    | 'female_happy'
    | 'female_sad'
    | 'female_angry'
    | 'female_fearful'
    | 'female_disgust'
    | 'female_surprised'
    | 'male_happy'
    | 'male_sad'
    | 'male_angry'
    | 'male_fearful'
    | 'male_disgust'
    | 'male_surprised';
  /**
   * A number between 1 and 6. Use lower numbers to reduce how unique your chosen voice will be compared to other voices.
   * @min 1
   * @max 6
   * @example null
   */
  voiceGuidance?: number;
  /**
   * A number between 1 and 30. Use lower numbers to to reduce how strong your chosen emotion will be. Higher numbers will create a very emotional performance.
   * @min 1
   * @max 30
   * @example null
   */
  styleGuidance?: number;
  /**
   * A number between 1 and 2. This number influences how closely the generated speech adheres to the input text. Use lower values to create more fluid speech, but with a higher chance of deviating from the input text. Higher numbers will make the generated speech more accurate to the input text, ensuring that the words spoken align closely with the provided text.
   * @min 1
   * @max 2
   * @example null
   */
  textGuidance?: number;
  /** Playht voice model/engine to use. */
  model?: 'PlayHT2.0' | 'PlayHT2.0-turbo' | 'Play3.0-mini' | 'PlayDialog';
  /** The language to use for the speech. */
  language?:
    | 'afrikaans'
    | 'albanian'
    | 'amharic'
    | 'arabic'
    | 'bengali'
    | 'bulgarian'
    | 'catalan'
    | 'croatian'
    | 'czech'
    | 'danish'
    | 'dutch'
    | 'english'
    | 'french'
    | 'galician'
    | 'german'
    | 'greek'
    | 'hebrew'
    | 'hindi'
    | 'hungarian'
    | 'indonesian'
    | 'italian'
    | 'japanese'
    | 'korean'
    | 'malay'
    | 'mandarin'
    | 'polish'
    | 'portuguese'
    | 'russian'
    | 'serbian'
    | 'spanish'
    | 'swedish'
    | 'tagalog'
    | 'thai'
    | 'turkish'
    | 'ukrainian'
    | 'urdu'
    | 'xhosa';
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
}

export interface FallbackRimeAIVoice {
  /** This is the voice provider that will be used. */
  provider: 'rime-ai';
  /** This is the provider-specific ID that will be used. */
  voiceId:
    | 'abbie'
    | 'allison'
    | 'ally'
    | 'alona'
    | 'amber'
    | 'ana'
    | 'antoine'
    | 'armon'
    | 'brenda'
    | 'brittany'
    | 'carol'
    | 'colin'
    | 'courtney'
    | 'elena'
    | 'elliot'
    | 'eva'
    | 'geoff'
    | 'gerald'
    | 'hank'
    | 'helen'
    | 'hera'
    | 'jen'
    | 'joe'
    | 'joy'
    | 'juan'
    | 'kendra'
    | 'kendrick'
    | 'kenneth'
    | 'kevin'
    | 'kris'
    | 'linda'
    | 'madison'
    | 'marge'
    | 'marina'
    | 'marissa'
    | 'marta'
    | 'maya'
    | 'nicholas'
    | 'nyles'
    | 'phil'
    | 'reba'
    | 'rex'
    | 'rick'
    | 'ritu'
    | 'rob'
    | 'rodney'
    | 'rohan'
    | 'rosco'
    | 'samantha'
    | 'sandy'
    | 'selena'
    | 'seth'
    | 'sharon'
    | 'stan'
    | 'tamra'
    | 'tanya'
    | 'tibur'
    | 'tj'
    | 'tyler'
    | 'viv'
    | 'yadira'
    | 'marsh'
    | 'bayou'
    | 'creek'
    | 'brook'
    | 'flower'
    | 'spore'
    | 'glacier'
    | 'gulch'
    | 'alpine'
    | 'cove'
    | 'lagoon'
    | 'tundra'
    | 'steppe'
    | 'mesa'
    | 'grove'
    | 'rainforest'
    | 'moraine'
    | 'wildflower'
    | 'peak'
    | 'boulder'
    | 'gypsum'
    | 'zest'
    | string;
  /**
   * This is the model that will be used. Defaults to 'v1' when not specified.
   * @example "mistv2"
   */
  model?: 'v1' | 'mist' | 'mistv2';
  /**
   * This is the speed multiplier that will be used.
   * @min 0.1
   * @example null
   */
  speed?: number;
  /**
   * This is a flag that controls whether to add slight pauses using angle brackets. Example: “Hi. <200> I’d love to have a conversation with you.” adds a 200ms pause between the first and second sentences.
   * @example false
   */
  pauseBetweenBrackets?: boolean;
  /**
   * This is a flag that controls whether text inside brackets should be phonemized (converted to phonetic pronunciation) - Example: "{h'El.o} World" will pronounce "Hello" as expected.
   * @example false
   */
  phonemizeBetweenBrackets?: boolean;
  /**
   * This is a flag that controls whether to optimize for reduced latency in streaming. https://docs.rime.ai/api-reference/endpoint/websockets#param-reduce-latency
   * @example false
   */
  reduceLatency?: boolean;
  /**
   * This is a string that allows inline speed control using alpha notation. https://docs.rime.ai/api-reference/endpoint/websockets#param-inline-speed-alpha
   * @example null
   */
  inlineSpeedAlpha?: string;
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
}

export interface FallbackSmallestAIVoice {
  /** This is the voice provider that will be used. */
  provider: 'smallest-ai';
  /** This is the provider-specific ID that will be used. */
  voiceId:
    | 'emily'
    | 'jasmine'
    | 'arman'
    | 'james'
    | 'mithali'
    | 'aravind'
    | 'raj'
    | 'diya'
    | 'raman'
    | 'ananya'
    | 'isha'
    | 'william'
    | 'aarav'
    | 'monika'
    | 'niharika'
    | 'deepika'
    | 'raghav'
    | 'kajal'
    | 'radhika'
    | 'mansi'
    | 'nisha'
    | 'saurabh'
    | 'pooja'
    | 'saina'
    | 'sanya'
    | string;
  /** Smallest AI voice model to use. Defaults to 'lightning' when not specified. */
  model?: 'lightning';
  /**
   * This is the speed multiplier that will be used.
   * @example null
   */
  speed?: number;
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
}

export interface FallbackTavusVoice {
  /** This is the voice provider that will be used. */
  provider: 'tavus';
  /** This is the provider-specific ID that will be used. */
  voiceId: 'r52da2535a' | string;
  /** This is the unique identifier for the persona that the replica will use in the conversation. */
  personaId?: string;
  /** This is the url that will receive webhooks with updates regarding the conversation state. */
  callbackUrl?: string;
  /** This is the name for the conversation. */
  conversationName?: string;
  /** This is the context that will be appended to any context provided in the persona, if one is provided. */
  conversationalContext?: string;
  /** This is the custom greeting that the replica will give once a participant joines the conversation. */
  customGreeting?: string;
  /** These are optional properties used to customize the conversation. */
  properties?: TavusConversationProperties;
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
}

export interface FallbackVapiVoice {
  /** This is the voice provider that will be used. */
  provider: 'vapi';
  /** The voices provided by Vapi */
  voiceId:
    | 'Elliot'
    | 'Rohan'
    | 'Lily'
    | 'Savannah'
    | 'Hana'
    | 'Neha'
    | 'Cole'
    | 'Harry'
    | 'Paige'
    | 'Spencer';
  /**
   * This is the speed multiplier that will be used.
   *
   * @default 1
   * @min 0.25
   * @max 2
   * @default 1
   */
  speed?: number;
  /**
   * This is the language code (ISO 639-1) that will be used.
   *
   * @default 'en-US'
   * @default "en-US"
   */
  language?:
    | 'en-US'
    | 'en-GB'
    | 'en-AU'
    | 'en-CA'
    | 'ja'
    | 'zh'
    | 'de'
    | 'hi'
    | 'fr-FR'
    | 'fr-CA'
    | 'ko'
    | 'pt-BR'
    | 'pt-PT'
    | 'it'
    | 'es-ES'
    | 'es-MX'
    | 'id'
    | 'nl'
    | 'tr'
    | 'fil'
    | 'pl'
    | 'sv'
    | 'bg'
    | 'ro'
    | 'ar-SA'
    | 'ar-AE'
    | 'cs'
    | 'el'
    | 'fi'
    | 'hr'
    | 'ms'
    | 'sk'
    | 'da'
    | 'ta'
    | 'uk'
    | 'ru'
    | 'hu'
    | 'no'
    | 'vi';
  /** This is the plan for chunking the model output before it is sent to the voice provider. */
  chunkPlan?: ChunkPlan;
}

export interface TransportConfigurationTwilio {
  provider: 'twilio';
  /**
   * The integer number of seconds that we should allow the phone to ring before assuming there is no answer.
   * The default is `60` seconds and the maximum is `600` seconds.
   * For some call flows, we will add a 5-second buffer to the timeout value you provide.
   * For this reason, a timeout value of 10 seconds could result in an actual timeout closer to 15 seconds.
   * You can set this to a short time, such as `15` seconds, to hang up before reaching an answering machine or voicemail.
   *
   * @default 60
   * @min 1
   * @max 600
   * @example 60
   */
  timeout?: number;
  /**
   * Whether to record the call.
   * Can be `true` to record the phone call, or `false` to not.
   * The default is `false`.
   *
   * @default false
   * @example false
   */
  record?: boolean;
  /**
   * The number of channels in the final recording.
   * Can be: `mono` or `dual`.
   * The default is `mono`.
   * `mono` records both legs of the call in a single channel of the recording file.
   * `dual` records each leg to a separate channel of the recording file.
   * The first channel of a dual-channel recording contains the parent call and the second channel contains the child call.
   *
   * @default 'mono'
   * @example "mono"
   */
  recordingChannels?: 'mono' | 'dual';
}

export interface CreateAnthropicCredentialDTO {
  provider: 'anthropic';
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateAnyscaleCredentialDTO {
  provider: 'anyscale';
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateAssemblyAICredentialDTO {
  provider: 'assembly-ai';
  /** This is not returned in the API. */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface AzureBlobStorageBucketPlan {
  /** This is the blob storage connection string for the Azure resource. */
  connectionString: string;
  /** This is the container name for the Azure blob storage. */
  containerName: string;
  /**
   * This is the path where call artifacts will be stored.
   *
   * Usage:
   * - To store call artifacts in a specific folder, set this to the full path. Eg. "/folder-name1/folder-name2".
   * - To store call artifacts in the root of the bucket, leave this blank.
   *
   * @default "/"
   */
  path?: string;
}

export interface CreateAzureCredentialDTO {
  provider: 'azure';
  /**
   * This is the service being used in Azure.
   * @default "speech"
   */
  service: 'speech' | 'blob_storage';
  /** This is the region of the Azure resource. */
  region?:
    | 'australia'
    | 'canadaeast'
    | 'canadacentral'
    | 'eastus2'
    | 'eastus'
    | 'france'
    | 'india'
    | 'japaneast'
    | 'japanwest'
    | 'uaenorth'
    | 'northcentralus'
    | 'norway'
    | 'southcentralus'
    | 'swedencentral'
    | 'switzerland'
    | 'uk'
    | 'westus'
    | 'westus3';
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey?: string;
  /** This is the bucket plan that can be provided to store call artifacts in Azure Blob Storage. */
  bucketPlan?: AzureBlobStorageBucketPlan;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateAzureOpenAICredentialDTO {
  provider: 'azure-openai';
  region:
    | 'australia'
    | 'canadaeast'
    | 'canadacentral'
    | 'eastus2'
    | 'eastus'
    | 'france'
    | 'india'
    | 'japaneast'
    | 'japanwest'
    | 'uaenorth'
    | 'northcentralus'
    | 'norway'
    | 'southcentralus'
    | 'swedencentral'
    | 'switzerland'
    | 'uk'
    | 'westus'
    | 'westus3';
  /** @example ["gpt-4-0125-preview","gpt-4-0613"] */
  models:
    | 'gpt-4o-2024-11-20'
    | 'gpt-4o-2024-08-06'
    | 'gpt-4o-mini-2024-07-18'
    | 'gpt-4o-2024-05-13'
    | 'gpt-4-turbo-2024-04-09'
    | 'gpt-4-0125-preview'
    | 'gpt-4-1106-preview'
    | 'gpt-4-0613'
    | 'gpt-35-turbo-0125'
    | 'gpt-35-turbo-1106';
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  openAIKey: string;
  /** This is not returned in the API. */
  ocpApimSubscriptionKey?: string;
  /** @maxLength 10000 */
  openAIEndpoint: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface SipTrunkGateway {
  /** This is the address of the gateway. It can be an IPv4 address like 1.1.1.1 or a fully qualified domain name like my-sip-trunk.pstn.twilio.com. */
  ip: string;
  /**
   * This is the port number of the gateway. Default is 5060.
   *
   * @default 5060
   * @min 1
   * @max 65535
   */
  port?: number;
  /**
   * This is the netmask of the gateway. Defaults to 32.
   *
   * @default 32
   * @min 24
   * @max 32
   */
  netmask?: number;
  /**
   * This is whether inbound calls are allowed from this gateway. Default is true.
   *
   * @default true
   */
  inboundEnabled?: boolean;
  /**
   * This is whether outbound calls should be sent to this gateway. Default is true.
   *
   * Note, if netmask is less than 32, it doesn't affect the outbound IPs that are tried. 1 attempt is made to `ip:port`.
   *
   * @default true
   */
  outboundEnabled?: boolean;
  /**
   * This is the protocol to use for SIP signaling outbound calls. Default is udp.
   *
   * @default udp
   */
  outboundProtocol?: 'tls/srtp' | 'tcp' | 'tls' | 'udp';
  /**
   * This is whether to send options ping to the gateway. This can be used to check if the gateway is reachable. Default is false.
   *
   * This is useful for high availability setups where you want to check if the gateway is reachable before routing calls to it. Note, if no gateway for a trunk is reachable, outbound calls will be rejected.
   *
   * @default false
   */
  optionsPingEnabled?: boolean;
}

export interface SipTrunkOutboundSipRegisterPlan {
  domain?: string;
  username?: string;
  realm?: string;
}

export interface SipTrunkOutboundAuthenticationPlan {
  /** This is not returned in the API. */
  authPassword?: string;
  authUsername?: string;
  /** This can be used to configure if SIP register is required by the SIP trunk. If not provided, no SIP registration will be attempted. */
  sipRegisterPlan?: SipTrunkOutboundSipRegisterPlan;
}

export type SbcConfiguration = object;

export interface CreateByoSipTrunkCredentialDTO {
  /** This can be used to bring your own SIP trunks or to connect to a Carrier. */
  provider?: 'byo-sip-trunk';
  /** This is the list of SIP trunk's gateways. */
  gateways: SipTrunkGateway[];
  /** This can be used to configure the outbound authentication if required by the SIP trunk. */
  outboundAuthenticationPlan?: SipTrunkOutboundAuthenticationPlan;
  /**
   * This ensures the outbound origination attempts have a leading plus. Defaults to false to match conventional telecom behavior.
   *
   * Usage:
   * - Vonage/Twilio requires leading plus for all outbound calls. Set this to true.
   *
   * @default false
   */
  outboundLeadingPlusEnabled?: boolean;
  /**
   * This can be used to configure the tech prefix on outbound calls. This is an advanced property.
   * @maxLength 10000
   */
  techPrefix?: string;
  /**
   * This can be used to enable the SIP diversion header for authenticating the calling number if the SIP trunk supports it. This is an advanced property.
   * @maxLength 10000
   */
  sipDiversionHeader?: string;
  /** This is an advanced configuration for enterprise deployments. This uses the onprem SBC to trunk into the SIP trunk's `gateways`, rather than the managed SBC provided by Vapi. */
  sbcConfiguration?: SbcConfiguration;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateCartesiaCredentialDTO {
  provider: 'cartesia';
  /** This is not returned in the API. */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CloudflareR2BucketPlan {
  /** Cloudflare R2 Access key ID. */
  accessKeyId?: string;
  /** Cloudflare R2 access key secret. This is not returned in the API. */
  secretAccessKey?: string;
  /** Cloudflare R2 base url. */
  url?: string;
  /** This is the name of the bucket. */
  name: string;
  /**
   * This is the path where call artifacts will be stored.
   *
   * Usage:
   * - To store call artifacts in a specific folder, set this to the full path. Eg. "/folder-name1/folder-name2".
   * - To store call artifacts in the root of the bucket, leave this blank.
   *
   * @default "/"
   */
  path?: string;
}

export interface CreateCloudflareCredentialDTO {
  /** Credential provider. Only allowed value is cloudflare */
  provider: 'cloudflare';
  /** Cloudflare Account Id. */
  accountId?: string;
  /** Cloudflare API Key / Token. */
  apiKey?: string;
  /** Cloudflare Account Email. */
  accountEmail?: string;
  /** This is the bucket plan that can be provided to store call artifacts in R2 */
  bucketPlan?: CloudflareR2BucketPlan;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface OAuth2AuthenticationPlan {
  type: 'oauth2';
  /** This is the OAuth2 URL. */
  url: string;
  /** This is the OAuth2 client ID. */
  clientId: string;
  /** This is the OAuth2 client secret. */
  clientSecret: string;
  /**
   * This is the scope of the OAuth2 token.
   * @maxLength 1000
   */
  scope?: string;
}

export interface CreateCustomLLMCredentialDTO {
  provider: 'custom-llm';
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey: string;
  /** This is the authentication plan. Currently supports OAuth2 RFC 6749. To use Bearer authentication, use apiKey */
  authenticationPlan?: OAuth2AuthenticationPlan;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateDeepgramCredentialDTO {
  provider: 'deepgram';
  /** This is not returned in the API. */
  apiKey: string;
  /** This can be used to point to an onprem Deepgram instance. Defaults to api.deepgram.com. */
  apiUrl?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateDeepInfraCredentialDTO {
  provider: 'deepinfra';
  /** This is not returned in the API. */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateDeepSeekCredentialDTO {
  provider: 'deep-seek';
  /** This is not returned in the API. */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateElevenLabsCredentialDTO {
  provider: '11labs';
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface GcpKey {
  /** This is the type of the key. Most likely, this is "service_account". */
  type: string;
  /** This is the ID of the Google Cloud project associated with this key. */
  projectId: string;
  /** This is the unique identifier for the private key. */
  privateKeyId: string;
  /**
   * This is the private key in PEM format.
   *
   * Note: This is not returned in the API.
   */
  privateKey: string;
  /** This is the email address associated with the service account. */
  clientEmail: string;
  /** This is the unique identifier for the client. */
  clientId: string;
  /** This is the URI for the auth provider's authorization endpoint. */
  authUri: string;
  /** This is the URI for the auth provider's token endpoint. */
  tokenUri: string;
  /** This is the URL of the public x509 certificate for the auth provider. */
  authProviderX509CertUrl: string;
  /** This is the URL of the public x509 certificate for the client. */
  clientX509CertUrl: string;
  /** This is the domain associated with the universe this service account belongs to. */
  universeDomain: string;
}

export interface BucketPlan {
  /** This is the name of the bucket. */
  name: string;
  /**
   * This is the region of the bucket.
   *
   * Usage:
   * - If `credential.type` is `aws`, then this is required.
   * - If `credential.type` is `gcp`, then this is optional since GCP allows buckets to be accessed without a region but region is required for data residency requirements. Read here: https://cloud.google.com/storage/docs/request-endpoints
   */
  region?: string;
  /**
   * This is the path where call artifacts will be stored.
   *
   * Usage:
   * - To store call artifacts in a specific folder, set this to the full path. Eg. "/folder-name1/folder-name2".
   * - To store call artifacts in the root of the bucket, leave this blank.
   *
   * @default "/"
   */
  path?: string;
  /**
   * This is the HMAC access key offered by GCP for interoperability with S3 clients. Here is the guide on how to create: https://cloud.google.com/storage/docs/authentication/managing-hmackeys#console
   *
   * Usage:
   * - If `credential.type` is `gcp`, then this is required.
   * - If `credential.type` is `aws`, then this is not required since credential.awsAccessKeyId is used instead.
   */
  hmacAccessKey?: string;
  /**
   * This is the secret for the HMAC access key. Here is the guide on how to create: https://cloud.google.com/storage/docs/authentication/managing-hmackeys#console
   *
   * Usage:
   * - If `credential.type` is `gcp`, then this is required.
   * - If `credential.type` is `aws`, then this is not required since credential.awsSecretAccessKey is used instead.
   *
   * Note: This is not returned in the API.
   */
  hmacSecret?: string;
}

export interface CreateGcpCredentialDTO {
  provider: 'gcp';
  /**
   * This is the GCP key. This is the JSON that can be generated in the Google Cloud Console at https://console.cloud.google.com/iam-admin/serviceaccounts/details/<service-account-id>/keys.
   *
   * The schema is identical to the JSON that GCP outputs.
   */
  gcpKey: GcpKey;
  /** This is the bucket plan that can be provided to store call artifacts in GCP. */
  bucketPlan?: BucketPlan;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateGladiaCredentialDTO {
  provider: 'gladia';
  /** This is not returned in the API. */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateGoHighLevelCredentialDTO {
  provider: 'gohighlevel';
  /** This is not returned in the API. */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateGroqCredentialDTO {
  provider: 'groq';
  /** This is not returned in the API. */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateLangfuseCredentialDTO {
  provider: 'langfuse';
  /** The public key for Langfuse project. Eg: pk-lf-... */
  publicKey: string;
  /** The secret key for Langfuse project. Eg: sk-lf-... .This is not returned in the API. */
  apiKey: string;
  /** The host URL for Langfuse project. Eg: https://cloud.langfuse.com */
  apiUrl: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateLmntCredentialDTO {
  provider: 'lmnt';
  /** This is not returned in the API. */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateMakeCredentialDTO {
  provider: 'make';
  /** Team ID */
  teamId: string;
  /** Region of your application. For example: eu1, eu2, us1, us2 */
  region: string;
  /** This is not returned in the API. */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateOpenAICredentialDTO {
  provider: 'openai';
  /** This is not returned in the API. */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateOpenRouterCredentialDTO {
  provider: 'openrouter';
  /** This is not returned in the API. */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreatePerplexityAICredentialDTO {
  provider: 'perplexity-ai';
  /** This is not returned in the API. */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreatePlayHTCredentialDTO {
  provider: 'playht';
  /** This is not returned in the API. */
  apiKey: string;
  userId: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateRimeAICredentialDTO {
  provider: 'rime-ai';
  /** This is not returned in the API. */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateRunpodCredentialDTO {
  provider: 'runpod';
  /** This is not returned in the API. */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateS3CredentialDTO {
  /** Credential provider. Only allowed value is s3 */
  provider: 's3';
  /** AWS access key ID. */
  awsAccessKeyId: string;
  /** AWS access key secret. This is not returned in the API. */
  awsSecretAccessKey: string;
  /** AWS region in which the S3 bucket is located. */
  region: string;
  /** AWS S3 bucket name. */
  s3BucketName: string;
  /** The path prefix for the uploaded recording. Ex. "recordings/" */
  s3PathPrefix: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface SupabaseBucketPlan {
  /**
   * This is the S3 Region. It should look like us-east-1
   * It should be one of the supabase regions defined in the SUPABASE_REGION enum
   * Check https://supabase.com/docs/guides/platform/regions for up to date regions
   */
  region:
    | 'us-west-1'
    | 'us-east-1'
    | 'us-east-2'
    | 'ca-central-1'
    | 'eu-west-1'
    | 'eu-west-2'
    | 'eu-west-3'
    | 'eu-central-1'
    | 'eu-central-2'
    | 'eu-north-1'
    | 'ap-south-1'
    | 'ap-southeast-1'
    | 'ap-northeast-1'
    | 'ap-northeast-2'
    | 'ap-southeast-2'
    | 'sa-east-1';
  /**
   * This is the S3 compatible URL for Supabase S3
   * This should look like https://<project-ID>.supabase.co/storage/v1/s3
   */
  url: string;
  /**
   * This is the Supabase S3 Access Key ID.
   * The user creates this in the Supabase project Storage settings
   */
  accessKeyId: string;
  /**
   * This is the Supabase S3 Secret Access Key.
   * The user creates this in the Supabase project Storage settings along with the access key id
   */
  secretAccessKey: string;
  /**
   * This is the Supabase S3 Bucket Name.
   * The user must create this in Supabase under Storage > Buckets
   * A bucket that does not exist will not be checked now, but file uploads will fail
   */
  name: string;
  /**
   * This is the Supabase S3 Bucket Folder Path.
   * The user can create this in Supabase under Storage > Buckets
   * A path that does not exist will not be checked now, but file uploads will fail
   * A Path is like a folder in the bucket
   * Eg. If the bucket is called "my-bucket" and the path is "my-folder", the full path is "my-bucket/my-folder"
   */
  path?: string;
}

export interface CreateSupabaseCredentialDTO {
  /** This is for supabase storage. */
  provider: 'supabase';
  bucketPlan?: SupabaseBucketPlan;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateSmallestAICredentialDTO {
  provider: 'smallest-ai';
  /** This is not returned in the API. */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateTavusCredentialDTO {
  provider: 'tavus';
  /** This is not returned in the API. */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateTogetherAICredentialDTO {
  provider: 'together-ai';
  /** This is not returned in the API. */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateTwilioCredentialDTO {
  provider: 'twilio';
  /** This is not returned in the API. */
  authToken: string;
  accountSid: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateVonageCredentialDTO {
  provider: 'vonage';
  /** This is not returned in the API. */
  apiSecret: string;
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateWebhookCredentialDTO {
  provider: 'webhook';
  /** This is the authentication plan. Currently supports OAuth2 RFC 6749. */
  authenticationPlan: OAuth2AuthenticationPlan;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateXAiCredentialDTO {
  /** This is the api key for Grok in XAi's console. Get it from here: https://console.x.ai */
  provider: 'xai';
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateGoogleCalendarOAuth2ClientCredentialDTO {
  provider: 'google.calendar.oauth2-client';
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateGoogleCalendarOAuth2AuthorizationCredentialDTO {
  provider: 'google.calendar.oauth2-authorization';
  /** The authorization ID for the OAuth2 authorization */
  authorizationId: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface TransferAssistantHookAction {
  /** This is the type of action - must be "transfer" */
  type: 'transfer';
  /** This is the destination details for the transfer - can be a phone number or SIP URI */
  destination?: TransferDestinationNumber | TransferDestinationSip;
}

export interface GoogleVoicemailDetectionPlan {
  /** This is the provider to use for voicemail detection. */
  provider: 'google';
  /**
   * This is how long should we listen in order to determine if we were sent to voicemail or not?
   *
   * @default 15
   * @min 5
   * @max 60
   * @default 25
   */
  voicemailExpectedDurationSeconds: number;
}

export interface OpenAIVoicemailDetectionPlan {
  /** This is the provider to use for voicemail detection. */
  provider: 'openai';
  /**
   * This is how long should we listen in order to determine if we were sent to voicemail or not?
   *
   * @default 15
   * @min 5
   * @max 60
   * @default 25
   */
  voicemailExpectedDurationSeconds: number;
}

export interface TwilioVoicemailDetectionPlan {
  /** This is the provider to use for voicemail detection. */
  provider: 'twilio';
  /**
   * These are the AMD messages from Twilio that are considered as voicemail. Default is ['machine_end_beep', 'machine_end_silence'].
   *
   * @default {Array} ['machine_end_beep', 'machine_end_silence']
   * @example ["machine_end_beep","machine_end_silence"]
   */
  voicemailDetectionTypes?:
    | 'machine_start'
    | 'human'
    | 'fax'
    | 'unknown'
    | 'machine_end_beep'
    | 'machine_end_silence'
    | 'machine_end_other';
  /**
   * This sets whether the assistant should detect voicemail. Defaults to true.
   *
   * @default true
   */
  enabled?: boolean;
  /**
   * The number of seconds that Twilio should attempt to perform answering machine detection before timing out and returning AnsweredBy as unknown. Default is 30 seconds.
   *
   * Increasing this value will provide the engine more time to make a determination. This can be useful when DetectMessageEnd is provided in the MachineDetection parameter and there is an expectation of long answering machine greetings that can exceed 30 seconds.
   *
   * Decreasing this value will reduce the amount of time the engine has to make a determination. This can be particularly useful when the Enable option is provided in the MachineDetection parameter and you want to limit the time for initial detection.
   *
   * Check the [Twilio docs](https://www.twilio.com/docs/voice/answering-machine-detection#optional-api-tuning-parameters) for more info.
   *
   * @default 30
   * @min 3
   * @max 59
   */
  machineDetectionTimeout?: number;
  /**
   * The number of milliseconds that is used as the measuring stick for the length of the speech activity. Durations lower than this value will be interpreted as a human, longer as a machine. Default is 2400 milliseconds.
   *
   * Increasing this value will reduce the chance of a False Machine (detected machine, actually human) for a long human greeting (e.g., a business greeting) but increase the time it takes to detect a machine.
   *
   * Decreasing this value will reduce the chances of a False Human (detected human, actually machine) for short voicemail greetings. The value of this parameter may need to be reduced by more than 1000ms to detect very short voicemail greetings. A reduction of that significance can result in increased False Machine detections. Adjusting the MachineDetectionSpeechEndThreshold is likely the better approach for short voicemails. Decreasing MachineDetectionSpeechThreshold will also reduce the time it takes to detect a machine.
   *
   * Check the [Twilio docs](https://www.twilio.com/docs/voice/answering-machine-detection#optional-api-tuning-parameters) for more info.
   *
   * @default 2400
   * @min 1000
   * @max 6000
   */
  machineDetectionSpeechThreshold?: number;
  /**
   * The number of milliseconds of silence after speech activity at which point the speech activity is considered complete. Default is 1200 milliseconds.
   *
   * Increasing this value will typically be used to better address the short voicemail greeting scenarios. For short voicemails, there is typically 1000-2000ms of audio followed by 1200-2400ms of silence and then additional audio before the beep. Increasing the MachineDetectionSpeechEndThreshold to ~2500ms will treat the 1200-2400ms of silence as a gap in the greeting but not the end of the greeting and will result in a machine detection. The downsides of such a change include:
   * - Increasing the delay for human detection by the amount you increase this parameter, e.g., a change of 1200ms to 2500ms increases human detection delay by 1300ms.
   * - Cases where a human has two utterances separated by a period of silence (e.g. a "Hello", then 2000ms of silence, and another "Hello") may be interpreted as a machine.
   *
   * Decreasing this value will result in faster human detection. The consequence is that it can lead to increased False Human (detected human, actually machine) detections because a silence gap in a voicemail greeting (not necessarily just in short voicemail scenarios) can be incorrectly interpreted as the end of speech.
   *
   * Check the [Twilio docs](https://www.twilio.com/docs/voice/answering-machine-detection#optional-api-tuning-parameters) for more info.
   *
   * @default 1200
   * @min 500
   * @max 5000
   */
  machineDetectionSpeechEndThreshold?: number;
  /**
   * The number of milliseconds of initial silence after which an unknown AnsweredBy result will be returned. Default is 5000 milliseconds.
   *
   * Increasing this value will result in waiting for a longer period of initial silence before returning an 'unknown' AMD result.
   *
   * Decreasing this value will result in waiting for a shorter period of initial silence before returning an 'unknown' AMD result.
   *
   * Check the [Twilio docs](https://www.twilio.com/docs/voice/answering-machine-detection#optional-api-tuning-parameters) for more info.
   *
   * @default 5000
   * @min 2000
   * @max 10000
   */
  machineDetectionSilenceTimeout?: number;
}

export interface CompliancePlan {
  /**
   * When this is enabled, no logs, recordings, or transcriptions will be stored.
   * At the end of the call, you will still receive an end-of-call-report message to store on your server. Defaults to false.
   * @example {"hipaaEnabled":false}
   */
  hipaaEnabled?: boolean;
  /**
   * When this is enabled, the user will be restricted to use PCI-compliant providers, and no logs or transcripts are stored.
   * At the end of the call, you will receive an end-of-call-report message to store on your server. Defaults to false.
   * @example {"pciEnabled":false}
   */
  pciEnabled?: boolean;
}

export interface StructuredDataPlan {
  /**
   * These are the messages used to generate the structured data.
   *
   * @default: ```
   * [
   *   {
   *     "role": "system",
   *     "content": "You are an expert data extractor. You will be given a transcript of a call. Extract structured data per the JSON Schema. DO NOT return anything except the structured data.\n\nJson Schema:\\n{{schema}}\n\nOnly respond with the JSON."
   *   },
   *   {
   *     "role": "user",
   *     "content": "Here is the transcript:\n\n{{transcript}}\n\n"
   *   }
   * ]```
   *
   * You can customize by providing any messages you want.
   *
   * Here are the template variables available:
   * - {{transcript}}: the transcript of the call from `call.artifact.transcript`- {{systemPrompt}}: the system prompt of the call from `assistant.model.messages[type=system].content`- {{schema}}: the schema of the structured data from `structuredDataPlan.schema`
   */
  messages?: object[];
  /**
   * This determines whether structured data is generated and stored in `call.analysis.structuredData`. Defaults to false.
   *
   * Usage:
   * - If you want to extract structured data, set this to true and provide a `schema`.
   *
   * @default false
   */
  enabled?: boolean;
  /**
   * This is the schema of the structured data. The output is stored in `call.analysis.structuredData`.
   *
   * Complete guide on JSON Schema can be found [here](https://ajv.js.org/json-schema.html#json-data-type).
   */
  schema?: JsonSchema;
  /**
   * This is how long the request is tried before giving up. When request times out, `call.analysis.structuredData` will be empty.
   *
   * Usage:
   * - To guarantee the structured data is generated, set this value high. Note, this will delay the end of call report in cases where model is slow to respond.
   *
   * @default 5 seconds
   * @min 1
   * @max 60
   */
  timeoutSeconds?: number;
}

export interface StructuredDataMultiPlan {
  /** This is the key of the structured data plan in the catalog. */
  key: string;
  /** This is an individual structured data plan in the catalog. */
  plan: StructuredDataPlan;
}

export interface SuccessEvaluationPlan {
  /**
   * This enforces the rubric of the evaluation. The output is stored in `call.analysis.successEvaluation`.
   *
   * Options include:
   * - 'NumericScale': A scale of 1 to 10.
   * - 'DescriptiveScale': A scale of Excellent, Good, Fair, Poor.
   * - 'Checklist': A checklist of criteria and their status.
   * - 'Matrix': A grid that evaluates multiple criteria across different performance levels.
   * - 'PercentageScale': A scale of 0% to 100%.
   * - 'LikertScale': A scale of Strongly Agree, Agree, Neutral, Disagree, Strongly Disagree.
   * - 'AutomaticRubric': Automatically break down evaluation into several criteria, each with its own score.
   * - 'PassFail': A simple 'true' if call passed, 'false' if not.
   *
   * Default is 'PassFail'.
   */
  rubric?:
    | 'NumericScale'
    | 'DescriptiveScale'
    | 'Checklist'
    | 'Matrix'
    | 'PercentageScale'
    | 'LikertScale'
    | 'AutomaticRubric'
    | 'PassFail';
  /**
   * These are the messages used to generate the success evaluation.
   *
   * @default: ```
   * [
   *   {
   *     "role": "system",
   *     "content": "You are an expert call evaluator. You will be given a transcript of a call and the system prompt of the AI participant. Determine if the call was successful based on the objectives inferred from the system prompt. DO NOT return anything except the result.\n\nRubric:\\n{{rubric}}\n\nOnly respond with the result."
   *   },
   *   {
   *     "role": "user",
   *     "content": "Here is the transcript:\n\n{{transcript}}\n\n"
   *   },
   *   {
   *     "role": "user",
   *     "content": "Here was the system prompt of the call:\n\n{{systemPrompt}}\n\n"
   *   }
   * ]```
   *
   * You can customize by providing any messages you want.
   *
   * Here are the template variables available:
   * - {{transcript}}: the transcript of the call from `call.artifact.transcript`- {{systemPrompt}}: the system prompt of the call from `assistant.model.messages[type=system].content`- {{rubric}}: the rubric of the success evaluation from `successEvaluationPlan.rubric`
   */
  messages?: object[];
  /**
   * This determines whether a success evaluation is generated and stored in `call.analysis.successEvaluation`. Defaults to true.
   *
   * Usage:
   * - If you want to disable the success evaluation, set this to false.
   *
   * @default true
   */
  enabled?: boolean;
  /**
   * This is how long the request is tried before giving up. When request times out, `call.analysis.successEvaluation` will be empty.
   *
   * Usage:
   * - To guarantee the success evaluation is generated, set this value high. Note, this will delay the end of call report in cases where model is slow to respond.
   *
   * @default 5 seconds
   * @min 1
   * @max 60
   */
  timeoutSeconds?: number;
}

export interface AnalysisPlan {
  /** This is the plan for generating the summary of the call. This outputs to `call.analysis.summary`. */
  summaryPlan?: SummaryPlan;
  /** This is the plan for generating the structured data from the call. This outputs to `call.analysis.structuredData`. */
  structuredDataPlan?: StructuredDataPlan;
  /** This is an array of structured data plan catalogs. Each entry includes a `key` and a `plan` for generating the structured data from the call. This outputs to `call.analysis.structuredDataMulti`. */
  structuredDataMultiPlan?: StructuredDataMultiPlan[];
  /** This is the plan for generating the success evaluation of the call. This outputs to `call.analysis.successEvaluation`. */
  successEvaluationPlan?: SuccessEvaluationPlan;
}

export interface TranscriptPlan {
  /**
   * This determines whether the transcript is stored in `call.artifact.transcript`. Defaults to true.
   *
   * @default true
   * @example true
   */
  enabled?: boolean;
  /**
   * This is the name of the assistant in the transcript. Defaults to 'AI'.
   *
   * Usage:
   * - If you want to change the name of the assistant in the transcript, set this. Example, here is what the transcript would look like with `assistantName` set to 'Buyer':
   * ```
   * User: Hello, how are you?
   * Buyer: I'm fine.
   * User: Do you want to buy a car?
   * Buyer: No.
   * ```
   *
   * @default 'AI'
   */
  assistantName?: string;
  /**
   * This is the name of the user in the transcript. Defaults to 'User'.
   *
   * Usage:
   * - If you want to change the name of the user in the transcript, set this. Example, here is what the transcript would look like with `userName` set to 'Seller':
   * ```
   * Seller: Hello, how are you?
   * AI: I'm fine.
   * Seller: Do you want to buy a car?
   * AI: No.
   * ```
   *
   * @default 'User'
   */
  userName?: string;
}

export interface ArtifactPlan {
  /**
   * This determines whether assistant's calls are recorded. Defaults to true.
   *
   * Usage:
   * - If you don't want to record the calls, set this to false.
   * - If you want to record the calls when `assistant.hipaaEnabled` (deprecated) or `assistant.compliancePlan.hipaaEnabled` explicity set this to true and make sure to provide S3 or GCP credentials on the Provider Credentials page in the Dashboard.
   *
   * You can find the recording at `call.artifact.recordingUrl` and `call.artifact.stereoRecordingUrl` after the call is ended.
   *
   * @default true
   * @example true
   */
  recordingEnabled?: boolean;
  /**
   * This determines the format of the recording. Defaults to `wav;l16`.
   *
   * @default 'wav;l16'
   */
  recordingFormat?: 'wav;l16' | 'mp3';
  /**
   * This determines whether the video is recorded during the call. Defaults to false. Only relevant for `webCall` type.
   *
   * You can find the video recording at `call.artifact.videoRecordingUrl` after the call is ended.
   *
   * @default false
   * @example false
   */
  videoRecordingEnabled?: boolean;
  /**
   * This determines whether the SIP packet capture is enabled. Defaults to true. Only relevant for `phone` type calls where phone number's provider is `vapi` or `byo-phone-number`.
   *
   * You can find the packet capture at `call.artifact.pcapUrl` after the call is ended.
   *
   * @default true
   * @example true
   */
  pcapEnabled?: boolean;
  /**
   * This is the path where the SIP packet capture will be uploaded. This is only used if you have provided S3 or GCP credentials on the Provider Credentials page in the Dashboard.
   *
   * If credential.s3PathPrefix or credential.bucketPlan.path is set, this will append to it.
   *
   * Usage:
   * - If you want to upload the packet capture to a specific path, set this to the path. Example: `/my-assistant-captures`.
   * - If you want to upload the packet capture to the root of the bucket, set this to `/`.
   *
   * @default '/'
   * @example "/pcaps"
   */
  pcapS3PathPrefix?: string;
  /** This is the plan for `call.artifact.transcript`. To disable, set `transcriptPlan.enabled` to false. */
  transcriptPlan?: TranscriptPlan;
  /**
   * This is the path where the recording will be uploaded. This is only used if you have provided S3 or GCP credentials on the Provider Credentials page in the Dashboard.
   *
   * If credential.s3PathPrefix or credential.bucketPlan.path is set, this will append to it.
   *
   * Usage:
   * - If you want to upload the recording to a specific path, set this to the path. Example: `/my-assistant-recordings`.
   * - If you want to upload the recording to the root of the bucket, set this to `/`.
   *
   * @default '/'
   */
  recordingPath?: string;
}

export interface MessagePlan {
  /**
   * This are the messages that the assistant will speak when the user hasn't responded for `idleTimeoutSeconds`. Each time the timeout is triggered, a random message will be chosen from this array.
   *
   * Usage:
   * - If user gets distracted and doesn't respond for a while, this can be used to grab their attention.
   * - If the transcriber doesn't pick up what the user said, this can be used to ask the user to repeat themselves. (From the perspective of the assistant, the conversation is idle since it didn't "hear" any user messages.)
   *
   * @default null (no idle message is spoken)
   */
  idleMessages?: string[];
  /**
   * This determines the maximum number of times `idleMessages` can be spoken during the call.
   *
   * @default 3
   * @min 1
   * @max 10
   */
  idleMessageMaxSpokenCount?: number;
  /**
   * This is the timeout in seconds before a message from `idleMessages` is spoken. The clock starts when the assistant finishes speaking and remains active until the user speaks.
   *
   * @default 10
   * @min 5
   * @max 60
   */
  idleTimeoutSeconds?: number;
  /**
   * This is the message that the assistant will say if the call ends due to silence.
   *
   * If unspecified, it will hang up without saying anything.
   * @maxLength 1000
   */
  silenceTimeoutMessage?: string;
}

export interface AssistantCustomEndpointingRule {
  /**
   * This endpointing rule is based on the last assistant message before customer started speaking.
   *
   * Flow:
   * - Assistant speaks
   * - Customer starts speaking
   * - Customer transcription comes in
   * - This rule is evaluated on the last assistant message
   * - If a match is found based on `regex`, the endpointing timeout is set to `timeoutSeconds`
   *
   * Usage:
   * - If you have yes/no questions in your use case like "are you interested in a loan?", you can set a shorter timeout.
   * - If you have questions where the customer may pause to look up information like "what's my account number?", you can set a longer timeout.
   */
  type: 'assistant';
  /**
   * This is the regex pattern to match.
   *
   * Note:
   * - This works by using the `RegExp.test` method in Node.JS. Eg. `/hello/.test("hello there")` will return `true`.
   *
   * Hot tip:
   * - In JavaScript, escape `\` when sending the regex pattern. Eg. `"hello\sthere"` will be sent over the wire as `"hellosthere"`. Send `"hello\\sthere"` instead.
   * - `RegExp.test` does substring matching, so `/cat/.test("I love cats")` will return `true`. To do full string matching, send "^cat$".
   */
  regex: string;
  /**
   * These are the options for the regex match. Defaults to all disabled.
   *
   * @default []
   */
  regexOptions?: RegexOption[];
  /**
   * This is the endpointing timeout in seconds, if the rule is matched.
   * @min 0
   * @max 15
   */
  timeoutSeconds: number;
}

export interface CustomerCustomEndpointingRule {
  /**
   * This endpointing rule is based on current customer message as they are speaking.
   *
   * Flow:
   * - Assistant speaks
   * - Customer starts speaking
   * - Customer transcription comes in
   * - This rule is evaluated on the current customer transcription
   * - If a match is found based on `regex`, the endpointing timeout is set to `timeoutSeconds`
   *
   * Usage:
   * - If you want to wait longer while customer is speaking numbers, you can set a longer timeout.
   */
  type: 'customer';
  /**
   * This is the regex pattern to match.
   *
   * Note:
   * - This works by using the `RegExp.test` method in Node.JS. Eg. `/hello/.test("hello there")` will return `true`.
   *
   * Hot tip:
   * - In JavaScript, escape `\` when sending the regex pattern. Eg. `"hello\sthere"` will be sent over the wire as `"hellosthere"`. Send `"hello\\sthere"` instead.
   * - `RegExp.test` does substring matching, so `/cat/.test("I love cats")` will return `true`. To do full string matching, send "^cat$".
   */
  regex: string;
  /**
   * These are the options for the regex match. Defaults to all disabled.
   *
   * @default []
   */
  regexOptions?: RegexOption[];
  /**
   * This is the endpointing timeout in seconds, if the rule is matched.
   * @min 0
   * @max 15
   */
  timeoutSeconds: number;
}

export interface BothCustomEndpointingRule {
  /**
   * This endpointing rule is based on both the last assistant message and the current customer message as they are speaking.
   *
   * Flow:
   * - Assistant speaks
   * - Customer starts speaking
   * - Customer transcription comes in
   * - This rule is evaluated on the last assistant message and the current customer transcription
   * - If assistant message matches `assistantRegex` AND customer message matches `customerRegex`, the endpointing timeout is set to `timeoutSeconds`
   *
   * Usage:
   * - If you want to wait longer while customer is speaking numbers, you can set a longer timeout.
   */
  type: 'both';
  /**
   * This is the regex pattern to match the assistant's message.
   *
   * Note:
   * - This works by using the `RegExp.test` method in Node.JS. Eg. `/hello/.test("hello there")` will return `true`.
   *
   * Hot tip:
   * - In JavaScript, escape `\` when sending the regex pattern. Eg. `"hello\sthere"` will be sent over the wire as `"hellosthere"`. Send `"hello\\sthere"` instead.
   * - `RegExp.test` does substring matching, so `/cat/.test("I love cats")` will return `true`. To do full string matching, send "^cat$".
   */
  assistantRegex: string;
  /**
   * These are the options for the assistant's message regex match. Defaults to all disabled.
   *
   * @default []
   */
  assistantRegexOptions?: RegexOption[];
  customerRegex: string;
  /**
   * These are the options for the customer's message regex match. Defaults to all disabled.
   *
   * @default []
   */
  customerRegexOptions?: RegexOption[];
  /**
   * This is the endpointing timeout in seconds, if the rule is matched.
   * @min 0
   * @max 15
   */
  timeoutSeconds: number;
}

export interface VapiSmartEndpointingPlan {
  /**
   * This is the provider for the smart endpointing plan.
   * @example "vapi"
   */
  provider: 'vapi' | 'livekit';
}

export interface LivekitSmartEndpointingPlan {
  /**
   * This is the provider for the smart endpointing plan.
   * @example "livekit"
   */
  provider: 'vapi' | 'livekit';
  /**
   * This expression describes how long the bot will wait to start speaking based on the likelihood that the user has reached an endpoint.
   *
   * This is a millisecond valued function. It maps probabilities (real numbers on [0,1]) to seconds that the user should wait ([0, \infty]). Any negative values that are returned are set to zero (the bot can't start talking in the past).
   *
   * A probability of zero represents very high confidence that the caller has stopped speaking, and would like the bot to speak to them. A probability of one represents very high confidence that the caller is still speaking.
   *
   * Under the hood, this is parsed into a mathjs expression. Whatever you use to write your expression needs to be valid with respect to mathjs
   *
   * @default "200 + 8000 * x"
   */
  waitFunction?: string;
}

export interface TranscriptionEndpointingPlan {
  /**
   * The minimum number of seconds to wait after transcription ending with punctuation before sending a request to the model. Defaults to 0.1.
   *
   * This setting exists because the transcriber punctuates the transcription when it's more confident that customer has completed a thought.
   *
   * @default 0.1
   * @min 0
   * @max 3
   * @example 0.1
   */
  onPunctuationSeconds?: number;
  /**
   * The minimum number of seconds to wait after transcription ending without punctuation before sending a request to the model. Defaults to 1.5.
   *
   * This setting exists to catch the cases where the transcriber was not confident enough to punctuate the transcription, but the customer is done and has been silent for a long time.
   *
   * @default 1.5
   * @min 0
   * @max 3
   * @example 1.5
   */
  onNoPunctuationSeconds?: number;
  /**
   * The minimum number of seconds to wait after transcription ending with a number before sending a request to the model. Defaults to 0.4.
   *
   * This setting exists because the transcriber will sometimes punctuate the transcription ending with a number, even though the customer hasn't uttered the full number. This happens commonly for long numbers when the customer reads the number in chunks.
   *
   * @default 0.5
   * @min 0
   * @max 3
   * @example 0.5
   */
  onNumberSeconds?: number;
}

export interface StartSpeakingPlan {
  /**
   * This is how long assistant waits before speaking. Defaults to 0.4.
   *
   * This is the minimum it will wait but if there is latency is the pipeline, this minimum will be exceeded. This is intended as a stopgap in case the pipeline is moving too fast.
   *
   * Example:
   * - If model generates tokens and voice generates bytes within 100ms, the pipeline still waits 300ms before outputting speech.
   *
   * Usage:
   * - If the customer is taking long pauses, set this to a higher value.
   * - If the assistant is accidentally jumping in too much, set this to a higher value.
   *
   * @default 0.4
   * @min 0
   * @max 5
   * @example 0.4
   */
  waitSeconds?: number;
  /**
   * @deprecated
   * @example false
   */
  smartEndpointingEnabled?: object;
  /**
   * This is the plan for smart endpointing. Pick between Vapi smart endpointing or LiveKit smart endpointing (or nothing). We strongly recommend using livekit endpointing when working in English. LiveKit endpointing is not supported in other languages, yet.
   *
   * If this is set, it will override and take precedence over `transcriptionEndpointingPlan`.
   * This plan will still be overridden by any matching `customEndpointingRules`.
   */
  smartEndpointingPlan?: VapiSmartEndpointingPlan | LivekitSmartEndpointingPlan;
  /**
   * These are the custom endpointing rules to set an endpointing timeout based on a regex on the customer's speech or the assistant's last message.
   *
   * Usage:
   * - If you have yes/no questions like "are you interested in a loan?", you can set a shorter timeout.
   * - If you have questions where the customer may pause to look up information like "what's my account number?", you can set a longer timeout.
   * - If you want to wait longer while customer is enumerating a list of numbers, you can set a longer timeout.
   *
   * These rules have the highest precedence and will override both `smartEndpointingPlan` and `transcriptionEndpointingPlan` when a rule is matched.
   *
   * The rules are evaluated in order and the first one that matches will be used.
   *
   * Order of precedence for endpointing:
   * 1. customEndpointingRules (if any match)
   * 2. smartEndpointingPlan (if set)
   * 3. transcriptionEndpointingPlan
   *
   * @default []
   */
  customEndpointingRules?: (
    | AssistantCustomEndpointingRule
    | CustomerCustomEndpointingRule
    | BothCustomEndpointingRule
  )[];
  /**
   * This determines how a customer speech is considered done (endpointing) using the transcription of customer's speech.
   *
   * Once an endpoint is triggered, the request is sent to `assistant.model`.
   *
   * Note: This plan is only used if `smartEndpointingPlan` is not set. If both are provided, `smartEndpointingPlan` takes precedence.
   * This plan will also be overridden by any matching `customEndpointingRules`.
   */
  transcriptionEndpointingPlan?: TranscriptionEndpointingPlan;
}

export interface StopSpeakingPlan {
  /**
   * This is the number of words that the customer has to say before the assistant will stop talking.
   *
   * Words like "stop", "actually", "no", etc. will always interrupt immediately regardless of this value.
   *
   * Words like "okay", "yeah", "right" will never interrupt.
   *
   * When set to 0, `voiceSeconds` is used in addition to the transcriptions to determine the customer has started speaking.
   *
   * Defaults to 0.
   *
   * @default 0
   * @min 0
   * @max 10
   * @example 0
   */
  numWords?: number;
  /**
   * This is the seconds customer has to speak before the assistant stops talking. This uses the VAD (Voice Activity Detection) spike to determine if the customer has started speaking.
   *
   * Considerations:
   * - A lower value might be more responsive but could potentially pick up non-speech sounds.
   * - A higher value reduces false positives but might slightly delay the detection of speech onset.
   *
   * This is only used if `numWords` is set to 0.
   *
   * Defaults to 0.2
   *
   * @default 0.2
   * @min 0
   * @max 0.5
   * @example 0.2
   */
  voiceSeconds?: number;
  /**
   * This is the seconds to wait before the assistant will start talking again after being interrupted.
   *
   * Defaults to 1.
   *
   * @default 1
   * @min 0
   * @max 10
   * @example 1
   */
  backoffSeconds?: number;
  /**
   * These are the phrases that will never interrupt the assistant, even if numWords threshold is met.
   * These are typically acknowledgement or backchanneling phrases.
   * @default ["i understand","i see","i got it","i hear you","im listening","im with you","right","okay","ok","sure","alright","got it","understood","yeah","yes","uh-huh","mm-hmm","gotcha","mhmm","ah","yeah okay","yeah sure"]
   * @example ["i understand","i see","i got it","i hear you","im listening","im with you","right","okay","ok","sure","alright","got it","understood","yeah","yes","uh-huh","mm-hmm","gotcha","mhmm","ah","yeah okay","yeah sure"]
   */
  acknowledgementPhrases?: string[];
  /**
   * These are the phrases that will always interrupt the assistant immediately, regardless of numWords.
   * These are typically phrases indicating disagreement or desire to stop.
   * @default ["stop","shut","up","enough","quiet","silence","but","dont","not","no","hold","wait","cut","pause","nope","nah","nevermind","never","bad","actually"]
   * @example ["stop","shut","up","enough","quiet","silence","but","dont","not","no","hold","wait","cut","pause","nope","nah","nevermind","never","bad","actually"]
   */
  interruptionPhrases?: string[];
}

export interface MonitorPlan {
  /**
   * This determines whether the assistant's calls allow live listening. Defaults to true.
   *
   * Fetch `call.monitor.listenUrl` to get the live listening URL.
   *
   * @default true
   * @example false
   */
  listenEnabled?: boolean;
  /**
   * This determines whether the assistant's calls allow live control. Defaults to true.
   *
   * Fetch `call.monitor.controlUrl` to get the live control URL.
   *
   * To use, send any control message via a POST request to `call.monitor.controlUrl`. Here are the types of controls supported: https://docs.vapi.ai/api-reference/messages/client-inbound-message
   *
   * @default true
   * @example false
   */
  controlEnabled?: boolean;
}

export interface AssistantHookFilter {
  /**
   * This is the type of filter - currently only "oneOf" is supported
   * @maxLength 1000
   */
  type: 'oneOf';
  /**
   * This is the key to filter on (e.g. "call.endedReason")
   * @maxLength 1000
   */
  key: string;
  /** This is the array of possible values to match against */
  oneOf: string[];
}

export type AssistantHookActionBase = object;

export interface AssistantHooks {
  /**
   * This is the event that triggers this hook
   * @maxLength 1000
   */
  on: 'call.ending';
  /** This is the set of filters that must match for the hook to trigger */
  filters?: AssistantHookFilter[];
  /** This is the set of actions to perform when the hook triggers */
  do: AssistantHookActionBase[];
}

export interface KeypadInputPlan {
  /**
   * This keeps track of whether the user has enabled keypad input.
   * By default, it is off.
   *
   * @default false
   */
  enabled?: boolean;
  /**
   * This is the time in seconds to wait before processing the input.
   * If the input is not received within this time, the input will be ignored.
   * If set to "off", the input will be processed when the user enters a delimiter or immediately if no delimiter is used.
   *
   * @default 2
   * @min 0
   * @max 10
   */
  timeoutSeconds?: number;
  /**
   * This is the delimiter(s) that will be used to process the input.
   * Can be '#', '*', or an empty array.
   */
  delimiters?: '#' | '*' | '';
}

export interface CreateAssistantDTO {
  /** These are the options for the assistant's transcriber. */
  transcriber?:
    | AssemblyAITranscriber
    | AzureSpeechTranscriber
    | CustomTranscriber
    | DeepgramTranscriber
    | ElevenLabsTranscriber
    | GladiaTranscriber
    | SpeechmaticsTranscriber
    | TalkscriberTranscriber
    | GoogleTranscriber
    | OpenAITranscriber;
  /** These are the options for the assistant's LLM. */
  model?:
    | AnyscaleModel
    | AnthropicModel
    | CerebrasModel
    | CustomLLMModel
    | DeepInfraModel
    | DeepSeekModel
    | GoogleModel
    | GroqModel
    | InflectionAIModel
    | OpenAIModel
    | OpenRouterModel
    | PerplexityAIModel
    | TogetherAIModel
    | VapiModel
    | XaiModel;
  /**
   * These are the options for the assistant's voice.
   * @default {"provider":"playht","voiceId":"jennifer"}
   */
  voice?:
    | AzureVoice
    | CartesiaVoice
    | CustomVoice
    | DeepgramVoice
    | ElevenLabsVoice
    | HumeVoice
    | LMNTVoice
    | NeuphonicVoice
    | OpenAIVoice
    | PlayHTVoice
    | RimeAIVoice
    | SmallestAIVoice
    | TavusVoice
    | VapiVoice;
  /**
   * This is the first message that the assistant will say. This can also be a URL to a containerized audio file (mp3, wav, etc.).
   *
   * If unspecified, assistant will wait for user to speak and use the model to respond once they speak.
   * @example "Hello! How can I help you today?"
   */
  firstMessage?: string;
  /** @default false */
  firstMessageInterruptionsEnabled?: boolean;
  /**
   * This is the mode for the first message. Default is 'assistant-speaks-first'.
   *
   * Use:
   * - 'assistant-speaks-first' to have the assistant speak first.
   * - 'assistant-waits-for-user' to have the assistant wait for the user to speak first.
   * - 'assistant-speaks-first-with-model-generated-message' to have the assistant speak first with a message generated by the model based on the conversation state. (`assistant.model.messages` at call start, `call.messages` at squad transfer points).
   *
   * @default 'assistant-speaks-first'
   * @example "assistant-speaks-first"
   */
  firstMessageMode?:
    | 'assistant-speaks-first'
    | 'assistant-speaks-first-with-model-generated-message'
    | 'assistant-waits-for-user';
  /**
   * These are the settings to configure or disable voicemail detection. Alternatively, voicemail detection can be configured using the model.tools=[VoicemailTool].
   * This uses Twilio's built-in detection while the VoicemailTool relies on the model to detect if a voicemail was reached.
   * You can use neither of them, one of them, or both of them. By default, Twilio built-in detection is enabled while VoicemailTool is not.
   */
  voicemailDetection?:
    | GoogleVoicemailDetectionPlan
    | OpenAIVoicemailDetectionPlan
    | TwilioVoicemailDetectionPlan;
  /**
   * These are the messages that will be sent to your Client SDKs. Default is conversation-update,function-call,hang,model-output,speech-update,status-update,transfer-update,transcript,tool-calls,user-interrupted,voice-input. You can check the shape of the messages in ClientMessage schema.
   * @example ["conversation-update","function-call","hang","model-output","speech-update","status-update","transfer-update","transcript","tool-calls","user-interrupted","voice-input"]
   */
  clientMessages?:
    | 'conversation-update'
    | 'function-call'
    | 'function-call-result'
    | 'hang'
    | 'language-changed'
    | 'metadata'
    | 'model-output'
    | 'speech-update'
    | 'status-update'
    | 'transcript'
    | 'tool-calls'
    | 'tool-calls-result'
    | 'transfer-update'
    | 'user-interrupted'
    | 'voice-input';
  /**
   * These are the messages that will be sent to your Server URL. Default is conversation-update,end-of-call-report,function-call,hang,speech-update,status-update,tool-calls,transfer-destination-request,user-interrupted. You can check the shape of the messages in ServerMessage schema.
   * @example ["conversation-update","end-of-call-report","function-call","hang","speech-update","status-update","tool-calls","transfer-destination-request","user-interrupted"]
   */
  serverMessages?:
    | 'conversation-update'
    | 'end-of-call-report'
    | 'function-call'
    | 'hang'
    | 'language-changed'
    | 'language-change-detected'
    | 'model-output'
    | 'phone-call-control'
    | 'speech-update'
    | 'status-update'
    | 'transcript'
    | "transcript[transcriptType='final']"
    | 'tool-calls'
    | 'transfer-destination-request'
    | 'transfer-update'
    | 'user-interrupted'
    | 'voice-input';
  /**
   * How many seconds of silence to wait before ending the call. Defaults to 30.
   *
   * @default 30
   * @min 10
   * @max 3600
   * @example 30
   */
  silenceTimeoutSeconds?: number;
  /**
   * This is the maximum number of seconds that the call will last. When the call reaches this duration, it will be ended.
   *
   * @default 600 (10 minutes)
   * @min 10
   * @max 43200
   * @example 600
   */
  maxDurationSeconds?: number;
  /**
   * This is the background sound in the call. Default for phone calls is 'office' and default for web calls is 'off'.
   * You can also provide a custom sound by providing a URL to an audio file.
   * @maxLength 1000
   */
  backgroundSound?: 'off' | 'office' | string;
  /**
   * This enables filtering of noise and background speech while the user is talking.
   *
   * Default `false` while in beta.
   *
   * @default false
   * @example false
   */
  backgroundDenoisingEnabled?: boolean;
  /**
   * This determines whether the model's output is used in conversation history rather than the transcription of assistant's speech.
   *
   * Default `false` while in beta.
   *
   * @default false
   * @example false
   */
  modelOutputInMessagesEnabled?: boolean;
  /** These are the configurations to be passed to the transport providers of assistant's calls, like Twilio. You can store multiple configurations for different transport providers. For a call, only the configuration matching the call transport provider is used. */
  transportConfigurations?: TransportConfigurationTwilio[];
  /**
   * This is the plan for observability configuration of assistant's calls.
   * Currently supports Langfuse for tracing and monitoring.
   */
  observabilityPlan?: LangfuseObservabilityPlan;
  /** These are dynamic credentials that will be used for the assistant calls. By default, all the credentials are available for use in the call but you can supplement an additional credentials using this. Dynamic credentials override existing credentials. */
  credentials?: (
    | CreateAnthropicCredentialDTO
    | CreateAnyscaleCredentialDTO
    | CreateAssemblyAICredentialDTO
    | CreateAzureCredentialDTO
    | CreateAzureOpenAICredentialDTO
    | CreateByoSipTrunkCredentialDTO
    | CreateCartesiaCredentialDTO
    | CreateCerebrasCredentialDTO
    | CreateCloudflareCredentialDTO
    | CreateCustomLLMCredentialDTO
    | CreateDeepgramCredentialDTO
    | CreateDeepInfraCredentialDTO
    | CreateDeepSeekCredentialDTO
    | CreateElevenLabsCredentialDTO
    | CreateGcpCredentialDTO
    | CreateGladiaCredentialDTO
    | CreateGoHighLevelCredentialDTO
    | CreateGoogleCredentialDTO
    | CreateGroqCredentialDTO
    | CreateHumeCredentialDTO
    | CreateInflectionAICredentialDTO
    | CreateLangfuseCredentialDTO
    | CreateLmntCredentialDTO
    | CreateMakeCredentialDTO
    | CreateMistralCredentialDTO
    | CreateNeuphonicCredentialDTO
    | CreateOpenAICredentialDTO
    | CreateOpenRouterCredentialDTO
    | CreatePerplexityAICredentialDTO
    | CreatePlayHTCredentialDTO
    | CreateRimeAICredentialDTO
    | CreateRunpodCredentialDTO
    | CreateS3CredentialDTO
    | CreateSmallestAICredentialDTO
    | CreateSpeechmaticsCredentialDTO
    | CreateSupabaseCredentialDTO
    | CreateTavusCredentialDTO
    | CreateTogetherAICredentialDTO
    | CreateTrieveCredentialDTO
    | CreateTwilioCredentialDTO
    | CreateVonageCredentialDTO
    | CreateWebhookCredentialDTO
    | CreateXAiCredentialDTO
    | CreateGoogleCalendarOAuth2ClientCredentialDTO
    | CreateGoogleCalendarOAuth2AuthorizationCredentialDTO
  )[];
  /**
   * This is the name of the assistant.
   *
   * This is required when you want to transfer between assistants in a call.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the message that the assistant will say if the call is forwarded to voicemail.
   *
   * If unspecified, it will hang up.
   * @maxLength 1000
   */
  voicemailMessage?: string;
  /**
   * This is the message that the assistant will say if it ends the call.
   *
   * If unspecified, it will hang up without saying anything.
   * @maxLength 1000
   */
  endCallMessage?: string;
  /** This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up. Case insensitive. */
  endCallPhrases?: string[];
  compliancePlan?: CompliancePlan;
  /** This is for metadata you want to store on the assistant. */
  metadata?: object;
  /** This is the plan for analysis of assistant's calls. Stored in `call.analysis`. */
  analysisPlan?: AnalysisPlan;
  /**
   * This is the plan for artifacts generated during assistant's calls. Stored in `call.artifact`.
   *
   * Note: `recordingEnabled` is currently at the root level. It will be moved to `artifactPlan` in the future, but will remain backwards compatible.
   */
  artifactPlan?: ArtifactPlan;
  /**
   * This is the plan for static predefined messages that can be spoken by the assistant during the call, like `idleMessages`.
   *
   * Note: `firstMessage`, `voicemailMessage`, and `endCallMessage` are currently at the root level. They will be moved to `messagePlan` in the future, but will remain backwards compatible.
   */
  messagePlan?: MessagePlan;
  /**
   * This is the plan for when the assistant should start talking.
   *
   * You should configure this if you're running into these issues:
   * - The assistant is too slow to start talking after the customer is done speaking.
   * - The assistant is too fast to start talking after the customer is done speaking.
   * - The assistant is so fast that it's actually interrupting the customer.
   */
  startSpeakingPlan?: StartSpeakingPlan;
  /**
   * This is the plan for when assistant should stop talking on customer interruption.
   *
   * You should configure this if you're running into these issues:
   * - The assistant is too slow to recognize customer's interruption.
   * - The assistant is too fast to recognize customer's interruption.
   * - The assistant is getting interrupted by phrases that are just acknowledgments.
   * - The assistant is getting interrupted by background noises.
   * - The assistant is not properly stopping -- it starts talking right after getting interrupted.
   */
  stopSpeakingPlan?: StopSpeakingPlan;
  /**
   * This is the plan for real-time monitoring of the assistant's calls.
   *
   * Usage:
   * - To enable live listening of the assistant's calls, set `monitorPlan.listenEnabled` to `true`.
   * - To enable live control of the assistant's calls, set `monitorPlan.controlEnabled` to `true`.
   *
   * Note, `serverMessages`, `clientMessages`, `serverUrl` and `serverUrlSecret` are currently at the root level but will be moved to `monitorPlan` in the future. Will remain backwards compatible
   */
  monitorPlan?: MonitorPlan;
  /** These are the credentials that will be used for the assistant calls. By default, all the credentials are available for use in the call but you can provide a subset using this. */
  credentialIds?: string[];
  /**
   * This is where Vapi will send webhooks. You can find all webhooks available along with their shape in ServerMessage schema.
   *
   * The order of precedence is:
   *
   * 1. assistant.server.url
   * 2. phoneNumber.serverUrl
   * 3. org.serverUrl
   */
  server?: Server;
  /** This is a set of actions that will be performed on certain events. */
  hooks?: AssistantHooks[];
  keypadInputPlan?: KeypadInputPlan;
}

export interface AssistantOverrides {
  /** These are the options for the assistant's transcriber. */
  transcriber?:
    | AssemblyAITranscriber
    | AzureSpeechTranscriber
    | CustomTranscriber
    | DeepgramTranscriber
    | ElevenLabsTranscriber
    | GladiaTranscriber
    | SpeechmaticsTranscriber
    | TalkscriberTranscriber
    | GoogleTranscriber
    | OpenAITranscriber;
  /** These are the options for the assistant's LLM. */
  model?:
    | AnyscaleModel
    | AnthropicModel
    | CerebrasModel
    | CustomLLMModel
    | DeepInfraModel
    | DeepSeekModel
    | GoogleModel
    | GroqModel
    | InflectionAIModel
    | OpenAIModel
    | OpenRouterModel
    | PerplexityAIModel
    | TogetherAIModel
    | VapiModel
    | XaiModel;
  /**
   * These are the options for the assistant's voice.
   * @default {"provider":"playht","voiceId":"jennifer"}
   */
  voice?:
    | AzureVoice
    | CartesiaVoice
    | CustomVoice
    | DeepgramVoice
    | ElevenLabsVoice
    | HumeVoice
    | LMNTVoice
    | NeuphonicVoice
    | OpenAIVoice
    | PlayHTVoice
    | RimeAIVoice
    | SmallestAIVoice
    | TavusVoice
    | VapiVoice;
  /**
   * This is the first message that the assistant will say. This can also be a URL to a containerized audio file (mp3, wav, etc.).
   *
   * If unspecified, assistant will wait for user to speak and use the model to respond once they speak.
   * @example "Hello! How can I help you today?"
   */
  firstMessage?: string;
  /** @default false */
  firstMessageInterruptionsEnabled?: boolean;
  /**
   * This is the mode for the first message. Default is 'assistant-speaks-first'.
   *
   * Use:
   * - 'assistant-speaks-first' to have the assistant speak first.
   * - 'assistant-waits-for-user' to have the assistant wait for the user to speak first.
   * - 'assistant-speaks-first-with-model-generated-message' to have the assistant speak first with a message generated by the model based on the conversation state. (`assistant.model.messages` at call start, `call.messages` at squad transfer points).
   *
   * @default 'assistant-speaks-first'
   * @example "assistant-speaks-first"
   */
  firstMessageMode?:
    | 'assistant-speaks-first'
    | 'assistant-speaks-first-with-model-generated-message'
    | 'assistant-waits-for-user';
  /**
   * These are the settings to configure or disable voicemail detection. Alternatively, voicemail detection can be configured using the model.tools=[VoicemailTool].
   * This uses Twilio's built-in detection while the VoicemailTool relies on the model to detect if a voicemail was reached.
   * You can use neither of them, one of them, or both of them. By default, Twilio built-in detection is enabled while VoicemailTool is not.
   */
  voicemailDetection?:
    | GoogleVoicemailDetectionPlan
    | OpenAIVoicemailDetectionPlan
    | TwilioVoicemailDetectionPlan;
  /**
   * These are the messages that will be sent to your Client SDKs. Default is conversation-update,function-call,hang,model-output,speech-update,status-update,transfer-update,transcript,tool-calls,user-interrupted,voice-input. You can check the shape of the messages in ClientMessage schema.
   * @example ["conversation-update","function-call","hang","model-output","speech-update","status-update","transfer-update","transcript","tool-calls","user-interrupted","voice-input"]
   */
  clientMessages?:
    | 'conversation-update'
    | 'function-call'
    | 'function-call-result'
    | 'hang'
    | 'language-changed'
    | 'metadata'
    | 'model-output'
    | 'speech-update'
    | 'status-update'
    | 'transcript'
    | 'tool-calls'
    | 'tool-calls-result'
    | 'transfer-update'
    | 'user-interrupted'
    | 'voice-input';
  /**
   * These are the messages that will be sent to your Server URL. Default is conversation-update,end-of-call-report,function-call,hang,speech-update,status-update,tool-calls,transfer-destination-request,user-interrupted. You can check the shape of the messages in ServerMessage schema.
   * @example ["conversation-update","end-of-call-report","function-call","hang","speech-update","status-update","tool-calls","transfer-destination-request","user-interrupted"]
   */
  serverMessages?:
    | 'conversation-update'
    | 'end-of-call-report'
    | 'function-call'
    | 'hang'
    | 'language-changed'
    | 'language-change-detected'
    | 'model-output'
    | 'phone-call-control'
    | 'speech-update'
    | 'status-update'
    | 'transcript'
    | "transcript[transcriptType='final']"
    | 'tool-calls'
    | 'transfer-destination-request'
    | 'transfer-update'
    | 'user-interrupted'
    | 'voice-input';
  /**
   * How many seconds of silence to wait before ending the call. Defaults to 30.
   *
   * @default 30
   * @min 10
   * @max 3600
   * @example 30
   */
  silenceTimeoutSeconds?: number;
  /**
   * This is the maximum number of seconds that the call will last. When the call reaches this duration, it will be ended.
   *
   * @default 600 (10 minutes)
   * @min 10
   * @max 43200
   * @example 600
   */
  maxDurationSeconds?: number;
  /**
   * This is the background sound in the call. Default for phone calls is 'office' and default for web calls is 'off'.
   * You can also provide a custom sound by providing a URL to an audio file.
   * @maxLength 1000
   */
  backgroundSound?: 'off' | 'office' | string;
  /**
   * This enables filtering of noise and background speech while the user is talking.
   *
   * Default `false` while in beta.
   *
   * @default false
   * @example false
   */
  backgroundDenoisingEnabled?: boolean;
  /**
   * This determines whether the model's output is used in conversation history rather than the transcription of assistant's speech.
   *
   * Default `false` while in beta.
   *
   * @default false
   * @example false
   */
  modelOutputInMessagesEnabled?: boolean;
  /** These are the configurations to be passed to the transport providers of assistant's calls, like Twilio. You can store multiple configurations for different transport providers. For a call, only the configuration matching the call transport provider is used. */
  transportConfigurations?: TransportConfigurationTwilio[];
  /**
   * This is the plan for observability configuration of assistant's calls.
   * Currently supports Langfuse for tracing and monitoring.
   */
  observabilityPlan?: LangfuseObservabilityPlan;
  /** These are dynamic credentials that will be used for the assistant calls. By default, all the credentials are available for use in the call but you can supplement an additional credentials using this. Dynamic credentials override existing credentials. */
  credentials?: (
    | CreateAnthropicCredentialDTO
    | CreateAnyscaleCredentialDTO
    | CreateAssemblyAICredentialDTO
    | CreateAzureCredentialDTO
    | CreateAzureOpenAICredentialDTO
    | CreateByoSipTrunkCredentialDTO
    | CreateCartesiaCredentialDTO
    | CreateCerebrasCredentialDTO
    | CreateCloudflareCredentialDTO
    | CreateCustomLLMCredentialDTO
    | CreateDeepgramCredentialDTO
    | CreateDeepInfraCredentialDTO
    | CreateDeepSeekCredentialDTO
    | CreateElevenLabsCredentialDTO
    | CreateGcpCredentialDTO
    | CreateGladiaCredentialDTO
    | CreateGoHighLevelCredentialDTO
    | CreateGoogleCredentialDTO
    | CreateGroqCredentialDTO
    | CreateHumeCredentialDTO
    | CreateInflectionAICredentialDTO
    | CreateLangfuseCredentialDTO
    | CreateLmntCredentialDTO
    | CreateMakeCredentialDTO
    | CreateMistralCredentialDTO
    | CreateNeuphonicCredentialDTO
    | CreateOpenAICredentialDTO
    | CreateOpenRouterCredentialDTO
    | CreatePerplexityAICredentialDTO
    | CreatePlayHTCredentialDTO
    | CreateRimeAICredentialDTO
    | CreateRunpodCredentialDTO
    | CreateS3CredentialDTO
    | CreateSmallestAICredentialDTO
    | CreateSpeechmaticsCredentialDTO
    | CreateSupabaseCredentialDTO
    | CreateTavusCredentialDTO
    | CreateTogetherAICredentialDTO
    | CreateTrieveCredentialDTO
    | CreateTwilioCredentialDTO
    | CreateVonageCredentialDTO
    | CreateWebhookCredentialDTO
    | CreateXAiCredentialDTO
    | CreateGoogleCalendarOAuth2ClientCredentialDTO
    | CreateGoogleCalendarOAuth2AuthorizationCredentialDTO
  )[];
  /**
   * These are values that will be used to replace the template variables in the assistant messages and other text-based fields.
   * This uses LiquidJS syntax. https://liquidjs.com/tutorials/intro-to-liquid.html
   *
   * So for example, `{{ name }}` will be replaced with the value of `name` in `variableValues`.
   * `{{"now" | date: "%b %d, %Y, %I:%M %p", "America/New_York"}}` will be replaced with the current date and time in New York.
   *  Some VAPI reserved defaults:
   *  - *customer* - the customer object
   */
  variableValues?: object;
  /**
   * This is the name of the assistant.
   *
   * This is required when you want to transfer between assistants in a call.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the message that the assistant will say if the call is forwarded to voicemail.
   *
   * If unspecified, it will hang up.
   * @maxLength 1000
   */
  voicemailMessage?: string;
  /**
   * This is the message that the assistant will say if it ends the call.
   *
   * If unspecified, it will hang up without saying anything.
   * @maxLength 1000
   */
  endCallMessage?: string;
  /** This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up. Case insensitive. */
  endCallPhrases?: string[];
  compliancePlan?: CompliancePlan;
  /** This is for metadata you want to store on the assistant. */
  metadata?: object;
  /** This is the plan for analysis of assistant's calls. Stored in `call.analysis`. */
  analysisPlan?: AnalysisPlan;
  /**
   * This is the plan for artifacts generated during assistant's calls. Stored in `call.artifact`.
   *
   * Note: `recordingEnabled` is currently at the root level. It will be moved to `artifactPlan` in the future, but will remain backwards compatible.
   */
  artifactPlan?: ArtifactPlan;
  /**
   * This is the plan for static predefined messages that can be spoken by the assistant during the call, like `idleMessages`.
   *
   * Note: `firstMessage`, `voicemailMessage`, and `endCallMessage` are currently at the root level. They will be moved to `messagePlan` in the future, but will remain backwards compatible.
   */
  messagePlan?: MessagePlan;
  /**
   * This is the plan for when the assistant should start talking.
   *
   * You should configure this if you're running into these issues:
   * - The assistant is too slow to start talking after the customer is done speaking.
   * - The assistant is too fast to start talking after the customer is done speaking.
   * - The assistant is so fast that it's actually interrupting the customer.
   */
  startSpeakingPlan?: StartSpeakingPlan;
  /**
   * This is the plan for when assistant should stop talking on customer interruption.
   *
   * You should configure this if you're running into these issues:
   * - The assistant is too slow to recognize customer's interruption.
   * - The assistant is too fast to recognize customer's interruption.
   * - The assistant is getting interrupted by phrases that are just acknowledgments.
   * - The assistant is getting interrupted by background noises.
   * - The assistant is not properly stopping -- it starts talking right after getting interrupted.
   */
  stopSpeakingPlan?: StopSpeakingPlan;
  /**
   * This is the plan for real-time monitoring of the assistant's calls.
   *
   * Usage:
   * - To enable live listening of the assistant's calls, set `monitorPlan.listenEnabled` to `true`.
   * - To enable live control of the assistant's calls, set `monitorPlan.controlEnabled` to `true`.
   *
   * Note, `serverMessages`, `clientMessages`, `serverUrl` and `serverUrlSecret` are currently at the root level but will be moved to `monitorPlan` in the future. Will remain backwards compatible
   */
  monitorPlan?: MonitorPlan;
  /** These are the credentials that will be used for the assistant calls. By default, all the credentials are available for use in the call but you can provide a subset using this. */
  credentialIds?: string[];
  /**
   * This is where Vapi will send webhooks. You can find all webhooks available along with their shape in ServerMessage schema.
   *
   * The order of precedence is:
   *
   * 1. assistant.server.url
   * 2. phoneNumber.serverUrl
   * 3. org.serverUrl
   */
  server?: Server;
  /** This is a set of actions that will be performed on certain events. */
  hooks?: AssistantHooks[];
  keypadInputPlan?: KeypadInputPlan;
}

export interface SquadMemberDTO {
  /** This is the assistant that will be used for the call. To use a transient assistant, use `assistant` instead. */
  assistantId?: string | null;
  /** This is the assistant that will be used for the call. To use an existing assistant, use `assistantId` instead. */
  assistant?: CreateAssistantDTO;
  /** This can be used to override the assistant's settings and provide values for it's template variables. */
  assistantOverrides?: AssistantOverrides;
  /**
   * These are the others assistants that this assistant can transfer to.
   *
   * If the assistant already has transfer call tool, these destinations are just appended to existing ones.
   */
  assistantDestinations?: TransferDestinationAssistant[];
}

export interface CreateSquadDTO {
  /** This is the name of the squad. */
  name?: string;
  /**
   * This is the list of assistants that make up the squad.
   *
   * The call will start with the first assistant in the list.
   */
  members: SquadMemberDTO[];
  /**
   * This can be used to override all the assistants' settings and provide values for their template variables.
   *
   * Both `membersOverrides` and `members[n].assistantOverrides` can be used together. First, `members[n].assistantOverrides` is applied. Then, `membersOverrides` is applied as a global override.
   */
  membersOverrides?: AssistantOverrides;
}

export interface ImportTwilioPhoneNumberDTO {
  /**
   * This is the fallback destination an inbound call will be transferred to if:
   * 1. `assistantId` is not set
   * 2. `squadId` is not set
   * 3. and, `assistant-request` message to the `serverUrl` fails
   *
   * If this is not set and above conditions are met, the inbound call is hung up with an error message.
   */
  fallbackDestination?: TransferDestinationNumber | TransferDestinationSip;
  /**
   * These are the digits of the phone number you own on your Twilio.
   * @deprecated
   */
  twilioPhoneNumber: string;
  /** This is your Twilio Account SID that will be used to handle this phone number. */
  twilioAccountSid: string;
  /** This is the Twilio Auth Token that will be used to handle this phone number. */
  twilioAuthToken: string;
  /**
   * This is the name of the phone number. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the assistant that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  assistantId?: string;
  /**
   * This is the squad that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  squadId?: string;
  /**
   * This is where Vapi will send webhooks. You can find all webhooks available along with their shape in ServerMessage schema.
   *
   * The order of precedence is:
   *
   * 1. assistant.server
   * 2. phoneNumber.server
   * 3. org.server
   */
  server?: Server;
}

export interface CreateCustomerDTO {
  /**
   * This is the flag to toggle the E164 check for the `number` field. This is an advanced property which should be used if you know your use case requires it.
   *
   * Use cases:
   * - `false`: To allow non-E164 numbers like `+001234567890`, `1234`, or `abc`. This is useful for dialing out to non-E164 numbers on your SIP trunks.
   * - `true` (default): To allow only E164 numbers like `+14155551234`. This is standard for PSTN calls.
   *
   * If `false`, the `number` is still required to only contain alphanumeric characters (regex: `/^\+?[a-zA-Z0-9]+$/`).
   *
   * @default true (E164 check is enabled)
   * @default true
   */
  numberE164CheckEnabled?: boolean;
  /**
   * This is the extension that will be dialed after the call is answered.
   * @maxLength 10
   * @example null
   */
  extension?: string;
  /**
   * This is the number of the customer.
   * @minLength 3
   * @maxLength 40
   */
  number?: string;
  /** This is the SIP URI of the customer. */
  sipUri?: string;
  /**
   * This is the name of the customer. This is just for your own reference.
   *
   * For SIP inbound calls, this is extracted from the `From` SIP header with format `"Display Name" <sip:username@domain>`.
   * @maxLength 40
   */
  name?: string;
}

export interface CreateCallDTO {
  /**
   * This is the name of the call. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /** This is the assistant that will be used for the call. To use a transient assistant, use `assistant` instead. */
  assistantId?: string;
  /** This is the assistant that will be used for the call. To use an existing assistant, use `assistantId` instead. */
  assistant?: CreateAssistantDTO;
  /** These are the overrides for the `assistant` or `assistantId`'s settings and template variables. */
  assistantOverrides?: AssistantOverrides;
  /** This is the squad that will be used for the call. To use a transient squad, use `squad` instead. */
  squadId?: string;
  /** This is a squad that will be used for the call. To use an existing squad, use `squadId` instead. */
  squad?: CreateSquadDTO;
  /**
   * This is the phone number that will be used for the call. To use a transient number, use `phoneNumber` instead.
   *
   * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` type.
   */
  phoneNumberId?: string;
  /**
   * This is the phone number that will be used for the call. To use an existing number, use `phoneNumberId` instead.
   *
   * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` type.
   */
  phoneNumber?: ImportTwilioPhoneNumberDTO;
  /**
   * This is the customer that will be called. To call a transient customer , use `customer` instead.
   *
   * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` type.
   */
  customerId?: string;
  /**
   * This is the customer that will be called. To call an existing customer, use `customerId` instead.
   *
   * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` type.
   */
  customer?: CreateCustomerDTO;
}

export interface AnalysisCostBreakdown {
  /** This is the cost to summarize the call. */
  summary?: number;
  /** This is the number of prompt tokens used to summarize the call. */
  summaryPromptTokens?: number;
  /** This is the number of completion tokens used to summarize the call. */
  summaryCompletionTokens?: number;
  /** This is the cost to extract structured data from the call. */
  structuredData?: number;
  /** This is the number of prompt tokens used to extract structured data from the call. */
  structuredDataPromptTokens?: number;
  /** This is the number of completion tokens used to extract structured data from the call. */
  structuredDataCompletionTokens?: number;
  /** This is the cost to evaluate if the call was successful. */
  successEvaluation?: number;
  /** This is the number of prompt tokens used to evaluate if the call was successful. */
  successEvaluationPromptTokens?: number;
  /** This is the number of completion tokens used to evaluate if the call was successful. */
  successEvaluationCompletionTokens?: number;
}

export interface CostBreakdown {
  /** This is the cost of the transport provider, like Twilio or Vonage. */
  transport?: number;
  /** This is the cost of the speech-to-text service. */
  stt?: number;
  /** This is the cost of the language model. */
  llm?: number;
  /** This is the cost of the text-to-speech service. */
  tts?: number;
  /** This is the cost of Vapi. */
  vapi?: number;
  /** This is the total cost of the call. */
  total?: number;
  /** This is the LLM prompt tokens used for the call. */
  llmPromptTokens?: number;
  /** This is the LLM completion tokens used for the call. */
  llmCompletionTokens?: number;
  /** This is the TTS characters used for the call. */
  ttsCharacters?: number;
  /** This is the cost of the analysis. */
  analysisCostBreakdown?: AnalysisCostBreakdown;
}

export interface Analysis {
  /** This is the summary of the call. Customize by setting `assistant.analysisPlan.summaryPrompt`. */
  summary?: string;
  /** This is the structured data extracted from the call. Customize by setting `assistant.analysisPlan.structuredDataPrompt` and/or `assistant.analysisPlan.structuredDataSchema`. */
  structuredData?: object;
  /** This is the structured data catalog of the call. Customize by setting `assistant.analysisPlan.structuredDataMultiPlan`. */
  structuredDataMulti?: object[];
  /** This is the evaluation of the call. Customize by setting `assistant.analysisPlan.successEvaluationPrompt` and/or `assistant.analysisPlan.successEvaluationRubric`. */
  successEvaluation?: string;
}

export interface Monitor {
  /** This is the URL where the assistant's calls can be listened to in real-time. To enable, set `assistant.monitorPlan.listenEnabled` to `true`. */
  listenUrl?: string;
  /** This is the URL where the assistant's calls can be controlled in real-time. To enable, set `assistant.monitorPlan.controlEnabled` to `true`. */
  controlUrl?: string;
}

export interface Artifact {
  /** These are the messages that were spoken during the call. */
  messages?: (UserMessage | SystemMessage | BotMessage | ToolCallMessage | ToolCallResultMessage)[];
  /** These are the messages that were spoken during the call, formatted for OpenAI. */
  messagesOpenAIFormatted?: OpenAIMessage[];
  /** This is the recording url for the call. To enable, set `assistant.artifactPlan.recordingEnabled`. */
  recordingUrl?: string;
  /** This is the stereo recording url for the call. To enable, set `assistant.artifactPlan.recordingEnabled`. */
  stereoRecordingUrl?: string;
  /** This is video recording url for the call. To enable, set `assistant.artifactPlan.videoRecordingEnabled`. */
  videoRecordingUrl?: string;
  /** This is video recording start delay in ms. To enable, set `assistant.artifactPlan.videoRecordingEnabled`. This can be used to align the playback of the recording with artifact.messages timestamps. */
  videoRecordingStartDelaySeconds?: number;
  /** This is the transcript of the call. This is derived from `artifact.messages` but provided for convenience. */
  transcript?: string;
  /** This is the packet capture url for the call. This is only available for `phone` type calls where phone number's provider is `vapi` or `byo-phone-number`. */
  pcapUrl?: string;
}

export interface Transport {
  /** This is the provider used for the call. */
  provider?: 'twilio' | 'vonage' | 'vapi' | 'daily' | 'telnyx';
  /**
   * This is determines whether the assistant will have video enabled.
   *
   * Only relevant for `webCall` type.
   */
  assistantVideoEnabled?: boolean;
}

export interface Call {
  /** This is the type of call. */
  type?: 'inboundPhoneCall' | 'outboundPhoneCall' | 'webCall';
  /** These are the costs of individual components of the call in USD. */
  costs?: (
    | TransportCost
    | TranscriberCost
    | ModelCost
    | VoiceCost
    | VapiCost
    | VoicemailDetectionCost
    | AnalysisCost
  )[];
  messages?: (UserMessage | SystemMessage | BotMessage | ToolCallMessage | ToolCallResultMessage)[];
  /**
   * This is the provider of the call.
   *
   * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` type.
   */
  phoneCallProvider?: 'twilio' | 'vonage' | 'vapi' | 'telnyx';
  /**
   * This is the transport of the phone call.
   *
   * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` type.
   */
  phoneCallTransport?: 'sip' | 'pstn';
  /** This is the status of the call. */
  status?: 'scheduled' | 'queued' | 'ringing' | 'in-progress' | 'forwarding' | 'ended';
  /** This is the explanation for how the call ended. */
  endedReason?:
    | 'assistant-not-valid'
    | 'assistant-not-provided'
    | 'call-start-error-neither-assistant-nor-server-set'
    | 'assistant-request-failed'
    | 'assistant-request-returned-error'
    | 'assistant-request-returned-unspeakable-error'
    | 'assistant-request-returned-invalid-assistant'
    | 'assistant-request-returned-no-assistant'
    | 'assistant-request-returned-forwarding-phone-number'
    | 'assistant-ended-call'
    | 'assistant-said-end-call-phrase'
    | 'assistant-ended-call-with-hangup-task'
    | 'assistant-forwarded-call'
    | 'assistant-join-timed-out'
    | 'customer-busy'
    | 'customer-ended-call'
    | 'customer-did-not-answer'
    | 'customer-did-not-give-microphone-permission'
    | 'assistant-said-message-with-end-call-enabled'
    | 'exceeded-max-duration'
    | 'manually-canceled'
    | 'phone-call-provider-closed-websocket'
    | 'db-error'
    | 'assistant-not-found'
    | 'license-check-failed'
    | 'pipeline-error-openai-voice-failed'
    | 'pipeline-error-cartesia-voice-failed'
    | 'pipeline-error-deepgram-voice-failed'
    | 'pipeline-error-eleven-labs-voice-failed'
    | 'pipeline-error-playht-voice-failed'
    | 'pipeline-error-lmnt-voice-failed'
    | 'pipeline-error-azure-voice-failed'
    | 'pipeline-error-rime-ai-voice-failed'
    | 'pipeline-error-smallest-ai-voice-failed'
    | 'pipeline-error-neuphonic-voice-failed'
    | 'pipeline-error-hume-voice-failed'
    | 'pipeline-error-sesame-voice-failed'
    | 'pipeline-error-deepgram-transcriber-failed'
    | 'pipeline-error-gladia-transcriber-failed'
    | 'pipeline-error-speechmatics-transcriber-failed'
    | 'pipeline-error-assembly-ai-transcriber-failed'
    | 'pipeline-error-talkscriber-transcriber-failed'
    | 'pipeline-error-azure-speech-transcriber-failed'
    | 'pipeline-error-vapi-llm-failed'
    | 'pipeline-error-vapi-400-bad-request-validation-failed'
    | 'pipeline-error-vapi-401-unauthorized'
    | 'pipeline-error-vapi-403-model-access-denied'
    | 'pipeline-error-vapi-429-exceeded-quota'
    | 'pipeline-error-vapi-500-server-error'
    | 'pipeline-no-available-model'
    | 'worker-shutdown'
    | 'unknown-error'
    | 'vonage-disconnected'
    | 'vonage-failed-to-connect-call'
    | 'vonage-completed'
    | 'phone-call-provider-bypass-enabled-but-no-call-received'
    | 'vapifault-phone-call-worker-setup-socket-error'
    | 'vapifault-phone-call-worker-worker-setup-socket-timeout'
    | 'vapifault-phone-call-worker-could-not-find-call'
    | 'vapifault-transport-never-connected'
    | 'vapifault-web-call-worker-setup-failed'
    | 'vapifault-transport-connected-but-call-not-active'
    | 'vapifault-call-started-but-connection-to-transport-missing'
    | 'pipeline-error-openai-llm-failed'
    | 'pipeline-error-azure-openai-llm-failed'
    | 'pipeline-error-groq-llm-failed'
    | 'pipeline-error-google-llm-failed'
    | 'pipeline-error-xai-llm-failed'
    | 'pipeline-error-mistral-llm-failed'
    | 'pipeline-error-inflection-ai-llm-failed'
    | 'pipeline-error-cerebras-llm-failed'
    | 'pipeline-error-deep-seek-llm-failed'
    | 'pipeline-error-openai-400-bad-request-validation-failed'
    | 'pipeline-error-openai-401-unauthorized'
    | 'pipeline-error-openai-403-model-access-denied'
    | 'pipeline-error-openai-429-exceeded-quota'
    | 'pipeline-error-openai-500-server-error'
    | 'pipeline-error-google-400-bad-request-validation-failed'
    | 'pipeline-error-google-401-unauthorized'
    | 'pipeline-error-google-403-model-access-denied'
    | 'pipeline-error-google-429-exceeded-quota'
    | 'pipeline-error-google-500-server-error'
    | 'pipeline-error-xai-400-bad-request-validation-failed'
    | 'pipeline-error-xai-401-unauthorized'
    | 'pipeline-error-xai-403-model-access-denied'
    | 'pipeline-error-xai-429-exceeded-quota'
    | 'pipeline-error-xai-500-server-error'
    | 'pipeline-error-mistral-400-bad-request-validation-failed'
    | 'pipeline-error-mistral-401-unauthorized'
    | 'pipeline-error-mistral-403-model-access-denied'
    | 'pipeline-error-mistral-429-exceeded-quota'
    | 'pipeline-error-mistral-500-server-error'
    | 'pipeline-error-inflection-ai-400-bad-request-validation-failed'
    | 'pipeline-error-inflection-ai-401-unauthorized'
    | 'pipeline-error-inflection-ai-403-model-access-denied'
    | 'pipeline-error-inflection-ai-429-exceeded-quota'
    | 'pipeline-error-inflection-ai-500-server-error'
    | 'pipeline-error-deep-seek-400-bad-request-validation-failed'
    | 'pipeline-error-deep-seek-401-unauthorized'
    | 'pipeline-error-deep-seek-403-model-access-denied'
    | 'pipeline-error-deep-seek-429-exceeded-quota'
    | 'pipeline-error-deep-seek-500-server-error'
    | 'pipeline-error-azure-openai-400-bad-request-validation-failed'
    | 'pipeline-error-azure-openai-401-unauthorized'
    | 'pipeline-error-azure-openai-403-model-access-denied'
    | 'pipeline-error-azure-openai-429-exceeded-quota'
    | 'pipeline-error-azure-openai-500-server-error'
    | 'pipeline-error-groq-400-bad-request-validation-failed'
    | 'pipeline-error-groq-401-unauthorized'
    | 'pipeline-error-groq-403-model-access-denied'
    | 'pipeline-error-groq-429-exceeded-quota'
    | 'pipeline-error-groq-500-server-error'
    | 'pipeline-error-cerebras-400-bad-request-validation-failed'
    | 'pipeline-error-cerebras-401-unauthorized'
    | 'pipeline-error-cerebras-403-model-access-denied'
    | 'pipeline-error-cerebras-429-exceeded-quota'
    | 'pipeline-error-cerebras-500-server-error'
    | 'pipeline-error-anthropic-400-bad-request-validation-failed'
    | 'pipeline-error-anthropic-401-unauthorized'
    | 'pipeline-error-anthropic-403-model-access-denied'
    | 'pipeline-error-anthropic-429-exceeded-quota'
    | 'pipeline-error-anthropic-500-server-error'
    | 'pipeline-error-anthropic-llm-failed'
    | 'pipeline-error-together-ai-400-bad-request-validation-failed'
    | 'pipeline-error-together-ai-401-unauthorized'
    | 'pipeline-error-together-ai-403-model-access-denied'
    | 'pipeline-error-together-ai-429-exceeded-quota'
    | 'pipeline-error-together-ai-500-server-error'
    | 'pipeline-error-together-ai-llm-failed'
    | 'pipeline-error-anyscale-400-bad-request-validation-failed'
    | 'pipeline-error-anyscale-401-unauthorized'
    | 'pipeline-error-anyscale-403-model-access-denied'
    | 'pipeline-error-anyscale-429-exceeded-quota'
    | 'pipeline-error-anyscale-500-server-error'
    | 'pipeline-error-anyscale-llm-failed'
    | 'pipeline-error-openrouter-400-bad-request-validation-failed'
    | 'pipeline-error-openrouter-401-unauthorized'
    | 'pipeline-error-openrouter-403-model-access-denied'
    | 'pipeline-error-openrouter-429-exceeded-quota'
    | 'pipeline-error-openrouter-500-server-error'
    | 'pipeline-error-openrouter-llm-failed'
    | 'pipeline-error-perplexity-ai-400-bad-request-validation-failed'
    | 'pipeline-error-perplexity-ai-401-unauthorized'
    | 'pipeline-error-perplexity-ai-403-model-access-denied'
    | 'pipeline-error-perplexity-ai-429-exceeded-quota'
    | 'pipeline-error-perplexity-ai-500-server-error'
    | 'pipeline-error-perplexity-ai-llm-failed'
    | 'pipeline-error-deepinfra-400-bad-request-validation-failed'
    | 'pipeline-error-deepinfra-401-unauthorized'
    | 'pipeline-error-deepinfra-403-model-access-denied'
    | 'pipeline-error-deepinfra-429-exceeded-quota'
    | 'pipeline-error-deepinfra-500-server-error'
    | 'pipeline-error-deepinfra-llm-failed'
    | 'pipeline-error-runpod-400-bad-request-validation-failed'
    | 'pipeline-error-runpod-401-unauthorized'
    | 'pipeline-error-runpod-403-model-access-denied'
    | 'pipeline-error-runpod-429-exceeded-quota'
    | 'pipeline-error-runpod-500-server-error'
    | 'pipeline-error-runpod-llm-failed'
    | 'pipeline-error-custom-llm-400-bad-request-validation-failed'
    | 'pipeline-error-custom-llm-401-unauthorized'
    | 'pipeline-error-custom-llm-403-model-access-denied'
    | 'pipeline-error-custom-llm-429-exceeded-quota'
    | 'pipeline-error-custom-llm-500-server-error'
    | 'pipeline-error-custom-llm-llm-failed'
    | 'pipeline-error-custom-voice-failed'
    | 'pipeline-error-cartesia-socket-hang-up'
    | 'pipeline-error-cartesia-requested-payment'
    | 'pipeline-error-cartesia-500-server-error'
    | 'pipeline-error-cartesia-503-server-error'
    | 'pipeline-error-cartesia-522-server-error'
    | 'pipeline-error-eleven-labs-voice-not-found'
    | 'pipeline-error-eleven-labs-quota-exceeded'
    | 'pipeline-error-eleven-labs-unauthorized-access'
    | 'pipeline-error-eleven-labs-unauthorized-to-access-model'
    | 'pipeline-error-eleven-labs-professional-voices-only-for-creator-plus'
    | 'pipeline-error-eleven-labs-blocked-free-plan-and-requested-upgrade'
    | 'pipeline-error-eleven-labs-blocked-concurrent-requests-and-requested-upgrade'
    | 'pipeline-error-eleven-labs-blocked-using-instant-voice-clone-and-requested-upgrade'
    | 'pipeline-error-eleven-labs-system-busy-and-requested-upgrade'
    | 'pipeline-error-eleven-labs-voice-not-fine-tuned'
    | 'pipeline-error-eleven-labs-invalid-api-key'
    | 'pipeline-error-eleven-labs-invalid-voice-samples'
    | 'pipeline-error-eleven-labs-voice-disabled-by-owner'
    | 'pipeline-error-eleven-labs-blocked-account-in-probation'
    | 'pipeline-error-eleven-labs-blocked-content-against-their-policy'
    | 'pipeline-error-eleven-labs-missing-samples-for-voice-clone'
    | 'pipeline-error-eleven-labs-voice-not-fine-tuned-and-cannot-be-used'
    | 'pipeline-error-eleven-labs-voice-not-allowed-for-free-users'
    | 'pipeline-error-eleven-labs-500-server-error'
    | 'pipeline-error-eleven-labs-max-character-limit-exceeded'
    | 'pipeline-error-eleven-labs-blocked-voice-potentially-against-terms-of-service-and-awaiting-verification'
    | 'pipeline-error-playht-request-timed-out'
    | 'pipeline-error-playht-invalid-voice'
    | 'pipeline-error-playht-unexpected-error'
    | 'pipeline-error-playht-out-of-credits'
    | 'pipeline-error-playht-invalid-emotion'
    | 'pipeline-error-playht-voice-must-be-a-valid-voice-manifest-uri'
    | 'pipeline-error-playht-401-unauthorized'
    | 'pipeline-error-playht-403-forbidden-out-of-characters'
    | 'pipeline-error-playht-403-forbidden-api-access-not-available'
    | 'pipeline-error-playht-429-exceeded-quota'
    | 'pipeline-error-playht-502-gateway-error'
    | 'pipeline-error-playht-504-gateway-error'
    | 'pipeline-error-tavus-video-failed'
    | 'pipeline-error-custom-transcriber-failed'
    | 'pipeline-error-11labs-transcriber-failed'
    | 'pipeline-error-deepgram-returning-403-model-access-denied'
    | 'pipeline-error-deepgram-returning-401-invalid-credentials'
    | 'pipeline-error-deepgram-returning-404-not-found'
    | 'pipeline-error-deepgram-returning-400-no-such-model-language-tier-combination'
    | 'pipeline-error-deepgram-returning-500-invalid-json'
    | 'pipeline-error-deepgram-returning-502-network-error'
    | 'pipeline-error-deepgram-returning-502-bad-gateway-ehostunreach'
    | 'pipeline-error-google-transcriber-failed'
    | 'pipeline-error-openai-transcriber-failed'
    | 'call.start.error-get-org'
    | 'call.start.error-get-subscription'
    | 'call.start.error-get-assistant'
    | 'call.start.error-get-phone-number'
    | 'call.start.error-get-customer'
    | 'call.start.error-get-resources-validation'
    | 'call.start.error-vapi-number-international'
    | 'call.start.error-vapi-number-outbound-daily-limit'
    | 'call.start.error-get-transport'
    | 'silence-timed-out'
    | 'sip-gateway-failed-to-connect-call'
    | 'twilio-failed-to-connect-call'
    | 'twilio-reported-customer-misdialed'
    | 'vonage-rejected'
    | 'voicemail';
  /** This is the destination where the call ended up being transferred to. If the call was not transferred, this will be empty. */
  destination?: TransferDestinationNumber | TransferDestinationSip;
  /** This is the unique identifier for the call. */
  id: string;
  /** This is the unique identifier for the org that this call belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the call was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the call was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the ISO 8601 date-time string of when the call was started.
   * @format date-time
   */
  startedAt?: string;
  /**
   * This is the ISO 8601 date-time string of when the call was ended.
   * @format date-time
   */
  endedAt?: string;
  /** This is the cost of the call in USD. */
  cost?: number;
  /** This is the cost of the call in USD. */
  costBreakdown?: CostBreakdown;
  /** This is a copy of assistant artifact plan. This isn't actually stored on the call but rather just returned in POST /call/web to enable artifact creation client side. */
  artifactPlan?: ArtifactPlan;
  /** This is the analysis of the call. Configure in `assistant.analysisPlan`. */
  analysis?: Analysis;
  /** This is to real-time monitor the call. Configure in `assistant.monitorPlan`. */
  monitor?: Monitor;
  /** These are the artifacts created from the call. Configure in `assistant.artifactPlan`. */
  artifact?: Artifact;
  /** This is the transport used for the call. */
  transport?: Transport;
  /**
   * The ID of the call as provided by the phone number service. callSid in Twilio. conversationUuid in Vonage. callControlId in Telnyx.
   *
   * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` type.
   */
  phoneCallProviderId?: string;
  /** This is the assistant that will be used for the call. To use a transient assistant, use `assistant` instead. */
  assistantId?: string;
  /** This is the assistant that will be used for the call. To use an existing assistant, use `assistantId` instead. */
  assistant?: CreateAssistantDTO;
  /** These are the overrides for the `assistant` or `assistantId`'s settings and template variables. */
  assistantOverrides?: AssistantOverrides;
  /** This is the squad that will be used for the call. To use a transient squad, use `squad` instead. */
  squadId?: string;
  /** This is a squad that will be used for the call. To use an existing squad, use `squadId` instead. */
  squad?: CreateSquadDTO;
  /**
   * This is the phone number that will be used for the call. To use a transient number, use `phoneNumber` instead.
   *
   * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` type.
   */
  phoneNumberId?: string;
  /**
   * This is the phone number that will be used for the call. To use an existing number, use `phoneNumberId` instead.
   *
   * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` type.
   */
  phoneNumber?: ImportTwilioPhoneNumberDTO;
  /**
   * This is the customer that will be called. To call a transient customer , use `customer` instead.
   *
   * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` type.
   */
  customerId?: string;
  /**
   * This is the customer that will be called. To call an existing customer, use `customerId` instead.
   *
   * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` type.
   */
  customer?: CreateCustomerDTO;
  /**
   * This is the name of the call. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
}

export interface PaginationMeta {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
}

export interface CallPaginatedResponse {
  results: Call[];
  metadata: PaginationMeta;
}

export interface CreateOutboundCallDTO {
  /**
   * This is the name of the call. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /** This is the assistant that will be used for the call. To use a transient assistant, use `assistant` instead. */
  assistantId?: string;
  /** This is the assistant that will be used for the call. To use an existing assistant, use `assistantId` instead. */
  assistant?: CreateAssistantDTO;
  /** These are the overrides for the `assistant` or `assistantId`'s settings and template variables. */
  assistantOverrides?: AssistantOverrides;
  /** This is the squad that will be used for the call. To use a transient squad, use `squad` instead. */
  squadId?: string;
  /** This is a squad that will be used for the call. To use an existing squad, use `squadId` instead. */
  squad?: CreateSquadDTO;
  /**
   * This is the phone number that will be used for the call. To use a transient number, use `phoneNumber` instead.
   *
   * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` type.
   */
  phoneNumberId?: string;
  /**
   * This is the phone number that will be used for the call. To use an existing number, use `phoneNumberId` instead.
   *
   * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` type.
   */
  phoneNumber?: ImportTwilioPhoneNumberDTO;
  /**
   * This is the customer that will be called. To call a transient customer , use `customer` instead.
   *
   * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` type.
   */
  customerId?: string;
  /**
   * This is the customer that will be called. To call an existing customer, use `customerId` instead.
   *
   * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` type.
   */
  customer?: CreateCustomerDTO;
}

export interface CreateWebCallDTO {
  /** This is the assistant that will be used for the call. To use a transient assistant, use `assistant` instead. */
  assistantId?: string;
  /** This is the assistant that will be used for the call. To use an existing assistant, use `assistantId` instead. */
  assistant?: CreateAssistantDTO;
  /** These are the overrides for the `assistant` or `assistantId`'s settings and template variables. */
  assistantOverrides?: AssistantOverrides;
  /** This is the squad that will be used for the call. To use a transient squad, use `squad` instead. */
  squadId?: string;
  /** This is a squad that will be used for the call. To use an existing squad, use `squadId` instead. */
  squad?: CreateSquadDTO;
}

export interface UpdateCallDTO {
  /**
   * This is the name of the call. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
}

export type ChatServiceResponse = object;

export interface ChatCompletionMessageMetadata {
  taskName: string;
  taskType: string;
  taskOutput: string;
  taskState?: object;
  nodeTrace?: string[];
}

export interface ChatCompletionMessageWorkflows {
  role: object;
  content: string | null;
  metadata?: ChatCompletionMessageMetadata;
}

export interface Say {
  type: 'say';
  /** @maxLength 1000 */
  exact?: string;
  /** @maxLength 1000 */
  prompt?: string;
  /** @maxLength 80 */
  name: string;
  /** This is for metadata you want to store on the task. */
  metadata?: object;
}

export interface SayHook {
  type: 'say';
  /** This is for metadata you want to store on the task. */
  metadata?: object;
  /** @maxLength 1000 */
  exact?: string;
  /** @maxLength 1000 */
  prompt?: string;
}

export interface Hook {
  /** @maxLength 80 */
  on: 'task.start' | 'task.output.confirmation' | 'task.delayed';
  do: SayHook[];
}

export interface Gather {
  type: 'gather';
  output: JsonSchema;
  /** This is whether or not the workflow should read back the gathered data to the user, and ask about its correctness. */
  confirmContent?: boolean;
  /**
   * This is a list of hooks for a task.
   * Each hook is a list of tasks to run on a trigger (such as on start, on failure, etc).
   * Only Say is supported for now.
   */
  hooks?: Hook[];
  /** This is the number of times we should try to gather the information from the user before we failover to the fail path. An example of this would be a user refusing to give their phone number for privacy reasons, and then going down a different path on account of this */
  maxRetries?: number;
  /** This is a liquid templating string. On the first call to Gather, the template will be filled out with variables from the context, and will be spoken verbatim to the user. An example would be "Base on your zipcode, it looks like you could be in one of these counties: {{ counties | join: ", " }}. Which one do you live in?" */
  literalTemplate?: string;
  /** @maxLength 80 */
  name: string;
  /** This is for metadata you want to store on the task. */
  metadata?: object;
}

export interface ApiRequest {
  type: 'apiRequest';
  method: 'POST' | 'GET';
  /** Api endpoint to send requests to. */
  url: string;
  /**
   * These are the custom headers to include in the Api Request sent.
   *
   * Each key-value pair represents a header name and its value.
   */
  headers?: JsonSchema;
  /**
   * This defined the JSON body of your Api Request. For example, if `body_schema`
   * included "my_field": "my_gather_statement.user_age", then the json body sent to the server would have that particular value assign to it.
   * Right now, only data from gather statements are supported.
   */
  body?: JsonSchema;
  /**
   * This is the mode of the Api Request.
   * We only support BLOCKING and BACKGROUND for now.
   */
  mode: 'blocking' | 'background';
  /**
   * This is a list of hooks for a task.
   * Each hook is a list of tasks to run on a trigger (such as on start, on failure, etc).
   * Only Say is supported for now.
   */
  hooks?: Hook[];
  /** This is the schema for the outputs of the Api Request. */
  output?: JsonSchema;
  /** @maxLength 80 */
  name: string;
  /** This is for metadata you want to store on the task. */
  metadata?: object;
}

export interface Hangup {
  type: 'hangup';
  /** @maxLength 80 */
  name: string;
  /** This is for metadata you want to store on the task. */
  metadata?: object;
}

export interface Transfer {
  type: 'transfer';
  destination: object;
  /** @maxLength 80 */
  name: string;
  /** This is for metadata you want to store on the task. */
  metadata?: object;
}

export interface CreateWorkflowDTO {
  nodes: (Say | Gather | ApiRequest | Hangup | Transfer)[];
  /** @maxLength 80 */
  name: string;
  edges: Edge[];
}

export interface ChatCompletionsDTO {
  messages: ChatCompletionMessageWorkflows[];
  workflowId?: string;
  workflow?: CreateWorkflowDTO;
}

export interface Assistant {
  /** These are the options for the assistant's transcriber. */
  transcriber?:
    | AssemblyAITranscriber
    | AzureSpeechTranscriber
    | CustomTranscriber
    | DeepgramTranscriber
    | ElevenLabsTranscriber
    | GladiaTranscriber
    | SpeechmaticsTranscriber
    | TalkscriberTranscriber
    | GoogleTranscriber
    | OpenAITranscriber;
  /** These are the options for the assistant's LLM. */
  model?:
    | AnyscaleModel
    | AnthropicModel
    | CerebrasModel
    | CustomLLMModel
    | DeepInfraModel
    | DeepSeekModel
    | GoogleModel
    | GroqModel
    | InflectionAIModel
    | OpenAIModel
    | OpenRouterModel
    | PerplexityAIModel
    | TogetherAIModel
    | VapiModel
    | XaiModel;
  /**
   * These are the options for the assistant's voice.
   * @default {"provider":"playht","voiceId":"jennifer"}
   */
  voice?:
    | AzureVoice
    | CartesiaVoice
    | CustomVoice
    | DeepgramVoice
    | ElevenLabsVoice
    | HumeVoice
    | LMNTVoice
    | NeuphonicVoice
    | OpenAIVoice
    | PlayHTVoice
    | RimeAIVoice
    | SmallestAIVoice
    | TavusVoice
    | VapiVoice;
  /**
   * This is the first message that the assistant will say. This can also be a URL to a containerized audio file (mp3, wav, etc.).
   *
   * If unspecified, assistant will wait for user to speak and use the model to respond once they speak.
   * @example "Hello! How can I help you today?"
   */
  firstMessage?: string;
  /** @default false */
  firstMessageInterruptionsEnabled?: boolean;
  /**
   * This is the mode for the first message. Default is 'assistant-speaks-first'.
   *
   * Use:
   * - 'assistant-speaks-first' to have the assistant speak first.
   * - 'assistant-waits-for-user' to have the assistant wait for the user to speak first.
   * - 'assistant-speaks-first-with-model-generated-message' to have the assistant speak first with a message generated by the model based on the conversation state. (`assistant.model.messages` at call start, `call.messages` at squad transfer points).
   *
   * @default 'assistant-speaks-first'
   * @example "assistant-speaks-first"
   */
  firstMessageMode?:
    | 'assistant-speaks-first'
    | 'assistant-speaks-first-with-model-generated-message'
    | 'assistant-waits-for-user';
  /**
   * These are the settings to configure or disable voicemail detection. Alternatively, voicemail detection can be configured using the model.tools=[VoicemailTool].
   * This uses Twilio's built-in detection while the VoicemailTool relies on the model to detect if a voicemail was reached.
   * You can use neither of them, one of them, or both of them. By default, Twilio built-in detection is enabled while VoicemailTool is not.
   */
  voicemailDetection?:
    | GoogleVoicemailDetectionPlan
    | OpenAIVoicemailDetectionPlan
    | TwilioVoicemailDetectionPlan;
  /**
   * These are the messages that will be sent to your Client SDKs. Default is conversation-update,function-call,hang,model-output,speech-update,status-update,transfer-update,transcript,tool-calls,user-interrupted,voice-input. You can check the shape of the messages in ClientMessage schema.
   * @example ["conversation-update","function-call","hang","model-output","speech-update","status-update","transfer-update","transcript","tool-calls","user-interrupted","voice-input"]
   */
  clientMessages?:
    | 'conversation-update'
    | 'function-call'
    | 'function-call-result'
    | 'hang'
    | 'language-changed'
    | 'metadata'
    | 'model-output'
    | 'speech-update'
    | 'status-update'
    | 'transcript'
    | 'tool-calls'
    | 'tool-calls-result'
    | 'transfer-update'
    | 'user-interrupted'
    | 'voice-input';
  /**
   * These are the messages that will be sent to your Server URL. Default is conversation-update,end-of-call-report,function-call,hang,speech-update,status-update,tool-calls,transfer-destination-request,user-interrupted. You can check the shape of the messages in ServerMessage schema.
   * @example ["conversation-update","end-of-call-report","function-call","hang","speech-update","status-update","tool-calls","transfer-destination-request","user-interrupted"]
   */
  serverMessages?:
    | 'conversation-update'
    | 'end-of-call-report'
    | 'function-call'
    | 'hang'
    | 'language-changed'
    | 'language-change-detected'
    | 'model-output'
    | 'phone-call-control'
    | 'speech-update'
    | 'status-update'
    | 'transcript'
    | "transcript[transcriptType='final']"
    | 'tool-calls'
    | 'transfer-destination-request'
    | 'transfer-update'
    | 'user-interrupted'
    | 'voice-input';
  /**
   * How many seconds of silence to wait before ending the call. Defaults to 30.
   *
   * @default 30
   * @min 10
   * @max 3600
   * @example 30
   */
  silenceTimeoutSeconds?: number;
  /**
   * This is the maximum number of seconds that the call will last. When the call reaches this duration, it will be ended.
   *
   * @default 600 (10 minutes)
   * @min 10
   * @max 43200
   * @example 600
   */
  maxDurationSeconds?: number;
  /**
   * This is the background sound in the call. Default for phone calls is 'office' and default for web calls is 'off'.
   * You can also provide a custom sound by providing a URL to an audio file.
   * @maxLength 1000
   */
  backgroundSound?: 'off' | 'office' | string;
  /**
   * This enables filtering of noise and background speech while the user is talking.
   *
   * Default `false` while in beta.
   *
   * @default false
   * @example false
   */
  backgroundDenoisingEnabled?: boolean;
  /**
   * This determines whether the model's output is used in conversation history rather than the transcription of assistant's speech.
   *
   * Default `false` while in beta.
   *
   * @default false
   * @example false
   */
  modelOutputInMessagesEnabled?: boolean;
  /** These are the configurations to be passed to the transport providers of assistant's calls, like Twilio. You can store multiple configurations for different transport providers. For a call, only the configuration matching the call transport provider is used. */
  transportConfigurations?: TransportConfigurationTwilio[];
  /**
   * This is the plan for observability configuration of assistant's calls.
   * Currently supports Langfuse for tracing and monitoring.
   */
  observabilityPlan?: LangfuseObservabilityPlan;
  /** These are dynamic credentials that will be used for the assistant calls. By default, all the credentials are available for use in the call but you can supplement an additional credentials using this. Dynamic credentials override existing credentials. */
  credentials?: (
    | CreateAnthropicCredentialDTO
    | CreateAnyscaleCredentialDTO
    | CreateAssemblyAICredentialDTO
    | CreateAzureCredentialDTO
    | CreateAzureOpenAICredentialDTO
    | CreateByoSipTrunkCredentialDTO
    | CreateCartesiaCredentialDTO
    | CreateCerebrasCredentialDTO
    | CreateCloudflareCredentialDTO
    | CreateCustomLLMCredentialDTO
    | CreateDeepgramCredentialDTO
    | CreateDeepInfraCredentialDTO
    | CreateDeepSeekCredentialDTO
    | CreateElevenLabsCredentialDTO
    | CreateGcpCredentialDTO
    | CreateGladiaCredentialDTO
    | CreateGoHighLevelCredentialDTO
    | CreateGoogleCredentialDTO
    | CreateGroqCredentialDTO
    | CreateHumeCredentialDTO
    | CreateInflectionAICredentialDTO
    | CreateLangfuseCredentialDTO
    | CreateLmntCredentialDTO
    | CreateMakeCredentialDTO
    | CreateMistralCredentialDTO
    | CreateNeuphonicCredentialDTO
    | CreateOpenAICredentialDTO
    | CreateOpenRouterCredentialDTO
    | CreatePerplexityAICredentialDTO
    | CreatePlayHTCredentialDTO
    | CreateRimeAICredentialDTO
    | CreateRunpodCredentialDTO
    | CreateS3CredentialDTO
    | CreateSmallestAICredentialDTO
    | CreateSpeechmaticsCredentialDTO
    | CreateSupabaseCredentialDTO
    | CreateTavusCredentialDTO
    | CreateTogetherAICredentialDTO
    | CreateTrieveCredentialDTO
    | CreateTwilioCredentialDTO
    | CreateVonageCredentialDTO
    | CreateWebhookCredentialDTO
    | CreateXAiCredentialDTO
    | CreateGoogleCalendarOAuth2ClientCredentialDTO
    | CreateGoogleCalendarOAuth2AuthorizationCredentialDTO
  )[];
  /**
   * This is the name of the assistant.
   *
   * This is required when you want to transfer between assistants in a call.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the message that the assistant will say if the call is forwarded to voicemail.
   *
   * If unspecified, it will hang up.
   * @maxLength 1000
   */
  voicemailMessage?: string;
  /**
   * This is the message that the assistant will say if it ends the call.
   *
   * If unspecified, it will hang up without saying anything.
   * @maxLength 1000
   */
  endCallMessage?: string;
  /** This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up. Case insensitive. */
  endCallPhrases?: string[];
  compliancePlan?: CompliancePlan;
  /** This is for metadata you want to store on the assistant. */
  metadata?: object;
  /** This is the plan for analysis of assistant's calls. Stored in `call.analysis`. */
  analysisPlan?: AnalysisPlan;
  /**
   * This is the plan for artifacts generated during assistant's calls. Stored in `call.artifact`.
   *
   * Note: `recordingEnabled` is currently at the root level. It will be moved to `artifactPlan` in the future, but will remain backwards compatible.
   */
  artifactPlan?: ArtifactPlan;
  /**
   * This is the plan for static predefined messages that can be spoken by the assistant during the call, like `idleMessages`.
   *
   * Note: `firstMessage`, `voicemailMessage`, and `endCallMessage` are currently at the root level. They will be moved to `messagePlan` in the future, but will remain backwards compatible.
   */
  messagePlan?: MessagePlan;
  /**
   * This is the plan for when the assistant should start talking.
   *
   * You should configure this if you're running into these issues:
   * - The assistant is too slow to start talking after the customer is done speaking.
   * - The assistant is too fast to start talking after the customer is done speaking.
   * - The assistant is so fast that it's actually interrupting the customer.
   */
  startSpeakingPlan?: StartSpeakingPlan;
  /**
   * This is the plan for when assistant should stop talking on customer interruption.
   *
   * You should configure this if you're running into these issues:
   * - The assistant is too slow to recognize customer's interruption.
   * - The assistant is too fast to recognize customer's interruption.
   * - The assistant is getting interrupted by phrases that are just acknowledgments.
   * - The assistant is getting interrupted by background noises.
   * - The assistant is not properly stopping -- it starts talking right after getting interrupted.
   */
  stopSpeakingPlan?: StopSpeakingPlan;
  /**
   * This is the plan for real-time monitoring of the assistant's calls.
   *
   * Usage:
   * - To enable live listening of the assistant's calls, set `monitorPlan.listenEnabled` to `true`.
   * - To enable live control of the assistant's calls, set `monitorPlan.controlEnabled` to `true`.
   *
   * Note, `serverMessages`, `clientMessages`, `serverUrl` and `serverUrlSecret` are currently at the root level but will be moved to `monitorPlan` in the future. Will remain backwards compatible
   */
  monitorPlan?: MonitorPlan;
  /** These are the credentials that will be used for the assistant calls. By default, all the credentials are available for use in the call but you can provide a subset using this. */
  credentialIds?: string[];
  /**
   * This is where Vapi will send webhooks. You can find all webhooks available along with their shape in ServerMessage schema.
   *
   * The order of precedence is:
   *
   * 1. assistant.server.url
   * 2. phoneNumber.serverUrl
   * 3. org.serverUrl
   */
  server?: Server;
  /** This is a set of actions that will be performed on certain events. */
  hooks?: AssistantHooks[];
  keypadInputPlan?: KeypadInputPlan;
  /** This is the unique identifier for the assistant. */
  id: string;
  /** This is the unique identifier for the org that this assistant belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
}

export interface AssistantPaginatedResponse {
  results: Assistant[];
  metadata: PaginationMeta;
}

export interface UpdateAssistantDTO {
  /** These are the options for the assistant's transcriber. */
  transcriber?:
    | AssemblyAITranscriber
    | AzureSpeechTranscriber
    | CustomTranscriber
    | DeepgramTranscriber
    | ElevenLabsTranscriber
    | GladiaTranscriber
    | SpeechmaticsTranscriber
    | TalkscriberTranscriber
    | GoogleTranscriber
    | OpenAITranscriber;
  /** These are the options for the assistant's LLM. */
  model?:
    | AnyscaleModel
    | AnthropicModel
    | CerebrasModel
    | CustomLLMModel
    | DeepInfraModel
    | DeepSeekModel
    | GoogleModel
    | GroqModel
    | InflectionAIModel
    | OpenAIModel
    | OpenRouterModel
    | PerplexityAIModel
    | TogetherAIModel
    | VapiModel
    | XaiModel;
  /**
   * These are the options for the assistant's voice.
   * @default {"provider":"playht","voiceId":"jennifer"}
   */
  voice?:
    | AzureVoice
    | CartesiaVoice
    | CustomVoice
    | DeepgramVoice
    | ElevenLabsVoice
    | HumeVoice
    | LMNTVoice
    | NeuphonicVoice
    | OpenAIVoice
    | PlayHTVoice
    | RimeAIVoice
    | SmallestAIVoice
    | TavusVoice
    | VapiVoice;
  /**
   * This is the first message that the assistant will say. This can also be a URL to a containerized audio file (mp3, wav, etc.).
   *
   * If unspecified, assistant will wait for user to speak and use the model to respond once they speak.
   * @example "Hello! How can I help you today?"
   */
  firstMessage?: string;
  /** @default false */
  firstMessageInterruptionsEnabled?: boolean;
  /**
   * This is the mode for the first message. Default is 'assistant-speaks-first'.
   *
   * Use:
   * - 'assistant-speaks-first' to have the assistant speak first.
   * - 'assistant-waits-for-user' to have the assistant wait for the user to speak first.
   * - 'assistant-speaks-first-with-model-generated-message' to have the assistant speak first with a message generated by the model based on the conversation state. (`assistant.model.messages` at call start, `call.messages` at squad transfer points).
   *
   * @default 'assistant-speaks-first'
   * @example "assistant-speaks-first"
   */
  firstMessageMode?:
    | 'assistant-speaks-first'
    | 'assistant-speaks-first-with-model-generated-message'
    | 'assistant-waits-for-user';
  /**
   * These are the settings to configure or disable voicemail detection. Alternatively, voicemail detection can be configured using the model.tools=[VoicemailTool].
   * This uses Twilio's built-in detection while the VoicemailTool relies on the model to detect if a voicemail was reached.
   * You can use neither of them, one of them, or both of them. By default, Twilio built-in detection is enabled while VoicemailTool is not.
   */
  voicemailDetection?:
    | GoogleVoicemailDetectionPlan
    | OpenAIVoicemailDetectionPlan
    | TwilioVoicemailDetectionPlan;
  /**
   * These are the messages that will be sent to your Client SDKs. Default is conversation-update,function-call,hang,model-output,speech-update,status-update,transfer-update,transcript,tool-calls,user-interrupted,voice-input. You can check the shape of the messages in ClientMessage schema.
   * @example ["conversation-update","function-call","hang","model-output","speech-update","status-update","transfer-update","transcript","tool-calls","user-interrupted","voice-input"]
   */
  clientMessages?:
    | 'conversation-update'
    | 'function-call'
    | 'function-call-result'
    | 'hang'
    | 'language-changed'
    | 'metadata'
    | 'model-output'
    | 'speech-update'
    | 'status-update'
    | 'transcript'
    | 'tool-calls'
    | 'tool-calls-result'
    | 'transfer-update'
    | 'user-interrupted'
    | 'voice-input';
  /**
   * These are the messages that will be sent to your Server URL. Default is conversation-update,end-of-call-report,function-call,hang,speech-update,status-update,tool-calls,transfer-destination-request,user-interrupted. You can check the shape of the messages in ServerMessage schema.
   * @example ["conversation-update","end-of-call-report","function-call","hang","speech-update","status-update","tool-calls","transfer-destination-request","user-interrupted"]
   */
  serverMessages?:
    | 'conversation-update'
    | 'end-of-call-report'
    | 'function-call'
    | 'hang'
    | 'language-changed'
    | 'language-change-detected'
    | 'model-output'
    | 'phone-call-control'
    | 'speech-update'
    | 'status-update'
    | 'transcript'
    | "transcript[transcriptType='final']"
    | 'tool-calls'
    | 'transfer-destination-request'
    | 'transfer-update'
    | 'user-interrupted'
    | 'voice-input';
  /**
   * How many seconds of silence to wait before ending the call. Defaults to 30.
   *
   * @default 30
   * @min 10
   * @max 3600
   * @example 30
   */
  silenceTimeoutSeconds?: number;
  /**
   * This is the maximum number of seconds that the call will last. When the call reaches this duration, it will be ended.
   *
   * @default 600 (10 minutes)
   * @min 10
   * @max 43200
   * @example 600
   */
  maxDurationSeconds?: number;
  /**
   * This is the background sound in the call. Default for phone calls is 'office' and default for web calls is 'off'.
   * You can also provide a custom sound by providing a URL to an audio file.
   * @maxLength 1000
   */
  backgroundSound?: 'off' | 'office' | string;
  /**
   * This enables filtering of noise and background speech while the user is talking.
   *
   * Default `false` while in beta.
   *
   * @default false
   * @example false
   */
  backgroundDenoisingEnabled?: boolean;
  /**
   * This determines whether the model's output is used in conversation history rather than the transcription of assistant's speech.
   *
   * Default `false` while in beta.
   *
   * @default false
   * @example false
   */
  modelOutputInMessagesEnabled?: boolean;
  /** These are the configurations to be passed to the transport providers of assistant's calls, like Twilio. You can store multiple configurations for different transport providers. For a call, only the configuration matching the call transport provider is used. */
  transportConfigurations?: TransportConfigurationTwilio[];
  /**
   * This is the plan for observability configuration of assistant's calls.
   * Currently supports Langfuse for tracing and monitoring.
   */
  observabilityPlan?: LangfuseObservabilityPlan;
  /** These are dynamic credentials that will be used for the assistant calls. By default, all the credentials are available for use in the call but you can supplement an additional credentials using this. Dynamic credentials override existing credentials. */
  credentials?: (
    | CreateAnthropicCredentialDTO
    | CreateAnyscaleCredentialDTO
    | CreateAssemblyAICredentialDTO
    | CreateAzureCredentialDTO
    | CreateAzureOpenAICredentialDTO
    | CreateByoSipTrunkCredentialDTO
    | CreateCartesiaCredentialDTO
    | CreateCerebrasCredentialDTO
    | CreateCloudflareCredentialDTO
    | CreateCustomLLMCredentialDTO
    | CreateDeepgramCredentialDTO
    | CreateDeepInfraCredentialDTO
    | CreateDeepSeekCredentialDTO
    | CreateElevenLabsCredentialDTO
    | CreateGcpCredentialDTO
    | CreateGladiaCredentialDTO
    | CreateGoHighLevelCredentialDTO
    | CreateGoogleCredentialDTO
    | CreateGroqCredentialDTO
    | CreateHumeCredentialDTO
    | CreateInflectionAICredentialDTO
    | CreateLangfuseCredentialDTO
    | CreateLmntCredentialDTO
    | CreateMakeCredentialDTO
    | CreateMistralCredentialDTO
    | CreateNeuphonicCredentialDTO
    | CreateOpenAICredentialDTO
    | CreateOpenRouterCredentialDTO
    | CreatePerplexityAICredentialDTO
    | CreatePlayHTCredentialDTO
    | CreateRimeAICredentialDTO
    | CreateRunpodCredentialDTO
    | CreateS3CredentialDTO
    | CreateSmallestAICredentialDTO
    | CreateSpeechmaticsCredentialDTO
    | CreateSupabaseCredentialDTO
    | CreateTavusCredentialDTO
    | CreateTogetherAICredentialDTO
    | CreateTrieveCredentialDTO
    | CreateTwilioCredentialDTO
    | CreateVonageCredentialDTO
    | CreateWebhookCredentialDTO
    | CreateXAiCredentialDTO
    | CreateGoogleCalendarOAuth2ClientCredentialDTO
    | CreateGoogleCalendarOAuth2AuthorizationCredentialDTO
  )[];
  /**
   * This is the name of the assistant.
   *
   * This is required when you want to transfer between assistants in a call.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the message that the assistant will say if the call is forwarded to voicemail.
   *
   * If unspecified, it will hang up.
   * @maxLength 1000
   */
  voicemailMessage?: string;
  /**
   * This is the message that the assistant will say if it ends the call.
   *
   * If unspecified, it will hang up without saying anything.
   * @maxLength 1000
   */
  endCallMessage?: string;
  /** This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up. Case insensitive. */
  endCallPhrases?: string[];
  compliancePlan?: CompliancePlan;
  /** This is for metadata you want to store on the assistant. */
  metadata?: object;
  /** This is the plan for analysis of assistant's calls. Stored in `call.analysis`. */
  analysisPlan?: AnalysisPlan;
  /**
   * This is the plan for artifacts generated during assistant's calls. Stored in `call.artifact`.
   *
   * Note: `recordingEnabled` is currently at the root level. It will be moved to `artifactPlan` in the future, but will remain backwards compatible.
   */
  artifactPlan?: ArtifactPlan;
  /**
   * This is the plan for static predefined messages that can be spoken by the assistant during the call, like `idleMessages`.
   *
   * Note: `firstMessage`, `voicemailMessage`, and `endCallMessage` are currently at the root level. They will be moved to `messagePlan` in the future, but will remain backwards compatible.
   */
  messagePlan?: MessagePlan;
  /**
   * This is the plan for when the assistant should start talking.
   *
   * You should configure this if you're running into these issues:
   * - The assistant is too slow to start talking after the customer is done speaking.
   * - The assistant is too fast to start talking after the customer is done speaking.
   * - The assistant is so fast that it's actually interrupting the customer.
   */
  startSpeakingPlan?: StartSpeakingPlan;
  /**
   * This is the plan for when assistant should stop talking on customer interruption.
   *
   * You should configure this if you're running into these issues:
   * - The assistant is too slow to recognize customer's interruption.
   * - The assistant is too fast to recognize customer's interruption.
   * - The assistant is getting interrupted by phrases that are just acknowledgments.
   * - The assistant is getting interrupted by background noises.
   * - The assistant is not properly stopping -- it starts talking right after getting interrupted.
   */
  stopSpeakingPlan?: StopSpeakingPlan;
  /**
   * This is the plan for real-time monitoring of the assistant's calls.
   *
   * Usage:
   * - To enable live listening of the assistant's calls, set `monitorPlan.listenEnabled` to `true`.
   * - To enable live control of the assistant's calls, set `monitorPlan.controlEnabled` to `true`.
   *
   * Note, `serverMessages`, `clientMessages`, `serverUrl` and `serverUrlSecret` are currently at the root level but will be moved to `monitorPlan` in the future. Will remain backwards compatible
   */
  monitorPlan?: MonitorPlan;
  /** These are the credentials that will be used for the assistant calls. By default, all the credentials are available for use in the call but you can provide a subset using this. */
  credentialIds?: string[];
  /**
   * This is where Vapi will send webhooks. You can find all webhooks available along with their shape in ServerMessage schema.
   *
   * The order of precedence is:
   *
   * 1. assistant.server.url
   * 2. phoneNumber.serverUrl
   * 3. org.serverUrl
   */
  server?: Server;
  /** This is a set of actions that will be performed on certain events. */
  hooks?: AssistantHooks[];
  keypadInputPlan?: KeypadInputPlan;
}

export interface ByoPhoneNumber {
  /**
   * This is the fallback destination an inbound call will be transferred to if:
   * 1. `assistantId` is not set
   * 2. `squadId` is not set
   * 3. and, `assistant-request` message to the `serverUrl` fails
   *
   * If this is not set and above conditions are met, the inbound call is hung up with an error message.
   */
  fallbackDestination?: TransferDestinationNumber | TransferDestinationSip;
  /** This is to bring your own phone numbers from your own SIP trunks or Carriers. */
  provider: 'byo-phone-number';
  /**
   * This is the flag to toggle the E164 check for the `number` field. This is an advanced property which should be used if you know your use case requires it.
   *
   * Use cases:
   * - `false`: To allow non-E164 numbers like `+001234567890`, `1234`, or `abc`. This is useful for dialing out to non-E164 numbers on your SIP trunks.
   * - `true` (default): To allow only E164 numbers like `+14155551234`. This is standard for PSTN calls.
   *
   * If `false`, the `number` is still required to only contain alphanumeric characters (regex: `/^\+?[a-zA-Z0-9]+$/`).
   *
   * @default true (E164 check is enabled)
   * @default true
   */
  numberE164CheckEnabled?: boolean;
  /** This is the unique identifier for the phone number. */
  id: string;
  /** This is the unique identifier for the org that this phone number belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the phone number was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the phone number was last updated.
   * @format date-time
   */
  updatedAt: string;
  /** This is the status of the phone number. */
  status?: 'active' | 'activating' | 'blocked';
  /**
   * This is the name of the phone number. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the assistant that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  assistantId?: string;
  /**
   * This is the squad that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  squadId?: string;
  /**
   * This is where Vapi will send webhooks. You can find all webhooks available along with their shape in ServerMessage schema.
   *
   * The order of precedence is:
   *
   * 1. assistant.server
   * 2. phoneNumber.server
   * 3. org.server
   */
  server?: Server;
  /**
   * This is the number of the customer.
   * @minLength 3
   * @maxLength 40
   */
  number?: string;
  /**
   * This is the credential of your own SIP trunk or Carrier (type `byo-sip-trunk`) which can be used to make calls to this phone number.
   *
   * You can add the SIP trunk or Carrier credential in the Provider Credentials page on the Dashboard to get the credentialId.
   */
  credentialId: string;
}

export interface TwilioPhoneNumber {
  /**
   * This is the fallback destination an inbound call will be transferred to if:
   * 1. `assistantId` is not set
   * 2. `squadId` is not set
   * 3. and, `assistant-request` message to the `serverUrl` fails
   *
   * If this is not set and above conditions are met, the inbound call is hung up with an error message.
   */
  fallbackDestination?: TransferDestinationNumber | TransferDestinationSip;
  /** This is to use numbers bought on Twilio. */
  provider: 'twilio';
  /** This is the unique identifier for the phone number. */
  id: string;
  /** This is the unique identifier for the org that this phone number belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the phone number was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the phone number was last updated.
   * @format date-time
   */
  updatedAt: string;
  /** This is the status of the phone number. */
  status?: 'active' | 'activating' | 'blocked';
  /**
   * This is the name of the phone number. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the assistant that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  assistantId?: string;
  /**
   * This is the squad that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  squadId?: string;
  /**
   * This is where Vapi will send webhooks. You can find all webhooks available along with their shape in ServerMessage schema.
   *
   * The order of precedence is:
   *
   * 1. assistant.server
   * 2. phoneNumber.server
   * 3. org.server
   */
  server?: Server;
  /** These are the digits of the phone number you own on your Twilio. */
  number: string;
  /** This is the Twilio Account SID for the phone number. */
  twilioAccountSid: string;
  /** This is the Twilio Auth Token for the phone number. */
  twilioAuthToken: string;
}

export interface VonagePhoneNumber {
  /**
   * This is the fallback destination an inbound call will be transferred to if:
   * 1. `assistantId` is not set
   * 2. `squadId` is not set
   * 3. and, `assistant-request` message to the `serverUrl` fails
   *
   * If this is not set and above conditions are met, the inbound call is hung up with an error message.
   */
  fallbackDestination?: TransferDestinationNumber | TransferDestinationSip;
  /** This is to use numbers bought on Vonage. */
  provider: 'vonage';
  /** This is the unique identifier for the phone number. */
  id: string;
  /** This is the unique identifier for the org that this phone number belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the phone number was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the phone number was last updated.
   * @format date-time
   */
  updatedAt: string;
  /** This is the status of the phone number. */
  status?: 'active' | 'activating' | 'blocked';
  /**
   * This is the name of the phone number. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the assistant that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  assistantId?: string;
  /**
   * This is the squad that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  squadId?: string;
  /**
   * This is where Vapi will send webhooks. You can find all webhooks available along with their shape in ServerMessage schema.
   *
   * The order of precedence is:
   *
   * 1. assistant.server
   * 2. phoneNumber.server
   * 3. org.server
   */
  server?: Server;
  /** These are the digits of the phone number you own on your Vonage. */
  number: string;
  /** This is the credential you added in dashboard.vapi.ai/keys. This is used to configure the number to send inbound calls to Vapi, make outbound calls and do live call updates like transfers and hangups. */
  credentialId: string;
}

export interface SipAuthentication {
  /** This will be expected in the `realm` field of the `authorization` header of the SIP INVITE. Defaults to sip.vapi.ai. */
  realm?: string;
  /**
   * This will be expected in the `username` field of the `authorization` header of the SIP INVITE.
   * @minLength 20
   * @maxLength 40
   */
  username: string;
  /**
   * This will be expected to generate the `response` field of the `authorization` header of the SIP INVITE, through digest authentication.
   * @minLength 20
   * @maxLength 40
   */
  password: string;
}

export interface VapiPhoneNumber {
  /**
   * This is the fallback destination an inbound call will be transferred to if:
   * 1. `assistantId` is not set
   * 2. `squadId` is not set
   * 3. and, `assistant-request` message to the `serverUrl` fails
   *
   * If this is not set and above conditions are met, the inbound call is hung up with an error message.
   */
  fallbackDestination?: TransferDestinationNumber | TransferDestinationSip;
  /** This is to create free SIP phone numbers on Vapi. */
  provider: 'vapi';
  /** This is the unique identifier for the phone number. */
  id: string;
  /** This is the unique identifier for the org that this phone number belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the phone number was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the phone number was last updated.
   * @format date-time
   */
  updatedAt: string;
  /** This is the status of the phone number. */
  status?: 'active' | 'activating' | 'blocked';
  /** These are the digits of the phone number you purchased from Vapi. */
  number?: string;
  /**
   * This is the name of the phone number. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the assistant that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  assistantId?: string;
  /**
   * This is the squad that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  squadId?: string;
  /**
   * This is where Vapi will send webhooks. You can find all webhooks available along with their shape in ServerMessage schema.
   *
   * The order of precedence is:
   *
   * 1. assistant.server
   * 2. phoneNumber.server
   * 3. org.server
   */
  server?: Server;
  /**
   * This is the area code of the phone number to purchase.
   * @minLength 3
   * @maxLength 3
   */
  numberDesiredAreaCode?: string;
  /**
   * This is the SIP URI of the phone number. You can SIP INVITE this. The assistant attached to this number will answer.
   *
   * This is case-insensitive.
   */
  sipUri?: string;
  /**
   * This enables authentication for incoming SIP INVITE requests to the `sipUri`.
   *
   * If not set, any username/password to the 401 challenge of the SIP INVITE will be accepted.
   */
  authentication?: SipAuthentication;
}

export interface TelnyxPhoneNumber {
  /**
   * This is the fallback destination an inbound call will be transferred to if:
   * 1. `assistantId` is not set
   * 2. `squadId` is not set
   * 3. and, `assistant-request` message to the `serverUrl` fails
   *
   * If this is not set and above conditions are met, the inbound call is hung up with an error message.
   */
  fallbackDestination?: TransferDestinationNumber | TransferDestinationSip;
  /** This is to use numbers bought on Telnyx. */
  provider: 'telnyx';
  /** This is the unique identifier for the phone number. */
  id: string;
  /** This is the unique identifier for the org that this phone number belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the phone number was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the phone number was last updated.
   * @format date-time
   */
  updatedAt: string;
  /** This is the status of the phone number. */
  status?: 'active' | 'activating' | 'blocked';
  /**
   * This is the name of the phone number. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the assistant that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  assistantId?: string;
  /**
   * This is the squad that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  squadId?: string;
  /**
   * This is where Vapi will send webhooks. You can find all webhooks available along with their shape in ServerMessage schema.
   *
   * The order of precedence is:
   *
   * 1. assistant.server
   * 2. phoneNumber.server
   * 3. org.server
   */
  server?: Server;
  /** These are the digits of the phone number you own on your Telnyx. */
  number: string;
  /** This is the credential you added in dashboard.vapi.ai/keys. This is used to configure the number to send inbound calls to Vapi, make outbound calls and do live call updates like transfers and hangups. */
  credentialId: string;
}

export interface CreateByoPhoneNumberDTO {
  /**
   * This is the fallback destination an inbound call will be transferred to if:
   * 1. `assistantId` is not set
   * 2. `squadId` is not set
   * 3. and, `assistant-request` message to the `serverUrl` fails
   *
   * If this is not set and above conditions are met, the inbound call is hung up with an error message.
   */
  fallbackDestination?: TransferDestinationNumber | TransferDestinationSip;
  /** This is to bring your own phone numbers from your own SIP trunks or Carriers. */
  provider: 'byo-phone-number';
  /**
   * This is the flag to toggle the E164 check for the `number` field. This is an advanced property which should be used if you know your use case requires it.
   *
   * Use cases:
   * - `false`: To allow non-E164 numbers like `+001234567890`, `1234`, or `abc`. This is useful for dialing out to non-E164 numbers on your SIP trunks.
   * - `true` (default): To allow only E164 numbers like `+14155551234`. This is standard for PSTN calls.
   *
   * If `false`, the `number` is still required to only contain alphanumeric characters (regex: `/^\+?[a-zA-Z0-9]+$/`).
   *
   * @default true (E164 check is enabled)
   * @default true
   */
  numberE164CheckEnabled?: boolean;
  /**
   * This is the number of the customer.
   * @minLength 3
   * @maxLength 40
   */
  number?: string;
  /**
   * This is the credential of your own SIP trunk or Carrier (type `byo-sip-trunk`) which can be used to make calls to this phone number.
   *
   * You can add the SIP trunk or Carrier credential in the Provider Credentials page on the Dashboard to get the credentialId.
   */
  credentialId: string;
  /**
   * This is the name of the phone number. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the assistant that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  assistantId?: string;
  /**
   * This is the squad that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  squadId?: string;
  /**
   * This is where Vapi will send webhooks. You can find all webhooks available along with their shape in ServerMessage schema.
   *
   * The order of precedence is:
   *
   * 1. assistant.server
   * 2. phoneNumber.server
   * 3. org.server
   */
  server?: Server;
}

export interface CreateTwilioPhoneNumberDTO {
  /**
   * This is the fallback destination an inbound call will be transferred to if:
   * 1. `assistantId` is not set
   * 2. `squadId` is not set
   * 3. and, `assistant-request` message to the `serverUrl` fails
   *
   * If this is not set and above conditions are met, the inbound call is hung up with an error message.
   */
  fallbackDestination?: TransferDestinationNumber | TransferDestinationSip;
  /** This is to use numbers bought on Twilio. */
  provider: 'twilio';
  /** These are the digits of the phone number you own on your Twilio. */
  number: string;
  /** This is the Twilio Account SID for the phone number. */
  twilioAccountSid: string;
  /** This is the Twilio Auth Token for the phone number. */
  twilioAuthToken: string;
  /**
   * This is the name of the phone number. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the assistant that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  assistantId?: string;
  /**
   * This is the squad that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  squadId?: string;
  /**
   * This is where Vapi will send webhooks. You can find all webhooks available along with their shape in ServerMessage schema.
   *
   * The order of precedence is:
   *
   * 1. assistant.server
   * 2. phoneNumber.server
   * 3. org.server
   */
  server?: Server;
}

export interface CreateVonagePhoneNumberDTO {
  /**
   * This is the fallback destination an inbound call will be transferred to if:
   * 1. `assistantId` is not set
   * 2. `squadId` is not set
   * 3. and, `assistant-request` message to the `serverUrl` fails
   *
   * If this is not set and above conditions are met, the inbound call is hung up with an error message.
   */
  fallbackDestination?: TransferDestinationNumber | TransferDestinationSip;
  /** This is to use numbers bought on Vonage. */
  provider: 'vonage';
  /** These are the digits of the phone number you own on your Vonage. */
  number: string;
  /** This is the credential you added in dashboard.vapi.ai/keys. This is used to configure the number to send inbound calls to Vapi, make outbound calls and do live call updates like transfers and hangups. */
  credentialId: string;
  /**
   * This is the name of the phone number. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the assistant that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  assistantId?: string;
  /**
   * This is the squad that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  squadId?: string;
  /**
   * This is where Vapi will send webhooks. You can find all webhooks available along with their shape in ServerMessage schema.
   *
   * The order of precedence is:
   *
   * 1. assistant.server
   * 2. phoneNumber.server
   * 3. org.server
   */
  server?: Server;
}

export interface CreateVapiPhoneNumberDTO {
  /**
   * This is the fallback destination an inbound call will be transferred to if:
   * 1. `assistantId` is not set
   * 2. `squadId` is not set
   * 3. and, `assistant-request` message to the `serverUrl` fails
   *
   * If this is not set and above conditions are met, the inbound call is hung up with an error message.
   */
  fallbackDestination?: TransferDestinationNumber | TransferDestinationSip;
  /** This is to create free SIP phone numbers on Vapi. */
  provider: 'vapi';
  /**
   * This is the area code of the phone number to purchase.
   * @minLength 3
   * @maxLength 3
   */
  numberDesiredAreaCode?: string;
  /**
   * This is the SIP URI of the phone number. You can SIP INVITE this. The assistant attached to this number will answer.
   *
   * This is case-insensitive.
   */
  sipUri?: string;
  /**
   * This enables authentication for incoming SIP INVITE requests to the `sipUri`.
   *
   * If not set, any username/password to the 401 challenge of the SIP INVITE will be accepted.
   */
  authentication?: SipAuthentication;
  /**
   * This is the name of the phone number. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the assistant that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  assistantId?: string;
  /**
   * This is the squad that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  squadId?: string;
  /**
   * This is where Vapi will send webhooks. You can find all webhooks available along with their shape in ServerMessage schema.
   *
   * The order of precedence is:
   *
   * 1. assistant.server
   * 2. phoneNumber.server
   * 3. org.server
   */
  server?: Server;
}

export interface CreateTelnyxPhoneNumberDTO {
  /**
   * This is the fallback destination an inbound call will be transferred to if:
   * 1. `assistantId` is not set
   * 2. `squadId` is not set
   * 3. and, `assistant-request` message to the `serverUrl` fails
   *
   * If this is not set and above conditions are met, the inbound call is hung up with an error message.
   */
  fallbackDestination?: TransferDestinationNumber | TransferDestinationSip;
  /** This is to use numbers bought on Telnyx. */
  provider: 'telnyx';
  /** These are the digits of the phone number you own on your Telnyx. */
  number: string;
  /** This is the credential you added in dashboard.vapi.ai/keys. This is used to configure the number to send inbound calls to Vapi, make outbound calls and do live call updates like transfers and hangups. */
  credentialId: string;
  /**
   * This is the name of the phone number. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the assistant that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  assistantId?: string;
  /**
   * This is the squad that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  squadId?: string;
  /**
   * This is where Vapi will send webhooks. You can find all webhooks available along with their shape in ServerMessage schema.
   *
   * The order of precedence is:
   *
   * 1. assistant.server
   * 2. phoneNumber.server
   * 3. org.server
   */
  server?: Server;
}

export interface UpdateByoPhoneNumberDTO {
  /**
   * This is the fallback destination an inbound call will be transferred to if:
   * 1. `assistantId` is not set
   * 2. `squadId` is not set
   * 3. and, `assistant-request` message to the `serverUrl` fails
   *
   * If this is not set and above conditions are met, the inbound call is hung up with an error message.
   */
  fallbackDestination?: TransferDestinationNumber | TransferDestinationSip;
  /**
   * This is the flag to toggle the E164 check for the `number` field. This is an advanced property which should be used if you know your use case requires it.
   *
   * Use cases:
   * - `false`: To allow non-E164 numbers like `+001234567890`, `1234`, or `abc`. This is useful for dialing out to non-E164 numbers on your SIP trunks.
   * - `true` (default): To allow only E164 numbers like `+14155551234`. This is standard for PSTN calls.
   *
   * If `false`, the `number` is still required to only contain alphanumeric characters (regex: `/^\+?[a-zA-Z0-9]+$/`).
   *
   * @default true (E164 check is enabled)
   * @default true
   */
  numberE164CheckEnabled?: boolean;
  /**
   * This is the name of the phone number. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the assistant that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  assistantId?: string;
  /**
   * This is the squad that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  squadId?: string;
  /**
   * This is where Vapi will send webhooks. You can find all webhooks available along with their shape in ServerMessage schema.
   *
   * The order of precedence is:
   *
   * 1. assistant.server
   * 2. phoneNumber.server
   * 3. org.server
   */
  server?: Server;
  /**
   * This is the number of the customer.
   * @minLength 3
   * @maxLength 40
   */
  number?: string;
  /**
   * This is the credential of your own SIP trunk or Carrier (type `byo-sip-trunk`) which can be used to make calls to this phone number.
   *
   * You can add the SIP trunk or Carrier credential in the Provider Credentials page on the Dashboard to get the credentialId.
   */
  credentialId?: string;
}

export interface UpdateTwilioPhoneNumberDTO {
  /**
   * This is the fallback destination an inbound call will be transferred to if:
   * 1. `assistantId` is not set
   * 2. `squadId` is not set
   * 3. and, `assistant-request` message to the `serverUrl` fails
   *
   * If this is not set and above conditions are met, the inbound call is hung up with an error message.
   */
  fallbackDestination?: TransferDestinationNumber | TransferDestinationSip;
  /**
   * This is the name of the phone number. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the assistant that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  assistantId?: string;
  /**
   * This is the squad that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  squadId?: string;
  /**
   * This is where Vapi will send webhooks. You can find all webhooks available along with their shape in ServerMessage schema.
   *
   * The order of precedence is:
   *
   * 1. assistant.server
   * 2. phoneNumber.server
   * 3. org.server
   */
  server?: Server;
  /** These are the digits of the phone number you own on your Twilio. */
  number?: string;
  /** This is the Twilio Account SID for the phone number. */
  twilioAccountSid?: string;
  /** This is the Twilio Auth Token for the phone number. */
  twilioAuthToken?: string;
}

export interface UpdateVonagePhoneNumberDTO {
  /**
   * This is the fallback destination an inbound call will be transferred to if:
   * 1. `assistantId` is not set
   * 2. `squadId` is not set
   * 3. and, `assistant-request` message to the `serverUrl` fails
   *
   * If this is not set and above conditions are met, the inbound call is hung up with an error message.
   */
  fallbackDestination?: TransferDestinationNumber | TransferDestinationSip;
  /**
   * This is the name of the phone number. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the assistant that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  assistantId?: string;
  /**
   * This is the squad that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  squadId?: string;
  /**
   * This is where Vapi will send webhooks. You can find all webhooks available along with their shape in ServerMessage schema.
   *
   * The order of precedence is:
   *
   * 1. assistant.server
   * 2. phoneNumber.server
   * 3. org.server
   */
  server?: Server;
  /** These are the digits of the phone number you own on your Vonage. */
  number?: string;
  /** This is the credential you added in dashboard.vapi.ai/keys. This is used to configure the number to send inbound calls to Vapi, make outbound calls and do live call updates like transfers and hangups. */
  credentialId?: string;
}

export interface UpdateVapiPhoneNumberDTO {
  /**
   * This is the fallback destination an inbound call will be transferred to if:
   * 1. `assistantId` is not set
   * 2. `squadId` is not set
   * 3. and, `assistant-request` message to the `serverUrl` fails
   *
   * If this is not set and above conditions are met, the inbound call is hung up with an error message.
   */
  fallbackDestination?: TransferDestinationNumber | TransferDestinationSip;
  /**
   * This is the name of the phone number. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the assistant that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  assistantId?: string;
  /**
   * This is the squad that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  squadId?: string;
  /**
   * This is where Vapi will send webhooks. You can find all webhooks available along with their shape in ServerMessage schema.
   *
   * The order of precedence is:
   *
   * 1. assistant.server
   * 2. phoneNumber.server
   * 3. org.server
   */
  server?: Server;
  /**
   * This is the SIP URI of the phone number. You can SIP INVITE this. The assistant attached to this number will answer.
   *
   * This is case-insensitive.
   */
  sipUri?: string;
  /**
   * This enables authentication for incoming SIP INVITE requests to the `sipUri`.
   *
   * If not set, any username/password to the 401 challenge of the SIP INVITE will be accepted.
   */
  authentication?: SipAuthentication;
}

export interface UpdateTelnyxPhoneNumberDTO {
  /**
   * This is the fallback destination an inbound call will be transferred to if:
   * 1. `assistantId` is not set
   * 2. `squadId` is not set
   * 3. and, `assistant-request` message to the `serverUrl` fails
   *
   * If this is not set and above conditions are met, the inbound call is hung up with an error message.
   */
  fallbackDestination?: TransferDestinationNumber | TransferDestinationSip;
  /**
   * This is the name of the phone number. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the assistant that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  assistantId?: string;
  /**
   * This is the squad that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  squadId?: string;
  /**
   * This is where Vapi will send webhooks. You can find all webhooks available along with their shape in ServerMessage schema.
   *
   * The order of precedence is:
   *
   * 1. assistant.server
   * 2. phoneNumber.server
   * 3. org.server
   */
  server?: Server;
  /** These are the digits of the phone number you own on your Telnyx. */
  number?: string;
  /** This is the credential you added in dashboard.vapi.ai/keys. This is used to configure the number to send inbound calls to Vapi, make outbound calls and do live call updates like transfers and hangups. */
  credentialId?: string;
}

export interface ImportVonagePhoneNumberDTO {
  /**
   * This is the fallback destination an inbound call will be transferred to if:
   * 1. `assistantId` is not set
   * 2. `squadId` is not set
   * 3. and, `assistant-request` message to the `serverUrl` fails
   *
   * If this is not set and above conditions are met, the inbound call is hung up with an error message.
   */
  fallbackDestination?: TransferDestinationNumber | TransferDestinationSip;
  /**
   * These are the digits of the phone number you own on your Vonage.
   * @deprecated
   */
  vonagePhoneNumber: string;
  /** This is the credential you added in dashboard.vapi.ai/keys. This is used to configure the number to send inbound calls to Vapi, make outbound calls and do live call updates like transfers and hangups. */
  credentialId: string;
  /**
   * This is the name of the phone number. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the assistant that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  assistantId?: string;
  /**
   * This is the squad that will be used for incoming calls to this phone number.
   *
   * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
   */
  squadId?: string;
  /**
   * This is where Vapi will send webhooks. You can find all webhooks available along with their shape in ServerMessage schema.
   *
   * The order of precedence is:
   *
   * 1. assistant.server
   * 2. phoneNumber.server
   * 3. org.server
   */
  server?: Server;
}

export interface PhoneNumberPaginatedResponse {
  /** A list of phone numbers, which can be of any provider type. */
  results: (
    | ByoPhoneNumber
    | TwilioPhoneNumber
    | VonagePhoneNumber
    | VapiPhoneNumber
    | TelnyxPhoneNumber
  )[];
  /** Metadata about the pagination. */
  metadata: PaginationMeta;
}

export interface DtmfTool {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "dtmf" for DTMF tool. */
  type: 'dtmf';
  /** This is the unique identifier for the tool. */
  id: string;
  /** This is the unique identifier for the organization that this tool belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the tool was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the tool was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface EndCallTool {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "endCall" for End Call tool. */
  type: 'endCall';
  /** This is the unique identifier for the tool. */
  id: string;
  /** This is the unique identifier for the organization that this tool belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the tool was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the tool was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface FunctionTool {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "function" for Function tool. */
  type: 'function';
  /** This is the unique identifier for the tool. */
  id: string;
  /** This is the unique identifier for the organization that this tool belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the tool was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the tool was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface GhlTool {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "ghl" for GHL tool. */
  type: 'ghl';
  /** This is the unique identifier for the tool. */
  id: string;
  /** This is the unique identifier for the organization that this tool belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the tool was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the tool was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
  metadata: GhlToolMetadata;
}

export interface MakeTool {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "make" for Make tool. */
  type: 'make';
  /** This is the unique identifier for the tool. */
  id: string;
  /** This is the unique identifier for the organization that this tool belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the tool was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the tool was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
  metadata: MakeToolMetadata;
}

export interface TransferCallTool {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  type: 'transferCall';
  /** These are the destinations that the call can be transferred to. If no destinations are provided, server.url will be used to get the transfer destination once the tool is called. */
  destinations?: (
    | TransferDestinationAssistant
    | TransferDestinationStep
    | TransferDestinationNumber
    | TransferDestinationSip
  )[];
  /** This is the unique identifier for the tool. */
  id: string;
  /** This is the unique identifier for the organization that this tool belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the tool was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the tool was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface OutputTool {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "output" for Output tool. */
  type: 'output';
  /** This is the unique identifier for the tool. */
  id: string;
  /** This is the unique identifier for the organization that this tool belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the tool was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the tool was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface BashTool {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "bash" for Bash tool. */
  type: 'bash';
  /** The sub type of tool. */
  subType: 'bash_20241022';
  /** This is the unique identifier for the tool. */
  id: string;
  /** This is the unique identifier for the organization that this tool belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the tool was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the tool was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
  /**
   * The name of the tool, fixed to 'bash'
   * @default "bash"
   */
  name: 'bash';
}

export interface ComputerTool {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "computer" for Computer tool. */
  type: 'computer';
  /** The sub type of tool. */
  subType: 'computer_20241022';
  /** This is the unique identifier for the tool. */
  id: string;
  /** This is the unique identifier for the organization that this tool belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the tool was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the tool was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
  /**
   * The name of the tool, fixed to 'computer'
   * @default "computer"
   */
  name: 'computer';
  /** The display width in pixels */
  displayWidthPx: number;
  /** The display height in pixels */
  displayHeightPx: number;
  /** Optional display number */
  displayNumber?: number;
}

export interface TextEditorTool {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "textEditor" for Text Editor tool. */
  type: 'textEditor';
  /** The sub type of tool. */
  subType: 'text_editor_20241022';
  /** This is the unique identifier for the tool. */
  id: string;
  /** This is the unique identifier for the organization that this tool belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the tool was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the tool was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
  /**
   * The name of the tool, fixed to 'str_replace_editor'
   * @default "str_replace_editor"
   */
  name: 'str_replace_editor';
}

export interface KnowledgeBase {
  /**
   * The name of the knowledge base
   * @example "My Knowledge Base"
   */
  name: string;
  /**
   * The provider of the knowledge base
   * @example "google"
   */
  provider: 'google';
  /**
   * The model to use for the knowledge base
   * @example "gemini-1.5-flash"
   */
  model:
    | 'gemini-2.0-flash-thinking-exp'
    | 'gemini-2.0-pro-exp-02-05'
    | 'gemini-2.0-flash'
    | 'gemini-2.0-flash-lite'
    | 'gemini-2.0-flash-lite-preview-02-05'
    | 'gemini-2.0-flash-exp'
    | 'gemini-2.0-flash-realtime-exp'
    | 'gemini-1.5-flash'
    | 'gemini-1.5-flash-002'
    | 'gemini-1.5-pro'
    | 'gemini-1.5-pro-002'
    | 'gemini-1.0-pro';
  /** A description of the knowledge base */
  description: string;
  /** The file IDs associated with this knowledge base */
  fileIds: string[];
}

export interface QueryTool {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "query" for Query tool. */
  type: 'query';
  /** The knowledge bases to query */
  knowledgeBases?: KnowledgeBase[];
  /** This is the unique identifier for the tool. */
  id: string;
  /** This is the unique identifier for the organization that this tool belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the tool was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the tool was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface GoogleCalendarCreateEventTool {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "google.calendar.event.create" for Google Calendar tool. */
  type: 'google.calendar.event.create';
  /** This is the unique identifier for the tool. */
  id: string;
  /** This is the unique identifier for the organization that this tool belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the tool was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the tool was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface GoogleSheetsRowAppendTool {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "google.sheets.row.append" for Google Sheets tool. */
  type: 'google.sheets.row.append';
  /** This is the unique identifier for the tool. */
  id: string;
  /** This is the unique identifier for the organization that this tool belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the tool was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the tool was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface CreateOutputToolDTO {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "output" for Output tool. */
  type: 'output';
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface CreateBashToolDTO {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "bash" for Bash tool. */
  type: 'bash';
  /** The sub type of tool. */
  subType: 'bash_20241022';
  /**
   * The name of the tool, fixed to 'bash'
   * @default "bash"
   */
  name: 'bash';
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface CreateComputerToolDTO {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "computer" for Computer tool. */
  type: 'computer';
  /** The sub type of tool. */
  subType: 'computer_20241022';
  /**
   * The name of the tool, fixed to 'computer'
   * @default "computer"
   */
  name: 'computer';
  /** The display width in pixels */
  displayWidthPx: number;
  /** The display height in pixels */
  displayHeightPx: number;
  /** Optional display number */
  displayNumber?: number;
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface CreateTextEditorToolDTO {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "textEditor" for Text Editor tool. */
  type: 'textEditor';
  /** The sub type of tool. */
  subType: 'text_editor_20241022';
  /**
   * The name of the tool, fixed to 'str_replace_editor'
   * @default "str_replace_editor"
   */
  name: 'str_replace_editor';
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface CreateQueryToolDTO {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "query" for Query tool. */
  type: 'query';
  /** The knowledge bases to query */
  knowledgeBases?: KnowledgeBase[];
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface CreateGoogleCalendarCreateEventToolDTO {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "google.calendar.event.create" for Google Calendar tool. */
  type: 'google.calendar.event.create';
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface CreateGoogleSheetsRowAppendToolDTO {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "google.sheets.row.append" for Google Sheets tool. */
  type: 'google.sheets.row.append';
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface UpdateDtmfToolDTO {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface UpdateEndCallToolDTO {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface UpdateFunctionToolDTO {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface UpdateGhlToolDTO {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
  metadata?: GhlToolMetadata;
}

export interface UpdateMakeToolDTO {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
  metadata?: MakeToolMetadata;
}

export interface UpdateTransferCallToolDTO {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** These are the destinations that the call can be transferred to. If no destinations are provided, server.url will be used to get the transfer destination once the tool is called. */
  destinations?: (
    | TransferDestinationAssistant
    | TransferDestinationStep
    | TransferDestinationNumber
    | TransferDestinationSip
  )[];
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface UpdateOutputToolDTO {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface UpdateBashToolDTO {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The sub type of tool. */
  subType?: 'bash_20241022';
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
  /**
   * The name of the tool, fixed to 'bash'
   * @default "bash"
   */
  name?: 'bash';
}

export interface UpdateComputerToolDTO {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The sub type of tool. */
  subType?: 'computer_20241022';
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
  /**
   * The name of the tool, fixed to 'computer'
   * @default "computer"
   */
  name?: 'computer';
  /** The display width in pixels */
  displayWidthPx?: number;
  /** The display height in pixels */
  displayHeightPx?: number;
  /** Optional display number */
  displayNumber?: number;
}

export interface UpdateTextEditorToolDTO {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The sub type of tool. */
  subType?: 'text_editor_20241022';
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
  /**
   * The name of the tool, fixed to 'str_replace_editor'
   * @default "str_replace_editor"
   */
  name?: 'str_replace_editor';
}

export interface UpdateQueryToolDTO {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The knowledge bases to query */
  knowledgeBases?: KnowledgeBase[];
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface UpdateGoogleCalendarCreateEventToolDTO {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface UpdateGoogleSheetsRowAppendToolDTO {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface CreateFileDTO {
  /**
   * This is the File you want to upload for use with the Knowledge Base.
   * @format binary
   */
  file: File;
}

export interface File {
  object?: 'file';
  status?: 'processing' | 'done' | 'failed';
  /**
   * This is the name of the file. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  originalName?: string;
  bytes?: number;
  purpose?: string;
  mimetype?: string;
  key?: string;
  path?: string;
  bucket?: string;
  url?: string;
  parsedTextUrl?: string;
  parsedTextBytes?: number;
  metadata?: object;
  /** This is the unique identifier for the file. */
  id: string;
  /** This is the unique identifier for the org that this file belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the file was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the file was last updated.
   * @format date-time
   */
  updatedAt: string;
}

export interface UpdateFileDTO {
  /**
   * This is the name of the file. This is just for your own reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface TrieveKnowledgeBaseSearchPlan {
  /** Specifies the number of top chunks to return. This corresponds to the `page_size` parameter in Trieve. */
  topK?: number;
  /** If true, stop words (specified in server/src/stop-words.txt in the git repo) will be removed. This will preserve queries that are entirely stop words. */
  removeStopWords?: boolean;
  /** This is the score threshold to filter out chunks with a score below the threshold for cosine distance metric. For Manhattan Distance, Euclidean Distance, and Dot Product, it will filter out scores above the threshold distance. This threshold applies before weight and bias modifications. If not specified, this defaults to no threshold. A threshold of 0 will default to no threshold. */
  scoreThreshold?: number;
  /** This is the search method used when searching for relevant chunks from the vector store. */
  searchType: 'fulltext' | 'semantic' | 'hybrid' | 'bm25';
}

export interface TrieveKnowledgeBase {
  /**
   * This knowledge base is provided by Trieve.
   *
   * To learn more about Trieve, visit https://trieve.ai.
   */
  provider: 'trieve';
  /** This is the name of the knowledge base. */
  name?: string;
  /**
   * This is the searching plan used when searching for relevant chunks from the vector store.
   *
   * You should configure this if you're running into these issues:
   * - Too much unnecessary context is being fed as knowledge base context.
   * - Not enough relevant context is being fed as knowledge base context.
   */
  searchPlan?: TrieveKnowledgeBaseSearchPlan;
  /** This is the plan if you want us to create/import a new vector store using Trieve. */
  createPlan?: TrieveKnowledgeBaseImport;
  /** This is the id of the knowledge base. */
  id: string;
  /** This is the org id of the knowledge base. */
  orgId: string;
}

export interface CustomKnowledgeBase {
  /** This knowledge base is bring your own knowledge base implementation. */
  provider: 'custom-knowledge-base';
  /**
   * This is where the knowledge base request will be sent.
   *
   * Request Example:
   *
   * POST https://{server.url}
   * Content-Type: application/json
   *
   * {
   *   "messsage": {
   *     "type": "knowledge-base-request",
   *     "messages": [
   *       {
   *         "role": "user",
   *         "content": "Why is ocean blue?"
   *       }
   *     ],
   *     ...other metadata about the call...
   *   }
   * }
   *
   * Response Expected:
   * ```
   * {
   *   "message": {
   *      "role": "assistant",
   *      "content": "The ocean is blue because water absorbs everything but blue.",
   *   }, // YOU CAN RETURN THE EXACT RESPONSE TO SPEAK
   *   "documents": [
   *     {
   *       "content": "The ocean is blue primarily because water absorbs colors in the red part of the light spectrum and scatters the blue light, making it more visible to our eyes.",
   *       "similarity": 1
   *     },
   *     {
   *       "content": "Blue light is scattered more by the water molecules than other colors, enhancing the blue appearance of the ocean.",
   *       "similarity": .5
   *     }
   *   ] // OR, YOU CAN RETURN AN ARRAY OF DOCUMENTS THAT WILL BE SENT TO THE MODEL
   * }
   * ```
   */
  server: Server;
  /** This is the id of the knowledge base. */
  id: string;
  /** This is the org id of the knowledge base. */
  orgId: string;
}

export interface CreateTrieveKnowledgeBaseDTO {
  /**
   * This knowledge base is provided by Trieve.
   *
   * To learn more about Trieve, visit https://trieve.ai.
   */
  provider: 'trieve';
  /** This is the name of the knowledge base. */
  name?: string;
  /**
   * This is the searching plan used when searching for relevant chunks from the vector store.
   *
   * You should configure this if you're running into these issues:
   * - Too much unnecessary context is being fed as knowledge base context.
   * - Not enough relevant context is being fed as knowledge base context.
   */
  searchPlan?: TrieveKnowledgeBaseSearchPlan;
  /** This is the plan if you want us to create/import a new vector store using Trieve. */
  createPlan?: TrieveKnowledgeBaseImport;
}

export interface UpdateTrieveKnowledgeBaseDTO {
  /** This is the name of the knowledge base. */
  name?: string;
  /**
   * This is the searching plan used when searching for relevant chunks from the vector store.
   *
   * You should configure this if you're running into these issues:
   * - Too much unnecessary context is being fed as knowledge base context.
   * - Not enough relevant context is being fed as knowledge base context.
   */
  searchPlan?: TrieveKnowledgeBaseSearchPlan;
  /** This is the plan if you want us to create/import a new vector store using Trieve. */
  createPlan?: TrieveKnowledgeBaseImport;
}

export interface UpdateCustomKnowledgeBaseDTO {
  /**
   * This is where the knowledge base request will be sent.
   *
   * Request Example:
   *
   * POST https://{server.url}
   * Content-Type: application/json
   *
   * {
   *   "messsage": {
   *     "type": "knowledge-base-request",
   *     "messages": [
   *       {
   *         "role": "user",
   *         "content": "Why is ocean blue?"
   *       }
   *     ],
   *     ...other metadata about the call...
   *   }
   * }
   *
   * Response Expected:
   * ```
   * {
   *   "message": {
   *      "role": "assistant",
   *      "content": "The ocean is blue because water absorbs everything but blue.",
   *   }, // YOU CAN RETURN THE EXACT RESPONSE TO SPEAK
   *   "documents": [
   *     {
   *       "content": "The ocean is blue primarily because water absorbs colors in the red part of the light spectrum and scatters the blue light, making it more visible to our eyes.",
   *       "similarity": 1
   *     },
   *     {
   *       "content": "Blue light is scattered more by the water molecules than other colors, enhancing the blue appearance of the ocean.",
   *       "similarity": .5
   *     }
   *   ] // OR, YOU CAN RETURN AN ARRAY OF DOCUMENTS THAT WILL BE SENT TO THE MODEL
   * }
   * ```
   */
  server?: Server;
}

export interface TrieveKnowledgeBaseChunkPlan {
  /** These are the file ids that will be used to create the vector store. To upload files, use the `POST /files` endpoint. */
  fileIds?: string[];
  /** These are the websites that will be used to create the vector store. */
  websites?: string[];
  /** This is an optional field which allows you to specify the number of splits you want per chunk. If not specified, the default 20 is used. However, you may want to use a different number. */
  targetSplitsPerChunk?: number;
  /** This is an optional field which allows you to specify the delimiters to use when splitting the file before chunking the text. If not specified, the default [.!?\n] are used to split into sentences. However, you may want to use spaces or other delimiters. */
  splitDelimiters?: string[];
  /** This is an optional field which allows you to specify whether or not to rebalance the chunks created from the file. If not specified, the default true is used. If true, Trieve will evenly distribute remainder splits across chunks such that 66 splits with a target_splits_per_chunk of 20 will result in 3 chunks with 22 splits each. */
  rebalanceChunks?: boolean;
}

export interface TrieveKnowledgeBaseCreate {
  /** This is to create a new dataset on Trieve. */
  type: 'create';
  /** These are the chunk plans used to create the dataset. */
  chunkPlans: TrieveKnowledgeBaseChunkPlan[];
}

export interface TrieveKnowledgeBaseImport {
  /** This is to import an existing dataset from Trieve. */
  type: 'import';
  /** This is the `datasetId` of the dataset on your Trieve account. */
  providerId: string;
}

export interface UpdateWorkflowDTO {
  nodes?: (Say | Gather | ApiRequest | Hangup | Transfer)[];
  /** @maxLength 80 */
  name?: string;
  edges?: Edge[];
}

export interface Squad {
  /** This is the name of the squad. */
  name?: string;
  /**
   * This is the list of assistants that make up the squad.
   *
   * The call will start with the first assistant in the list.
   */
  members: SquadMemberDTO[];
  /**
   * This can be used to override all the assistants' settings and provide values for their template variables.
   *
   * Both `membersOverrides` and `members[n].assistantOverrides` can be used together. First, `members[n].assistantOverrides` is applied. Then, `membersOverrides` is applied as a global override.
   */
  membersOverrides?: AssistantOverrides;
  /** This is the unique identifier for the squad. */
  id: string;
  /** This is the unique identifier for the org that this squad belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the squad was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the squad was last updated.
   * @format date-time
   */
  updatedAt: string;
}

export interface UpdateSquadDTO {
  /** This is the name of the squad. */
  name?: string;
  /**
   * This is the list of assistants that make up the squad.
   *
   * The call will start with the first assistant in the list.
   */
  members: SquadMemberDTO[];
  /**
   * This can be used to override all the assistants' settings and provide values for their template variables.
   *
   * Both `membersOverrides` and `members[n].assistantOverrides` can be used together. First, `members[n].assistantOverrides` is applied. Then, `membersOverrides` is applied as a global override.
   */
  membersOverrides?: AssistantOverrides;
}

export interface TesterPlan {
  /**
   * Pass a transient assistant to use for the test assistant.
   *
   * Make sure to write a detailed system prompt for a test assistant, and use the {{test.script}} variable to access the test script.
   */
  assistant?: CreateAssistantDTO;
  /**
   * Pass an assistant id that can be access
   *
   * Make sure to write a detailed system prompt for the test assistant, and use the {{test.script}} variable to access the test script.
   */
  assistantId?: string;
  /**
   * Add any assistant overrides to the test assistant.
   *
   * One use case is if you want to pass custom variables into the test using variableValues, that you can then access in the script
   * and rubric using {{varName}}.
   */
  assistantOverrides?: AssistantOverrides;
}

export interface TestSuitePhoneNumber {
  /** This is the provider of the phone number. */
  provider: 'test-suite';
  /**
   * This is the phone number that is being tested.
   * @maxLength 50
   */
  number: string;
}

export interface TargetPlan {
  /** This is the phoneNumberId that is being tested. */
  phoneNumberId?: string;
  /** This is the phone number that is being tested. Only use this if you have not imported the phone number to Vapi. */
  phoneNumber?: TestSuitePhoneNumber;
}

export interface TestSuite {
  /** This is the unique identifier for the test suite. */
  id: string;
  /** This is the unique identifier for the org that this test suite belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the test suite was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the test suite was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of the test suite.
   * @maxLength 80
   */
  name?: string;
  /**
   * This is the phone number ID associated with this test suite.
   * @deprecated
   */
  phoneNumberId?: string;
  /**
   * Override the default tester plan by providing custom assistant configuration for the test agent.
   *
   * We recommend only using this if you are confident, as we have already set sensible defaults on the tester plan.
   */
  testerPlan?: TesterPlan;
  /** These are the configuration for the assistant / phone number that is being tested. */
  targetPlan?: TargetPlan;
}

export interface TestSuitesPaginatedResponse {
  results: TestSuite[];
  metadata: PaginationMeta;
}

export interface CreateTestSuiteDto {
  /**
   * This is the name of the test suite.
   * @maxLength 80
   */
  name?: string;
  /**
   * This is the phone number ID associated with this test suite.
   * @deprecated
   */
  phoneNumberId?: string;
  /**
   * Override the default tester plan by providing custom assistant configuration for the test agent.
   *
   * We recommend only using this if you are confident, as we have already set sensible defaults on the tester plan.
   */
  testerPlan?: TesterPlan;
  /** These are the configuration for the assistant / phone number that is being tested. */
  targetPlan?: TargetPlan;
}

export interface UpdateTestSuiteDto {
  /**
   * This is the name of the test suite.
   * @maxLength 80
   */
  name?: string;
  /**
   * This is the phone number ID associated with this test suite.
   * @deprecated
   */
  phoneNumberId?: string;
  /**
   * Override the default tester plan by providing custom assistant configuration for the test agent.
   *
   * We recommend only using this if you are confident, as we have already set sensible defaults on the tester plan.
   */
  testerPlan?: TesterPlan;
  /** These are the configuration for the assistant / phone number that is being tested. */
  targetPlan?: TargetPlan;
}

export interface TestSuiteTestVoice {
  /** These are the scorers used to evaluate the test. */
  scorers: TestSuiteTestScorerAI[];
  /**
   * This is the type of the test, which must be voice.
   * @maxLength 100
   */
  type: 'voice';
  /** This is the unique identifier for the test. */
  id: string;
  /** This is the unique identifier for the test suite this test belongs to. */
  testSuiteId: string;
  /** This is the unique identifier for the organization this test belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the test was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the test was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of the test.
   * @maxLength 80
   */
  name?: string;
  /**
   * This is the script to be used for the voice test.
   * @maxLength 10000
   */
  script: string;
  /**
   * This is the number of attempts allowed for the test.
   * @min 1
   * @max 10
   */
  numAttempts?: number;
}

export interface TestSuiteTestChat {
  /** These are the scorers used to evaluate the test. */
  scorers: TestSuiteTestScorerAI[];
  /**
   * This is the type of the test, which must be chat.
   * @maxLength 100
   */
  type: 'chat';
  /** This is the unique identifier for the test. */
  id: string;
  /** This is the unique identifier for the test suite this test belongs to. */
  testSuiteId: string;
  /** This is the unique identifier for the organization this test belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the test was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the test was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of the test.
   * @maxLength 80
   */
  name?: string;
  /**
   * This is the script to be used for the chat test.
   * @maxLength 10000
   */
  script: string;
  /**
   * This is the number of attempts allowed for the test.
   * @min 1
   * @max 10
   */
  numAttempts?: number;
}

export interface CreateTestSuiteTestVoiceDto {
  /** These are the scorers used to evaluate the test. */
  scorers: TestSuiteTestScorerAI[];
  /**
   * This is the type of the test, which must be voice.
   * @maxLength 100
   */
  type: 'voice';
  /**
   * This is the script to be used for the voice test.
   * @maxLength 10000
   */
  script: string;
  /**
   * This is the number of attempts allowed for the test.
   * @min 1
   * @max 10
   */
  numAttempts?: number;
  /**
   * This is the name of the test.
   * @maxLength 80
   */
  name?: string;
}

export interface CreateTestSuiteTestChatDto {
  /** These are the scorers used to evaluate the test. */
  scorers: TestSuiteTestScorerAI[];
  /**
   * This is the type of the test, which must be chat.
   * @maxLength 100
   */
  type: 'chat';
  /**
   * This is the script to be used for the chat test.
   * @maxLength 10000
   */
  script: string;
  /**
   * This is the number of attempts allowed for the test.
   * @min 1
   * @max 10
   */
  numAttempts?: number;
  /**
   * This is the name of the test.
   * @maxLength 80
   */
  name?: string;
}

export interface UpdateTestSuiteTestVoiceDto {
  /** These are the scorers used to evaluate the test. */
  scorers?: TestSuiteTestScorerAI[];
  /**
   * This is the type of the test, which must be voice.
   * @maxLength 100
   */
  type?: 'voice';
  /**
   * This is the name of the test.
   * @maxLength 80
   */
  name?: string;
  /**
   * This is the script to be used for the voice test.
   * @maxLength 10000
   */
  script?: string;
  /**
   * This is the number of attempts allowed for the test.
   * @min 1
   * @max 10
   */
  numAttempts?: number;
}

export interface UpdateTestSuiteTestChatDto {
  /** These are the scorers used to evaluate the test. */
  scorers?: TestSuiteTestScorerAI[];
  /**
   * This is the type of the test, which must be chat.
   * @maxLength 100
   */
  type?: 'chat';
  /**
   * This is the name of the test.
   * @maxLength 80
   */
  name?: string;
  /**
   * This is the script to be used for the chat test.
   * @maxLength 10000
   */
  script?: string;
  /**
   * This is the number of attempts allowed for the test.
   * @min 1
   * @max 10
   */
  numAttempts?: number;
}

export interface TestSuiteTestScorerAI {
  /**
   * This is the type of the scorer, which must be AI.
   * @maxLength 100
   */
  type: 'ai';
  /**
   * This is the rubric used by the AI scorer.
   * @maxLength 1000
   */
  rubric: string;
}

export interface TestSuiteTestsPaginatedResponse {
  /** A list of test suite tests. */
  results: (TestSuiteTestVoice | TestSuiteTestChat)[];
  /** Metadata about the pagination. */
  metadata: PaginationMeta;
}

export interface TestSuiteRunScorerAI {
  /**
   * This is the type of the scorer, which must be AI.
   * @maxLength 100
   */
  type: 'ai';
  /**
   * This is the result of the test suite.
   * @maxLength 100
   */
  result: 'pass' | 'fail';
  /**
   * This is the reasoning provided by the AI scorer.
   * @maxLength 10000
   */
  reasoning: string;
  /**
   * This is the rubric used by the AI scorer.
   * @maxLength 1000
   */
  rubric: string;
}

export interface TestSuiteRunTestAttemptCall {
  /** This is the artifact associated with the call. */
  artifact: Artifact;
}

export interface TestSuiteRunTestAttempt {
  /** These are the results of the scorers used to evaluate the test attempt. */
  scorerResults: TestSuiteRunScorerAI[];
  /** This is the call made during the test attempt. */
  call: TestSuiteRunTestAttemptCall;
}

export interface TestSuiteRunTestResult {
  /** This is the test that was run. */
  test: TestSuiteTestVoice;
  /** These are the attempts made for this test. */
  attempts: TestSuiteRunTestAttempt[];
}

export interface TestSuiteRun {
  /** This is the current status of the test suite run. */
  status: 'queued' | 'in-progress' | 'completed' | 'failed';
  /** This is the unique identifier for the test suite run. */
  id: string;
  /** This is the unique identifier for the organization this run belongs to. */
  orgId: string;
  /** This is the unique identifier for the test suite this run belongs to. */
  testSuiteId: string;
  /**
   * This is the ISO 8601 date-time string of when the test suite run was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the test suite run was last updated.
   * @format date-time
   */
  updatedAt: string;
  /** These are the results of the tests in this test suite run. */
  testResults: TestSuiteRunTestResult[];
  /**
   * This is the name of the test suite run.
   * @maxLength 80
   */
  name?: string;
}

export interface TestSuiteRunsPaginatedResponse {
  results: TestSuiteRun[];
  metadata: PaginationMeta;
}

export interface CreateTestSuiteRunDto {
  /**
   * This is the name of the test suite run.
   * @maxLength 80
   */
  name?: string;
}

export interface UpdateTestSuiteRunDto {
  /**
   * This is the name of the test suite run.
   * @maxLength 80
   */
  name?: string;
}

export interface Metrics {
  orgId: string;
  rangeStart: string;
  rangeEnd: string;
  bill: number;
  billWithinBillingLimit: boolean;
  billDailyBreakdown: object;
  callActive: number;
  callActiveWithinConcurrencyLimit: boolean;
  callMinutes: number;
  callMinutesDailyBreakdown: object;
  callMinutesAverage: number;
  callMinutesAverageDailyBreakdown: object;
  callCount: number;
  callCountDailyBreakdown: object;
}

export interface TimeRange {
  /**
   * This is the time step for aggregations.
   *
   * If not provided, defaults to returning for the entire time range.
   */
  step?:
    | 'second'
    | 'minute'
    | 'hour'
    | 'day'
    | 'week'
    | 'month'
    | 'quarter'
    | 'year'
    | 'decade'
    | 'century'
    | 'millennium';
  /**
   * This is the start date for the time range.
   *
   * If not provided, defaults to the 7 days ago.
   * @format date-time
   */
  start?: string;
  /**
   * This is the end date for the time range.
   *
   * If not provided, defaults to now.
   * @format date-time
   */
  end?: string;
  /**
   * This is the timezone you want to set for the query.
   *
   * If not provided, defaults to UTC.
   */
  timezone?: string;
}

export interface AnalyticsOperation {
  /** This is the aggregation operation you want to perform. */
  operation: 'sum' | 'avg' | 'count' | 'min' | 'max' | 'history';
  /** This is the columns you want to perform the aggregation operation on. */
  column:
    | 'id'
    | 'cost'
    | 'costBreakdown.llm'
    | 'costBreakdown.stt'
    | 'costBreakdown.tts'
    | 'costBreakdown.vapi'
    | 'costBreakdown.ttsCharacters'
    | 'costBreakdown.llmPromptTokens'
    | 'costBreakdown.llmCompletionTokens'
    | 'duration'
    | 'concurrency'
    | 'minutesUsed';
  /**
   * This is the alias for column name returned. Defaults to `${operation}${column}`.
   * @maxLength 40
   */
  alias?: string;
}

export interface AnalyticsQuery {
  /** This is the table you want to query. */
  table: 'call' | 'subscription';
  /** This is the list of columns you want to group by. */
  groupBy?: 'type' | 'assistantId' | 'endedReason' | 'analysis.successEvaluation' | 'status';
  /**
   * This is the name of the query. This will be used to identify the query in the response.
   * @maxLength 40
   */
  name: string;
  /** This is the time range for the query. */
  timeRange?: TimeRange;
  /** This is the list of operations you want to perform. */
  operations: AnalyticsOperation[];
}

export interface AnalyticsQueryDTO {
  /** This is the list of metric queries you want to perform. */
  queries: AnalyticsQuery[];
}

export interface AnalyticsQueryResult {
  /** This is the unique key for the query. */
  name: string;
  /** This is the time range for the query. */
  timeRange: TimeRange;
  /**
   * This is the result of the query, a list of unique groups with result of their aggregations.
   *
   * Example:
   * "result": [
   *   { "date": "2023-01-01", "assistantId": "123", "endedReason": "customer-ended-call", "sumDuration": 120, "avgCost": 10.5 },
   *   { "date": "2023-01-02", "assistantId": "123", "endedReason": "customer-did-not-give-microphone-permission", "sumDuration": 0, "avgCost": 0 },
   *   // Additional results
   * ]
   */
  result: object[];
}

export interface CallLogPrivileged {
  /** This is the unique identifier for the call. */
  callId: string;
  /** This is the unique identifier for the org that this call log belongs to. */
  orgId: string;
  /** This is the log message associated with the call. */
  log: string;
  /** This is the level of the log message. */
  level: 'INFO' | 'LOG' | 'WARN' | 'ERROR' | 'CHECKPOINT';
  /**
   * This is the ISO 8601 date-time string of when the log was created.
   * @format date-time
   */
  time: string;
}

export interface CallLogsPaginatedResponse {
  results: CallLogPrivileged[];
  metadata: PaginationMeta;
}

export interface Error {
  message: string;
}

export interface Log {
  /** This is the timestamp at which the log was written. */
  time: string;
  /** This is the unique identifier for the org that this log belongs to. */
  orgId: string;
  /** This is the type of the log. */
  type: 'API' | 'Webhook' | 'Call' | 'Provider';
  /** This is the type of the webhook, given the log is from a webhook. */
  webhookType?: string;
  /** This is the specific resource, relevant only to API logs. */
  resource?:
    | 'org'
    | 'assistant'
    | 'analytics'
    | 'credential'
    | 'phone-number'
    | 'block'
    | 'voice-library'
    | 'provider'
    | 'tool'
    | 'token'
    | 'template'
    | 'squad'
    | 'call'
    | 'file'
    | 'metric'
    | 'log';
  /**
   * 'This is how long the request took.
   * @min 0
   */
  requestDurationSeconds?: number;
  /** This is the timestamp at which the request began. */
  requestStartedAt?: string;
  /** This is the timestamp at which the request finished. */
  requestFinishedAt?: string;
  /** This is the body of the request. */
  requestBody?: object;
  /** This is the request method. */
  requestHttpMethod?: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';
  /** This is the request URL. */
  requestUrl?: string;
  /** This is the request path. */
  requestPath?: string;
  /** This is the request query. */
  requestQuery?: string;
  /** This the HTTP status code of the response. */
  responseHttpCode?: number;
  /** This is the request IP address. */
  requestIpAddress?: string;
  /** This is the origin of the request */
  requestOrigin?: string;
  /** This is the body of the response. */
  responseBody?: object;
  /** These are the headers of the request. */
  requestHeaders?: object;
  /** This is the error, if one occurred. */
  error?: Error;
  /** This is the ID of the assistant. */
  assistantId?: string;
  /** This is the ID of the phone number. */
  phoneNumberId?: string;
  /** This is the ID of the customer. */
  customerId?: string;
  /** This is the ID of the squad. */
  squadId?: string;
  /** This is the ID of the call. */
  callId?: string;
}

export interface LogsPaginatedResponse {
  results: Log[];
  metadata: PaginationMeta;
}

export interface CreateOrgDTO {
  /**
   * When this is enabled, no logs, recordings, or transcriptions will be stored. At the end of the call, you will still receive an end-of-call-report message to store on your server. Defaults to false.
   * When HIPAA is enabled, only OpenAI/Custom LLM or Azure Providers will be available for LLM and Voice respectively.
   * This is due to the compliance requirements of HIPAA. Other providers may not meet these requirements.
   * @example false
   */
  hipaaEnabled?: boolean;
  /** This is the ID of the subscription the org belongs to. */
  subscriptionId?: string;
  /**
   * This is the name of the org. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /** This is the channel of the org. There is the cluster the API traffic for the org will be directed. */
  channel?: 'default' | 'weekly';
  /**
   * This is the monthly billing limit for the org. To go beyond $1000/mo, please contact us at support@vapi.ai.
   * @min 0
   * @max 1000
   */
  billingLimit?: number;
  /**
   * This is where Vapi will send webhooks. You can find all webhooks available along with their shape in ServerMessage schema.
   *
   * The order of precedence is:
   *
   * 1. assistant.server
   * 2. phoneNumber.server
   * 3. org.server
   */
  server?: Server;
  /**
   * This is the concurrency limit for the org. This is the maximum number of calls that can be active at any given time. To go beyond 10, please contact us at support@vapi.ai.
   * @min 1
   * @max 10
   */
  concurrencyLimit?: number;
  /**
   * Stores the information about the compliance plan enforced at the organization level. Currently pciEnabled is supported through this field.
   * When this is enabled, any logs, recordings, or transcriptions will be shipped to the customer endpoints if provided else lost.
   * At the end of the call, you will receive an end-of-call-report message to store on your server, if webhook is provided.
   * Defaults to false.
   * When PCI is enabled, only PCI-compliant Providers will be available for LLM, Voice and transcribers.
   * This is due to the compliance requirements of PCI. Other providers may not meet these requirements.
   */
  compliancePlan?: CompliancePlan;
}

export interface AutoReloadPlan {
  /** This the amount of credits to reload. */
  credits: number;
  /** This is the limit at which the reload is triggered. */
  threshold: number;
}

export interface InvoicePlan {
  /** This is the name of the company. */
  companyName?: string;
  /** This is the address of the company. */
  companyAddress?: string;
  /** This is the tax ID of the company. */
  companyTaxId?: string;
  /** This is the preferred invoicing email of the company. If not specified, defaults to the subscription's email. */
  companyEmail?: string;
}

export interface Subscription {
  /** This is the unique identifier for the subscription. */
  id: string;
  /**
   * This is the timestamp when the subscription was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the timestamp when the subscription was last updated.
   * @format date-time
   */
  updatedAt: string;
  /** This is the type / tier of the subscription. */
  type: 'trial' | 'pay-as-you-go' | 'enterprise';
  /**
   * This is the status of the subscription. Past due subscriptions are subscriptions
   * with past due payments.
   */
  status: 'active' | 'frozen';
  /**
   * This is the number of credits the subscription currently has.
   *
   * Note: This is a string to avoid floating point precision issues.
   */
  credits: string;
  /**
   * This is the total number of active calls (concurrency) across all orgs under this subscription.
   * @min 1
   */
  concurrencyCounter: number;
  /**
   * This is the default concurrency limit for the subscription.
   * @min 1
   */
  concurrencyLimitIncluded: number;
  /**
   * This is the number of free phone numbers the subscription has
   * @min 1
   */
  phoneNumbersCounter?: number;
  /**
   * This is the maximum number of free phone numbers the subscription can have
   * @min 1
   */
  phoneNumbersIncluded?: number;
  /**
   * This is the purchased add-on concurrency limit for the subscription.
   * @min 1
   */
  concurrencyLimitPurchased: number;
  /** This is the ID of the monthly job that charges for subscription add ons and phone numbers. */
  monthlyChargeScheduleId?: number;
  /**
   * This is the ID of the monthly job that checks whether the credit balance of the subscription
   * is sufficient for the monthly charge.
   */
  monthlyCreditCheckScheduleId?: number;
  /** This is the Stripe customer ID. */
  stripeCustomerId?: string;
  /** This is the Stripe payment ID. */
  stripePaymentMethodId?: string;
  /** If this flag is true, then the user has purchased slack support. */
  slackSupportEnabled?: boolean;
  /** If this subscription has a slack support subscription, the slack channel's ID will be stored here. */
  slackChannelId?: string;
  /**
   * This is the HIPAA enabled flag for the subscription. It determines whether orgs under this
   * subscription have the option to enable HIPAA compliance.
   */
  hipaaEnabled?: boolean;
  /** This is the ID for the Common Paper agreement outlining the HIPAA contract. */
  hipaaCommonPaperAgreementId?: string;
  /**
   * This is the Stripe fingerprint of the payment method (card). It allows us
   * to detect users who try to abuse our system through multiple sign-ups.
   */
  stripePaymentMethodFingerprint?: string;
  /** This is the customer's email on Stripe. */
  stripeCustomerEmail?: string;
  /** This is the email of the referrer for the subscription. */
  referredByEmail?: string;
  /** This is the auto reload plan configured for the subscription. */
  autoReloadPlan?: AutoReloadPlan;
  /**
   * The number of minutes included in the subscription.
   * @min 0
   */
  minutesIncluded?: number;
  /**
   * The number of minutes used in the subscription.
   * @min 0
   */
  minutesUsed?: number;
  /**
   * This is the timestamp at which the number of monthly free minutes is scheduled to reset at.
   * @format date-time
   */
  minutesUsedNextResetAt?: string;
  /** The per minute charge on minutes that exceed the included minutes. Enterprise only. */
  minutesOverageCost?: number;
  /** The list of providers included in the subscription. Enterprise only. */
  providersIncluded?: string[];
  /**
   * The maximum number of outbound calls this subscription may make in a day. Resets every night.
   * @min 1
   */
  outboundCallsDailyLimit?: number;
  /**
   * The current number of outbound calls the subscription has made in the current day.
   * @min 1
   */
  outboundCallsCounter?: number;
  /**
   * This is the timestamp at which the outbound calls counter is scheduled to reset at.
   * @format date-time
   */
  outboundCallsCounterNextResetAt?: string;
  /** This is the IDs of the coupons applicable to this subscription. */
  couponIds?: string[];
  /** This is the number of credits left obtained from a coupon. */
  couponUsageLeft?: string;
  /** This is the invoice plan for the subscription. */
  invoicePlan?: InvoicePlan;
  /**
   * This is the PCI enabled flag for the subscription. It determines whether orgs under this
   * subscription have the option to enable PCI compliance.
   */
  pciEnabled?: boolean;
  /** This is the ID for the Common Paper agreement outlining the PCI contract. */
  pciCommonPaperAgreementId?: string;
}

export interface OrgPlan {
  includedProviders?: object[];
  includedMinutes?: number;
  costPerOverageMinute?: number;
}

export interface Org {
  /**
   * When this is enabled, no logs, recordings, or transcriptions will be stored. At the end of the call, you will still receive an end-of-call-report message to store on your server. Defaults to false.
   * When HIPAA is enabled, only OpenAI/Custom LLM or Azure Providers will be available for LLM and Voice respectively.
   * This is due to the compliance requirements of HIPAA. Other providers may not meet these requirements.
   * @example false
   */
  hipaaEnabled?: boolean;
  subscription?: Subscription;
  /** This is the ID of the subscription the org belongs to. */
  subscriptionId?: string;
  /** This is the unique identifier for the org. */
  id: string;
  /**
   * This is the ISO 8601 date-time string of when the org was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the org was last updated.
   * @format date-time
   */
  updatedAt: string;
  /** This is the Stripe customer for the org. */
  stripeCustomerId?: string;
  /** This is the subscription for the org. */
  stripeSubscriptionId?: string;
  /** This is the subscription's subscription item. */
  stripeSubscriptionItemId?: string;
  /**
   * This is the subscription's current period start.
   * @format date-time
   */
  stripeSubscriptionCurrentPeriodStart?: string;
  /** This is the subscription's status. */
  stripeSubscriptionStatus?: string;
  /** This is the plan for the org. */
  plan?: OrgPlan;
  /**
   * This is the name of the org. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /** This is the channel of the org. There is the cluster the API traffic for the org will be directed. */
  channel?: 'default' | 'weekly';
  /**
   * This is the monthly billing limit for the org. To go beyond $1000/mo, please contact us at support@vapi.ai.
   * @min 0
   * @max 1000
   */
  billingLimit?: number;
  /**
   * This is where Vapi will send webhooks. You can find all webhooks available along with their shape in ServerMessage schema.
   *
   * The order of precedence is:
   *
   * 1. assistant.server
   * 2. phoneNumber.server
   * 3. org.server
   */
  server?: Server;
  /**
   * This is the concurrency limit for the org. This is the maximum number of calls that can be active at any given time. To go beyond 10, please contact us at support@vapi.ai.
   * @min 1
   * @max 10
   */
  concurrencyLimit?: number;
  /**
   * Stores the information about the compliance plan enforced at the organization level. Currently pciEnabled is supported through this field.
   * When this is enabled, any logs, recordings, or transcriptions will be shipped to the customer endpoints if provided else lost.
   * At the end of the call, you will receive an end-of-call-report message to store on your server, if webhook is provided.
   * Defaults to false.
   * When PCI is enabled, only PCI-compliant Providers will be available for LLM, Voice and transcribers.
   * This is due to the compliance requirements of PCI. Other providers may not meet these requirements.
   */
  compliancePlan?: CompliancePlan;
}

export interface UpdateOrgDTO {
  /**
   * When this is enabled, no logs, recordings, or transcriptions will be stored. At the end of the call, you will still receive an end-of-call-report message to store on your server. Defaults to false.
   * When HIPAA is enabled, only OpenAI/Custom LLM or Azure Providers will be available for LLM and Voice respectively.
   * This is due to the compliance requirements of HIPAA. Other providers may not meet these requirements.
   * @example false
   */
  hipaaEnabled?: boolean;
  /** This is the ID of the subscription the org belongs to. */
  subscriptionId?: string;
  /**
   * This is the name of the org. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /** This is the channel of the org. There is the cluster the API traffic for the org will be directed. */
  channel?: 'default' | 'weekly';
  /**
   * This is the monthly billing limit for the org. To go beyond $1000/mo, please contact us at support@vapi.ai.
   * @min 0
   * @max 1000
   */
  billingLimit?: number;
  /**
   * This is where Vapi will send webhooks. You can find all webhooks available along with their shape in ServerMessage schema.
   *
   * The order of precedence is:
   *
   * 1. assistant.server
   * 2. phoneNumber.server
   * 3. org.server
   */
  server?: Server;
  /**
   * This is the concurrency limit for the org. This is the maximum number of calls that can be active at any given time. To go beyond 10, please contact us at support@vapi.ai.
   * @min 1
   * @max 10
   */
  concurrencyLimit?: number;
  /**
   * Stores the information about the compliance plan enforced at the organization level. Currently pciEnabled is supported through this field.
   * When this is enabled, any logs, recordings, or transcriptions will be shipped to the customer endpoints if provided else lost.
   * At the end of the call, you will receive an end-of-call-report message to store on your server, if webhook is provided.
   * Defaults to false.
   * When PCI is enabled, only PCI-compliant Providers will be available for LLM, Voice and transcribers.
   * This is due to the compliance requirements of PCI. Other providers may not meet these requirements.
   */
  compliancePlan?: CompliancePlan;
}

export interface User {
  /** This is the unique identifier for the profile or user. */
  id: string;
  /**
   * This is the ISO 8601 date-time string of when the profile was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the profile was last updated.
   * @format date-time
   */
  updatedAt: string;
  /** This is the email of the user that is associated with the profile. */
  email: string;
  /** This is the full name of the user that is associated with the profile. */
  fullName?: string;
}

export interface InviteUserDTO {
  /** @maxItems 100 */
  emails: string[];
  role: 'admin' | 'editor' | 'viewer';
  redirectTo?: string;
}

export interface UpdateUserRoleDTO {
  userId: string;
  role: 'admin' | 'editor' | 'viewer';
}

export interface TokenRestrictions {
  /** This determines whether the token is enabled or disabled. Default is true, it's enabled. */
  enabled?: boolean;
  /**
   * This determines the allowed origins for this token. Validates the `Origin` header. Default is any origin.
   *
   * Only relevant for `public` tokens.
   */
  allowedOrigins?: string[];
  /**
   * This determines which assistantIds can be used when creating a call. Default is any assistantId.
   *
   * Only relevant for `public` tokens.
   */
  allowedAssistantIds?: string[];
  /**
   * This determines whether transient assistants can be used when creating a call. Default is true.
   *
   * If `allowedAssistantIds` is provided, this is automatically false.
   *
   * Only relevant for `public` tokens.
   */
  allowTransientAssistant?: boolean;
}

export interface CreateTokenDTO {
  /** This is the tag for the token. It represents its scope. */
  tag?: 'private' | 'public';
  /**
   * This is the name of the token. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /** This are the restrictions for the token. */
  restrictions?: TokenRestrictions;
}

export interface Token {
  /** This is the tag for the token. It represents its scope. */
  tag?: 'private' | 'public';
  /** This is the unique identifier for the token. */
  id: string;
  /** This is unique identifier for the org that this token belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the token was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the token was last updated.
   * @format date-time
   */
  updatedAt: string;
  /** This is the token key. */
  value: string;
  /**
   * This is the name of the token. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /** This are the restrictions for the token. */
  restrictions?: TokenRestrictions;
}

export interface UpdateTokenDTO {
  /** This is the tag for the token. It represents its scope. */
  tag?: 'private' | 'public';
  /**
   * This is the name of the token. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /** This are the restrictions for the token. */
  restrictions?: TokenRestrictions;
}

export interface AnthropicCredential {
  provider: 'anthropic';
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface AnyscaleCredential {
  provider: 'anyscale';
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface AssemblyAICredential {
  provider: 'assembly-ai';
  /** This is not returned in the API. */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface AzureCredential {
  provider: 'azure';
  /**
   * This is the service being used in Azure.
   * @default "speech"
   */
  service: 'speech' | 'blob_storage';
  /** This is the region of the Azure resource. */
  region?:
    | 'australia'
    | 'canadaeast'
    | 'canadacentral'
    | 'eastus2'
    | 'eastus'
    | 'france'
    | 'india'
    | 'japaneast'
    | 'japanwest'
    | 'uaenorth'
    | 'northcentralus'
    | 'norway'
    | 'southcentralus'
    | 'swedencentral'
    | 'switzerland'
    | 'uk'
    | 'westus'
    | 'westus3';
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey?: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
  /** This is the bucket plan that can be provided to store call artifacts in Azure Blob Storage. */
  bucketPlan?: AzureBlobStorageBucketPlan;
}

export interface AzureOpenAICredential {
  provider: 'azure-openai';
  region:
    | 'australia'
    | 'canadaeast'
    | 'canadacentral'
    | 'eastus2'
    | 'eastus'
    | 'france'
    | 'india'
    | 'japaneast'
    | 'japanwest'
    | 'uaenorth'
    | 'northcentralus'
    | 'norway'
    | 'southcentralus'
    | 'swedencentral'
    | 'switzerland'
    | 'uk'
    | 'westus'
    | 'westus3';
  /** @example ["gpt-4-0125-preview","gpt-4-0613"] */
  models:
    | 'gpt-4o-2024-11-20'
    | 'gpt-4o-2024-08-06'
    | 'gpt-4o-mini-2024-07-18'
    | 'gpt-4o-2024-05-13'
    | 'gpt-4-turbo-2024-04-09'
    | 'gpt-4-0125-preview'
    | 'gpt-4-1106-preview'
    | 'gpt-4-0613'
    | 'gpt-35-turbo-0125'
    | 'gpt-35-turbo-1106';
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  openAIKey: string;
  /** This is not returned in the API. */
  ocpApimSubscriptionKey?: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
  /** @maxLength 10000 */
  openAIEndpoint: string;
}

export interface ByoSipTrunkCredential {
  /** This can be used to bring your own SIP trunks or to connect to a Carrier. */
  provider?: 'byo-sip-trunk';
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
  /** This is the list of SIP trunk's gateways. */
  gateways: SipTrunkGateway[];
  /** This can be used to configure the outbound authentication if required by the SIP trunk. */
  outboundAuthenticationPlan?: SipTrunkOutboundAuthenticationPlan;
  /**
   * This ensures the outbound origination attempts have a leading plus. Defaults to false to match conventional telecom behavior.
   *
   * Usage:
   * - Vonage/Twilio requires leading plus for all outbound calls. Set this to true.
   *
   * @default false
   */
  outboundLeadingPlusEnabled?: boolean;
  /**
   * This can be used to configure the tech prefix on outbound calls. This is an advanced property.
   * @maxLength 10000
   */
  techPrefix?: string;
  /**
   * This can be used to enable the SIP diversion header for authenticating the calling number if the SIP trunk supports it. This is an advanced property.
   * @maxLength 10000
   */
  sipDiversionHeader?: string;
  /** This is an advanced configuration for enterprise deployments. This uses the onprem SBC to trunk into the SIP trunk's `gateways`, rather than the managed SBC provided by Vapi. */
  sbcConfiguration?: SbcConfiguration;
}

export interface CartesiaCredential {
  provider: 'cartesia';
  /** This is not returned in the API. */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CerebrasCredential {
  provider: 'cerebras';
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CloudflareCredential {
  /** Credential provider. Only allowed value is cloudflare */
  provider: 'cloudflare';
  /** Cloudflare Account Id. */
  accountId?: string;
  /** Cloudflare API Key / Token. */
  apiKey?: string;
  /** Cloudflare Account Email. */
  accountEmail?: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
  /** This is the bucket plan that can be provided to store call artifacts in R2 */
  bucketPlan?: CloudflareR2BucketPlan;
}

export interface Oauth2AuthenticationSession {
  /** This is the OAuth2 access token. */
  accessToken?: string;
  /**
   * This is the OAuth2 access token expiration.
   * @format date-time
   */
  expiresAt?: string;
}

export interface CustomLLMCredential {
  provider: 'custom-llm';
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey: string;
  /** This is the authentication plan. Currently supports OAuth2 RFC 6749. To use Bearer authentication, use apiKey */
  authenticationPlan?: OAuth2AuthenticationPlan;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /** This is the authentication session for the credential. Available for credentials that have an authentication plan. */
  authenticationSession?: Oauth2AuthenticationSession;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface DeepgramCredential {
  provider: 'deepgram';
  /** This is not returned in the API. */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
  /** This can be used to point to an onprem Deepgram instance. Defaults to api.deepgram.com. */
  apiUrl?: string;
}

export interface DeepInfraCredential {
  provider: 'deepinfra';
  /** This is not returned in the API. */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface DeepSeekCredential {
  provider: 'deep-seek';
  /** This is not returned in the API. */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface ElevenLabsCredential {
  provider: '11labs';
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface GcpCredential {
  provider: 'gcp';
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the GCP key. This is the JSON that can be generated in the Google Cloud Console at https://console.cloud.google.com/iam-admin/serviceaccounts/details/<service-account-id>/keys.
   *
   * The schema is identical to the JSON that GCP outputs.
   */
  gcpKey: GcpKey;
  /** This is the bucket plan that can be provided to store call artifacts in GCP. */
  bucketPlan?: BucketPlan;
}

export interface GladiaCredential {
  provider: 'gladia';
  /** This is not returned in the API. */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface GoHighLevelCredential {
  provider: 'gohighlevel';
  /** This is not returned in the API. */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface GoogleCredential {
  /** This is the key for Gemini in Google AI Studio. Get it from here: https://aistudio.google.com/app/apikey */
  provider: 'google';
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface GroqCredential {
  provider: 'groq';
  /** This is not returned in the API. */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface HumeCredential {
  provider: 'hume';
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface InflectionAICredential {
  /** This is the api key for Pi in InflectionAI's console. Get it from here: https://developers.inflection.ai/keys, billing will need to be setup */
  provider: 'inflection-ai';
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface LangfuseCredential {
  provider: 'langfuse';
  /** The public key for Langfuse project. Eg: pk-lf-... */
  publicKey: string;
  /** The secret key for Langfuse project. Eg: sk-lf-... .This is not returned in the API. */
  apiKey: string;
  /** The host URL for Langfuse project. Eg: https://cloud.langfuse.com */
  apiUrl: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface LmntCredential {
  provider: 'lmnt';
  /** This is not returned in the API. */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface MakeCredential {
  provider: 'make';
  /** Team ID */
  teamId: string;
  /** Region of your application. For example: eu1, eu2, us1, us2 */
  region: string;
  /** This is not returned in the API. */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface MistralCredential {
  provider: 'mistral';
  /**
   * This is not returned in the API.
   * @maxLength 100
   */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface NeuphonicCredential {
  provider: 'neuphonic';
  /** This is not returned in the API. */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface OpenAICredential {
  provider: 'openai';
  /** This is not returned in the API. */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface OpenRouterCredential {
  provider: 'openrouter';
  /** This is not returned in the API. */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface PerplexityAICredential {
  provider: 'perplexity-ai';
  /** This is not returned in the API. */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface PlayHTCredential {
  provider: 'playht';
  /** This is not returned in the API. */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
  userId: string;
}

export interface RimeAICredential {
  provider: 'rime-ai';
  /** This is not returned in the API. */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface RunpodCredential {
  provider: 'runpod';
  /** This is not returned in the API. */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface S3Credential {
  /** Credential provider. Only allowed value is s3 */
  provider: 's3';
  /** AWS access key ID. */
  awsAccessKeyId: string;
  /** AWS access key secret. This is not returned in the API. */
  awsSecretAccessKey: string;
  /** AWS region in which the S3 bucket is located. */
  region: string;
  /** AWS S3 bucket name. */
  s3BucketName: string;
  /** The path prefix for the uploaded recording. Ex. "recordings/" */
  s3PathPrefix: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface SmallestAICredential {
  provider: 'smallest-ai';
  /** This is not returned in the API. */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface SpeechmaticsCredential {
  provider: 'speechmatics';
  /** This is not returned in the API. */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface SupabaseCredential {
  /** This is for supabase storage. */
  provider: 'supabase';
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
  bucketPlan?: SupabaseBucketPlan;
}

export interface TavusCredential {
  provider: 'tavus';
  /** This is not returned in the API. */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface TogetherAICredential {
  provider: 'together-ai';
  /** This is not returned in the API. */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface TrieveCredential {
  provider: 'trieve';
  /** This is not returned in the API. */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface TwilioCredential {
  provider: 'twilio';
  /** This is not returned in the API. */
  authToken: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
  accountSid: string;
}

export interface VonageCredential {
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  vonageApplicationPrivateKey: string;
  provider: 'vonage';
  /** This is not returned in the API. */
  apiSecret: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the Vonage Application ID for the credential.
   *
   * Only relevant for Vonage credentials.
   * @maxLength 10000
   */
  vonageApplicationId: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
  apiKey: string;
}

export interface WebhookCredential {
  provider: 'webhook';
  /** This is the authentication plan. Currently supports OAuth2 RFC 6749. */
  authenticationPlan: OAuth2AuthenticationPlan;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /** This is the authentication session for the credential. Available for credentials that have an authentication plan. */
  authenticationSession: Oauth2AuthenticationSession;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface XAiCredential {
  /** This is the api key for Grok in XAi's console. Get it from here: https://console.x.ai */
  provider: 'xai';
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface GoogleCalendarOAuth2ClientCredential {
  provider: 'google.calendar.oauth2-client';
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface GoogleCalendarOAuth2AuthorizationCredential {
  provider: 'google.calendar.oauth2-authorization';
  /** The authorization ID for the OAuth2 authorization */
  authorizationId: string;
  /** This is the unique identifier for the credential. */
  id: string;
  /** This is the unique identifier for the org that this credential belongs to. */
  orgId: string;
  /**
   * This is the ISO 8601 date-time string of when the credential was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * This is the ISO 8601 date-time string of when the assistant was last updated.
   * @format date-time
   */
  updatedAt: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateCerebrasCredentialDTO {
  provider: 'cerebras';
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateGoogleCredentialDTO {
  /** This is the key for Gemini in Google AI Studio. Get it from here: https://aistudio.google.com/app/apikey */
  provider: 'google';
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateHumeCredentialDTO {
  provider: 'hume';
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateInflectionAICredentialDTO {
  /** This is the api key for Pi in InflectionAI's console. Get it from here: https://developers.inflection.ai/keys, billing will need to be setup */
  provider: 'inflection-ai';
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateMistralCredentialDTO {
  provider: 'mistral';
  /**
   * This is not returned in the API.
   * @maxLength 100
   */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateNeuphonicCredentialDTO {
  provider: 'neuphonic';
  /** This is not returned in the API. */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateSpeechmaticsCredentialDTO {
  provider: 'speechmatics';
  /** This is not returned in the API. */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CreateTrieveCredentialDTO {
  provider: 'trieve';
  /** This is not returned in the API. */
  apiKey: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateAnthropicCredentialDTO {
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateAnyscaleCredentialDTO {
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateAssemblyAICredentialDTO {
  /** This is not returned in the API. */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateAzureCredentialDTO {
  /**
   * This is the service being used in Azure.
   * @default "speech"
   */
  service?: 'speech' | 'blob_storage';
  /** This is the region of the Azure resource. */
  region?:
    | 'australia'
    | 'canadaeast'
    | 'canadacentral'
    | 'eastus2'
    | 'eastus'
    | 'france'
    | 'india'
    | 'japaneast'
    | 'japanwest'
    | 'uaenorth'
    | 'northcentralus'
    | 'norway'
    | 'southcentralus'
    | 'swedencentral'
    | 'switzerland'
    | 'uk'
    | 'westus'
    | 'westus3';
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
  /** This is the bucket plan that can be provided to store call artifacts in Azure Blob Storage. */
  bucketPlan?: AzureBlobStorageBucketPlan;
}

export interface UpdateAzureOpenAICredentialDTO {
  region?:
    | 'australia'
    | 'canadaeast'
    | 'canadacentral'
    | 'eastus2'
    | 'eastus'
    | 'france'
    | 'india'
    | 'japaneast'
    | 'japanwest'
    | 'uaenorth'
    | 'northcentralus'
    | 'norway'
    | 'southcentralus'
    | 'swedencentral'
    | 'switzerland'
    | 'uk'
    | 'westus'
    | 'westus3';
  /** @example ["gpt-4-0125-preview","gpt-4-0613"] */
  models?:
    | 'gpt-4o-2024-11-20'
    | 'gpt-4o-2024-08-06'
    | 'gpt-4o-mini-2024-07-18'
    | 'gpt-4o-2024-05-13'
    | 'gpt-4-turbo-2024-04-09'
    | 'gpt-4-0125-preview'
    | 'gpt-4-1106-preview'
    | 'gpt-4-0613'
    | 'gpt-35-turbo-0125'
    | 'gpt-35-turbo-1106';
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  openAIKey?: string;
  /** This is not returned in the API. */
  ocpApimSubscriptionKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
  /** @maxLength 10000 */
  openAIEndpoint?: string;
}

export interface UpdateByoSipTrunkCredentialDTO {
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
  /** This is the list of SIP trunk's gateways. */
  gateways?: SipTrunkGateway[];
  /** This can be used to configure the outbound authentication if required by the SIP trunk. */
  outboundAuthenticationPlan?: SipTrunkOutboundAuthenticationPlan;
  /**
   * This ensures the outbound origination attempts have a leading plus. Defaults to false to match conventional telecom behavior.
   *
   * Usage:
   * - Vonage/Twilio requires leading plus for all outbound calls. Set this to true.
   *
   * @default false
   */
  outboundLeadingPlusEnabled?: boolean;
  /**
   * This can be used to configure the tech prefix on outbound calls. This is an advanced property.
   * @maxLength 10000
   */
  techPrefix?: string;
  /**
   * This can be used to enable the SIP diversion header for authenticating the calling number if the SIP trunk supports it. This is an advanced property.
   * @maxLength 10000
   */
  sipDiversionHeader?: string;
  /** This is an advanced configuration for enterprise deployments. This uses the onprem SBC to trunk into the SIP trunk's `gateways`, rather than the managed SBC provided by Vapi. */
  sbcConfiguration?: SbcConfiguration;
}

export interface UpdateCartesiaCredentialDTO {
  /** This is not returned in the API. */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateCerebrasCredentialDTO {
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateCloudflareCredentialDTO {
  /** Cloudflare Account Id. */
  accountId?: string;
  /** Cloudflare API Key / Token. */
  apiKey?: string;
  /** Cloudflare Account Email. */
  accountEmail?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
  /** This is the bucket plan that can be provided to store call artifacts in R2 */
  bucketPlan?: CloudflareR2BucketPlan;
}

export interface UpdateCustomLLMCredentialDTO {
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey?: string;
  /** This is the authentication plan. Currently supports OAuth2 RFC 6749. To use Bearer authentication, use apiKey */
  authenticationPlan?: OAuth2AuthenticationPlan;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateDeepgramCredentialDTO {
  /** This is not returned in the API. */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
  /** This can be used to point to an onprem Deepgram instance. Defaults to api.deepgram.com. */
  apiUrl?: string;
}

export interface UpdateDeepInfraCredentialDTO {
  /** This is not returned in the API. */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateDeepSeekCredentialDTO {
  /** This is not returned in the API. */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateElevenLabsCredentialDTO {
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateGcpCredentialDTO {
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the GCP key. This is the JSON that can be generated in the Google Cloud Console at https://console.cloud.google.com/iam-admin/serviceaccounts/details/<service-account-id>/keys.
   *
   * The schema is identical to the JSON that GCP outputs.
   */
  gcpKey?: GcpKey;
  /** This is the bucket plan that can be provided to store call artifacts in GCP. */
  bucketPlan?: BucketPlan;
}

export interface UpdateGladiaCredentialDTO {
  /** This is not returned in the API. */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateGoHighLevelCredentialDTO {
  /** This is not returned in the API. */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateGoogleCredentialDTO {
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateGroqCredentialDTO {
  /** This is not returned in the API. */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateHumeCredentialDTO {
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateInflectionAICredentialDTO {
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateLangfuseCredentialDTO {
  /** The public key for Langfuse project. Eg: pk-lf-... */
  publicKey?: string;
  /** The secret key for Langfuse project. Eg: sk-lf-... .This is not returned in the API. */
  apiKey?: string;
  /** The host URL for Langfuse project. Eg: https://cloud.langfuse.com */
  apiUrl?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateLmntCredentialDTO {
  /** This is not returned in the API. */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateMakeCredentialDTO {
  /** Team ID */
  teamId?: string;
  /** Region of your application. For example: eu1, eu2, us1, us2 */
  region?: string;
  /** This is not returned in the API. */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateMistralCredentialDTO {
  /**
   * This is not returned in the API.
   * @maxLength 100
   */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateNeuphonicCredentialDTO {
  /** This is not returned in the API. */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateOpenAICredentialDTO {
  /** This is not returned in the API. */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateOpenRouterCredentialDTO {
  /** This is not returned in the API. */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdatePerplexityAICredentialDTO {
  /** This is not returned in the API. */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdatePlayHTCredentialDTO {
  /** This is not returned in the API. */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
  userId?: string;
}

export interface UpdateRimeAICredentialDTO {
  /** This is not returned in the API. */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateRunpodCredentialDTO {
  /** This is not returned in the API. */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateS3CredentialDTO {
  /** AWS access key ID. */
  awsAccessKeyId?: string;
  /** AWS access key secret. This is not returned in the API. */
  awsSecretAccessKey?: string;
  /** AWS region in which the S3 bucket is located. */
  region?: string;
  /** AWS S3 bucket name. */
  s3BucketName?: string;
  /** The path prefix for the uploaded recording. Ex. "recordings/" */
  s3PathPrefix?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateSmallestAICredentialDTO {
  /** This is not returned in the API. */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateSpeechmaticsCredentialDTO {
  /** This is not returned in the API. */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateSupabaseCredentialDTO {
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
  bucketPlan?: SupabaseBucketPlan;
}

export interface UpdateTavusCredentialDTO {
  /** This is not returned in the API. */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateTogetherAICredentialDTO {
  /** This is not returned in the API. */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateTrieveCredentialDTO {
  /** This is not returned in the API. */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateTwilioCredentialDTO {
  /** This is not returned in the API. */
  authToken?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
  accountSid?: string;
}

export interface UpdateVonageCredentialDTO {
  /** This is not returned in the API. */
  apiSecret?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
  apiKey?: string;
}

export interface UpdateWebhookCredentialDTO {
  /** This is the authentication plan. Currently supports OAuth2 RFC 6749. */
  authenticationPlan?: OAuth2AuthenticationPlan;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateXAiCredentialDTO {
  /**
   * This is not returned in the API.
   * @maxLength 10000
   */
  apiKey?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateGoogleCalendarOAuth2ClientCredentialDTO {
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface UpdateGoogleCalendarOAuth2AuthorizationCredentialDTO {
  /** The authorization ID for the OAuth2 authorization */
  authorizationId?: string;
  /**
   * This is the name of credential. This is just for your reference.
   * @minLength 1
   * @maxLength 40
   */
  name?: string;
}

export interface CredentialSessionResponse {
  sessionToken: string;
}

export interface CredentialEndUser {
  endUserId: string;
  organizationId: string;
}

export interface CredentialSessionError {
  type: string;
  description: string;
}

export interface CredentialWebhookDTO {
  type: 'auth' | 'sync' | 'forward';
  operation: 'creation' | 'override' | 'refresh';
  from: string;
  connectionId: string;
  authMode: 'OAUTH2' | 'API_KEY' | 'BASIC';
  providerConfigKey: string;
  provider: string;
  environment: string;
  success: boolean;
  endUser: CredentialEndUser;
  error?: CredentialSessionError;
}

export interface CredentialActionRequest {
  action_name: string;
  input: object;
}

export interface CredentialSessionDTO {
  /** The type of credential to generate a session for. Only Nango user-facing providers are supported. */
  provider:
    | 'google.calendar.oauth2-client'
    | 'google.calendar.oauth2-authorization'
    | 'google.sheets.oauth2-authorization';
}

export interface ToolTemplateSetup {
  title: string;
  description?: string;
  videoUrl?: string;
  docsUrl?: string;
}

export interface MakeToolProviderDetails {
  /** This is the Template URL or the Snapshot URL corresponding to the Template. */
  templateUrl?: string;
  setupInstructions?: ToolTemplateSetup[];
  /** The type of tool. "make" for Make tool. */
  type: 'make';
  scenarioId?: number;
  scenarioName?: string;
  triggerHookId?: number;
  triggerHookName?: string;
}

export interface GhlToolProviderDetails {
  /** This is the Template URL or the Snapshot URL corresponding to the Template. */
  templateUrl?: string;
  setupInstructions?: ToolTemplateSetup[];
  /** The type of tool. "ghl" for GHL tool. */
  type: 'ghl';
  workflowId?: string;
  workflowName?: string;
  webhookHookId?: string;
  webhookHookName?: string;
  locationId?: string;
}

export interface FunctionToolProviderDetails {
  /** This is the Template URL or the Snapshot URL corresponding to the Template. */
  templateUrl?: string;
  setupInstructions?: ToolTemplateSetup[];
  /** The type of tool. "function" for Function tool. */
  type: 'function';
}

export interface GoogleCalendarCreateEventToolProviderDetails {
  /** This is the Template URL or the Snapshot URL corresponding to the Template. */
  templateUrl?: string;
  setupInstructions?: ToolTemplateSetup[];
  /** The type of tool. "google.calendar.event.create" for Google Calendar tool. */
  type: 'google.calendar.event.create';
}

export interface GoogleSheetsRowAppendToolProviderDetails {
  /** This is the Template URL or the Snapshot URL corresponding to the Template. */
  templateUrl?: string;
  setupInstructions?: ToolTemplateSetup[];
  /** The type of tool. "google.sheets.row.append" for Google Sheets tool. */
  type: 'google.sheets.row.append';
}

export interface ToolTemplateMetadata {
  collectionType?: string;
  collectionId?: string;
  collectionName?: string;
}

export interface CreateToolTemplateDTO {
  details?:
    | CreateDtmfToolDTO
    | CreateEndCallToolDTO
    | CreateVoicemailToolDTO
    | CreateFunctionToolDTO
    | CreateGhlToolDTO
    | CreateMakeToolDTO
    | CreateTransferCallToolDTO
    | CreateGoogleCalendarCreateEventToolDTO
    | CreateGoogleSheetsRowAppendToolDTO;
  providerDetails?:
    | MakeToolProviderDetails
    | GhlToolProviderDetails
    | FunctionToolProviderDetails
    | GoogleCalendarCreateEventToolProviderDetails
    | GoogleSheetsRowAppendToolProviderDetails;
  metadata?: ToolTemplateMetadata;
  /** @default "private" */
  visibility?: 'public' | 'private';
  /** @default "tool" */
  type: 'tool';
  /**
   * The name of the template. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  provider?: 'make' | 'gohighlevel' | 'function';
}

export interface Template {
  details?:
    | CreateDtmfToolDTO
    | CreateEndCallToolDTO
    | CreateVoicemailToolDTO
    | CreateFunctionToolDTO
    | CreateGhlToolDTO
    | CreateMakeToolDTO
    | CreateTransferCallToolDTO
    | CreateGoogleCalendarCreateEventToolDTO
    | CreateGoogleSheetsRowAppendToolDTO;
  providerDetails?:
    | MakeToolProviderDetails
    | GhlToolProviderDetails
    | FunctionToolProviderDetails
    | GoogleCalendarCreateEventToolProviderDetails
    | GoogleSheetsRowAppendToolProviderDetails;
  metadata?: ToolTemplateMetadata;
  /** @default "private" */
  visibility?: 'public' | 'private';
  /** @default "tool" */
  type: 'tool';
  /**
   * The name of the template. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  provider?: 'make' | 'gohighlevel' | 'function';
  /** The unique identifier for the template. */
  id: string;
  /** The unique identifier for the organization that this template belongs to. */
  orgId: string;
  /**
   * The ISO 8601 date-time string of when the template was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * The ISO 8601 date-time string of when the template was last updated.
   * @format date-time
   */
  updatedAt: string;
}

export interface UpdateToolTemplateDTO {
  details?:
    | CreateDtmfToolDTO
    | CreateEndCallToolDTO
    | CreateVoicemailToolDTO
    | CreateFunctionToolDTO
    | CreateGhlToolDTO
    | CreateMakeToolDTO
    | CreateTransferCallToolDTO
    | CreateGoogleCalendarCreateEventToolDTO
    | CreateGoogleSheetsRowAppendToolDTO;
  providerDetails?:
    | MakeToolProviderDetails
    | GhlToolProviderDetails
    | FunctionToolProviderDetails
    | GoogleCalendarCreateEventToolProviderDetails
    | GoogleSheetsRowAppendToolProviderDetails;
  metadata?: ToolTemplateMetadata;
  /** @default "private" */
  visibility?: 'public' | 'private';
  /** @default "tool" */
  type: 'tool';
  /**
   * The name of the template. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  provider?: 'make' | 'gohighlevel' | 'function';
}

export interface VoiceLibrary {
  /** This is the voice provider that will be used. */
  provider?:
    | 'vapi'
    | '11labs'
    | 'azure'
    | 'cartesia'
    | 'custom-voice'
    | 'deepgram'
    | 'hume'
    | 'lmnt'
    | 'neuphonic'
    | 'openai'
    | 'playht'
    | 'rime-ai'
    | 'smallest-ai'
    | 'tavus'
    | 'sesame';
  /** The ID of the voice provided by the provider. */
  providerId?: string;
  /** The unique slug of the voice. */
  slug?: string;
  /** The name of the voice. */
  name?: string;
  /** The language of the voice. */
  language?: string;
  /** The language code of the voice. */
  languageCode?: string;
  /** The model of the voice. */
  model?: string;
  /** The supported models of the voice. */
  supportedModels?: string;
  /** The gender of the voice. */
  gender?: 'male' | 'female';
  /** The accent of the voice. */
  accent?: string;
  /** The preview URL of the voice. */
  previewUrl?: string;
  /** The description of the voice. */
  description?: string;
  /** The credential ID of the voice. */
  credentialId?: string;
  /** The unique identifier for the voice library. */
  id: string;
  /** The unique identifier for the organization that this voice library belongs to. */
  orgId: string;
  /** The Public voice is shared accross all the organizations. */
  isPublic: boolean;
  /** The deletion status of the voice. */
  isDeleted: boolean;
  /**
   * The ISO 8601 date-time string of when the voice library was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * The ISO 8601 date-time string of when the voice library was last updated.
   * @format date-time
   */
  updatedAt: string;
}

export interface SyncVoiceLibraryDTO {
  /** List of providers you want to sync. */
  providers?:
    | 'vapi'
    | '11labs'
    | 'azure'
    | 'cartesia'
    | 'custom-voice'
    | 'deepgram'
    | 'hume'
    | 'lmnt'
    | 'neuphonic'
    | 'openai'
    | 'playht'
    | 'rime-ai'
    | 'smallest-ai'
    | 'tavus'
    | 'sesame';
}

export interface VoiceLibraryVoiceResponse {
  voiceId: string;
  name: string;
  publicOwnerId?: string;
  description?: string;
  gender?: string;
  age?: object;
  accent?: string;
}

export interface AddVoiceToProviderDTO {
  /** This is the owner_id of your shared voice which you want to add to your provider Account from Provider Voice Library */
  ownerId: string;
  /** This is the voice_id of the shared voice which you want to add to your provider Account from Provider Voice Library */
  voiceId: string;
  /** This is the new name of the voice which you want to have once you have added voice to your provider Account from Provider Voice Library */
  name: string;
}

export interface CloneVoiceDTO {
  /** This is the name of the cloned voice in the provider account. */
  name: string;
  /** This is the description of your cloned voice. */
  description?: string;
  /** Serialized labels dictionary for the voice. */
  labels?: string;
  /** These are the files you want to use to clone your voice. Only Audio files are supported. */
  files: File[];
}

export interface ClientMessageWorkflowNodeStarted {
  /** This is the type of the message. "workflow.node.started" is sent when the active node changes. */
  type: 'workflow.node.started';
  /** This is the active node. */
  node: object;
}

export interface ClientMessageConversationUpdate {
  /** This is the type of the message. "conversation-update" is sent when an update is committed to the conversation history. */
  type: 'conversation-update';
  /** This is the most up-to-date conversation history at the time the message is sent. */
  messages?: (UserMessage | SystemMessage | BotMessage | ToolCallMessage | ToolCallResultMessage)[];
  /** This is the most up-to-date conversation history at the time the message is sent, formatted for OpenAI. */
  messagesOpenAIFormatted: OpenAIMessage[];
}

export interface ClientMessageHang {
  /**
   * This is the type of the message. "hang" is sent when the assistant is hanging due to a delay. The delay can be caused by many factors, such as:
   * - the model is too slow to respond
   * - the voice is too slow to respond
   * - the tool call is still waiting for a response from your server
   * - etc.
   */
  type: 'hang';
}

export interface ClientMessageMetadata {
  /** This is the type of the message. "metadata" is sent to forward metadata to the client. */
  type: 'metadata';
  /** This is the metadata content */
  metadata: string;
}

export interface ClientMessageModelOutput {
  /** This is the type of the message. "model-output" is sent as the model outputs tokens. */
  type: 'model-output';
  /** This is the output of the model. It can be a token or tool call. */
  output: object;
}

export interface ClientMessageSpeechUpdate {
  /** This is the type of the message. "speech-update" is sent whenever assistant or user start or stop speaking. */
  type: 'speech-update';
  /** This is the status of the speech update. */
  status: 'started' | 'stopped';
  /** This is the role which the speech update is for. */
  role: 'assistant' | 'user';
}

export interface ClientMessageTranscript {
  /** This is the type of the message. "transcript" is sent as transcriber outputs partial or final transcript. */
  type: 'transcript' | "transcript[transcriptType='final']";
  /** This is the role for which the transcript is for. */
  role: 'assistant' | 'user';
  /** This is the type of the transcript. */
  transcriptType: 'partial' | 'final';
  /** This is the transcript content. */
  transcript: string;
}

export interface ToolCallFunction {
  /** This is the name of the function the model called. */
  name: string;
  /** These are the arguments that the function was called with. */
  arguments: object;
}

export interface ToolCall {
  /** This is the type of tool the model called. */
  type: 'function';
  /** This is the function the model called. */
  function: ToolCallFunction;
  /** This is the unique identifier for the tool call. */
  id: string;
}

export interface ClientMessageToolCalls {
  /** This is the type of the message. "tool-calls" is sent to call a tool. */
  type?: 'tool-calls';
  /** This is the list of tools calls that the model is requesting along with the original tool configuration. */
  toolWithToolCallList: (
    | FunctionToolWithToolCall
    | GhlToolWithToolCall
    | MakeToolWithToolCall
    | BashToolWithToolCall
    | ComputerToolWithToolCall
    | TextEditorToolWithToolCall
    | GoogleCalendarCreateEventToolWithToolCall
  )[];
  /** This is the list of tool calls that the model is requesting. */
  toolCallList: ToolCall[];
}

export interface ClientMessageToolCallsResult {
  /** This is the type of the message. "tool-calls-result" is sent to forward the result of a tool call to the client. */
  type: 'tool-calls-result';
  /** This is the result of the tool call. */
  toolCallResult: object;
}

export interface ClientMessageTransferUpdate {
  /** This is the type of the message. "transfer-update" is sent whenever a transfer happens. */
  type: 'transfer-update';
  /** This is the destination of the transfer. */
  destination?:
    | TransferDestinationAssistant
    | TransferDestinationStep
    | TransferDestinationNumber
    | TransferDestinationSip;
  /** This is the assistant that the call is being transferred to. This is only sent if `destination.type` is "assistant". */
  toAssistant?: CreateAssistantDTO;
  /** This is the assistant that the call is being transferred from. This is only sent if `destination.type` is "assistant". */
  fromAssistant?: CreateAssistantDTO;
  /** This is the step that the conversation moved to. */
  toStepRecord?: object;
  /** This is the step that the conversation moved from. = */
  fromStepRecord?: object;
}

export interface ClientMessageUserInterrupted {
  /** This is the type of the message. "user-interrupted" is sent when the user interrupts the assistant. */
  type: 'user-interrupted';
}

export interface ClientMessageLanguageChangeDetected {
  /** This is the type of the message. "language-change-detected" is sent when the transcriber is automatically switched based on the detected language. */
  type: 'language-change-detected';
  /** This is the language the transcriber is switched to. */
  language: string;
}

export interface ClientMessageVoiceInput {
  /** This is the type of the message. "voice-input" is sent when a generation is requested from voice provider. */
  type: 'voice-input';
  /** This is the voice input content */
  input: string;
}

export interface ClientMessage {
  /** These are all the messages that can be sent to the client-side SDKs during the call. Configure the messages you'd like to receive in `assistant.clientMessages`. */
  message:
    | ClientMessageWorkflowNodeStarted
    | ClientMessageConversationUpdate
    | ClientMessageHang
    | ClientMessageMetadata
    | ClientMessageModelOutput
    | ClientMessageSpeechUpdate
    | ClientMessageTranscript
    | ClientMessageToolCalls
    | ClientMessageToolCallsResult
    | ClientMessageTransferUpdate
    | ClientMessageUserInterrupted
    | ClientMessageLanguageChangeDetected
    | ClientMessageVoiceInput;
}

export interface ServerMessageAssistantRequest {
  /**
   * This is the phone number associated with the call.
   *
   * This matches one of the following:
   * - `call.phoneNumber`,
   * - `call.phoneNumberId`.
   */
  phoneNumber?:
    | CreateByoPhoneNumberDTO
    | CreateTwilioPhoneNumberDTO
    | CreateVonagePhoneNumberDTO
    | CreateVapiPhoneNumberDTO;
  /** This is the type of the message. "assistant-request" is sent to fetch assistant configuration for an incoming call. */
  type: 'assistant-request';
  /** This is the ISO-8601 formatted timestamp of when the message was sent. */
  timestamp?: string;
  /**
   * This is a live version of the `call.artifact`.
   *
   * This matches what is stored on `call.artifact` after the call.
   */
  artifact?: Artifact;
  /**
   * This is the assistant that is currently active. This is provided for convenience.
   *
   * This matches one of the following:
   * - `call.assistant`,
   * - `call.assistantId`,
   * - `call.squad[n].assistant`,
   * - `call.squad[n].assistantId`,
   * - `call.squadId->[n].assistant`,
   * - `call.squadId->[n].assistantId`.
   */
  assistant?: CreateAssistantDTO;
  /**
   * This is the customer associated with the call.
   *
   * This matches one of the following:
   * - `call.customer`,
   * - `call.customerId`.
   */
  customer?: CreateCustomerDTO;
  /**
   * This is the call object.
   *
   * This matches what was returned in POST /call.
   *
   * Note: This might get stale during the call. To get the latest call object, especially after the call is ended, use GET /call/:id.
   */
  call?: Call;
}

export interface ServerMessageConversationUpdate {
  /**
   * This is the phone number associated with the call.
   *
   * This matches one of the following:
   * - `call.phoneNumber`,
   * - `call.phoneNumberId`.
   */
  phoneNumber?:
    | CreateByoPhoneNumberDTO
    | CreateTwilioPhoneNumberDTO
    | CreateVonagePhoneNumberDTO
    | CreateVapiPhoneNumberDTO;
  /** This is the type of the message. "conversation-update" is sent when an update is committed to the conversation history. */
  type: 'conversation-update';
  /** This is the most up-to-date conversation history at the time the message is sent. */
  messages?: (UserMessage | SystemMessage | BotMessage | ToolCallMessage | ToolCallResultMessage)[];
  /** This is the most up-to-date conversation history at the time the message is sent, formatted for OpenAI. */
  messagesOpenAIFormatted: OpenAIMessage[];
  /** This is the ISO-8601 formatted timestamp of when the message was sent. */
  timestamp?: string;
  /**
   * This is a live version of the `call.artifact`.
   *
   * This matches what is stored on `call.artifact` after the call.
   */
  artifact?: Artifact;
  /**
   * This is the assistant that is currently active. This is provided for convenience.
   *
   * This matches one of the following:
   * - `call.assistant`,
   * - `call.assistantId`,
   * - `call.squad[n].assistant`,
   * - `call.squad[n].assistantId`,
   * - `call.squadId->[n].assistant`,
   * - `call.squadId->[n].assistantId`.
   */
  assistant?: CreateAssistantDTO;
  /**
   * This is the customer associated with the call.
   *
   * This matches one of the following:
   * - `call.customer`,
   * - `call.customerId`.
   */
  customer?: CreateCustomerDTO;
  /**
   * This is the call object.
   *
   * This matches what was returned in POST /call.
   *
   * Note: This might get stale during the call. To get the latest call object, especially after the call is ended, use GET /call/:id.
   */
  call?: Call;
}

export interface ServerMessageEndOfCallReport {
  /**
   * This is the phone number associated with the call.
   *
   * This matches one of the following:
   * - `call.phoneNumber`,
   * - `call.phoneNumberId`.
   */
  phoneNumber?:
    | CreateByoPhoneNumberDTO
    | CreateTwilioPhoneNumberDTO
    | CreateVonagePhoneNumberDTO
    | CreateVapiPhoneNumberDTO;
  /** This is the type of the message. "end-of-call-report" is sent when the call ends and post-processing is complete. */
  type: 'end-of-call-report';
  /** This is the reason the call ended. This can also be found at `call.endedReason` on GET /call/:id. */
  endedReason:
    | 'assistant-not-valid'
    | 'assistant-not-provided'
    | 'call-start-error-neither-assistant-nor-server-set'
    | 'assistant-request-failed'
    | 'assistant-request-returned-error'
    | 'assistant-request-returned-unspeakable-error'
    | 'assistant-request-returned-invalid-assistant'
    | 'assistant-request-returned-no-assistant'
    | 'assistant-request-returned-forwarding-phone-number'
    | 'assistant-ended-call'
    | 'assistant-said-end-call-phrase'
    | 'assistant-ended-call-with-hangup-task'
    | 'assistant-forwarded-call'
    | 'assistant-join-timed-out'
    | 'customer-busy'
    | 'customer-ended-call'
    | 'customer-did-not-answer'
    | 'customer-did-not-give-microphone-permission'
    | 'assistant-said-message-with-end-call-enabled'
    | 'exceeded-max-duration'
    | 'manually-canceled'
    | 'phone-call-provider-closed-websocket'
    | 'db-error'
    | 'assistant-not-found'
    | 'license-check-failed'
    | 'pipeline-error-openai-voice-failed'
    | 'pipeline-error-cartesia-voice-failed'
    | 'pipeline-error-deepgram-voice-failed'
    | 'pipeline-error-eleven-labs-voice-failed'
    | 'pipeline-error-playht-voice-failed'
    | 'pipeline-error-lmnt-voice-failed'
    | 'pipeline-error-azure-voice-failed'
    | 'pipeline-error-rime-ai-voice-failed'
    | 'pipeline-error-smallest-ai-voice-failed'
    | 'pipeline-error-neuphonic-voice-failed'
    | 'pipeline-error-hume-voice-failed'
    | 'pipeline-error-sesame-voice-failed'
    | 'pipeline-error-deepgram-transcriber-failed'
    | 'pipeline-error-gladia-transcriber-failed'
    | 'pipeline-error-speechmatics-transcriber-failed'
    | 'pipeline-error-assembly-ai-transcriber-failed'
    | 'pipeline-error-talkscriber-transcriber-failed'
    | 'pipeline-error-azure-speech-transcriber-failed'
    | 'pipeline-error-vapi-llm-failed'
    | 'pipeline-error-vapi-400-bad-request-validation-failed'
    | 'pipeline-error-vapi-401-unauthorized'
    | 'pipeline-error-vapi-403-model-access-denied'
    | 'pipeline-error-vapi-429-exceeded-quota'
    | 'pipeline-error-vapi-500-server-error'
    | 'pipeline-no-available-model'
    | 'worker-shutdown'
    | 'unknown-error'
    | 'vonage-disconnected'
    | 'vonage-failed-to-connect-call'
    | 'vonage-completed'
    | 'phone-call-provider-bypass-enabled-but-no-call-received'
    | 'vapifault-phone-call-worker-setup-socket-error'
    | 'vapifault-phone-call-worker-worker-setup-socket-timeout'
    | 'vapifault-phone-call-worker-could-not-find-call'
    | 'vapifault-transport-never-connected'
    | 'vapifault-web-call-worker-setup-failed'
    | 'vapifault-transport-connected-but-call-not-active'
    | 'vapifault-call-started-but-connection-to-transport-missing'
    | 'pipeline-error-openai-llm-failed'
    | 'pipeline-error-azure-openai-llm-failed'
    | 'pipeline-error-groq-llm-failed'
    | 'pipeline-error-google-llm-failed'
    | 'pipeline-error-xai-llm-failed'
    | 'pipeline-error-mistral-llm-failed'
    | 'pipeline-error-inflection-ai-llm-failed'
    | 'pipeline-error-cerebras-llm-failed'
    | 'pipeline-error-deep-seek-llm-failed'
    | 'pipeline-error-openai-400-bad-request-validation-failed'
    | 'pipeline-error-openai-401-unauthorized'
    | 'pipeline-error-openai-403-model-access-denied'
    | 'pipeline-error-openai-429-exceeded-quota'
    | 'pipeline-error-openai-500-server-error'
    | 'pipeline-error-google-400-bad-request-validation-failed'
    | 'pipeline-error-google-401-unauthorized'
    | 'pipeline-error-google-403-model-access-denied'
    | 'pipeline-error-google-429-exceeded-quota'
    | 'pipeline-error-google-500-server-error'
    | 'pipeline-error-xai-400-bad-request-validation-failed'
    | 'pipeline-error-xai-401-unauthorized'
    | 'pipeline-error-xai-403-model-access-denied'
    | 'pipeline-error-xai-429-exceeded-quota'
    | 'pipeline-error-xai-500-server-error'
    | 'pipeline-error-mistral-400-bad-request-validation-failed'
    | 'pipeline-error-mistral-401-unauthorized'
    | 'pipeline-error-mistral-403-model-access-denied'
    | 'pipeline-error-mistral-429-exceeded-quota'
    | 'pipeline-error-mistral-500-server-error'
    | 'pipeline-error-inflection-ai-400-bad-request-validation-failed'
    | 'pipeline-error-inflection-ai-401-unauthorized'
    | 'pipeline-error-inflection-ai-403-model-access-denied'
    | 'pipeline-error-inflection-ai-429-exceeded-quota'
    | 'pipeline-error-inflection-ai-500-server-error'
    | 'pipeline-error-deep-seek-400-bad-request-validation-failed'
    | 'pipeline-error-deep-seek-401-unauthorized'
    | 'pipeline-error-deep-seek-403-model-access-denied'
    | 'pipeline-error-deep-seek-429-exceeded-quota'
    | 'pipeline-error-deep-seek-500-server-error'
    | 'pipeline-error-azure-openai-400-bad-request-validation-failed'
    | 'pipeline-error-azure-openai-401-unauthorized'
    | 'pipeline-error-azure-openai-403-model-access-denied'
    | 'pipeline-error-azure-openai-429-exceeded-quota'
    | 'pipeline-error-azure-openai-500-server-error'
    | 'pipeline-error-groq-400-bad-request-validation-failed'
    | 'pipeline-error-groq-401-unauthorized'
    | 'pipeline-error-groq-403-model-access-denied'
    | 'pipeline-error-groq-429-exceeded-quota'
    | 'pipeline-error-groq-500-server-error'
    | 'pipeline-error-cerebras-400-bad-request-validation-failed'
    | 'pipeline-error-cerebras-401-unauthorized'
    | 'pipeline-error-cerebras-403-model-access-denied'
    | 'pipeline-error-cerebras-429-exceeded-quota'
    | 'pipeline-error-cerebras-500-server-error'
    | 'pipeline-error-anthropic-400-bad-request-validation-failed'
    | 'pipeline-error-anthropic-401-unauthorized'
    | 'pipeline-error-anthropic-403-model-access-denied'
    | 'pipeline-error-anthropic-429-exceeded-quota'
    | 'pipeline-error-anthropic-500-server-error'
    | 'pipeline-error-anthropic-llm-failed'
    | 'pipeline-error-together-ai-400-bad-request-validation-failed'
    | 'pipeline-error-together-ai-401-unauthorized'
    | 'pipeline-error-together-ai-403-model-access-denied'
    | 'pipeline-error-together-ai-429-exceeded-quota'
    | 'pipeline-error-together-ai-500-server-error'
    | 'pipeline-error-together-ai-llm-failed'
    | 'pipeline-error-anyscale-400-bad-request-validation-failed'
    | 'pipeline-error-anyscale-401-unauthorized'
    | 'pipeline-error-anyscale-403-model-access-denied'
    | 'pipeline-error-anyscale-429-exceeded-quota'
    | 'pipeline-error-anyscale-500-server-error'
    | 'pipeline-error-anyscale-llm-failed'
    | 'pipeline-error-openrouter-400-bad-request-validation-failed'
    | 'pipeline-error-openrouter-401-unauthorized'
    | 'pipeline-error-openrouter-403-model-access-denied'
    | 'pipeline-error-openrouter-429-exceeded-quota'
    | 'pipeline-error-openrouter-500-server-error'
    | 'pipeline-error-openrouter-llm-failed'
    | 'pipeline-error-perplexity-ai-400-bad-request-validation-failed'
    | 'pipeline-error-perplexity-ai-401-unauthorized'
    | 'pipeline-error-perplexity-ai-403-model-access-denied'
    | 'pipeline-error-perplexity-ai-429-exceeded-quota'
    | 'pipeline-error-perplexity-ai-500-server-error'
    | 'pipeline-error-perplexity-ai-llm-failed'
    | 'pipeline-error-deepinfra-400-bad-request-validation-failed'
    | 'pipeline-error-deepinfra-401-unauthorized'
    | 'pipeline-error-deepinfra-403-model-access-denied'
    | 'pipeline-error-deepinfra-429-exceeded-quota'
    | 'pipeline-error-deepinfra-500-server-error'
    | 'pipeline-error-deepinfra-llm-failed'
    | 'pipeline-error-runpod-400-bad-request-validation-failed'
    | 'pipeline-error-runpod-401-unauthorized'
    | 'pipeline-error-runpod-403-model-access-denied'
    | 'pipeline-error-runpod-429-exceeded-quota'
    | 'pipeline-error-runpod-500-server-error'
    | 'pipeline-error-runpod-llm-failed'
    | 'pipeline-error-custom-llm-400-bad-request-validation-failed'
    | 'pipeline-error-custom-llm-401-unauthorized'
    | 'pipeline-error-custom-llm-403-model-access-denied'
    | 'pipeline-error-custom-llm-429-exceeded-quota'
    | 'pipeline-error-custom-llm-500-server-error'
    | 'pipeline-error-custom-llm-llm-failed'
    | 'pipeline-error-custom-voice-failed'
    | 'pipeline-error-cartesia-socket-hang-up'
    | 'pipeline-error-cartesia-requested-payment'
    | 'pipeline-error-cartesia-500-server-error'
    | 'pipeline-error-cartesia-503-server-error'
    | 'pipeline-error-cartesia-522-server-error'
    | 'pipeline-error-eleven-labs-voice-not-found'
    | 'pipeline-error-eleven-labs-quota-exceeded'
    | 'pipeline-error-eleven-labs-unauthorized-access'
    | 'pipeline-error-eleven-labs-unauthorized-to-access-model'
    | 'pipeline-error-eleven-labs-professional-voices-only-for-creator-plus'
    | 'pipeline-error-eleven-labs-blocked-free-plan-and-requested-upgrade'
    | 'pipeline-error-eleven-labs-blocked-concurrent-requests-and-requested-upgrade'
    | 'pipeline-error-eleven-labs-blocked-using-instant-voice-clone-and-requested-upgrade'
    | 'pipeline-error-eleven-labs-system-busy-and-requested-upgrade'
    | 'pipeline-error-eleven-labs-voice-not-fine-tuned'
    | 'pipeline-error-eleven-labs-invalid-api-key'
    | 'pipeline-error-eleven-labs-invalid-voice-samples'
    | 'pipeline-error-eleven-labs-voice-disabled-by-owner'
    | 'pipeline-error-eleven-labs-blocked-account-in-probation'
    | 'pipeline-error-eleven-labs-blocked-content-against-their-policy'
    | 'pipeline-error-eleven-labs-missing-samples-for-voice-clone'
    | 'pipeline-error-eleven-labs-voice-not-fine-tuned-and-cannot-be-used'
    | 'pipeline-error-eleven-labs-voice-not-allowed-for-free-users'
    | 'pipeline-error-eleven-labs-500-server-error'
    | 'pipeline-error-eleven-labs-max-character-limit-exceeded'
    | 'pipeline-error-eleven-labs-blocked-voice-potentially-against-terms-of-service-and-awaiting-verification'
    | 'pipeline-error-playht-request-timed-out'
    | 'pipeline-error-playht-invalid-voice'
    | 'pipeline-error-playht-unexpected-error'
    | 'pipeline-error-playht-out-of-credits'
    | 'pipeline-error-playht-invalid-emotion'
    | 'pipeline-error-playht-voice-must-be-a-valid-voice-manifest-uri'
    | 'pipeline-error-playht-401-unauthorized'
    | 'pipeline-error-playht-403-forbidden-out-of-characters'
    | 'pipeline-error-playht-403-forbidden-api-access-not-available'
    | 'pipeline-error-playht-429-exceeded-quota'
    | 'pipeline-error-playht-502-gateway-error'
    | 'pipeline-error-playht-504-gateway-error'
    | 'pipeline-error-tavus-video-failed'
    | 'pipeline-error-custom-transcriber-failed'
    | 'pipeline-error-11labs-transcriber-failed'
    | 'pipeline-error-deepgram-returning-403-model-access-denied'
    | 'pipeline-error-deepgram-returning-401-invalid-credentials'
    | 'pipeline-error-deepgram-returning-404-not-found'
    | 'pipeline-error-deepgram-returning-400-no-such-model-language-tier-combination'
    | 'pipeline-error-deepgram-returning-500-invalid-json'
    | 'pipeline-error-deepgram-returning-502-network-error'
    | 'pipeline-error-deepgram-returning-502-bad-gateway-ehostunreach'
    | 'pipeline-error-google-transcriber-failed'
    | 'pipeline-error-openai-transcriber-failed'
    | 'call.start.error-get-org'
    | 'call.start.error-get-subscription'
    | 'call.start.error-get-assistant'
    | 'call.start.error-get-phone-number'
    | 'call.start.error-get-customer'
    | 'call.start.error-get-resources-validation'
    | 'call.start.error-vapi-number-international'
    | 'call.start.error-vapi-number-outbound-daily-limit'
    | 'call.start.error-get-transport'
    | 'silence-timed-out'
    | 'sip-gateway-failed-to-connect-call'
    | 'twilio-failed-to-connect-call'
    | 'twilio-reported-customer-misdialed'
    | 'vonage-rejected'
    | 'voicemail';
  /** This is the cost of the call in USD. This can also be found at `call.cost` on GET /call/:id. */
  cost?: number;
  /** These are the costs of individual components of the call in USD. This can also be found at `call.costs` on GET /call/:id. */
  costs?: (
    | TransportCost
    | TranscriberCost
    | ModelCost
    | VoiceCost
    | VapiCost
    | VoicemailDetectionCost
    | AnalysisCost
  )[];
  /** This is the ISO-8601 formatted timestamp of when the message was sent. */
  timestamp?: string;
  /** These are the artifacts from the call. This can also be found at `call.artifact` on GET /call/:id. */
  artifact: Artifact;
  /**
   * This is the assistant that is currently active. This is provided for convenience.
   *
   * This matches one of the following:
   * - `call.assistant`,
   * - `call.assistantId`,
   * - `call.squad[n].assistant`,
   * - `call.squad[n].assistantId`,
   * - `call.squadId->[n].assistant`,
   * - `call.squadId->[n].assistantId`.
   */
  assistant?: CreateAssistantDTO;
  /**
   * This is the customer associated with the call.
   *
   * This matches one of the following:
   * - `call.customer`,
   * - `call.customerId`.
   */
  customer?: CreateCustomerDTO;
  /**
   * This is the call object.
   *
   * This matches what was returned in POST /call.
   *
   * Note: This might get stale during the call. To get the latest call object, especially after the call is ended, use GET /call/:id.
   */
  call?: Call;
  /** This is the analysis of the call. This can also be found at `call.analysis` on GET /call/:id. */
  analysis: Analysis;
  /**
   * This is the ISO 8601 date-time string of when the call started. This can also be found at `call.startedAt` on GET /call/:id.
   * @format date-time
   */
  startedAt?: string;
  /**
   * This is the ISO 8601 date-time string of when the call ended. This can also be found at `call.endedAt` on GET /call/:id.
   * @format date-time
   */
  endedAt?: string;
}

export interface ServerMessageHang {
  /**
   * This is the phone number associated with the call.
   *
   * This matches one of the following:
   * - `call.phoneNumber`,
   * - `call.phoneNumberId`.
   */
  phoneNumber?:
    | CreateByoPhoneNumberDTO
    | CreateTwilioPhoneNumberDTO
    | CreateVonagePhoneNumberDTO
    | CreateVapiPhoneNumberDTO;
  /**
   * This is the type of the message. "hang" is sent when the assistant is hanging due to a delay. The delay can be caused by many factors, such as:
   * - the model is too slow to respond
   * - the voice is too slow to respond
   * - the tool call is still waiting for a response from your server
   * - etc.
   */
  type: 'hang';
  /** This is the ISO-8601 formatted timestamp of when the message was sent. */
  timestamp?: string;
  /**
   * This is a live version of the `call.artifact`.
   *
   * This matches what is stored on `call.artifact` after the call.
   */
  artifact?: Artifact;
  /**
   * This is the assistant that is currently active. This is provided for convenience.
   *
   * This matches one of the following:
   * - `call.assistant`,
   * - `call.assistantId`,
   * - `call.squad[n].assistant`,
   * - `call.squad[n].assistantId`,
   * - `call.squadId->[n].assistant`,
   * - `call.squadId->[n].assistantId`.
   */
  assistant?: CreateAssistantDTO;
  /**
   * This is the customer associated with the call.
   *
   * This matches one of the following:
   * - `call.customer`,
   * - `call.customerId`.
   */
  customer?: CreateCustomerDTO;
  /**
   * This is the call object.
   *
   * This matches what was returned in POST /call.
   *
   * Note: This might get stale during the call. To get the latest call object, especially after the call is ended, use GET /call/:id.
   */
  call?: Call;
}

export interface ServerMessageKnowledgeBaseRequest {
  /**
   * This is the phone number associated with the call.
   *
   * This matches one of the following:
   * - `call.phoneNumber`,
   * - `call.phoneNumberId`.
   */
  phoneNumber?:
    | CreateByoPhoneNumberDTO
    | CreateTwilioPhoneNumberDTO
    | CreateVonagePhoneNumberDTO
    | CreateVapiPhoneNumberDTO;
  /** This is the type of the message. "knowledge-base-request" is sent to request knowledge base documents. To enable, use `assistant.knowledgeBase.provider=custom-knowledge-base`. */
  type: 'knowledge-base-request';
  /** These are the messages that are going to be sent to the `model` right after the `knowledge-base-request` webhook completes. */
  messages?: (UserMessage | SystemMessage | BotMessage | ToolCallMessage | ToolCallResultMessage)[];
  /** This is just `messages` formatted for OpenAI. */
  messagesOpenAIFormatted: OpenAIMessage[];
  /** This is the ISO-8601 formatted timestamp of when the message was sent. */
  timestamp?: string;
  /**
   * This is a live version of the `call.artifact`.
   *
   * This matches what is stored on `call.artifact` after the call.
   */
  artifact?: Artifact;
  /**
   * This is the assistant that is currently active. This is provided for convenience.
   *
   * This matches one of the following:
   * - `call.assistant`,
   * - `call.assistantId`,
   * - `call.squad[n].assistant`,
   * - `call.squad[n].assistantId`,
   * - `call.squadId->[n].assistant`,
   * - `call.squadId->[n].assistantId`.
   */
  assistant?: CreateAssistantDTO;
  /**
   * This is the customer associated with the call.
   *
   * This matches one of the following:
   * - `call.customer`,
   * - `call.customerId`.
   */
  customer?: CreateCustomerDTO;
  /**
   * This is the call object.
   *
   * This matches what was returned in POST /call.
   *
   * Note: This might get stale during the call. To get the latest call object, especially after the call is ended, use GET /call/:id.
   */
  call?: Call;
}

export interface ServerMessageModelOutput {
  /**
   * This is the phone number associated with the call.
   *
   * This matches one of the following:
   * - `call.phoneNumber`,
   * - `call.phoneNumberId`.
   */
  phoneNumber?:
    | CreateByoPhoneNumberDTO
    | CreateTwilioPhoneNumberDTO
    | CreateVonagePhoneNumberDTO
    | CreateVapiPhoneNumberDTO;
  /** This is the type of the message. "model-output" is sent as the model outputs tokens. */
  type: 'model-output';
  /** This is the ISO-8601 formatted timestamp of when the message was sent. */
  timestamp?: string;
  /**
   * This is a live version of the `call.artifact`.
   *
   * This matches what is stored on `call.artifact` after the call.
   */
  artifact?: Artifact;
  /**
   * This is the assistant that is currently active. This is provided for convenience.
   *
   * This matches one of the following:
   * - `call.assistant`,
   * - `call.assistantId`,
   * - `call.squad[n].assistant`,
   * - `call.squad[n].assistantId`,
   * - `call.squadId->[n].assistant`,
   * - `call.squadId->[n].assistantId`.
   */
  assistant?: CreateAssistantDTO;
  /**
   * This is the customer associated with the call.
   *
   * This matches one of the following:
   * - `call.customer`,
   * - `call.customerId`.
   */
  customer?: CreateCustomerDTO;
  /**
   * This is the call object.
   *
   * This matches what was returned in POST /call.
   *
   * Note: This might get stale during the call. To get the latest call object, especially after the call is ended, use GET /call/:id.
   */
  call?: Call;
  /** This is the output of the model. It can be a token or tool call. */
  output: object;
}

export interface ServerMessagePhoneCallControl {
  /**
   * This is the phone number associated with the call.
   *
   * This matches one of the following:
   * - `call.phoneNumber`,
   * - `call.phoneNumberId`.
   */
  phoneNumber?:
    | CreateByoPhoneNumberDTO
    | CreateTwilioPhoneNumberDTO
    | CreateVonagePhoneNumberDTO
    | CreateVapiPhoneNumberDTO;
  /**
   * This is the type of the message. "phone-call-control" is an advanced type of message.
   *
   * When it is requested in `assistant.serverMessages`, the hangup and forwarding responsibilities are delegated to your server. Vapi will no longer do the actual transfer and hangup.
   */
  type: 'phone-call-control';
  /** This is the request to control the phone call. */
  request: 'forward' | 'hang-up';
  /** This is the destination to forward the call to if the request is "forward". */
  destination?: TransferDestinationNumber | TransferDestinationSip;
  /** This is the ISO-8601 formatted timestamp of when the message was sent. */
  timestamp?: string;
  /**
   * This is a live version of the `call.artifact`.
   *
   * This matches what is stored on `call.artifact` after the call.
   */
  artifact?: Artifact;
  /**
   * This is the assistant that is currently active. This is provided for convenience.
   *
   * This matches one of the following:
   * - `call.assistant`,
   * - `call.assistantId`,
   * - `call.squad[n].assistant`,
   * - `call.squad[n].assistantId`,
   * - `call.squadId->[n].assistant`,
   * - `call.squadId->[n].assistantId`.
   */
  assistant?: CreateAssistantDTO;
  /**
   * This is the customer associated with the call.
   *
   * This matches one of the following:
   * - `call.customer`,
   * - `call.customerId`.
   */
  customer?: CreateCustomerDTO;
  /**
   * This is the call object.
   *
   * This matches what was returned in POST /call.
   *
   * Note: This might get stale during the call. To get the latest call object, especially after the call is ended, use GET /call/:id.
   */
  call?: Call;
}

export interface ServerMessageSpeechUpdate {
  /**
   * This is the phone number associated with the call.
   *
   * This matches one of the following:
   * - `call.phoneNumber`,
   * - `call.phoneNumberId`.
   */
  phoneNumber?:
    | CreateByoPhoneNumberDTO
    | CreateTwilioPhoneNumberDTO
    | CreateVonagePhoneNumberDTO
    | CreateVapiPhoneNumberDTO;
  /** This is the type of the message. "speech-update" is sent whenever assistant or user start or stop speaking. */
  type: 'speech-update';
  /** This is the status of the speech update. */
  status: 'started' | 'stopped';
  /** This is the role which the speech update is for. */
  role: 'assistant' | 'user';
  /** This is the ISO-8601 formatted timestamp of when the message was sent. */
  timestamp?: string;
  /**
   * This is a live version of the `call.artifact`.
   *
   * This matches what is stored on `call.artifact` after the call.
   */
  artifact?: Artifact;
  /**
   * This is the assistant that is currently active. This is provided for convenience.
   *
   * This matches one of the following:
   * - `call.assistant`,
   * - `call.assistantId`,
   * - `call.squad[n].assistant`,
   * - `call.squad[n].assistantId`,
   * - `call.squadId->[n].assistant`,
   * - `call.squadId->[n].assistantId`.
   */
  assistant?: CreateAssistantDTO;
  /**
   * This is the customer associated with the call.
   *
   * This matches one of the following:
   * - `call.customer`,
   * - `call.customerId`.
   */
  customer?: CreateCustomerDTO;
  /**
   * This is the call object.
   *
   * This matches what was returned in POST /call.
   *
   * Note: This might get stale during the call. To get the latest call object, especially after the call is ended, use GET /call/:id.
   */
  call?: Call;
}

export interface ServerMessageStatusUpdate {
  /**
   * This is the phone number associated with the call.
   *
   * This matches one of the following:
   * - `call.phoneNumber`,
   * - `call.phoneNumberId`.
   */
  phoneNumber?:
    | CreateByoPhoneNumberDTO
    | CreateTwilioPhoneNumberDTO
    | CreateVonagePhoneNumberDTO
    | CreateVapiPhoneNumberDTO;
  /** This is the type of the message. "status-update" is sent whenever the `call.status` changes. */
  type: 'status-update';
  /** This is the status of the call. */
  status: 'scheduled' | 'queued' | 'ringing' | 'in-progress' | 'forwarding' | 'ended';
  /** This is the reason the call ended. This is only sent if the status is "ended". */
  endedReason?:
    | 'assistant-not-valid'
    | 'assistant-not-provided'
    | 'call-start-error-neither-assistant-nor-server-set'
    | 'assistant-request-failed'
    | 'assistant-request-returned-error'
    | 'assistant-request-returned-unspeakable-error'
    | 'assistant-request-returned-invalid-assistant'
    | 'assistant-request-returned-no-assistant'
    | 'assistant-request-returned-forwarding-phone-number'
    | 'assistant-ended-call'
    | 'assistant-said-end-call-phrase'
    | 'assistant-ended-call-with-hangup-task'
    | 'assistant-forwarded-call'
    | 'assistant-join-timed-out'
    | 'customer-busy'
    | 'customer-ended-call'
    | 'customer-did-not-answer'
    | 'customer-did-not-give-microphone-permission'
    | 'assistant-said-message-with-end-call-enabled'
    | 'exceeded-max-duration'
    | 'manually-canceled'
    | 'phone-call-provider-closed-websocket'
    | 'db-error'
    | 'assistant-not-found'
    | 'license-check-failed'
    | 'pipeline-error-openai-voice-failed'
    | 'pipeline-error-cartesia-voice-failed'
    | 'pipeline-error-deepgram-voice-failed'
    | 'pipeline-error-eleven-labs-voice-failed'
    | 'pipeline-error-playht-voice-failed'
    | 'pipeline-error-lmnt-voice-failed'
    | 'pipeline-error-azure-voice-failed'
    | 'pipeline-error-rime-ai-voice-failed'
    | 'pipeline-error-smallest-ai-voice-failed'
    | 'pipeline-error-neuphonic-voice-failed'
    | 'pipeline-error-hume-voice-failed'
    | 'pipeline-error-sesame-voice-failed'
    | 'pipeline-error-deepgram-transcriber-failed'
    | 'pipeline-error-gladia-transcriber-failed'
    | 'pipeline-error-speechmatics-transcriber-failed'
    | 'pipeline-error-assembly-ai-transcriber-failed'
    | 'pipeline-error-talkscriber-transcriber-failed'
    | 'pipeline-error-azure-speech-transcriber-failed'
    | 'pipeline-error-vapi-llm-failed'
    | 'pipeline-error-vapi-400-bad-request-validation-failed'
    | 'pipeline-error-vapi-401-unauthorized'
    | 'pipeline-error-vapi-403-model-access-denied'
    | 'pipeline-error-vapi-429-exceeded-quota'
    | 'pipeline-error-vapi-500-server-error'
    | 'pipeline-no-available-model'
    | 'worker-shutdown'
    | 'unknown-error'
    | 'vonage-disconnected'
    | 'vonage-failed-to-connect-call'
    | 'vonage-completed'
    | 'phone-call-provider-bypass-enabled-but-no-call-received'
    | 'vapifault-phone-call-worker-setup-socket-error'
    | 'vapifault-phone-call-worker-worker-setup-socket-timeout'
    | 'vapifault-phone-call-worker-could-not-find-call'
    | 'vapifault-transport-never-connected'
    | 'vapifault-web-call-worker-setup-failed'
    | 'vapifault-transport-connected-but-call-not-active'
    | 'vapifault-call-started-but-connection-to-transport-missing'
    | 'pipeline-error-openai-llm-failed'
    | 'pipeline-error-azure-openai-llm-failed'
    | 'pipeline-error-groq-llm-failed'
    | 'pipeline-error-google-llm-failed'
    | 'pipeline-error-xai-llm-failed'
    | 'pipeline-error-mistral-llm-failed'
    | 'pipeline-error-inflection-ai-llm-failed'
    | 'pipeline-error-cerebras-llm-failed'
    | 'pipeline-error-deep-seek-llm-failed'
    | 'pipeline-error-openai-400-bad-request-validation-failed'
    | 'pipeline-error-openai-401-unauthorized'
    | 'pipeline-error-openai-403-model-access-denied'
    | 'pipeline-error-openai-429-exceeded-quota'
    | 'pipeline-error-openai-500-server-error'
    | 'pipeline-error-google-400-bad-request-validation-failed'
    | 'pipeline-error-google-401-unauthorized'
    | 'pipeline-error-google-403-model-access-denied'
    | 'pipeline-error-google-429-exceeded-quota'
    | 'pipeline-error-google-500-server-error'
    | 'pipeline-error-xai-400-bad-request-validation-failed'
    | 'pipeline-error-xai-401-unauthorized'
    | 'pipeline-error-xai-403-model-access-denied'
    | 'pipeline-error-xai-429-exceeded-quota'
    | 'pipeline-error-xai-500-server-error'
    | 'pipeline-error-mistral-400-bad-request-validation-failed'
    | 'pipeline-error-mistral-401-unauthorized'
    | 'pipeline-error-mistral-403-model-access-denied'
    | 'pipeline-error-mistral-429-exceeded-quota'
    | 'pipeline-error-mistral-500-server-error'
    | 'pipeline-error-inflection-ai-400-bad-request-validation-failed'
    | 'pipeline-error-inflection-ai-401-unauthorized'
    | 'pipeline-error-inflection-ai-403-model-access-denied'
    | 'pipeline-error-inflection-ai-429-exceeded-quota'
    | 'pipeline-error-inflection-ai-500-server-error'
    | 'pipeline-error-deep-seek-400-bad-request-validation-failed'
    | 'pipeline-error-deep-seek-401-unauthorized'
    | 'pipeline-error-deep-seek-403-model-access-denied'
    | 'pipeline-error-deep-seek-429-exceeded-quota'
    | 'pipeline-error-deep-seek-500-server-error'
    | 'pipeline-error-azure-openai-400-bad-request-validation-failed'
    | 'pipeline-error-azure-openai-401-unauthorized'
    | 'pipeline-error-azure-openai-403-model-access-denied'
    | 'pipeline-error-azure-openai-429-exceeded-quota'
    | 'pipeline-error-azure-openai-500-server-error'
    | 'pipeline-error-groq-400-bad-request-validation-failed'
    | 'pipeline-error-groq-401-unauthorized'
    | 'pipeline-error-groq-403-model-access-denied'
    | 'pipeline-error-groq-429-exceeded-quota'
    | 'pipeline-error-groq-500-server-error'
    | 'pipeline-error-cerebras-400-bad-request-validation-failed'
    | 'pipeline-error-cerebras-401-unauthorized'
    | 'pipeline-error-cerebras-403-model-access-denied'
    | 'pipeline-error-cerebras-429-exceeded-quota'
    | 'pipeline-error-cerebras-500-server-error'
    | 'pipeline-error-anthropic-400-bad-request-validation-failed'
    | 'pipeline-error-anthropic-401-unauthorized'
    | 'pipeline-error-anthropic-403-model-access-denied'
    | 'pipeline-error-anthropic-429-exceeded-quota'
    | 'pipeline-error-anthropic-500-server-error'
    | 'pipeline-error-anthropic-llm-failed'
    | 'pipeline-error-together-ai-400-bad-request-validation-failed'
    | 'pipeline-error-together-ai-401-unauthorized'
    | 'pipeline-error-together-ai-403-model-access-denied'
    | 'pipeline-error-together-ai-429-exceeded-quota'
    | 'pipeline-error-together-ai-500-server-error'
    | 'pipeline-error-together-ai-llm-failed'
    | 'pipeline-error-anyscale-400-bad-request-validation-failed'
    | 'pipeline-error-anyscale-401-unauthorized'
    | 'pipeline-error-anyscale-403-model-access-denied'
    | 'pipeline-error-anyscale-429-exceeded-quota'
    | 'pipeline-error-anyscale-500-server-error'
    | 'pipeline-error-anyscale-llm-failed'
    | 'pipeline-error-openrouter-400-bad-request-validation-failed'
    | 'pipeline-error-openrouter-401-unauthorized'
    | 'pipeline-error-openrouter-403-model-access-denied'
    | 'pipeline-error-openrouter-429-exceeded-quota'
    | 'pipeline-error-openrouter-500-server-error'
    | 'pipeline-error-openrouter-llm-failed'
    | 'pipeline-error-perplexity-ai-400-bad-request-validation-failed'
    | 'pipeline-error-perplexity-ai-401-unauthorized'
    | 'pipeline-error-perplexity-ai-403-model-access-denied'
    | 'pipeline-error-perplexity-ai-429-exceeded-quota'
    | 'pipeline-error-perplexity-ai-500-server-error'
    | 'pipeline-error-perplexity-ai-llm-failed'
    | 'pipeline-error-deepinfra-400-bad-request-validation-failed'
    | 'pipeline-error-deepinfra-401-unauthorized'
    | 'pipeline-error-deepinfra-403-model-access-denied'
    | 'pipeline-error-deepinfra-429-exceeded-quota'
    | 'pipeline-error-deepinfra-500-server-error'
    | 'pipeline-error-deepinfra-llm-failed'
    | 'pipeline-error-runpod-400-bad-request-validation-failed'
    | 'pipeline-error-runpod-401-unauthorized'
    | 'pipeline-error-runpod-403-model-access-denied'
    | 'pipeline-error-runpod-429-exceeded-quota'
    | 'pipeline-error-runpod-500-server-error'
    | 'pipeline-error-runpod-llm-failed'
    | 'pipeline-error-custom-llm-400-bad-request-validation-failed'
    | 'pipeline-error-custom-llm-401-unauthorized'
    | 'pipeline-error-custom-llm-403-model-access-denied'
    | 'pipeline-error-custom-llm-429-exceeded-quota'
    | 'pipeline-error-custom-llm-500-server-error'
    | 'pipeline-error-custom-llm-llm-failed'
    | 'pipeline-error-custom-voice-failed'
    | 'pipeline-error-cartesia-socket-hang-up'
    | 'pipeline-error-cartesia-requested-payment'
    | 'pipeline-error-cartesia-500-server-error'
    | 'pipeline-error-cartesia-503-server-error'
    | 'pipeline-error-cartesia-522-server-error'
    | 'pipeline-error-eleven-labs-voice-not-found'
    | 'pipeline-error-eleven-labs-quota-exceeded'
    | 'pipeline-error-eleven-labs-unauthorized-access'
    | 'pipeline-error-eleven-labs-unauthorized-to-access-model'
    | 'pipeline-error-eleven-labs-professional-voices-only-for-creator-plus'
    | 'pipeline-error-eleven-labs-blocked-free-plan-and-requested-upgrade'
    | 'pipeline-error-eleven-labs-blocked-concurrent-requests-and-requested-upgrade'
    | 'pipeline-error-eleven-labs-blocked-using-instant-voice-clone-and-requested-upgrade'
    | 'pipeline-error-eleven-labs-system-busy-and-requested-upgrade'
    | 'pipeline-error-eleven-labs-voice-not-fine-tuned'
    | 'pipeline-error-eleven-labs-invalid-api-key'
    | 'pipeline-error-eleven-labs-invalid-voice-samples'
    | 'pipeline-error-eleven-labs-voice-disabled-by-owner'
    | 'pipeline-error-eleven-labs-blocked-account-in-probation'
    | 'pipeline-error-eleven-labs-blocked-content-against-their-policy'
    | 'pipeline-error-eleven-labs-missing-samples-for-voice-clone'
    | 'pipeline-error-eleven-labs-voice-not-fine-tuned-and-cannot-be-used'
    | 'pipeline-error-eleven-labs-voice-not-allowed-for-free-users'
    | 'pipeline-error-eleven-labs-500-server-error'
    | 'pipeline-error-eleven-labs-max-character-limit-exceeded'
    | 'pipeline-error-eleven-labs-blocked-voice-potentially-against-terms-of-service-and-awaiting-verification'
    | 'pipeline-error-playht-request-timed-out'
    | 'pipeline-error-playht-invalid-voice'
    | 'pipeline-error-playht-unexpected-error'
    | 'pipeline-error-playht-out-of-credits'
    | 'pipeline-error-playht-invalid-emotion'
    | 'pipeline-error-playht-voice-must-be-a-valid-voice-manifest-uri'
    | 'pipeline-error-playht-401-unauthorized'
    | 'pipeline-error-playht-403-forbidden-out-of-characters'
    | 'pipeline-error-playht-403-forbidden-api-access-not-available'
    | 'pipeline-error-playht-429-exceeded-quota'
    | 'pipeline-error-playht-502-gateway-error'
    | 'pipeline-error-playht-504-gateway-error'
    | 'pipeline-error-tavus-video-failed'
    | 'pipeline-error-custom-transcriber-failed'
    | 'pipeline-error-11labs-transcriber-failed'
    | 'pipeline-error-deepgram-returning-403-model-access-denied'
    | 'pipeline-error-deepgram-returning-401-invalid-credentials'
    | 'pipeline-error-deepgram-returning-404-not-found'
    | 'pipeline-error-deepgram-returning-400-no-such-model-language-tier-combination'
    | 'pipeline-error-deepgram-returning-500-invalid-json'
    | 'pipeline-error-deepgram-returning-502-network-error'
    | 'pipeline-error-deepgram-returning-502-bad-gateway-ehostunreach'
    | 'pipeline-error-google-transcriber-failed'
    | 'pipeline-error-openai-transcriber-failed'
    | 'call.start.error-get-org'
    | 'call.start.error-get-subscription'
    | 'call.start.error-get-assistant'
    | 'call.start.error-get-phone-number'
    | 'call.start.error-get-customer'
    | 'call.start.error-get-resources-validation'
    | 'call.start.error-vapi-number-international'
    | 'call.start.error-vapi-number-outbound-daily-limit'
    | 'call.start.error-get-transport'
    | 'silence-timed-out'
    | 'sip-gateway-failed-to-connect-call'
    | 'twilio-failed-to-connect-call'
    | 'twilio-reported-customer-misdialed'
    | 'vonage-rejected'
    | 'voicemail';
  /** These are the conversation messages of the call. This is only sent if the status is "forwarding". */
  messages?: (UserMessage | SystemMessage | BotMessage | ToolCallMessage | ToolCallResultMessage)[];
  /** These are the conversation messages of the call. This is only sent if the status is "forwarding". */
  messagesOpenAIFormatted?: OpenAIMessage[];
  /** This is the destination the call is being transferred to. This is only sent if the status is "forwarding". */
  destination?: TransferDestinationNumber | TransferDestinationSip;
  /** This is the ISO-8601 formatted timestamp of when the message was sent. */
  timestamp?: string;
  /**
   * This is a live version of the `call.artifact`.
   *
   * This matches what is stored on `call.artifact` after the call.
   */
  artifact?: Artifact;
  /**
   * This is the assistant that is currently active. This is provided for convenience.
   *
   * This matches one of the following:
   * - `call.assistant`,
   * - `call.assistantId`,
   * - `call.squad[n].assistant`,
   * - `call.squad[n].assistantId`,
   * - `call.squadId->[n].assistant`,
   * - `call.squadId->[n].assistantId`.
   */
  assistant?: CreateAssistantDTO;
  /**
   * This is the customer associated with the call.
   *
   * This matches one of the following:
   * - `call.customer`,
   * - `call.customerId`.
   */
  customer?: CreateCustomerDTO;
  /**
   * This is the call object.
   *
   * This matches what was returned in POST /call.
   *
   * Note: This might get stale during the call. To get the latest call object, especially after the call is ended, use GET /call/:id.
   */
  call?: Call;
  /** This is the transcript of the call. This is only sent if the status is "forwarding". */
  transcript?: string;
  /** This is the summary of the call. This is only sent if the status is "forwarding". */
  summary?: string;
  /**
   * This is the inbound phone call debugging artifacts. This is only sent if the status is "ended" and there was an error accepting the inbound phone call.
   *
   * This will include any errors related to the "assistant-request" if one was made.
   */
  inboundPhoneCallDebuggingArtifacts?: object;
}

export interface ServerMessageToolCalls {
  /**
   * This is the phone number associated with the call.
   *
   * This matches one of the following:
   * - `call.phoneNumber`,
   * - `call.phoneNumberId`.
   */
  phoneNumber?:
    | CreateByoPhoneNumberDTO
    | CreateTwilioPhoneNumberDTO
    | CreateVonagePhoneNumberDTO
    | CreateVapiPhoneNumberDTO;
  /** This is the type of the message. "tool-calls" is sent to call a tool. */
  type?: 'tool-calls';
  /** This is the list of tools calls that the model is requesting along with the original tool configuration. */
  toolWithToolCallList: (
    | FunctionToolWithToolCall
    | GhlToolWithToolCall
    | MakeToolWithToolCall
    | BashToolWithToolCall
    | ComputerToolWithToolCall
    | TextEditorToolWithToolCall
    | GoogleCalendarCreateEventToolWithToolCall
  )[];
  /** This is the ISO-8601 formatted timestamp of when the message was sent. */
  timestamp?: string;
  /**
   * This is a live version of the `call.artifact`.
   *
   * This matches what is stored on `call.artifact` after the call.
   */
  artifact?: Artifact;
  /**
   * This is the assistant that is currently active. This is provided for convenience.
   *
   * This matches one of the following:
   * - `call.assistant`,
   * - `call.assistantId`,
   * - `call.squad[n].assistant`,
   * - `call.squad[n].assistantId`,
   * - `call.squadId->[n].assistant`,
   * - `call.squadId->[n].assistantId`.
   */
  assistant?: CreateAssistantDTO;
  /**
   * This is the customer associated with the call.
   *
   * This matches one of the following:
   * - `call.customer`,
   * - `call.customerId`.
   */
  customer?: CreateCustomerDTO;
  /**
   * This is the call object.
   *
   * This matches what was returned in POST /call.
   *
   * Note: This might get stale during the call. To get the latest call object, especially after the call is ended, use GET /call/:id.
   */
  call?: Call;
  /** This is the list of tool calls that the model is requesting. */
  toolCallList: ToolCall[];
}

export interface ServerMessageTransferDestinationRequest {
  /**
   * This is the phone number associated with the call.
   *
   * This matches one of the following:
   * - `call.phoneNumber`,
   * - `call.phoneNumberId`.
   */
  phoneNumber?:
    | CreateByoPhoneNumberDTO
    | CreateTwilioPhoneNumberDTO
    | CreateVonagePhoneNumberDTO
    | CreateVapiPhoneNumberDTO;
  /** This is the type of the message. "transfer-destination-request" is sent when the model is requesting transfer but destination is unknown. */
  type: 'transfer-destination-request';
  /** This is the ISO-8601 formatted timestamp of when the message was sent. */
  timestamp?: string;
  /**
   * This is a live version of the `call.artifact`.
   *
   * This matches what is stored on `call.artifact` after the call.
   */
  artifact?: Artifact;
  /**
   * This is the assistant that is currently active. This is provided for convenience.
   *
   * This matches one of the following:
   * - `call.assistant`,
   * - `call.assistantId`,
   * - `call.squad[n].assistant`,
   * - `call.squad[n].assistantId`,
   * - `call.squadId->[n].assistant`,
   * - `call.squadId->[n].assistantId`.
   */
  assistant?: CreateAssistantDTO;
  /**
   * This is the customer associated with the call.
   *
   * This matches one of the following:
   * - `call.customer`,
   * - `call.customerId`.
   */
  customer?: CreateCustomerDTO;
  /**
   * This is the call object.
   *
   * This matches what was returned in POST /call.
   *
   * Note: This might get stale during the call. To get the latest call object, especially after the call is ended, use GET /call/:id.
   */
  call?: Call;
}

export interface ServerMessageTransferUpdate {
  /**
   * This is the phone number associated with the call.
   *
   * This matches one of the following:
   * - `call.phoneNumber`,
   * - `call.phoneNumberId`.
   */
  phoneNumber?:
    | CreateByoPhoneNumberDTO
    | CreateTwilioPhoneNumberDTO
    | CreateVonagePhoneNumberDTO
    | CreateVapiPhoneNumberDTO;
  /** This is the type of the message. "transfer-update" is sent whenever a transfer happens. */
  type: 'transfer-update';
  /** This is the destination of the transfer. */
  destination?:
    | TransferDestinationAssistant
    | TransferDestinationStep
    | TransferDestinationNumber
    | TransferDestinationSip;
  /** This is the ISO-8601 formatted timestamp of when the message was sent. */
  timestamp?: string;
  /**
   * This is a live version of the `call.artifact`.
   *
   * This matches what is stored on `call.artifact` after the call.
   */
  artifact?: Artifact;
  /**
   * This is the assistant that is currently active. This is provided for convenience.
   *
   * This matches one of the following:
   * - `call.assistant`,
   * - `call.assistantId`,
   * - `call.squad[n].assistant`,
   * - `call.squad[n].assistantId`,
   * - `call.squadId->[n].assistant`,
   * - `call.squadId->[n].assistantId`.
   */
  assistant?: CreateAssistantDTO;
  /**
   * This is the customer associated with the call.
   *
   * This matches one of the following:
   * - `call.customer`,
   * - `call.customerId`.
   */
  customer?: CreateCustomerDTO;
  /**
   * This is the call object.
   *
   * This matches what was returned in POST /call.
   *
   * Note: This might get stale during the call. To get the latest call object, especially after the call is ended, use GET /call/:id.
   */
  call?: Call;
  /** This is the assistant that the call is being transferred to. This is only sent if `destination.type` is "assistant". */
  toAssistant?: CreateAssistantDTO;
  /** This is the assistant that the call is being transferred from. This is only sent if `destination.type` is "assistant". */
  fromAssistant?: CreateAssistantDTO;
  /** This is the step that the conversation moved to. */
  toStepRecord?: object;
  /** This is the step that the conversation moved from. = */
  fromStepRecord?: object;
}

export interface ServerMessageTranscript {
  /**
   * This is the phone number associated with the call.
   *
   * This matches one of the following:
   * - `call.phoneNumber`,
   * - `call.phoneNumberId`.
   */
  phoneNumber?:
    | CreateByoPhoneNumberDTO
    | CreateTwilioPhoneNumberDTO
    | CreateVonagePhoneNumberDTO
    | CreateVapiPhoneNumberDTO;
  /** This is the type of the message. "transcript" is sent as transcriber outputs partial or final transcript. */
  type: 'transcript' | "transcript[transcriptType='final']";
  /** This is the ISO-8601 formatted timestamp of when the message was sent. */
  timestamp?: string;
  /**
   * This is a live version of the `call.artifact`.
   *
   * This matches what is stored on `call.artifact` after the call.
   */
  artifact?: Artifact;
  /**
   * This is the assistant that is currently active. This is provided for convenience.
   *
   * This matches one of the following:
   * - `call.assistant`,
   * - `call.assistantId`,
   * - `call.squad[n].assistant`,
   * - `call.squad[n].assistantId`,
   * - `call.squadId->[n].assistant`,
   * - `call.squadId->[n].assistantId`.
   */
  assistant?: CreateAssistantDTO;
  /**
   * This is the customer associated with the call.
   *
   * This matches one of the following:
   * - `call.customer`,
   * - `call.customerId`.
   */
  customer?: CreateCustomerDTO;
  /**
   * This is the call object.
   *
   * This matches what was returned in POST /call.
   *
   * Note: This might get stale during the call. To get the latest call object, especially after the call is ended, use GET /call/:id.
   */
  call?: Call;
  /** This is the role for which the transcript is for. */
  role: 'assistant' | 'user';
  /** This is the type of the transcript. */
  transcriptType: 'partial' | 'final';
  /** This is the transcript content. */
  transcript: string;
}

export interface ServerMessageUserInterrupted {
  /**
   * This is the phone number associated with the call.
   *
   * This matches one of the following:
   * - `call.phoneNumber`,
   * - `call.phoneNumberId`.
   */
  phoneNumber?:
    | CreateByoPhoneNumberDTO
    | CreateTwilioPhoneNumberDTO
    | CreateVonagePhoneNumberDTO
    | CreateVapiPhoneNumberDTO;
  /** This is the type of the message. "user-interrupted" is sent when the user interrupts the assistant. */
  type: 'user-interrupted';
  /** This is the ISO-8601 formatted timestamp of when the message was sent. */
  timestamp?: string;
  /**
   * This is a live version of the `call.artifact`.
   *
   * This matches what is stored on `call.artifact` after the call.
   */
  artifact?: Artifact;
  /**
   * This is the assistant that is currently active. This is provided for convenience.
   *
   * This matches one of the following:
   * - `call.assistant`,
   * - `call.assistantId`,
   * - `call.squad[n].assistant`,
   * - `call.squad[n].assistantId`,
   * - `call.squadId->[n].assistant`,
   * - `call.squadId->[n].assistantId`.
   */
  assistant?: CreateAssistantDTO;
  /**
   * This is the customer associated with the call.
   *
   * This matches one of the following:
   * - `call.customer`,
   * - `call.customerId`.
   */
  customer?: CreateCustomerDTO;
  /**
   * This is the call object.
   *
   * This matches what was returned in POST /call.
   *
   * Note: This might get stale during the call. To get the latest call object, especially after the call is ended, use GET /call/:id.
   */
  call?: Call;
}

export interface ServerMessageLanguageChangeDetected {
  /**
   * This is the phone number associated with the call.
   *
   * This matches one of the following:
   * - `call.phoneNumber`,
   * - `call.phoneNumberId`.
   */
  phoneNumber?:
    | CreateByoPhoneNumberDTO
    | CreateTwilioPhoneNumberDTO
    | CreateVonagePhoneNumberDTO
    | CreateVapiPhoneNumberDTO;
  /** This is the type of the message. "language-change-detected" is sent when the transcriber is automatically switched based on the detected language. */
  type: 'language-change-detected';
  /** This is the ISO-8601 formatted timestamp of when the message was sent. */
  timestamp?: string;
  /**
   * This is a live version of the `call.artifact`.
   *
   * This matches what is stored on `call.artifact` after the call.
   */
  artifact?: Artifact;
  /**
   * This is the assistant that is currently active. This is provided for convenience.
   *
   * This matches one of the following:
   * - `call.assistant`,
   * - `call.assistantId`,
   * - `call.squad[n].assistant`,
   * - `call.squad[n].assistantId`,
   * - `call.squadId->[n].assistant`,
   * - `call.squadId->[n].assistantId`.
   */
  assistant?: CreateAssistantDTO;
  /**
   * This is the customer associated with the call.
   *
   * This matches one of the following:
   * - `call.customer`,
   * - `call.customerId`.
   */
  customer?: CreateCustomerDTO;
  /**
   * This is the call object.
   *
   * This matches what was returned in POST /call.
   *
   * Note: This might get stale during the call. To get the latest call object, especially after the call is ended, use GET /call/:id.
   */
  call?: Call;
  /** This is the language the transcriber is switched to. */
  language: string;
}

export interface ServerMessageVoiceInput {
  /**
   * This is the phone number associated with the call.
   *
   * This matches one of the following:
   * - `call.phoneNumber`,
   * - `call.phoneNumberId`.
   */
  phoneNumber?:
    | CreateByoPhoneNumberDTO
    | CreateTwilioPhoneNumberDTO
    | CreateVonagePhoneNumberDTO
    | CreateVapiPhoneNumberDTO;
  /** This is the type of the message. "voice-input" is sent when a generation is requested from voice provider. */
  type: 'voice-input';
  /** This is the ISO-8601 formatted timestamp of when the message was sent. */
  timestamp?: string;
  /**
   * This is a live version of the `call.artifact`.
   *
   * This matches what is stored on `call.artifact` after the call.
   */
  artifact?: Artifact;
  /**
   * This is the assistant that is currently active. This is provided for convenience.
   *
   * This matches one of the following:
   * - `call.assistant`,
   * - `call.assistantId`,
   * - `call.squad[n].assistant`,
   * - `call.squad[n].assistantId`,
   * - `call.squadId->[n].assistant`,
   * - `call.squadId->[n].assistantId`.
   */
  assistant?: CreateAssistantDTO;
  /**
   * This is the customer associated with the call.
   *
   * This matches one of the following:
   * - `call.customer`,
   * - `call.customerId`.
   */
  customer?: CreateCustomerDTO;
  /**
   * This is the call object.
   *
   * This matches what was returned in POST /call.
   *
   * Note: This might get stale during the call. To get the latest call object, especially after the call is ended, use GET /call/:id.
   */
  call?: Call;
  /** This is the voice input content */
  input: string;
}

export interface ServerMessageVoiceRequest {
  /**
   * This is the phone number associated with the call.
   *
   * This matches one of the following:
   * - `call.phoneNumber`,
   * - `call.phoneNumberId`.
   */
  phoneNumber?:
    | CreateByoPhoneNumberDTO
    | CreateTwilioPhoneNumberDTO
    | CreateVonagePhoneNumberDTO
    | CreateVapiPhoneNumberDTO;
  /**
   * This is the type of the message. "voice-request" is sent when using `assistant.voice={ "type": "custom-voice" }`.
   *
   * Here is what the request will look like:
   *
   * POST https://{assistant.voice.server.url}
   * Content-Type: application/json
   *
   * {
   *   "messsage": {
   *     "type": "voice-request",
   *     "text": "Hello, world!",
   *     "sampleRate": 24000,
   *     ...other metadata about the call...
   *   }
   * }
   *
   * The expected response is 1-channel 16-bit raw PCM audio at the sample rate specified in the request. Here is how the response will be piped to the transport:
   * ```
   * response.on('data', (chunk: Buffer) => {
   *   outputStream.write(chunk);
   * });
   * ```
   */
  type: 'voice-request';
  /** This is the ISO-8601 formatted timestamp of when the message was sent. */
  timestamp?: string;
  /**
   * This is a live version of the `call.artifact`.
   *
   * This matches what is stored on `call.artifact` after the call.
   */
  artifact?: Artifact;
  /**
   * This is the assistant that is currently active. This is provided for convenience.
   *
   * This matches one of the following:
   * - `call.assistant`,
   * - `call.assistantId`,
   * - `call.squad[n].assistant`,
   * - `call.squad[n].assistantId`,
   * - `call.squadId->[n].assistant`,
   * - `call.squadId->[n].assistantId`.
   */
  assistant?: CreateAssistantDTO;
  /**
   * This is the customer associated with the call.
   *
   * This matches one of the following:
   * - `call.customer`,
   * - `call.customerId`.
   */
  customer?: CreateCustomerDTO;
  /**
   * This is the call object.
   *
   * This matches what was returned in POST /call.
   *
   * Note: This might get stale during the call. To get the latest call object, especially after the call is ended, use GET /call/:id.
   */
  call?: Call;
  /** This is the text to be synthesized. */
  text: string;
  /** This is the sample rate to be synthesized. */
  sampleRate: number;
}

export interface ServerMessage {
  /**
   * These are all the messages that can be sent to your server before, after and during the call. Configure the messages you'd like to receive in `assistant.serverMessages`.
   *
   * The server where the message is sent is determined by the following precedence order:
   *
   * 1. `tool.server.url` (if configured, and only for "tool-calls" message)
   * 2. `assistant.serverUrl` (if configure)
   * 3. `phoneNumber.serverUrl` (if configured)
   * 4. `org.serverUrl` (if configured)
   */
  message:
    | ServerMessageAssistantRequest
    | ServerMessageConversationUpdate
    | ServerMessageEndOfCallReport
    | ServerMessageHang
    | ServerMessageKnowledgeBaseRequest
    | ServerMessageModelOutput
    | ServerMessagePhoneCallControl
    | ServerMessageSpeechUpdate
    | ServerMessageStatusUpdate
    | ServerMessageToolCalls
    | ServerMessageTransferDestinationRequest
    | ServerMessageTransferUpdate
    | ServerMessageTranscript
    | ServerMessageUserInterrupted
    | ServerMessageLanguageChangeDetected
    | ServerMessageVoiceInput
    | ServerMessageVoiceRequest;
}

export interface ServerMessageResponseAssistantRequest {
  /**
   * This is the destination to transfer the inbound call to. This will immediately transfer without using any assistants.
   *
   * If this is sent, `assistantId`, `assistant`, `squadId`, and `squad` are ignored.
   */
  destination?: TransferDestinationNumber | TransferDestinationSip;
  /** This is the assistant that will be used for the call. To use a transient assistant, use `assistant` instead. */
  assistantId?: string | null;
  /**
   * This is the assistant that will be used for the call. To use an existing assistant, use `assistantId` instead.
   *
   * If you're unsure why you're getting an invalid assistant, try logging your response and send the JSON blob to POST /assistant which will return the validation errors.
   */
  assistant?: CreateAssistantDTO;
  /** These are the overrides for the `assistant` or `assistantId`'s settings and template variables. */
  assistantOverrides?: AssistantOverrides;
  /** This is the squad that will be used for the call. To use a transient squad, use `squad` instead. */
  squadId?: string;
  /** This is a squad that will be used for the call. To use an existing squad, use `squadId` instead. */
  squad?: CreateSquadDTO;
  /**
   * This is the error if the call shouldn't be accepted. This is spoken to the customer.
   *
   * If this is sent, `assistantId`, `assistant`, `squadId`, `squad`, and `destination` are ignored.
   */
  error?: string;
}

export interface KnowledgeBaseResponseDocument {
  /** This is the content of the document. */
  content: string;
  /** This is the similarity score of the document. */
  similarity: number;
  /** This is the uuid of the document. */
  uuid?: string;
}

export interface ServerMessageResponseKnowledgeBaseRequest {
  /** This is the list of documents that will be sent to the model alongside the `messages` to generate a response. */
  documents?: KnowledgeBaseResponseDocument[];
  /** This can be used to skip the model output generation and speak a custom message. */
  message?: CustomMessage;
}

export interface ToolCallResult {
  /**
   * This is the message that will be spoken to the user.
   *
   * If this is not returned, assistant will speak:
   * 1. a `request-complete` or `request-failed` message from `tool.messages`, if it exists
   * 2. a response generated by the model, if not
   */
  message?: (ToolMessageComplete | ToolMessageFailed)[];
  /** This is the name of the function the model called. */
  name: string;
  /** This is the unique identifier for the tool call. */
  toolCallId: string;
  /**
   * This is the result if the tool call was successful. This is added to the conversation history.
   *
   * Further, if this is returned, assistant will speak:
   * 1. the `message`, if it exists and is of type `request-complete`
   * 2. a `request-complete` message from `tool.messages`, if it exists
   * 3. a response generated by the model, if neither exist
   */
  result?: string;
  /**
   * This is the error if the tool call was not successful. This is added to the conversation history.
   *
   * Further, if this is returned, assistant will speak:
   * 1. the `message`, if it exists and is of type `request-failed`
   * 2. a `request-failed` message from `tool.messages`, if it exists
   * 3. a response generated by the model, if neither exist
   */
  error?: string;
}

export interface ServerMessageResponseToolCalls {
  /** These are the results of the "tool-calls" message. */
  results?: ToolCallResult[];
  /** This is the error message if the tool call was not successful. */
  error?: string;
}

export interface ServerMessageResponseTransferDestinationRequest {
  /** This is the destination you'd like the call to be transferred to. */
  destination?:
    | TransferDestinationAssistant
    | TransferDestinationStep
    | TransferDestinationNumber
    | TransferDestinationSip;
  /** This is the error message if the transfer should not be made. */
  error?: string;
}

export interface ServerMessageResponseVoiceRequest {
  /**
   * DO NOT respond to a `voice-request` webhook with this schema of { data }. This schema just exists to document what the response should look like. Follow these instructions:
   *
   * Here is what the request will look like:
   *
   * POST https://{assistant.voice.server.url}
   * Content-Type: application/json
   *
   * {
   *   "messsage": {
   *     "type": "voice-request",
   *     "text": "Hello, world!",
   *     "sampleRate": 24000,
   *     ...other metadata about the call...
   *   }
   * }
   *
   * The expected response is 1-channel 16-bit raw PCM audio at the sample rate specified in the request. Here is how the response will be piped to the transport:
   * ```
   * response.on('data', (chunk: Buffer) => {
   *   outputStream.write(chunk);
   * });
   * ```
   */
  data: string;
}

export interface ServerMessageResponse {
  /**
   * This is the response that is expected from the server to the message.
   *
   * Note: Most messages don't expect a response. Only "assistant-request", "tool-calls" and "transfer-destination-request" do.
   */
  messageResponse:
    | ServerMessageResponseAssistantRequest
    | ServerMessageResponseKnowledgeBaseRequest
    | ServerMessageResponseToolCalls
    | ServerMessageResponseTransferDestinationRequest
    | ServerMessageResponseVoiceRequest;
}

export interface ClientInboundMessageAddMessage {
  /** This is the type of the message. Send "add-message" message to add a message to the conversation history. */
  type: 'add-message';
  /** This is the message to add to the conversation. */
  message: OpenAIMessage;
  /**
   * This is the flag to trigger a response, or to insert the message into the conversation history silently. Defaults to `true`.
   *
   * Usage:
   * - Use `true` to trigger a response.
   * - Use `false` to insert the message into the conversation history silently.
   *
   * @default true
   * @default true
   */
  triggerResponseEnabled?: boolean;
}

export interface ClientInboundMessageControl {
  /**
   * This is the type of the message. Send "control" message to control the assistant. `control` options are:
   * - "mute-assistant" - mute the assistant
   * - "unmute-assistant" - unmute the assistant
   * - "say-first-message" - say the first message (this is used when video recording is enabled and the conversation is only started once the client side kicks off the recording)
   */
  type: 'control';
  /** This is the control action */
  control: 'mute-assistant' | 'unmute-assistant' | 'say-first-message';
}

export interface ClientInboundMessageSay {
  /** This is the type of the message. Send "say" message to make the assistant say something. */
  type?: 'say';
  /** This is the content to say. */
  content?: string;
  /** This is the flag to end call after content is spoken. */
  endCallAfterSpoken?: boolean;
  /** This is the flag for whether the message is interruptible. */
  interruptionsEnabled?: boolean;
}

export interface ClientInboundMessageEndCall {
  /** This is the type of the message. Send "end-call" message to end the call. */
  type: 'end-call';
}

export interface ClientInboundMessageTransfer {
  /** This is the type of the message. Send "transfer" message to transfer the call to a destination. */
  type: 'transfer';
  /** This is the destination to transfer the call to. */
  destination?: TransferDestinationNumber | TransferDestinationSip;
  /** This is the content to say. */
  content?: string;
}

export interface ClientInboundMessage {
  /** These are the messages that can be sent from client-side SDKs to control the call. */
  message:
    | ClientInboundMessageAddMessage
    | ClientInboundMessageControl
    | ClientInboundMessageSay
    | ClientInboundMessageEndCall
    | ClientInboundMessageTransfer;
}

export interface UserMessage {
  /** The role of the user in the conversation. */
  role: string;
  /** The message content from the user. */
  message: string;
  /** The timestamp when the message was sent. */
  time: number;
  /** The timestamp when the message ended. */
  endTime: number;
  /** The number of seconds from the start of the conversation. */
  secondsFromStart: number;
  /** The duration of the message in seconds. */
  duration?: number;
}

export interface SystemMessage {
  /** The role of the system in the conversation. */
  role: string;
  /** The message content from the system. */
  message: string;
  /** The timestamp when the message was sent. */
  time: number;
  /** The number of seconds from the start of the conversation. */
  secondsFromStart: number;
}

export interface BotMessage {
  /** The role of the bot in the conversation. */
  role: string;
  /** The message content from the bot. */
  message: string;
  /** The timestamp when the message was sent. */
  time: number;
  /** The timestamp when the message ended. */
  endTime: number;
  /** The number of seconds from the start of the conversation. */
  secondsFromStart: number;
  /** The source of the message. */
  source?: string;
  /** The duration of the message in seconds. */
  duration?: number;
}

export interface ToolCallMessage {
  /** The role of the tool call in the conversation. */
  role: string;
  /** The list of tool calls made during the conversation. */
  toolCalls: object[];
  /** The message content for the tool call. */
  message: string;
  /** The timestamp when the message was sent. */
  time: number;
  /** The number of seconds from the start of the conversation. */
  secondsFromStart: number;
}

export interface ToolCallResultMessage {
  /** The role of the tool call result in the conversation. */
  role: string;
  /** The ID of the tool call. */
  toolCallId: string;
  /** The name of the tool that returned the result. */
  name: string;
  /** The result of the tool call in JSON format. */
  result: string;
  /** The timestamp when the message was sent. */
  time: number;
  /** The number of seconds from the start of the conversation. */
  secondsFromStart: number;
}

export interface TransportCost {
  /** This is the type of cost, always 'transport' for this class. */
  type: 'transport';
  provider?: 'twilio' | 'vonage' | 'vapi';
  /** This is the minutes of `transport` usage. This should match `call.endedAt` - `call.startedAt`. */
  minutes: number;
  /** This is the cost of the component in USD. */
  cost: number;
}

export interface TranscriberCost {
  /** This is the type of cost, always 'transcriber' for this class. */
  type: 'transcriber';
  /**
   * This is the transcriber that was used during the call.
   *
   * This matches one of the below:
   * - `call.assistant.transcriber`,
   * - `call.assistantId->transcriber`,
   * - `call.squad[n].assistant.transcriber`,
   * - `call.squad[n].assistantId->transcriber`,
   * - `call.squadId->[n].assistant.transcriber`,
   * - `call.squadId->[n].assistantId->transcriber`.
   */
  transcriber: object;
  /** This is the minutes of `transcriber` usage. This should match `call.endedAt` - `call.startedAt` for single assistant calls, while squad calls will have multiple transcriber costs one for each assistant that was used. */
  minutes: number;
  /** This is the cost of the component in USD. */
  cost: number;
}

export interface ModelCost {
  /** This is the type of cost, always 'model' for this class. */
  type: 'model';
  /**
   * This is the model that was used during the call.
   *
   * This matches one of the following:
   * - `call.assistant.model`,
   * - `call.assistantId->model`,
   * - `call.squad[n].assistant.model`,
   * - `call.squad[n].assistantId->model`,
   * - `call.squadId->[n].assistant.model`,
   * - `call.squadId->[n].assistantId->model`.
   */
  model: object;
  /** This is the number of prompt tokens used in the call. These should be total prompt tokens used in the call for single assistant calls, while squad calls will have multiple model costs one for each assistant that was used. */
  promptTokens: number;
  /** This is the number of completion tokens generated in the call. These should be total completion tokens used in the call for single assistant calls, while squad calls will have multiple model costs one for each assistant that was used. */
  completionTokens: number;
  /** This is the cost of the component in USD. */
  cost: number;
}

export interface VoiceCost {
  /** This is the type of cost, always 'voice' for this class. */
  type: 'voice';
  /**
   * This is the voice that was used during the call.
   *
   * This matches one of the following:
   * - `call.assistant.voice`,
   * - `call.assistantId->voice`,
   * - `call.squad[n].assistant.voice`,
   * - `call.squad[n].assistantId->voice`,
   * - `call.squadId->[n].assistant.voice`,
   * - `call.squadId->[n].assistantId->voice`.
   */
  voice: object;
  /** This is the number of characters that were generated during the call. These should be total characters used in the call for single assistant calls, while squad calls will have multiple voice costs one for each assistant that was used. */
  characters: number;
  /** This is the cost of the component in USD. */
  cost: number;
}

export interface VapiCost {
  /** This is the type of cost, always 'vapi' for this class. */
  type: 'vapi';
  /** This is the sub type of the cost. */
  subType: 'normal' | 'overage';
  /** This is the minutes of Vapi usage. This should match `call.endedAt` - `call.startedAt`. */
  minutes: number;
  /** This is the cost of the component in USD. */
  cost: number;
}

export interface AnalysisCost {
  /** This is the type of cost, always 'analysis' for this class. */
  type: 'analysis';
  /** This is the type of analysis performed. */
  analysisType: 'summary' | 'structuredData' | 'successEvaluation';
  /** This is the model that was used to perform the analysis. */
  model: object;
  /** This is the number of prompt tokens used in the analysis. */
  promptTokens: number;
  /** This is the number of completion tokens generated in the analysis. */
  completionTokens: number;
  /** This is the cost of the component in USD. */
  cost: number;
}

export interface VoicemailDetectionCost {
  /** This is the type of cost, always 'voicemail-detection' for this class. */
  type: 'voicemail-detection';
  /** This is the model that was used to perform the analysis. */
  model: object;
  /** This is the provider that was used to detect the voicemail. */
  provider: 'twilio' | 'google' | 'openai';
  /** This is the number of prompt text tokens used in the voicemail detection. */
  promptTextTokens: number;
  /** This is the number of prompt audio tokens used in the voicemail detection. */
  promptAudioTokens: number;
  /** This is the number of completion text tokens used in the voicemail detection. */
  completionTextTokens: number;
  /** This is the number of completion audio tokens used in the voicemail detection. */
  completionAudioTokens: number;
  /** This is the cost of the component in USD. */
  cost: number;
}

export interface FunctionToolWithToolCall {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "function" for Function tool. */
  type: 'function';
  toolCall: ToolCall;
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface GhlToolWithToolCall {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "ghl" for GHL tool. */
  type: 'ghl';
  toolCall: ToolCall;
  metadata: GhlToolMetadata;
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface MakeToolWithToolCall {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "make" for Make tool. */
  type: 'make';
  toolCall: ToolCall;
  metadata: MakeToolMetadata;
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface BashToolWithToolCall {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "bash" for Bash tool. */
  type: 'bash';
  /** The sub type of tool. */
  subType: 'bash_20241022';
  toolCall: ToolCall;
  /**
   * The name of the tool, fixed to 'bash'
   * @default "bash"
   */
  name: 'bash';
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface ComputerToolWithToolCall {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "computer" for Computer tool. */
  type: 'computer';
  /** The sub type of tool. */
  subType: 'computer_20241022';
  toolCall: ToolCall;
  /**
   * The name of the tool, fixed to 'computer'
   * @default "computer"
   */
  name: 'computer';
  /** The display width in pixels */
  displayWidthPx: number;
  /** The display height in pixels */
  displayHeightPx: number;
  /** Optional display number */
  displayNumber?: number;
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface TextEditorToolWithToolCall {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "textEditor" for Text Editor tool. */
  type: 'textEditor';
  /** The sub type of tool. */
  subType: 'text_editor_20241022';
  toolCall: ToolCall;
  /**
   * The name of the tool, fixed to 'str_replace_editor'
   * @default "str_replace_editor"
   */
  name: 'str_replace_editor';
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface GoogleCalendarCreateEventToolWithToolCall {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "google.calendar.event.create" for Google Calendar tool. */
  type: 'google.calendar.event.create';
  toolCall: ToolCall;
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export interface GoogleSheetsRowAppendToolWithToolCall {
  /**
   * This determines if the tool is async.
   *
   * If async, the assistant will move forward without waiting for your server to respond. This is useful if you just want to trigger something on your server.
   *
   * If sync, the assistant will wait for your server to respond. This is useful if want assistant to respond with the result from your server.
   *
   * Defaults to synchronous (`false`).
   * @example false
   */
  async?: boolean;
  /**
   * These are the messages that will be spoken to the user as the tool is running.
   *
   * For some tools, this is auto-filled based on special fields like `tool.destinations`. For others like the function tool, these can be custom configured.
   */
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The type of tool. "google.sheets.row.append" for Google Sheets tool. */
  type: 'google.sheets.row.append';
  toolCall: ToolCall;
  /**
   * This is the function definition of the tool.
   *
   * For `endCall`, `transferCall`, and `dtmf` tools, this is auto-filled based on tool-specific fields like `tool.destinations`. But, even in those cases, you can provide a custom function definition for advanced use cases.
   *
   * An example of an advanced use case is if you want to customize the message that's spoken for `endCall` tool. You can specify a function where it returns an argument "reason". Then, in `messages` array, you can have many "request-complete" messages. One of these messages will be triggered if the `messages[].conditions` matches the "reason" argument.
   */
  function?: OpenAIFunction;
  /**
   * This is the server that will be hit when this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: highest tool.server.url, then assistant.serverUrl, then phoneNumber.serverUrl, then org.serverUrl.
   */
  server?: Server;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'https://api.vapi.ai';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key]);
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        },
        signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
        body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Vapi API
 * @version 1.0
 * @baseUrl https://api.vapi.ai
 * @contact
 *
 * Voice AI for developers.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  call = {
    /**
     * No description
     *
     * @tags Calls
     * @name CallControllerCreate
     * @summary Create Call
     * @request POST:/call
     * @secure
     */
    callControllerCreate: (data: CreateCallDTO, params: RequestParams = {}) =>
      this.request<Call, any>({
        path: `/call`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calls
     * @name CallControllerFindAll
     * @summary List Calls
     * @request GET:/call
     * @secure
     */
    callControllerFindAll: (
      query?: {
        /** This is the unique identifier for the call. */
        id?: string;
        /** This will return calls with the specified assistantId. */
        assistantId?: string;
        /**
         * This is the phone number that will be used for the call. To use a transient number, use `phoneNumber` instead.
         *
         * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` type.
         */
        phoneNumberId?: string;
        /**
         * This is the maximum number of items to return. Defaults to 100.
         * @min 0
         * @max 1000
         */
        limit?: number;
        /**
         * This will return items where the createdAt is greater than the specified value.
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * This will return items where the createdAt is less than the specified value.
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * This will return items where the createdAt is greater than or equal to the specified value.
         * @format date-time
         */
        createdAtGe?: string;
        /**
         * This will return items where the createdAt is less than or equal to the specified value.
         * @format date-time
         */
        createdAtLe?: string;
        /**
         * This will return items where the updatedAt is greater than the specified value.
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * This will return items where the updatedAt is less than the specified value.
         * @format date-time
         */
        updatedAtLt?: string;
        /**
         * This will return items where the updatedAt is greater than or equal to the specified value.
         * @format date-time
         */
        updatedAtGe?: string;
        /**
         * This will return items where the updatedAt is less than or equal to the specified value.
         * @format date-time
         */
        updatedAtLe?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Call[], any>({
        path: `/call`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calls
     * @name CallControllerFindOne
     * @summary Get Call
     * @request GET:/call/{id}
     * @secure
     */
    callControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<Call, any>({
        path: `/call/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calls
     * @name CallControllerUpdate
     * @summary Update Call
     * @request PATCH:/call/{id}
     * @secure
     */
    callControllerUpdate: (id: string, data: UpdateCallDTO, params: RequestParams = {}) =>
      this.request<Call, any>({
        path: `/call/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calls
     * @name CallControllerDeleteCallData
     * @summary Delete Call Data
     * @request DELETE:/call/{id}
     * @secure
     */
    callControllerDeleteCallData: (id: string, params: RequestParams = {}) =>
      this.request<Call, any>({
        path: `/call/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calls
     * @name CallControllerCreatePhoneCall
     * @summary Create Phone Call
     * @request POST:/call/phone
     * @deprecated
     * @secure
     */
    callControllerCreatePhoneCall: (data: CreateOutboundCallDTO, params: RequestParams = {}) =>
      this.request<Call, any>({
        path: `/call/phone`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calls
     * @name CallControllerCreateWebCall
     * @summary Create Web Call
     * @request POST:/call/web
     * @secure
     */
    callControllerCreateWebCall: (data: CreateWebCallDTO, params: RequestParams = {}) =>
      this.request<Call, any>({
        path: `/call/web`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  v2 = {
    /**
     * No description
     *
     * @tags Calls
     * @name CallControllerFindAllPaginated
     * @summary List Calls
     * @request GET:/v2/call
     * @secure
     */
    callControllerFindAllPaginated: (
      query?: {
        /** This will return calls with the specified assistantId. */
        assistantId?: string;
        /** This will return calls with the specified callId. */
        id?: string;
        /** This will return calls where the cost is less than or equal to the specified value. */
        costLe?: number;
        /** This will return calls where the cost is greater than or equal to the specified value. */
        costGe?: number;
        /** This will return calls with the exact specified cost. */
        cost?: number;
        /**
         * This will return calls with the specified successEvaluation.
         * @maxLength 1000
         */
        successEvaluation?: string;
        /**
         * This will return calls with the specified endedReason.
         * @maxLength 1000
         */
        endedReason?: string;
        /**
         * This is the page number to return. Defaults to 1.
         * @min 1
         */
        page?: number;
        /** This is the sort order for pagination. Defaults to 'DESC'. */
        sortOrder?: 'ASC' | 'DESC';
        /**
         * This is the maximum number of items to return. Defaults to 100.
         * @min 0
         * @max 1000
         */
        limit?: number;
        /**
         * This will return items where the createdAt is greater than the specified value.
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * This will return items where the createdAt is less than the specified value.
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * This will return items where the createdAt is greater than or equal to the specified value.
         * @format date-time
         */
        createdAtGe?: string;
        /**
         * This will return items where the createdAt is less than or equal to the specified value.
         * @format date-time
         */
        createdAtLe?: string;
        /**
         * This will return items where the updatedAt is greater than the specified value.
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * This will return items where the updatedAt is less than the specified value.
         * @format date-time
         */
        updatedAtLt?: string;
        /**
         * This will return items where the updatedAt is greater than or equal to the specified value.
         * @format date-time
         */
        updatedAtGe?: string;
        /**
         * This will return items where the updatedAt is less than or equal to the specified value.
         * @format date-time
         */
        updatedAtLe?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CallPaginatedResponse, any>({
        path: `/v2/call`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calls
     * @name CallControllerFindAllMetadataPaginated
     * @summary List Call Metadata
     * @request GET:/v2/call/metadata
     * @secure
     */
    callControllerFindAllMetadataPaginated: (
      query?: {
        /** This will return calls with the specified assistantId. */
        assistantId?: string;
        /** This will return calls with the specified callId. */
        id?: string;
        /** This will return calls where the cost is less than or equal to the specified value. */
        costLe?: number;
        /** This will return calls where the cost is greater than or equal to the specified value. */
        costGe?: number;
        /** This will return calls with the exact specified cost. */
        cost?: number;
        /**
         * This will return calls with the specified successEvaluation.
         * @maxLength 1000
         */
        successEvaluation?: string;
        /**
         * This will return calls with the specified endedReason.
         * @maxLength 1000
         */
        endedReason?: string;
        /**
         * This is the page number to return. Defaults to 1.
         * @min 1
         */
        page?: number;
        /** This is the sort order for pagination. Defaults to 'DESC'. */
        sortOrder?: 'ASC' | 'DESC';
        /**
         * This is the maximum number of items to return. Defaults to 100.
         * @min 0
         * @max 1000
         */
        limit?: number;
        /**
         * This will return items where the createdAt is greater than the specified value.
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * This will return items where the createdAt is less than the specified value.
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * This will return items where the createdAt is greater than or equal to the specified value.
         * @format date-time
         */
        createdAtGe?: string;
        /**
         * This will return items where the createdAt is less than or equal to the specified value.
         * @format date-time
         */
        createdAtLe?: string;
        /**
         * This will return items where the updatedAt is greater than the specified value.
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * This will return items where the updatedAt is less than the specified value.
         * @format date-time
         */
        updatedAtLt?: string;
        /**
         * This will return items where the updatedAt is greater than or equal to the specified value.
         * @format date-time
         */
        updatedAtGe?: string;
        /**
         * This will return items where the updatedAt is less than or equal to the specified value.
         * @format date-time
         */
        updatedAtLe?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CallPaginatedResponse, any>({
        path: `/v2/call/metadata`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Assistants
     * @name AssistantControllerFindAllPaginated
     * @summary List Assistants with pagination
     * @request GET:/v2/assistant
     * @secure
     */
    assistantControllerFindAllPaginated: (
      query?: {
        /**
         * This is the page number to return. Defaults to 1.
         * @min 1
         */
        page?: number;
        /** This is the sort order for pagination. Defaults to 'DESC'. */
        sortOrder?: 'ASC' | 'DESC';
        /**
         * This is the maximum number of items to return. Defaults to 100.
         * @min 0
         * @max 1000
         */
        limit?: number;
        /**
         * This will return items where the createdAt is greater than the specified value.
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * This will return items where the createdAt is less than the specified value.
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * This will return items where the createdAt is greater than or equal to the specified value.
         * @format date-time
         */
        createdAtGe?: string;
        /**
         * This will return items where the createdAt is less than or equal to the specified value.
         * @format date-time
         */
        createdAtLe?: string;
        /**
         * This will return items where the updatedAt is greater than the specified value.
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * This will return items where the updatedAt is less than the specified value.
         * @format date-time
         */
        updatedAtLt?: string;
        /**
         * This will return items where the updatedAt is greater than or equal to the specified value.
         * @format date-time
         */
        updatedAtGe?: string;
        /**
         * This will return items where the updatedAt is less than or equal to the specified value.
         * @format date-time
         */
        updatedAtLe?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AssistantPaginatedResponse, any>({
        path: `/v2/assistant`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Phone Numbers
     * @name PhoneNumberControllerFindAllPaginated
     * @summary List Phone Numbers
     * @request GET:/v2/phone-number
     * @secure
     */
    phoneNumberControllerFindAllPaginated: (
      query?: {
        /**
         * This is the page number to return. Defaults to 1.
         * @min 1
         */
        page?: number;
        /** This is the sort order for pagination. Defaults to 'DESC'. */
        sortOrder?: 'ASC' | 'DESC';
        /**
         * This is the maximum number of items to return. Defaults to 100.
         * @min 0
         * @max 1000
         */
        limit?: number;
        /**
         * This will return items where the createdAt is greater than the specified value.
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * This will return items where the createdAt is less than the specified value.
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * This will return items where the createdAt is greater than or equal to the specified value.
         * @format date-time
         */
        createdAtGe?: string;
        /**
         * This will return items where the createdAt is less than or equal to the specified value.
         * @format date-time
         */
        createdAtLe?: string;
        /**
         * This will return items where the updatedAt is greater than the specified value.
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * This will return items where the updatedAt is less than the specified value.
         * @format date-time
         */
        updatedAtLt?: string;
        /**
         * This will return items where the updatedAt is greater than or equal to the specified value.
         * @format date-time
         */
        updatedAtGe?: string;
        /**
         * This will return items where the updatedAt is less than or equal to the specified value.
         * @format date-time
         */
        updatedAtLe?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PhoneNumberPaginatedResponse, any>({
        path: `/v2/phone-number`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  chat = {
    /**
     * No description
     *
     * @tags Chat
     * @name ChatController
     * @summary Chat with Assistant
     * @request POST:/chat
     * @deprecated
     * @secure
     */
    chatController: (params: RequestParams = {}) =>
      this.request<ChatServiceResponse, any>({
        path: `/chat`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Chat
     * @name ChatControllerChatCompletions
     * @summary Chat with a Workflow
     * @request POST:/chat/completions
     * @secure
     */
    chatControllerChatCompletions: (data: ChatCompletionsDTO, params: RequestParams = {}) =>
      this.request<ChatServiceResponse, any>({
        path: `/chat/completions`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  assistant = {
    /**
     * No description
     *
     * @tags Assistants
     * @name AssistantControllerCreate
     * @summary Create Assistant
     * @request POST:/assistant
     * @secure
     */
    assistantControllerCreate: (data: CreateAssistantDTO, params: RequestParams = {}) =>
      this.request<Assistant, any>({
        path: `/assistant`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Assistants
     * @name AssistantControllerFindAll
     * @summary List Assistants
     * @request GET:/assistant
     * @secure
     */
    assistantControllerFindAll: (
      query?: {
        /**
         * This is the maximum number of items to return. Defaults to 100.
         * @min 0
         * @max 1000
         */
        limit?: number;
        /**
         * This will return items where the createdAt is greater than the specified value.
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * This will return items where the createdAt is less than the specified value.
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * This will return items where the createdAt is greater than or equal to the specified value.
         * @format date-time
         */
        createdAtGe?: string;
        /**
         * This will return items where the createdAt is less than or equal to the specified value.
         * @format date-time
         */
        createdAtLe?: string;
        /**
         * This will return items where the updatedAt is greater than the specified value.
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * This will return items where the updatedAt is less than the specified value.
         * @format date-time
         */
        updatedAtLt?: string;
        /**
         * This will return items where the updatedAt is greater than or equal to the specified value.
         * @format date-time
         */
        updatedAtGe?: string;
        /**
         * This will return items where the updatedAt is less than or equal to the specified value.
         * @format date-time
         */
        updatedAtLe?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Assistant[], any>({
        path: `/assistant`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Assistants
     * @name AssistantControllerFindOne
     * @summary Get Assistant
     * @request GET:/assistant/{id}
     * @secure
     */
    assistantControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<Assistant, any>({
        path: `/assistant/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Assistants
     * @name AssistantControllerUpdate
     * @summary Update Assistant
     * @request PATCH:/assistant/{id}
     * @secure
     */
    assistantControllerUpdate: (id: string, data: UpdateAssistantDTO, params: RequestParams = {}) =>
      this.request<Assistant, any>({
        path: `/assistant/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Assistants
     * @name AssistantControllerReplace
     * @summary Replace Assistant
     * @request PUT:/assistant/{id}
     * @secure
     */
    assistantControllerReplace: (
      id: string,
      data: UpdateAssistantDTO,
      params: RequestParams = {},
    ) =>
      this.request<Assistant, any>({
        path: `/assistant/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Assistants
     * @name AssistantControllerRemove
     * @summary Delete Assistant
     * @request DELETE:/assistant/{id}
     * @secure
     */
    assistantControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<Assistant, any>({
        path: `/assistant/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  phoneNumber = {
    /**
     * @description Use POST /phone-number instead.
     *
     * @tags Phone Numbers
     * @name PhoneNumberControllerImportTwilio
     * @summary Import Twilio Number
     * @request POST:/phone-number/import/twilio
     * @deprecated
     * @secure
     */
    phoneNumberControllerImportTwilio: (
      data: ImportTwilioPhoneNumberDTO,
      params: RequestParams = {},
    ) =>
      this.request<
        | ({
            provider: 'byo-phone-number';
          } & ByoPhoneNumber)
        | ({
            provider: 'twilio';
          } & TwilioPhoneNumber)
        | ({
            provider: 'vonage';
          } & VonagePhoneNumber)
        | ({
            provider: 'vapi';
          } & VapiPhoneNumber)
        | ({
            provider: 'telnyx';
          } & TelnyxPhoneNumber),
        any
      >({
        path: `/phone-number/import/twilio`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Use POST /phone-number instead.
     *
     * @tags Phone Numbers
     * @name PhoneNumberControllerImportVonage
     * @summary Import Vonage Number
     * @request POST:/phone-number/import/vonage
     * @deprecated
     * @secure
     */
    phoneNumberControllerImportVonage: (
      data: ImportVonagePhoneNumberDTO,
      params: RequestParams = {},
    ) =>
      this.request<
        | ({
            provider: 'byo-phone-number';
          } & ByoPhoneNumber)
        | ({
            provider: 'twilio';
          } & TwilioPhoneNumber)
        | ({
            provider: 'vonage';
          } & VonagePhoneNumber)
        | ({
            provider: 'vapi';
          } & VapiPhoneNumber)
        | ({
            provider: 'telnyx';
          } & TelnyxPhoneNumber),
        any
      >({
        path: `/phone-number/import/vonage`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Phone Numbers
     * @name PhoneNumberControllerCreate
     * @summary Create Phone Number
     * @request POST:/phone-number
     * @secure
     */
    phoneNumberControllerCreate: (
      data:
        | ({
            provider: 'byo-phone-number';
          } & CreateByoPhoneNumberDTO)
        | ({
            provider: 'twilio';
          } & CreateTwilioPhoneNumberDTO)
        | ({
            provider: 'vonage';
          } & CreateVonagePhoneNumberDTO)
        | ({
            provider: 'vapi';
          } & CreateVapiPhoneNumberDTO)
        | ({
            provider: 'telnyx';
          } & CreateTelnyxPhoneNumberDTO),
      params: RequestParams = {},
    ) =>
      this.request<
        | ({
            provider: 'byo-phone-number';
          } & ByoPhoneNumber)
        | ({
            provider: 'twilio';
          } & TwilioPhoneNumber)
        | ({
            provider: 'vonage';
          } & VonagePhoneNumber)
        | ({
            provider: 'vapi';
          } & VapiPhoneNumber)
        | ({
            provider: 'telnyx';
          } & TelnyxPhoneNumber),
        any
      >({
        path: `/phone-number`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Phone Numbers
     * @name PhoneNumberControllerFindAll
     * @summary List Phone Numbers
     * @request GET:/phone-number
     * @secure
     */
    phoneNumberControllerFindAll: (
      query?: {
        /**
         * This is the maximum number of items to return. Defaults to 100.
         * @min 0
         * @max 1000
         */
        limit?: number;
        /**
         * This will return items where the createdAt is greater than the specified value.
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * This will return items where the createdAt is less than the specified value.
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * This will return items where the createdAt is greater than or equal to the specified value.
         * @format date-time
         */
        createdAtGe?: string;
        /**
         * This will return items where the createdAt is less than or equal to the specified value.
         * @format date-time
         */
        createdAtLe?: string;
        /**
         * This will return items where the updatedAt is greater than the specified value.
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * This will return items where the updatedAt is less than the specified value.
         * @format date-time
         */
        updatedAtLt?: string;
        /**
         * This will return items where the updatedAt is greater than or equal to the specified value.
         * @format date-time
         */
        updatedAtGe?: string;
        /**
         * This will return items where the updatedAt is less than or equal to the specified value.
         * @format date-time
         */
        updatedAtLe?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        (
          | ({
              provider: 'byo-phone-number';
            } & ByoPhoneNumber)
          | ({
              provider: 'twilio';
            } & TwilioPhoneNumber)
          | ({
              provider: 'vonage';
            } & VonagePhoneNumber)
          | ({
              provider: 'vapi';
            } & VapiPhoneNumber)
          | ({
              provider: 'telnyx';
            } & TelnyxPhoneNumber)
        )[],
        any
      >({
        path: `/phone-number`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Phone Numbers
     * @name PhoneNumberControllerFindOne
     * @summary Get Phone Number
     * @request GET:/phone-number/{id}
     * @secure
     */
    phoneNumberControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<
        | ({
            provider: 'byo-phone-number';
          } & ByoPhoneNumber)
        | ({
            provider: 'twilio';
          } & TwilioPhoneNumber)
        | ({
            provider: 'vonage';
          } & VonagePhoneNumber)
        | ({
            provider: 'vapi';
          } & VapiPhoneNumber)
        | ({
            provider: 'telnyx';
          } & TelnyxPhoneNumber),
        any
      >({
        path: `/phone-number/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Phone Numbers
     * @name PhoneNumberControllerUpdate
     * @summary Update Phone Number
     * @request PATCH:/phone-number/{id}
     * @secure
     */
    phoneNumberControllerUpdate: (
      id: string,
      data:
        | ({
            provider: 'byo-phone-number';
          } & UpdateByoPhoneNumberDTO)
        | ({
            provider: 'twilio';
          } & UpdateTwilioPhoneNumberDTO)
        | ({
            provider: 'vonage';
          } & UpdateVonagePhoneNumberDTO)
        | ({
            provider: 'vapi';
          } & UpdateVapiPhoneNumberDTO)
        | ({
            provider: 'telnyx';
          } & UpdateTelnyxPhoneNumberDTO),
      params: RequestParams = {},
    ) =>
      this.request<
        | ({
            provider: 'byo-phone-number';
          } & ByoPhoneNumber)
        | ({
            provider: 'twilio';
          } & TwilioPhoneNumber)
        | ({
            provider: 'vonage';
          } & VonagePhoneNumber)
        | ({
            provider: 'vapi';
          } & VapiPhoneNumber)
        | ({
            provider: 'telnyx';
          } & TelnyxPhoneNumber),
        any
      >({
        path: `/phone-number/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Phone Numbers
     * @name PhoneNumberControllerRemove
     * @summary Delete Phone Number
     * @request DELETE:/phone-number/{id}
     * @secure
     */
    phoneNumberControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<
        | ({
            provider: 'byo-phone-number';
          } & ByoPhoneNumber)
        | ({
            provider: 'twilio';
          } & TwilioPhoneNumber)
        | ({
            provider: 'vonage';
          } & VonagePhoneNumber)
        | ({
            provider: 'vapi';
          } & VapiPhoneNumber)
        | ({
            provider: 'telnyx';
          } & TelnyxPhoneNumber),
        any
      >({
        path: `/phone-number/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  tool = {
    /**
     * No description
     *
     * @tags Tools
     * @name ToolControllerCreate
     * @summary Create Tool
     * @request POST:/tool
     * @secure
     */
    toolControllerCreate: (
      data:
        | ({
            type: 'dtmf';
          } & CreateDtmfToolDTO)
        | ({
            type: 'endCall';
          } & CreateEndCallToolDTO)
        | ({
            type: 'function';
          } & CreateFunctionToolDTO)
        | ({
            type: 'ghl';
          } & CreateGhlToolDTO)
        | ({
            type: 'make';
          } & CreateMakeToolDTO)
        | ({
            type: 'transferCall';
          } & CreateTransferCallToolDTO)
        | ({
            type: 'output';
          } & CreateOutputToolDTO)
        | ({
            type: 'bash';
          } & CreateBashToolDTO)
        | ({
            type: 'computer';
          } & CreateComputerToolDTO)
        | ({
            type: 'textEditor';
          } & CreateTextEditorToolDTO)
        | ({
            type: 'query';
          } & CreateQueryToolDTO)
        | ({
            type: 'google.calendar.event.create';
          } & CreateGoogleCalendarCreateEventToolDTO)
        | ({
            type: 'google.sheets.row.append';
          } & CreateGoogleSheetsRowAppendToolDTO),
      params: RequestParams = {},
    ) =>
      this.request<
        | ({
            type: 'dtmf';
          } & DtmfTool)
        | ({
            type: 'endCall';
          } & EndCallTool)
        | ({
            type: 'function';
          } & FunctionTool)
        | ({
            type: 'ghl';
          } & GhlTool)
        | ({
            type: 'make';
          } & MakeTool)
        | ({
            type: 'transferCall';
          } & TransferCallTool)
        | ({
            type: 'output';
          } & OutputTool)
        | ({
            type: 'bash';
          } & BashTool)
        | ({
            type: 'computer';
          } & ComputerTool)
        | ({
            type: 'textEditor';
          } & TextEditorTool)
        | ({
            type: 'query';
          } & QueryTool)
        | ({
            type: 'google.calendar.event.create';
          } & GoogleCalendarCreateEventTool)
        | ({
            type: 'google.sheets.row.append';
          } & GoogleSheetsRowAppendTool),
        any
      >({
        path: `/tool`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tools
     * @name ToolControllerFindAll
     * @summary List Tools
     * @request GET:/tool
     * @secure
     */
    toolControllerFindAll: (
      query?: {
        /**
         * This is the maximum number of items to return. Defaults to 100.
         * @min 0
         * @max 1000
         */
        limit?: number;
        /**
         * This will return items where the createdAt is greater than the specified value.
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * This will return items where the createdAt is less than the specified value.
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * This will return items where the createdAt is greater than or equal to the specified value.
         * @format date-time
         */
        createdAtGe?: string;
        /**
         * This will return items where the createdAt is less than or equal to the specified value.
         * @format date-time
         */
        createdAtLe?: string;
        /**
         * This will return items where the updatedAt is greater than the specified value.
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * This will return items where the updatedAt is less than the specified value.
         * @format date-time
         */
        updatedAtLt?: string;
        /**
         * This will return items where the updatedAt is greater than or equal to the specified value.
         * @format date-time
         */
        updatedAtGe?: string;
        /**
         * This will return items where the updatedAt is less than or equal to the specified value.
         * @format date-time
         */
        updatedAtLe?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        (
          | ({
              type: 'dtmf';
            } & DtmfTool)
          | ({
              type: 'endCall';
            } & EndCallTool)
          | ({
              type: 'function';
            } & FunctionTool)
          | ({
              type: 'ghl';
            } & GhlTool)
          | ({
              type: 'make';
            } & MakeTool)
          | ({
              type: 'transferCall';
            } & TransferCallTool)
          | ({
              type: 'output';
            } & OutputTool)
          | ({
              type: 'bash';
            } & BashTool)
          | ({
              type: 'computer';
            } & ComputerTool)
          | ({
              type: 'textEditor';
            } & TextEditorTool)
          | ({
              type: 'query';
            } & QueryTool)
          | ({
              type: 'google.calendar.event.create';
            } & GoogleCalendarCreateEventTool)
          | ({
              type: 'google.sheets.row.append';
            } & GoogleSheetsRowAppendTool)
        )[],
        any
      >({
        path: `/tool`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tools
     * @name ToolControllerFindOne
     * @summary Get Tool
     * @request GET:/tool/{id}
     * @secure
     */
    toolControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<
        | ({
            type: 'dtmf';
          } & DtmfTool)
        | ({
            type: 'endCall';
          } & EndCallTool)
        | ({
            type: 'function';
          } & FunctionTool)
        | ({
            type: 'ghl';
          } & GhlTool)
        | ({
            type: 'make';
          } & MakeTool)
        | ({
            type: 'transferCall';
          } & TransferCallTool)
        | ({
            type: 'output';
          } & OutputTool)
        | ({
            type: 'bash';
          } & BashTool)
        | ({
            type: 'computer';
          } & ComputerTool)
        | ({
            type: 'textEditor';
          } & TextEditorTool)
        | ({
            type: 'query';
          } & QueryTool)
        | ({
            type: 'google.calendar.event.create';
          } & GoogleCalendarCreateEventTool)
        | ({
            type: 'google.sheets.row.append';
          } & GoogleSheetsRowAppendTool),
        any
      >({
        path: `/tool/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tools
     * @name ToolControllerUpdate
     * @summary Update Tool
     * @request PATCH:/tool/{id}
     * @secure
     */
    toolControllerUpdate: (
      id: string,
      data:
        | ({
            type: 'dtmf';
          } & UpdateDtmfToolDTO)
        | ({
            type: 'endCall';
          } & UpdateEndCallToolDTO)
        | ({
            type: 'function';
          } & UpdateFunctionToolDTO)
        | ({
            type: 'ghl';
          } & UpdateGhlToolDTO)
        | ({
            type: 'make';
          } & UpdateMakeToolDTO)
        | ({
            type: 'transferCall';
          } & UpdateTransferCallToolDTO)
        | ({
            type: 'output';
          } & UpdateOutputToolDTO)
        | ({
            type: 'bash';
          } & UpdateBashToolDTO)
        | ({
            type: 'computer';
          } & UpdateComputerToolDTO)
        | ({
            type: 'textEditor';
          } & UpdateTextEditorToolDTO)
        | ({
            type: 'query';
          } & UpdateQueryToolDTO)
        | ({
            type: 'google.calendar.event.create';
          } & UpdateGoogleCalendarCreateEventToolDTO)
        | ({
            type: 'google.sheets.row.append';
          } & UpdateGoogleSheetsRowAppendToolDTO),
      params: RequestParams = {},
    ) =>
      this.request<
        | ({
            type: 'dtmf';
          } & DtmfTool)
        | ({
            type: 'endCall';
          } & EndCallTool)
        | ({
            type: 'function';
          } & FunctionTool)
        | ({
            type: 'ghl';
          } & GhlTool)
        | ({
            type: 'make';
          } & MakeTool)
        | ({
            type: 'transferCall';
          } & TransferCallTool)
        | ({
            type: 'output';
          } & OutputTool)
        | ({
            type: 'bash';
          } & BashTool)
        | ({
            type: 'computer';
          } & ComputerTool)
        | ({
            type: 'textEditor';
          } & TextEditorTool)
        | ({
            type: 'query';
          } & QueryTool)
        | ({
            type: 'google.calendar.event.create';
          } & GoogleCalendarCreateEventTool)
        | ({
            type: 'google.sheets.row.append';
          } & GoogleSheetsRowAppendTool),
        any
      >({
        path: `/tool/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tools
     * @name ToolControllerRemove
     * @summary Delete Tool
     * @request DELETE:/tool/{id}
     * @secure
     */
    toolControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<
        | ({
            type: 'dtmf';
          } & DtmfTool)
        | ({
            type: 'endCall';
          } & EndCallTool)
        | ({
            type: 'function';
          } & FunctionTool)
        | ({
            type: 'ghl';
          } & GhlTool)
        | ({
            type: 'make';
          } & MakeTool)
        | ({
            type: 'transferCall';
          } & TransferCallTool)
        | ({
            type: 'output';
          } & OutputTool)
        | ({
            type: 'bash';
          } & BashTool)
        | ({
            type: 'computer';
          } & ComputerTool)
        | ({
            type: 'textEditor';
          } & TextEditorTool)
        | ({
            type: 'query';
          } & QueryTool)
        | ({
            type: 'google.calendar.event.create';
          } & GoogleCalendarCreateEventTool)
        | ({
            type: 'google.sheets.row.append';
          } & GoogleSheetsRowAppendTool),
        any
      >({
        path: `/tool/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  file = {
    /**
     * @description Use POST /file instead.
     *
     * @tags Files
     * @name FileControllerCreateDeprecated
     * @summary Upload File
     * @request POST:/file/upload
     * @deprecated
     * @secure
     */
    fileControllerCreateDeprecated: (data: CreateFileDTO, params: RequestParams = {}) =>
      this.request<File, void>({
        path: `/file/upload`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name FileControllerCreate
     * @summary Upload File
     * @request POST:/file
     * @secure
     */
    fileControllerCreate: (data: CreateFileDTO, params: RequestParams = {}) =>
      this.request<File, void>({
        path: `/file`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name FileControllerFindAll
     * @summary List Files
     * @request GET:/file
     * @secure
     */
    fileControllerFindAll: (params: RequestParams = {}) =>
      this.request<File[], any>({
        path: `/file`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name FileControllerFindOne
     * @summary Get File
     * @request GET:/file/{id}
     * @secure
     */
    fileControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/file/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name FileControllerUpdate
     * @summary Update File
     * @request PATCH:/file/{id}
     * @secure
     */
    fileControllerUpdate: (id: string, data: UpdateFileDTO, params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/file/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name FileControllerRemove
     * @summary Delete File
     * @request DELETE:/file/{id}
     * @secure
     */
    fileControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/file/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  knowledgeBase = {
    /**
     * No description
     *
     * @tags Knowledge Base
     * @name KnowledgeBaseControllerCreate
     * @summary Create Knowledge Base
     * @request POST:/knowledge-base
     * @secure
     */
    knowledgeBaseControllerCreate: (
      data:
        | ({
            provider: 'trieve';
          } & CreateTrieveKnowledgeBaseDTO)
        | ({
            provider: 'custom-knowledge-base';
          } & CreateCustomKnowledgeBaseDTO),
      params: RequestParams = {},
    ) =>
      this.request<
        | ({
            provider: 'trieve';
          } & TrieveKnowledgeBase)
        | ({
            provider: 'custom-knowledge-base';
          } & CustomKnowledgeBase),
        any
      >({
        path: `/knowledge-base`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Knowledge Base
     * @name KnowledgeBaseControllerFindAll
     * @summary List Knowledge Bases
     * @request GET:/knowledge-base
     * @secure
     */
    knowledgeBaseControllerFindAll: (
      query?: {
        /**
         * This is the maximum number of items to return. Defaults to 100.
         * @min 0
         * @max 1000
         */
        limit?: number;
        /**
         * This will return items where the createdAt is greater than the specified value.
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * This will return items where the createdAt is less than the specified value.
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * This will return items where the createdAt is greater than or equal to the specified value.
         * @format date-time
         */
        createdAtGe?: string;
        /**
         * This will return items where the createdAt is less than or equal to the specified value.
         * @format date-time
         */
        createdAtLe?: string;
        /**
         * This will return items where the updatedAt is greater than the specified value.
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * This will return items where the updatedAt is less than the specified value.
         * @format date-time
         */
        updatedAtLt?: string;
        /**
         * This will return items where the updatedAt is greater than or equal to the specified value.
         * @format date-time
         */
        updatedAtGe?: string;
        /**
         * This will return items where the updatedAt is less than or equal to the specified value.
         * @format date-time
         */
        updatedAtLe?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        (
          | ({
              provider: 'trieve';
            } & TrieveKnowledgeBase)
          | ({
              provider: 'custom-knowledge-base';
            } & CustomKnowledgeBase)
        )[],
        any
      >({
        path: `/knowledge-base`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Knowledge Base
     * @name KnowledgeBaseControllerFindOne
     * @summary Get Knowledge Base
     * @request GET:/knowledge-base/{id}
     * @secure
     */
    knowledgeBaseControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<
        | ({
            provider: 'trieve';
          } & TrieveKnowledgeBase)
        | ({
            provider: 'custom-knowledge-base';
          } & CustomKnowledgeBase),
        any
      >({
        path: `/knowledge-base/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Knowledge Base
     * @name KnowledgeBaseControllerUpdate
     * @summary Update Knowledge Base
     * @request PATCH:/knowledge-base/{id}
     * @secure
     */
    knowledgeBaseControllerUpdate: (
      id: string,
      data:
        | ({
            provider: 'trieve';
          } & UpdateTrieveKnowledgeBaseDTO)
        | ({
            provider: 'custom-knowledge-base';
          } & UpdateCustomKnowledgeBaseDTO),
      params: RequestParams = {},
    ) =>
      this.request<
        | ({
            provider: 'trieve';
          } & TrieveKnowledgeBase)
        | ({
            provider: 'custom-knowledge-base';
          } & CustomKnowledgeBase),
        any
      >({
        path: `/knowledge-base/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Knowledge Base
     * @name KnowledgeBaseControllerRemove
     * @summary Delete Knowledge Base
     * @request DELETE:/knowledge-base/{id}
     * @secure
     */
    knowledgeBaseControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<
        | ({
            provider: 'trieve';
          } & TrieveKnowledgeBase)
        | ({
            provider: 'custom-knowledge-base';
          } & CustomKnowledgeBase),
        any
      >({
        path: `/knowledge-base/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  workflow = {
    /**
     * No description
     *
     * @tags Workflow
     * @name WorkflowControllerFindAll
     * @summary Get Workflows
     * @request GET:/workflow
     * @secure
     */
    workflowControllerFindAll: (params: RequestParams = {}) =>
      this.request<Workflow[], any>({
        path: `/workflow`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Workflow
     * @name WorkflowControllerCreate
     * @summary Create Workflow
     * @request POST:/workflow
     * @secure
     */
    workflowControllerCreate: (data: CreateWorkflowDTO, params: RequestParams = {}) =>
      this.request<Workflow, any>({
        path: `/workflow`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Workflow
     * @name WorkflowControllerFindOne
     * @summary Get Workflow
     * @request GET:/workflow/{id}
     * @secure
     */
    workflowControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<Workflow, any>({
        path: `/workflow/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Workflow
     * @name WorkflowControllerDelete
     * @summary Delete Workflow
     * @request DELETE:/workflow/{id}
     * @secure
     */
    workflowControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<Workflow, any>({
        path: `/workflow/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Workflow
     * @name WorkflowControllerUpdate
     * @summary Update Workflow
     * @request PATCH:/workflow/{id}
     * @secure
     */
    workflowControllerUpdate: (id: string, data: UpdateWorkflowDTO, params: RequestParams = {}) =>
      this.request<Workflow, any>({
        path: `/workflow/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  squad = {
    /**
     * No description
     *
     * @tags Squads
     * @name SquadControllerCreate
     * @summary Create Squad
     * @request POST:/squad
     * @secure
     */
    squadControllerCreate: (data: CreateSquadDTO, params: RequestParams = {}) =>
      this.request<Squad, any>({
        path: `/squad`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Squads
     * @name SquadControllerFindAll
     * @summary List Squads
     * @request GET:/squad
     * @secure
     */
    squadControllerFindAll: (
      query?: {
        /**
         * This is the maximum number of items to return. Defaults to 100.
         * @min 0
         * @max 1000
         */
        limit?: number;
        /**
         * This will return items where the createdAt is greater than the specified value.
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * This will return items where the createdAt is less than the specified value.
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * This will return items where the createdAt is greater than or equal to the specified value.
         * @format date-time
         */
        createdAtGe?: string;
        /**
         * This will return items where the createdAt is less than or equal to the specified value.
         * @format date-time
         */
        createdAtLe?: string;
        /**
         * This will return items where the updatedAt is greater than the specified value.
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * This will return items where the updatedAt is less than the specified value.
         * @format date-time
         */
        updatedAtLt?: string;
        /**
         * This will return items where the updatedAt is greater than or equal to the specified value.
         * @format date-time
         */
        updatedAtGe?: string;
        /**
         * This will return items where the updatedAt is less than or equal to the specified value.
         * @format date-time
         */
        updatedAtLe?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Squad[], any>({
        path: `/squad`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Squads
     * @name SquadControllerFindOne
     * @summary Get Squad
     * @request GET:/squad/{id}
     * @secure
     */
    squadControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<Squad, any>({
        path: `/squad/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Squads
     * @name SquadControllerUpdate
     * @summary Update Squad
     * @request PATCH:/squad/{id}
     * @secure
     */
    squadControllerUpdate: (id: string, data: UpdateSquadDTO, params: RequestParams = {}) =>
      this.request<Squad, any>({
        path: `/squad/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Squads
     * @name SquadControllerRemove
     * @summary Delete Squad
     * @request DELETE:/squad/{id}
     * @secure
     */
    squadControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<Squad, any>({
        path: `/squad/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  testSuite = {
    /**
     * No description
     *
     * @tags Test Suites
     * @name TestSuiteControllerFindAllPaginated
     * @summary List Test Suites
     * @request GET:/test-suite
     * @secure
     */
    testSuiteControllerFindAllPaginated: (
      query?: {
        /**
         * This is the page number to return. Defaults to 1.
         * @min 1
         */
        page?: number;
        /** This is the sort order for pagination. Defaults to 'DESC'. */
        sortOrder?: 'ASC' | 'DESC';
        /**
         * This is the maximum number of items to return. Defaults to 100.
         * @min 0
         * @max 1000
         */
        limit?: number;
        /**
         * This will return items where the createdAt is greater than the specified value.
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * This will return items where the createdAt is less than the specified value.
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * This will return items where the createdAt is greater than or equal to the specified value.
         * @format date-time
         */
        createdAtGe?: string;
        /**
         * This will return items where the createdAt is less than or equal to the specified value.
         * @format date-time
         */
        createdAtLe?: string;
        /**
         * This will return items where the updatedAt is greater than the specified value.
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * This will return items where the updatedAt is less than the specified value.
         * @format date-time
         */
        updatedAtLt?: string;
        /**
         * This will return items where the updatedAt is greater than or equal to the specified value.
         * @format date-time
         */
        updatedAtGe?: string;
        /**
         * This will return items where the updatedAt is less than or equal to the specified value.
         * @format date-time
         */
        updatedAtLe?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TestSuitesPaginatedResponse, any>({
        path: `/test-suite`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Test Suites
     * @name TestSuiteControllerCreate
     * @summary Create Test Suite
     * @request POST:/test-suite
     * @secure
     */
    testSuiteControllerCreate: (data: CreateTestSuiteDto, params: RequestParams = {}) =>
      this.request<TestSuite, any>({
        path: `/test-suite`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Test Suites
     * @name TestSuiteControllerFindOne
     * @summary Get Test Suite
     * @request GET:/test-suite/{id}
     * @secure
     */
    testSuiteControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<TestSuite, any>({
        path: `/test-suite/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Test Suites
     * @name TestSuiteControllerUpdate
     * @summary Update Test Suite
     * @request PATCH:/test-suite/{id}
     * @secure
     */
    testSuiteControllerUpdate: (id: string, data: UpdateTestSuiteDto, params: RequestParams = {}) =>
      this.request<TestSuite, any>({
        path: `/test-suite/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Test Suites
     * @name TestSuiteControllerRemove
     * @summary Delete Test Suite
     * @request DELETE:/test-suite/{id}
     * @secure
     */
    testSuiteControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<TestSuite, any>({
        path: `/test-suite/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Test Suite Tests
     * @name TestSuiteTestControllerFindAllPaginated
     * @summary List Tests
     * @request GET:/test-suite/{testSuiteId}/test
     * @secure
     */
    testSuiteTestControllerFindAllPaginated: (
      testSuiteId: string,
      query?: {
        /**
         * This is the page number to return. Defaults to 1.
         * @min 1
         */
        page?: number;
        /** This is the sort order for pagination. Defaults to 'DESC'. */
        sortOrder?: 'ASC' | 'DESC';
        /**
         * This is the maximum number of items to return. Defaults to 100.
         * @min 0
         * @max 1000
         */
        limit?: number;
        /**
         * This will return items where the createdAt is greater than the specified value.
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * This will return items where the createdAt is less than the specified value.
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * This will return items where the createdAt is greater than or equal to the specified value.
         * @format date-time
         */
        createdAtGe?: string;
        /**
         * This will return items where the createdAt is less than or equal to the specified value.
         * @format date-time
         */
        createdAtLe?: string;
        /**
         * This will return items where the updatedAt is greater than the specified value.
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * This will return items where the updatedAt is less than the specified value.
         * @format date-time
         */
        updatedAtLt?: string;
        /**
         * This will return items where the updatedAt is greater than or equal to the specified value.
         * @format date-time
         */
        updatedAtGe?: string;
        /**
         * This will return items where the updatedAt is less than or equal to the specified value.
         * @format date-time
         */
        updatedAtLe?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TestSuiteTestsPaginatedResponse, any>({
        path: `/test-suite/${testSuiteId}/test`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Test Suite Tests
     * @name TestSuiteTestControllerCreate
     * @summary Create Test
     * @request POST:/test-suite/{testSuiteId}/test
     * @secure
     */
    testSuiteTestControllerCreate: (
      testSuiteId: string,
      data:
        | ({
            type: 'voice';
          } & CreateTestSuiteTestVoiceDto)
        | ({
            type: 'chat';
          } & CreateTestSuiteTestChatDto),
      params: RequestParams = {},
    ) =>
      this.request<
        | ({
            type: 'voice';
          } & TestSuiteTestVoice)
        | ({
            type: 'chat';
          } & TestSuiteTestChat),
        any
      >({
        path: `/test-suite/${testSuiteId}/test`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Test Suite Tests
     * @name TestSuiteTestControllerFindOne
     * @summary Get Test
     * @request GET:/test-suite/{testSuiteId}/test/{id}
     * @secure
     */
    testSuiteTestControllerFindOne: (testSuiteId: string, id: string, params: RequestParams = {}) =>
      this.request<
        | ({
            type: 'voice';
          } & TestSuiteTestVoice)
        | ({
            type: 'chat';
          } & TestSuiteTestChat),
        any
      >({
        path: `/test-suite/${testSuiteId}/test/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Test Suite Tests
     * @name TestSuiteTestControllerUpdate
     * @summary Update Test
     * @request PATCH:/test-suite/{testSuiteId}/test/{id}
     * @secure
     */
    testSuiteTestControllerUpdate: (
      testSuiteId: string,
      id: string,
      data:
        | ({
            type: 'voice';
          } & UpdateTestSuiteTestVoiceDto)
        | ({
            type: 'chat';
          } & UpdateTestSuiteTestChatDto),
      params: RequestParams = {},
    ) =>
      this.request<
        | ({
            type: 'voice';
          } & TestSuiteTestVoice)
        | ({
            type: 'chat';
          } & TestSuiteTestChat),
        any
      >({
        path: `/test-suite/${testSuiteId}/test/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Test Suite Tests
     * @name TestSuiteTestControllerRemove
     * @summary Delete Test
     * @request DELETE:/test-suite/{testSuiteId}/test/{id}
     * @secure
     */
    testSuiteTestControllerRemove: (testSuiteId: string, id: string, params: RequestParams = {}) =>
      this.request<
        | ({
            type: 'voice';
          } & TestSuiteTestVoice)
        | ({
            type: 'chat';
          } & TestSuiteTestChat),
        any
      >({
        path: `/test-suite/${testSuiteId}/test/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Test Suite Runs
     * @name TestSuiteRunControllerFindAllPaginated
     * @summary List Test Suite Runs
     * @request GET:/test-suite/{testSuiteId}/run
     * @secure
     */
    testSuiteRunControllerFindAllPaginated: (
      testSuiteId: string,
      query?: {
        /**
         * This is the page number to return. Defaults to 1.
         * @min 1
         */
        page?: number;
        /** This is the sort order for pagination. Defaults to 'DESC'. */
        sortOrder?: 'ASC' | 'DESC';
        /**
         * This is the maximum number of items to return. Defaults to 100.
         * @min 0
         * @max 1000
         */
        limit?: number;
        /**
         * This will return items where the createdAt is greater than the specified value.
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * This will return items where the createdAt is less than the specified value.
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * This will return items where the createdAt is greater than or equal to the specified value.
         * @format date-time
         */
        createdAtGe?: string;
        /**
         * This will return items where the createdAt is less than or equal to the specified value.
         * @format date-time
         */
        createdAtLe?: string;
        /**
         * This will return items where the updatedAt is greater than the specified value.
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * This will return items where the updatedAt is less than the specified value.
         * @format date-time
         */
        updatedAtLt?: string;
        /**
         * This will return items where the updatedAt is greater than or equal to the specified value.
         * @format date-time
         */
        updatedAtGe?: string;
        /**
         * This will return items where the updatedAt is less than or equal to the specified value.
         * @format date-time
         */
        updatedAtLe?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TestSuiteRunsPaginatedResponse, any>({
        path: `/test-suite/${testSuiteId}/run`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Test Suite Runs
     * @name TestSuiteRunControllerCreate
     * @summary Create Test Suite Run
     * @request POST:/test-suite/{testSuiteId}/run
     * @secure
     */
    testSuiteRunControllerCreate: (
      testSuiteId: string,
      data: CreateTestSuiteRunDto,
      params: RequestParams = {},
    ) =>
      this.request<TestSuiteRun, any>({
        path: `/test-suite/${testSuiteId}/run`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Test Suite Runs
     * @name TestSuiteRunControllerFindOne
     * @summary Get Test Suite Run
     * @request GET:/test-suite/{testSuiteId}/run/{id}
     * @secure
     */
    testSuiteRunControllerFindOne: (testSuiteId: string, id: string, params: RequestParams = {}) =>
      this.request<TestSuiteRun, any>({
        path: `/test-suite/${testSuiteId}/run/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Test Suite Runs
     * @name TestSuiteRunControllerUpdate
     * @summary Update Test Suite Run
     * @request PATCH:/test-suite/{testSuiteId}/run/{id}
     * @secure
     */
    testSuiteRunControllerUpdate: (
      testSuiteId: string,
      id: string,
      data: UpdateTestSuiteRunDto,
      params: RequestParams = {},
    ) =>
      this.request<TestSuiteRun, any>({
        path: `/test-suite/${testSuiteId}/run/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Test Suite Runs
     * @name TestSuiteRunControllerRemove
     * @summary Delete Test Suite Run
     * @request DELETE:/test-suite/{testSuiteId}/run/{id}
     * @secure
     */
    testSuiteRunControllerRemove: (testSuiteId: string, id: string, params: RequestParams = {}) =>
      this.request<TestSuiteRun, any>({
        path: `/test-suite/${testSuiteId}/run/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  metrics = {
    /**
     * @description Use GET /metric instead
     *
     * @tags Analytics
     * @name AnalyticsControllerFindAllDeprecated
     * @summary List Billing Metrics
     * @request GET:/metrics
     * @deprecated
     * @secure
     */
    analyticsControllerFindAllDeprecated: (
      query?: {
        /**
         * Convert date & and time to provided timezone. https://popsql.com/learn-sql/postgresql/how-to-convert-utc-to-local-time-zone-in-postgresql
         * @example "PST"
         */
        timezone?: string;
        /**
         * This will include calls with a createdAt timestamp greater than or equal to the specified value.
         *
         * If not provided, defaults to the org's current period start.
         * @format date-time
         */
        rangeStart?: string;
        /**
         * This will include calls with a createdAt timestamp less than the specified value.
         *
         * If not provided, the default value will be the current timestamp.
         * @format date-time
         */
        rangeEnd?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Metrics[], any>({
        path: `/metrics`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  analytics = {
    /**
     * No description
     *
     * @tags Analytics
     * @name AnalyticsControllerQuery
     * @summary Create Analytics Queries
     * @request POST:/analytics
     * @secure
     */
    analyticsControllerQuery: (data: AnalyticsQueryDTO, params: RequestParams = {}) =>
      this.request<AnalyticsQueryResult[], any>({
        path: `/analytics`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  log = {
    /**
     * No description
     *
     * @tags Logs
     * @name LoggingControllerCallLogsQuery
     * @summary Get Call Logs
     * @request GET:/log
     * @secure
     */
    loggingControllerCallLogsQuery: (
      query: {
        callId: string;
        /**
         * This is the page number to return. Defaults to 1.
         * @min 1
         */
        page?: number;
        /** This is the sort order for pagination. Defaults to 'DESC'. */
        sortOrder?: 'ASC' | 'DESC';
        /**
         * This is the maximum number of items to return. Defaults to 100.
         * @min 0
         * @max 1000
         */
        limit?: number;
        /**
         * This will return items where the createdAt is greater than the specified value.
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * This will return items where the createdAt is less than the specified value.
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * This will return items where the createdAt is greater than or equal to the specified value.
         * @format date-time
         */
        createdAtGe?: string;
        /**
         * This will return items where the createdAt is less than or equal to the specified value.
         * @format date-time
         */
        createdAtLe?: string;
        /**
         * This will return items where the updatedAt is greater than the specified value.
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * This will return items where the updatedAt is less than the specified value.
         * @format date-time
         */
        updatedAtLt?: string;
        /**
         * This will return items where the updatedAt is greater than or equal to the specified value.
         * @format date-time
         */
        updatedAtGe?: string;
        /**
         * This will return items where the updatedAt is less than or equal to the specified value.
         * @format date-time
         */
        updatedAtLe?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CallLogsPaginatedResponse, any>({
        path: `/log`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Logs
     * @name LoggingControllerCallLogsDeleteQuery
     * @summary Delete Call Logs
     * @request DELETE:/log
     * @secure
     */
    loggingControllerCallLogsDeleteQuery: (
      query: {
        callId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/log`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),
  };
  logs = {
    /**
     * No description
     *
     * @tags Logs
     * @name LoggingControllerLogsQuery
     * @summary Get Logs
     * @request GET:/logs
     * @deprecated
     * @secure
     */
    loggingControllerLogsQuery: (
      query?: {
        /** This is the type of the log. */
        type?: 'API' | 'Webhook' | 'Call' | 'Provider';
        /** This is the type of the webhook, given the log is from a webhook. */
        webhookType?: string;
        /** This is the ID of the assistant. */
        assistantId?: string;
        /** This is the ID of the phone number. */
        phoneNumberId?: string;
        /** This is the ID of the customer. */
        customerId?: string;
        /** This is the ID of the squad. */
        squadId?: string;
        /** This is the ID of the call. */
        callId?: string;
        /**
         * This is the page number to return. Defaults to 1.
         * @min 1
         */
        page?: number;
        /** This is the sort order for pagination. Defaults to 'DESC'. */
        sortOrder?: 'ASC' | 'DESC';
        /**
         * This is the maximum number of items to return. Defaults to 100.
         * @min 0
         * @max 1000
         */
        limit?: number;
        /**
         * This will return items where the createdAt is greater than the specified value.
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * This will return items where the createdAt is less than the specified value.
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * This will return items where the createdAt is greater than or equal to the specified value.
         * @format date-time
         */
        createdAtGe?: string;
        /**
         * This will return items where the createdAt is less than or equal to the specified value.
         * @format date-time
         */
        createdAtLe?: string;
        /**
         * This will return items where the updatedAt is greater than the specified value.
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * This will return items where the updatedAt is less than the specified value.
         * @format date-time
         */
        updatedAtLt?: string;
        /**
         * This will return items where the updatedAt is greater than or equal to the specified value.
         * @format date-time
         */
        updatedAtGe?: string;
        /**
         * This will return items where the updatedAt is less than or equal to the specified value.
         * @format date-time
         */
        updatedAtLe?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<LogsPaginatedResponse, any>({
        path: `/logs`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Logs
     * @name LoggingControllerLogsDeleteQuery
     * @summary Delete Logs
     * @request DELETE:/logs
     * @deprecated
     * @secure
     */
    loggingControllerLogsDeleteQuery: (
      query?: {
        /** This is the type of the log. */
        type?: 'API' | 'Webhook' | 'Call' | 'Provider';
        assistantId?: string;
        /** This is the ID of the phone number. */
        phoneNumberId?: string;
        /** This is the ID of the customer. */
        customerId?: string;
        /** This is the ID of the squad. */
        squadId?: string;
        /** This is the ID of the call. */
        callId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/logs`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),
  };
  org = {
    /**
     * No description
     *
     * @tags Orgs
     * @name OrgControllerCreate
     * @summary Create Org
     * @request POST:/org
     * @secure
     */
    orgControllerCreate: (data: CreateOrgDTO, params: RequestParams = {}) =>
      this.request<Org, any>({
        path: `/org`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orgs
     * @name OrgControllerFindAll
     * @summary List Orgs
     * @request GET:/org
     * @secure
     */
    orgControllerFindAll: (params: RequestParams = {}) =>
      this.request<Org[], any>({
        path: `/org`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orgs
     * @name OrgControllerFindOne
     * @summary Get Org
     * @request GET:/org/{id}
     * @secure
     */
    orgControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<Org, any>({
        path: `/org/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orgs
     * @name OrgControllerUpdate
     * @summary Update Org
     * @request PATCH:/org/{id}
     * @secure
     */
    orgControllerUpdate: (id: string, data: UpdateOrgDTO, params: RequestParams = {}) =>
      this.request<Org, any>({
        path: `/org/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orgs
     * @name OrgControllerDeleteOrg
     * @summary Delete Org
     * @request DELETE:/org/{id}
     * @secure
     */
    orgControllerDeleteOrg: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/org/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orgs
     * @name OrgControllerFindAllUsers
     * @summary List Users
     * @request GET:/org/{id}/user
     * @secure
     */
    orgControllerFindAllUsers: (id: string, params: RequestParams = {}) =>
      this.request<User[], any>({
        path: `/org/${id}/user`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orgs
     * @name OrgControllerOrgLeave
     * @summary Leave Org
     * @request DELETE:/org/{id}/leave
     * @secure
     */
    orgControllerOrgLeave: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/org/${id}/leave`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orgs
     * @name OrgControllerOrgRemoveUser
     * @summary Remove Org Member
     * @request DELETE:/org/{id}/member/{memberId}/leave
     * @secure
     */
    orgControllerOrgRemoveUser: (id: string, memberId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/org/${id}/member/${memberId}/leave`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orgs
     * @name OrgControllerUsersInvite
     * @summary Invite User
     * @request POST:/org/{id}/invite
     * @secure
     */
    orgControllerUsersInvite: (id: string, data: InviteUserDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/org/${id}/invite`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orgs
     * @name OrgControllerUserUpdate
     * @summary Update User Role
     * @request PATCH:/org/{id}/role
     * @secure
     */
    orgControllerUserUpdate: (id: string, data: UpdateUserRoleDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/org/${id}/role`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  token = {
    /**
     * No description
     *
     * @tags Tokens
     * @name TokenControllerCreate
     * @summary Create Token
     * @request POST:/token
     * @secure
     */
    tokenControllerCreate: (data: CreateTokenDTO, params: RequestParams = {}) =>
      this.request<Token, any>({
        path: `/token`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tokens
     * @name TokenControllerFindAll
     * @summary List Tokens
     * @request GET:/token
     * @secure
     */
    tokenControllerFindAll: (
      query?: {
        /**
         * This is the maximum number of items to return. Defaults to 100.
         * @min 0
         * @max 1000
         */
        limit?: number;
        /**
         * This will return items where the createdAt is greater than the specified value.
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * This will return items where the createdAt is less than the specified value.
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * This will return items where the createdAt is greater than or equal to the specified value.
         * @format date-time
         */
        createdAtGe?: string;
        /**
         * This will return items where the createdAt is less than or equal to the specified value.
         * @format date-time
         */
        createdAtLe?: string;
        /**
         * This will return items where the updatedAt is greater than the specified value.
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * This will return items where the updatedAt is less than the specified value.
         * @format date-time
         */
        updatedAtLt?: string;
        /**
         * This will return items where the updatedAt is greater than or equal to the specified value.
         * @format date-time
         */
        updatedAtGe?: string;
        /**
         * This will return items where the updatedAt is less than or equal to the specified value.
         * @format date-time
         */
        updatedAtLe?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Token[], any>({
        path: `/token`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tokens
     * @name TokenControllerFindOne
     * @summary Get Token
     * @request GET:/token/{id}
     * @secure
     */
    tokenControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<Token, any>({
        path: `/token/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tokens
     * @name TokenControllerUpdate
     * @summary Update Token
     * @request PATCH:/token/{id}
     * @secure
     */
    tokenControllerUpdate: (id: string, data: UpdateTokenDTO, params: RequestParams = {}) =>
      this.request<Token, any>({
        path: `/token/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tokens
     * @name TokenControllerRemove
     * @summary Delete Token
     * @request DELETE:/token/{id}
     * @secure
     */
    tokenControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<Token, any>({
        path: `/token/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  credential = {
    /**
     * No description
     *
     * @tags Credentials
     * @name CredentialControllerCreate
     * @summary Create Credential
     * @request POST:/credential
     * @secure
     */
    credentialControllerCreate: (
      data:
        | CreateAnthropicCredentialDTO
        | CreateAnyscaleCredentialDTO
        | CreateAssemblyAICredentialDTO
        | CreateAzureCredentialDTO
        | CreateAzureOpenAICredentialDTO
        | CreateByoSipTrunkCredentialDTO
        | CreateCartesiaCredentialDTO
        | CreateCerebrasCredentialDTO
        | CreateCloudflareCredentialDTO
        | CreateCustomLLMCredentialDTO
        | CreateDeepgramCredentialDTO
        | CreateDeepInfraCredentialDTO
        | CreateDeepSeekCredentialDTO
        | CreateElevenLabsCredentialDTO
        | CreateGcpCredentialDTO
        | CreateGladiaCredentialDTO
        | CreateGoHighLevelCredentialDTO
        | CreateGoogleCredentialDTO
        | CreateGroqCredentialDTO
        | CreateHumeCredentialDTO
        | CreateInflectionAICredentialDTO
        | CreateLangfuseCredentialDTO
        | CreateLmntCredentialDTO
        | CreateMakeCredentialDTO
        | CreateMistralCredentialDTO
        | CreateNeuphonicCredentialDTO
        | CreateOpenAICredentialDTO
        | CreateOpenRouterCredentialDTO
        | CreatePerplexityAICredentialDTO
        | CreatePlayHTCredentialDTO
        | CreateRimeAICredentialDTO
        | CreateRunpodCredentialDTO
        | CreateS3CredentialDTO
        | CreateSmallestAICredentialDTO
        | CreateSpeechmaticsCredentialDTO
        | CreateSupabaseCredentialDTO
        | CreateTavusCredentialDTO
        | CreateTogetherAICredentialDTO
        | CreateTrieveCredentialDTO
        | CreateTwilioCredentialDTO
        | CreateVonageCredentialDTO
        | CreateWebhookCredentialDTO
        | CreateXAiCredentialDTO
        | CreateGoogleCalendarOAuth2ClientCredentialDTO
        | CreateGoogleCalendarOAuth2AuthorizationCredentialDTO,
      params: RequestParams = {},
    ) =>
      this.request<
        | AnthropicCredential
        | AnyscaleCredential
        | AssemblyAICredential
        | AzureCredential
        | AzureOpenAICredential
        | ByoSipTrunkCredential
        | CartesiaCredential
        | CerebrasCredential
        | CloudflareCredential
        | CustomLLMCredential
        | DeepgramCredential
        | DeepInfraCredential
        | DeepSeekCredential
        | ElevenLabsCredential
        | GcpCredential
        | GladiaCredential
        | GoHighLevelCredential
        | GoogleCredential
        | GroqCredential
        | HumeCredential
        | InflectionAICredential
        | LangfuseCredential
        | LmntCredential
        | MakeCredential
        | MistralCredential
        | NeuphonicCredential
        | OpenAICredential
        | OpenRouterCredential
        | PerplexityAICredential
        | PlayHTCredential
        | RimeAICredential
        | RunpodCredential
        | S3Credential
        | SmallestAICredential
        | SpeechmaticsCredential
        | SupabaseCredential
        | TavusCredential
        | TogetherAICredential
        | TrieveCredential
        | TwilioCredential
        | VonageCredential
        | WebhookCredential
        | XAiCredential
        | GoogleCalendarOAuth2ClientCredential
        | GoogleCalendarOAuth2AuthorizationCredential,
        any
      >({
        path: `/credential`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Credentials
     * @name CredentialControllerFindAll
     * @summary List Credentials
     * @request GET:/credential
     * @secure
     */
    credentialControllerFindAll: (
      query?: {
        /**
         * This is the maximum number of items to return. Defaults to 100.
         * @min 0
         * @max 1000
         */
        limit?: number;
        /**
         * This will return items where the createdAt is greater than the specified value.
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * This will return items where the createdAt is less than the specified value.
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * This will return items where the createdAt is greater than or equal to the specified value.
         * @format date-time
         */
        createdAtGe?: string;
        /**
         * This will return items where the createdAt is less than or equal to the specified value.
         * @format date-time
         */
        createdAtLe?: string;
        /**
         * This will return items where the updatedAt is greater than the specified value.
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * This will return items where the updatedAt is less than the specified value.
         * @format date-time
         */
        updatedAtLt?: string;
        /**
         * This will return items where the updatedAt is greater than or equal to the specified value.
         * @format date-time
         */
        updatedAtGe?: string;
        /**
         * This will return items where the updatedAt is less than or equal to the specified value.
         * @format date-time
         */
        updatedAtLe?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        (
          | AnthropicCredential
          | AnyscaleCredential
          | AssemblyAICredential
          | AzureCredential
          | AzureOpenAICredential
          | ByoSipTrunkCredential
          | CartesiaCredential
          | CerebrasCredential
          | CloudflareCredential
          | CustomLLMCredential
          | DeepgramCredential
          | DeepInfraCredential
          | DeepSeekCredential
          | ElevenLabsCredential
          | GcpCredential
          | GladiaCredential
          | GoHighLevelCredential
          | GoogleCredential
          | GroqCredential
          | HumeCredential
          | InflectionAICredential
          | LangfuseCredential
          | LmntCredential
          | MakeCredential
          | MistralCredential
          | NeuphonicCredential
          | OpenAICredential
          | OpenRouterCredential
          | PerplexityAICredential
          | PlayHTCredential
          | RimeAICredential
          | RunpodCredential
          | S3Credential
          | SmallestAICredential
          | SpeechmaticsCredential
          | SupabaseCredential
          | TavusCredential
          | TogetherAICredential
          | TrieveCredential
          | TwilioCredential
          | VonageCredential
          | WebhookCredential
          | XAiCredential
          | GoogleCalendarOAuth2ClientCredential
          | GoogleCalendarOAuth2AuthorizationCredential
        )[],
        any
      >({
        path: `/credential`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Credentials
     * @name CredentialControllerFindOne
     * @summary Get Credential
     * @request GET:/credential/{id}
     * @secure
     */
    credentialControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<
        | AnthropicCredential
        | AnyscaleCredential
        | AssemblyAICredential
        | AzureCredential
        | AzureOpenAICredential
        | ByoSipTrunkCredential
        | CartesiaCredential
        | CerebrasCredential
        | CloudflareCredential
        | CustomLLMCredential
        | DeepgramCredential
        | DeepInfraCredential
        | DeepSeekCredential
        | ElevenLabsCredential
        | GcpCredential
        | GladiaCredential
        | GoHighLevelCredential
        | GoogleCredential
        | GroqCredential
        | HumeCredential
        | InflectionAICredential
        | LangfuseCredential
        | LmntCredential
        | MakeCredential
        | MistralCredential
        | NeuphonicCredential
        | OpenAICredential
        | OpenRouterCredential
        | PerplexityAICredential
        | PlayHTCredential
        | RimeAICredential
        | RunpodCredential
        | S3Credential
        | SmallestAICredential
        | SpeechmaticsCredential
        | SupabaseCredential
        | TavusCredential
        | TogetherAICredential
        | TrieveCredential
        | TwilioCredential
        | VonageCredential
        | WebhookCredential
        | XAiCredential
        | GoogleCalendarOAuth2ClientCredential
        | GoogleCalendarOAuth2AuthorizationCredential,
        any
      >({
        path: `/credential/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Credentials
     * @name CredentialControllerUpdate
     * @summary Update Credential
     * @request PATCH:/credential/{id}
     * @secure
     */
    credentialControllerUpdate: (
      id: string,
      data:
        | UpdateAnthropicCredentialDTO
        | UpdateAnyscaleCredentialDTO
        | UpdateAssemblyAICredentialDTO
        | UpdateAzureCredentialDTO
        | UpdateAzureOpenAICredentialDTO
        | UpdateByoSipTrunkCredentialDTO
        | UpdateCartesiaCredentialDTO
        | UpdateCerebrasCredentialDTO
        | UpdateCloudflareCredentialDTO
        | UpdateCustomLLMCredentialDTO
        | UpdateDeepgramCredentialDTO
        | UpdateDeepInfraCredentialDTO
        | UpdateDeepSeekCredentialDTO
        | UpdateElevenLabsCredentialDTO
        | UpdateGcpCredentialDTO
        | UpdateGladiaCredentialDTO
        | UpdateGoHighLevelCredentialDTO
        | UpdateGoogleCredentialDTO
        | UpdateGroqCredentialDTO
        | UpdateHumeCredentialDTO
        | UpdateInflectionAICredentialDTO
        | UpdateLangfuseCredentialDTO
        | UpdateLmntCredentialDTO
        | UpdateMakeCredentialDTO
        | UpdateMistralCredentialDTO
        | UpdateNeuphonicCredentialDTO
        | UpdateOpenAICredentialDTO
        | UpdateOpenRouterCredentialDTO
        | UpdatePerplexityAICredentialDTO
        | UpdatePlayHTCredentialDTO
        | UpdateRimeAICredentialDTO
        | UpdateRunpodCredentialDTO
        | UpdateS3CredentialDTO
        | UpdateSmallestAICredentialDTO
        | UpdateSpeechmaticsCredentialDTO
        | UpdateSupabaseCredentialDTO
        | UpdateTavusCredentialDTO
        | UpdateTogetherAICredentialDTO
        | UpdateTrieveCredentialDTO
        | UpdateTwilioCredentialDTO
        | UpdateVonageCredentialDTO
        | UpdateWebhookCredentialDTO
        | UpdateXAiCredentialDTO
        | UpdateGoogleCalendarOAuth2ClientCredentialDTO
        | UpdateGoogleCalendarOAuth2AuthorizationCredentialDTO,
      params: RequestParams = {},
    ) =>
      this.request<
        | AnthropicCredential
        | AnyscaleCredential
        | AssemblyAICredential
        | AzureCredential
        | AzureOpenAICredential
        | ByoSipTrunkCredential
        | CartesiaCredential
        | CerebrasCredential
        | CloudflareCredential
        | CustomLLMCredential
        | DeepgramCredential
        | DeepInfraCredential
        | DeepSeekCredential
        | ElevenLabsCredential
        | GcpCredential
        | GladiaCredential
        | GoHighLevelCredential
        | GoogleCredential
        | GroqCredential
        | HumeCredential
        | InflectionAICredential
        | LangfuseCredential
        | LmntCredential
        | MakeCredential
        | MistralCredential
        | NeuphonicCredential
        | OpenAICredential
        | OpenRouterCredential
        | PerplexityAICredential
        | PlayHTCredential
        | RimeAICredential
        | RunpodCredential
        | S3Credential
        | SmallestAICredential
        | SpeechmaticsCredential
        | SupabaseCredential
        | TavusCredential
        | TogetherAICredential
        | TrieveCredential
        | TwilioCredential
        | VonageCredential
        | WebhookCredential
        | XAiCredential
        | GoogleCalendarOAuth2ClientCredential
        | GoogleCalendarOAuth2AuthorizationCredential,
        any
      >({
        path: `/credential/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Credentials
     * @name CredentialControllerRemove
     * @summary Delete Credential
     * @request DELETE:/credential/{id}
     * @secure
     */
    credentialControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<
        | AnthropicCredential
        | AnyscaleCredential
        | AssemblyAICredential
        | AzureCredential
        | AzureOpenAICredential
        | ByoSipTrunkCredential
        | CartesiaCredential
        | CerebrasCredential
        | CloudflareCredential
        | CustomLLMCredential
        | DeepgramCredential
        | DeepInfraCredential
        | DeepSeekCredential
        | ElevenLabsCredential
        | GcpCredential
        | GladiaCredential
        | GoHighLevelCredential
        | GoogleCredential
        | GroqCredential
        | HumeCredential
        | InflectionAICredential
        | LangfuseCredential
        | LmntCredential
        | MakeCredential
        | MistralCredential
        | NeuphonicCredential
        | OpenAICredential
        | OpenRouterCredential
        | PerplexityAICredential
        | PlayHTCredential
        | RimeAICredential
        | RunpodCredential
        | S3Credential
        | SmallestAICredential
        | SpeechmaticsCredential
        | SupabaseCredential
        | TavusCredential
        | TogetherAICredential
        | TrieveCredential
        | TwilioCredential
        | VonageCredential
        | WebhookCredential
        | XAiCredential
        | GoogleCalendarOAuth2ClientCredential
        | GoogleCalendarOAuth2AuthorizationCredential,
        any
      >({
        path: `/credential/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Credentials
     * @name CredentialControllerGenerateSession
     * @summary Generate a credential session
     * @request POST:/credential/session
     * @secure
     */
    credentialControllerGenerateSession: (data: CredentialSessionDTO, params: RequestParams = {}) =>
      this.request<CredentialSessionResponse, any>({
        path: `/credential/session`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Credentials
     * @name CredentialControllerHandleWebhook
     * @summary Handle credential webhook
     * @request POST:/credential/webhook
     */
    credentialControllerHandleWebhook: (data: CredentialWebhookDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/credential/webhook`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Credentials
     * @name CredentialControllerTriggerCredentialAction
     * @summary Trigger a credential action
     * @request POST:/credential/trigger
     * @secure
     */
    credentialControllerTriggerCredentialAction: (
      data: CredentialActionRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/credential/trigger`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  template = {
    /**
     * No description
     *
     * @tags Templates
     * @name TemplateControllerCreate
     * @summary Create Template
     * @request POST:/template
     * @secure
     */
    templateControllerCreate: (data: CreateToolTemplateDTO[], params: RequestParams = {}) =>
      this.request<Template, any>({
        path: `/template`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Templates
     * @name TemplateControllerFindAll
     * @summary List Templates
     * @request GET:/template
     * @secure
     */
    templateControllerFindAll: (
      query?: {
        collectionId?: string;
        visibility?: 'public' | 'private';
        provider?: 'make' | 'gohighlevel' | 'function';
        /**
         * This is the maximum number of items to return. Defaults to 100.
         * @min 0
         * @max 1000
         */
        limit?: number;
        /**
         * This will return items where the createdAt is greater than the specified value.
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * This will return items where the createdAt is less than the specified value.
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * This will return items where the createdAt is greater than or equal to the specified value.
         * @format date-time
         */
        createdAtGe?: string;
        /**
         * This will return items where the createdAt is less than or equal to the specified value.
         * @format date-time
         */
        createdAtLe?: string;
        /**
         * This will return items where the updatedAt is greater than the specified value.
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * This will return items where the updatedAt is less than the specified value.
         * @format date-time
         */
        updatedAtLt?: string;
        /**
         * This will return items where the updatedAt is greater than or equal to the specified value.
         * @format date-time
         */
        updatedAtGe?: string;
        /**
         * This will return items where the updatedAt is less than or equal to the specified value.
         * @format date-time
         */
        updatedAtLe?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Template[], any>({
        path: `/template`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Templates
     * @name TemplateControllerFindAllPinned
     * @summary List Templates
     * @request GET:/template/pinned
     * @secure
     */
    templateControllerFindAllPinned: (params: RequestParams = {}) =>
      this.request<Template[], any>({
        path: `/template/pinned`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Templates
     * @name TemplateControllerFindOne
     * @summary Get Template
     * @request GET:/template/{id}
     * @secure
     */
    templateControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<Template, any>({
        path: `/template/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Templates
     * @name TemplateControllerUpdate
     * @summary Update Template
     * @request PATCH:/template/{id}
     * @secure
     */
    templateControllerUpdate: (
      id: string,
      data: UpdateToolTemplateDTO,
      params: RequestParams = {},
    ) =>
      this.request<Template, any>({
        path: `/template/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Templates
     * @name TemplateControllerRemove
     * @summary Delete Template
     * @request DELETE:/template/{id}
     * @secure
     */
    templateControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<Template, any>({
        path: `/template/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  voiceLibrary = {
    /**
     * No description
     *
     * @tags Voice Library
     * @name VoiceLibraryControllerVoiceGetByProvider
     * @summary Get voices in Voice Library by Provider
     * @request GET:/voice-library/{provider}
     * @secure
     */
    voiceLibraryControllerVoiceGetByProvider: (
      provider:
        | 'vapi'
        | '11labs'
        | 'azure'
        | 'cartesia'
        | 'custom-voice'
        | 'deepgram'
        | 'hume'
        | 'lmnt'
        | 'neuphonic'
        | 'openai'
        | 'playht'
        | 'rime-ai'
        | 'smallest-ai'
        | 'tavus'
        | 'sesame',
      query?: {
        page?: number;
        keyword?: string;
        language?: string;
        accent?: string;
        gender?: string;
        /**
         * This is the maximum number of items to return. Defaults to 100.
         * @min 0
         * @max 1000
         */
        limit?: number;
        /**
         * This will return items where the createdAt is greater than the specified value.
         * @format date-time
         */
        createdAtGt?: string;
        /**
         * This will return items where the createdAt is less than the specified value.
         * @format date-time
         */
        createdAtLt?: string;
        /**
         * This will return items where the createdAt is greater than or equal to the specified value.
         * @format date-time
         */
        createdAtGe?: string;
        /**
         * This will return items where the createdAt is less than or equal to the specified value.
         * @format date-time
         */
        createdAtLe?: string;
        /**
         * This will return items where the updatedAt is greater than the specified value.
         * @format date-time
         */
        updatedAtGt?: string;
        /**
         * This will return items where the updatedAt is less than the specified value.
         * @format date-time
         */
        updatedAtLt?: string;
        /**
         * This will return items where the updatedAt is greater than or equal to the specified value.
         * @format date-time
         */
        updatedAtGe?: string;
        /**
         * This will return items where the updatedAt is less than or equal to the specified value.
         * @format date-time
         */
        updatedAtLe?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<VoiceLibrary[], any>({
        path: `/voice-library/${provider}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Voice Library
     * @name VoiceLibraryControllerVoiceGetAccentsByProvider
     * @summary Get accents in Voice Library by Provider
     * @request GET:/voice-library/{provider}/accents
     * @secure
     */
    voiceLibraryControllerVoiceGetAccentsByProvider: (
      provider:
        | 'vapi'
        | '11labs'
        | 'azure'
        | 'cartesia'
        | 'custom-voice'
        | 'deepgram'
        | 'hume'
        | 'lmnt'
        | 'neuphonic'
        | 'openai'
        | 'playht'
        | 'rime-ai'
        | 'smallest-ai'
        | 'tavus'
        | 'sesame',
      params: RequestParams = {},
    ) =>
      this.request<VoiceLibrary[], any>({
        path: `/voice-library/${provider}/accents`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Voice Library
     * @name VoiceLibraryControllerVoiceLibrarySyncByProvider
     * @summary Sync Private voices in Voice Library by Provider
     * @request POST:/voice-library/sync/{provider}
     * @secure
     */
    voiceLibraryControllerVoiceLibrarySyncByProvider: (
      provider:
        | 'vapi'
        | '11labs'
        | 'azure'
        | 'cartesia'
        | 'custom-voice'
        | 'deepgram'
        | 'hume'
        | 'lmnt'
        | 'neuphonic'
        | 'openai'
        | 'playht'
        | 'rime-ai'
        | 'smallest-ai'
        | 'tavus'
        | 'sesame',
      params: RequestParams = {},
    ) =>
      this.request<VoiceLibrary[], any>({
        path: `/voice-library/sync/${provider}`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Voice Library
     * @name VoiceLibraryControllerVoiceLibrarySyncDefaultVoices
     * @summary Sync Default voices in Voice Library by Providers
     * @request POST:/voice-library/sync
     * @secure
     */
    voiceLibraryControllerVoiceLibrarySyncDefaultVoices: (
      data: SyncVoiceLibraryDTO,
      params: RequestParams = {},
    ) =>
      this.request<VoiceLibrary[], any>({
        path: `/voice-library/sync`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  provider = {
    /**
     * No description
     *
     * @tags Providers
     * @name ProviderControllerGetWorkflows
     * @request GET:/{provider}/workflows
     * @secure
     */
    providerControllerGetWorkflows: (
      provider: 'make' | 'ghl' | 'google.calendar',
      query?: {
        locationId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SbcConfiguration, any>({
        path: `/${provider}/workflows`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Providers
     * @name ProviderControllerGetWorkflowTriggerHook
     * @request GET:/{provider}/workflows/{workflowId}/hooks
     * @secure
     */
    providerControllerGetWorkflowTriggerHook: (
      provider: 'make' | 'ghl' | 'google.calendar',
      workflowId: string,
      params: RequestParams = {},
    ) =>
      this.request<SbcConfiguration, any>({
        path: `/${provider}/workflows/${workflowId}/hooks`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Providers
     * @name ProviderControllerGetLocations
     * @request GET:/{provider}/locations
     * @secure
     */
    providerControllerGetLocations: (
      provider: 'make' | 'ghl' | 'google.calendar',
      params: RequestParams = {},
    ) =>
      this.request<SbcConfiguration, any>({
        path: `/${provider}/locations`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Providers
     * @name VoiceProviderControllerSearchVoices
     * @summary Search Voice from Provider Voice Library.
     * @request GET:/{provider}/voices/search
     * @deprecated
     * @secure
     */
    voiceProviderControllerSearchVoices: (
      provider: string,
      query: {
        /** The name of the voice from the provider you want to search. */
        name: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<VoiceLibraryVoiceResponse[], any>({
        path: `/${provider}/voices/search`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Providers
     * @name VoiceProviderControllerSearchVoice
     * @summary Search Voice from Provider Voice Library.
     * @request GET:/{provider}/voice/search
     * @secure
     */
    voiceProviderControllerSearchVoice: (
      provider: string,
      query: {
        /** The name of the voice from the provider you want to search. */
        name: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<VoiceLibraryVoiceResponse[], any>({
        path: `/${provider}/voice/search`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Providers
     * @name VoiceProviderControllerAddVoices
     * @summary Add Shared Voice to your Provider Account.
     * @request POST:/{provider}/voices/add
     * @deprecated
     * @secure
     */
    voiceProviderControllerAddVoices: (
      provider: string,
      data: AddVoiceToProviderDTO,
      params: RequestParams = {},
    ) =>
      this.request<VoiceLibrary, any>({
        path: `/${provider}/voices/add`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Providers
     * @name VoiceProviderControllerAddVoice
     * @summary Add Shared Voice to your Provider Account.
     * @request POST:/{provider}/voice/add
     * @secure
     */
    voiceProviderControllerAddVoice: (
      provider: string,
      data: AddVoiceToProviderDTO,
      params: RequestParams = {},
    ) =>
      this.request<VoiceLibrary, any>({
        path: `/${provider}/voice/add`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  v11Labs = {
    /**
     * No description
     *
     * @tags Providers
     * @name VoiceProviderControllerCloneVoices
     * @summary Clone a voice to the provider account and add to Vapi Voice Library.
     * @request POST:/11labs/voice/clone
     * @secure
     */
    voiceProviderControllerCloneVoices: (data: CloneVoiceDTO, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/11labs/voice/clone`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),
  };
}
