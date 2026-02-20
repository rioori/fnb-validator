'use client';

import { useCallback } from 'react';
import { fmtVND, parseVND } from '@/lib/format';

interface VNDInputProps {
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
  readOnly?: boolean;
  className?: string;
}

export default function VNDInput({ value, onChange, placeholder, readOnly, className = '' }: VNDInputProps) {
  const displayValue = value > 0 ? Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') : '';

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = fmtVND(e.target.value);
    e.target.value = formatted;
    onChange(parseVND(formatted));
  }, [onChange]);

  return (
    <input
      type="text"
      inputMode="numeric"
      value={displayValue}
      onChange={handleChange}
      placeholder={placeholder}
      readOnly={readOnly}
      className={`w-full clay-input font-[family-name:var(--font-body)] text-text ${readOnly ? 'bg-surface3 cursor-not-allowed !border-border-light !shadow-none' : ''} ${className}`}
    />
  );
}
