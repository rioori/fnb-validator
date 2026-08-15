'use client';

import { useEffect, useState, useCallback } from 'react';

interface Candidate {
  id: string;
  source: string;
  source_url: string;
  title: string;
  excerpt: string;
  published_at: string | null;
  ingested_at: string;
  relevance_score: number;
  matched_keywords: string[];
  status: string;
  language: string;
}

interface Preset {
  id: string;
  slug: string;
  label_vi: string;
  label_en: string;
  wizard_url: string;
}

interface Published {
  id: string;
  slug: string;
  locale: string;
  title: string;
  published_at: string;
  view_count: number;
  wizard_click_count: number;
}

const KEY_STORAGE = 'admin_news_key';

const SOURCE_LABELS: Record<string, string> = {
  'vnexpress-kinhdoanh': 'VnExpress',
  'cafef-thi-truong': 'CafeF',
  'vietnambiz-hang-tieu-dung': 'Vietnambiz',
  'vna-kinhte': 'VNA',
};

export default function AdminNewsPage() {
  const [key, setKey] = useState('');
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [presets, setPresets] = useState<Preset[]>([]);
  const [published, setPublished] = useState<Published[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [drafting, setDrafting] = useState<Candidate | null>(null);
  const [viTitle, setViTitle] = useState('');
  const [viSummary, setViSummary] = useState('');
  const [viAngle, setViAngle] = useState('');
  const [enTitle, setEnTitle] = useState('');
  const [enSummary, setEnSummary] = useState('');
  const [enAngle, setEnAngle] = useState('');
  const [presetId, setPresetId] = useState<string>('');
  const [publishing, setPublishing] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY_STORAGE);
      if (stored) setKey(stored);
    } catch {}
  }, []);

  const load = useCallback(async (k: string) => {
    if (!k.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const headers = { Authorization: `Bearer ${k.trim()}` };
      const [cRes, pRes, pubRes] = await Promise.all([
        fetch('/api/admin/news?action=candidates&status=pending&limit=40', { headers, cache: 'no-store' }),
        fetch('/api/admin/news?action=presets', { headers, cache: 'no-store' }),
        fetch('/api/admin/news?action=published&limit=20', { headers, cache: 'no-store' }),
      ]);
      if (!cRes.ok) throw new Error(`candidates: HTTP ${cRes.status}`);
      const cJson = await cRes.json();
      const pJson = pRes.ok ? await pRes.json() : { presets: [] };
      const pubJson = pubRes.ok ? await pubRes.json() : { published: [] };
      setCandidates(cJson.candidates || []);
      setPresets(pJson.presets || []);
      setPublished(pubJson.published || []);
      try { localStorage.setItem(KEY_STORAGE, k.trim()); } catch {}
    } catch (err) {
      setError(err instanceof Error ? err.message : 'load failed');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (key && candidates.length === 0 && !loading) load(key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const openDraft = (c: Candidate) => {
    setDrafting(c);
    setViTitle(c.title);
    setViSummary(c.excerpt.slice(0, 400));
    setViAngle('');
    setEnTitle('');
    setEnSummary('');
    setEnAngle('');
    setPresetId('');
  };

  const closeDraft = () => setDrafting(null);

  const doPick = async (c: Candidate, keep = true) => {
    const headers = { Authorization: `Bearer ${key.trim()}`, 'Content-Type': 'application/json' };
    await fetch(`/api/admin/news?action=${keep ? 'pick' : 'reject'}`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ candidate_id: c.id }),
    });
    setCandidates((cs) => cs.filter((x) => x.id !== c.id));
  };

  const publish = async () => {
    if (!drafting) return;
    setPublishing(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/news?action=publish', {
        method: 'POST',
        headers: { Authorization: `Bearer ${key.trim()}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          candidate_id: drafting.id,
          source_name: SOURCE_LABELS[drafting.source] || drafting.source,
          source_url: drafting.source_url,
          vi: { title: viTitle, summary: viSummary, operator_angle: viAngle },
          en: { title: enTitle, summary: enSummary, operator_angle: enAngle },
          wizard_preset_id: presetId || null,
        }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error || `HTTP ${res.status}`);
      setCandidates((cs) => cs.filter((x) => x.id !== drafting.id));
      closeDraft();
      load(key);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'publish failed');
    } finally {
      setPublishing(false);
    }
  };

  const viWords = viSummary.trim().split(/\s+/).filter(Boolean).length;
  const enWords = enSummary.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: 24, fontFamily: 'system-ui,sans-serif', color: '#0F172A' }}>
      <h1 style={{ fontSize: 28, marginBottom: 4 }}>News Admin</h1>
      <p style={{ color: '#64748B', fontSize: 14, marginBottom: 20 }}>
        Pick candidate → viết operator angle → publish. Summary ≤100 từ (legal safety).
      </p>

      {!key && (
        <div style={{ marginBottom: 20 }}>
          <input
            type="password"
            placeholder="Service role key"
            style={{ padding: 10, border: '2px solid #0F172A', borderRadius: 8, width: 320 }}
            onKeyDown={(e) => { if (e.key === 'Enter') setKey((e.target as HTMLInputElement).value); }}
          />
        </div>
      )}

      {key && (
        <>
          <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
            <button onClick={() => load(key)} disabled={loading} style={btnPri}>
              {loading ? 'Loading…' : 'Reload'}
            </button>
            <button onClick={() => { localStorage.removeItem(KEY_STORAGE); setKey(''); }} style={btnGhost}>
              Clear key
            </button>
            <div style={{ marginLeft: 'auto', fontSize: 13, color: '#64748B' }}>
              {candidates.length} pending · {published.length} recent published
            </div>
          </div>

          {error && <div style={errBox}>{error}</div>}

          <h2 style={h2}>Pending candidates ({candidates.length})</h2>
          <div style={{ display: 'grid', gap: 10, marginBottom: 32 }}>
            {candidates.length === 0 && !loading && (
              <div style={{ padding: 16, background: '#F8FAFC', borderRadius: 8, color: '#64748B' }}>
                Không có candidate mới. Đợi cron ingest (hourly) hoặc trigger manual:
                <code style={code}> /api/cron/news-ingest?key=SERVICE_KEY</code>
              </div>
            )}
            {candidates.map((c) => (
              <div key={c.id} style={card}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 12, color: '#64748B', marginBottom: 4 }}>
                      <span style={badge}>{SOURCE_LABELS[c.source] || c.source}</span>
                      <span style={{ background: '#DCFCE7', color: '#166534', padding: '2px 8px', borderRadius: 4, fontWeight: 700 }}>
                        score {c.relevance_score}
                      </span>
                      {c.matched_keywords?.map((k) => (
                        <span key={k} style={{ color: '#64748B' }}>#{k}</span>
                      ))}
                      {c.published_at && <span>· {new Date(c.published_at).toLocaleString('vi-VN')}</span>}
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>
                      <a href={c.source_url} target="_blank" rel="noopener noreferrer" style={{ color: '#0F172A', textDecoration: 'none' }}>
                        {c.title}
                      </a>
                    </div>
                    <div style={{ fontSize: 13, color: '#475569', lineHeight: 1.5 }}>{c.excerpt.slice(0, 250)}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 100 }}>
                    <button onClick={() => openDraft(c)} style={btnPri}>Draft</button>
                    <button onClick={() => doPick(c, false)} style={btnGhost}>Reject</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 style={h2}>Recent published ({published.length})</h2>
          <div style={{ display: 'grid', gap: 8 }}>
            {published.slice(0, 20).map((p) => (
              <div key={p.id} style={{ ...card, padding: 12 }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: 13 }}>
                  <span style={badge}>{p.locale}</span>
                  <span style={{ fontWeight: 700, flex: 1 }}>{p.title}</span>
                  <span style={{ color: '#64748B' }}>{p.view_count} views · {p.wizard_click_count} wizard clicks</span>
                  <a href={p.locale === 'vi' ? `/tin-tuc/${p.slug}` : `/en/news/${p.slug}`} target="_blank" rel="noopener noreferrer" style={{ color: '#16A34A', fontWeight: 700 }}>
                    →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {drafting && (
        <div style={modal}>
          <div style={modalBox}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <h3 style={{ margin: 0, fontSize: 18 }}>Draft post</h3>
              <button onClick={closeDraft} style={btnGhost}>✕</button>
            </div>
            <div style={{ fontSize: 12, color: '#64748B', marginBottom: 12 }}>
              Nguồn: <a href={drafting.source_url} target="_blank" rel="noopener noreferrer">{SOURCE_LABELS[drafting.source] || drafting.source}</a> · Original: {drafting.title}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <div>
                <h4 style={h4}>Tiếng Việt</h4>
                <label style={lbl}>Title</label>
                <input value={viTitle} onChange={(e) => setViTitle(e.target.value)} style={input} />
                <label style={lbl}>Summary <span style={{ color: viWords > 100 ? '#EF4444' : '#64748B' }}>({viWords}/100 words)</span></label>
                <textarea value={viSummary} onChange={(e) => setViSummary(e.target.value)} rows={5} style={textarea} />
                <label style={lbl}>Operator angle (1-2 câu)</label>
                <textarea value={viAngle} onChange={(e) => setViAngle(e.target.value)} rows={3} style={textarea} placeholder="Vì sao chủ quán quan tâm?" />
              </div>
              <div>
                <h4 style={h4}>English</h4>
                <label style={lbl}>Title</label>
                <input value={enTitle} onChange={(e) => setEnTitle(e.target.value)} style={input} />
                <label style={lbl}>Summary <span style={{ color: enWords > 100 ? '#EF4444' : '#64748B' }}>({enWords}/100 words)</span></label>
                <textarea value={enSummary} onChange={(e) => setEnSummary(e.target.value)} rows={5} style={textarea} />
                <label style={lbl}>Operator angle (1-2 sentences)</label>
                <textarea value={enAngle} onChange={(e) => setEnAngle(e.target.value)} rows={3} style={textarea} placeholder="Why should operators care?" />
              </div>
            </div>

            <div style={{ marginTop: 16 }}>
              <label style={lbl}>Wizard preset (link &ldquo;tính ngay&rdquo; gắn cuối bài)</label>
              <select value={presetId} onChange={(e) => setPresetId(e.target.value)} style={input}>
                <option value="">— No preset (không gắn link wizard) —</option>
                {presets.map((p) => (
                  <option key={p.id} value={p.id}>{p.label_vi} · {p.wizard_url}</option>
                ))}
              </select>
            </div>

            <div style={{ display: 'flex', gap: 10, marginTop: 20, justifyContent: 'flex-end' }}>
              <button onClick={closeDraft} style={btnGhost} disabled={publishing}>Cancel</button>
              <button
                onClick={publish}
                disabled={publishing || !viTitle || !viSummary || !enTitle || !enSummary || viWords > 100 || enWords > 100}
                style={btnPri}
              >
                {publishing ? 'Publishing…' : 'Publish VI + EN'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const btnPri = { background: '#16A34A', color: '#FFF', border: '2px solid #0F172A', padding: '8px 14px', borderRadius: 8, fontWeight: 700, cursor: 'pointer', boxShadow: '2px 2px 0 #0F172A', fontSize: 13 } as const;
const btnGhost = { background: '#FFF', color: '#0F172A', border: '2px solid #0F172A', padding: '8px 14px', borderRadius: 8, fontWeight: 700, cursor: 'pointer', fontSize: 13 } as const;
const card = { background: '#FFF', border: '2px solid #0F172A', borderRadius: 10, padding: 14, boxShadow: '2px 2px 0 #0F172A' } as const;
const errBox = { background: '#FEF2F2', border: '1.5px solid #EF4444', padding: 12, borderRadius: 8, marginBottom: 12, color: '#991B1B', fontSize: 13 } as const;
const h2 = { fontSize: 18, marginTop: 24, marginBottom: 12 } as const;
const h4 = { fontSize: 14, margin: '0 0 8px', textTransform: 'uppercase' as const, letterSpacing: 1, color: '#16A34A' };
const lbl = { display: 'block', fontSize: 12, fontWeight: 700, color: '#64748B', marginTop: 10, marginBottom: 4 } as const;
const input = { width: '100%', padding: 8, border: '1.5px solid #CBD5E1', borderRadius: 6, fontSize: 13, boxSizing: 'border-box' as const, fontFamily: 'inherit' };
const textarea = { ...input, resize: 'vertical' as const, fontFamily: 'inherit', lineHeight: 1.5 };
const badge = { background: '#F1F5F9', padding: '2px 8px', borderRadius: 4, fontSize: 11, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 0.5 } as const;
const code = { background: '#F1F5F9', padding: '2px 6px', borderRadius: 4, fontSize: 12, fontFamily: 'monospace' } as const;
const modal = { position: 'fixed' as const, inset: 0, background: 'rgba(15,23,42,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: 20 };
const modalBox = { background: '#FFF', borderRadius: 12, padding: 24, maxWidth: 900, width: '100%', maxHeight: '90vh', overflowY: 'auto' as const, border: '2px solid #0F172A', boxShadow: '4px 4px 0 #0F172A' };
