import type { CalcResults, DynItem, StaffRow } from '@/types';
import { MODELS } from './constants';
import type { ModelKey } from '@/types';
import type { Alignment, Border, Fill, Font, Style } from 'exceljs';

// ── Types ────────────────────────────────────────────────────────────
export interface ExportData {
  model: ModelKey | null;
  city: string;
  area: string;
  sqm: number;
  seats: number;
  daysPerWeek: number;
  channels: [number, number, number];

  deposit: number;
  depositMonths: number;
  rent: number;
  invMatbang: DynItem[];
  invXaydung: DynItem[];
  invThietbi: DynItem[];
  invKhac: DynItem[];
  workingCap: number;

  ticketItems: { name: string; price: number }[];
  avgTicket: number;
  custWeekday: number;
  custWeekend: number;
  rampFactors: number[];

  staff: StaffRow[];
  staffTotal: number;
  bhxhOn: boolean;
  cogsPct: number;
  wastePct: number;
  deliveryCommPct: number;
  fixedOther: DynItem[];
  varOther: DynItem[];

  results: CalcResults;
  locale?: string;
}

// ── Labels (vi/en) ───────────────────────────────────────────────────
interface Labels {
  reportTitle: string;
  subtitle: string;
  dateLabel: string;
  modelInfo: string;
  model: string;
  city: string;
  area: string;
  sqm: string;
  seats: string;
  operating: string;
  daysWeek: string;
  salesChannels: string;
  feasibilityScore: string;
  totalScore: string;
  assessment: string;
  highFeasibility: string;
  needsImprovement: string;
  highRisk: string;
  mainKpis: string;
  grossRevMonth: string;
  netRevMonth: string;
  grossProfitMonth: string;
  netProfitMonth: string;
  grossMargin: string;
  netMargin: string;
  paybackPeriod: string;
  months: string;
  moreThan12: string;
  cashReserve: string;
  monthsUnit: string;
  bepRevMonth: string;
  bepCustDay: string;
  costHealth: string;
  rentRatio: string;
  laborRatio: string;
  foodCost: string;
  primeCost: string;
  benchmark: string;
  good: string;

  // Sheet 2
  investDetail: string;
  item: string;
  detail: string;
  amount: string;
  depositLabel: string;
  monthsDeposit: string;
  groupMatbang: string;
  groupXaydung: string;
  groupThietbi: string;
  groupKhac: string;
  noItems: string;
  subtotal: string;
  workingCapital: string;
  totalInvestment: string;

  // Sheet 3
  revCostStructure: string;
  avgTicketStructure: string;
  price: string;
  avgTicketTotal: string;
  custForecast: string;
  weekday: string;
  weekend: string;
  totalCustDay: string;
  rampUp: string;
  monthLabel: string;
  factor: string;
  capacity: string;
  staffLabel: string;
  position: string;
  count: string;
  salary: string;
  totalWages: string;
  bhxhLabel: string;
  costParams: string;
  cogsLabel: string;
  wasteLabel: string;
  deliveryCommLabel: string;
  rentLabel: string;
  fixedOtherLabel: string;
  varOtherLabel: string;
  total: string;

  // Sheet 4
  pnlTitle: string;
  pnlItem: string;
  grossRev: string;
  deliveryComm: string;
  netRev: string;
  cogs: string;
  waste: string;
  grossProfitLabel: string;
  rentCost: string;
  staffCost: string;
  bhxhCost: string;
  fixedOtherCost: string;
  varOtherCost: string;
  netProfitLabel: string;
  cumulative: string;
  annualTotal: string;
  grossMarginPct: string;
  netMarginPct: string;

  // Sheet 5
  bepTitle: string;
  bepMetrics: string;
  bepRevMonthLabel: string;
  bepCustDayLabel: string;
  totalFixedMonth: string;
  totalInvLabel: string;
  paybackLabel: string;
  notFeasible: string;
  cashFlowCum: string;
  netProfitShort: string;
  cumulativeShort: string;
  initialInvestment: string;

  cityNames: Record<string, string>;
  areaNames: Record<string, string>;
}

const VI_LABELS: Labels = {
  reportTitle: 'BÁO CÁO THẨM ĐỊNH MÔ HÌNH F&B',
  subtitle: 'F&B Validator — validator.vn',
  dateLabel: 'Ngày xuất',
  modelInfo: 'THÔNG TIN MÔ HÌNH',
  model: 'Mô hình',
  city: 'Thành phố',
  area: 'Khu vực',
  sqm: 'Diện tích',
  seats: 'Số ghế',
  operating: 'Hoạt động',
  daysWeek: 'ngày/tuần',
  salesChannels: 'Kênh bán',
  feasibilityScore: 'ĐIỂM KHẢ THI',
  totalScore: 'Tổng điểm',
  assessment: 'Đánh giá',
  highFeasibility: 'Khả thi cao',
  needsImprovement: 'Cần cải thiện',
  highRisk: 'Rủi ro cao',
  mainKpis: 'CHỈ SỐ CHÍNH (THÁNG ỔN ĐỊNH)',
  grossRevMonth: 'Doanh thu gộp/tháng',
  netRevMonth: 'Doanh thu ròng/tháng',
  grossProfitMonth: 'Lợi nhuận gộp/tháng',
  netProfitMonth: 'Lợi nhuận ròng/tháng',
  grossMargin: 'Biên lợi nhuận gộp',
  netMargin: 'Biên lợi nhuận ròng',
  paybackPeriod: 'Thời gian hoàn vốn',
  months: 'tháng',
  moreThan12: '>12 tháng',
  cashReserve: 'Dự phòng vốn',
  monthsUnit: 'tháng',
  bepRevMonth: 'Doanh thu hòa vốn/tháng',
  bepCustDay: 'Khách hòa vốn/ngày',
  costHealth: 'SỨC KHỎE CHI PHÍ',
  rentRatio: 'Tỷ lệ mặt bằng',
  laborRatio: 'Tỷ lệ nhân sự',
  foodCost: 'Food cost',
  primeCost: 'Prime cost',
  benchmark: 'Benchmark',
  good: 'tốt',

  investDetail: 'CHI TIẾT VỐN ĐẦU TƯ BAN ĐẦU',
  item: 'Hạng mục',
  detail: 'Chi tiết',
  amount: 'Số tiền (VNĐ)',
  depositLabel: 'Đặt cọc mặt bằng',
  monthsDeposit: 'tháng',
  groupMatbang: 'MẶT BẰNG',
  groupXaydung: 'XÂY DỰNG & TRANG TRÍ',
  groupThietbi: 'THIẾT BỊ',
  groupKhac: 'CHI PHÍ KHÁC',
  noItems: '(Không có)',
  subtotal: 'Tổng',
  workingCapital: 'VỐN LƯU ĐỘNG',
  totalInvestment: 'TỔNG VỐN ĐẦU TƯ',

  revCostStructure: 'CẤU TRÚC DOANH THU & CHI PHÍ',
  avgTicketStructure: 'CẤU TRÚC GIÁ TRUNG BÌNH / KHÁCH',
  price: 'Giá (VNĐ)',
  avgTicketTotal: 'Tổng ticket trung bình',
  custForecast: 'LƯỢNG KHÁCH DỰ KIẾN / NGÀY',
  weekday: 'Ngày thường',
  weekend: 'Cuối tuần',
  totalCustDay: 'Tổng khách/ngày',
  rampUp: 'HỆ SỐ RAMP-UP 6 THÁNG ĐẦU',
  monthLabel: 'Tháng',
  factor: 'Hệ số',
  capacity: '% công suất',
  staffLabel: 'NHÂN SỰ',
  position: 'Vị trí',
  count: 'Số lượng',
  salary: 'Lương/người (VNĐ)',
  totalWages: 'Tổng lương',
  bhxhLabel: 'BHXH (27.5%)',
  costParams: 'THÔNG SỐ CHI PHÍ',
  cogsLabel: 'Food cost (COGS)',
  wasteLabel: 'Hao hụt / waste',
  deliveryCommLabel: 'Hoa hồng delivery',
  rentLabel: 'Tiền thuê mặt bằng',
  fixedOtherLabel: 'CHI PHÍ CỐ ĐỊNH KHÁC',
  varOtherLabel: 'CHI PHÍ BIẾN ĐỔI KHÁC',
  total: 'Tổng',

  pnlTitle: 'BÁO CÁO LÃI LỖ DỰ KIẾN 12 THÁNG',
  pnlItem: 'Hạng mục',
  grossRev: 'Doanh thu gộp',
  deliveryComm: '(-) Hoa hồng delivery',
  netRev: 'Doanh thu ròng',
  cogs: '(-) Giá vốn (COGS)',
  waste: '(-) Hao hụt',
  grossProfitLabel: 'Lợi nhuận gộp',
  rentCost: '(-) Thuê mặt bằng',
  staffCost: '(-) Nhân sự',
  bhxhCost: '(-) BHXH',
  fixedOtherCost: '(-) CP cố định khác',
  varOtherCost: '(-) CP biến đổi',
  netProfitLabel: 'Lợi nhuận ròng',
  cumulative: 'Lũy kế',
  annualTotal: 'TỔNG NĂM',
  grossMarginPct: 'Biên LN gộp (%)',
  netMarginPct: 'Biên LN ròng (%)',

  bepTitle: 'PHÂN TÍCH HÒA VỐN',
  bepMetrics: 'CHỈ SỐ HÒA VỐN',
  bepRevMonthLabel: 'Doanh thu hòa vốn/tháng',
  bepCustDayLabel: 'Số khách hòa vốn/ngày',
  totalFixedMonth: 'Tổng chi phí cố định/tháng',
  totalInvLabel: 'Tổng vốn đầu tư',
  paybackLabel: 'Thời gian hoàn vốn',
  notFeasible: 'Không khả thi',
  cashFlowCum: 'DÒNG TIỀN LŨY KẾ',
  netProfitShort: 'LN ròng',
  cumulativeShort: 'Lũy kế',
  initialInvestment: 'Đầu tư ban đầu',

  cityNames: { hcm: 'TP. Hồ Chí Minh', hanoi: 'Hà Nội', danang: 'Đà Nẵng', other: 'Khác' },
  areaNames: { center: 'Trung tâm', suburb: 'Ngoại ô', alley: 'Hẻm', cbd: 'CBD' },
};

const EN_LABELS: Labels = {
  reportTitle: 'F&B BUSINESS MODEL VALIDATION REPORT',
  subtitle: 'F&B Validator — validator.vn',
  dateLabel: 'Export date',
  modelInfo: 'MODEL INFORMATION',
  model: 'Model',
  city: 'City',
  area: 'Area',
  sqm: 'Area (sqm)',
  seats: 'Seats',
  operating: 'Operating',
  daysWeek: 'days/week',
  salesChannels: 'Sales channels',
  feasibilityScore: 'FEASIBILITY SCORE',
  totalScore: 'Total score',
  assessment: 'Assessment',
  highFeasibility: 'Highly feasible',
  needsImprovement: 'Needs improvement',
  highRisk: 'High risk',
  mainKpis: 'KEY METRICS (STABLE MONTH)',
  grossRevMonth: 'Gross revenue/month',
  netRevMonth: 'Net revenue/month',
  grossProfitMonth: 'Gross profit/month',
  netProfitMonth: 'Net profit/month',
  grossMargin: 'Gross profit margin',
  netMargin: 'Net profit margin',
  paybackPeriod: 'Payback period',
  months: 'months',
  moreThan12: '>12 months',
  cashReserve: 'Cash reserve',
  monthsUnit: 'months',
  bepRevMonth: 'Break-even revenue/month',
  bepCustDay: 'Break-even customers/day',
  costHealth: 'COST HEALTH',
  rentRatio: 'Rent ratio',
  laborRatio: 'Labor ratio',
  foodCost: 'Food cost',
  primeCost: 'Prime cost',
  benchmark: 'Benchmark',
  good: 'good',

  investDetail: 'INITIAL INVESTMENT BREAKDOWN',
  item: 'Item',
  detail: 'Detail',
  amount: 'Amount (VND)',
  depositLabel: 'Deposit',
  monthsDeposit: 'months',
  groupMatbang: 'PREMISES',
  groupXaydung: 'CONSTRUCTION & FIT-OUT',
  groupThietbi: 'EQUIPMENT',
  groupKhac: 'OTHER COSTS',
  noItems: '(None)',
  subtotal: 'Subtotal',
  workingCapital: 'WORKING CAPITAL',
  totalInvestment: 'TOTAL INVESTMENT',

  revCostStructure: 'REVENUE & COST STRUCTURE',
  avgTicketStructure: 'AVERAGE TICKET BREAKDOWN',
  price: 'Price (VND)',
  avgTicketTotal: 'Average ticket total',
  custForecast: 'DAILY CUSTOMER FORECAST',
  weekday: 'Weekday',
  weekend: 'Weekend',
  totalCustDay: 'Total customers/day',
  rampUp: 'RAMP-UP FACTORS (FIRST 6 MONTHS)',
  monthLabel: 'Month',
  factor: 'Factor',
  capacity: '% capacity',
  staffLabel: 'STAFF',
  position: 'Position',
  count: 'Count',
  salary: 'Salary/person (VND)',
  totalWages: 'Total wages',
  bhxhLabel: 'Social insurance (27.5%)',
  costParams: 'COST PARAMETERS',
  cogsLabel: 'Food cost (COGS)',
  wasteLabel: 'Waste / shrinkage',
  deliveryCommLabel: 'Delivery commission',
  rentLabel: 'Monthly rent',
  fixedOtherLabel: 'OTHER FIXED COSTS',
  varOtherLabel: 'OTHER VARIABLE COSTS',
  total: 'Total',

  pnlTitle: 'PROJECTED P&L — 12 MONTHS',
  pnlItem: 'Item',
  grossRev: 'Gross revenue',
  deliveryComm: '(-) Delivery commission',
  netRev: 'Net revenue',
  cogs: '(-) COGS',
  waste: '(-) Waste',
  grossProfitLabel: 'Gross profit',
  rentCost: '(-) Rent',
  staffCost: '(-) Staff',
  bhxhCost: '(-) Social insurance',
  fixedOtherCost: '(-) Other fixed costs',
  varOtherCost: '(-) Variable costs',
  netProfitLabel: 'Net profit',
  cumulative: 'Cumulative',
  annualTotal: 'ANNUAL TOTAL',
  grossMarginPct: 'Gross margin (%)',
  netMarginPct: 'Net margin (%)',

  bepTitle: 'BREAK-EVEN ANALYSIS',
  bepMetrics: 'BREAK-EVEN METRICS',
  bepRevMonthLabel: 'Break-even revenue/month',
  bepCustDayLabel: 'Break-even customers/day',
  totalFixedMonth: 'Total fixed costs/month',
  totalInvLabel: 'Total investment',
  paybackLabel: 'Payback period',
  notFeasible: 'Not feasible',
  cashFlowCum: 'CUMULATIVE CASH FLOW',
  netProfitShort: 'Net profit',
  cumulativeShort: 'Cumulative',
  initialInvestment: 'Initial investment',

  cityNames: { hcm: 'Ho Chi Minh City', hanoi: 'Hanoi', danang: 'Da Nang', other: 'Other' },
  areaNames: { center: 'Central', suburb: 'Suburban', alley: 'Alley', cbd: 'CBD' },
};

// ── Design tokens ────────────────────────────────────────────────────
const SLATE_DARK = 'FF0F172A';
const SLATE_MID = 'FF334155';
const GREEN = 'FF16A34A';
const GREEN_LIGHT = 'FFDCFCE7';
const RED_LIGHT = 'FFFEE2E2';
const YELLOW_LIGHT = 'FFFFFBEB';
const SURFACE = 'FFF8FAFC';
const BORDER_COLOR = 'FFE2E8F0';
const WHITE = 'FFFFFFFF';

const FONT_TITLE: Partial<Font> = { name: 'Calibri', size: 16, bold: true, color: { argb: WHITE } };
const FONT_SUBTITLE: Partial<Font> = { name: 'Calibri', size: 10, color: { argb: 'FF94A3B8' } };
const FONT_SECTION: Partial<Font> = { name: 'Calibri', size: 11, bold: true, color: { argb: SLATE_DARK } };
const FONT_HEADER: Partial<Font> = { name: 'Calibri', size: 10, bold: true, color: { argb: WHITE } };
const FONT_DATA: Partial<Font> = { name: 'Calibri', size: 10, color: { argb: SLATE_DARK } };
const FONT_BOLD: Partial<Font> = { name: 'Calibri', size: 10, bold: true, color: { argb: SLATE_DARK } };
const FONT_GREEN: Partial<Font> = { name: 'Calibri', size: 10, bold: true, color: { argb: GREEN } };
const FONT_LABEL: Partial<Font> = { name: 'Calibri', size: 10, color: { argb: 'FF64748B' } };

const FILL_DARK: Fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: SLATE_DARK } };
const FILL_MID: Fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: SLATE_MID } };
const FILL_GREEN: Fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: GREEN_LIGHT } };
const FILL_SURFACE: Fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: SURFACE } };
const FILL_WHITE: Fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: WHITE } };
const FILL_RED: Fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: RED_LIGHT } };
const FILL_YELLOW: Fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: YELLOW_LIGHT } };

const BORDER_THIN: Partial<Border> = { style: 'thin', color: { argb: BORDER_COLOR } };
const BORDER_MED: Partial<Border> = { style: 'medium', color: { argb: BORDER_COLOR } };
const BORDERS_ALL = { top: BORDER_THIN, bottom: BORDER_THIN, left: BORDER_THIN, right: BORDER_THIN };
const BORDERS_BOTTOM = { bottom: BORDER_MED };

const ALIGN_LEFT: Partial<Alignment> = { horizontal: 'left', vertical: 'middle' };
const ALIGN_CENTER: Partial<Alignment> = { horizontal: 'center', vertical: 'middle' };
const ALIGN_RIGHT: Partial<Alignment> = { horizontal: 'right', vertical: 'middle' };

const VND_FMT = '#,##0';
const PCT_FMT = '0.0%';

// ── Helpers ──────────────────────────────────────────────────────────
type ExcelJS = typeof import('exceljs');

function n(v: number): number { return Math.round(v); }

function colLetter(col: number): string {
  let s = '';
  let c = col;
  while (c > 0) {
    c--;
    s = String.fromCharCode(65 + (c % 26)) + s;
    c = Math.floor(c / 26);
  }
  return s;
}

function applyTableHeader(
  ws: import('exceljs').Worksheet,
  row: number,
  cols: number,
  style?: Partial<Style>,
) {
  for (let c = 1; c <= cols; c++) {
    const cell = ws.getCell(row, c);
    cell.fill = FILL_MID;
    cell.font = FONT_HEADER;
    cell.alignment = ALIGN_CENTER;
    cell.border = BORDERS_ALL;
    if (style) Object.assign(cell, style);
  }
  // First col left-aligned
  ws.getCell(row, 1).alignment = ALIGN_LEFT;
}

function applyDataRow(
  ws: import('exceljs').Worksheet,
  row: number,
  cols: number,
  isAlt: boolean,
) {
  for (let c = 1; c <= cols; c++) {
    const cell = ws.getCell(row, c);
    cell.font = FONT_DATA;
    cell.border = BORDERS_ALL;
    cell.fill = isAlt ? FILL_SURFACE : FILL_WHITE;
    cell.alignment = c === 1 ? ALIGN_LEFT : ALIGN_RIGHT;
  }
}

function applySummaryRow(
  ws: import('exceljs').Worksheet,
  row: number,
  cols: number,
) {
  for (let c = 1; c <= cols; c++) {
    const cell = ws.getCell(row, c);
    cell.font = FONT_BOLD;
    cell.border = { ...BORDERS_ALL, top: BORDER_MED, bottom: BORDER_MED };
    cell.fill = FILL_GREEN;
    cell.alignment = c === 1 ? ALIGN_LEFT : ALIGN_RIGHT;
  }
}

// ── Main Export ──────────────────────────────────────────────────────
export async function exportToExcel(data: ExportData) {
  const ExcelJS = (await import('exceljs')).default;
  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'F&B Validator — validator.vn';
  workbook.created = new Date();

  const L = data.locale === 'en' ? EN_LABELS : VI_LABELS;
  const modelName = data.model ? MODELS[data.model].name : 'N/A';
  const today = new Date().toLocaleDateString(data.locale === 'en' ? 'en-US' : 'vi-VN');
  const totalInv = data.results.totalInvestment;

  // ════════════════════════════════════════════════════════════════════
  // SHEET 1: TỔNG QUAN
  // ════════════════════════════════════════════════════════════════════
  const ws1 = workbook.addWorksheet(data.locale === 'en' ? 'Overview' : 'Tổng quan');
  ws1.columns = [{ width: 28 }, { width: 22 }, { width: 28 }, { width: 22 }];

  // Title row
  ws1.mergeCells('A1:D1');
  const titleCell = ws1.getCell('A1');
  titleCell.value = L.reportTitle;
  titleCell.font = FONT_TITLE;
  titleCell.fill = FILL_DARK;
  titleCell.alignment = { horizontal: 'center', vertical: 'middle' };
  ws1.getRow(1).height = 36;
  // Fill merged area
  for (let c = 2; c <= 4; c++) { ws1.getCell(1, c).fill = FILL_DARK; }

  // Subtitle
  ws1.mergeCells('A2:D2');
  const subCell = ws1.getCell('A2');
  subCell.value = L.subtitle;
  subCell.font = FONT_SUBTITLE;
  subCell.fill = FILL_DARK;
  subCell.alignment = { horizontal: 'center', vertical: 'middle' };
  for (let c = 2; c <= 4; c++) { ws1.getCell(2, c).fill = FILL_DARK; }

  // Date
  ws1.mergeCells('A3:D3');
  const dateCell = ws1.getCell('A3');
  dateCell.value = `${L.dateLabel}: ${today}`;
  dateCell.font = { ...FONT_SUBTITLE, italic: true };
  dateCell.fill = FILL_DARK;
  dateCell.alignment = { horizontal: 'center', vertical: 'middle' };
  for (let c = 2; c <= 4; c++) { ws1.getCell(3, c).fill = FILL_DARK; }

  let r = 5;

  // ── Section: Model Info ──
  ws1.mergeCells(`A${r}:D${r}`);
  ws1.getCell(`A${r}`).value = L.modelInfo;
  ws1.getCell(`A${r}`).font = FONT_SECTION;
  ws1.getCell(`A${r}`).border = { left: { style: 'medium', color: { argb: GREEN } }, bottom: BORDER_THIN };
  r++;

  const modelRows: [string, string | number, string, string | number][] = [
    [L.model, modelName, L.city, L.cityNames[data.city] || data.city],
    [L.sqm, `${data.sqm} m²`, L.area, L.areaNames[data.area] || data.area],
    [L.seats, data.seats, L.operating, `${data.daysPerWeek} ${L.daysWeek}`],
    [L.salesChannels, `Dine-in ${data.channels[0]}% | Takeaway ${data.channels[1]}% | Delivery ${data.channels[2]}%`, '', ''],
  ];

  modelRows.forEach((row, i) => {
    ws1.getRow(r).values = row;
    ws1.getCell(r, 1).font = FONT_LABEL;
    ws1.getCell(r, 2).font = FONT_BOLD;
    ws1.getCell(r, 3).font = FONT_LABEL;
    ws1.getCell(r, 4).font = FONT_BOLD;
    for (let c = 1; c <= 4; c++) {
      ws1.getCell(r, c).border = BORDERS_ALL;
      ws1.getCell(r, c).fill = i % 2 === 0 ? FILL_WHITE : FILL_SURFACE;
    }
    r++;
  });
  r++;

  // ── Section: Score ──
  ws1.mergeCells(`A${r}:D${r}`);
  ws1.getCell(`A${r}`).value = L.feasibilityScore;
  ws1.getCell(`A${r}`).font = FONT_SECTION;
  ws1.getCell(`A${r}`).border = { left: { style: 'medium', color: { argb: GREEN } }, bottom: BORDER_THIN };
  r++;

  const score = data.results.score;
  const scoreText = score >= 70 ? L.highFeasibility : score >= 50 ? L.needsImprovement : L.highRisk;
  const scoreFill = score >= 70 ? FILL_GREEN : score >= 50 ? FILL_YELLOW : FILL_RED;
  ws1.getRow(r).values = [L.totalScore, `${score}/100`, L.assessment, scoreText];
  ws1.getCell(r, 1).font = FONT_LABEL;
  ws1.getCell(r, 2).font = { ...FONT_BOLD, size: 14 };
  ws1.getCell(r, 3).font = FONT_LABEL;
  ws1.getCell(r, 4).font = FONT_BOLD;
  for (let c = 1; c <= 4; c++) {
    ws1.getCell(r, c).border = BORDERS_ALL;
    ws1.getCell(r, c).fill = scoreFill;
  }
  r += 2;

  // ── Section: Key KPIs ──
  ws1.mergeCells(`A${r}:D${r}`);
  ws1.getCell(`A${r}`).value = L.mainKpis;
  ws1.getCell(`A${r}`).font = FONT_SECTION;
  ws1.getCell(`A${r}`).border = { left: { style: 'medium', color: { argb: GREEN } }, bottom: BORDER_THIN };
  r++;

  const sm = data.results.stableMonth;
  const kpiRows: [string, number | string, string, number | string][] = [
    [L.grossRevMonth, n(sm.grossRev), L.netRevMonth, n(sm.netRev)],
    [L.grossProfitMonth, n(sm.grossProfit), L.netProfitMonth, n(sm.netProfit)],
    [L.grossMargin, sm.grossMargin / 100, L.netMargin, sm.netMargin / 100],
    [L.paybackPeriod, data.results.paybackMonth ? `${data.results.paybackMonth} ${L.months}` : L.moreThan12, L.cashReserve, `${data.results.workingCapMonths.toFixed(1)} ${L.monthsUnit}`],
    [L.bepRevMonth, n(data.results.bepRevenue === Infinity ? 0 : data.results.bepRevenue), L.bepCustDay, data.results.bepCustomersDay === Infinity ? 'N/A' : data.results.bepCustomersDay],
  ];

  kpiRows.forEach((row, i) => {
    ws1.getRow(r).values = row;
    ws1.getCell(r, 1).font = FONT_LABEL;
    ws1.getCell(r, 2).font = FONT_GREEN;
    ws1.getCell(r, 3).font = FONT_LABEL;
    ws1.getCell(r, 4).font = FONT_GREEN;
    for (let c = 1; c <= 4; c++) {
      ws1.getCell(r, c).border = BORDERS_ALL;
      ws1.getCell(r, c).fill = i % 2 === 0 ? FILL_WHITE : FILL_SURFACE;
    }
    // Number format for VND values
    if (typeof row[1] === 'number' && i !== 2) { ws1.getCell(r, 2).numFmt = VND_FMT; }
    if (typeof row[3] === 'number' && i !== 2) { ws1.getCell(r, 4).numFmt = VND_FMT; }
    // Percentage format
    if (i === 2) {
      ws1.getCell(r, 2).numFmt = PCT_FMT;
      ws1.getCell(r, 4).numFmt = PCT_FMT;
    }
    r++;
  });
  r++;

  // ── Section: Cost Health ──
  ws1.mergeCells(`A${r}:D${r}`);
  ws1.getCell(`A${r}`).value = L.costHealth;
  ws1.getCell(`A${r}`).font = FONT_SECTION;
  ws1.getCell(`A${r}`).border = { left: { style: 'medium', color: { argb: GREEN } }, bottom: BORDER_THIN };
  r++;

  const healthRows: [string, number, string, string][] = [
    [L.rentRatio, data.results.rentRatio / 100, L.benchmark, `≤ 20% ${L.good}`],
    [L.laborRatio, data.results.laborRatio / 100, L.benchmark, `≤ 30% ${L.good}`],
    [L.foodCost, data.results.cogsPct / 100, L.benchmark, `≤ 35% ${L.good}`],
    [L.primeCost, data.results.primeCost / 100, L.benchmark, `≤ 65% ${L.good}`],
  ];

  const healthThresholds = [0.20, 0.30, 0.35, 0.65];
  const healthWarns = [0.25, 0.35, 0.40, 0.70];

  healthRows.forEach((row, i) => {
    ws1.getRow(r).values = row;
    ws1.getCell(r, 1).font = FONT_LABEL;
    ws1.getCell(r, 2).font = FONT_BOLD;
    ws1.getCell(r, 2).numFmt = PCT_FMT;
    ws1.getCell(r, 3).font = FONT_LABEL;
    ws1.getCell(r, 4).font = FONT_DATA;
    // Color coding based on threshold
    const val = row[1];
    const rowFill = val <= healthThresholds[i] ? FILL_GREEN : val <= healthWarns[i] ? FILL_YELLOW : FILL_RED;
    for (let c = 1; c <= 4; c++) {
      ws1.getCell(r, c).border = BORDERS_ALL;
      ws1.getCell(r, c).fill = rowFill;
    }
    r++;
  });

  // ════════════════════════════════════════════════════════════════════
  // SHEET 2: VỐN ĐẦU TƯ (with formulas)
  // ════════════════════════════════════════════════════════════════════
  const ws2 = workbook.addWorksheet(data.locale === 'en' ? 'Investment' : 'Vốn đầu tư');
  ws2.columns = [{ width: 38 }, { width: 22 }, { width: 22 }];

  // Title
  ws2.mergeCells('A1:C1');
  ws2.getCell('A1').value = L.investDetail;
  ws2.getCell('A1').font = FONT_TITLE;
  ws2.getCell('A1').fill = FILL_DARK;
  ws2.getCell('A1').alignment = { horizontal: 'center', vertical: 'middle' };
  ws2.getRow(1).height = 36;
  for (let c = 2; c <= 3; c++) ws2.getCell(1, c).fill = FILL_DARK;

  r = 3;
  // Table header
  ws2.getRow(r).values = [L.item, L.detail, L.amount];
  applyTableHeader(ws2, r, 3);
  r++;

  // Deposit
  ws2.getRow(r).values = [L.depositLabel, `${data.depositMonths} ${L.monthsDeposit}`, n(data.deposit)];
  applyDataRow(ws2, r, 3, false);
  ws2.getCell(r, 3).numFmt = VND_FMT;
  r++;
  r++; // blank row

  const invGroups: [string, DynItem[]][] = [
    [L.groupMatbang, data.invMatbang],
    [L.groupXaydung, data.invXaydung],
    [L.groupThietbi, data.invThietbi],
    [L.groupKhac, data.invKhac],
  ];

  const subtotalCells: string[] = [];

  invGroups.forEach(([label, items]) => {
    // Group header
    ws2.mergeCells(`A${r}:C${r}`);
    ws2.getCell(`A${r}`).value = label;
    ws2.getCell(`A${r}`).font = FONT_SECTION;
    ws2.getCell(`A${r}`).fill = FILL_SURFACE;
    ws2.getCell(`A${r}`).border = { left: { style: 'medium', color: { argb: GREEN } }, bottom: BORDER_THIN };
    for (let c = 2; c <= 3; c++) ws2.getCell(r, c).fill = FILL_SURFACE;
    r++;

    const startRow = r;

    if (items.length === 0) {
      ws2.getRow(r).values = [`  ${L.noItems}`, '', 0];
      applyDataRow(ws2, r, 3, false);
      ws2.getCell(r, 3).numFmt = VND_FMT;
      r++;
    } else {
      items.forEach((item, i) => {
        ws2.getRow(r).values = [`  ${item.name || '(N/A)'}`, '', n(item.amount)];
        applyDataRow(ws2, r, 3, i % 2 !== 0);
        ws2.getCell(r, 3).numFmt = VND_FMT;
        r++;
      });
    }

    const endRow = r - 1;

    // Subtotal row with SUM formula
    ws2.getRow(r).values = [`  ${L.subtotal} ${label.toLowerCase()}`, '', null];
    ws2.getCell(r, 3).value = { formula: `SUM(C${startRow}:C${endRow})`, result: n(items.reduce((s, i) => s + i.amount, 0)) };
    ws2.getCell(r, 3).numFmt = VND_FMT;
    applySummaryRow(ws2, r, 3);
    subtotalCells.push(`C${r}`);
    r++;
    r++; // blank row
  });

  // Working capital
  ws2.getRow(r).values = [L.workingCapital, '', n(data.workingCap)];
  applyDataRow(ws2, r, 3, false);
  ws2.getCell(r, 1).font = FONT_BOLD;
  ws2.getCell(r, 3).numFmt = VND_FMT;
  const wcRow = r;
  r++;
  r++;

  // Grand total with formula referencing deposit + subtotals + working capital
  const depositRow = 4; // row where deposit amount is
  ws2.getRow(r).values = [L.totalInvestment, '', null];
  const totalFormula = `C${depositRow}+${subtotalCells.join('+')}+C${wcRow}`;
  ws2.getCell(r, 3).value = { formula: totalFormula, result: n(totalInv) };
  ws2.getCell(r, 3).numFmt = VND_FMT;
  for (let c = 1; c <= 3; c++) {
    ws2.getCell(r, c).font = { ...FONT_BOLD, size: 12, color: { argb: WHITE } };
    ws2.getCell(r, c).fill = FILL_DARK;
    ws2.getCell(r, c).border = BORDERS_ALL;
    ws2.getCell(r, c).alignment = c === 1 ? ALIGN_LEFT : ALIGN_RIGHT;
  }

  // ════════════════════════════════════════════════════════════════════
  // SHEET 3: DOANH THU & CHI PHÍ
  // ════════════════════════════════════════════════════════════════════
  const ws3 = workbook.addWorksheet(data.locale === 'en' ? 'Revenue & Costs' : 'Doanh thu & Chi phí');
  ws3.columns = [{ width: 38 }, { width: 20 }, { width: 22 }];

  // Title
  ws3.mergeCells('A1:C1');
  ws3.getCell('A1').value = L.revCostStructure;
  ws3.getCell('A1').font = FONT_TITLE;
  ws3.getCell('A1').fill = FILL_DARK;
  ws3.getCell('A1').alignment = { horizontal: 'center', vertical: 'middle' };
  ws3.getRow(1).height = 36;
  for (let c = 2; c <= 3; c++) ws3.getCell(1, c).fill = FILL_DARK;

  r = 3;

  // ── Ticket structure ──
  ws3.mergeCells(`A${r}:C${r}`);
  ws3.getCell(`A${r}`).value = L.avgTicketStructure;
  ws3.getCell(`A${r}`).font = FONT_SECTION;
  ws3.getCell(`A${r}`).border = { left: { style: 'medium', color: { argb: GREEN } }, bottom: BORDER_THIN };
  for (let c = 2; c <= 3; c++) ws3.getCell(r, c).fill = FILL_WHITE;
  r++;

  ws3.getRow(r).values = [L.item, '', L.price];
  applyTableHeader(ws3, r, 3);
  r++;

  const ticketStartRow = r;
  data.ticketItems.forEach((item, i) => {
    ws3.getRow(r).values = [`  ${item.name || '(N/A)'}`, '', n(item.price)];
    applyDataRow(ws3, r, 3, i % 2 !== 0);
    ws3.getCell(r, 3).numFmt = VND_FMT;
    r++;
  });
  const ticketEndRow = r - 1;

  // Ticket total with SUM formula
  ws3.getRow(r).values = [L.avgTicketTotal, '', null];
  ws3.getCell(r, 3).value = { formula: `SUM(C${ticketStartRow}:C${ticketEndRow})`, result: n(data.avgTicket) };
  ws3.getCell(r, 3).numFmt = VND_FMT;
  applySummaryRow(ws3, r, 3);
  r += 2;

  // ── Customer forecast ──
  ws3.mergeCells(`A${r}:C${r}`);
  ws3.getCell(`A${r}`).value = L.custForecast;
  ws3.getCell(`A${r}`).font = FONT_SECTION;
  ws3.getCell(`A${r}`).border = { left: { style: 'medium', color: { argb: GREEN } }, bottom: BORDER_THIN };
  for (let c = 2; c <= 3; c++) ws3.getCell(r, c).fill = FILL_WHITE;
  r++;

  ws3.getRow(r).values = ['', L.weekday, L.weekend];
  applyTableHeader(ws3, r, 3);
  r++;

  ws3.getRow(r).values = [L.totalCustDay, data.custWeekday, data.custWeekend];
  applyDataRow(ws3, r, 3, false);
  ws3.getCell(r, 1).font = FONT_BOLD;
  ws3.getCell(r, 2).numFmt = '#,##0';
  ws3.getCell(r, 3).numFmt = '#,##0';
  r += 2;

  // ── Ramp-up ──
  ws3.mergeCells(`A${r}:C${r}`);
  ws3.getCell(`A${r}`).value = L.rampUp;
  ws3.getCell(`A${r}`).font = FONT_SECTION;
  ws3.getCell(`A${r}`).border = { left: { style: 'medium', color: { argb: GREEN } }, bottom: BORDER_THIN };
  for (let c = 2; c <= 3; c++) ws3.getCell(r, c).fill = FILL_WHITE;
  r++;

  ws3.getRow(r).values = [L.monthLabel, L.factor, L.capacity];
  applyTableHeader(ws3, r, 3);
  r++;

  data.rampFactors.forEach((f, i) => {
    ws3.getRow(r).values = [`${L.monthLabel} ${i + 1}`, f, f];
    applyDataRow(ws3, r, 3, i % 2 !== 0);
    ws3.getCell(r, 3).numFmt = '0%';
    r++;
  });
  r++;

  // ── Staff ──
  ws3.mergeCells(`A${r}:C${r}`);
  ws3.getCell(`A${r}`).value = L.staffLabel;
  ws3.getCell(`A${r}`).font = FONT_SECTION;
  ws3.getCell(`A${r}`).border = { left: { style: 'medium', color: { argb: GREEN } }, bottom: BORDER_THIN };
  for (let c = 2; c <= 3; c++) ws3.getCell(r, c).fill = FILL_WHITE;
  r++;

  ws3.getRow(r).values = [L.position, L.count, L.salary];
  applyTableHeader(ws3, r, 3);
  r++;

  const staffStartRow = r;
  data.staff.forEach((row, i) => {
    // salary per position = count * salary, but show salary/person in col C, count in col B
    ws3.getRow(r).values = [row.pos, row.count, n(row.salary)];
    applyDataRow(ws3, r, 3, i % 2 !== 0);
    ws3.getCell(r, 2).alignment = ALIGN_CENTER;
    ws3.getCell(r, 3).numFmt = VND_FMT;
    r++;
  });

  // Total wages: SUM of (count * salary) for each row
  ws3.getRow(r).values = [L.totalWages, '', n(data.staffTotal)];
  applySummaryRow(ws3, r, 3);
  ws3.getCell(r, 3).numFmt = VND_FMT;
  r++;

  if (data.bhxhOn) {
    ws3.getRow(r).values = [L.bhxhLabel, '', n(data.staffTotal * 0.275)];
    applyDataRow(ws3, r, 3, false);
    ws3.getCell(r, 1).font = FONT_BOLD;
    ws3.getCell(r, 3).numFmt = VND_FMT;
    r++;
  }
  r++;

  // ── Cost params ──
  ws3.mergeCells(`A${r}:C${r}`);
  ws3.getCell(`A${r}`).value = L.costParams;
  ws3.getCell(`A${r}`).font = FONT_SECTION;
  ws3.getCell(`A${r}`).border = { left: { style: 'medium', color: { argb: GREEN } }, bottom: BORDER_THIN };
  for (let c = 2; c <= 3; c++) ws3.getCell(r, c).fill = FILL_WHITE;
  r++;

  const costParamRows: [string, string | number, string][] = [
    [L.cogsLabel, data.cogsPct / 100, ''],
    [L.wasteLabel, data.wastePct / 100, ''],
    [L.deliveryCommLabel, data.deliveryCommPct / 100, ''],
    [L.rentLabel, '', String(n(data.rent))],
  ];

  costParamRows.forEach((row, i) => {
    ws3.getRow(r).values = [row[0], row[1], row[1] ? '' : n(data.rent)];
    applyDataRow(ws3, r, 3, i % 2 !== 0);
    ws3.getCell(r, 1).font = FONT_BOLD;
    if (typeof row[1] === 'number') {
      ws3.getCell(r, 2).numFmt = PCT_FMT;
    }
    if (i === 3) {
      ws3.getCell(r, 3).numFmt = VND_FMT;
    }
    r++;
  });
  r++;

  // ── Fixed other costs ──
  ws3.mergeCells(`A${r}:C${r}`);
  ws3.getCell(`A${r}`).value = L.fixedOtherLabel;
  ws3.getCell(`A${r}`).font = FONT_SECTION;
  ws3.getCell(`A${r}`).border = { left: { style: 'medium', color: { argb: GREEN } }, bottom: BORDER_THIN };
  for (let c = 2; c <= 3; c++) ws3.getCell(r, c).fill = FILL_WHITE;
  r++;

  const fixedStartRow = r;
  data.fixedOther.forEach((item, i) => {
    ws3.getRow(r).values = [`  ${item.name || '(N/A)'}`, '', n(item.amount)];
    applyDataRow(ws3, r, 3, i % 2 !== 0);
    ws3.getCell(r, 3).numFmt = VND_FMT;
    r++;
  });
  const fixedEndRow = r - 1;

  ws3.getRow(r).values = [L.total, '', null];
  if (data.fixedOther.length > 0) {
    ws3.getCell(r, 3).value = { formula: `SUM(C${fixedStartRow}:C${fixedEndRow})`, result: n(data.fixedOther.reduce((s, i) => s + i.amount, 0)) };
  } else {
    ws3.getCell(r, 3).value = 0;
  }
  ws3.getCell(r, 3).numFmt = VND_FMT;
  applySummaryRow(ws3, r, 3);
  r += 2;

  // ── Variable other costs ──
  ws3.mergeCells(`A${r}:C${r}`);
  ws3.getCell(`A${r}`).value = L.varOtherLabel;
  ws3.getCell(`A${r}`).font = FONT_SECTION;
  ws3.getCell(`A${r}`).border = { left: { style: 'medium', color: { argb: GREEN } }, bottom: BORDER_THIN };
  for (let c = 2; c <= 3; c++) ws3.getCell(r, c).fill = FILL_WHITE;
  r++;

  const varStartRow = r;
  data.varOther.forEach((item, i) => {
    ws3.getRow(r).values = [`  ${item.name || '(N/A)'}`, '', n(item.amount)];
    applyDataRow(ws3, r, 3, i % 2 !== 0);
    ws3.getCell(r, 3).numFmt = VND_FMT;
    r++;
  });
  const varEndRow = r - 1;

  ws3.getRow(r).values = [L.total, '', null];
  if (data.varOther.length > 0) {
    ws3.getCell(r, 3).value = { formula: `SUM(C${varStartRow}:C${varEndRow})`, result: n(data.varOther.reduce((s, i) => s + i.amount, 0)) };
  } else {
    ws3.getCell(r, 3).value = 0;
  }
  ws3.getCell(r, 3).numFmt = VND_FMT;
  applySummaryRow(ws3, r, 3);

  // ════════════════════════════════════════════════════════════════════
  // SHEET 4: LÃI LỖ 12 THÁNG (formulas!)
  // ════════════════════════════════════════════════════════════════════
  const ws4 = workbook.addWorksheet(data.locale === 'en' ? 'P&L 12 Months' : 'Lãi lỗ 12 tháng');
  ws4.columns = [
    { width: 26 },
    ...Array(12).fill(null).map(() => ({ width: 15 })),
    { width: 17 },
  ];

  // Title
  ws4.mergeCells('A1:N1');
  ws4.getCell('A1').value = L.pnlTitle;
  ws4.getCell('A1').font = FONT_TITLE;
  ws4.getCell('A1').fill = FILL_DARK;
  ws4.getCell('A1').alignment = { horizontal: 'center', vertical: 'middle' };
  ws4.getRow(1).height = 36;
  for (let c = 2; c <= 14; c++) ws4.getCell(1, c).fill = FILL_DARK;

  // Header row
  r = 3;
  const pnlHeaders = [L.pnlItem, ...[1,2,3,4,5,6,7,8,9,10,11,12].map(m => `T${m}`), L.annualTotal];
  ws4.getRow(r).values = pnlHeaders;
  applyTableHeader(ws4, r, 14);
  // Center month headers
  for (let c = 2; c <= 14; c++) ws4.getCell(r, c).alignment = ALIGN_CENTER;

  // Freeze header
  ws4.views = [{ state: 'frozen', xSplit: 1, ySplit: 3 }];

  // P&L rows — we'll lay down values then formulas
  // Row layout:
  // r+1: Gross revenue (values — these are inputs)
  // r+2: Delivery commission = formula
  // r+3: Net revenue = formula
  // r+4: COGS = formula
  // r+5: Waste = formula
  // r+6: Gross profit = formula
  // r+7: Rent (constant)
  // r+8: Staff (constant)
  // r+9: BHXH (constant)
  // r+10: Fixed other (constant)
  // r+11: Variable other (constant)
  // r+12: Net profit = formula
  // r+13: Cumulative = formula

  const pnlLabels = [
    L.grossRev, L.deliveryComm, L.netRev, L.cogs, L.waste, L.grossProfitLabel,
    L.rentCost, L.staffCost, L.bhxhCost, L.fixedOtherCost, L.varOtherCost,
    L.netProfitLabel, L.cumulative,
  ];

  const months = data.results.months;
  const DATA_START = r + 1; // row 4

  // Write all 13 rows with values first (for result cache)
  const pnlFields: (keyof typeof months[0])[] = [
    'grossRev', 'deliveryComm', 'netRev', 'cogs', 'waste', 'grossProfit',
    'rent', 'staffTotal', 'bhxh', 'fixedOther', 'varOther',
    'netProfit', 'cumulativeProfit',
  ];

  pnlFields.forEach((field, fi) => {
    const row = DATA_START + fi;
    ws4.getCell(row, 1).value = pnlLabels[fi];
    ws4.getCell(row, 1).font = FONT_DATA;
    ws4.getCell(row, 1).alignment = ALIGN_LEFT;
    ws4.getCell(row, 1).border = BORDERS_ALL;

    for (let m = 0; m < 12; m++) {
      const col = m + 2; // B=2 ... M=13
      const cell = ws4.getCell(row, col);
      cell.border = BORDERS_ALL;
      cell.alignment = ALIGN_RIGHT;
      cell.numFmt = VND_FMT;
      cell.font = FONT_DATA;
    }

    // Annual total column (N=14)
    const totalCell = ws4.getCell(row, 14);
    totalCell.border = BORDERS_ALL;
    totalCell.alignment = ALIGN_RIGHT;
    totalCell.numFmt = VND_FMT;
    totalCell.font = FONT_BOLD;
    totalCell.fill = FILL_SURFACE;
  });

  // Now fill values and formulas
  // Row indices
  const R_GROSS = DATA_START;
  const R_DELCOMM = DATA_START + 1;
  const R_NET = DATA_START + 2;
  const R_COGS = DATA_START + 3;
  const R_WASTE = DATA_START + 4;
  const R_GPROFIT = DATA_START + 5;
  const R_RENT = DATA_START + 6;
  const R_STAFF = DATA_START + 7;
  const R_BHXH = DATA_START + 8;
  const R_FIXED = DATA_START + 9;
  const R_VAR = DATA_START + 10;
  const R_NPROFIT = DATA_START + 11;
  const R_CUM = DATA_START + 12;

  const deliveryPctRatio = data.results.deliveryPct / 100; // actual delivery channel %
  const deliveryCommRatio = data.deliveryCommPct / 100;
  const cogsRatio = data.cogsPct / 100;
  const wasteRatio = data.wastePct / 100;

  for (let m = 0; m < 12; m++) {
    const col = m + 2;
    const C = colLetter(col);
    const md = months[m];

    // Gross revenue (input value — this is the base)
    ws4.getCell(R_GROSS, col).value = n(md.grossRev);

    // Delivery commission = grossRev * deliveryPct * commPct
    ws4.getCell(R_DELCOMM, col).value = {
      formula: `${C}${R_GROSS}*${deliveryPctRatio}*${deliveryCommRatio}`,
      result: n(md.deliveryComm),
    };

    // Net revenue = grossRev - deliveryComm
    ws4.getCell(R_NET, col).value = {
      formula: `${C}${R_GROSS}-${C}${R_DELCOMM}`,
      result: n(md.netRev),
    };

    // COGS = netRev * cogsPct
    ws4.getCell(R_COGS, col).value = {
      formula: `${C}${R_NET}*${cogsRatio}`,
      result: n(md.cogs),
    };

    // Waste = COGS * wastePct
    ws4.getCell(R_WASTE, col).value = {
      formula: `${C}${R_COGS}*${wasteRatio}`,
      result: n(md.waste),
    };

    // Gross profit = netRev - cogs - waste
    ws4.getCell(R_GPROFIT, col).value = {
      formula: `${C}${R_NET}-${C}${R_COGS}-${C}${R_WASTE}`,
      result: n(md.grossProfit),
    };

    // Fixed costs (constants per month)
    ws4.getCell(R_RENT, col).value = n(md.rent);
    ws4.getCell(R_STAFF, col).value = n(md.staffTotal);
    ws4.getCell(R_BHXH, col).value = n(md.bhxh);
    ws4.getCell(R_FIXED, col).value = n(md.fixedOther);
    ws4.getCell(R_VAR, col).value = n(md.varOther);

    // Net profit = grossProfit - rent - staff - bhxh - fixedOther - varOther
    ws4.getCell(R_NPROFIT, col).value = {
      formula: `${C}${R_GPROFIT}-${C}${R_RENT}-${C}${R_STAFF}-${C}${R_BHXH}-${C}${R_FIXED}-${C}${R_VAR}`,
      result: n(md.netProfit),
    };

    // Cumulative: T1 = netProfit - totalInvestment, Tn = prev + netProfit
    if (m === 0) {
      ws4.getCell(R_CUM, col).value = {
        formula: `${C}${R_NPROFIT}-${n(totalInv)}`,
        result: n(md.cumulativeProfit),
      };
    } else {
      const prevC = colLetter(col - 1);
      ws4.getCell(R_CUM, col).value = {
        formula: `${prevC}${R_CUM}+${C}${R_NPROFIT}`,
        result: n(md.cumulativeProfit),
      };
    }
  }

  // Annual total column (N=14) with SUM formulas
  pnlFields.forEach((field, fi) => {
    const row = DATA_START + fi;
    if (field === 'cumulativeProfit') {
      // Show last month's cumulative, not sum
      ws4.getCell(row, 14).value = { formula: `M${row}`, result: n(months[11].cumulativeProfit) };
    } else {
      ws4.getCell(row, 14).value = { formula: `SUM(B${row}:M${row})`, result: n(months.reduce((s, m) => s + (m[field] as number), 0)) };
    }
  });

  // Style special rows
  // Highlight revenue rows
  [R_GROSS, R_NET].forEach(row => {
    for (let c = 1; c <= 14; c++) ws4.getCell(row, c).font = FONT_BOLD;
  });

  // Highlight gross profit row
  for (let c = 1; c <= 14; c++) {
    ws4.getCell(R_GPROFIT, c).font = FONT_BOLD;
    ws4.getCell(R_GPROFIT, c).border = { ...BORDERS_ALL, bottom: BORDER_MED };
  }

  // Highlight net profit row
  for (let c = 1; c <= 14; c++) {
    ws4.getCell(R_NPROFIT, c).font = { ...FONT_BOLD, color: { argb: GREEN } };
    ws4.getCell(R_NPROFIT, c).fill = FILL_GREEN;
    ws4.getCell(R_NPROFIT, c).border = { ...BORDERS_ALL, top: BORDER_MED };
  }

  // Highlight cumulative row
  for (let c = 1; c <= 14; c++) {
    ws4.getCell(R_CUM, c).font = FONT_BOLD;
    ws4.getCell(R_CUM, c).border = { ...BORDERS_ALL, top: BORDER_MED, bottom: BORDER_MED };
  }

  // Zebra striping for cost rows
  [R_RENT, R_BHXH, R_FIXED].forEach(row => {
    for (let c = 1; c <= 14; c++) ws4.getCell(row, c).fill = FILL_SURFACE;
  });

  // Margin rows (below P&L)
  const marginStart = R_CUM + 2;

  ws4.getCell(marginStart, 1).value = L.grossMarginPct;
  ws4.getCell(marginStart, 1).font = FONT_BOLD;
  ws4.getCell(marginStart, 1).border = BORDERS_ALL;
  for (let m = 0; m < 12; m++) {
    const col = m + 2;
    const C = colLetter(col);
    ws4.getCell(marginStart, col).value = {
      formula: `IF(${C}${R_NET}=0,0,${C}${R_GPROFIT}/${C}${R_NET})`,
      result: months[m].grossMargin / 100,
    };
    ws4.getCell(marginStart, col).numFmt = PCT_FMT;
    ws4.getCell(marginStart, col).font = FONT_DATA;
    ws4.getCell(marginStart, col).border = BORDERS_ALL;
    ws4.getCell(marginStart, col).alignment = ALIGN_RIGHT;
  }
  ws4.getCell(marginStart, 14).value = '';
  ws4.getCell(marginStart, 14).border = BORDERS_ALL;

  ws4.getCell(marginStart + 1, 1).value = L.netMarginPct;
  ws4.getCell(marginStart + 1, 1).font = FONT_BOLD;
  ws4.getCell(marginStart + 1, 1).border = BORDERS_ALL;
  for (let m = 0; m < 12; m++) {
    const col = m + 2;
    const C = colLetter(col);
    ws4.getCell(marginStart + 1, col).value = {
      formula: `IF(${C}${R_NET}=0,0,${C}${R_NPROFIT}/${C}${R_NET})`,
      result: months[m].netMargin / 100,
    };
    ws4.getCell(marginStart + 1, col).numFmt = PCT_FMT;
    ws4.getCell(marginStart + 1, col).font = FONT_DATA;
    ws4.getCell(marginStart + 1, col).border = BORDERS_ALL;
    ws4.getCell(marginStart + 1, col).alignment = ALIGN_RIGHT;
  }
  ws4.getCell(marginStart + 1, 14).value = '';
  ws4.getCell(marginStart + 1, 14).border = BORDERS_ALL;

  // Conditional formatting: net profit rows — green if positive, red if negative
  ws4.addConditionalFormatting({
    ref: `B${R_NPROFIT}:N${R_NPROFIT}`,
    rules: [
      {
        type: 'cellIs',
        operator: 'greaterThan',
        formulae: [0],
        style: { font: { bold: true, color: { argb: '16A34A' } }, fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: GREEN_LIGHT } } },
        priority: 1,
      },
      {
        type: 'cellIs',
        operator: 'lessThan',
        formulae: [0],
        style: { font: { bold: true, color: { argb: 'DC2626' } }, fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: RED_LIGHT } } },
        priority: 2,
      },
    ],
  });

  // Conditional formatting on cumulative row
  ws4.addConditionalFormatting({
    ref: `B${R_CUM}:N${R_CUM}`,
    rules: [
      {
        type: 'cellIs',
        operator: 'greaterThan',
        formulae: [0],
        style: { font: { bold: true, color: { argb: '16A34A' } } },
        priority: 3,
      },
      {
        type: 'cellIs',
        operator: 'lessThan',
        formulae: [0],
        style: { font: { bold: true, color: { argb: 'DC2626' } } },
        priority: 4,
      },
    ],
  });

  // ════════════════════════════════════════════════════════════════════
  // SHEET 5: HÒA VỐN
  // ════════════════════════════════════════════════════════════════════
  const ws5 = workbook.addWorksheet(data.locale === 'en' ? 'Break-Even' : 'Hòa vốn');
  ws5.columns = [{ width: 30 }, { width: 22 }, { width: 22 }];

  // Title
  ws5.mergeCells('A1:C1');
  ws5.getCell('A1').value = L.bepTitle;
  ws5.getCell('A1').font = FONT_TITLE;
  ws5.getCell('A1').fill = FILL_DARK;
  ws5.getCell('A1').alignment = { horizontal: 'center', vertical: 'middle' };
  ws5.getRow(1).height = 36;
  for (let c = 2; c <= 3; c++) ws5.getCell(1, c).fill = FILL_DARK;

  r = 3;

  // Section: BEP Metrics
  ws5.mergeCells(`A${r}:C${r}`);
  ws5.getCell(`A${r}`).value = L.bepMetrics;
  ws5.getCell(`A${r}`).font = FONT_SECTION;
  ws5.getCell(`A${r}`).border = { left: { style: 'medium', color: { argb: GREEN } }, bottom: BORDER_THIN };
  for (let c = 2; c <= 3; c++) ws5.getCell(r, c).fill = FILL_WHITE;
  r++;

  const bepMetricRows: [string, number | string][] = [
    [L.bepRevMonthLabel, data.results.bepRevenue === Infinity ? L.notFeasible : n(data.results.bepRevenue)],
    [L.bepCustDayLabel, data.results.bepCustomersDay === Infinity ? L.notFeasible : data.results.bepCustomersDay],
    [L.totalFixedMonth, n(data.results.fixedMonthly)],
    [L.totalInvLabel, n(totalInv)],
    [L.paybackLabel, data.results.paybackMonth ? `${data.results.paybackMonth} ${L.months}` : L.moreThan12],
  ];

  bepMetricRows.forEach((row, i) => {
    ws5.getRow(r).values = [row[0], '', row[1]];
    ws5.getCell(r, 1).font = FONT_LABEL;
    ws5.getCell(r, 3).font = FONT_GREEN;
    if (typeof row[1] === 'number') ws5.getCell(r, 3).numFmt = VND_FMT;
    for (let c = 1; c <= 3; c++) {
      ws5.getCell(r, c).border = BORDERS_ALL;
      ws5.getCell(r, c).fill = i % 2 === 0 ? FILL_WHITE : FILL_SURFACE;
    }
    r++;
  });
  r++;

  // Section: Cash flow table
  ws5.mergeCells(`A${r}:C${r}`);
  ws5.getCell(`A${r}`).value = L.cashFlowCum;
  ws5.getCell(`A${r}`).font = FONT_SECTION;
  ws5.getCell(`A${r}`).border = { left: { style: 'medium', color: { argb: GREEN } }, bottom: BORDER_THIN };
  for (let c = 2; c <= 3; c++) ws5.getCell(r, c).fill = FILL_WHITE;
  r++;

  // Header
  ws5.getRow(r).values = [L.monthLabel, L.netProfitShort, L.cumulativeShort];
  applyTableHeader(ws5, r, 3);
  r++;

  // Initial investment row
  ws5.getRow(r).values = [L.initialInvestment, '', n(-totalInv)];
  applyDataRow(ws5, r, 3, false);
  ws5.getCell(r, 1).font = FONT_BOLD;
  ws5.getCell(r, 3).numFmt = VND_FMT;
  const invRow = r;
  r++;

  // Monthly cash flow with formulas
  months.forEach((md, i) => {
    ws5.getCell(r, 1).value = `${L.monthLabel} ${md.month}`;
    ws5.getCell(r, 2).value = n(md.netProfit);
    // Cumulative formula: first month = investment + netProfit, rest = prev + netProfit
    if (i === 0) {
      ws5.getCell(r, 3).value = {
        formula: `C${invRow}+B${r}`,
        result: n(md.cumulativeProfit),
      };
    } else {
      ws5.getCell(r, 3).value = {
        formula: `C${r - 1}+B${r}`,
        result: n(md.cumulativeProfit),
      };
    }
    applyDataRow(ws5, r, 3, i % 2 !== 0);
    ws5.getCell(r, 2).numFmt = VND_FMT;
    ws5.getCell(r, 3).numFmt = VND_FMT;
    r++;
  });

  // Conditional formatting on cumulative column
  const cfStartRow = invRow + 1;
  const cfEndRow = r - 1;
  ws5.addConditionalFormatting({
    ref: `C${cfStartRow}:C${cfEndRow}`,
    rules: [
      {
        type: 'cellIs',
        operator: 'greaterThan',
        formulae: [0],
        style: { font: { bold: true, color: { argb: '16A34A' } }, fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: GREEN_LIGHT } } },
        priority: 1,
      },
      {
        type: 'cellIs',
        operator: 'lessThan',
        formulae: [0],
        style: { font: { bold: true, color: { argb: 'DC2626' } }, fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: RED_LIGHT } } },
        priority: 2,
      },
    ],
  });

  // ════════════════════════════════════════════════════════════════════
  // Generate and download
  // ════════════════════════════════════════════════════════════════════
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });

  const safeModel = modelName.replace(/[^a-zA-Z0-9\u00C0-\u024F\u1E00-\u1EFF ]/g, '').trim().replace(/\s+/g, '_');
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const filename = `FnB_Validator_${safeModel}_${dateStr}.xlsx`;

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
