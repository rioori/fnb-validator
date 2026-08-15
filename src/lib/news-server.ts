import 'server-only';
import { supabaseAdmin } from './supabase-server';

export interface TickerItem {
  id: string;
  title: string;
  summary: string;
  source_name: string;
  source_url: string;
  published_at: string;
  matched_keywords: string[];
}

// Ticker listing: join news_published (curator's ok signal) back to news_candidates
// to pull matched_keywords (tag chips) + the current source_url. One VI row per candidate.
export async function listTickerItems(limit = 30): Promise<TickerItem[]> {
  const { data, error } = await supabaseAdmin
    .from('news_published')
    .select('id,title,summary,source_name,source_url,published_at,candidate_id,news_candidates(matched_keywords)')
    .eq('locale', 'vi')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(limit);
  if (error) return [];
  return (data ?? []).map((row) => {
    const r = row as unknown as {
      id: string;
      title: string;
      summary: string;
      source_name: string;
      source_url: string;
      published_at: string;
      news_candidates: { matched_keywords?: string[] } | { matched_keywords?: string[] }[] | null;
    };
    const cand = Array.isArray(r.news_candidates) ? r.news_candidates[0] : r.news_candidates;
    return {
      id: r.id,
      title: r.title,
      summary: r.summary || '',
      source_name: r.source_name,
      source_url: r.source_url,
      published_at: r.published_at,
      matched_keywords: cand?.matched_keywords ?? [],
    };
  });
}
