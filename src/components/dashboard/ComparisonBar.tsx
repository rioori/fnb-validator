'use client';

import type { CalcResults } from '@/types';
import { formatVND } from '@/lib/format';
import { useTranslation } from '@/i18n/LocaleProvider';

interface ComparisonBarProps {
  baseline: CalcResults;
  current: CalcResults;
  baselineLabel: string;
  onClear: () => void;
}

function DeltaBadge({ value, suffix = '', invert = false }: { value: number; suffix?: string; invert?: boolean }) {
  const positive = invert ? value < 0 : value > 0;
  const zero = Math.abs(value) < 0.1;
  if (zero) return <span className="text-[11px] text-text-muted">-</span>;
  return (
    <span className={`text-[11px] font-bold ${positive ? 'text-cta' : 'text-danger'}`}>
      {value > 0 ? '+' : ''}{typeof value === 'number' && Math.abs(value) >= 1000 ? formatVND(value) : value.toFixed(1)}{suffix}
    </span>
  );
}

export default function ComparisonBar({ baseline, current, baselineLabel, onClear }: ComparisonBarProps) {
  const { t } = useTranslation();

  const metrics = [
    {
      label: t.dashboard.comparison.score,
      base: baseline.score,
      curr: current.score,
      delta: current.score - baseline.score,
      fmt: (v: number) => `${v}`,
    },
    {
      label: t.dashboard.comparison.profit,
      base: baseline.stableMonth.netProfit,
      curr: current.stableMonth.netProfit,
      delta: current.stableMonth.netProfit - baseline.stableMonth.netProfit,
      fmt: (v: number) => formatVND(v),
    },
    {
      label: t.dashboard.comparison.payback,
      base: baseline.paybackMonth,
      curr: current.paybackMonth,
      delta: baseline.paybackMonth && current.paybackMonth
        ? current.paybackMonth - baseline.paybackMonth
        : 0,
      fmt: (v: number | null) => v ? `${v} ${t.dashboard.comparison.months}` : t.dashboard.comparison.noPayback,
      invert: true,
    },
    {
      label: t.dashboard.comparison.margin,
      base: baseline.stableMonth.netMargin,
      curr: current.stableMonth.netMargin,
      delta: current.stableMonth.netMargin - baseline.stableMonth.netMargin,
      fmt: (v: number) => `${v.toFixed(1)}%`,
    },
  ];

  return (
    <div className="clay-card-static bg-pastel-blue p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-[13px] font-bold font-[family-name:var(--font-heading)] text-text">
          {t.dashboard.comparison.title}
        </h4>
        <button
          onClick={onClear}
          className="text-[11px] text-text-muted hover:text-danger transition-colors cursor-pointer"
        >
          {t.dashboard.comparison.baseline}: {baselineLabel} &times;
        </button>
      </div>

      <div className="grid grid-cols-4 gap-2 max-md:grid-cols-2">
        {metrics.map((m) => (
          <div key={m.label} className="clay-sm bg-white/70 p-2.5 text-center">
            <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">{m.label}</div>
            <div className="text-[11px] text-text-light line-through">{m.fmt(m.base as never)}</div>
            <div className="text-sm font-bold font-[family-name:var(--font-heading)]">{m.fmt(m.curr as never)}</div>
            <DeltaBadge value={m.delta} invert={'invert' in m && m.invert === true} />
          </div>
        ))}
      </div>
    </div>
  );
}
