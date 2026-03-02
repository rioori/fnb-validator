'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '@/i18n/LocaleProvider';

const spring = { type: 'spring' as const, stiffness: 300, damping: 22 };

const AVATARS = ['/avatars/minh-tu.webp', '/avatars/hoang-nam.webp', '/avatars/thu-hang.webp', '/avatars/quoc-bao.webp'];

export default function TestimonialsSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="clay-card-static bg-white p-5 mb-4"
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
      }}
    >
      <motion.h2
        className="text-[15px] font-bold font-[family-name:var(--font-heading)] text-text mb-4 text-center"
        variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
      >
        {t.landing.testimonials.heading}
      </motion.h2>

      <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
        {t.landing.testimonials.items.map((item, i) => (
          <motion.div
            key={item.name}
            className="clay-sm bg-white p-4"
            variants={{
              hidden: { opacity: 0, y: 16, scale: 0.96 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={spring}
          >
            <p className="text-[12px] text-text leading-relaxed mb-3 italic">
              &ldquo;{item.text}&rdquo;
            </p>
            <div className="flex items-center gap-2.5">
              <Image
                src={AVATARS[i % AVATARS.length]}
                alt={item.name}
                width={36}
                height={36}
                className="w-9 h-9 rounded-full object-cover border-2 border-text flex-shrink-0"
              />
              <div>
                <p className="text-[12px] font-semibold text-text font-[family-name:var(--font-heading)] leading-tight">
                  {item.name}
                </p>
                <p className="text-[10px] text-text-muted leading-tight">
                  {item.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
