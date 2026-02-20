const dashboard = {
  // ─── ScoreRing ───
  score: {
    labelGood: 'Highly Viable',
    labelWarn: 'Needs Improvement',
    labelBad: 'High Risk',
    outOf: '/100',
  },

  // ─── KPIGrid ───
  kpi: {
    bepRevenueLabel: 'Break-even Revenue/mo',
    bepCustomersLabel: 'Break-even Customers/day',
    paybackLabel: 'Investment Payback',
    customersUnit: 'customers',
    monthsUnit: 'months',
    moreThan12: '>12 months',
  },

  // ─── OverviewAlerts ───
  alerts: {
    rentTooHigh: 'Rent is {pct}% of revenue — too high! Should be < 20%.',
    rentSlightlyHigh: 'Rent is {pct}% of revenue — slightly high.',
    cogsTooHigh: 'COGS at {pct}% — too high!',
    primeCostDanger: 'COGS + Labor = {pct}% — dangerous!',
    workingCapLow: 'Working capital only covers {months} months — need >= 3!',
    deliveryHigh: 'Delivery dependency at {pct}% — high commission fees.',
    projectedLoss: 'Projected LOSS of {amount}/month at stable state!',
    viable: 'Business model is viable! See details below.',
  },

  // ─── PnLSection + PnLChart ───
  pnl: {
    netRevenue: 'Net Revenue',
    cogs: '- COGS',
    waste: '- Waste',
    grossProfit: '= Gross Profit',
    rent: '- Rent',
    staffBhxh: '- Staff + Insurance',
    fixedOther: '- Other Fixed Costs',
    varOther: '- Other Variable Costs',
    netProfit: '= NET PROFIT',
    detailToggle: 'View detailed P&L table',
    colCategory: 'Category',
    monthPrefix: 'M',
  },

  // ─── BreakEvenSection + BEPChart ───
  breakeven: {
    minCustomers: 'Need at least <strong>{count} customers/day</strong> to break even.',
    paybackSummary: 'Recover investment of {investment} in approximately {months} months.',
    paybackLong: 'Need >12 months to recover investment of {investment}.',
  },

  // ─── HealthGauges ───
  health: {
    rawMaterials: 'Raw Materials',
    rent: 'Rent',
    labor: 'Labor',
    primeCost: 'Prime Cost (COGS+Labor)',
    netMargin: 'Net Margin',
    delivery: 'Delivery',
    industryBenchmark: 'Industry: {lo}-{hi}%',
  },

  // ─── SensitivityPanel ───
  sensitivity: {
    title: 'What if things change?',
    subtitle: 'Drag the sliders to see how profit changes.',
    customers: 'Customers',
    ticketSize: 'Avg. Ticket',
    cogsCost: 'COGS',
    rentCost: 'Rent',
    customersPerDay: '{n} customers/day',
    revenueOfSales: '{pct}% of rev.',
    resultRevenue: 'Revenue',
    resultProfit: 'Profit',
    resultChange: 'Change',
  },

  // ─── ChecklistPanel ───
  checklist: {},

  // ─── AIAdvisor ───
  advisor: {
    description: 'Enter your OpenAI API key to receive a detailed analysis.',
    apiKeyLabel: 'OpenAI API Key',
    analyzing: 'Analyzing...',
    askAI: 'Ask AI Advisor',
    aiAnalyzing: 'AI is analyzing...',
    enterApiKey: 'Please enter an API key!',
    errorPrefix: 'Error:',
    systemPrompt: 'You are an expert F&B consultant in Vietnam with 15 years of experience. Analyze in clear English with specific data points.',
    userPromptTemplate:
      'F&B Analysis:\nMODEL: {modelName}\nINVESTMENT: {investment}\nRevenue/month (stable): {revenue}\nProfit: {profit} ({netMargin}%)\nRent: {rentPct}%, COGS: {cogsPct}%, Labor: {laborPct}%\nPrime Cost: {primeCost}%\nBreak-even: {bepCust} customers/day, payback {payback} months\nScore: {score}/100\n\nAnalyze: 1)Overview 2)Strengths 3)Risks 4)Specific recommendations 5)Cost-saving tips. Use clear, practical language.',
  },

  // ─── AnalysisReport ───
  analysis: {
    sectionTitle: 'Detailed Analysis',
    scoreLabelExcellent: 'Highly Viable',
    scoreLabelModerate: 'Needs Consideration',
    scoreLabelRisky: 'High Risk',
    scoreLabelVeryRisky: 'Very High Risk',
    defaultModelName: 'F&B Business',

    overallTitle: 'Overall Assessment',
    overallVerdict:
      'With the {modelName} model, total investment of {investment}, your business scores {score}/100 — rated "{label}".',
    overallProfitable:
      'At stable operation (from month 7+), projected net profit is approximately {profit}/month, equivalent to a {margin}% net margin.',
    overallLoss:
      'However, the current model projects a LOSS of {loss}/month even at stable state. You need to reconsider your cost structure or increase revenue.',

    revenueTitle: 'Projected Revenue',
    revenueBody:
      'In the first month (ramp-up phase), estimated revenue is approximately {m1Rev}. At 100% capacity (from month 7), revenue increases to {stableRev}/month (+{growthPct}%).',
    deliveryHighNote:
      'Note: {pct}% of revenue comes from delivery — app commissions will cost approximately {commission}/month.',
    deliveryOkNote:
      'Delivery app fees are {commission}/month — an acceptable level.',

    costTitle: 'Cost Structure',
    costBody:
      'Monthly fixed costs: {fixedMonthly} (rent {rent} + staff {staff} + other {otherFixed}). Raw materials account for {cogsPct}% of revenue. Total Prime Cost (COGS + Labor) = {primeCost}%',
    primeCostGood: '— an ideal level with healthy profit margins remaining',
    primeCostAvg: '— at an average level, further optimization recommended',
    primeCostBad: '— too high! Reduce COGS or streamline staffing',

    rentTitle: 'Rent-to-Revenue Ratio',
    rentIntro: 'Rent accounts for {pct}% of net revenue.',
    rentExcellent: 'This is an excellent ratio — you have strong room for profitability.',
    rentOk: 'A reasonable level for F&B. Try to keep it below 20%.',
    rentHigh:
      'Slightly high. Every % above 20% directly eats into net profit. Consider renegotiating or finding a different location.',
    rentTooHigh:
      'FAR TOO HIGH! At this ratio, sustainable profitability is very difficult. This is the leading cause of F&B business closures.',

    breakEvenTitle: 'Time to Break Even',
    breakEvenWithPayback:
      'At the projected growth rate, you will break even in approximately {months} months. For monthly break-even, you need at least {bepRevenue} in revenue — equivalent to {bepCust} customers/day.',
    breakEvenFast: 'This is a solid payback period for the F&B industry.',
    breakEvenMedium:
      'An acceptable payback period, but tight cost control is needed during the early phase.',
    breakEvenSlow:
      'This is quite long — ensure you have sufficient reserves to sustain operations.',
    breakEvenNever:
      'With the current structure, the model does NOT break even within the first 12 months. You need at least {bepRevenue}/month ({bepCust}) to reach break-even. Consider reducing fixed costs or increasing the average ticket size.',

    workingCapTitle: 'Working Capital Reserve',
    workingCapIntro:
      'Your working capital reserve covers {months} months of operation (with zero revenue).',
    workingCapGood:
      'This is a safe level — sufficient to weather the toughest ramp-up period.',
    workingCapWarn:
      'Somewhat thin. The F&B industry recommends at least 3 months of reserves. Early months often run at a loss; running out of cash before building a customer base means closure.',
    workingCapBad:
      'CRITICAL! Insufficient working capital is the #1 reason F&B businesses close early. Increase your reserve budget to at least 3 months of fixed costs.',

    profitTrajectoryTitle: '12-Month Profit Trajectory',
    profitLabel: 'profit',
    lossLabel: 'loss',
    totalProfit12:
      'Month 1: {m1Sign} {m1} → Month 6: {m6Sign} {m6} → Month 12: {m12Sign} {m12}. Total 12-month profit: {totalSign}{total}.',
    profitTrajectoryGood:
      'After 1 year, you have begun recovering your initial investment.',
    profitTrajectoryBad:
      'After 1 year, you still have not recovered your investment. The business model needs revision.',

    recommendationTitle: 'Top Recommendation',
    topRiskRent: 'rent is too high',
    topRiskPrimeCost: 'prime cost is too high',
    topRiskWorkingCap: 'working capital reserve is too thin',
    topRiskNoProfit: 'no profit at stable state',
    riskIntro: 'The biggest risk right now: {risk}.',
    adviceRent:
      'Prioritize finding a lower-rent location — this is the single biggest factor affecting profitability.',
    advicePrimeCost:
      'Optimize raw material costs (negotiate with suppliers, reduce waste) or streamline staffing.',
    adviceWorkingCap:
      'Secure additional reserves before launching. "Running out of cash" is the most common way F&B businesses fail.',
    adviceGeneral:
      'Consider increasing the average ticket size, reducing costs, or boosting customer traffic to reach break-even.',

    disclaimer:
      '* Analysis is based on your inputs and industry benchmarks. Actual results may vary depending on market conditions.',
  },

  // ─── SavePrompt ───
  save: {
    defaultScenarioName: 'New Scenario',
    savedSuccess: 'Scenario saved successfully!',
    savedHint: 'You can select it again from the menu above.',
    saveQuestion: 'Save these results?',
    saveHint: 'Save to review or compare later.',
    saving: 'Saving...',
    saveScenario: 'Save Scenario',
    signupSavedSuccess: 'Account created & saved successfully!',
    signupSavedHint: 'Log in next time to view this scenario.',
    validationPhonePassword: 'Enter phone/email and password',
    validationPasswordLength: 'Password must be at least 6 characters',
    loginFailed: 'Login failed',
    genericError: 'An error occurred',
    guestSaveTitle: 'Save results to review later?',
    signupPrompt: 'Create an account in just 5 seconds — only phone + password needed.',
    loginPrompt: 'Log in to save your scenario.',
    phonePlaceholder: 'Phone or email',
    signupPasswordPlaceholder: 'Create password (6+ chars)',
    loginPasswordPlaceholder: 'Password',
    saveNow: 'Save now →',
    loginAndSave: 'Log in & Save →',
    hasAccount: 'Already have an account?',
    loginLink: 'Log in',
    noAccount: "Don't have an account?",
    signupLink: 'Sign up',
  },

  // ─── Chart labels ───
  charts: {
    revenue: 'Revenue',
    costs: 'Costs',
    profit: 'Profit',
    cumulativeProfitLoss: 'Cumulative P&L',
    monthPrefix: 'M',
  },
};

export default dashboard;
