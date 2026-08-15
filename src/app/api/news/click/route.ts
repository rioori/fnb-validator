import { NextResponse, type NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { post_id?: string; kind?: 'view' | 'wizard' };
    if (!body.post_id || !body.kind) {
      return NextResponse.json({ error: 'bad_request' }, { status: 400 });
    }
    const column = body.kind === 'view' ? 'view_count' : 'wizard_click_count';
    // Atomic increment via SQL fragment
    const { error } = await supabaseAdmin.rpc('increment_news_counter', {
      p_post_id: body.post_id,
      p_column: column,
    });
    if (error) {
      // Fallback: read-modify-write (non-atomic but rare race)
      const { data: row } = await supabaseAdmin
        .from('news_published')
        .select(column)
        .eq('id', body.post_id)
        .single();
      const current = ((row as Record<string, number> | null)?.[column] ?? 0) as number;
      await supabaseAdmin.from('news_published').update({ [column]: current + 1 }).eq('id', body.post_id);
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'unknown' }, { status: 500 });
  }
}
