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

export interface PhoneCallParams {
  callSid?: string;
  customerPhoneNumber: string;
  twilioPhoneNumber: string;
  twilioAccountSid: string;
  twilioAuthToken: string;
}

export interface Call {
  type: "inboundPhoneCall" | "outboundPhoneCall" | "webCall";
  id: string;
  orgId: string;
  createdAt: string;
  updatedAt: string;
  agentId?: string;
  customerId?: string;
  phoneNumberId?: string;
  startedAt: string;
  endedAt?: string;
  transcript?: string;
  recordingUrl?: string;
  cost?: number;
  summary?: string;
  agentParams?: object;
  callParams?: PhoneCallParams;
}

export interface OpenAIFunctionParamaters {
  type: string;
  properties: object;
  required?: string[];
}

export interface OpenAIFunction {
  /** This is the the name of the function to be called. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64. */
  name: string;
  /** This is a description of what the function does, used by the AI to choose when and how to call the function. */
  description?: string;
  /**
   * These are the parameters the functions accepts, described as a JSON Schema object. See the [OpenAI guide](https://platform.openai.com/docs/guides/gpt/function-calling) for examples, and the [JSON Schema reference](https://json-schema.org/understanding-json-schema) for documentation about the format.
   *
   * To describe a function that accepts no parameters, provide the value {"type": "object", "properties": {}}.
   */
  parameters: OpenAIFunctionParamaters;
}

export interface CreateAgentDTO {
  /** This is the OpenAI model that will be used. */
  model?: "gpt-4-32k" | "gpt-4" | "gpt-3.5-turbo-16k" | "gpt-3.5-turbo";
  /**
   * This is the voice that will be used.
   *
   * Pro Voices: steve, joseph, myra, paula, drew, phillip, paul, and mrb.
   *
   * Basic Voices: davis, jenny, aria, steffan, sara, and jason.
   */
  voice?:
    | "burt"
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
    | "davis"
    | "jenny"
    | "aria"
    | "steffan"
    | "sara"
    | "jason";
  /** This is the agent’s name, just for your own reference. */
  name?: string;
  /** This is the system prompt, which sets the objective and background before the call. */
  context?: string;
  /** These are the functions that the agent can execute during the call. */
  functions?: OpenAIFunction[];
  /**
   * This is the URL Vapi will send GET / POST requests for retrieving context, function calling, and end-of-call reports. All requests will be sent with customerPhoneNumber, botPhoneNumber, and all the agent parameters.
   *
   * Function Calling POST Request:
   * When the agent wants to call a function, we'll POST your callbackURL with `name` and `arguments`.
   * Respond with a JSON object of the result. For example: `{ result: "Hello world!" }` or `{ result: { temperature: "38 degrees" } }`. If empty, return `{}.
   *
   * End-of-Call Report POST Request:
   * You'll get `transcript`, `recordingUrl` and `summary` of the call.
   *
   * Context Retrieval GET Request:
   * If the agent's context isn't set, it'll ask for context before starting the call. Respond with `{ context: "You are an assistant..." }`
   */
  callbackUrl?: string;
  /** This is the number the agent will transfer to if it runs into any issues. */
  forwardingPhoneNumber?: string;
  /** Whether the AI should talk first when the call is connected. */
  startTalking?: boolean;
}

export interface CreateOutboundCallDto {
  /** This is the agent that will be used for the call. To create a transient agent, use `agent` instead. */
  agentId?: string;
  /** This is the agent that will be used for the call. To use an existing agent, use `agentId` instead. */
  agent?: CreateAgentDTO;
  /** This is the phone number that will be used for the call. */
  phoneNumberId: string;
  /** This is the number that will be called. */
  customerPhoneNumber: string;
}

export interface CreateWebCallDto {
  /** This is the agent that will be used for the call. To create a transient agent, use `agent` instead. */
  agentId?: string;
  /** This is the agent that will be used for the call. To use an existing agent, use `agentId` instead. */
  agent?: CreateAgentDTO;
}

export interface WebCallResponseDto {
  url: string;
  callId: string;
}

export interface Agent {
  /** This is the OpenAI model that will be used. */
  model?: "gpt-4-32k" | "gpt-4" | "gpt-3.5-turbo-16k" | "gpt-3.5-turbo";
  /**
   * This is the voice that will be used.
   *
   * Pro Voices: steve, joseph, myra, paula, drew, phillip, paul, and mrb.
   *
   * Basic Voices: davis, jenny, aria, steffan, sara, and jason.
   */
  voice?:
    | "burt"
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
    | "davis"
    | "jenny"
    | "aria"
    | "steffan"
    | "sara"
    | "jason";
  /** Unique identifier for the agent. */
  id: string;
  /** Unique identifier for the organization that this agent belongs to. */
  orgId: string;
  /** ISO 8601 date-time string of when the agent was created. */
  createdAt: string;
  /** ISO 8601 date-time string of when the agent was last updated. */
  updatedAt: string;
  /** This is the agent’s name, just for your own reference. */
  name?: string;
  /** This is the system prompt, which sets the objective and background before the call. */
  context?: string;
  /** These are the functions that the agent can execute during the call. */
  functions?: OpenAIFunction[];
  /**
   * This is the URL Vapi will send GET / POST requests for retrieving context, function calling, and end-of-call reports. All requests will be sent with customerPhoneNumber, botPhoneNumber, and all the agent parameters.
   *
   * Function Calling POST Request:
   * When the agent wants to call a function, we'll POST your callbackURL with `name` and `arguments`.
   * Respond with a JSON object of the result. For example: `{ result: "Hello world!" }` or `{ result: { temperature: "38 degrees" } }`. If empty, return `{}.
   *
   * End-of-Call Report POST Request:
   * You'll get `transcript`, `recordingUrl` and `summary` of the call.
   *
   * Context Retrieval GET Request:
   * If the agent's context isn't set, it'll ask for context before starting the call. Respond with `{ context: "You are an assistant..." }`
   */
  callbackUrl?: string;
  /** This is the number the agent will transfer to if it runs into any issues. */
  forwardingPhoneNumber?: string;
  /** Whether the AI should talk first when the call is connected. */
  startTalking?: boolean;
}

export interface UpdateAgentDTO {
  /** This is the OpenAI model that will be used. */
  model?: "gpt-4-32k" | "gpt-4" | "gpt-3.5-turbo-16k" | "gpt-3.5-turbo";
  /**
   * This is the voice that will be used.
   *
   * Pro Voices: steve, joseph, myra, paula, drew, phillip, paul, and mrb.
   *
   * Basic Voices: davis, jenny, aria, steffan, sara, and jason.
   */
  voice?:
    | "burt"
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
    | "davis"
    | "jenny"
    | "aria"
    | "steffan"
    | "sara"
    | "jason";
  /** This is the agent’s name, just for your own reference. */
  name?: string;
  /** This is the system prompt, which sets the objective and background before the call. */
  context?: string;
  /** These are the functions that the agent can execute during the call. */
  functions?: OpenAIFunction[];
  /**
   * This is the URL Vapi will send GET / POST requests for retrieving context, function calling, and end-of-call reports. All requests will be sent with customerPhoneNumber, botPhoneNumber, and all the agent parameters.
   *
   * Function Calling POST Request:
   * When the agent wants to call a function, we'll POST your callbackURL with `name` and `arguments`.
   * Respond with a JSON object of the result. For example: `{ result: "Hello world!" }` or `{ result: { temperature: "38 degrees" } }`. If empty, return `{}.
   *
   * End-of-Call Report POST Request:
   * You'll get `transcript`, `recordingUrl` and `summary` of the call.
   *
   * Context Retrieval GET Request:
   * If the agent's context isn't set, it'll ask for context before starting the call. Respond with `{ context: "You are an assistant..." }`
   */
  callbackUrl?: string;
  /** This is the number the agent will transfer to if it runs into any issues. */
  forwardingPhoneNumber?: string;
  /** Whether the AI should talk first when the call is connected. */
  startTalking?: boolean;
}

export interface BuyPhoneNumberDto {
  /** This is the area code of the phone number to purchase. */
  areaCode: string;
  agentId?: string;
}

export interface PhoneNumber {
  id: string;
  createdAt: string;
  updatedAt: string;
  orgId: string;
  stripeSubscriptionId?: string;
  number: string;
  agentId?: string;
  twilioAccountSid: string;
  twilioAuthToken: string;
}

export interface ImportTwilioPhoneNumberDto {
  /** This is the area code of the phone number to purchase. */
  twilioAccountSid: string;
  twilioAuthToken: string;
  twilioPhoneNumber: string;
  agentId?: string;
}

export interface UpdatePhoneNumberDto {
  /** This is the agent that will be used to handle inbound calls to this phone number. */
  agentId?: string;
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
  public baseUrl: string = "";
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
 * @contact
 *
 * API for talking AIs
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  call = {
    /**
     * No description
     *
     * @tags Calls
     * @name CallControllerFindAll
     * @summary List Calls
     * @request GET:/call
     */
    callControllerFindAll: (params: RequestParams = {}) =>
      this.request<Call[], any>({
        path: `/call`,
        method: "GET",
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
     */
    callControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<Call, any>({
        path: `/call/${id}`,
        method: "GET",
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
     */
    callControllerCreatePhoneCall: (data: CreateOutboundCallDto, params: RequestParams = {}) =>
      this.request<Call, any>({
        path: `/call/phone`,
        method: "POST",
        body: data,
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
     */
    callControllerCreateWebCall: (data: CreateWebCallDto, params: RequestParams = {}) =>
      this.request<WebCallResponseDto, any>({
        path: `/call/web`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  agent = {
    /**
     * No description
     *
     * @tags Agents
     * @name AgentControllerCreate
     * @summary Create Agent
     * @request POST:/agent
     */
    agentControllerCreate: (data: CreateAgentDTO, params: RequestParams = {}) =>
      this.request<Agent, any>({
        path: `/agent`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Agents
     * @name AgentControllerFindAll
     * @summary List Agents
     * @request GET:/agent
     */
    agentControllerFindAll: (params: RequestParams = {}) =>
      this.request<Agent[], any>({
        path: `/agent`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Agents
     * @name AgentControllerFindOne
     * @summary Get Agent
     * @request GET:/agent/{id}
     */
    agentControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<Agent, any>({
        path: `/agent/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Agents
     * @name AgentControllerUpdate
     * @summary Update Agent
     * @request PATCH:/agent/{id}
     */
    agentControllerUpdate: (id: string, data: UpdateAgentDTO, params: RequestParams = {}) =>
      this.request<Agent, any>({
        path: `/agent/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Agents
     * @name AgentControllerRemove
     * @summary Delete Agent
     * @request DELETE:/agent/{id}
     */
    agentControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/agent/${id}`,
        method: "DELETE",
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
     */
    phoneNumberControllerBuy: (data: BuyPhoneNumberDto, params: RequestParams = {}) =>
      this.request<PhoneNumber, any>({
        path: `/phone-number/buy`,
        method: "POST",
        body: data,
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
     */
    phoneNumberControllerImport: (data: ImportTwilioPhoneNumberDto, params: RequestParams = {}) =>
      this.request<PhoneNumber, any>({
        path: `/phone-number/import`,
        method: "POST",
        body: data,
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
     */
    phoneNumberControllerFindAll: (params: RequestParams = {}) =>
      this.request<PhoneNumber[], any>({
        path: `/phone-number`,
        method: "GET",
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
     */
    phoneNumberControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<PhoneNumber, any>({
        path: `/phone-number/${id}`,
        method: "GET",
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
     */
    phoneNumberControllerUpdate: (id: string, data: UpdatePhoneNumberDto, params: RequestParams = {}) =>
      this.request<PhoneNumber, any>({
        path: `/phone-number/${id}`,
        method: "PATCH",
        body: data,
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
     */
    phoneNumberControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/phone-number/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
}
