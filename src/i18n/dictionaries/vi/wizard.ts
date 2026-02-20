const wizard = {
  // ─── WizardShell ──────────────────────────────────────────
  shell: {
    backLink: '← Validator.vn',
    homeTitle: 'Về trang chủ',
    builtWith: 'Built with',
    forCommunity: 'for community by',
    authorName: 'Khang Pham',
  },

  // ─── ProgressBar ──────────────────────────────────────────
  progress: {
    steps: ['Mô hình', 'Vị trí', 'Vốn đầu tư', 'Doanh thu', 'Chi phí', 'Kết quả'],
  },

  // ─── StepModel ────────────────────────────────────────────
  stepModel: {
    title: 'Bạn muốn mở loại hình nào?',
    desc: 'Chọn mô hình, nhập ngân sách dự kiến. Chúng tôi gợi ý phần còn lại.',
    alertNoModel: 'Chọn mô hình trước!',
    sectionBudget: 'Ngân sách & Chi phí thuê',
    labelBudget: 'Tổng ngân sách đầu tư dự kiến',
    tooltipBudget:
      'Tổng số tiền bạn có thể bỏ ra để mở quán — bao gồm tiền thuê, sửa sang, thiết bị, vốn xoay...',
    placeholderBudget: 'VD: 500.000.000',
    investHint: '{model} thường đầu tư: {range}',
    labelRent: 'Tiền thuê mặt bằng / tháng',
    placeholderRent: 'VD: 25.000.000',
    rentHint: '{model} thường thuê: {min} - {max}/tháng',
    rentHintNoModel: 'Chọn mô hình để xem gợi ý',
    backLabel: 'Trang chủ',
  },

  // ─── StepLocation ─────────────────────────────────────────
  stepLocation: {
    title: 'Vị trí & Quy mô',
    desc: 'Địa điểm quyết định 80% thành bại. Hãy chọn kỹ!',

    // Location section
    sectionLocation: 'Địa điểm',
    labelCity: 'Thành phố',
    cities: {
      hcm: 'TP. Hồ Chí Minh',
      hanoi: 'Hà Nội',
      danang: 'Đà Nẵng',
      other: 'Tỉnh/thành khác',
    },
    labelArea: 'Khu vực',
    areas: {
      center: 'Quận trung tâm',
      suburb: 'Quận ngoại ô',
      residential: 'Khu dân cư',
      mall: 'Trung tâm thương mại',
    },

    // Scale section
    sectionScale: 'Quy mô',
    labelSqm: 'Diện tích kê bàn ghế (m²)',
    tooltipSqm:
      'Chỉ tính phần dành cho khách ngồi, KHÔNG tính bếp/kho. Bếp thường chiếm thêm 30-40% diện tích.',
    labelSeats: 'Số chỗ ngồi',
    labelDaysPerWeek: 'Ngày mở cửa/tuần',
    daysOption: '{n} ngày',

    // Seat-ratio alerts
    alertTooCramped: '⚠ Quá chật! Cần tối thiểu 1m²/chỗ ngồi. Hiện: {ratio}m²/chỗ.',
    alertSlightlyTight: '⚠ Hơi chật ({ratio}m²/chỗ). Lý tưởng: 1.3-2m²/chỗ.',
    alertReasonable: '✓ Hợp lý ({ratio}m²/chỗ ngồi)',
    alertTooSpacious:
      '⚠ Quá rộng ({ratio}m²/chỗ) — lãng phí diện tích, chi phí thuê cao. Nên <3m²/chỗ.',

    // Channels section
    sectionChannels: 'Kênh bán hàng',
    tooltipChannels:
      'Tỷ lệ doanh thu dự kiến từ mỗi kênh. Giao hàng app sẽ bị trừ phí hoa hồng 20-30%.',
    channelsHint: 'Nhập phần trăm dự kiến cho mỗi kênh (tổng nên = 100%)',
    channelDinein: 'Tại quán',
    channelTakeaway: 'Mang về',
    channelDelivery: 'Giao hàng app',
    channelSumWarning: 'Tổng đang = {sum}% (cần = 100%)',
  },

  // ─── StepInvestment ───────────────────────────────────────
  stepInvestment: {
    title: 'Vốn đầu tư ban đầu',
    desc: 'Tổng tiền cần bỏ ra trước khi mở cửa. Bạn có thể thêm/sửa/xóa các mục tùy ý.',

    // Premises section
    sectionPremises: 'Mặt bằng',
    labelDeposit: 'Tiền cọc',
    tooltipDeposit:
      'Thường từ 1-6 tháng tiền thuê, tùy chủ nhà. Trung tâm thường đòi 3-6 tháng, ngoại ô 1-3 tháng.',
    depositMonthsOption: '{n} tháng thuê',
    depositHint: 'Chọn số tháng hoặc nhập trực tiếp số tiền cọc.',
    subtotalPremises: 'Tổng mặt bằng',

    // Construction section
    sectionConstruction: 'Xây dựng & Trang trí',
    subtotalConstruction: 'Tổng xây dựng',

    // Equipment section
    sectionEquipment: 'Thiết bị',
    subtotalEquipment: 'Tổng thiết bị',

    // Other section
    sectionOther: 'Khác',
    subtotalOther: 'Tổng khác',

    // Working capital section
    sectionWorkingCap: 'Vốn lưu động dự phòng',
    tooltipWorkingCap:
      'Tiền dự trữ để trả chi phí 2-3 tháng đầu khi chưa đủ khách. Thiếu khoản này là nguyên nhân phá sản số 1!',
    subtotalWorkingCap: 'Dự phòng',

    // Breakdown category labels
    catPremises: 'Mặt bằng',
    catConstruction: 'Xây dựng',
    catEquipment: 'Thiết bị',
    catOther: 'Khác',
    catReserve: 'Dự phòng',

    // Running total
    totalLabel: 'TỔNG VỐN ĐẦU TƯ BAN ĐẦU',
    overBudget: 'Vượt ngân sách {amount}',
    withinBudget: 'Trong ngân sách ({budget})',
  },

  // ─── StepRevenue ──────────────────────────────────────────
  stepRevenue: {
    title: 'Doanh thu dự kiến',
    desc: 'Ước tính lượng khách và mức chi tiêu trung bình.',

    // Ticket section
    sectionTicket: 'Giá bill trung bình',
    tooltipTicket:
      'Tổng tiền TB 1 khách chi 1 lần. Thêm các mục con để tính chính xác hơn.',
    ticketHint: 'Thêm các mục khách thường gọi, hệ thống tự tính giá bill TB.',
    itemNamePlaceholder: 'Tên món (VD: Cà phê sữa)',
    itemPricePlaceholder: 'Giá',
    addItem: '+ Thêm mục',
    avgTicketLabel: 'Giá bill trung bình',
    benchmarkTicket: '{model}: {min} - {max}',

    // Customer matrix section
    sectionCustomers: 'Lượng khách / ngày',
    customersHint:
      'Nhập số khách dự kiến theo từng khung giờ. Bỏ trống = không hoạt động giờ đó.',
    periodMorning: 'Sáng',
    periodMorningTime: '(6-11h)',
    periodNoon: 'Trưa',
    periodNoonTime: '(11-14h)',
    periodAfternoon: 'Chiều',
    periodAfternoonTime: '(14-17h)',
    periodEvening: 'Tối',
    periodEveningTime: '(17-22h)',
    totalPerDay: 'Tổng/ngày',
    weekday: 'T2-T6',
    weekend: 'T7-CN',
    benchmarkCustomers:
      '{model}: ngày thường {wdMin}-{wdMax} khách, cuối tuần {weMin}-{weMax} khách',

    // Ramp section
    sectionRamp: 'Giai đoạn khởi động',
    tooltipRamp:
      'Tháng đầu mới mở chưa ai biết, khách chỉ bằng 40-60% mục tiêu. Dần dần mới đạt tối đa.',
    rampMonth: 'Tháng {n}',

    // Revenue preview section
    sectionPreview: 'Doanh thu ước tính',
    previewDaily: 'Trung bình / ngày',
    previewMonth1: 'Tháng đầu tiên',
    previewStable: 'Khi ổn định (tháng 6+)',
  },

  // ─── StepCosts ────────────────────────────────────────────
  stepCosts: {
    title: 'Chi phí vận hành hàng tháng',
    desc: 'Mỗi tháng cần trả bao nhiêu? Bạn có thể thêm/sửa mục tùy ý.',

    // Fixed costs section
    sectionFixed: 'Chi phí cố định',
    tooltipFixed: 'Phải trả đều đặn dù bán được hay không: thuê, lương, internet...',
    labelRent: 'Tiền thuê (đã nhập ở bước 1)',
    labelStaff: 'Nhân sự',
    staffColPosition: 'Vị trí',
    staffColCount: 'Số người',
    staffColSalary: 'Lương/người',
    staffColTotal: 'Tổng',
    addPosition: '+ Thêm vị trí',
    labelBhxh: 'Có đóng BHXH (27.5%)',
    tooltipBhxh:
      'Nếu bạn là hộ kinh doanh cá thể hoặc chưa đăng ký BHXH cho nhân viên, có thể bỏ tick này.',
    sectionFixedOther: 'Chi phí cố định khác',

    // Fixed subtotal labels
    subtotalRent: 'Thuê mặt bằng',
    subtotalStaff: 'Lương nhân sự',
    subtotalBhxh: 'BHXH (27.5%)',
    subtotalFixedOther: 'Cố định khác',
    subtotalFixedTotal: 'Tổng chi phí cố định',

    // Variable costs section
    sectionVariable: 'Chi phí biến đổi',
    tooltipVariable: 'Tăng/giảm theo doanh thu: nguyên liệu, bao bì, phí app...',
    labelCogs: 'Nguyên vật liệu (% doanh thu)',
    labelWaste: 'Hao hụt / đổ bỏ (% NVL)',
    labelDeliveryComm: 'Phí app giao hàng (% đơn delivery)',
    hintDeliveryComm: 'GrabFood 20-30%, ShopeeFood 15-25%',
    sectionVarOther: 'Chi phí biến đổi khác (hàng tháng)',

    // Variable subtotal labels
    subtotalCogs: 'Nguyên vật liệu ({pct}%)',
    subtotalWaste: 'Hao hụt ({pct}% NVL)',
    subtotalDelivery: 'Phí giao hàng ({pct}%)',
    subtotalVarOther: 'Biến đổi khác',
    subtotalVarTotal: 'Tổng chi phí biến đổi',

    // Monthly total
    monthlyTotalLabel: 'TỔNG CHI PHÍ ƯỚC TÍNH / THÁNG (khi ổn định)',
    costRatioText: 'Chi phí chiếm {pct}% doanh thu',
    costRatioHigh: ' — Quá cao!',
    costRatioSlightlyHigh: ' — Hơi cao',
    costRatioOk: ' — Hợp lý',

    // Navigation
    nextLabel: 'Xem kết quả',
  },

  // ─── StepDashboard ────────────────────────────────────────
  stepDashboard: {
    title: 'Kết quả phân tích',
    desc: 'Dựa trên thông tin bạn cung cấp, đây là bức tranh tài chính dự kiến.',

    // Overview
    sectionOverview: 'Tổng quan',
    kpiProfit: 'Lợi nhuận/tháng',
    kpiPayback: 'Hoàn vốn sau',
    kpiPaybackMonths: '{n} tháng',
    kpiPaybackLong: '>12 tháng',
    kpiMargin: 'Biên lợi nhuận',
    kpiReserve: 'Dự phòng',
    kpiReserveMonths: '{n} tháng',

    // Collapsible sections
    sectionPnl: 'Lãi lỗ & Dòng tiền 12 tháng',
    sectionBreakeven: 'Bao giờ hòa vốn?',
    sectionAnalysis: 'Báo cáo phân tích chi tiết',
    sectionHealth: 'Sức khỏe chi phí & Sensitivity',

    // Buttons
    btnEdit: '← Chỉnh sửa lại',
    btnExportExcel: 'Xuất Excel',
    btnPrint: 'In / Xuất PDF',
  },

  // ─── QuickCalc ────────────────────────────────────────────
  quickCalc: {
    title: 'Tính nhanh',
    desc: 'Nhập 6 con số cơ bản, xem ngay kết quả ước tính',

    // Input labels
    labelAvgTicket: 'Giá trung bình / đơn',
    placeholderAvgTicket: 'VD: 50.000',
    labelCustsPerDay: 'Khách / ngày (trung bình)',
    placeholderCustsPerDay: 'VD: 80',
    labelRent: 'Tiền thuê / tháng',
    placeholderRent: 'VD: 20.000.000',
    labelStaffCost: 'Tổng lương nhân sự / tháng',
    placeholderStaffCost: 'VD: 30.000.000',
    labelInvestment: 'Tổng vốn đầu tư ban đầu',
    placeholderInvestment: 'VD: 500.000.000',
    labelFoodCost: 'Food Cost %',
    hintFoodCost: 'Tỷ lệ nguyên vật liệu / doanh thu',

    // KPI labels
    kpiRevenue: 'Doanh thu/tháng',
    kpiProfit: 'Lợi nhuận/tháng',
    kpiMargin: 'Biên lợi nhuận',
    kpiPayback: 'Hoàn vốn',
    kpiPaybackMonths: '{n} tháng',
    kpiPaybackLong: '> 12 tháng',
    kpiScore: 'Điểm khả thi',

    // CTA
    ctaButton: 'Muốn phân tích chi tiết hơn? Bắt đầu Wizard →',
  },

  // ─── Shared / Common ─────────────────────────────────────
  common: {
    next: 'Tiếp theo',
    back: 'Quay lại',
  },
};

export default wizard;
