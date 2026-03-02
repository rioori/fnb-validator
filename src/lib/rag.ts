import OpenAI from 'openai';
import { supabaseAdmin } from './supabase-server';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
const EMBEDDING_MODEL = 'text-embedding-3-small';

export interface RAGResult {
  content_id: string;
  content_type: string;
  title: string;
  slug: string;
  content_text: string;
  similarity: number;
}

/**
 * Embed user query and search for relevant KB content.
 * Returns top `count` results filtered by locale.
 */
export async function searchKB(
  query: string,
  locale: 'vi' | 'en',
  count: number = 5,
  threshold: number = 0.3,
): Promise<RAGResult[]> {
  const embeddingRes = await openai.embeddings.create({
    model: EMBEDDING_MODEL,
    input: query,
  });
  const queryEmbedding = embeddingRes.data[0].embedding;

  const { data, error } = await supabaseAdmin.rpc('match_kb_embeddings', {
    query_embedding: queryEmbedding,
    match_locale: locale,
    match_count: count,
    match_threshold: threshold,
  });

  if (error) {
    console.error('RAG search error:', error);
    return [];
  }

  return (data || []) as RAGResult[];
}

/**
 * Format RAG results into a context string for the system prompt.
 */
export function formatRAGContext(results: RAGResult[], locale: 'vi' | 'en'): string {
  if (results.length === 0) return '';

  const MAX_CHARS = 1500;

  const header = locale === 'vi'
    ? '--- KIẾN THỨC THAM KHẢO (từ Validator.vn) ---'
    : '--- REFERENCE KNOWLEDGE (from Validator.vn) ---';

  const articles = results.map((r, i) => {
    const text = r.content_text.length > MAX_CHARS
      ? r.content_text.slice(0, MAX_CHARS) + '...'
      : r.content_text;
    return `[${i + 1}] ${r.title} (${r.content_type})\n${text}`;
  }).join('\n\n');

  const instruction = locale === 'vi'
    ? 'Hãy sử dụng kiến thức tham khảo ở trên để trả lời chính xác hơn. Nếu thông tin liên quan, hãy trích dẫn. Nếu không liên quan, bỏ qua.'
    : 'Use the reference knowledge above for more accurate answers. Cite if relevant. Ignore if not.';

  return `${header}\n\n${articles}\n\n${instruction}`;
}
