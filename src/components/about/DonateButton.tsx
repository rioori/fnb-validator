'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/i18n/LocaleProvider';

export default function DonateButton() {
  const { t } = useTranslation();
  const [showQR, setShowQR] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowQR(!showQR)}
        className="clay-btn clay-btn-primary text-[13px] px-5 py-2.5"
      >
        {showQR ? t.knowledge.donate.hide : t.knowledge.donate.show}
      </button>

      {showQR && (
        <div className="mt-4 animate-bounce-in">
          <div className="inline-block bg-white rounded-2xl p-3 border-2 border-border shadow-[3px_3px_0_var(--color-text)]">
            <Image
              src="/donate-qr.jpg"
              alt={t.knowledge.donate.qrAlt}
              width={220}
              height={220}
              className="rounded-xl"
            />
          </div>
          <p className="text-[11px] text-text-muted mt-2 italic">
            {t.knowledge.donate.thanks}
          </p>
        </div>
      )}
    </>
  );
}
