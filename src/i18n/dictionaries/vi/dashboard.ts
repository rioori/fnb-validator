const dashboard = {
  // ─── ScoreRing ───
  score: {
    labelGood: 'Khả thi tốt',
    labelWarn: 'Cần cải thiện',
    labelBad: 'Rủi ro cao',
    outOf: '/100',
  },

  // ─── KPIGrid ───
  kpi: {
    bepRevenueLabel: 'DT hòa vốn/tháng',
    bepCustomersLabel: 'Khách hòa vốn/ngày',
    paybackLabel: 'Hoàn vốn đầu tư',
    customersUnit: 'khách',
    monthsUnit: 'tháng',
    moreThan12: '>12 tháng',
  },

  // ─── OverviewAlerts ───
  alerts: {
    rentTooHigh: 'Tiền thuê {pct}% DT — quá cao! Nên < 20%.',
    rentSlightlyHigh: 'Tiền thuê {pct}% — hơi cao.',
    cogsTooHigh: 'NVL {pct}% — quá cao!',
    primeCostDanger: 'NVL + Nhân sự = {pct}% — nguy hiểm!',
    workingCapLow: 'Vốn dự phòng chỉ {months} tháng — cần >= 3!',
    deliveryHigh: 'Phụ thuộc delivery {pct}% — phí cao.',
    projectedLoss: 'Dự kiến LỖ {amount}/tháng khi ổn định!',
    viable: 'Mô hình khả thi! Xem chi tiết bên dưới.',
  },

  // ─── PnLSection + PnLChart ───
  pnl: {
    netRevenue: 'Doanh thu thuần',
    cogs: '- NVL',
    waste: '- Hao hụt',
    grossProfit: '= Lợi nhuận gộp',
    rent: '- Thuê',
    staffBhxh: '- Nhân sự+BHXH',
    fixedOther: '- CP cố định khác',
    varOther: '- CP biến đổi khác',
    netProfit: '= LỢI NHUẬN RÒNG',
    detailToggle: 'Xem bảng chi tiết lãi lỗ',
    colCategory: 'Hạng mục',
    monthPrefix: 'T',
  },

  // ─── BreakEvenSection + BEPChart ───
  breakeven: {
    minCustomers: 'Cần tối thiểu <strong>{count} khách/ngày</strong> để không lỗ.',
    paybackSummary: 'Thu hồi vốn {investment} sau khoảng {months} tháng.',
    paybackLong: 'Cần >12 tháng để thu hồi vốn {investment}.',
  },

  // ─── HealthGauges ───
  health: {
    rawMaterials: 'Nguyên vật liệu',
    rent: 'Tiền thuê',
    labor: 'Nhân sự',
    primeCost: 'Prime Cost (NVL+NS)',
    netMargin: 'Biên lợi nhuận',
    delivery: 'Delivery',
    industryBenchmark: 'Ngành: {lo}-{hi}%',
  },

  // ─── SensitivityPanel ───
  sensitivity: {
    title: 'Nếu thay đổi thì sao?',
    subtitle: 'Kéo thanh trượt để xem lợi nhuận thay đổi thế nào.',
    customers: 'Số khách',
    ticketSize: 'Giá bill',
    cogsCost: 'Chi phí NVL',
    rentCost: 'Tiền thuê',
    customersPerDay: '{n} khách/ngày',
    revenueOfSales: '{pct}% DT',
    resultRevenue: 'Doanh thu',
    resultProfit: 'Lợi nhuận',
    resultChange: 'Thay đổi',
  },

  // ─── ChecklistPanel ───
  checklist: {},

  // ─── AIAdvisor ───
  advisor: {
    description: 'Nhập API key DeepSeek để nhận phân tích chi tiết.',
    apiKeyLabel: 'DeepSeek API Key',
    analyzing: 'Đang phân tích...',
    askAI: 'Nhờ AI tư vấn',
    aiAnalyzing: 'AI đang phân tích...',
    enterApiKey: 'Nhập API key!',
    errorPrefix: 'Lỗi:',
    systemPrompt: 'Bạn là chuyên gia tư vấn F&B Việt Nam 15 năm. Phân tích bằng tiếng Việt dễ hiểu, có số liệu cụ thể.',
    userPromptTemplate:
      'Phân tích F&B:\nMÔ HÌNH: {modelName}\nVỐN: {investment}\nDT/tháng (ổn định): {revenue}\nLợi nhuận: {profit} ({netMargin}%)\nThuê: {rentPct}%, NVL: {cogsPct}%, NS: {laborPct}%\nPrime Cost: {primeCost}%\nHòa vốn: {bepCust} khách/ngày, hoàn vốn {payback} tháng\nĐiểm: {score}/100\n\nPhân tích: 1)Tổng quan 2)Điểm mạnh 3)Rủi ro 4)Khuyến nghị cụ thể 5)Mẹo tiết kiệm. Dùng tiếng Việt đời thường.',
  },

  // ─── AnalysisReport ───
  analysis: {
    sectionTitle: 'Phân tích chi tiết',
    scoreLabelExcellent: 'Khả thi tốt',
    scoreLabelModerate: 'Cần cân nhắc',
    scoreLabelRisky: 'Rủi ro cao',
    scoreLabelVeryRisky: 'Rất rủi ro',
    defaultModelName: 'Mô hình F&B',

    overallTitle: 'Đánh giá tổng quan',
    overallVerdict:
      'Với mô hình {modelName}, tổng vốn đầu tư {investment}, mô hình của bạn được chấm {score}/100 điểm — mức "{label}".',
    overallProfitable:
      'Khi hoạt động ổn định (từ tháng 7+), dự kiến lợi nhuận ròng đạt khoảng {profit}/tháng, tương đương biên lợi nhuận {margin}%.',
    overallLoss:
      'Tuy nhiên, mô hình hiện tại dự kiến LỖ {loss}/tháng ngay cả khi đã ổn định. Bạn cần xem xét lại cấu trúc chi phí hoặc tăng doanh thu.',

    revenueTitle: 'Doanh thu dự kiến',
    revenueBody:
      'Tháng đầu tiên (giai đoạn khởi động), doanh thu ước tính khoảng {m1Rev}. Khi đạt 100% công suất (từ tháng 7), doanh thu tăng lên {stableRev}/tháng (+{growthPct}%).',
    deliveryHighNote:
      'Lưu ý: {pct}% doanh thu đến từ delivery — hoa hồng app sẽ ăn mất khoảng {commission}/tháng.',
    deliveryOkNote:
      'Phí delivery app chiếm {commission}/tháng — mức chấp nhận được.',

    costTitle: 'Cấu trúc chi phí',
    costBody:
      'Chi phí cố định hàng tháng: {fixedMonthly} (thuê {rent} + nhân sự {staff} + khác {otherFixed}). Nguyên vật liệu chiếm {cogsPct}% doanh thu. Tổng Prime Cost (NVL + Nhân sự) = {primeCost}%',
    primeCostGood: '— mức lý tưởng, còn dư biên lợi nhuận tốt',
    primeCostAvg: '— ở ngưỡng trung bình, nên tối ưu thêm',
    primeCostBad: '— quá cao! Cần giảm NVL hoặc tinh gọn nhân sự',

    rentTitle: 'Tỷ lệ thuê mặt bằng',
    rentIntro: 'Tiền thuê chiếm {pct}% doanh thu ròng.',
    rentExcellent: 'Đây là tỷ lệ rất tốt — bạn có nhiều dư địa để sinh lời.',
    rentOk: 'Mức hợp lý cho ngành F&B. Cố gắng giữ dưới 20%.',
    rentHigh:
      'Hơi cao. Mỗi % thuê vượt 20% là ăn thẳng vào lợi nhuận ròng. Cân nhắc đàm phán lại hoặc tìm mặt bằng khác.',
    rentTooHigh:
      'QUÁ CAO! Với tỷ lệ này, rất khó để có lãi bền vững. Đây là nguyên nhân hàng đầu khiến quán F&B đóng cửa.',

    breakEvenTitle: 'Thời gian hòa vốn',
    breakEvenWithPayback:
      'Với tốc độ tăng trưởng dự kiến, bạn sẽ hòa vốn sau khoảng {months} tháng. Để hòa vốn hàng tháng, cần tối thiểu {bepRevenue} doanh thu — tương đương {bepCust} khách/ngày.',
    breakEvenFast: 'Đây là thời gian hoàn vốn khá tốt cho ngành F&B.',
    breakEvenMedium:
      'Thời gian hòa vốn chấp nhận được, nhưng cần kiểm soát chi phí chặt trong giai đoạn đầu.',
    breakEvenSlow:
      'Thời gian khá dài — bạn cần đảm bảo có đủ vốn dự phòng để trụ được.',
    breakEvenNever:
      'Với cấu trúc hiện tại, mô hình KHÔNG hòa vốn trong 12 tháng đầu. Cần doanh thu tối thiểu {bepRevenue}/tháng ({bepCust}) mới đạt điểm hòa vốn. Hãy xem xét giảm chi phí cố định hoặc tăng giá bill trung bình.',

    workingCapTitle: 'Vốn dự phòng',
    workingCapIntro:
      'Vốn lưu động dự phòng của bạn đủ cho {months} tháng vận hành (nếu không có doanh thu).',
    workingCapGood:
      'Đây là mức an toàn — đủ để vượt qua giai đoạn khởi động khó khăn nhất.',
    workingCapWarn:
      'Hơi mỏng. Ngành F&B khuyến nghị ít nhất 3 tháng dự phòng. Giai đoạn đầu thường lỗ, nếu hết tiền trước khi có khách quen, bạn sẽ phải đóng cửa.',
    workingCapBad:
      'NGUY HIỂM! Không đủ vốn dự phòng là nguyên nhân số 1 khiến quán F&B đóng cửa sớm. Hãy tăng ngân sách dự phòng lên ít nhất 3 tháng chi phí cố định.',

    profitTrajectoryTitle: 'Quỹ đạo lợi nhuận 12 tháng',
    profitLabel: 'lãi',
    lossLabel: 'lỗ',
    totalProfit12:
      'Tháng 1: {m1Sign} {m1} → Tháng 6: {m6Sign} {m6} → Tháng 12: {m12Sign} {m12}. Tổng lợi nhuận 12 tháng: {totalSign}{total}.',
    profitTrajectoryGood:
      'Sau 1 năm, bạn đã bắt đầu thu hồi vốn đầu tư ban đầu.',
    profitTrajectoryBad:
      'Sau 1 năm, bạn vẫn chưa thu hồi được vốn. Cần xem xét lại mô hình kinh doanh.',

    recommendationTitle: 'Khuyến nghị quan trọng nhất',
    topRiskRent: 'thuê mặt bằng quá cao',
    topRiskPrimeCost: 'prime cost quá cao',
    topRiskWorkingCap: 'vốn dự phòng quá mỏng',
    topRiskNoProfit: 'chưa có lãi ở trạng thái ổn định',
    riskIntro: 'Rủi ro lớn nhất hiện tại: {risk}.',
    adviceRent:
      'Ưu tiên tìm mặt bằng thuê thấp hơn — đây là yếu tố ảnh hưởng lớn nhất đến khả năng sinh lời.',
    advicePrimeCost:
      'Cần tối ưu hóa chi phí nguyên vật liệu (đàm phán NCC, giảm hao hụt) hoặc tinh gọn nhân sự.',
    adviceWorkingCap:
      'Hãy chuẩn bị thêm vốn dự phòng trước khi bắt đầu. "Hết tiền" là cách phổ biến nhất mà các quán F&B đóng cửa.',
    adviceGeneral:
      'Xem xét tăng giá bill trung bình, giảm chi phí, hoặc tăng lượng khách để đạt điểm hòa vốn.',

    disclaimer:
      '* Phân tích dựa trên dữ liệu bạn nhập và benchmark ngành. Kết quả thực tế có thể khác tùy vào điều kiện thị trường.',
  },

  // ─── SavePrompt ───
  save: {
    defaultScenarioName: 'Kịch bản mới',
    savedSuccess: 'Đã lưu kịch bản thành công!',
    savedHint: 'Bạn có thể chọn lại từ menu phía trên.',
    saveQuestion: 'Lưu kết quả này?',
    saveHint: 'Lưu lại để xem lại hoặc so sánh sau.',
    saving: 'Đang lưu...',
    saveScenario: 'Lưu kịch bản',
    signupSavedSuccess: 'Tạo tài khoản & lưu thành công!',
    signupSavedHint: 'Lần sau đăng nhập lại để xem kịch bản này.',
    validationPhonePassword: 'Nhập SĐT/email và mật khẩu',
    validationPasswordLength: 'Mật khẩu tối thiểu 6 ký tự',
    loginFailed: 'Đăng nhập thất bại',
    genericError: 'Có lỗi xảy ra',
    guestSaveTitle: 'Lưu kết quả để xem lại sau?',
    signupPrompt: 'Tạo tài khoản chỉ mất 5 giây — chỉ cần SĐT + mật khẩu.',
    loginPrompt: 'Đăng nhập để lưu kịch bản.',
    phonePlaceholder: 'SĐT hoặc email',
    signupPasswordPlaceholder: 'Tạo mật khẩu (6+ ký tự)',
    loginPasswordPlaceholder: 'Mật khẩu',
    saveNow: 'Lưu ngay →',
    loginAndSave: 'Đăng nhập & Lưu →',
    hasAccount: 'Đã có tài khoản?',
    loginLink: 'Đăng nhập',
    noAccount: 'Chưa có tài khoản?',
    signupLink: 'Đăng ký mới',
    scenarioLimitWarn: 'Bạn đã lưu {count}/10 kịch bản. Hãy xóa bớt để thêm mới.',
    scenarioLimitMax: 'Đã đạt tối đa 10 kịch bản. Xóa bớt kịch bản cũ để lưu thêm.',
  },

  // ─── ComparisonBar ───
  comparison: {
    title: 'So sánh kịch bản',
    baseline: 'Gốc',
    current: 'Hiện tại',
    delta: 'Thay đổi',
    score: 'Điểm',
    profit: 'Lợi nhuận',
    payback: 'Hoàn vốn',
    margin: 'Biên LN',
    months: 'tháng',
    noPayback: '>12',
  },

  // ─── OptimizationPanel ───
  optimization: {
    title: 'Gợi ý tối ưu hóa',
    subtitle: 'Dựa trên số liệu của bạn, đây là những cải thiện có tác động lớn nhất.',
    currentLabel: 'Hiện tại',
    targetLabel: 'Mục tiêu',
    impactLabel: 'Tiết kiệm/tháng',
    noSuggestions: 'Tuyệt vời! Các chỉ số đều nằm trong ngưỡng tối ưu.',
    priorityHigh: 'Ưu tiên cao',
    priorityMedium: 'Trung bình',
    priorityLow: 'Tham khảo',
    rentTitle: 'Giảm chi phí thuê mặt bằng',
    rentDesc: 'Thuê mặt bằng chiếm {pct}% doanh thu — vượt ngưỡng 20%.',
    rentTip: 'Đàm phán lại hợp đồng thuê hoặc tìm mặt bằng thay thế với chi phí thấp hơn.',
    cogsTitle: 'Tối ưu chi phí nguyên vật liệu',
    cogsDesc: 'NVL chiếm {pct}% doanh thu — vượt ngưỡng 35%.',
    cogsTip: 'Đàm phán với nhà cung cấp, tối ưu hóa công thức, hoặc tìm nguồn NVL thay thế.',
    wasteTitle: 'Giảm hao hụt & đổ bỏ',
    wasteDesc: 'Hao hụt đang ở mức {pct}% NVL — vượt ngưỡng 3%.',
    wasteTip: 'Áp dụng quản lý tồn kho chặt hơn, FIFO, và kiểm soát khẩu phần.',
    deliveryTitle: 'Đàm phán phí giao hàng',
    deliveryDesc: 'Phí hoa hồng delivery đang ở {pct}% — có thể giảm 5%.',
    deliveryTip: 'Liên hệ đàm phán giảm phí với app hoặc xây dựng kênh giao hàng riêng.',
    staffTitle: 'Tối ưu chi phí nhân sự',
    staffDesc: 'Nhân sự chiếm {pct}% doanh thu — vượt ngưỡng 25%.',
    staffTip: 'Xem xét lại ca làm việc, sắp xếp nhân sự linh hoạt theo khung giờ cao điểm.',
    pricingTitle: 'Tăng giá bán',
    pricingDesc: 'Biên lợi nhuận chỉ {pct}% — có thể tăng giá bill 5%.',
    pricingTip: 'Thêm combo, upsell, hoặc điều chỉnh giá nhẹ cho các mục có biên thấp.',
    volumeTitle: 'Tăng lượng khách',
    volumeDesc: 'Chỉ cần tăng 10% lượng khách để cải thiện đáng kể lợi nhuận.',
    volumeTip: 'Đẩy mạnh marketing online, chương trình loyalty, hoặc mở rộng kênh bán.',
    workingCapTitle: 'Tăng vốn dự phòng',
    workingCapDesc: 'Vốn dự phòng chỉ đủ {months} tháng — cần tối thiểu 3 tháng.',
    workingCapTip: 'Bổ sung thêm {shortfall} vào quỹ dự phòng trước khi rủi ro xảy ra.',
  },

  // ─── Existing Mode: Score ───
  existingScore: {
    labelGood: 'Sức khỏe tốt',
    labelWarn: 'Cần cải thiện',
    labelBad: 'Đang gặp vấn đề',
    outOf: '/100',
  },

  // ─── Existing Mode: Cost Diagnosis ───
  costDiagnosis: {
    title: 'Chi phí đang ở đâu?',
    subtitle: 'Xem từng khoản chi chiếm bao nhiêu % doanh thu, so với mức chuẩn ngành.',
    categoryLabels: {
      cogs: 'Nguyên vật liệu',
      rent: 'Thuê mặt bằng',
      labor: 'Nhân sự',
      waste: 'Hao hụt & đổ bỏ',
      fixed: 'Cố định khác',
      variable: 'Biến đổi khác',
    },
    ofRevenue: '% doanh thu',
    benchmark: 'Chuẩn ngành: {lo}-{hi}%',
    overBenchmark: 'Vượt chuẩn — có thể tiết kiệm {amount}/tháng',
    withinBenchmark: 'Trong ngưỡng chuẩn',
    statusGood: 'Tốt',
    statusWarn: 'Lưu ý',
    statusBad: 'Cần giảm',
  },

  // ─── Existing Mode: Channel Profitability ───
  channelProfit: {
    title: 'Lãi lỗ theo kênh bán',
    subtitle: 'Mỗi kênh bán có chi phí khác nhau. Xem kênh nào thực sự mang lại lãi.',
    channelLabels: {
      dinein: 'Tại quán',
      takeaway: 'Mang về',
      delivery: 'Giao hàng app',
    },
    revenue: 'Doanh thu',
    cogs: 'Nguyên liệu',
    commission: 'Hoa hồng app',
    packaging: 'Đóng gói',
    marketing: 'Quảng cáo',
    contribution: 'Lãi gộp kênh',
    contributionMargin: 'Biên lãi',
    profitable: 'Có lãi',
    losing: 'Đang lỗ',
    noRevenue: 'Không có doanh thu',
  },

  // ─── Existing Mode: Menu Matrix ───
  menuMatrix: {
    title: 'Phân tích thực đơn',
    subtitle: 'Mỗi món được phân loại dựa trên mức độ bán chạy và lãi trên mỗi món.',
    categories: {
      star: 'Ngôi sao',
      starDesc: 'Bán chạy & lãi cao — giữ nguyên, đẩy mạnh',
      plowhorse: 'Bán chạy',
      plowhorseDesc: 'Nhiều người mua nhưng lãi thấp — tăng giá hoặc giảm giá vốn',
      puzzle: 'Tiềm năng',
      puzzleDesc: 'Lãi cao nhưng ít người mua — quảng bá, upsell nhiều hơn',
      dog: 'Cần xem lại',
      dogDesc: 'Ít người mua & lãi thấp — cân nhắc bỏ hoặc thay đổi',
    },
    colName: 'Tên món',
    colPrice: 'Giá bán',
    colCost: 'Giá vốn',
    colMargin: 'Lãi/món',
    colMarginPct: '% lãi',
    colSold: 'Bán/tháng',
    colMonthlyProfit: 'Lãi/tháng',
    colCategory: 'Phân loại',
    noItems: 'Chưa có món nào. Quay lại bước Thực đơn để nhập.',
  },

  // ─── Existing Mode: Benchmark Comparison ───
  benchmark: {
    title: 'So sánh với chuẩn ngành',
    subtitle: 'Các chỉ số của bạn so với mức trung bình ngành F&B cùng loại.',
    metricLabels: {
      cogs: 'Nguyên vật liệu',
      rent: 'Thuê mặt bằng',
      labor: 'Nhân sự',
      primeCost: 'NVL + Nhân sự',
      netMargin: 'Biên lãi ròng',
      revenuePerSeat: 'Doanh thu/ghế/ngày',
    },
    yourValue: 'Của bạn',
    industryRange: 'Chuẩn ngành',
    statusGood: 'Tốt',
    statusWarn: 'Cần lưu ý',
    statusBad: 'Cần cải thiện',
  },

  // ─── Existing Mode: Quick Wins ───
  quickWins: {
    title: 'Có thể cải thiện ngay',
    subtitle: 'Những thay đổi có tác động lớn nhất, sắp xếp theo mức tiết kiệm.',
    currentLabel: 'Hiện tại',
    targetLabel: 'Mục tiêu',
    impactLabel: 'Tiết kiệm/tháng',
    effortEasy: 'Dễ làm',
    effortMedium: 'Trung bình',
    effortHard: 'Cần thời gian',
    noWins: 'Tuyệt vời! Các chỉ số đều ổn, không có cải thiện nào cần ưu tiên.',
    // Quick win item keys
    rentTitle: 'Giảm chi phí thuê',
    rentDesc: 'Thuê đang chiếm {pct}% doanh thu — nên dưới {target}%.',
    rentAction: 'Đàm phán lại giá thuê hoặc xem xét mặt bằng khác.',
    cogsTitle: 'Giảm chi phí nguyên liệu',
    cogsDesc: 'Nguyên liệu chiếm {pct}% doanh thu — nên dưới {target}%.',
    cogsAction: 'Thương lượng với nhà cung cấp, tối ưu công thức, tìm nguồn thay thế.',
    wasteTitle: 'Giảm hao hụt',
    wasteDesc: 'Hao hụt đang ở {pct}% — nên dưới {target}%.',
    wasteAction: 'Quản lý kho chặt hơn, dùng trước hết trước, kiểm soát khẩu phần.',
    laborTitle: 'Tối ưu nhân sự',
    laborDesc: 'Chi phí nhân sự chiếm {pct}% doanh thu — nên dưới {target}%.',
    laborAction: 'Sắp xếp ca linh hoạt, tập trung nhân sự vào giờ cao điểm.',
    deliveryLossTitle: 'Kênh giao hàng đang lỗ',
    deliveryLossDesc: 'Giao hàng app đang lỗ {amount}/tháng sau khi trừ hoa hồng + đóng gói.',
    deliveryLossAction: 'Tăng giá riêng cho app, giảm hoa hồng, hoặc chuyển sang tự giao.',
    menuDogsTitle: 'Bỏ hoặc đổi món kém hiệu quả',
    menuDogsDesc: 'Có {count} món vừa ít người mua vừa lãi thấp.',
    menuDogsAction: 'Cân nhắc thay bằng món mới hoặc điều chỉnh giá & công thức.',
    pushStarsTitle: 'Đẩy mạnh món "ngôi sao"',
    pushStarsDesc: '{count} món đang bán chạy & lãi cao — tăng 15% lượng bán.',
    pushStarsAction: 'Đặt vị trí nổi bật trên menu, upsell, combo với món khác.',
    pricingTitle: 'Tăng giá bán nhẹ',
    pricingDesc: 'Biên lãi chỉ {pct}% — có thể tăng giá 5% mà không mất khách.',
    pricingAction: 'Thêm combo, upsell, hoặc tăng giá các món lãi thấp.',
  },

  // ─── Chart labels ───
  charts: {
    revenue: 'Doanh thu',
    costs: 'Chi phí',
    profit: 'Lợi nhuận',
    cumulativeProfitLoss: 'Lãi/lỗ tích lũy',
    monthPrefix: 'T',
  },

  // ─── Chat Scenario Picker ───
  chatScenario: {
    pickLabel: 'Chọn kịch bản để AI nắm context',
    pickPlaceholder: '-- Không chọn (chat chung) --',
    loadingScenario: 'Đang tải kịch bản...',
    contextLoaded: 'AI đã nắm thông tin dự án "{name}"',
    noScenarios: 'Chưa có kịch bản. Hãy thẩm định một mô hình trước.',
  },

  // ─── Scenario Compare ───
  scenarioCompare: {
    title: 'So sánh kịch bản',
    pickHint: 'Chọn 2-3 kịch bản để so sánh song song.',
    compareBtn: 'So sánh',
    tabKPI: 'Chỉ số',
    tabChart: 'Biểu đồ',
    metric: 'Chỉ số',
    score: 'Điểm khả thi',
    revenue: 'Doanh thu (ổn định)',
    profit: 'Lợi nhuận ròng',
    margin: 'Biên lợi nhuận',
    payback: 'Hoàn vốn',
    investment: 'Tổng đầu tư',
    rentRatio: 'Tỷ lệ thuê',
    primeCost: 'Prime Cost',
    breakeven: 'DT hòa vốn',
    months: 'tháng',
    noPayback: '>12 tháng',
    profitOverlay: 'Lợi nhuận 12 tháng',
    revenueOverlay: 'Doanh thu 12 tháng',
    reset: 'Chọn lại kịch bản khác',
  },

  // ─── Existing Sensitivity ───
  existingSensitivity: {
    subtitle: 'Kéo thanh trượt để xem lợi nhuận thay đổi thế nào khi điều chỉnh từng chỉ số.',
    revenue: 'Doanh thu',
    cogs: 'Chi phí NVL',
    rent: 'Tiền thuê',
    staff: 'Nhân sự',
    resultRevenue: 'Doanh thu',
    resultProfit: 'Lợi nhuận',
    resultChange: 'Thay đổi',
    margin: 'Biên LN',
  },

  // ─── Impact Projection ───
  impactProjection: {
    subtitle: 'Nếu bạn thực hiện các cải thiện được gợi ý, đây là kết quả dự kiến.',
    current: 'Hiện tại',
    projected: 'Sau cải thiện',
    profit: 'Lợi nhuận',
    margin: 'Biên LN',
    totalSavings: 'Tổng tiết kiệm dự kiến',
    perMonth: 'tháng',
    perYear: 'năm',
  },
};

export default dashboard;
