'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, Tooltip, ReferenceLine, Cell } from 'recharts';
import type { MonthData } from '@/types';
import { formatVND } from '@/lib/format';
import { useTranslation } from '@/i18n/LocaleProvider';

interface BEPChartProps {
  months: MonthData[];
}

export default function BEPChart({ months }: BEPChartProps) {
  const { t } = useTranslation();
  const data = months.map(m => ({
    name: t.dashboard.charts.monthPrefix + m.month,
    value: Math.round(m.cumulativeProfit),
  }));

  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.04)" />
          <XAxis dataKey="name" tick={{ fontSize: 11, fontFamily: 'Roboto, system-ui, sans-serif' }} />
          <YAxis tick={{ fontSize: 11, fontFamily: 'Roboto, system-ui, sans-serif' }} tickFormatter={(v) => formatVND(v)} />
          <Tooltip formatter={(value) => formatVND(Number(value))} labelStyle={{ fontFamily: 'Montserrat, system-ui, sans-serif', fontWeight: 600 }} />
          <Legend wrapperStyle={{ fontSize: 12, fontFamily: 'Montserrat, system-ui, sans-serif' }} iconType="circle" />
          <ReferenceLine y={0} stroke="#E4E4E7" strokeDasharray="4 4" />
          <Bar dataKey="value" name={t.dashboard.charts.cumulativeProfitLoss} radius={[6, 6, 0, 0]} stroke="#2D3748" strokeWidth={1}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.value >= 0 ? '#98FF98' : '#FDBCB4'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
