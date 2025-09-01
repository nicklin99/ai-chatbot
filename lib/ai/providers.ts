import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
// import { gateway } from '@ai-sdk/gateway';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';
import { isTestEnvironment } from '../constants';
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';

const qwen = createOpenAICompatible({
  name: 'qwen',
  apiKey: process.env.QWEN_API_KEY,
  baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
  includeUsage: true, // Include usage information in streaming responses
});
export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        'chat-model': chatModel,
        'chat-model-reasoning': reasoningModel,
        'title-model': titleModel,
        'artifact-model': artifactModel,
      },
    })
  : customProvider({
      languageModels: {
        'title-model': qwen('qwen-flash'),
        'artifact-model': qwen('qwen-flash'),
        'qwen': qwen('qwen-flash'),
      },
      imageModels: {
        // @ts-ignore
        'small-model': qwen('wanx2.1-t2i-turbo'),
      },
    });
