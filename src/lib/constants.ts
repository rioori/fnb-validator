import type { FnBModel, ModelKey, ChecklistCategory, KBTopic, Expert } from '@/types';
import KNOWLEDGE_BASE from '@/i18n/data/vi/knowledge';
import EXPERTS_VI from '@/i18n/data/vi/experts';

export { KNOWLEDGE_BASE };
export const EXPERTS_DATA: Expert[] = EXPERTS_VI;

export const MODELS: Record<ModelKey, FnBModel> = {
  coffee: {
    name: 'Quán cà phê', icon: 'coffee', investRange: '200tr - 1.5 tỷ',
    desc: 'Từ cà phê cóc đến specialty. Biên lợi nhuận gộp cao (70-80%), nhưng cạnh tranh khốc liệt.',
    defaults: {
      sqm: 40, seats: 25, avg_ticket: 55000, cust_weekday: 80, cust_weekend: 130, food_cost_pct: 25, rent: 25000000, budget: 700000000,
      ticket_items: [['Cà phê', 45000], ['Trà / nước ép', 40000], ['Bánh ngọt', 35000], ['Sinh tố / đá xay', 50000]],
      cust_matrix: { wd: [20, 25, 10, 25], we: [30, 35, 20, 45] },
      inv_matbang: [['Sang nhượng (nếu có)', 0]],
      inv_xaydung: [['Thiết kế & thi công nội thất', 200000000], ['Bảng hiệu', 15000000]],
      inv_thietbi: [['Máy pha cà phê + xay', 80000000], ['Tủ lạnh, tủ đông', 20000000], ['Bàn ghế', 40000000], ['Điều hòa', 20000000], ['POS, máy in', 10000000]],
      inv_khac: [['Nguyên liệu ban đầu (2 tuần)', 15000000], ['Giấy phép & pháp lý', 10000000], ['Marketing khai trương', 25000000]],
      working_cap: 100000000,
      staff: [{ pos: 'Quản lý', count: 1, salary: 12000000 }, { pos: 'Barista', count: 2, salary: 8000000 }, { pos: 'Phục vụ', count: 2, salary: 6000000 }, { pos: 'Tạp vụ', count: 1, salary: 5000000 }],
      fixed_other: [['Internet', 500000], ['Phần mềm POS', 500000], ['Bảo trì thiết bị', 500000]],
      var_other: [['Điện', 7000000], ['Nước', 1000000], ['Marketing hàng tháng', 5000000], ['Bao bì mang về', 1500000]]
    },
    benchmarks: { ticket: [40000, 70000], cust_wd: [60, 120], cust_we: [80, 180], food_cost: [20, 30] }
  },
  eatery: {
    name: 'Quán ăn nhỏ', icon: 'eatery', investRange: '100 - 500 triệu',
    desc: 'Cơm, bún, phở. Vốn vừa phải, nhu cầu ổn định.',
    defaults: {
      sqm: 40, seats: 30, avg_ticket: 45000, cust_weekday: 100, cust_weekend: 140, food_cost_pct: 33, rent: 15000000, budget: 350000000,
      ticket_items: [['Cơm/bún/phở', 40000], ['Nước uống', 15000], ['Món thêm', 25000]],
      cust_matrix: { wd: [15, 45, 10, 30], we: [20, 50, 15, 55] },
      inv_matbang: [],
      inv_xaydung: [['Sửa sang cơ bản', 80000000], ['Bảng hiệu', 8000000]],
      inv_thietbi: [['Bếp gas công nghiệp', 30000000], ['Tủ lạnh, tủ đông', 15000000], ['Bàn ghế', 25000000], ['POS', 8000000]],
      inv_khac: [['Nguyên liệu (2 tuần)', 20000000], ['Giấy phép', 8000000], ['Marketing', 10000000]],
      working_cap: 60000000,
      staff: [{ pos: 'Bếp chính', count: 1, salary: 10000000 }, { pos: 'Phụ bếp', count: 1, salary: 6000000 }, { pos: 'Phục vụ', count: 2, salary: 5500000 }, { pos: 'Thu ngân', count: 1, salary: 6000000 }],
      fixed_other: [['Internet', 500000], ['Phần mềm', 300000]],
      var_other: [['Điện', 5000000], ['Nước', 1500000], ['Gas', 2000000], ['Marketing', 3000000], ['Bao bì', 1000000]]
    },
    benchmarks: { ticket: [35000, 60000], cust_wd: [80, 150], cust_we: [100, 200], food_cost: [30, 40] }
  },
  bubbletea: {
    name: 'Trà sữa', icon: 'bubbletea', investRange: '300tr - 1.5 tỷ',
    desc: 'Biên lời rất cao (NVL 15-25%), nhưng thị trường bão hòa.',
    defaults: {
      sqm: 25, seats: 12, avg_ticket: 40000, cust_weekday: 100, cust_weekend: 180, food_cost_pct: 22, rent: 20000000, budget: 500000000,
      ticket_items: [['Trà sữa', 38000], ['Topping', 10000], ['Nước trái cây', 35000], ['Kem / đá xay', 42000]],
      cust_matrix: { wd: [15, 30, 20, 35], we: [30, 45, 35, 70] },
      inv_matbang: [],
      inv_xaydung: [['Thiết kế & thi công', 150000000], ['Bảng hiệu', 15000000]],
      inv_thietbi: [['Thiết bị pha chế', 60000000], ['Tủ lạnh', 15000000], ['Bàn ghế', 20000000], ['POS', 10000000]],
      inv_khac: [['Nguyên liệu', 10000000], ['Giấy phép', 8000000], ['Marketing khai trương', 30000000]],
      working_cap: 70000000,
      staff: [{ pos: 'Quản lý', count: 1, salary: 10000000 }, { pos: 'Pha chế', count: 2, salary: 7000000 }, { pos: 'Phục vụ', count: 1, salary: 5500000 }],
      fixed_other: [['Internet', 500000], ['Phần mềm', 500000]],
      var_other: [['Điện', 4000000], ['Nước', 800000], ['Marketing', 8000000], ['Bao bì/ly', 3000000]]
    },
    benchmarks: { ticket: [35000, 55000], cust_wd: [80, 200], cust_we: [120, 300], food_cost: [15, 25] }
  },
  restaurant: {
    name: 'Nhà hàng', icon: 'restaurant', investRange: '1 - 5 tỷ',
    desc: 'Tầm trung trở lên. Đầu tư lớn, cần quản lý chặt.',
    defaults: {
      sqm: 100, seats: 50, avg_ticket: 200000, cust_weekday: 60, cust_weekend: 100, food_cost_pct: 32, rent: 40000000, budget: 2000000000,
      ticket_items: [['Món chính', 120000], ['Khai vị', 50000], ['Đồ uống', 40000], ['Tráng miệng', 35000]],
      cust_matrix: { wd: [0, 30, 5, 25], we: [0, 45, 10, 45] },
      inv_matbang: [],
      inv_xaydung: [['Thiết kế & thi công', 500000000], ['Bảng hiệu', 25000000]],
      inv_thietbi: [['Thiết bị bếp', 250000000], ['Bàn ghế nội thất', 150000000], ['Điều hòa', 50000000], ['POS & camera', 30000000]],
      inv_khac: [['Nguyên liệu', 40000000], ['Giấy phép', 15000000], ['Marketing khai trương', 50000000]],
      working_cap: 200000000,
      staff: [{ pos: 'Quản lý', count: 1, salary: 15000000 }, { pos: 'Bếp trưởng', count: 1, salary: 18000000 }, { pos: 'Bếp phụ', count: 2, salary: 7000000 }, { pos: 'Phục vụ', count: 3, salary: 6000000 }, { pos: 'Thu ngân', count: 1, salary: 7000000 }, { pos: 'Tạp vụ', count: 1, salary: 5000000 }],
      fixed_other: [['Internet', 1000000], ['Phần mềm', 1000000], ['Bảo trì', 2000000]],
      var_other: [['Điện', 15000000], ['Nước', 3000000], ['Gas', 4000000], ['Marketing', 10000000], ['Bao bì', 2000000]]
    },
    benchmarks: { ticket: [150000, 400000], cust_wd: [50, 100], cust_we: [80, 150], food_cost: [28, 38] }
  },
  cloudkitchen: {
    name: 'Cloud Kitchen', icon: 'cloudkitchen', investRange: '100 - 500 triệu',
    desc: 'Bếp ảo, chỉ delivery. Vốn thấp nhưng phí app 20-30%.',
    defaults: {
      sqm: 20, seats: 0, avg_ticket: 65000, cust_weekday: 50, cust_weekend: 60, food_cost_pct: 33, rent: 8000000, budget: 350000000,
      ticket_items: [['Món chính', 55000], ['Phụ liệu / topping', 15000], ['Đồ uống', 20000]],
      cust_matrix: { wd: [5, 20, 5, 20], we: [5, 25, 5, 25] },
      inv_matbang: [],
      inv_xaydung: [['Sửa sang bếp', 60000000]],
      inv_thietbi: [['Thiết bị bếp', 100000000], ['POS & máy in', 15000000]],
      inv_khac: [['Nguyên liệu', 20000000], ['Giấy phép', 8000000], ['Marketing online', 30000000]],
      working_cap: 60000000,
      staff: [{ pos: 'Bếp chính', count: 1, salary: 10000000 }, { pos: 'Phụ bếp', count: 1, salary: 6000000 }, { pos: 'Đóng gói', count: 1, salary: 5500000 }],
      fixed_other: [['Internet', 500000], ['Phần mềm', 500000]],
      var_other: [['Điện', 6000000], ['Nước', 1000000], ['Gas', 2000000], ['Marketing', 10000000], ['Bao bì', 4000000]]
    },
    benchmarks: { ticket: [50000, 100000], cust_wd: [30, 80], cust_we: [40, 100], food_cost: [30, 40] }
  },
  bakery: {
    name: 'Tiệm bánh', icon: 'bakery', investRange: '300tr - 2 tỷ',
    desc: 'Bánh mì, bánh ngọt. Biên lời tốt, khách mua thường xuyên.',
    defaults: {
      sqm: 35, seats: 12, avg_ticket: 50000, cust_weekday: 80, cust_weekend: 130, food_cost_pct: 30, rent: 20000000, budget: 600000000,
      ticket_items: [['Bánh ngọt', 45000], ['Bánh mì', 25000], ['Đồ uống', 35000], ['Bánh sinh nhật (chia TB)', 50000]],
      cust_matrix: { wd: [25, 20, 15, 20], we: [35, 30, 25, 40] },
      inv_matbang: [],
      inv_xaydung: [['Thiết kế & thi công', 150000000], ['Bảng hiệu', 15000000]],
      inv_thietbi: [['Lò nướng + mixer', 100000000], ['Tủ trưng bày lạnh', 30000000], ['Bàn ghế', 25000000], ['POS', 10000000]],
      inv_khac: [['Nguyên liệu', 15000000], ['Giấy phép', 8000000], ['Marketing', 20000000]],
      working_cap: 70000000,
      staff: [{ pos: 'Thợ bánh', count: 2, salary: 9000000 }, { pos: 'Bán hàng', count: 2, salary: 6000000 }, { pos: 'Tạp vụ', count: 1, salary: 5000000 }],
      fixed_other: [['Internet', 500000], ['Phần mềm', 500000]],
      var_other: [['Điện', 6000000], ['Nước', 800000], ['Gas', 1500000], ['Marketing', 5000000], ['Bao bì/hộp', 2000000]]
    },
    benchmarks: { ticket: [20000, 80000], cust_wd: [80, 200], cust_we: [100, 250], food_cost: [25, 35] }
  },
  bar: {
    name: 'Bar / Pub', icon: 'bar', investRange: '1 - 8 tỷ',
    desc: 'Biên lời rượu cao (60-80%). Vốn lớn, rủi ro pháp lý.',
    defaults: {
      sqm: 70, seats: 40, avg_ticket: 200000, cust_weekday: 40, cust_weekend: 90, food_cost_pct: 22, rent: 35000000, budget: 1500000000,
      ticket_items: [['Bia craft', 60000], ['Cocktail', 100000], ['Rượu mạnh (1 phần)', 80000], ['Đồ ăn nhẹ', 50000]],
      cust_matrix: { wd: [0, 0, 10, 30], we: [0, 0, 20, 70] },
      inv_matbang: [],
      inv_xaydung: [['Thiết kế & thi công', 400000000], ['Bảng hiệu', 30000000]],
      inv_thietbi: [['Quầy bar + thiết bị', 150000000], ['Bàn ghế', 80000000], ['Âm thanh, đèn', 60000000], ['Điều hòa', 30000000]],
      inv_khac: [['Rượu bia ban đầu', 30000000], ['Giấy phép (+ rượu)', 20000000], ['Marketing', 40000000]],
      working_cap: 150000000,
      staff: [{ pos: 'Quản lý', count: 1, salary: 15000000 }, { pos: 'Bartender', count: 2, salary: 10000000 }, { pos: 'Phục vụ', count: 3, salary: 6000000 }, { pos: 'Bảo vệ', count: 1, salary: 6000000 }],
      fixed_other: [['Internet', 1000000], ['Bản quyền nhạc', 1000000]],
      var_other: [['Điện', 12000000], ['Nước', 1500000], ['Marketing', 8000000]]
    },
    benchmarks: { ticket: [100000, 500000], cust_wd: [30, 70], cust_we: [60, 150], food_cost: [15, 25] }
  },
  kiosk: {
    name: 'Kiosk / Food Court', icon: 'kiosk', investRange: '200tr - 1 tỷ',
    desc: 'Quầy nhỏ trong TTTM. Có sẵn khách, nhưng thuê cao.',
    defaults: {
      sqm: 15, seats: 8, avg_ticket: 70000, cust_weekday: 70, cust_weekend: 120, food_cost_pct: 30, rent: 25000000, budget: 500000000,
      ticket_items: [['Món chính', 60000], ['Đồ uống', 25000], ['Topping / phụ', 15000]],
      cust_matrix: { wd: [10, 30, 10, 20], we: [15, 45, 20, 40] },
      inv_matbang: [],
      inv_xaydung: [['Thi công quầy', 100000000]],
      inv_thietbi: [['Thiết bị bếp/pha chế', 80000000], ['Bàn ghế', 15000000], ['POS', 10000000]],
      inv_khac: [['Nguyên liệu', 10000000], ['Giấy phép', 8000000], ['Marketing', 15000000]],
      working_cap: 50000000,
      staff: [{ pos: 'Bếp chính', count: 1, salary: 9000000 }, { pos: 'Phục vụ', count: 2, salary: 6000000 }],
      fixed_other: [['Phần mềm', 500000]],
      var_other: [['Điện', 3000000], ['Nước', 500000], ['Gas', 1000000], ['Marketing', 3000000], ['Bao bì', 1500000]]
    },
    benchmarks: { ticket: [50000, 120000], cust_wd: [60, 150], cust_we: [80, 200], food_cost: [28, 35] }
  }
};

// ===== Knowledge Base Helpers =====
// Data is now in i18n/data/{locale}/knowledge/ — re-exported above as KNOWLEDGE_BASE

// Index 0 unused — months are 1-indexed
/** Find a KB topic by its URL slug */
export function getKBTopicBySlug(slug: string): KBTopic | undefined {
  return KNOWLEDGE_BASE.find((t) => t.slug === slug);
}

/** Get all KB slugs (for generateStaticParams) */
export function getAllKBSlugs(): string[] {
  return KNOWLEDGE_BASE.map((t) => t.slug);
}

// ===== Expert Helpers =====

/** Find an expert by their URL slug */
export function getExpertBySlug(slug: string): Expert | undefined {
  return EXPERTS_DATA.find((e) => e.slug === slug);
}

/** Get all expert slugs (for generateStaticParams) */
export function getAllExpertSlugs(): string[] {
  return EXPERTS_DATA.map((e) => e.slug);
}

// ===== Existing Business Benchmarks =====
// [low, high] healthy ranges per model type — used for diagnosis mode

import type { ExistingBenchmarks } from '@/types';

export const EXISTING_BENCHMARKS: Record<ModelKey, ExistingBenchmarks> = {
  coffee:       { cogsPct: [20, 30], rentPct: [10, 20], laborPct: [15, 22], primeCostPct: [40, 55], netMarginPct: [10, 20], deliveryCommPct: [15, 25], wastePct: [2, 4], revenuePerSeat: [50000, 120000] },
  eatery:       { cogsPct: [28, 38], rentPct: [10, 20], laborPct: [15, 25], primeCostPct: [45, 60], netMarginPct: [8, 15], deliveryCommPct: [15, 25], wastePct: [3, 5], revenuePerSeat: [40000, 100000] },
  bubbletea:    { cogsPct: [15, 25], rentPct: [10, 20], laborPct: [12, 20], primeCostPct: [30, 45], netMarginPct: [12, 25], deliveryCommPct: [15, 25], wastePct: [2, 4], revenuePerSeat: [80000, 200000] },
  restaurant:   { cogsPct: [28, 38], rentPct: [8, 18],  laborPct: [18, 28], primeCostPct: [50, 65], netMarginPct: [8, 15], deliveryCommPct: [15, 25], wastePct: [3, 6], revenuePerSeat: [80000, 200000] },
  cloudkitchen: { cogsPct: [28, 38], rentPct: [5, 15],  laborPct: [15, 22], primeCostPct: [45, 58], netMarginPct: [5, 12], deliveryCommPct: [20, 30], wastePct: [2, 5], revenuePerSeat: [0, 0] },
  bakery:       { cogsPct: [25, 35], rentPct: [10, 20], laborPct: [15, 22], primeCostPct: [45, 58], netMarginPct: [10, 18], deliveryCommPct: [15, 25], wastePct: [3, 6], revenuePerSeat: [60000, 150000] },
  bar:          { cogsPct: [15, 25], rentPct: [10, 18], laborPct: [15, 25], primeCostPct: [35, 50], netMarginPct: [12, 25], deliveryCommPct: [15, 25], wastePct: [2, 5], revenuePerSeat: [100000, 300000] },
  kiosk:        { cogsPct: [25, 35], rentPct: [12, 22], laborPct: [12, 20], primeCostPct: [40, 55], netMarginPct: [8, 15], deliveryCommPct: [15, 25], wastePct: [2, 4], revenuePerSeat: [60000, 180000] },
};

export const SEASONAL = [1, 0.85, 0.75, 1, 1.05, 1, 0.95, 0.95, 1, 1, 1.05, 1.1, 1.15];

export const RAMP_DEFAULT = [0.45, 0.6, 0.7, 0.8, 0.9, 1];

export const CHECKLIST: Record<string, ChecklistCategory> = {
  phap_ly: {
    name: 'Pháp lý & Giấy phép', icon: 'legal',
    items: ['Đăng ký kinh doanh (ĐKKD)', 'Giấy chứng nhận ATTP', 'Giấy phép PCCC', 'Giấy khám sức khỏe nhân viên', 'Hợp đồng thuê (công chứng)', 'Đăng ký thuế + mã số thuế', 'Đăng ký hóa đơn điện tử', 'Giấy phép biển hiệu', 'Giấy phép rượu bia (nếu có)']
  },
  mat_bang: {
    name: 'Mặt bằng & Xây dựng', icon: 'construction',
    items: ['Ký hợp đồng thuê', 'Khảo sát điện/nước/thoát nước', 'Thiết kế layout bếp', 'Thiết kế nội thất', 'Thi công/renovation', 'Lắp điện đủ tải', 'Lắp nước & thoát nước bếp', 'Lắp hút mùi/thông gió', 'Lắp điều hòa', 'Bảng hiệu']
  },
  thiet_bi: {
    name: 'Thiết bị & Vật tư', icon: 'wrench',
    items: ['Thiết bị bếp chính', 'Thiết bị pha chế', 'Dụng cụ bếp', 'Bàn ghế khách', 'POS/máy in order/bill', 'Camera an ninh', 'Bình chữa cháy', 'Ly/chén/đĩa/đũa', 'Bao bì delivery', 'Đồng phục']
  },
  menu: {
    name: 'Menu & NCC', icon: 'menu',
    items: ['Xây dựng menu + giá', 'Thiết kế menu (in/QR)', 'Tìm NCC chính + backup', 'Đàm phán giá/MOQ', 'Chuẩn hóa công thức', 'Tính food cost từng món', 'Chụp ảnh món', 'Setup quản lý tồn kho']
  },
  nhan_su: {
    name: 'Nhân sự', icon: 'team',
    items: ['Sơ đồ tổ chức + số lượng/ca', 'Tuyển dụng', 'Ký hợp đồng lao động', 'BHXH/BHYT', 'Đào tạo SOP pha chế/nấu', 'Đào tạo SOP phục vụ', 'Đào tạo SOP thu ngân', 'Đào tạo vệ sinh ATTP', 'Phân ca', 'Dry run / soft opening']
  },
  cong_nghe: {
    name: 'Công nghệ', icon: 'laptop',
    items: ['Setup POS', 'Đăng ký GrabFood', 'Đăng ký ShopeeFood', 'Thanh toán QR (Momo/VNPay/ZaloPay)', 'Google Business Profile', 'Facebook fanpage', 'Instagram + TikTok', 'WiFi khách', 'Phần mềm kế toán']
  },
  marketing: {
    name: 'Marketing & Khai trương', icon: 'megaphone',
    items: ['Brand identity (logo/màu/font)', 'In ấn (card/voucher/banner)', 'Chiến lược khai trương', 'Mời KOL review', 'Content plan tháng đầu', 'Đăng Foody/Google Maps', 'Setup ads FB/IG/TikTok', 'Soft opening', 'Grand opening']
  },
  van_hanh: {
    name: 'Vận hành', icon: 'gear',
    items: ['SOP mở cửa', 'SOP đóng cửa', 'SOP nhập hàng & kiểm kho', 'SOP vệ sinh', 'SOP xử lý complaint', 'SOP sự cố (mất điện...)', 'SOP quản lý tiền mặt', 'Phân công hàng ngày', 'KPI từng vị trí']
  }
};
