'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { track } from '@vercel/analytics';
import { useWizardStore, restoreDraft } from '@/hooks/useWizardStore';
import { useAuth } from '@/hooks/useAuth';
import { useTranslation } from '@/i18n/LocaleProvider';
import Icon from '@/components/ui/Icon';
import { localePath } from '@/i18n/link';
import ProgressBar from './ProgressBar';
import StepModel from './StepModel';
import StepLocation from './StepLocation';
import StepInvestment from './StepInvestment';
import StepRevenue from './StepRevenue';
import StepCosts from './StepCosts';
import StepDashboard from './StepDashboard';
import HomePage from '@/components/home/HomePage';
import AuthOverlay from '@/components/auth/AuthOverlay';
import UserBar from '@/components/auth/UserBar';

export default function WizardShell() {
  const { t, locale } = useTranslation();
  const currentStep = useWizardStore((s) => s.currentStep);
  const setStep = useWizardStore((s) => s.setStep);
  const checkSession = useAuth((s) => s.checkSession);

  useEffect(() => {
    checkSession();
    restoreDraft();
    // Deep-link: if ?view= param exists, force step=0 so HomePage handles it
    const viewParam = new URLSearchParams(window.location.search).get('view');
    if (viewParam) setStep(0);
  }, [checkSession, setStep]);

  const stepNames = ['home', 'model', 'location', 'investment', 'revenue', 'costs', 'dashboard'];
  useEffect(() => {
    if (currentStep >= 1) {
      track('wizard_step', { step: currentStep, name: stepNames[currentStep] });
    }
  }, [currentStep]);

  return (
    <>
      <AuthOverlay active={currentStep >= 1} />
      <div className="max-w-[1200px] mx-auto px-8 pt-4 pb-[80px] max-lg:px-5 max-md:px-3 max-md:pt-4 max-md:pb-[100px]">
        {/* Back to master homepage */}
        <nav className="flex items-center justify-between mb-2">
          <Link
            href={localePath('/', locale)}
            className="text-[12px] text-text-muted hover:text-cta transition-colors font-[family-name:var(--font-heading)] font-medium inline-flex items-center gap-1"
          >
            {t.wizard.shell.backLink}
          </Link>
          <UserBar />
        </nav>

        {/* Header — only in wizard steps, homepage has its own Hero */}
        {currentStep >= 1 && (
          <div className="clay-card-static bg-pastel-cream py-2.5 px-6 mb-4 text-center relative max-md:py-2 max-md:px-5">
            <button
              onClick={() => setStep(0)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border-2 border-text bg-white flex items-center justify-center text-[16px] hover:bg-surface3 transition-colors cursor-pointer no-print shadow-[2px_2px_0_var(--color-text)]"
              title={t.wizard.shell.homeTitle}
            >
              <Icon name="home" size={20} className="!border-0 !shadow-none !bg-transparent" />
            </button>
            <Image src="/logo.png" alt="Validator.vn" width={56} height={56} className="mx-auto" />
            <p className="text-[10px] text-text font-[family-name:var(--font-heading)] font-medium">
              {t.wizard.shell.builtWith} <Icon name="heart" size={14} className="inline-flex align-text-bottom !border-0 !shadow-none !bg-transparent" /> {t.wizard.shell.forCommunity}
            </p>
          </div>
        )}

        {currentStep >= 1 && <ProgressBar />}

        <div className="animate-fade-in-up" key={currentStep}>
          {currentStep === 0 && <HomePage />}
          {currentStep === 1 && <StepModel />}
          {currentStep === 2 && <StepLocation />}
          {currentStep === 3 && <StepInvestment />}
          {currentStep === 4 && <StepRevenue />}
          {currentStep === 5 && <StepCosts />}
          {currentStep === 6 && <StepDashboard />}
        </div>
      </div>
    </>
  );
}
