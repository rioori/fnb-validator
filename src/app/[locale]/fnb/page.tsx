'use client';

import { Suspense } from 'react';
import WizardShell from '@/components/wizard/WizardShell';
import { StepSkeleton } from '@/components/ui/Skeleton';

export default function Home() {
  return (
    <Suspense fallback={
      <div className="max-w-[1200px] mx-auto px-8 pt-4 pb-[80px] max-lg:px-5 max-md:px-3">
        <StepSkeleton />
      </div>
    }>
      <WizardShell />
    </Suspense>
  );
}
