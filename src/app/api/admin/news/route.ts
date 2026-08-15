import { NextResponse, type NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-server';
import { slugify, validateSummaryLength, mondayOf, type NewsLocale } from '@/lib/news';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function isAuthorized(req: NextRequest): boolean {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) return false;
  const auth = req.headers.get('authorization') || '';
  const bearer = auth.replace(/^Bearer\s+/i, '').trim();
  const query = req.nextUrl.searchParams.get('key')?.trim() || '';
  return bearer === serviceKey || query === serviceKey;
}

interface PublishPayload {
  candidate_id?: string;
  source_name: string;
  source_url: string;
  vi: {
    title: string;
    summary: string;
    operator_angle?: string;
  };
  en: {
    title: string;
    summary: string;
    operator_angle?: string;
  };
  wizard_preset_id?: string | null;
  cover_image_url?: string | null;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  const action = req.nextUrl.searchParams.get('action') || 'candidates';

  if (action === 'candidates') {
    const status = req.nextUrl.searchParams.get('status') || 'pending';
    const limit = Math.min(Number(req.nextUrl.searchParams.get('limit') || 30), 100);
    const { data, error } = await supabaseAdmin
      .from('news_candidates')
      .select('id,source,source_url,title,excerpt,published_at,ingested_at,relevance_score,matched_keywords,status,language')
      .eq('status', status)
      .order('relevance_score', { ascending: false })
      .order('published_at', { ascending: false })
      .limit(limit);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ candidates: data ?? [] });
  }

  if (action === 'published') {
    const limit = Math.min(Number(req.nextUrl.searchParams.get('limit') || 30), 100);
    const { data, error } = await supabaseAdmin
      .from('news_published')
      .select('id,parent_id,slug,locale,title,summary,operator_angle,source_name,source_url,published_at,week_of,view_count,wizard_click_count,status')
      .order('published_at', { ascending: false })
      .limit(limit);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ published: data ?? [] });
  }

  if (action === 'presets') {
    const { data, error } = await supabaseAdmin
      .from('news_wizard_presets')
      .select('id,slug,label_vi,label_en,wizard_url,description')
      .eq('active', true)
      .order('slug');
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ presets: data ?? [] });
  }

  return NextResponse.json({ error: 'unknown_action' }, { status: 400 });
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  const action = req.nextUrl.searchParams.get('action') || 'publish';

  if (action === 'reject') {
    const body = (await req.json()) as { candidate_id: string };
    if (!body.candidate_id) return NextResponse.json({ error: 'missing_candidate_id' }, { status: 400 });
    const { error } = await supabaseAdmin
      .from('news_candidates')
      .update({ status: 'rejected', rejected_at: new Date().toISOString() })
      .eq('id', body.candidate_id);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true });
  }

  if (action === 'pick') {
    const body = (await req.json()) as { candidate_id: string };
    if (!body.candidate_id) return NextResponse.json({ error: 'missing_candidate_id' }, { status: 400 });
    const { error } = await supabaseAdmin
      .from('news_candidates')
      .update({ status: 'picked', picked_at: new Date().toISOString() })
      .eq('id', body.candidate_id);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true });
  }

  if (action === 'publish') {
    const body = (await req.json()) as PublishPayload;

    // Validate summary length for both locales
    for (const locale of ['vi', 'en'] as NewsLocale[]) {
      const check = validateSummaryLength(body[locale].summary);
      if (!check.ok) {
        return NextResponse.json({ error: `${locale}_summary_too_long`, wordCount: check.count, max: 100 }, { status: 400 });
      }
    }

    if (!body.source_name || !body.source_url) {
      return NextResponse.json({ error: 'missing_source' }, { status: 400 });
    }

    const now = new Date();
    const weekOf = mondayOf(now);
    const baseSlug = slugify(body.vi.title);
    const timestampSuffix = now.toISOString().slice(0, 10);
    const slug = `${baseSlug}-${timestampSuffix}`;

    // Insert VI parent
    const { data: parentRow, error: parentErr } = await supabaseAdmin
      .from('news_published')
      .insert({
        candidate_id: body.candidate_id || null,
        slug,
        locale: 'vi',
        title: body.vi.title,
        summary: body.vi.summary,
        operator_angle: body.vi.operator_angle || null,
        wizard_preset_id: body.wizard_preset_id || null,
        source_name: body.source_name,
        source_url: body.source_url,
        cover_image_url: body.cover_image_url || null,
        week_of: weekOf,
        status: 'published',
        published_at: now.toISOString(),
      })
      .select('id')
      .single();

    if (parentErr) return NextResponse.json({ error: parentErr.message }, { status: 500 });

    // Insert EN child
    const { error: childErr } = await supabaseAdmin
      .from('news_published')
      .insert({
        parent_id: parentRow!.id,
        candidate_id: body.candidate_id || null,
        slug,
        locale: 'en',
        title: body.en.title,
        summary: body.en.summary,
        operator_angle: body.en.operator_angle || null,
        wizard_preset_id: body.wizard_preset_id || null,
        source_name: body.source_name,
        source_url: body.source_url,
        cover_image_url: body.cover_image_url || null,
        week_of: weekOf,
        status: 'published',
        published_at: now.toISOString(),
      });

    if (childErr) {
      // Rollback parent
      await supabaseAdmin.from('news_published').delete().eq('id', parentRow!.id);
      return NextResponse.json({ error: childErr.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, slug, id: parentRow!.id });
  }

  return NextResponse.json({ error: 'unknown_action' }, { status: 400 });
}
