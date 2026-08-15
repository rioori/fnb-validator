import 'server-only';
import { supabaseAdmin } from './supabase-server';
import type { NewsLocale } from './news';

export interface PublicNewsPost {
  id: string;
  slug: string;
  locale: NewsLocale;
  title: string;
  summary: string;
  operator_angle: string | null;
  source_name: string;
  source_url: string;
  cover_image_url: string | null;
  published_at: string;
  week_of: string | null;
  wizard_preset: {
    id: string;
    slug: string;
    label_vi: string;
    label_en: string;
    wizard_url: string;
  } | null;
}

export async function listPublishedNews(locale: NewsLocale, limit = 30): Promise<PublicNewsPost[]> {
  const { data, error } = await supabaseAdmin
    .from('news_published')
    .select('id,slug,locale,title,summary,operator_angle,source_name,source_url,cover_image_url,published_at,week_of,wizard_preset:news_wizard_presets(id,slug,label_vi,label_en,wizard_url)')
    .eq('locale', locale)
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(limit);

  if (error) return [];
  return (data ?? []).map((row) => {
    const r = row as unknown as PublicNewsPost & { wizard_preset: PublicNewsPost['wizard_preset'] | PublicNewsPost['wizard_preset'][] };
    const preset = Array.isArray(r.wizard_preset) ? r.wizard_preset[0] ?? null : r.wizard_preset;
    return { ...r, wizard_preset: preset };
  });
}

export async function getPublishedNewsBySlug(slug: string, locale: NewsLocale): Promise<PublicNewsPost | null> {
  const { data, error } = await supabaseAdmin
    .from('news_published')
    .select('id,slug,locale,title,summary,operator_angle,source_name,source_url,cover_image_url,published_at,week_of,wizard_preset:news_wizard_presets(id,slug,label_vi,label_en,wizard_url)')
    .eq('slug', slug)
    .eq('locale', locale)
    .eq('status', 'published')
    .single();

  if (error || !data) return null;
  const r = data as unknown as PublicNewsPost & { wizard_preset: PublicNewsPost['wizard_preset'] | PublicNewsPost['wizard_preset'][] };
  const preset = Array.isArray(r.wizard_preset) ? r.wizard_preset[0] ?? null : r.wizard_preset;
  return { ...r, wizard_preset: preset };
}

export async function listAllSlugs(): Promise<Array<{ slug: string; locale: NewsLocale; published_at: string }>> {
  const { data, error } = await supabaseAdmin
    .from('news_published')
    .select('slug,locale,published_at')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(500);
  if (error) return [];
  return (data ?? []) as Array<{ slug: string; locale: NewsLocale; published_at: string }>;
}
