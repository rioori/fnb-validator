export const maxDuration = 30;

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;
const DEEPSEEK_URL = 'https://api.deepseek.com/chat/completions';

interface InsightRequest {
  businessContext: string;
  score: number;
  netMargin: number;
  paybackMonth: number | null;
  locale?: 'vi' | 'en';
}

interface Insight {
  emoji: string;
  headline: string;
  detail: string;
  action: string;
}

const SYSTEM_VI = `Bạn là chuyên gia F&B Việt Nam. Đọc dữ liệu dự án của user và trả về ĐÚNG 3 insight hữu ích nhất — không lời chào, không tóm tắt, không hỏi lại. Chỉ JSON.

Format bắt buộc (parse được):
{"insights":[{"emoji":"🎯","headline":"1 câu ngắn","detail":"1-2 câu giải thích với con số cụ thể của user","action":"1 hành động cụ thể trong tuần này"}, {...}, {...}]}

Quy tắc:
- Mỗi insight PHẢI reference con số thật của user
- Ưu tiên insight về margin, cost, break-even (không phải marketing chung chung)
- Emoji: 🎯 cơ hội, ⚠️ rủi ro, 💰 tiền, 📊 benchmark, 🚀 tăng trưởng
- Vietnamese, phổ thông, không jargon`;

const SYSTEM_EN = `You are a Vietnam F&B expert. Read user's project data and return EXACTLY 3 most useful insights — no greeting, no summary, no questions. JSON only.

Required format (parseable):
{"insights":[{"emoji":"🎯","headline":"1 short sentence","detail":"1-2 sentences explaining with user's specific numbers","action":"1 concrete action this week"}, {...}, {...}]}

Rules:
- Each insight MUST reference user's real numbers
- Prioritize margin/cost/break-even insights (not generic marketing)
- Emojis: 🎯 opportunity, ⚠️ risk, 💰 money, 📊 benchmark, 🚀 growth
- English, plain-speak, no jargon`;

export async function POST(request: Request) {
  if (!DEEPSEEK_API_KEY) {
    return Response.json({ error: 'AI not configured' }, { status: 500 });
  }

  let body: InsightRequest;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid body' }, { status: 400 });
  }

  const locale = body.locale === 'en' ? 'en' : 'vi';
  const systemPrompt = locale === 'vi' ? SYSTEM_VI : SYSTEM_EN;

  const userPrompt = locale === 'vi'
    ? `Dữ liệu dự án:\n${body.businessContext}\n\nScore: ${body.score}/100, Margin: ${body.netMargin.toFixed(1)}%, Payback: ${body.paybackMonth ?? '>24'} tháng.\n\nTrả về 3 insight quan trọng nhất dạng JSON.`
    : `Project data:\n${body.businessContext}\n\nScore: ${body.score}/100, Margin: ${body.netMargin.toFixed(1)}%, Payback: ${body.paybackMonth ?? '>24'} months.\n\nReturn top 3 insights as JSON.`;

  try {
    const res = await fetch(DEEPSEEK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
        temperature: 0.4,
        max_tokens: 1000,
        response_format: { type: 'json_object' },
      }),
    });

    if (!res.ok) {
      return Response.json({ error: `AI error ${res.status}` }, { status: 502 });
    }

    const data = await res.json();
    const content = data.choices?.[0]?.message?.content;
    if (!content) return Response.json({ error: 'Empty response' }, { status: 502 });

    let parsed: { insights?: Insight[] };
    try {
      parsed = JSON.parse(content);
    } catch {
      return Response.json({ error: 'Invalid AI response' }, { status: 502 });
    }

    const insights = (parsed.insights || []).slice(0, 3);
    return Response.json({ insights });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return Response.json({ error: msg }, { status: 500 });
  }
}
