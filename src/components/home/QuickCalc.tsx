'use client';

import { useState, useMemo } from 'react';
import { useWizardStore } from '@/hooks/useWizardStore';
import { runCalculations } from '@/lib/calculations';
import { formatVND } from '@/lib/format';
import { RAMP_DEFAULT } from '@/lib/constants';
import type { CalcInput } from '@/types';
import VNDInput from '@/components/ui/VNDInput';
import SliderField from '@/components/ui/SliderField';
import Icon from '@/components/ui/Icon';

export default function QuickCalc() {
  const setStep = useWizardStore((s) => s.setStep);

  const [avgTicket, setAvgTicket] = useState(50000);
  const [custsPerDay, setCustsPerDay] = useState(80);
  const [foodCostPct, setFoodCostPct] = useState(30);
  const [rent, setRent] = useState(20000000);
  const [staffCost, setStaffCost] = useState(30000000);
  const [totalInvestment, setTotalInvestment] = useState(500000000);

  const results = useMemo(() => {
    const custWeekday = Math.round(custsPerDay * 0.85);
    const custWeekend = Math.round(custsPerDay * 1.3);

    const input: CalcInput = {
      ticket: avgTicket,
      custWeekday,
      custWeekend,
      daysPerWeek: 7,
      deliveryPct: 20,
      deliveryCommPct: 25,
      cogsPct: foodCostPct,
      wastePct: 5,
      rent,
      staffTotal: staffCost,
      bhxhOn: true,
      fixedOther: 1500000,
      varOther: 15000000,
      totalInvestment,
      workingCap: Math.round(totalInvestment * 0.15),
      rampFactors: [...RAMP_DEFAULT],
    };
    return runCalculations(input);
  }, [avgTicket, custsPerDay, foodCostPct, rent, staffCost, totalInvestment]);

  const sm = results.stableMonth;
  const s = (v: 'good' | 'warn' | 'bad') => v;

  const kpis = [
    { label: 'Doanh thu/tháng', value: formatVND(sm.grossRev), status: s(sm.grossRev > 0 ? 'good' : 'bad') },
    { label: 'Lợi nhuận/tháng', value: formatVND(sm.netProfit), status: s(sm.netProfit > 0 ? 'good' : sm.netProfit > -5000000 ? 'warn' : 'bad') },
    { label: 'Biên lợi nhuận', value: sm.netMargin.toFixed(1) + '%', status: s(sm.netMargin >= 10 ? 'good' : sm.netMargin >= 0 ? 'warn' : 'bad') },
    { label: 'Hoàn vốn', value: results.paybackMonth ? `${results.paybackMonth} tháng` : '> 12 tháng', status: s(results.paybackMonth && results.paybackMonth <= 12 ? 'good' : results.paybackMonth ? 'warn' : 'bad') },
    { label: 'Điểm khả thi', value: `${results.score}/100`, status: s(results.score >= 70 ? 'good' : results.score >= 45 ? 'warn' : 'bad') },
  ];

  return (
    <div className="clay-card-static bg-pastel-blue p-5 mb-4">
      <div className="text-center mb-4">
        <Icon name="bolt" size={40} className="mx-auto mb-1" />
        <h2 className="text-lg font-bold text-text font-[family-name:var(--font-heading)]">
          Tính nhanh
        </h2>
        <p className="text-text-muted text-[12px]">
          Nhập 6 con số cơ bản, xem ngay kết quả ước tính
        </p>
      </div>

      {/* Input grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-5 max-md:grid-cols-1">
        <div>
          <label className="block font-semibold text-[13px] mb-1.5 text-text font-[family-name:var(--font-heading)]">
            Giá trung bình / đơn
          </label>
          <VNDInput value={avgTicket} onChange={setAvgTicket} placeholder="VD: 50.000" />
        </div>
        <div>
          <label className="block font-semibold text-[13px] mb-1.5 text-text font-[family-name:var(--font-heading)]">
            Khách / ngày (trung bình)
          </label>
          <input
            type="number"
            value={custsPerDay || ''}
            onChange={(e) => setCustsPerDay(parseInt(e.target.value) || 0)}
            className="w-full clay-input font-[family-name:var(--font-body)] text-text"
            placeholder="VD: 80"
          />
        </div>
        <div>
          <label className="block font-semibold text-[13px] mb-1.5 text-text font-[family-name:var(--font-heading)]">
            Tiền thuê / tháng
          </label>
          <VNDInput value={rent} onChange={setRent} placeholder="VD: 20.000.000" />
        </div>
        <div>
          <label className="block font-semibold text-[13px] mb-1.5 text-text font-[family-name:var(--font-heading)]">
            Tổng lương nhân sự / tháng
          </label>
          <VNDInput value={staffCost} onChange={setStaffCost} placeholder="VD: 30.000.000" />
        </div>
        <div>
          <label className="block font-semibold text-[13px] mb-1.5 text-text font-[family-name:var(--font-heading)]">
            Tổng vốn đầu tư ban đầu
          </label>
          <VNDInput value={totalInvestment} onChange={setTotalInvestment} placeholder="VD: 500.000.000" />
        </div>
        <div>
          <SliderField
            label="Food Cost %"
            value={foodCostPct}
            min={15}
            max={50}
            onChange={setFoodCostPct}
            hint="Tỷ lệ nguyên vật liệu / doanh thu"
          />
        </div>
      </div>

      {/* Results KPIs */}
      <div className="grid grid-cols-5 gap-2 mb-4 max-md:grid-cols-2">
        {kpis.map((kpi, i) => {
          const bg = kpi.status === 'good'
            ? 'border-l-cta bg-mint-light'
            : kpi.status === 'warn'
            ? 'border-l-warning bg-primary-light'
            : 'border-l-danger bg-[#FEE2E2]';
          return (
            <div key={i} className={`clay-sm p-3 text-center border-l-[4px] ${bg}`}>
              <div className="text-lg font-bold font-[family-name:var(--font-heading)] tracking-tight">{kpi.value}</div>
              <div className="text-[11px] text-text-muted mt-0.5">{kpi.label}</div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="text-center">
        <button
          onClick={() => setStep(1)}
          className="clay-btn clay-btn-primary text-[13px]"
        >
          Muốn phân tích chi tiết hơn? Bắt đầu Wizard →
        </button>
      </div>
    </div>
  );
}
