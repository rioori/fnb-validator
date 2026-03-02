'use client';

import type { BenchmarkComparison } from '@/types';
import { useTranslation } from '@/i18n/LocaleProvider';

interface BenchmarkPanelProps {
  comparisons: BenchmarkComparison[];
}

const STATUS_PILL: Record<string, string> = {
  good: 'bg-cta/10 text-cta border-cta/20',
  warn: 'bg-warning/10 text-warning border-warning/20',
  bad: 'bg-danger/10 text-danger border-danger/20',
};

const STATUS_VALUE: Record<string, string> = {
  good: 'text-cta',
  warn: 'text-warning',
  bad: 'text-danger',
};

export default function BenchmarkPanel({ comparisons }: BenchmarkPanelProps) {
  const { t } = useTranslation();
  const labels = t.dashboard.benchmark;

  return (
    <div>
      <p className="text-xs text-text-muted mb-3">{labels.subtitle}</p>

      {/* Table header */}
      <div className="grid grid-cols-[1fr_90px_120px_70px] gap-2 px-3 pb-2 border-b-2 border-border-light text-[10px] font-bold text-text-muted uppercase tracking-wider">
        <span></span>
        <span className="text-right">{labels.yourValue}</span>
        <span className="text-center">{labels.industryRange}</span>
        <span className="text-center"></span>
      </div>

      {/* Rows */}
      <div className="divide-y divide-border-light">
        {comparisons.map((cmp) => {
          const metricLabel = labels.metricLabels[cmp.metric as keyof typeof labels.metricLabels] || cmp.metric;
          const statusLabel = cmp.status === 'good' ? labels.statusGood : cmp.status === 'warn' ? labels.statusWarn : labels.statusBad;
          const isRevPerSeat = cmp.metric === 'revenuePerSeat';

          const yourDisplay = isRevPerSeat
            ? `${Math.round(cmp.yourValue).toLocaleString()}đ`
            : `${cmp.yourValue.toFixed(1)}%`;
          const rangeDisplay = isRevPerSeat
            ? `${Math.round(cmp.industryLow).toLocaleString()} – ${Math.round(cmp.industryHigh).toLocaleString()}đ`
            : `${cmp.industryLow} – ${cmp.industryHigh}%`;

          return (
            <div key={cmp.metric} className="grid grid-cols-[1fr_90px_120px_70px] gap-2 items-center px-3 py-2.5">
              {/* Metric name */}
              <span className="text-[13px] font-semibold font-[family-name:var(--font-heading)] flex items-center gap-1.5">
                <span className="text-base">{cmp.icon}</span>
                {metricLabel}
              </span>

              {/* Your value — big & colored */}
              <span className={`text-[15px] font-bold text-right tabular-nums ${STATUS_VALUE[cmp.status]}`}>
                {yourDisplay}
              </span>

              {/* Industry range */}
              <span className="text-[12px] text-text-muted text-center">
                {rangeDisplay}
              </span>

              {/* Status badge */}
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border text-center ${STATUS_PILL[cmp.status]}`}>
                {statusLabel}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
