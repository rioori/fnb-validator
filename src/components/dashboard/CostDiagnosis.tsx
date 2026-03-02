'use client';

import type { CostDiagnosisItem } from '@/types';
import { formatVND } from '@/lib/format';
import { useTranslation, tpl } from '@/i18n/LocaleProvider';

interface CostDiagnosisProps {
  items: CostDiagnosisItem[];
}

const STATUS_COLORS = {
  good: 'bg-mint-light text-cta',
  warn: 'bg-primary-light text-warning',
  bad: 'bg-[#FEE2E2] text-danger',
};

export default function CostDiagnosis({ items }: CostDiagnosisProps) {
  const { t } = useTranslation();
  const labels = t.dashboard.costDiagnosis;

  if (items.length === 0) return null;

  return (
    <div>
      <p className="text-xs text-text-muted mb-3">{labels.subtitle}</p>
      <div className="space-y-2.5">
        {items.map((item) => {
          const catLabel = labels.categoryLabels[item.category as keyof typeof labels.categoryLabels] || item.category;
          const statusLabel = item.status === 'good' ? labels.statusGood : item.status === 'warn' ? labels.statusWarn : labels.statusBad;
          const barWidth = Math.min(100, item.pctOfRevenue * 2.5); // scale for visual

          return (
            <div key={item.category} className="clay-sm p-3">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-semibold font-[family-name:var(--font-heading)] flex items-center gap-1.5">
                  <span className="text-base">{item.icon}</span> {catLabel}
                </span>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${STATUS_COLORS[item.status]}`}>
                  {statusLabel}
                </span>
              </div>

              {/* Bar */}
              <div className="relative h-5 bg-surface3/60 rounded-full overflow-hidden border border-border-light mb-1.5">
                <div
                  className={`absolute inset-y-0 left-0 rounded-full transition-all duration-500 ${
                    item.status === 'good' ? 'bg-cta/30' : item.status === 'warn' ? 'bg-warning/30' : 'bg-danger/30'
                  }`}
                  style={{ width: `${barWidth}%` }}
                />
                {/* Benchmark range markers */}
                <div
                  className="absolute inset-y-0 border-l-2 border-dashed border-text/20"
                  style={{ left: `${Math.min(100, item.benchmarkRange[0] * 2.5)}%` }}
                />
                <div
                  className="absolute inset-y-0 border-l-2 border-dashed border-text/20"
                  style={{ left: `${Math.min(100, item.benchmarkRange[1] * 2.5)}%` }}
                />
                {/* Value label */}
                <span className="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-text">
                  {item.pctOfRevenue.toFixed(1)}%
                </span>
              </div>

              <div className="flex items-center justify-between text-[11px] text-text-muted">
                <span>{formatVND(item.amount)}</span>
                <span>{tpl(labels.benchmark, { lo: String(item.benchmarkRange[0]), hi: String(item.benchmarkRange[1]) })}</span>
              </div>

              {item.potentialSaving > 0 && (
                <div className="text-[11px] text-danger font-medium mt-1">
                  {tpl(labels.overBenchmark, { amount: formatVND(item.potentialSaving) })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
