import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/i18n/get-dictionary';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';
import { MODELS } from '@/lib/constants';
import { formatVND } from '@/lib/format';
import {
  CITIES,
  MODEL_SLUGS,
  MODEL_SEO_NAMES,
  getCityBySlug,
  getAdjustedDefaults,
  getCityInsight,
} from '@/lib/seo-data';
import type { ModelKey } from '@/types';
import Icon from '@/components/ui/Icon';

const BASE_URL = 'https://www.validator.vn';

// ── Helpers ──

function t(template: string, vars: Record<string, string>): string {
  let result = template;
  for (const [key, value] of Object.entries(vars)) {
    result = result.replaceAll(`{${key}}`, value);
  }
  return result;
}

function densityLabel(
  density: 'very-high' | 'high' | 'medium' | 'low',
  dict: { fnbDensityVeryHigh: string; fnbDensityHigh: string; fnbDensityMedium: string; fnbDensityLow: string },
): string {
  const map = {
    'very-high': dict.fnbDensityVeryHigh,
    high: dict.fnbDensityHigh,
    medium: dict.fnbDensityMedium,
    low: dict.fnbDensityLow,
  };
  return map[density];
}

function sumItems(items: [string, number][]): number {
  return items.reduce((s, [, v]) => s + v, 0);
}

// ── SSG: 8 models × 13 cities = 104 combos ──

export function generateStaticParams() {
  const params: { model: string; city: string }[] = [];
  for (const model of MODEL_SLUGS) {
    for (const city of CITIES) {
      params.push({ model, city: city.slug });
    }
  }
  return params;
}

// ── Dynamic metadata ──

type PageProps = { params: Promise<{ locale: string; model: string; city: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, model, city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData || !MODEL_SLUGS.includes(model as ModelKey)) return {};

  const dict = await getDictionary(locale as Locale);
  const seo = dict.seo;
  const modelName = MODEL_SEO_NAMES[model as ModelKey]?.[locale as 'vi' | 'en'] ?? model;
  const cityName = locale === 'en' ? cityData.nameEn : cityData.nameVi;

  const title = t(seo.titleTemplate, { model: modelName, city: cityName });
  const description = t(seo.descTemplate, { model: modelName, city: cityName });

  const viUrl = `${BASE_URL}/chi-phi-mo/${model}/tai/${city}`;
  const enUrl = `${BASE_URL}${localePath(`/chi-phi-mo/${model}/tai/${city}`, 'en')}`;
  const canonical = locale === defaultLocale ? viUrl : enUrl;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: canonical,
    },
    twitter: {
      card: 'summary_large_image',
    },
    alternates: {
      canonical,
      languages: { vi: viUrl, en: enUrl },
    },
  };
}

// ── JSON-LD ──

function PageJsonLd({
  modelName,
  cityName,
  locale,
  model,
  city,
  budget,
}: {
  modelName: string;
  cityName: string;
  locale: string;
  model: string;
  city: string;
  budget: number;
}) {
  const prefix = locale === defaultLocale ? '' : '/en';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: locale === 'vi'
      ? `Chi phí mở ${modelName} tại ${cityName}`
      : `Cost to Open a ${modelName} in ${cityName}`,
    description: locale === 'vi'
      ? `Ước tính chi phí đầu tư cho ${modelName} tại ${cityName}`
      : `Estimated investment costs for a ${modelName} in ${cityName}`,
    author: { '@type': 'Organization', name: 'Validator.vn', url: BASE_URL },
    publisher: { '@type': 'Organization', name: 'Validator.vn', url: BASE_URL },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}${prefix}/chi-phi-mo/${model}/tai/${city}`,
    },
    inLanguage: locale,
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: locale === 'vi' ? 'Trang chủ' : 'Home', item: `${BASE_URL}${prefix}/fnb` },
      { '@type': 'ListItem', position: 2, name: locale === 'vi' ? 'Kiến thức' : 'Knowledge', item: `${BASE_URL}${prefix}/kien-thuc` },
      {
        '@type': 'ListItem',
        position: 3,
        name: locale === 'vi'
          ? `Chi phí mở ${modelName} tại ${cityName}`
          : `Cost to Open a ${modelName} in ${cityName}`,
        item: `${BASE_URL}${prefix}/chi-phi-mo/${model}/tai/${city}`,
      },
    ],
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: locale === 'vi'
          ? `Cần bao nhiêu vốn để mở ${modelName} tại ${cityName}?`
          : `How much does it cost to open a ${modelName} in ${cityName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: locale === 'vi'
            ? `Ước tính khoảng ${formatVND(budget, locale)} để mở ${modelName} tại ${cityName}, bao gồm xây dựng, thiết bị, nguyên liệu và vốn lưu động.`
            : `It is estimated to cost around ${formatVND(budget, locale)} to open a ${modelName} in ${cityName}, including construction, equipment, materials and working capital.`,
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}

// ── KPI Card ──

function KPICard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="clay-card-static p-4 text-center">
      <p className="text-[11px] text-text-muted uppercase tracking-wider mb-1">{label}</p>
      <p className="text-lg font-bold font-[family-name:var(--font-heading)] text-text">{value}</p>
      {sub && <p className="text-[11px] text-text-light mt-0.5">{sub}</p>}
    </div>
  );
}

// ── Breakdown Table ──

function BreakdownTable({ rows }: { rows: { label: string; amount: number; locale: string }[] }) {
  if (rows.length === 0) return null;
  const locale = rows[0]?.locale;
  return (
    <div className="space-y-1">
      {rows.map((row, i) => (
        <div key={i} className="flex justify-between items-center py-1.5 border-b border-border/30 last:border-0">
          <span className="text-[13px] text-text">{row.label}</span>
          <span className="text-[13px] font-semibold text-text tabular-nums">{formatVND(row.amount, locale)}</span>
        </div>
      ))}
    </div>
  );
}

// ── Page Component ──

export default async function ChiPhiMoPage({ params }: PageProps) {
  const { locale, model, city } = await params;
  const modelKey = model as ModelKey;
  const cityData = getCityBySlug(city);

  if (!cityData || !MODEL_SLUGS.includes(modelKey)) notFound();

  const dict = await getDictionary(locale as Locale);
  const seo = dict.seo;
  const loc = locale as Locale;
  const isEn = locale === 'en';

  const modelName = MODEL_SEO_NAMES[modelKey]?.[isEn ? 'en' : 'vi'] ?? model;
  const cityName = isEn ? cityData.nameEn : cityData.nameVi;
  const modelData = MODELS[modelKey];
  const defaults = modelData.defaults;

  // Adjust for city
  const adjusted = getAdjustedDefaults(modelKey, city, MODELS);
  if (!adjusted) notFound();

  const adjustedRent = adjusted.rent;
  const adjustedBudget = adjusted.budget;

  // ── Investment breakdown ──
  const invConstruction = sumItems(defaults.inv_xaydung);
  const invEquipment = sumItems(defaults.inv_thietbi);
  const invOther = sumItems(defaults.inv_khac);
  const invMatbang = sumItems(defaults.inv_matbang);
  const depositCost = adjustedRent * 3; // 3 months deposit

  // Total investment adjusted: base items + adjusted rent deposit + working capital
  const totalInvestment = invConstruction + invEquipment + invOther + invMatbang + depositCost + defaults.working_cap;
  // Use the city-adjusted budget as the headline figure (includes rent difference)
  const headlineBudget = adjustedBudget;

  // ── Monthly costs ──
  const staffTotal = defaults.staff.reduce((s, r) => s + r.count * r.salary, 0);
  const fixedOther = sumItems(defaults.fixed_other);
  const varOther = sumItems(defaults.var_other);

  // Revenue estimate (stable month, no ramp)
  const daysPerWeek = 7;
  const wdM = Math.round(daysPerWeek * 4.33 * 5 / 7);
  const weM = Math.round(daysPerWeek * 4.33 * 2 / 7);
  const avgDailyCustomers = Math.round(
    (defaults.cust_weekday * wdM + defaults.cust_weekend * weM) / (wdM + weM)
  );
  const monthlyRevenue = defaults.cust_weekday * defaults.avg_ticket * wdM + defaults.cust_weekend * defaults.avg_ticket * weM;

  // Food cost
  const foodCost = monthlyRevenue * (defaults.food_cost_pct / 100);

  // Total monthly opex
  const monthlyOpex = adjustedRent + staffTotal + fixedOther + varOther + foodCost;

  // Net profit
  const monthlyProfit = monthlyRevenue - monthlyOpex;

  // Break-even
  const breakEvenMonths = monthlyProfit > 0 ? Math.ceil(headlineBudget / monthlyProfit) : null;

  return (
    <>
      <PageJsonLd
        modelName={modelName}
        cityName={cityName}
        locale={locale}
        model={model}
        city={city}
        budget={headlineBudget}
      />

      <article className="py-2 max-md:py-0">
        {/* Breadcrumbs */}
        <nav className="text-[13px] text-text-muted mb-6">
          <Link href={localePath('/fnb', loc)} className="hover:text-cta transition-colors">
            {seo.breadcrumbHome}
          </Link>
          <span className="mx-2">/</span>
          <Link href={localePath('/kien-thuc', loc)} className="hover:text-cta transition-colors">
            {seo.breadcrumbKnowledge}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text font-semibold">
            {t(seo.heading, { model: modelName, city: cityName })}
          </span>
        </nav>

        {/* Hero */}
        <div className="clay-card-static bg-primary-light p-6 mb-6">
          <div className="flex items-center gap-4 max-md:flex-col max-md:text-center">
            <Icon name={modelData.icon} size={48} className="shrink-0" />
            <div>
              <h1 className="text-xl font-bold font-[family-name:var(--font-heading)] text-text">
                {t(seo.heading, { model: modelName, city: cityName })}
              </h1>
              <p className="text-[14px] text-text-muted mt-1">{seo.subheading}</p>
            </div>
          </div>
        </div>

        {/* City info pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="clay-pill bg-surface !py-1 !px-3 !text-[12px]">
            <strong className="text-cta">{cityData.population}</strong> {seo.populationLabel}
          </span>
          <span className="clay-pill bg-surface !py-1 !px-3 !text-[12px]">
            <strong className="text-cta">{cityData.avgRentRange}</strong> {seo.rentRangeLabel}
          </span>
          <span className="clay-pill bg-surface !py-1 !px-3 !text-[12px]">
            <strong className="text-cta">{densityLabel(cityData.fnbDensity, seo)}</strong> {seo.fnbDensityLabel}
          </span>
        </div>

        {/* City × Model market insight — unique paragraph per combo so pages aren't classified as duplicate/thin by search engines */}
        <div className="clay-card-static bg-pastel-cream/40 p-4 mb-6 max-md:p-3.5">
          <p className="text-[13px] text-text leading-relaxed">
            {getCityInsight(city, modelKey, isEn ? 'en' : 'vi')}
          </p>
          <p className="text-[11px] text-text-muted mt-2">
            {isEn
              ? `Data refreshed ${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} · Validator.vn`
              : `Cập nhật ${new Date().toLocaleDateString('vi-VN', { month: 'long', year: 'numeric' })} · Validator.vn`}
          </p>
        </div>

        {/* 4 KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <KPICard
            label={seo.investmentLabel}
            value={formatVND(headlineBudget, locale)}
          />
          <KPICard
            label={seo.rentLabel}
            value={formatVND(adjustedRent, locale)}
          />
          <KPICard
            label={seo.monthlyOpex}
            value={formatVND(monthlyOpex, locale)}
          />
          <KPICard
            label={seo.breakEvenTime}
            value={breakEvenMonths ? `${breakEvenMonths} ${seo.months}` : 'N/A'}
          />
        </div>

        {/* Investment Breakdown */}
        <div className="clay-card-static p-5 mb-4 max-md:p-4">
          <h2 className="text-[15px] font-bold font-[family-name:var(--font-heading)] text-text mb-4">
            {seo.investmentBreakdown}
          </h2>
          <BreakdownTable rows={[
            ...defaults.inv_xaydung.map(([label, amount]) => ({ label, amount, locale })),
            ...(defaults.inv_xaydung.length > 0 ? [{ label: seo.categoryConstruction, amount: invConstruction, locale }] : []),
          ].filter((_, i, arr) => arr.length <= 1 || i < arr.length - 1)} />

          <div className="space-y-1 mt-3">
            <div className="flex justify-between items-center py-2 bg-surface/50 px-3 rounded">
              <span className="text-[13px] font-semibold text-text">{seo.categoryConstruction}</span>
              <span className="text-[13px] font-bold text-cta tabular-nums">{formatVND(invConstruction, locale)}</span>
            </div>
            <div className="flex justify-between items-center py-2 bg-surface/50 px-3 rounded">
              <span className="text-[13px] font-semibold text-text">{seo.categoryEquipment}</span>
              <span className="text-[13px] font-bold text-cta tabular-nums">{formatVND(invEquipment, locale)}</span>
            </div>
            <div className="flex justify-between items-center py-2 bg-surface/50 px-3 rounded">
              <span className="text-[13px] font-semibold text-text">{seo.categoryOther}</span>
              <span className="text-[13px] font-bold text-cta tabular-nums">{formatVND(invOther, locale)}</span>
            </div>
            <div className="flex justify-between items-center py-2 bg-surface/50 px-3 rounded">
              <span className="text-[13px] font-semibold text-text">{seo.categoryWorkingCap}</span>
              <span className="text-[13px] font-bold text-cta tabular-nums">{formatVND(defaults.working_cap, locale)}</span>
            </div>
          </div>

          {/* Investment detail lists */}
          <div className="mt-4 space-y-3">
            {defaults.inv_xaydung.length > 0 && (
              <div>
                <h3 className="text-[12px] font-semibold text-text-muted uppercase tracking-wider mb-2">{seo.categoryConstruction}</h3>
                <BreakdownTable rows={defaults.inv_xaydung.map(([label, amount]) => ({ label, amount, locale }))} />
              </div>
            )}
            {defaults.inv_thietbi.length > 0 && (
              <div>
                <h3 className="text-[12px] font-semibold text-text-muted uppercase tracking-wider mb-2">{seo.categoryEquipment}</h3>
                <BreakdownTable rows={defaults.inv_thietbi.map(([label, amount]) => ({ label, amount, locale }))} />
              </div>
            )}
            {defaults.inv_khac.length > 0 && (
              <div>
                <h3 className="text-[12px] font-semibold text-text-muted uppercase tracking-wider mb-2">{seo.categoryOther}</h3>
                <BreakdownTable rows={defaults.inv_khac.map(([label, amount]) => ({ label, amount, locale }))} />
              </div>
            )}
          </div>
        </div>

        {/* Monthly Cost Breakdown */}
        <div className="clay-card-static p-5 mb-4 max-md:p-4">
          <h2 className="text-[15px] font-bold font-[family-name:var(--font-heading)] text-text mb-4">
            {seo.monthlyBreakdown}
          </h2>
          <div className="space-y-1">
            <div className="flex justify-between items-center py-2 bg-surface/50 px-3 rounded">
              <span className="text-[13px] font-semibold text-text">{seo.categoryRent}</span>
              <span className="text-[13px] font-bold text-cta tabular-nums">{formatVND(adjustedRent, locale)}</span>
            </div>
            <div className="flex justify-between items-center py-2 bg-surface/50 px-3 rounded">
              <span className="text-[13px] font-semibold text-text">{seo.categoryStaff}</span>
              <span className="text-[13px] font-bold text-cta tabular-nums">{formatVND(staffTotal, locale)}</span>
            </div>
            <div className="flex justify-between items-center py-2 bg-surface/50 px-3 rounded">
              <span className="text-[13px] font-semibold text-text">{seo.categoryFoodCost}</span>
              <span className="text-[13px] font-bold text-cta tabular-nums">{formatVND(foodCost, locale)}</span>
            </div>
            <div className="flex justify-between items-center py-2 bg-surface/50 px-3 rounded">
              <span className="text-[13px] font-semibold text-text">{seo.categoryFixed}</span>
              <span className="text-[13px] font-bold text-cta tabular-nums">{formatVND(fixedOther, locale)}</span>
            </div>
            <div className="flex justify-between items-center py-2 bg-surface/50 px-3 rounded">
              <span className="text-[13px] font-semibold text-text">{seo.categoryVariable}</span>
              <span className="text-[13px] font-bold text-cta tabular-nums">{formatVND(varOther, locale)}</span>
            </div>
          </div>

          {/* Staff detail */}
          <div className="mt-4">
            <h3 className="text-[12px] font-semibold text-text-muted uppercase tracking-wider mb-2">{seo.categoryStaff}</h3>
            <BreakdownTable rows={defaults.staff.map((s) => ({
              label: `${s.pos} (x${s.count})`,
              amount: s.count * s.salary,
              locale,
            }))} />
          </div>
        </div>

        {/* Revenue Estimate */}
        <div className="clay-card-static p-5 mb-4 max-md:p-4">
          <h2 className="text-[15px] font-bold font-[family-name:var(--font-heading)] text-text mb-4">
            {seo.revenueHeading}
          </h2>
          <div className="text-center py-4">
            <p className="text-2xl font-bold font-[family-name:var(--font-heading)] text-cta">
              {formatVND(monthlyRevenue, locale)}
            </p>
            <p className="text-[12px] text-text-muted mt-1">
              {t(seo.revenueNote, {
                customers: String(avgDailyCustomers),
                ticket: formatVND(defaults.avg_ticket, locale),
              })}
            </p>
          </div>
        </div>

        {/* Break-Even */}
        <div className="clay-card-static p-5 mb-4 max-md:p-4">
          <h2 className="text-[15px] font-bold font-[family-name:var(--font-heading)] text-text mb-4">
            {seo.breakEvenHeading}
          </h2>
          <div className="text-center py-4">
            {breakEvenMonths ? (
              <>
                <p className="text-2xl font-bold font-[family-name:var(--font-heading)] text-cta">
                  {breakEvenMonths} {seo.months}
                </p>
                <p className="text-[12px] text-text-muted mt-1">
                  {formatVND(headlineBudget, locale)} / {formatVND(monthlyProfit, locale)} {isEn ? 'profit/month' : 'lãi/tháng'}
                </p>
              </>
            ) : (
              <p className="text-[14px] text-text-muted">
                {isEn ? 'Break-even not achievable with current estimates' : 'Chưa thể hoàn vốn với ước tính hiện tại'}
              </p>
            )}
          </div>
        </div>

        {/* City note */}
        <p className="text-[12px] text-text-light text-center mb-6 italic">
          {t(seo.cityNote, { city: cityName })}
        </p>

        {/* CTA */}
        <div className="clay-card-static bg-mint-light p-6 mb-6 text-center">
          <h2 className="text-[15px] font-bold font-[family-name:var(--font-heading)] text-text mb-2">
            {seo.tryFull}
          </h2>
          <p className="text-[13px] text-text-muted mb-4">{seo.tryFullDesc}</p>
          <Link
            href={localePath(`/fnb?model=${model}`, loc)}
            className="clay-btn clay-btn-primary text-[14px] px-6 py-2.5 inline-flex items-center gap-2"
          >
            <Icon name="wizard" size={18} className="!border-0 !shadow-none !bg-transparent" />
            {seo.tryFull}
          </Link>
        </div>

        {/* Internal links: Other cities for this model */}
        <div className="mb-6">
          <h2 className="text-[13px] font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-muted mb-3">
            {seo.otherCities}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {CITIES.filter((c) => c.slug !== city).map((c) => {
              const cName = isEn ? c.nameEn : c.nameVi;
              return (
                <Link
                  key={c.slug}
                  href={localePath(`/chi-phi-mo/${model}/tai/${c.slug}`, loc)}
                  className="clay-card-static p-3 hover:shadow-[3px_3px_0_var(--color-text)] transition-shadow text-center"
                >
                  <span className="text-[13px] font-semibold text-text">{cName}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Internal links: Other models in this city */}
        <div className="mb-6">
          <h2 className="text-[13px] font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-muted mb-3">
            {t(seo.otherModels, { city: cityName })}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {MODEL_SLUGS.filter((m) => m !== modelKey).map((m) => {
              const mName = MODEL_SEO_NAMES[m]?.[isEn ? 'en' : 'vi'] ?? m;
              const mData = MODELS[m];
              return (
                <Link
                  key={m}
                  href={localePath(`/chi-phi-mo/${m}/tai/${city}`, loc)}
                  className="clay-card-static p-3 hover:shadow-[3px_3px_0_var(--color-text)] transition-shadow flex items-center gap-2"
                >
                  <Icon name={mData.icon} size={24} className="shrink-0" />
                  <span className="text-[13px] font-semibold text-text capitalize">{mName}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </article>
    </>
  );
}
