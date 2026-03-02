'use client';

import { useWizardStore } from '@/hooks/useWizardStore';
import { useTranslation } from '@/i18n/LocaleProvider';
import { PRESETS, type Preset } from '@/lib/presets';
import Icon from '@/components/ui/Icon';

const PRESET_COLORS: Record<string, string> = {
  coffee: 'bg-pastel-cream',
  eatery: 'bg-pastel-blue',
  bubbletea: 'bg-pastel-mint',
  restaurant: 'bg-pastel-blush',
};

export default function PresetCards() {
  const { locale, t } = useTranslation();
  const selectModel = useWizardStore((s) => s.selectModel);
  const setBudget = useWizardStore((s) => s.setBudget);
  const setRent = useWizardStore((s) => s.setRent);
  const setSqm = useWizardStore((s) => s.setSqm);
  const setSeats = useWizardStore((s) => s.setSeats);
  const nextStep = useWizardStore((s) => s.nextStep);

  const handlePreset = (preset: Preset) => {
    // First select the model (sets all defaults)
    selectModel(preset.modelKey);
    // Then override specific values
    setBudget(preset.overrides.budget);
    setRent(preset.overrides.rent);
    setSqm(preset.overrides.sqm);
    setSeats(preset.overrides.seats);
    // Advance to step 2
    nextStep();
  };

  return (
    <div className="mb-5">
      <h3 className="text-sm font-bold text-text font-[family-name:var(--font-heading)] mb-1">
        {t.wizard.onboarding.quickStart}
      </h3>
      <p className="text-[11px] text-text-muted mb-3">
        {t.wizard.onboarding.quickStartDesc}
      </p>

      <div className="grid grid-cols-2 gap-2.5 max-[480px]:grid-cols-1">
        {PRESETS.map((preset) => {
          const name = locale === 'en' ? preset.nameEn : preset.nameVi;
          const desc = locale === 'en' ? preset.descEn : preset.descVi;
          return (
            <button
              key={preset.id}
              onClick={() => handlePreset(preset)}
              className={`${PRESET_COLORS[preset.icon] || 'bg-surface'} rounded-xl px-3.5 py-3 text-left transition-all border-2 border-text hover:-translate-y-0.5 shadow-[2px_2px_0_var(--color-text)] hover:shadow-[3px_3px_0_var(--color-text)] cursor-pointer`}
            >
              <span className="flex items-center gap-2 mb-1">
                <Icon name={preset.icon} size={28} />
                <span className="text-[13px] font-bold font-[family-name:var(--font-heading)] text-text leading-tight">
                  {name}
                </span>
              </span>
              <span className="text-[11px] text-text-muted block leading-snug">
                {desc}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
