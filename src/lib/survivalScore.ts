/**
 * Survival Score — heuristic 1-10 prediction of F&B shop survival.
 * Based on: Validator industry benchmarks (Vietnam F&B 2026 data) + 7 root causes
 * identified in flagship essay (cash reserves, menu size, marketing timing,
 * key person risk, trend chasing, artisan mindset, location).
 *
 * Goal: deterministic shareable hook. Each input has weighted impact.
 * Same inputs → same score (sharable as "73% survival" social card).
 */

export interface SurvivalScoreInput {
  modelKey: string;          // coffee, restaurant, bakery, etc.
  city: string;              // ho-chi-minh, ha-noi, etc.
  totalInvestment: number;   // VND
  cashReserveMonths: number; // months of runway
  monthlyRevenue: number;    // expected monthly revenue
  monthlyRent: number;       // monthly rent
  monthlyStaff: number;      // monthly staff cost
  foodCostPct: number;       // 0-100
  menuItemCount: number;     // total menu items
  marketingWeeksBeforeLaunch: number; // 0 = launch-day, 4-6 = soft launch
  founderExperience: 'first' | 'second' | 'veteran'; // 1st shop / 2nd-5th / 5+
}

export interface SurvivalScoreResult {
  score: number;             // 1-10
  surviveProbability: number; // 0-100 (12-month)
  verdict: 'high-survival' | 'moderate-risk' | 'high-risk';
  factors: Array<{
    name: string;
    impact: 'positive' | 'negative' | 'neutral';
    points: number; // -3 to +3
    description: string;
  }>;
}

const VI_FACTOR_NAMES = {
  cashReserve: 'Vốn dự trữ',
  rentRatio: 'Tỉ lệ tiền thuê / doanh thu',
  foodCost: 'Tỉ lệ NVL (food cost)',
  menuSize: 'Quy mô menu',
  marketing: 'Chuẩn bị marketing trước khai trương',
  primeCost: 'Prime cost (NVL + nhân sự)',
  founder: 'Kinh nghiệm chủ quán',
  city: 'Cạnh tranh thị trường',
} as const;

const EN_FACTOR_NAMES = {
  cashReserve: 'Cash reserves',
  rentRatio: 'Rent / revenue ratio',
  foodCost: 'Food cost %',
  menuSize: 'Menu size',
  marketing: 'Pre-launch marketing prep',
  primeCost: 'Prime cost (food + labor)',
  founder: 'Founder experience',
  city: 'Market competition',
} as const;

export function calculateSurvivalScore(
  input: SurvivalScoreInput,
  locale: 'vi' | 'en' = 'vi'
): SurvivalScoreResult {
  const labels = locale === 'en' ? EN_FACTOR_NAMES : VI_FACTOR_NAMES;
  const factors: SurvivalScoreResult['factors'] = [];
  let totalPoints = 0;

  // 1. Cash reserve (industry standard: 82% failures due to cash flow)
  if (input.cashReserveMonths >= 9) {
    factors.push({ name: labels.cashReserve, impact: 'positive', points: 2,
      description: locale === 'en' ? '9+ months runway — strong buffer for ramp-up period' : 'Dự trữ 9+ tháng — đủ buffer cho giai đoạn ramp-up' });
    totalPoints += 2;
  } else if (input.cashReserveMonths >= 6) {
    factors.push({ name: labels.cashReserve, impact: 'neutral', points: 0,
      description: locale === 'en' ? '6-9 months — borderline. Industry recommends 9-12 months.' : '6-9 tháng — vừa đủ. Chuẩn ngành 9-12 tháng.' });
  } else {
    factors.push({ name: labels.cashReserve, impact: 'negative', points: -3,
      description: locale === 'en' ? `Only ${input.cashReserveMonths} months — high cash-flow death risk` : `Chỉ ${input.cashReserveMonths} tháng — rủi ro cao về dòng tiền (killer #1)` });
    totalPoints -= 3;
  }

  // 2. Rent ratio (target ≤20% cafe, ≤18% restaurant)
  const rentRatio = input.monthlyRevenue > 0 ? (input.monthlyRent / input.monthlyRevenue) * 100 : 100;
  if (rentRatio <= 15) {
    factors.push({ name: labels.rentRatio, impact: 'positive', points: 2,
      description: locale === 'en' ? `${rentRatio.toFixed(1)}% — well below 20% target` : `${rentRatio.toFixed(1)}% — tốt, dưới target 20%` });
    totalPoints += 2;
  } else if (rentRatio <= 20) {
    factors.push({ name: labels.rentRatio, impact: 'positive', points: 1,
      description: locale === 'en' ? `${rentRatio.toFixed(1)}% — at industry target` : `${rentRatio.toFixed(1)}% — ngay ngưỡng chuẩn 20%` });
    totalPoints += 1;
  } else if (rentRatio <= 25) {
    factors.push({ name: labels.rentRatio, impact: 'negative', points: -1,
      description: locale === 'en' ? `${rentRatio.toFixed(1)}% — squeezes profit margin` : `${rentRatio.toFixed(1)}% — bóp biên lợi nhuận` });
    totalPoints -= 1;
  } else {
    factors.push({ name: labels.rentRatio, impact: 'negative', points: -3,
      description: locale === 'en' ? `${rentRatio.toFixed(1)}% — impossible to profit at this rent` : `${rentRatio.toFixed(1)}% — không thể có lãi với rent này` });
    totalPoints -= 3;
  }

  // 3. Food cost (target 25-35% depending on segment)
  const targetFoodCost = input.modelKey === 'bar' ? 22 : input.modelKey === 'bubbletea' ? 25 : 32;
  if (input.foodCostPct <= targetFoodCost) {
    factors.push({ name: labels.foodCost, impact: 'positive', points: 1,
      description: locale === 'en' ? `${input.foodCostPct}% — at or below target for ${input.modelKey}` : `${input.foodCostPct}% — đạt target ngành ${input.modelKey}` });
    totalPoints += 1;
  } else if (input.foodCostPct <= 40) {
    factors.push({ name: labels.foodCost, impact: 'negative', points: -1,
      description: locale === 'en' ? `${input.foodCostPct}% — slightly above target` : `${input.foodCostPct}% — hơi vượt target` });
    totalPoints -= 1;
  } else {
    factors.push({ name: labels.foodCost, impact: 'negative', points: -2,
      description: locale === 'en' ? `${input.foodCostPct}% — eats profit. Audit suppliers + portions.` : `${input.foodCostPct}% — ăn lợi nhuận. Audit NCC + khẩu phần.` });
    totalPoints -= 2;
  }

  // 4. Menu size (70% restaurants with >40 items exceed 35% food cost)
  if (input.menuItemCount <= 20) {
    factors.push({ name: labels.menuSize, impact: 'positive', points: 1,
      description: locale === 'en' ? `${input.menuItemCount} items — focused menu, low inventory waste` : `${input.menuItemCount} món — menu tập trung, ít tồn kho` });
    totalPoints += 1;
  } else if (input.menuItemCount <= 35) {
    factors.push({ name: labels.menuSize, impact: 'neutral', points: 0,
      description: locale === 'en' ? `${input.menuItemCount} items — manageable but watch waste` : `${input.menuItemCount} món — quản lý được nhưng coi chừng tồn kho` });
  } else {
    factors.push({ name: labels.menuSize, impact: 'negative', points: -2,
      description: locale === 'en' ? `${input.menuItemCount} items — high inventory waste risk` : `${input.menuItemCount} món — rủi ro tồn kho cao + đầu bếp lúng túng` });
    totalPoints -= 2;
  }

  // 5. Marketing prep (4-6 weeks before launch optimal)
  if (input.marketingWeeksBeforeLaunch >= 4) {
    factors.push({ name: labels.marketing, impact: 'positive', points: 2,
      description: locale === 'en' ? `${input.marketingWeeksBeforeLaunch} weeks soft launch — builds buzz + early reviews` : `${input.marketingWeeksBeforeLaunch} tuần soft launch — build buzz + có review tốt trước khai trương` });
    totalPoints += 2;
  } else if (input.marketingWeeksBeforeLaunch >= 1) {
    factors.push({ name: labels.marketing, impact: 'neutral', points: 0,
      description: locale === 'en' ? `${input.marketingWeeksBeforeLaunch} weeks — minimal prep` : `${input.marketingWeeksBeforeLaunch} tuần — chuẩn bị tối thiểu` });
  } else {
    factors.push({ name: labels.marketing, impact: 'negative', points: -2,
      description: locale === 'en' ? 'Day-1 launch = no buzz, no reviews, slow ramp-up' : 'Khai trương ngày 1 = không có buzz, không có review, ramp-up chậm' });
    totalPoints -= 2;
  }

  // 6. Prime cost (food + labor) — target ≤55%
  const laborRatio = input.monthlyRevenue > 0 ? (input.monthlyStaff / input.monthlyRevenue) * 100 : 0;
  const primeCost = input.foodCostPct + laborRatio;
  if (primeCost <= 55) {
    factors.push({ name: labels.primeCost, impact: 'positive', points: 1,
      description: locale === 'en' ? `${primeCost.toFixed(0)}% — healthy. Industry red alert at 65%+.` : `${primeCost.toFixed(0)}% — healthy. Cảnh báo từ 65%+.` });
    totalPoints += 1;
  } else if (primeCost <= 65) {
    factors.push({ name: labels.primeCost, impact: 'negative', points: -1,
      description: locale === 'en' ? `${primeCost.toFixed(0)}% — squeezed. Hard to leave room for rent + marketing.` : `${primeCost.toFixed(0)}% — chật. Khó còn chỗ cho rent + marketing.` });
    totalPoints -= 1;
  } else {
    factors.push({ name: labels.primeCost, impact: 'negative', points: -3,
      description: locale === 'en' ? `${primeCost.toFixed(0)}% — red alert. Impossible to profit.` : `${primeCost.toFixed(0)}% — báo động đỏ. Không thể có lãi.` });
    totalPoints -= 3;
  }

  // 7. Founder experience
  if (input.founderExperience === 'veteran') {
    factors.push({ name: labels.founder, impact: 'positive', points: 2,
      description: locale === 'en' ? '5+ shops experience — knows the operating playbook' : 'Đã mở 5+ quán — nắm rõ playbook vận hành' });
    totalPoints += 2;
  } else if (input.founderExperience === 'second') {
    factors.push({ name: labels.founder, impact: 'positive', points: 1,
      description: locale === 'en' ? '2nd-5th shop — has scar tissue from first run' : 'Quán thứ 2-5 — đã có vết sẹo từ lần đầu' });
    totalPoints += 1;
  } else {
    factors.push({ name: labels.founder, impact: 'negative', points: -1,
      description: locale === 'en' ? 'First shop — underestimating difficulty is the default mistake' : 'Quán đầu tiên — đánh giá thấp độ khó là sai lầm phổ biến' });
    totalPoints -= 1;
  }

  // 8. City competition (HCMC/Hanoi most saturated)
  if (input.city === 'ho-chi-minh' || input.city === 'ha-noi') {
    factors.push({ name: labels.city, impact: 'negative', points: -1,
      description: locale === 'en' ? 'Top 2 cities — most saturated F&B market in Vietnam' : 'Top 2 thành phố — thị trường F&B bão hòa nhất VN' });
    totalPoints -= 1;
  } else {
    factors.push({ name: labels.city, impact: 'positive', points: 1,
      description: locale === 'en' ? 'Less saturated market — easier to differentiate' : 'Thị trường ít cạnh tranh hơn — dễ khác biệt' });
    totalPoints += 1;
  }

  // Convert to 1-10 score (max +12, min -15 → normalize to 1-10)
  const rawMax = 12, rawMin = -15;
  const normalized = ((totalPoints - rawMin) / (rawMax - rawMin)) * 9 + 1;
  const score = Math.max(1, Math.min(10, Math.round(normalized)));

  // Map to survival probability (industry: 51% US 5-year baseline, adjusted)
  const surviveProbability = Math.round(20 + (score - 1) * 8); // score 1 → 20%, score 10 → 92%

  const verdict: SurvivalScoreResult['verdict'] =
    score >= 7 ? 'high-survival' : score >= 4 ? 'moderate-risk' : 'high-risk';

  return { score, surviveProbability, verdict, factors };
}
