'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { track } from '@vercel/analytics';
import Icon from '@/components/ui/Icon';
import VNDInput from '@/components/ui/VNDInput';
import { calculateSurvivalScore, type SurvivalScoreInput } from '@/lib/survivalScore';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';

const COPY = {
  vi: {
    backHome: '← Về trang chủ',
    title: 'Survival Score — Quán bạn sẽ sống bao lâu?',
    subtitle: 'Dự đoán % sống sót năm đầu dựa trên 8 yếu tố quan trọng từ data thực tế F&B Việt Nam (50.000 quán đóng cửa H1 2025).',
    inputsHeading: 'Nhập 10 thông tin về quán bạn',
    labels: {
      modelKey: 'Loại quán',
      city: 'Thành phố',
      totalInvestment: 'Tổng vốn đầu tư',
      cashReserveMonths: 'Vốn dự trữ (tháng)',
      monthlyRevenue: 'Doanh thu kỳ vọng / tháng',
      monthlyRent: 'Tiền thuê / tháng',
      monthlyStaff: 'Tiền lương / tháng',
      foodCostPct: 'Food cost % (NVL)',
      menuItemCount: 'Số món trong menu',
      marketingWeeks: 'Marketing trước khai trương (tuần)',
      founderExperience: 'Kinh nghiệm chủ quán',
    },
    models: {
      coffee: 'Cà phê',
      eatery: 'Quán ăn',
      bubbletea: 'Trà sữa',
      restaurant: 'Nhà hàng',
      cloudkitchen: 'Cloud kitchen',
      bakery: 'Bakery',
      bar: 'Bar/pub',
      kiosk: 'Kiosk',
    },
    cities: {
      'ho-chi-minh': 'TP.HCM',
      'ha-noi': 'Hà Nội',
      'da-nang': 'Đà Nẵng',
      other: 'Khác',
    },
    experience: {
      first: 'Quán đầu tiên',
      second: 'Quán thứ 2-5',
      veteran: 'Có 5+ quán',
    },
    calculate: 'Tính Survival Score →',
    resultHeading: 'Kết quả Survival Score',
    surviveLabel: 'Xác suất sống sót năm đầu',
    factorsHeading: 'Phân tích chi tiết',
    factorPositive: '✓',
    factorNegative: '✗',
    factorNeutral: '○',
    shareCta: '📊 Share kết quả này',
    shareCopy: '✓ Đã copy',
    fullAnalysisCta: 'Đi sâu vào phân tích đầy đủ với F&B Validator →',
    verdictHigh: 'Mô hình mạnh',
    verdictMedium: 'Cần tối ưu',
    verdictHighRisk: 'Rủi ro cao — cần fix',
  },
  en: {
    backHome: '← Back to home',
    title: 'F&B Survival Score — Will your shop survive?',
    subtitle: 'Predict Year-1 survival probability based on 8 critical factors from real Vietnam F&B data (50,000 shops closed H1 2025).',
    inputsHeading: 'Enter 10 details about your shop',
    labels: {
      modelKey: 'Shop type',
      city: 'City',
      totalInvestment: 'Total investment',
      cashReserveMonths: 'Cash reserve (months)',
      monthlyRevenue: 'Expected monthly revenue',
      monthlyRent: 'Monthly rent',
      monthlyStaff: 'Monthly payroll',
      foodCostPct: 'Food cost % (COGS)',
      menuItemCount: 'Menu items',
      marketingWeeks: 'Marketing weeks before launch',
      founderExperience: 'Founder experience',
    },
    models: {
      coffee: 'Coffee shop',
      eatery: 'Small eatery',
      bubbletea: 'Bubble tea',
      restaurant: 'Restaurant',
      cloudkitchen: 'Cloud kitchen',
      bakery: 'Bakery',
      bar: 'Bar/pub',
      kiosk: 'Kiosk',
    },
    cities: {
      'ho-chi-minh': 'HCMC',
      'ha-noi': 'Hanoi',
      'da-nang': 'Da Nang',
      other: 'Other',
    },
    experience: {
      first: 'First shop',
      second: '2nd-5th shop',
      veteran: '5+ shops',
    },
    calculate: 'Calculate Survival Score →',
    resultHeading: 'Survival Score Result',
    surviveLabel: 'Year-1 survival probability',
    factorsHeading: 'Detailed breakdown',
    factorPositive: '✓',
    factorNegative: '✗',
    factorNeutral: '○',
    shareCta: '📊 Share this result',
    shareCopy: '✓ Copied',
    fullAnalysisCta: 'Go deeper with full F&B Validator analysis →',
    verdictHigh: 'Strong model',
    verdictMedium: 'Needs optimization',
    verdictHighRisk: 'High risk — needs fixing',
  },
} as const;

export default function SurvivalScoreShell({ locale }: { locale: string }) {
  const t = COPY[locale === 'en' ? 'en' : 'vi'];
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Defaults match common case (Q3 HCMC small cafe)
  const [inputs, setInputs] = useState<SurvivalScoreInput>({
    modelKey: 'coffee',
    city: 'ho-chi-minh',
    totalInvestment: 500_000_000,
    cashReserveMonths: 6,
    monthlyRevenue: 200_000_000,
    monthlyRent: 25_000_000,
    monthlyStaff: 45_000_000,
    foodCostPct: 30,
    menuItemCount: 20,
    marketingWeeksBeforeLaunch: 2,
    founderExperience: 'first',
  });

  const result = useMemo(
    () => calculateSurvivalScore(inputs, locale === 'en' ? 'en' : 'vi'),
    [inputs, locale]
  );

  const updateField = <K extends keyof SurvivalScoreInput>(key: K, value: SurvivalScoreInput[K]) => {
    setInputs((p) => ({ ...p, [key]: value }));
  };

  const handleCalculate = () => {
    setSubmitted(true);
    track('survival_score_calculated', {
      model: inputs.modelKey,
      city: inputs.city,
      score: result.score,
      surviveProb: result.surviveProbability,
    });
    // Scroll to result
    setTimeout(() => {
      document.getElementById('survival-result')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const handleShare = async () => {
    const shareText = locale === 'en'
      ? `My F&B shop Survival Score: ${result.score}/10 (${result.surviveProbability}% Year-1 survival). Check yours free: https://www.validator.vn/survival-score`
      : `Survival Score quán F&B của tôi: ${result.score}/10 (${result.surviveProbability}% xác suất sống năm đầu). Check thử miễn phí: https://www.validator.vn/survival-score`;
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      track('survival_score_share', { score: result.score });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const verdictColor = result.verdict === 'high-survival'
    ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
    : result.verdict === 'moderate-risk'
    ? 'bg-amber-50 border-amber-300 text-amber-900'
    : 'bg-rose-50 border-rose-300 text-rose-900';

  const verdictLabel = result.verdict === 'high-survival'
    ? t.verdictHigh
    : result.verdict === 'moderate-risk'
    ? t.verdictMedium
    : t.verdictHighRisk;

  const fullToolUrl = `${localePath('/fnb', locale as Locale)}?model=${inputs.modelKey}&mode=quick&utm_source=survival-score&utm_medium=cta`;

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-3xl mx-auto px-6 py-8 max-md:px-4 max-md:py-6">
        <nav className="text-sm text-text-muted mb-4">
          <Link href={localePath('/', locale as Locale)} className="hover:text-cta">
            {t.backHome}
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-6">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-2xl bg-cta flex items-center justify-center shrink-0 shadow-[2px_2px_0_var(--color-text)]">
              <Icon name="chart" size={26} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-text font-[family-name:var(--font-heading)] leading-tight max-md:text-xl">
                {t.title}
              </h1>
              <p className="text-sm text-text-muted mt-1 max-md:text-[13px]">{t.subtitle}</p>
            </div>
          </div>
        </header>

        {/* Inputs card */}
        <div className="clay-card-static p-5 mb-4 max-md:p-4 bg-white">
          <h2 className="text-[14px] font-bold mb-3 text-text font-[family-name:var(--font-heading)]">
            {t.inputsHeading}
          </h2>

          <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
            <div>
              <label className="block text-[12px] font-medium mb-1 text-text">{t.labels.modelKey}</label>
              <select value={inputs.modelKey} onChange={(e) => updateField('modelKey', e.target.value)} className="w-full clay-input text-[13px]">
                {Object.entries(t.models).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[12px] font-medium mb-1 text-text">{t.labels.city}</label>
              <select value={inputs.city} onChange={(e) => updateField('city', e.target.value)} className="w-full clay-input text-[13px]">
                {Object.entries(t.cities).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[12px] font-medium mb-1 text-text">{t.labels.totalInvestment}</label>
              <VNDInput value={inputs.totalInvestment} onChange={(v) => updateField('totalInvestment', v)} />
            </div>
            <div>
              <label className="block text-[12px] font-medium mb-1 text-text">{t.labels.cashReserveMonths}</label>
              <input type="number" min={0} max={24} value={inputs.cashReserveMonths} onChange={(e) => updateField('cashReserveMonths', Math.max(0, Math.min(24, parseInt(e.target.value) || 0)))} className="w-full clay-input text-[13px]" />
            </div>
            <div>
              <label className="block text-[12px] font-medium mb-1 text-text">{t.labels.monthlyRevenue}</label>
              <VNDInput value={inputs.monthlyRevenue} onChange={(v) => updateField('monthlyRevenue', v)} />
            </div>
            <div>
              <label className="block text-[12px] font-medium mb-1 text-text">{t.labels.monthlyRent}</label>
              <VNDInput value={inputs.monthlyRent} onChange={(v) => updateField('monthlyRent', v)} />
            </div>
            <div>
              <label className="block text-[12px] font-medium mb-1 text-text">{t.labels.monthlyStaff}</label>
              <VNDInput value={inputs.monthlyStaff} onChange={(v) => updateField('monthlyStaff', v)} />
            </div>
            <div>
              <label className="block text-[12px] font-medium mb-1 text-text">{t.labels.foodCostPct}</label>
              <input type="number" min={0} max={100} value={inputs.foodCostPct} onChange={(e) => updateField('foodCostPct', Math.max(0, Math.min(100, parseInt(e.target.value) || 0)))} className="w-full clay-input text-[13px]" />
            </div>
            <div>
              <label className="block text-[12px] font-medium mb-1 text-text">{t.labels.menuItemCount}</label>
              <input type="number" min={1} max={200} value={inputs.menuItemCount} onChange={(e) => updateField('menuItemCount', Math.max(1, Math.min(200, parseInt(e.target.value) || 1)))} className="w-full clay-input text-[13px]" />
            </div>
            <div>
              <label className="block text-[12px] font-medium mb-1 text-text">{t.labels.marketingWeeks}</label>
              <input type="number" min={0} max={12} value={inputs.marketingWeeksBeforeLaunch} onChange={(e) => updateField('marketingWeeksBeforeLaunch', Math.max(0, Math.min(12, parseInt(e.target.value) || 0)))} className="w-full clay-input text-[13px]" />
            </div>
            <div className="col-span-2 max-md:col-span-1">
              <label className="block text-[12px] font-medium mb-1 text-text">{t.labels.founderExperience}</label>
              <select value={inputs.founderExperience} onChange={(e) => updateField('founderExperience', e.target.value as SurvivalScoreInput['founderExperience'])} className="w-full clay-input text-[13px]">
                {Object.entries(t.experience).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
              </select>
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-4 clay-btn clay-btn-primary text-[14px] font-bold py-3"
          >
            {t.calculate}
          </button>
        </div>

        {/* Result */}
        {submitted && (
          <div id="survival-result" className={`clay-card-static border-2 p-5 mb-4 ${verdictColor}`}>
            <div className="text-center mb-4">
              <div className="text-[10px] uppercase tracking-widest opacity-70 mb-1">{t.resultHeading}</div>
              <div className="text-6xl font-bold font-[family-name:var(--font-heading)] mb-1">
                {result.score}<span className="text-2xl opacity-50">/10</span>
              </div>
              <div className="text-[14px] font-bold mb-1">{verdictLabel}</div>
              <div className="text-[12px] opacity-80">
                {t.surviveLabel}: <span className="font-bold">{result.surviveProbability}%</span>
              </div>
            </div>

            <div className="border-t pt-3 border-current opacity-30" />

            <h3 className="text-[12px] font-bold uppercase tracking-wider opacity-70 mb-2 mt-3">
              {t.factorsHeading}
            </h3>
            <ul className="space-y-1.5">
              {result.factors.map((f, i) => {
                const icon = f.impact === 'positive' ? t.factorPositive : f.impact === 'negative' ? t.factorNegative : t.factorNeutral;
                const color = f.impact === 'positive' ? 'text-emerald-700' : f.impact === 'negative' ? 'text-rose-700' : 'text-amber-700';
                return (
                  <li key={i} className="flex gap-2 items-start text-[12px]">
                    <span className={`font-bold ${color}`}>{icon}</span>
                    <div className="flex-1">
                      <span className="font-semibold">{f.name}:</span>{' '}
                      <span className="opacity-85">{f.description}</span>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
              <button
                onClick={handleShare}
                className="clay-pill flex items-center gap-1.5 px-4 py-2 text-[12px] font-semibold bg-text text-white hover:opacity-90"
              >
                {copied ? t.shareCopy : t.shareCta}
              </button>
              <Link
                href={fullToolUrl}
                className="clay-pill flex items-center gap-1.5 px-4 py-2 text-[12px] font-semibold bg-cta text-white hover:opacity-90"
              >
                {t.fullAnalysisCta}
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
