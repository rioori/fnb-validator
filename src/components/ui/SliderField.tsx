'use client';

interface SliderFieldProps {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  suffix?: string;
  hint?: string;
}

export default function SliderField({ label, value, min, max, onChange, suffix = '%', hint }: SliderFieldProps) {
  return (
    <div className="mb-4">
      <label className="flex justify-between text-sm font-semibold font-[family-name:var(--font-heading)]">
        {label}
        <span className="clay-pill bg-mint text-text text-xs py-0.5 px-2.5">{value}{suffix}</span>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full mt-2"
      />
      {hint && <div className="text-xs text-text-muted mt-1 leading-relaxed">{hint}</div>}
    </div>
  );
}
