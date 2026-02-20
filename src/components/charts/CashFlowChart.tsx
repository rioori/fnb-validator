'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, Tooltip, ReferenceLine } from 'recharts';
import type { MonthData } from '@/types';
import { formatVND } from '@/lib/format';
import { useTranslation } from '@/i18n/LocaleProvider';

interface CashFlowChartProps {
  months: MonthData[];
}

export default function CashFlowChart({ months }: CashFlowChartProps) {
  const { t } = useTranslation();
  const data = months.map(m => ({
    name: t.dashboard.charts.monthPrefix + m.month,
    cumulative: Math.round(m.cumulativeProfit),
  }));

  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.04)" />
          <XAxis dataKey="name" tick={{ fontSize: 11, fontFamily: 'Roboto, system-ui, sans-serif' }} />
          <YAxis tick={{ fontSize: 11, fontFamily: 'Roboto, system-ui, sans-serif' }} tickFormatter={(v) => formatVND(v)} />
          <Tooltip formatter={(value) => formatVND(Number(value))} labelStyle={{ fontFamily: 'Montserrat, system-ui, sans-serif', fontWeight: 600 }} />
          <Legend wrapperStyle={{ fontSize: 12, fontFamily: 'Montserrat, system-ui, sans-serif' }} iconType="circle" />
          <ReferenceLine y={0} stroke="#E4E4E7" strokeDasharray="4 4" />
          <Area dataKey="cumulative" name={t.dashboard.charts.cumulativeProfitLoss} stroke="#2D3748" fill="rgba(152,255,152,0.15)" strokeWidth={2.5} dot={{ r: 4, fill: '#2D3748', stroke: '#fff', strokeWidth: 2 }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
