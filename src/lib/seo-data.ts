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
  bakery: { vi: 'tiệm bánh ngọt', en: 'bakery' },
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

// City-specific market insights — used to give each of 104 city×model pages unique
// paragraph content so Google doesn't flag them as duplicate/thin.
// Keyed by (city, model) with fallbacks by density.
const CITY_INSIGHTS_VI: Record<string, Record<string, string>> = {
  'ho-chi-minh': {
    coffee: 'TP.HCM có gần 15.000 quán cà phê — thị trường cạnh tranh nhất Việt Nam. Highlands, Phúc Long, Katinat cùng hàng nghìn cà phê độc lập tranh khách tại các Q1/Q3/Q7. Cần positioning rõ ràng để tồn tại.',
    eatery: 'Quán ăn nhỏ tại TP.HCM có lợi thế mật độ dân cư cao (9.4tr) nhưng chi phí thuê + nhân sự cũng cao nhất VN. Tập trung vào food delivery (Grab/Shopee) chiếm 30-45% doanh thu.',
    bubbletea: 'TP.HCM là trung tâm trà sữa VN — Phúc Long, Gong Cha, Bobapop, Katinat, Phê La cùng đua. AOV 45-70K, biên gộp 65-75% nếu quản lý được nguyên liệu.',
    restaurant: 'Nhà hàng tại TP.HCM cần vốn cao (1-3 tỷ với concept full-service) nhưng có customer pool khổng lồ + traffic khách du lịch. Q1/Q7/Thảo Điền là hub chính.',
    cloudkitchen: 'TP.HCM là market cloud kitchen lớn nhất VN — Cloud Cook, Foodhub đã có sẵn. Ưu điểm: vốn thấp (200-500tr), 100% delivery via Grab/Shopee, không cần mặt tiền.',
    bakery: 'Bakery TP.HCM cần compete với Tous Les Jours, Paris Baguette, ABC Bakery + local như Savor. Q1/Q3/Q7 rent cao 40-100tr/tháng cho storefront tốt.',
    bar: 'Bar/pub TP.HCM tập trung Q1 (Bùi Viện, Phạm Ngũ Lão), Thảo Điền, Q3 (Pasteur). Vốn 800tr-2 tỷ, licensing phức tạp.',
    kiosk: 'Kiosk/food court TP.HCM có nhiều option: Vincom, Aeon, Landmark 81, Saigon Centre. Rent 15-35tr/tháng, doanh thu ổn định nhờ foot traffic mall.',
  },
  'ha-noi': {
    coffee: 'Hà Nội có văn hoá cà phê lâu đời — cà phê trứng, cà phê cốt dừa. Cost thuê thấp hơn TP.HCM 10-15%. Highland, Cộng Cà Phê, Note Coffee đã establish thương hiệu.',
    eatery: 'Quán ăn Hà Nội đa dạng đặc sản Bắc — bún chả, phở, bún đậu. Rent Q. Hoàn Kiếm/Ba Đình cao, nhưng foot traffic từ dân địa phương + du khách quốc tế mạnh.',
    bubbletea: 'Trà sữa Hà Nội có Toco Toco, Ding Tea, Royal Tea + Phúc Long expansion. AOV thấp hơn TP.HCM ~10%, nhưng lợi nhuận vẫn tốt nhờ rent thấp hơn.',
    restaurant: 'Nhà hàng Hà Nội thường tập trung Hoàn Kiếm, Tây Hồ, Ba Đình. Golden Gate, Redsun ITI có presence mạnh. Vốn 800tr-2.5 tỷ tuỳ concept.',
    cloudkitchen: 'Cloud kitchen Hà Nội đang phát triển — market smaller hơn TP.HCM ~30% nhưng cạnh tranh ít hơn. Grab, Baemin coverage tốt các quận trung tâm.',
    bakery: 'Bakery Hà Nội có Kinh Đô, Bibica, Hải Hà + Paris Baguette. Preference nghiêng về bánh truyền thống (bánh mì, bánh ngọt Á) hơn TP.HCM.',
    bar: 'Bar Hà Nội tập trung Tạ Hiện (bia hơi), Tây Hồ (rooftop), Old Quarter. Vốn 500tr-1.5 tỷ, quy định về giờ đóng cửa nghiêm ngặt (thường 24h).',
    kiosk: 'Kiosk mall Hà Nội: Vincom Metropolis, Aeon Long Biên, Times City. Foot traffic weekend rất mạnh, weekday phụ thuộc office worker.',
  },
  'da-nang': {
    coffee: 'Đà Nẵng có ngành du lịch làm động lực chính cho cà phê — Sơn Trà, Non Nước, biển Mỹ Khê là hub. Rent thấp hơn HN/HCM 40-45%, phù hợp startup nhỏ.',
    eatery: 'Quán ăn Đà Nẵng cần focus đặc sản miền Trung (mì Quảng, bún bò Huế) + seafood. Khách du lịch chiếm 30-40% doanh thu, seasonal biến động mạnh.',
    bubbletea: 'Trà sữa Đà Nẵng chưa quá cạnh tranh — cơ hội cho brand độc lập. Toco Toco, KOI, Phúc Long đã có mặt nhưng chưa saturate.',
    restaurant: 'Nhà hàng Đà Nẵng có seafood + view biển làm điểm khác biệt. Vốn 500tr-1.5 tỷ, cần chuẩn bị cho low season (T10-T2).',
    cloudkitchen: 'Cloud kitchen Đà Nẵng còn ít player — đối tác Grab/ShopeeFood ổn. Foot traffic thấp hơn nên delivery-only mô hình phù hợp.',
    bakery: 'Bakery Đà Nẵng chủ yếu phục vụ dân địa phương + du khách. Rent 8-25tr/tháng cho storefront tốt, cạnh tranh vừa phải.',
    bar: 'Bar Đà Nẵng tập trung An Thượng, biển Mỹ Khê, cầu Rồng. Seasonal mạnh — Tết + hè peak, T10-T12 quiet.',
    kiosk: 'Kiosk Đà Nẵng có Vincom, Lotte, Big C — foot traffic thấp hơn HN/HCM 30-40%. Phù hợp mô hình nhỏ, thu hồi vốn 8-12 tháng.',
  },
};

const CITY_INSIGHTS_EN: Record<string, Record<string, string>> = {
  'ho-chi-minh': {
    coffee: 'HCMC has nearly 15,000 coffee shops — the most competitive F&B market in Vietnam. Highlands, Phúc Long, Katinat compete with thousands of indie cafes in D1/D3/D7. Clear positioning is essential.',
    eatery: 'Small eateries in HCMC benefit from dense population (9.4M) but face the highest rent + labor costs in VN. Delivery (Grab/Shopee) accounts for 30-45% of revenue.',
    bubbletea: 'HCMC is Vietnam\'s bubble tea capital — Phúc Long, Gong Cha, Bobapop, Katinat, Phê La compete. AOV 45-70K VND, gross margin 65-75% with good inventory control.',
    restaurant: 'Restaurants in HCMC need higher capital (1-3B VND for full-service) but access a huge customer pool + tourist traffic. D1/D7/Thảo Điền are main hubs.',
    cloudkitchen: 'HCMC has Vietnam\'s largest cloud kitchen market — Cloud Cook, Foodhub already established. Advantages: low capital (200-500M VND), 100% delivery, no storefront needed.',
    bakery: 'HCMC bakeries compete with Tous Les Jours, Paris Baguette, ABC Bakery + local Savor. D1/D3/D7 rent runs 40-100M/month for good storefront.',
    bar: 'HCMC bars concentrated in D1 (Bùi Viện, Phạm Ngũ Lão), Thảo Điền, D3 (Pasteur). Capital 800M-2B VND, licensing is complex.',
    kiosk: 'HCMC kiosks/food courts: Vincom, Aeon, Landmark 81, Saigon Centre. Rent 15-35M/month, stable revenue from mall foot traffic.',
  },
};

/**
 * Returns a city+model-specific market insight paragraph (VI or EN).
 * Falls back to a density-based generic insight if the specific combo isn't authored yet.
 * Purpose: give each of 104 city×model pages unique content so Google doesn't classify as duplicate.
 */
// City-specific competitive context. Named landmarks / competitors / districts
// per city so the fallback paragraph has unique real-world content instead of
// interchangeable template text. Keyed by city slug; used by all 8 model pages.
const CITY_CONTEXT_VI: Record<string, { districts: string; competitors: string; opportunity: string }> = {
  'hai-phong': { districts: 'Lê Chân, Ngô Quyền, Hải An', competitors: 'Highlands, Cộng Cà Phê, ToTo Coffee', opportunity: 'kinh tế cảng biển tăng trưởng, dân trí lao động 20-40 tuổi tăng chi tiêu F&B 12%/năm' },
  'can-tho': { districts: 'Ninh Kiều, Bình Thuỷ, Cái Răng', competitors: 'Highlands, Trung Nguyên, Cà Phê Sỏi Đá', opportunity: 'trung tâm ĐBSCL, sinh viên ĐH Cần Thơ + Y Dược Cần Thơ tạo cụm khách chính' },
  'nha-trang': { districts: 'Lộc Thọ, Xương Huân, Vĩnh Nguyên', competitors: 'Highlands, King Coffee, Cà Phê Muối Sài Gòn', opportunity: 'khách du lịch 5-6 triệu lượt/năm, biên lợi nhuận cao mùa hè nhưng cần quản lý low-season' },
  'hue': { districts: 'Phú Hội, Vĩnh Ninh, An Cựu', competitors: 'Highlands, Cà Phê Muối, Ca Phê Kim Long', opportunity: 'du lịch di sản + sinh viên ĐH Huế, khách quen ưa không gian truyền thống + đặc sản miền Trung' },
  'bien-hoa': { districts: 'Tân Hiệp, Tân Phong, Long Bình', competitors: 'Highlands, Milano Coffee, chuỗi cà phê công nhân', opportunity: 'công nhân khu công nghiệp Amata + Biên Hoà là cụm khách ổn định, giá bình dân' },
  'vung-tau': { districts: 'Bãi Sau, Bãi Trước, Thắng Tam', competitors: 'Highlands, Coffee Beans, cà phê bờ biển địa phương', opportunity: 'du lịch cuối tuần từ TP.HCM ổn định quanh năm, khách business trip HCMC-Vũng Tàu' },
  'da-lat': { districts: 'Phường 1, Phường 3, Phường 8', competitors: 'La Viet Coffee, Là Cà, chuỗi cà phê đặc sản Đà Lạt', opportunity: 'du lịch nghỉ dưỡng + đặc sản cà phê Đà Lạt, khách săn workspace view núi + concept độc đáo' },
  'binh-duong': { districts: 'Thủ Dầu Một, Dĩ An, Thuận An', competitors: 'Highlands, King Coffee, chuỗi cà phê văn phòng', opportunity: 'văn phòng khu công nghiệp Sóng Thần + VSIP, công nhân trung tính, khách trẻ chi tiêu 30-80K/lần' },
  'bac-ninh': { districts: 'Kinh Bắc, Đại Phúc, Thị Cầu', competitors: 'Highlands, Trung Nguyên, cà phê công nhân Samsung', opportunity: 'công nhân Samsung + Foxconn + khu công nghiệp Yên Phong tạo dòng khách công nhân ổn định' },
  'ha-long': { districts: 'Bãi Cháy, Hồng Gai, Hùng Thắng', competitors: 'Highlands, Cà Phê Vịnh, chuỗi cà phê ven biển', opportunity: 'du lịch di sản Vịnh Hạ Long, khách nội địa cuối tuần + Hàn/Trung Quốc, seasonal T3-T10 mạnh' },
};

const CITY_CONTEXT_EN: Record<string, { districts: string; competitors: string; opportunity: string }> = {
  'hai-phong': { districts: 'Le Chan, Ngo Quyen, Hai An', competitors: 'Highlands, Cong Ca Phe, ToTo Coffee', opportunity: 'growing port economy, working-age 20-40 population spending 12%/yr more on F&B' },
  'can-tho': { districts: 'Ninh Kieu, Binh Thuy, Cai Rang', competitors: 'Highlands, Trung Nguyen, Ca Phe Soi Da', opportunity: 'Mekong Delta hub, Can Tho University + medical students form the core customer cluster' },
  'nha-trang': { districts: 'Loc Tho, Xuong Huan, Vinh Nguyen', competitors: 'Highlands, King Coffee, Ca Phe Muoi Sai Gon', opportunity: 'tourism 5-6M visitors/year, high summer margins but need to manage low season' },
  'hue': { districts: 'Phu Hoi, Vinh Ninh, An Cuu', competitors: 'Highlands, Ca Phe Muoi, Ca Phe Kim Long', opportunity: 'heritage tourism + Hue University, customers prefer traditional space + central-VN specialties' },
  'bien-hoa': { districts: 'Tan Hiep, Tan Phong, Long Binh', competitors: 'Highlands, Milano Coffee, worker-focused cafe chains', opportunity: 'Amata + Bien Hoa industrial workers form a stable customer cluster, affordable price point' },
  'vung-tau': { districts: 'Bai Sau, Bai Truoc, Thang Tam', competitors: 'Highlands, Coffee Beans, local beachfront cafes', opportunity: 'stable HCMC weekend tourism year-round + business trips from HCMC' },
  'da-lat': { districts: 'Ward 1, Ward 3, Ward 8', competitors: 'La Viet Coffee, La Ca, Da Lat specialty coffee chains', opportunity: 'resort tourism + Da Lat coffee specialty, customers hunt for mountain-view workspaces + unique concepts' },
  'binh-duong': { districts: 'Thu Dau Mot, Di An, Thuan An', competitors: 'Highlands, King Coffee, office-focused cafe chains', opportunity: 'Song Than + VSIP industrial-park offices, mid-price customers spending 30-80K VND/visit' },
  'bac-ninh': { districts: 'Kinh Bac, Dai Phuc, Thi Cau', competitors: 'Highlands, Trung Nguyen, Samsung worker cafes', opportunity: 'Samsung + Foxconn + Yen Phong industrial-park workers form a stable worker-customer flow' },
  'ha-long': { districts: 'Bai Chay, Hong Gai, Hung Thang', competitors: 'Highlands, Ca Phe Vinh, waterfront cafe chains', opportunity: 'Ha Long Bay heritage tourism, domestic weekend + Korean/Chinese visitors, strong seasonality Mar-Oct' },
};

export function getCityInsight(citySlug: string, modelKey: ModelKey, locale: 'vi' | 'en'): string {
  const table = locale === 'en' ? CITY_INSIGHTS_EN : CITY_INSIGHTS_VI;
  const specific = table[citySlug]?.[modelKey];
  if (specific) return specific;

  // Fallback: build from city density + model name + city-specific context.
  // The context table above supplies unique real-world detail (districts, competitors,
  // opportunity) per city, so each city×model page has different narrative content
  // even when the specific combo isn't authored — avoids duplicate-content penalty.
  const city = getCityBySlug(citySlug);
  if (!city) return '';
  const modelName = MODEL_SEO_NAMES[modelKey]?.[locale] ?? modelKey;
  const ctxTable = locale === 'en' ? CITY_CONTEXT_EN : CITY_CONTEXT_VI;
  const ctx = ctxTable[citySlug];

  const densityLabelVi = {
    'very-high': 'rất cao',
    'high': 'cao',
    'medium': 'trung bình',
    'low': 'thấp',
  }[city.fnbDensity];

  const densityLabelEn = {
    'very-high': 'very high',
    'high': 'high',
    'medium': 'moderate',
    'low': 'low',
  }[city.fnbDensity];

  if (locale === 'en') {
    const base = `Opening a ${modelName} in ${city.nameEn} — population ${city.population}, F&B density is ${densityLabelEn}, average rent range ${city.avgRentRange}. Cost estimates below adjusted for local market conditions (${Math.round(city.rentMultiplier * 100)}% of HCMC baseline).`;
    if (!ctx) return base;
    return `${base} Popular business districts in ${city.nameEn} include ${ctx.districts}. Main competitors: ${ctx.competitors}. Local opportunity: ${ctx.opportunity}.`;
  }
  const base = `Mở ${modelName} tại ${city.nameVi} — dân số ${city.population}, mật độ F&B ${densityLabelVi}, tiền thuê trung bình ${city.avgRentRange}. Ước tính chi phí bên dưới đã điều chỉnh theo thị trường địa phương (${Math.round(city.rentMultiplier * 100)}% so với TP.HCM).`;
  if (!ctx) return base;
  return `${base} Các khu vực kinh doanh phổ biến tại ${city.nameVi}: ${ctx.districts}. Đối thủ chính: ${ctx.competitors}. Cơ hội thị trường: ${ctx.opportunity}.`;
}
