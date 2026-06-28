'use client';

import { useEffect, useMemo, useState } from 'react';

type Locale = 'vi' | 'en';

const DICT = {
  vi: {
    title: 'Tính điểm hòa vốn F&B',
    subtitle: 'Nhập số liệu — biết quán có lãi hay không trong 30 giây',
    inv: 'Vốn đầu tư ban đầu',
    rent: 'Tiền thuê / tháng',
    staff: 'Tiền lương / tháng',
    other: 'Chi phí cố định khác / tháng',
    rev: 'Doanh thu kỳ vọng / tháng',
    cogs: 'Tỷ lệ NVL (food cost) %',
    btn: 'Tính ngay',
    out_bep: 'Điểm hòa vốn (doanh thu/tháng để hòa vốn)',
    out_currentRev: 'Doanh thu bạn nhập',
    out_monthlyProfit: 'Lợi nhuận ròng/tháng',
    out_payback: 'Thời gian hoàn vốn',
    months: 'tháng',
    months_never: 'Không bao giờ',
    verdict_good: '✓ Mô hình khả thi',
    verdict_warn: '⚠ Cần tối ưu',
    verdict_bad: '✗ Mô hình lỗ',
    verdict_good_desc: 'Doanh thu vượt BEP, có lãi mỗi tháng. Hoàn vốn trong khoảng thời gian hợp lý.',
    verdict_warn_desc: 'Doanh thu chỉ vừa đủ hoặc lợi nhuận quá mỏng. Cần tối ưu chi phí hoặc tăng doanh thu.',
    verdict_bad_desc: 'Doanh thu thấp hơn điểm hòa vốn. Quán sẽ lỗ mỗi tháng.',
    poweredBy: 'Tính toán bởi',
    fullTool: 'Phân tích chi tiết →',
    placeholder_vnd: 'Đơn vị: VNĐ',
  },
  en: {
    title: 'F&B Break-Even Calculator',
    subtitle: 'Enter your numbers — know if your shop is viable in 30 seconds',
    inv: 'Initial investment',
    rent: 'Monthly rent',
    staff: 'Monthly payroll',
    other: 'Other fixed costs / month',
    rev: 'Expected revenue / month',
    cogs: 'Food cost ratio (COGS) %',
    btn: 'Calculate',
    out_bep: 'Break-even point (monthly revenue to break even)',
    out_currentRev: 'Your revenue',
    out_monthlyProfit: 'Net profit / month',
    out_payback: 'Payback time',
    months: 'months',
    months_never: 'Never',
    verdict_good: '✓ Viable model',
    verdict_warn: '⚠ Needs optimization',
    verdict_bad: '✗ Loss-making model',
    verdict_good_desc: 'Revenue exceeds BEP with healthy profit each month. Reasonable payback time.',
    verdict_warn_desc: 'Revenue barely covers costs or margins too thin. Optimize costs or grow revenue.',
    verdict_bad_desc: 'Revenue below break-even. The shop will lose money each month.',
    poweredBy: 'Calculated by',
    fullTool: 'Detailed analysis →',
    placeholder_vnd: 'Unit: VND',
  },
} as const;

function fmtVND(n: number, locale: Locale): string {
  const a = Math.abs(Math.round(n));
  const sign = n < 0 ? '-' : '';
  if (a >= 1e9) {
    const v = (a / 1e9).toFixed(2);
    return sign + (locale === 'en' ? v + 'B VND' : v.replace('.', ',') + ' tỷ');
  }
  if (a >= 1e6) {
    const v = (a / 1e6).toFixed(0);
    return sign + v + (locale === 'en' ? 'M VND' : ' triệu');
  }
  return sign + a.toLocaleString('vi-VN') + 'đ';
}

function parseInput(value: string): number {
  return parseInt((value || '0').replace(/[^\d]/g, '')) || 0;
}

function fmtInput(value: string): string {
  const n = value.replace(/[^\d]/g, '');
  return n.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export default function EmbedCalculator() {
  const [locale, setLocale] = useState<Locale>('vi');
  const [investment, setInvestment] = useState('500.000.000');
  const [rent, setRent] = useState('25.000.000');
  const [staff, setStaff] = useState('45.000.000');
  const [other, setOther] = useState('8.000.000');
  const [revenue, setRevenue] = useState('200.000.000');
  const [cogs, setCogs] = useState('30');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang') || params.get('locale');
    if (lang === 'en') setLocale('en');
    if (params.get('inv')) setInvestment(fmtInput(params.get('inv') || ''));
    if (params.get('rent')) setRent(fmtInput(params.get('rent') || ''));
    if (params.get('staff')) setStaff(fmtInput(params.get('staff') || ''));
    if (params.get('rev')) setRevenue(fmtInput(params.get('rev') || ''));
    if (params.get('cogs')) setCogs(params.get('cogs') || '30');
  }, []);

  const t = DICT[locale];

  const result = useMemo(() => {
    const inv = parseInput(investment);
    const r = parseInput(rent);
    const s = parseInput(staff);
    const o = parseInput(other);
    const rev = parseInput(revenue);
    const cogsRate = parseInt(cogs || '0') / 100;
    const fixed = r + s + o;
    const variableRate = cogsRate;
    const contributionMargin = 1 - variableRate;
    const bep = contributionMargin > 0 ? fixed / contributionMargin : Infinity;
    const variableCost = rev * variableRate;
    const monthlyProfit = rev - variableCost - fixed;
    const payback = monthlyProfit > 0 ? Math.ceil(inv / monthlyProfit) : null;

    let verdict: 'good' | 'warn' | 'bad' = 'bad';
    if (monthlyProfit > 0) {
      const profitRatio = monthlyProfit / rev;
      verdict = profitRatio >= 0.10 ? 'good' : 'warn';
    }

    return { bep, monthlyProfit, payback, verdict, rev };
  }, [investment, rent, staff, other, revenue, cogs]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.parent !== window) {
      window.parent.postMessage(
        {
          type: 'validator-calculation',
          data: {
            bep: result.bep,
            monthlyProfit: result.monthlyProfit,
            payback: result.payback,
            verdict: result.verdict,
          },
        },
        '*'
      );
    }
  }, [result]);

  const verdictColor = {
    good: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    warn: 'bg-amber-50 border-amber-200 text-amber-900',
    bad: 'bg-rose-50 border-rose-200 text-rose-900',
  }[result.verdict];

  const verdictLabel = t[`verdict_${result.verdict}`];
  const verdictDesc = t[`verdict_${result.verdict}_desc`];

  const fullToolUrl = locale === 'en'
    ? 'https://www.validator.vn/en/fnb'
    : 'https://www.validator.vn/fnb';

  return (
    <div className="min-h-screen bg-white p-4 font-sans">
      <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <header className="mb-5">
          <h1 className="text-xl font-bold text-slate-900 leading-tight">{t.title}</h1>
          <p className="text-sm text-slate-600 mt-1">{t.subtitle}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
          <Field label={t.inv} value={investment} onChange={(v) => setInvestment(fmtInput(v))} suffix="đ" />
          <Field label={t.rev} value={revenue} onChange={(v) => setRevenue(fmtInput(v))} suffix="đ" />
          <Field label={t.rent} value={rent} onChange={(v) => setRent(fmtInput(v))} suffix="đ" />
          <Field label={t.staff} value={staff} onChange={(v) => setStaff(fmtInput(v))} suffix="đ" />
          <Field label={t.other} value={other} onChange={(v) => setOther(fmtInput(v))} suffix="đ" />
          <Field label={t.cogs} value={cogs} onChange={setCogs} suffix="%" max={100} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <Stat label={t.out_bep} value={fmtVND(result.bep, locale)} />
          <Stat
            label={t.out_monthlyProfit}
            value={fmtVND(result.monthlyProfit, locale)}
            highlight={result.monthlyProfit > 0 ? 'positive' : 'negative'}
          />
          <Stat label={t.out_currentRev} value={fmtVND(result.rev, locale)} />
          <Stat
            label={t.out_payback}
            value={result.payback ? `${result.payback} ${t.months}` : t.months_never}
            highlight={result.payback && result.payback <= 24 ? 'positive' : result.payback ? 'neutral' : 'negative'}
          />
        </div>

        <div className={`border rounded-lg p-4 ${verdictColor}`}>
          <div className="font-semibold text-base">{verdictLabel}</div>
          <div className="text-sm mt-1 opacity-90">{verdictDesc}</div>
        </div>

        <footer className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <a href={`https://www.validator.vn/?utm_source=embed&utm_medium=widget&utm_campaign=break-even`} target="_blank" rel="noopener" className="hover:text-slate-900">
            {t.poweredBy} <span className="font-semibold">Validator.vn</span>
          </a>
          <a href={`${fullToolUrl}?utm_source=embed&utm_medium=widget`} target="_blank" rel="noopener" className="font-medium text-emerald-700 hover:text-emerald-900">
            {t.fullTool}
          </a>
        </footer>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  suffix,
  max,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  suffix?: string;
  max?: number;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-slate-700 mb-1">{label}</span>
      <div className="relative">
        <input
          type="text"
          inputMode="numeric"
          value={value}
          onChange={(e) => {
            const v = e.target.value;
            if (max !== undefined) {
              const n = parseInt(v.replace(/\D/g, '') || '0');
              if (n > max) return;
            }
            onChange(v);
          }}
          className="w-full px-3 py-2 pr-10 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-500"
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 font-medium pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
    </label>
  );
}

function Stat({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: 'positive' | 'negative' | 'neutral' | null;
}) {
  const color =
    highlight === 'positive'
      ? 'text-emerald-700'
      : highlight === 'negative'
      ? 'text-rose-700'
      : highlight === 'neutral'
      ? 'text-amber-700'
      : 'text-slate-900';
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
      <div className="text-xs text-slate-600 leading-tight">{label}</div>
      <div className={`text-lg font-bold mt-1 ${color}`}>{value}</div>
    </div>
  );
}
