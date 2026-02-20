'use client';

import { useState } from 'react';
import type { KBTopic } from '@/types';
import KBSectionRenderer from './KBSectionRenderer';
import Icon from '@/components/ui/Icon';

const colorMap: Record<string, string> = {
  'primary-light': 'bg-primary-light',
  'secondary-light': 'bg-secondary-light',
  'mint-light': 'bg-mint-light',
};

interface KBTopicCardProps {
  topic: KBTopic;
  defaultOpen?: boolean;
}

export default function KBTopicCard({ topic, defaultOpen = false }: KBTopicCardProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="clay-card-static mb-3 overflow-hidden">
      {/* Header */}
      <div
        onClick={() => setOpen(!open)}
        className={`${colorMap[topic.color] || 'bg-surface'} px-4 py-3.5 cursor-pointer select-none flex items-center gap-3`}
      >
        <Icon name={topic.icon} size={32} />
        <div className="flex-1 min-w-0">
          <h3 className="text-[14px] font-bold font-[family-name:var(--font-heading)] text-text leading-tight">
            {topic.title}
          </h3>
          <p className="text-[12px] text-text-muted">{topic.subtitle}</p>
        </div>
        <span className={`w-6 h-6 rounded-full border-2 border-text bg-white flex items-center justify-center text-[10px] transition-transform duration-300 shrink-0 ${open ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </div>

      {/* Highlight pills */}
      {topic.highlights && (
        <div className="flex flex-wrap gap-2 px-4 py-2.5 border-t-2 border-border-light">
          {topic.highlights.map((h, i) => (
            <span key={i} className="clay-pill bg-surface !py-1 !px-3 !text-[11px]">
              <strong className="text-cta">{h.value}</strong> {h.label}
            </span>
          ))}
        </div>
      )}

      {/* Expandable content */}
      <div className={`overflow-hidden transition-all duration-350 ${open ? 'max-h-[5000px]' : 'max-h-0'}`}>
        <div className="px-4 pb-4 pt-2 border-t-2 border-border-light">
          {topic.sections.map((section, i) => (
            <KBSectionRenderer key={i} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
}
