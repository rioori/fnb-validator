'use client';

import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import { useTranslation } from '@/i18n/LocaleProvider';
import { localePath } from '@/i18n/link';
import type { Locale } from '@/i18n/config';

interface TrendSnippet {
  title: string;
  summary: string;
  category: string;
  pillClass: string;
  icon: string;
  bg: string;
}

const TRENDS_VI: TrendSnippet[] = [
  {
    title: '50.000+ quán đóng cửa H1/2025–2026',
    summary: 'Thị trường co lại nhưng doanh thu tăng — tiền chảy từ quán yếu sang quán mạnh. Cơ hội cho người mở đúng cách.',
    category: 'Thị trường',
    pillClass: 'bg-pastel-blue text-text',
    icon: 'chart',
    bg: 'bg-pastel-blue',
  },
  {
    title: 'Chi ít hơn, uống nhiều hơn',
    summary: '77,5% khách chọn đồ uống 21-50K. Tần suất tăng gấp đôi nhưng chi tiêu mỗi lần giảm. Sweet spot: 25-45K.',
    category: 'Người tiêu dùng',
    pillClass: 'bg-pastel-gold text-text',
    icon: 'users',
    bg: 'bg-pastel-gold',
  },
  {
    title: 'AI & tự động hóa đã vào quán',
    summary: 'Từ menu QR, POS cloud đến AI dự đoán tồn kho — công nghệ không còn xa xỉ mà là bắt buộc.',
    category: 'Công nghệ',
    pillClass: 'bg-pastel-mint text-text',
    icon: 'bolt',
    bg: 'bg-pastel-mint',
  },
];

const TRENDS_EN: TrendSnippet[] = [
  {
    title: '50,000+ shops closed H1/2025–2026',
    summary: 'Market shrank but revenue grew — money flows from weak to strong operators. Huge opportunity for well-prepared entrants.',
    category: 'Market',
    pillClass: 'bg-pastel-blue text-text',
    icon: 'chart',
    bg: 'bg-pastel-blue',
  },
  {
    title: 'Spend less, drink more often',
    summary: '77.5% of customers pick drinks at 21-50K VND. Frequency doubled but per-visit spend dropped. Sweet spot: 25-45K.',
    category: 'Consumer',
    pillClass: 'bg-pastel-gold text-text',
    icon: 'users',
    bg: 'bg-pastel-gold',
  },
  {
    title: 'AI & automation hit the shop floor',
    summary: 'From QR menus and cloud POS to AI-powered inventory — tech is no longer optional, it\'s essential.',
    category: 'Technology',
    pillClass: 'bg-pastel-mint text-text',
    icon: 'bolt',
    bg: 'bg-pastel-mint',
  },
];

interface Props {
  heading: string;
  desc: string;
  viewAllLabel: string;
  /** Where "View all" links to — defaults to the canonical /thi-truong-fnb route. */
  viewAllHref?: string;
}

export default function TrendPreview({ heading, desc, viewAllLabel, viewAllHref }: Props) {
  const { locale } = useTranslation();
  const trends = locale === 'en' ? TRENDS_EN : TRENDS_VI;
  const href = viewAllHref || localePath('/thi-truong-fnb', locale as Locale);

  return (
    <div className="mb-4">
      {/* Section header */}
      <div className="text-center mb-4">
        <h2 className="text-[15px] font-bold font-[family-name:var(--font-heading)] text-text">
          {heading}
        </h2>
        <p className="text-[12px] text-text-muted mt-1">{desc}</p>
      </div>

      {/* Trend cards — 3 cols desktop, 1 col mobile */}
      <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1">
        {trends.map((trend) => (
          <div
            key={trend.title}
            className={`clay-card ${trend.bg} p-4 flex flex-col`}
          >
            {/* Category pill + icon */}
            <div className="flex items-center gap-2 mb-2">
              <Icon name={trend.icon} size={24} className="!border-[1.5px] !shadow-none" />
              <span className={`clay-pill !text-[10px] ${trend.pillClass}`}>
                {trend.category}
              </span>
            </div>
            {/* Title */}
            <h3 className="text-[13px] font-bold font-[family-name:var(--font-heading)] text-text leading-tight mb-2">
              {trend.title}
            </h3>
            {/* Summary */}
            <p className="text-[12px] text-text-muted leading-relaxed flex-1">
              {trend.summary}
            </p>
          </div>
        ))}
      </div>

      {/* View all link */}
      <div className="text-center mt-3">
        <Link
          href={href}
          className="text-[13px] font-semibold text-cta hover:underline"
        >
          {viewAllLabel}
        </Link>
      </div>
    </div>
  );
}
