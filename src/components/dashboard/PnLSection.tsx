'use client';

import type { CalcResults } from '@/types';
import { formatVND } from '@/lib/format';
import PnLChart from '@/components/charts/PnLChart';
import CashFlowChart from '@/components/charts/CashFlowChart';
import { useTranslation } from '@/i18n/LocaleProvider';

interface PnLSectionProps {
  results: CalcResults;
}

export default function PnLSection({ results: r }: PnLSectionProps) {
  const { t } = useTranslation();
  const rows: { l: string; k?: keyof typeof r.months[0]; fn?: (m: typeof r.months[0]) => number; bold?: boolean }[] = [
    { l: t.dashboard.pnl.netRevenue, k: 'netRev', bold: true },
    { l: t.dashboard.pnl.cogs, k: 'cogs' },
    { l: t.dashboard.pnl.waste, k: 'waste' },
    { l: t.dashboard.pnl.grossProfit, k: 'grossProfit', bold: true },
    { l: t.dashboard.pnl.rent, k: 'rent' },
    { l: t.dashboard.pnl.staffBhxh, fn: (m) => m.staffTotal + m.bhxh },
    { l: t.dashboard.pnl.fixedOther, k: 'fixedOther' },
    { l: t.dashboard.pnl.varOther, k: 'varOther' },
    { l: t.dashboard.pnl.netProfit, k: 'netProfit', bold: true },
  ];

  return (
    <div>
      <PnLChart months={r.months} />
      <div className="mt-3">
        <CashFlowChart months={r.months} />
      </div>
      <details className="mt-2">
        <summary className="cursor-pointer text-[13px] font-medium text-text-muted">{t.dashboard.pnl.detailToggle}</summary>
        <div className="max-h-[500px] overflow-auto clay-sm mt-2">
          <table className="w-full border-collapse text-[13px]">
            <thead>
              <tr>
                <th className="sticky left-0 bg-secondary-light px-2.5 py-2 text-left min-w-[140px] font-semibold font-[family-name:var(--font-heading)] text-[11px] uppercase tracking-wider text-text-muted">{t.dashboard.pnl.colCategory}</th>
                {r.months.map(m => (
                  <th key={m.month} className="bg-secondary-light px-2.5 py-2 text-right whitespace-nowrap font-semibold font-[family-name:var(--font-heading)] text-[11px] uppercase tracking-wider text-text-muted">{t.dashboard.pnl.monthPrefix}{m.month}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className={row.bold ? 'font-semibold' : ''}>
                  <td className="sticky left-0 bg-white px-2.5 py-2 text-left min-w-[140px] font-medium border-b border-border-light">{row.l}</td>
                  {r.months.map(m => {
                    const v = row.fn ? row.fn(m) : (m[row.k!] as number);
                    const color = row.k === 'netProfit' ? (v >= 0 ? 'var(--color-cta)' : 'var(--color-danger)') : undefined;
                    return (
                      <td key={m.month} className="px-2.5 py-2 text-right whitespace-nowrap border-b border-border-light" style={{ color }}>
                        {formatVND(v)}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  );
}
