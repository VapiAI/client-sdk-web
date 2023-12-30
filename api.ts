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

export interface DeepgramVoice {
  /**
   * This is the voice provider that will be used.
   *
   * Pro Voices: `11labs`, `playht`, `openai`
   *
   * Basic Voices: `rime-ai`, `deepgram`
   */
  provider: "deepgram";
  /** This is the provider-specific ID that will be used. */
  voiceId: "aurora" | "asteria" | "artemis" | "andromeda" | "stella" | "orion" | "atlas" | string;
}

export interface OpenAIFunction {
  /**
   * This is the the name of the function to be called.
   *
   * Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64.
   * @maxLength 64
   */
  name: string;
  /** Setting async: true will cause the function to be called asynchronously, meaning that the Assistant will not wait for the function to return before continuing. */
  async?: boolean;
  /** This is the description of what the function does, used by the AI to choose when and how to call the function. */
  description?: string;
  /**
   * These are the parameters the functions accepts, described as a JSON Schema object.
   *
   * See the [OpenAI guide](https://platform.openai.com/docs/guides/gpt/function-calling) for examples, and the [JSON Schema reference](https://json-schema.org/understanding-json-schema) for documentation about the format.
   *
   * To describe a function that accepts no parameters, provide the value {"type": "object", "properties": {}}.
   */
  parameters: object;
}

export interface TogetherAIModel {
  provider: "together-ai";
  /** The key of the model from the custom provider. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
  model: string;
  /** This sets the objective and understanding for the assistant. */
  systemPrompt?: string;
  /**
   * This is the temperature that will be used for calls. Default is 1.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /** These are the functions that the assistant can execute during the call. */
  functions?: OpenAIFunction[];
}

export interface AnyscaleModel {
  provider: "anyscale";
  /** The key of the model from the custom provider. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
  model: string;
  /** This sets the objective and understanding for the assistant. */
  systemPrompt?: string;
  /**
   * This is the temperature that will be used for calls. Default is 1.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /** These are the functions that the assistant can execute during the call. */
  functions?: OpenAIFunction[];
}

export interface OpenRouterModel {
  provider: "openrouter";
  /** The key of the model from the custom provider. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
  model: string;
  /** This sets the objective and understanding for the assistant. */
  systemPrompt?: string;
  /**
   * This is the temperature that will be used for calls. Default is 1.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /** These are the functions that the assistant can execute during the call. */
  functions?: OpenAIFunction[];
}

export interface PerplexityAIModel {
  provider: "perplexity-ai";
  /** The key of the model from the custom provider. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
  model: string;
  /** This sets the objective and understanding for the assistant. */
  systemPrompt?: string;
  /**
   * This is the temperature that will be used for calls. Default is 1.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /** These are the functions that the assistant can execute during the call. */
  functions?: OpenAIFunction[];
}

export interface DeepInfraModel {
  provider: "deepinfra";
  /** The key of the model from the custom provider. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
  model: string;
  /** This sets the objective and understanding for the assistant. */
  systemPrompt?: string;
  /**
   * This is the temperature that will be used for calls. Default is 1.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /** These are the functions that the assistant can execute during the call. */
  functions?: OpenAIFunction[];
}

export interface CustomLLMModel {
  /** This is the provider that will be used for the model. Any service, including your own server, that is compatible with the OpenAI API can be used. */
  provider: "custom-llm";
  /** These is the URL we'll use for the OpenAI client's `baseURL`. Ex. https://openrouter.ai/api/v1 */
  url: string;
  /** The key of the model from the custom provider. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
  model: string;
  /** This sets the objective and understanding for the assistant. */
  systemPrompt?: string;
  /**
   * This is the temperature that will be used for calls. Default is 1.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /** These are the functions that the assistant can execute during the call. */
  functions?: OpenAIFunction[];
}

export interface DeepgramTranscriber {
  /** This is the transcription provider that will be used. Currently, only Deepgram is supported. */
  provider: "deepgram";
  /** This is the Deepgram model that will be used. A list of models can be found here: https://developers.deepgram.com/docs/models-languages-overview */
  model?:
    | "nova-2"
    | "nova-2-general"
    | "nova-2-meeting"
    | "nova-2-phonecall"
    | "nova-2-finance"
    | "nova-2-conversationalai"
    | "nova-2-voicemail"
    | "nova-2-video"
    | "nova-2-medical"
    | "nova-2-drivethru"
    | "nova-2-automotive"
    | "nova-2-custom"
    | string;
  /** These keywords are passed to the transcription model to help it pick up use-case specific words. Anything that may not be a common word, like your company name, should be added here. */
  keywords?: string[];
}

export interface ElevenLabsVoice {
  /**
   * This is the voice provider that will be used.
   *
   * Pro Voices: `11labs`, `playht`
   *
   * Basic Voices: `rime-ai`, `deepgram`
   */
  provider: "11labs";
  /** This is the provider-specific ID that will be used. Ensure the Voice is present in your 11Labs Voice Library. */
  voiceId:
    | "burt"
    | "andrea"
    | "phillip"
    | "steve"
    | "joseph"
    | "myra"
    | "paula"
    | "ryan"
    | "drew"
    | "paul"
    | "mrb"
    | "matilda"
    | "mark"
    | string;
  /**
   * Defines the stability for voice settings.
   * @min 0
   * @max 1
   * @default null
   */
  stability?: number;
  /**
   * Defines the similarity boost for voice settings.
   * @min 0
   * @max 1
   * @default null
   */
  similarityBoost?: number;
  /**
   * Defines the style for voice settings.
   * @default null
   */
  style?: boolean;
  /**
   * Defines the use speaker boost for voice settings.
   * @default null
   */
  useSpeakerBoost?: boolean;
}

export interface OpenAIModel {
  /** This is the provider that will be used for the model. */
  provider: "openai";
  /** This is the OpenAI model that will be used. */
  model: "gpt-4" | "gpt-3.5-turbo";
  /** This sets the objective and understanding for the assistant. */
  systemPrompt?: string;
  /**
   * This is the temperature that will be used for calls. Default is 1.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /** These are the functions that the assistant can execute during the call. */
  functions?: OpenAIFunction[];
}

export interface PlayHTVoice {
  /**
   * This is the voice provider that will be used.
   *
   * Pro Voices: `11labs`, `playht`, `openai`
   *
   * Basic Voices: `rime-ai`, `deepgram`
   */
  provider: "playht";
  /** This is the provider-specific ID that will be used. */
  voiceId:
    | "jennifer"
    | "melissa"
    | "will"
    | "chris"
    | "matt"
    | "jack"
    | "ruby"
    | "davis"
    | "donna"
    | "michael"
    | string;
  /**
   * This is the speed multiplier that will be used.
   * @min 0
   * @max 5
   * @default null
   */
  speed?: number;
  /**
   * A floating point number between 0, inclusive, and 2, inclusive. If equal to null or not provided, the model's default temperature will be used. The temperature parameter controls variance. Lower temperatures result in more predictable results, higher temperatures allow each run to vary more, so the voice may sound less like the baseline voice.
   * @min 0.1
   * @max 2
   * @default null
   */
  temperature?: number;
  /**
   * An emotion to be applied to the speech.
   * @default null
   */
  emotion?: "female_happy" | "female_sad" | "female_angry" | "female_fearful" | "female_disgust" | "female_surprised";
  /**
   * A number between 1 and 6. Use lower numbers to reduce how unique your chosen voice will be compared to other voices.
   * @min 1
   * @max 6
   * @default null
   */
  voiceGuidance?: number;
  /**
   * A number between 1 and 30. Use lower numbers to to reduce how strong your chosen emotion will be. Higher numbers will create a very emotional performance.
   * @min 1
   * @max 30
   * @default null
   */
  styleGuidance?: number;
  /**
   * A number between 1 and 2. This number influences how closely the generated speech adheres to the input text. Use lower values to create more fluid speech, but with a higher chance of deviating from the input text. Higher numbers will make the generated speech more accurate to the input text, ensuring that the words spoken align closely with the provided text.
   * @min 1
   * @max 2
   * @default null
   */
  textGuidance?: number;
}

export interface RimeAIVoice {
  /**
   * This is the voice provider that will be used.
   *
   * Pro Voices: `11labs`, `playht`, `openai`
   *
   * Basic Voices: `rime-ai`, `deepgram`
   */
  provider: "rime-ai";
  /** This is the provider-specific ID that will be used. */
  voiceId:
    | "kai"
    | "zion"
    | "xavier"
    | "marty"
    | "hudson"
    | "savannah"
    | "colette"
    | "daphne"
    | "aurora"
    | "nova"
    | string;
  /**
   * This is the speed multiplier that will be used.
   * @min 0
   * @default null
   */
  speed?: number;
}

export interface OpenAIVoice {
  /**
   * This is the voice provider that will be used.
   *
   * Pro Voices: `11labs`, `playht`, `openai`
   *
   * Basic Voices: `rime-ai`, `deepgram`
   */
  provider: "openai";
  /** This is the provider-specific ID that will be used. */
  voiceId: "alloy" | "echo" | "fable" | "onyx" | "nova" | "shimmer" | string;
  /**
   * This is the speed multiplier that will be used.
   * @min 0.25
   * @max 4
   * @default null
   */
  speed?: number;
}

export interface CreateAssistantDTO {
  /**
   * This is the name of the assistant. This is just for your own reference.
   * @maxLength 100
   * @default null
   */
  name?: string;
  /**
   * These are the options for the assistant's transcriber.
   * @default null
   */
  transcriber?: DeepgramTranscriber;
  /** These are the options for the assistant's LLM. */
  model?:
    | OpenAIModel
    | TogetherAIModel
    | AnyscaleModel
    | OpenRouterModel
    | PerplexityAIModel
    | DeepInfraModel
    | CustomLLMModel;
  /**
   * These are the options for the assistant's voice.
   * @default {"provider":"playht","voiceId":"jennifer"}
   */
  voice?: ElevenLabsVoice | PlayHTVoice | RimeAIVoice | DeepgramVoice | OpenAIVoice;
  /**
   * This sets the spoken language of the user. The assistant will do its best to respond in the same language.
   * When using a language other than `en-*`, only `11labs` voices will pronounce the words correctly. There will also be ~1sec of additional latency.
   * @default null
   */
  language?:
    | "en"
    | "en-US"
    | "en-AU"
    | "en-GB"
    | "en-NZ"
    | "en-IN"
    | "fr"
    | "fr-CA"
    | "de"
    | "hi"
    | "hi-Latn"
    | "pt"
    | "pt-BR"
    | "es"
    | "es-419";
  /** This is the number to forward to if assistant runs into issues. */
  forwardingPhoneNumber?: string;
  /**
   * This is the first message that the assistant will say. This can also be a URL to a containerized audio file (mp3, wav, etc.).
   *
   * If unspecified, it will wait for the user to speak.
   * @maxLength 1000
   * @default "Hey there!"
   */
  firstMessage?: string;
  /**
   * This is the message that the assistant will say if the call is forwarded to voicemail.
   *
   * If unspecified, it will hang up.
   * @maxLength 1000
   * @default null
   */
  voicemailMessage?: string;
  /**
   * This is the message that the assistant will say if it ends the call.
   *
   * If unspecified, it will hang up without saying anything.
   * @maxLength 400
   * @default null
   */
  endCallMessage?: string;
  /**
   * This sets whether the user can interrupt the assistant while it's speaking. Defaults to true.
   * @default null
   */
  interruptionsEnabled?: boolean;
  /**
   * This sets whether the assistant's calls are recorded. Defaults to true.
   * @default null
   */
  recordingEnabled?: boolean;
  /**
   * This sets whether the assistant will be able to hang up the call. Defaults to false.
   * @default null
   */
  endCallFunctionEnabled?: boolean;
  /**
   * This sets whether the assistant will use fillers like Well..., Okay cool..., etc. This will modify your prompt slightly, which could result in differing completions. Defaults to false.
   * @default null
   */
  fillersEnabled?: boolean;
  /**
   * This sets whether the assistant will send live transcriptions to the Server URL and/or Vapi clients.
   * @default null
   */
  liveTranscriptsEnabled?: boolean;
  /**
   * How many seconds of silence to wait before ending the call. Defaults to 30.
   * @min 10
   * @max 600
   * @default null
   */
  silenceTimeoutSeconds?: number;
}

export interface Assistant {
  /**
   * This is the name of the assistant. This is just for your own reference.
   * @maxLength 100
   * @default null
   */
  name?: string;
  /**
   * These are the options for the assistant's transcriber.
   * @default null
   */
  transcriber?: DeepgramTranscriber;
  /** These are the options for the assistant's LLM. */
  model?:
    | OpenAIModel
    | TogetherAIModel
    | AnyscaleModel
    | OpenRouterModel
    | PerplexityAIModel
    | DeepInfraModel
    | CustomLLMModel;
  /**
   * These are the options for the assistant's voice.
   * @default {"provider":"playht","voiceId":"jennifer"}
   */
  voice?: ElevenLabsVoice | PlayHTVoice | RimeAIVoice | DeepgramVoice | OpenAIVoice;
  /**
   * This sets the spoken language of the user. The assistant will do its best to respond in the same language.
   * When using a language other than `en-*`, only `11labs` voices will pronounce the words correctly. There will also be ~1sec of additional latency.
   * @default null
   */
  language?:
    | "en"
    | "en-US"
    | "en-AU"
    | "en-GB"
    | "en-NZ"
    | "en-IN"
    | "fr"
    | "fr-CA"
    | "de"
    | "hi"
    | "hi-Latn"
    | "pt"
    | "pt-BR"
    | "es"
    | "es-419";
  /** This is the number to forward to if assistant runs into issues. */
  forwardingPhoneNumber?: string;
  /**
   * This is the first message that the assistant will say. This can also be a URL to a containerized audio file (mp3, wav, etc.).
   *
   * If unspecified, it will wait for the user to speak.
   * @maxLength 1000
   * @default "Hey there!"
   */
  firstMessage?: string;
  /**
   * This is the message that the assistant will say if the call is forwarded to voicemail.
   *
   * If unspecified, it will hang up.
   * @maxLength 1000
   * @default null
   */
  voicemailMessage?: string;
  /**
   * This is the message that the assistant will say if it ends the call.
   *
   * If unspecified, it will hang up without saying anything.
   * @maxLength 400
   * @default null
   */
  endCallMessage?: string;
  /**
   * This sets whether the user can interrupt the assistant while it's speaking. Defaults to true.
   * @default null
   */
  interruptionsEnabled?: boolean;
  /**
   * This sets whether the assistant's calls are recorded. Defaults to true.
   * @default null
   */
  recordingEnabled?: boolean;
  /**
   * This sets whether the assistant will be able to hang up the call. Defaults to false.
   * @default null
   */
  endCallFunctionEnabled?: boolean;
  /**
   * This sets whether the assistant will use fillers like Well..., Okay cool..., etc. This will modify your prompt slightly, which could result in differing completions. Defaults to false.
   * @default null
   */
  fillersEnabled?: boolean;
  /**
   * This sets whether the assistant will send live transcriptions to the Server URL and/or Vapi clients.
   * @default null
   */
  liveTranscriptsEnabled?: boolean;
  /**
   * How many seconds of silence to wait before ending the call. Defaults to 30.
   * @min 10
   * @max 600
   * @default null
   */
  silenceTimeoutSeconds?: number;
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

export interface UpdateAssistantDTO {
  /**
   * This is the name of the assistant. This is just for your own reference.
   * @maxLength 100
   * @default null
   */
  name?: string;
  /**
   * These are the options for the assistant's transcriber.
   * @default null
   */
  transcriber?: DeepgramTranscriber;
  /** These are the options for the assistant's LLM. */
  model?:
    | OpenAIModel
    | TogetherAIModel
    | AnyscaleModel
    | OpenRouterModel
    | PerplexityAIModel
    | DeepInfraModel
    | CustomLLMModel;
  /**
   * These are the options for the assistant's voice.
   * @default {"provider":"playht","voiceId":"jennifer"}
   */
  voice?: ElevenLabsVoice | PlayHTVoice | RimeAIVoice | DeepgramVoice | OpenAIVoice;
  /**
   * This sets the spoken language of the user. The assistant will do its best to respond in the same language.
   * When using a language other than `en-*`, only `11labs` voices will pronounce the words correctly. There will also be ~1sec of additional latency.
   * @default null
   */
  language?:
    | "en"
    | "en-US"
    | "en-AU"
    | "en-GB"
    | "en-NZ"
    | "en-IN"
    | "fr"
    | "fr-CA"
    | "de"
    | "hi"
    | "hi-Latn"
    | "pt"
    | "pt-BR"
    | "es"
    | "es-419";
  /** This is the number to forward to if assistant runs into issues. */
  forwardingPhoneNumber?: string;
  /**
   * This is the first message that the assistant will say. This can also be a URL to a containerized audio file (mp3, wav, etc.).
   *
   * If unspecified, it will wait for the user to speak.
   * @maxLength 1000
   * @default "Hey there!"
   */
  firstMessage?: string;
  /**
   * This is the message that the assistant will say if the call is forwarded to voicemail.
   *
   * If unspecified, it will hang up.
   * @maxLength 1000
   * @default null
   */
  voicemailMessage?: string;
  /**
   * This is the message that the assistant will say if it ends the call.
   *
   * If unspecified, it will hang up without saying anything.
   * @maxLength 400
   * @default null
   */
  endCallMessage?: string;
  /**
   * This sets whether the user can interrupt the assistant while it's speaking. Defaults to true.
   * @default null
   */
  interruptionsEnabled?: boolean;
  /**
   * This sets whether the assistant's calls are recorded. Defaults to true.
   * @default null
   */
  recordingEnabled?: boolean;
  /**
   * This sets whether the assistant will be able to hang up the call. Defaults to false.
   * @default null
   */
  endCallFunctionEnabled?: boolean;
  /**
   * This sets whether the assistant will use fillers like Well..., Okay cool..., etc. This will modify your prompt slightly, which could result in differing completions. Defaults to false.
   * @default null
   */
  fillersEnabled?: boolean;
  /**
   * This sets whether the assistant will send live transcriptions to the Server URL and/or Vapi clients.
   * @default null
   */
  liveTranscriptsEnabled?: boolean;
  /**
   * How many seconds of silence to wait before ending the call. Defaults to 30.
   * @min 10
   * @max 600
   * @default null
   */
  silenceTimeoutSeconds?: number;
}

export interface CreateCustomerDTO {
  /** This is the number of the customer. */
  number?: string;
  /**
   * This is the name of the customer. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
}

export interface ImportTwilioPhoneNumberDTO {
  /** These are the digits of the phone number you own on your Twilio. */
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
   * If this is not set, then the phone number will not handle incoming calls.
   */
  assistantId?: string;
}

export interface Call {
  /** This is the type of call. */
  type?: "inboundPhoneCall" | "outboundPhoneCall" | "webCall";
  /** This is the status of the call. */
  status?: "queued" | "ringing" | "in-progress" | "forwarding" | "ended";
  /** This is the explanation for how the call ended. */
  endedReason?:
    | "assistant-ended-call"
    | "assistant-error"
    | "assistant-forwarded-call"
    | "assistant-join-timed-out"
    | "assistant-not-found"
    | "customer-busy"
    | "customer-ended-call"
    | "customer-did-not-answer"
    | "db-error"
    | "exceeded-max-duration"
    | "manually-canceled"
    | "no-server-available"
    | "pipeline-error-custom-llm-response-was-invalid"
    | "pipeline-error-custom-llm-request-failed"
    | "pipeline-error-extra-function-failed"
    | "pipeline-error-first-message-failed"
    | "pipeline-error-function-filler-failed"
    | "pipeline-error-function-failed"
    | "pipeline-error-llm-failed"
    | "pipeline-error-openai-voice-failed"
    | "pipeline-error-deepgram-transcriber-failed"
    | "pipeline-error-deepgram-voice-failed"
    | "pipeline-error-eleven-labs-voice-failed"
    | "pipeline-error-eleven-labs-voice-not-found"
    | "pipeline-error-playht-voice-failed"
    | "pipeline-error-rime-ai-voice-failed"
    | "server-shutdown"
    | "silence-timed-out"
    | "twilio-failed-to-connect-call"
    | "twilio-closed-websocket"
    | "unknown-error"
    | "voicemail";
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
  /** This is the transcript of the call. */
  transcript?: string;
  /** This is the URL of the recording of the call. */
  recordingUrl?: string;
  /** This is the summary of the call. */
  summary?: string;
  /** These are the messages that were spoken during the call. */
  messages?: object[];
  /**
   * This is the callSid of the phone call.
   *
   * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` type.
   */
  twilioCallSid?: string;
  /**
   * This is the URL of the call that the assistant will join.
   *
   * Only relevant for `webCall` type.
   */
  webCallUrl?: string;
  /** This is the assistant that will be used for the call. To use a transient assistant, use `assistant` instead. */
  assistantId?: string;
  /** This is the assistant that will be used for the call. To use an existing assistant, use `assistantId` instead. */
  assistant?: CreateAssistantDTO;
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
}

export interface CreateOutboundCallDTO {
  /** This is the assistant that will be used for the call. To use a transient assistant, use `assistant` instead. */
  assistantId?: string;
  /** This is the assistant that will be used for the call. To use an existing assistant, use `assistantId` instead. */
  assistant?: CreateAssistantDTO;
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
}

export interface CreateWebCallDTO {
  /** This is the assistant that will be used for the call. To use a transient assistant, use `assistant` instead. */
  assistantId?: string;
  /** This is the assistant that will be used for the call. To use an existing assistant, use `assistantId` instead. */
  assistant?: CreateAssistantDTO;
}

export interface TwilioCredential {
  provider: "twilio";
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
  accountSid: string;
}

export interface DeepgramCredential {
  provider: "deepgram";
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
}

export interface ElevenLabsCredential {
  provider: "11labs";
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
}

export interface PlayHTCredential {
  provider: "playht";
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
  userId: string;
}

export interface RimeAICredential {
  provider: "rime-ai";
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
}

export interface OpenAICredential {
  provider: "openai";
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
}

export interface TogetherAICredential {
  provider: "together-ai";
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
}

export interface AnyscaleCredential {
  provider: "anyscale";
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
}

export interface OpenRouterCredential {
  provider: "openrouter";
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
}

export interface PerplexityAICredential {
  provider: "perplexity-ai";
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
}

export interface DeepInfraCredential {
  provider: "deepinfra";
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
}

export interface CustomLLMCredential {
  provider: "custom-llm";
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
}

export interface CreateTwilioCredentialDTO {
  provider: "twilio";
  /** This is not returned in the API. */
  authToken: string;
  accountSid: string;
}

export interface CreateDeepgramCredentialDTO {
  provider: "deepgram";
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateOpenAICredentialDTO {
  provider: "openai";
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateTogetherAICredentialDTO {
  provider: "together-ai";
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateAnyscaleCredentialDTO {
  provider: "anyscale";
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateOpenRouterCredentialDTO {
  provider: "openrouter";
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreatePerplexityAICredentialDTO {
  provider: "perplexity-ai";
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateDeepInfraCredentialDTO {
  provider: "deepinfra";
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateCustomLLMCredentialDTO {
  provider: "custom-llm";
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateElevenLabsCredentialDTO {
  provider: "11labs";
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreatePlayHTCredentialDTO {
  provider: "playht";
  /** This is not returned in the API. */
  apiKey: string;
  userId: string;
}

export interface CreateRimeAICredentialDTO {
  provider: "rime-ai";
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateTwilioCredentialDTO {
  provider: "twilio";
  /** This is not returned in the API. */
  authToken: string;
  accountSid: string;
}

export interface UpdateDeepgramCredentialDTO {
  provider: "deepgram";
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateOpenAICredentialDTO {
  provider: "openai";
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateTogetherAICredentialDTO {
  provider: "together-ai";
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateAnyscaleCredentialDTO {
  provider: "anyscale";
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateOpenRouterCredentialDTO {
  provider: "openrouter";
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdatePerplexityAICredentialDTO {
  provider: "perplexity-ai";
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateDeepInfraCredentialDTO {
  provider: "deepinfra";
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateCustomLLMCredentialDTO {
  provider: "custom-llm";
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateElevenLabsCredentialDTO {
  provider: "11labs";
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdatePlayHTCredentialDTO {
  provider: "playht";
  /** This is not returned in the API. */
  apiKey: string;
  userId: string;
}

export interface UpdateRimeAICredentialDTO {
  provider: "rime-ai";
  /** This is not returned in the API. */
  apiKey: string;
}

export interface BuyPhoneNumberDTO {
  /**
   * This is the area code of the phone number to purchase.
   * @minLength 3
   * @maxLength 3
   */
  areaCode: string;
  /**
   * This is the name of the phone number. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the assistant that will be used for incoming calls to this phone number.
   *
   * If this is not set, then the phone number will not handle incoming calls.
   */
  assistantId?: string;
}

export interface PhoneNumber {
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
  /** This is the subscription for the phone number. */
  stripeSubscriptionId?: string;
  /** This is the subscription's status. */
  stripeSubscriptionStatus?: string;
  /**
   * This is the subscription's current period start.
   * @format date-time
   */
  stripeSubscriptionCurrentPeriodStart?: string;
  /** These are the digits of the phone number. */
  number: string;
  /**
   * This is the Twilio Account SID for the phone number.
   *
   * This is for numbers not bought on Vapi.
   */
  twilioAccountSid?: string;
  /**
   * This is the Twilio Auth Token for the phone number.
   *
   * This is for numbers not bought on Vapi.
   */
  twilioAuthToken?: string;
  /**
   * This is the name of the phone number. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the assistant that will be used for incoming calls to this phone number.
   *
   * If this is not set, then the phone number will not handle incoming calls.
   */
  assistantId?: string;
}

export interface UpdatePhoneNumberDTO {
  /**
   * This is the name of the phone number. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the assistant that will be used for incoming calls to this phone number.
   *
   * If this is not set, then the phone number will not handle incoming calls.
   */
  assistantId?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
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

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://api.vapi.ai";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
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
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
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
 * API for building voice assistants
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
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
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
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
    assistantControllerFindAll: (params: RequestParams = {}) =>
      this.request<Assistant[], any>({
        path: `/assistant`,
        method: "GET",
        secure: true,
        format: "json",
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
        method: "GET",
        secure: true,
        format: "json",
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
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
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
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  call = {
    /**
     * No description
     *
     * @tags Calls
     * @name CallControllerFindAll
     * @summary List Calls
     * @request GET:/call
     * @secure
     */
    callControllerFindAll: (params: RequestParams = {}) =>
      this.request<Call[], any>({
        path: `/call`,
        method: "GET",
        secure: true,
        format: "json",
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
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calls
     * @name CallControllerCreatePhoneCall
     * @summary Create Phone Call
     * @request POST:/call/phone
     * @secure
     */
    callControllerCreatePhoneCall: (data: CreateOutboundCallDTO, params: RequestParams = {}) =>
      this.request<Call, any>({
        path: `/call/phone`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
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
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
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
        | ({
            provider: "twilio";
          } & CreateTwilioCredentialDTO)
        | ({
            provider: "deepgram";
          } & CreateDeepgramCredentialDTO)
        | ({
            provider: "openai";
          } & CreateOpenAICredentialDTO)
        | ({
            provider: "together-ai";
          } & CreateTogetherAICredentialDTO)
        | ({
            provider: "anyscale";
          } & CreateAnyscaleCredentialDTO)
        | ({
            provider: "openrouter";
          } & CreateOpenRouterCredentialDTO)
        | ({
            provider: "perplexity-ai";
          } & CreatePerplexityAICredentialDTO)
        | ({
            provider: "deepinfra";
          } & CreateDeepInfraCredentialDTO)
        | ({
            provider: "custom-llm";
          } & CreateCustomLLMCredentialDTO)
        | ({
            provider: "11labs";
          } & CreateElevenLabsCredentialDTO)
        | ({
            provider: "playht";
          } & CreatePlayHTCredentialDTO)
        | ({
            provider: "rime-ai";
          } & CreateRimeAICredentialDTO),
      params: RequestParams = {},
    ) =>
      this.request<
        | ({
            provider: "twilio";
          } & TwilioCredential)
        | ({
            provider: "deepgram";
          } & DeepgramCredential)
        | ({
            provider: "openai";
          } & OpenAICredential)
        | ({
            provider: "together-ai";
          } & TogetherAICredential)
        | ({
            provider: "anyscale";
          } & AnyscaleCredential)
        | ({
            provider: "openrouter";
          } & OpenRouterCredential)
        | ({
            provider: "perplexity-ai";
          } & PerplexityAICredential)
        | ({
            provider: "deepinfra";
          } & DeepInfraCredential)
        | ({
            provider: "custom-llm";
          } & CustomLLMCredential)
        | ({
            provider: "11labs";
          } & ElevenLabsCredential)
        | ({
            provider: "playht";
          } & PlayHTCredential)
        | ({
            provider: "rime-ai";
          } & RimeAICredential),
        any
      >({
        path: `/credential`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
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
    credentialControllerFindAll: (params: RequestParams = {}) =>
      this.request<
        (
          | ({
              provider: "twilio";
            } & TwilioCredential)
          | ({
              provider: "deepgram";
            } & DeepgramCredential)
          | ({
              provider: "openai";
            } & OpenAICredential)
          | ({
              provider: "together-ai";
            } & TogetherAICredential)
          | ({
              provider: "anyscale";
            } & AnyscaleCredential)
          | ({
              provider: "openrouter";
            } & OpenRouterCredential)
          | ({
              provider: "perplexity-ai";
            } & PerplexityAICredential)
          | ({
              provider: "deepinfra";
            } & DeepInfraCredential)
          | ({
              provider: "custom-llm";
            } & CustomLLMCredential)
          | ({
              provider: "11labs";
            } & ElevenLabsCredential)
          | ({
              provider: "playht";
            } & PlayHTCredential)
          | ({
              provider: "rime-ai";
            } & RimeAICredential)
        )[],
        any
      >({
        path: `/credential`,
        method: "GET",
        secure: true,
        format: "json",
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
        | ({
            provider: "twilio";
          } & TwilioCredential)
        | ({
            provider: "deepgram";
          } & DeepgramCredential)
        | ({
            provider: "openai";
          } & OpenAICredential)
        | ({
            provider: "together-ai";
          } & TogetherAICredential)
        | ({
            provider: "anyscale";
          } & AnyscaleCredential)
        | ({
            provider: "openrouter";
          } & OpenRouterCredential)
        | ({
            provider: "perplexity-ai";
          } & PerplexityAICredential)
        | ({
            provider: "deepinfra";
          } & DeepInfraCredential)
        | ({
            provider: "custom-llm";
          } & CustomLLMCredential)
        | ({
            provider: "11labs";
          } & ElevenLabsCredential)
        | ({
            provider: "playht";
          } & PlayHTCredential)
        | ({
            provider: "rime-ai";
          } & RimeAICredential),
        any
      >({
        path: `/credential/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Credentials
     * @name CredentialControllerUpdate
     * @summary Update Credential
     * @request PUT:/credential/{id}
     * @secure
     */
    credentialControllerUpdate: (
      id: string,
      data:
        | ({
            provider: "twilio";
          } & UpdateTwilioCredentialDTO)
        | ({
            provider: "deepgram";
          } & UpdateDeepgramCredentialDTO)
        | ({
            provider: "openai";
          } & UpdateOpenAICredentialDTO)
        | ({
            provider: "together-ai";
          } & UpdateTogetherAICredentialDTO)
        | ({
            provider: "anyscale";
          } & UpdateAnyscaleCredentialDTO)
        | ({
            provider: "openrouter";
          } & UpdateOpenRouterCredentialDTO)
        | ({
            provider: "perplexity-ai";
          } & UpdatePerplexityAICredentialDTO)
        | ({
            provider: "deepinfra";
          } & UpdateDeepInfraCredentialDTO)
        | ({
            provider: "custom-llm";
          } & UpdateCustomLLMCredentialDTO)
        | ({
            provider: "11labs";
          } & UpdateElevenLabsCredentialDTO)
        | ({
            provider: "playht";
          } & UpdatePlayHTCredentialDTO)
        | ({
            provider: "rime-ai";
          } & UpdateRimeAICredentialDTO),
      params: RequestParams = {},
    ) =>
      this.request<
        | ({
            provider: "twilio";
          } & TwilioCredential)
        | ({
            provider: "deepgram";
          } & DeepgramCredential)
        | ({
            provider: "openai";
          } & OpenAICredential)
        | ({
            provider: "together-ai";
          } & TogetherAICredential)
        | ({
            provider: "anyscale";
          } & AnyscaleCredential)
        | ({
            provider: "openrouter";
          } & OpenRouterCredential)
        | ({
            provider: "perplexity-ai";
          } & PerplexityAICredential)
        | ({
            provider: "deepinfra";
          } & DeepInfraCredential)
        | ({
            provider: "custom-llm";
          } & CustomLLMCredential)
        | ({
            provider: "11labs";
          } & ElevenLabsCredential)
        | ({
            provider: "playht";
          } & PlayHTCredential)
        | ({
            provider: "rime-ai";
          } & RimeAICredential),
        any
      >({
        path: `/credential/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
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
        | ({
            provider: "twilio";
          } & TwilioCredential)
        | ({
            provider: "deepgram";
          } & DeepgramCredential)
        | ({
            provider: "openai";
          } & OpenAICredential)
        | ({
            provider: "together-ai";
          } & TogetherAICredential)
        | ({
            provider: "anyscale";
          } & AnyscaleCredential)
        | ({
            provider: "openrouter";
          } & OpenRouterCredential)
        | ({
            provider: "perplexity-ai";
          } & PerplexityAICredential)
        | ({
            provider: "deepinfra";
          } & DeepInfraCredential)
        | ({
            provider: "custom-llm";
          } & CustomLLMCredential)
        | ({
            provider: "11labs";
          } & ElevenLabsCredential)
        | ({
            provider: "playht";
          } & PlayHTCredential)
        | ({
            provider: "rime-ai";
          } & RimeAICredential),
        any
      >({
        path: `/credential/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  phoneNumber = {
    /**
     * No description
     *
     * @tags Phone Numbers
     * @name PhoneNumberControllerBuy
     * @summary Buy Phone Number
     * @request POST:/phone-number/buy
     * @secure
     */
    phoneNumberControllerBuy: (data: BuyPhoneNumberDTO, params: RequestParams = {}) =>
      this.request<PhoneNumber, any>({
        path: `/phone-number/buy`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Phone Numbers
     * @name PhoneNumberControllerImport
     * @summary Import Twilio Number
     * @request POST:/phone-number/import
     * @secure
     */
    phoneNumberControllerImport: (data: ImportTwilioPhoneNumberDTO, params: RequestParams = {}) =>
      this.request<PhoneNumber, any>({
        path: `/phone-number/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
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
    phoneNumberControllerFindAll: (params: RequestParams = {}) =>
      this.request<PhoneNumber[], any>({
        path: `/phone-number`,
        method: "GET",
        secure: true,
        format: "json",
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
      this.request<PhoneNumber, any>({
        path: `/phone-number/${id}`,
        method: "GET",
        secure: true,
        format: "json",
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
    phoneNumberControllerUpdate: (id: string, data: UpdatePhoneNumberDTO, params: RequestParams = {}) =>
      this.request<PhoneNumber, any>({
        path: `/phone-number/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
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
      this.request<PhoneNumber, any>({
        path: `/phone-number/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
