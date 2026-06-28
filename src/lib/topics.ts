/**
 * Topical hubs — groups articles + experts + city pages by F&B vertical
 * for topical authority SEO + reader navigation.
 *
 * Each topic includes:
 * - VI/EN copy (title, hero subtitle, meta)
 * - Tag matchers for experts (matches against expert.tags)
 * - Article slug list (from /kien-thuc/)
 * - Model key for city pages (/chi-phi-mo/[model]/tai/[city])
 */

import type { Locale } from '@/i18n/config';

export interface Topic {
  slug: string;
  modelKey: string; // matches MODEL_SLUGS for city pages link
  expertTagsVi: string[]; // Vietnamese tags to match against expert.tags
  expertTagsEn: string[]; // English tags to match against expert.tags
  articleSlugs: string[]; // slugs from /kien-thuc/
  comparisonSlugs?: string[]; // slugs from /so-sanh/
  copy: {
    vi: TopicCopy;
    en: TopicCopy;
  };
}

interface TopicCopy {
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  sectionExperts: string;
  sectionArticles: string;
  sectionCalculator: string;
  sectionCities: string;
  ctaCalculator: string;
  cityListIntro: string; // e.g., "Chi phí mở quán cafe theo thành phố"
}

export const TOPICS: Topic[] = [
  {
    slug: 'kinh-doanh-cafe',
    modelKey: 'coffee',
    expertTagsVi: ['Cà phê'],
    expertTagsEn: ['Coffee'],
    articleSlugs: [
      'mo-quan-cafe-nho-can-bao-nhieu-tien-2026',
      'chi-phi-delivery-va-app',
      'sai-lam-khi-chon-mat-bang-fnb',
      'tai-sao-50-phan-tram-quan-fnb-dong-cua',
      'so-lieu-nganh-fnb-viet-nam-2026',
      'luong-nhan-vien-fnb-2026',
      'cau-truc-chi-phi-fnb',
      'food-cost-chi-tiet',
      'quan-ly-dong-tien-thang-dau',
    ],
    comparisonSlugs: [
      'so-sanh-he-thong-pos',
      'validator-vs-excel-template-tinh-chi-phi-fnb',
    ],
    copy: {
      vi: {
        title: 'Kinh doanh cà phê ở Việt Nam — Hướng dẫn toàn diện',
        subtitle: 'Mọi thứ bạn cần biết trước khi mở quán cà phê: vốn, vị trí, vận hành, học từ founder thật. Cập nhật theo data 2026.',
        metaTitle: 'Kinh doanh cà phê Việt Nam 2026: Vốn, vị trí, vận hành (toàn diện)',
        metaDescription: 'Hướng dẫn mở quán cà phê 2026: vốn 80tr-1.5 tỷ, biên lợi nhuận 5-15%, 9 founder cà phê Việt chia sẻ, công cụ tính break-even miễn phí.',
        sectionExperts: 'Founder cà phê Việt Nam — học từ người thật',
        sectionArticles: 'Hướng dẫn chi tiết',
        sectionCalculator: 'Tính chi phí mở quán cà phê',
        sectionCities: 'Chi phí mở quán cà phê theo thành phố',
        ctaCalculator: 'Mở Validator: tính vốn + doanh thu + hoàn vốn cho quán cà phê của bạn →',
        cityListIntro: 'Chọn thành phố để xem chi phí mặt bằng + lương + benchmark cụ thể:',
      },
      en: {
        title: 'Coffee Business in Vietnam — Complete Guide',
        subtitle: 'Everything you need to know before opening a cafe: capital, location, operations, lessons from real founders. Updated with 2026 data.',
        metaTitle: 'Coffee Business in Vietnam 2026: Capital, Location, Operations (Complete)',
        metaDescription: 'Vietnam coffee shop guide 2026: capital $3-60K, profit margin 5-15%, 9 Vietnamese coffee founders share, free break-even calculator.',
        sectionExperts: 'Vietnam coffee founders — learn from real operators',
        sectionArticles: 'Detailed guides',
        sectionCalculator: 'Calculate your coffee shop costs',
        sectionCities: 'Coffee shop opening costs by city',
        ctaCalculator: 'Open Validator: calculate capital + revenue + payback for your coffee shop →',
        cityListIntro: 'Pick a city to see specific rent + labor + benchmarks:',
      },
    },
  },
  {
    slug: 'kinh-doanh-nha-hang',
    modelKey: 'restaurant',
    expertTagsVi: ['Nhà hàng', 'Chuỗi nhà hàng', 'Chuỗi F&B'],
    expertTagsEn: ['Restaurant', 'Restaurant Chain', 'F&B Chain'],
    articleSlugs: [
      'sai-lam-khi-chon-mat-bang-fnb',
      'tai-sao-50-phan-tram-quan-fnb-dong-cua',
      'so-lieu-nganh-fnb-viet-nam-2026',
      'luong-nhan-vien-fnb-2026',
      'cau-truc-chi-phi-fnb',
      'food-cost-chi-tiet',
      'chi-phi-delivery-va-app',
      'quan-ly-dong-tien-thang-dau',
    ],
    comparisonSlugs: [
      'so-sanh-he-thong-pos',
      'so-sanh-ho-kinh-doanh-va-cong-ty',
    ],
    copy: {
      vi: {
        title: 'Kinh doanh nhà hàng ở Việt Nam — Hướng dẫn toàn diện',
        subtitle: 'Tất cả cho người mở nhà hàng: vốn 300tr-2 tỷ, vận hành, học từ chuỗi lớn (Golden Gate, KIDO, Pizza 4P\'s). Data 2026.',
        metaTitle: 'Kinh doanh nhà hàng Việt Nam 2026: Vốn, vận hành, learn từ chuỗi lớn',
        metaDescription: 'Hướng dẫn mở nhà hàng Việt Nam 2026: vốn 300tr-2 tỷ, biên lợi nhuận 3-5%, founder Golden Gate, Pizza 4P\'s, KIDO chia sẻ, công cụ tính miễn phí.',
        sectionExperts: 'Founder nhà hàng Việt Nam — học từ người vận hành chuỗi',
        sectionArticles: 'Hướng dẫn chi tiết',
        sectionCalculator: 'Tính chi phí mở nhà hàng',
        sectionCities: 'Chi phí mở nhà hàng theo thành phố',
        ctaCalculator: 'Mở Validator: tính vốn + doanh thu + hoàn vốn cho nhà hàng của bạn →',
        cityListIntro: 'Chọn thành phố để xem chi phí mặt bằng + lương + benchmark cụ thể:',
      },
      en: {
        title: 'Restaurant Business in Vietnam — Complete Guide',
        subtitle: 'Everything for restaurant founders: capital $12K-80K, operations, lessons from major chains (Golden Gate, KIDO, Pizza 4P\'s). 2026 data.',
        metaTitle: 'Restaurant Business in Vietnam 2026: Capital, Operations, Chain Lessons',
        metaDescription: 'Vietnam restaurant guide 2026: capital $12-80K, profit margin 3-5%, founders from Golden Gate, Pizza 4P\'s, KIDO share, free calculator.',
        sectionExperts: 'Vietnam restaurant founders — learn from chain operators',
        sectionArticles: 'Detailed guides',
        sectionCalculator: 'Calculate your restaurant costs',
        sectionCities: 'Restaurant opening costs by city',
        ctaCalculator: 'Open Validator: calculate capital + revenue + payback for your restaurant →',
        cityListIntro: 'Pick a city to see specific rent + labor + benchmarks:',
      },
    },
  },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function getAllTopicSlugs(): string[] {
  return TOPICS.map((t) => t.slug);
}
