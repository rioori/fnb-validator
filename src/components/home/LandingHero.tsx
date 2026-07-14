'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import { useTranslation } from '@/i18n/LocaleProvider';
import { localePath } from '@/i18n/link';
import QuoteRotator from './QuoteRotator';
import AnimatedCounter from './AnimatedCounter';
import SocialProof from './SocialProof';
import Footer from './Footer';
import ExpertPreview from './ExpertPreview';
import TrendPreview from './TrendPreview';
import ShareSection from '@/components/dashboard/ShareSection';
import TestimonialsSection from './TestimonialsSection';

const STAT_META = [
  { value: 198, suffixVI: 'K', suffixEN: 'K', color: 'text-red-600', group: 'reality' as const },
  { value: 50, suffixVI: '%', suffixEN: '%', color: 'text-amber-700', group: 'reality' as const },
  { value: 5.2, suffixVI: ' triệu', suffixEN: 'M', decimals: 1, color: 'text-emerald-700', group: 'opportunity' as const },
  { value: 157, suffixVI: 'K', suffixEN: 'K', color: 'text-blue-700', group: 'opportunity' as const },
];

const VERTICAL_META = [
  { id: 'fnb', icon: 'coffee', path: '/fnb', active: true, bg: 'bg-pastel-cream' },
  { id: 'retail', icon: 'retail', path: '#', active: false, bg: 'bg-pastel-blue' },
  { id: 'education', icon: 'education', path: '#', active: false, bg: 'bg-pastel-gold' },
  { id: 'services', icon: 'services', path: '#', active: false, bg: 'bg-pastel-blush' },
];

const FEATURE_ICONS = ['chart', 'chat', 'book', 'checklist'];
const FEATURE_BGS = ['bg-pastel-mint', 'bg-pastel-blue', 'bg-pastel-gold', 'bg-pastel-blush'];

const FEATURE_LINKS = [
  '/tinh-nang/phan-tich-tai-chinh',
  '/tinh-nang/ai-advisor',
  '/tinh-nang/kien-thuc',
  '/tinh-nang/checklist',
];

const AUDIENCE_BGS = ['bg-pastel-mint', 'bg-pastel-gold'];
const STEP_BGS = ['bg-pastel-cream', 'bg-pastel-mint', 'bg-pastel-gold'];

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

/* Inline SVG arrow for step flow connectors */
function StepArrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
         className="text-text-light flex-shrink-0">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

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
            alt="Validator.vn — F&B business validation tool for Vietnamese cafe, restaurant, and bubble tea owners"
            width={1584}
            height={672}
            className="w-full"
            priority
          />
        </motion.div>

        {/* Vertical quick-pick pills */}
        <motion.div
          className="flex items-center justify-center gap-2 px-5 mt-3 mb-1 max-md:grid max-md:grid-cols-2 max-md:gap-1.5 max-md:px-3 max-md:mt-2"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06, delayChildren: 0.4 } },
          }}
        >
          {VERTICAL_META.map((v, i) => {
            const vt = t.landing.verticals[i];
            return v.active ? (
              <motion.div key={v.id} variants={cardItem} transition={spring} className="flex-1 min-w-0">
                <Link
                  href={localePath(v.path, locale)}
                  className="clay-pill bg-cta text-white !border-cta !text-[12px] !px-4 !py-1.5 cursor-pointer inline-flex items-center justify-center gap-1.5 w-full max-md:!text-[11px] max-md:!px-2.5 max-md:whitespace-nowrap"
                >
                  <Icon name={v.icon} size={16} className="!border-0 !shadow-none !bg-transparent !p-0 !w-4 !h-4 flex-shrink-0" />
                  {vt.name} — {vt.cta}
                </Link>
              </motion.div>
            ) : (
              <motion.div key={v.id} variants={cardItem} transition={spring} className="flex-1 min-w-0">
                <span className="clay-pill bg-surface3 text-text-muted !text-[12px] !px-4 !py-1.5 inline-flex items-center justify-center gap-1.5 w-full max-md:!text-[11px] max-md:!px-2.5 max-md:whitespace-nowrap">
                  <Icon name={v.icon} size={16} className="!border-0 !shadow-none !bg-transparent !p-0 !w-4 !h-4 opacity-50 flex-shrink-0" />
                  {vt.name} · {vt.cta}
                </span>
              </motion.div>
            );
          })}
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

        {/* Social proof counter */}
        <SocialProof />

        {/* D1: Features — staggered spring pop, unique pastel backgrounds */}
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
                  className={`clay-card ${FEATURE_BGS[i]} p-3 text-center block h-full`}
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
        {/* D2: Audience pills — unique pastel backgrounds */}
        <div className="grid grid-cols-2 gap-3 max-w-[600px] mx-auto mb-4 max-md:grid-cols-1">
          {t.landing.about.audiences.map((a, audienceIdx) => (
            <motion.div
              key={a.label}
              className={`clay-sm ${AUDIENCE_BGS[audienceIdx]} px-4 py-3 flex flex-col items-center text-center gap-1.5`}
              variants={cardItem}
              transition={spring}
            >
              <Icon name={a.icon} size={24} className="!border-0 !shadow-none !bg-transparent" />
              <span className="text-[12px] font-bold font-[family-name:var(--font-heading)] text-text leading-tight">{a.label}</span>
              <span className="text-[11px] text-text-muted leading-tight">{a.desc}</span>
            </motion.div>
          ))}
        </div>
        {/* D3: How it works — step flow with connectors + unique tints */}
        <motion.h3
          className="text-[12px] font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-muted mb-3 text-center"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        >
          {t.landing.about.howItWorks}
        </motion.h3>
        <div className="flex items-stretch gap-2 max-md:flex-col max-md:gap-0">
          {t.landing.about.steps.map((s, stepIdx) => (
            <React.Fragment key={s.step}>
              <motion.div
                className={`clay-sm ${STEP_BGS[stepIdx]} p-4 text-center flex-1`}
                variants={cardItem}
                transition={spring}
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-cta text-white text-[14px] font-bold font-[family-name:var(--font-heading)] mb-2">
                  {s.step}
                </span>
                <h4 className="text-[13px] font-bold font-[family-name:var(--font-heading)] text-text mb-1">{s.title}</h4>
                <p className="text-[11px] text-text-muted leading-relaxed">{s.desc}</p>
              </motion.div>
              {/* Desktop: horizontal arrow between steps */}
              {stepIdx < 2 && (
                <div className="flex items-center justify-center px-0.5 max-md:hidden" aria-hidden="true">
                  <StepArrow />
                </div>
              )}
              {/* Mobile: vertical dashed connector */}
              {stepIdx < 2 && (
                <div className="hidden max-md:flex justify-center py-1" aria-hidden="true">
                  <div className="w-0.5 h-5 border-l-2 border-dashed border-border-light" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <motion.p
          className="text-[11px] text-cta font-semibold text-center mt-3"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        >
          {t.landing.about.cta}
        </motion.p>
      </StaggeredSection>

      {/* D4: Stats — narrative storytelling */}
      <motion.div
        ref={statsRef}
        className="clay-card-static bg-white pb-5 mb-4 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={statsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {/* Illustration banner */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/illustrations/stats-narrative.webp"
          alt="Vietnam F&B market reality vs opportunity — 198K shops, 50% close rate, 5.2M industry workers"
          className="w-full"
          loading="lazy"
        />

        <div className="px-5 max-md:px-4">
          <h2 className="text-[12px] font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-muted mt-4 mb-4 text-center">
            {t.landing.sections.whyValidate}
          </h2>

          {/* Two-column layout: Reality (left) | Opportunity (right) — stacks on mobile */}
          <div className="grid grid-cols-2 gap-4 mb-5 max-md:grid-cols-1 max-md:gap-5">
            {/* Left column — Reality (aligns with harsh side of illustration) */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400 flex-shrink-0" />
                <p className="text-[11px] font-bold uppercase tracking-wider text-red-500">
                  {t.landing.statsNarrative.reality}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 max-md:grid-cols-2">
              {STAT_META.filter(s => s.group === 'reality').map((stat, i) => {
                const s = t.landing.stats[i];
                const suffix = locale === 'en' ? stat.suffixEN : stat.suffixVI;
                return (
                  <div key={s.label} className="bg-pastel-blush/40 rounded-xl p-4 border border-red-100 max-md:p-3">
                    <span className={`text-[30px] font-bold font-[family-name:var(--font-heading)] ${stat.color} leading-none block mb-1.5 max-md:text-[20px]`}>
                      {statsInView ? (
                        <AnimatedCounter value={stat.value} suffix={suffix} decimals={stat.decimals} />
                      ) : <>0{suffix}</>}
                    </span>
                    <p className="text-[12px] font-semibold text-text leading-tight mb-0.5 max-md:text-[11px]">{s.label}</p>
                    <p className="text-[11px] text-text-muted leading-snug">{s.sub}</p>
                  </div>
                );
              })}
              </div>
            </div>

            {/* Right column — Opportunity (aligns with bright side of illustration) */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                  {t.landing.statsNarrative.opportunity}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 max-md:grid-cols-2">
              {STAT_META.filter(s => s.group === 'opportunity').map((stat, i) => {
                const idx = i + 2;
                const s = t.landing.stats[idx];
                const suffix = locale === 'en' ? stat.suffixEN : stat.suffixVI;
                return (
                  <div key={s.label} className="bg-pastel-mint/40 rounded-xl p-4 border border-emerald-100 max-md:p-3">
                    <span className={`text-[30px] font-bold font-[family-name:var(--font-heading)] ${stat.color} leading-none block mb-1.5 max-md:text-[20px]`}>
                      {statsInView ? (
                        <AnimatedCounter value={stat.value} suffix={suffix} decimals={stat.decimals} />
                      ) : <>0{suffix}</>}
                    </span>
                    <p className="text-[12px] font-semibold text-text leading-tight mb-0.5 max-md:text-[11px]">{s.label}</p>
                    <p className="text-[11px] text-text-muted leading-snug">{s.sub}</p>
                  </div>
                );
              })}
              </div>
            </div>
          </div>

          {/* Punchline */}
          <p className="text-[13px] font-bold text-text text-center leading-snug pt-3 border-t border-border-light font-[family-name:var(--font-heading)] max-md:text-[12px]">
            {t.landing.statsNarrative.punchline}
          </p>
        </div>
      </motion.div>

      {/* D6: Mid-page CTA Band — dual mode (Quick vs Detailed) */}
      <motion.div
        className="cta-band mb-4 p-5 text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[13px] text-text font-semibold font-[family-name:var(--font-heading)] mb-3">
          {t.landing.about.cta}
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap max-md:flex-col max-md:gap-2">
          {/* Use plain <a> so URL params trigger a full mount → WizardShell useEffect picks up ?mode=quick */}
          <a
            href={`${localePath('/fnb', locale)}?mode=quick&utm_source=homepage&utm_medium=mid-cta&utm_campaign=quick`}
            className="clay-btn clay-btn-primary text-[14px] px-6 py-2.5 inline-flex items-center gap-2 max-md:w-full max-md:justify-center"
          >
            ⚡ {locale === 'en' ? 'Quick check — 1 minute' : 'Tính nhanh — 1 phút'}
          </a>
          <a
            href={`${localePath('/fnb', locale)}?start=1&utm_source=homepage&utm_medium=mid-cta&utm_campaign=detailed`}
            className="text-[13px] text-text-muted hover:text-cta transition-colors underline font-semibold max-md:mt-1"
          >
            {locale === 'en' ? 'or detailed — 6 steps →' : 'hoặc chi tiết — 6 bước →'}
          </a>
        </div>
        <p className="text-[11px] text-text-muted mt-2.5 max-w-[440px] mx-auto leading-snug">
          {locale === 'en'
            ? 'Quick: enter 6 core numbers, see verdict instantly. Detailed: full walkthrough with cost breakdown.'
            : 'Nhanh: nhập 6 con số cốt lõi, biết kết quả ngay. Chi tiết: đi từng bước với breakdown chi phí đầy đủ.'}
        </p>
      </motion.div>

      {/* Survival Score quick card — viral hook */}
      <motion.div
        className="clay-card-static bg-gradient-to-br from-emerald-50 to-amber-50 border-2 border-text/20 p-5 mb-4 max-md:p-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-start gap-3 max-md:flex-col">
          <div className="shrink-0 w-12 h-12 rounded-xl bg-text flex items-center justify-center shadow-[2px_2px_0_var(--color-text)]">
            <Icon name="chart" size={26} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-bold tracking-widest text-text-muted mb-0.5">
              {locale === 'en' ? 'NEW · QUICK CHECK · 30 SECONDS' : 'MỚI · TÍNH NHANH · 30 GIÂY'}
            </div>
            <h3 className="text-[16px] font-bold font-[family-name:var(--font-heading)] text-text leading-tight mb-1">
              {locale === 'en' ? 'F&B Survival Score — Will your shop survive Year 1?' : 'Survival Score — Quán bạn sẽ sống năm đầu không?'}
            </h3>
            <p className="text-[12px] text-text-muted leading-relaxed mb-3">
              {locale === 'en'
                ? 'Predict Year-1 survival probability with 1-10 score based on 8 critical factors from real Vietnam F&B data.'
                : 'Dự đoán % sống sót năm đầu — 1-10 điểm dựa trên 8 yếu tố quan trọng từ data thực tế F&B Việt Nam.'}
            </p>
            <Link
              href={`${localePath('/survival-score', locale)}?utm_source=homepage&utm_medium=hero-card`}
              className="inline-flex items-center gap-1.5 bg-text hover:opacity-90 text-white font-bold text-[13px] px-5 py-2 rounded-xl transition-opacity"
            >
              {locale === 'en' ? 'Calculate Survival Score →' : 'Tính Survival Score →'}
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Expert Preview */}
      <ExpertPreview
        heading={t.landing.expertsPreview.heading}
        desc={t.landing.expertsPreview.desc}
        viewAllLabel={t.landing.expertsPreview.viewAll}
      />

      {/* Trend Preview */}
      <TrendPreview
        heading={t.landing.trendsPreview.heading}
        desc={t.landing.trendsPreview.desc}
        viewAllLabel={t.landing.trendsPreview.viewAll}
      />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* D7: Closing section before footer */}
      <StaggeredSection className="clay-card-static bg-pastel-cream p-6 mb-4 text-center" delay={0.05}>
        <motion.h2
          className="text-[16px] font-bold font-[family-name:var(--font-heading)] text-text mb-2"
          variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
        >
          {t.landing.closing.heading}
        </motion.h2>
        <motion.p
          className="text-[12px] text-text-muted mb-4"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        >
          {t.landing.closing.desc}
        </motion.p>
        <motion.div
          variants={{ hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1 } }}
          transition={spring}
        >
          <Link
            href={`${localePath('/fnb', locale)}?start=1`}
            className="clay-btn clay-btn-primary text-[15px] px-8 py-3"
          >
            {t.landing.closing.cta}
          </Link>
        </motion.div>
      </StaggeredSection>

      {/* Share / Spread the word */}
      <ShareSection />

      <Footer />
    </div>
  );
}
