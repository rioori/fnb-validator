import type { CalcInput, CalcResults, StaffRow } from '@/types';
import { runCalculations } from './calculations';

/**
 * Reconstruct CalcInput from saved scenario data (as stored in Supabase)
 * and run calculations to get CalcResults.
 */
export function calcFromScenarioData(d: Record<string, unknown>): CalcResults {
  const ch = (d.ch as number[]) || [100, 0, 0];

  // Ticket items
  const ticketItems = (d.ticket_items as [string, number][]) || [];
  const ticket = ticketItems.length > 0
    ? ticketItems.reduce((s, [, p]) => s + p, 0)
    : 0;

  // Customer matrix
  const cm = d.cust_matrix as { wd: number[]; we: number[] } | undefined;
  const custWeekday = cm ? cm.wd.reduce((s, v) => s + v, 0) : 0;
  const custWeekend = cm ? cm.we.reduce((s, v) => s + v, 0) : 0;

  // Staff
  const staff = (d.staff as StaffRow[]) || [];
  const staffTotal = staff.reduce((s, r) => s + r.count * r.salary, 0);

  // Investment lists
  const inv = d.inv_lists as Record<string, [string, number][]> | undefined;
  const sumInv = (list: [string, number][] | undefined) =>
    list ? list.reduce((s, [, v]) => s + v, 0) : 0;
  const totalInvestment =
    ((d.deposit as number) || 0) * ((d.depositMonths as number) || 0) +
    sumInv(inv?.invMatbang) +
    sumInv(inv?.invXaydung) +
    sumInv(inv?.invThietbi) +
    sumInv(inv?.invKhac) +
    ((d.working_cap as number) || 0);

  // Fixed other / var other
  const fixedOther = sumInv(d.fixed_other as [string, number][] | undefined);
  const varOther = sumInv(d.var_other as [string, number][] | undefined);

  const input: CalcInput = {
    ticket,
    custWeekday,
    custWeekend,
    daysPerWeek: (d.daysPerWeek as number) || 7,
    deliveryPct: ch[2] || 0,
    deliveryCommPct: (d.del_pct as number) || 25,
    cogsPct: (d.cogs_pct as number) || 35,
    wastePct: (d.waste_pct as number) || 3,
    rent: (d.rent as number) || 0,
    staffTotal,
    bhxhOn: (d.bhxh_on as boolean) ?? false,
    fixedOther,
    varOther,
    totalInvestment,
    workingCap: (d.working_cap as number) || 0,
    rampFactors: (d.ramp as number[]) || [0.4, 0.55, 0.7, 0.8, 0.9, 1],
    businessMode: (d.businessMode as 'new' | 'existing') || 'new',
  };

  return runCalculations(input);
}
