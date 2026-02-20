'use client';

import { useState } from 'react';

interface CollapsibleSectionProps {
  title: string;
  defaultOpen?: boolean;
  badge?: string;
  children: React.ReactNode;
}

export default function CollapsibleSection({ title, defaultOpen = true, badge, children }: CollapsibleSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="clay-card-static p-4 mb-3">
      <h3
        onClick={() => setOpen(!open)}
        className="text-[13px] mb-0 flex items-center justify-between cursor-pointer select-none font-semibold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-muted"
      >
        <span className="flex items-center gap-2">
          {title}
          {badge && <span className="clay-pill bg-secondary text-text text-[10px] py-0 px-2">{badge}</span>}
        </span>
        <span className={`w-6 h-6 rounded-full border-2 border-text bg-white flex items-center justify-center text-[10px] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </h3>
      <div
        className={`overflow-hidden transition-all duration-350 ${open ? 'mt-3 max-h-[5000px]' : 'max-h-0'}`}
      >
        {children}
      </div>
    </div>
  );
}
