import type { CalcInput, CalcResults, MonthData } from '@/types';
import { SEASONAL, RAMP_DEFAULT } from './constants';

export function runCalculations(input: CalcInput): CalcResults {
  const {
    ticket, custWeekday, custWeekend, daysPerWeek,
    deliveryPct, deliveryCommPct, cogsPct, wastePct,
    rent, staffTotal, bhxhOn, fixedOther, varOther,
    totalInvestment, workingCap, rampFactors
  } = input;

  const wdM = Math.round(daysPerWeek * 4.33 * 5 / 7);
  const weM = Math.round(daysPerWeek * 4.33 * 2 / 7);
  const opD = wdM + weM;

  const delPct = deliveryPct / 100;
  const delComm = deliveryCommPct / 100;
  const cogsR = cogsPct / 100;
  const wasteR = wastePct / 100;

  const bhxh = bhxhOn ? staffTotal * 0.275 : 0;
  const fixedM = rent + staffTotal + bhxh + fixedOther;

  const months: MonthData[] = [];
  let cumProfit = -totalInvestment;
  let payback: number | null = null;

  for (let m = 1; m <= 12; m++) {
    const ramp = m <= 6 ? (rampFactors[m - 1] ?? RAMP_DEFAULT[m - 1]) : 1;
    const seas = SEASONAL[m] ?? 1;
    const gRev = (custWeekday * ticket * wdM + custWeekend * ticket * weM) * ramp * seas;
    const delC = gRev * delPct * delComm;
    const nRev = gRev - delC;
    const cogs = nRev * cogsR;
    const waste = cogs * wasteR;
    const gProfit = nRev - cogs - waste;
    const nProfit = gProfit - fixedM - varOther;
    cumProfit += nProfit;
    if (!payback && cumProfit >= 0) payback = m;

    months.push({
      month: m,
      grossRev: gRev,
      deliveryComm: delC,
      netRev: nRev,
      cogs,
      waste,
      grossProfit: gProfit,
      rent,
      staffTotal,
      bhxh,
      fixedOther,
      varOther,
      fixedMonthly: fixedM,
      netProfit: nProfit,
      cumulativeProfit: cumProfit,
      grossMargin: nRev > 0 ? gProfit / nRev * 100 : 0,
      netMargin: nRev > 0 ? nProfit / nRev * 100 : 0,
    });
  }

  // Break-even: correct multiplicative formula
  // Net rev = gRev * (1 - delPct*delComm)
  // Gross profit = netRev * (1 - cogsR*(1+wasteR))
  // So: gProfit = gRev * (1 - delPct*delComm) * (1 - cogsR*(1+wasteR))
  // BEP: gRev where gProfit = fixedM + varOther
  const cmR = (1 - delPct * delComm) * (1 - cogsR * (1 + wasteR));
  const bepRev = cmR > 0 ? (fixedM + varOther) / cmR : Infinity;
  const bepCust = bepRev < Infinity ? Math.ceil(bepRev / ticket / opD) : Infinity;

  const sm = months.find(m => m.month >= 7) || months[11];
  const sRev = sm.netRev || 1;
  const rentR = rent / sRev * 100;
  const laborR = (staffTotal + bhxh) / sRev * 100;
  const primeC = cogsR * 100 + laborR;

  // Score calculation
  let score = 0;
  if (rentR <= 20) score += 25; else if (rentR <= 25) score += 15; else score += 5;
  if (cogsR * 100 <= 35) score += 25; else if (cogsR * 100 <= 40) score += 15; else score += 5;
  if (primeC <= 65) score += 25; else if (primeC <= 70) score += 15; else score += 5;
  const wcM = fixedM > 0 ? workingCap / fixedM : 0;
  if (wcM >= 3) score += 25; else if (wcM >= 2) score += 15; else score += 5;

  return {
    months,
    totalInvestment,
    paybackMonth: payback,
    bepRevenue: bepRev,
    bepCustomersDay: bepCust,
    score,
    rentRatio: rentR,
    laborRatio: laborR,
    primeCost: primeC,
    cogsPct: cogsR * 100,
    workingCapMonths: wcM,
    stableRev: sRev,
    fixedMonthly: fixedM,
    stableMonth: sm,
    deliveryPct: delPct * 100,
    opDaysPerMonth: opD,
    ticket,
  };
}

/** Estimate monthly revenue at a given ramp level */
export function estMonthRev(
  ticket: number,
  custWeekday: number,
  custWeekend: number,
  daysPerWeek: number,
  ramp: number
): number {
  const wd = Math.round(daysPerWeek * 4.33 * 5 / 7);
  const we = Math.round(daysPerWeek * 4.33 * 2 / 7);
  return (custWeekday * ticket * wd + custWeekend * ticket * we) * ramp;
}
