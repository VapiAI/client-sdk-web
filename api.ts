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

export interface DeepgramTranscriber {
  /** This is the transcription provider that will be used. */
  provider: 'deepgram';
  /** This is the Deepgram model that will be used. A list of models can be found here: https://developers.deepgram.com/docs/models-languages-overview */
  model?:
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
    | 'zh-Hans'
    | 'zh-Hant'
    | 'zh-TW';
  /**
   * This will be use smart format option provided by Deepgram. It's default disabled because it can sometimes format numbers as times sometimes but it's getting better.
   * @example false
   */
  smartFormat?: boolean;
  /** These keywords are passed to the transcription model to help it pick up use-case specific words. Anything that may not be a common word, like your company name, should be added here. */
  keywords?: string[];
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
}

export interface GladiaTranscriber {
  /** This is the transcription provider that will be used. */
  provider: 'gladia';
  /** This is the Gladia model that will be used. Default is 'fast' */
  model?: 'fast' | 'accurate';
  /** Defines how the transcription model detects the audio language. Default value is 'automatic single language'. */
  languageBehaviour?:
    | 'manual'
    | 'automatic single language'
    | 'automatic multiple languages';
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
    | 'jp'
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
    | 'mymr'
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

export interface Condition {
  /** This is the name of the parameter that you want to check. */
  param: string;
  /** This is the value you want to compare against the parameter. */
  value: string;
  /** This is the operator you want to use to compare the parameter and value. */
  operator: 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte';
}

export interface ToolMessageStart {
  /**
   * This message is triggered when the tool call starts.
   *
   * This message is never triggered for async tools.
   *
   * If this message is not provided, one of the default filler messages "Hold on a sec", "One moment", "Just a sec", "Give me a moment" or "This'll just take a sec" will be used.
   */
  type: 'request-start';
  /** This is the content that the assistant says when this message is triggered. */
  content: string;
  /** This is an optional array of conditions that the tool call arguments must meet in order for this message to be triggered. */
  conditions?: Condition[];
}

export interface ToolMessageComplete {
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
  /** This is the content that the assistant says when this message is triggered. */
  content: string;
  /** This is an optional array of conditions that the tool call arguments must meet in order for this message to be triggered. */
  conditions?: Condition[];
}

export interface ToolMessageFailed {
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
  /** This is the content that the assistant says when this message is triggered. */
  content: string;
  /** This is an optional array of conditions that the tool call arguments must meet in order for this message to be triggered. */
  conditions?: Condition[];
}

export interface ToolMessageDelayed {
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
   * @max 20000
   * @example 1000
   */
  timingMilliseconds?: number;
  /** This is the content that the assistant says when this message is triggered. */
  content: string;
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

export interface Server {
  /**
   * This is the timeout in seconds for the request to your server. Defaults to 20 seconds.
   *
   * @default 20
   * @min 1
   * @max 20
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
  messages?: (
    | ToolMessageStart
    | ToolMessageComplete
    | ToolMessageFailed
    | ToolMessageDelayed
  )[];
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
  messages?: (
    | ToolMessageStart
    | ToolMessageComplete
    | ToolMessageFailed
    | ToolMessageDelayed
  )[];
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
  messages?: (
    | ToolMessageStart
    | ToolMessageComplete
    | ToolMessageFailed
    | ToolMessageDelayed
  )[];
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
  messages?: (
    | ToolMessageStart
    | ToolMessageComplete
    | ToolMessageFailed
    | ToolMessageDelayed
  )[];
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
  messages?: (
    | ToolMessageStart
    | ToolMessageComplete
    | ToolMessageFailed
    | ToolMessageDelayed
  )[];
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
  messages?: (
    | ToolMessageStart
    | ToolMessageComplete
    | ToolMessageFailed
    | ToolMessageDelayed
  )[];
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

export interface AssistantTransferDestination {
  type: 'assistant';
  /** This is the assistant to transfer the call to. */
  assistantName: string;
  /** This is the message to say before transferring the call to the destination. */
  message?: string;
  /** This is the description of the destination, used by the AI to choose when and how to transfer the call. */
  description?: string;
}

export interface NumberTransferDestination {
  type: 'number';
  /** This is the phone number to transfer the call to. */
  number: string;
  /** This is the message to say before transferring the call to the destination. */
  message?: string;
  /** This is the description of the destination, used by the AI to choose when and how to transfer the call. */
  description?: string;
}

export interface SipTransferDestination {
  type: 'sip';
  /** This is the SIP URI to transfer the call to. */
  sipUri: string;
  /** This is the message to say before transferring the call to the destination. */
  message?: string;
  /** This is the description of the destination. This is used by the model to decide when to transfer the call to this destination. */
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
  messages?: (
    | ToolMessageStart
    | ToolMessageComplete
    | ToolMessageFailed
    | ToolMessageDelayed
  )[];
  type: 'transferCall';
  /** These are the destinations that the call can be transferred to. If no destinations are provided, server.url will be used to get the transfer destination once the tool is called. */
  destinations?: (
    | AssistantTransferDestination
    | NumberTransferDestination
    | SipTransferDestination
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

export interface OpenAIMessage {
  content: string | null;
  role: 'assistant' | 'function' | 'user' | 'system' | 'tool';
}

export interface KnowledgeBase {
  provider: 'canonical';
  /**
   * @min 1
   * @max 10
   */
  topK?: number;
  fileIds: string[];
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
  )[];
  /**
   * These are the tools that the assistant can use during the call. To use transient tools, use `tools`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  toolIds?: string[];
  provider: 'anyscale';
  /** This is the name of the model. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
  model: string;
  /**
   * This is the temperature that will be used for calls. Default is 0 to leverage caching for lower latency.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /** These are the options for the knowledge base. */
  knowledgeBase?: KnowledgeBase;
  /**
   * This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation. Default is 250.
   * @min 50
   * @max 1000
   */
  maxTokens?: number;
  /**
   * This determines whether we detect user's emotion while they speak and send it as an additional info to model.
   *
   * Default `false` because the model is usually are good at understanding the user's emotion from text.
   */
  emotionRecognitionEnabled?: boolean;
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
  )[];
  /**
   * These are the tools that the assistant can use during the call. To use transient tools, use `tools`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  toolIds?: string[];
  /** This is the Anthropic/Claude models that will be used. */
  model:
    | 'claude-3-opus-20240229'
    | 'claude-3-sonnet-20240229'
    | 'claude-3-haiku-20240307'
    | 'claude-3-5-sonnet-20240620';
  provider: 'anthropic';
  /**
   * This is the temperature that will be used for calls. Default is 0 to leverage caching for lower latency.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /** These are the options for the knowledge base. */
  knowledgeBase?: KnowledgeBase;
  /**
   * This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation. Default is 250.
   * @min 50
   * @max 1000
   */
  maxTokens?: number;
  /**
   * This determines whether we detect user's emotion while they speak and send it as an additional info to model.
   *
   * Default `false` because the model is usually are good at understanding the user's emotion from text.
   */
  emotionRecognitionEnabled?: boolean;
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
  )[];
  /**
   * These are the tools that the assistant can use during the call. To use transient tools, use `tools`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  toolIds?: string[];
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
  /** This is the name of the model. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
  model: string;
  /**
   * This is the temperature that will be used for calls. Default is 0 to leverage caching for lower latency.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /** These are the options for the knowledge base. */
  knowledgeBase?: KnowledgeBase;
  /**
   * This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation. Default is 250.
   * @min 50
   * @max 1000
   */
  maxTokens?: number;
  /**
   * This determines whether we detect user's emotion while they speak and send it as an additional info to model.
   *
   * Default `false` because the model is usually are good at understanding the user's emotion from text.
   */
  emotionRecognitionEnabled?: boolean;
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
  )[];
  /**
   * These are the tools that the assistant can use during the call. To use transient tools, use `tools`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  toolIds?: string[];
  provider: 'deepinfra';
  /** This is the name of the model. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
  model: string;
  /**
   * This is the temperature that will be used for calls. Default is 0 to leverage caching for lower latency.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /** These are the options for the knowledge base. */
  knowledgeBase?: KnowledgeBase;
  /**
   * This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation. Default is 250.
   * @min 50
   * @max 1000
   */
  maxTokens?: number;
  /**
   * This determines whether we detect user's emotion while they speak and send it as an additional info to model.
   *
   * Default `false` because the model is usually are good at understanding the user's emotion from text.
   */
  emotionRecognitionEnabled?: boolean;
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
  )[];
  /**
   * These are the tools that the assistant can use during the call. To use transient tools, use `tools`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  toolIds?: string[];
  /** This is the name of the model. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
  model: 'mixtral-8x7b-32768' | 'llama3-8b-8192' | 'llama3-70b-8192';
  provider: 'groq';
  /**
   * This is the temperature that will be used for calls. Default is 0 to leverage caching for lower latency.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /** These are the options for the knowledge base. */
  knowledgeBase?: KnowledgeBase;
  /**
   * This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation. Default is 250.
   * @min 50
   * @max 1000
   */
  maxTokens?: number;
  /**
   * This determines whether we detect user's emotion while they speak and send it as an additional info to model.
   *
   * Default `false` because the model is usually are good at understanding the user's emotion from text.
   */
  emotionRecognitionEnabled?: boolean;
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
  )[];
  /**
   * These are the tools that the assistant can use during the call. To use transient tools, use `tools`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  toolIds?: string[];
  /** This is the provider that will be used for the model. */
  provider: 'openai';
  /** This is the OpenAI model that will be used. */
  model:
    | 'gpt-4o'
    | 'gpt-4o-2024-05-13'
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
    | 'gpt-4o'
    | 'gpt-4o-2024-05-13'
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
  /** @example true */
  semanticCachingEnabled?: boolean;
  /**
   * This sets how many turns at the start of the conversation to use gpt-3.5-turbo before switching to the primary model. Default is 0.
   * @min 0
   */
  numFastTurns?: number;
  /**
   * This is the temperature that will be used for calls. Default is 0 to leverage caching for lower latency.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /** These are the options for the knowledge base. */
  knowledgeBase?: KnowledgeBase;
  /**
   * This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation. Default is 250.
   * @min 50
   * @max 1000
   */
  maxTokens?: number;
  /**
   * This determines whether we detect user's emotion while they speak and send it as an additional info to model.
   *
   * Default `false` because the model is usually are good at understanding the user's emotion from text.
   */
  emotionRecognitionEnabled?: boolean;
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
  )[];
  /**
   * These are the tools that the assistant can use during the call. To use transient tools, use `tools`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  toolIds?: string[];
  provider: 'openrouter';
  /** This is the name of the model. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
  model: string;
  /**
   * This is the temperature that will be used for calls. Default is 0 to leverage caching for lower latency.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /** These are the options for the knowledge base. */
  knowledgeBase?: KnowledgeBase;
  /**
   * This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation. Default is 250.
   * @min 50
   * @max 1000
   */
  maxTokens?: number;
  /**
   * This determines whether we detect user's emotion while they speak and send it as an additional info to model.
   *
   * Default `false` because the model is usually are good at understanding the user's emotion from text.
   */
  emotionRecognitionEnabled?: boolean;
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
  )[];
  /**
   * These are the tools that the assistant can use during the call. To use transient tools, use `tools`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  toolIds?: string[];
  provider: 'perplexity-ai';
  /** This is the name of the model. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
  model: string;
  /**
   * This is the temperature that will be used for calls. Default is 0 to leverage caching for lower latency.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /** These are the options for the knowledge base. */
  knowledgeBase?: KnowledgeBase;
  /**
   * This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation. Default is 250.
   * @min 50
   * @max 1000
   */
  maxTokens?: number;
  /**
   * This determines whether we detect user's emotion while they speak and send it as an additional info to model.
   *
   * Default `false` because the model is usually are good at understanding the user's emotion from text.
   */
  emotionRecognitionEnabled?: boolean;
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
  )[];
  /**
   * These are the tools that the assistant can use during the call. To use transient tools, use `tools`.
   *
   * Both `tools` and `toolIds` can be used together.
   */
  toolIds?: string[];
  provider: 'together-ai';
  /** This is the name of the model. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
  model: string;
  /**
   * This is the temperature that will be used for calls. Default is 0 to leverage caching for lower latency.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /** These are the options for the knowledge base. */
  knowledgeBase?: KnowledgeBase;
  /**
   * This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation. Default is 250.
   * @min 50
   * @max 1000
   */
  maxTokens?: number;
  /**
   * This determines whether we detect user's emotion while they speak and send it as an additional info to model.
   *
   * Default `false` because the model is usually are good at understanding the user's emotion from text.
   */
  emotionRecognitionEnabled?: boolean;
}

export interface AzureVoice {
  /**
   * This determines whether the model output is preprocessed into chunks before being sent to the voice provider.
   *
   * Default `true` because voice generation sounds better with chunking (and reformatting them).
   *
   * To send every token from the model output directly to the voice provider and rely on the voice provider's audio generation logic, set this to `false`.
   *
   * If disabled, vapi-provided audio control tokens like <flush /> will not work.
   * @example true
   */
  inputPreprocessingEnabled?: boolean;
  /**
   * This determines whether the chunk is reformatted before being sent to the voice provider. Many things are reformatted including phone numbers, emails and addresses to improve their enunciation.
   *
   * Default `true` because voice generation sounds better with reformatting.
   *
   * To disable chunk reformatting, set this to `false`.
   *
   * To disable chunking completely, set `inputPreprocessingEnabled` to `false`.
   * @example true
   */
  inputReformattingEnabled?: boolean;
  /**
   * This is the minimum number of characters before a chunk is created. The chunks that are sent to the voice provider for the voice generation as the model tokens are streaming in. Defaults to 30.
   *
   * Increasing this value might add latency as it waits for the model to output a full chunk before sending it to the voice provider. On the other hand, increasing might be a good idea if you want to give voice provider bigger chunks so it can pronounce them better.
   *
   * Decreasing this value might decrease latency but might also decrease quality if the voice provider struggles to pronounce the text correctly.
   * @min 1
   * @max 80
   * @example 30
   */
  inputMinCharacters?: number;
  /**
   * These are the punctuations that are considered valid boundaries before a chunk is created. The chunks that are sent to the voice provider for the voice generation as the model tokens are streaming in. Defaults are chosen differently for each provider.
   *
   * Constraining the delimiters might add latency as it waits for the model to output a full chunk before sending it to the voice provider. On the other hand, constraining might be a good idea if you want to give voice provider longer chunks so it can sound less disjointed across chunks. Eg. ['.'].
   * @example ["。","，",".","!","?",";",")","،","۔","।","॥","|","||",",",":"]
   */
  inputPunctuationBoundaries?: (
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
    | ':'
  )[];
  /**
   * This determines whether fillers are injected into the model output before inputting it into the voice provider.
   *
   * Default `false` because you can achieve better results with prompting the model.
   * @example false
   */
  fillerInjectionEnabled?: boolean;
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
}

export interface CartesiaVoice {
  /**
   * This determines whether the model output is preprocessed into chunks before being sent to the voice provider.
   *
   * Default `true` because voice generation sounds better with chunking (and reformatting them).
   *
   * To send every token from the model output directly to the voice provider and rely on the voice provider's audio generation logic, set this to `false`.
   *
   * If disabled, vapi-provided audio control tokens like <flush /> will not work.
   * @example true
   */
  inputPreprocessingEnabled?: boolean;
  /**
   * This determines whether the chunk is reformatted before being sent to the voice provider. Many things are reformatted including phone numbers, emails and addresses to improve their enunciation.
   *
   * Default `true` because voice generation sounds better with reformatting.
   *
   * To disable chunk reformatting, set this to `false`.
   *
   * To disable chunking completely, set `inputPreprocessingEnabled` to `false`.
   * @example true
   */
  inputReformattingEnabled?: boolean;
  /**
   * This is the minimum number of characters before a chunk is created. The chunks that are sent to the voice provider for the voice generation as the model tokens are streaming in. Defaults to 30.
   *
   * Increasing this value might add latency as it waits for the model to output a full chunk before sending it to the voice provider. On the other hand, increasing might be a good idea if you want to give voice provider bigger chunks so it can pronounce them better.
   *
   * Decreasing this value might decrease latency but might also decrease quality if the voice provider struggles to pronounce the text correctly.
   * @min 1
   * @max 80
   * @example 30
   */
  inputMinCharacters?: number;
  /**
   * These are the punctuations that are considered valid boundaries before a chunk is created. The chunks that are sent to the voice provider for the voice generation as the model tokens are streaming in. Defaults are chosen differently for each provider.
   *
   * Constraining the delimiters might add latency as it waits for the model to output a full chunk before sending it to the voice provider. On the other hand, constraining might be a good idea if you want to give voice provider longer chunks so it can sound less disjointed across chunks. Eg. ['.'].
   * @example ["。","，",".","!","?",";",")","،","۔","।","॥","|","||",",",":"]
   */
  inputPunctuationBoundaries?: (
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
    | ':'
  )[];
  /**
   * This determines whether fillers are injected into the model output before inputting it into the voice provider.
   *
   * Default `false` because you can achieve better results with prompting the model.
   * @example false
   */
  fillerInjectionEnabled?: boolean;
  /** This is the voice provider that will be used. */
  provider: 'cartesia';
  /**
   * This is the model that will be used. This is optional and will default to the correct model for the voiceId.
   * @example "sonic-english"
   */
  model?: 'sonic-english' | 'sonic-multilingual';
  /**
   * This is the language that will be used. This is optional and will default to the correct language for the voiceId.
   * @example "en"
   */
  language?: 'de' | 'en' | 'es' | 'fr' | 'ja' | 'pt' | 'zh';
  /** This is the provider-specific ID that will be used. */
  voiceId: string;
}

export interface DeepgramVoice {
  /**
   * This determines whether the model output is preprocessed into chunks before being sent to the voice provider.
   *
   * Default `true` because voice generation sounds better with chunking (and reformatting them).
   *
   * To send every token from the model output directly to the voice provider and rely on the voice provider's audio generation logic, set this to `false`.
   *
   * If disabled, vapi-provided audio control tokens like <flush /> will not work.
   * @example true
   */
  inputPreprocessingEnabled?: boolean;
  /**
   * This determines whether the chunk is reformatted before being sent to the voice provider. Many things are reformatted including phone numbers, emails and addresses to improve their enunciation.
   *
   * Default `true` because voice generation sounds better with reformatting.
   *
   * To disable chunk reformatting, set this to `false`.
   *
   * To disable chunking completely, set `inputPreprocessingEnabled` to `false`.
   * @example true
   */
  inputReformattingEnabled?: boolean;
  /**
   * This is the minimum number of characters before a chunk is created. The chunks that are sent to the voice provider for the voice generation as the model tokens are streaming in. Defaults to 30.
   *
   * Increasing this value might add latency as it waits for the model to output a full chunk before sending it to the voice provider. On the other hand, increasing might be a good idea if you want to give voice provider bigger chunks so it can pronounce them better.
   *
   * Decreasing this value might decrease latency but might also decrease quality if the voice provider struggles to pronounce the text correctly.
   * @min 1
   * @max 80
   * @example 30
   */
  inputMinCharacters?: number;
  /**
   * These are the punctuations that are considered valid boundaries before a chunk is created. The chunks that are sent to the voice provider for the voice generation as the model tokens are streaming in. Defaults are chosen differently for each provider.
   *
   * Constraining the delimiters might add latency as it waits for the model to output a full chunk before sending it to the voice provider. On the other hand, constraining might be a good idea if you want to give voice provider longer chunks so it can sound less disjointed across chunks. Eg. ['.'].
   * @example ["。","，",".","!","?",";",")","،","۔","।","॥","|","||",",",":"]
   */
  inputPunctuationBoundaries?: (
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
    | ':'
  )[];
  /**
   * This determines whether fillers are injected into the model output before inputting it into the voice provider.
   *
   * Default `false` because you can achieve better results with prompting the model.
   * @example false
   */
  fillerInjectionEnabled?: boolean;
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
}

export interface ElevenLabsVoice {
  /**
   * This determines whether the model output is preprocessed into chunks before being sent to the voice provider.
   *
   * Default `true` because voice generation sounds better with chunking (and reformatting them).
   *
   * To send every token from the model output directly to the voice provider and rely on the voice provider's audio generation logic, set this to `false`.
   *
   * If disabled, vapi-provided audio control tokens like <flush /> will not work.
   * @example true
   */
  inputPreprocessingEnabled?: boolean;
  /**
   * This determines whether the chunk is reformatted before being sent to the voice provider. Many things are reformatted including phone numbers, emails and addresses to improve their enunciation.
   *
   * Default `true` because voice generation sounds better with reformatting.
   *
   * To disable chunk reformatting, set this to `false`.
   *
   * To disable chunking completely, set `inputPreprocessingEnabled` to `false`.
   * @example true
   */
  inputReformattingEnabled?: boolean;
  /**
   * This is the minimum number of characters before a chunk is created. The chunks that are sent to the voice provider for the voice generation as the model tokens are streaming in. Defaults to 30.
   *
   * Increasing this value might add latency as it waits for the model to output a full chunk before sending it to the voice provider. On the other hand, increasing might be a good idea if you want to give voice provider bigger chunks so it can pronounce them better.
   *
   * Decreasing this value might decrease latency but might also decrease quality if the voice provider struggles to pronounce the text correctly.
   * @min 1
   * @max 80
   * @example 30
   */
  inputMinCharacters?: number;
  /**
   * These are the punctuations that are considered valid boundaries before a chunk is created. The chunks that are sent to the voice provider for the voice generation as the model tokens are streaming in. Defaults are chosen differently for each provider.
   *
   * Constraining the delimiters might add latency as it waits for the model to output a full chunk before sending it to the voice provider. On the other hand, constraining might be a good idea if you want to give voice provider longer chunks so it can sound less disjointed across chunks. Eg. ['.'].
   * @example ["。","，",".","!","?",";",")","،","۔","।","॥","|","||",",",":"]
   */
  inputPunctuationBoundaries?: (
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
    | ':'
  )[];
  /**
   * This determines whether fillers are injected into the model output before inputting it into the voice provider.
   *
   * Default `false` because you can achieve better results with prompting the model.
   * @example false
   */
  fillerInjectionEnabled?: boolean;
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
   * Defines the optimize streaming latency for voice settings. Defaults to 3.
   * @min 0
   * @max 4
   * @example 3
   */
  optimizeStreamingLatency?: number;
  /**
   * Defines the use of https://elevenlabs.io/docs/speech-synthesis/prompting#pronunciation. Disabled by default.
   * @example false
   */
  enableSsmlParsing?: boolean;
  /**
   * This is the model that will be used. Defaults to 'eleven_multilingual_v2' if transcriber.language is non-English, otherwise 'eleven_turbo_v2_5'.
   * @example "eleven_turbo_v2_5"
   */
  model?:
    | 'eleven_multilingual_v2'
    | 'eleven_turbo_v2'
    | 'eleven_turbo_v2_5'
    | 'eleven_monolingual_v1';
  /**
  * This is the language (ISO 639-1) that is enforced for the model. Currently only Turbo v2.5 supports language enforcement. For other models, an error will be returned if language code is provided.
  */
  language?: string;
}

export interface LMNTVoice {
  /**
   * This determines whether the model output is preprocessed into chunks before being sent to the voice provider.
   *
   * Default `true` because voice generation sounds better with chunking (and reformatting them).
   *
   * To send every token from the model output directly to the voice provider and rely on the voice provider's audio generation logic, set this to `false`.
   *
   * If disabled, vapi-provided audio control tokens like <flush /> will not work.
   * @example true
   */
  inputPreprocessingEnabled?: boolean;
  /**
   * This determines whether the chunk is reformatted before being sent to the voice provider. Many things are reformatted including phone numbers, emails and addresses to improve their enunciation.
   *
   * Default `true` because voice generation sounds better with reformatting.
   *
   * To disable chunk reformatting, set this to `false`.
   *
   * To disable chunking completely, set `inputPreprocessingEnabled` to `false`.
   * @example true
   */
  inputReformattingEnabled?: boolean;
  /**
   * This is the minimum number of characters before a chunk is created. The chunks that are sent to the voice provider for the voice generation as the model tokens are streaming in. Defaults to 30.
   *
   * Increasing this value might add latency as it waits for the model to output a full chunk before sending it to the voice provider. On the other hand, increasing might be a good idea if you want to give voice provider bigger chunks so it can pronounce them better.
   *
   * Decreasing this value might decrease latency but might also decrease quality if the voice provider struggles to pronounce the text correctly.
   * @min 1
   * @max 80
   * @example 30
   */
  inputMinCharacters?: number;
  /**
   * These are the punctuations that are considered valid boundaries before a chunk is created. The chunks that are sent to the voice provider for the voice generation as the model tokens are streaming in. Defaults are chosen differently for each provider.
   *
   * Constraining the delimiters might add latency as it waits for the model to output a full chunk before sending it to the voice provider. On the other hand, constraining might be a good idea if you want to give voice provider longer chunks so it can sound less disjointed across chunks. Eg. ['.'].
   * @example ["。","，",".","!","?",";",")","،","۔","।","॥","|","||",",",":"]
   */
  inputPunctuationBoundaries?: (
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
    | ':'
  )[];
  /**
   * This determines whether fillers are injected into the model output before inputting it into the voice provider.
   *
   * Default `false` because you can achieve better results with prompting the model.
   * @example false
   */
  fillerInjectionEnabled?: boolean;
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
}

export interface NeetsVoice {
  /**
   * This determines whether the model output is preprocessed into chunks before being sent to the voice provider.
   *
   * Default `true` because voice generation sounds better with chunking (and reformatting them).
   *
   * To send every token from the model output directly to the voice provider and rely on the voice provider's audio generation logic, set this to `false`.
   *
   * If disabled, vapi-provided audio control tokens like <flush /> will not work.
   * @example true
   */
  inputPreprocessingEnabled?: boolean;
  /**
   * This determines whether the chunk is reformatted before being sent to the voice provider. Many things are reformatted including phone numbers, emails and addresses to improve their enunciation.
   *
   * Default `true` because voice generation sounds better with reformatting.
   *
   * To disable chunk reformatting, set this to `false`.
   *
   * To disable chunking completely, set `inputPreprocessingEnabled` to `false`.
   * @example true
   */
  inputReformattingEnabled?: boolean;
  /**
   * This is the minimum number of characters before a chunk is created. The chunks that are sent to the voice provider for the voice generation as the model tokens are streaming in. Defaults to 30.
   *
   * Increasing this value might add latency as it waits for the model to output a full chunk before sending it to the voice provider. On the other hand, increasing might be a good idea if you want to give voice provider bigger chunks so it can pronounce them better.
   *
   * Decreasing this value might decrease latency but might also decrease quality if the voice provider struggles to pronounce the text correctly.
   * @min 1
   * @max 80
   * @example 30
   */
  inputMinCharacters?: number;
  /**
   * These are the punctuations that are considered valid boundaries before a chunk is created. The chunks that are sent to the voice provider for the voice generation as the model tokens are streaming in. Defaults are chosen differently for each provider.
   *
   * Constraining the delimiters might add latency as it waits for the model to output a full chunk before sending it to the voice provider. On the other hand, constraining might be a good idea if you want to give voice provider longer chunks so it can sound less disjointed across chunks. Eg. ['.'].
   * @example ["。","，",".","!","?",";",")","،","۔","।","॥","|","||",",",":"]
   */
  inputPunctuationBoundaries?: (
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
    | ':'
  )[];
  /**
   * This determines whether fillers are injected into the model output before inputting it into the voice provider.
   *
   * Default `false` because you can achieve better results with prompting the model.
   * @example false
   */
  fillerInjectionEnabled?: boolean;
  /** This is the voice provider that will be used. */
  provider: 'neets';
  /** This is the provider-specific ID that will be used. */
  voiceId: 'vits' | string;
}

export interface OpenAIVoice {
  /**
   * This determines whether the model output is preprocessed into chunks before being sent to the voice provider.
   *
   * Default `true` because voice generation sounds better with chunking (and reformatting them).
   *
   * To send every token from the model output directly to the voice provider and rely on the voice provider's audio generation logic, set this to `false`.
   *
   * If disabled, vapi-provided audio control tokens like <flush /> will not work.
   * @example true
   */
  inputPreprocessingEnabled?: boolean;
  /**
   * This determines whether the chunk is reformatted before being sent to the voice provider. Many things are reformatted including phone numbers, emails and addresses to improve their enunciation.
   *
   * Default `true` because voice generation sounds better with reformatting.
   *
   * To disable chunk reformatting, set this to `false`.
   *
   * To disable chunking completely, set `inputPreprocessingEnabled` to `false`.
   * @example true
   */
  inputReformattingEnabled?: boolean;
  /**
   * This is the minimum number of characters before a chunk is created. The chunks that are sent to the voice provider for the voice generation as the model tokens are streaming in. Defaults to 30.
   *
   * Increasing this value might add latency as it waits for the model to output a full chunk before sending it to the voice provider. On the other hand, increasing might be a good idea if you want to give voice provider bigger chunks so it can pronounce them better.
   *
   * Decreasing this value might decrease latency but might also decrease quality if the voice provider struggles to pronounce the text correctly.
   * @min 1
   * @max 80
   * @example 30
   */
  inputMinCharacters?: number;
  /**
   * These are the punctuations that are considered valid boundaries before a chunk is created. The chunks that are sent to the voice provider for the voice generation as the model tokens are streaming in. Defaults are chosen differently for each provider.
   *
   * Constraining the delimiters might add latency as it waits for the model to output a full chunk before sending it to the voice provider. On the other hand, constraining might be a good idea if you want to give voice provider longer chunks so it can sound less disjointed across chunks. Eg. ['.'].
   * @example ["。","，",".","!","?",";",")","،","۔","।","॥","|","||",",",":"]
   */
  inputPunctuationBoundaries?: (
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
    | ':'
  )[];
  /**
   * This determines whether fillers are injected into the model output before inputting it into the voice provider.
   *
   * Default `false` because you can achieve better results with prompting the model.
   * @example false
   */
  fillerInjectionEnabled?: boolean;
  /** This is the voice provider that will be used. */
  provider: 'openai';
  /** This is the provider-specific ID that will be used. */
  voiceId: 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer';
  /**
   * This is the speed multiplier that will be used.
   * @min 0.25
   * @max 4
   * @example null
   */
  speed?: number;
}

export interface PlayHTVoice {
  /**
   * This determines whether the model output is preprocessed into chunks before being sent to the voice provider.
   *
   * Default `true` because voice generation sounds better with chunking (and reformatting them).
   *
   * To send every token from the model output directly to the voice provider and rely on the voice provider's audio generation logic, set this to `false`.
   *
   * If disabled, vapi-provided audio control tokens like <flush /> will not work.
   * @example true
   */
  inputPreprocessingEnabled?: boolean;
  /**
   * This determines whether the chunk is reformatted before being sent to the voice provider. Many things are reformatted including phone numbers, emails and addresses to improve their enunciation.
   *
   * Default `true` because voice generation sounds better with reformatting.
   *
   * To disable chunk reformatting, set this to `false`.
   *
   * To disable chunking completely, set `inputPreprocessingEnabled` to `false`.
   * @example true
   */
  inputReformattingEnabled?: boolean;
  /**
   * This is the minimum number of characters before a chunk is created. The chunks that are sent to the voice provider for the voice generation as the model tokens are streaming in. Defaults to 30.
   *
   * Increasing this value might add latency as it waits for the model to output a full chunk before sending it to the voice provider. On the other hand, increasing might be a good idea if you want to give voice provider bigger chunks so it can pronounce them better.
   *
   * Decreasing this value might decrease latency but might also decrease quality if the voice provider struggles to pronounce the text correctly.
   * @min 1
   * @max 80
   * @example 30
   */
  inputMinCharacters?: number;
  /**
   * These are the punctuations that are considered valid boundaries before a chunk is created. The chunks that are sent to the voice provider for the voice generation as the model tokens are streaming in. Defaults are chosen differently for each provider.
   *
   * Constraining the delimiters might add latency as it waits for the model to output a full chunk before sending it to the voice provider. On the other hand, constraining might be a good idea if you want to give voice provider longer chunks so it can sound less disjointed across chunks. Eg. ['.'].
   * @example ["。","，",".","!","?",";",")","،","۔","।","॥","|","||",",",":"]
   */
  inputPunctuationBoundaries?: (
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
    | ':'
  )[];
  /**
   * This determines whether fillers are injected into the model output before inputting it into the voice provider.
   *
   * Default `false` because you can achieve better results with prompting the model.
   * @example false
   */
  fillerInjectionEnabled?: boolean;
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
}

export interface RimeAIVoice {
  /**
   * This determines whether the model output is preprocessed into chunks before being sent to the voice provider.
   *
   * Default `true` because voice generation sounds better with chunking (and reformatting them).
   *
   * To send every token from the model output directly to the voice provider and rely on the voice provider's audio generation logic, set this to `false`.
   *
   * If disabled, vapi-provided audio control tokens like <flush /> will not work.
   * @example true
   */
  inputPreprocessingEnabled?: boolean;
  /**
   * This determines whether the chunk is reformatted before being sent to the voice provider. Many things are reformatted including phone numbers, emails and addresses to improve their enunciation.
   *
   * Default `true` because voice generation sounds better with reformatting.
   *
   * To disable chunk reformatting, set this to `false`.
   *
   * To disable chunking completely, set `inputPreprocessingEnabled` to `false`.
   * @example true
   */
  inputReformattingEnabled?: boolean;
  /**
   * This is the minimum number of characters before a chunk is created. The chunks that are sent to the voice provider for the voice generation as the model tokens are streaming in. Defaults to 30.
   *
   * Increasing this value might add latency as it waits for the model to output a full chunk before sending it to the voice provider. On the other hand, increasing might be a good idea if you want to give voice provider bigger chunks so it can pronounce them better.
   *
   * Decreasing this value might decrease latency but might also decrease quality if the voice provider struggles to pronounce the text correctly.
   * @min 1
   * @max 80
   * @example 30
   */
  inputMinCharacters?: number;
  /**
   * These are the punctuations that are considered valid boundaries before a chunk is created. The chunks that are sent to the voice provider for the voice generation as the model tokens are streaming in. Defaults are chosen differently for each provider.
   *
   * Constraining the delimiters might add latency as it waits for the model to output a full chunk before sending it to the voice provider. On the other hand, constraining might be a good idea if you want to give voice provider longer chunks so it can sound less disjointed across chunks. Eg. ['.'].
   * @example ["。","，",".","!","?",";",")","،","۔","।","॥","|","||",",",":"]
   */
  inputPunctuationBoundaries?: (
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
    | ':'
  )[];
  /**
   * This determines whether fillers are injected into the model output before inputting it into the voice provider.
   *
   * Default `false` because you can achieve better results with prompting the model.
   * @example false
   */
  fillerInjectionEnabled?: boolean;
  /** This is the voice provider that will be used. */
  provider: 'rime-ai';
  /** This is the provider-specific ID that will be used. */
  voiceId:
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
    | string;
  /**
   * This is the model that will be used. Defaults to 'v1' when not specified.
   * @example "v1"
   */
  model?: 'v1' | 'mist';
  /**
   * This is the speed multiplier that will be used.
   * @min 0.1
   * @example null
   */
  speed?: number;
}

export interface TwilioVoicemailDetection {
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

export interface AnalysisPlan {
  /**
   * This is the prompt that's used to summarize the call. The output is stored in `call.analysis.summary`.
   *
   * Default is "You are an expert note-taker. You will be given a transcript of a call. Summarize the call in 2-3 sentences, if applicable.".
   *
   * Set to '' or 'off' to disable.
   * @maxLength 2000
   */
  summaryPrompt?: string;
  /**
   * This is how long the request is tried before giving up. When request times out, `call.analysis.summary` will be empty. Increasing this timeout will delay the end of call report.
   *
   * Default is 5 seconds.
   * @min 1
   * @max 20
   */
  summaryRequestTimeoutSeconds?: number;
  /**
   * This is how long the request is tried before giving up. When request times out, `call.analysis.structuredData` will be empty. Increasing this timeout will delay the end of call report.
   *
   * Default is 5 seconds.
   * @min 1
   * @max 20
   */
  structuredDataRequestTimeoutSeconds?: number;
  /**
   * This is the prompt that's used to evaluate if the call was successful. The output is stored in `call.analysis.successEvaluation`.
   *
   * Default is "You are an expert call evaluator. You will be given a transcript of a call and the system prompt of the AI participant. Determine if the call was successful based on the objectives inferred from the system prompt.".
   *
   * Set to '' or 'off' to disable.
   *
   * You can use this standalone or in combination with `successEvaluationRubric`. If both are provided, they are concatenated into appropriate instructions.
   * @maxLength 2000
   */
  successEvaluationPrompt?: string;
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
   * For 'Checklist' and 'Matrix', provide the criteria in `successEvaluationPrompt`.
   *
   * Default is 'PassFail' if `successEvaluationPrompt` is not provided, and null if `successEvaluationPrompt` is provided.
   *
   * You can use this standalone or in combination with `successEvaluationPrompt`. If both are provided, they are concatenated into appropriate instructions.
   */
  successEvaluationRubric?:
    | 'NumericScale'
    | 'DescriptiveScale'
    | 'Checklist'
    | 'Matrix'
    | 'PercentageScale'
    | 'LikertScale'
    | 'AutomaticRubric'
    | 'PassFail';
  /**
   * This is how long the request is tried before giving up. When request times out, `call.analysis.successEvaluation` will be empty. Increasing this timeout will delay the end of call report.
   *
   * Default is 5 seconds.
   * @min 1
   * @max 20
   */
  successEvaluationRequestTimeoutSeconds?: number;
  /**
   * This is the prompt that's used to extract structured data from the call. The output is stored in `call.analysis.structuredData`.
   *
   * Disabled by default.
   *
   * You can use this standalone or in combination with `structuredDataSchema`. If both are provided, they are concatenated into appropriate instructions.
   * @maxLength 2000
   */
  structuredDataPrompt?: string;
  /**
   * This enforces the schema of the structured data. This output is stored in `call.analysis.structuredData`.
   *
   * Complete guide on JSON Schema can be found [here](https://ajv.js.org/json-schema.html#json-data-type).
   *
   * Disabled by default.
   *
   * You can use this standalone or in combination with `structuredDataPrompt`. If both are provided, they are concatenated into appropriate instructions.
   */
  structuredDataSchema?: JsonSchema;
}

export interface ArtifactPlan {
  /** This determines whether the video is recorded during the call. Default is false. Only relevant for `webCall` type. */
  videoRecordingEnabled?: boolean;
}

export interface MessagePlan {
  /**
   * This are the messages that the assistant will speak when the user hasn't responded for `idleTimeoutSeconds`. Each time the timeout is triggered, a random message will be chosen from this array.
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
   * @default 7.5
   * @min 5
   * @max 10
   */
  idleTimeoutSeconds?: number;
}

export interface CreateAssistantDTO {
  /** These are the options for the assistant's transcriber. */
  transcriber?:
    | DeepgramTranscriber
    | GladiaTranscriber
    | TalkscriberTranscriber;
  /** These are the options for the assistant's LLM. */
  model?:
    | AnyscaleModel
    | AnthropicModel
    | CustomLLMModel
    | DeepInfraModel
    | GroqModel
    | OpenAIModel
    | OpenRouterModel
    | PerplexityAIModel
    | TogetherAIModel;
  /**
   * These are the options for the assistant's voice.
   * @default {"provider":"playht","voiceId":"jennifer"}
   */
  voice?:
    | AzureVoice
    | CartesiaVoice
    | DeepgramVoice
    | ElevenLabsVoice
    | LMNTVoice
    | NeetsVoice
    | OpenAIVoice
    | PlayHTVoice
    | RimeAIVoice;
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
   * This sets whether the assistant's calls are recorded. Defaults to true.
   * @example true
   */
  recordingEnabled?: boolean;
  /**
   * When this is enabled, no logs, recordings, or transcriptions will be stored. At the end of the call, you will still receive an end-of-call-report message to store on your server. Defaults to false.
   * @example false
   */
  hipaaEnabled?: boolean;
  /**
   * These are the messages that will be sent to your Client SDKs. Default is conversation-update,function-call,hang,model-output,speech-update,status-update,transcript,tool-calls,user-interrupted,voice-input. You can check the shape of the messages in ClientMessage schema.
   * @example ["conversation-update","function-call","hang","model-output","speech-update","status-update","transcript","tool-calls","user-interrupted","voice-input"]
   */
  clientMessages?: (
    | 'conversation-update'
    | 'function-call'
    | 'function-call-result'
    | 'hang'
    | 'metadata'
    | 'model-output'
    | 'speech-update'
    | 'status-update'
    | 'transcript'
    | 'tool-calls'
    | 'tool-calls-result'
    | 'user-interrupted'
    | 'voice-input'
  )[];
  /**
   * These are the messages that will be sent to your Server URL. Default is conversation-update,end-of-call-report,function-call,hang,speech-update,status-update,tool-calls,transfer-destination-request,user-interrupted. You can check the shape of the messages in ServerMessage schema.
   * @example ["conversation-update","end-of-call-report","function-call","hang","speech-update","status-update","tool-calls","transfer-destination-request","user-interrupted"]
   */
  serverMessages?: (
    | 'conversation-update'
    | 'end-of-call-report'
    | 'function-call'
    | 'hang'
    | 'model-output'
    | 'phone-call-control'
    | 'speech-update'
    | 'status-update'
    | 'transcript'
    | 'tool-calls'
    | 'transfer-destination-request'
    | 'user-interrupted'
    | 'voice-input'
  )[];
  /**
   * How many seconds of silence to wait before ending the call. Defaults to 30.
   *
   * @default 30
   * @min 10
   * @max 600
   * @example 30
   */
  silenceTimeoutSeconds?: number;
  /**
   * The minimum number of seconds after user speech to wait before the assistant starts speaking. Defaults to 0.4.
   *
   * @default 0.4
   * @min 0
   * @max 5
   * @example 0.4
   */
  responseDelaySeconds?: number;
  /**
   * The minimum number of seconds to wait after transcription (with punctuation) before sending a request to the LLM. Defaults to 0.1.
   *
   * @default 0.1
   * @min 0
   * @max 3
   * @example 0.1
   */
  llmRequestDelaySeconds?: number;
  /**
   * The minimum number of seconds to wait after transcription (without punctuation) before sending a request to the LLM. Defaults to 1.5.
   *
   * @default 1.5
   * @min 0
   * @max 3
   * @example 1.5
   */
  llmRequestNonPunctuatedDelaySeconds?: number;
  /**
   * The number of words to wait for before interrupting the assistant.
   *
   * Words like "stop", "actually", "no", etc. will always interrupt immediately regardless of this value.
   *
   * Words like "okay", "yeah", "right" will never interrupt.
   *
   * When set to 0, it will rely solely on the VAD (Voice Activity Detector) and will not wait for any transcription. Defaults to this (0).
   *
   * @default 0
   * @min 0
   * @max 10
   * @example 0
   */
  numWordsToInterruptAssistant?: number;
  /**
   * This is the maximum number of seconds that the call will last. When the call reaches this duration, it will be ended.
   *
   * @default 1800 (~30 minutes)
   * @min 10
   * @max 3600
   * @example 1800
   */
  maxDurationSeconds?: number;
  /**
   * This is the background sound in the call. Default for phone calls is 'office' and default for web calls is 'off'.
   * @example "office"
   */
  backgroundSound?: 'off' | 'office';
  /**
   * This determines whether the model says 'mhmm', 'ahem' etc. while user is speaking.
   *
   * Default `false` while in beta.
   *
   * @default false
   * @example false
   */
  backchannelingEnabled?: boolean;
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
  /**
   * This is the name of the assistant.
   *
   * This is required when you want to transfer between assistants in a call.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the first message that the assistant will say. This can also be a URL to a containerized audio file (mp3, wav, etc.).
   *
   * If unspecified, assistant will wait for user to speak and use the model to respond once they speak.
   * @maxLength 1000
   */
  firstMessage?: string;
  /**
   * These are the settings to configure or disable voicemail detection. Alternatively, voicemail detection can be configured using the model.tools=[VoicemailTool].
   * This uses Twilio's built-in detection while the VoicemailTool relies on the model to detect if a voicemail was reached.
   * You can use neither of them, one of them, or both of them. By default, Twilio built-in detection is enabled while VoicemailTool is not.
   */
  voicemailDetection?: TwilioVoicemailDetection;
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
  /** This is for metadata you want to store on the assistant. */
  metadata?: object;
  /**
   * This is the URL Vapi will communicate with via HTTP GET and POST Requests. This is used for retrieving context, function calling, and end-of-call reports.
   *
   * All requests will be sent with the call object among other things relevant to that message. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: tool.server.url > assistant.serverUrl > phoneNumber.serverUrl > org.serverUrl
   */
  serverUrl?: string;
  /**
   * This is the secret you can set that Vapi will send with every request to your server. Will be sent as a header called x-vapi-secret.
   *
   * Same precedence logic as serverUrl.
   */
  serverUrlSecret?: string;
  /** This is the plan for analysis of assistant's calls. Stored in `call.analysis`. */
  analysisPlan?: AnalysisPlan;
  /** This is the plan for artifacts generated during assistant's calls. Stored in `call.artifact`. */
  artifactPlan?: ArtifactPlan;
  /**
   * This is the plan for static messages that can be spoken by the assistant during the call, like `idleMessages`.
   *
   * Note: `firstMessage`, `voicemailMessage`, and `endCallMessage` are currently at the root level. They will be moved to `messagePlan` in the future, but will remain backwards compatible.
   */
  messagePlan?: MessagePlan;
}

export interface AssistantOverrides {
  /** These are the options for the assistant's transcriber. */
  transcriber?:
    | DeepgramTranscriber
    | GladiaTranscriber
    | TalkscriberTranscriber;
  /** These are the options for the assistant's LLM. */
  model?:
    | AnyscaleModel
    | AnthropicModel
    | CustomLLMModel
    | DeepInfraModel
    | GroqModel
    | OpenAIModel
    | OpenRouterModel
    | PerplexityAIModel
    | TogetherAIModel;
  /**
   * These are the options for the assistant's voice.
   * @default {"provider":"playht","voiceId":"jennifer"}
   */
  voice?:
    | AzureVoice
    | CartesiaVoice
    | DeepgramVoice
    | ElevenLabsVoice
    | LMNTVoice
    | NeetsVoice
    | OpenAIVoice
    | PlayHTVoice
    | RimeAIVoice;
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
   * This sets whether the assistant's calls are recorded. Defaults to true.
   * @example true
   */
  recordingEnabled?: boolean;
  /**
   * When this is enabled, no logs, recordings, or transcriptions will be stored. At the end of the call, you will still receive an end-of-call-report message to store on your server. Defaults to false.
   * @example false
   */
  hipaaEnabled?: boolean;
  /**
   * These are the messages that will be sent to your Client SDKs. Default is conversation-update,function-call,hang,model-output,speech-update,status-update,transcript,tool-calls,user-interrupted,voice-input. You can check the shape of the messages in ClientMessage schema.
   * @example ["conversation-update","function-call","hang","model-output","speech-update","status-update","transcript","tool-calls","user-interrupted","voice-input"]
   */
  clientMessages?: (
    | 'conversation-update'
    | 'function-call'
    | 'function-call-result'
    | 'hang'
    | 'metadata'
    | 'model-output'
    | 'speech-update'
    | 'status-update'
    | 'transcript'
    | 'tool-calls'
    | 'tool-calls-result'
    | 'user-interrupted'
    | 'voice-input'
  )[];
  /**
   * These are the messages that will be sent to your Server URL. Default is conversation-update,end-of-call-report,function-call,hang,speech-update,status-update,tool-calls,transfer-destination-request,user-interrupted. You can check the shape of the messages in ServerMessage schema.
   * @example ["conversation-update","end-of-call-report","function-call","hang","speech-update","status-update","tool-calls","transfer-destination-request","user-interrupted"]
   */
  serverMessages?: (
    | 'conversation-update'
    | 'end-of-call-report'
    | 'function-call'
    | 'hang'
    | 'model-output'
    | 'phone-call-control'
    | 'speech-update'
    | 'status-update'
    | 'transcript'
    | 'tool-calls'
    | 'transfer-destination-request'
    | 'user-interrupted'
    | 'voice-input'
  )[];
  /**
   * How many seconds of silence to wait before ending the call. Defaults to 30.
   *
   * @default 30
   * @min 10
   * @max 600
   * @example 30
   */
  silenceTimeoutSeconds?: number;
  /**
   * The minimum number of seconds after user speech to wait before the assistant starts speaking. Defaults to 0.4.
   *
   * @default 0.4
   * @min 0
   * @max 5
   * @example 0.4
   */
  responseDelaySeconds?: number;
  /**
   * The minimum number of seconds to wait after transcription (with punctuation) before sending a request to the LLM. Defaults to 0.1.
   *
   * @default 0.1
   * @min 0
   * @max 3
   * @example 0.1
   */
  llmRequestDelaySeconds?: number;
  /**
   * The minimum number of seconds to wait after transcription (without punctuation) before sending a request to the LLM. Defaults to 1.5.
   *
   * @default 1.5
   * @min 0
   * @max 3
   * @example 1.5
   */
  llmRequestNonPunctuatedDelaySeconds?: number;
  /**
   * The number of words to wait for before interrupting the assistant.
   *
   * Words like "stop", "actually", "no", etc. will always interrupt immediately regardless of this value.
   *
   * Words like "okay", "yeah", "right" will never interrupt.
   *
   * When set to 0, it will rely solely on the VAD (Voice Activity Detector) and will not wait for any transcription. Defaults to this (0).
   *
   * @default 0
   * @min 0
   * @max 10
   * @example 0
   */
  numWordsToInterruptAssistant?: number;
  /**
   * This is the maximum number of seconds that the call will last. When the call reaches this duration, it will be ended.
   *
   * @default 1800 (~30 minutes)
   * @min 10
   * @max 3600
   * @example 1800
   */
  maxDurationSeconds?: number;
  /**
   * This is the background sound in the call. Default for phone calls is 'office' and default for web calls is 'off'.
   * @example "office"
   */
  backgroundSound?: 'off' | 'office';
  /**
   * This determines whether the model says 'mhmm', 'ahem' etc. while user is speaking.
   *
   * Default `false` while in beta.
   *
   * @default false
   * @example false
   */
  backchannelingEnabled?: boolean;
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
  /** These are values that will be used to replace the template variables in the assistant messages and other text-based fields. */
  variableValues?: object;
  /**
   * This is the name of the assistant.
   *
   * This is required when you want to transfer between assistants in a call.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the first message that the assistant will say. This can also be a URL to a containerized audio file (mp3, wav, etc.).
   *
   * If unspecified, assistant will wait for user to speak and use the model to respond once they speak.
   * @maxLength 1000
   */
  firstMessage?: string;
  /**
   * These are the settings to configure or disable voicemail detection. Alternatively, voicemail detection can be configured using the model.tools=[VoicemailTool].
   * This uses Twilio's built-in detection while the VoicemailTool relies on the model to detect if a voicemail was reached.
   * You can use neither of them, one of them, or both of them. By default, Twilio built-in detection is enabled while VoicemailTool is not.
   */
  voicemailDetection?: TwilioVoicemailDetection;
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
  /** This is for metadata you want to store on the assistant. */
  metadata?: object;
  /**
   * This is the URL Vapi will communicate with via HTTP GET and POST Requests. This is used for retrieving context, function calling, and end-of-call reports.
   *
   * All requests will be sent with the call object among other things relevant to that message. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: tool.server.url > assistant.serverUrl > phoneNumber.serverUrl > org.serverUrl
   */
  serverUrl?: string;
  /**
   * This is the secret you can set that Vapi will send with every request to your server. Will be sent as a header called x-vapi-secret.
   *
   * Same precedence logic as serverUrl.
   */
  serverUrlSecret?: string;
  /** This is the plan for analysis of assistant's calls. Stored in `call.analysis`. */
  analysisPlan?: AnalysisPlan;
  /** This is the plan for artifacts generated during assistant's calls. Stored in `call.artifact`. */
  artifactPlan?: ArtifactPlan;
  /**
   * This is the plan for static messages that can be spoken by the assistant during the call, like `idleMessages`.
   *
   * Note: `firstMessage`, `voicemailMessage`, and `endCallMessage` are currently at the root level. They will be moved to `messagePlan` in the future, but will remain backwards compatible.
   */
  messagePlan?: MessagePlan;
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
   * These destinations are in addition to destinations that already exist in the assistant's TransferCall tool.
   */
  assistantDestinations?: AssistantTransferDestination[];
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
  fallbackDestination?: NumberTransferDestination | SipTransferDestination;
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
   * This is the server URL where messages will be sent for calls on this number. This includes the `assistant-request` message.
   *
   * You can see the shape of the messages sent in `ServerMessage`.
   *
   * This overrides the `org.serverUrl`. Order of precedence: tool.server.url > assistant.serverUrl > phoneNumber.serverUrl > org.serverUrl.
   */
  serverUrl?: string;
  /**
   * This is the secret Vapi will send with every message to your server. It's sent as a header called x-vapi-secret.
   *
   * Same precedence logic as serverUrl.
   */
  serverUrlSecret?: string;
}

export interface CreateCustomerDTO {
  /** This is the number of the customer. */
  number?: string;
  /** This is the SIP URI of the customer. */
  sipUri?: string;
  /**
   * This is the name of the customer. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the extension that will be dialed after the call is answered.
   * @maxLength 30
   */
  extension?: string;
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

export interface Artifact {
  /** This is video recording url for the call. Enable by setting `assistant.artifactPlan.videoRecordingEnabled`. */
  videoRecordingUrl?: string;
  /** This is video recording start delay in ms. Only available when `assistant.artifactPlan.videoRecordingEnabled` is enabled. */
  videoRecordingStartDelaySeconds?: number;
}

export interface Analysis {
  /** This is the summary of the call. Customize by setting `assistant.analysisPlan.summaryPrompt`. */
  summary?: string;
  /** This is the structured data extracted from the call. Customize by setting `assistant.analysisPlan.structuredDataPrompt` and/or `assistant.analysisPlan.structuredDataSchema`. */
  structuredData?: object;
  /** This is the evaluation of the call. Customize by setting `assistant.analysisPlan.successEvaluationPrompt` and/or `assistant.analysisPlan.successEvaluationRubric`. */
  successEvaluation?: string;
}

export interface Call {
  /** This is the type of call. */
  type?: 'inboundPhoneCall' | 'outboundPhoneCall' | 'webCall';
  /** These are the messages that were spoken during the call. */
  messages?: (
    | UserMessage
    | SystemMessage
    | BotMessage
    | FunctionCallMessage
    | ToolCallMessage
    | ToolCallResultMessage
    | FunctionResultMessage
  )[];
  /**
   * This is the provider of the call.
   *
   * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` type.
   */
  phoneCallProvider?: 'twilio' | 'vonage' | 'vapi';
  /**
   * This is the transport of the phone call.
   *
   * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` type.
   */
  phoneCallTransport?: 'sip' | 'pstn';
  /** This is the status of the call. */
  status?: 'queued' | 'ringing' | 'in-progress' | 'forwarding' | 'ended';
  /** This is the explanation for how the call ended. */
  endedReason?:
    | 'assistant-error'
    | 'assistant-not-found'
    | 'db-error'
    | 'no-server-available'
    | 'pipeline-error-extra-function-failed'
    | 'pipeline-error-first-message-failed'
    | 'pipeline-error-function-filler-failed'
    | 'pipeline-error-function-failed'
    | 'pipeline-error-openai-llm-failed'
    | 'pipeline-error-azure-openai-llm-failed'
    | 'pipeline-error-together-ai-llm-failed'
    | 'pipeline-error-anyscale-llm-failed'
    | 'pipeline-error-openrouter-llm-failed'
    | 'pipeline-error-perplexity-ai-llm-failed'
    | 'pipeline-error-deepinfra-llm-failed'
    | 'pipeline-error-runpod-llm-failed'
    | 'pipeline-error-groq-llm-failed'
    | 'pipeline-error-anthropic-llm-failed'
    | 'pipeline-error-openai-voice-failed'
    | 'pipeline-error-cartesia-voice-failed'
    | 'pipeline-error-deepgram-transcriber-failed'
    | 'pipeline-error-deepgram-voice-failed'
    | 'pipeline-error-gladia-transcriber-failed'
    | 'pipeline-error-eleven-labs-voice-failed'
    | 'pipeline-error-playht-voice-failed'
    | 'pipeline-error-lmnt-voice-failed'
    | 'pipeline-error-azure-voice-failed'
    | 'pipeline-error-rime-ai-voice-failed'
    | 'pipeline-error-neets-voice-failed'
    | 'pipeline-no-available-model'
    | 'server-shutdown'
    | 'twilio-failed-to-connect-call'
    | 'unknown-error'
    | 'vonage-disconnected'
    | 'vonage-failed-to-connect-call'
    | 'phone-call-provider-bypass-enabled-but-no-call-received'
    | 'vapi-error-phone-call-worker-setup-socket-error'
    | 'vapi-error-phone-call-worker-worker-setup-socket-timeout'
    | 'vapi-error-phone-call-worker-could-not-find-call'
    | 'vapi-error-phone-call-worker-call-never-connected'
    | 'vapi-error-web-call-worker-setup-failed'
    | 'assistant-not-invalid'
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
    | 'assistant-forwarded-call'
    | 'assistant-join-timed-out'
    | 'customer-busy'
    | 'customer-ended-call'
    | 'customer-did-not-answer'
    | 'customer-did-not-give-microphone-permission'
    | 'incoming-client-message-say-ended-call'
    | 'exceeded-max-duration'
    | 'manually-canceled'
    | 'phone-call-provider-closed-websocket'
    | 'pipeline-error-custom-llm-llm-failed'
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
    | 'pipeline-error-playht-request-timed-out'
    | 'pipeline-error-playht-invalid-voice'
    | 'pipeline-error-playht-unexpected-error'
    | 'pipeline-error-playht-out-of-credits'
    | 'pipeline-error-playht-rate-limit-exceeded'
    | 'pipeline-error-playht-502-gateway-error'
    | 'pipeline-error-playht-504-gateway-error'
    | 'silence-timed-out'
    | 'voicemail'
    | 'vonage-rejected';
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
  /** This is the transcript of the call. */
  transcript?: string;
  /** This is the URL of the recording of the call. */
  recordingUrl?: string;
  /** This is the URL of the recording of the call in two channels. */
  stereoRecordingUrl?: string;
  /** This stores artifacts of the call. Customize what artifacts are created by configuring `assistant.artifactPlan`. */
  artifact?: Artifact;
  /** This is a copy of assistant artifact plan. This isn't actually stored on the call but rather just returned in POST /call/web to enable artifact creation client side. */
  artifactPlan?: ArtifactPlan;
  /** This is the analysis of the call. Customize the analysis by configuring `assistant.analysisPlan`. */
  analysis?: Analysis;
  /**
   * The ID of the call as provided by the phone number service. callSid in Twilio. conversationUuid in Vonage.
   *
   * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` type.
   */
  phoneCallProviderId?: string;
  /** This is the phone number that the call was forwarded to. */
  forwardedPhoneNumber?: string;
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

  /**
   * This is the URL of the call that the assistant will join.
   *
   * Only relevant for `webCall` type.
   */
  webCallUrl?: string;
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

export interface Assistant {
  /** These are the options for the assistant's transcriber. */
  transcriber?:
    | DeepgramTranscriber
    | GladiaTranscriber
    | TalkscriberTranscriber;
  /** These are the options for the assistant's LLM. */
  model?:
    | AnyscaleModel
    | AnthropicModel
    | CustomLLMModel
    | DeepInfraModel
    | GroqModel
    | OpenAIModel
    | OpenRouterModel
    | PerplexityAIModel
    | TogetherAIModel;
  /**
   * These are the options for the assistant's voice.
   * @default {"provider":"playht","voiceId":"jennifer"}
   */
  voice?:
    | AzureVoice
    | CartesiaVoice
    | DeepgramVoice
    | ElevenLabsVoice
    | LMNTVoice
    | NeetsVoice
    | OpenAIVoice
    | PlayHTVoice
    | RimeAIVoice;
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
   * This sets whether the assistant's calls are recorded. Defaults to true.
   * @example true
   */
  recordingEnabled?: boolean;
  /**
   * When this is enabled, no logs, recordings, or transcriptions will be stored. At the end of the call, you will still receive an end-of-call-report message to store on your server. Defaults to false.
   * @example false
   */
  hipaaEnabled?: boolean;
  /**
   * These are the messages that will be sent to your Client SDKs. Default is conversation-update,function-call,hang,model-output,speech-update,status-update,transcript,tool-calls,user-interrupted,voice-input. You can check the shape of the messages in ClientMessage schema.
   * @example ["conversation-update","function-call","hang","model-output","speech-update","status-update","transcript","tool-calls","user-interrupted","voice-input"]
   */
  clientMessages?: (
    | 'conversation-update'
    | 'function-call'
    | 'function-call-result'
    | 'hang'
    | 'metadata'
    | 'model-output'
    | 'speech-update'
    | 'status-update'
    | 'transcript'
    | 'tool-calls'
    | 'tool-calls-result'
    | 'user-interrupted'
    | 'voice-input'
  )[];
  /**
   * These are the messages that will be sent to your Server URL. Default is conversation-update,end-of-call-report,function-call,hang,speech-update,status-update,tool-calls,transfer-destination-request,user-interrupted. You can check the shape of the messages in ServerMessage schema.
   * @example ["conversation-update","end-of-call-report","function-call","hang","speech-update","status-update","tool-calls","transfer-destination-request","user-interrupted"]
   */
  serverMessages?: (
    | 'conversation-update'
    | 'end-of-call-report'
    | 'function-call'
    | 'hang'
    | 'model-output'
    | 'phone-call-control'
    | 'speech-update'
    | 'status-update'
    | 'transcript'
    | 'tool-calls'
    | 'transfer-destination-request'
    | 'user-interrupted'
    | 'voice-input'
  )[];
  /**
   * How many seconds of silence to wait before ending the call. Defaults to 30.
   *
   * @default 30
   * @min 10
   * @max 600
   * @example 30
   */
  silenceTimeoutSeconds?: number;
  /**
   * The minimum number of seconds after user speech to wait before the assistant starts speaking. Defaults to 0.4.
   *
   * @default 0.4
   * @min 0
   * @max 5
   * @example 0.4
   */
  responseDelaySeconds?: number;
  /**
   * The minimum number of seconds to wait after transcription (with punctuation) before sending a request to the LLM. Defaults to 0.1.
   *
   * @default 0.1
   * @min 0
   * @max 3
   * @example 0.1
   */
  llmRequestDelaySeconds?: number;
  /**
   * The minimum number of seconds to wait after transcription (without punctuation) before sending a request to the LLM. Defaults to 1.5.
   *
   * @default 1.5
   * @min 0
   * @max 3
   * @example 1.5
   */
  llmRequestNonPunctuatedDelaySeconds?: number;
  /**
   * The number of words to wait for before interrupting the assistant.
   *
   * Words like "stop", "actually", "no", etc. will always interrupt immediately regardless of this value.
   *
   * Words like "okay", "yeah", "right" will never interrupt.
   *
   * When set to 0, it will rely solely on the VAD (Voice Activity Detector) and will not wait for any transcription. Defaults to this (0).
   *
   * @default 0
   * @min 0
   * @max 10
   * @example 0
   */
  numWordsToInterruptAssistant?: number;
  /**
   * This is the maximum number of seconds that the call will last. When the call reaches this duration, it will be ended.
   *
   * @default 1800 (~30 minutes)
   * @min 10
   * @max 3600
   * @example 1800
   */
  maxDurationSeconds?: number;
  /**
   * This is the background sound in the call. Default for phone calls is 'office' and default for web calls is 'off'.
   * @example "office"
   */
  backgroundSound?: 'off' | 'office';
  /**
   * This determines whether the model says 'mhmm', 'ahem' etc. while user is speaking.
   *
   * Default `false` while in beta.
   *
   * @default false
   * @example false
   */
  backchannelingEnabled?: boolean;
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
  isServerUrlSecretSet: object;
  /**
   * This is the name of the assistant.
   *
   * This is required when you want to transfer between assistants in a call.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the first message that the assistant will say. This can also be a URL to a containerized audio file (mp3, wav, etc.).
   *
   * If unspecified, assistant will wait for user to speak and use the model to respond once they speak.
   * @maxLength 1000
   */
  firstMessage?: string;
  /**
   * These are the settings to configure or disable voicemail detection. Alternatively, voicemail detection can be configured using the model.tools=[VoicemailTool].
   * This uses Twilio's built-in detection while the VoicemailTool relies on the model to detect if a voicemail was reached.
   * You can use neither of them, one of them, or both of them. By default, Twilio built-in detection is enabled while VoicemailTool is not.
   */
  voicemailDetection?: TwilioVoicemailDetection;
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
  /** This is for metadata you want to store on the assistant. */
  metadata?: object;
  /**
   * This is the URL Vapi will communicate with via HTTP GET and POST Requests. This is used for retrieving context, function calling, and end-of-call reports.
   *
   * All requests will be sent with the call object among other things relevant to that message. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: tool.server.url > assistant.serverUrl > phoneNumber.serverUrl > org.serverUrl
   */
  serverUrl?: string;
  /**
   * This is the secret you can set that Vapi will send with every request to your server. Will be sent as a header called x-vapi-secret.
   *
   * Same precedence logic as serverUrl.
   */
  serverUrlSecret?: string;
  /** This is the plan for analysis of assistant's calls. Stored in `call.analysis`. */
  analysisPlan?: AnalysisPlan;
  /** This is the plan for artifacts generated during assistant's calls. Stored in `call.artifact`. */
  artifactPlan?: ArtifactPlan;
  /**
   * This is the plan for static messages that can be spoken by the assistant during the call, like `idleMessages`.
   *
   * Note: `firstMessage`, `voicemailMessage`, and `endCallMessage` are currently at the root level. They will be moved to `messagePlan` in the future, but will remain backwards compatible.
   */
  messagePlan?: MessagePlan;
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
  /** These are the options for the assistant's transcriber. */
  transcriber?:
    | DeepgramTranscriber
    | GladiaTranscriber
    | TalkscriberTranscriber;
  /** These are the options for the assistant's LLM. */
  model?:
    | AnyscaleModel
    | AnthropicModel
    | CustomLLMModel
    | DeepInfraModel
    | GroqModel
    | OpenAIModel
    | OpenRouterModel
    | PerplexityAIModel
    | TogetherAIModel;
  /**
   * These are the options for the assistant's voice.
   * @default {"provider":"playht","voiceId":"jennifer"}
   */
  voice?:
    | AzureVoice
    | CartesiaVoice
    | DeepgramVoice
    | ElevenLabsVoice
    | LMNTVoice
    | NeetsVoice
    | OpenAIVoice
    | PlayHTVoice
    | RimeAIVoice;
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
   * This sets whether the assistant's calls are recorded. Defaults to true.
   * @example true
   */
  recordingEnabled?: boolean;
  /**
   * When this is enabled, no logs, recordings, or transcriptions will be stored. At the end of the call, you will still receive an end-of-call-report message to store on your server. Defaults to false.
   * @example false
   */
  hipaaEnabled?: boolean;
  /**
   * These are the messages that will be sent to your Client SDKs. Default is conversation-update,function-call,hang,model-output,speech-update,status-update,transcript,tool-calls,user-interrupted,voice-input. You can check the shape of the messages in ClientMessage schema.
   * @example ["conversation-update","function-call","hang","model-output","speech-update","status-update","transcript","tool-calls","user-interrupted","voice-input"]
   */
  clientMessages?: (
    | 'conversation-update'
    | 'function-call'
    | 'function-call-result'
    | 'hang'
    | 'metadata'
    | 'model-output'
    | 'speech-update'
    | 'status-update'
    | 'transcript'
    | 'tool-calls'
    | 'tool-calls-result'
    | 'user-interrupted'
    | 'voice-input'
  )[];
  /**
   * These are the messages that will be sent to your Server URL. Default is conversation-update,end-of-call-report,function-call,hang,speech-update,status-update,tool-calls,transfer-destination-request,user-interrupted. You can check the shape of the messages in ServerMessage schema.
   * @example ["conversation-update","end-of-call-report","function-call","hang","speech-update","status-update","tool-calls","transfer-destination-request","user-interrupted"]
   */
  serverMessages?: (
    | 'conversation-update'
    | 'end-of-call-report'
    | 'function-call'
    | 'hang'
    | 'model-output'
    | 'phone-call-control'
    | 'speech-update'
    | 'status-update'
    | 'transcript'
    | 'tool-calls'
    | 'transfer-destination-request'
    | 'user-interrupted'
    | 'voice-input'
  )[];
  /**
   * How many seconds of silence to wait before ending the call. Defaults to 30.
   *
   * @default 30
   * @min 10
   * @max 600
   * @example 30
   */
  silenceTimeoutSeconds?: number;
  /**
   * The minimum number of seconds after user speech to wait before the assistant starts speaking. Defaults to 0.4.
   *
   * @default 0.4
   * @min 0
   * @max 5
   * @example 0.4
   */
  responseDelaySeconds?: number;
  /**
   * The minimum number of seconds to wait after transcription (with punctuation) before sending a request to the LLM. Defaults to 0.1.
   *
   * @default 0.1
   * @min 0
   * @max 3
   * @example 0.1
   */
  llmRequestDelaySeconds?: number;
  /**
   * The minimum number of seconds to wait after transcription (without punctuation) before sending a request to the LLM. Defaults to 1.5.
   *
   * @default 1.5
   * @min 0
   * @max 3
   * @example 1.5
   */
  llmRequestNonPunctuatedDelaySeconds?: number;
  /**
   * The number of words to wait for before interrupting the assistant.
   *
   * Words like "stop", "actually", "no", etc. will always interrupt immediately regardless of this value.
   *
   * Words like "okay", "yeah", "right" will never interrupt.
   *
   * When set to 0, it will rely solely on the VAD (Voice Activity Detector) and will not wait for any transcription. Defaults to this (0).
   *
   * @default 0
   * @min 0
   * @max 10
   * @example 0
   */
  numWordsToInterruptAssistant?: number;
  /**
   * This is the maximum number of seconds that the call will last. When the call reaches this duration, it will be ended.
   *
   * @default 1800 (~30 minutes)
   * @min 10
   * @max 3600
   * @example 1800
   */
  maxDurationSeconds?: number;
  /**
   * This is the background sound in the call. Default for phone calls is 'office' and default for web calls is 'off'.
   * @example "office"
   */
  backgroundSound?: 'off' | 'office';
  /**
   * This determines whether the model says 'mhmm', 'ahem' etc. while user is speaking.
   *
   * Default `false` while in beta.
   *
   * @default false
   * @example false
   */
  backchannelingEnabled?: boolean;
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
  /**
   * This is the name of the assistant.
   *
   * This is required when you want to transfer between assistants in a call.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the first message that the assistant will say. This can also be a URL to a containerized audio file (mp3, wav, etc.).
   *
   * If unspecified, assistant will wait for user to speak and use the model to respond once they speak.
   * @maxLength 1000
   */
  firstMessage?: string;
  /**
   * These are the settings to configure or disable voicemail detection. Alternatively, voicemail detection can be configured using the model.tools=[VoicemailTool].
   * This uses Twilio's built-in detection while the VoicemailTool relies on the model to detect if a voicemail was reached.
   * You can use neither of them, one of them, or both of them. By default, Twilio built-in detection is enabled while VoicemailTool is not.
   */
  voicemailDetection?: TwilioVoicemailDetection;
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
  /** This is for metadata you want to store on the assistant. */
  metadata?: object;
  /**
   * This is the URL Vapi will communicate with via HTTP GET and POST Requests. This is used for retrieving context, function calling, and end-of-call reports.
   *
   * All requests will be sent with the call object among other things relevant to that message. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: tool.server.url > assistant.serverUrl > phoneNumber.serverUrl > org.serverUrl
   */
  serverUrl?: string;
  /**
   * This is the secret you can set that Vapi will send with every request to your server. Will be sent as a header called x-vapi-secret.
   *
   * Same precedence logic as serverUrl.
   */
  serverUrlSecret?: string;
  /** This is the plan for analysis of assistant's calls. Stored in `call.analysis`. */
  analysisPlan?: AnalysisPlan;
  /** This is the plan for artifacts generated during assistant's calls. Stored in `call.artifact`. */
  artifactPlan?: ArtifactPlan;
  /**
   * This is the plan for static messages that can be spoken by the assistant during the call, like `idleMessages`.
   *
   * Note: `firstMessage`, `voicemailMessage`, and `endCallMessage` are currently at the root level. They will be moved to `messagePlan` in the future, but will remain backwards compatible.
   */
  messagePlan?: MessagePlan;
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
  fallbackDestination?: NumberTransferDestination | SipTransferDestination;
  /** This is the provider of the phone number. `twilio` here. */
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
   * This is the server URL where messages will be sent for calls on this number. This includes the `assistant-request` message.
   *
   * You can see the shape of the messages sent in `ServerMessage`.
   *
   * This overrides the `org.serverUrl`. Order of precedence: tool.server.url > assistant.serverUrl > phoneNumber.serverUrl > org.serverUrl.
   */
  serverUrl?: string;
  /**
   * This is the secret Vapi will send with every message to your server. It's sent as a header called x-vapi-secret.
   *
   * Same precedence logic as serverUrl.
   */
  serverUrlSecret?: string;
  /**
   * These are the digits of the phone number for PSTN calls.
   *
   * This is not set for SIP numbers. `sipUri` is used instead.
   */
  number: string;
  /**
   * This is the Twilio Account SID for the phone number.
   *
   * This is for numbers not bought on Vapi.
   */
  twilioAccountSid: string;
  /**
   * This is the Twilio Auth Token for the phone number.
   *
   * This is for numbers not bought on Vapi.
   */
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
  fallbackDestination?: NumberTransferDestination | SipTransferDestination;
  /** This is the provider of the phone number. `vonage` here. */
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
   * This is the server URL where messages will be sent for calls on this number. This includes the `assistant-request` message.
   *
   * You can see the shape of the messages sent in `ServerMessage`.
   *
   * This overrides the `org.serverUrl`. Order of precedence: tool.server.url > assistant.serverUrl > phoneNumber.serverUrl > org.serverUrl.
   */
  serverUrl?: string;
  /**
   * This is the secret Vapi will send with every message to your server. It's sent as a header called x-vapi-secret.
   *
   * Same precedence logic as serverUrl.
   */
  serverUrlSecret?: string;
  /**
   * These are the digits of the phone number for PSTN calls.
   *
   * This is not set for SIP numbers. `sipUri` is used instead.
   */
  number: string;
  /** This is the credential that is used to make outgoing calls, and do operations like call transfer and hang up. */
  credentialId: string;
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
  fallbackDestination?: NumberTransferDestination | SipTransferDestination;
  /** This is the provider of the phone number. `vapi` here. */
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
   * This is the server URL where messages will be sent for calls on this number. This includes the `assistant-request` message.
   *
   * You can see the shape of the messages sent in `ServerMessage`.
   *
   * This overrides the `org.serverUrl`. Order of precedence: tool.server.url > assistant.serverUrl > phoneNumber.serverUrl > org.serverUrl.
   */
  serverUrl?: string;
  /**
   * This is the secret Vapi will send with every message to your server. It's sent as a header called x-vapi-secret.
   *
   * Same precedence logic as serverUrl.
   */
  serverUrlSecret?: string;
  /**
   * This is SIP URI of the phone number for SIP calls.
   *
   * This is not set for PSTN numbers. `number` is used instead.
   */
  sipUri: string;
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
  fallbackDestination?: NumberTransferDestination | SipTransferDestination;
  /** This is the provider of the phone number. `twilio` here. */
  provider: 'twilio';
  /**
   * These are the digits of the phone number for PSTN calls.
   *
   * This is not set for SIP numbers. `sipUri` is used instead.
   */
  number: string;
  /**
   * This is the Twilio Account SID for the phone number.
   *
   * This is for numbers not bought on Vapi.
   */
  twilioAccountSid: string;
  /**
   * This is the Twilio Auth Token for the phone number.
   *
   * This is for numbers not bought on Vapi.
   */
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
   * This is the server URL where messages will be sent for calls on this number. This includes the `assistant-request` message.
   *
   * You can see the shape of the messages sent in `ServerMessage`.
   *
   * This overrides the `org.serverUrl`. Order of precedence: tool.server.url > assistant.serverUrl > phoneNumber.serverUrl > org.serverUrl.
   */
  serverUrl?: string;
  /**
   * This is the secret Vapi will send with every message to your server. It's sent as a header called x-vapi-secret.
   *
   * Same precedence logic as serverUrl.
   */
  serverUrlSecret?: string;
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
  fallbackDestination?: NumberTransferDestination | SipTransferDestination;
  /** This is the provider of the phone number. `vonage` here. */
  provider: 'vonage';
  /**
   * These are the digits of the phone number for PSTN calls.
   *
   * This is not set for SIP numbers. `sipUri` is used instead.
   */
  number: string;
  /** This is the credential that is used to make outgoing calls, and do operations like call transfer and hang up. */
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
   * This is the server URL where messages will be sent for calls on this number. This includes the `assistant-request` message.
   *
   * You can see the shape of the messages sent in `ServerMessage`.
   *
   * This overrides the `org.serverUrl`. Order of precedence: tool.server.url > assistant.serverUrl > phoneNumber.serverUrl > org.serverUrl.
   */
  serverUrl?: string;
  /**
   * This is the secret Vapi will send with every message to your server. It's sent as a header called x-vapi-secret.
   *
   * Same precedence logic as serverUrl.
   */
  serverUrlSecret?: string;
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
  fallbackDestination?: NumberTransferDestination | SipTransferDestination;
  /** This is the provider of the phone number. `vapi` here. */
  provider: 'vapi';
  /**
   * This is SIP URI of the phone number for SIP calls.
   *
   * This is not set for PSTN numbers. `number` is used instead.
   */
  sipUri: string;
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
   * This is the server URL where messages will be sent for calls on this number. This includes the `assistant-request` message.
   *
   * You can see the shape of the messages sent in `ServerMessage`.
   *
   * This overrides the `org.serverUrl`. Order of precedence: tool.server.url > assistant.serverUrl > phoneNumber.serverUrl > org.serverUrl.
   */
  serverUrl?: string;
  /**
   * This is the secret Vapi will send with every message to your server. It's sent as a header called x-vapi-secret.
   *
   * Same precedence logic as serverUrl.
   */
  serverUrlSecret?: string;
}

export interface BuyPhoneNumberDTO {
  /**
   * This is the fallback destination an inbound call will be transferred to if:
   * 1. `assistantId` is not set
   * 2. `squadId` is not set
   * 3. and, `assistant-request` message to the `serverUrl` fails
   *
   * If this is not set and above conditions are met, the inbound call is hung up with an error message.
   */
  fallbackDestination?: NumberTransferDestination | SipTransferDestination;
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
   * This is the server URL where messages will be sent for calls on this number. This includes the `assistant-request` message.
   *
   * You can see the shape of the messages sent in `ServerMessage`.
   *
   * This overrides the `org.serverUrl`. Order of precedence: tool.server.url > assistant.serverUrl > phoneNumber.serverUrl > org.serverUrl.
   */
  serverUrl?: string;
  /**
   * This is the secret Vapi will send with every message to your server. It's sent as a header called x-vapi-secret.
   *
   * Same precedence logic as serverUrl.
   */
  serverUrlSecret?: string;
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
  fallbackDestination?: NumberTransferDestination | SipTransferDestination;
  /** These are the digits of the phone number you own on your Vonage. */
  vonagePhoneNumber: string;
  /**
   * This is the credential that is used to make outgoing calls, and do operations like call transfer and hang up.
   *
   * You can add the Vonage Credential in the Provider Credentials page on the dashboard to get the credentialId.
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
   * This is the server URL where messages will be sent for calls on this number. This includes the `assistant-request` message.
   *
   * You can see the shape of the messages sent in `ServerMessage`.
   *
   * This overrides the `org.serverUrl`. Order of precedence: tool.server.url > assistant.serverUrl > phoneNumber.serverUrl > org.serverUrl.
   */
  serverUrl?: string;
  /**
   * This is the secret Vapi will send with every message to your server. It's sent as a header called x-vapi-secret.
   *
   * Same precedence logic as serverUrl.
   */
  serverUrlSecret?: string;
}

export interface UpdatePhoneNumberDTO {
  /**
   * This is the fallback destination an inbound call will be transferred to if:
   * 1. `assistantId` is not set
   * 2. `squadId` is not set
   * 3. and, `assistant-request` message to the `serverUrl` fails
   *
   * If this is not set and above conditions are met, the inbound call is hung up with an error message.
   */
  fallbackDestination?: NumberTransferDestination | SipTransferDestination;
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
   * This is the server URL where messages will be sent for calls on this number. This includes the `assistant-request` message.
   *
   * You can see the shape of the messages sent in `ServerMessage`.
   *
   * This overrides the `org.serverUrl`. Order of precedence: tool.server.url > assistant.serverUrl > phoneNumber.serverUrl > org.serverUrl.
   */
  serverUrl?: string;
  /**
   * This is the secret Vapi will send with every message to your server. It's sent as a header called x-vapi-secret.
   *
   * Same precedence logic as serverUrl.
   */
  serverUrlSecret?: string;
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
  status?: 'indexed' | 'not_indexed';
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
   * @maxLength 100
   */
  name?: string;
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
  messages?: (
    | ToolMessageStart
    | ToolMessageComplete
    | ToolMessageFailed
    | ToolMessageDelayed
  )[];
  /** The type of tool. "dtmf" for DTMF tool. */
  type: 'dtmf';
  /** The unique identifier for the tool library. */
  id: string;
  /** The unique identifier for the organization that this tool library belongs to. */
  orgId: string;
  /**
   * The ISO 8601 date-time string of when the tool library was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * The ISO 8601 date-time string of when the tool library was last updated.
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
  messages?: (
    | ToolMessageStart
    | ToolMessageComplete
    | ToolMessageFailed
    | ToolMessageDelayed
  )[];
  /** The type of tool. "endCall" for End Call tool. */
  type: 'endCall';
  /** The unique identifier for the tool library. */
  id: string;
  /** The unique identifier for the organization that this tool library belongs to. */
  orgId: string;
  /**
   * The ISO 8601 date-time string of when the tool library was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * The ISO 8601 date-time string of when the tool library was last updated.
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
  messages?: (
    | ToolMessageStart
    | ToolMessageComplete
    | ToolMessageFailed
    | ToolMessageDelayed
  )[];
  /** The type of tool. "function" for Function tool. */
  type: 'function';
  /** The unique identifier for the tool library. */
  id: string;
  /** The unique identifier for the organization that this tool library belongs to. */
  orgId: string;
  /**
   * The ISO 8601 date-time string of when the tool library was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * The ISO 8601 date-time string of when the tool library was last updated.
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
  messages?: (
    | ToolMessageStart
    | ToolMessageComplete
    | ToolMessageFailed
    | ToolMessageDelayed
  )[];
  /** The type of tool. "ghl" for GHL tool. */
  type: 'ghl';
  /** The unique identifier for the tool library. */
  id: string;
  /** The unique identifier for the organization that this tool library belongs to. */
  orgId: string;
  /**
   * The ISO 8601 date-time string of when the tool library was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * The ISO 8601 date-time string of when the tool library was last updated.
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
  messages?: (
    | ToolMessageStart
    | ToolMessageComplete
    | ToolMessageFailed
    | ToolMessageDelayed
  )[];
  /** The type of tool. "make" for Make tool. */
  type: 'make';
  /** The unique identifier for the tool library. */
  id: string;
  /** The unique identifier for the organization that this tool library belongs to. */
  orgId: string;
  /**
   * The ISO 8601 date-time string of when the tool library was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * The ISO 8601 date-time string of when the tool library was last updated.
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
  messages?: (
    | ToolMessageStart
    | ToolMessageComplete
    | ToolMessageFailed
    | ToolMessageDelayed
  )[];
  type: 'transferCall';
  /** These are the destinations that the call can be transferred to. If no destinations are provided, server.url will be used to get the transfer destination once the tool is called. */
  destinations?: (
    | AssistantTransferDestination
    | NumberTransferDestination
    | SipTransferDestination
  )[];
  /** The unique identifier for the tool library. */
  id: string;
  /** The unique identifier for the organization that this tool library belongs to. */
  orgId: string;
  /**
   * The ISO 8601 date-time string of when the tool library was created.
   * @format date-time
   */
  createdAt: string;
  /**
   * The ISO 8601 date-time string of when the tool library was last updated.
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

export interface UpdateToolDTO {
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
  messages?: (
    | ToolMessageStart
    | ToolMessageComplete
    | ToolMessageFailed
    | ToolMessageDelayed
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

export interface Metrics {
  orgId: string;
  rangeStart: string;
  rangeEnd: string;
  bill: number;
  billWithinBillingLimit: boolean;
  billDailyBreakdown: object;
  callActive: string;
  callActiveWithinConcurrencyLimit: boolean;
  callMinutes: string;
  callMinutesDailyBreakdown: object;
  callMinutesAverage: string;
  callMinutesAverageDailyBreakdown: object;
  callCount: string;
  callCountDailyBreakdown: object;
}

export interface TimeRange {
  /**
   * This is the time step for aggregations.
   *
   * If not provided, defaults to returning for the entire time range.
   */
  step?:
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
  operation: 'sum' | 'avg' | 'count' | 'min' | 'max';
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
    | 'duration';
  /** This is the alias for column name returned. Defaults to `${operation}${column}`. */
  alias?: string;
}

export interface AnalyticsQuery {
  /** This is the table you want to query. */
  table: 'call';
  /** This is the list of columns you want to group by. */
  groupBy?:
    | 'type'
    | 'assistantId'
    | 'endedReason'
    | 'analysis.successEvaluation';
  /** This is the name of the query. This will be used to identify the query in the response. */
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

export interface AnyscaleCredential {
  provider: 'anyscale';
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

export interface AnthropicCredential {
  provider: 'anthropic';
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

export interface AzureOpenAICredential {
  provider: 'azure-openai';
  region:
    | 'australia'
    | 'canada'
    | 'eastus2'
    | 'eastus'
    | 'france'
    | 'india'
    | 'japan'
    | 'northcentralus'
    | 'norway'
    | 'southcentralus'
    | 'sweden'
    | 'switzerland'
    | 'uk'
    | 'westus'
    | 'westus3';
  /** @example ["gpt-4-0125-preview","gpt-4-0613"] */
  models: (
    | 'gpt-4o-2024-05-13'
    | 'gpt-4-turbo-2024-04-09'
    | 'gpt-4-0125-preview'
    | 'gpt-4-1106-preview'
    | 'gpt-4-0613'
    | 'gpt-35-turbo-0125'
    | 'gpt-35-turbo-1106'
  )[];
  /** This is not returned in the API. */
  openAIKey: string;
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
  openAIEndpoint: string;
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
}

export interface CustomLLMCredential {
  provider: 'custom-llm';
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
}

export interface ElevenLabsCredential {
  provider: '11labs';
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
  accountSid: string;
}

export interface VonageCredential {
  /** This is not returned in the API. */
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
   */
  vonageApplicationId: string;
  apiKey: string;
}

export interface CreateAnyscaleCredentialDTO {
  provider: 'anyscale';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateAnthropicCredentialDTO {
  provider: 'anthropic';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateAzureOpenAICredentialDTO {
  provider: 'azure-openai';
  region:
    | 'australia'
    | 'canada'
    | 'eastus2'
    | 'eastus'
    | 'france'
    | 'india'
    | 'japan'
    | 'northcentralus'
    | 'norway'
    | 'southcentralus'
    | 'sweden'
    | 'switzerland'
    | 'uk'
    | 'westus'
    | 'westus3';
  /** @example ["gpt-4-0125-preview","gpt-4-0613"] */
  models:
    | 'gpt-4o-2024-05-13'
    | 'gpt-4-turbo-2024-04-09'
    | 'gpt-4-0125-preview'
    | 'gpt-4-1106-preview'
    | 'gpt-4-0613'
    | 'gpt-35-turbo-0125'
    | 'gpt-35-turbo-1106';
  /** This is not returned in the API. */
  openAIKey: string;
  openAIEndpoint: string;
}

export interface CreateCartesiaCredentialDTO {
  provider: 'cartesia';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateCustomLLMCredentialDTO {
  provider: 'custom-llm';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateDeepgramCredentialDTO {
  provider: 'deepgram';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateGladiaCredentialDTO {
  provider: 'gladia';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateDeepInfraCredentialDTO {
  provider: 'deepinfra';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateElevenLabsCredentialDTO {
  provider: '11labs';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateGoHighLevelCredentialDTO {
  provider: 'gohighlevel';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateGroqCredentialDTO {
  provider: 'groq';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateLmntCredentialDTO {
  provider: 'lmnt';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateMakeCredentialDTO {
  provider: 'make';
  /** Team ID */
  teamId: string;
  /** Region of your application. For example: eu1, eu2, us1, us2 */
  region: string;
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateOpenAICredentialDTO {
  provider: 'openai';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateOpenRouterCredentialDTO {
  provider: 'openrouter';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreatePerplexityAICredentialDTO {
  provider: 'perplexity-ai';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreatePlayHTCredentialDTO {
  provider: 'playht';
  /** This is not returned in the API. */
  apiKey: string;
  userId: string;
}

export interface CreateRimeAICredentialDTO {
  provider: 'rime-ai';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateRunpodCredentialDTO {
  provider: 'runpod';
  /** This is not returned in the API. */
  apiKey: string;
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
}

export interface CreateTogetherAICredentialDTO {
  provider: 'together-ai';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateTwilioCredentialDTO {
  provider: 'twilio';
  /** This is not returned in the API. */
  authToken: string;
  accountSid: string;
}

export interface CreateVonageCredentialDTO {
  provider: 'vonage';
  /** This is not returned in the API. */
  apiSecret: string;
  apiKey: string;
}

export interface UpdateAnyscaleCredentialDTO {
  provider: 'anyscale';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateAnthropicCredentialDTO {
  provider: 'anthropic';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateAzureOpenAICredentialDTO {
  provider: 'azure-openai';
  region:
    | 'australia'
    | 'canada'
    | 'eastus2'
    | 'eastus'
    | 'france'
    | 'india'
    | 'japan'
    | 'northcentralus'
    | 'norway'
    | 'southcentralus'
    | 'sweden'
    | 'switzerland'
    | 'uk'
    | 'westus'
    | 'westus3';
  /** @example ["gpt-4-0125-preview","gpt-4-0613"] */
  models:
    | 'gpt-4o-2024-05-13'
    | 'gpt-4-turbo-2024-04-09'
    | 'gpt-4-0125-preview'
    | 'gpt-4-1106-preview'
    | 'gpt-4-0613'
    | 'gpt-35-turbo-0125'
    | 'gpt-35-turbo-1106';
  /** This is not returned in the API. */
  openAIKey: string;
  openAIEndpoint: string;
}

export interface UpdateCartesiaCredentialDTO {
  provider: 'cartesia';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateCustomLLMCredentialDTO {
  provider: 'custom-llm';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateDeepInfraCredentialDTO {
  provider: 'deepinfra';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateDeepgramCredentialDTO {
  provider: 'deepgram';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateGladiaCredentialDTO {
  provider: 'gladia';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateElevenLabsCredentialDTO {
  provider: '11labs';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateGoHighLevelCredentialDTO {
  provider: 'gohighlevel';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateGroqCredentialDTO {
  provider: 'groq';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateLmntCredentialDTO {
  provider: 'lmnt';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateMakeCredentialDTO {
  provider: 'make';
  /** Team ID */
  teamId: string;
  /** Region of your application. For example: eu1, eu2, us1, us2 */
  region: string;
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateOpenAICredentialDTO {
  provider: 'openai';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateOpenRouterCredentialDTO {
  provider: 'openrouter';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdatePerplexityAICredentialDTO {
  provider: 'perplexity-ai';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdatePlayHTCredentialDTO {
  provider: 'playht';
  /** This is not returned in the API. */
  apiKey: string;
  userId: string;
}

export interface UpdateRimeAICredentialDTO {
  provider: 'rime-ai';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateRunpodCredentialDTO {
  provider: 'runpod';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateS3CredentialDTO {
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
}

export interface UpdateTogetherAICredentialDTO {
  provider: 'together-ai';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateTwilioCredentialDTO {
  provider: 'twilio';
  /** This is not returned in the API. */
  authToken: string;
  accountSid: string;
}

export interface UpdateVonageCredentialDTO {
  provider: 'vonage';
  /** This is not returned in the API. */
  apiSecret: string;
  apiKey: string;
}

export interface CreateOrgDTO {
  /**
   * When this is enabled, no logs, recordings, or transcriptions will be stored. At the end of the call, you will still receive an end-of-call-report message to store on your server. Defaults to false.
   * When HIPAA is enabled, only OpenAI/Custom LLM or Azure Providers will be available for LLM and Voice respectively.
   * This is due to the compliance requirements of HIPAA. Other providers may not meet these requirements.
   * @example false
   */
  hipaaEnabled?: boolean;
  /**
   * This is the name of the org. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the monthly billing limit for the org. To go beyond $1000/mo, please contact us at support@vapi.ai.
   * @min 0
   * @max 1000
   */
  billingLimit?: number;
  /**
   * This is the URL Vapi will communicate with via HTTP GET and POST Requests. This is used for retrieving context, function calling, and end-of-call reports.
   *
   * All requests will be sent with the call object among other things relevant to that message. You can find more details in the Server URL documentation.
   */
  serverUrl?: string;
  /** This is the secret you can set that Vapi will send with every request to your server. Will be sent as a header called x-vapi-secret. */
  serverUrlSecret?: string;
  /**
   * This is the concurrency limit for the org. This is the maximum number of calls that can be active at any given time. To go beyond 10, please contact us at support@vapi.ai.
   * @min 1
   * @max 10
   */
  concurrencyLimit?: number;
}

export interface Org {
  /**
   * When this is enabled, no logs, recordings, or transcriptions will be stored. At the end of the call, you will still receive an end-of-call-report message to store on your server. Defaults to false.
   * When HIPAA is enabled, only OpenAI/Custom LLM or Azure Providers will be available for LLM and Voice respectively.
   * This is due to the compliance requirements of HIPAA. Other providers may not meet these requirements.
   * @example false
   */
  hipaaEnabled?: boolean;
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
  /**
   * This is the name of the org. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the monthly billing limit for the org. To go beyond $1000/mo, please contact us at support@vapi.ai.
   * @min 0
   * @max 1000
   */
  billingLimit?: number;
  /**
   * This is the URL Vapi will communicate with via HTTP GET and POST Requests. This is used for retrieving context, function calling, and end-of-call reports.
   *
   * All requests will be sent with the call object among other things relevant to that message. You can find more details in the Server URL documentation.
   */
  serverUrl?: string;
  /** This is the secret you can set that Vapi will send with every request to your server. Will be sent as a header called x-vapi-secret. */
  serverUrlSecret?: string;
  /**
   * This is the concurrency limit for the org. This is the maximum number of calls that can be active at any given time. To go beyond 10, please contact us at support@vapi.ai.
   * @min 1
   * @max 10
   */
  concurrencyLimit?: number;
}

export interface UpdateOrgDTO {
  /**
   * When this is enabled, no logs, recordings, or transcriptions will be stored. At the end of the call, you will still receive an end-of-call-report message to store on your server. Defaults to false.
   * When HIPAA is enabled, only OpenAI/Custom LLM or Azure Providers will be available for LLM and Voice respectively.
   * This is due to the compliance requirements of HIPAA. Other providers may not meet these requirements.
   * @example false
   */
  hipaaEnabled?: boolean;
  /**
   * This is the name of the org. This is just for your own reference.
   * @maxLength 40
   */
  name?: string;
  /**
   * This is the monthly billing limit for the org. To go beyond $1000/mo, please contact us at support@vapi.ai.
   * @min 0
   * @max 1000
   */
  billingLimit?: number;
  /**
   * This is the URL Vapi will communicate with via HTTP GET and POST Requests. This is used for retrieving context, function calling, and end-of-call reports.
   *
   * All requests will be sent with the call object among other things relevant to that message. You can find more details in the Server URL documentation.
   */
  serverUrl?: string;
  /** This is the secret you can set that Vapi will send with every request to your server. Will be sent as a header called x-vapi-secret. */
  serverUrlSecret?: string;
  /**
   * This is the concurrency limit for the org. This is the maximum number of calls that can be active at any given time. To go beyond 10, please contact us at support@vapi.ai.
   * @min 1
   * @max 10
   */
  concurrencyLimit?: number;
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
  email: string;
}

export interface VoiceLibraryVoiceResponse {
  voiceId: string;
  name: string;
  publicOwnerId?: string;
  description?: string;
  gender?: string;
  age?: string;
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

export interface VoiceLibrary {
  /** This is the voice provider that will be used. */
  provider?:
    | '11labs'
    | 'azure'
    | 'cartesia'
    | 'deepgram'
    | 'lmnt'
    | 'neets'
    | 'openai'
    | 'playht'
    | 'rime-ai';
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

export interface CloneVoiceDTO {
  /** This is the name of the cloned voice in the provider account. */
  name: string;
  /** This is the description of your cloned voice. */
  description?: string;
  /** Serialized labels dictionary for the voice. */
  labels?: string;
  /** These are the files you want to use to clone your voice. Only Audio files are supported. */
  files: Blob[];
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
    | CreateTransferCallToolDTO;
  providerDetails?:
    | MakeToolProviderDetails
    | GhlToolProviderDetails
    | FunctionToolProviderDetails;
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
    | CreateTransferCallToolDTO;
  providerDetails?:
    | MakeToolProviderDetails
    | GhlToolProviderDetails
    | FunctionToolProviderDetails;
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
    | CreateTransferCallToolDTO;
  providerDetails?:
    | MakeToolProviderDetails
    | GhlToolProviderDetails
    | FunctionToolProviderDetails;
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
   * This determines which assistantIds can be used when creating a call. Defauft is any assistantId.
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

export interface SyncVoiceLibraryDTO {
  /** List of providers you want to sync. */
  providers?: (
    | '11labs'
    | 'azure'
    | 'cartesia'
    | 'deepgram'
    | 'lmnt'
    | 'neets'
    | 'openai'
    | 'playht'
    | 'rime-ai'
  )[];
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
  messages?: (
    | ToolMessageStart
    | ToolMessageComplete
    | ToolMessageFailed
    | ToolMessageDelayed
  )[];
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
  messages?: (
    | ToolMessageStart
    | ToolMessageComplete
    | ToolMessageFailed
    | ToolMessageDelayed
  )[];
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
  messages?: (
    | ToolMessageStart
    | ToolMessageComplete
    | ToolMessageFailed
    | ToolMessageDelayed
  )[];
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
}

export interface FunctionCallMessage {
  /** The role of the function call in the conversation. */
  role: string;
  /** The message content for the function call. */
  message: string;
  /** The name of the function being called. */
  name: string;
  /** The arguments for the function call in JSON format. */
  args: string;
  /** The timestamp when the message was sent. */
  time: number;
  /** The number of seconds from the start of the conversation. */
  secondsFromStart: number;
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

export interface FunctionResultMessage {
  /** The role of the function result in the conversation. */
  role: string;
  /** The name of the function that returned the result. */
  name: string;
  /** The result of the function call in JSON format. */
  result: string;
  /** The timestamp when the message was sent. */
  time: number;
  /** The number of seconds from the start of the conversation. */
  secondsFromStart: number;
}

export interface ClientMessageConversationUpdate {
  /** This is the type of the message. "conversation-update" is sent when an update is committed to the conversation history. */
  type: 'conversation-update';
  /** This is the most up-to-date conversation history at the time the message is sent. */
  messagesOpenAIFormatted: OpenAIMessage[];
}

export interface ClientMessageFunctionCall {
  /**
   * This is the type of the message. "function-call" is sent to call a function.
   * @deprecated
   */
  type: 'function-call';
  /**
   * This is the function call content.
   * @deprecated
   */
  functionCall: object;
}

export interface ClientMessageFunctionCallResult {
  /**
   * This is the type of the message. "function-call-result" is sent to forward the result of a function call to the client.
   * @deprecated
   */
  type: 'function-call-result';
  /** This is the result of the function call. */
  functionCallResult: object;
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
  type: 'transcript';
  /** This is the role for which the transcript is for. */
  role: 'assistant' | 'user';
  /** This is the type of the transcript. */
  transcriptType: 'partial' | 'final';
  /** This is the transcript content. */
  transcript: string;
}

export interface ClientMessageToolCalls {
  /** This is the type of the message. "tool-calls" is sent to call a tool. */
  type?: 'tool-calls';
  /** This is the list of tools calls that the model is requesting along with the original tool configuration. */
  toolWithToolCallList: (
    | FunctionToolWithToolCall
    | GhlToolWithToolCall
    | MakeToolWithToolCall
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

export interface ClientMessageUserInterrupted {
  /** This is the type of the message. "user-interrupted" is sent when the user interrupts the assistant. */
  type: 'user-interrupted';
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
    | ClientMessageConversationUpdate
    | ClientMessageHang
    | ClientMessageMetadata
    | ClientMessageModelOutput
    | ClientMessageSpeechUpdate
    | ClientMessageTranscript
    | ClientMessageToolCalls
    | ClientMessageToolCallsResult
    | ClientMessageUserInterrupted
    | ClientMessageVoiceInput;
}

export interface ServerMessageAssistantRequest {
  /** This is the type of the message. "assistant-request" is sent to fetch assistant configuration for an incoming call. */
  type: 'assistant-request';
  /** The phone number associated with the call. This either directly matches `call.phoneNumber` or is expanded from `call.phoneNumberId`. */
  phoneNumber?: object;
  /** The customer associated with the call. This either directly matches `call.customer` or is expanded from `call.customerId`. */
  customer: object;
  /** This is the main `call` object of the call. */
  call: object;
  /** These are the live artifacts of the call. */
  artifact?: object;
  /** This is the timestamp of the message. */
  timestamp?: string;
}

export interface ServerMessageConversationUpdate {
  /** This is the type of the message. "conversation-update" is sent when an update is committed to the conversation history. */
  type: 'conversation-update';
  /** This is the most up-to-date conversation history at the time the message is sent. */
  messagesOpenAIFormatted: OpenAIMessage[];
  /** The phone number associated with the call. This either directly matches `call.phoneNumber` or is expanded from `call.phoneNumberId`. */
  phoneNumber?: object;
  /** The customer associated with the call. This either directly matches `call.customer` or is expanded from `call.customerId`. */
  customer: object;
  /** This is the main `call` object of the call. */
  call: object;
  /** These are the live artifacts of the call. */
  artifact?: object;
  /** This is the timestamp of the message. */
  timestamp?: string;
}

export interface ServerMessageEndOfCallReport {
  /** This is the type of the message. "end-of-call-report" is sent when the call ends and post-processing is complete. */
  type: 'end-of-call-report';
  /** This is the reason the call ended. */
  endedReason:
    | 'assistant-error'
    | 'assistant-not-found'
    | 'db-error'
    | 'no-server-available'
    | 'pipeline-error-extra-function-failed'
    | 'pipeline-error-first-message-failed'
    | 'pipeline-error-function-filler-failed'
    | 'pipeline-error-function-failed'
    | 'pipeline-error-openai-llm-failed'
    | 'pipeline-error-azure-openai-llm-failed'
    | 'pipeline-error-together-ai-llm-failed'
    | 'pipeline-error-anyscale-llm-failed'
    | 'pipeline-error-openrouter-llm-failed'
    | 'pipeline-error-perplexity-ai-llm-failed'
    | 'pipeline-error-deepinfra-llm-failed'
    | 'pipeline-error-runpod-llm-failed'
    | 'pipeline-error-groq-llm-failed'
    | 'pipeline-error-anthropic-llm-failed'
    | 'pipeline-error-openai-voice-failed'
    | 'pipeline-error-cartesia-voice-failed'
    | 'pipeline-error-deepgram-transcriber-failed'
    | 'pipeline-error-deepgram-voice-failed'
    | 'pipeline-error-gladia-transcriber-failed'
    | 'pipeline-error-eleven-labs-voice-failed'
    | 'pipeline-error-playht-voice-failed'
    | 'pipeline-error-lmnt-voice-failed'
    | 'pipeline-error-azure-voice-failed'
    | 'pipeline-error-rime-ai-voice-failed'
    | 'pipeline-error-neets-voice-failed'
    | 'pipeline-no-available-model'
    | 'server-shutdown'
    | 'twilio-failed-to-connect-call'
    | 'unknown-error'
    | 'vonage-disconnected'
    | 'vonage-failed-to-connect-call'
    | 'phone-call-provider-bypass-enabled-but-no-call-received'
    | 'vapi-error-phone-call-worker-setup-socket-error'
    | 'vapi-error-phone-call-worker-worker-setup-socket-timeout'
    | 'vapi-error-phone-call-worker-could-not-find-call'
    | 'vapi-error-phone-call-worker-call-never-connected'
    | 'vapi-error-web-call-worker-setup-failed'
    | 'assistant-not-invalid'
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
    | 'assistant-forwarded-call'
    | 'assistant-join-timed-out'
    | 'customer-busy'
    | 'customer-ended-call'
    | 'customer-did-not-answer'
    | 'customer-did-not-give-microphone-permission'
    | 'incoming-client-message-say-ended-call'
    | 'exceeded-max-duration'
    | 'manually-canceled'
    | 'phone-call-provider-closed-websocket'
    | 'pipeline-error-custom-llm-llm-failed'
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
    | 'pipeline-error-playht-request-timed-out'
    | 'pipeline-error-playht-invalid-voice'
    | 'pipeline-error-playht-unexpected-error'
    | 'pipeline-error-playht-out-of-credits'
    | 'pipeline-error-playht-rate-limit-exceeded'
    | 'pipeline-error-playht-502-gateway-error'
    | 'pipeline-error-playht-504-gateway-error'
    | 'silence-timed-out'
    | 'voicemail'
    | 'vonage-rejected';
  /** These are the message history of the call. The format is not OpenAI format but a custom VAPI format. */
  messages?: (
    | UserMessage
    | SystemMessage
    | BotMessage
    | FunctionCallMessage
    | ToolCallMessage
    | ToolCallResultMessage
    | FunctionResultMessage
  )[];
  /** This is the URL of the call recording. */
  recordingUrl?: string;
  /** This is the URL of the stereo call recording. */
  stereoRecordingUrl?: string;
  /** The phone number associated with the call. This either directly matches `call.phoneNumber` or is expanded from `call.phoneNumberId`. */
  phoneNumber?: object;
  /** The customer associated with the call. This either directly matches `call.customer` or is expanded from `call.customerId`. */
  customer: object;
  /** This is the main `call` object of the call. */
  call: object;
  /** These are the artifacts from the call. */
  artifact?: Artifact;
  /** This is the timestamp of the message. */
  timestamp?: string;
  /** This is the transcript of the call. */
  transcript: string;
  /** This is the summary of the call. */
  summary: string;
  /** This is the analysis of the call. */
  analysis: Analysis;
}

export interface ServerMessageHang {
  /**
   * This is the type of the message. "hang" is sent when the assistant is hanging due to a delay. The delay can be caused by many factors, such as:
   * - the model is too slow to respond
   * - the voice is too slow to respond
   * - the tool call is still waiting for a response from your server
   * - etc.
   */
  type: 'hang';
  /** The phone number associated with the call. This either directly matches `call.phoneNumber` or is expanded from `call.phoneNumberId`. */
  phoneNumber?: object;
  /** The customer associated with the call. This either directly matches `call.customer` or is expanded from `call.customerId`. */
  customer: object;
  /** This is the main `call` object of the call. */
  call: object;
  /** These are the live artifacts of the call. */
  artifact?: object;
  /** This is the timestamp of the message. */
  timestamp?: string;
}

export interface ServerMessageModelOutput {
  /** This is the type of the message. "model-output" is sent as the model outputs tokens. */
  type: 'model-output';
  /** The phone number associated with the call. This either directly matches `call.phoneNumber` or is expanded from `call.phoneNumberId`. */
  phoneNumber?: object;
  /** The customer associated with the call. This either directly matches `call.customer` or is expanded from `call.customerId`. */
  customer: object;
  /** This is the main `call` object of the call. */
  call: object;
  /** These are the live artifacts of the call. */
  artifact?: object;
  /** This is the timestamp of the message. */
  timestamp?: string;
  /** This is the output of the model. It can be a token or tool call. */
  output: object;
}

export interface ServerMessagePhoneCallControl {
  /**
   * This is the type of the message. "phone-call-control" is an advanced type of message.
   *
   * When it is requested in `assistant.serverMessages`, the hangup and forwarding responsibilities are delegated to your server. Vapi will no longer do the actual transfer and hangup.
   */
  type: 'phone-call-control';
  /** This is the request to control the phone call. */
  request: 'forward' | 'hang-up';
  /** The phone number associated with the call. This either directly matches `call.phoneNumber` or is expanded from `call.phoneNumberId`. */
  phoneNumber?: object;
  /** The customer associated with the call. This either directly matches `call.customer` or is expanded from `call.customerId`. */
  customer: object;
  /** This is the main `call` object of the call. */
  call: object;
  /** These are the live artifacts of the call. */
  artifact?: object;
  /** This is the timestamp of the message. */
  timestamp?: string;
  /** This is the phone number to forward to if the request is "forward". */
  forwardingPhoneNumber?: string;
}

export interface ServerMessageSpeechUpdate {
  /** This is the type of the message. "speech-update" is sent whenever assistant or user start or stop speaking. */
  type: 'speech-update';
  /** This is the status of the speech update. */
  status: 'started' | 'stopped';
  /** This is the role which the speech update is for. */
  role: 'assistant' | 'user';
  /** The phone number associated with the call. This either directly matches `call.phoneNumber` or is expanded from `call.phoneNumberId`. */
  phoneNumber?: object;
  /** The customer associated with the call. This either directly matches `call.customer` or is expanded from `call.customerId`. */
  customer: object;
  /** This is the main `call` object of the call. */
  call: object;
  /** These are the live artifacts of the call. */
  artifact?: object;
  /** This is the timestamp of the message. */
  timestamp?: string;
}

export interface ServerMessageStatusUpdate {
  /** This is the type of the message. "status-update" is sent whenever the `call.status` changes. */
  type: 'status-update';
  /** This is the status of the call. */
  status: 'queued' | 'ringing' | 'in-progress' | 'forwarding' | 'ended';
  /** This is the reason the call ended. This is only sent if the status is "ended". */
  endedReason?:
    | 'assistant-error'
    | 'assistant-not-found'
    | 'db-error'
    | 'no-server-available'
    | 'pipeline-error-extra-function-failed'
    | 'pipeline-error-first-message-failed'
    | 'pipeline-error-function-filler-failed'
    | 'pipeline-error-function-failed'
    | 'pipeline-error-openai-llm-failed'
    | 'pipeline-error-azure-openai-llm-failed'
    | 'pipeline-error-together-ai-llm-failed'
    | 'pipeline-error-anyscale-llm-failed'
    | 'pipeline-error-openrouter-llm-failed'
    | 'pipeline-error-perplexity-ai-llm-failed'
    | 'pipeline-error-deepinfra-llm-failed'
    | 'pipeline-error-runpod-llm-failed'
    | 'pipeline-error-groq-llm-failed'
    | 'pipeline-error-anthropic-llm-failed'
    | 'pipeline-error-openai-voice-failed'
    | 'pipeline-error-cartesia-voice-failed'
    | 'pipeline-error-deepgram-transcriber-failed'
    | 'pipeline-error-deepgram-voice-failed'
    | 'pipeline-error-gladia-transcriber-failed'
    | 'pipeline-error-eleven-labs-voice-failed'
    | 'pipeline-error-playht-voice-failed'
    | 'pipeline-error-lmnt-voice-failed'
    | 'pipeline-error-azure-voice-failed'
    | 'pipeline-error-rime-ai-voice-failed'
    | 'pipeline-error-neets-voice-failed'
    | 'pipeline-no-available-model'
    | 'server-shutdown'
    | 'twilio-failed-to-connect-call'
    | 'unknown-error'
    | 'vonage-disconnected'
    | 'vonage-failed-to-connect-call'
    | 'phone-call-provider-bypass-enabled-but-no-call-received'
    | 'vapi-error-phone-call-worker-setup-socket-error'
    | 'vapi-error-phone-call-worker-worker-setup-socket-timeout'
    | 'vapi-error-phone-call-worker-could-not-find-call'
    | 'vapi-error-phone-call-worker-call-never-connected'
    | 'vapi-error-web-call-worker-setup-failed'
    | 'assistant-not-invalid'
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
    | 'assistant-forwarded-call'
    | 'assistant-join-timed-out'
    | 'customer-busy'
    | 'customer-ended-call'
    | 'customer-did-not-answer'
    | 'customer-did-not-give-microphone-permission'
    | 'incoming-client-message-say-ended-call'
    | 'exceeded-max-duration'
    | 'manually-canceled'
    | 'phone-call-provider-closed-websocket'
    | 'pipeline-error-custom-llm-llm-failed'
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
    | 'pipeline-error-playht-request-timed-out'
    | 'pipeline-error-playht-invalid-voice'
    | 'pipeline-error-playht-unexpected-error'
    | 'pipeline-error-playht-out-of-credits'
    | 'pipeline-error-playht-rate-limit-exceeded'
    | 'pipeline-error-playht-502-gateway-error'
    | 'pipeline-error-playht-504-gateway-error'
    | 'silence-timed-out'
    | 'voicemail'
    | 'vonage-rejected';
  /** These are the conversation messages of the call. This is only sent if the status is "forwarding". */
  messages?: (
    | UserMessage
    | SystemMessage
    | BotMessage
    | FunctionCallMessage
    | ToolCallMessage
    | ToolCallResultMessage
    | FunctionResultMessage
  )[];
  /** These are the conversation messages of the call. This is only sent if the status is "forwarding". */
  messagesOpenAIFormatted?: OpenAIMessage[];
  /** This is the destination the call is being transferred to. This is only sent if the status is "forwarding". */
  destination?: NumberTransferDestination | SipTransferDestination;
  /** The phone number associated with the call. This either directly matches `call.phoneNumber` or is expanded from `call.phoneNumberId`. */
  phoneNumber?: object;
  /** The customer associated with the call. This either directly matches `call.customer` or is expanded from `call.customerId`. */
  customer: object;
  /** This is the main `call` object of the call. */
  call: object;
  /** These are the live artifacts of the call. */
  artifact?: object;
  /** This is the timestamp of the message. */
  timestamp?: string;
  /** This is the transcript of the call. This is only sent if the status is "forwarding". */
  transcript?: string;
  /**
   * This is the inbound phone call debugging artifacts. This is only sent if the status is "ended" and there was an error accepting the inbound phone call.
   *
   * This will include any errors related to the "assistant-request" if one was made.
   */
  inboundPhoneCallDebuggingArtifacts?: object;
}

export interface ServerMessageToolCalls {
  /** This is the type of the message. "tool-calls" is sent to call a tool. */
  type?: 'tool-calls';
  /** This is the list of tools calls that the model is requesting along with the original tool configuration. */
  toolWithToolCallList: (
    | FunctionToolWithToolCall
    | GhlToolWithToolCall
    | MakeToolWithToolCall
  )[];
  /** The phone number associated with the call. This either directly matches `call.phoneNumber` or is expanded from `call.phoneNumberId`. */
  phoneNumber?: object;
  /** The customer associated with the call. This either directly matches `call.customer` or is expanded from `call.customerId`. */
  customer: object;
  /** This is the main `call` object of the call. */
  call: object;
  /** These are the live artifacts of the call. */
  artifact?: object;
  /** This is the timestamp of the message. */
  timestamp?: string;
  /** This is the list of tool calls that the model is requesting. */
  toolCallList: ToolCall[];
}

export interface ServerMessageTransferDestinationRequest {
  /** This is the type of the message. "transfer-destination-request" is sent when the model is requesting transfer but destination is unknown. */
  type: 'transfer-destination-request';
  /** The phone number associated with the call. This either directly matches `call.phoneNumber` or is expanded from `call.phoneNumberId`. */
  phoneNumber?: object;
  /** The customer associated with the call. This either directly matches `call.customer` or is expanded from `call.customerId`. */
  customer: object;
  /** This is the main `call` object of the call. */
  call: object;
  /** These are the live artifacts of the call. */
  artifact?: object;
  /** This is the timestamp of the message. */
  timestamp?: string;
}

export interface ServerMessageTranscript {
  /** This is the type of the message. "transcript" is sent as transcriber outputs partial or final transcript. */
  type: 'transcript';
  /** The phone number associated with the call. This either directly matches `call.phoneNumber` or is expanded from `call.phoneNumberId`. */
  phoneNumber?: object;
  /** The customer associated with the call. This either directly matches `call.customer` or is expanded from `call.customerId`. */
  customer: object;
  /** This is the main `call` object of the call. */
  call: object;
  /** These are the live artifacts of the call. */
  artifact?: object;
  /** This is the timestamp of the message. */
  timestamp?: string;
  /** This is the role for which the transcript is for. */
  role: 'assistant' | 'user';
  /** This is the type of the transcript. */
  transcriptType: 'partial' | 'final';
  /** This is the transcript content. */
  transcript: string;
}

export interface ServerMessageUserInterrupted {
  /** This is the type of the message. "user-interrupted" is sent when the user interrupts the assistant. */
  type: 'user-interrupted';
  /** The phone number associated with the call. This either directly matches `call.phoneNumber` or is expanded from `call.phoneNumberId`. */
  phoneNumber?: object;
  /** The customer associated with the call. This either directly matches `call.customer` or is expanded from `call.customerId`. */
  customer: object;
  /** This is the main `call` object of the call. */
  call: object;
  /** These are the live artifacts of the call. */
  artifact?: object;
  /** This is the timestamp of the message. */
  timestamp?: string;
}

export interface ServerMessageVoiceInput {
  /** This is the type of the message. "voice-input" is sent when a generation is requested from voice provider. */
  type: 'voice-input';
  /** The phone number associated with the call. This either directly matches `call.phoneNumber` or is expanded from `call.phoneNumberId`. */
  phoneNumber?: object;
  /** The customer associated with the call. This either directly matches `call.customer` or is expanded from `call.customerId`. */
  customer: object;
  /** This is the main `call` object of the call. */
  call: object;
  /** These are the live artifacts of the call. */
  artifact?: object;
  /** This is the timestamp of the message. */
  timestamp?: string;
  /** This is the voice input content */
  input: string;
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
    | ServerMessageModelOutput
    | ServerMessagePhoneCallControl
    | ServerMessageSpeechUpdate
    | ServerMessageStatusUpdate
    | ServerMessageToolCalls
    | ServerMessageTransferDestinationRequest
    | ServerMessageTranscript
    | ServerMessageUserInterrupted
    | ServerMessageVoiceInput;
}

export interface ServerMessageResponseAssistantRequest {
  /**
   * This is the destination to transfer the inbound call to. This will immediately transfer without using any assistants.
   *
   * If this is sent, `assistantId`, `assistant`, `squadId`, and `squad` are ignored.
   */
  destination?: NumberTransferDestination | SipTransferDestination;
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
    | AssistantTransferDestination
    | NumberTransferDestination
    | SipTransferDestination;
  /** This is the error message if the transfer should not be made. */
  error?: string;
}

export interface ServerMessageResponse {
  /**
   * This is the response that is expected from the server to the message.
   *
   * Note: Most messages don't expect a response. Only "assistant-request", "tool-calls" and "transfer-destination-request" do.
   */
  messageResponse:
    | ServerMessageResponseAssistantRequest
    | ServerMessageResponseToolCalls
    | ServerMessageResponseTransferDestinationRequest;
}

export interface ClientInboundMessageAddMessage {
  /** This is the type of the message. Send "add-message" message to add a message to the conversation history. */
  type: 'add-message';
  /** This is the message to add to the conversation. */
  message: OpenAIMessage;
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
}

export interface ClientInboundMessage {
  /** These are the messages that can be sent from client-side SDKs to control the call. */
  message:
    | ClientInboundMessageAddMessage
    | ClientInboundMessageControl
    | ClientInboundMessageSay;
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

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
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
  public baseUrl: string = '';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

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
    const keys = Object.keys(query).filter(
      (key) => 'undefined' !== typeof query[key],
    );
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
      input !== null && typeof input !== 'string'
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        if (Array.isArray(property)) {
          property.forEach((item) => {
            formData.append(
              key,
              item instanceof Blob || item instanceof File
                ? item
                : typeof item === 'object' && item !== null
                  ? JSON.stringify(item)
                  : `${item}`,
            );
          });
        } else {
          formData.append(
            key,
            property instanceof Blob || property instanceof File
              ? property
              : typeof property === 'object' && property !== null
                ? JSON.stringify(property)
                : `${property}`,
          );
        }
        return formData;
      }, new FormData()),

    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
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

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
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
          ...(type && type !== ContentType.FormData
            ? { 'Content-Type': type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === 'undefined' || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
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
 * @contact
 *
 * API for building voice assistants
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
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
        /** This will return calls with the specified assistantId. */
        assistantId?: string;
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
    callControllerUpdate: (
      id: string,
      data: UpdateCallDTO,
      params: RequestParams = {},
    ) =>
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
     * @tags Calls, extended
     * @name CallControllerCreatePhoneCall
     * @summary Create Phone Call
     * @request POST:/call/phone
     * @secure
     */
    callControllerCreatePhoneCall: (
      data: CreateOutboundCallDTO,
      params: RequestParams = {},
    ) =>
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
     * @tags Calls, extended
     * @name CallControllerCreateWebCall
     * @summary Create Web Call
     * @request POST:/call/web
     * @secure
     */
    callControllerCreateWebCall: (
      data: CreateWebCallDTO,
      params: RequestParams = {},
    ) =>
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
     * @tags Calls, extended
     * @name CallControllerFindAllPaginated
     * @summary List Calls
     * @request GET:/v2/call
     * @secure
     */
    callControllerFindAllPaginated: (
      query?: {
        /** This will return calls with the specified assistantId. */
        assistantId?: string;
        /**
         * This is the page number to return. Defaults to 1.
         * @min 1
         */
        page?: number;
        /** This is the sort order for pagination. Defaults to 'ASC'. */
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
    assistantControllerCreate: (
      data: CreateAssistantDTO,
      params: RequestParams = {},
    ) =>
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
    assistantControllerUpdate: (
      id: string,
      data: UpdateAssistantDTO,
      params: RequestParams = {},
    ) =>
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
     * @tags Assistants, extended
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
     * No description
     *
     * @tags Phone Numbers, extended
     * @name PhoneNumberControllerBuy
     * @summary Buy Phone Number
     * @request POST:/phone-number/buy
     * @secure
     */
    phoneNumberControllerBuy: (
      data: BuyPhoneNumberDTO,
      params: RequestParams = {},
    ) =>
      this.request<
        | ({
            provider: 'twilio';
          } & TwilioPhoneNumber)
        | ({
            provider: 'vonage';
          } & VonagePhoneNumber)
        | ({
            provider: 'vapi';
          } & VapiPhoneNumber),
        any
      >({
        path: `/phone-number/buy`,
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
     * @tags Phone Numbers, extended
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
            provider: 'twilio';
          } & TwilioPhoneNumber)
        | ({
            provider: 'vonage';
          } & VonagePhoneNumber)
        | ({
            provider: 'vapi';
          } & VapiPhoneNumber),
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
     * @tags Phone Numbers, extended
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
            provider: 'twilio';
          } & TwilioPhoneNumber)
        | ({
            provider: 'vonage';
          } & VonagePhoneNumber)
        | ({
            provider: 'vapi';
          } & VapiPhoneNumber),
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
            provider: 'twilio';
          } & CreateTwilioPhoneNumberDTO)
        | ({
            provider: 'vonage';
          } & CreateVonagePhoneNumberDTO)
        | ({
            provider: 'vapi';
          } & CreateVapiPhoneNumberDTO),
      params: RequestParams = {},
    ) =>
      this.request<
        | ({
            provider: 'twilio';
          } & TwilioPhoneNumber)
        | ({
            provider: 'vonage';
          } & VonagePhoneNumber)
        | ({
            provider: 'vapi';
          } & VapiPhoneNumber),
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
              provider: 'twilio';
            } & TwilioPhoneNumber)
          | ({
              provider: 'vonage';
            } & VonagePhoneNumber)
          | ({
              provider: 'vapi';
            } & VapiPhoneNumber)
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
            provider: 'twilio';
          } & TwilioPhoneNumber)
        | ({
            provider: 'vonage';
          } & VonagePhoneNumber)
        | ({
            provider: 'vapi';
          } & VapiPhoneNumber),
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
      data: UpdatePhoneNumberDTO,
      params: RequestParams = {},
    ) =>
      this.request<
        | ({
            provider: 'twilio';
          } & TwilioPhoneNumber)
        | ({
            provider: 'vonage';
          } & VonagePhoneNumber)
        | ({
            provider: 'vapi';
          } & VapiPhoneNumber),
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
            provider: 'twilio';
          } & TwilioPhoneNumber)
        | ({
            provider: 'vonage';
          } & VonagePhoneNumber)
        | ({
            provider: 'vapi';
          } & VapiPhoneNumber),
        any
      >({
        path: `/phone-number/${id}`,
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
     * @tags Files, extended
     * @name FileControllerCreateDeprecated
     * @summary Upload File
     * @request POST:/file/upload
     * @deprecated
     * @secure
     */
    fileControllerCreateDeprecated: (
      data: CreateFileDTO,
      params: RequestParams = {},
    ) =>
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
    fileControllerUpdate: (
      id: string,
      data: UpdateFileDTO,
      params: RequestParams = {},
    ) =>
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
    squadControllerUpdate: (
      id: string,
      data: UpdateSquadDTO,
      params: RequestParams = {},
    ) =>
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
          } & CreateTransferCallToolDTO),
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
          } & TransferCallTool),
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
          } & TransferCallTool),
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
      data: UpdateToolDTO,
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
          } & TransferCallTool),
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
          } & TransferCallTool),
        any
      >({
        path: `/tool/${id}`,
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
     * @tags Analytics, extended
     * @name MetricsControllerFindAllDeprecated
     * @summary List Billing Metrics
     * @request GET:/metrics
     * @deprecated
     * @secure
     */
    metricsControllerFindAllDeprecated: (
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
     * @name MetricsControllerQuery
     * @summary Create Analytics Queries
     * @request POST:/analytics
     * @secure
     */
    metricsControllerQuery: (
      data: AnalyticsQueryDTO,
      params: RequestParams = {},
    ) =>
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
     * @tags Call Logs, extended
     * @name LoggingControllerGetLogs
     * @summary List Call Logs
     * @request GET:/log
     * @secure
     */
    loggingControllerGetLogs: (
      query: {
        callId: string;
        /**
         * This is the page number to return. Defaults to 1.
         * @min 1
         */
        page?: number;
        /** This is the sort order for pagination. Defaults to 'ASC'. */
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
  };
  credential = {
    /**
     * No description
     *
     * @tags Credentials, extended
     * @name CredentialControllerCreate
     * @summary Create Credential
     * @request POST:/credential
     * @secure
     */
    credentialControllerCreate: (
      data:
        | ({
            provider: '11labs';
          } & CreateElevenLabsCredentialDTO)
        | ({
            provider: 'anthropic';
          } & CreateAnthropicCredentialDTO)
        | ({
            provider: 'anyscale';
          } & CreateAnyscaleCredentialDTO)
        | ({
            provider: 'azure-openai';
          } & CreateAzureOpenAICredentialDTO)
        | ({
            provider: 'cartesia';
          } & CreateCartesiaCredentialDTO)
        | ({
            provider: 'custom-llm';
          } & CreateCustomLLMCredentialDTO)
        | ({
            provider: 'deepgram';
          } & CreateDeepgramCredentialDTO)
        | ({
            provider: 'gladia';
          } & CreateGladiaCredentialDTO)
        | ({
            provider: 'deepinfra';
          } & CreateDeepInfraCredentialDTO)
        | ({
            provider: 'gohighlevel';
          } & CreateGoHighLevelCredentialDTO)
        | ({
            provider: 'groq';
          } & CreateGroqCredentialDTO)
        | ({
            provider: 'lmnt';
          } & CreateLmntCredentialDTO)
        | ({
            provider: 'make';
          } & CreateMakeCredentialDTO)
        | ({
            provider: 'openai';
          } & CreateOpenAICredentialDTO)
        | ({
            provider: 'openrouter';
          } & CreateOpenRouterCredentialDTO)
        | ({
            provider: 'perplexity-ai';
          } & CreatePerplexityAICredentialDTO)
        | ({
            provider: 'playht';
          } & CreatePlayHTCredentialDTO)
        | ({
            provider: 'rime-ai';
          } & CreateRimeAICredentialDTO)
        | ({
            provider: 'runpod';
          } & CreateRunpodCredentialDTO)
        | ({
            provider: 's3';
          } & CreateS3CredentialDTO)
        | ({
            provider: 'together-ai';
          } & CreateTogetherAICredentialDTO)
        | ({
            provider: 'twilio';
          } & CreateTwilioCredentialDTO)
        | ({
            provider: 'vonage';
          } & CreateVonageCredentialDTO),
      params: RequestParams = {},
    ) =>
      this.request<
        | ({
            provider: '11labs';
          } & ElevenLabsCredential)
        | ({
            provider: 'anthropic';
          } & AnthropicCredential)
        | ({
            provider: 'anyscale';
          } & AnyscaleCredential)
        | ({
            provider: 'azure-openai';
          } & AzureOpenAICredential)
        | ({
            provider: 'cartesia';
          } & CartesiaCredential)
        | ({
            provider: 'custom-llm';
          } & CustomLLMCredential)
        | ({
            provider: 'deepgram';
          } & DeepgramCredential)
        | ({
            provider: 'gladia';
          } & GladiaCredential)
        | ({
            provider: 'deepinfra';
          } & DeepInfraCredential)
        | ({
            provider: 'gohighlevel';
          } & GoHighLevelCredential)
        | ({
            provider: 'groq';
          } & GroqCredential)
        | ({
            provider: 'lmnt';
          } & LmntCredential)
        | ({
            provider: 'make';
          } & MakeCredential)
        | ({
            provider: 'openai';
          } & OpenAICredential)
        | ({
            provider: 'openrouter';
          } & OpenRouterCredential)
        | ({
            provider: 'perplexity-ai';
          } & PerplexityAICredential)
        | ({
            provider: 'playht';
          } & PlayHTCredential)
        | ({
            provider: 'rime-ai';
          } & RimeAICredential)
        | ({
            provider: 'runpod';
          } & RunpodCredential)
        | ({
            provider: 's3';
          } & S3Credential)
        | ({
            provider: 'together-ai';
          } & TogetherAICredential)
        | ({
            provider: 'twilio';
          } & TwilioCredential)
        | ({
            provider: 'vonage';
          } & VonageCredential),
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
     * @tags Credentials, extended
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
          | ({
              provider: '11labs';
            } & ElevenLabsCredential)
          | ({
              provider: 'anthropic';
            } & AnthropicCredential)
          | ({
              provider: 'anyscale';
            } & AnyscaleCredential)
          | ({
              provider: 'azure-openai';
            } & AzureOpenAICredential)
          | ({
              provider: 'cartesia';
            } & CartesiaCredential)
          | ({
              provider: 'custom-llm';
            } & CustomLLMCredential)
          | ({
              provider: 'deepgram';
            } & DeepgramCredential)
          | ({
              provider: 'gladia';
            } & GladiaCredential)
          | ({
              provider: 'deepinfra';
            } & DeepInfraCredential)
          | ({
              provider: 'gohighlevel';
            } & GoHighLevelCredential)
          | ({
              provider: 'groq';
            } & GroqCredential)
          | ({
              provider: 'lmnt';
            } & LmntCredential)
          | ({
              provider: 'make';
            } & MakeCredential)
          | ({
              provider: 'openai';
            } & OpenAICredential)
          | ({
              provider: 'openrouter';
            } & OpenRouterCredential)
          | ({
              provider: 'perplexity-ai';
            } & PerplexityAICredential)
          | ({
              provider: 'playht';
            } & PlayHTCredential)
          | ({
              provider: 'rime-ai';
            } & RimeAICredential)
          | ({
              provider: 'runpod';
            } & RunpodCredential)
          | ({
              provider: 's3';
            } & S3Credential)
          | ({
              provider: 'together-ai';
            } & TogetherAICredential)
          | ({
              provider: 'twilio';
            } & TwilioCredential)
          | ({
              provider: 'vonage';
            } & VonageCredential)
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
     * @tags Credentials, extended
     * @name CredentialControllerFindOne
     * @summary Get Credential
     * @request GET:/credential/{id}
     * @secure
     */
    credentialControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<
        | ({
            provider: '11labs';
          } & ElevenLabsCredential)
        | ({
            provider: 'anthropic';
          } & AnthropicCredential)
        | ({
            provider: 'anyscale';
          } & AnyscaleCredential)
        | ({
            provider: 'azure-openai';
          } & AzureOpenAICredential)
        | ({
            provider: 'cartesia';
          } & CartesiaCredential)
        | ({
            provider: 'custom-llm';
          } & CustomLLMCredential)
        | ({
            provider: 'deepgram';
          } & DeepgramCredential)
        | ({
            provider: 'gladia';
          } & GladiaCredential)
        | ({
            provider: 'deepinfra';
          } & DeepInfraCredential)
        | ({
            provider: 'gohighlevel';
          } & GoHighLevelCredential)
        | ({
            provider: 'groq';
          } & GroqCredential)
        | ({
            provider: 'lmnt';
          } & LmntCredential)
        | ({
            provider: 'make';
          } & MakeCredential)
        | ({
            provider: 'openai';
          } & OpenAICredential)
        | ({
            provider: 'openrouter';
          } & OpenRouterCredential)
        | ({
            provider: 'perplexity-ai';
          } & PerplexityAICredential)
        | ({
            provider: 'playht';
          } & PlayHTCredential)
        | ({
            provider: 'rime-ai';
          } & RimeAICredential)
        | ({
            provider: 'runpod';
          } & RunpodCredential)
        | ({
            provider: 's3';
          } & S3Credential)
        | ({
            provider: 'together-ai';
          } & TogetherAICredential)
        | ({
            provider: 'twilio';
          } & TwilioCredential)
        | ({
            provider: 'vonage';
          } & VonageCredential),
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
     * @tags Credentials, extended
     * @name CredentialControllerUpdate
     * @summary Update Credential
     * @request PUT:/credential/{id}
     * @secure
     */
    credentialControllerUpdate: (
      id: string,
      data:
        | ({
            provider: '11labs';
          } & UpdateElevenLabsCredentialDTO)
        | ({
            provider: 'anthropic';
          } & UpdateAnthropicCredentialDTO)
        | ({
            provider: 'anyscale';
          } & UpdateAnyscaleCredentialDTO)
        | ({
            provider: 'azure-openai';
          } & UpdateAzureOpenAICredentialDTO)
        | ({
            provider: 'cartesia';
          } & UpdateCartesiaCredentialDTO)
        | ({
            provider: 'custom-llm';
          } & UpdateCustomLLMCredentialDTO)
        | ({
            provider: 'deepgram';
          } & UpdateDeepgramCredentialDTO)
        | ({
            provider: 'gladia';
          } & UpdateGladiaCredentialDTO)
        | ({
            provider: 'deepinfra';
          } & UpdateDeepInfraCredentialDTO)
        | ({
            provider: 'gohighlevel';
          } & UpdateGoHighLevelCredentialDTO)
        | ({
            provider: 'groq';
          } & UpdateGroqCredentialDTO)
        | ({
            provider: 'lmnt';
          } & UpdateLmntCredentialDTO)
        | ({
            provider: 'make';
          } & UpdateMakeCredentialDTO)
        | ({
            provider: 'openai';
          } & UpdateOpenAICredentialDTO)
        | ({
            provider: 'openrouter';
          } & UpdateOpenRouterCredentialDTO)
        | ({
            provider: 'perplexity-ai';
          } & UpdatePerplexityAICredentialDTO)
        | ({
            provider: 'playht';
          } & UpdatePlayHTCredentialDTO)
        | ({
            provider: 'rime-ai';
          } & UpdateRimeAICredentialDTO)
        | ({
            provider: 'runpod';
          } & UpdateRunpodCredentialDTO)
        | ({
            provider: 's3';
          } & UpdateS3CredentialDTO)
        | ({
            provider: 'together-ai';
          } & UpdateTogetherAICredentialDTO)
        | ({
            provider: 'twilio';
          } & UpdateTwilioCredentialDTO)
        | ({
            provider: 'vonage';
          } & UpdateVonageCredentialDTO),
      params: RequestParams = {},
    ) =>
      this.request<
        | ({
            provider: '11labs';
          } & ElevenLabsCredential)
        | ({
            provider: 'anthropic';
          } & AnthropicCredential)
        | ({
            provider: 'anyscale';
          } & AnyscaleCredential)
        | ({
            provider: 'azure-openai';
          } & AzureOpenAICredential)
        | ({
            provider: 'cartesia';
          } & CartesiaCredential)
        | ({
            provider: 'custom-llm';
          } & CustomLLMCredential)
        | ({
            provider: 'deepgram';
          } & DeepgramCredential)
        | ({
            provider: 'gladia';
          } & GladiaCredential)
        | ({
            provider: 'deepinfra';
          } & DeepInfraCredential)
        | ({
            provider: 'gohighlevel';
          } & GoHighLevelCredential)
        | ({
            provider: 'groq';
          } & GroqCredential)
        | ({
            provider: 'lmnt';
          } & LmntCredential)
        | ({
            provider: 'make';
          } & MakeCredential)
        | ({
            provider: 'openai';
          } & OpenAICredential)
        | ({
            provider: 'openrouter';
          } & OpenRouterCredential)
        | ({
            provider: 'perplexity-ai';
          } & PerplexityAICredential)
        | ({
            provider: 'playht';
          } & PlayHTCredential)
        | ({
            provider: 'rime-ai';
          } & RimeAICredential)
        | ({
            provider: 'runpod';
          } & RunpodCredential)
        | ({
            provider: 's3';
          } & S3Credential)
        | ({
            provider: 'together-ai';
          } & TogetherAICredential)
        | ({
            provider: 'twilio';
          } & TwilioCredential)
        | ({
            provider: 'vonage';
          } & VonageCredential),
        any
      >({
        path: `/credential/${id}`,
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
     * @tags Credentials, extended
     * @name CredentialControllerRemove
     * @summary Delete Credential
     * @request DELETE:/credential/{id}
     * @secure
     */
    credentialControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<
        | ({
            provider: '11labs';
          } & ElevenLabsCredential)
        | ({
            provider: 'anthropic';
          } & AnthropicCredential)
        | ({
            provider: 'anyscale';
          } & AnyscaleCredential)
        | ({
            provider: 'azure-openai';
          } & AzureOpenAICredential)
        | ({
            provider: 'cartesia';
          } & CartesiaCredential)
        | ({
            provider: 'custom-llm';
          } & CustomLLMCredential)
        | ({
            provider: 'deepgram';
          } & DeepgramCredential)
        | ({
            provider: 'gladia';
          } & GladiaCredential)
        | ({
            provider: 'deepinfra';
          } & DeepInfraCredential)
        | ({
            provider: 'gohighlevel';
          } & GoHighLevelCredential)
        | ({
            provider: 'groq';
          } & GroqCredential)
        | ({
            provider: 'lmnt';
          } & LmntCredential)
        | ({
            provider: 'make';
          } & MakeCredential)
        | ({
            provider: 'openai';
          } & OpenAICredential)
        | ({
            provider: 'openrouter';
          } & OpenRouterCredential)
        | ({
            provider: 'perplexity-ai';
          } & PerplexityAICredential)
        | ({
            provider: 'playht';
          } & PlayHTCredential)
        | ({
            provider: 'rime-ai';
          } & RimeAICredential)
        | ({
            provider: 'runpod';
          } & RunpodCredential)
        | ({
            provider: 's3';
          } & S3Credential)
        | ({
            provider: 'together-ai';
          } & TogetherAICredential)
        | ({
            provider: 'twilio';
          } & TwilioCredential)
        | ({
            provider: 'vonage';
          } & VonageCredential),
        any
      >({
        path: `/credential/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  org = {
    /**
     * No description
     *
     * @tags Orgs, extended
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
     * @tags Orgs, extended
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
     * @tags Orgs, extended
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
     * @tags Orgs, extended
     * @name OrgControllerUpdate
     * @summary Update Org
     * @request PATCH:/org/{id}
     * @secure
     */
    orgControllerUpdate: (
      id: string,
      data: UpdateOrgDTO,
      params: RequestParams = {},
    ) =>
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
     * @tags Orgs, extended
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
     * @tags Orgs, extended
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
     * @tags Orgs, extended
     * @name OrgControllerUserInvite
     * @summary Invite User
     * @request POST:/org/{id}/invite
     * @secure
     */
    orgControllerUserInvite: (
      id: string,
      data: InviteUserDTO,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/org/${id}/invite`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  provider = {
    /**
     * No description
     *
     * @tags Providers, extended
     * @name ProviderControllerGetWorkflows
     * @request GET:/{provider}/workflows
     * @secure
     */
    providerControllerGetWorkflows: (
      provider: 'make' | 'ghl',
      query?: {
        locationId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
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
     * @tags Providers, extended
     * @name ProviderControllerGetWorkflowTriggerHook
     * @request GET:/{provider}/workflows/{workflowId}/hooks
     * @secure
     */
    providerControllerGetWorkflowTriggerHook: (
      provider: 'make' | 'ghl',
      workflowId: string,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/${provider}/workflows/${workflowId}/hooks`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Providers, extended
     * @name ProviderControllerGetLocations
     * @request GET:/{provider}/locations
     * @secure
     */
    providerControllerGetLocations: (
      provider: 'make' | 'ghl',
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/${provider}/locations`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Providers, extended, extended
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
     * @tags Providers, extended, extended
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
     * @tags Providers, extended, extended
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
     * @tags Providers, extended, extended
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
     * @tags Providers, extended
     * @name VoiceProviderControllerCloneVoices
     * @summary Clone a voice to the provider account and add to Vapi Voice Library.
     * @request POST:/11labs/voice/clone
     * @secure
     */
    voiceProviderControllerCloneVoices: (
      data: CloneVoiceDTO,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/11labs/voice/clone`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),
  };
  template = {
    /**
     * No description
     *
     * @tags Templates, extended
     * @name TemplateControllerCreate
     * @summary Create Template
     * @request POST:/template
     * @secure
     */
    templateControllerCreate: (
      data: CreateToolTemplateDTO[],
      params: RequestParams = {},
    ) =>
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
     * @tags Templates, extended
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
     * @tags Templates, extended
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
     * @tags Templates, extended
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
     * @tags Templates, extended
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
     * @tags Templates, extended
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
  token = {
    /**
     * No description
     *
     * @tags Tokens, extended
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
     * @tags Tokens, extended
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
     * @tags Tokens, extended
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
     * @tags Tokens, extended
     * @name TokenControllerUpdate
     * @summary Update Token
     * @request PATCH:/token/{id}
     * @secure
     */
    tokenControllerUpdate: (
      id: string,
      data: CreateTokenDTO,
      params: RequestParams = {},
    ) =>
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
     * @tags Tokens, extended
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
  voiceLibrary = {
    /**
     * No description
     *
     * @tags Voice Library, extended
     * @name VoiceLibraryControllerVoiceGetByProvider
     * @summary Get voices in Voice Library by Provider
     * @request GET:/voice-library/{provider}
     * @secure
     */
    voiceLibraryControllerVoiceGetByProvider: (
      provider:
        | '11labs'
        | 'azure'
        | 'cartesia'
        | 'deepgram'
        | 'lmnt'
        | 'neets'
        | 'openai'
        | 'playht'
        | 'rime-ai',
      params: RequestParams = {},
    ) =>
      this.request<VoiceLibrary[], any>({
        path: `/voice-library/${provider}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Voice Library, extended
     * @name VoiceLibraryControllerVoiceLibrarySyncByProvider
     * @summary Sync Private voices in Voice Library by Provider
     * @request POST:/voice-library/sync/{provider}
     * @secure
     */
    voiceLibraryControllerVoiceLibrarySyncByProvider: (
      provider:
        | '11labs'
        | 'azure'
        | 'cartesia'
        | 'deepgram'
        | 'lmnt'
        | 'neets'
        | 'openai'
        | 'playht'
        | 'rime-ai',
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
     * @tags Voice Library, extended, extended
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
}
