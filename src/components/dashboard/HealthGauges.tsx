import type { CalcResults } from '@/types';

interface HealthGaugesProps {
  results: CalcResults;
}

export default function HealthGauges({ results: r }: HealthGaugesProps) {
  const sm = r.stableMonth;
  const gauges = [
    { l: 'Nguyên vật liệu', v: r.cogsPct, b: [25, 35] },
    { l: 'Tiền thuê', v: r.rentRatio, b: [10, 20] },
    { l: 'Nhân sự', v: r.laborRatio, b: [15, 25] },
    { l: 'Prime Cost (NVL+NS)', v: r.primeCost, b: [50, 65] },
    { l: 'Biên lợi nhuận', v: sm.netMargin, b: [8, 15], rev: true },
    { l: 'Delivery', v: r.deliveryPct, b: [10, 30] },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
      {gauges.map((g, i) => {
        const mx = Math.max(g.b[1] * 1.5, g.v * 1.2);
        const pct = Math.min(g.v / mx * 100, 100);
        const color = g.rev
          ? (g.v >= g.b[0] ? 'var(--color-cta)' : g.v >= 5 ? 'var(--color-warning)' : 'var(--color-danger)')
          : (g.v <= g.b[1] ? g.v <= g.b[0] ? 'var(--color-cta)' : 'var(--color-warning)' : 'var(--color-danger)');

        return (
          <div key={i} className="clay-sm p-4">
            <strong className="text-sm font-[family-name:var(--font-heading)]">{g.l}</strong>
            <div className="text-[22px] font-bold font-[family-name:var(--font-heading)]" style={{ color }}>{g.v.toFixed(1)}%</div>
            <div className="h-2 bg-surface3 rounded-full overflow-hidden my-2">
              <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: color }} />
            </div>
            <div className="flex justify-between text-[11px] text-text-light">
              <span>0%</span>
              <span>Ngành: {g.b[0]}-{g.b[1]}%</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
