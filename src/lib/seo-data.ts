import type { ModelKey } from '@/types';

export interface CityData {
  slug: string;
  nameVi: string;
  nameEn: string;
  population: string;
  rentMultiplier: number; // multiplier vs default rent (HCMC = 1.0)
  avgRentRange: string;   // descriptive range in VND
  fnbDensity: 'very-high' | 'high' | 'medium' | 'low';
}

export const CITIES: CityData[] = [
  { slug: 'ho-chi-minh', nameVi: 'TP. Hồ Chí Minh', nameEn: 'Ho Chi Minh City', population: '9.4 triệu', rentMultiplier: 1.0, avgRentRange: '20-80 triệu/tháng', fnbDensity: 'very-high' },
  { slug: 'ha-noi', nameVi: 'Hà Nội', nameEn: 'Hanoi', population: '8.4 triệu', rentMultiplier: 0.9, avgRentRange: '15-60 triệu/tháng', fnbDensity: 'very-high' },
  { slug: 'da-nang', nameVi: 'Đà Nẵng', nameEn: 'Da Nang', population: '1.2 triệu', rentMultiplier: 0.6, avgRentRange: '10-35 triệu/tháng', fnbDensity: 'high' },
  { slug: 'hai-phong', nameVi: 'Hải Phòng', nameEn: 'Hai Phong', population: '2.1 triệu', rentMultiplier: 0.55, avgRentRange: '8-25 triệu/tháng', fnbDensity: 'medium' },
  { slug: 'can-tho', nameVi: 'Cần Thơ', nameEn: 'Can Tho', population: '1.3 triệu', rentMultiplier: 0.5, avgRentRange: '7-20 triệu/tháng', fnbDensity: 'medium' },
  { slug: 'nha-trang', nameVi: 'Nha Trang', nameEn: 'Nha Trang', population: '450K', rentMultiplier: 0.65, avgRentRange: '10-30 triệu/tháng', fnbDensity: 'high' },
  { slug: 'hue', nameVi: 'Huế', nameEn: 'Hue', population: '600K', rentMultiplier: 0.45, avgRentRange: '5-18 triệu/tháng', fnbDensity: 'medium' },
  { slug: 'bien-hoa', nameVi: 'Biên Hòa', nameEn: 'Bien Hoa', population: '1.1 triệu', rentMultiplier: 0.55, avgRentRange: '8-25 triệu/tháng', fnbDensity: 'medium' },
  { slug: 'vung-tau', nameVi: 'Vũng Tàu', nameEn: 'Vung Tau', population: '560K', rentMultiplier: 0.6, avgRentRange: '10-30 triệu/tháng', fnbDensity: 'high' },
  { slug: 'da-lat', nameVi: 'Đà Lạt', nameEn: 'Da Lat', population: '430K', rentMultiplier: 0.55, avgRentRange: '8-25 triệu/tháng', fnbDensity: 'high' },
  { slug: 'binh-duong', nameVi: 'Bình Dương', nameEn: 'Binh Duong', population: '2.6 triệu', rentMultiplier: 0.5, avgRentRange: '7-20 triệu/tháng', fnbDensity: 'medium' },
  { slug: 'bac-ninh', nameVi: 'Bắc Ninh', nameEn: 'Bac Ninh', population: '1.5 triệu', rentMultiplier: 0.45, avgRentRange: '5-18 triệu/tháng', fnbDensity: 'low' },
  { slug: 'ha-long', nameVi: 'Hạ Long', nameEn: 'Ha Long', population: '600K', rentMultiplier: 0.55, avgRentRange: '8-25 triệu/tháng', fnbDensity: 'high' },
];

export const MODEL_SLUGS: ModelKey[] = ['coffee', 'eatery', 'bubbletea', 'restaurant', 'cloudkitchen', 'bakery', 'bar', 'kiosk'];

// SEO labels per model (Vietnamese + English)
export const MODEL_SEO_NAMES: Record<ModelKey, { vi: string; en: string }> = {
  coffee: { vi: 'quán cà phê', en: 'coffee shop' },
  eatery: { vi: 'quán ăn nhỏ', en: 'small eatery' },
  bubbletea: { vi: 'quán trà sữa', en: 'bubble tea shop' },
  restaurant: { vi: 'nhà hàng', en: 'restaurant' },
  cloudkitchen: { vi: 'cloud kitchen', en: 'cloud kitchen' },
  bakery: { vi: 'tiệm bánh', en: 'bakery' },
  bar: { vi: 'bar/pub', en: 'bar/pub' },
  kiosk: { vi: 'kiosk/food court', en: 'kiosk/food court' },
};

export function getCityBySlug(slug: string): CityData | undefined {
  return CITIES.find(c => c.slug === slug);
}

// Generate adjusted model defaults for a specific city
export function getAdjustedDefaults(modelKey: ModelKey, citySlug: string, models: Record<string, { defaults: { rent: number; budget: number } }>) {
  const city = getCityBySlug(citySlug);
  const model = models[modelKey];
  if (!city || !model) return null;

  const adjustedRent = Math.round(model.defaults.rent * city.rentMultiplier);
  const rentDiff = adjustedRent - model.defaults.rent;
  const adjustedBudget = model.defaults.budget + (rentDiff * 6); // 6 months rent difference

  return {
    rent: adjustedRent,
    budget: adjustedBudget,
    rentMultiplier: city.rentMultiplier,
  };
}
