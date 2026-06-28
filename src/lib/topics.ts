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
    expertTagsVi: ['Nhà hàng', 'Chuỗi nhà hàng', 'Chuỗi F&B', 'Pizza'],
    expertTagsEn: ['Restaurant', 'Restaurant Chain', 'F&B Chain', 'Pizza'],
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
  {
    slug: 'mo-tiem-banh-ngot',
    modelKey: 'bakery',
    // Bakery experts hiếm trong DB — fallback include broader F&B tags
    expertTagsVi: ['Bakery', 'Bánh', 'Pizza', 'Chuỗi F&B', 'Quản trị F&B'],
    expertTagsEn: ['Bakery', 'Pizza', 'F&B Chain', 'F&B Management'],
    articleSlugs: [
      'chi-phi-mo-tiem-banh-ngot-2026',
      'sai-lam-khi-chon-mat-bang-fnb',
      'tai-sao-50-phan-tram-quan-fnb-dong-cua',
      'so-lieu-nganh-fnb-viet-nam-2026',
      'luong-nhan-vien-fnb-2026',
      'cau-truc-chi-phi-fnb',
      'food-cost-chi-tiet',
      'quan-ly-dong-tien-thang-dau',
    ],
    comparisonSlugs: ['validator-vs-excel-template-tinh-chi-phi-fnb'],
    copy: {
      vi: {
        title: 'Kinh doanh tiệm bánh ngọt ở Việt Nam — Hướng dẫn toàn diện',
        subtitle: 'Mở tiệm bánh ngọt từ 50tr (kiosk) đến 500tr (bakery+cafe): vốn, vận hành, học từ Tous Les Jours, Paris Baguette, Savor Cake. Data 2026.',
        metaTitle: 'Kinh doanh tiệm bánh ngọt Việt Nam 2026: Vốn 50-500tr, vận hành chi tiết',
        metaDescription: 'Hướng dẫn mở tiệm bánh ngọt Việt Nam 2026: vốn 50tr-500tr theo 3 quy mô (kiosk/storefront/bakery+cafe), biên lợi nhuận 8-12%, breakdown chi phí + công cụ tính miễn phí.',
        sectionExperts: 'Chuyên gia F&B chia sẻ về tiệm bánh',
        sectionArticles: 'Hướng dẫn chi tiết',
        sectionCalculator: 'Tính chi phí mở tiệm bánh ngọt',
        sectionCities: 'Chi phí mở tiệm bánh theo thành phố',
        ctaCalculator: 'Mở Validator: tính vốn + doanh thu + hoàn vốn cho tiệm bánh của bạn →',
        cityListIntro: 'Chọn thành phố để xem chi phí mặt bằng + lương + benchmark cụ thể:',
      },
      en: {
        title: 'Bakery Business in Vietnam — Complete Guide',
        subtitle: 'Open a bakery from $2K (kiosk) to $20K (bakery+cafe): capital, operations, lessons from Tous Les Jours, Paris Baguette, Savor Cake. 2026 data.',
        metaTitle: 'Bakery Business in Vietnam 2026: Capital $2-20K, Operations Guide',
        metaDescription: 'Vietnam bakery guide 2026: capital $2-20K across 3 sizes (kiosk/storefront/bakery+cafe), 8-12% profit margin, cost breakdown + free calculator.',
        sectionExperts: 'F&B experts sharing on bakery business',
        sectionArticles: 'Detailed guides',
        sectionCalculator: 'Calculate your bakery costs',
        sectionCities: 'Bakery opening costs by city',
        ctaCalculator: 'Open Validator: calculate capital + revenue + payback for your bakery →',
        cityListIntro: 'Pick a city to see specific rent + labor + benchmarks:',
      },
    },
  },
  {
    slug: 'kinh-doanh-tra-sua',
    modelKey: 'bubbletea',
    expertTagsVi: ['Trà sữa', 'Trà Việt', 'Chuỗi F&B'],
    expertTagsEn: ['Bubble Tea', 'Vietnamese Tea', 'F&B Chain'],
    articleSlugs: [
      'sai-lam-khi-chon-mat-bang-fnb',
      'tai-sao-50-phan-tram-quan-fnb-dong-cua',
      'so-lieu-nganh-fnb-viet-nam-2026',
      'luong-nhan-vien-fnb-2026',
      'thue-do-uong-co-duong-2026',
      'cau-truc-chi-phi-fnb',
      'chi-phi-delivery-va-app',
    ],
    comparisonSlugs: ['so-sanh-he-thong-pos'],
    copy: {
      vi: {
        title: 'Kinh doanh trà sữa ở Việt Nam — Hướng dẫn toàn diện',
        subtitle: 'Thị trường tỷ đô, biên gộp 60-75%, Phúc Long +4x net profit 2024. Vốn, vận hành, học từ các chuỗi top + chuẩn bị thuế đường 2027.',
        metaTitle: 'Kinh doanh trà sữa Việt Nam 2026: Biên gộp 75%, thị trường tỷ đô',
        metaDescription: 'Hướng dẫn mở quán trà sữa Việt Nam 2026: biên gộp 60-75%, học từ Phúc Long (net +4x 2024), Katinat, Phê La. Vốn + chi phí + thuế đường 2027 + công cụ miễn phí.',
        sectionExperts: 'Founder chuỗi trà sữa Việt Nam',
        sectionArticles: 'Hướng dẫn chi tiết',
        sectionCalculator: 'Tính chi phí mở quán trà sữa',
        sectionCities: 'Chi phí mở quán trà sữa theo thành phố',
        ctaCalculator: 'Mở Validator: tính vốn + doanh thu + hoàn vốn cho quán trà sữa →',
        cityListIntro: 'Chọn thành phố để xem chi phí mặt bằng + lương + benchmark cụ thể:',
      },
      en: {
        title: 'Bubble Tea Business in Vietnam — Complete Guide',
        subtitle: 'Billion-dollar market, 60-75% gross margin, Phúc Long +4x net profit 2024. Capital, operations, lessons from top chains + 2027 sugar tax prep.',
        metaTitle: 'Bubble Tea Business Vietnam 2026: 75% Gross Margin, Billion-Dollar Market',
        metaDescription: 'Vietnam bubble tea guide 2026: 60-75% gross margin, lessons from Phúc Long (net +4x 2024), Katinat, Phê La. Capital + costs + sugar tax 2027 + free calculator.',
        sectionExperts: 'Vietnam bubble tea chain founders',
        sectionArticles: 'Detailed guides',
        sectionCalculator: 'Calculate your bubble tea shop costs',
        sectionCities: 'Bubble tea opening costs by city',
        ctaCalculator: 'Open Validator: calculate capital + revenue + payback for your bubble tea shop →',
        cityListIntro: 'Pick a city to see specific rent + labor + benchmarks:',
      },
    },
  },
  {
    slug: 'cloud-kitchen-fnb',
    modelKey: 'cloudkitchen',
    expertTagsVi: ['Cloud Kitchen', 'Pizza', 'Chuỗi F&B', 'Content Creator'],
    expertTagsEn: ['Cloud Kitchen', 'Pizza', 'F&B Chain'],
    articleSlugs: [
      'bep-tren-may-cloud-kitchen-2026',
      'chi-phi-delivery-va-app',
      'tai-sao-50-phan-tram-quan-fnb-dong-cua',
      'so-lieu-nganh-fnb-viet-nam-2026',
      'cau-truc-chi-phi-fnb',
      'food-cost-chi-tiet',
    ],
    comparisonSlugs: ['so-sanh-he-thong-pos', 'validator-vs-excel-template-tinh-chi-phi-fnb'],
    copy: {
      vi: {
        title: 'Cloud Kitchen ở Việt Nam — Hướng dẫn toàn diện',
        subtitle: 'Thị trường $1.1B, CAGR 19% (2024-2029). Vốn thấp 30-80tr, delivery-first, học từ Cloud Cook + Savor Cake. Phù hợp ai vốn ít muốn test concept.',
        metaTitle: 'Cloud Kitchen Việt Nam 2026: Vốn 30-80tr, market $1.1B, CAGR 19%',
        metaDescription: 'Hướng dẫn mở Cloud Kitchen Việt Nam 2026: vốn 30-80tr (rẻ hơn quán truyền thống 10x), market $1.1B, CAGR 19%. Học từ Cloud Cook + Savor Cake + công cụ tính miễn phí.',
        sectionExperts: 'Founder Cloud Kitchen Việt Nam',
        sectionArticles: 'Hướng dẫn chi tiết',
        sectionCalculator: 'Tính chi phí mở Cloud Kitchen',
        sectionCities: 'Chi phí mở Cloud Kitchen theo thành phố',
        ctaCalculator: 'Mở Validator: tính vốn + doanh thu + hoàn vốn cho Cloud Kitchen →',
        cityListIntro: 'Chọn thành phố để xem chi phí thuê bếp + lương + benchmark:',
      },
      en: {
        title: 'Cloud Kitchen in Vietnam — Complete Guide',
        subtitle: '$1.1B market, 19% CAGR (2024-2029). Low capital $1.2-3.2K, delivery-first, lessons from Cloud Cook + Savor Cake. Best for low-capital concept testing.',
        metaTitle: 'Cloud Kitchen Vietnam 2026: Capital $1.2-3.2K, $1.1B Market, 19% CAGR',
        metaDescription: 'Vietnam Cloud Kitchen guide 2026: capital $1.2-3.2K (10x cheaper than traditional shop), $1.1B market, 19% CAGR. Lessons from Cloud Cook + Savor Cake + free calculator.',
        sectionExperts: 'Vietnam Cloud Kitchen founders',
        sectionArticles: 'Detailed guides',
        sectionCalculator: 'Calculate your Cloud Kitchen costs',
        sectionCities: 'Cloud Kitchen opening costs by city',
        ctaCalculator: 'Open Validator: calculate capital + revenue + payback for your Cloud Kitchen →',
        cityListIntro: 'Pick a city to see kitchen rent + labor + benchmarks:',
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
