'use client';

import { Suspense } from 'react';
import WizardShell from '@/components/wizard/WizardShell';

export default function Home() {
  return (
    <Suspense>
      <WizardShell />
    </Suspense>
  );
}
