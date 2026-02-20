'use client';

import { useTranslation } from '@/i18n/LocaleProvider';

interface NavButtonsProps {
  onBack?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  nextVariant?: 'primary' | 'accent';
  backLabel?: string;
}

export default function NavButtons({ onBack, onNext, nextLabel, nextVariant = 'primary', backLabel }: NavButtonsProps) {
  const { t } = useTranslation();
  const resolvedNextLabel = nextLabel ?? t.common.buttons.next;
  const resolvedBackLabel = backLabel ?? t.common.buttons.back;

  return (
    <div className="flex gap-3 mt-7 no-print max-[480px]:flex-col">
      {onBack && (
        <button
          onClick={onBack}
          className="clay-btn clay-btn-secondary text-sm max-[480px]:w-full max-[480px]:text-center"
        >
          {resolvedBackLabel}
        </button>
      )}
      {onNext && (
        <button
          onClick={onNext}
          className={`clay-btn text-sm max-[480px]:w-full max-[480px]:text-center ${nextVariant === 'accent' ? 'clay-btn-accent' : 'clay-btn-primary'}`}
        >
          {resolvedNextLabel} →
        </button>
      )}
    </div>
  );
}
