import { NextRequest, NextResponse } from 'next/server';
import { InferenceClient } from '@huggingface/inference';
import { CIVIC_DOCS } from '@/lib/chatbot-docs';

// Provider is appended to the model name as "model:provider"
// featherless-ai is a free-tier provider on the HF router
const PRIMARY_MODEL = 'Qwen/Qwen2.5-1.5B-Instruct:featherless-ai';
const FALLBACK_MODEL = 'microsoft/Phi-3.5-mini-instruct:featherless-ai';

const client = new InferenceClient(process.env.HF_API_TOKEN);

async function runInference(model: string, chatMessages: object[]) {
  return client.chatCompletion({
    model,
    messages: chatMessages as any,
    max_tokens: 150,
    temperature: 0.5,
  });
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const chatMessages = [
      {
        role: 'system',
        content: `You are the CAES Assistant, a helpful AI guide for a civic complaint portal.
Use the following context to answer the user's question.
If the answer is not in the context, be polite and say you don't know, then suggest contacting support.
Keep responses concise (max 3 sentences).

CONTEXT:
${CIVIC_DOCS}`,
      },
      ...messages.map((m: any) => ({
        role: m.role === 'bot' ? 'assistant' : 'user',
        content: m.text,
      })),
    ];

    let response;
    try {
      response = await runInference(PRIMARY_MODEL, chatMessages);
    } catch (primaryErr: any) {
      console.warn(`Primary model (${PRIMARY_MODEL}) failed: ${primaryErr.message}. Trying fallback...`);
      response = await runInference(FALLBACK_MODEL, chatMessages);
    }

    const botResponse =
      response.choices[0].message.content ?? "I'm sorry, I couldn't generate a response.";

    return NextResponse.json({ text: botResponse.trim() });
  } catch (error: any) {
    console.error('Chat API error:', error.message);
    // Log full error details for debugging
    if (error.response) {
      console.error('Upstream HTTP status:', error.response.status);
      console.error('Upstream body:', await error.response.text().catch(() => '(unreadable)'));
    }
    return NextResponse.json(
      { error: 'Chat failed', detail: error.message },
      { status: 500 }
    );
  }
}


