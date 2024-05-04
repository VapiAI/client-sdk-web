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

export class CreateWebCallDTO {
  /**
   * This is the assistant that will be used for the call. To use a transient assistant, use `assistant` instead.
   */
  assistantId?: string;

  /**
   * Overrides for the assistant's settings and template variables.
   */
  assistantOverrides?: OverrideAssistantDTO;

  /**
   * This is the assistant that will be used for the call. To use an existing assistant, use `assistantId` instead.
   */
  assistant?: CreateAssistantDTO;

  /**
   * This will expose SIP URI you can use to connect to the call. Disabled by default.
   */
  sipEnabled?: boolean;

  /**
   * This is the metadata associated with the call.
   */
  metadata?: Record<string, any>;
}

export interface DeepgramVoice {
  /**
   * This is the minimum number of characters that will be passed to the voice provider. This helps decides the minimum chunk size that is sent to the voice provider for the voice generation as the LLM tokens are streaming in. Defaults to 10.
   * @min 1
   * @max 80
   * @example 10
   */
  inputMinCharacters?: number;
  /**
   * These are the punctuations that are considered valid boundaries / "delimiters". This helps decides the chunks that are sent to the voice provider for the voice generation as the LLM tokens are streaming in. Defaults to ['。', '，', '.', '!', '?', ';', ')', '،', '۔', '।', '॥', '|', '||', ',', ':'].
   * @example ["。","，",".","!","?",";",")","،","۔","।","॥","|","||",",",":"]
   */
  inputPunctuationBoundaries?:
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

export interface JsonSchema {
  type: 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'object';
  /** This is of type JsonSchema. However, Swagger doesn't support circular references. */
  items?: object;
  /** This is an array of type JsonSchema. However, Swagger doesn't support circular references. */
  prefixItems?: object;
  /** This is of type JsonSchema. However, Swagger doesn't support circular references. */
  contains?: object;
  /** This is a map of string to JsonSchema. However, Swagger doesn't support circular references. */
  properties?: object;
  /** This is a map of string to JsonSchema objects. However, Swagger doesn't support circular references. */
  patternProperties?: object;
  /** This is of type JsonSchema. However, Swagger doesn't support circular references. */
  additionalProperties?: object;
  /** This is a map of string to JsonSchema objects. However, Swagger doesn't support circular references. */
  dependentSchemas?: object;
  /** This is of type JsonSchema. However, Swagger doesn't support circular references. */
  propertyNames?: object;
  /** This is of type JsonSchema. However, Swagger doesn't support circular references. */
  unevaluatedProperties?: object;
  /** This is of type JsonSchema. However, Swagger doesn't support circular references. */
  const?: object;
  /** This is of type JsonSchema. However, Swagger doesn't support circular references. */
  not?: object;
  /** This is an array of type JsonSchema. However, Swagger doesn't support circular references. */
  oneOf?: object;
  /** This is an array of type JsonSchema. However, Swagger doesn't support circular references. */
  anyOf?: object;
  /** This is an array of type JsonSchema. However, Swagger doesn't support circular references. */
  allOf?: object;
  /** This is of type JsonSchema. However, Swagger doesn't support circular references. */
  if?: object;
  /** This is of type JsonSchema. However, Swagger doesn't support circular references. */
  then?: object;
  /** This is of type JsonSchema. However, Swagger doesn't support circular references. */
  else?: object;
  title?: string;
  description?: string;
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: number;
  minimum?: number;
  exclusiveMinimum?: number;
  maxLength?: number;
  /** @min 0 */
  minLength?: number;
  pattern?: string;
  format?: string;
  maxItems?: number;
  /** @min 0 */
  minItems?: number;
  minContains?: number;
  maxContains?: number;
  maxProperties?: number;
  /** @min 0 */
  minProperties?: number;
  required?: object[];
  dependentRequired?: object;
  enum?: object[];
  $id?: string;
  $ref?: string;
  $schema?: string;
  $comment?: string;
  default?: object;
  examples?: object[];
  readOnly?: boolean;
  writeOnly?: boolean;
  contentEncoding?: string;
  contentMediaType?: string;
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
  /** API endpoint to send requests to. */
  url: string;
  /**
   * This is the secret you can set that Vapi will send with every request to your server. Will be sent as a header called x-vapi-secret.
   *
   * Same precedence logic as server.
   */
  secret?: string;
}

export interface FunctionTool {
  type: 'function';
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The function definition details for the function tool. */
  function: OpenAIFunction;
  /**
   * This is the server VAPI will hit this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: tool.server.url > assistant.serverUrl > phoneNumber.serverUrl > org.serverUrl
   */
  server?: Server;
  /** Setting async: true will cause the function to be called asynchronously, meaning that the Assistant will not wait for the function to return before continuing. */
  async?: boolean;
}

export interface TransferDestination {
  message: string;
  destination: string;
  description: string;
}

export interface TransferTool {
  type: 'transferCall';
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /**
   * This is the description of what the function does, used by the AI to choose when and how to call the function.
   * @default "Use this tool to transfer the call. Only use it when following instructions that explicitly ask you to use the transferCall tool. DO NOT call this tool unless you are instructed to do so."
   */
  description?: string;
  destinations?: TransferDestination[];
  /**
   * This is the server VAPI will hit this tool is requested by the model.
   *
   * All requests will be sent with the call object among other things. You can find more details in the Server URL documentation.
   */
  server?: Server;
}

export interface EndCallTool {
  type: 'endCall';
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The function definition details for the function tool. */
  function: OpenAIFunction;
}

export interface DtmfTool {
  type: 'dtmf';
  messages?: (ToolMessageStart | ToolMessageComplete | ToolMessageFailed | ToolMessageDelayed)[];
  /** The function definition details for the function tool. */
  function: OpenAIFunction;
}

export interface Condition {
  param: string;
  value: object;
  operator: 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte';
}

export interface ToolMessageComplete {
  type: 'request-complete';
  content: string;
  conditions?: Condition[];
}

export interface ToolMessageDelayed {
  type: 'request-response-delayed';
  content: string;
  /**
   * The number of milliseconds to wait for the server response before saying this message.
   * @example 1000
   */
  timingMilliseconds?: number;
  conditions?: Condition[];
}

export interface ToolMessageFailed {
  type: 'request-failed';
  content: string;
  conditions?: Condition[];
}

export interface ToolMessageStart {
  type: 'request-start';
  content: string;
  conditions?: Condition[];
}

export interface OpenAIMessage {
  content: string | null;
  role: 'assistant' | 'function' | 'user' | 'system';
  function_call?: object;
  tool_calls?: object[];
}

export interface TogetherAIModel {
  /** This is the starting state for the conversation. */
  messages?: OpenAIMessage[];
  /** These are the tools functions that the assistant can execute during the call. */
  tools?: (TransferTool | FunctionTool | EndCallTool | DtmfTool)[];
  provider: 'together-ai';
  /** The key of the model from the custom provider. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
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
   * @max 1000
   */
  maxTokens?: number;
}

export interface AnyscaleModel {
  /** This is the starting state for the conversation. */
  messages?: OpenAIMessage[];
  /** These are the tools functions that the assistant can execute during the call. */
  tools?: (TransferTool | FunctionTool | EndCallTool | DtmfTool)[];
  provider: 'anyscale';
  /** The key of the model from the custom provider. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
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
   * @max 1000
   */
  maxTokens?: number;
}

export interface OpenRouterModel {
  /** This is the starting state for the conversation. */
  messages?: OpenAIMessage[];
  /** These are the tools functions that the assistant can execute during the call. */
  tools?: (TransferTool | FunctionTool | EndCallTool | DtmfTool)[];
  provider: 'openrouter';
  /** The key of the model from the custom provider. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
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
   * @max 1000
   */
  maxTokens?: number;
}

export interface PerplexityAIModel {
  /** This is the starting state for the conversation. */
  messages?: OpenAIMessage[];
  /** These are the tools functions that the assistant can execute during the call. */
  tools?: (TransferTool | FunctionTool | EndCallTool | DtmfTool)[];
  provider: 'perplexity-ai';
  /** The key of the model from the custom provider. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
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
   * @max 1000
   */
  maxTokens?: number;
}

export interface DeepInfraModel {
  /** This is the starting state for the conversation. */
  messages?: OpenAIMessage[];
  /** These are the tools functions that the assistant can execute during the call. */
  tools?: (TransferTool | FunctionTool | EndCallTool | DtmfTool)[];
  provider: 'deepinfra';
  /** The key of the model from the custom provider. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
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
   * @max 1000
   */
  maxTokens?: number;
}

export interface CustomLLMModel {
  /** This is the starting state for the conversation. */
  messages?: OpenAIMessage[];
  /** These are the tools functions that the assistant can execute during the call. */
  tools?: (TransferTool | FunctionTool | EndCallTool | DtmfTool)[];
  /** This is the provider that will be used for the model. Any service, including your own server, that is compatible with the OpenAI API can be used. */
  provider: 'custom-llm';
  /** These is the URL we'll use for the OpenAI client's `baseURL`. Ex. https://openrouter.ai/api/v1 */
  url: string;
  /** This sets whether the call object is sent in requests to the custom provider. Default is true. */
  urlRequestMetadataEnabled: boolean;
  /** The key of the model from the custom provider. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
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
   * @max 1000
   */
  maxTokens?: number;
}

export interface GroqModel {
  /** This is the starting state for the conversation. */
  messages?: OpenAIMessage[];
  /** These are the tools functions that the assistant can execute during the call. */
  tools?: (TransferTool | FunctionTool | EndCallTool | DtmfTool)[];
  /** The key of the model from the custom provider. Ex. cognitivecomputations/dolphin-mixtral-8x7b */
  model: 'mixtral-8x7b-32768' | 'llama3-8b-8192' | 'llama3-70b-8192';
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
   * @max 1000
   */
  maxTokens?: number;
}

export interface AnthropicModel {
  /** This is the starting state for the conversation. */
  messages?: OpenAIMessage[];
  /** These are the tools functions that the assistant can execute during the call. */
  tools?: (TransferTool | FunctionTool | EndCallTool | DtmfTool)[];
  /** This is the Anthropic/Claude models that will be used. */
  model: 'claude-3-opus-20240229' | 'claude-3-sonnet-20240229' | 'claude-3-haiku-20240307';
  provider: 'anthropic';
  /**
   * This is the temperature that will be used for calls. Default is 0 to leverage caching for lower latency.
   * @min 0
   * @max 2
   */
  temperature?: number;
  /**
   * This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation. Default is 250.
   * @min 50
   * @max 1000
   */
  maxTokens?: number;
}

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
    | 'cs'
    | 'da'
    | 'da-DK'
    | 'de-CH'
    | 'nl'
    | 'en'
    | 'en-US'
    | 'en-AU'
    | 'en-GB'
    | 'en-NZ'
    | 'en-IN'
    | 'nl-BE'
    | 'fr'
    | 'fr-CA'
    | 'de'
    | 'el'
    | 'hi'
    | 'hi-Latn'
    | 'id'
    | 'it'
    | 'ja'
    | 'ko'
    | 'ko-KR'
    | 'no'
    | 'pl'
    | 'pt'
    | 'pt-BR'
    | 'ru'
    | 'es'
    | 'es-419'
    | 'sv'
    | 'sv-SE'
    | 'tr'
    | 'uk'
    | 'zh'
    | 'zh-CN'
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

export interface ElevenLabsVoice {
  /**
   * This is the minimum number of characters that will be passed to the voice provider. This helps decides the minimum chunk size that is sent to the voice provider for the voice generation as the LLM tokens are streaming in. Defaults to 10.
   * @min 1
   * @max 80
   * @example 10
   */
  inputMinCharacters?: number;
  /**
   * These are the punctuations that are considered valid boundaries / "delimiters". This helps decides the chunks that are sent to the voice provider for the voice generation as the LLM tokens are streaming in. Defaults to ['。', '，', '.', '!', '?', ';', ')', '،', '۔', '।', '॥', '|', '||', ',', ':'].
   * @example ["。","，",".","!","?",";",")","،","۔","।","॥","|","||",",",":"]
   */
  inputPunctuationBoundaries?:
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
   * Defines the optimize streaming latency for voice settings.
   * @min 0
   * @max 4
   * @example 4
   */
  optimizeStreamingLatency?: number;
  /**
   * This is the model that will be used. Defaults to 'eleven_multilingual_v2' if transcriber.language is non-English, otherwise 'eleven_turbo_v2'.
   * @example "eleven_turbo_v2"
   */
  model?: 'eleven_multilingual_v2' | 'eleven_turbo_v2' | 'eleven_monolingual_v1';
}

export interface OpenAIModel {
  /** This is the starting state for the conversation. */
  messages?: OpenAIMessage[];
  /** These are the tools functions that the assistant can execute during the call. */
  tools?: (TransferTool | FunctionTool | EndCallTool | DtmfTool)[];
  /** This is the provider that will be used for the model. */
  provider: 'openai';
  /** This is the OpenAI model that will be used. */
  model:
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
  /**
   * This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation. Default is 250.
   * @min 50
   * @max 1000
   */
  maxTokens?: number;
}

export interface PlayHTVoice {
  /**
   * This is the minimum number of characters that will be passed to the voice provider. This helps decides the minimum chunk size that is sent to the voice provider for the voice generation as the LLM tokens are streaming in. Defaults to 10.
   * @min 1
   * @max 80
   * @example 10
   */
  inputMinCharacters?: number;
  /**
   * These are the punctuations that are considered valid boundaries / "delimiters". This helps decides the chunks that are sent to the voice provider for the voice generation as the LLM tokens are streaming in. Defaults to ['。', '，', '.', '!', '?', ';', ')', '،', '۔', '।', '॥', '|', '||', ',', ':'].
   * @example ["。","，",".","!","?",";",")","،","۔","।","॥","|","||",",",":"]
   */
  inputPunctuationBoundaries?:
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
   * This is the minimum number of characters that will be passed to the voice provider. This helps decides the minimum chunk size that is sent to the voice provider for the voice generation as the LLM tokens are streaming in. Defaults to 10.
   * @min 1
   * @max 80
   * @example 10
   */
  inputMinCharacters?: number;
  /**
   * These are the punctuations that are considered valid boundaries / "delimiters". This helps decides the chunks that are sent to the voice provider for the voice generation as the LLM tokens are streaming in. Defaults to ['。', '，', '.', '!', '?', ';', ')', '،', '۔', '।', '॥', '|', '||', ',', ':'].
   * @example ["。","，",".","!","?",";",")","،","۔","।","॥","|","||",",",":"]
   */
  inputPunctuationBoundaries?:
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
    | string;
  /**
   * @min 0.1
   * @example null
   */
  speed?: number;
}

export interface OpenAIVoice {
  /**
   * This is the minimum number of characters that will be passed to the voice provider. This helps decides the minimum chunk size that is sent to the voice provider for the voice generation as the LLM tokens are streaming in. Defaults to 10.
   * @min 1
   * @max 80
   * @example 10
   */
  inputMinCharacters?: number;
  /**
   * These are the punctuations that are considered valid boundaries / "delimiters". This helps decides the chunks that are sent to the voice provider for the voice generation as the LLM tokens are streaming in. Defaults to ['。', '，', '.', '!', '?', ';', ')', '،', '۔', '।', '॥', '|', '||', ',', ':'].
   * @example ["。","，",".","!","?",";",")","،","۔","।","॥","|","||",",",":"]
   */
  inputPunctuationBoundaries?:
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

export interface AzureVoice {
  /**
   * This is the minimum number of characters that will be passed to the voice provider. This helps decides the minimum chunk size that is sent to the voice provider for the voice generation as the LLM tokens are streaming in. Defaults to 10.
   * @min 1
   * @max 80
   * @example 10
   */
  inputMinCharacters?: number;
  /**
   * These are the punctuations that are considered valid boundaries / "delimiters". This helps decides the chunks that are sent to the voice provider for the voice generation as the LLM tokens are streaming in. Defaults to ['。', '，', '.', '!', '?', ';', ')', '،', '۔', '।', '॥', '|', '||', ',', ':'].
   * @example ["。","，",".","!","?",";",")","،","۔","।","॥","|","||",",",":"]
   */
  inputPunctuationBoundaries?:
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

export interface LMNTVoice {
  /**
   * This is the minimum number of characters that will be passed to the voice provider. This helps decides the minimum chunk size that is sent to the voice provider for the voice generation as the LLM tokens are streaming in. Defaults to 10.
   * @min 1
   * @max 80
   * @example 10
   */
  inputMinCharacters?: number;
  /**
   * These are the punctuations that are considered valid boundaries / "delimiters". This helps decides the chunks that are sent to the voice provider for the voice generation as the LLM tokens are streaming in. Defaults to ['。', '，', '.', '!', '?', ';', ')', '،', '۔', '।', '॥', '|', '||', ',', ':'].
   * @example ["。","，",".","!","?",";",")","،","۔","।","॥","|","||",",",":"]
   */
  inputPunctuationBoundaries?:
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
   * This is the minimum number of characters that will be passed to the voice provider. This helps decides the minimum chunk size that is sent to the voice provider for the voice generation as the LLM tokens are streaming in. Defaults to 10.
   * @min 1
   * @max 80
   * @example 10
   */
  inputMinCharacters?: number;
  /**
   * These are the punctuations that are considered valid boundaries / "delimiters". This helps decides the chunks that are sent to the voice provider for the voice generation as the LLM tokens are streaming in. Defaults to ['。', '，', '.', '!', '?', ';', ')', '،', '۔', '।', '॥', '|', '||', ',', ':'].
   * @example ["。","，",".","!","?",";",")","،","۔","।","॥","|","||",",",":"]
   */
  inputPunctuationBoundaries?:
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
  /** This is the voice provider that will be used. */
  provider: 'neets';
  /** This is the provider-specific ID that will be used. */
  voiceId: 'lily' | 'daniel' | string;
}

export interface ForwardingPhoneNumber {
  /** This is the number to forward to. Pass one of `number` or `sipUri`. */
  number?: string;
  /** This is the SIP URI to forward to. Pass one of `number` or `sipUri`. */
  sipUri?: string;
  /** This is the message that the assistant will say when the call is forwarded to this number. */
  message?: string;
}

export interface CreateAssistantDTO {
  /** These are the options for the assistant's transcriber. */
  transcriber?: DeepgramTranscriber | TalkscriberTranscriber;
  /** These are the options for the assistant's LLM. */
  model?:
    | OpenAIModel
    | TogetherAIModel
    | AnyscaleModel
    | OpenRouterModel
    | PerplexityAIModel
    | DeepInfraModel
    | GroqModel
    | AnthropicModel
    | CustomLLMModel;
  /**
   * These are the options for the assistant's voice.
   * @default {"provider":"playht","voiceId":"jennifer"}
   */
  voice?:
    | AzureVoice
    | ElevenLabsVoice
    | PlayHTVoice
    | RimeAIVoice
    | DeepgramVoice
    | OpenAIVoice
    | LMNTVoice
    | NeetsVoice;
  /**
   * This is the number to forward to if assistant runs into issues.
   * @example null
   */
  forwardingPhoneNumber?: string;
  /**
   * This is the mode for the first message. Default is 'assistant-speaks-first'.
   *
   * Specify 'assistant-waits-for-user' to have the assistant wait for the user to speak first.
   * @example "assistant-speaks-first"
   */
  firstMessageMode?: 'assistant-speaks-first' | 'assistant-waits-for-user';
  /**
   * These are the AMD messages from Twilio that are considered as voicemail. Default is ['machine_end_beep', 'machine_end_silence', 'machine_end_other'].
   * @example ["machine_end_beep","machine_end_silence","machine_end_other"]
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
   * This sets whether the assistant's calls are recorded. Defaults to true.
   * @example true
   */
  recordingEnabled?: boolean;
  /**
   * This sets whether the assistant will be able to hang up the call. Defaults to false.
   * @example false
   */
  endCallFunctionEnabled?: boolean;
  /**
   * This sets whether the assistant can dial digits on the keypad. Defaults to false.
   * @default null
   */
  dialKeypadFunctionEnabled?: boolean;
  /**
   * When this is enabled, no logs, recordings, or transcriptions will be stored. At the end of the call, you will still receive an end-of-call-report message to store on your server. Defaults to false.
   * @example false
   */
  hipaaEnabled?: boolean;
  /**
   * These are the messages that will be sent to the Client SDKs. Default is ['transcript', 'hang', 'tool-calls', 'speech-update', 'metadata', 'conversation-update']
   * @example ["transcript","hang","tool-calls","speech-update","metadata","conversation-update"]
   */
  clientMessages?: (
    | 'status-update'
    | 'speech-update'
    | 'transcript'
    | 'hang'
    | 'function-call'
    | 'tool-calls'
    | 'metadata'
    | 'conversation-update'
    | 'model-output'
    | 'voice-input'
  )[];
  /**
   * These are the messages that will be sent to your Server URL. Default is ['end-of-call-report', 'status-update', 'hang', 'tool-calls']
   * @example ["end-of-call-report","status-update","hang","tool-calls"]
   */
  serverMessages?: (
    | 'status-update'
    | 'transcript'
    | 'hang'
    | 'function-call'
    | 'tool-calls'
    | 'end-of-call-report'
    | 'conversation-update'
    | 'phone-call-control'
    | 'model-output'
    | 'voice-input'
  )[];
  /**
   * How many seconds of silence to wait before ending the call. Defaults to 30.
   * @min 10
   * @max 600
   * @example 30
   */
  silenceTimeoutSeconds?: number;
  /**
   * The minimum number of seconds after user speech to wait before the assistant starts speaking. Defaults to 0.4.
   * @min 0
   * @max 5
   * @example 0.4
   */
  responseDelaySeconds?: number;
  /**
   * The minimum number of seconds to wait after punctuation before sending a request to the LLM. Defaults to 0.1.
   * @min 0
   * @max 3
   * @example 0.1
   */
  llmRequestDelaySeconds?: number;
  /**
   * The number of words to wait for before interrupting the assistant. Words like "stop", "actually", "no", etc. will always interrupt immediately regardless of this value. Words like "okay", "yeah", "right" will never interrupt. Defaults to 1.
   * @min 1
   * @max 10
   * @example 1
   */
  numWordsToInterruptAssistant?: number;
  /**
   * This is the maximum number of seconds that the call will last. When the call reaches this duration, it will be ended.
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
   * backchanneling is the bot say while listening like 'mhmm', 'ahem' etc. this make the conversation sounds natural. Default True
   * @example true
   */
  backchannelingEnabled?: boolean;
  /**
   * This is the name of the assistant. This is just for your own reference.
   * @maxLength 100
   */
  name?: string;
  /** You can provide a set of phone numbers to forward to. You'll want to tell the assistant when to use each of these numbers in the system prompt. */
  forwardingPhoneNumbers?: ForwardingPhoneNumber[];
  /**
   * This is the first message that the assistant will say. This can also be a URL to a containerized audio file (mp3, wav, etc.).
   *
   * If unspecified, assistant will wait for user to speak and use the model to respond once they speak.
   * @maxLength 1000
   */
  firstMessage?: string;
  /** This sets whether the assistant should detect voicemail. Defaults to true. */
  voicemailDetectionEnabled?: boolean;
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
  /** This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up. Case insensitive. */
  endCallPhrases?: string[];
  /** This is the metadata associated with the call. */
  metadata?: object;
  /**
   * This is the URL Vapi will communicate with via HTTP GET and POST Requests. This is used for retrieving context, function calling, and end-of-call reports.
   *
   * All requests will be sent with the call object among other things relevant to that message. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: function.serverUrl > assistant.serverUrl > phoneNumber.serverUrl > org.serverUrl
   */
  serverUrl?: string;
  /**
   * This is the secret you can set that Vapi will send with every request to your server. Will be sent as a header called x-vapi-secret.
   *
   * Same precendence logic as serverUrl.
   */
  serverUrlSecret?: string;
  /**
   * This is the prompt that's used to summarize the call at the end.
   *
   * Default is 'You are an expert note-taker. You will be given a transcript of a conversation. Please summarize the conversation in 4-5 sentences if applicable.'
   *
   * Set to '' or 'off' to disable post-call summarization.
   * @maxLength 2000
   */
  summaryPrompt?: string;
}

export interface Assistant {
  /** These are the options for the assistant's transcriber. */
  transcriber?: DeepgramTranscriber | TalkscriberTranscriber;
  /** These are the options for the assistant's LLM. */
  model?:
    | OpenAIModel
    | TogetherAIModel
    | AnyscaleModel
    | OpenRouterModel
    | PerplexityAIModel
    | DeepInfraModel
    | GroqModel
    | AnthropicModel
    | CustomLLMModel;
  /**
   * These are the options for the assistant's voice.
   * @default {"provider":"playht","voiceId":"jennifer"}
   */
  voice?:
    | AzureVoice
    | ElevenLabsVoice
    | PlayHTVoice
    | RimeAIVoice
    | DeepgramVoice
    | OpenAIVoice
    | LMNTVoice
    | NeetsVoice;
  /**
   * This is the number to forward to if assistant runs into issues.
   * @example null
   */
  forwardingPhoneNumber?: string;
  /**
   * This is the mode for the first message. Default is 'assistant-speaks-first'.
   *
   * Specify 'assistant-waits-for-user' to have the assistant wait for the user to speak first.
   * @example "assistant-speaks-first"
   */
  firstMessageMode?: 'assistant-speaks-first' | 'assistant-waits-for-user';
  /**
   * These are the AMD messages from Twilio that are considered as voicemail. Default is ['machine_end_beep', 'machine_end_silence', 'machine_end_other'].
   * @example ["machine_end_beep","machine_end_silence","machine_end_other"]
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
   * This sets whether the assistant's calls are recorded. Defaults to true.
   * @example true
   */
  recordingEnabled?: boolean;
  /**
   * This sets whether the assistant will be able to hang up the call. Defaults to false.
   * @example false
   */
  endCallFunctionEnabled?: boolean;
  /**
   * This sets whether the assistant can dial digits on the keypad. Defaults to false.
   * @default null
   */
  dialKeypadFunctionEnabled?: boolean;
  /**
   * When this is enabled, no logs, recordings, or transcriptions will be stored. At the end of the call, you will still receive an end-of-call-report message to store on your server. Defaults to false.
   * @example false
   */
  hipaaEnabled?: boolean;
  /**
   * These are the messages that will be sent to the Client SDKs. Default is ['transcript', 'hang', 'tool-calls', 'speech-update', 'metadata', 'conversation-update']
   * @example ["transcript","hang","tool-calls","speech-update","metadata","conversation-update"]
   */
  clientMessages?: (
    | 'status-update'
    | 'speech-update'
    | 'transcript'
    | 'hang'
    | 'function-call'
    | 'tool-calls'
    | 'metadata'
    | 'conversation-update'
    | 'model-output'
    | 'voice-input'
  )[];
  /**
   * These are the messages that will be sent to your Server URL. Default is ['end-of-call-report', 'status-update', 'hang', 'tool-calls']
   * @example ["end-of-call-report","status-update","hang","tool-calls"]
   */
  serverMessages?: (
    | 'status-update'
    | 'transcript'
    | 'hang'
    | 'function-call'
    | 'tool-calls'
    | 'end-of-call-report'
    | 'conversation-update'
    | 'phone-call-control'
    | 'model-output'
    | 'voice-input'
  )[];
  /**
   * How many seconds of silence to wait before ending the call. Defaults to 30.
   * @min 10
   * @max 600
   * @example 30
   */
  silenceTimeoutSeconds?: number;
  /**
   * The minimum number of seconds after user speech to wait before the assistant starts speaking. Defaults to 0.4.
   * @min 0
   * @max 5
   * @example 0.4
   */
  responseDelaySeconds?: number;
  /**
   * The minimum number of seconds to wait after punctuation before sending a request to the LLM. Defaults to 0.1.
   * @min 0
   * @max 3
   * @example 0.1
   */
  llmRequestDelaySeconds?: number;
  /**
   * The number of words to wait for before interrupting the assistant. Words like "stop", "actually", "no", etc. will always interrupt immediately regardless of this value. Words like "okay", "yeah", "right" will never interrupt. Defaults to 1.
   * @min 1
   * @max 10
   * @example 1
   */
  numWordsToInterruptAssistant?: number;
  /**
   * This is the maximum number of seconds that the call will last. When the call reaches this duration, it will be ended.
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
   * backchanneling is the bot say while listening like 'mhmm', 'ahem' etc. this make the conversation sounds natural. Default True
   * @example true
   */
  backchannelingEnabled?: boolean;
  /**
   * This is the name of the assistant. This is just for your own reference.
   * @maxLength 100
   */
  name?: string;
  /** You can provide a set of phone numbers to forward to. You'll want to tell the assistant when to use each of these numbers in the system prompt. */
  forwardingPhoneNumbers?: ForwardingPhoneNumber[];
  /**
   * This is the first message that the assistant will say. This can also be a URL to a containerized audio file (mp3, wav, etc.).
   *
   * If unspecified, assistant will wait for user to speak and use the model to respond once they speak.
   * @maxLength 1000
   */
  firstMessage?: string;
  /** This sets whether the assistant should detect voicemail. Defaults to true. */
  voicemailDetectionEnabled?: boolean;
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
  /** This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up. Case insensitive. */
  endCallPhrases?: string[];
  /** This is the metadata associated with the call. */
  metadata?: object;
  /**
   * This is the URL Vapi will communicate with via HTTP GET and POST Requests. This is used for retrieving context, function calling, and end-of-call reports.
   *
   * All requests will be sent with the call object among other things relevant to that message. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: function.serverUrl > assistant.serverUrl > phoneNumber.serverUrl > org.serverUrl
   */
  serverUrl?: string;
  /**
   * This is the secret you can set that Vapi will send with every request to your server. Will be sent as a header called x-vapi-secret.
   *
   * Same precendence logic as serverUrl.
   */
  serverUrlSecret?: string;
  /**
   * This is the prompt that's used to summarize the call at the end.
   *
   * Default is 'You are an expert note-taker. You will be given a transcript of a conversation. Please summarize the conversation in 4-5 sentences if applicable.'
   *
   * Set to '' or 'off' to disable post-call summarization.
   * @maxLength 2000
   */
  summaryPrompt?: string;
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
  transcriber?: DeepgramTranscriber | TalkscriberTranscriber;
  /** These are the options for the assistant's LLM. */
  model?:
    | OpenAIModel
    | TogetherAIModel
    | AnyscaleModel
    | OpenRouterModel
    | PerplexityAIModel
    | DeepInfraModel
    | GroqModel
    | AnthropicModel
    | CustomLLMModel;
  /**
   * These are the options for the assistant's voice.
   * @default {"provider":"playht","voiceId":"jennifer"}
   */
  voice?:
    | AzureVoice
    | ElevenLabsVoice
    | PlayHTVoice
    | RimeAIVoice
    | DeepgramVoice
    | OpenAIVoice
    | LMNTVoice
    | NeetsVoice;
  /**
   * This is the number to forward to if assistant runs into issues.
   * @example null
   */
  forwardingPhoneNumber?: string;
  /**
   * This is the mode for the first message. Default is 'assistant-speaks-first'.
   *
   * Specify 'assistant-waits-for-user' to have the assistant wait for the user to speak first.
   * @example "assistant-speaks-first"
   */
  firstMessageMode?: 'assistant-speaks-first' | 'assistant-waits-for-user';
  /**
   * These are the AMD messages from Twilio that are considered as voicemail. Default is ['machine_end_beep', 'machine_end_silence', 'machine_end_other'].
   * @example ["machine_end_beep","machine_end_silence","machine_end_other"]
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
   * This sets whether the assistant's calls are recorded. Defaults to true.
   * @example true
   */
  recordingEnabled?: boolean;
  /**
   * This sets whether the assistant will be able to hang up the call. Defaults to false.
   * @example false
   */
  endCallFunctionEnabled?: boolean;
  /**
   * This sets whether the assistant can dial digits on the keypad. Defaults to false.
   * @default null
   */
  dialKeypadFunctionEnabled?: boolean;
  /**
   * When this is enabled, no logs, recordings, or transcriptions will be stored. At the end of the call, you will still receive an end-of-call-report message to store on your server. Defaults to false.
   * @example false
   */
  hipaaEnabled?: boolean;
  /**
   * These are the messages that will be sent to the Client SDKs. Default is ['transcript', 'hang', 'tool-calls', 'speech-update', 'metadata', 'conversation-update']
   * @example ["transcript","hang","tool-calls","speech-update","metadata","conversation-update"]
   */
  clientMessages?: (
    | 'status-update'
    | 'speech-update'
    | 'transcript'
    | 'hang'
    | 'function-call'
    | 'tool-calls'
    | 'metadata'
    | 'conversation-update'
    | 'model-output'
    | 'voice-input'
  )[];
  /**
   * These are the messages that will be sent to your Server URL. Default is ['end-of-call-report', 'status-update', 'hang', 'tool-calls']
   * @example ["end-of-call-report","status-update","hang","tool-calls"]
   */
  serverMessages?: (
    | 'status-update'
    | 'transcript'
    | 'hang'
    | 'function-call'
    | 'tool-calls'
    | 'end-of-call-report'
    | 'conversation-update'
    | 'phone-call-control'
    | 'model-output'
    | 'voice-input'
  )[];
  /**
   * How many seconds of silence to wait before ending the call. Defaults to 30.
   * @min 10
   * @max 600
   * @example 30
   */
  silenceTimeoutSeconds?: number;
  /**
   * The minimum number of seconds after user speech to wait before the assistant starts speaking. Defaults to 0.4.
   * @min 0
   * @max 5
   * @example 0.4
   */
  responseDelaySeconds?: number;
  /**
   * The minimum number of seconds to wait after punctuation before sending a request to the LLM. Defaults to 0.1.
   * @min 0
   * @max 3
   * @example 0.1
   */
  llmRequestDelaySeconds?: number;
  /**
   * The number of words to wait for before interrupting the assistant. Words like "stop", "actually", "no", etc. will always interrupt immediately regardless of this value. Words like "okay", "yeah", "right" will never interrupt. Defaults to 1.
   * @min 1
   * @max 10
   * @example 1
   */
  numWordsToInterruptAssistant?: number;
  /**
   * This is the maximum number of seconds that the call will last. When the call reaches this duration, it will be ended.
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
   * backchanneling is the bot say while listening like 'mhmm', 'ahem' etc. this make the conversation sounds natural. Default True
   * @example true
   */
  backchannelingEnabled?: boolean;
  /**
   * This is the name of the assistant. This is just for your own reference.
   * @maxLength 100
   */
  name?: string;
  /** You can provide a set of phone numbers to forward to. You'll want to tell the assistant when to use each of these numbers in the system prompt. */
  forwardingPhoneNumbers?: ForwardingPhoneNumber[];
  /**
   * This is the first message that the assistant will say. This can also be a URL to a containerized audio file (mp3, wav, etc.).
   *
   * If unspecified, assistant will wait for user to speak and use the model to respond once they speak.
   * @maxLength 1000
   */
  firstMessage?: string;
  /** This sets whether the assistant should detect voicemail. Defaults to true. */
  voicemailDetectionEnabled?: boolean;
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
  /** This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up. Case insensitive. */
  endCallPhrases?: string[];
  /** This is the metadata associated with the call. */
  metadata?: object;
  /**
   * This is the URL Vapi will communicate with via HTTP GET and POST Requests. This is used for retrieving context, function calling, and end-of-call reports.
   *
   * All requests will be sent with the call object among other things relevant to that message. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: function.serverUrl > assistant.serverUrl > phoneNumber.serverUrl > org.serverUrl
   */
  serverUrl?: string;
  /**
   * This is the secret you can set that Vapi will send with every request to your server. Will be sent as a header called x-vapi-secret.
   *
   * Same precendence logic as serverUrl.
   */
  serverUrlSecret?: string;
  /**
   * This is the prompt that's used to summarize the call at the end.
   *
   * Default is 'You are an expert note-taker. You will be given a transcript of a conversation. Please summarize the conversation in 4-5 sentences if applicable.'
   *
   * Set to '' or 'off' to disable post-call summarization.
   * @maxLength 2000
   */
  summaryPrompt?: string;
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
}

export interface PhoneCallTwilioDetails {
  statusCallbackEvent?: 'initiated' | 'ringing' | 'answered' | 'completed';
  machineDetection?: 'Enable' | 'DetectMessageEnd';
  to: string;
  from: string;
  twiml?: string;
  statusCallback?: string;
  asyncAmd?: string;
  asyncAmdStatusCallback?: string;
  record?: boolean;
}

export interface OverrideAssistantDTO {
  /** These are the options for the assistant's transcriber. */
  transcriber?: DeepgramTranscriber | TalkscriberTranscriber;
  /** These are the options for the assistant's LLM. */
  model?:
    | OpenAIModel
    | TogetherAIModel
    | AnyscaleModel
    | OpenRouterModel
    | PerplexityAIModel
    | DeepInfraModel
    | GroqModel
    | AnthropicModel
    | CustomLLMModel;
  /**
   * These are the options for the assistant's voice.
   * @default {"provider":"playht","voiceId":"jennifer"}
   */
  voice?:
    | AzureVoice
    | ElevenLabsVoice
    | PlayHTVoice
    | RimeAIVoice
    | DeepgramVoice
    | OpenAIVoice
    | LMNTVoice
    | NeetsVoice;
  /**
   * This is the number to forward to if assistant runs into issues.
   * @example null
   */
  forwardingPhoneNumber?: string;
  /**
   * This is the mode for the first message. Default is 'assistant-speaks-first'.
   *
   * Specify 'assistant-waits-for-user' to have the assistant wait for the user to speak first.
   * @example "assistant-speaks-first"
   */
  firstMessageMode?: 'assistant-speaks-first' | 'assistant-waits-for-user';
  /**
   * These are the AMD messages from Twilio that are considered as voicemail. Default is ['machine_end_beep', 'machine_end_silence', 'machine_end_other'].
   * @example ["machine_end_beep","machine_end_silence","machine_end_other"]
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
   * This sets whether the assistant's calls are recorded. Defaults to true.
   * @example true
   */
  recordingEnabled?: boolean;
  /**
   * This sets whether the assistant will be able to hang up the call. Defaults to false.
   * @example false
   */
  endCallFunctionEnabled?: boolean;
  /**
   * This sets whether the assistant can dial digits on the keypad. Defaults to false.
   * @default null
   */
  dialKeypadFunctionEnabled?: boolean;
  /**
   * When this is enabled, no logs, recordings, or transcriptions will be stored. At the end of the call, you will still receive an end-of-call-report message to store on your server. Defaults to false.
   * @example false
   */
  hipaaEnabled?: boolean;
  /**
   * These are the messages that will be sent to the Client SDKs. Default is ['transcript', 'hang', 'tool-calls', 'speech-update', 'metadata', 'conversation-update']
   * @example ["transcript","hang","tool-calls","speech-update","metadata","conversation-update"]
   */
  clientMessages?: (
    | 'status-update'
    | 'speech-update'
    | 'transcript'
    | 'hang'
    | 'function-call'
    | 'tool-calls'
    | 'metadata'
    | 'conversation-update'
    | 'model-output'
    | 'voice-input'
  )[];
  /**
   * These are the messages that will be sent to your Server URL. Default is ['end-of-call-report', 'status-update', 'hang', 'tool-calls']
   * @example ["end-of-call-report","status-update","hang","tool-calls"]
   */
  serverMessages?: (
    | 'status-update'
    | 'transcript'
    | 'hang'
    | 'function-call'
    | 'tool-calls'
    | 'end-of-call-report'
    | 'conversation-update'
    | 'phone-call-control'
    | 'model-output'
    | 'voice-input'
  )[];
  /**
   * How many seconds of silence to wait before ending the call. Defaults to 30.
   * @min 10
   * @max 600
   * @example 30
   */
  silenceTimeoutSeconds?: number;
  /**
   * The minimum number of seconds after user speech to wait before the assistant starts speaking. Defaults to 0.4.
   * @min 0
   * @max 5
   * @example 0.4
   */
  responseDelaySeconds?: number;
  /**
   * The minimum number of seconds to wait after punctuation before sending a request to the LLM. Defaults to 0.1.
   * @min 0
   * @max 3
   * @example 0.1
   */
  llmRequestDelaySeconds?: number;
  /**
   * The number of words to wait for before interrupting the assistant. Words like "stop", "actually", "no", etc. will always interrupt immediately regardless of this value. Words like "okay", "yeah", "right" will never interrupt. Defaults to 1.
   * @min 1
   * @max 10
   * @example 1
   */
  numWordsToInterruptAssistant?: number;
  /**
   * This is the maximum number of seconds that the call will last. When the call reaches this duration, it will be ended.
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
   * backchanneling is the bot say while listening like 'mhmm', 'ahem' etc. this make the conversation sounds natural. Default True
   * @example true
   */
  backchannelingEnabled?: boolean;
  /** These are template variables that will be replaced in the assistant messages and prompts. */
  variableValues?: object;
  /**
   * This is the name of the assistant. This is just for your own reference.
   * @maxLength 100
   */
  name?: string;
  /** You can provide a set of phone numbers to forward to. You'll want to tell the assistant when to use each of these numbers in the system prompt. */
  forwardingPhoneNumbers?: ForwardingPhoneNumber[];
  /**
   * This is the first message that the assistant will say. This can also be a URL to a containerized audio file (mp3, wav, etc.).
   *
   * If unspecified, assistant will wait for user to speak and use the model to respond once they speak.
   * @maxLength 1000
   */
  firstMessage?: string;
  /** This sets whether the assistant should detect voicemail. Defaults to true. */
  voicemailDetectionEnabled?: boolean;
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
  /** This list contains phrases that, if spoken by the assistant, will trigger the call to be hung up. Case insensitive. */
  endCallPhrases?: string[];
  /** This is the metadata associated with the call. */
  metadata?: object;
  /**
   * This is the URL Vapi will communicate with via HTTP GET and POST Requests. This is used for retrieving context, function calling, and end-of-call reports.
   *
   * All requests will be sent with the call object among other things relevant to that message. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org and the phoneNumber. Order of precedence: function.serverUrl > assistant.serverUrl > phoneNumber.serverUrl > org.serverUrl
   */
  serverUrl?: string;
  /**
   * This is the secret you can set that Vapi will send with every request to your server. Will be sent as a header called x-vapi-secret.
   *
   * Same precendence logic as serverUrl.
   */
  serverUrlSecret?: string;
  /**
   * This is the prompt that's used to summarize the call at the end.
   *
   * Default is 'You are an expert note-taker. You will be given a transcript of a conversation. Please summarize the conversation in 4-5 sentences if applicable.'
   *
   * Set to '' or 'off' to disable post-call summarization.
   * @maxLength 2000
   */
  summaryPrompt?: string;
}

export interface CreateCustomerDTO {
  /** This is the number of the customer. */
  number?: string;
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
  assistantId?: string | null;
  /**
   * This is the server URL that will be used to handle this phone number.
   *
   * All requests will be sent with the call object among other things relevant to that message. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org. Order of precedence: function.serverUrl > assistant.serverUrl > phoneNumber.serverUrl > org.serverUrl.
   */
  serverUrl?: string;
  /**
   * This is the secret you can set that Vapi will send with every request to your server. Will be sent as a header called x-vapi-secret.
   *
   * Same precendence logic as serverUrl.
   */
  serverUrlSecret?: string;
}

export interface Call {
  /** This is the type of call. */
  type?: 'inboundPhoneCall' | 'outboundPhoneCall' | 'webCall';
  /**
   * This is the provider of the call.
   *
   * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` type.
   */
  phoneCallProvider?: 'twilio' | 'vonage';
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
    | 'pipeline-error-deepgram-transcriber-failed'
    | 'pipeline-error-deepgram-voice-failed'
    | 'pipeline-error-eleven-labs-voice-failed'
    | 'pipeline-error-eleven-labs-voice-not-found'
    | 'pipeline-error-eleven-labs-quota-exceeded'
    | 'pipeline-error-playht-voice-failed'
    | 'pipeline-error-lmnt-voice-failed'
    | 'pipeline-error-azure-voice-failed'
    | 'pipeline-error-rime-ai-voice-failed'
    | 'pipeline-error-neets-voice-failed'
    | 'pipeline-no-available-llm-model'
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
    | 'assistant-request-returned-error'
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
    | 'exceeded-max-duration'
    | 'manually-canceled'
    | 'phone-call-provider-closed-websocket'
    | 'pipeline-error-custom-llm-llm-failed'
    | 'silence-timed-out'
    | 'voicemail'
    | 'vonage-rejected';
  /**
   * This is the maximum number of seconds that the call will last. When the call reaches this duration, it will be ended.
   * @min 10
   * @max 3600
   * @example 1800
   */
  maxDurationSeconds?: number;
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
  /** This is the summary of the call. */
  summary?: string;
  /** These are the messages that were spoken during the call. */
  messages?: object[];
  /**
   * The ID of the call as provided by the phone number service. callSid in Twilio. conversationUuid in Vonage.
   *
   * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` type.
   */
  phoneCallProviderId?: string;
  /**
   * If enabled, prevents Vapi from initiating calls directly. Defaults to disabled.
   * Suitable for external call handling, such as with Twilio Studio Flow, with integration details provided in `phoneCallProviderDetails`.
   *
   * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` types.
   */
  phoneCallProviderBypassEnabled?: boolean;
  /**
   * This is the phone call provider details to bridge the assistant into the external call. Only filled if `phoneCallProviderBypassEnabled` is true.
   *
   * Only relevant for `outboundPhoneCall` and `inboundPhoneCall` types.
   */
  phoneCallProviderDetails?: PhoneCallTwilioDetails;
  webCallUrl?: string;
  /**
   * This is the SIP URI of the call that the assistant will join.
   *
   * Only relevant for `webCall` type.
   */
  webCallSipUri?: string;
  /** This is the phone number that the call was forwarded to. */
  forwardedPhoneNumber?: string;
  /** This is the assistant that will be used for the call. To use a transient assistant, use `assistant` instead. */
  assistantId?: string | null;
  /** Overrides for the assistant's settings and template variables. */
  assistantOverrides?: OverrideAssistantDTO;
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
  /** This is the metadata associated with the call. */
  metadata?: object;
}

export interface CreateOutboundCallDTO {
  /**
   * This is the maximum number of seconds that the call will last. When the call reaches this duration, it will be ended.
   * @min 10
   * @max 3600
   * @example 1800
   */
  maxDurationSeconds?: number;
  /** This is the assistant that will be used for the call. To use a transient assistant, use `assistant` instead. */
  assistantId?: string | null;
  /** Overrides for the assistant's settings and template variables. */
  assistantOverrides?: OverrideAssistantDTO;
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
  /** This is the metadata associated with the call. */
  metadata?: object;
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

export interface VonageCredential {
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
  /**
   * This is the Vonage Application Private Key for the credential.
   *
   * Only relevant for Vonage credentials.
   */
  vonageApplicationPrivateKey: string;
  apiKey: string;
}

export interface CreateTwilioCredentialDTO {
  provider: 'twilio';
  /** This is not returned in the API. */
  authToken: string;
  accountSid: string;
}

export interface CreateDeepgramCredentialDTO {
  provider: 'deepgram';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateOpenAICredentialDTO {
  provider: 'openai';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateTogetherAICredentialDTO {
  provider: 'together-ai';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateAnyscaleCredentialDTO {
  provider: 'anyscale';
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

export interface CreateDeepInfraCredentialDTO {
  provider: 'deepinfra';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateCustomLLMCredentialDTO {
  provider: 'custom-llm';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateElevenLabsCredentialDTO {
  provider: '11labs';
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

export interface CreateGroqCredentialDTO {
  provider: 'groq';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateAnthropicCredentialDTO {
  provider: 'anthropic';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface CreateVonageCredentialDTO {
  provider: 'vonage';
  /** This is not returned in the API. */
  apiSecret: string;
  apiKey: string;
}

export interface UpdateTwilioCredentialDTO {
  provider: 'twilio';
  /** This is not returned in the API. */
  authToken: string;
  accountSid: string;
}

export interface UpdateDeepgramCredentialDTO {
  provider: 'deepgram';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateOpenAICredentialDTO {
  provider: 'openai';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateTogetherAICredentialDTO {
  provider: 'together-ai';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateAnyscaleCredentialDTO {
  provider: 'anyscale';
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

export interface UpdateDeepInfraCredentialDTO {
  provider: 'deepinfra';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateCustomLLMCredentialDTO {
  provider: 'custom-llm';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateElevenLabsCredentialDTO {
  provider: '11labs';
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

export interface UpdateGroqCredentialDTO {
  provider: 'groq';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateAnthropicCredentialDTO {
  provider: 'anthropic';
  /** This is not returned in the API. */
  apiKey: string;
}

export interface UpdateVonageCredentialDTO {
  provider: 'vonage';
  /** This is not returned in the API. */
  apiSecret: string;
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
  assistantId?: string | null;
  /**
   * This is the server URL that will be used to handle this phone number.
   *
   * All requests will be sent with the call object among other things relevant to that message. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org. Order of precedence: function.serverUrl > assistant.serverUrl > phoneNumber.serverUrl > org.serverUrl.
   */
  serverUrl?: string;
  /**
   * This is the secret you can set that Vapi will send with every request to your server. Will be sent as a header called x-vapi-secret.
   *
   * Same precendence logic as serverUrl.
   */
  serverUrlSecret?: string;
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
   * This is the credential that will be used to handle this phone number.
   *
   * This is for numbers not bought on Vapi.
   */
  credentialId?: string;
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
  assistantId?: string | null;
  /**
   * This is the server URL that will be used to handle this phone number.
   *
   * All requests will be sent with the call object among other things relevant to that message. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org. Order of precedence: function.serverUrl > assistant.serverUrl > phoneNumber.serverUrl > org.serverUrl.
   */
  serverUrl?: string;
  /**
   * This is the secret you can set that Vapi will send with every request to your server. Will be sent as a header called x-vapi-secret.
   *
   * Same precendence logic as serverUrl.
   */
  serverUrlSecret?: string;
}

export interface ImportVonagePhoneNumberDTO {
  /** These are the digits of the phone number you own on your Vonage. */
  vonagePhoneNumber: string;
  /**
   * This is the credential that will be used to handle this phone number.
   *
   * You can add the Vonage credentials in the Provider Keys page on the dashboard to get the credentialId.
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
   * If this is not set, then the phone number will not handle incoming calls.
   */
  assistantId?: string | null;
  /**
   * This is the server URL that will be used to handle this phone number.
   *
   * All requests will be sent with the call object among other things relevant to that message. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org. Order of precedence: function.serverUrl > assistant.serverUrl > phoneNumber.serverUrl > org.serverUrl.
   */
  serverUrl?: string;
  /**
   * This is the secret you can set that Vapi will send with every request to your server. Will be sent as a header called x-vapi-secret.
   *
   * Same precendence logic as serverUrl.
   */
  serverUrlSecret?: string;
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
  assistantId?: string | null;
  /**
   * This is the server URL that will be used to handle this phone number.
   *
   * All requests will be sent with the call object among other things relevant to that message. You can find more details in the Server URL documentation.
   *
   * This overrides the serverUrl set on the org. Order of precedence: function.serverUrl > assistant.serverUrl > phoneNumber.serverUrl > org.serverUrl.
   */
  serverUrl?: string;
  /**
   * This is the secret you can set that Vapi will send with every request to your server. Will be sent as a header called x-vapi-secret.
   *
   * Same precendence logic as serverUrl.
   */
  serverUrlSecret?: string;
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

export interface VoiceLibrary {
  /** This is the voice provider that will be used. */
  provider?: '11labs' | 'playht' | 'rime-ai' | 'deepgram' | 'openai' | 'azure' | 'lmnt' | 'neets';
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
  /** The credential ID of the voice. */
  credentialId?: string;
  /** The deletion status of the voice. */
  isDeleted: boolean;
  /** The unique identifier for the voice library. */
  id: string;
  /** The unique identifier for the organization that this voice library belongs to. */
  orgId: string;
  /** The Public voice is shared accross all the organizations. */
  isPublic: boolean;
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

export interface PaginationMeta {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
}

export interface CallLogsPaginatedResponse {
  results: CallLogPrivileged[];
  metadata: PaginationMeta;
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
     * @name CallControllerCreatePhoneCall
     * @summary Create Phone Call
     * @request POST:/call/phone
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
            provider: 'twilio';
          } & CreateTwilioCredentialDTO)
        | ({
            provider: 'deepgram';
          } & CreateDeepgramCredentialDTO)
        | ({
            provider: 'openai';
          } & CreateOpenAICredentialDTO)
        | ({
            provider: 'together-ai';
          } & CreateTogetherAICredentialDTO)
        | ({
            provider: 'anyscale';
          } & CreateAnyscaleCredentialDTO)
        | ({
            provider: 'openrouter';
          } & CreateOpenRouterCredentialDTO)
        | ({
            provider: 'perplexity-ai';
          } & CreatePerplexityAICredentialDTO)
        | ({
            provider: 'deepinfra';
          } & CreateDeepInfraCredentialDTO)
        | ({
            provider: 'custom-llm';
          } & CreateCustomLLMCredentialDTO)
        | ({
            provider: '11labs';
          } & CreateElevenLabsCredentialDTO)
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
            provider: 'groq';
          } & CreateGroqCredentialDTO)
        | ({
            provider: 'anthropic';
          } & CreateAnthropicCredentialDTO)
        | ({
            provider: 'vonage';
          } & CreateVonageCredentialDTO),
      params: RequestParams = {},
    ) =>
      this.request<
        | ({
            provider: 'twilio';
          } & TwilioCredential)
        | ({
            provider: 'deepgram';
          } & DeepgramCredential)
        | ({
            provider: 'openai';
          } & OpenAICredential)
        | ({
            provider: 'together-ai';
          } & TogetherAICredential)
        | ({
            provider: 'anyscale';
          } & AnyscaleCredential)
        | ({
            provider: 'openrouter';
          } & OpenRouterCredential)
        | ({
            provider: 'perplexity-ai';
          } & PerplexityAICredential)
        | ({
            provider: 'deepinfra';
          } & DeepInfraCredential)
        | ({
            provider: 'custom-llm';
          } & CustomLLMCredential)
        | ({
            provider: '11labs';
          } & ElevenLabsCredential)
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
            provider: 'groq';
          } & GroqCredential)
        | ({
            provider: 'anthropic';
          } & AnthropicCredential)
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
          | ({
              provider: 'twilio';
            } & TwilioCredential)
          | ({
              provider: 'deepgram';
            } & DeepgramCredential)
          | ({
              provider: 'openai';
            } & OpenAICredential)
          | ({
              provider: 'together-ai';
            } & TogetherAICredential)
          | ({
              provider: 'anyscale';
            } & AnyscaleCredential)
          | ({
              provider: 'openrouter';
            } & OpenRouterCredential)
          | ({
              provider: 'perplexity-ai';
            } & PerplexityAICredential)
          | ({
              provider: 'deepinfra';
            } & DeepInfraCredential)
          | ({
              provider: 'custom-llm';
            } & CustomLLMCredential)
          | ({
              provider: '11labs';
            } & ElevenLabsCredential)
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
              provider: 'groq';
            } & GroqCredential)
          | ({
              provider: 'anthropic';
            } & AnthropicCredential)
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
     * @tags Credentials
     * @name CredentialControllerFindOne
     * @summary Get Credential
     * @request GET:/credential/{id}
     * @secure
     */
    credentialControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<
        | ({
            provider: 'twilio';
          } & TwilioCredential)
        | ({
            provider: 'deepgram';
          } & DeepgramCredential)
        | ({
            provider: 'openai';
          } & OpenAICredential)
        | ({
            provider: 'together-ai';
          } & TogetherAICredential)
        | ({
            provider: 'anyscale';
          } & AnyscaleCredential)
        | ({
            provider: 'openrouter';
          } & OpenRouterCredential)
        | ({
            provider: 'perplexity-ai';
          } & PerplexityAICredential)
        | ({
            provider: 'deepinfra';
          } & DeepInfraCredential)
        | ({
            provider: 'custom-llm';
          } & CustomLLMCredential)
        | ({
            provider: '11labs';
          } & ElevenLabsCredential)
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
            provider: 'groq';
          } & GroqCredential)
        | ({
            provider: 'anthropic';
          } & AnthropicCredential)
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
            provider: 'twilio';
          } & UpdateTwilioCredentialDTO)
        | ({
            provider: 'deepgram';
          } & UpdateDeepgramCredentialDTO)
        | ({
            provider: 'openai';
          } & UpdateOpenAICredentialDTO)
        | ({
            provider: 'together-ai';
          } & UpdateTogetherAICredentialDTO)
        | ({
            provider: 'anyscale';
          } & UpdateAnyscaleCredentialDTO)
        | ({
            provider: 'openrouter';
          } & UpdateOpenRouterCredentialDTO)
        | ({
            provider: 'perplexity-ai';
          } & UpdatePerplexityAICredentialDTO)
        | ({
            provider: 'deepinfra';
          } & UpdateDeepInfraCredentialDTO)
        | ({
            provider: 'custom-llm';
          } & UpdateCustomLLMCredentialDTO)
        | ({
            provider: '11labs';
          } & UpdateElevenLabsCredentialDTO)
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
            provider: 'groq';
          } & UpdateGroqCredentialDTO)
        | ({
            provider: 'anthropic';
          } & UpdateAnthropicCredentialDTO)
        | ({
            provider: 'vonage';
          } & UpdateVonageCredentialDTO),
      params: RequestParams = {},
    ) =>
      this.request<
        | ({
            provider: 'twilio';
          } & TwilioCredential)
        | ({
            provider: 'deepgram';
          } & DeepgramCredential)
        | ({
            provider: 'openai';
          } & OpenAICredential)
        | ({
            provider: 'together-ai';
          } & TogetherAICredential)
        | ({
            provider: 'anyscale';
          } & AnyscaleCredential)
        | ({
            provider: 'openrouter';
          } & OpenRouterCredential)
        | ({
            provider: 'perplexity-ai';
          } & PerplexityAICredential)
        | ({
            provider: 'deepinfra';
          } & DeepInfraCredential)
        | ({
            provider: 'custom-llm';
          } & CustomLLMCredential)
        | ({
            provider: '11labs';
          } & ElevenLabsCredential)
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
            provider: 'groq';
          } & GroqCredential)
        | ({
            provider: 'anthropic';
          } & AnthropicCredential)
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
     * @tags Credentials
     * @name CredentialControllerRemove
     * @summary Delete Credential
     * @request DELETE:/credential/{id}
     * @secure
     */
    credentialControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<
        | ({
            provider: 'twilio';
          } & TwilioCredential)
        | ({
            provider: 'deepgram';
          } & DeepgramCredential)
        | ({
            provider: 'openai';
          } & OpenAICredential)
        | ({
            provider: 'together-ai';
          } & TogetherAICredential)
        | ({
            provider: 'anyscale';
          } & AnyscaleCredential)
        | ({
            provider: 'openrouter';
          } & OpenRouterCredential)
        | ({
            provider: 'perplexity-ai';
          } & PerplexityAICredential)
        | ({
            provider: 'deepinfra';
          } & DeepInfraCredential)
        | ({
            provider: 'custom-llm';
          } & CustomLLMCredential)
        | ({
            provider: '11labs';
          } & ElevenLabsCredential)
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
            provider: 'groq';
          } & GroqCredential)
        | ({
            provider: 'anthropic';
          } & AnthropicCredential)
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
     * @name PhoneNumberControllerImportTwilio
     * @summary Import Twilio Number
     * @request POST:/phone-number/import/twilio
     * @secure
     */
    phoneNumberControllerImportTwilio: (
      data: ImportTwilioPhoneNumberDTO,
      params: RequestParams = {},
    ) =>
      this.request<PhoneNumber, any>({
        path: `/phone-number/import/twilio`,
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
     * @name PhoneNumberControllerImportVonage
     * @summary Import Vonage Number
     * @request POST:/phone-number/import/vonage
     * @secure
     */
    phoneNumberControllerImportVonage: (
      data: ImportVonagePhoneNumberDTO,
      params: RequestParams = {},
    ) =>
      this.request<PhoneNumber, any>({
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
      this.request<PhoneNumber[], any>({
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
      this.request<PhoneNumber, any>({
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
      this.request<PhoneNumber, any>({
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
      this.request<PhoneNumber, any>({
        path: `/phone-number/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  metrics = {
    /**
     * No description
     *
     * @tags Metrics
     * @name MetricsControllerFindAll
     * @summary List Metrics
     * @request GET:/metrics
     * @secure
     */
    metricsControllerFindAll: (
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
  voiceLibrary = {
    /**
     * No description
     *
     * @tags Voice Library
     * @name VoiceLibraryControllerVoiceGetByProvider
     * @summary Get voices in Voice Library by Providers
     * @request GET:/voice-library/{provider}
     * @secure
     */
    voiceLibraryControllerVoiceGetByProvider: (
      provider:
        | '11labs'
        | 'playht'
        | 'rime-ai'
        | 'deepgram'
        | 'openai'
        | 'azure'
        | 'lmnt'
        | 'neets',
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
     * @tags Voice Library
     * @name VoiceLibraryControllerVoiceLibrarySyncByProvider
     * @summary Sync voices in Voice Library by Providers
     * @request POST:/voice-library/sync/{provider}
     * @secure
     */
    voiceLibraryControllerVoiceLibrarySyncByProvider: (
      provider:
        | '11labs'
        | 'playht'
        | 'rime-ai'
        | 'deepgram'
        | 'openai'
        | 'azure'
        | 'lmnt'
        | 'neets',
      params: RequestParams = {},
    ) =>
      this.request<VoiceLibrary[], any>({
        path: `/voice-library/sync/${provider}`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  logging = {
    /**
     * No description
     *
     * @tags Logging
     * @name LoggingControllerGetLogs
     * @summary Get Logging Logs
     * @request GET:/logging
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
        path: `/logging`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
}
