import type { FnBModel, ModelKey, ChecklistCategory, KBTopic, KBTableRow, KBStat, KBTimelineStep, KBWarningItem } from '@/types';

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

// ===== Knowledge Base =====

export const KNOWLEDGE_BASE: KBTopic[] = [
  // ── CHI PHÍ ──
  {
    id: 'cost_structure',
    icon: 'money',
    title: 'Cấu trúc chi phí F&B',
    subtitle: 'Hiểu tiền đi đâu trước khi bắt đầu',
    color: 'primary-light',
    category: 'cost',
    highlights: [
      { label: 'NVL (Food Cost)', value: '25-35%', note: 'trên doanh thu' },
      { label: 'Nhân sự', value: '20-30%', note: 'trên doanh thu' },
      { label: 'Mặt bằng', value: '10-20%', note: 'trên doanh thu' },
      { label: 'Lợi nhuận ròng', value: '5-15%', note: 'nếu quản lý tốt' },
    ],
    sections: [
      {
        type: 'table',
        heading: 'Phân bổ chi phí điển hình',
        content: [
          { label: 'Nguyên vật liệu (Food cost)', range: '25 - 35%', note: 'Chi phí lớn nhất, kiểm soát bằng công thức chuẩn' },
          { label: 'Nhân sự (Labor)', range: '20 - 30%', note: 'Lương + BHXH + phụ cấp ca/ăn' },
          { label: 'Thuê mặt bằng', range: '10 - 20%', note: 'Bao gồm phí quản lý, VAT mặt bằng' },
          { label: 'Marketing', range: '3 - 8%', note: 'Online ads + khuyến mãi + influencer' },
          { label: 'Vận hành (điện, nước, gas...)', range: '5 - 10%', note: 'Biến động theo mùa và loại hình' },
          { label: 'Khấu hao + Khác', range: '3 - 5%', note: 'Hao mòn thiết bị, dụng cụ vỡ/hỏng' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: 'Chi phí ẩn thường bị bỏ quên',
        content: [
          { label: 'BHXH + BHYT nhân viên', range: '21,5%', note: 'Trên lương cơ bản, chủ đóng 21,5%' },
          { label: 'Hao hụt nguyên liệu', range: '3 - 8%', note: 'Rau héo, thịt hỏng, đổ vỡ hàng ngày' },
          { label: 'Phí app delivery', range: '20 - 30%', note: 'GrabFood/ShopeeFood hoa hồng trên đơn' },
          { label: 'VAT mặt bằng', range: '8 - 10%', note: 'Nhiều HĐ thuê chưa bao gồm VAT' },
          { label: 'Bảo trì thiết bị', range: '1 - 3%', note: 'Máy pha, tủ lạnh hỏng đột xuất' },
          { label: 'Thuế & kế toán', range: '1 - 2%', note: 'Thuế khoán / GTGT + phí kế toán' },
        ] as KBTableRow[],
      },
      {
        type: 'text',
        content: 'Quy tắc vàng: NVL + Nhân sự (Prime Cost) không vượt 60-65% doanh thu. Nếu vượt, rất khó có lãi. Chi phí thực tế thường cao hơn dự tính 20-30% vì các chi phí ẩn bên trên.',
      },
    ],
  },
  {
    id: 'key_metrics',
    icon: 'chart',
    title: 'Các chỉ số sống còn',
    subtitle: '4 con số quyết định quán sống hay chết',
    color: 'secondary-light',
    category: 'cost',
    highlights: [
      { label: 'Food Cost %', value: '<35%' },
      { label: 'Prime Cost', value: '<65%' },
      { label: 'Rent Ratio', value: '<20%' },
      { label: 'Break-even', value: '<6 tháng' },
    ],
    sections: [
      {
        type: 'stat-grid',
        content: [
          { icon: 'meat', label: 'Food Cost %', value: '25-35%', desc: '= Chi phí NVL / Doanh thu. Trên 40% = nguy hiểm.' },
          { icon: 'users', label: 'Prime Cost', value: '<60-65%', desc: '= (NVL + Nhân sự) / Doanh thu. Chỉ số quan trọng nhất.' },
          { icon: 'rent', label: 'Rent-to-Revenue', value: '<15-20%', desc: '= Tiền thuê / Doanh thu. Trên 25% = rủi ro cực cao.' },
          { icon: 'clock', label: 'Break-even Point', value: '4-8 tháng', desc: 'Thời gian hoàn vốn. Trên 12 tháng = cần xem lại.' },
        ] as KBStat[],
      },
      {
        type: 'table',
        heading: 'Benchmark theo mô hình',
        content: [
          { label: 'Cà phê', range: 'Food cost 20-30%', note: 'Prime cost <55%. Biên cao nhưng cạnh tranh lớn.' },
          { label: 'Quán ăn', range: 'Food cost 30-40%', note: 'Prime cost <65%. Cần volume cao để bù biên thấp.' },
          { label: 'Trà sữa', range: 'Food cost 15-25%', note: 'Prime cost <50%. Biên rất cao, marketing chiếm nhiều.' },
          { label: 'Nhà hàng', range: 'Food cost 28-38%', note: 'Prime cost <60%. Nhân sự chiếm tỷ trọng lớn.' },
          { label: 'Cloud Kitchen', range: 'Food cost 30-38%', note: 'Không thuê mặt bằng, nhưng phí app 20-30%.' },
          { label: 'Bar / Pub', range: 'Food cost 15-25%', note: 'Prime cost <50%. Biên rượu rất cao.' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Red flags — dấu hiệu cần hành động ngay',
        content: [
          { icon: 'warning', title: 'Food cost > 40%', desc: 'Kiểm tra ngay: hao hụt NVL, giá nhập tăng, staff cho nhiều hơn công thức, trộm cắp. Mỗi 1% food cost = ~10% lợi nhuận ròng.', severity: 'critical' },
          { icon: 'warning', title: 'Prime cost > 70%', desc: 'Gần như không thể có lãi. Phải cắt giảm hoặc tăng giá bán ngay lập tức.', severity: 'critical' },
          { icon: 'warning', title: 'Rent ratio > 25%', desc: 'Mặt bằng đang "ăn" hết lợi nhuận. Cân nhắc đàm phán hoặc chuyển location.', severity: 'warning' },
          { icon: 'warning', title: 'Doanh thu giảm 3 tháng liên tiếp', desc: 'Không phải mùa thấp điểm? Kiểm tra: đối thủ mới, chất lượng giảm, review xấu trên Google.', severity: 'warning' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Nếu bạn chưa biết 4 con số trên cho mô hình của mình, hãy bắt đầu validate ngay — công cụ này sẽ tính giúp bạn.',
      },
    ],
  },
  // ── VẬN HÀNH ──
  {
    id: 'business_models',
    icon: 'kiosk',
    title: 'Mô hình F&B phổ biến',
    subtitle: 'Mỗi loại có đặc điểm riêng',
    color: 'mint-light',
    category: 'operations',
    highlights: [
      { label: 'Số mô hình', value: '8 loại' },
      { label: 'Vốn thấp nhất', value: '100 triệu' },
      { label: 'Tỷ lệ sống 3 năm', value: '~20%' },
    ],
    sections: [
      {
        type: 'table',
        heading: 'So sánh nhanh: vốn & biên lợi nhuận',
        content: [
          { label: 'Cà phê', range: '200tr - 1.5 tỷ', note: 'Biên gộp 70-80%. Cạnh tranh khốc liệt, cần khác biệt.' },
          { label: 'Quán ăn', range: '100 - 500tr', note: 'Biên gộp 55-65%. Nhu cầu ổn, food cost cao 30-40%.' },
          { label: 'Trà sữa', range: '300tr - 1.5 tỷ', note: 'Biên gộp 75-85%. Thị trường bão hòa, cần brand mạnh.' },
          { label: 'Nhà hàng', range: '1 - 5 tỷ', note: 'Biên gộp 60-70%. Vốn lớn, cần quản lý chuyên nghiệp.' },
          { label: 'Cloud Kitchen', range: '100 - 500tr', note: 'Biên gộp 55-65%. Không mặt bằng, phí app 20-30%.' },
          { label: 'Tiệm bánh', range: '300tr - 2 tỷ', note: 'Biên gộp 65-75%. Cần tay nghề, sản phẩm chủ lực.' },
          { label: 'Bar / Pub', range: '1 - 8 tỷ', note: 'Biên gộp 75-85%. Rủi ro pháp lý, cần quản lý chặt.' },
          { label: 'Kiosk / Food Court', range: '200tr - 1 tỷ', note: 'Biên gộp 60-70%. Có sẵn traffic, thuê TTTM cao.' },
        ] as KBTableRow[],
      },
      {
        type: 'list',
        heading: 'Phù hợp với ai?',
        content: [
          'Ít vốn (<300tr), ít kinh nghiệm → Quán ăn nhỏ hoặc Cloud Kitchen. Test concept trước, mở rộng sau.',
          'Vốn trung bình (300tr-1 tỷ), đam mê đồ uống → Cà phê hoặc Trà sữa. Cần concept khác biệt.',
          'Vốn khá (1-3 tỷ), có kinh nghiệm quản lý → Nhà hàng hoặc Bar. Cần team vận hành chuyên nghiệp.',
          'Muốn rủi ro thấp, test nhanh → Kiosk trong TTTM hoặc Cloud Kitchen. Break-even nhanh hơn.',
          'Có tay nghề bếp/pha chế → Tiệm bánh hoặc Cà phê specialty. Sản phẩm lõi là lợi thế cạnh tranh.',
        ],
      },
      {
        type: 'text',
        content: 'Không có mô hình "dễ" — mỗi loại đều có rủi ro riêng. Quan trọng là chọn loại phù hợp kinh nghiệm, ngân sách và khẩu vị rủi ro của bạn.',
      },
    ],
  },
  {
    id: 'lifecycle',
    icon: 'trending',
    title: 'Vòng đời quán F&B',
    subtitle: 'Đừng kỳ vọng lãi từ tháng đầu',
    color: 'primary-light',
    category: 'operations',
    highlights: [
      { label: 'Chuẩn bị', value: '2-4 tháng', note: 'trước khi mở' },
      { label: 'Ramp-up', value: '1-3 tháng', note: 'doanh thu 40-70%' },
      { label: 'Ổn định', value: 'tháng 4-6' },
      { label: 'Hoàn vốn', value: 'tháng 8-18' },
    ],
    sections: [
      {
        type: 'timeline',
        content: [
          { month: 'Trước khi mở', title: 'Giai đoạn chuẩn bị (2-4 tháng)', desc: 'Khảo sát thị trường, tìm mặt bằng, đăng ký giấy phép, thiết kế thi công, tuyển dụng, training. ĐÂY là giai đoạn quyết định 80% thành bại.', status: 'ramp' },
          { month: 'Tháng 1-2', title: 'Khởi động (Ramp-up)', desc: 'Doanh thu chỉ 40-60% công suất. Khách thử, chưa quay lại đều. Đội ngũ đang chạy rốt-in. CHI > THU là bình thường.', status: 'ramp' },
          { month: 'Tháng 3-4', title: 'Tăng tốc', desc: 'Doanh thu 70-90%. Khách quen bắt đầu hình thành. Tối ưu menu, cắt món không bán. Bắt đầu tinh gọn chi phí.', status: 'ramp' },
          { month: 'Tháng 5-8', title: 'Ổn định', desc: 'Doanh thu đạt 100% kỳ vọng. Nếu có lãi — giữ nguyên. Nếu lỗ — xem lại ngay. Đây là lúc quyết định quán "sống" hay "chết".', status: 'stable' },
          { month: 'Tháng 9-12', title: 'Bão hòa / Tăng trưởng', desc: 'Nếu quản lý tốt: tăng trưởng 5-10%/năm. Nếu không: khách giảm dần do đối thủ mới. Cần đổi mới menu, marketing.', status: 'stable' },
          { month: 'Năm 2-3+', title: 'Đổi mới hoặc suy thoái', desc: 'Quán F&B trung bình tại VN tồn tại 2-3 năm. Chỉ 20% sống qua năm thứ 3. Cần liên tục cải thiện.', status: 'decline' },
        ] as KBTimelineStep[],
      },
      {
        type: 'list',
        heading: 'Việc cần làm mỗi giai đoạn',
        content: [
          'Tháng 1-2: Tập trung vận hành mượt, sửa SOP, lắng nghe feedback khách. Chưa cần marketing mạnh.',
          'Tháng 3-4: Phân tích data bán hàng, cắt 20% món không bán, đàm phán lại giá NCC, bắt đầu loyalty program.',
          'Tháng 5-8: Kiểm tra P&L hàng tuần, tối ưu ca làm, mở kênh delivery nếu chưa có, xây online presence.',
          'Tháng 9-12: Đổi mới menu 20-30%, thêm seasonal items, review giá bán, đánh giá nhân sự, plan năm tiếp.',
          'Năm 2+: Cân nhắc mở chi nhánh 2 hoặc pivot mô hình. Đừng để quán "chạy tự động" — đó là lúc suy thoái bắt đầu.',
        ],
      },
    ],
  },
  // ── CHIẾN LƯỢC ──
  {
    id: 'pricing_strategy',
    icon: 'money',
    title: 'Định giá menu',
    subtitle: 'Nghệ thuật đặt giá để có lãi',
    color: 'mint-light',
    category: 'strategy',
    highlights: [
      { label: 'Food cost mục tiêu', value: '28-32%' },
      { label: 'Combo tăng DT', value: '+15-25%' },
      { label: 'Sweet spot giá', value: '25-50K' },
    ],
    sections: [
      {
        type: 'stat-grid',
        heading: 'Công thức tính giá bán',
        content: [
          { icon: 'money', label: 'Giá bán cơ bản', value: 'NVL ÷ 0.30', desc: 'Giá NVL / food cost % mục tiêu. VD: NVL 15K ÷ 0.30 = 50K.' },
          { icon: 'chart', label: 'Biên đóng góp', value: 'Giá - NVL', desc: 'Mỗi món đóng góp bao nhiêu vào chi phí cố định. Ưu tiên món biên cao.' },
          { icon: 'target', label: 'Giá tâm lý', value: 'X9.000đ', desc: '49K thay vì 50K. 39K thay vì 40K. Hiệu ứng "rẻ hơn" rõ rệt.' },
          { icon: 'trending', label: 'Upsell / Cross-sell', value: '+15-25%', desc: '"Thêm topping 10K?" hoặc "Combo tiết kiệm 15K" tăng giá trị đơn hàng.' },
        ] as KBStat[],
      },
      {
        type: 'list',
        heading: 'Chiến lược giá thông minh',
        content: [
          'Menu Engineering: phân loại món theo Stars (bán nhiều, biên cao), Puzzles (biên cao, bán ít), Plowhorses (bán nhiều, biên thấp), Dogs (bán ít, biên thấp). Loại bỏ Dogs, push Stars.',
          'Anchor pricing: đặt món đắt nhất đầu menu để các món khác "có vẻ rẻ hơn". Ví dụ: Wagyu 350K đầu tiên → Bò Úc 180K thành "hợp lý".',
          'Combo strategy: gộp 2-3 món, giảm 10-15% so với mua lẻ. Khách cảm thấy "hời", bạn tăng giá trị đơn hàng 20-30%.',
          'Giá theo size: S/M/L với chênh lệch NVL nhỏ nhưng chênh lệch giá lớn. Khách chọn M (80% trường hợp) = biên lợi nhuận tối ưu.',
          'Seasonal pricing: tăng giá 5-10% vào mùa cao điểm (lễ, Tết), giảm nhẹ mùa thấp. Đừng giữ giá cứng cả năm.',
        ],
      },
      {
        type: 'warning-list',
        heading: 'Sai lầm khi định giá',
        content: [
          { icon: 'warning', title: 'Giá rẻ hơn đối thủ để "hút khách"', desc: 'Cạnh tranh bằng giá = race to the bottom. Sẽ luôn có người rẻ hơn. Hãy cạnh tranh bằng giá trị và trải nghiệm.', severity: 'critical' },
          { icon: 'warning', title: 'Không tính đủ chi phí vào giá', desc: 'Nhiều chủ quán chỉ tính NVL, quên nhân sự, thuê, điện, khấu hao. Giá bán phải cover TẤT CẢ chi phí + lợi nhuận mong muốn.', severity: 'critical' },
          { icon: 'warning', title: 'Thay đổi giá đột ngột', desc: 'Tăng giá >10% một lần sẽ mất khách. Nên tăng 5% mỗi 3-6 tháng, hoặc tăng kèm cải thiện chất lượng.', severity: 'warning' },
        ] as KBWarningItem[],
      },
    ],
  },
  {
    id: 'marketing_101',
    icon: 'megaphone',
    title: 'Marketing F&B cơ bản',
    subtitle: 'Có quán ngon mà không ai biết = thất bại',
    color: 'secondary-light',
    category: 'strategy',
    highlights: [
      { label: 'Ngân sách marketing', value: '5-10%', note: 'trên doanh thu' },
      { label: 'Google Maps', value: 'Miễn phí', note: 'hiệu quả nhất' },
      { label: 'TikTok reach', value: 'x5-10', note: 'so với Facebook' },
    ],
    sections: [
      {
        type: 'table',
        heading: 'Kênh marketing: chi phí & hiệu quả',
        content: [
          { label: 'Google Business Profile', range: 'Miễn phí', note: '70% khách tìm quán qua Google Maps. Setup ngay ngày 1.' },
          { label: 'TikTok (organic)', range: 'Miễn phí', note: '1 video viral = hàng đợi 2 tuần. Quay "behind the scenes" bếp.' },
          { label: 'Facebook / Instagram', range: '3-5 tr/tháng', note: 'Fanpage + groups + targeted ads. Hiệu quả cho cộng đồng.' },
          { label: 'KOL / Micro-influencer', range: '2-10 tr/lần', note: 'Micro (1K-100K followers) tạo engagement gấp 3-5x so với celeb.' },
          { label: 'Foody / Loship', range: '0.5-2 tr/tháng', note: 'Listing + review. Đặc biệt quan trọng cho quán mới.' },
          { label: 'Offline (banner, flyer)', range: '1-3 tr/tháng', note: 'Hiệu quả cho khu dân cư, quán gần trường/văn phòng.' },
        ] as KBTableRow[],
      },
      {
        type: 'list',
        heading: '5 bước marketing cho quán mới (ngân sách <5 triệu)',
        content: [
          'Bước 1: Setup Google Business Profile (miễn phí) — tên, ảnh, menu, giờ mở cửa, số điện thoại. Thu thập review 5 sao từ bạn bè ngày đầu.',
          'Bước 2: Tạo TikTok + Instagram — quay 3-5 video/tuần về quá trình làm món, "behind the scenes", giới thiệu nhân viên. ĐỪNG bán hàng quá sớm.',
          'Bước 3: Fanpage Facebook — đăng menu, khuyến mãi, review khách hàng. Join các group "Ăn gì ở [khu vực]" để post.',
          'Bước 4: Soft opening — mời 30-50 bạn bè, KOL micro (1K-10K followers) ăn miễn phí, đổi review + story. Chi phí: 5-10 triệu NVL.',
          'Bước 5: Grand opening — giảm giá 20-30% tuần đầu, tặng topping/đồ uống miễn phí. Tạo "cú hit" ban đầu để Google Maps có traffic.',
        ],
      },
      {
        type: 'text',
        content: 'Quy tắc 70/20/10: 70% nội dung giá trị (tips, behind the scenes), 20% review/social proof, 10% khuyến mãi trực tiếp. Đừng biến fanpage thành "bảng quảng cáo" — sẽ mất followers.',
      },
    ],
  },
  // ── VẬN HÀNH (tiếp) ──
  {
    id: 'common_mistakes',
    icon: 'warning',
    title: 'Lỗi thường gặp',
    subtitle: '80% quán đóng cửa vì những lỗi này',
    color: 'secondary-light',
    category: 'operations',
    sections: [
      {
        type: 'warning-list',
        content: [
          { icon: 'cashout', title: 'Dự tính chi phí quá thấp', desc: 'Quên tính: BHXH, hao hụt, khấu hao, marketing tháng, phí app delivery, VAT thuê mặt bằng. Thực tế thường cao hơn dự tính 20-30%.', severity: 'critical' },
          { icon: 'trendingup', title: 'Kỳ vọng doanh thu quá cao', desc: 'Đừng lấy ngày đông nhất làm trung bình. Tháng đầu chỉ đạt 40-60% công suất. Tính theo ngày thường, không phải cuối tuần.', severity: 'critical' },
          { icon: 'rent', title: 'Thuê mặt bằng quá đắt', desc: 'Vị trí đẹp nhưng chi phí thuê > 20% doanh thu = lỗ chắc. "Nhiều người qua lại" không = "nhiều khách vào quán".', severity: 'critical' },
          { icon: 'wallet', title: 'Thiếu vốn dự phòng', desc: 'Cần ít nhất 3-6 tháng chi phí vận hành dự phòng. Nhiều quán lỗ tháng 3-4 là đóng cửa vì hết tiền, không phải hết khách.', severity: 'critical' },
          { icon: 'chart', title: 'Không theo dõi số liệu', desc: 'Không biết food cost thực tế, không có P&L hàng tháng, không đo lường customer acquisition cost. "Cảm giác" không thay thế được data.', severity: 'critical' },
          { icon: 'clipboard', title: 'Không có SOP từ đầu', desc: 'Không chuẩn hóa quy trình = chất lượng không đồng nhất = mất khách. Viết SOP cho mọi thứ: pha chế, phục vụ, đóng/mở cửa.', severity: 'warning' },
          { icon: 'target', title: 'Không xác định khách mục tiêu', desc: 'Muốn phục vụ tất cả = không phục vụ ai tốt. Xác định rõ: ai, độ tuổi, thu nhập, lý do đến quán.', severity: 'warning' },
          { icon: 'phone', title: 'Bỏ qua marketing online', desc: 'Thời đại số, 70%+ khách tìm quán qua Google Maps, TikTok, Facebook. Không có hiện diện online = không tồn tại.', severity: 'warning' },
          { icon: 'bolt', title: 'Không test concept trước khi mở', desc: 'Mở quán luôn dựa trên "cảm giác" mà chưa test thực tế. Nên: bán thử online/popup 1-2 tháng, khảo sát 50+ người, nghiên cứu đối thủ.', severity: 'warning' },
          { icon: 'handshake', title: 'Hùn vốn không rõ ràng', desc: 'Phân chia vốn, lợi nhuận, quyền quyết định phải có trên giấy từ đầu. Nhiều quán sập vì chủ cãi nhau.', severity: 'tip' },
          { icon: 'gear', title: 'Chủ quán kiêm quá nhiều vai', desc: 'Vừa bếp, vừa phục vụ, vừa marketing, vừa kế toán → kiệt sức sau 3-6 tháng. Ưu tiên thuê/outsource những gì không phải sở trường.', severity: 'tip' },
        ] as KBWarningItem[],
      },
    ],
  },
  // ── CHI PHÍ (tiếp) ──
  {
    id: 'financial_management',
    icon: 'chart',
    title: 'Quản lý tài chính',
    subtitle: 'Tiền vào, tiền ra — phải rõ từng đồng',
    color: 'primary-light',
    category: 'cost',
    highlights: [
      { label: 'Vốn dự phòng', value: '3-6 tháng', note: 'chi phí vận hành' },
      { label: 'Kiểm tra P&L', value: 'Hàng tuần' },
      { label: 'Cash flow > Profit', value: 'Luôn đúng' },
    ],
    sections: [
      {
        type: 'stat-grid',
        heading: 'Báo cáo tài chính cần theo dõi',
        content: [
          { icon: 'chart', label: 'P&L (Lãi/Lỗ)', value: 'Hàng tuần', desc: 'Doanh thu - Chi phí = Lãi/Lỗ. Nếu lỗ 3 tuần liên tiếp → hành động ngay.' },
          { icon: 'money', label: 'Cash Flow', value: 'Hàng ngày', desc: 'Tiền mặt thực tế. Có lãi trên sổ nhưng không có tiền trong két = vẫn chết.' },
          { icon: 'meat', label: 'Food Cost %', value: 'Hàng tuần', desc: '= Tổng NVL nhập / Tổng doanh thu. So sánh với food cost lý thuyết.' },
          { icon: 'clock', label: 'Break-even tracking', value: 'Hàng tháng', desc: 'Bao nhiêu tháng nữa hoàn vốn? Có đúng kế hoạch không?' },
        ] as KBStat[],
      },
      {
        type: 'list',
        heading: 'Cash flow — bẫy chết người của F&B',
        content: [
          'Thu tiền NGAY (khách trả liền) nhưng chi tiền SAU (NCC cho nợ 7-30 ngày) → tạo ảo giác "có tiền". Thực tế, tiền đó đã thuộc về NCC.',
          'Doanh thu mùa cao (Tết, lễ) ≠ mọi tháng. Phải để dành tiền mùa cao cho mùa thấp (tháng 2-3 thường giảm 15-25%).',
          'Chi phí cố định (thuê, lương) phải trả ĐỀU ĐẶN bất kể doanh thu bao nhiêu. Đây là lý do "hết cash = đóng cửa".',
          'Quy tắc: luôn giữ tối thiểu 2 tháng chi phí vận hành trong tài khoản. Dưới mức này = báo động đỏ.',
          'Đừng rút lợi nhuận ra quá sớm. 6 tháng đầu, tái đầu tư 100% lợi nhuận (nếu có) vào quán.',
        ],
      },
      {
        type: 'table',
        heading: 'Cấu trúc vốn đầu tư hợp lý',
        content: [
          { label: 'Vốn tự có', range: '≥60%', note: 'Tối thiểu 60% tổng đầu tư. Vay quá nhiều = áp lực lãi suất.' },
          { label: 'Vốn vay', range: '≤40%', note: 'Lãi suất 8-15%/năm. Tính vào chi phí hàng tháng.' },
          { label: 'Vốn lưu động', range: '15-20%', note: 'Của tổng vốn đầu tư. Để xoay vòng NVL, trả lương.' },
          { label: 'Dự phòng', range: '10-15%', note: 'Phát sinh ngoài kế hoạch: thi công chậm, sửa chữa, thiên tai.' },
        ] as KBTableRow[],
      },
    ],
  },
  // ── PHÁP LÝ ──
  {
    id: 'legal_basics',
    icon: 'legal',
    title: 'Pháp lý & Giấy phép',
    subtitle: 'Đừng mở quán khi chưa đủ giấy tờ',
    color: 'secondary-light',
    category: 'legal',
    highlights: [
      { label: 'Giấy phép bắt buộc', value: '5-7 loại' },
      { label: 'Thời gian đăng ký', value: '1-3 tháng' },
      { label: 'Chi phí pháp lý', value: '8-20 triệu' },
    ],
    sections: [
      {
        type: 'table',
        heading: 'Giấy phép bắt buộc',
        content: [
          { label: 'Đăng ký kinh doanh (ĐKKD)', range: '3-5 ngày', note: 'Hộ kinh doanh hoặc Công ty. Hộ KD đơn giản, nhanh hơn.' },
          { label: 'Giấy chứng nhận ATTP', range: '15-30 ngày', note: 'Bắt buộc cho mọi cơ sở kinh doanh thực phẩm. Phải có TRƯỚC khi mở.' },
          { label: 'Giấy phép PCCC', range: '7-15 ngày', note: 'Bình chữa cháy, lối thoát hiểm, bảng chỉ dẫn. Công an quận cấp.' },
          { label: 'Giấy khám sức khỏe NV', range: '1-3 ngày', note: 'Tất cả nhân viên tiếp xúc thực phẩm. Khám 6 tháng/lần.' },
          { label: 'Hợp đồng thuê mặt bằng', range: 'Trước khi thi công', note: 'Công chứng. Kiểm tra: mục đích sử dụng, thời hạn, điều kiện trả sớm.' },
          { label: 'Đăng ký thuế + MST', range: '3-5 ngày', note: 'Sau khi có ĐKKD. Đăng ký hóa đơn điện tử cùng lúc.' },
          { label: 'Giấy phép rượu bia', range: '10-20 ngày', note: 'Chỉ cần nếu bán rượu >15 độ. Bar/pub bắt buộc phải có.' },
        ] as KBTableRow[],
      },
      {
        type: 'list',
        heading: 'Timeline đăng ký — nên bắt đầu song song',
        content: [
          'Tuần 1-2: Đăng ký kinh doanh + đăng ký thuế (làm đồng thời, 3-5 ngày).',
          'Tuần 2-3: Nộp hồ sơ ATTP (cần ĐKKD). Đồng thời: khám sức khỏe nhân viên.',
          'Tuần 2-3: Mua bình chữa cháy, lắp bảng thoát hiểm → nộp hồ sơ PCCC.',
          'Tuần 3-4: Đăng ký hóa đơn điện tử, setup phần mềm kế toán.',
          'Tuần 4-6: Chờ nhận giấy ATTP + PCCC. Trong lúc chờ: training nhân viên, soft opening.',
        ],
      },
      {
        type: 'warning-list',
        heading: 'Rủi ro pháp lý',
        content: [
          { icon: 'warning', title: 'Mở quán khi chưa có giấy ATTP', desc: 'Phạt 15-30 triệu + đình chỉ hoạt động. Không đáng rủi ro — chờ thêm 2-3 tuần tốt hơn.', severity: 'critical' },
          { icon: 'warning', title: 'Không đóng BHXH cho nhân viên', desc: 'Phạt 12-15%/năm số tiền trốn đóng + truy thu. Năm 2025, thanh tra BHXH siết chặt hơn.', severity: 'critical' },
          { icon: 'warning', title: 'Hợp đồng thuê không công chứng', desc: 'Không có giá trị pháp lý khi tranh chấp. Chủ nhà có thể đuổi bất cứ lúc nào. LUÔN công chứng.', severity: 'warning' },
          { icon: 'warning', title: 'Thuế hộ kinh doanh từ 2025', desc: 'Doanh thu >100 triệu/năm phải nộp thuế khoán (1,5-5% tùy ngành). Tính vào chi phí hàng tháng.', severity: 'tip' },
        ] as KBWarningItem[],
      },
    ],
  },
  // ── PHÁP LÝ (tiếp) ──
  {
    id: 'business_registration',
    icon: 'building',
    title: 'Hộ kinh doanh hay Công ty?',
    subtitle: 'Không phải lúc nào cũng cần mở công ty',
    color: 'secondary-light',
    category: 'legal',
    highlights: [
      { label: 'Quán F&B chạy hộ KD', value: '>80%' },
      { label: 'Lệ phí hộ KD', value: '100K đồng' },
      { label: 'Thuế khoán F&B', value: '4.5%/DT' },
      { label: 'Miễn thuế nếu DT/năm', value: '<200 triệu' },
    ],
    sections: [
      {
        type: 'text',
        content: 'Nhiều người nghĩ mở quán ăn/cà phê phải thành lập công ty. Thực tế, phần lớn quán F&B nhỏ tại Việt Nam hoạt động dưới hình thức Hộ kinh doanh cá thể — thủ tục đơn giản, chi phí thấp, không cần kế toán chuyên nghiệp. Chỉ nên mở công ty khi có nhu cầu thực sự.',
      },
      {
        type: 'table',
        heading: 'So sánh: Hộ kinh doanh vs Công ty TNHH',
        content: [
          { label: 'Thủ tục thành lập', range: 'HKD: 3 ngày', note: 'Cty: 3-5 ngày + setup hóa đơn, chữ ký số, kế toán' },
          { label: 'Chi phí ban đầu', range: 'HKD: ~1.5-3 triệu', note: 'Cty: ~4-8 triệu + 6-16 triệu/năm kế toán' },
          { label: 'Tư cách pháp nhân', range: 'HKD: Không', note: 'Cty: Có — dễ vay vốn, ký hợp đồng lớn' },
          { label: 'Trách nhiệm tài sản', range: 'HKD: Vô hạn', note: 'Cty: Hữu hạn (trong phạm vi vốn điều lệ)' },
          { label: 'Thuế', range: 'HKD: Khoán 4.5%/DT', note: 'Cty: TNDN 15-20% trên lợi nhuận + GTGT 8-10%' },
          { label: 'Kế toán', range: 'HKD: Không bắt buộc', note: 'Cty: Bắt buộc — thuê ngoài 500K-1.3 triệu/tháng' },
          { label: 'Hóa đơn', range: 'HKD: Cơ quan thuế cấp', note: 'Cty: Tự phát hành hóa đơn GTGT, khấu trừ đầu vào' },
          { label: 'Mở chi nhánh', range: 'HKD: Được, thủ tục riêng', note: 'Cty: Dễ dàng, không giới hạn' },
        ] as KBTableRow[],
      },
      {
        type: 'stat-grid',
        heading: 'Thuế hộ kinh doanh F&B (thuế khoán)',
        content: [
          { icon: 'money', label: 'Thuế GTGT', value: '3%', desc: 'Trên tổng doanh thu — ngành dịch vụ ăn uống' },
          { icon: 'wallet', label: 'Thuế TNCN', value: '1.5%', desc: 'Trên tổng doanh thu — thuế thu nhập cá nhân' },
          { icon: 'chart', label: 'Tổng thuế khoán', value: '4.5%', desc: 'DT 500 triệu/năm → thuế ~22.5 triệu (1.9 triệu/tháng)' },
          { icon: 'target', label: 'Miễn thuế', value: '<200 triệu', desc: 'DT dưới 200 triệu/năm → không phải nộp thuế (từ 07/2025)' },
        ] as KBStat[],
      },
      {
        type: 'table',
        heading: 'Ví dụ tính thuế: quán cà phê DT 800 triệu/năm',
        content: [
          { label: 'Doanh thu tháng', range: '~67 triệu', note: 'Trung bình 800 triệu ÷ 12 tháng' },
          { label: 'Thuế GTGT (3%)', range: '2 triệu/tháng', note: '= 24 triệu/năm' },
          { label: 'Thuế TNCN (1.5%)', range: '1 triệu/tháng', note: '= 12 triệu/năm' },
          { label: 'Tổng thuế/tháng', range: '3 triệu/tháng', note: '= 36 triệu/năm (4.5% × 800 triệu)' },
          { label: 'Lệ phí môn bài', range: '1 triệu/năm', note: 'DT > 500 triệu. Sẽ bỏ từ 2026' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Khi nào NÊN chuyển sang Công ty?',
        content: [
          { icon: 'trendingup', title: 'Doanh thu vượt 1 tỷ/năm', desc: 'Từ 06/2025, DT ≥1 tỷ/năm bắt buộc hóa đơn điện tử + máy tính tiền kết nối cơ quan thuế. Nên xem xét chuyển đổi.', severity: 'warning' },
          { icon: 'target', title: 'Muốn mở chuỗi 2-3+ chi nhánh', desc: 'Hộ KD vẫn mở được nhiều địa điểm, nhưng quản lý phức tạp. Công ty TNHH thuận tiện hơn cho chuỗi.', severity: 'warning' },
          { icon: 'wallet', title: 'Cần vay vốn ngân hàng >500 triệu', desc: 'Ngân hàng ưu tiên cho vay doanh nghiệp có tư cách pháp nhân. Hộ KD khó vay số lớn.', severity: 'warning' },
          { icon: 'handshake', title: 'Đối tác yêu cầu hóa đơn GTGT khấu trừ', desc: 'Doanh nghiệp lớn cần hóa đơn đầu vào để khấu trừ thuế. Hộ KD không tự phát hành được.', severity: 'tip' },
          { icon: 'clipboard', title: 'Có nhiều chi phí đầu vào hợp lệ', desc: 'Công ty được khấu trừ thuế GTGT đầu vào — có lợi nếu mua NVL, thiết bị có hóa đơn nhiều.', severity: 'tip' },
        ] as KBWarningItem[],
      },
      {
        type: 'list',
        heading: 'Chi phí thực tế đăng ký Hộ kinh doanh (từ A-Z)',
        content: [
          'Lệ phí đăng ký kinh doanh tại UBND huyện: 100.000 đồng (3 ngày).',
          'Khắc dấu (không bắt buộc): 200.000-500.000 đồng.',
          'Xin giấy chứng nhận ATTP: 500.000-1.000.000 đồng (15-20 ngày).',
          'Khám sức khỏe chủ cơ sở + nhân viên: 200.000-400.000 đồng/người.',
          'Tập huấn kiến thức ATTP: 500.000 đồng/nhóm (thường online).',
          'Bảng hiệu: 500.000-1.500.000 đồng.',
          'Tổng: khoảng 1.5-3 triệu đồng — hoàn tất trong 3-4 tuần.',
        ],
      },
      {
        type: 'warning-list',
        heading: 'Rủi ro nếu không đăng ký',
        content: [
          { icon: 'warning', title: 'Kinh doanh không giấy phép', desc: 'Phạt 5-10 triệu đồng. Kinh doanh thực phẩm không có ATTP: phạt 15-30 triệu + đình chỉ.', severity: 'critical' },
          { icon: 'warning', title: 'Hoạt động như DN nhưng không đăng ký', desc: 'Phạt 50-100 triệu đồng. Ví dụ: mở chuỗi nhiều quán nhưng chỉ đăng ký hộ KD đơn lẻ.', severity: 'critical' },
          { icon: 'warning', title: 'Không đóng thuế', desc: 'Truy thu thuế + phạt chậm nộp 0.03%/ngày. Thêm phạt hành chính 1-3 lần số thuế trốn.', severity: 'critical' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Lời khuyên: Nếu bạn mới bắt đầu, chỉ có 1 quán, doanh thu dự kiến dưới 1 tỷ/năm → đăng ký Hộ kinh doanh. Khi ổn định và muốn mở rộng, có thể chuyển đổi sang Công ty TNHH — được miễn thuế TNDN 2 năm đầu (chính sách từ 10/2025). Nguồn: Nghị định 01/2021, Nghị định 168/2025, Luật Thuế TNCN sửa đổi 2025.',
      },
    ],
  },
  // ── CHIẾN LƯỢC (tiếp) ──
  {
    id: 'checklist_mindset',
    icon: 'check',
    title: 'Tư duy chuẩn bị',
    subtitle: 'Validate trước, mở quán sau',
    color: 'mint-light',
    category: 'strategy',
    sections: [
      {
        type: 'stat-grid',
        heading: 'Con số bạn PHẢI biết trước khi mở quán',
        content: [
          { icon: 'money', label: 'Tổng vốn đầu tư', value: '???', desc: 'Xây dựng + thiết bị + NVL + giấy phép + vốn lưu động + dự phòng.' },
          { icon: 'clock', label: 'Thời gian hoàn vốn', value: '??? tháng', desc: 'Phải dưới 18 tháng. Trên 24 tháng = quá rủi ro.' },
          { icon: 'users', label: 'Số khách/ngày để hòa vốn', value: '??? khách', desc: 'Tổng chi phí cố định / (giá TB - NVL TB). Con số này có thực tế?' },
          { icon: 'wallet', label: 'Số tháng chịu lỗ', value: '??? tháng', desc: 'Bao lâu bạn có thể duy trì nếu doanh thu = 0? Cần ít nhất 3-6 tháng.' },
        ] as KBStat[],
      },
      {
        type: 'list',
        heading: 'Trước khi mở quán, hãy trả lời được:',
        content: [
          'Tôi có bao nhiêu vốn? Bao nhiêu là vay? Lãi suất bao nhiêu/tháng?',
          'Tôi chấp nhận lỗ tối đa bao lâu? (Thường cần 3-6 tháng)',
          'Nếu lỗ tháng thứ 6, tôi có đủ tiền để duy trì không?',
          'Tôi có kinh nghiệm quản lý F&B không? Nếu không, ai giúp? Chi phí?',
          'Tôi đã khảo sát ít nhất 5 đối thủ quanh khu vực chưa? Họ bán gì, giá bao nhiêu?',
          'Mỗi ngày cần bao nhiêu khách để hòa vốn? Con số đó có thực tế với vị trí này?',
          'Tôi có plan B nếu doanh thu chỉ đạt 60% kỳ vọng? (Cắt chi phí nào? Thu hẹp thế nào?)',
          'Ai sẽ quản lý khi tôi vắng? Quy trình vận hành đã chuẩn hóa chưa?',
          'Tôi có sẵn sàng làm việc 12-14 tiếng/ngày trong 6 tháng đầu không?',
        ],
      },
      {
        type: 'text',
        content: 'Tool F&B Validator sẽ giúp bạn trả lời hầu hết các câu hỏi trên bằng số liệu cụ thể. Mất 5 phút nhập liệu — tiết kiệm hàng trăm triệu tiền "học phí". Hãy bắt đầu validate ngay!',
      },
    ],
  },
];

// Index 0 unused — months are 1-indexed
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
