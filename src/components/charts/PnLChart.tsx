'use client';

import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, Tooltip } from 'recharts';
import type { MonthData } from '@/types';
import { formatVND } from '@/lib/format';
import { useTranslation } from '@/i18n/LocaleProvider';

interface PnLChartProps {
  months: MonthData[];
}

export default function PnLChart({ months }: PnLChartProps) {
  const { t } = useTranslation();
  const data = months.map(m => ({
    name: t.dashboard.charts.monthPrefix + m.month,
    revenue: Math.round(m.netRev),
    costs: Math.round(m.cogs + m.waste + m.fixedMonthly + m.varOther),
    profit: Math.round(m.netProfit),
  }));

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.04)" />
          <XAxis dataKey="name" tick={{ fontSize: 11, fontFamily: 'Roboto, system-ui, sans-serif' }} />
          <YAxis tick={{ fontSize: 11, fontFamily: 'Roboto, system-ui, sans-serif' }} tickFormatter={(v) => formatVND(v)} />
          <Tooltip formatter={(value) => formatVND(Number(value))} labelStyle={{ fontFamily: 'Montserrat, system-ui, sans-serif', fontWeight: 600 }} />
          <Legend wrapperStyle={{ fontSize: 12, fontFamily: 'Montserrat, system-ui, sans-serif' }} iconType="circle" />
          <Bar dataKey="revenue" name={t.dashboard.charts.revenue} fill="#98FF98" stroke="#2D3748" strokeWidth={1} radius={[6, 6, 0, 0]} />
          <Bar dataKey="costs" name={t.dashboard.charts.costs} fill="#FDBCB4" stroke="#2D3748" strokeWidth={1} radius={[6, 6, 0, 0]} />
          <Line dataKey="profit" name={t.dashboard.charts.profit} stroke="#2D3748" strokeWidth={2.5} dot={{ r: 4, fill: '#2D3748', stroke: '#fff', strokeWidth: 2 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
