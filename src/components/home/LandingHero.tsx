'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import { useTranslation } from '@/i18n/LocaleProvider';
import { localePath } from '@/i18n/link';
import QuoteRotator from './QuoteRotator';
import AnimatedCounter from './AnimatedCounter';
import Footer from './Footer';

const STAT_META = [
  { value: 198, suffixVI: 'K', suffixEN: 'K', bg: 'bg-pastel-blush', color: 'text-red-600' },
  { value: 50, suffixVI: '%', suffixEN: '%', bg: 'bg-pastel-gold', color: 'text-amber-700' },
  { value: 5.2, suffixVI: ' triệu', suffixEN: 'M', decimals: 1, bg: 'bg-pastel-mint', color: 'text-emerald-700' },
  { value: 157, suffixVI: 'K', suffixEN: 'K', bg: 'bg-pastel-blue', color: 'text-blue-700' },
];

const VERTICAL_META = [
  { id: 'fnb', icon: 'coffee', path: '/fnb', active: true, bg: 'bg-pastel-cream' },
  { id: 'retail', icon: 'retail', path: '#', active: false, bg: 'bg-pastel-blue' },
  { id: 'education', icon: 'education', path: '#', active: false, bg: 'bg-pastel-gold' },
  { id: 'services', icon: 'services', path: '#', active: false, bg: 'bg-pastel-blush' },
];

const FEATURE_ICONS = ['chart', 'chat', 'book', 'checklist'];

const FEATURE_LINKS = [
  '/tinh-nang/phan-tich-tai-chinh',
  '/tinh-nang/ai-advisor',
  '/tinh-nang/kien-thuc',
  '/tinh-nang/checklist',
];

const spring = { type: 'spring' as const, stiffness: 300, damping: 22 };

function StaggeredSection({ children, className, delay = 0, id }: { children: React.ReactNode; className?: string; delay?: number; id?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

const cardItem = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function LandingHero() {
  const { t, locale } = useTranslation();
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-40px' });

  return (
    <div className="max-w-[1200px] mx-auto px-8 pt-4 pb-8 max-lg:px-5 max-md:px-3">
      {/* Hero */}
      <div className="clay-card-static bg-white pb-8 mb-4 text-center max-md:pb-6 overflow-hidden">
        {/* Storefront banner — flush top */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/illustrations/landing-hero-v4.webp"
            alt=""
            width={1584}
            height={672}
            className="w-full"
            priority
          />
        </motion.div>

        {/* Content area */}
        <div className="px-6 max-md:px-4">
        {/* Logo — blur-to-sharp */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/logo.png"
            alt={t.landing.hero.logoAlt}
            width={100}
            height={100}
            className="mx-auto mb-2"
          />
        </motion.div>

        {/* H1 — fade up */}
        <motion.h1
          className="text-2xl font-bold text-text font-[family-name:var(--font-heading)] mb-2 max-md:text-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {t.landing.hero.h1}
        </motion.h1>

        {/* Description — fade up */}
        <motion.p
          className="text-[14px] text-text-muted max-w-[560px] mx-auto max-md:text-[13px] mb-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {t.landing.hero.desc}
        </motion.p>

        {/* Quote rotator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <QuoteRotator />
        </motion.div>

        {/* Features — staggered spring pop */}
        <motion.div
          className="border-t border-border-light mt-5 pt-4"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 1.0 } },
          }}
        >
          <div className="grid grid-cols-4 gap-3 max-md:grid-cols-2">
            {t.landing.features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={{
                  hidden: { opacity: 0, scale: 0.85, y: 10 },
                  show: { opacity: 1, scale: 1, y: 0 },
                }}
                transition={spring}
              >
                <Link
                  href={localePath(FEATURE_LINKS[i], locale)}
                  className="clay-card bg-white/60 p-3 text-center block h-full"
                >
                  <Icon name={FEATURE_ICONS[i]} size={36} className="mx-auto mb-2" />
                  <h3 className="text-[13px] font-bold font-[family-name:var(--font-heading)] text-text mb-1">
                    {f.title}
                  </h3>
                  <p className="text-[11px] text-text-muted leading-relaxed">{f.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </div>
      </div>

      {/* About Validator.vn */}
      <StaggeredSection className="clay-card-static bg-white p-5 mb-4" delay={0.1}>
        <motion.h2
          className="text-[15px] font-bold font-[family-name:var(--font-heading)] text-text mb-1 text-center"
          variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
        >
          {t.landing.about.heading}
        </motion.h2>
        <motion.p
          className="text-[12px] text-text-muted text-center mb-3"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        >
          {t.landing.about.desc}
        </motion.p>
        {/* Audience pills */}
        <div className="grid grid-cols-2 gap-3 max-w-[600px] mx-auto mb-4 max-md:grid-cols-1">
          {t.landing.about.audiences.map((a) => (
            <motion.div
              key={a.label}
              className="clay-sm bg-mint-light px-4 py-3 flex flex-col items-center text-center gap-1.5"
              variants={cardItem}
              transition={spring}
            >
              <Icon name={a.icon} size={24} className="!border-0 !shadow-none !bg-transparent" />
              <span className="text-[12px] font-bold font-[family-name:var(--font-heading)] text-text leading-tight">{a.label}</span>
              <span className="text-[11px] text-text-muted leading-tight">{a.desc}</span>
            </motion.div>
          ))}
        </div>
        {/* How it works — 3-step flow */}
        <motion.h3
          className="text-[12px] font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-muted mb-3 text-center"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        >
          {t.landing.about.howItWorks}
        </motion.h3>
        <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1">
          {t.landing.about.steps.map((s) => (
            <motion.div
              key={s.step}
              className="clay-sm bg-pastel-cream p-4 text-center"
              variants={cardItem}
              transition={spring}
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-cta text-white text-[14px] font-bold font-[family-name:var(--font-heading)] mb-2">
                {s.step}
              </span>
              <h4 className="text-[13px] font-bold font-[family-name:var(--font-heading)] text-text mb-1">{s.title}</h4>
              <p className="text-[11px] text-text-muted leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.p
          className="text-[11px] text-cta font-semibold text-center mt-3"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        >
          {t.landing.about.cta}
        </motion.p>
      </StaggeredSection>

      {/* Stats — count-up animation on scroll */}
      <motion.div
        ref={statsRef}
        className="clay-card-static bg-white p-5 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={statsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-[12px] font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-muted mb-4 text-center">
          {t.landing.sections.whyValidate}
        </h2>
        <div className="grid grid-cols-4 gap-3 max-md:grid-cols-2">
          {STAT_META.map((stat, i) => {
            const s = t.landing.stats[i];
            const suffix = locale === 'en' ? stat.suffixEN : stat.suffixVI;
            return (
              <div key={s.label} className={`text-center p-3 rounded-xl ${stat.bg} border-2 border-white shadow-sm`}>
                <span className={`text-[22px] font-bold font-[family-name:var(--font-heading)] ${stat.color} block max-md:text-[18px]`}>
                  {statsInView ? (
                    <AnimatedCounter value={stat.value} suffix={suffix} decimals={stat.decimals} />
                  ) : (
                    <>0{suffix}</>
                  )}
                </span>
                <span className="text-[11px] text-text font-semibold block leading-tight mt-0.5">{s.label}</span>
                <span className="text-[10px] text-text-muted">{s.sub}</span>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Vertical Selector — staggered on scroll */}
      <StaggeredSection className="mb-4" delay={0.1}>
        <motion.h2
          className="text-[12px] font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-muted mb-3 text-center"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        >
          {t.landing.sections.chooseVertical}
        </motion.h2>
        <div className="grid grid-cols-2 gap-3 max-[480px]:grid-cols-1">
          {VERTICAL_META.map((v, i) => {
            const vt = t.landing.verticals[i];
            return v.active ? (
              <motion.div key={v.id} variants={cardItem} transition={spring}>
                <Link
                  href={v.path === '#' ? '#' : localePath(v.path, locale)}
                  className={`clay-card ${v.bg} p-5 text-center flex flex-col items-center cursor-pointer h-full`}
                >
                  <Icon name={v.icon} size={48} className="mb-2" />
                  <h3 className="text-[15px] font-bold font-[family-name:var(--font-heading)] text-text mb-1">{vt.name}</h3>
                  <p className="text-[12px] text-text-muted leading-relaxed mb-2 flex-1">{vt.desc}</p>
                  <span className="text-[10px] text-cta font-semibold mb-2">{vt.stats}</span>
                  <span className="clay-pill bg-cta text-white !text-[11px] !border-cta">{vt.cta}</span>
                </Link>
              </motion.div>
            ) : (
              <motion.div
                key={v.id}
                variants={cardItem}
                transition={spring}
                className={`clay-card-static ${v.bg} p-5 text-center flex flex-col items-center opacity-60`}
              >
                <Icon name={v.icon} size={48} className="mb-2" />
                <h3 className="text-[15px] font-bold font-[family-name:var(--font-heading)] text-text mb-1">{vt.name}</h3>
                <p className="text-[12px] text-text-muted leading-relaxed mb-2 flex-1">{vt.desc}</p>
                <span className="text-[10px] text-text-light font-semibold mb-2">{vt.stats}</span>
                <span className="clay-pill bg-surface3 text-text-light !text-[11px]">{vt.cta}</span>
              </motion.div>
            );
          })}
        </div>
      </StaggeredSection>

      <Footer />
    </div>
  );
}
