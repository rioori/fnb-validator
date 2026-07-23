'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { track } from '@vercel/analytics';
import Icon from '@/components/ui/Icon';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const GUEST_DAILY_QUOTA = 5;

const COPY = {
  vi: {
    backHome: '← Về trang chủ',
    title: 'AI Tư vấn F&B miễn phí',
    subtitle: 'Hỏi mọi điều về kinh doanh quán cafe, nhà hàng, trà sữa, bakery. AI dựa trên data thực tế thị trường Việt Nam — không cần đăng ký.',
    sampleHeading: 'Hỏi gì? Click 1 câu để bắt đầu',
    samples: [
      'Mở quán cafe nhỏ ở Q3 HCMC cần bao nhiêu vốn?',
      'Food cost 38% có cao quá không? Cách giảm xuống 30%?',
      'Tiền thuê mặt bằng nên chiếm bao nhiêu % doanh thu?',
      'Mở tiệm bánh ngọt có lời không, mất bao lâu hoàn vốn?',
      'Nên mở cloud kitchen hay quán có chỗ ngồi?',
      'Cách định giá menu để vừa cạnh tranh vừa có lãi?',
      'Quán đang lỗ — nên cắt giảm cái gì trước?',
    ],
    placeholder: 'Hỏi AI về kinh doanh F&B của bạn...',
    sendBtn: '→',
    quotaWarning: 'Bạn đã hỏi',
    quotaLimit: '/5 câu hôm nay (free).',
    quotaSignup: 'Đăng ký để hỏi không giới hạn →',
    error: 'Có lỗi xảy ra. Vui lòng thử lại.',
    fullToolCta: 'Muốn AI biết về dự án cụ thể của bạn? Dùng',
    fullToolLink: 'F&B Validator',
    fullToolEnd: '— AI sẽ phân tích chi tiết theo data của bạn.',
  },
  en: {
    backHome: '← Back to home',
    title: 'Free F&B AI Advisor',
    subtitle: 'Ask anything about running a cafe, restaurant, bubble tea or bakery in Vietnam. AI trained on real Vietnam F&B market data — no signup needed.',
    sampleHeading: 'What to ask? Click a sample to start',
    samples: [
      'How much capital to open a small cafe in District 3 HCMC?',
      'Is 38% food cost too high? How to reduce to 30%?',
      'What % of revenue should rent be?',
      'Is opening a bakery profitable? How long to break even?',
      'Cloud kitchen or dine-in restaurant — which is better?',
      'How to price menu to be competitive yet profitable?',
      'My shop is losing money — what to cut first?',
    ],
    placeholder: 'Ask AI about your F&B business...',
    sendBtn: '→',
    quotaWarning: 'You\'ve asked',
    quotaLimit: '/5 questions today (free).',
    quotaSignup: 'Sign up for unlimited questions →',
    error: 'Something went wrong. Please try again.',
    fullToolCta: 'Want AI to analyze your specific project? Use',
    fullToolLink: 'F&B Validator',
    fullToolEnd: '— AI will analyze in detail with your data.',
  },
} as const;

const QUOTA_STORAGE_KEY = 'validator-ai-chat-guest-quota';

function getQuotaToday(): number {
  if (typeof window === 'undefined') return 0;
  try {
    const stored = localStorage.getItem(QUOTA_STORAGE_KEY);
    if (!stored) return 0;
    const { date, count } = JSON.parse(stored);
    const today = new Date().toISOString().split('T')[0];
    return date === today ? count : 0;
  } catch {
    return 0;
  }
}

function incrementQuota(): number {
  const today = new Date().toISOString().split('T')[0];
  const current = getQuotaToday();
  const next = current + 1;
  try {
    localStorage.setItem(QUOTA_STORAGE_KEY, JSON.stringify({ date: today, count: next }));
  } catch {
    // ignore
  }
  return next;
}

/** Markdown-lite renderer matching InlineChat boldify+lists */
function boldify(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith('**') && p.endsWith('**')
      ? <strong key={i}>{p.slice(2, -2)}</strong>
      : <span key={i}>{p}</span>
  );
}

function MessageContent({ content }: { content: string }) {
  if (!content) return null;
  const lines = content.split('\n');
  return (
    <div className="space-y-0.5">
      {lines.map((line, i) => {
        if (!line.trim()) return <br key={i} />;
        if (line.match(/^[-•*]\s/)) {
          return (
            <div key={i} className="flex gap-1 items-start">
              <span className="text-text-muted">•</span>
              <span>{boldify(line.replace(/^[-•*]\s/, ''))}</span>
            </div>
          );
        }
        if (line.match(/^#{1,3}\s/)) {
          return <p key={i} className="font-bold mt-1">{boldify(line.replace(/^#{1,3}\s/, ''))}</p>;
        }
        return <p key={i}>{boldify(line)}</p>;
      })}
    </div>
  );
}

export default function GuestChatShell({ locale }: { locale: string }) {
  const t = COPY[locale === 'en' ? 'en' : 'vi'];
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState('');
  const [quotaUsed, setQuotaUsed] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setQuotaUsed(getQuotaToday());
    // Seed input from ?q= query param — used by ExpertFinalCTA and other deep links.
    // Trim + hard-cap to avoid pathological URLs.
    try {
      const url = new URL(window.location.href);
      const seed = url.searchParams.get('q');
      if (seed) {
        setInput(seed.slice(0, 500));
        track('ai_chat_seeded', { source: url.searchParams.get('utm_source') || 'unknown', campaign: url.searchParams.get('utm_campaign') || '' });
      }
    } catch {}
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px';
    }
  }, [input]);

  const handleSampleClick = (sample: string) => {
    setInput(sample);
    textareaRef.current?.focus();
    track('ai_chat_sample_click', { sample, locale });
  };

  const sendMessage = async (content: string) => {
    if (!content.trim() || isStreaming) return;
    if (quotaUsed >= GUEST_DAILY_QUOTA) return;

    setError('');
    setIsStreaming(true);
    const userMsg: Message = { role: 'user', content: content.trim() };
    const newMessages = [...messages, userMsg];
    setMessages([...newMessages, { role: 'assistant', content: '' }]);
    setInput('');

    track('ai_chat_send_guest', { messageLength: content.length, locale });

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
          locale: locale === 'en' ? 'en' : 'vi',
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: t.error }));
        setError(err.error || t.error);
        setMessages(messages); // rollback
        setIsStreaming(false);
        return;
      }

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let assistantContent = '';
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || !trimmed.startsWith('data: ')) continue;
          const data = trimmed.slice(6);
          if (data === '[DONE]') continue;
          try {
            const parsed = JSON.parse(data);
            // /api/chat returns { content: "..." } format
            if (parsed.content) {
              assistantContent += parsed.content;
              setMessages([
                ...newMessages,
                { role: 'assistant', content: assistantContent },
              ]);
            }
          } catch {
            // skip keepalive non-JSON lines
          }
        }
      }

      const newQuota = incrementQuota();
      setQuotaUsed(newQuota);
      track('ai_chat_complete_guest', { quotaUsed: newQuota, locale });
    } catch {
      setError(t.error);
      setMessages(messages);
    } finally {
      setIsStreaming(false);
    }
  };

  const quotaReached = quotaUsed >= GUEST_DAILY_QUOTA;

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-3xl mx-auto px-6 py-8 max-md:px-4 max-md:py-6">
        <nav className="text-sm text-text-muted mb-4">
          <Link href={localePath('/', locale as Locale)} className="hover:text-cta transition-colors">
            {t.backHome}
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-6">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-2xl bg-cta flex items-center justify-center shrink-0 shadow-[2px_2px_0_var(--color-text)]">
              <Icon name="robot" size={26} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-text font-[family-name:var(--font-heading)] leading-tight max-md:text-xl">
                {t.title}
              </h1>
              <p className="text-sm text-text-muted mt-1 max-md:text-[13px]">{t.subtitle}</p>
            </div>
          </div>
        </header>

        {/* Chat container — matches InlineChat clay-card style */}
        <div className="clay-card-static p-5 mb-4 max-md:p-4 bg-white">
          {/* Messages */}
          <div className="min-h-[300px] max-h-[500px] overflow-y-auto space-y-2 mb-3">
            {messages.length === 0 && !isStreaming ? (
              <div className="py-4">
                <p className="text-text-muted text-[12px] mb-3 text-center">{t.sampleHeading}</p>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {t.samples.map((p) => (
                    <button
                      key={p}
                      onClick={() => handleSampleClick(p)}
                      className="text-[12px] px-3 py-1.5 rounded-full border border-border-light hover:border-text hover:bg-surface3 transition-colors cursor-pointer text-text"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] px-3 py-2 rounded-xl text-[13px] leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-pastel-blue text-text rounded-br-sm'
                          : 'bg-surface3 text-text rounded-bl-sm'
                      }`}
                    >
                      <MessageContent content={msg.content} />
                      {msg.role === 'assistant' && !msg.content && isStreaming && (
                        <span className="inline-flex gap-1 py-1">
                          <span className="w-1.5 h-1.5 bg-text-light rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <span className="w-1.5 h-1.5 bg-text-light rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <span className="w-1.5 h-1.5 bg-text-light rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </span>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Error */}
          {error && (
            <div className="px-3 py-1.5 bg-danger/10 text-danger text-xs font-semibold flex items-center justify-between rounded-lg mb-2">
              <span>{error}</span>
              <button onClick={() => setError('')} className="text-danger hover:underline cursor-pointer text-[11px]">✕</button>
            </div>
          )}

          {/* Quota reached warning */}
          {quotaReached && (
            <div className="px-3 py-2 bg-warning/10 text-text text-[12px] rounded-lg mb-2">
              {t.quotaWarning} {quotaUsed}{t.quotaLimit}{' '}
              <Link href={localePath('/fnb', locale as Locale)} className="underline font-semibold text-cta">
                {t.quotaSignup}
              </Link>
            </div>
          )}

          {/* Input */}
          <div className="flex gap-2 items-end">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage(input);
                }
              }}
              placeholder={t.placeholder}
              rows={1}
              className="flex-1 clay-input resize-none text-[13px] !py-2"
              disabled={isStreaming || quotaReached}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || isStreaming || quotaReached}
              className="clay-btn clay-btn-primary !px-3.5 !py-2 disabled:opacity-40 disabled:cursor-not-allowed shrink-0 text-sm"
            >
              {isStreaming ? '...' : t.sendBtn}
            </button>
          </div>

          {/* Quota counter */}
          <div className="text-right mt-1">
            <span className={`text-[10px] font-semibold ${quotaUsed >= 5 ? 'text-danger' : quotaUsed >= 4 ? 'text-warning' : 'text-text-light'}`}>
              {quotaUsed}/5
            </span>
          </div>
        </div>

        {/* Footer CTA to full tool */}
        <div className="clay-card-static bg-cta/5 border-cta/20 p-4 text-[13px] text-text">
          💡 {t.fullToolCta}{' '}
          <Link
            href={`${localePath('/fnb', locale as Locale)}?utm_source=ai-chat&utm_medium=footer-cta`}
            className="text-cta hover:text-cta-hover font-bold underline"
          >
            {t.fullToolLink}
          </Link>{' '}
          {t.fullToolEnd}
        </div>
      </main>
    </div>
  );
}
