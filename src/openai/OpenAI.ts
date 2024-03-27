import { OpenAI } from 'openai';

const client = new OpenAI({ apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true });

export async function sendMessage(prompt: string, userMessage: string, temperature: number, topP: number, history: any[]) {
  const completion = await client.chat.completions.create({
    messages: [{ role: 'system', content: prompt }, ...history, { role: 'user', content: userMessage }],
    model: 'gpt-3.5-turbo',
    temperature: temperature,
    top_p: topP,
  });
  return completion.choices[0];
}
