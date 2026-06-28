import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';

interface AIChatCTAProps {
  locale: string;
  topic?: string;
}

const COPY = {
  vi: {
    badge: 'AI MIỄN PHÍ',
    heading: 'Hỏi AI ngay — không cần đăng ký',
    body: 'Hỏi mọi điều về kinh doanh F&B, AI trả lời dựa trên data thực tế thị trường Việt Nam. 5 câu/ngày free.',
    cta: 'Chat với AI →',
  },
  en: {
    badge: 'FREE AI',
    heading: 'Ask AI now — no signup required',
    body: 'Ask anything about F&B business, AI replies based on real Vietnam market data. 5 questions/day free.',
    cta: 'Chat with AI →',
  },
} as const;

export default function AIChatCTA({ locale, topic }: AIChatCTAProps) {
  const t = COPY[locale === 'en' ? 'en' : 'vi'];
  const base = locale === defaultLocale ? '/ai-chat' : localePath('/ai-chat', 'en' as Locale);
  const params = new URLSearchParams();
  params.set('utm_source', 'article');
  params.set('utm_medium', 'inline-chat-cta');
  if (topic) params.set('topic', topic);
  const url = `${base}?${params.toString()}`;

  return (
    <div className="my-5 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200">
      <div className="flex items-center gap-3 max-md:flex-col max-md:items-start max-md:gap-2">
        <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
          <Icon name="robot" size={22} className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] font-bold tracking-widest text-blue-700 mb-0.5">{t.badge}</div>
          <div className="text-[14px] font-bold text-text leading-tight">{t.heading}</div>
          <div className="text-[12px] text-text-muted mt-0.5">{t.body}</div>
        </div>
        <Link
          href={url}
          className="shrink-0 inline-flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[13px] px-4 py-2 rounded-lg transition-colors max-md:w-full max-md:justify-center"
        >
          {t.cta}
        </Link>
      </div>
    </div>
  );
}
