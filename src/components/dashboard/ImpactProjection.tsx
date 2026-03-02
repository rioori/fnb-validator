'use client';

import type { DiagnosisResults } from '@/types';
import { formatVND } from '@/lib/format';
import { useTranslation } from '@/i18n/LocaleProvider';

interface ImpactProjectionProps {
  results: DiagnosisResults;
}

export default function ImpactProjection({ results }: ImpactProjectionProps) {
  const { t } = useTranslation();
  const d = t.dashboard.impactProjection;

  const totalImpact = results.quickWins.reduce((s, w) => s + w.monthlyImpact, 0);
  if (totalImpact <= 0) return null;

  const projectedProfit = results.netProfit + totalImpact;
  const projectedMargin = results.revenue > 0 ? (projectedProfit / results.revenue * 100) : 0;
  const annual = totalImpact * 12;

  return (
    <div>
      <p className="text-[13px] text-text-muted mb-3">{d.subtitle}</p>

      {/* Current vs Projected side-by-side */}
      <div className="grid grid-cols-2 gap-3 mb-4 max-md:grid-cols-1">
        <div className="clay-sm p-4 bg-surface2">
          <div className="text-[10px] text-text-muted uppercase tracking-wider mb-2">{d.current}</div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-[13px]">
              <span className="text-text-muted">{d.profit}</span>
              <span className={`font-bold ${results.netProfit >= 0 ? 'text-cta' : 'text-danger'}`}>
                {formatVND(results.netProfit)}
              </span>
            </div>
            <div className="flex justify-between text-[13px]">
              <span className="text-text-muted">{d.margin}</span>
              <span className="font-bold text-text">{results.netMargin.toFixed(1)}%</span>
            </div>
          </div>
        </div>

        <div className="clay-sm p-4 bg-mint-light border-l-[4px] border-l-cta">
          <div className="text-[10px] text-cta uppercase tracking-wider mb-2 font-semibold">{d.projected}</div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-[13px]">
              <span className="text-text-muted">{d.profit}</span>
              <span className={`font-bold ${projectedProfit >= 0 ? 'text-cta' : 'text-danger'}`}>
                {formatVND(projectedProfit)}
              </span>
            </div>
            <div className="flex justify-between text-[13px]">
              <span className="text-text-muted">{d.margin}</span>
              <span className="font-bold text-cta">{projectedMargin.toFixed(1)}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary stats */}
      <div className="clay-sm p-4 bg-pastel-gold/30 text-center">
        <div className="text-[11px] text-text-muted uppercase tracking-wider mb-1">{d.totalSavings}</div>
        <div className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text tracking-tight">
          +{formatVND(totalImpact)}<span className="text-[13px] text-text-muted font-normal">/{d.perMonth}</span>
        </div>
        <div className="text-[12px] text-text-muted mt-1">
          = +{formatVND(annual)}/{d.perYear}
        </div>
      </div>

      {/* Breakdown by quick win */}
      <div className="mt-3 space-y-1.5">
        {results.quickWins.map((w, i) => (
          <div key={w.id} className="flex items-center gap-2 text-[12px]">
            <span className="text-text-muted w-4 text-right shrink-0">{i + 1}.</span>
            <span className="flex-1 text-text truncate">{t.dashboard.quickWins[`${w.titleKey}` as keyof typeof t.dashboard.quickWins]}</span>
            <span className="text-cta font-semibold shrink-0">+{formatVND(w.monthlyImpact)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
