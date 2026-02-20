interface KPI {
  label: string;
  value: string;
  status: 'good' | 'warn' | 'bad';
}

interface KPIGridProps {
  kpis: KPI[];
  cols?: 2 | 3 | 4;
}

const statusStyles = {
  good: 'border-l-[4px] border-l-cta bg-mint-light',
  warn: 'border-l-[4px] border-l-warning bg-primary-light',
  bad: 'border-l-[4px] border-l-danger bg-[#FEE2E2]',
};

export default function KPIGrid({ kpis, cols = 4 }: KPIGridProps) {
  const gridCols = cols === 2 ? 'grid-cols-2' : cols === 3 ? 'grid-cols-3' : 'grid-cols-4 max-md:grid-cols-2';

  return (
    <div className={`grid ${gridCols} gap-2.5 mb-4`}>
      {kpis.map((kpi, i) => (
        <div
          key={i}
          className={`clay-sm p-4 text-center ${statusStyles[kpi.status]}`}
        >
          <div className="text-xl font-bold font-[family-name:var(--font-heading)] tracking-tight">{kpi.value}</div>
          <div className="text-xs text-text-muted mt-0.5">{kpi.label}</div>
        </div>
      ))}
    </div>
  );
}
