import { NextResponse, type NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-server';

// Fire-and-forget event ingestion for the anonymous hero CTA A/B test.
// Client posts { experiment, variant, event, clientId }; we validate + insert.
// Writes bypass RLS via service role so we can enforce the shape server-side.

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface TrackBody {
  experiment?: unknown;
  variant?: unknown;
  event?: unknown;
  clientId?: unknown;
}

function isValid(s: unknown, maxLen: number): s is string {
  return typeof s === 'string' && s.length > 0 && s.length <= maxLen;
}

export async function POST(req: NextRequest) {
  let body: TrackBody;
  try {
    body = (await req.json()) as TrackBody;
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const { experiment, variant, event, clientId } = body;

  if (!isValid(experiment, 64)) return NextResponse.json({ error: 'bad_experiment' }, { status: 400 });
  if (!isValid(variant, 8)) return NextResponse.json({ error: 'bad_variant' }, { status: 400 });
  if (event !== 'view' && event !== 'ask') return NextResponse.json({ error: 'bad_event' }, { status: 400 });
  if (clientId !== undefined && clientId !== null && !isValid(clientId, 64)) {
    return NextResponse.json({ error: 'bad_client_id' }, { status: 400 });
  }

  const { error } = await supabaseAdmin.from('ab_events').insert({
    experiment,
    variant,
    event,
    client_id: typeof clientId === 'string' ? clientId : null,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
