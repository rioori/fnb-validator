'use client';

import { useWizardStore } from '@/hooks/useWizardStore';
import { MODELS } from '@/lib/constants';
import { useModels } from '@/hooks/useModels';
import { formatVND } from '@/lib/format';
import type { ModelKey } from '@/types';
import SectionCard from '@/components/ui/SectionCard';
import VNDInput from '@/components/ui/VNDInput';
import Tooltip from '@/components/ui/Tooltip';
import NavButtons from '@/components/ui/NavButtons';
import Icon from '@/components/ui/Icon';
import { useTranslation, tpl } from '@/i18n/LocaleProvider';

const CARD_COLORS: Record<string, string> = {
  coffee: 'bg-pastel-cream',
  eatery: 'bg-pastel-blue',
  bubbletea: 'bg-pastel-mint',
  restaurant: 'bg-pastel-blush',
  cloudkitchen: 'bg-pastel-gold',
  bakery: 'bg-pastel-cream',
  bar: 'bg-pastel-blue',
  kiosk: 'bg-pastel-mint',
};

export default function StepModel() {
  const { t } = useTranslation();
  const models = useModels();
  const { selectedModel, selectModel, budget, setBudget, rent, setRent, nextStep } = useWizardStore();

  const handleNext = () => {
    if (!selectedModel) { alert(t.wizard.stepModel.alertNoModel); return; }
    nextStep();
  };

  const model = selectedModel ? models[selectedModel] : null;

  return (
    <div>
      <h2 className="text-lg font-bold mb-1 text-text font-[family-name:var(--font-heading)]">
        {t.wizard.stepModel.title}
      </h2>
      <p className="text-text-muted text-[13px] mb-3">
        {t.wizard.stepModel.desc}
      </p>

      {/* Model Grid */}
      <div className="grid grid-cols-4 gap-3 mb-5 max-md:grid-cols-2 max-[480px]:gap-2">
        {(Object.entries(models) as [ModelKey, typeof MODELS[ModelKey]][]).map(([key, m]) => {
          const isSelected = selectedModel === key;
          return (
            <div
              key={key}
              onClick={() => selectModel(key)}
              className={`relative rounded-xl py-5 px-3 text-center cursor-pointer transition-all duration-200 border-2 max-[480px]:py-3.5 max-[480px]:px-2 ${
                isSelected
                  ? 'border-cta -translate-y-1 shadow-[4px_4px_0_var(--color-cta)] bg-white scale-[1.02]'
                  : `${CARD_COLORS[key] || 'bg-surface'} border-text hover:-translate-y-0.5 shadow-[2px_2px_0_var(--color-text)]`
              }`}
            >
              {isSelected && (
                <span className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-cta rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5L19 7" />
                  </svg>
                </span>
              )}
              <Icon name={m.icon} size={44} className={`mx-auto mb-2 max-[480px]:!w-9 max-[480px]:!h-9 ${isSelected ? '!border-cta !shadow-[1px_1px_0_var(--color-cta)]' : ''}`} />
              <span className={`text-[13px] font-bold font-[family-name:var(--font-heading)] block ${isSelected ? 'text-cta' : 'text-text'}`}>{m.name}</span>
              <span className="text-[11px] text-text-muted mt-1 block font-medium">{m.investRange}</span>
            </div>
          );
        })}
      </div>

      {/* Model Info */}
      {model && (
        <div className="clay-sm bg-mint-light px-5 py-4 mb-4 text-sm text-text leading-relaxed animate-bounce-in">
          <strong className="font-[family-name:var(--font-heading)] inline-flex items-center gap-1.5"><Icon name={model.icon} size={22} /> {model.name}</strong><br />
          <span className="text-text-muted">{model.desc}</span>
        </div>
      )}

      {/* Budget & Rent */}
      <SectionCard title={t.wizard.stepModel.sectionBudget}>
        <div className="grid grid-cols-2 gap-3.5 max-md:grid-cols-1">
          <div>
            <label className="block font-semibold text-[13px] mb-1.5 text-text font-[family-name:var(--font-heading)]">
              {t.wizard.stepModel.labelBudget}
              <Tooltip text={t.wizard.stepModel.tooltipBudget} />
            </label>
            <VNDInput value={budget} onChange={setBudget} placeholder={t.wizard.stepModel.placeholderBudget} />
            {model && (
              <div className="text-xs text-text-muted mt-1.5 leading-relaxed">
                {tpl(t.wizard.stepModel.investHint, { model: model.name, range: model.investRange })}
              </div>
            )}
          </div>
          <div>
            <label className="block font-semibold text-[13px] mb-1.5 text-text font-[family-name:var(--font-heading)]">
              {t.wizard.stepModel.labelRent}
            </label>
            <VNDInput value={rent} onChange={setRent} placeholder={t.wizard.stepModel.placeholderRent} />
            {model ? (
              <div className="text-xs text-text-muted mt-1.5 leading-relaxed">
                {tpl(t.wizard.stepModel.rentHint, { model: model.name, min: formatVND(model.defaults.rent * 0.6), max: formatVND(model.defaults.rent * 1.5) })}
              </div>
            ) : (
              <div className="text-xs text-text-muted mt-1.5">{t.wizard.stepModel.rentHintNoModel}</div>
            )}
          </div>
        </div>
      </SectionCard>

      <NavButtons onBack={() => useWizardStore.getState().setStep(0)} backLabel={t.wizard.stepModel.backLabel} onNext={handleNext} />
    </div>
  );
}
