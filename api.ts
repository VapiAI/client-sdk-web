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

export interface BetaVoice {
  /**
   * This is the voice provider that will be used.
   *
   * Pro Voices: `11labs`, `playht`
   *
   * Basic Voices: `rimeai`, `beta`
   */
  provider: "beta";
  /** This is the provider-specific ID that will be used. */
  voiceId: string;
}

export interface CustomModel {
  /**
   * This is the provider that will be used for the model. Currently, only OpenAI and Custom LLM URLs are supported.
   *
   * If you have your own LLM, you can use the URL of your LLM endpoint here.
   */
  provider: "custom";
  /** These is the URL we'll POST during the conversation. */
  url: string;
  /** This sets the objective and understanding for the assistant. */
  systemPrompt?: string;
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
   * Basic Voices: `rimeai`, `beta`
   */
  provider: "11labs";
  /** This is the provider-specific ID that will be used. */
  voiceId: string;
}

export interface OpenAIFunctionParameterProperty {
  type: "string" | "number" | "boolean";
  enum?: string[];
  description?: string;
}

export interface OpenAIFunctionParameters {
  type: "object";
  properties: Record<string, OpenAIFunctionParameterProperty>;
  required?: string[];
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
  parameters: OpenAIFunctionParameters;
}

export interface OpenAIModel {
  /**
   * This is the provider that will be used for the model. Currently, only OpenAI and Custom LLM URLs are supported.
   *
   * If you have your own LLM, you can use the URL of your LLM endpoint here.
   */
  provider: "openai";
  /** This is the OpenAI model that will be used. */
  model: "gpt-4" | "gpt-3.5-turbo";
  /** This sets the objective and understanding for the assistant. */
  systemPrompt?: string;
  /**
   * This is the temperature that will be used for OpenAI calls.
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
   * Pro Voices: `11labs`, `playht`
   *
   * Basic Voices: `rimeai`, `beta`
   */
  provider: "playht";
  /** This is the provider-specific ID that will be used. */
  voiceId: string;
}

export interface RimeAIVoice {
  /**
   * This is the voice provider that will be used.
   *
   * Pro Voices: `11labs`, `playht`
   *
   * Basic Voices: `rimeai`, `beta`
   */
  provider: "rimeai";
  /** This is the provider-specific ID that will be used. */
  voiceId: string;
}

export interface CreateAssistantDTO {
  /**
   * This is the name of the assistant. This is just for your own reference.
   * @maxLength 100
   */
  name?: string;
  /** These are the options for the assistant's transcriber. */
  transcriber?: DeepgramTranscriber;
  /** These are the options for the assistant's LLM. */
  model?: "0" | "1" | "2" | OpenAIModel | CustomModel;
  /**
   * These are the options for the assistant's voice.
   * @default "jennifer-playht"
   */
  voice?:
    | "jennifer-playht"
    | "melissa-playht"
    | "will-playht"
    | "chris-playht"
    | "matt-playht"
    | "jack-playht"
    | "ruby-playht"
    | "davis-playht"
    | "donna-playht"
    | "michael-playht"
    | "burt-11labs"
    | "andrea-11labs"
    | "phillip-11labs"
    | "steve-11labs"
    | "joseph-11labs"
    | "myra-11labs"
    | "paula-11labs"
    | "ryan-11labs"
    | "drew-11labs"
    | "paul-11labs"
    | "mrb-11labs"
    | "matilda-11labs"
    | "kai-rimeai"
    | "zion-rimeai"
    | "xavier-rimeai"
    | "marty-rimeai"
    | "hudson-rimeai"
    | "savannah-rimeai"
    | "colette-rimeai"
    | "daphne-rimeai"
    | "aurora-rimeai"
    | "nova-rimeai"
    | "apollo-beta"
    | "orion-beta"
    | "aurora-beta"
    | "asteria-beta"
    | "stella-beta"
    | "artemis-beta"
    | "andromeda-beta"
    | "atlas-beta"
    | ElevenLabsVoice
    | PlayHTVoice
    | RimeAIVoice
    | BetaVoice;
  /**
   * This sets the spoken language of the user. The assistant will do its best to respond in the same language.
   * When using a language other than `en-*`, only `11labs` voices will pronounce the words correctly. There will also be ~1sec of additional latency.
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
   * This is the first message that the assistant will say.
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
   */
  voicemailMessage?: string;
  /**
   * This is the message that the assistant will say if it ends the call.
   *
   * If unspecified, it will hang up without saying anything.
   * @maxLength 400
   */
  endCallMessage?: string;
  /** This sets whether the user can interrupt the assistant while it's speaking. Defaults to true. */
  interruptionsEnabled?: boolean;
  /** This sets whether the assistant's calls are recorded. Defaults to true. */
  recordingEnabled?: boolean;
  /** This sets whether the assistant will be able to hang up the call. Defaults to false. */
  endCallFunctionEnabled?: boolean;
  /** This sets whether the assistant will use fillers like Well..., Okay cool..., etc. Defaults to true when using gpt-4. Else, defaults to false. */
  fillersEnabled?: boolean;
}

export interface Assistant {
  /**
   * This is the name of the assistant. This is just for your own reference.
   * @maxLength 100
   */
  name?: string;
  /** These are the options for the assistant's transcriber. */
  transcriber?: DeepgramTranscriber;
  /** These are the options for the assistant's LLM. */
  model?: "0" | "1" | "2" | OpenAIModel | CustomModel;
  /**
   * These are the options for the assistant's voice.
   * @default "jennifer-playht"
   */
  voice?:
    | "jennifer-playht"
    | "melissa-playht"
    | "will-playht"
    | "chris-playht"
    | "matt-playht"
    | "jack-playht"
    | "ruby-playht"
    | "davis-playht"
    | "donna-playht"
    | "michael-playht"
    | "burt-11labs"
    | "andrea-11labs"
    | "phillip-11labs"
    | "steve-11labs"
    | "joseph-11labs"
    | "myra-11labs"
    | "paula-11labs"
    | "ryan-11labs"
    | "drew-11labs"
    | "paul-11labs"
    | "mrb-11labs"
    | "matilda-11labs"
    | "kai-rimeai"
    | "zion-rimeai"
    | "xavier-rimeai"
    | "marty-rimeai"
    | "hudson-rimeai"
    | "savannah-rimeai"
    | "colette-rimeai"
    | "daphne-rimeai"
    | "aurora-rimeai"
    | "nova-rimeai"
    | "apollo-beta"
    | "orion-beta"
    | "aurora-beta"
    | "asteria-beta"
    | "stella-beta"
    | "artemis-beta"
    | "andromeda-beta"
    | "atlas-beta"
    | ElevenLabsVoice
    | PlayHTVoice
    | RimeAIVoice
    | BetaVoice;
  /**
   * This sets the spoken language of the user. The assistant will do its best to respond in the same language.
   * When using a language other than `en-*`, only `11labs` voices will pronounce the words correctly. There will also be ~1sec of additional latency.
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
   * This is the first message that the assistant will say.
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
   */
  voicemailMessage?: string;
  /**
   * This is the message that the assistant will say if it ends the call.
   *
   * If unspecified, it will hang up without saying anything.
   * @maxLength 400
   */
  endCallMessage?: string;
  /** This sets whether the user can interrupt the assistant while it's speaking. Defaults to true. */
  interruptionsEnabled?: boolean;
  /** This sets whether the assistant's calls are recorded. Defaults to true. */
  recordingEnabled?: boolean;
  /** This sets whether the assistant will be able to hang up the call. Defaults to false. */
  endCallFunctionEnabled?: boolean;
  /** This sets whether the assistant will use fillers like Well..., Okay cool..., etc. Defaults to true when using gpt-4. Else, defaults to false. */
  fillersEnabled?: boolean;
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
   */
  name?: string;
  /** These are the options for the assistant's transcriber. */
  transcriber?: DeepgramTranscriber;
  /** These are the options for the assistant's LLM. */
  model?: "0" | "1" | "2" | OpenAIModel | CustomModel;
  /**
   * These are the options for the assistant's voice.
   * @default "jennifer-playht"
   */
  voice?:
    | "jennifer-playht"
    | "melissa-playht"
    | "will-playht"
    | "chris-playht"
    | "matt-playht"
    | "jack-playht"
    | "ruby-playht"
    | "davis-playht"
    | "donna-playht"
    | "michael-playht"
    | "burt-11labs"
    | "andrea-11labs"
    | "phillip-11labs"
    | "steve-11labs"
    | "joseph-11labs"
    | "myra-11labs"
    | "paula-11labs"
    | "ryan-11labs"
    | "drew-11labs"
    | "paul-11labs"
    | "mrb-11labs"
    | "matilda-11labs"
    | "kai-rimeai"
    | "zion-rimeai"
    | "xavier-rimeai"
    | "marty-rimeai"
    | "hudson-rimeai"
    | "savannah-rimeai"
    | "colette-rimeai"
    | "daphne-rimeai"
    | "aurora-rimeai"
    | "nova-rimeai"
    | "apollo-beta"
    | "orion-beta"
    | "aurora-beta"
    | "asteria-beta"
    | "stella-beta"
    | "artemis-beta"
    | "andromeda-beta"
    | "atlas-beta"
    | ElevenLabsVoice
    | PlayHTVoice
    | RimeAIVoice
    | BetaVoice;
  /**
   * This sets the spoken language of the user. The assistant will do its best to respond in the same language.
   * When using a language other than `en-*`, only `11labs` voices will pronounce the words correctly. There will also be ~1sec of additional latency.
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
   * This is the first message that the assistant will say.
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
   */
  voicemailMessage?: string;
  /**
   * This is the message that the assistant will say if it ends the call.
   *
   * If unspecified, it will hang up without saying anything.
   * @maxLength 400
   */
  endCallMessage?: string;
  /** This sets whether the user can interrupt the assistant while it's speaking. Defaults to true. */
  interruptionsEnabled?: boolean;
  /** This sets whether the assistant's calls are recorded. Defaults to true. */
  recordingEnabled?: boolean;
  /** This sets whether the assistant will be able to hang up the call. Defaults to false. */
  endCallFunctionEnabled?: boolean;
  /** This sets whether the assistant will use fillers like Well..., Okay cool..., etc. Defaults to true when using gpt-4. Else, defaults to false. */
  fillersEnabled?: boolean;
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
    | "manually-canceled"
    | "customer-busy"
    | "customer-ended-call"
    | "customer-did-not-answer"
    | "db-error"
    | "exceeded-max-duration"
    | "no-server-available"
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

export interface CreateTwilioCredentialDTO {
  provider: "twilio";
  /** This is hidden in the API responses. */
  authToken: string;
  accountSid: string;
}

export interface CreateDeepgramCredentialDTO {
  provider: "deepgram";
  /** This is hidden in the API responses. */
  apiKey: string;
}

export interface CreateAzureCredentialDTO {
  provider: "azure-openai";
  /** This is hidden in the API responses. */
  openAIKey: string;
  openAIEndpoint: string;
}

export interface CreateElevenLabsCredentialDTO {
  provider: "11labs";
  /** This is hidden in the API responses. */
  apiKey: string;
}

export interface CreatePlayHTCredentialDTO {
  provider: "playht";
  /** This is hidden in the API responses. */
  apiKey: string;
  userId: string;
}

export interface CreateRimeAICredentialDTO {
  provider: "rimeai";
  /** This is hidden in the API responses. */
  apiKey: string;
}

export interface UpdateTwilioCredentialDTO {
  provider: "twilio";
  /** This is hidden in the API responses. */
  authToken: string;
  accountSid: string;
}

export interface UpdateDeepgramCredentialDTO {
  provider: "deepgram";
  /** This is hidden in the API responses. */
  apiKey: string;
}

export interface UpdateAzureCredentialDTO {
  provider: "azure-openai";
  /** This is hidden in the API responses. */
  openAIKey: string;
  openAIEndpoint: string;
}

export interface UpdateElevenLabsCredentialDTO {
  provider: "11labs";
  /** This is hidden in the API responses. */
  apiKey: string;
}

export interface UpdatePlayHTCredentialDTO {
  provider: "playht";
  /** This is hidden in the API responses. */
  apiKey: string;
  userId: string;
}

export interface UpdateRimeAICredentialDTO {
  provider: "rimeai";
  /** This is hidden in the API responses. */
  apiKey: string;
}

export interface Credential {
  /** This is hidden in the API responses. */
  authToken?: string;
  /** This is hidden in the API responses. */
  apiKey?: string;
  /** This is hidden in the API responses. */
  openAIKey?: string;
  provider: "twilio" | "deepgram" | "azure-openai" | "11labs" | "playht" | "rimeai";
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
  accountSid?: string;
  openAIEndpoint?: string;
  userId?: string;
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
            provider: "azure-openai";
          } & CreateAzureCredentialDTO)
        | ({
            provider: "11labs";
          } & CreateElevenLabsCredentialDTO)
        | ({
            provider: "playht";
          } & CreatePlayHTCredentialDTO)
        | ({
            provider: "rimeai";
          } & CreateRimeAICredentialDTO),
      params: RequestParams = {},
    ) =>
      this.request<Credential, any>({
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
      this.request<Credential[], any>({
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
      this.request<Credential, any>({
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
            provider: "azure-openai";
          } & UpdateAzureCredentialDTO)
        | ({
            provider: "11labs";
          } & UpdateElevenLabsCredentialDTO)
        | ({
            provider: "playht";
          } & UpdatePlayHTCredentialDTO)
        | ({
            provider: "rimeai";
          } & UpdateRimeAICredentialDTO),
      params: RequestParams = {},
    ) =>
      this.request<Credential, any>({
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
      this.request<Credential, any>({
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
