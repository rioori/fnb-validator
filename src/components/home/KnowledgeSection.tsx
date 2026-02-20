'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { KNOWLEDGE_BASE } from '@/lib/constants';
import KBTopicCard from '@/components/knowledge/KBTopicCard';
import Icon from '@/components/ui/Icon';
import type { KBCategory } from '@/types';

const STATS = [
  { label: 'Tỷ lệ đóng cửa/năm', value: '~30%', sub: 'quán F&B tại VN' },
  { label: 'Lý do #1', value: 'Thiếu vốn', sub: '+ chi phí thực > dự tính' },
  { label: 'Thời gian hoàn vốn TB', value: '8-18 tháng', sub: 'nếu quản lý tốt' },
  { label: 'Prime Cost an toàn', value: '<65%', sub: 'NVL + Nhân sự / DT' },
];

const CATEGORY_CONFIG: Record<'all' | KBCategory, { label: string }> = {
  all: { label: 'Tất cả' },
  cost: { label: 'Chi phí' },
  operations: { label: 'Vận hành' },
  strategy: { label: 'Chiến lược' },
  legal: { label: 'Pháp lý' },
};

type FilterType = 'all' | KBCategory;

export default function KnowledgeSection() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filtered = filter === 'all'
    ? KNOWLEDGE_BASE
    : KNOWLEDGE_BASE.filter((t) => t.category === filter);

  const filterOptions = Object.entries(CATEGORY_CONFIG) as [FilterType, { label: string }][];

  return (
    <div className="mb-4">
      {/* Header */}
      <div className="clay-card-static bg-pastel-mint p-6 mb-3">
        <div className="text-center">
          <Icon name="book" size={48} className="mx-auto mb-2" />
          <h2 className="text-lg font-bold text-text font-[family-name:var(--font-heading)]">
            Kiến thức F&B cơ bản
          </h2>
          <p className="text-[13px] text-text-muted mt-1 max-w-[520px] mx-auto">
            Tổng hợp kiến thức nền tảng cho người chuẩn bị mở quán F&B — từ chi phí, vận hành, chiến lược đến pháp lý.
          </p>
        </div>
      </div>

      {/* Stats banner */}
      <motion.div
        className="clay-card-static bg-white p-4 mb-3"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <h3 className="text-[11px] font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-muted mb-3 text-center">
          Bạn cần biết
        </h3>
        <div className="grid grid-cols-4 gap-2 max-md:grid-cols-2">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center p-2 rounded-xl bg-surface3/50">
              <span className="text-[18px] font-bold font-[family-name:var(--font-heading)] text-text block max-md:text-[15px]">
                {stat.value}
              </span>
              <span className="text-[10px] text-text-muted block leading-tight">{stat.label}</span>
              <span className="text-[9px] text-text-light">{stat.sub}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Filter pills */}
      <motion.div
        className="flex flex-wrap gap-2 justify-center mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        {filterOptions.map(([key, cfg]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold border-2 transition-all cursor-pointer ${
              filter === key
                ? 'border-cta bg-cta text-white shadow-[2px_2px_0_var(--color-text)]'
                : 'border-border bg-white text-text-muted hover:border-text'
            }`}
          >
            {cfg.label}
          </button>
        ))}
      </motion.div>

      {/* Topic cards */}
      <motion.div
        key={filter}
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.06 } },
        }}
      >
        {filtered.map((topic, index) => (
          <motion.div
            key={topic.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          >
            <KBTopicCard topic={topic} defaultOpen={index === 0} />
          </motion.div>
        ))}
      </motion.div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-8 text-text-muted text-[13px]">
          Không có nội dung cho danh mục này.
        </div>
      )}

      {/* Footer note */}
      <p className="text-center text-[11px] text-text-muted italic mt-4">
        Nội dung tổng hợp từ kinh nghiệm thực tế và số liệu thị trường F&B Việt Nam 2024-2025.
        <br />
        Sử dụng công cụ Thẩm định để tính toán cụ thể cho mô hình của bạn.
      </p>
    </div>
  );
}
