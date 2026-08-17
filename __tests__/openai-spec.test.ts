/**
 * Tests for OpenAI spec alignment updates (VAP-11729)
 *
 * This test file validates:
 * 1. Developer role support in OpenAIMessage
 * 2. GPT-5.2 model availability
 * 3. New optional API parameters
 * 4. Function role deprecation notice (documented)
 */

import {
  OpenAIMessage,
  OpenAIModel,
  WorkflowOpenAIModel,
  EvalOpenAIModel,
} from "../api";

describe("OpenAI Spec Updates (VAP-11729)", () => {
  describe("OpenAIMessage role types", () => {
    it("should support the developer role for GPT-5.x and o-series models", () => {
      const developerMessage: OpenAIMessage = {
        content: "You are a helpful assistant for software development tasks.",
        role: "developer",
      };
      expect(developerMessage.role).toBe("developer");
      expect(developerMessage.content).toBeDefined();
    });

    it("should support the system role", () => {
      const systemMessage: OpenAIMessage = {
        content: "You are a helpful assistant.",
        role: "system",
      };
      expect(systemMessage.role).toBe("system");
    });

    it("should support the user role", () => {
      const userMessage: OpenAIMessage = {
        content: "Hello, how are you?",
        role: "user",
      };
      expect(userMessage.role).toBe("user");
    });

    it("should support the assistant role", () => {
      const assistantMessage: OpenAIMessage = {
        content: "I am doing well, thank you!",
        role: "assistant",
      };
      expect(assistantMessage.role).toBe("assistant");
    });

    it("should support the tool role", () => {
      const toolMessage: OpenAIMessage = {
        content: '{"result": "success"}',
        role: "tool",
      };
      expect(toolMessage.role).toBe("tool");
    });

    it("should support the deprecated function role for backward compatibility", () => {
      // Note: The function role is deprecated in favor of tool role
      const functionMessage: OpenAIMessage = {
        content: '{"result": "success"}',
        role: "function",
      };
      expect(functionMessage.role).toBe("function");
    });

    it("should support null content in messages", () => {
      const messageWithNullContent: OpenAIMessage = {
        content: null,
        role: "assistant",
      };
      expect(messageWithNullContent.content).toBeNull();
    });
  });

  describe("GPT-5.2 model support", () => {
    it("should allow gpt-5.2 as a valid model option", () => {
      const model: OpenAIModel = {
        provider: "openai",
        model: "gpt-5.2",
      };
      expect(model.model).toBe("gpt-5.2");
    });

    it("should allow gpt-5.2-chat-latest as a valid model option", () => {
      const model: OpenAIModel = {
        provider: "openai",
        model: "gpt-5.2-chat-latest",
      };
      expect(model.model).toBe("gpt-5.2-chat-latest");
    });

    it("should still support gpt-5.1 models", () => {
      const model: OpenAIModel = {
        provider: "openai",
        model: "gpt-5.1",
      };
      expect(model.model).toBe("gpt-5.1");
    });

    it("should still support gpt-5 models", () => {
      const model: OpenAIModel = {
        provider: "openai",
        model: "gpt-5",
      };
      expect(model.model).toBe("gpt-5");
    });

    it("should support gpt-5.2 in WorkflowOpenAIModel", () => {
      const workflowModel: WorkflowOpenAIModel = {
        provider: "openai",
        model: "gpt-5.2",
      };
      expect(workflowModel.model).toBe("gpt-5.2");
    });

    it("should support gpt-5.2 in EvalOpenAIModel", () => {
      const evalModel: EvalOpenAIModel = {
        provider: "openai",
        model: "gpt-5.2",
        messages: [],
      };
      expect(evalModel.model).toBe("gpt-5.2");
    });
  });

  describe("New optional API parameters", () => {
    it("should support seed parameter for deterministic sampling", () => {
      const model: OpenAIModel = {
        provider: "openai",
        model: "gpt-5.2",
        seed: 12345,
      };
      expect(model.seed).toBe(12345);
    });

    it("should support topP parameter for nucleus sampling", () => {
      const model: OpenAIModel = {
        provider: "openai",
        model: "gpt-5.2",
        topP: 0.9,
      };
      expect(model.topP).toBe(0.9);
    });

    it("should support frequencyPenalty parameter", () => {
      const model: OpenAIModel = {
        provider: "openai",
        model: "gpt-5.2",
        frequencyPenalty: 0.5,
      };
      expect(model.frequencyPenalty).toBe(0.5);
    });

    it("should support presencePenalty parameter", () => {
      const model: OpenAIModel = {
        provider: "openai",
        model: "gpt-5.2",
        presencePenalty: 0.5,
      };
      expect(model.presencePenalty).toBe(0.5);
    });

    it("should support logprobs parameter", () => {
      const model: OpenAIModel = {
        provider: "openai",
        model: "gpt-5.2",
        logprobs: true,
      };
      expect(model.logprobs).toBe(true);
    });

    it("should support topLogprobs parameter", () => {
      const model: OpenAIModel = {
        provider: "openai",
        model: "gpt-5.2",
        logprobs: true,
        topLogprobs: 5,
      };
      expect(model.topLogprobs).toBe(5);
    });

    it("should support parallelToolCalls parameter", () => {
      const model: OpenAIModel = {
        provider: "openai",
        model: "gpt-5.2",
        parallelToolCalls: true,
      };
      expect(model.parallelToolCalls).toBe(true);
    });

    it("should support reasoningEffort parameter for o-series models", () => {
      const modelLow: OpenAIModel = {
        provider: "openai",
        model: "o3",
        reasoningEffort: "low",
      };
      expect(modelLow.reasoningEffort).toBe("low");

      const modelMedium: OpenAIModel = {
        provider: "openai",
        model: "o3",
        reasoningEffort: "medium",
      };
      expect(modelMedium.reasoningEffort).toBe("medium");

      const modelHigh: OpenAIModel = {
        provider: "openai",
        model: "o3",
        reasoningEffort: "high",
      };
      expect(modelHigh.reasoningEffort).toBe("high");
    });

    it("should allow combining multiple new parameters", () => {
      const model: OpenAIModel = {
        provider: "openai",
        model: "gpt-5.2",
        temperature: 0.7,
        maxTokens: 1000,
        seed: 42,
        topP: 0.95,
        frequencyPenalty: 0.3,
        presencePenalty: 0.2,
        logprobs: true,
        topLogprobs: 10,
        parallelToolCalls: true,
      };

      expect(model.seed).toBe(42);
      expect(model.topP).toBe(0.95);
      expect(model.frequencyPenalty).toBe(0.3);
      expect(model.presencePenalty).toBe(0.2);
      expect(model.logprobs).toBe(true);
      expect(model.topLogprobs).toBe(10);
      expect(model.parallelToolCalls).toBe(true);
    });

    it("should maintain backward compatibility with existing parameters", () => {
      const model: OpenAIModel = {
        provider: "openai",
        model: "gpt-4o",
        temperature: 0.5,
        maxTokens: 500,
        emotionRecognitionEnabled: true,
        numFastTurns: 2,
      };

      expect(model.temperature).toBe(0.5);
      expect(model.maxTokens).toBe(500);
      expect(model.emotionRecognitionEnabled).toBe(true);
      expect(model.numFastTurns).toBe(2);
    });
  });

  describe("Model fallbacks with GPT-5.2", () => {
    it("should support gpt-5.2 in fallback models", () => {
      const model: OpenAIModel = {
        provider: "openai",
        model: "gpt-5.2",
        fallbackModels: "gpt-5.1",
      };
      expect(model.fallbackModels).toBe("gpt-5.1");
    });

    it("should support gpt-5.2-chat-latest in fallback models", () => {
      const model: OpenAIModel = {
        provider: "openai",
        model: "gpt-5.2-chat-latest",
        fallbackModels: "gpt-5.2",
      };
      expect(model.fallbackModels).toBe("gpt-5.2");
    });
  });

  describe("Messages with developer role", () => {
    it("should support developer messages in OpenAIModel messages array", () => {
      const model: OpenAIModel = {
        provider: "openai",
        model: "gpt-5.2",
        messages: [
          {
            content: "You are a code review assistant.",
            role: "developer",
          },
          {
            content: "Hello!",
            role: "user",
          },
        ],
      };

      expect(model.messages).toHaveLength(2);
      expect(model.messages?.[0].role).toBe("developer");
      expect(model.messages?.[1].role).toBe("user");
    });

    it("should allow mixing developer and system roles in messages", () => {
      const model: OpenAIModel = {
        provider: "openai",
        model: "gpt-5.2",
        messages: [
          {
            content: "Developer instructions take precedence.",
            role: "developer",
          },
          {
            content: "System fallback instructions.",
            role: "system",
          },
        ],
      };

      expect(model.messages).toHaveLength(2);
      expect(model.messages?.[0].role).toBe("developer");
      expect(model.messages?.[1].role).toBe("system");
    });
  });
});
