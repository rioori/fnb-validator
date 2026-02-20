'use client';

import type { DynItem } from '@/types';
import VNDInput from './VNDInput';

interface DynItemListProps {
  items: DynItem[];
  onAdd: () => void;
  onRemove: (id: string) => void;
  onUpdate: (id: string, field: 'name' | 'amount', value: string | number) => void;
  addLabel?: string;
}

export default function DynItemList({ items, onAdd, onRemove, onUpdate, addLabel = '+ Thêm mục' }: DynItemListProps) {
  return (
    <div>
      <div className="mb-2">
        {items.map((item) => (
          <div key={item.id} className="flex gap-2 items-center mb-2 animate-fade-in-up">
            <input
              type="text"
              value={item.name}
              onChange={(e) => onUpdate(item.id, 'name', e.target.value)}
              placeholder="Tên mục"
              className="flex-[2] clay-input font-[family-name:var(--font-body)] text-text"
            />
            <div className="flex-1">
              <VNDInput
                value={item.amount}
                onChange={(v) => onUpdate(item.id, 'amount', v)}
                placeholder="Số tiền"
              />
            </div>
            <button
              onClick={() => onRemove(item.id)}
              className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 border-border-light text-text-light hover:border-danger hover:text-danger hover:bg-danger/10 transition-colors cursor-pointer font-bold text-sm"
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
        {addLabel}
      </button>
    </div>
  );
}
