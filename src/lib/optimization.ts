import type { CalcResults, OptimizationSuggestion } from '@/types';
import { formatVND } from './format';

interface OptInput {
  rent: number;
  cogsPct: number;
  wastePct: number;
  deliveryPct: number;
  deliveryCommPct: number;
  staffTotal: number;
  ticket: number;
}

export function generateSuggestions(
  r: CalcResults,
  input: OptInput,
): OptimizationSuggestion[] {
  const suggestions: OptimizationSuggestion[] = [];
  const sRev = r.stableRev;
  const sm = r.stableMonth;

  // 1. Rent reduction
  if (r.rentRatio > 20) {
    const targetRent = sRev * 0.20;
    const impact = input.rent - targetRent;
    suggestions.push({
      id: 'rent',
      icon: '🏠',
      priority: r.rentRatio > 25 ? 'high' : 'medium',
      titleKey: 'rentTitle',
      descKey: 'rentDesc',
      tipKey: 'rentTip',
      currentValue: `${r.rentRatio.toFixed(1)}%`,
      targetValue: '≤20%',
      monthlyImpact: Math.max(0, impact),
    });
  }

  // 2. COGS optimization
  if (r.cogsPct > 35) {
    const impact = sRev * (r.cogsPct - 35) / 100;
    suggestions.push({
      id: 'cogs',
      icon: '🥗',
      priority: r.cogsPct > 40 ? 'high' : 'medium',
      titleKey: 'cogsTitle',
      descKey: 'cogsDesc',
      tipKey: 'cogsTip',
      currentValue: `${r.cogsPct.toFixed(1)}%`,
      targetValue: '≤35%',
      monthlyImpact: Math.max(0, impact),
    });
  }

  // 3. Waste reduction
  if (input.wastePct > 3) {
    const impact = sm.cogs * (input.wastePct - 3) / 100;
    suggestions.push({
      id: 'waste',
      icon: '🗑️',
      priority: 'medium',
      titleKey: 'wasteTitle',
      descKey: 'wasteDesc',
      tipKey: 'wasteTip',
      currentValue: `${input.wastePct}%`,
      targetValue: '≤3%',
      monthlyImpact: Math.max(0, impact),
    });
  }

  // 4. Delivery fee negotiation
  if (input.deliveryPct > 20 && input.deliveryCommPct > 20) {
    const deliveryRev = sm.grossRev * (input.deliveryPct / 100);
    const impact = deliveryRev * 0.05;
    suggestions.push({
      id: 'delivery',
      icon: '🛵',
      priority: 'medium',
      titleKey: 'deliveryTitle',
      descKey: 'deliveryDesc',
      tipKey: 'deliveryTip',
      currentValue: `${input.deliveryCommPct}%`,
      targetValue: `${input.deliveryCommPct - 5}%`,
      monthlyImpact: Math.max(0, impact),
    });
  }

  // 5. Staff optimization
  if (r.laborRatio > 25) {
    const target25 = sRev * 0.25;
    const currentLabor = input.staffTotal + (sm.bhxh || 0);
    const impact = currentLabor - target25;
    suggestions.push({
      id: 'staff',
      icon: '👥',
      priority: r.laborRatio > 30 ? 'high' : 'medium',
      titleKey: 'staffTitle',
      descKey: 'staffDesc',
      tipKey: 'staffTip',
      currentValue: `${r.laborRatio.toFixed(1)}%`,
      targetValue: '≤25%',
      monthlyImpact: Math.max(0, impact),
    });
  }

  // 6. Pricing increase
  if (sm.netMargin < 10 && r.cogsPct <= 35) {
    const impact = sRev * 0.05;
    suggestions.push({
      id: 'pricing',
      icon: '💲',
      priority: sm.netMargin < 5 ? 'high' : 'low',
      titleKey: 'pricingTitle',
      descKey: 'pricingDesc',
      tipKey: 'pricingTip',
      currentValue: `${sm.netMargin.toFixed(1)}%`,
      targetValue: `+5% ${formatVND(input.ticket)}`,
      monthlyImpact: Math.max(0, impact),
    });
  }

  // 7. Volume increase
  const custDay = r.bepCustomersDay < Infinity ? r.bepCustomersDay : 0;
  const avgCust = Math.round((r.stableMonth.grossRev / r.ticket) / r.opDaysPerMonth);
  if (custDay > 0 && avgCust > 0 && custDay >= avgCust * 0.7) {
    const impact = sm.netMargin > 0 ? (sm.netMargin / 100) * sRev * 0.10 : sRev * 0.03;
    suggestions.push({
      id: 'volume',
      icon: '📈',
      priority: 'low',
      titleKey: 'volumeTitle',
      descKey: 'volumeDesc',
      tipKey: 'volumeTip',
      currentValue: `${avgCust}`,
      targetValue: `${Math.round(avgCust * 1.1)}`,
      monthlyImpact: Math.max(0, impact),
    });
  }

  // 8. Working capital
  if (r.workingCapMonths < 3) {
    const shortfall = r.fixedMonthly * 3 - (r.fixedMonthly * r.workingCapMonths);
    suggestions.push({
      id: 'workingCap',
      icon: '🛡️',
      priority: r.workingCapMonths < 2 ? 'high' : 'medium',
      titleKey: 'workingCapTitle',
      descKey: 'workingCapDesc',
      tipKey: 'workingCapTip',
      currentValue: `${r.workingCapMonths.toFixed(1)}`,
      targetValue: '≥3',
      monthlyImpact: 0, // Not a monthly saving but a one-time need
    });
  }

  // Sort by monthlyImpact descending, take top 5
  suggestions.sort((a, b) => b.monthlyImpact - a.monthlyImpact);
  return suggestions.slice(0, 5);
}
