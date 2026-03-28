const wizard = {
  // ─── WizardShell ──────────────────────────────────────────
  shell: {
    backLink: '← Validator.vn',
    homeTitle: 'Về trang chủ',
    builtWith: 'Built with',
    forCommunity: 'for community',
    authorName: 'Khang Pham',
  },

  // ─── ProgressBar ──────────────────────────────────────────
  progress: {
    steps: ['Mô hình', 'Vị trí', 'Vốn đầu tư', 'Doanh thu', 'Chi phí', 'Kết quả'],
    stepsExisting: ['Mô hình', 'Vị trí', 'Vốn đã đầu tư', 'Thực đơn', 'Chi phí', 'Chẩn đoán'],
  },

  // ─── StepModel ────────────────────────────────────────────
  stepModel: {
    badgePopular: 'Phổ biến nhất',
    modeNew: 'Dự án mới',
    modeExisting: 'Đang kinh doanh',
    modeNewDesc: 'Thẩm định ý tưởng kinh doanh F&B trước khi đầu tư',
    modeExistingDesc: 'Phân tích & tối ưu hoạt động kinh doanh hiện tại',
    title: 'Bạn muốn mở loại hình nào?',
    titleExisting: 'Bạn đang kinh doanh loại hình nào?',
    desc: 'Chọn mô hình, nhập ngân sách dự kiến. Chúng tôi gợi ý phần còn lại.',
    descExisting: 'Chọn mô hình phù hợp, nhập số liệu thực tế để phân tích.',
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

    // Existing mode extra fields
    labelActualRevenue: 'Doanh thu thực tế / tháng',
    tooltipActualRevenue: 'Tổng doanh thu trung bình mỗi tháng hiện tại của bạn (tất cả kênh cộng lại).',
    placeholderActualRevenue: 'VD: 150.000.000',
    labelMonthsOperating: 'Đã kinh doanh được bao lâu?',
    monthsOption: '{n} tháng',
    monthsOperatingHint: 'Giúp chúng tôi đánh giá chính xác hơn theo thời gian hoạt động.',

    // Project name
    labelProjectName: 'Tên dự án',
    placeholderProjectName: 'VD: Quán cà phê ABC',
    projectNameHint: 'Đặt tên để dễ phân biệt khi lưu nhiều kịch bản.',
    defaultProjectNew: '{model} - Dự án mới',
    defaultProjectExisting: '{model} - Chẩn đoán',
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
    labelDistrict: 'Quận / Huyện',
    selectDistrict: '— Chọn quận/huyện —',
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

    // Rent benchmark
    rentBenchmarkGood: '✓ Giá thuê hợp lý cho khu vực ({userRent}k/m² — trung bình: {min}-{max}k/m²)',
    rentBenchmarkWarn: '⚠ Hơi cao so với khu vực ({userRent}k/m² — trung bình: {min}-{max}k/m²)',
    rentBenchmarkHigh: '⚠ Cao hơn nhiều so với trung bình khu vực! ({userRent}k/m² — trung bình: {min}-{max}k/m²)',

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
    titleExisting: 'Vốn đã đầu tư',
    desc: 'Tổng tiền cần bỏ ra trước khi mở cửa. Bạn có thể thêm/sửa/xóa các mục tùy ý.',
    descExisting: 'Nhập tổng số vốn đã bỏ ra và vốn lưu động hiện tại.',
    sunkCostLabel: 'Tổng vốn đã đầu tư',
    sunkCostHint: 'Bao gồm tiền thuê ban đầu, xây dựng, thiết bị, v.v. đã chi.',
    existingTotalLabel: 'TỔNG VỐN ĐÃ ĐẦU TƯ',

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
    titleExisting: 'Doanh thu thực tế',
    desc: 'Ước tính lượng khách và mức chi tiêu trung bình.',
    descExisting: 'Nhập số liệu doanh thu thực tế hiện tại của bạn.',
    existingRampNote: 'Bạn đang phân tích doanh thu thực tế — không cần giai đoạn khởi động.',

    // Menu engineering (existing mode)
    sectionMenu: 'Thực đơn chi tiết',
    menuDesc: 'Nhập các món đang bán để phân tích: món nào đang lãi, món nào cần cải thiện.',
    menuItemName: 'Tên món',
    menuItemNamePlaceholder: 'VD: Cà phê sữa đá',
    menuItemPrice: 'Giá bán',
    menuItemCost: 'Giá vốn',
    menuItemCostTooltip: 'Chi phí nguyên liệu để làm 1 phần/ly. Không tính tiền thuê, lương.',
    menuItemSold: 'Số lượng bán/tháng',
    menuItemMargin: 'Lãi/món',
    menuAddItem: '+ Thêm món',
    menuSummary: '{count} món — Tổng doanh thu: {revenue}/tháng',
    menuEmpty: 'Thêm ít nhất 3-5 món chính để phân tích chính xác.',

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

    // Channel costs (existing mode)
    sectionChannelCosts: 'Chi phí theo kênh bán',
    channelCostsDesc: 'Nhập chi phí riêng cho từng kênh để biết kênh nào thực sự có lãi.',
    labelPackagingPerOrder: 'Phí đóng gói / đơn mang về & giao hàng',
    placeholderPackaging: 'VD: 5.000',
    labelGrabComm: 'Hoa hồng GrabFood (%)',
    labelShopeeComm: 'Hoa hồng ShopeeFood (%)',
    labelOwnDelivery: '% đơn giao tự vận chuyển',
    ownDeliveryHint: 'Đơn giao hàng không qua app (tự ship, web riêng)',
    labelMarketingDinein: 'Chi phí marketing tại quán / tháng',
    labelMarketingDelivery: 'Chi phí marketing online (quảng cáo app) / tháng',

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

    // Existing mode dashboard sections
    titleExisting: 'Chẩn đoán sức khỏe kinh doanh',
    descExisting: 'Dựa trên số liệu thực tế, đây là bức tranh kinh doanh hiện tại của bạn.',
    sectionCostDiagnosis: 'Chi phí đang ở đâu?',
    sectionChannelProfit: 'Kênh nào đang thực sự có lãi?',
    sectionMenuMatrix: 'Phân tích thực đơn',
    sectionBenchmark: 'So với ngành',
    sectionQuickWins: 'Cải thiện ngay',
    sectionSensitivity: 'Nếu thay đổi thì sao?',
    sectionImpact: 'Cải thiện — bức tranh sau khi tối ưu',

    // Existing mode KPIs
    kpiHealthScore: 'Sức khỏe',
    kpiNetProfit: 'Lãi ròng/tháng',
    kpiNetMargin: 'Biên lãi ròng',
    kpiRentRatio: 'Thuê/DT',

    // Collapsible sections (cont.)
    sectionOptimization: 'Gợi ý tối ưu',
    sectionAIChat: 'Hỏi AI chuyên gia',

    // Baseline comparison
    saveBaseline: 'Lưu làm kịch bản gốc',
    clearBaseline: 'Xóa kịch bản gốc',

    // Buttons
    btnEdit: '← Chỉnh sửa lại',
    btnExportExcel: 'Xuất Excel',
    btnExportPDF: 'Xuất PDF',
    btnPrint: 'In',
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

  // ─── Feedback ────────────────────────────────────────────
  feedback: {
    heading: 'Trải nghiệm của bạn thế nào?',
    desc: 'Giúp mình cải thiện công cụ nhé — chỉ mất 5 giây!',
    ratings: ['Rất tệ', 'Tệ', 'Bình thường', 'Tốt', 'Rất tốt'],
    commentPlaceholder: 'Góp ý thêm (tuỳ chọn)...',
    submit: 'Gửi đánh giá',
    thanks: 'Cảm ơn bạn đã đánh giá! 🙏',
  },

  // ─── Share / Spread the word ────────────────────────────
  share: {
    heading: 'Thấy hữu ích? Chia sẻ cho bạn bè!',
    desc: 'Giúp nhiều chủ quán F&B biết đến công cụ miễn phí này.',
    shareFacebook: 'Facebook',
    shareLinkedin: 'LinkedIn',
    copyLink: 'Copy link',
    copied: 'Đã copy!',
    downloadImage: 'Tải hình kết quả',
    followUs: 'Theo dõi Validator.vn',
    shareText: 'Mình vừa thử công cụ thẩm định F&B miễn phí — khá hay! Nhập số liệu vào là biết ngay quán có lãi không, bao lâu hòa vốn. Chia sẻ cho ai đang tính mở quán hoặc đang kinh doanh F&B nhé 👉',
  },

  // ─── Onboarding ─────────────────────────────────────────
  onboarding: {
    welcomeHeading: 'Chào mừng đến Validator.vn!',
    welcomeDesc: 'Công cụ phân tích tài chính miễn phí giúp bạn thẩm định ý tưởng kinh doanh F&B trước khi bỏ vốn.',
    optionPlanning: 'Tôi đang lên kế hoạch mở quán',
    optionPlanningDesc: 'Phân tích chi phí, doanh thu, hòa vốn',
    optionExisting: 'Tôi đã có quán, muốn chẩn đoán',
    optionExistingDesc: 'Kiểm tra sức khỏe tài chính hiện tại',
    skip: 'Bỏ qua',
    quickStart: 'Điền nhanh',
    quickStartDesc: 'Chọn mẫu gần nhất với ý tưởng của bạn',
  },

  // ─── Shared / Common ─────────────────────────────────────
  common: {
    next: 'Tiếp theo',
    back: 'Quay lại',
  },
};

export default wizard;
