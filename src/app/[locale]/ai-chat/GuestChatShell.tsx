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
    subtitle: 'Hỏi mọi điều về kinh doanh quán cafe, nhà hàng, trà sữa, bakery. AI dựa trên data thực tế thị trường Việt Nam — không cần đăng ký, chỉ trả lời dựa trên kiến thức ngành.',
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
    send: 'Gửi',
    sending: 'Đang trả lời...',
    quotaWarning: 'Bạn đã hỏi',
    quotaLimit: '/5 câu hôm nay (free).',
    quotaSignup: 'Đăng ký để hỏi không giới hạn →',
    error: 'Có lỗi xảy ra. Vui lòng thử lại.',
    fullToolCta: 'Muốn AI biết về dự án cụ thể của bạn? Dùng',
    fullToolLink: 'F&B Validator',
    fullToolEnd: '— AI sẽ phân tích chi tiết theo data của bạn.',
    you: 'Bạn',
    ai: 'AI',
  },
  en: {
    backHome: '← Back to home',
    title: 'Free F&B AI Advisor',
    subtitle: 'Ask anything about running a cafe, restaurant, bubble tea or bakery in Vietnam. AI trained on real Vietnam F&B market data — no signup needed, just industry knowledge.',
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
    send: 'Send',
    sending: 'Replying...',
    quotaWarning: 'You\'ve asked',
    quotaLimit: '/5 questions today (free).',
    quotaSignup: 'Sign up for unlimited questions →',
    error: 'Something went wrong. Please try again.',
    fullToolCta: 'Want AI to analyze your specific project? Use',
    fullToolLink: 'F&B Validator',
    fullToolEnd: '— AI will analyze in detail with your data.',
    you: 'You',
    ai: 'AI',
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

export default function GuestChatShell({ locale }: { locale: string }) {
  const t = COPY[locale === 'en' ? 'en' : 'vi'];
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState('');
  const [quotaUsed, setQuotaUsed] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isVi = locale === defaultLocale;

  useEffect(() => {
    setQuotaUsed(getQuotaToday());
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSampleClick = (sample: string) => {
    setInput(sample);
    track('ai_chat_sample_click', { sample, locale });
  };

  const sendMessage = async (content: string) => {
    if (!content.trim() || isStreaming) return;
    if (quotaUsed >= GUEST_DAILY_QUOTA) return;

    setError('');
    setIsStreaming(true);
    const userMsg: Message = { role: 'user', content: content.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
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
        setMessages(messages); // rollback user msg
        setIsStreaming(false);
        return;
      }

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let assistantContent = '';
      let buffer = '';

      setMessages([...newMessages, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const data = line.slice(6).trim();
          if (data === '[DONE]') continue;
          try {
            const json = JSON.parse(data);
            const delta = json.choices?.[0]?.delta?.content;
            if (delta) {
              assistantContent += delta;
              setMessages([
                ...newMessages,
                { role: 'assistant', content: assistantContent },
              ]);
            }
          } catch {
            // ignore parse errors for non-JSON keepalive lines
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
        <nav className="text-sm text-slate-500 mb-4">
          <Link href={localePath('/', locale as Locale)} className="hover:text-slate-900">
            {t.backHome}
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-6">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-2xl bg-cta flex items-center justify-center shrink-0">
              <Icon name="robot" size={26} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-text font-[family-name:var(--font-heading)] leading-tight">
                {t.title}
              </h1>
              <p className="text-sm text-text-muted mt-1">{t.subtitle}</p>
            </div>
          </div>
        </header>

        {/* Sample questions — show only when no messages */}
        {messages.length === 0 && (
          <div className="mb-6">
            <div className="text-[12px] font-bold uppercase tracking-wider text-text-muted mb-2">
              {t.sampleHeading}
            </div>
            <div className="flex flex-wrap gap-2">
              {t.samples.map((sample, i) => (
                <button
                  key={i}
                  onClick={() => handleSampleClick(sample)}
                  className="text-left text-[13px] px-3 py-2 rounded-lg border-2 border-slate-200 hover:border-cta hover:bg-cta/5 transition-colors max-w-full"
                >
                  {sample}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Messages */}
        {messages.length > 0 && (
          <div className="mb-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                    msg.role === 'user' ? 'bg-text text-white' : 'bg-cta text-white'
                  }`}
                >
                  {msg.role === 'user' ? t.you[0] : 'AI'}
                </div>
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-[14px] leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-text text-white'
                      : 'bg-slate-100 text-text'
                  }`}
                >
                  {msg.content || (isStreaming && i === messages.length - 1 ? '...' : '')}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mb-3 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-900 text-[13px]">
            {error}
          </div>
        )}

        {/* Quota warning */}
        {quotaReached && (
          <div className="mb-3 p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-[13px]">
            {t.quotaWarning} {quotaUsed}{t.quotaLimit}{' '}
            <Link href={localePath('/fnb', locale as Locale)} className="underline font-semibold">
              {t.quotaSignup}
            </Link>
          </div>
        )}

        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage(input);
          }}
          className="flex gap-2 items-end"
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage(input);
              }
            }}
            placeholder={t.placeholder}
            disabled={isStreaming || quotaReached}
            rows={2}
            className="flex-1 px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-cta focus:outline-none text-[14px] resize-none disabled:bg-slate-50 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={!input.trim() || isStreaming || quotaReached}
            className="bg-cta hover:bg-cta-hover disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold text-[14px] px-5 py-3 rounded-xl transition-colors h-fit"
          >
            {isStreaming ? t.sending : t.send}
          </button>
        </form>

        <div className="text-[11px] text-text-muted mt-2 text-right">
          {quotaUsed}/5 {isVi ? 'câu hỏi hôm nay' : 'questions today'}
        </div>

        {/* Footer CTA to full tool */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 text-[13px] text-text-muted">
          💡 {t.fullToolCta}{' '}
          <Link
            href={`${localePath('/fnb', locale as Locale)}?utm_source=ai-chat&utm_medium=footer-cta`}
            className="text-cta hover:text-cta-hover font-semibold underline"
          >
            {t.fullToolLink}
          </Link>{' '}
          {t.fullToolEnd}
        </div>
      </main>
    </div>
  );
}
