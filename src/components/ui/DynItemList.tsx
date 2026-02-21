'use client';

import type { DynItem } from '@/types';
import { useTranslation } from '@/i18n/LocaleProvider';
import VNDInput from './VNDInput';

interface DynItemListProps {
  items: DynItem[];
  onAdd: () => void;
  onRemove: (id: string) => void;
  onUpdate: (id: string, field: 'name' | 'amount', value: string | number) => void;
  addLabel?: string;
}

export default function DynItemList({ items, onAdd, onRemove, onUpdate, addLabel }: DynItemListProps) {
  const { t } = useTranslation();
  const defaultLabel = addLabel ?? t.common.buttons.addItem;

  return (
    <div>
      <div className="mb-2">
        {items.map((item) => (
          <div key={item.id} className="flex gap-2 items-start mb-2 animate-fade-in-up">
            <input
              type="text"
              value={item.name}
              onChange={(e) => onUpdate(item.id, 'name', e.target.value)}
              placeholder={t.common.buttons.itemName}
              className="flex-[2] clay-input font-[family-name:var(--font-body)] text-text max-md:text-[13px]"
            />
            <div className="flex-1 min-w-0">
              <VNDInput
                value={item.amount}
                onChange={(v) => onUpdate(item.id, 'amount', v)}
                placeholder={t.common.buttons.amount}
              />
            </div>
            <button
              onClick={() => onRemove(item.id)}
              className="shrink-0 w-8 h-8 mt-1.5 flex items-center justify-center rounded-full border-2 border-border-light text-text-light hover:border-danger hover:text-danger hover:bg-danger/10 transition-colors cursor-pointer font-bold text-sm"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={onAdd}
        className="clay-btn clay-btn-secondary text-xs py-2 px-4 !border-dashed"
      >
        {defaultLabel}
      </button>
    </div>
  );
}
