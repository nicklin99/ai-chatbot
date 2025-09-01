export const DEFAULT_CHAT_MODEL: string = 'qwen';

export interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'qwen',
    name: '通义千问',
    description: 'qwen-flash',
  },
];
