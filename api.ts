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
  status?: string[];
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
  assistantId?: string;
  customerId?: string;
  phoneNumberId?: string;
  startedAt: string;
  endedAt?: string;
  transcript?: string;
  recordingUrl?: string;
  cost?: number;
  summary?: string;
  assistantParams?: object;
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

export interface CreateAssistantDTO {
  /** This is the OpenAI model that will be used. */
  model?: "gpt-4-32k" | "gpt-4" | "gpt-3.5-turbo-16k" | "gpt-3.5-turbo";
  /**
   * This is the voice that will be used.
   *
   * Pro Voices: `*-11labs`, `*-playht`, `*-rimeai`
   *
   * Basic Voices: `*-azure`
   */
  voice?:
    | "davis-azure"
    | "jenny-azure"
    | "aria-azure"
    | "steffan-azure"
    | "sara-azure"
    | "jason-azure"
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
    | "jennifer-playht"
    | "melissa-playht"
    | "will-playht"
    | "jack-playht"
    | "ruby-playht"
    | "davis-playht"
    | "donna-playht"
    | "kai-rimeai"
    | "zion-rimeai"
    | "xavier-rimeai"
    | "marty-rimeai"
    | "hudson-rimeai"
    | "savannah-rimeai"
    | "colette-rimeai"
    | "daphne-rimeai"
    | "aurora-rimeai"
    | "nova-rimeai";
  /** This is the assistant’s name, just for your own reference. */
  name?: string;
  /** This is the system prompt, which sets the objective and background before the call. */
  context?: string;
  /** These are the functions that the assistant can execute during the call. */
  functions?: OpenAIFunction[];
  /** This is the URL Vapi will send GET / POST requests for retrieving context, function calling, and end-of-call reports. All requests will be sent with customerPhoneNumber and all the assistant parameters. You can find more details in the Function Calling documentation. */
  callbackUrl?: string;
  /** This is the number the assistant will transfer to if it runs into any issues. */
  forwardingPhoneNumber?: string;
  /** This is the first message that the assistant will say. If unspecified, it will wait for the user to speak. */
  firstMessage?: string;
  /** Whether the call should be recorded. */
  recordingEnabled?: boolean;
  /** Whether to leave a voicemail if a phone call isn't picked up. */
  voicemailEnabled?: boolean;
}

export interface CreateOutboundCallDto {
  /** This is the assistant that will be used for the call. To create a transient assistant, use `assistant` instead. */
  assistantId?: string;
  /** This is the assistant that will be used for the call. To use an existing assistant, use `assistantId` instead. */
  assistant?: CreateAssistantDTO;
  /** This is the phone number that will be used for the call. */
  phoneNumberId: string;
  /** This is the number that will be called. */
  customerPhoneNumber: string;
}

export interface CreateWebCallDto {
  /** This is the assistant that will be used for the call. To create a transient assistant, use `assistant` instead. */
  assistantId?: string;
  /** This is the assistant that will be used for the call. To use an existing assistant, use `assistantId` instead. */
  assistant?: CreateAssistantDTO;
}

export interface WebCallResponseDto {
  url: string;
}

export interface Assistant {
  /** This is the OpenAI model that will be used. */
  model?: "gpt-4-32k" | "gpt-4" | "gpt-3.5-turbo-16k" | "gpt-3.5-turbo";
  /**
   * This is the voice that will be used.
   *
   * Pro Voices: `*-11labs`, `*-playht`, `*-rimeai`
   *
   * Basic Voices: `*-azure`
   */
  voice?:
    | "davis-azure"
    | "jenny-azure"
    | "aria-azure"
    | "steffan-azure"
    | "sara-azure"
    | "jason-azure"
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
    | "jennifer-playht"
    | "melissa-playht"
    | "will-playht"
    | "jack-playht"
    | "ruby-playht"
    | "davis-playht"
    | "donna-playht"
    | "kai-rimeai"
    | "zion-rimeai"
    | "xavier-rimeai"
    | "marty-rimeai"
    | "hudson-rimeai"
    | "savannah-rimeai"
    | "colette-rimeai"
    | "daphne-rimeai"
    | "aurora-rimeai"
    | "nova-rimeai";
  /** Unique identifier for the assistant. */
  id: string;
  /** Unique identifier for the organization that this assistant belongs to. */
  orgId: string;
  /** ISO 8601 date-time string of when the assistant was created. */
  createdAt: string;
  /** ISO 8601 date-time string of when the assistant was last updated. */
  updatedAt: string;
  /** This is the assistant’s name, just for your own reference. */
  name?: string;
  /** This is the system prompt, which sets the objective and background before the call. */
  context?: string;
  /** These are the functions that the assistant can execute during the call. */
  functions?: OpenAIFunction[];
  /** This is the URL Vapi will send GET / POST requests for retrieving context, function calling, and end-of-call reports. All requests will be sent with customerPhoneNumber and all the assistant parameters. You can find more details in the Function Calling documentation. */
  callbackUrl?: string;
  /** This is the number the assistant will transfer to if it runs into any issues. */
  forwardingPhoneNumber?: string;
  /** This is the first message that the assistant will say. If unspecified, it will wait for the user to speak. */
  firstMessage?: string;
  /** Whether the call should be recorded. */
  recordingEnabled?: boolean;
  /** Whether to leave a voicemail if a phone call isn't picked up. */
  voicemailEnabled?: boolean;
}

export interface UpdateAssistantDTO {
  /** This is the OpenAI model that will be used. */
  model?: "gpt-4-32k" | "gpt-4" | "gpt-3.5-turbo-16k" | "gpt-3.5-turbo";
  /**
   * This is the voice that will be used.
   *
   * Pro Voices: `*-11labs`, `*-playht`, `*-rimeai`
   *
   * Basic Voices: `*-azure`
   */
  voice?:
    | "davis-azure"
    | "jenny-azure"
    | "aria-azure"
    | "steffan-azure"
    | "sara-azure"
    | "jason-azure"
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
    | "jennifer-playht"
    | "melissa-playht"
    | "will-playht"
    | "jack-playht"
    | "ruby-playht"
    | "davis-playht"
    | "donna-playht"
    | "kai-rimeai"
    | "zion-rimeai"
    | "xavier-rimeai"
    | "marty-rimeai"
    | "hudson-rimeai"
    | "savannah-rimeai"
    | "colette-rimeai"
    | "daphne-rimeai"
    | "aurora-rimeai"
    | "nova-rimeai";
  /** This is the assistant’s name, just for your own reference. */
  name?: string;
  /** This is the system prompt, which sets the objective and background before the call. */
  context?: string;
  /** These are the functions that the assistant can execute during the call. */
  functions?: OpenAIFunction[];
  /** This is the URL Vapi will send GET / POST requests for retrieving context, function calling, and end-of-call reports. All requests will be sent with customerPhoneNumber and all the assistant parameters. You can find more details in the Function Calling documentation. */
  callbackUrl?: string;
  /** This is the number the assistant will transfer to if it runs into any issues. */
  forwardingPhoneNumber?: string;
  /** This is the first message that the assistant will say. If unspecified, it will wait for the user to speak. */
  firstMessage?: string;
  /** Whether the call should be recorded. */
  recordingEnabled?: boolean;
  /** Whether to leave a voicemail if a phone call isn't picked up. */
  voicemailEnabled?: boolean;
}

export interface BuyPhoneNumberDto {
  /** This is the area code of the phone number to purchase. */
  areaCode: string;
  assistantId?: string;
}

export interface PhoneNumber {
  id: string;
  createdAt: string;
  updatedAt: string;
  orgId: string;
  stripeSubscriptionId?: string;
  number: string;
  assistantId?: string;
  twilioAccountSid?: string;
  twilioAuthToken?: string;
}

export interface ImportTwilioPhoneNumberDto {
  /** This is the area code of the phone number to purchase. */
  twilioAccountSid: string;
  twilioAuthToken: string;
  twilioPhoneNumber: string;
  assistantId?: string;
}

export interface UpdatePhoneNumberDto {
  /** This is the assistant that will be used to handle inbound calls to this phone number. */
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
 * API for making voice assistants
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
  assistant = {
    /**
     * No description
     *
     * @tags Assistants
     * @name AssistantControllerCreate
     * @summary Create Assistant
     * @request POST:/assistant
     */
    assistantControllerCreate: (data: CreateAssistantDTO, params: RequestParams = {}) =>
      this.request<Assistant, any>({
        path: `/assistant`,
        method: "POST",
        body: data,
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
     */
    assistantControllerFindAll: (params: RequestParams = {}) =>
      this.request<Assistant[], any>({
        path: `/assistant`,
        method: "GET",
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
     */
    assistantControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<Assistant, any>({
        path: `/assistant/${id}`,
        method: "GET",
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
     */
    assistantControllerUpdate: (id: string, data: UpdateAssistantDTO, params: RequestParams = {}) =>
      this.request<Assistant, any>({
        path: `/assistant/${id}`,
        method: "PATCH",
        body: data,
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
     */
    assistantControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/assistant/${id}`,
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
