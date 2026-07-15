import { NextResponse, type NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-server';

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

interface EventRow {
  variant: string;
  event: 'view' | 'ask';
  client_id: string | null;
  created_at: string;
}

interface VariantStats {
  variant: string;
  views: number;
  asks: number;
  uniqueClients: number;
  cvrPct: number | null;
}

// Two-proportion z-test — approximate significance for CVR difference.
// Returns null when either sample too small.
function significance(a: VariantStats, b: VariantStats): { zScore: number; pValueApprox: number; direction: 'A>B' | 'B>A' | 'even' } | null {
  if (a.views < 30 || b.views < 30) return null;
  const pA = a.asks / a.views;
  const pB = b.asks / b.views;
  const pPool = (a.asks + b.asks) / (a.views + b.views);
  const se = Math.sqrt(pPool * (1 - pPool) * (1 / a.views + 1 / b.views));
  if (se === 0) return null;
  const z = (pA - pB) / se;
  // Two-tailed p-value approximation (normal CDF via erf approximation)
  const p = 2 * (1 - normalCdf(Math.abs(z)));
  return {
    zScore: Number(z.toFixed(3)),
    pValueApprox: Number(p.toFixed(4)),
    direction: pA > pB ? 'A>B' : pB > pA ? 'B>A' : 'even',
  };
}

function normalCdf(z: number): number {
  // Abramowitz-Stegun approximation
  const t = 1 / (1 + 0.2316419 * z);
  const d = 0.3989423 * Math.exp((-z * z) / 2);
  return 1 - d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  const experiment = req.nextUrl.searchParams.get('experiment') || 'hero_cta_v1';
  const daysParam = Number(req.nextUrl.searchParams.get('days') || 14);
  const days = Math.min(Math.max(daysParam, 1), 90);
  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

  const { data, error } = await supabaseAdmin
    .from('ab_events')
    .select('variant,event,client_id,created_at')
    .eq('experiment', experiment)
    .gte('created_at', since)
    .limit(50000);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const rows = (data ?? []) as EventRow[];
  const byVariant = new Map<string, { views: number; asks: number; clients: Set<string> }>();
  for (const r of rows) {
    if (!byVariant.has(r.variant)) {
      byVariant.set(r.variant, { views: 0, asks: 0, clients: new Set() });
    }
    const bucket = byVariant.get(r.variant)!;
    if (r.event === 'view') bucket.views++;
    else if (r.event === 'ask') bucket.asks++;
    if (r.client_id) bucket.clients.add(r.client_id);
  }

  const variants: VariantStats[] = Array.from(byVariant.entries())
    .map(([variant, b]) => ({
      variant,
      views: b.views,
      asks: b.asks,
      uniqueClients: b.clients.size,
      cvrPct: b.views > 0 ? Number(((b.asks / b.views) * 100).toFixed(2)) : null,
    }))
    .sort((a, b) => a.variant.localeCompare(b.variant));

  const a = variants.find((v) => v.variant === 'A');
  const bv = variants.find((v) => v.variant === 'B');
  const sig = a && bv ? significance(a, bv) : null;

  return NextResponse.json({
    experiment,
    windowDays: days,
    generatedAt: new Date().toISOString(),
    variants,
    significance: sig,
    totalEvents: rows.length,
  });
}
