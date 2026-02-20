import type { KBTopic } from '@/types';
import type { KBTableRow, KBStat, KBTimelineStep, KBWarningItem } from '@/types';

const KNOWLEDGE_BASE_EN: KBTopic[] = [
  // ── COSTS ──
  {
    id: 'cost_structure',
    slug: 'cau-truc-chi-phi-fnb',
    icon: 'money',
    title: 'F&B Cost Structure',
    subtitle: 'Know where your money goes before you start',
    color: 'primary-light',
    category: 'cost',
    highlights: [
      { label: 'COGS (Food Cost)', value: '25-35%', note: 'of revenue' },
      { label: 'Labor', value: '20-30%', note: 'of revenue' },
      { label: 'Rent', value: '10-20%', note: 'of revenue' },
      { label: 'Net Profit', value: '5-15%', note: 'with good management' },
    ],
    sections: [
      {
        type: 'table',
        heading: 'Typical Cost Breakdown',
        content: [
          { label: 'Raw Materials (Food Cost)', range: '25 - 35%', note: 'Largest expense — control with standardized recipes' },
          { label: 'Labor', range: '20 - 30%', note: 'Wages + Social Insurance + meal & shift allowances' },
          { label: 'Rent', range: '10 - 20%', note: 'Including management fees and VAT on lease' },
          { label: 'Marketing', range: '3 - 8%', note: 'Online ads + promotions + influencers' },
          { label: 'Utilities (electricity, water, gas...)', range: '5 - 10%', note: 'Varies by season and business model' },
          { label: 'Depreciation & Misc.', range: '3 - 5%', note: 'Equipment wear, breakage, and damage' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: 'Hidden Costs Often Overlooked',
        content: [
          { label: 'Social Insurance (BHXH + BHYT)', range: '21.5%', note: 'On base salary — employer pays 21.5%' },
          { label: 'Ingredient Spoilage', range: '3 - 8%', note: 'Wilted produce, spoiled meat, daily breakage' },
          { label: 'Delivery App Fees', range: '20 - 30%', note: 'GrabFood/ShopeeFood commission per order' },
          { label: 'VAT on Lease', range: '8 - 10%', note: 'Many lease contracts exclude VAT' },
          { label: 'Equipment Maintenance', range: '1 - 3%', note: 'Espresso machines, refrigerators breaking unexpectedly' },
          { label: 'Taxes & Accounting', range: '1 - 2%', note: 'Lump-sum tax / VAT + accounting service fees' },
        ] as KBTableRow[],
      },
      {
        type: 'text',
        content: 'Golden rule: COGS + Labor (Prime Cost) should not exceed 60-65% of revenue. If it does, profitability becomes nearly impossible. Real-world costs typically run 20-30% higher than projections due to the hidden costs listed above.',
      },
    ],
  },
  {
    id: 'key_metrics',
    slug: 'cac-chi-so-song-con',
    icon: 'chart',
    title: 'Critical Metrics',
    subtitle: '4 numbers that determine survival',
    color: 'secondary-light',
    category: 'cost',
    highlights: [
      { label: 'Food Cost %', value: '<35%' },
      { label: 'Prime Cost', value: '<65%' },
      { label: 'Rent Ratio', value: '<20%' },
      { label: 'Break-even', value: '<6 months' },
    ],
    sections: [
      {
        type: 'stat-grid',
        content: [
          { icon: 'meat', label: 'Food Cost %', value: '25-35%', desc: '= COGS / Revenue. Above 40% = danger zone.' },
          { icon: 'users', label: 'Prime Cost', value: '<60-65%', desc: '= (COGS + Labor) / Revenue. The single most important metric.' },
          { icon: 'rent', label: 'Rent-to-Revenue', value: '<15-20%', desc: '= Rent / Revenue. Above 25% = extremely high risk.' },
          { icon: 'clock', label: 'Break-even Point', value: '4-8 months', desc: 'Time to recoup investment. Over 12 months = reassess.' },
        ] as KBStat[],
      },
      {
        type: 'table',
        heading: 'Benchmarks by Business Model',
        content: [
          { label: 'Coffee Shop', range: 'Food cost 20-30%', note: 'Prime cost <55%. High margins but fierce competition.' },
          { label: 'Eatery', range: 'Food cost 30-40%', note: 'Prime cost <65%. Needs high volume to offset thin margins.' },
          { label: 'Bubble Tea', range: 'Food cost 15-25%', note: 'Prime cost <50%. Very high margins; marketing costs are significant.' },
          { label: 'Restaurant', range: 'Food cost 28-38%', note: 'Prime cost <60%. Labor takes a large share.' },
          { label: 'Cloud Kitchen', range: 'Food cost 30-38%', note: 'No rent, but delivery app fees of 20-30%.' },
          { label: 'Bar / Pub', range: 'Food cost 15-25%', note: 'Prime cost <50%. Beverage margins are very high.' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Red Flags — Take Action Immediately',
        content: [
          { icon: 'warning', title: 'Food cost > 40%', desc: 'Investigate now: ingredient waste, supplier price hikes, over-portioning, theft. Every 1% of food cost equals roughly 10% of net profit.', severity: 'critical' },
          { icon: 'warning', title: 'Prime cost > 70%', desc: 'Virtually impossible to turn a profit. Must cut costs or raise prices immediately.', severity: 'critical' },
          { icon: 'warning', title: 'Rent ratio > 25%', desc: 'Rent is consuming all your profit. Consider renegotiating or relocating.', severity: 'warning' },
          { icon: 'warning', title: 'Revenue declining 3 months in a row', desc: 'Not a seasonal dip? Check for: new competitors, declining quality, negative Google reviews.', severity: 'warning' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'If you don\'t know these 4 numbers for your business model, start validating now — this tool will calculate them for you.',
      },
    ],
  },
  // ── OPERATIONS ──
  {
    id: 'business_models',
    slug: 'mo-hinh-fnb-pho-bien',
    icon: 'kiosk',
    title: 'Common F&B Models',
    subtitle: 'Each type has unique characteristics',
    color: 'mint-light',
    category: 'operations',
    highlights: [
      { label: 'Model Types', value: '8 types' },
      { label: 'Lowest Capital', value: 'VND 100 million' },
      { label: '3-Year Survival Rate', value: '~20%' },
    ],
    sections: [
      {
        type: 'table',
        heading: 'Quick Comparison: Capital & Margins',
        content: [
          { label: 'Coffee Shop', range: 'VND 200M - 1.5B', note: 'Gross margin 70-80%. Intense competition — differentiation is key.' },
          { label: 'Eatery', range: 'VND 100 - 500M', note: 'Gross margin 55-65%. Steady demand, but food cost is high at 30-40%.' },
          { label: 'Bubble Tea', range: 'VND 300M - 1.5B', note: 'Gross margin 75-85%. Saturated market — strong branding required.' },
          { label: 'Restaurant', range: 'VND 1 - 5B', note: 'Gross margin 60-70%. High capital, needs professional management.' },
          { label: 'Cloud Kitchen', range: 'VND 100 - 500M', note: 'Gross margin 55-65%. No rent, but 20-30% delivery app fees.' },
          { label: 'Bakery', range: 'VND 300M - 2B', note: 'Gross margin 65-75%. Requires skills and hero products.' },
          { label: 'Bar / Pub', range: 'VND 1 - 8B', note: 'Gross margin 75-85%. Regulatory risks, tight management needed.' },
          { label: 'Kiosk / Food Court', range: 'VND 200M - 1B', note: 'Gross margin 60-70%. Built-in foot traffic, but mall rent is high.' },
        ] as KBTableRow[],
      },
      {
        type: 'list',
        heading: 'Which model suits you?',
        content: [
          'Low capital (<VND 300M), limited experience → Small eatery or Cloud Kitchen. Test the concept first, then scale.',
          'Medium capital (VND 300M - 1B), passion for beverages → Coffee or Bubble Tea. A unique concept is essential.',
          'Solid capital (VND 1 - 3B), management experience → Restaurant or Bar. Requires a professional operations team.',
          'Want low risk, fast validation → Mall kiosk or Cloud Kitchen. Faster break-even.',
          'Skilled in cooking/mixology → Bakery or Specialty Coffee. Your core product is your competitive edge.',
        ],
      },
      {
        type: 'text',
        content: 'There is no "easy" model — each comes with its own risks. What matters is choosing one that matches your experience, budget, and risk appetite.',
      },
    ],
  },
  {
    id: 'lifecycle',
    slug: 'vong-doi-quan-fnb',
    icon: 'trending',
    title: 'F&B Business Lifecycle',
    subtitle: 'Don\'t expect profits from month one',
    color: 'primary-light',
    category: 'operations',
    highlights: [
      { label: 'Preparation', value: '2-4 months', note: 'before opening' },
      { label: 'Ramp-up', value: '1-3 months', note: 'revenue at 40-70%' },
      { label: 'Stabilization', value: 'months 4-6' },
      { label: 'Payback', value: 'months 8-18' },
    ],
    sections: [
      {
        type: 'timeline',
        content: [
          { month: 'Pre-opening', title: 'Preparation Phase (2-4 months)', desc: 'Market research, finding a location, permits & licenses, design and build-out, hiring, training. THIS phase determines 80% of your success or failure.', status: 'ramp' },
          { month: 'Months 1-2', title: 'Ramp-up', desc: 'Revenue at only 40-60% of capacity. Customers are trying you out but haven\'t formed a habit yet. Team is running in. EXPENSES > REVENUE is normal.', status: 'ramp' },
          { month: 'Months 3-4', title: 'Acceleration', desc: 'Revenue at 70-90%. Regulars begin to form. Optimize the menu, cut underperforming items. Start trimming costs.', status: 'ramp' },
          { month: 'Months 5-8', title: 'Stabilization', desc: 'Revenue reaches 100% of projections. If profitable — maintain course. If not — reassess immediately. This is the make-or-break stage.', status: 'stable' },
          { month: 'Months 9-12', title: 'Saturation / Growth', desc: 'With good management: 5-10% annual growth. Without: gradual decline due to new competitors. Menu refresh and marketing are critical.', status: 'stable' },
          { month: 'Year 2-3+', title: 'Renewal or Decline', desc: 'The average F&B business in Vietnam lasts 2-3 years. Only 20% survive past year 3. Continuous improvement is essential.', status: 'decline' },
        ] as KBTimelineStep[],
      },
      {
        type: 'list',
        heading: 'Key Actions by Phase',
        content: [
          'Months 1-2: Focus on smooth operations, refine SOPs, listen to customer feedback. Don\'t push heavy marketing yet.',
          'Months 3-4: Analyze sales data, cut the bottom 20% of menu items, renegotiate supplier prices, launch a loyalty program.',
          'Months 5-8: Review P&L weekly, optimize shift scheduling, add delivery channels if not already present, build online presence.',
          'Months 9-12: Refresh 20-30% of the menu, add seasonal items, review pricing, evaluate staff performance, plan for the next year.',
          'Year 2+: Consider a second location or pivot the model. Don\'t let the business run on autopilot — that\'s when decline begins.',
        ],
      },
    ],
  },
  // ── STRATEGY ──
  {
    id: 'pricing_strategy',
    slug: 'dinh-gia-menu',
    icon: 'money',
    title: 'Menu Pricing',
    subtitle: 'The art of pricing for profit',
    color: 'mint-light',
    category: 'strategy',
    highlights: [
      { label: 'Target Food Cost', value: '28-32%' },
      { label: 'Combos Boost Revenue', value: '+15-25%' },
      { label: 'Price Sweet Spot', value: 'VND 25-50K' },
    ],
    sections: [
      {
        type: 'stat-grid',
        heading: 'Pricing Formulas',
        content: [
          { icon: 'money', label: 'Base Price', value: 'COGS ÷ 0.30', desc: 'Ingredient cost / target food cost %. E.g.: COGS VND 15K ÷ 0.30 = VND 50K.' },
          { icon: 'chart', label: 'Contribution Margin', value: 'Price - COGS', desc: 'How much each item contributes toward fixed costs. Prioritize high-margin items.' },
          { icon: 'target', label: 'Psychological Pricing', value: 'X9,000 VND', desc: 'VND 49K instead of 50K. VND 39K instead of 40K. The "feels cheaper" effect is significant.' },
          { icon: 'trending', label: 'Upsell / Cross-sell', value: '+15-25%', desc: '"Add a topping for VND 10K?" or "Combo deal saves VND 15K" increases average order value.' },
        ] as KBStat[],
      },
      {
        type: 'list',
        heading: 'Smart Pricing Strategies',
        content: [
          'Menu Engineering: Classify items as Stars (high sales, high margin), Puzzles (high margin, low sales), Plowhorses (high sales, low margin), Dogs (low sales, low margin). Eliminate Dogs, promote Stars.',
          'Anchor pricing: Place the most expensive item at the top of the menu so everything else seems more affordable. E.g.: Wagyu VND 350K first → Australian beef VND 180K feels "reasonable."',
          'Combo strategy: Bundle 2-3 items at a 10-15% discount vs. buying separately. Customers feel they\'re getting a deal, you increase order value by 20-30%.',
          'Size-based pricing: S/M/L with small ingredient cost differences but large price differences. Customers choose M (80% of the time) = optimal margin.',
          'Seasonal pricing: Raise prices 5-10% during peak seasons (holidays, Lunar New Year), reduce slightly in low season. Don\'t keep rigid pricing year-round.',
        ],
      },
      {
        type: 'warning-list',
        heading: 'Pricing Mistakes',
        content: [
          { icon: 'warning', title: 'Undercutting competitors to "attract" customers', desc: 'Competing on price alone is a race to the bottom. Someone will always be cheaper. Compete on value and experience instead.', severity: 'critical' },
          { icon: 'warning', title: 'Not accounting for all costs in pricing', desc: 'Many owners only factor in COGS, forgetting labor, rent, utilities, and depreciation. Your price must cover ALL costs plus desired profit.', severity: 'critical' },
          { icon: 'warning', title: 'Sudden price changes', desc: 'Raising prices more than 10% at once will drive customers away. Instead, raise 5% every 3-6 months, or pair increases with quality improvements.', severity: 'warning' },
        ] as KBWarningItem[],
      },
    ],
  },
  {
    id: 'marketing_101',
    slug: 'marketing-fnb-co-ban',
    icon: 'megaphone',
    title: 'F&B Marketing Basics',
    subtitle: 'A great product nobody knows about = failure',
    color: 'secondary-light',
    category: 'strategy',
    highlights: [
      { label: 'Marketing Budget', value: '5-10%', note: 'of revenue' },
      { label: 'Google Maps', value: 'Free', note: 'most effective' },
      { label: 'TikTok Reach', value: 'x5-10', note: 'vs. Facebook' },
    ],
    sections: [
      {
        type: 'table',
        heading: 'Marketing Channels: Cost & Effectiveness',
        content: [
          { label: 'Google Business Profile', range: 'Free', note: '70% of customers find restaurants via Google Maps. Set it up on day 1.' },
          { label: 'TikTok (organic)', range: 'Free', note: '1 viral video = 2 weeks of queues. Film "behind the scenes" kitchen content.' },
          { label: 'Facebook / Instagram', range: 'VND 3-5M/month', note: 'Fanpage + groups + targeted ads. Effective for community building.' },
          { label: 'KOL / Micro-influencer', range: 'VND 2-10M/session', note: 'Micro (1K-100K followers) drive 3-5x more engagement than celebrities.' },
          { label: 'Foody / Loship', range: 'VND 0.5-2M/month', note: 'Listing + reviews. Especially important for new businesses.' },
          { label: 'Offline (banners, flyers)', range: 'VND 1-3M/month', note: 'Effective in residential areas, near schools or offices.' },
        ] as KBTableRow[],
      },
      {
        type: 'list',
        heading: '5 Marketing Steps for New Businesses (budget under VND 5 million)',
        content: [
          'Step 1: Set up Google Business Profile (free) — name, photos, menu, hours, phone number. Collect 5-star reviews from friends on day one.',
          'Step 2: Create TikTok + Instagram — post 3-5 videos/week showing food preparation, "behind the scenes," staff introductions. DON\'T push sales too early.',
          'Step 3: Facebook fanpage — post menu, promotions, customer reviews. Join local "What to eat in [area]" groups to share content.',
          'Step 4: Soft opening — invite 30-50 friends and micro-KOLs (1K-10K followers) for free meals in exchange for reviews and stories. Cost: VND 5-10M in ingredients.',
          'Step 5: Grand opening — 20-30% discount the first week, complimentary toppings or drinks. Create an initial buzz to drive Google Maps traffic.',
        ],
      },
      {
        type: 'text',
        content: 'The 70/20/10 rule: 70% value content (tips, behind the scenes), 20% reviews and social proof, 10% direct promotions. Don\'t turn your fanpage into a "billboard" — you\'ll lose followers.',
      },
    ],
  },
  // ── OPERATIONS (continued) ──
  {
    id: 'common_mistakes',
    slug: 'loi-thuong-gap',
    icon: 'warning',
    title: 'Common Mistakes',
    subtitle: '80% of closures trace back to these errors',
    color: 'secondary-light',
    category: 'operations',
    sections: [
      {
        type: 'warning-list',
        content: [
          { icon: 'cashout', title: 'Underestimating costs', desc: 'Forgetting: Social Insurance, spoilage, depreciation, monthly marketing, delivery app fees, VAT on lease. Actual costs typically run 20-30% above projections.', severity: 'critical' },
          { icon: 'trendingup', title: 'Overestimating revenue', desc: 'Don\'t use your best day as the average. Month 1 only reaches 40-60% of capacity. Project based on weekdays, not weekends.', severity: 'critical' },
          { icon: 'rent', title: 'Overpaying for rent', desc: 'Prime location but rent exceeds 20% of revenue = guaranteed loss. "High foot traffic" does not equal "customers walking in."', severity: 'critical' },
          { icon: 'wallet', title: 'Insufficient cash reserves', desc: 'You need at least 3-6 months of operating costs in reserve. Many businesses close at month 3-4 because they ran out of cash, not customers.', severity: 'critical' },
          { icon: 'chart', title: 'Not tracking financials', desc: 'Not knowing actual food cost, no monthly P&L, not measuring customer acquisition cost. "Gut feeling" is not a substitute for data.', severity: 'critical' },
          { icon: 'clipboard', title: 'No SOPs from the start', desc: 'No standardized processes = inconsistent quality = lost customers. Write SOPs for everything: preparation, service, opening/closing.', severity: 'warning' },
          { icon: 'target', title: 'No defined target customer', desc: 'Trying to serve everyone = serving no one well. Define clearly: who, age range, income level, reason for visiting.', severity: 'warning' },
          { icon: 'phone', title: 'Neglecting online marketing', desc: 'In today\'s digital age, 70%+ of customers find businesses through Google Maps, TikTok, or Facebook. No online presence = you don\'t exist.', severity: 'warning' },
          { icon: 'bolt', title: 'Skipping concept validation', desc: 'Opening based on "intuition" without real-world testing. You should: sell online/popup for 1-2 months, survey 50+ people, research competitors.', severity: 'warning' },
          { icon: 'handshake', title: 'Unclear partnership agreements', desc: 'Capital contributions, profit sharing, and decision-making authority must be documented from day one. Many businesses collapse because partners disagree.', severity: 'tip' },
          { icon: 'gear', title: 'Owner wearing too many hats', desc: 'Cooking, serving, marketing, and accounting simultaneously → burnout in 3-6 months. Prioritize hiring or outsourcing tasks outside your strengths.', severity: 'tip' },
        ] as KBWarningItem[],
      },
    ],
  },
  // ── COSTS (continued) ──
  {
    id: 'financial_management',
    slug: 'quan-ly-tai-chinh',
    icon: 'chart',
    title: 'Financial Management',
    subtitle: 'Money in, money out — every dong must be tracked',
    color: 'primary-light',
    category: 'cost',
    highlights: [
      { label: 'Cash Reserves', value: '3-6 months', note: 'of operating costs' },
      { label: 'P&L Review', value: 'Weekly' },
      { label: 'Cash Flow > Profit', value: 'Always true' },
    ],
    sections: [
      {
        type: 'stat-grid',
        heading: 'Financial Reports to Track',
        content: [
          { icon: 'chart', label: 'P&L (Profit & Loss)', value: 'Weekly', desc: 'Revenue - Costs = Profit/Loss. Three losing weeks in a row → take action immediately.' },
          { icon: 'money', label: 'Cash Flow', value: 'Daily', desc: 'Actual cash on hand. Being profitable on paper but having no cash in the till = still dead.' },
          { icon: 'meat', label: 'Food Cost %', value: 'Weekly', desc: '= Total COGS purchased / Total revenue. Compare against theoretical food cost.' },
          { icon: 'clock', label: 'Break-even Tracking', value: 'Monthly', desc: 'How many more months to payback? Are you on track?' },
        ] as KBStat[],
      },
      {
        type: 'list',
        heading: 'Cash Flow — F&B\'s Silent Killer',
        content: [
          'You collect cash IMMEDIATELY (customers pay upfront) but pay suppliers LATER (7-30 day terms) → creating the illusion of "having money." In reality, that cash already belongs to your suppliers.',
          'Peak season revenue (Lunar New Year, holidays) does not repeat every month. Save peak earnings to cover low season (February-March typically drops 15-25%).',
          'Fixed costs (rent, salaries) must be paid REGARDLESS of revenue. This is why "running out of cash = closing down."',
          'Rule: Always keep at least 2 months of operating costs in your account. Below this threshold = red alert.',
          'Don\'t withdraw profits too early. For the first 6 months, reinvest 100% of profits (if any) back into the business.',
        ],
      },
      {
        type: 'table',
        heading: 'Healthy Investment Capital Structure',
        content: [
          { label: 'Own Capital', range: '≥60%', note: 'At least 60% of total investment. Too much debt = interest pressure.' },
          { label: 'Borrowed Capital', range: '≤40%', note: 'Interest rates at 8-15%/year. Factor into monthly costs.' },
          { label: 'Working Capital', range: '15-20%', note: 'Of total investment. For ingredient turnover and payroll.' },
          { label: 'Contingency', range: '10-15%', note: 'For unplanned costs: construction delays, repairs, force majeure.' },
        ] as KBTableRow[],
      },
    ],
  },
  // ── LEGAL ──
  {
    id: 'legal_basics',
    slug: 'phap-ly-giay-phep',
    icon: 'legal',
    title: 'Legal & Permits',
    subtitle: 'Don\'t open without the right paperwork',
    color: 'secondary-light',
    category: 'legal',
    highlights: [
      { label: 'Required Permits', value: '5-7 types' },
      { label: 'Registration Time', value: '1-3 months' },
      { label: 'Legal Costs', value: 'VND 8-20 million' },
    ],
    sections: [
      {
        type: 'table',
        heading: 'Required Permits',
        content: [
          { label: 'Business Registration (DKKD)', range: '3-5 days', note: 'Sole proprietorship or LLC. Sole proprietorship is simpler and faster.' },
          { label: 'Food Safety Certificate (ATTP)', range: '15-30 days', note: 'Mandatory for all food businesses. Must be obtained BEFORE opening.' },
          { label: 'Fire Safety Certificate (PCCC)', range: '7-15 days', note: 'Fire extinguishers, emergency exits, signage. Issued by district police.' },
          { label: 'Staff Health Certificates', range: '1-3 days', note: 'All staff who handle food. Check-ups required every 6 months.' },
          { label: 'Lease Agreement', range: 'Before build-out', note: 'Must be notarized. Check: permitted use, term, early termination conditions.' },
          { label: 'Tax Registration + Tax ID', range: '3-5 days', note: 'After business registration. Register for e-invoicing at the same time.' },
          { label: 'Alcohol License', range: '10-20 days', note: 'Only if selling spirits above 15% ABV. Bars/pubs must have this.' },
        ] as KBTableRow[],
      },
      {
        type: 'list',
        heading: 'Registration Timeline — Work in Parallel',
        content: [
          'Weeks 1-2: Business registration + tax registration (done simultaneously, 3-5 days).',
          'Weeks 2-3: Submit food safety (ATTP) application (requires business registration). Simultaneously: schedule staff health check-ups.',
          'Weeks 2-3: Purchase fire extinguishers, install emergency exit signs → submit fire safety (PCCC) application.',
          'Weeks 3-4: Register for e-invoicing, set up accounting software.',
          'Weeks 4-6: Await food safety + fire safety certificates. Meanwhile: train staff, do a soft opening.',
        ],
      },
      {
        type: 'warning-list',
        heading: 'Legal Risks',
        content: [
          { icon: 'warning', title: 'Operating without a Food Safety Certificate (ATTP)', desc: 'Fine of VND 15-30 million + suspension of operations. Not worth the risk — waiting an extra 2-3 weeks is better.', severity: 'critical' },
          { icon: 'warning', title: 'Not paying Social Insurance for employees', desc: 'Penalty of 12-15%/year on unpaid amounts + back payment. Social Insurance enforcement has tightened significantly since 2025.', severity: 'critical' },
          { icon: 'warning', title: 'Lease not notarized', desc: 'No legal standing in disputes. The landlord can evict you at any time. ALWAYS notarize.', severity: 'warning' },
          { icon: 'warning', title: 'Business tax for sole proprietorships (from 2025)', desc: 'Revenue above VND 100 million/year requires lump-sum tax (1.5-5% depending on industry). Factor this into monthly costs.', severity: 'tip' },
        ] as KBWarningItem[],
      },
    ],
  },
  // ── LEGAL (continued) ──
  {
    id: 'business_registration',
    slug: 'ho-kinh-doanh-hay-cong-ty',
    icon: 'building',
    title: 'Sole Proprietorship or LLC?',
    subtitle: 'You don\'t always need to form a company',
    color: 'secondary-light',
    category: 'legal',
    highlights: [
      { label: 'F&B as Sole Prop.', value: '>80%' },
      { label: 'Registration Fee', value: 'VND 100K' },
      { label: 'Lump-sum Tax (F&B)', value: '4.5% of revenue' },
      { label: 'Tax-free if Revenue/Year', value: '<VND 200 million' },
    ],
    sections: [
      {
        type: 'text',
        content: 'Many people assume opening a restaurant or coffee shop requires forming a company. In reality, the vast majority of small F&B businesses in Vietnam operate as sole proprietorships (Ho Kinh Doanh) — simpler paperwork, lower costs, no need for professional accounting. Only form a company when there\'s a genuine need.',
      },
      {
        type: 'table',
        heading: 'Comparison: Sole Proprietorship vs. LLC',
        content: [
          { label: 'Registration Process', range: 'Sole Prop.: 3 days', note: 'LLC: 3-5 days + e-invoicing setup, digital signature, accounting' },
          { label: 'Initial Cost', range: 'Sole Prop.: ~VND 1.5-3M', note: 'LLC: ~VND 4-8M + VND 6-16M/year for accounting' },
          { label: 'Legal Entity Status', range: 'Sole Prop.: No', note: 'LLC: Yes — easier to borrow, sign large contracts' },
          { label: 'Asset Liability', range: 'Sole Prop.: Unlimited', note: 'LLC: Limited (within charter capital)' },
          { label: 'Taxation', range: 'Sole Prop.: Lump-sum 4.5% of revenue', note: 'LLC: CIT 15-20% on profit + VAT 8-10%' },
          { label: 'Accounting', range: 'Sole Prop.: Not required', note: 'LLC: Required — outsource at VND 500K-1.3M/month' },
          { label: 'Invoicing', range: 'Sole Prop.: Tax authority issues', note: 'LLC: Self-issue VAT invoices, input tax deductions' },
          { label: 'Opening Branches', range: 'Sole Prop.: Possible, separate process', note: 'LLC: Straightforward, no limit' },
        ] as KBTableRow[],
      },
      {
        type: 'stat-grid',
        heading: 'F&B Sole Proprietorship Taxes (Lump-sum)',
        content: [
          { icon: 'money', label: 'VAT', value: '3%', desc: 'On total revenue — food & beverage service category' },
          { icon: 'wallet', label: 'Personal Income Tax', value: '1.5%', desc: 'On total revenue — personal income tax' },
          { icon: 'chart', label: 'Total Lump-sum Tax', value: '4.5%', desc: 'Revenue of VND 500M/year → tax ~VND 22.5M (VND 1.9M/month)' },
          { icon: 'target', label: 'Tax Exemption', value: '<VND 200M', desc: 'Revenue under VND 200M/year → no tax obligation (effective 07/2025)' },
        ] as KBStat[],
      },
      {
        type: 'table',
        heading: 'Tax Example: Coffee Shop with VND 800M/Year Revenue',
        content: [
          { label: 'Monthly Revenue', range: '~VND 67 million', note: 'Average: VND 800M ÷ 12 months' },
          { label: 'VAT (3%)', range: 'VND 2M/month', note: '= VND 24M/year' },
          { label: 'Personal Income Tax (1.5%)', range: 'VND 1M/month', note: '= VND 12M/year' },
          { label: 'Total Tax/Month', range: 'VND 3M/month', note: '= VND 36M/year (4.5% × VND 800M)' },
          { label: 'Business License Fee', range: 'VND 1M/year', note: 'Revenue > VND 500M. To be abolished from 2026' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'When SHOULD You Switch to an LLC?',
        content: [
          { icon: 'trendingup', title: 'Revenue exceeds VND 1B/year', desc: 'From 06/2025, revenue ≥ VND 1B/year mandates e-invoicing + POS connected to tax authorities. Consider converting.', severity: 'warning' },
          { icon: 'target', title: 'Planning a chain of 2-3+ locations', desc: 'Sole proprietorships can open multiple locations, but management gets complex. An LLC is more convenient for chains.', severity: 'warning' },
          { icon: 'wallet', title: 'Need bank loans exceeding VND 500M', desc: 'Banks prefer lending to entities with legal status. Sole proprietorships find it hard to borrow large amounts.', severity: 'warning' },
          { icon: 'handshake', title: 'Partners require deductible VAT invoices', desc: 'Large businesses need input invoices for tax deductions. Sole proprietorships cannot self-issue these.', severity: 'tip' },
          { icon: 'clipboard', title: 'Significant deductible input costs', desc: 'LLCs can deduct input VAT — beneficial if you purchase many ingredients and equipment with proper invoices.', severity: 'tip' },
        ] as KBWarningItem[],
      },
      {
        type: 'list',
        heading: 'Actual Costs of Registering a Sole Proprietorship (A to Z)',
        content: [
          'Business registration fee at the district office: VND 100,000 (3 days).',
          'Business seal (optional): VND 200,000-500,000.',
          'Food Safety Certificate (ATTP): VND 500,000-1,000,000 (15-20 days).',
          'Health check-ups for owner + staff: VND 200,000-400,000 per person.',
          'Food safety knowledge training: VND 500,000 per group (typically online).',
          'Signage: VND 500,000-1,500,000.',
          'Total: approximately VND 1.5-3 million — completed within 3-4 weeks.',
        ],
      },
      {
        type: 'warning-list',
        heading: 'Risks of Not Registering',
        content: [
          { icon: 'warning', title: 'Operating without a business license', desc: 'Fine of VND 5-10 million. Operating a food business without ATTP: fine of VND 15-30 million + suspension.', severity: 'critical' },
          { icon: 'warning', title: 'Operating as a business without registration', desc: 'Fine of VND 50-100 million. Example: running a multi-location chain but only registered as a single sole proprietorship.', severity: 'critical' },
          { icon: 'warning', title: 'Not paying taxes', desc: 'Back taxes + late payment penalty of 0.03%/day. Plus administrative fine of 1-3x the evaded tax amount.', severity: 'critical' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Our advice: If you\'re just starting out with a single location and projected revenue under VND 1B/year → register as a sole proprietorship. Once stable and ready to expand, you can convert to an LLC — with 2 years of CIT exemption (policy effective from 10/2025). Sources: Decree 01/2021, Decree 168/2025, Amended Personal Income Tax Law 2025.',
      },
    ],
  },
  // ── STRATEGY (continued) ──
  {
    id: 'checklist_mindset',
    slug: 'tu-duy-chuan-bi',
    icon: 'check',
    title: 'Preparation Mindset',
    subtitle: 'Validate first, open later',
    color: 'mint-light',
    category: 'strategy',
    sections: [
      {
        type: 'stat-grid',
        heading: 'Numbers You MUST Know Before Opening',
        content: [
          { icon: 'money', label: 'Total Investment', value: '???', desc: 'Build-out + equipment + ingredients + permits + working capital + contingency.' },
          { icon: 'clock', label: 'Payback Period', value: '??? months', desc: 'Must be under 18 months. Over 24 months = too risky.' },
          { icon: 'users', label: 'Customers/Day to Break Even', value: '??? customers', desc: 'Total fixed costs / (avg. ticket - avg. COGS). Is this number realistic?' },
          { icon: 'wallet', label: 'Months You Can Sustain Losses', value: '??? months', desc: 'How long can you survive if revenue = 0? Need at least 3-6 months.' },
        ] as KBStat[],
      },
      {
        type: 'list',
        heading: 'Before opening, you should be able to answer:',
        content: [
          'How much capital do I have? How much is borrowed? What\'s the monthly interest rate?',
          'How long am I willing to accept losses? (Typically 3-6 months needed)',
          'If I\'m still losing money at month 6, can I afford to keep going?',
          'Do I have F&B management experience? If not, who will help? At what cost?',
          'Have I surveyed at least 5 competitors in the area? What do they sell, and at what prices?',
          'How many customers per day do I need to break even? Is that realistic for this location?',
          'Do I have a Plan B if revenue only reaches 60% of projections? (Which costs to cut? How to downsize?)',
          'Who will manage when I\'m away? Are operations standardized?',
          'Am I prepared to work 12-14 hours a day for the first 6 months?',
        ],
      },
      {
        type: 'text',
        content: 'The F&B Validator tool will help you answer most of these questions with concrete numbers. It takes 5 minutes of input — and could save you hundreds of millions in "tuition fees." Start validating now!',
      },
    ],
  },
];

export default KNOWLEDGE_BASE_EN;
