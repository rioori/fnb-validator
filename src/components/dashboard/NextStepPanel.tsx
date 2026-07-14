'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { track } from '@vercel/analytics';
import Icon from '@/components/ui/Icon';
import { useTranslation } from '@/i18n/LocaleProvider';
import { useWizardStore } from '@/hooks/useWizardStore';
import { localePath } from '@/i18n/link';
import type { Locale } from '@/i18n/config';
import type { HomeView } from '@/components/home/HomePage';

interface NextStepPanelProps {
  score: number;
  netMargin: number;
  paybackMonth: number | null;
}

type Path = {
  key: 'ai' | 'checklist' | 'stories' | 'refine' | 'save';
  icon: string;
  title: string;
  desc: string;
  cta: string;
  bg: string;
  onClick: () => void;
};

export default function NextStepPanel({ score, netMargin, paybackMonth }: NextStepPanelProps) {
  const { t, locale } = useTranslation();
  const router = useRouter();
  const setStep = useWizardStore((s) => s.setStep);
  const businessMode = useWizardStore((s) => s.businessMode);
  const projectName = useWizardStore((s) => s.projectName);

  const goHomeView = (view: HomeView) => {
    router.push(localePath(`/?view=${view}`, locale as Locale));
  };

  const seedAiWithContext = (question: string) => {
    try {
      sessionStorage.setItem('ai_chat_seed_question', question);
    } catch {}
    goHomeView('ai-chat');
  };

  // Adaptive next-step recommendations based on result
  const isPromising = score >= 65;
  const isStruggling = score < 45;
  const nameHint = projectName ? ` cho "${projectName}"` : '';

  const paths: Path[] = [];

  // Path 1 — always AI (highest engagement signal from personas)
  paths.push({
    key: 'ai',
    icon: 'chat',
    title: isPromising ? 'Đào sâu với AI' : 'Cứu vãn với AI',
    desc: isPromising
      ? `Score ${score}/100 — hỏi AI cách đẩy margin từ ${netMargin.toFixed(0)}% lên cao hơn`
      : `Score ${score}/100 — AI phân tích 3 điểm yếu và đề xuất fix ngay`,
    cta: 'Hỏi AI ngay',
    bg: 'bg-pastel-blue',
    onClick: () => {
      const q = isPromising
        ? `Dự án của tôi score ${score}/100, margin ${netMargin.toFixed(1)}%. 3 hành động cụ thể để lên score 80+ là gì?`
        : `Dự án của tôi score ${score}/100 (dưới ngưỡng an toàn). 3 nguyên nhân lớn nhất và cách sửa từng cái?`;
      track('next_step_click', { path: 'ai', score_bucket: isPromising ? 'promising' : isStruggling ? 'struggling' : 'mid' });
      seedAiWithContext(q);
    },
  });

  // Path 2 — path depends on business mode + score
  if (businessMode === 'new') {
    // Pre-launch: checklist next
    paths.push({
      key: 'checklist',
      icon: 'checklist',
      title: 'Danh sách chuẩn bị mở quán',
      desc: '80+ mục pháp lý, thi công, vận hành — không bỏ sót gì trước khi khai trương',
      cta: 'Xem checklist',
      bg: 'bg-pastel-cream',
      onClick: () => {
        track('next_step_click', { path: 'checklist', score_bucket: isPromising ? 'promising' : isStruggling ? 'struggling' : 'mid' });
        goHomeView('checklist');
      },
    });
  } else {
    // Existing operator: refine numbers
    paths.push({
      key: 'refine',
      icon: 'gear',
      title: 'Chỉnh lại con số',
      desc: 'Quay lại bước Costs để test kịch bản khác (giảm 10% COGS, tăng giá 15%...)',
      cta: 'Quay lại Costs',
      bg: 'bg-pastel-cream',
      onClick: () => {
        track('next_step_click', { path: 'refine', score_bucket: isPromising ? 'promising' : isStruggling ? 'struggling' : 'mid' });
        setStep(5);
      },
    });
  }

  // Path 3 — social proof / peer learning
  paths.push({
    key: 'stories',
    icon: 'stories',
    title: 'Học từ chủ quán khác',
    desc: paybackMonth != null && paybackMonth > 12
      ? `Payback ${paybackMonth} tháng — xem 3 case study cắt payback xuống dưới 12`
      : `Xem 3 câu chuyện chủ quán thật đã tối ưu cost + margin${nameHint}`,
    cta: 'Đọc câu chuyện',
    bg: 'bg-pastel-mint',
    onClick: () => {
      track('next_step_click', { path: 'stories', score_bucket: isPromising ? 'promising' : isStruggling ? 'struggling' : 'mid' });
      router.push(localePath('/cau-chuyen-chu-quan', locale as Locale));
    },
  });

  return (
    <motion.section
      className="clay-card-static bg-white p-4 mt-3 mb-3 no-print"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-flex w-1.5 h-1.5 rounded-full bg-cta animate-pulse" />
        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-cta font-[family-name:var(--font-heading)]">
          Bước tiếp theo
        </span>
        <span className="text-[11px] text-text-muted">— chọn 1 hướng để không mất đà</span>
      </div>

      <div className="grid grid-cols-3 gap-2 max-md:grid-cols-1">
        {paths.map((p) => (
          <button
            key={p.key}
            onClick={p.onClick}
            className={`clay-card block text-left p-3 ${p.bg} cursor-pointer transition-transform hover:-translate-y-0.5`}
          >
            <div className="flex items-center gap-1.5 mb-1.5">
              <Icon name={p.icon} size={18} className="!border-0 !shadow-none !bg-transparent" />
              <h4 className="text-[12px] font-bold text-text font-[family-name:var(--font-heading)] leading-tight">
                {p.title}
              </h4>
            </div>
            <p className="text-[11px] text-text-muted leading-snug mb-2">{p.desc}</p>
            <span className="text-[11px] font-semibold text-cta">{p.cta} →</span>
          </button>
        ))}
      </div>
      <p className="text-[10px] text-text-light mt-2 text-center">
        💡 Chưa chắc chọn gì? Cứ hỏi AI — free, không giới hạn câu hỏi trong ngày.
      </p>
    </motion.section>
  );
}
