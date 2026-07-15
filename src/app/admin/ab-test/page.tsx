'use client';

import { useEffect, useState } from 'react';

interface VariantStats {
  variant: string;
  views: number;
  asks: number;
  uniqueClients: number;
  cvrPct: number | null;
}

interface Significance {
  zScore: number;
  pValueApprox: number;
  direction: 'A>B' | 'B>A' | 'even';
}

interface AbResponse {
  experiment: string;
  windowDays: number;
  generatedAt: string;
  variants: VariantStats[];
  significance: Significance | null;
  totalEvents: number;
}

const KEY_STORAGE = 'admin_ab_key';

// Copy for reference — matches what's live in HeroSection.
const VARIANT_COPY: Record<string, { label: string; button: string }> = {
  A: { label: 'Hỏi AI về quán của bạn', button: 'Hỏi ngay' },
  B: { label: 'Kiểm tra sức khỏe quán trong 60 giây', button: 'Kiểm tra ngay' },
};

export default function AdminAbTestPage() {
  const [key, setKey] = useState('');
  const [data, setData] = useState<AbResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [days, setDays] = useState(14);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY_STORAGE);
      if (stored) setKey(stored);
    } catch {}
  }, []);

  const fetchAb = async (k: string, d: number) => {
    if (!k.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/ab-test?days=${d}`, {
        headers: { Authorization: `Bearer ${k.trim()}` },
        cache: 'no-store',
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || `HTTP ${res.status}`);
      }
      const json = (await res.json()) as AbResponse;
      setData(json);
      try { localStorage.setItem(KEY_STORAGE, k.trim()); } catch {}
    } catch (err) {
      setError(err instanceof Error ? err.message : 'fetch failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (key && !data && !loading) fetchAb(key, days);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const a = data?.variants.find((v) => v.variant === 'A');
  const b = data?.variants.find((v) => v.variant === 'B');
  const totalViews = (a?.views ?? 0) + (b?.views ?? 0);
  const winner = data?.significance && data.significance.pValueApprox < 0.05
    ? data.significance.direction === 'A>B' ? 'A' : data.significance.direction === 'B>A' ? 'B' : null
    : null;

  return (
    <main style={{ maxWidth: 960, margin: '40px auto', padding: '0 24px', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#0f172a' }}>
      <header style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: '#16a34a', textTransform: 'uppercase' }}>Experiment</span>
          <span style={{ fontSize: 11, color: '#64748b' }}>Internal · service role key gated</span>
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 800, margin: 0 }}>Hero CTA A/B — CVR</h1>
        <p style={{ fontSize: 14, color: '#475569', marginTop: 6 }}>
          CVR = <code>ask / view</code> per variant. Two-proportion z-test; call a winner at p&lt;0.05 and n≥100/variant.
          View persists per browser via localStorage — one impression per session per variant.
        </p>
      </header>

      {!data && (
        <section style={{ marginBottom: 32, padding: 20, border: '1px solid #e2e8f0', borderRadius: 12 }}>
          <label style={{ display: 'block', fontSize: 12, fontWeight: 700, marginBottom: 6, color: '#475569' }}>
            Paste SUPABASE_SERVICE_ROLE_KEY (from .env.local)
          </label>
          <div style={{ display: 'flex', gap: 8 }}>
            <input
              type="password"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="eyJhbGciOi..."
              style={{ flex: 1, padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: 8, fontSize: 13, fontFamily: 'monospace' }}
              onKeyDown={(e) => { if (e.key === 'Enter') fetchAb(key, days); }}
            />
            <button
              onClick={() => fetchAb(key, days)}
              disabled={loading || !key.trim()}
              style={{ padding: '10px 20px', background: '#0f172a', color: 'white', border: 0, borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer', opacity: loading || !key.trim() ? 0.5 : 1 }}
            >
              {loading ? 'Loading…' : 'Load'}
            </button>
          </div>
          {error && <p style={{ color: '#dc2626', fontSize: 13, marginTop: 12 }}>Error: {error}</p>}
        </section>
      )}

      {data && (
        <>
          <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 32 }}>
            <MetricCard label="Total impressions" value={totalViews} sub={`window ${data.windowDays}d`} accent="#0f172a" />
            <MetricCard label="Total asks" value={(a?.asks ?? 0) + (b?.asks ?? 0)} sub={`conv all variants`} accent="#0f172a" />
            <MetricCard
              label="Winner"
              value={winner ? `Variant ${winner}` : 'TBD'}
              sub={winner ? `p=${data.significance!.pValueApprox}` : data.significance ? `p=${data.significance.pValueApprox} (not sig)` : 'need ≥30 views/variant'}
              accent={winner ? '#16a34a' : '#94a3b8'}
            />
            <MetricCard
              label="Sample health"
              value={Math.min(a?.views ?? 0, b?.views ?? 0)}
              sub="min views per variant · target 100+"
              accent={(Math.min(a?.views ?? 0, b?.views ?? 0)) >= 100 ? '#16a34a' : '#f59e0b'}
            />
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#475569', marginBottom: 12 }}>Variants</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
              {data.variants.length === 0 && (
                <div style={{ padding: 20, border: '1px dashed #cbd5e1', borderRadius: 12, color: '#94a3b8', fontSize: 13 }}>
                  No events yet in the last {data.windowDays}d. Visit the homepage in different browsers to seed data.
                </div>
              )}
              {data.variants.map((v) => {
                const copy = VARIANT_COPY[v.variant] || { label: '(unknown)', button: '' };
                const isWinner = winner === v.variant;
                return (
                  <div key={v.variant} style={{ padding: 20, border: `2px solid ${isWinner ? '#16a34a' : '#e2e8f0'}`, borderRadius: 12, background: 'white', position: 'relative' }}>
                    {isWinner && (
                      <span style={{ position: 'absolute', top: -10, right: 16, background: '#16a34a', color: 'white', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 999, letterSpacing: 1, textTransform: 'uppercase' }}>Winner</span>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                      <span style={{ fontSize: 24, fontWeight: 800, color: '#0f172a' }}>{v.variant}</span>
                      <span style={{ fontSize: 11, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: 1 }}>Variant</span>
                    </div>
                    <p style={{ fontSize: 13, color: '#475569', margin: '4px 0 14px', fontStyle: 'italic' }}>"{copy.label}"</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                      <StatBlock label="CVR" value={v.cvrPct !== null ? `${v.cvrPct}%` : '—'} big />
                      <StatBlock label="Unique" value={v.uniqueClients} />
                      <StatBlock label="Views" value={v.views} />
                      <StatBlock label="Asks" value={v.asks} />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {data.significance && (
            <section style={{ marginBottom: 32, padding: 16, background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12 }}>
              <p style={{ fontSize: 12, color: '#475569', margin: 0 }}>
                Two-proportion z-test · direction <strong>{data.significance.direction}</strong> · z=<strong>{data.significance.zScore}</strong> · p≈<strong>{data.significance.pValueApprox}</strong>
                {data.significance.pValueApprox < 0.05
                  ? <span style={{ color: '#16a34a', fontWeight: 700 }}> · statistically significant</span>
                  : <span style={{ color: '#f59e0b', fontWeight: 700 }}> · not significant — keep running</span>}
              </p>
            </section>
          )}

          <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#94a3b8', fontSize: 12 }}>
            <span>Generated: {new Date(data.generatedAt).toLocaleString('vi-VN')} · {data.totalEvents} events</span>
            <div style={{ display: 'flex', gap: 8 }}>
              <select value={days} onChange={(e) => { const d = Number(e.target.value); setDays(d); fetchAb(key, d); }} style={{ padding: '6px 10px', border: '1px solid #cbd5e1', borderRadius: 6, fontSize: 12, background: 'white' }}>
                <option value={7}>7 days</option>
                <option value={14}>14 days</option>
                <option value={30}>30 days</option>
                <option value={60}>60 days</option>
              </select>
              <button onClick={() => fetchAb(key, days)} style={{ padding: '6px 14px', background: 'white', border: '1px solid #cbd5e1', borderRadius: 6, fontSize: 12, cursor: 'pointer' }}>Refresh</button>
            </div>
          </footer>
        </>
      )}
    </main>
  );
}

function MetricCard({ label, value, sub, accent }: { label: string; value: string | number; sub: string; accent: string }) {
  return (
    <div style={{ padding: 20, border: '1px solid #e2e8f0', borderRadius: 12, background: 'white' }}>
      <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#94a3b8', margin: 0 }}>{label}</p>
      <p style={{ fontSize: 32, fontWeight: 800, margin: '6px 0 2px', color: accent }}>{value}</p>
      <p style={{ fontSize: 12, color: '#64748b', margin: 0 }}>{sub}</p>
    </div>
  );
}

function StatBlock({ label, value, big }: { label: string; value: string | number; big?: boolean }) {
  return (
    <div>
      <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#94a3b8', margin: 0 }}>{label}</p>
      <p style={{ fontSize: big ? 22 : 16, fontWeight: 800, color: '#0f172a', margin: '2px 0 0', fontVariantNumeric: 'tabular-nums' }}>{value}</p>
    </div>
  );
}
