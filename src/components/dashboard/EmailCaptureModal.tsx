'use client';

import { useState, useEffect } from 'react';
import { track } from '@vercel/analytics';
import Icon from '@/components/ui/Icon';
import { useTranslation } from '@/i18n/LocaleProvider';

const COPY = {
  vi: {
    badge: 'MIỄN PHÍ · KHÔNG SPAM',
    heading: 'Nhận 30-day action plan cho quán của bạn',
    body: 'Email gửi 1 lần duy nhất: action plan 30 ngày dựa trên kết quả phân tích vừa rồi + 5 tips tăng lợi nhuận thường gặp cho quán giống bạn. Không subscription, không quảng cáo.',
    placeholder: 'email@cuaban.com',
    cta: 'Gửi cho tôi',
    sending: 'Đang gửi...',
    success: '✓ Đã gửi! Check inbox trong vài phút.',
    invalidEmail: 'Email chưa đúng định dạng.',
    alreadySubscribed: 'Email này đã đăng ký rồi — cảm ơn anh/chị!',
    serverError: 'Có lỗi xảy ra, vui lòng thử lại sau.',
    skip: 'Bỏ qua',
  },
  en: {
    badge: 'FREE · NO SPAM',
    heading: 'Get your 30-day action plan',
    body: 'One-time email: 30-day action plan based on your analysis + top 5 profit-boost tips for shops like yours. No subscription, no ads.',
    placeholder: 'your@email.com',
    cta: 'Send to me',
    sending: 'Sending...',
    success: '✓ Sent! Check your inbox in a few minutes.',
    invalidEmail: 'Invalid email format.',
    alreadySubscribed: 'This email is already subscribed — thanks!',
    serverError: 'Something went wrong, please try again.',
    skip: 'Skip',
  },
} as const;

const STORAGE_KEY = 'validator-email-capture-shown';

export default function EmailCaptureModal() {
  const { locale } = useTranslation();
  const t = COPY[locale === 'en' ? 'en' : 'vi'];
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Show once per browser, only after Dashboard reaches step 6
    const shown = localStorage.getItem(STORAGE_KEY);
    if (shown) return;

    // Delay 15s after Dashboard mount → user has time to read results
    const timer = setTimeout(() => {
      setIsOpen(true);
      track('email_capture_shown', { locale });
    }, 15_000);

    return () => clearTimeout(timer);
  }, [locale]);

  const dismiss = () => {
    setIsOpen(false);
    try { localStorage.setItem(STORAGE_KEY, '1'); } catch {}
    track('email_capture_dismissed', { locale, hadEmail: email.length > 0 });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setErrorMsg('');

    try {
      const utmParams = new URLSearchParams(window.location.search);
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'dashboard-modal',
          locale,
          utm: {
            utm_source: utmParams.get('utm_source') || undefined,
            utm_medium: utmParams.get('utm_medium') || undefined,
            utm_campaign: utmParams.get('utm_campaign') || undefined,
          },
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus('success');
        track('email_capture_success', { locale });
        try { localStorage.setItem(STORAGE_KEY, '1'); } catch {}
        setTimeout(() => setIsOpen(false), 2_000);
        return;
      }

      if (data.error === 'invalid_email') setErrorMsg(t.invalidEmail);
      else if (data.error === 'already_subscribed') setErrorMsg(t.alreadySubscribed);
      else setErrorMsg(t.serverError);
      setStatus('error');
      track('email_capture_error', { locale, error: data.error || 'unknown' });
    } catch {
      setErrorMsg(t.serverError);
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-fade-in">
      <div className="clay-card-static bg-white max-w-md w-full p-6 max-md:p-5 relative">
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-3 right-3 w-8 h-8 rounded-full hover:bg-surface3 flex items-center justify-center text-text-muted hover:text-text transition-colors"
        >
          ✕
        </button>

        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-cta flex items-center justify-center shrink-0 shadow-[2px_2px_0_var(--color-text)]">
            <Icon name="email" size={22} className="text-white" />
          </div>
          <div>
            <div className="text-[10px] font-bold tracking-widest text-cta mb-0.5">{t.badge}</div>
            <h3 className="text-[16px] font-bold font-[family-name:var(--font-heading)] text-text leading-tight">
              {t.heading}
            </h3>
          </div>
        </div>

        <p className="text-[13px] text-text-muted leading-relaxed mb-4">{t.body}</p>

        {status === 'success' ? (
          <div className="text-center py-2 text-[14px] font-semibold text-cta">{t.success}</div>
        ) : (
          <form onSubmit={submit} className="space-y-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.placeholder}
              disabled={status === 'sending'}
              className="w-full clay-input text-[14px]"
            />
            {errorMsg && (
              <div className="text-[12px] text-danger font-medium">{errorMsg}</div>
            )}
            <div className="flex items-center gap-2 pt-1">
              <button
                type="submit"
                disabled={status === 'sending' || !email}
                className="flex-1 clay-btn clay-btn-primary !py-2.5 text-[14px] font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? t.sending : t.cta}
              </button>
              <button
                type="button"
                onClick={dismiss}
                className="text-[12px] text-text-muted hover:text-text transition-colors px-3 py-2"
              >
                {t.skip}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
