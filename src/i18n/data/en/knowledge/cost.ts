import type { KBTopic, KBTableRow, KBStat, KBWarningItem } from '@/types';

const COST_ARTICLES: KBTopic[] = [
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
  {
    id: 'food_cost_detail',
    slug: 'food-cost-chi-tiet',
    icon: 'meat',
    title: 'Food Cost Deep Dive',
    subtitle: 'Calculate COGS, control ingredients, and optimize profit margins',
    color: 'primary-light',
    category: 'cost',
    highlights: [
      { label: 'Ideal Food Cost', value: '28-35%', note: 'of revenue' },
      { label: 'Theoretical vs Actual Gap', value: '<3%', note: 'acceptable variance' },
      { label: 'Waste Target', value: '<5%', note: 'of total ingredients' },
      { label: 'Every 1% Saved', value: '≈10% more profit', note: 'net profit impact' },
    ],
    sections: [
      {
        type: 'stat-grid',
        heading: 'Food Cost Formulas',
        content: [
          { icon: 'chart', label: 'Food Cost %', value: 'COGS ÷ Revenue', desc: '= Total ingredient cost / Total revenue × 100. Target: 28-35% depending on model.' },
          { icon: 'meat', label: 'Theoretical Food Cost', value: 'Recipe-based', desc: '= Sum of (recipe cost × quantity sold) / Revenue. The "ideal" cost if zero waste.' },
          { icon: 'money', label: 'Actual Food Cost', value: 'Inventory-based', desc: '= (Opening stock + Purchases − Closing stock) / Revenue. What you actually spent.' },
          { icon: 'warning', label: 'Waste %', value: '<5%', desc: '= (Actual − Theoretical) / Revenue × 100. Gap >5% = investigate theft, spoilage, or over-portioning.' },
        ] as KBStat[],
      },
      {
        type: 'table',
        heading: 'Food Cost Benchmarks by Ingredient Category',
        content: [
          { label: 'Proteins (meat, seafood)', range: '35-50%', note: 'Highest cost category. Standardize portions strictly — a 10g variance per dish adds up fast.' },
          { label: 'Vegetables & herbs', range: '15-25%', note: 'High spoilage rate (20-30% waste if not managed). Buy frequently in smaller batches.' },
          { label: 'Beverages (coffee, tea, milk)', range: '15-25%', note: 'Low cost, high margin. Coffee shops thrive here — cost per cup often under VND 10,000.' },
          { label: 'Dry goods & sauces', range: '10-20%', note: 'Long shelf life, stable prices. Buy in bulk for better rates.' },
          { label: 'Packaging & takeaway', range: '3-8%', note: 'Often overlooked. Delivery-heavy businesses can spend VND 5,000-15,000 per order on packaging.' },
        ] as KBTableRow[],
      },
      {
        type: 'list',
        heading: 'Practical Tips to Reduce Food Cost',
        content: [
          'Standardize every recipe with exact weights and measurements. Create recipe cards with photos — no "a pinch of this, a handful of that." A 10% portion variance on a VND 50K dish = VND 5K lost per serve.',
          'Negotiate with at least 3 suppliers for each key ingredient. Even 5% savings on proteins (your largest cost) can boost net profit by 1-2%. Review supplier pricing quarterly.',
          'Implement strict FIFO (First In, First Out) for all inventory. Label every container with the date received. Spoiled ingredients = money in the trash.',
          'Use portion control tools: scales, measuring cups, standardized ladles. Train all kitchen staff to portion consistently — don\'t rely on "experience."',
          'Apply menu engineering: identify your Stars (high profit + high sales) and Dogs (low profit + low sales). Promote Stars, rework or remove Dogs. Review monthly.',
          'Use seasonal ingredients when possible. In-season produce in Vietnam can be 30-50% cheaper and fresher. Adapt your menu 3-4 times per year.',
          'Conduct daily inventory checks for high-value items (proteins, dairy, alcohol). Weekly full inventory counts. Compare actual vs theoretical — investigate any gap >3%.',
          'Cross-utilize ingredients across multiple dishes. If you buy premium beef for one dish, use trim for another. Minimize single-use specialty ingredients.',
        ],
      },
      {
        type: 'warning-list',
        heading: 'Red Flags — Investigate Immediately',
        content: [
          { icon: 'warning', title: 'Actual food cost exceeds theoretical by >5%', desc: 'This gap means VND is leaking somewhere: theft, spoilage, over-portioning, or unrecorded waste. Audit kitchen operations immediately.', severity: 'critical' },
          { icon: 'warning', title: 'Inventory shrinkage without explanation', desc: 'If your closing stock is consistently lower than expected, you may have a theft problem or unrecorded spoilage. Install cameras in storage areas and tighten receiving procedures.', severity: 'critical' },
          { icon: 'warning', title: 'Supplier prices rising without notice', desc: 'If a supplier raises prices by 10-15% without warning, you need backup suppliers ready. Never rely on a single source for critical ingredients.', severity: 'warning' },
          { icon: 'warning', title: 'Food cost creeping up month-over-month', desc: 'A slow 1-2% rise each month is hard to notice but devastating over 6 months. Track weekly food cost % — not just monthly.', severity: 'warning' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Food cost is the single largest controllable expense in F&B. A 1% reduction in food cost on VND 500M/year revenue = VND 5M saved annually — which flows directly to your bottom line. Master your food cost, and you master your profitability.',
      },
    ],
  },
  {
    id: 'rent_analysis',
    slug: 'chi-phi-thue-mat-bang',
    icon: 'location',
    title: 'Rental Cost Analysis',
    subtitle: 'Location rent benchmarks by area & lease negotiation tips',
    color: 'primary-light',
    category: 'cost',
    highlights: [
      { label: 'Rent-to-revenue', value: '≤ 15%' },
      { label: 'Typical deposit', value: '3-6 months' },
      { label: 'Min lease term', value: '3 years' },
    ],
    sections: [
      {
        type: 'stat-grid',
        heading: 'Rent Benchmarks (Ho Chi Minh City)',
        content: [
          { icon: 'trending', label: 'District 1, 3, Binh Thanh', value: '80-250M/mo', desc: 'Main street frontage, dense foot traffic. Suited for established brands and franchises. High competition but maximum visibility.' },
          { icon: 'chart', label: 'District 7, Thu Duc, 2', value: '30-80M/mo', desc: 'New residential areas, apartment complexes. Ideal for cafes, milk tea shops. Young demographics with decent income.' },
          { icon: 'money', label: 'Outer districts', value: '10-30M/mo', desc: 'Go Vap, Tan Binh, Binh Tan. Lower rent but requires stronger marketing. Best for rice, noodle, pho shops.' },
          { icon: 'home', label: 'Alley / Upper floors', value: '5-20M/mo', desc: 'Car-accessible alleys or 2nd-3rd floors. Low cost but needs a unique concept to attract customers. "Hidden gem" strategy.' },
        ] as KBStat[],
      },
      {
        type: 'table',
        heading: 'Rent-to-Revenue Ratio Guidelines',
        content: [
          { label: '< 10%', range: 'Good', note: 'Safe zone. Plenty of room for other costs and profit margins.' },
          { label: '10-15%', range: 'Acceptable', note: 'Industry average for F&B. Need tight control on other expenses.' },
          { label: '15-20%', range: 'Dangerous', note: 'Near loss threshold. Only acceptable if location is prime and revenue will grow fast.' },
          { label: '> 20%', range: 'Extremely risky', note: 'Almost certain loss. Look for another location or renegotiate rent.' },
        ] as KBTableRow[],
      },
      {
        type: 'list',
        heading: 'Lease Negotiation Checklist',
        content: [
          'Request 2-3 months rent-free period for setup and renovation. Most landlords agree for long-term leases.',
          'Lock rent for at least 2 years. Cap annual increases at 5-8% after year 2. Avoid leases allowing arbitrary rent increases.',
          'Read restoration clauses carefully: must you return to original state or can you keep renovations? Demolition can cost VND 50-100M.',
          'Ask about management fees, parking fees, utility rates. Many buildings charge 2-3x EVN rates (VND 3,000-5,000/kWh vs VND 1,800).',
          'Require subletting/transfer rights in case business fails. Without this clause, you lose everything if you must close.',
          'Verify legal status: land title, building permit, zoning. There are cases of tenants losing locations to urban redevelopment after 6 months.',
        ],
      },
      {
        type: 'warning-list',
        heading: 'Common Rental Traps',
        content: [
          { icon: 'warning', title: 'Choosing "cheap" rent with no foot traffic', desc: 'Rent 50% cheaper but revenue drops 70% due to zero walk-in traffic. Cheap rent doesn\'t compensate for low revenue.', severity: 'critical' },
          { icon: 'warning', title: 'Signing short leases (under 2 years)', desc: 'F&B needs 6-12 months to break even. A 1-year lease means just as customers come, the lease ends and landlord raises rent.', severity: 'critical' },
          { icon: 'warning', title: 'Not surveying peak hours', desc: 'Location is busy at lunch but dead at night. Count pedestrians for at least 3 different days, including weekdays and weekends.', severity: 'warning' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Rent is the largest fixed cost and the hardest to change once committed. Use F&B Validator to calculate what percentage of projected revenue your rent represents, and whether there\'s enough margin left for profit.',
      },
    ],
  },
];

export default COST_ARTICLES;
