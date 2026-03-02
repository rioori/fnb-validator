'use client';

import Image from 'next/image';
import { useWizardStore } from '@/hooks/useWizardStore';
import { useTranslation } from '@/i18n/LocaleProvider';
import Icon from '@/components/ui/Icon';

interface WelcomeModalProps {
  onDismiss: () => void;
}

export default function WelcomeModal({ onDismiss }: WelcomeModalProps) {
  const { t } = useTranslation();
  const setStep = useWizardStore((s) => s.setStep);
  const setBusinessMode = useWizardStore((s) => s.setBusinessMode);

  const handlePlanning = () => {
    setBusinessMode('new');
    setStep(1);
    onDismiss();
  };

  const handleExisting = () => {
    setBusinessMode('existing');
    setStep(1);
    onDismiss();
  };

  const handleSkip = () => {
    onDismiss();
  };

  return (
    <div className="fixed inset-0 bg-mint-light/80 backdrop-blur-sm flex items-center justify-center z-[1000]">
      <div className="clay-card-static bg-white px-8 py-10 w-[90%] max-w-md animate-bounce-in max-md:px-5 max-md:py-7">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Validator.vn"
          width={72}
          height={72}
          className="mx-auto mb-3"
        />

        {/* Heading */}
        <h2 className="text-center text-text font-bold text-lg font-[family-name:var(--font-heading)] mb-1.5">
          {t.wizard.onboarding.welcomeHeading}
        </h2>

        {/* Description */}
        <p className="text-center text-text-muted text-[13px] mb-6 leading-relaxed">
          {t.wizard.onboarding.welcomeDesc}
        </p>

        {/* Option buttons */}
        <div className="flex flex-col gap-3 mb-5">
          {/* Planning to open */}
          <button
            onClick={handlePlanning}
            className="w-full rounded-xl px-5 py-4 text-left transition-all border-2 border-cta bg-white hover:-translate-y-0.5 shadow-[3px_3px_0_var(--color-cta)] hover:shadow-[4px_4px_0_var(--color-cta)] cursor-pointer"
          >
            <span className="text-sm font-bold font-[family-name:var(--font-heading)] flex items-center gap-2 text-cta">
              <Icon name="newproject" size={24} className="!border-cta !shadow-[1px_1px_0_var(--color-cta)]" />
              {t.wizard.onboarding.optionPlanning}
            </span>
            <span className="text-[11px] text-text-muted block mt-1 ml-8">
              {t.wizard.onboarding.optionPlanningDesc}
            </span>
          </button>

          {/* Already have a business */}
          <button
            onClick={handleExisting}
            className="w-full rounded-xl px-5 py-4 text-left transition-all border-2 border-text bg-white hover:-translate-y-0.5 shadow-[3px_3px_0_var(--color-text)] hover:shadow-[4px_4px_0_var(--color-text)] cursor-pointer"
          >
            <span className="text-sm font-bold font-[family-name:var(--font-heading)] flex items-center gap-2 text-text">
              <Icon name="existing" size={24} />
              {t.wizard.onboarding.optionExisting}
            </span>
            <span className="text-[11px] text-text-muted block mt-1 ml-8">
              {t.wizard.onboarding.optionExistingDesc}
            </span>
          </button>
        </div>

        {/* Skip */}
        <button
          onClick={handleSkip}
          className="w-full text-center text-[13px] text-text-muted hover:text-text transition-colors cursor-pointer py-2 font-medium"
        >
          {t.wizard.onboarding.skip}
        </button>
      </div>
    </div>
  );
}
