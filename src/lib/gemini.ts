// Gemini wrapper for news auto-publish:
//   - enrichCandidate(): text (summary VI + EN + operator angle + wizard preset pick)
//   - generateCoverImage(): image bytes (fallback when stock chain returns empty)
// Uses the REST API directly to avoid heavy SDK deps.

const TEXT_MODEL = process.env.GEMINI_TEXT_MODEL || 'gemini-2.5-flash';
const IMAGE_MODEL = process.env.GEMINI_IMAGE_MODEL || 'gemini-2.5-flash-image';
const API_KEY = process.env.GEMINI_API_KEY || '';

const TEXT_URL = `https://generativelanguage.googleapis.com/v1beta/models/${TEXT_MODEL}:generateContent`;
const IMAGE_URL = `https://generativelanguage.googleapis.com/v1beta/models/${IMAGE_MODEL}:generateContent`;

export interface EnrichedCandidate {
  title_vi: string;
  summary_vi: string;
  operator_angle_vi: string;
  title_en: string;
  summary_en: string;
  operator_angle_en: string;
  wizard_preset_slug: string | null;
  image_search_query: string;
}

const PRESET_SLUGS = [
  'coffee-basic',
  'milk-tea-basic',
  'eatery-basic',
  'bar-basic',
  'cloud-kitchen',
  'bakery-basic',
  'delivery-impact',
  'ingredient-cost-up',
  'rent-scenario',
  'regulation-impact',
];

interface CandidateInput {
  title: string;
  excerpt: string;
  source_name: string;
  matched_keywords: string[];
}

export async function enrichCandidate(input: CandidateInput): Promise<EnrichedCandidate | null> {
  if (!API_KEY) return null;

  const prompt = `Bạn là biên tập viên F&B của Validator.vn — công cụ tính khả thi kinh doanh cho chủ hộ F&B nhỏ ở Việt Nam.

TIN NGUỒN từ ${input.source_name}:
Tiêu đề: ${input.title}
Trích: ${input.excerpt}
Keywords match: ${input.matched_keywords.join(', ')}

NHIỆM VỤ: Biên tập tin này thành post ngắn cho Validator.vn. Trả về JSON theo schema:
{
  "title_vi": "Tiêu đề mới, súc tích, ≤80 ký tự, KHÔNG copy nguyên tiêu đề nguồn",
  "summary_vi": "Tóm tắt ≤80 từ, KHÔNG copy nguyên câu từ nguồn, viết lại bằng ngôn ngữ đời thường (không dùng thuật ngữ tài chính học thuật)",
  "operator_angle_vi": "1-2 câu 'Vì sao chủ quán quan tâm' — action-oriented, gợi ý cụ thể chủ quán nên làm gì",
  "title_en": "English title, ≤80 chars, natural translation",
  "summary_en": "English summary ≤80 words",
  "operator_angle_en": "1-2 sentences English operator angle",
  "wizard_preset_slug": "MỘT trong: ${PRESET_SLUGS.join(', ')} — chọn preset khớp nhất với tin, hoặc null nếu không có preset nào phù hợp",
  "image_search_query": "2-4 English keywords để search stock photo (vd 'vietnamese coffee shop interior', 'street food noodle', 'delivery motorbike food')"
}

QUY TẮC:
- Ngôn ngữ đời thường, không dùng "COGS", "biên lợi nhuận ròng", "Prime Cost" — dùng "tiền nguyên liệu", "còn lại bao nhiêu"
- KHÔNG bịa số liệu không có trong nguồn
- Operator angle phải actionable: "tính lại BEP", "kiểm tra ratio X", "so sánh với mức Y trong ngành"
- Chỉ trả về JSON, không có markdown fence, không có text ngoài JSON`;

  try {
    const res = await fetch(`${TEXT_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.4,
          responseMimeType: 'application/json',
        },
      }),
      signal: AbortSignal.timeout(45000),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error('gemini enrich HTTP', res.status, body.slice(0, 300));
      return null;
    }

    const data = (await res.json()) as {
      candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
    };
    const raw = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!raw) return null;

    const parsed = JSON.parse(raw) as EnrichedCandidate;

    // Validate preset slug
    if (parsed.wizard_preset_slug && !PRESET_SLUGS.includes(parsed.wizard_preset_slug)) {
      parsed.wizard_preset_slug = null;
    }

    // Sanity checks
    if (!parsed.title_vi || !parsed.summary_vi || !parsed.title_en || !parsed.summary_en) {
      return null;
    }

    // Enforce word cap (LLM sometimes exceeds)
    parsed.summary_vi = trimToWords(parsed.summary_vi, 80);
    parsed.summary_en = trimToWords(parsed.summary_en, 80);

    return parsed;
  } catch (err) {
    console.error('gemini enrich error:', err instanceof Error ? err.message : err);
    return null;
  }
}

function trimToWords(text: string, maxWords: number): string {
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text.trim();
  return words.slice(0, maxWords).join(' ') + '…';
}

export interface GeneratedImage {
  bytes: Buffer;
  mimeType: string;
}

export async function generateCoverImage(query: string): Promise<GeneratedImage | null> {
  if (!API_KEY) return null;

  const prompt = `Editorial photograph illustrating: ${query}. Vietnamese urban F&B context. Natural lighting, realistic, professional documentary style. NO text overlays, NO logos, NO watermarks, NO people faces in focus. 16:9 aspect ratio, high detail, magazine quality.`;

  try {
    const res = await fetch(`${IMAGE_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
      }),
      signal: AbortSignal.timeout(60000),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error('gemini image HTTP', res.status, body.slice(0, 300));
      return null;
    }

    const data = (await res.json()) as {
      candidates?: Array<{
        content?: { parts?: Array<{ inlineData?: { mimeType?: string; data?: string } }> };
      }>;
    };
    const part = data.candidates?.[0]?.content?.parts?.find((p) => p.inlineData?.data);
    const inline = part?.inlineData;
    if (!inline?.data) return null;

    return {
      bytes: Buffer.from(inline.data, 'base64'),
      mimeType: inline.mimeType || 'image/png',
    };
  } catch (err) {
    console.error('gemini image error:', err instanceof Error ? err.message : err);
    return null;
  }
}
