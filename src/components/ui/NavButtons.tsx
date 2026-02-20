'use client';

interface NavButtonsProps {
  onBack?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  nextVariant?: 'primary' | 'accent';
  backLabel?: string;
}

export default function NavButtons({ onBack, onNext, nextLabel = 'Tiếp tục', nextVariant = 'primary', backLabel = 'Quay lại' }: NavButtonsProps) {
  return (
    <div className="flex gap-3 mt-7 no-print max-[480px]:flex-col">
      {onBack && (
        <button
          onClick={onBack}
          className="clay-btn clay-btn-secondary text-sm max-[480px]:w-full max-[480px]:text-center"
        >
          {backLabel}
        </button>
      )}
      {onNext && (
        <button
          onClick={onNext}
          className={`clay-btn text-sm max-[480px]:w-full max-[480px]:text-center ${nextVariant === 'accent' ? 'clay-btn-accent' : 'clay-btn-primary'}`}
        >
          {nextLabel} →
        </button>
      )}
    </div>
  );
}
