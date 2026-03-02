'use client';

import { useMemo } from 'react';
import type { CalcResults } from '@/types';
import { generateSuggestions } from '@/lib/optimization';
import { formatVND } from '@/lib/format';
import { useTranslation, tpl } from '@/i18n/LocaleProvider';

interface OptimizationPanelProps {
  results: CalcResults;
  rent: number;
  cogsPct: number;
  wastePct: number;
  deliveryPct: number;
  deliveryCommPct: number;
  staffTotal: number;
  ticket: number;
}

const PRIORITY_STYLES = {
  high: 'bg-[#FEE2E2] border-danger text-danger',
  medium: 'bg-pastel-gold border-text text-text',
  low: 'bg-mint-light border-text text-text-muted',
};

export default function OptimizationPanel({
  results, rent, cogsPct, wastePct, deliveryPct, deliveryCommPct, staffTotal, ticket,
}: OptimizationPanelProps) {
  const { t } = useTranslation();

  const suggestions = useMemo(
    () => generateSuggestions(results, { rent, cogsPct, wastePct, deliveryPct, deliveryCommPct, staffTotal, ticket }),
    [results, rent, cogsPct, wastePct, deliveryPct, deliveryCommPct, staffTotal, ticket],
  );

  const priorityLabel = (p: 'high' | 'medium' | 'low') =>
    p === 'high' ? t.dashboard.optimization.priorityHigh
    : p === 'medium' ? t.dashboard.optimization.priorityMedium
    : t.dashboard.optimization.priorityLow;

  // Template data for desc strings
  const tplData: Record<string, Record<string, string | number>> = {
    rent: { pct: results.rentRatio.toFixed(1) },
    cogs: { pct: results.cogsPct.toFixed(1) },
    waste: { pct: wastePct },
    delivery: { pct: deliveryCommPct },
    staff: { pct: results.laborRatio.toFixed(1) },
    pricing: { pct: results.stableMonth.netMargin.toFixed(1) },
    volume: {},
    workingCap: {
      months: results.workingCapMonths.toFixed(1),
      shortfall: formatVND(Math.max(0, results.fixedMonthly * 3 - results.fixedMonthly * results.workingCapMonths)),
    },
  };

  // Access dictionary keys dynamically
  const opt = t.dashboard.optimization;

  return (
    <div>
      <h4 className="mb-1 font-[family-name:var(--font-heading)] text-sm font-semibold text-text">
        {opt.title}
      </h4>
      <p className="text-[13px] text-text-muted mb-3">{opt.subtitle}</p>

      {suggestions.length === 0 ? (
        <div className="clay-sm bg-mint-light p-4 text-center text-sm text-cta font-semibold">
          {opt.noSuggestions}
        </div>
      ) : (
        <div className="space-y-2.5">
          {suggestions.map((s) => {
            const descText = tpl(
              (opt as Record<string, string>)[s.descKey] || '',
              tplData[s.id] || {},
            );
            const tipText = tpl(
              (opt as Record<string, string>)[s.tipKey] || '',
              tplData[s.id] || {},
            );

            return (
              <div key={s.id} className="clay-sm bg-white p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[18px]">{s.icon}</span>
                    <span className="text-[13px] font-bold font-[family-name:var(--font-heading)] text-text">
                      {(opt as Record<string, string>)[s.titleKey]}
                    </span>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${PRIORITY_STYLES[s.priority]}`}>
                    {priorityLabel(s.priority)}
                  </span>
                </div>

                <p className="text-[12px] text-text-muted mb-2">{descText}</p>

                <div className="flex items-center gap-3 text-[12px] mb-2">
                  <span className="text-text-muted">
                    {opt.currentLabel}: <strong className="text-text">{s.currentValue}</strong>
                  </span>
                  <span className="text-text-light">→</span>
                  <span className="text-text-muted">
                    {opt.targetLabel}: <strong className="text-cta">{s.targetValue}</strong>
                  </span>
                </div>

                {s.monthlyImpact > 0 && (
                  <div className="text-[12px] font-semibold text-cta mb-2">
                    {opt.impactLabel}: {formatVND(s.monthlyImpact)}
                  </div>
                )}

                <div className="text-[11px] text-text-muted italic border-t border-border-light pt-2">
                  {tipText}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
