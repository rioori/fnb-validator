import type { KBTopic, KBTableRow, KBStat, KBWarningItem } from '@/types';

const STRATEGY_ARTICLES: KBTopic[] = [
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
  {
    id: 'revenue_optimization',
    slug: 'toi-uu-doanh-thu',
    icon: 'trending',
    title: 'F&B Revenue Optimization',
    subtitle: '12 tactics to increase revenue without raising prices',
    color: 'primary-light',
    category: 'strategy',
    highlights: [
      { label: 'Increase avg ticket', value: '+20-40%' },
      { label: 'Boost repeat visits', value: '+30%' },
      { label: 'Reduce leakage', value: '-15%' },
    ],
    sections: [
      {
        type: 'stat-grid',
        heading: 'The F&B Revenue Formula',
        content: [
          { icon: 'people', label: 'Customers/day', value: 'Traffic', desc: 'How many people walk in? Increase via marketing, location, branding. This is the hardest variable to improve.' },
          { icon: 'money', label: 'Average ticket', value: 'Avg. Ticket', desc: 'How much does each customer spend? Increase via upselling, combos, menu engineering. The easiest variable to improve.' },
          { icon: 'chart', label: 'Visit frequency', value: 'Frequency', desc: 'How often do customers return per month? Increase via loyalty programs, consistency, seasonal menus.' },
          { icon: 'target', label: 'Conversion rate', value: 'Conversion', desc: 'What % of passersby enter? Average is 3-5%. Increase via storefront, outdoor menu board, aroma.' },
        ] as KBStat[],
      },
      {
        type: 'list',
        heading: 'Increase Average Ticket (Quick Wins)',
        content: [
          'Systematic upselling: Train staff to ask "Would you like to add a topping/upgrade to large?" for EVERY order. Acceptance rate 20-30%. Just +VND 10K/order × 100 customers = +VND 1M/day.',
          'Smart combos: Bundle 2-3 bestsellers, discount 10-15% vs. buying separately. Customers feel they\'re getting a deal, you increase ticket 25-35%. Example: Coffee 35K + Pastry 25K = Combo 50K.',
          'Menu engineering: Place high-margin items at the top-right corner (the "golden eye zone" of menus). Add photos, highlight boxes. Sales of that item increase 15-20%.',
          'Happy Hour: Discount 20% during 2-4pm to fill dead hours. Additional revenue > discount cost. Especially effective for cafes and milk tea shops.',
          'Delivery optimization: Price delivery 10-15% higher than dine-in (to cover platform fees). Create a delivery-specific menu: only items that transport well with high margins.',
        ],
      },
      {
        type: 'list',
        heading: 'Increase Repeat Visit Frequency',
        content: [
          'Simple loyalty: Stamp cards ("buy 10 get 1 free") still work. Digital loyalty (via messaging apps) is better because you can track data. Cost is nearly zero.',
          'Consistency is king: Customers return because THE DISH TASTES THE SAME. Standardize recipes, weigh precisely. One "off" experience = lost customer forever.',
          'Seasonal menu updates: Add 2-3 seasonal items each quarter. Creates a reason for customers to return and "try something new." Keep 70% menu fixed + 30% rotating.',
          'Post-purchase care: Send a message after 7 days: "We miss you! Here\'s a 10% voucher." Return rate increases by 25%.',
        ],
      },
      {
        type: 'warning-list',
        heading: 'Common Revenue Leaks',
        content: [
          { icon: 'warning', title: 'Staff not upselling', desc: 'Missing 50-100 upsell opportunities daily × VND 15K = losing VND 750K-1.5M/day. Solution: upsell KPIs, bonus based on incremental revenue.', severity: 'critical' },
          { icon: 'warning', title: 'Ingredient waste', desc: 'Average 5-10% of raw materials wasted (discarded, spoiled, pilfered). With 35% food cost, 10% waste = losing 3.5% of revenue. Solution: daily inventory counts.', severity: 'critical' },
          { icon: 'warning', title: 'Not utilizing off-peak hours', desc: 'Open 12 hours but only busy for 4-5. Still paying wages + electricity for 7-8 idle hours. Solution: happy hour, workshops, events, co-working space.', severity: 'warning' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'F&B Revenue = Traffic × Ticket × Frequency. Increasing each variable by 20% yields a total revenue increase of 73% (1.2 × 1.2 × 1.2 = 1.73). Use F&B Validator to simulate different revenue scenarios and find the optimal combination for your business model.',
      },
    ],
  },
];

export default STRATEGY_ARTICLES;
