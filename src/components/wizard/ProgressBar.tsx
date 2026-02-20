'use client';

import { useWizardStore } from '@/hooks/useWizardStore';

const STEPS = [
  { num: 1, label: 'Mô hình' },
  { num: 2, label: 'Vị trí' },
  { num: 3, label: 'Vốn đầu tư' },
  { num: 4, label: 'Doanh thu' },
  { num: 5, label: 'Chi phí' },
  { num: 6, label: 'Kết quả' },
];

export default function ProgressBar() {
  const { currentStep, setStep, selectedModel } = useWizardStore();

  const handleClick = (step: number) => {
    if (step === 1 || selectedModel) setStep(step);
  };

  return (
    <div className="flex mb-4 relative px-1 gap-1 no-print">
      <div className="absolute top-[14px] left-8 right-8 h-[2px] bg-border-light rounded-sm z-0 max-md:left-6 max-md:right-6" />
      {STEPS.map(({ num, label }) => {
        const isActive = num === currentStep;
        const isDone = num < currentStep;
        return (
          <div
            key={num}
            className="flex-1 text-center cursor-pointer relative z-[1]"
            onClick={() => handleClick(num)}
          >
            <span
              className={`w-7 h-7 rounded-full inline-flex items-center justify-center text-[11px] font-bold font-[family-name:var(--font-heading)] transition-all border-2 max-md:w-8 max-md:h-8 ${
                isActive
                  ? 'bg-cta border-text text-white shadow-[2px_2px_0_var(--color-text)]'
                  : isDone
                  ? 'bg-mint border-text text-text'
                  : 'bg-white border-border-light text-text-light hover:border-text hover:text-text'
              }`}
            >
              {isDone ? '✓' : num}
            </span>
            <span
              className={`block text-[10px] mt-1 font-semibold font-[family-name:var(--font-heading)] max-md:text-[10px] ${
                isActive ? 'text-text' : isDone ? 'text-text-muted' : 'text-text-light'
              }`}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
