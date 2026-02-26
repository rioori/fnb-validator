// ===== F&B Model Types =====

export interface StaffRow {
  pos: string;
  count: number;
  salary: number;
}

export interface ModelDefaults {
  sqm: number;
  seats: number;
  avg_ticket: number;
  cust_weekday: number;
  cust_weekend: number;
  food_cost_pct: number;
  rent: number;
  budget: number;
  ticket_items: [string, number][];
  cust_matrix: { wd: number[]; we: number[] };
  inv_matbang: [string, number][];
  inv_xaydung: [string, number][];
  inv_thietbi: [string, number][];
  inv_khac: [string, number][];
  working_cap: number;
  staff: StaffRow[];
  fixed_other: [string, number][];
  var_other: [string, number][];
}

export interface ModelBenchmarks {
  ticket: [number, number];
  cust_wd: [number, number];
  cust_we: [number, number];
  food_cost: [number, number];
}

export interface FnBModel {
  name: string;
  icon: string;
  investRange: string;
  desc: string;
  defaults: ModelDefaults;
  benchmarks: ModelBenchmarks;
}

export type ModelKey = 'coffee' | 'eatery' | 'bubbletea' | 'restaurant' | 'cloudkitchen' | 'bakery' | 'bar' | 'kiosk';

// ===== Calculation Types =====

export interface MonthData {
  month: number;
  grossRev: number;
  deliveryComm: number;
  netRev: number;
  cogs: number;
  waste: number;
  grossProfit: number;
  rent: number;
  staffTotal: number;
  bhxh: number;
  fixedOther: number;
  varOther: number;
  fixedMonthly: number;
  netProfit: number;
  cumulativeProfit: number;
  grossMargin: number;
  netMargin: number;
}

export interface CalcResults {
  months: MonthData[];
  totalInvestment: number;
  paybackMonth: number | null;
  bepRevenue: number;
  bepCustomersDay: number;
  score: number;
  rentRatio: number;
  laborRatio: number;
  primeCost: number;
  cogsPct: number;
  workingCapMonths: number;
  stableRev: number;
  fixedMonthly: number;
  stableMonth: MonthData;
  deliveryPct: number;
  opDaysPerMonth: number;
  ticket: number;
}

export type BusinessMode = 'new' | 'existing';

export interface CalcInput {
  ticket: number;
  custWeekday: number;
  custWeekend: number;
  daysPerWeek: number;
  deliveryPct: number;
  deliveryCommPct: number;
  cogsPct: number;
  wastePct: number;
  rent: number;
  staffTotal: number;
  bhxhOn: boolean;
  fixedOther: number;
  varOther: number;
  totalInvestment: number;
  workingCap: number;
  rampFactors: number[];
  businessMode?: BusinessMode;
}

export interface OptimizationSuggestion {
  id: string;
  icon: string;
  priority: 'high' | 'medium' | 'low';
  titleKey: string;
  descKey: string;
  tipKey: string;
  currentValue: string;
  targetValue: string;
  monthlyImpact: number;
}

// ===== Wizard State Types =====

export interface DynItem {
  id: string;
  name: string;
  amount: number;
}

export interface CustMatrix {
  wd: [number, number, number, number];
  we: [number, number, number, number];
}

export interface TicketItem {
  id: string;
  name: string;
  price: number;
}

// ===== Existing Business Diagnostic Types =====

export interface MenuItemData {
  id: string;
  name: string;
  price: number;        // selling price per item
  costPerItem: number;  // food cost per item
  monthlySold: number;  // units sold per month
}

export type MenuCategory = 'star' | 'plowhorse' | 'puzzle' | 'dog';

export interface MenuItemAnalysis extends MenuItemData {
  margin: number;           // price - costPerItem
  marginPct: number;        // margin / price * 100
  monthlyRevenue: number;   // price * monthlySold
  monthlyProfit: number;    // margin * monthlySold
  popularityIndex: number;  // relative to average
  profitIndex: number;      // relative to average
  category: MenuCategory;
}

export interface ChannelPnL {
  channel: 'dinein' | 'takeaway' | 'delivery';
  revenuePct: number;
  revenue: number;
  cogs: number;
  commission: number;
  packaging: number;
  marketing: number;
  contribution: number;       // revenue - all channel costs
  contributionMargin: number; // contribution / revenue * 100
}

export interface ChannelCosts {
  packagingPerOrder: number;  // VND per delivery/takeaway order
  grabCommPct: number;        // GrabFood commission %
  shopeeCommPct: number;      // ShopeeFood commission %
  ownDeliveryPct: number;     // % of delivery on own channel (no commission)
  marketingDinein: number;    // monthly marketing spend for dine-in
  marketingDelivery: number;  // monthly marketing spend for delivery
}

export interface CostDiagnosisItem {
  category: string;
  icon: string;
  amount: number;
  pctOfRevenue: number;
  benchmarkRange: [number, number]; // [low, high] %
  status: 'good' | 'warn' | 'bad';
  potentialSaving: number;
}

export interface BenchmarkComparison {
  metric: string;
  icon: string;
  yourValue: number;
  industryLow: number;
  industryHigh: number;
  status: 'good' | 'warn' | 'bad';
}

export interface QuickWin {
  id: string;
  icon: string;
  titleKey: string;
  descKey: string;
  actionKey: string;
  currentValue: string;
  targetValue: string;
  monthlyImpact: number;
  effort: 'easy' | 'medium' | 'hard';
  descVars?: Record<string, string>;
}

export interface ExistingBenchmarks {
  cogsPct: [number, number];
  rentPct: [number, number];
  laborPct: [number, number];
  primeCostPct: [number, number];
  netMarginPct: [number, number];
  deliveryCommPct: [number, number];
  wastePct: [number, number];
  revenuePerSeat: [number, number];  // VND per seat per day
}

export interface DiagnosisInput {
  actualRevenue: number;        // actual monthly revenue
  monthsOperating: number;
  modelKey: ModelKey;
  // from wizard steps
  rent: number;
  staffTotal: number;
  bhxhOn: boolean;
  fixedOther: number;
  varOther: number;
  cogsPct: number;
  wastePct: number;
  deliveryPct: number;        // % of sales via delivery
  takeawayPct: number;
  dineinPct: number;
  deliveryCommPct: number;
  seats: number;
  daysPerWeek: number;
  workingCap: number;
  totalInvestment: number;
  // existing-mode specific
  menuItems: MenuItemData[];
  channelCosts: ChannelCosts;
}

export interface DiagnosisResults {
  healthScore: number;
  // snapshot P&L
  revenue: number;
  totalCosts: number;
  netProfit: number;
  netMargin: number;
  // breakdowns
  menuAnalysis: MenuItemAnalysis[];
  channelPnL: ChannelPnL[];
  costDiagnosis: CostDiagnosisItem[];
  benchmarks: BenchmarkComparison[];
  quickWins: QuickWin[];
  // key ratios
  rentRatio: number;
  laborRatio: number;
  primeCost: number;
  workingCapMonths: number;
  revenuePerSeat: number;
}

// ===== Checklist Types =====

export interface ChecklistCategory {
  name: string;
  icon: string;
  items: string[];
}

// ===== Knowledge Base Types =====

export interface KBHighlight {
  label: string;
  value: string;
  note?: string;
}

export interface KBTableRow {
  label: string;
  range: string;
  note: string;
}

export interface KBStat {
  icon: string;
  label: string;
  value: string;
  desc: string;
}

export interface KBTimelineStep {
  month: string;
  title: string;
  desc: string;
  status: 'ramp' | 'stable' | 'decline';
}

export interface KBWarningItem {
  icon: string;
  title: string;
  desc: string;
  severity: 'critical' | 'warning' | 'tip';
}

export interface KBSection {
  heading?: string;
  type: 'text' | 'list' | 'table' | 'stat-grid' | 'timeline' | 'warning-list';
  content: string | string[] | KBTableRow[] | KBStat[] | KBTimelineStep[] | KBWarningItem[];
}

export type KBCategory = 'cost' | 'operations' | 'strategy' | 'legal';

export interface KBTopic {
  id: string;
  slug: string;
  icon: string;
  title: string;
  subtitle: string;
  color: 'primary-light' | 'secondary-light' | 'mint-light';
  category: KBCategory;
  highlights?: KBHighlight[];
  sections: KBSection[];
}

// ===== Expert Perspectives Types =====

export type ExpertCategory = 'consultant' | 'inspiration';

export interface ExpertQuote {
  text: string;
  source: string;
  sourceUrl?: string;
}

export interface ExpertAdvice {
  title: string;
  desc: string;
}

export interface ExpertLink {
  label: string;
  url: string;
  type: 'article' | 'video' | 'podcast' | 'social';
}

export interface ExpertSocial {
  platform: 'linkedin' | 'facebook' | 'instagram' | 'website' | 'spotify' | 'youtube' | 'tiktok';
  url: string;
}

export interface Expert {
  id: string;
  slug: string;
  name: string;
  descriptor: string;
  photo: string;
  category: ExpertCategory;
  tags: string[];
  shortBio: string;
  fullBio: string;
  highlights: string[];
  quotes: ExpertQuote[];
  advice: ExpertAdvice[];
  links: ExpertLink[];
  socials: ExpertSocial[];
  featured?: boolean;
}

// ===== Chat Types =====

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  created_at: string;
}

export interface ChatSession {
  id: string;
  user_id: string;
  title: string;
  created_at: string;
  updated_at: string;
}

// ===== Scenario Types =====

export interface ScenarioData {
  model: ModelKey | null;
  budget: number;
  rent: number;
  city: string;
  area: string;
  sqm: number;
  seats: number;
  daysPerWeek: number;
  channels: [number, number, number];
  depositMonths: number;
  invLists: Record<string, [string, number][]>;
  workingCap: number;
  avgTicket: number;
  ticketItems: [string, number][];
  custMatrix: CustMatrix;
  custWeekday: number;
  custWeekend: number;
  ramp: number[];
  staff: StaffRow[];
  cogsPct: number;
  wastePct: number;
  deliveryPct: number;
  bhxhOn: boolean;
  fixedOther: [string, number][];
  varOther: [string, number][];
}
