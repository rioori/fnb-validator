/**
 * Diagnosis engine for Existing Business mode.
 * Analyzes a single-month snapshot (not 12-month projection).
 */

import type {
  DiagnosisInput, DiagnosisResults, MenuItemAnalysis,
  ChannelPnL, CostDiagnosisItem, BenchmarkComparison,
  QuickWin, MenuCategory, ExistingBenchmarks,
} from '@/types';
import { EXISTING_BENCHMARKS } from './constants';
import { formatVND } from './format';

// ===== Menu Engineering =====

function analyzeMenu(items: DiagnosisInput['menuItems']): MenuItemAnalysis[] {
  if (items.length === 0) return [];

  const analyzed = items.map(item => {
    const margin = item.price - item.costPerItem;
    const marginPct = item.price > 0 ? (margin / item.price) * 100 : 0;
    return {
      ...item,
      margin,
      marginPct,
      monthlyRevenue: item.price * item.monthlySold,
      monthlyProfit: margin * item.monthlySold,
      popularityIndex: 0,
      profitIndex: 0,
      category: 'dog' as MenuCategory,
    };
  });

  const avgMargin = analyzed.reduce((s, i) => s + i.marginPct, 0) / analyzed.length;
  const avgSold = analyzed.reduce((s, i) => s + i.monthlySold, 0) / analyzed.length;

  for (const item of analyzed) {
    item.profitIndex = avgMargin > 0 ? item.marginPct / avgMargin : 0;
    item.popularityIndex = avgSold > 0 ? item.monthlySold / avgSold : 0;
    const highMargin = item.marginPct >= avgMargin;
    const highPopularity = item.monthlySold >= avgSold;
    if (highMargin && highPopularity) item.category = 'star';
    else if (!highMargin && highPopularity) item.category = 'plowhorse';
    else if (highMargin && !highPopularity) item.category = 'puzzle';
    else item.category = 'dog';
  }

  // Sort: stars first, then plowhorses, puzzles, dogs — within each by monthlyProfit desc
  const order: Record<MenuCategory, number> = { star: 0, plowhorse: 1, puzzle: 2, dog: 3 };
  analyzed.sort((a, b) => order[a.category] - order[b.category] || b.monthlyProfit - a.monthlyProfit);
  return analyzed;
}

// ===== Channel Profitability =====

function analyzeChannels(input: DiagnosisInput): ChannelPnL[] {
  const rev = input.actualRevenue;
  const dineinPct = input.dineinPct / 100;
  const takeawayPct = input.takeawayPct / 100;
  const deliveryPct = input.deliveryPct / 100;
  const cogsPct = input.cogsPct / 100;
  const cc = input.channelCosts;

  // Blended delivery commission: weighted by platform mix
  const thirdPartyPct = 1 - (cc.ownDeliveryPct / 100);
  const blendedCommPct = thirdPartyPct > 0
    ? ((cc.grabCommPct + cc.shopeeCommPct) / 2) * thirdPartyPct / 100
    : 0;

  // Estimate order count for packaging calc
  const avgTicket = input.menuItems.length > 0
    ? input.menuItems.reduce((s, m) => s + m.price * m.monthlySold, 0) / Math.max(1, input.menuItems.reduce((s, m) => s + m.monthlySold, 0))
    : rev / 1000; // fallback
  const deliveryOrders = avgTicket > 0 ? Math.round(rev * deliveryPct / avgTicket) : 0;
  const takeawayOrders = avgTicket > 0 ? Math.round(rev * takeawayPct / avgTicket) : 0;

  const channels: ChannelPnL[] = [];

  // Dine-in
  const diRev = rev * dineinPct;
  const diCogs = diRev * cogsPct;
  const diContrib = diRev - diCogs - cc.marketingDinein;
  channels.push({
    channel: 'dinein',
    revenuePct: input.dineinPct,
    revenue: diRev,
    cogs: diCogs,
    commission: 0,
    packaging: 0,
    marketing: cc.marketingDinein,
    contribution: diContrib,
    contributionMargin: diRev > 0 ? (diContrib / diRev) * 100 : 0,
  });

  // Takeaway
  const taRev = rev * takeawayPct;
  const taCogs = taRev * cogsPct;
  const taPkg = takeawayOrders * cc.packagingPerOrder;
  const taContrib = taRev - taCogs - taPkg;
  channels.push({
    channel: 'takeaway',
    revenuePct: input.takeawayPct,
    revenue: taRev,
    cogs: taCogs,
    commission: 0,
    packaging: taPkg,
    marketing: 0,
    contribution: taContrib,
    contributionMargin: taRev > 0 ? (taContrib / taRev) * 100 : 0,
  });

  // Delivery
  const delRev = rev * deliveryPct;
  const delCogs = delRev * cogsPct;
  const delComm = delRev * blendedCommPct;
  const delPkg = deliveryOrders * cc.packagingPerOrder;
  const delContrib = delRev - delCogs - delComm - delPkg - cc.marketingDelivery;
  channels.push({
    channel: 'delivery',
    revenuePct: input.deliveryPct,
    revenue: delRev,
    cogs: delCogs,
    commission: delComm,
    packaging: delPkg,
    marketing: cc.marketingDelivery,
    contribution: delContrib,
    contributionMargin: delRev > 0 ? (delContrib / delRev) * 100 : 0,
  });

  return channels;
}

// ===== Cost Diagnosis =====

function diagnoseCosts(input: DiagnosisInput, bm: ExistingBenchmarks): CostDiagnosisItem[] {
  const rev = input.actualRevenue;
  if (rev <= 0) return [];

  const bhxh = input.bhxhOn ? input.staffTotal * 0.275 : 0;
  const laborTotal = input.staffTotal + bhxh;
  const cogsAmt = rev * (input.cogsPct / 100);
  const wasteAmt = cogsAmt * (input.wastePct / 100);

  const items: CostDiagnosisItem[] = [
    {
      category: 'cogs', icon: '🥩',
      amount: cogsAmt, pctOfRevenue: input.cogsPct,
      benchmarkRange: bm.cogsPct,
      status: input.cogsPct <= bm.cogsPct[1] ? (input.cogsPct <= bm.cogsPct[0] ? 'good' : 'good') : 'bad',
      potentialSaving: Math.max(0, (input.cogsPct - bm.cogsPct[1]) / 100 * rev),
    },
    {
      category: 'rent', icon: '🏠',
      amount: input.rent, pctOfRevenue: (input.rent / rev) * 100,
      benchmarkRange: bm.rentPct,
      status: 'good',
      potentialSaving: 0,
    },
    {
      category: 'labor', icon: '👥',
      amount: laborTotal, pctOfRevenue: (laborTotal / rev) * 100,
      benchmarkRange: bm.laborPct,
      status: 'good',
      potentialSaving: 0,
    },
    {
      category: 'waste', icon: '🗑️',
      amount: wasteAmt, pctOfRevenue: (wasteAmt / rev) * 100,
      benchmarkRange: bm.wastePct,
      status: 'good',
      potentialSaving: 0,
    },
    {
      category: 'fixed', icon: '📋',
      amount: input.fixedOther, pctOfRevenue: (input.fixedOther / rev) * 100,
      benchmarkRange: [1, 5], // general benchmark
      status: 'good',
      potentialSaving: 0,
    },
    {
      category: 'variable', icon: '⚡',
      amount: input.varOther, pctOfRevenue: (input.varOther / rev) * 100,
      benchmarkRange: [3, 8], // general benchmark
      status: 'good',
      potentialSaving: 0,
    },
  ];

  // Set status and potentialSaving for each
  for (const item of items) {
    if (item.pctOfRevenue > item.benchmarkRange[1]) {
      item.status = 'bad';
      item.potentialSaving = Math.max(0, (item.pctOfRevenue - item.benchmarkRange[1]) / 100 * rev);
    } else if (item.pctOfRevenue > item.benchmarkRange[0] + (item.benchmarkRange[1] - item.benchmarkRange[0]) * 0.8) {
      item.status = 'warn';
    }
  }

  return items.sort((a, b) => b.potentialSaving - a.potentialSaving);
}

// ===== Benchmark Comparison =====

function compareBenchmarks(input: DiagnosisInput, bm: ExistingBenchmarks, laborPct: number, primeCost: number, netMargin: number, revPerSeat: number): BenchmarkComparison[] {
  function status(val: number, range: [number, number], reverse = false): 'good' | 'warn' | 'bad' {
    if (reverse) {
      // Higher is better (e.g., net margin)
      if (val >= range[0]) return 'good';
      if (val >= range[0] * 0.7) return 'warn';
      return 'bad';
    }
    // Lower is better (e.g., cost ratios)
    if (val <= range[1]) return 'good';
    if (val <= range[1] * 1.2) return 'warn';
    return 'bad';
  }

  const comparisons: BenchmarkComparison[] = [
    { metric: 'cogs', icon: '🥩', yourValue: input.cogsPct, industryLow: bm.cogsPct[0], industryHigh: bm.cogsPct[1], status: status(input.cogsPct, bm.cogsPct) },
    { metric: 'rent', icon: '🏠', yourValue: (input.rent / input.actualRevenue) * 100, industryLow: bm.rentPct[0], industryHigh: bm.rentPct[1], status: status((input.rent / input.actualRevenue) * 100, bm.rentPct) },
    { metric: 'labor', icon: '👥', yourValue: laborPct, industryLow: bm.laborPct[0], industryHigh: bm.laborPct[1], status: status(laborPct, bm.laborPct) },
    { metric: 'primeCost', icon: '📊', yourValue: primeCost, industryLow: bm.primeCostPct[0], industryHigh: bm.primeCostPct[1], status: status(primeCost, bm.primeCostPct) },
    { metric: 'netMargin', icon: '💰', yourValue: netMargin, industryLow: bm.netMarginPct[0], industryHigh: bm.netMarginPct[1], status: status(netMargin, bm.netMarginPct, true) },
  ];

  // Only add revenuePerSeat if model has seats (not cloudkitchen)
  if (bm.revenuePerSeat[1] > 0 && input.seats > 0) {
    comparisons.push({
      metric: 'revenuePerSeat', icon: '💺',
      yourValue: revPerSeat,
      industryLow: bm.revenuePerSeat[0], industryHigh: bm.revenuePerSeat[1],
      status: status(revPerSeat, bm.revenuePerSeat, true),
    });
  }

  return comparisons;
}

// ===== Quick Wins =====

function generateQuickWins(
  input: DiagnosisInput,
  bm: ExistingBenchmarks,
  menuAnalysis: MenuItemAnalysis[],
  channelPnL: ChannelPnL[],
  netMargin: number,
  laborPct: number,
): QuickWin[] {
  const wins: QuickWin[] = [];
  const rev = input.actualRevenue;

  // 1. Rent too high
  const rentPct = (input.rent / rev) * 100;
  if (rentPct > bm.rentPct[1]) {
    const impact = Math.max(0, input.rent - rev * bm.rentPct[1] / 100);
    wins.push({
      id: 'rent', icon: '🏠',
      titleKey: 'rentTitle', descKey: 'rentDesc', actionKey: 'rentAction',
      currentValue: `${rentPct.toFixed(1)}%`, targetValue: `≤${bm.rentPct[1]}%`,
      monthlyImpact: impact, effort: 'hard',
      descVars: { pct: rentPct.toFixed(1), target: String(bm.rentPct[1]) },
    });
  }

  // 2. COGS too high
  if (input.cogsPct > bm.cogsPct[1]) {
    const impact = rev * (input.cogsPct - bm.cogsPct[1]) / 100;
    wins.push({
      id: 'cogs', icon: '🥩',
      titleKey: 'cogsTitle', descKey: 'cogsDesc', actionKey: 'cogsAction',
      currentValue: `${input.cogsPct}%`, targetValue: `≤${bm.cogsPct[1]}%`,
      monthlyImpact: impact, effort: 'medium',
      descVars: { pct: String(input.cogsPct), target: String(bm.cogsPct[1]) },
    });
  }

  // 3. Waste too high
  if (input.wastePct > bm.wastePct[1]) {
    const cogsAmt = rev * (input.cogsPct / 100);
    const impact = cogsAmt * (input.wastePct - bm.wastePct[1]) / 100;
    wins.push({
      id: 'waste', icon: '🗑️',
      titleKey: 'wasteTitle', descKey: 'wasteDesc', actionKey: 'wasteAction',
      currentValue: `${input.wastePct}%`, targetValue: `≤${bm.wastePct[1]}%`,
      monthlyImpact: impact, effort: 'easy',
      descVars: { pct: String(input.wastePct), target: String(bm.wastePct[1]) },
    });
  }

  // 4. Labor too high
  if (laborPct > bm.laborPct[1]) {
    const bhxh = input.bhxhOn ? input.staffTotal * 0.275 : 0;
    const impact = (input.staffTotal + bhxh) - rev * bm.laborPct[1] / 100;
    wins.push({
      id: 'labor', icon: '👥',
      titleKey: 'laborTitle', descKey: 'laborDesc', actionKey: 'laborAction',
      currentValue: `${laborPct.toFixed(1)}%`, targetValue: `≤${bm.laborPct[1]}%`,
      monthlyImpact: Math.max(0, impact), effort: 'medium',
      descVars: { pct: laborPct.toFixed(1), target: String(bm.laborPct[1]) },
    });
  }

  // 5. Delivery losing money
  const deliveryChannel = channelPnL.find(c => c.channel === 'delivery');
  if (deliveryChannel && deliveryChannel.contribution < 0) {
    wins.push({
      id: 'deliveryLoss', icon: '🛵',
      titleKey: 'deliveryLossTitle', descKey: 'deliveryLossDesc', actionKey: 'deliveryLossAction',
      currentValue: formatVND(deliveryChannel.contribution),
      targetValue: '≥0',
      monthlyImpact: Math.abs(deliveryChannel.contribution), effort: 'medium',
      descVars: { amount: formatVND(Math.abs(deliveryChannel.contribution)) },
    });
  }

  // 6. Dog menu items — suggest removing/reworking
  const dogs = menuAnalysis.filter(m => m.category === 'dog');
  if (dogs.length >= 2) {
    const dogRevenue = dogs.reduce((s, d) => s + d.monthlyRevenue, 0);
    const dogProfit = dogs.reduce((s, d) => s + d.monthlyProfit, 0);
    // Impact: if replaced with avg-margin items
    const avgMarginPct = menuAnalysis.length > 0
      ? menuAnalysis.reduce((s, m) => s + m.marginPct, 0) / menuAnalysis.length
      : 50;
    const potentialProfit = dogRevenue * (avgMarginPct / 100);
    const impact = Math.max(0, potentialProfit - dogProfit);
    wins.push({
      id: 'menuDogs', icon: '📋',
      titleKey: 'menuDogsTitle', descKey: 'menuDogsDesc', actionKey: 'menuDogsAction',
      currentValue: `${dogs.length} món`, targetValue: '0-1 món',
      monthlyImpact: impact, effort: 'easy',
      descVars: { count: String(dogs.length) },
    });
  }

  // 7. Push star items
  const stars = menuAnalysis.filter(m => m.category === 'star');
  if (stars.length > 0) {
    const starProfit = stars.reduce((s, m) => s + m.monthlyProfit, 0);
    // Estimate +15% volume on stars
    const impact = starProfit * 0.15;
    wins.push({
      id: 'pushStars', icon: '⭐',
      titleKey: 'pushStarsTitle', descKey: 'pushStarsDesc', actionKey: 'pushStarsAction',
      currentValue: `${stars.length} món`, targetValue: `+15%`,
      monthlyImpact: impact, effort: 'easy',
      descVars: { count: String(stars.length) },
    });
  }

  // 8. Low margin — suggest price increase
  if (netMargin < bm.netMarginPct[0] && input.cogsPct <= bm.cogsPct[1]) {
    const impact = rev * 0.05;
    wins.push({
      id: 'pricing', icon: '💲',
      titleKey: 'pricingTitle', descKey: 'pricingDesc', actionKey: 'pricingAction',
      currentValue: `${netMargin.toFixed(1)}%`, targetValue: `≥${bm.netMarginPct[0]}%`,
      monthlyImpact: impact, effort: 'easy',
      descVars: { pct: netMargin.toFixed(1) },
    });
  }

  // Sort by impact desc, return top 6
  wins.sort((a, b) => b.monthlyImpact - a.monthlyImpact);
  return wins.slice(0, 6);
}

// ===== Health Score (0-100) =====

function calcHealthScore(
  input: DiagnosisInput,
  bm: ExistingBenchmarks,
  netMargin: number,
  laborPct: number,
  channelPnL: ChannelPnL[],
  menuAnalysis: MenuItemAnalysis[],
): number {
  let score = 0;

  // 1. Rent ratio (0-20 pts)
  const rentPct = (input.rent / input.actualRevenue) * 100;
  if (rentPct <= bm.rentPct[0]) score += 20;
  else if (rentPct <= bm.rentPct[1]) score += 15;
  else if (rentPct <= bm.rentPct[1] * 1.25) score += 8;

  // 2. COGS (0-20 pts)
  if (input.cogsPct <= bm.cogsPct[0]) score += 20;
  else if (input.cogsPct <= bm.cogsPct[1]) score += 15;
  else if (input.cogsPct <= bm.cogsPct[1] * 1.15) score += 8;

  // 3. Labor (0-15 pts)
  if (laborPct <= bm.laborPct[0]) score += 15;
  else if (laborPct <= bm.laborPct[1]) score += 10;
  else if (laborPct <= bm.laborPct[1] * 1.2) score += 5;

  // 4. Net margin (0-20 pts)
  if (netMargin >= bm.netMarginPct[1]) score += 20;
  else if (netMargin >= bm.netMarginPct[0]) score += 15;
  else if (netMargin >= 0) score += 5;

  // 5. Channel health (0-10 pts)
  const allChannelsProfitable = channelPnL.every(c => c.revenue === 0 || c.contribution >= 0);
  if (allChannelsProfitable) score += 10;
  else if (channelPnL.filter(c => c.contribution < 0).length <= 1) score += 5;

  // 6. Menu health (0-15 pts)
  if (menuAnalysis.length > 0) {
    const starPct = menuAnalysis.filter(m => m.category === 'star').length / menuAnalysis.length;
    const dogPct = menuAnalysis.filter(m => m.category === 'dog').length / menuAnalysis.length;
    if (starPct >= 0.4 && dogPct <= 0.15) score += 15;
    else if (starPct >= 0.25) score += 10;
    else score += 5;
  } else {
    score += 7; // No menu data — neutral
  }

  return Math.min(100, score);
}

// ===== Main Entry Point =====

export function runDiagnosis(input: DiagnosisInput): DiagnosisResults {
  const rev = input.actualRevenue;
  const bm = EXISTING_BENCHMARKS[input.modelKey] || EXISTING_BENCHMARKS.coffee;

  // Key ratios
  const bhxh = input.bhxhOn ? input.staffTotal * 0.275 : 0;
  const laborTotal = input.staffTotal + bhxh;
  const fixedMonthly = input.rent + laborTotal + input.fixedOther;
  const cogsAmt = rev * (input.cogsPct / 100);
  const wasteAmt = cogsAmt * (input.wastePct / 100);
  const totalCosts = cogsAmt + wasteAmt + fixedMonthly + input.varOther;
  const netProfit = rev - totalCosts;
  const netMargin = rev > 0 ? (netProfit / rev) * 100 : 0;
  const rentRatio = rev > 0 ? (input.rent / rev) * 100 : 0;
  const laborRatio = rev > 0 ? (laborTotal / rev) * 100 : 0;
  const primeCost = (input.cogsPct) + laborRatio;
  const wcMonths = fixedMonthly > 0 ? input.workingCap / fixedMonthly : 0;

  const opDays = Math.round(input.daysPerWeek * 4.33);
  const revPerSeat = input.seats > 0 && opDays > 0 ? rev / input.seats / opDays : 0;

  // Analyses
  const menuAnalysis = analyzeMenu(input.menuItems);
  const channelPnL = analyzeChannels(input);
  const costDiagnosis = diagnoseCosts(input, bm);
  const benchmarks = compareBenchmarks(input, bm, laborRatio, primeCost, netMargin, revPerSeat);
  const quickWins = generateQuickWins(input, bm, menuAnalysis, channelPnL, netMargin, laborRatio);
  const healthScore = calcHealthScore(input, bm, netMargin, laborRatio, channelPnL, menuAnalysis);

  return {
    healthScore,
    revenue: rev,
    totalCosts,
    netProfit,
    netMargin,
    menuAnalysis,
    channelPnL,
    costDiagnosis,
    benchmarks,
    quickWins,
    rentRatio,
    laborRatio,
    primeCost,
    workingCapMonths: wcMonths,
    revenuePerSeat: revPerSeat,
  };
}
