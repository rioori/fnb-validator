'use client';

import type { CalcResults } from '@/types';
import { formatVND } from '@/lib/format';
import BEPChart from '@/components/charts/BEPChart';
import KPIGrid from './KPIGrid';

interface BreakEvenSectionProps {
  results: CalcResults;
}

export default function BreakEvenSection({ results: r }: BreakEvenSectionProps) {
  const paybackStatus: 'good' | 'warn' | 'bad' = r.paybackMonth && r.paybackMonth <= 18 ? 'good' : 'bad';
  const kpis = [
    { label: 'DT hòa vốn/tháng', value: r.bepRevenue < Infinity ? formatVND(r.bepRevenue) : 'N/A', status: 'good' as const },
    { label: 'Khách hòa vốn/ngày', value: r.bepCustomersDay < Infinity ? r.bepCustomersDay + ' khách' : 'N/A', status: 'good' as const },
    { label: 'Hoàn vốn đầu tư', value: r.paybackMonth ? r.paybackMonth + ' tháng' : '>12 tháng', status: paybackStatus },
  ];

  return (
    <div>
      <KPIGrid kpis={kpis} cols={3} />
      <BEPChart months={r.months} />
      {r.bepCustomersDay < Infinity && (
        <div className="clay-sm bg-mint-light p-4 text-sm mt-2">
          Cần tối thiểu <strong>{r.bepCustomersDay} khách/ngày</strong> để không lỗ.{' '}
          {r.paybackMonth
            ? `Thu hồi vốn ${formatVND(r.totalInvestment)} sau khoảng ${r.paybackMonth} tháng.`
            : `Cần >12 tháng để thu hồi vốn ${formatVND(r.totalInvestment)}.`}
        </div>
      )}
    </div>
  );
}
