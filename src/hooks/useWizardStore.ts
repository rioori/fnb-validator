'use client';

import { create } from 'zustand';
import type { ModelKey, StaffRow, DynItem, CustMatrix, TicketItem } from '@/types';
import { MODELS, RAMP_DEFAULT } from '@/lib/constants';

let nextId = 1;
function uid() { return 'item_' + (nextId++); }

function toDynItems(arr: [string, number][]): DynItem[] {
  return arr.map(([name, amount]) => ({ id: uid(), name, amount }));
}

function toTicketItems(arr: [string, number][]): TicketItem[] {
  return arr.map(([name, price]) => ({ id: uid(), name, price }));
}

interface WizardState {
  // Navigation
  currentStep: number;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;

  // Model
  selectedModel: ModelKey | null;
  selectModel: (key: ModelKey) => void;

  // Step 1
  budget: number;
  rent: number;
  setBudget: (v: number) => void;
  setRent: (v: number) => void;

  // Step 2
  city: string;
  area: string;
  sqm: number;
  seats: number;
  daysPerWeek: number;
  chDinein: number;
  chTakeaway: number;
  chDelivery: number;
  setCity: (v: string) => void;
  setArea: (v: string) => void;
  setSqm: (v: number) => void;
  setSeats: (v: number) => void;
  setDaysPerWeek: (v: number) => void;
  setChannels: (dinein: number, takeaway: number, delivery: number) => void;

  // Step 3
  deposit: number;
  depositMonths: number;
  invMatbang: DynItem[];
  invXaydung: DynItem[];
  invThietbi: DynItem[];
  invKhac: DynItem[];
  workingCap: number;
  setDeposit: (v: number) => void;
  setDepositMonths: (v: number) => void;
  setInvList: (list: 'invMatbang' | 'invXaydung' | 'invThietbi' | 'invKhac', items: DynItem[]) => void;
  addInvItem: (list: 'invMatbang' | 'invXaydung' | 'invThietbi' | 'invKhac', name?: string, amount?: number) => void;
  removeInvItem: (list: 'invMatbang' | 'invXaydung' | 'invThietbi' | 'invKhac', id: string) => void;
  updateInvItem: (list: 'invMatbang' | 'invXaydung' | 'invThietbi' | 'invKhac', id: string, field: 'name' | 'amount', value: string | number) => void;
  setWorkingCap: (v: number) => void;

  // Step 4
  ticketItems: TicketItem[];
  custMatrix: CustMatrix;
  rampFactors: number[];
  addTicketItem: (name?: string, price?: number) => void;
  removeTicketItem: (id: string) => void;
  updateTicketItem: (id: string, field: 'name' | 'price', value: string | number) => void;
  setCustMatrix: (mat: CustMatrix) => void;
  setRampFactor: (index: number, value: number) => void;

  // Step 5
  staff: StaffRow[];
  bhxhOn: boolean;
  cogsPct: number;
  wastePct: number;
  deliveryCommPct: number;
  fixedOther: DynItem[];
  varOther: DynItem[];
  setStaff: (staff: StaffRow[]) => void;
  addStaffRow: (pos?: string, count?: number, salary?: number) => void;
  removeStaffRow: (index: number) => void;
  updateStaffRow: (index: number, field: keyof StaffRow, value: string | number) => void;
  setBhxhOn: (v: boolean) => void;
  setCogsPct: (v: number) => void;
  setWastePct: (v: number) => void;
  setDeliveryCommPct: (v: number) => void;
  addFixedOtherItem: (name?: string, amount?: number) => void;
  removeFixedOtherItem: (id: string) => void;
  updateFixedOtherItem: (id: string, field: 'name' | 'amount', value: string | number) => void;
  addVarOtherItem: (name?: string, amount?: number) => void;
  removeVarOtherItem: (id: string) => void;
  updateVarOtherItem: (id: string, field: 'name' | 'amount', value: string | number) => void;

  // Computed helpers
  getDeposit: () => number;
  getTotalInvestment: () => number;
  getStaffTotal: () => number;
  getAvgTicket: () => number;
  getCustWeekday: () => number;
  getCustWeekend: () => number;
  getDynTotal: (items: DynItem[]) => number;

  // Save / Restore
  collectAll: () => Record<string, unknown>;
  restoreAll: (data: Record<string, unknown>) => void;
}

export const useWizardStore = create<WizardState>((set, get) => ({
  // Navigation
  currentStep: 0,
  setStep: (step) => set({ currentStep: step }),
  nextStep: () => {
    const { currentStep, selectedModel } = get();
    if (currentStep === 1 && !selectedModel) return;
    if (currentStep < 6) set({ currentStep: currentStep + 1 });
  },
  prevStep: () => {
    const { currentStep } = get();
    if (currentStep > 0) set({ currentStep: currentStep - 1 });
  },

  // Model
  selectedModel: null,
  selectModel: (key) => {
    const m = MODELS[key];
    const d = m.defaults;
    set({
      selectedModel: key,
      budget: d.budget,
      rent: d.rent,
      deposit: d.rent * 3,
      sqm: d.sqm,
      seats: d.seats,
      cogsPct: d.food_cost_pct,
      depositMonths: 3,
      invMatbang: toDynItems(d.inv_matbang),
      invXaydung: toDynItems(d.inv_xaydung),
      invThietbi: toDynItems(d.inv_thietbi),
      invKhac: toDynItems(d.inv_khac),
      workingCap: d.working_cap,
      ticketItems: toTicketItems(d.ticket_items),
      custMatrix: { wd: d.cust_matrix.wd as [number, number, number, number], we: d.cust_matrix.we as [number, number, number, number] },
      rampFactors: [...RAMP_DEFAULT],
      staff: d.staff.map(s => ({ ...s })),
      fixedOther: toDynItems(d.fixed_other),
      varOther: toDynItems(d.var_other),
      // Cloud kitchen channel defaults
      ...(key === 'cloudkitchen' ? { chDinein: 0, chTakeaway: 10, chDelivery: 90 } : {}),
    });
  },

  // Step 1
  budget: 0,
  rent: 0,
  setBudget: (v) => set({ budget: v }),
  setRent: (v) => set((s) => ({ rent: v, deposit: v * s.depositMonths })),

  // Step 2
  city: 'hcm',
  area: 'center',
  sqm: 40,
  seats: 25,
  daysPerWeek: 7,
  chDinein: 60,
  chTakeaway: 20,
  chDelivery: 20,
  setCity: (v) => set({ city: v }),
  setArea: (v) => set({ area: v }),
  setSqm: (v) => set({ sqm: v }),
  setSeats: (v) => set({ seats: v }),
  setDaysPerWeek: (v) => set({ daysPerWeek: v }),
  setChannels: (dinein, takeaway, delivery) => set({ chDinein: Number(dinein) || 0, chTakeaway: Number(takeaway) || 0, chDelivery: Number(delivery) || 0 }),

  // Step 3
  deposit: 0,
  depositMonths: 3,
  invMatbang: [],
  invXaydung: [],
  invThietbi: [],
  invKhac: [],
  workingCap: 0,
  setDeposit: (v) => set({ deposit: v }),
  setDepositMonths: (v) => set({ depositMonths: v }),
  setInvList: (list, items) => set({ [list]: items }),
  addInvItem: (list, name = '', amount = 0) => {
    const items = [...get()[list], { id: uid(), name, amount }];
    set({ [list]: items });
  },
  removeInvItem: (list, id) => {
    set({ [list]: get()[list].filter((i: DynItem) => i.id !== id) });
  },
  updateInvItem: (list, id, field, value) => {
    set({
      [list]: get()[list].map((i: DynItem) =>
        i.id === id ? { ...i, [field]: field === 'amount' ? (typeof value === 'number' ? value : parseInt(String(value).replace(/\./g, '')) || 0) : value } : i
      ),
    });
  },
  setWorkingCap: (v) => set({ workingCap: v }),

  // Step 4
  ticketItems: [],
  custMatrix: { wd: [20, 30, 10, 20], we: [30, 40, 20, 30] },
  rampFactors: [...RAMP_DEFAULT],
  addTicketItem: (name = '', price = 0) => set((s) => ({ ticketItems: [...s.ticketItems, { id: uid(), name, price }] })),
  removeTicketItem: (id) => set((s) => ({ ticketItems: s.ticketItems.filter(i => i.id !== id) })),
  updateTicketItem: (id, field, value) => set((s) => ({
    ticketItems: s.ticketItems.map(i =>
      i.id === id ? { ...i, [field]: field === 'price' ? (typeof value === 'number' ? value : parseInt(String(value).replace(/\./g, '')) || 0) : value } : i
    ),
  })),
  setCustMatrix: (mat) => set({ custMatrix: mat }),
  setRampFactor: (index, value) => set((s) => {
    const f = [...s.rampFactors];
    f[index] = value;
    return { rampFactors: f };
  }),

  // Step 5
  staff: [],
  bhxhOn: true,
  cogsPct: 28,
  wastePct: 5,
  deliveryCommPct: 25,
  fixedOther: [],
  varOther: [],
  setStaff: (staff) => set({ staff }),
  addStaffRow: (pos = '', count = 1, salary = 6000000) => set((s) => ({ staff: [...s.staff, { pos, count, salary }] })),
  removeStaffRow: (index) => set((s) => ({ staff: s.staff.filter((_, i) => i !== index) })),
  updateStaffRow: (index, field, value) => set((s) => ({
    staff: s.staff.map((row, i) => {
      if (i !== index) return row;
      if (field === 'pos') return { ...row, pos: String(value) };
      return { ...row, [field]: typeof value === 'number' ? value : parseInt(String(value).replace(/\./g, '')) || 0 };
    }),
  })),
  setBhxhOn: (v) => set({ bhxhOn: v }),
  setCogsPct: (v) => set({ cogsPct: v }),
  setWastePct: (v) => set({ wastePct: v }),
  setDeliveryCommPct: (v) => set({ deliveryCommPct: v }),
  addFixedOtherItem: (name = '', amount = 0) => set((s) => ({ fixedOther: [...s.fixedOther, { id: uid(), name, amount }] })),
  removeFixedOtherItem: (id) => set((s) => ({ fixedOther: s.fixedOther.filter(i => i.id !== id) })),
  updateFixedOtherItem: (id, field, value) => set((s) => ({
    fixedOther: s.fixedOther.map(i =>
      i.id === id ? { ...i, [field]: field === 'amount' ? (typeof value === 'number' ? value : parseInt(String(value).replace(/\./g, '')) || 0) : value } : i
    ),
  })),
  addVarOtherItem: (name = '', amount = 0) => set((s) => ({ varOther: [...s.varOther, { id: uid(), name, amount }] })),
  removeVarOtherItem: (id) => set((s) => ({ varOther: s.varOther.filter(i => i.id !== id) })),
  updateVarOtherItem: (id, field, value) => set((s) => ({
    varOther: s.varOther.map(i =>
      i.id === id ? { ...i, [field]: field === 'amount' ? (typeof value === 'number' ? value : parseInt(String(value).replace(/\./g, '')) || 0) : value } : i
    ),
  })),

  // Computed helpers
  getDeposit: () => get().deposit,
  getTotalInvestment: () => {
    const s = get();
    const dynTotal = (items: DynItem[]) => items.reduce((sum, i) => sum + i.amount, 0);
    return s.deposit + dynTotal(s.invMatbang) + dynTotal(s.invXaydung) + dynTotal(s.invThietbi) + dynTotal(s.invKhac) + s.workingCap;
  },
  getStaffTotal: () => get().staff.reduce((sum, r) => sum + r.count * r.salary, 0),
  getAvgTicket: () => {
    const items = get().ticketItems.filter(i => i.price > 0);
    if (items.length === 0) return 0;
    return items.reduce((sum, i) => sum + i.price, 0);
  },
  getCustWeekday: () => {
    const m = get().custMatrix.wd;
    return m[0] + m[1] + m[2] + m[3];
  },
  getCustWeekend: () => {
    const m = get().custMatrix.we;
    return m[0] + m[1] + m[2] + m[3];
  },
  getDynTotal: (items) => items.reduce((sum, i) => sum + i.amount, 0),

  // Save / Restore
  collectAll: () => {
    const s = get();
    return {
      model: s.selectedModel,
      budget: s.budget,
      rent: s.rent,
      city: s.city,
      area: s.area,
      sqm: s.sqm,
      seats: s.seats,
      daysPerWeek: s.daysPerWeek,
      ch: [s.chDinein, s.chTakeaway, s.chDelivery],
      deposit: s.deposit,
      depositMonths: s.depositMonths,
      inv_lists: {
        invMatbang: s.invMatbang.map(i => [i.name, i.amount]),
        invXaydung: s.invXaydung.map(i => [i.name, i.amount]),
        invThietbi: s.invThietbi.map(i => [i.name, i.amount]),
        invKhac: s.invKhac.map(i => [i.name, i.amount]),
      },
      working_cap: s.workingCap,
      ticket_items: s.ticketItems.map(i => [i.name, i.price]),
      cust_matrix: s.custMatrix,
      ramp: s.rampFactors,
      staff: s.staff,
      cogs_pct: s.cogsPct,
      waste_pct: s.wastePct,
      del_pct: s.deliveryCommPct,
      bhxh_on: s.bhxhOn,
      fixed_other: s.fixedOther.map(i => [i.name, i.amount]),
      var_other: s.varOther.map(i => [i.name, i.amount]),
      currentStep: s.currentStep,
    };
  },

  restoreAll: (d) => {
    const patch: Partial<WizardState> = {};
    if (d.model && typeof d.model === 'string') patch.selectedModel = d.model as ModelKey;
    if (typeof d.budget === 'number') patch.budget = d.budget;
    if (typeof d.rent === 'number') patch.rent = d.rent;
    if (typeof d.city === 'string') patch.city = d.city;
    if (typeof d.area === 'string') patch.area = d.area;
    if (typeof d.sqm === 'number') patch.sqm = d.sqm;
    if (typeof d.seats === 'number') patch.seats = d.seats;
    if (typeof d.daysPerWeek === 'number') patch.daysPerWeek = d.daysPerWeek;
    if (Array.isArray(d.ch) && d.ch.length === 3) {
      patch.chDinein = d.ch[0] as number;
      patch.chTakeaway = d.ch[1] as number;
      patch.chDelivery = d.ch[2] as number;
    }
    if (typeof d.deposit === 'number') patch.deposit = d.deposit;
    if (typeof d.depositMonths === 'number') patch.depositMonths = d.depositMonths;
    if (typeof d.working_cap === 'number') patch.workingCap = d.working_cap;
    if (typeof d.cogs_pct === 'number') patch.cogsPct = d.cogs_pct;
    if (typeof d.waste_pct === 'number') patch.wastePct = d.waste_pct;
    if (typeof d.del_pct === 'number') patch.deliveryCommPct = d.del_pct;
    if (typeof d.bhxh_on === 'boolean') patch.bhxhOn = d.bhxh_on;
    if (Array.isArray(d.ramp)) patch.rampFactors = d.ramp as number[];
    if (Array.isArray(d.staff)) patch.staff = (d.staff as StaffRow[]).map(s => ({ ...s }));
    if (d.cust_matrix) patch.custMatrix = d.cust_matrix as CustMatrix;
    if (typeof d.currentStep === 'number') patch.currentStep = d.currentStep;
    // Investment lists
    const inv = d.inv_lists as Record<string, [string, number][]> | undefined;
    if (inv) {
      if (Array.isArray(inv.invMatbang)) patch.invMatbang = toDynItems(inv.invMatbang);
      if (Array.isArray(inv.invXaydung)) patch.invXaydung = toDynItems(inv.invXaydung);
      if (Array.isArray(inv.invThietbi)) patch.invThietbi = toDynItems(inv.invThietbi);
      if (Array.isArray(inv.invKhac)) patch.invKhac = toDynItems(inv.invKhac);
    }
    // Ticket items
    if (Array.isArray(d.ticket_items)) patch.ticketItems = toTicketItems(d.ticket_items as [string, number][]);
    // Fixed / var other
    if (Array.isArray(d.fixed_other)) patch.fixedOther = toDynItems(d.fixed_other as [string, number][]);
    if (Array.isArray(d.var_other)) patch.varOther = toDynItems(d.var_other as [string, number][]);

    set(patch);
  },
}));

// --- localStorage auto-save / restore ---
const DRAFT_KEY = 'fnb_draft';

function saveDraft() {
  try {
    const data = useWizardStore.getState().collectAll();
    localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
  } catch { /* quota exceeded or SSR */ }
}

export function restoreDraft() {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
    if (data && typeof data === 'object' && data.model) {
      useWizardStore.getState().restoreAll(data);
      return true;
    }
  } catch { /* corrupt data */ }
  return false;
}

export function clearDraft() {
  try { localStorage.removeItem(DRAFT_KEY); } catch { /* SSR */ }
}

// Subscribe to state changes and auto-save (debounced)
let saveTimer: ReturnType<typeof setTimeout> | null = null;
if (typeof window !== 'undefined') {
  useWizardStore.subscribe(() => {
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(saveDraft, 500);
  });
}
