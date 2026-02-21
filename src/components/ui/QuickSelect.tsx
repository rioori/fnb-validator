'use client';

import { formatVND } from '@/lib/format';
import { useTranslation } from '@/i18n/LocaleProvider';

interface QuickSelectProps {
  values: number[];
  onSelect: (value: number) => void;
  current?: number;
}

export default function QuickSelect({ values, onSelect, current }: QuickSelectProps) {
  const { locale } = useTranslation();

  return (
    <div className="flex flex-wrap gap-1.5 mt-1.5">
      {values.map((v) => (
        <button
          key={v}
          type="button"
          onClick={() => onSelect(v)}
          className={`text-[11px] px-2.5 py-1 rounded-full border transition-colors cursor-pointer font-medium ${
            current === v
              ? 'bg-cta/10 border-cta text-cta'
              : 'bg-surface3/60 border-border-light text-text-muted hover:border-text hover:text-text'
          }`}
        >
          {formatVND(v, locale)}
        </button>
      ))}
    </div>
  );
}
