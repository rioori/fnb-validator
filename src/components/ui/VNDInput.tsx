'use client';

import { useCallback } from 'react';
import { fmtVND, parseVND, formatVND } from '@/lib/format';
import { useTranslation } from '@/i18n/LocaleProvider';

interface VNDInputProps {
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
  readOnly?: boolean;
  className?: string;
  /** Hide the abbreviated label below input */
  hideAbbr?: boolean;
}

export default function VNDInput({ value, onChange, placeholder, readOnly, className = '', hideAbbr }: VNDInputProps) {
  const { locale } = useTranslation();
  const displayValue = value > 0 ? Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') : '';

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = fmtVND(e.target.value);
    e.target.value = formatted;
    onChange(parseVND(formatted));
  }, [onChange]);

  const showAbbr = !hideAbbr && value >= 1_000_000;

  return (
    <div>
      <input
        type="text"
        inputMode="numeric"
        value={displayValue}
        onChange={handleChange}
        placeholder={placeholder}
        readOnly={readOnly}
        className={`w-full clay-input font-[family-name:var(--font-body)] text-text max-md:text-[13px] ${readOnly ? 'bg-surface3 cursor-not-allowed !border-border-light !shadow-none' : ''} ${className}`}
      />
      {showAbbr && (
        <span className="text-[11px] text-text-muted mt-0.5 block">= {formatVND(value, locale)}</span>
      )}
    </div>
  );
}
