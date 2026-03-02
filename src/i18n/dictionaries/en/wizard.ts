const wizard = {
  // ─── WizardShell ──────────────────────────────────────────
  shell: {
    backLink: '← Validator.vn',
    homeTitle: 'Back to home',
    builtWith: 'Built with',
    forCommunity: 'for community',
    authorName: 'Khang Pham',
  },

  // ─── ProgressBar ──────────────────────────────────────────
  progress: {
    steps: ['Concept', 'Location', 'Investment', 'Revenue', 'Costs', 'Results'],
    stepsExisting: ['Concept', 'Location', 'Capital', 'Menu', 'Costs', 'Diagnosis'],
  },

  // ─── StepModel ────────────────────────────────────────────
  stepModel: {
    modeNew: 'New project',
    modeExisting: 'Existing business',
    modeNewDesc: 'Validate your F&B business idea before investing',
    modeExistingDesc: 'Analyze & optimize your current business operations',
    title: 'What type of business do you want to open?',
    titleExisting: 'What type of business do you run?',
    desc: 'Pick a business model and enter your budget. We\'ll suggest the rest.',
    descExisting: 'Select your business model and enter actual figures for analysis.',
    alertNoModel: 'Please select a business model first!',
    sectionBudget: 'Budget & Rent',
    labelBudget: 'Total planned investment budget',
    tooltipBudget:
      'The total amount you can spend to open your venue — including rent, renovation, equipment, working capital...',
    placeholderBudget: 'e.g. 500,000,000',
    investHint: '{model} typically invests: {range}',
    labelRent: 'Monthly rent',
    placeholderRent: 'e.g. 25,000,000',
    rentHint: '{model} typical rent: {min} - {max}/month',
    rentHintNoModel: 'Select a model to see suggestions',
    backLabel: 'Home',

    // Existing mode extra fields
    labelActualRevenue: 'Actual monthly revenue',
    tooltipActualRevenue: 'Your current average monthly revenue across all channels combined.',
    placeholderActualRevenue: 'e.g. 150,000,000',
    labelMonthsOperating: 'How long have you been operating?',
    monthsOption: '{n} months',
    monthsOperatingHint: 'Helps us provide more accurate analysis based on your business stage.',

    // Project name
    labelProjectName: 'Project name',
    placeholderProjectName: 'e.g. Coffee Shop ABC',
    projectNameHint: 'Name your project to easily identify saved scenarios.',
    defaultProjectNew: '{model} - New project',
    defaultProjectExisting: '{model} - Diagnosis',
  },

  // ─── StepLocation ─────────────────────────────────────────
  stepLocation: {
    title: 'Location & Scale',
    desc: 'Location determines 80% of success. Choose wisely!',

    // Location section
    sectionLocation: 'Location',
    labelCity: 'City',
    cities: {
      hcm: 'Ho Chi Minh City',
      hanoi: 'Hanoi',
      danang: 'Da Nang',
      other: 'Other province/city',
    },
    labelDistrict: 'District',
    selectDistrict: '— Select district —',
    labelArea: 'District type',
    areas: {
      center: 'City center',
      suburb: 'Suburban district',
      residential: 'Residential area',
      mall: 'Shopping mall',
    },

    // Scale section
    sectionScale: 'Scale',
    labelSqm: 'Seating area (m\u00B2)',
    tooltipSqm:
      'Only count the customer seating area, NOT the kitchen/storage. The kitchen typically adds 30-40% more floor space.',
    labelSeats: 'Number of seats',
    labelDaysPerWeek: 'Operating days/week',
    daysOption: '{n} days',

    // Seat-ratio alerts
    alertTooCramped: '\u26A0 Too cramped! Need at least 1 m\u00B2/seat. Currently: {ratio} m\u00B2/seat.',
    alertSlightlyTight: '\u26A0 A bit tight ({ratio} m\u00B2/seat). Ideal: 1.3\u20132 m\u00B2/seat.',
    alertReasonable: '\u2713 Good ratio ({ratio} m\u00B2/seat)',
    alertTooSpacious:
      '\u26A0 Too spacious ({ratio} m\u00B2/seat) \u2014 wasted space, high rent cost. Keep it under 3 m\u00B2/seat.',

    // Rent benchmark
    rentBenchmarkGood: '\u2713 Rent is reasonable for this area ({userRent}k/m\u00B2 \u2014 average: {min}-{max}k/m\u00B2)',
    rentBenchmarkWarn: '\u26A0 Slightly above average for this area ({userRent}k/m\u00B2 \u2014 average: {min}-{max}k/m\u00B2)',
    rentBenchmarkHigh: '\u26A0 Well above area average! ({userRent}k/m\u00B2 \u2014 average: {min}-{max}k/m\u00B2)',

    // Channels section
    sectionChannels: 'Sales channels',
    tooltipChannels:
      'Estimated revenue share from each channel. Delivery app orders will incur a 20-30% commission fee.',
    channelsHint: 'Enter the estimated percentage for each channel (should total 100%)',
    channelDinein: 'Dine-in',
    channelTakeaway: 'Takeaway',
    channelDelivery: 'Delivery app',
    channelSumWarning: 'Current total = {sum}% (should be 100%)',
  },

  // ─── StepInvestment ───────────────────────────────────────
  stepInvestment: {
    title: 'Initial investment',
    titleExisting: 'Capital invested',
    desc: 'Total capital required before opening. You can add, edit, or remove items freely.',
    descExisting: 'Enter the total capital already invested and current working capital.',
    sunkCostLabel: 'Total capital invested',
    sunkCostHint: 'Including initial rent, construction, equipment, etc. already spent.',
    existingTotalLabel: 'TOTAL CAPITAL INVESTED',

    // Premises section
    sectionPremises: 'Premises',
    labelDeposit: 'Security deposit',
    tooltipDeposit:
      'Typically 1\u20136 months\u2019 rent, depending on the landlord. City center usually requires 3\u20136 months, suburbs 1\u20133 months.',
    depositMonthsOption: '{n} months\u2019 rent',
    depositHint: 'Choose the number of months or enter the deposit amount directly.',
    subtotalPremises: 'Total premises',

    // Construction section
    sectionConstruction: 'Construction & Decoration',
    subtotalConstruction: 'Total construction',

    // Equipment section
    sectionEquipment: 'Equipment',
    subtotalEquipment: 'Total equipment',

    // Other section
    sectionOther: 'Other',
    subtotalOther: 'Total other',

    // Working capital section
    sectionWorkingCap: 'Working capital reserve',
    tooltipWorkingCap:
      'Cash reserve to cover 2\u20133 months of expenses while building up customers. Running out of this is the #1 cause of failure!',
    subtotalWorkingCap: 'Reserve',

    // Breakdown category labels
    catPremises: 'Premises',
    catConstruction: 'Construction',
    catEquipment: 'Equipment',
    catOther: 'Other',
    catReserve: 'Reserve',

    // Running total
    totalLabel: 'TOTAL INITIAL INVESTMENT',
    overBudget: 'Over budget by {amount}',
    withinBudget: 'Within budget ({budget})',
  },

  // ─── StepRevenue ──────────────────────────────────────────
  stepRevenue: {
    title: 'Projected revenue',
    titleExisting: 'Actual revenue',
    desc: 'Estimate customer traffic and average spending.',
    descExisting: 'Enter your actual current revenue figures.',
    existingRampNote: 'You are analyzing actual revenue — no ramp-up period needed.',

    // Menu engineering (existing mode)
    sectionMenu: 'Menu breakdown',
    menuDesc: 'Enter your current menu items to analyze: which are profitable, which need improvement.',
    menuItemName: 'Item name',
    menuItemNamePlaceholder: 'e.g. Iced Latte',
    menuItemPrice: 'Selling price',
    menuItemCost: 'Ingredient cost',
    menuItemCostTooltip: 'Cost of ingredients to make one serving. Don\'t include rent, wages.',
    menuItemSold: 'Units sold/month',
    menuItemMargin: 'Profit/item',
    menuAddItem: '+ Add item',
    menuSummary: '{count} items — Total revenue: {revenue}/month',
    menuEmpty: 'Add at least 3-5 main items for accurate analysis.',

    // Ticket section
    sectionTicket: 'Average ticket size',
    tooltipTicket:
      'Average amount a single customer spends per visit. Add line items for a more accurate estimate.',
    ticketHint: 'Add the items customers typically order; the system calculates the average ticket automatically.',
    itemNamePlaceholder: 'Item name (e.g. Latte)',
    itemPricePlaceholder: 'Price',
    addItem: '+ Add item',
    avgTicketLabel: 'Average ticket size',
    benchmarkTicket: '{model}: {min} \u2013 {max}',

    // Customer matrix section
    sectionCustomers: 'Customers / day',
    customersHint:
      'Enter expected customers by time slot. Leave blank = not operating during that period.',
    periodMorning: 'Morning',
    periodMorningTime: '(6\u201311 AM)',
    periodNoon: 'Lunch',
    periodNoonTime: '(11 AM\u20132 PM)',
    periodAfternoon: 'Afternoon',
    periodAfternoonTime: '(2\u20135 PM)',
    periodEvening: 'Evening',
    periodEveningTime: '(5\u201310 PM)',
    totalPerDay: 'Total/day',
    weekday: 'Mon\u2013Fri',
    weekend: 'Sat\u2013Sun',
    benchmarkCustomers:
      '{model}: weekdays {wdMin}\u2013{wdMax} customers, weekends {weMin}\u2013{weMax} customers',

    // Ramp section
    sectionRamp: 'Ramp-up period',
    tooltipRamp:
      'In the first months after opening, foot traffic is only 40\u201360% of target. It takes time to reach full capacity.',
    rampMonth: 'Month {n}',

    // Revenue preview section
    sectionPreview: 'Revenue estimate',
    previewDaily: 'Daily average',
    previewMonth1: 'First month',
    previewStable: 'At steady state (month 6+)',
  },

  // ─── StepCosts ────────────────────────────────────────────
  stepCosts: {
    title: 'Monthly operating costs',
    desc: 'How much do you need to pay each month? You can add or edit items freely.',

    // Fixed costs section
    sectionFixed: 'Fixed costs',
    tooltipFixed: 'Costs you must pay regardless of sales: rent, salaries, internet...',
    labelRent: 'Rent (entered in step 1)',
    labelStaff: 'Staff',
    staffColPosition: 'Position',
    staffColCount: 'Headcount',
    staffColSalary: 'Salary/person',
    staffColTotal: 'Total',
    addPosition: '+ Add position',
    labelBhxh: 'Social insurance (27.5%)',
    tooltipBhxh:
      'If you\'re a sole proprietor or haven\'t registered social insurance for employees, you can uncheck this.',
    sectionFixedOther: 'Other fixed costs',

    // Fixed subtotal labels
    subtotalRent: 'Rent',
    subtotalStaff: 'Staff wages',
    subtotalBhxh: 'Social insurance (27.5%)',
    subtotalFixedOther: 'Other fixed',
    subtotalFixedTotal: 'Total fixed costs',

    // Channel costs (existing mode)
    sectionChannelCosts: 'Costs by sales channel',
    channelCostsDesc: 'Enter channel-specific costs to see which channels are truly profitable.',
    labelPackagingPerOrder: 'Packaging cost per takeaway & delivery order',
    placeholderPackaging: 'e.g. 5,000',
    labelGrabComm: 'GrabFood commission (%)',
    labelShopeeComm: 'ShopeeFood commission (%)',
    labelOwnDelivery: '% of delivery orders self-fulfilled',
    ownDeliveryHint: 'Delivery orders not through apps (own delivery, own website)',
    labelMarketingDinein: 'In-store marketing spend / month',
    labelMarketingDelivery: 'Online marketing spend (app ads) / month',

    // Variable costs section
    sectionVariable: 'Variable costs',
    tooltipVariable: 'Costs that scale with revenue: ingredients, packaging, app fees...',
    labelCogs: 'Ingredients (% of revenue)',
    labelWaste: 'Waste / spoilage (% of COGS)',
    labelDeliveryComm: 'Delivery app fee (% of delivery orders)',
    hintDeliveryComm: 'GrabFood 20\u201330%, ShopeeFood 15\u201325%',
    sectionVarOther: 'Other variable costs (monthly)',

    // Variable subtotal labels
    subtotalCogs: 'Ingredients ({pct}%)',
    subtotalWaste: 'Waste ({pct}% of COGS)',
    subtotalDelivery: 'Delivery fees ({pct}%)',
    subtotalVarOther: 'Other variable',
    subtotalVarTotal: 'Total variable costs',

    // Monthly total
    monthlyTotalLabel: 'EST. TOTAL MONTHLY COSTS (at steady state)',
    costRatioText: 'Costs are {pct}% of revenue',
    costRatioHigh: ' \u2014 Too high!',
    costRatioSlightlyHigh: ' \u2014 Slightly high',
    costRatioOk: ' \u2014 Healthy',

    // Navigation
    nextLabel: 'View results',
  },

  // ─── StepDashboard ────────────────────────────────────────
  stepDashboard: {
    title: 'Analysis results',
    desc: 'Based on the information you provided, here is your projected financial picture.',

    // Overview
    sectionOverview: 'Overview',
    kpiProfit: 'Monthly profit',
    kpiPayback: 'Payback period',
    kpiPaybackMonths: '{n} months',
    kpiPaybackLong: '>12 months',
    kpiMargin: 'Net margin',
    kpiReserve: 'Cash reserve',
    kpiReserveMonths: '{n} months',

    // Collapsible sections
    sectionPnl: 'P&L & Cash Flow \u2014 12 Months',
    sectionBreakeven: 'When do you break even?',
    sectionAnalysis: 'Detailed analysis report',
    sectionHealth: 'Cost health & Sensitivity',

    // Existing mode dashboard sections
    titleExisting: 'Business health diagnosis',
    descExisting: 'Based on your actual numbers, here is your current business picture.',
    sectionCostDiagnosis: 'Where is your money going?',
    sectionChannelProfit: 'Which channels are truly profitable?',
    sectionMenuMatrix: 'Menu analysis',
    sectionBenchmark: 'Industry comparison',
    sectionQuickWins: 'Quick improvements',
    sectionSensitivity: 'What if things change?',
    sectionImpact: 'Projected impact after optimization',

    // Existing mode KPIs
    kpiHealthScore: 'Health',
    kpiNetProfit: 'Net profit/month',
    kpiNetMargin: 'Net margin',
    kpiRentRatio: 'Rent/Revenue',

    // Collapsible sections (cont.)
    sectionOptimization: 'Optimization suggestions',
    sectionAIChat: 'Ask AI expert',

    // Baseline comparison
    saveBaseline: 'Save as baseline',
    clearBaseline: 'Clear baseline',

    // Buttons
    btnEdit: '\u2190 Edit inputs',
    btnExportExcel: 'Export Excel',
    btnExportPDF: 'Export PDF',
    btnPrint: 'Print',
  },

  // ─── QuickCalc ────────────────────────────────────────────
  quickCalc: {
    title: 'Quick estimate',
    desc: 'Enter 6 basic numbers and see instant results',

    // Input labels
    labelAvgTicket: 'Average ticket / order',
    placeholderAvgTicket: 'e.g. 50,000',
    labelCustsPerDay: 'Customers / day (average)',
    placeholderCustsPerDay: 'e.g. 80',
    labelRent: 'Monthly rent',
    placeholderRent: 'e.g. 20,000,000',
    labelStaffCost: 'Total staff wages / month',
    placeholderStaffCost: 'e.g. 30,000,000',
    labelInvestment: 'Total initial investment',
    placeholderInvestment: 'e.g. 500,000,000',
    labelFoodCost: 'Food Cost %',
    hintFoodCost: 'Ingredient cost as % of revenue',

    // KPI labels
    kpiRevenue: 'Revenue/month',
    kpiProfit: 'Profit/month',
    kpiMargin: 'Net margin',
    kpiPayback: 'Payback',
    kpiPaybackMonths: '{n} months',
    kpiPaybackLong: '> 12 months',
    kpiScore: 'Feasibility score',

    // CTA
    ctaButton: 'Want a deeper analysis? Start the Wizard \u2192',
  },

  // ─── Feedback ────────────────────────────────────────────
  feedback: {
    heading: 'How was your experience?',
    desc: 'Help us improve — takes just 5 seconds!',
    ratings: ['Terrible', 'Bad', 'Okay', 'Good', 'Great'],
    commentPlaceholder: 'Additional feedback (optional)...',
    submit: 'Submit',
    thanks: 'Thank you for your feedback! 🙏',
  },

  // ─── Share / Spread the word ────────────────────────────
  share: {
    heading: 'Found this useful? Share with friends!',
    desc: 'Help more F&B owners discover this free tool.',
    shareFacebook: 'Facebook',
    shareLinkedin: 'LinkedIn',
    copyLink: 'Copy link',
    copied: 'Copied!',
    downloadImage: 'Download result image',
    followUs: 'Follow Validator.vn',
    shareText: "I just tried this free F&B validation tool — pretty useful! Enter your numbers and instantly see profitability, break-even, and more. Share with anyone planning to open or running an F&B business 👉",
  },

  // ─── Onboarding ─────────────────────────────────────────
  onboarding: {
    welcomeHeading: 'Welcome to Validator.vn!',
    welcomeDesc: 'Free financial analysis tool to validate your F&B business idea before investing.',
    optionPlanning: "I'm planning to open a business",
    optionPlanningDesc: 'Analyze costs, revenue, break-even',
    optionExisting: 'I already have a business',
    optionExistingDesc: 'Check your current financial health',
    skip: 'Skip',
    quickStart: 'Quick Start',
    quickStartDesc: 'Choose the template closest to your idea',
  },

  // ─── Shared / Common ─────────────────────────────────────
  common: {
    next: 'Next',
    back: 'Back',
  },
};

export default wizard;
