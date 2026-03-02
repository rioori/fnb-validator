'use client';

import { forwardRef } from 'react';
import { formatVND } from '@/lib/format';

export interface ResultCardData {
  modelName: string;
  score: number;
  netProfit: number;
  netMargin: number;
  paybackMonth: number | null;
  totalInvestment: number;
  bepCustomersDay: number;
  locale: string;
}

const ResultCard = forwardRef<HTMLDivElement, ResultCardData>(function ResultCard(props, ref) {
  const { modelName, score, netProfit, netMargin, paybackMonth, totalInvestment, bepCustomersDay, locale } = props;
  const isVi = locale === 'vi';

  const scoreColor = score >= 70 ? '#16A34A' : score >= 45 ? '#EAB308' : '#EF4444';
  const scoreLabel = score >= 70
    ? (isVi ? 'Khả thi' : 'Feasible')
    : score >= 45
      ? (isVi ? 'Cần cải thiện' : 'Needs work')
      : (isVi ? 'Rủi ro cao' : 'High risk');

  const kpis = [
    {
      label: isVi ? 'Lợi nhuận/tháng' : 'Monthly profit',
      value: formatVND(netProfit),
      good: netProfit > 0,
    },
    {
      label: isVi ? 'Biên lợi nhuận' : 'Net margin',
      value: netMargin.toFixed(1) + '%',
      good: netMargin >= 10,
    },
    {
      label: isVi ? 'Hòa vốn' : 'Break-even',
      value: paybackMonth ? `${paybackMonth} ${isVi ? 'tháng' : 'months'}` : (isVi ? '>24 tháng' : '>24 months'),
      good: paybackMonth !== null && paybackMonth <= 18,
    },
    {
      label: isVi ? 'Tổng đầu tư' : 'Total investment',
      value: formatVND(totalInvestment),
      good: true,
    },
  ];

  return (
    <div
      ref={ref}
      style={{
        width: 1080,
        height: 1080,
        background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)',
        fontFamily: 'Montserrat, Roboto, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 80,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: -100, right: -100,
        width: 400, height: 400, borderRadius: '50%',
        background: 'rgba(22,163,74,0.06)',
      }} />
      <div style={{
        position: 'absolute', bottom: -80, left: -80,
        width: 300, height: 300, borderRadius: '50%',
        background: 'rgba(22,163,74,0.04)',
      }} />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div style={{ fontSize: 28, color: '#64748B', fontWeight: 500, marginBottom: 8 }}>
          {isVi ? 'Kết quả thẩm định' : 'Validation Results'}
        </div>
        <div style={{ fontSize: 40, color: '#0F172A', fontWeight: 800, textTransform: 'uppercase' }}>
          {modelName}
        </div>
      </div>

      {/* Score ring */}
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div style={{
          width: 180, height: 180, borderRadius: '50%',
          background: `conic-gradient(${scoreColor} ${score * 3.6}deg, #E4E4E7 0)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto',
          border: '3px solid #0F172A',
        }}>
          <div style={{
            width: 140, height: 140, borderRadius: '50%',
            background: '#FFFFFF',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ fontSize: 52, fontWeight: 800, color: scoreColor }}>{score}</div>
            <div style={{ fontSize: 16, color: '#64748B' }}>/100</div>
          </div>
        </div>
        <div style={{
          display: 'inline-block', marginTop: 16,
          padding: '6px 24px', borderRadius: 20,
          background: score >= 70 ? '#DCFCE7' : score >= 45 ? '#FEF9C3' : '#FEE2E2',
          color: scoreColor, fontSize: 22, fontWeight: 700,
        }}>
          {scoreLabel}
        </div>
      </div>

      {/* KPI Grid */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 20, width: '100%', maxWidth: 800,
      }}>
        {kpis.map((kpi) => (
          <div key={kpi.label} style={{
            background: '#FFFFFF',
            borderRadius: 16, padding: '24px 28px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            border: '1px solid #E2E8F0',
          }}>
            <div style={{ fontSize: 18, color: '#64748B', marginBottom: 8 }}>{kpi.label}</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: '#0F172A' }}>{kpi.value}</div>
          </div>
        ))}
      </div>

      {/* BEP customers */}
      {bepCustomersDay > 0 && (
        <div style={{
          marginTop: 24, fontSize: 20, color: '#64748B', textAlign: 'center',
        }}>
          {isVi ? `Cần tối thiểu ${bepCustomersDay} khách/ngày để hòa vốn` : `Minimum ${bepCustomersDay} customers/day to break even`}
        </div>
      )}

      {/* Watermark */}
      <div style={{
        position: 'absolute', bottom: 32, left: 0, right: 0,
        textAlign: 'center', fontSize: 20, color: '#94A3B8', fontWeight: 600,
      }}>
        validator.vn — {isVi ? 'Thẩm định miễn phí' : 'Free business validation'}
      </div>
    </div>
  );
});

export default ResultCard;
