'use client';

import type { MenuItemAnalysis, MenuCategory } from '@/types';
import { formatVND } from '@/lib/format';
import { useTranslation } from '@/i18n/LocaleProvider';

interface MenuMatrixProps {
  items: MenuItemAnalysis[];
}

const CATEGORY_COLORS: Record<MenuCategory, string> = {
  star: 'bg-[#FEF3C7] text-[#92400E]',
  plowhorse: 'bg-pastel-blue text-[#1E40AF]',
  puzzle: 'bg-[#EDE9FE] text-[#5B21B6]',
  dog: 'bg-[#FEE2E2] text-danger',
};

const CATEGORY_ICONS: Record<MenuCategory, string> = {
  star: '⭐',
  plowhorse: '🐴',
  puzzle: '🧩',
  dog: '🔍',
};

export default function MenuMatrix({ items }: MenuMatrixProps) {
  const { t } = useTranslation();
  const labels = t.dashboard.menuMatrix;

  if (items.length === 0) {
    return <div className="text-sm text-text-muted py-4 text-center">{labels.noItems}</div>;
  }

  // Group by category
  const groups: Record<MenuCategory, MenuItemAnalysis[]> = { star: [], plowhorse: [], puzzle: [], dog: [] };
  for (const item of items) {
    groups[item.category].push(item);
  }

  return (
    <div>
      <p className="text-xs text-text-muted mb-3">{labels.subtitle}</p>

      {/* Category legend */}
      <div className="grid grid-cols-2 gap-2 mb-4 max-[480px]:grid-cols-1">
        {(['star', 'plowhorse', 'puzzle', 'dog'] as MenuCategory[]).map((cat) => {
          const catLabels = labels.categories[cat as keyof typeof labels.categories];
          const count = groups[cat].length;
          return (
            <div key={cat} className={`clay-sm p-2.5 ${CATEGORY_COLORS[cat]} border-0`}>
              <div className="flex items-center gap-1.5 text-[12px] font-bold font-[family-name:var(--font-heading)]">
                {CATEGORY_ICONS[cat]} {catLabels} <span className="font-normal opacity-70">({count})</span>
              </div>
              <div className="text-[11px] opacity-80 mt-0.5">
                {labels.categories[`${cat}Desc` as keyof typeof labels.categories]}
              </div>
            </div>
          );
        })}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-[12px]">
          <thead>
            <tr>
              <th className="text-left px-2 py-2 border-b border-border text-[10px] text-text-muted font-medium uppercase tracking-wider font-[family-name:var(--font-heading)]">{labels.colName}</th>
              <th className="text-right px-2 py-2 border-b border-border text-[10px] text-text-muted font-medium uppercase tracking-wider font-[family-name:var(--font-heading)]">{labels.colPrice}</th>
              <th className="text-right px-2 py-2 border-b border-border text-[10px] text-text-muted font-medium uppercase tracking-wider font-[family-name:var(--font-heading)]">{labels.colMargin}</th>
              <th className="text-right px-2 py-2 border-b border-border text-[10px] text-text-muted font-medium uppercase tracking-wider font-[family-name:var(--font-heading)]">{labels.colMarginPct}</th>
              <th className="text-right px-2 py-2 border-b border-border text-[10px] text-text-muted font-medium uppercase tracking-wider font-[family-name:var(--font-heading)]">{labels.colSold}</th>
              <th className="text-right px-2 py-2 border-b border-border text-[10px] text-text-muted font-medium uppercase tracking-wider font-[family-name:var(--font-heading)]">{labels.colMonthlyProfit}</th>
              <th className="text-center px-2 py-2 border-b border-border text-[10px] text-text-muted font-medium uppercase tracking-wider font-[family-name:var(--font-heading)]">{labels.colCategory}</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const catLabel = labels.categories[item.category as keyof typeof labels.categories];
              return (
                <tr key={item.id} className="hover:bg-surface3/40 transition-colors">
                  <td className="px-2 py-2 border-b border-border-light font-medium text-text">{item.name || '—'}</td>
                  <td className="px-2 py-2 border-b border-border-light text-right">{formatVND(item.price)}</td>
                  <td className="px-2 py-2 border-b border-border-light text-right font-medium">{formatVND(item.margin)}</td>
                  <td className="px-2 py-2 border-b border-border-light text-right">{item.marginPct.toFixed(0)}%</td>
                  <td className="px-2 py-2 border-b border-border-light text-right">{item.monthlySold}</td>
                  <td className="px-2 py-2 border-b border-border-light text-right font-semibold">{formatVND(item.monthlyProfit)}</td>
                  <td className="px-2 py-2 border-b border-border-light text-center">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${CATEGORY_COLORS[item.category]}`}>
                      {CATEGORY_ICONS[item.category]} {catLabel}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
