'use client';

import Icon from '@/components/ui/Icon';
import { useModels } from '@/hooks/useModels';
import { useTranslation } from '@/i18n/LocaleProvider';
import type { ModelKey, FnBModel } from '@/types';

export default function ModelShowcase() {
  const { t } = useTranslation();
  const models = useModels();

  return (
    <div className="mb-4 px-1">
      <h3 className="text-[11px] font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-light mb-2 text-center">
        {t.fnbHome.models.sectionTitle}
      </h3>
      <div className="grid grid-cols-4 gap-1.5 max-md:grid-cols-4 max-[400px]:grid-cols-2">
        {(Object.entries(models) as [ModelKey, FnBModel][]).map(([key, m]) => (
          <div
            key={key}
            className="rounded-lg py-2 px-1.5 text-center border border-border-light bg-white"
          >
            <Icon name={m.icon} size={22} className="mx-auto mb-0.5 !border-[1.5px] !shadow-none" />
            <span className="text-[10px] font-semibold font-[family-name:var(--font-heading)] block text-text leading-tight">{m.name}</span>
            <span className="text-[9px] text-text-light block">{m.investRange}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
