import * as XLSX from 'xlsx';
import type { CalcResults, DynItem, StaffRow } from '@/types';
import { MODELS } from './constants';
import type { ModelKey } from '@/types';

interface ExportData {
  // Model info
  model: ModelKey | null;
  city: string;
  area: string;
  sqm: number;
  seats: number;
  daysPerWeek: number;
  channels: [number, number, number]; // dinein, takeaway, delivery

  // Investment
  deposit: number;
  depositMonths: number;
  rent: number;
  invMatbang: DynItem[];
  invXaydung: DynItem[];
  invThietbi: DynItem[];
  invKhac: DynItem[];
  workingCap: number;

  // Revenue
  ticketItems: { name: string; price: number }[];
  avgTicket: number;
  custWeekday: number;
  custWeekend: number;
  rampFactors: number[];

  // Costs
  staff: StaffRow[];
  staffTotal: number;
  bhxhOn: boolean;
  cogsPct: number;
  wastePct: number;
  deliveryCommPct: number;
  fixedOther: DynItem[];
  varOther: DynItem[];

  // Results
  results: CalcResults;
}

const CITY_NAMES: Record<string, string> = {
  hcm: 'TP. Hồ Chí Minh', hanoi: 'Hà Nội', danang: 'Đà Nẵng', other: 'Khác',
};
const AREA_NAMES: Record<string, string> = {
  center: 'Trung tâm', suburb: 'Ngoại ô', alley: 'Hẻm', cbd: 'CBD',
};

function n(v: number): number { return Math.round(v); }

// Note: SheetJS community edition does not support cell styling (cell.s).
// Styling requires xlsx-style or the pro version.

export function exportToExcel(data: ExportData) {
  const wb = XLSX.utils.book_new();
  const modelName = data.model ? MODELS[data.model].name : 'Chưa chọn';
  const today = new Date().toLocaleDateString('vi-VN');

  // ===== SHEET 1: TỔNG QUAN =====
  const summaryRows: (string | number | null)[][] = [];
  const sm = data.results.stableMonth;

  // Title
  summaryRows.push(['BÁO CÁO THẨM ĐỊNH MÔ HÌNH F&B']);
  summaryRows.push(['F&B Validator — fbvalidator.com']);
  summaryRows.push([`Ngày xuất: ${today}`]);
  summaryRows.push([]);

  // Model info
  summaryRows.push(['THÔNG TIN MÔ HÌNH', '', '', '']);
  summaryRows.push(['Mô hình', modelName, 'Thành phố', CITY_NAMES[data.city] || data.city]);
  summaryRows.push(['Diện tích', `${data.sqm} m²`, 'Khu vực', AREA_NAMES[data.area] || data.area]);
  summaryRows.push(['Số ghế', data.seats, 'Hoạt động', `${data.daysPerWeek} ngày/tuần`]);
  summaryRows.push(['Kênh bán', `Dine-in ${data.channels[0]}% | Takeaway ${data.channels[1]}% | Delivery ${data.channels[2]}%`, '', '']);
  summaryRows.push([]);

  // Score
  summaryRows.push(['ĐIỂM KHẢ THI', '', '', '']);
  summaryRows.push(['Tổng điểm', `${data.results.score}/100`, 'Đánh giá', data.results.score >= 70 ? 'Khả thi cao' : data.results.score >= 50 ? 'Cần cải thiện' : 'Rủi ro cao']);
  summaryRows.push([]);

  // KPIs
  summaryRows.push(['CHỈ SỐ CHÍNH (THÁNG ỔN ĐỊNH)', '', '', '']);
  summaryRows.push(['Doanh thu gộp/tháng', n(sm.grossRev), 'Doanh thu ròng/tháng', n(sm.netRev)]);
  summaryRows.push(['Lợi nhuận gộp/tháng', n(sm.grossProfit), 'Lợi nhuận ròng/tháng', n(sm.netProfit)]);
  summaryRows.push(['Biên lợi nhuận gộp', `${sm.grossMargin.toFixed(1)}%`, 'Biên lợi nhuận ròng', `${sm.netMargin.toFixed(1)}%`]);
  summaryRows.push(['Thời gian hoàn vốn', data.results.paybackMonth ? `${data.results.paybackMonth} tháng` : '>12 tháng', 'Dự phòng vốn', `${data.results.workingCapMonths.toFixed(1)} tháng`]);
  summaryRows.push(['Doanh thu hòa vốn/tháng', n(data.results.bepRevenue), 'Khách hòa vốn/ngày', data.results.bepCustomersDay === Infinity ? 'N/A' : data.results.bepCustomersDay]);
  summaryRows.push([]);

  // Health ratios
  summaryRows.push(['SỨC KHỎE CHI PHÍ', '', '', '']);
  summaryRows.push(['Tỷ lệ mặt bằng', `${data.results.rentRatio.toFixed(1)}%`, 'Benchmark', '≤ 20% tốt']);
  summaryRows.push(['Tỷ lệ nhân sự', `${data.results.laborRatio.toFixed(1)}%`, 'Benchmark', '≤ 30% tốt']);
  summaryRows.push(['Food cost', `${data.results.cogsPct.toFixed(1)}%`, 'Benchmark', '≤ 35% tốt']);
  summaryRows.push(['Prime cost', `${data.results.primeCost.toFixed(1)}%`, 'Benchmark', '≤ 65% tốt']);

  const ws1 = XLSX.utils.aoa_to_sheet(summaryRows);

  // Column widths
  ws1['!cols'] = [{ wch: 28 }, { wch: 22 }, { wch: 28 }, { wch: 22 }];

  // Merge title
  ws1['!merges'] = [
    { s: { r: 0, c: 0 }, e: { r: 0, c: 3 } },
    { s: { r: 1, c: 0 }, e: { r: 1, c: 3 } },
    { s: { r: 2, c: 0 }, e: { r: 2, c: 3 } },
  ];

  XLSX.utils.book_append_sheet(wb, ws1, 'Tổng quan');

  // ===== SHEET 2: CHI TIẾT ĐẦU TƯ =====
  const invRows: (string | number | null)[][] = [];

  invRows.push(['CHI TIẾT VỐN ĐẦU TƯ BAN ĐẦU']);
  invRows.push([]);

  // Deposit
  invRows.push(['Hạng mục', 'Chi tiết', 'Số tiền (VNĐ)']);
  invRows.push(['Đặt cọc mặt bằng', `${data.depositMonths} tháng`, n(data.deposit)]);
  invRows.push([]);

  // Investment groups
  const invGroups: [string, DynItem[]][] = [
    ['MẶT BẰNG', data.invMatbang],
    ['XÂY DỰNG & TRANG TRÍ', data.invXaydung],
    ['THIẾT BỊ', data.invThietbi],
    ['CHI PHÍ KHÁC', data.invKhac],
  ];

  invGroups.forEach(([label, items]) => {
    invRows.push([label, '', '']);
    if (items.length === 0) {
      invRows.push(['  (Không có)', '', 0]);
    } else {
      items.forEach(item => {
        invRows.push([`  ${item.name || '(Chưa đặt tên)'}`, '', n(item.amount)]);
      });
    }
    const total = items.reduce((s, i) => s + i.amount, 0);
    invRows.push([`  Tổng ${label.toLowerCase()}`, '', n(total)]);
    invRows.push([]);
  });

  // Working capital
  invRows.push(['VỐN LƯU ĐỘNG', '', n(data.workingCap)]);
  invRows.push([]);

  // Grand total
  const totalInv = data.results.totalInvestment;
  invRows.push(['TỔNG VỐN ĐẦU TƯ', '', n(totalInv)]);

  const ws2 = XLSX.utils.aoa_to_sheet(invRows);
  ws2['!cols'] = [{ wch: 35 }, { wch: 25 }, { wch: 22 }];
  ws2['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 2 } }];

  XLSX.utils.book_append_sheet(wb, ws2, 'Vốn đầu tư');

  // ===== SHEET 3: DOANH THU & CHI PHÍ =====
  const revRows: (string | number | null)[][] = [];

  revRows.push(['CẤU TRÚC DOANH THU & CHI PHÍ']);
  revRows.push([]);

  // Ticket
  revRows.push(['CẤU TRÚC GIÁ TRUNG BÌNH / KHÁCH', '', '']);
  revRows.push(['Hạng mục', '', 'Giá (VNĐ)']);
  data.ticketItems.forEach(item => {
    revRows.push([`  ${item.name || '(Chưa đặt tên)'}`, '', n(item.price)]);
  });
  revRows.push(['  Tổng ticket trung bình', '', n(data.avgTicket)]);
  revRows.push([]);

  // Customer matrix
  revRows.push(['LƯỢNG KHÁCH DỰ KIẾN / NGÀY', '', '']);
  revRows.push(['', 'Ngày thường', 'Cuối tuần']);
  revRows.push(['Tổng khách/ngày', data.custWeekday, data.custWeekend]);
  revRows.push([]);

  // Ramp factors
  revRows.push(['HỆ SỐ RAMP-UP 6 THÁNG ĐẦU', '', '']);
  revRows.push(['Tháng', 'Hệ số', '% công suất']);
  data.rampFactors.forEach((f, i) => {
    revRows.push([`Tháng ${i + 1}`, f, `${(f * 100).toFixed(0)}%`]);
  });
  revRows.push([]);

  // Staff
  revRows.push(['NHÂN SỰ', '', '']);
  revRows.push(['Vị trí', 'Số lượng', 'Lương/người (VNĐ)']);
  data.staff.forEach(row => {
    revRows.push([row.pos, row.count, n(row.salary)]);
  });
  revRows.push(['Tổng lương', '', n(data.staffTotal)]);
  if (data.bhxhOn) {
    revRows.push(['BHXH (27.5%)', '', n(data.staffTotal * 0.275)]);
  }
  revRows.push([]);

  // Cost params
  revRows.push(['THÔNG SỐ CHI PHÍ', '', '']);
  revRows.push(['Food cost (COGS)', `${data.cogsPct}%`, '']);
  revRows.push(['Hao hụt / waste', `${data.wastePct}%`, '']);
  revRows.push(['Hoa hồng delivery', `${data.deliveryCommPct}%`, '']);
  revRows.push(['Tiền thuê mặt bằng', '', n(data.rent)]);
  revRows.push([]);

  // Fixed other
  revRows.push(['CHI PHÍ CỐ ĐỊNH KHÁC', '', '']);
  data.fixedOther.forEach(item => {
    revRows.push([`  ${item.name || '(Chưa đặt tên)'}`, '', n(item.amount)]);
  });
  revRows.push(['  Tổng', '', n(data.fixedOther.reduce((s, i) => s + i.amount, 0))]);
  revRows.push([]);

  // Variable other
  revRows.push(['CHI PHÍ BIẾN ĐỔI KHÁC', '', '']);
  data.varOther.forEach(item => {
    revRows.push([`  ${item.name || '(Chưa đặt tên)'}`, '', n(item.amount)]);
  });
  revRows.push(['  Tổng', '', n(data.varOther.reduce((s, i) => s + i.amount, 0))]);

  const ws3 = XLSX.utils.aoa_to_sheet(revRows);
  ws3['!cols'] = [{ wch: 35 }, { wch: 20 }, { wch: 22 }];
  ws3['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 2 } }];

  XLSX.utils.book_append_sheet(wb, ws3, 'Doanh thu & Chi phí');

  // ===== SHEET 4: LÃI LỖ 12 THÁNG =====
  const pnlRows: (string | number | null | string)[][] = [];

  pnlRows.push(['BÁO CÁO LÃI LỖ DỰ KIẾN 12 THÁNG']);
  pnlRows.push([]);

  // Header
  pnlRows.push([
    'Hạng mục',
    'T1', 'T2', 'T3', 'T4', 'T5', 'T6',
    'T7', 'T8', 'T9', 'T10', 'T11', 'T12',
    'TỔNG NĂM',
  ]);

  const months = data.results.months;
  const sumField = (field: keyof typeof months[0]) =>
    months.reduce((s, m) => s + (m[field] as number), 0);

  const pnlFields: [string, keyof typeof months[0]][] = [
    ['Doanh thu gộp', 'grossRev'],
    ['(-) Hoa hồng delivery', 'deliveryComm'],
    ['Doanh thu ròng', 'netRev'],
    ['(-) Giá vốn (COGS)', 'cogs'],
    ['(-) Hao hụt', 'waste'],
    ['Lợi nhuận gộp', 'grossProfit'],
    ['(-) Thuê mặt bằng', 'rent'],
    ['(-) Nhân sự', 'staffTotal'],
    ['(-) BHXH', 'bhxh'],
    ['(-) CP cố định khác', 'fixedOther'],
    ['(-) CP biến đổi', 'varOther'],
    ['Lợi nhuận ròng', 'netProfit'],
    ['Lũy kế', 'cumulativeProfit'],
  ];

  pnlFields.forEach(([label, field]) => {
    const row: (string | number)[] = [label];
    months.forEach(m => row.push(n(m[field] as number)));
    // Cumulative profit: show last month value (not sum of running totals)
    if (field === 'cumulativeProfit') {
      row.push(n(months[months.length - 1].cumulativeProfit));
    } else {
      row.push(n(sumField(field)));
    }
    pnlRows.push(row);
  });

  // Margin rows
  pnlRows.push([]);
  const marginRow1: (string | number)[] = ['Biên LN gộp (%)'];
  months.forEach(m => marginRow1.push(`${m.grossMargin.toFixed(1)}%`));
  marginRow1.push('');
  pnlRows.push(marginRow1);

  const marginRow2: (string | number)[] = ['Biên LN ròng (%)'];
  months.forEach(m => marginRow2.push(`${m.netMargin.toFixed(1)}%`));
  marginRow2.push('');
  pnlRows.push(marginRow2);

  const ws4 = XLSX.utils.aoa_to_sheet(pnlRows);
  ws4['!cols'] = [
    { wch: 24 },
    ...Array(12).fill({ wch: 14 }),
    { wch: 16 },
  ];
  ws4['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 13 } }];

  XLSX.utils.book_append_sheet(wb, ws4, 'Lãi lỗ 12 tháng');

  // ===== SHEET 5: HÒA VỐN =====
  const bepRows: (string | number | null)[][] = [];

  bepRows.push(['PHÂN TÍCH HÒA VỐN']);
  bepRows.push([]);

  bepRows.push(['CHỈ SỐ HÒA VỐN', '', '']);
  bepRows.push(['Doanh thu hòa vốn/tháng', '', data.results.bepRevenue === Infinity ? 'Không khả thi' : n(data.results.bepRevenue)]);
  bepRows.push(['Số khách hòa vốn/ngày', '', data.results.bepCustomersDay === Infinity ? 'Không khả thi' : data.results.bepCustomersDay]);
  bepRows.push(['Tổng chi phí cố định/tháng', '', n(data.results.fixedMonthly)]);
  bepRows.push(['Tổng vốn đầu tư', '', n(data.results.totalInvestment)]);
  bepRows.push(['Thời gian hoàn vốn', '', data.results.paybackMonth ? `${data.results.paybackMonth} tháng` : '>12 tháng']);
  bepRows.push([]);

  // Cash flow table
  bepRows.push(['DÒNG TIỀN LŨY KẾ', '', '']);
  bepRows.push(['Tháng', 'LN ròng', 'Lũy kế']);
  bepRows.push(['Đầu tư ban đầu', '', n(-totalInv)]);
  months.forEach(m => {
    bepRows.push([`Tháng ${m.month}`, n(m.netProfit), n(m.cumulativeProfit)]);
  });

  const ws5 = XLSX.utils.aoa_to_sheet(bepRows);
  ws5['!cols'] = [{ wch: 30 }, { wch: 20 }, { wch: 22 }];
  ws5['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 2 } }];

  XLSX.utils.book_append_sheet(wb, ws5, 'Hòa vốn');

  // ===== Generate filename and download =====
  const safeModel = modelName.replace(/[^a-zA-Z0-9\u00C0-\u024F\u1E00-\u1EFF ]/g, '').trim();
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const filename = `FnB_Validator_${safeModel}_${dateStr}.xlsx`;

  XLSX.writeFile(wb, filename);
}
