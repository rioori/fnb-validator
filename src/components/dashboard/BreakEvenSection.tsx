'use client';

import type { CalcResults } from '@/types';
import { formatVND } from '@/lib/format';
import BEPChart from '@/components/charts/BEPChart';
import KPIGrid from './KPIGrid';
import { useTranslation, tpl } from '@/i18n/LocaleProvider';

interface BreakEvenSectionProps {
  results: CalcResults;
}

export default function BreakEvenSection({ results: r }: BreakEvenSectionProps) {
  const { t } = useTranslation();
  const paybackStatus: 'good' | 'warn' | 'bad' = r.paybackMonth && r.paybackMonth <= 18 ? 'good' : 'bad';
  const kpis = [
    { label: t.dashboard.kpi.bepRevenueLabel, value: r.bepRevenue < Infinity ? formatVND(r.bepRevenue) : 'N/A', status: 'good' as const },
    { label: t.dashboard.kpi.bepCustomersLabel, value: r.bepCustomersDay < Infinity ? r.bepCustomersDay + ' ' + t.dashboard.kpi.customersUnit : 'N/A', status: 'good' as const },
    { label: t.dashboard.kpi.paybackLabel, value: r.paybackMonth ? r.paybackMonth + ' ' + t.dashboard.kpi.monthsUnit : t.dashboard.kpi.moreThan12, status: paybackStatus },
  ];

  return (
    <div>
      <KPIGrid kpis={kpis} cols={3} />
      <BEPChart months={r.months} />
      {r.bepCustomersDay < Infinity && (
        <div className="clay-sm bg-mint-light p-4 text-sm mt-2" dangerouslySetInnerHTML={{
          __html: tpl(t.dashboard.breakeven.minCustomers, { count: r.bepCustomersDay }) + ' ' +
            (r.paybackMonth
              ? tpl(t.dashboard.breakeven.paybackSummary, { investment: formatVND(r.totalInvestment), months: r.paybackMonth })
              : tpl(t.dashboard.breakeven.paybackLong, { investment: formatVND(r.totalInvestment) }))
        }} />
      )}
    </div>
  );
}
