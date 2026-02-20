'use client';

import { useState, useEffect, useCallback } from 'react';
import { CHECKLIST } from '@/lib/constants';
import Icon from '@/components/ui/Icon';

export default function ChecklistPanel() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('fnb_cl') || '{}');
      setChecked(saved);
    } catch { /* empty */ }
  }, []);

  const toggle = useCallback((key: string) => {
    setChecked(prev => {
      const next = { ...prev, [key]: !prev[key] };
      localStorage.setItem('fnb_cl', JSON.stringify(next));
      return next;
    });
  }, []);

  const toggleGroup = useCallback((key: string) => {
    setOpenGroups(prev => ({ ...prev, [key]: !prev[key] }));
  }, []);

  return (
    <div>
      {Object.entries(CHECKLIST).map(([ck, cat]) => {
        const done = cat.items.filter((_, i) => checked[`${ck}_${i}`]).length;
        const isOpen = openGroups[ck] || false;

        return (
          <div key={ck} className="mb-2.5">
            <div
              onClick={() => toggleGroup(ck)}
              className="flex items-center gap-2 px-4 py-2.5 clay-sm cursor-pointer font-medium text-sm font-[family-name:var(--font-heading)] hover:bg-surface3 transition-all"
            >
              <Icon name={cat.icon} size={22} /> {cat.name}
              <span className="ml-auto clay-pill !py-0.5 !px-2.5 !text-xs bg-mint-light">
                {done}/{cat.items.length}
              </span>
            </div>
            {isOpen && (
              <div className="py-1 pl-5">
                {cat.items.map((item, i) => {
                  const key = `${ck}_${i}`;
                  const isChecked = !!checked[key];
                  return (
                    <div key={i} className="flex items-start gap-2 py-1.5 text-sm border-b border-border-light last:border-b-0">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggle(key)}
                        className="mt-0.5 w-4 h-4 accent-accent cursor-pointer"
                      />
                      <label className={`cursor-pointer ${isChecked ? 'line-through text-text-light' : ''}`}>{item}</label>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
