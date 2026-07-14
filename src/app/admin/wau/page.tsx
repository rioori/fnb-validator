'use client';

import { useEffect, useState } from 'react';

interface WeekBucket {
  weekStart: string;
  weekLabel: string;
  wau: number;
  chatUsers: number;
  scenarioUsers: number;
  totalChatMessages: number;
  totalScenarios: number;
  totalSessions: number;
}

interface WauResponse {
  generatedAt: string;
  windowWeeks: number;
  currentWau: number;
  wowDeltaPct: number | null;
  target: number;
  sustainedTargetWeeks: number;
  buckets: WeekBucket[];
}

const KEY_STORAGE = 'admin_wau_key';

export default function AdminWauPage() {
  const [key, setKey] = useState('');
  const [data, setData] = useState<WauResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY_STORAGE);
      if (stored) setKey(stored);
    } catch {}
  }, []);

  const fetchWau = async (k: string) => {
    if (!k.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/wau?weeks=8`, {
        headers: { Authorization: `Bearer ${k.trim()}` },
        cache: 'no-store',
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || `HTTP ${res.status}`);
      }
      const json = (await res.json()) as WauResponse;
      setData(json);
      try { localStorage.setItem(KEY_STORAGE, k.trim()); } catch {}
    } catch (err) {
      setError(err instanceof Error ? err.message : 'fetch failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (key && !data && !loading) fetchWau(key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const maxWau = data ? Math.max(1, ...data.buckets.map((b) => b.wau), data.target) : 1;
  const sustainedHit = data
    ? data.buckets.slice(-data.sustainedTargetWeeks).every((b) => b.wau >= data.target)
    : false;

  return (
    <main style={{ maxWidth: 960, margin: '40px auto', padding: '0 24px', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#0f172a' }}>
      <header style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: '#16a34a', textTransform: 'uppercase' }}>North Star</span>
          <span style={{ fontSize: 11, color: '#64748b' }}>Internal · service role key gated</span>
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 800, margin: 0 }}>Weekly Active Users</h1>
        <p style={{ fontSize: 14, color: '#475569', marginTop: 6 }}>
          Union of users who sent ≥1 chat message OR saved ≥1 scenario in the ISO week (Mon–Sun UTC).
          Q4 kill/grow gate: ≥20 WAU sustained 3 weeks straight.
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
              onKeyDown={(e) => { if (e.key === 'Enter') fetchWau(key); }}
            />
            <button
              onClick={() => fetchWau(key)}
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
            <MetricCard label="Current WAU" value={data.currentWau} sub={data.wowDeltaPct !== null ? `${data.wowDeltaPct >= 0 ? '+' : ''}${data.wowDeltaPct}% WoW` : 'no prior data'} accent={data.currentWau >= data.target ? '#16a34a' : '#dc2626'} />
            <MetricCard label="Target" value={data.target} sub={`sustained ${data.sustainedTargetWeeks}w`} accent="#0f172a" />
            <MetricCard label="Q4 gate" value={sustainedHit ? '✓ hit' : '✗ miss'} sub={sustainedHit ? 'grow decision' : 'pivot risk'} accent={sustainedHit ? '#16a34a' : '#dc2626'} />
            <MetricCard label="Gap to target" value={Math.max(0, data.target - data.currentWau)} sub="users to add" accent="#f59e0b" />
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#475569', marginBottom: 12 }}>Trend ({data.windowWeeks} weeks)</h2>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 200, padding: 16, border: '1px solid #e2e8f0', borderRadius: 12, background: '#f8fafc' }}>
              {data.buckets.map((b) => {
                const h = (b.wau / maxWau) * 160;
                const targetH = (data.target / maxWau) * 160;
                const isCurrent = b === data.buckets[data.buckets.length - 1];
                return (
                  <div key={b.weekStart} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, position: 'relative' }}>
                    <div style={{ position: 'absolute', bottom: 24 + targetH, left: 0, right: 0, borderTop: '1px dashed #f59e0b', pointerEvents: 'none' }} />
                    <span style={{ fontSize: 11, fontWeight: 700, color: b.wau >= data.target ? '#16a34a' : '#0f172a' }}>{b.wau}</span>
                    <div style={{
                      width: '100%',
                      height: Math.max(2, h),
                      background: isCurrent ? '#0f172a' : b.wau >= data.target ? '#16a34a' : '#94a3b8',
                      borderRadius: '6px 6px 0 0',
                    }} />
                    <span style={{ fontSize: 10, color: '#64748b' }}>{b.weekLabel}</span>
                  </div>
                );
              })}
            </div>
            <p style={{ fontSize: 11, color: '#94a3b8', marginTop: 8 }}>Dashed line = target ({data.target} WAU). Green bar = hit target. Dark bar = current week.</p>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#475569', marginBottom: 12 }}>Weekly breakdown</h2>
            <div style={{ overflowX: 'auto', border: '1px solid #e2e8f0', borderRadius: 12 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead style={{ background: '#f1f5f9' }}>
                  <tr>
                    <Th>Week</Th><Th>WAU</Th><Th>Chat users</Th><Th>Scenario users</Th><Th>Messages</Th><Th>Sessions</Th><Th>Scenarios</Th>
                  </tr>
                </thead>
                <tbody>
                  {[...data.buckets].reverse().map((b) => (
                    <tr key={b.weekStart} style={{ borderTop: '1px solid #e2e8f0' }}>
                      <Td>{b.weekLabel} <span style={{ color: '#94a3b8', fontSize: 11 }}>({b.weekStart})</span></Td>
                      <Td strong color={b.wau >= data.target ? '#16a34a' : undefined}>{b.wau}</Td>
                      <Td>{b.chatUsers}</Td>
                      <Td>{b.scenarioUsers}</Td>
                      <Td>{b.totalChatMessages}</Td>
                      <Td>{b.totalSessions}</Td>
                      <Td>{b.totalScenarios}</Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#94a3b8', fontSize: 12 }}>
            <span>Generated: {new Date(data.generatedAt).toLocaleString('vi-VN')}</span>
            <button onClick={() => fetchWau(key)} style={{ padding: '6px 14px', background: 'white', border: '1px solid #cbd5e1', borderRadius: 6, fontSize: 12, cursor: 'pointer' }}>Refresh</button>
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

function Th({ children }: { children: React.ReactNode }) {
  return <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#475569' }}>{children}</th>;
}

function Td({ children, strong, color }: { children: React.ReactNode; strong?: boolean; color?: string }) {
  return <td style={{ padding: '10px 12px', fontSize: 13, fontWeight: strong ? 700 : 400, color: color || '#0f172a' }}>{children}</td>;
}
