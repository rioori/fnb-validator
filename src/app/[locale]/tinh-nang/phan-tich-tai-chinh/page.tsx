import type { Metadata } from 'next';
import { getDictionary } from '@/i18n/get-dictionary';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';
import FeaturePage from '@/components/features/FeaturePage';

const BASE_URL = 'https://www.validator.vn';
const VI_PATH = '/tinh-nang/phan-tich-tai-chinh';

function HowToJsonLd({ locale }: { locale: string }) {
  const isVi = locale === defaultLocale;
  const url = isVi ? `${BASE_URL}${VI_PATH}` : `${BASE_URL}${localePath(VI_PATH, 'en')}`;

  const jsonLd = isVi
    ? {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Cách tính điểm hòa vốn (Break-even) cho quán F&B',
        description: 'Hướng dẫn 6 bước tính điểm hòa vốn + thời gian hoàn vốn cho quán cà phê, nhà hàng, bakery tại Việt Nam.',
        totalTime: 'PT10M',
        url,
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Chọn mô hình kinh doanh', text: 'Chọn 1 trong 8 mô hình F&B: cafe, quán ăn, trà sữa, nhà hàng, cloud kitchen, bakery, bar, kiosk. Mỗi mô hình có benchmark chi phí + doanh thu riêng.' },
          { '@type': 'HowToStep', position: 2, name: 'Nhập vị trí thành phố', text: 'Chọn thành phố mở quán (TP.HCM, Hà Nội, Đà Nẵng, 10+ tỉnh). Vị trí ảnh hưởng giá thuê (multiplier x0.6-x1.4) và doanh thu kỳ vọng.' },
          { '@type': 'HowToStep', position: 3, name: 'Nhập vốn đầu tư ban đầu', text: 'Tổng vốn = thiết bị + thi công + nội thất + NVL ban đầu + working capital 3-6 tháng. Validator tự gợi ý theo mô hình + vị trí.' },
          { '@type': 'HowToStep', position: 4, name: 'Nhập doanh thu kỳ vọng', text: 'Khách/ngày × AOV × 30 ngày = doanh thu tháng. Phân biệt weekday vs weekend. Có ramp-up: tháng 1 = 45% công suất, tháng 6 = 100%.' },
          { '@type': 'HowToStep', position: 5, name: 'Nhập chi phí vận hành', text: 'Food cost % (NVL), labor (nhân sự + BHXH 21.5%), rent, marketing, utilities, var/fixed others. Benchmark có sẵn theo segment.' },
          { '@type': 'HowToStep', position: 6, name: 'Xem dashboard kết quả', text: 'Validator tính: P&L 12 tháng, BEP (điểm hòa vốn), thời gian hoàn vốn, cash flow, sensitivity analysis. Cảnh báo nếu prime cost > 65% hoặc rent > 25%.' },
        ],
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Calculate Break-Even Point for an F&B Business',
        description: '6-step guide to calculate break-even point + payback time for coffee shops, restaurants, bakeries in Vietnam.',
        totalTime: 'PT10M',
        url,
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Choose business model', text: 'Pick 1 of 8 F&B models: cafe, eatery, bubble tea, restaurant, cloud kitchen, bakery, bar, kiosk. Each has its own cost + revenue benchmarks.' },
          { '@type': 'HowToStep', position: 2, name: 'Enter city location', text: 'Choose the city (HCMC, Hanoi, Da Nang, 10+ provinces). Location affects rent (multiplier 0.6-1.4x) and expected revenue.' },
          { '@type': 'HowToStep', position: 3, name: 'Enter initial investment', text: 'Total capital = equipment + construction + furniture + initial ingredients + 3-6 month working capital. Validator suggests defaults by model + location.' },
          { '@type': 'HowToStep', position: 4, name: 'Enter expected revenue', text: 'Customers/day × AOV × 30 days = monthly revenue. Distinguish weekday vs weekend. Includes ramp-up: month 1 = 45% capacity, month 6 = 100%.' },
          { '@type': 'HowToStep', position: 5, name: 'Enter operating costs', text: 'Food cost %, labor (staff + 21.5% insurance), rent, marketing, utilities, variable/fixed others. Benchmarks available per segment.' },
          { '@type': 'HowToStep', position: 6, name: 'View results dashboard', text: 'Validator calculates: 12-month P&L, break-even point, payback time, cash flow, sensitivity analysis. Alerts if prime cost > 65% or rent > 25%.' },
        ],
      };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const meta = dict.features.financialAnalysis.meta;
  const canonical = locale === defaultLocale ? `${BASE_URL}${VI_PATH}` : `${BASE_URL}${localePath(VI_PATH, 'en')}`;

  const ogImage = `/api/og?locale=${locale}&page=feature&title=${encodeURIComponent(meta.title)}&subtitle=${encodeURIComponent(meta.description)}`;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [ogImage],
    },
    alternates: {
      canonical,
      languages: { vi: `${BASE_URL}${VI_PATH}`, en: `${BASE_URL}${localePath(VI_PATH, 'en')}` },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <HowToJsonLd locale={locale} />
      <FeaturePage
        feature={dict.features.financialAnalysis}
        breadcrumb={dict.features.breadcrumb}
        locale={locale}
        share={dict.common.share}
        ctaLabel={dict.features.ctaLabel}
        freeLabel={dict.features.freeLabel}
        whatYouGet={dict.features.whatYouGet}
        whoIsFor={dict.features.whoIsFor}
      />
    </>
  );
}
