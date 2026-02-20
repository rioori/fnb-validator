'use client';

import { motion } from 'framer-motion';
import { useWizardStore } from '@/hooks/useWizardStore';
import Icon from '@/components/ui/Icon';
import type { HomeView } from './HomePage';

const features = [
  // Row 1: Giới thiệu, Thẩm định, Tính nhanh, Hỏi đáp AI
  {
    icon: 'person',
    title: 'Giới thiệu',
    desc: 'Câu chuyện đằng sau F&B Validator và người tạo ra nó.',
    action: 'about' as const,
    cta: 'Xem thêm →',
    bg: 'bg-pastel-gold',
  },
  {
    icon: 'wizard',
    title: 'Thẩm định mô hình',
    desc: '6 bước phân tích: mô hình, vị trí, vốn, doanh thu, chi phí.',
    action: 'start-wizard' as const,
    cta: 'Bắt đầu →',
    bg: 'bg-pastel-blush',
  },
  {
    icon: 'bolt',
    title: 'Tính nhanh',
    desc: 'Nhập vài con số, xem ngay lợi nhuận ước tính và điểm khả thi.',
    action: 'quick-calc' as const,
    cta: 'Thử ngay →',
    bg: 'bg-pastel-mint',
  },
  {
    icon: 'chat',
    title: 'Hỏi đáp AI',
    desc: 'Hỏi AI về chiến lược, chi phí, vận hành F&B.',
    action: 'ai-chat' as const,
    cta: 'Hỏi ngay →',
    bg: 'bg-pastel-blue',
  },
  // Row 2: Kiến thức, Câu chuyện, Xu hướng, Checklist
  {
    icon: 'book',
    title: 'Kiến thức F&B',
    desc: 'Cấu trúc chi phí, benchmark, vòng đời quán trước khi bắt đầu.',
    action: 'knowledge' as const,
    cta: 'Đọc thêm →',
    bg: 'bg-pastel-cream',
  },
  {
    icon: 'stories',
    title: 'Câu chuyện F&B',
    desc: 'Những bài học thành công và thất bại từ người trong cuộc.',
    action: 'stories' as const,
    cta: 'Đọc ngay →',
    bg: 'bg-pastel-blush',
  },
  {
    icon: 'trending',
    title: 'Xu hướng F&B',
    desc: 'Xu hướng 2025-2026, mô hình mới, insight thị trường từ dữ liệu thực.',
    action: 'trends' as const,
    cta: 'Khám phá →',
    bg: 'bg-pastel-gold',
  },
  {
    icon: 'checklist',
    title: 'Checklist mở quán',
    desc: '80+ mục cần chuẩn bị từ pháp lý, thi công đến vận hành.',
    action: 'checklist' as const,
    cta: 'Xem ngay →',
    bg: 'bg-pastel-blue',
  },
];

interface FeatureCardsProps {
  onNavigate: (view: HomeView) => void;
}

export default function FeatureCards({ onNavigate }: FeatureCardsProps) {
  const setStep = useWizardStore((s) => s.setStep);

  const comingSoon: string[] = [];

  const handleAction = (action: string) => {
    if (comingSoon.includes(action)) return;
    if (action === 'start-wizard') {
      setStep(1);
    } else {
      onNavigate(action as HomeView);
    }
  };

  return (
    <motion.div
      className="grid grid-cols-4 gap-3 mb-4 max-md:grid-cols-2"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.06 } },
      }}
    >
      {features.map((f) => {
        const isDisabled = comingSoon.includes(f.action);
        return (
          <motion.div
            key={f.action}
            onClick={() => handleAction(f.action)}
            className={`clay-card ${f.bg} p-5 text-center flex flex-col items-center ${isDisabled ? 'opacity-50 cursor-default' : 'cursor-pointer'}`}
            variants={{
              hidden: { opacity: 0, y: 24, scale: 0.95 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          >
            <Icon name={f.icon} size={44} className="mx-auto mb-2" />
            <h3 className="text-[14px] font-bold font-[family-name:var(--font-heading)] text-text mb-1">
              {f.title}
            </h3>
            <p className="text-[12px] text-text-muted leading-relaxed mb-3 flex-1">{f.desc}</p>
            <span className={`clay-pill text-[11px] ${isDisabled ? 'bg-surface3 text-text-light' : 'bg-white text-text'}`}>
              {f.cta}
            </span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
