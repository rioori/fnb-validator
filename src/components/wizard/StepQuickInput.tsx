'use client';

import { useState, useMemo } from 'react';
import { track } from '@vercel/analytics';
import { useWizardStore } from '@/hooks/useWizardStore';
import SectionCard from '@/components/ui/SectionCard';
import VNDInput from '@/components/ui/VNDInput';
import { useTranslation } from '@/i18n/LocaleProvider';
import { formatVND } from '@/lib/format';

interface QuickInputs {
  totalInvestment: number;
  monthlyRevenue: number;
  rent: number;
  staffCost: number;
  foodCostPct: number;
  otherFixedCost: number;
}

const COPY = {
  vi: {
    title: 'Nhập 6 con số cốt lõi',
    desc: 'Quick mode — chỉ 6 ô input, biết quán có lãi hay không trong 1 phút. Nếu muốn nhập chi tiết hơn, chuyển sang chế độ Detailed.',
    sectionInvestment: 'Vốn đầu tư',
    sectionRevenue: 'Doanh thu kỳ vọng',
    sectionCosts: 'Chi phí hàng tháng',
    labelInvestment: 'Tổng vốn đầu tư ban đầu',
    hintInvestment: 'Thi công + thiết bị + nội thất + cọc + nguyên liệu ban đầu',
    labelRevenue: 'Doanh thu trung bình / tháng',
    hintRevenue: 'Ước tính sau khi quán đã ổn định (~tháng 6)',
    labelRent: 'Tiền thuê mặt bằng / tháng',
    labelStaff: 'Tiền lương nhân viên / tháng',
    hintStaff: 'Đã bao gồm BHXH chủ đóng (~21.5% lương)',
    labelCogs: 'Tỷ lệ nguyên liệu (food cost) %',
    hintCogs: 'Cafe 20-30%, nhà hàng 28-38%, bánh ngọt 25-35%',
    labelOther: 'Chi phí cố định khác / tháng',
    hintOther: 'Điện, nước, internet, marketing, bảo trì...',
    btnCalculate: 'Tính ngay →',
    btnDetailed: 'Tôi muốn nhập chi tiết hơn',
    estimate: 'Ước tính nhanh',
    estimateRev: 'Doanh thu/tháng',
    estimateCost: 'Tổng chi phí/tháng',
    estimateProfit: 'Lợi nhuận/tháng',
    estimatePayback: 'Hoàn vốn',
    months: 'tháng',
    monthsNever: 'Lỗ mỗi tháng',
  },
  en: {
    title: 'Enter 6 core numbers',
    desc: 'Quick mode — just 6 input fields, know if your shop is viable in 1 minute. For more detailed input, switch to Detailed mode.',
    sectionInvestment: 'Investment',
    sectionRevenue: 'Expected Revenue',
    sectionCosts: 'Monthly Costs',
    labelInvestment: 'Total initial investment',
    hintInvestment: 'Construction + equipment + furniture + deposit + initial inventory',
    labelRevenue: 'Average monthly revenue',
    hintRevenue: 'Estimate after shop stabilizes (~month 6)',
    labelRent: 'Monthly rent',
    labelStaff: 'Monthly payroll',
    hintStaff: 'Including 21.5% employer insurance',
    labelCogs: 'Food cost (COGS) %',
    hintCogs: 'Cafe 20-30%, restaurant 28-38%, bakery 25-35%',
    labelOther: 'Other monthly fixed costs',
    hintOther: 'Electricity, water, internet, marketing, maintenance...',
    btnCalculate: 'Calculate now →',
    btnDetailed: 'Switch to detailed input',
    estimate: 'Quick estimate',
    estimateRev: 'Revenue/month',
    estimateCost: 'Total cost/month',
    estimateProfit: 'Profit/month',
    estimatePayback: 'Payback',
    months: 'months',
    monthsNever: 'Loss every month',
  },
} as const;

export default function StepQuickInput({ onSwitchToDetailed }: { onSwitchToDetailed: () => void }) {
  const { locale } = useTranslation();
  const t = COPY[locale === 'en' ? 'en' : 'vi'];
  const store = useWizardStore();

  // Pre-fill from existing model defaults (if model selected)
  const [inputs, setInputs] = useState<QuickInputs>(() => ({
    totalInvestment: store.budget || 500_000_000,
    monthlyRevenue: 200_000_000,
    rent: store.rent || 25_000_000,
    staffCost: 45_000_000,
    foodCostPct: store.cogsPct || 30,
    otherFixedCost: 8_000_000,
  }));

  // Live preview calculation (simplified, no ramp-up)
  const preview = useMemo(() => {
    const variableCost = inputs.monthlyRevenue * (inputs.foodCostPct / 100);
    const totalCost = inputs.rent + inputs.staffCost + inputs.otherFixedCost + variableCost;
    const profit = inputs.monthlyRevenue - totalCost;
    const payback = profit > 0 ? Math.ceil(inputs.totalInvestment / profit) : null;
    return { totalCost, profit, payback };
  }, [inputs]);

  const updateInput = (field: keyof QuickInputs, value: number) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  const handleCalculate = () => {
    track('quick_mode_calculate', {
      model: store.selectedModel || 'unknown',
      city: store.city || 'unknown',
      investment: inputs.totalInvestment,
      revenue: inputs.monthlyRevenue,
    });
    store.applyQuickInputs(inputs);
    store.setStep(6); // Jump directly to Dashboard
  };

  const verdictColor = preview.profit > inputs.monthlyRevenue * 0.10
    ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
    : preview.profit > 0
    ? 'bg-amber-50 border-amber-300 text-amber-900'
    : 'bg-rose-50 border-rose-300 text-rose-900';

  return (
    <div>
      <h2 className="text-lg font-bold mb-1 text-text font-[family-name:var(--font-heading)]">
        {t.title}
      </h2>
      <p className="text-text-muted text-[13px] mb-4">{t.desc}</p>

      <SectionCard title={t.sectionInvestment}>
        <div className="space-y-3">
          <div>
            <label className="block font-medium text-[13px] mb-1.5 text-text">{t.labelInvestment}</label>
            <VNDInput
              value={inputs.totalInvestment}
              onChange={(v) => updateInput('totalInvestment', v)}
            />
            <p className="text-[11px] text-text-muted mt-1">{t.hintInvestment}</p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title={t.sectionRevenue}>
        <div>
          <label className="block font-medium text-[13px] mb-1.5 text-text">{t.labelRevenue}</label>
          <VNDInput
            value={inputs.monthlyRevenue}
            onChange={(v) => updateInput('monthlyRevenue', v)}
          />
          <p className="text-[11px] text-text-muted mt-1">{t.hintRevenue}</p>
        </div>
      </SectionCard>

      <SectionCard title={t.sectionCosts}>
        <div className="grid grid-cols-2 gap-3.5 max-md:grid-cols-1">
          <div>
            <label className="block font-medium text-[13px] mb-1.5 text-text">{t.labelRent}</label>
            <VNDInput value={inputs.rent} onChange={(v) => updateInput('rent', v)} />
          </div>
          <div>
            <label className="block font-medium text-[13px] mb-1.5 text-text">{t.labelStaff}</label>
            <VNDInput value={inputs.staffCost} onChange={(v) => updateInput('staffCost', v)} />
            <p className="text-[11px] text-text-muted mt-1">{t.hintStaff}</p>
          </div>
          <div>
            <label className="block font-medium text-[13px] mb-1.5 text-text">{t.labelCogs}</label>
            <input
              type="number"
              min={0}
              max={100}
              value={inputs.foodCostPct}
              onChange={(e) => updateInput('foodCostPct', Math.max(0, Math.min(100, parseInt(e.target.value) || 0)))}
              className="w-full clay-input font-[family-name:var(--font-body)] text-text"
            />
            <p className="text-[11px] text-text-muted mt-1">{t.hintCogs}</p>
          </div>
          <div>
            <label className="block font-medium text-[13px] mb-1.5 text-text">{t.labelOther}</label>
            <VNDInput value={inputs.otherFixedCost} onChange={(v) => updateInput('otherFixedCost', v)} />
            <p className="text-[11px] text-text-muted mt-1">{t.hintOther}</p>
          </div>
        </div>
      </SectionCard>

      {/* Live preview */}
      <div className={`mt-4 p-4 rounded-2xl border-2 ${verdictColor}`}>
        <div className="text-[11px] font-bold uppercase tracking-wider mb-2 opacity-70">
          {t.estimate}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div>
            <div className="text-[11px] opacity-70">{t.estimateRev}</div>
            <div className="text-[15px] font-bold font-[family-name:var(--font-heading)]">
              {formatVND(inputs.monthlyRevenue, locale)}
            </div>
          </div>
          <div>
            <div className="text-[11px] opacity-70">{t.estimateCost}</div>
            <div className="text-[15px] font-bold font-[family-name:var(--font-heading)]">
              {formatVND(preview.totalCost, locale)}
            </div>
          </div>
          <div>
            <div className="text-[11px] opacity-70">{t.estimateProfit}</div>
            <div className="text-[15px] font-bold font-[family-name:var(--font-heading)]">
              {formatVND(preview.profit, locale)}
            </div>
          </div>
          <div>
            <div className="text-[11px] opacity-70">{t.estimatePayback}</div>
            <div className="text-[15px] font-bold font-[family-name:var(--font-heading)]">
              {preview.payback ? `${preview.payback} ${t.months}` : t.monthsNever}
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-5 flex items-center justify-between gap-3 max-md:flex-col">
        <button
          onClick={onSwitchToDetailed}
          className="text-[13px] text-text-muted hover:text-cta transition-colors underline font-medium max-md:order-2"
        >
          {t.btnDetailed}
        </button>
        <button
          onClick={handleCalculate}
          className="bg-cta hover:bg-cta-hover text-white font-bold text-[14px] px-6 py-3 rounded-xl transition-colors max-md:w-full max-md:order-1"
        >
          {t.btnCalculate}
        </button>
      </div>
    </div>
  );
}
