export const maxDuration = 60;

import { searchKB, formatRAGContext } from '@/lib/rag';

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;
const DEEPSEEK_URL = 'https://api.deepseek.com/chat/completions';
const MAX_MESSAGES = 20;

const SYSTEM_PROMPTS: Record<string, string> = {
  vi: `Bạn là chuyên gia tư vấn kinh doanh Việt Nam với 15+ năm kinh nghiệm đa ngành. Chuyên môn sâu về F&B, bán lẻ, dịch vụ và các mô hình SME. Bạn giúp người dùng về:
- Phân tích mô hình kinh doanh (F&B, bán lẻ, dịch vụ, giáo dục...)
- Cấu trúc chi phí, break-even, dòng tiền
- Chiến lược vị trí, marketing, vận hành
- Xu hướng thị trường Việt Nam, pháp lý kinh doanh

Quy tắc:
1. Trả lời bằng tiếng Việt, ngắn gọn, thực tế
2. Đưa ra con số cụ thể khi có thể (VD: chi phí thuê mặt bằng Q1 HCM ~50-80tr/tháng)
3. Nếu câu hỏi KHÔNG liên quan đến kinh doanh, lịch sự từ chối: "Mình chuyên về tư vấn kinh doanh thôi nhé! Bạn có câu hỏi gì về kinh doanh không?"
4. Không đưa ra lời khuyên tài chính/đầu tư cụ thể, chỉ phân tích và gợi ý
5. Khi người dùng đã cung cấp thông tin dự án (bên dưới), hãy sử dụng context đó để trả lời chính xác hơn — KHÔNG hỏi lại những thông tin đã có`,

  en: `You are a Vietnam business consultant with 15+ years of multi-industry experience. Deep expertise in F&B, retail, services, and SME business models. You help users with:
- Business model analysis (F&B, retail, services, education...)
- Cost structure, break-even, cash flow
- Location strategy, marketing, operations
- Vietnam market trends, business regulations

Rules:
1. Answer in English, concise and practical
2. Provide specific numbers when possible (e.g., rent in District 1 HCMC ~50-80M VND/month)
3. If the question is NOT business-related, politely decline: "I specialize in business consulting! Do you have any business-related questions?"
4. Don't give specific financial/investment advice, only analysis and suggestions
5. When user project info is provided below, use that context for more accurate answers — do NOT ask for info already provided`,
};

interface ChatMsg {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export async function POST(request: Request) {
  if (!DEEPSEEK_API_KEY || DEEPSEEK_API_KEY === 'your_deepseek_api_key_here') {
    return Response.json({ error: 'DeepSeek API key chưa được cấu hình.' }, { status: 500 });
  }

  let body: { messages?: ChatMsg[]; businessContext?: string; locale?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const locale = (body.locale === 'en' ? 'en' : 'vi') as 'vi' | 'en';
  const userMessages = (body.messages || []).slice(-MAX_MESSAGES);
  if (userMessages.length === 0) {
    return Response.json({ error: 'No messages provided.' }, { status: 400 });
  }

  // --- RAG: search knowledge base ---
  const lastUserMsg = [...userMessages].reverse().find(m => m.role === 'user')?.content || '';
  let ragContext = '';
  try {
    const ragResults = await searchKB(lastUserMsg, locale, 5, 0.3);
    ragContext = formatRAGContext(ragResults, locale);
  } catch (err) {
    console.error('RAG search failed, proceeding without context:', err);
  }

  // --- Build system prompt ---
  let systemPrompt = SYSTEM_PROMPTS[locale] || SYSTEM_PROMPTS.vi;

  if (ragContext) {
    systemPrompt += '\n\n' + ragContext;
  }

  if (body.businessContext) {
    const header = locale === 'vi'
      ? '--- THÔNG TIN DỰ ÁN KINH DOANH CỦA NGƯỜI DÙNG ---'
      : '--- USER BUSINESS PROJECT INFO ---';
    systemPrompt += `\n\n${header}\n${body.businessContext}`;
  }

  const messages: ChatMsg[] = [
    { role: 'system', content: systemPrompt },
    ...userMessages,
  ];

  const deepseekRes = await fetch(DEEPSEEK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages,
      stream: true,
      temperature: 0.7,
      max_tokens: 4096,
    }),
  });

  if (!deepseekRes.ok) {
    const status = deepseekRes.status;
    if (status === 401) return Response.json({ error: 'API key không hợp lệ.' }, { status: 401 });
    if (status === 429) return Response.json({ error: 'Quá nhiều yêu cầu, vui lòng thử lại sau.' }, { status: 429 });
    return Response.json({ error: 'Lỗi từ DeepSeek API.' }, { status: 502 });
  }

  const stream = new ReadableStream({
    async start(controller) {
      const reader = deepseekRes.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || !trimmed.startsWith('data: ')) continue;
            const data = trimmed.slice(6);
            if (data === '[DONE]') {
              controller.enqueue(new TextEncoder().encode('data: [DONE]\n\n'));
              continue;
            }
            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices?.[0]?.delta?.content;
              if (content) {
                controller.enqueue(new TextEncoder().encode(`data: ${JSON.stringify({ content })}\n\n`));
              }
            } catch {
              // skip malformed chunks
            }
          }
        }
      } catch (err) {
        console.error('Stream error:', err);
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
}
