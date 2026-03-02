'use client';

import { useState } from 'react';
import { useTranslation } from '@/i18n/LocaleProvider';
import { getStoredUTM } from '@/hooks/useUTM';

export default function NewsletterSignup() {
  const { t, locale } = useTranslation();
  const n = t.common.newsletter;
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setMsg('');

    try {
      const utm = getStoredUTM();
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'footer', locale, utm }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMsg(n.success);
        setEmail('');
      } else if (data.error === 'already_subscribed') {
        setStatus('success');
        setMsg(n.duplicate);
      } else if (data.error === 'invalid_email') {
        setStatus('error');
        setMsg(n.errorInvalid);
      } else {
        setStatus('error');
        setMsg(n.errorServer);
      }
    } catch {
      setStatus('error');
      setMsg(n.errorServer);
    }
  }

  return (
    <div className="clay-card-static bg-pastel-mint/50 p-4 rounded-xl">
      <h4 className="text-[12px] font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text mb-1">
        {n.heading}
      </h4>
      <p className="text-[11px] text-text-muted mb-3">{n.desc}</p>
      {status === 'success' ? (
        <div className="flex items-center gap-2 py-2">
          <span className="text-cta text-base">✓</span>
          <p className="text-[13px] text-cta font-medium">{msg}</p>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle'); }}
              placeholder={n.placeholder}
              required
              className="flex-1 text-[12px] rounded-lg border border-border-light px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-cta"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="clay-btn clay-btn-primary text-[12px] px-4 py-2 whitespace-nowrap"
            >
              {status === 'loading' ? '...' : n.button}
            </button>
          </form>
          {status === 'error' && <p className="text-[11px] text-red-500 mt-1.5">{msg}</p>}
        </>
      )}
    </div>
  );
}
