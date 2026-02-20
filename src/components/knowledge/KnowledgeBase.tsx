'use client';

import { useWizardStore } from '@/hooks/useWizardStore';
import { KNOWLEDGE_BASE } from '@/lib/constants';
import KBTopicCard from './KBTopicCard';
import Icon from '@/components/ui/Icon';

export default function KnowledgeBase() {
  const setStep = useWizardStore((s) => s.setStep);

  return (
    <div>
      {/* Hero */}
      <div className="clay-card-static bg-secondary-light p-5 mb-4 text-center">
        <Icon name="book" size={48} className="mx-auto mb-1" />
        <h2 className="text-lg font-bold text-text font-[family-name:var(--font-heading)]">
          Kiến thức F&B cơ bản
        </h2>
        <p className="text-text-muted text-[13px] mt-1 max-w-[600px] mx-auto">
          Đọc qua để hiểu bức tranh toàn cảnh trước khi validate mô hình kinh doanh. Mất khoảng 5 phút.
        </p>
        <button
          onClick={() => setStep(1)}
          className="clay-btn clay-btn-primary mt-3 text-[13px]"
        >
          Bỏ qua, bắt đầu ngay →
        </button>
      </div>

      {/* Topic Cards */}
      {KNOWLEDGE_BASE.map((topic, index) => (
        <KBTopicCard key={topic.id} topic={topic} defaultOpen={index === 0} />
      ))}

      {/* Bottom CTA */}
      <div className="text-center mt-4 mb-2">
        <button
          onClick={() => setStep(1)}
          className="clay-btn clay-btn-primary text-[15px] px-8 py-3"
        >
          Bắt đầu Validate →
        </button>
        <p className="text-text-light text-[11px] mt-2">
          Bạn có thể quay lại đọc bất kỳ lúc nào
        </p>
      </div>
    </div>
  );
}
