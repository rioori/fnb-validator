import type { BlogPost, KBTableRow, KBStat, KBWarningItem } from '@/types';

const BLOG_POSTS: BlogPost[] = [
  {
    slug: '5-sai-lam-mo-quan-fnb',
    title: '5 Common Mistakes When Opening an F&B Business',
    excerpt: 'Classic mistakes that cause many new owners to burn through cash in their first year — and how to avoid them.',
    date: '2026-02-25',
    author: 'Khang Pham',
    tags: ['experience', 'opening'],
    sections: [
      {
        type: 'text',
        content: 'According to statistics, over 60% of F&B businesses in Vietnam close within the first 18 months. Most fail not because of bad food — but because of avoidable financial and operational mistakes. Here are the 5 most common mistakes I see when advising new restaurant owners.',
      },
      {
        type: 'list',
        heading: '5 Most Common Mistakes',
        content: [
          "Not budgeting enough capital: Many people only count construction + equipment costs, forgetting 3-6 months of working capital before the business stabilizes. Result: running out of money before getting established.",
          "Choosing the wrong location: Chasing a 'nice' location without calculating actual foot traffic, target customers, or whether rent exceeds 15-20% of projected revenue.",
          'Underestimating food costs: Actual food cost is typically 5-10% higher than recipe calculations due to waste, spoilage, and kitchen inefficiency.',
          "Hiring too many staff too early: A new business doesn't need a full team from day one. Staff salaries are fixed costs — bleeding money every month.",
          "No marketing plan: Assuming 'build it and they will come' — in reality, you need at least 3-5% of revenue for marketing in the first 6 months.",
        ],
      },
      {
        type: 'table',
        heading: 'Expected vs Reality Comparison',
        content: [
          { label: 'Total initial investment', range: '+20-40%', note: 'Construction overruns, permits, equipment replacements' },
          { label: 'Ingredient costs', range: '+5-10%', note: 'Waste, spoilage, price fluctuations' },
          { label: 'Break-even timeline', range: '+6-12 months', note: 'Slower ramp-up than expected' },
          { label: 'First month revenue', range: '-30-50%', note: 'No brand awareness, no reviews yet' },
          { label: 'Staff costs', range: '+15-25%', note: 'Insurance, overtime, turnover, training' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Red Flags to Watch For',
        content: [
          { icon: 'warning', title: 'Working capital under 3 months', desc: "If you can't cover 3 months of operations without revenue, the risk is very high.", severity: 'critical' },
          { icon: 'warning', title: 'Rent above 20% of projected revenue', desc: 'Overly expensive rent will eat all your profits, even if the business is busy.', severity: 'critical' },
          { icon: 'warning', title: 'No detailed cost spreadsheet', desc: 'Opening a business without a financial model = flying blind.', severity: 'warning' },
          { icon: 'warning', title: "Haven't tested before signing a lease", desc: 'Test your concept through pop-ups or online sales first to validate real demand.', severity: 'tip' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'The good news is all these mistakes are preventable with proper preparation. Use Validator.vn to run your numbers before making decisions — know exactly when you\'ll break even, how many customers you need daily, and what your real costs look like.',
      },
    ],
  },
  {
    slug: 'cach-tinh-chi-phi-mo-quan-cafe',
    title: 'How to Calculate Cafe Startup Costs',
    excerpt: 'A detailed A-to-Z breakdown: initial investment, monthly expenses, and hidden costs you might forget.',
    date: '2026-02-20',
    author: 'Khang Pham',
    tags: ['costs', 'cafe'],
    sections: [
      {
        type: 'text',
        content: 'Opening a cafe is a dream for many, but "how much money do I need?" is the hardest question to answer. This article breaks down every cost category to help you arrive at a concrete number — no budget surprises.',
      },
      {
        type: 'table',
        heading: 'Initial Investment Costs',
        content: [
          { label: 'Security deposit (3-6 months)', range: '30 - 150M VND', note: 'Depends on location, typically 3-6 months rent' },
          { label: 'Construction & decoration', range: '80 - 300M VND', note: '2-5M VND/m². The nicer, the costlier' },
          { label: 'Espresso machine', range: '30 - 150M VND', note: '1-group: 30-50M, 2-group: 80-150M' },
          { label: 'Coffee grinder', range: '8 - 40M VND', note: 'Good grinders ensure consistent flavor' },
          { label: 'Fridges, display cases', range: '15 - 50M VND', note: '2-3 units depending on menu' },
          { label: 'Tables, chairs & furniture', range: '20 - 80M VND', note: 'About 1-3M VND per table set' },
          { label: 'Barista tools & kitchen equipment', range: '10 - 30M VND', note: 'Pitchers, tampers, scales, blenders...' },
          { label: 'POS, cameras, WiFi', range: '5 - 15M VND', note: 'Management system + security' },
          { label: 'Licenses & legal', range: '5 - 15M VND', note: 'Business registration, food safety, fire safety' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: 'Monthly Operating Costs',
        content: [
          { label: 'Rent', range: '10 - 50M VND', note: 'Target: under 15% of revenue' },
          { label: 'Ingredients (coffee, milk, syrups...)', range: '15 - 40M VND', note: 'Food cost around 25-30% of revenue' },
          { label: 'Staff wages (2-5 people)', range: '16 - 40M VND', note: 'Barista 6-8M, server 5-6M/month' },
          { label: 'Utilities', range: '3 - 8M VND', note: 'AC + espresso machine = high electricity' },
          { label: 'Marketing & promotions', range: '2 - 8M VND', note: 'Facebook ads, Grab deals, sampling' },
          { label: 'Waste & spoilage', range: '2 - 5M VND', note: 'Expired milk, test drinks, spills' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Hidden Costs Often Overlooked',
        content: [
          { icon: 'warning', title: 'Social insurance for staff', desc: 'Employer pays 21.5% on base salary. 5 employees = extra 5-8M VND/month.', severity: 'warning' },
          { icon: 'warning', title: 'Equipment maintenance', desc: 'Espresso machines need servicing every 6 months (2-5M VND). Grinder burrs need periodic replacement.', severity: 'warning' },
          { icon: 'warning', title: 'Delivery app commissions', desc: 'GrabFood/ShopeeFood take 20-30% per order. Sell 100 drinks via apps = lose 20-30 drinks worth in commissions.', severity: 'critical' },
          { icon: 'warning', title: 'New hire training costs', desc: 'F&B has very high turnover. Each new hire = 2-4 weeks training, quality drops temporarily.', severity: 'tip' },
        ] as KBWarningItem[],
      },
      {
        type: 'stat-grid',
        heading: 'Total Investment by Size',
        content: [
          { icon: 'coffee', label: 'Small cafe (20-30m²)', value: '200 - 400M VND', desc: '10-15 seats, mainly take-away, 2-3 staff' },
          { icon: 'coffee', label: 'Medium cafe (40-60m²)', value: '400 - 800M VND', desc: '20-30 seats, dine-in + delivery, 4-6 staff' },
          { icon: 'coffee', label: 'Large cafe (80-120m²)', value: '800M - 1.5B VND', desc: '40-60 seats, full-service, 8-12 staff' },
          { icon: 'coffee', label: 'Specialty / Premium', value: '1 - 3B VND', desc: 'High-end machines, special interior, unique concept' },
        ] as KBStat[],
      },
      {
        type: 'text',
        content: 'These figures are estimates for HCMC and Hanoi (2026). Other provinces may be 20-40% lower. Most importantly: always reserve at least 3 months of operating costs as working capital. Use Validator.vn to run detailed scenarios for your specific cafe plan.',
      },
    ],
  },
  {
    slug: 'xu-huong-fnb-viet-nam-2026',
    title: 'F&B Trends in Vietnam 2026',
    excerpt: 'From healthy food to AI in operations — 5 trends reshaping the F&B industry this year.',
    date: '2026-02-15',
    author: 'Khang Pham',
    tags: ['trends', 'market'],
    sections: [
      {
        type: 'text',
        content: "Vietnam's F&B industry in 2026 continues to evolve rapidly. Consumers are increasingly discerning, technology is penetrating every aspect of operations, and new business models keep emerging. Here are the 5 most notable trends this year.",
      },
      {
        type: 'stat-grid',
        heading: 'Key Numbers',
        content: [
          { icon: 'growth', label: 'VN F&B Market Size', value: '$22B', desc: 'Estimated 2026 market size, +12% YoY' },
          { icon: 'chart', label: 'Healthy Food', value: '+35%', desc: 'Sales growth in healthy/clean food segment' },
          { icon: 'delivery', label: 'Cloud Kitchens', value: '1,200+', desc: 'Active cloud kitchens operating in Vietnam' },
          { icon: 'robot', label: 'AI Adoption', value: '28%', desc: 'F&B businesses using AI/automation in VN' },
        ] as KBStat[],
      },
      {
        type: 'list',
        heading: '5 Key Trends',
        content: [
          'Healthy & Clean Food: Young consumers (Gen Z, Millennials) increasingly care about health. Salad bars, protein bowls, cold-pressed juices, and low-carb menus are booming. Restaurants with "healthy options" on the menu attract 20-30% more from this demographic.',
          "Cloud Kitchen Boom: Setting up a cloud kitchen costs just 1/3 to 1/5 of a traditional restaurant. With GrabFood, ShopeeFood, and TikTok Shop growth, many brands only need a good kitchen + online marketing. Lower risk, faster concept testing.",
          'AI & Tech in Operations: Reservation chatbots, AI ingredient forecasting, smart POS with auto upsell suggestions, AI cameras for customer counting — technology helps reduce 15-25% of operating costs when applied correctly.',
          'Experience-based Dining: Customers come not just to eat but to take photos and have experiences. Unique concepts, Instagram-worthy spaces, interactive menus, and workshops (latte art, pizza making) give customers reasons to return and share on social media.',
          'Sustainable Packaging & ESG: Since 2025, major cities have tightened plastic waste regulations. Eco-friendly packaging (paper cups, bamboo straws, sugarcane containers) meets both legal requirements and young customer preferences. Green packaging costs only 10-15% more but significantly boosts brand value.',
        ],
      },
      {
        type: 'warning-list',
        heading: 'Advice for Business Owners',
        content: [
          { icon: 'tip', title: "Don't chase every trend", desc: 'Pick 1-2 trends that fit your model and budget. Doing 1 thing well beats doing 5 things poorly.', severity: 'tip' },
          { icon: 'tip', title: 'Test small before going all-in', desc: 'Add 2-3 healthy items to your current menu, try selling on GrabFood before opening a dedicated cloud kitchen.', severity: 'tip' },
          { icon: 'warning', title: 'Watch out for hype', desc: "Many 'hot' trends have short lifecycles (bubble tea 2019, spicy noodles 2017). Choose trends with long-term fundamentals.", severity: 'warning' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Trends change constantly, but business fundamentals remain the same: control costs, understand your customers, and have clear data. Use Validator.vn to check the financial health of your business — no matter which trend you follow.',
      },
    ],
  },
  {
    slug: 'quan-ly-dong-tien-quan-fnb',
    title: 'Cash Flow Management for F&B Businesses',
    excerpt: 'Revenue is vanity, profit is sanity, but cash flow is king. Learn how to keep your restaurant alive when money moves faster than you think.',
    date: '2026-02-28',
    author: 'Khang Pham',
    tags: ['finance', 'operations'],
    sections: [
      {
        type: 'text',
        content: 'Most F&B businesses in Vietnam don\'t fail because of bad food or low sales. They fail because they run out of cash. You can have a packed house every weekend and still not be able to pay suppliers on Monday. This is the cash flow paradox — and understanding it is the difference between surviving your first year and becoming another statistic.',
      },
      {
        type: 'stat-grid',
        heading: 'Cash Flow Reality Check',
        content: [
          { icon: 'money', label: 'Cash Cycle Gap', value: '15-30 days', desc: 'Typical delay between paying suppliers and receiving revenue' },
          { icon: 'warning', label: 'Businesses Failing from Cash Issues', value: '82%', desc: 'Of F&B closures cite cash flow as a primary cause' },
          { icon: 'chart', label: 'Recommended Cash Reserve', value: '3-6 months', desc: 'Minimum operating expenses to keep in reserve' },
          { icon: 'calendar', label: 'Payment Cycle Mismatch', value: '7 vs 30 days', desc: 'Suppliers want payment in 7 days, but monthly expenses hit on the 30th' },
        ] as KBStat[],
      },
      {
        type: 'list',
        heading: '5 Cash Flow Rules Every F&B Owner Must Follow',
        content: [
          'Separate personal and business accounts: This is non-negotiable. Mix them and you\'ll never know your real position. Open a dedicated business bank account and pay yourself a fixed salary — even if it\'s small.',
          'Track cash daily, not monthly: At minimum, record daily revenue, daily expenses, and your bank balance. A simple spreadsheet works. By the time you check monthly, it\'s often too late to course-correct.',
          'Negotiate supplier payment terms: Most Vietnamese F&B suppliers default to COD (cash on delivery). But once you\'ve built a relationship (2-3 months of consistent orders), negotiate 7-day or 14-day payment terms. This alone can free up 20-30M VND in working capital.',
          'Build a cash buffer before opening: Beyond your initial investment, set aside at least 3 months of operating costs (rent + staff + ingredients + utilities). In HCMC, this typically means 80-200M VND depending on scale.',
          'Watch your delivery app cash cycle: GrabFood and ShopeeFood pay on different schedules (weekly or bi-weekly). If delivery is 30%+ of your revenue, these payment delays can create dangerous gaps. Track when app payments arrive and plan expenses around those dates.',
        ],
      },
      {
        type: 'table',
        heading: 'Monthly Cash Flow Template',
        content: [
          { label: 'Cash in: Dine-in revenue', range: '60-70%', note: 'Collected daily — your most reliable cash source' },
          { label: 'Cash in: Delivery apps', range: '20-30%', note: 'Paid weekly/bi-weekly with 20-30% commission deducted' },
          { label: 'Cash in: Catering / Events', range: '5-10%', note: 'Irregular but high-margin — collect 50% deposit upfront' },
          { label: 'Cash out: Ingredients', range: '25-35%', note: 'Largest variable cost — negotiate terms with top 3 suppliers' },
          { label: 'Cash out: Rent', range: '12-18%', note: 'Fixed, due monthly — largest single fixed obligation' },
          { label: 'Cash out: Staff wages', range: '20-30%', note: 'Paid monthly, but factor in 13th-month salary and bonuses' },
          { label: 'Cash out: Utilities & misc', range: '5-10%', note: 'Electricity spikes in summer (AC), water, internet, maintenance' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Cash Flow Red Flags',
        content: [
          { icon: 'warning', title: 'Paying suppliers late more than twice', desc: 'Lose supplier trust and they\'ll switch you to COD or cut you off entirely. In Vietnam\'s F&B market, supplier relationships are everything.', severity: 'critical' },
          { icon: 'warning', title: 'Using next month\'s rent money for this month\'s ingredients', desc: 'This is the start of a death spiral. If you\'re robbing Peter to pay Paul, you need to cut costs immediately.', severity: 'critical' },
          { icon: 'warning', title: 'Revenue growing but bank balance shrinking', desc: 'Classic sign of poor cash management. Growth eats cash — more customers means more ingredients purchased upfront.', severity: 'warning' },
          { icon: 'warning', title: 'No visibility on next 2 weeks\' expenses', desc: 'Always know what\'s due in the next 14 days. If you can\'t list your upcoming obligations from memory, you\'re flying blind.', severity: 'tip' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Cash flow management isn\'t glamorous, but it\'s what keeps your doors open. The best menu in the world means nothing if you can\'t pay your staff on time. Use Validator.vn to model your monthly cash flow scenarios — see exactly how much working capital you need and when your breakeven cash flow point arrives.',
      },
    ],
  },
  {
    slug: 'chon-mat-bang-kinh-doanh',
    title: 'How to Choose the Right Location for Your F&B Business',
    excerpt: 'Location can make or break a restaurant. Here\'s a data-driven framework for evaluating F&B locations in Vietnam\'s competitive market.',
    date: '2026-02-26',
    author: 'Khang Pham',
    tags: ['location', 'opening'],
    sections: [
      {
        type: 'text',
        content: 'In Vietnam\'s F&B market, there\'s a saying: "Location is 50% of success." While that might be an oversimplification, choosing the wrong location is one of the most expensive and irreversible mistakes you can make. You can fix a bad menu in a week, retrain staff in a month, but a bad lease locks you in for 2-3 years. Here\'s how to evaluate locations systematically instead of relying on gut feeling.',
      },
      {
        type: 'stat-grid',
        heading: 'Location Economics at a Glance',
        content: [
          { icon: 'money', label: 'Rent-to-Revenue Ratio', value: 'Max 15-18%', desc: 'Golden rule: rent should never exceed this share of projected revenue' },
          { icon: 'people', label: 'Foot Traffic Minimum', value: '500+ people/hr', desc: 'For a street-level cafe, aim for this during peak lunch/evening hours' },
          { icon: 'chart', label: 'Lease Lock-in', value: '2-5 years', desc: 'Average F&B lease in HCMC/Hanoi — a wrong choice is very costly' },
          { icon: 'warning', label: 'Deposit Required', value: '3-6 months rent', desc: 'Typical upfront deposit in major Vietnamese cities' },
        ] as KBStat[],
      },
      {
        type: 'list',
        heading: 'The 7-Point Location Scorecard',
        content: [
          'Foot traffic quality (not just quantity): Don\'t just count heads — count wallets. 500 office workers passing by at lunch is worth more than 2,000 motorbikes zooming past. Spend 3 different days counting foot traffic at 3 different times (morning, lunch, evening).',
          'Target customer match: A premium brunch cafe near a university won\'t work. A cheap banh mi stall in a luxury apartment complex won\'t either. Map your ideal customer to the neighborhood demographics.',
          'Visibility and access: Can people see your shopfront from 30 meters away? Is there motorbike parking? Can GrabFood drivers find you easily? In Vietnam, poor parking alone can kill 30-40% of potential walk-ins.',
          'Competition density: Some competition is good (it means demand exists). Too much means price wars. Walk a 500m radius and count every F&B business. If there are 10+ similar concepts, think twice.',
          'Rent affordability test: Calculate your projected monthly revenue, then check if rent is under 15-18%. A beautiful corner shop at 80M VND/month needs 450-530M VND/month in revenue to be sustainable. Can you realistically hit that?',
          'Landlord reliability: In Vietnam, verbal agreements mean little. Get everything in writing: lease term, annual rent increase cap (ideally max 8-10%/year), renovation rights, early termination terms. Talk to previous tenants if possible.',
          'Infrastructure check: Electrical capacity (espresso machines need 3-phase power), water pressure, grease trap requirements, ventilation for kitchens, and fire safety compliance. These retrofit costs can add 50-100M VND if not already in place.',
        ],
      },
      {
        type: 'table',
        heading: 'Rent Benchmarks by Location Type (HCMC/Hanoi, 2026)',
        content: [
          { label: 'Street-level, District 1/Hoan Kiem', range: '50 - 150M VND/mo', note: 'Highest traffic but also highest cost and competition' },
          { label: 'Street-level, inner districts (D3, D7, Cau Giay)', range: '25 - 70M VND/mo', note: 'Good balance of traffic and affordability' },
          { label: 'Shopping mall / food court', range: '40 - 120M VND/mo', note: 'Guaranteed traffic but high commission + revenue sharing' },
          { label: 'Apartment complex ground floor', range: '15 - 40M VND/mo', note: 'Captive audience but limited to residents' },
          { label: 'Alley location (hem)', range: '8 - 25M VND/mo', note: 'Cheapest option — works for delivery-first or destination dining' },
          { label: 'Suburban / new urban areas (D9, Long Bien)', range: '10 - 30M VND/mo', note: 'Growing areas, lower cost, but traffic still developing' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Location Red Flags',
        content: [
          { icon: 'warning', title: 'Landlord refuses a written lease', desc: 'Walk away immediately. No written contract = no protection when they raise rent 30% overnight or kick you out for a higher bidder.', severity: 'critical' },
          { icon: 'warning', title: 'Three or more F&B businesses closed here recently', desc: 'A location with serial tenant failure usually has a structural problem — bad traffic, difficult parking, or a problematic landlord.', severity: 'critical' },
          { icon: 'warning', title: 'Rent exceeds 20% of your most optimistic revenue projection', desc: 'If even your best-case scenario barely covers rent, your realistic scenario definitely won\'t.', severity: 'warning' },
          { icon: 'warning', title: 'The location "just feels right"', desc: 'Gut feeling is not a business plan. Always validate with foot traffic counts, rent ratios, and competitor analysis before signing.', severity: 'tip' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'The right location won\'t guarantee success, but the wrong one almost guarantees failure. Take your time, do the math, and never let urgency push you into a bad lease. Use Validator.vn to stress-test your location economics — plug in different rent levels and see exactly how they impact your breakeven timeline and profitability.',
      },
    ],
  },
  {
    slug: 'xay-dung-menu-hieu-qua',
    title: 'Building an Effective Menu for Your F&B Business',
    excerpt: 'Your menu is your most powerful sales tool. Learn how to design, price, and optimize it to maximize revenue and minimize waste.',
    date: '2026-02-24',
    author: 'Khang Pham',
    tags: ['menu', 'operations'],
    sections: [
      {
        type: 'text',
        content: 'Most new F&B owners in Vietnam make one of two menu mistakes: either they offer too many items (trying to please everyone) or they price based on gut feeling rather than actual cost data. Your menu is not just a list of food — it\'s your primary sales tool, your cost control mechanism, and your brand statement all in one. Here\'s how to build a menu that actually makes money.',
      },
      {
        type: 'stat-grid',
        heading: 'Menu Performance Benchmarks',
        content: [
          { icon: 'chart', label: 'Ideal Menu Size', value: '25-40 items', desc: 'Small enough to manage quality, large enough for variety' },
          { icon: 'money', label: 'Target Food Cost', value: '28-35%', desc: 'Percentage of menu price that goes to ingredients' },
          { icon: 'growth', label: 'Star Items', value: '20% of menu', desc: 'High-popularity + high-margin items that drive your profits' },
          { icon: 'warning', label: 'Menu Waste from Oversize', value: '15-25%', desc: 'Extra ingredient waste when menu has 60+ items' },
        ] as KBStat[],
      },
      {
        type: 'list',
        heading: 'Menu Design Principles',
        content: [
          'Start with your top 5 "hero" items: These are the dishes people will come specifically for — your signature items. They should be unique, photogenic (for social media), and have a healthy margin (65-70%+ gross margin). Everything else on your menu supports these heroes.',
          'Price using the factor method: Calculate actual ingredient cost per dish, then multiply by 3-3.5x for your menu price. A banh mi costing 12,000 VND to make should sell for 36,000-42,000 VND. Adjust slightly based on competitor pricing and perceived value.',
          'Design high-margin combos and upsells: A standalone iced coffee at 35,000 VND has a 70% margin. Pair it with a pastry for 55,000 VND (combo discount) and you\'ve increased the average ticket by 57% while maintaining margin. Always offer a combo option.',
          'Limit menu size ruthlessly: Every item on your menu adds ingredient SKUs, prep time, training complexity, and waste potential. A focused 30-item menu will outperform a 70-item menu in both quality and profitability. If an item sells fewer than 5 portions per day, consider cutting it.',
          'Use menu psychology: Place high-margin items at the top-right of each section (where eyes naturally go first). Don\'t use currency symbols or dotted lines to prices. Use descriptive names — "Grandmother\'s Traditional Pho" sells better than "Pho Bo" at the same price.',
          'Seasonal rotation keeps things fresh: Keep 70-80% of your menu fixed (your core money-makers) and rotate 20-30% seasonally. This gives regulars a reason to come back, lets you test new items, and creates social media buzz without operational chaos.',
        ],
      },
      {
        type: 'table',
        heading: 'Menu Item Classification (The BCG Matrix for Food)',
        content: [
          { label: 'Stars (High popularity + High margin)', range: 'Keep & promote', note: 'Your money-makers. Feature them prominently. Example: signature drink at 65% margin selling 50+/day' },
          { label: 'Workhorses (High popularity + Low margin)', range: 'Re-engineer pricing', note: 'Customers love them but they barely make money. Reduce portion slightly or find cheaper ingredients' },
          { label: 'Puzzles (Low popularity + High margin)', range: 'Promote harder', note: 'Great margins but nobody orders them. Better naming, photos, or staff recommendations can fix this' },
          { label: 'Dogs (Low popularity + Low margin)', range: 'Remove from menu', note: 'Neither popular nor profitable. Cut them — they only add complexity and waste' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Common Menu Mistakes',
        content: [
          { icon: 'warning', title: 'Pricing based on competitors alone', desc: 'If your neighbor sells pho for 45,000 VND but your ingredient cost is higher, matching their price means losing money. Always start with your own cost structure.', severity: 'critical' },
          { icon: 'warning', title: 'No food cost tracking per item', desc: 'If you don\'t know the exact cost of each dish, you\'re guessing at profitability. Track ingredient costs monthly — prices fluctuate, especially pork, chicken, and vegetables.', severity: 'critical' },
          { icon: 'warning', title: 'Too many low-selling items', desc: 'Each item requires prep, storage, and ingredients. If 40% of your menu accounts for less than 10% of orders, you\'re carrying dead weight.', severity: 'warning' },
          { icon: 'warning', title: 'Ignoring delivery menu optimization', desc: 'Your GrabFood/ShopeeFood menu should be different from dine-in. Remove items that travel poorly, add delivery-friendly combos, and account for the 25-30% commission in your pricing.', severity: 'tip' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'A well-designed menu is a profit engine. Review it monthly, track what sells and what doesn\'t, and never be afraid to cut underperformers. Use Validator.vn to model how different menu mixes and price points affect your overall food cost ratio and bottom line.',
      },
    ],
  },
  {
    slug: 'marketing-quan-fnb-ngan-sach-thap',
    title: 'Low-Budget Marketing for F&B Businesses',
    excerpt: 'You don\'t need millions to market your restaurant. These proven, low-cost strategies work specifically for Vietnam\'s F&B market.',
    date: '2026-02-22',
    author: 'Khang Pham',
    tags: ['marketing', 'costs'],
    sections: [
      {
        type: 'text',
        content: 'New F&B owners in Vietnam often make two marketing mistakes: either spending zero (hoping word-of-mouth will do everything) or blowing 50-100M VND on a fancy grand opening that generates buzz for exactly one week. The truth is, effective F&B marketing is about consistency, not budget size. Here are strategies that cost little but deliver real, measurable results.',
      },
      {
        type: 'stat-grid',
        heading: 'Marketing Budget Reality',
        content: [
          { icon: 'money', label: 'Recommended Budget', value: '3-5% of revenue', desc: 'Minimum marketing spend for a new F&B business in months 1-6' },
          { icon: 'chart', label: 'Google Maps Impact', value: '+25-40%', desc: 'Walk-in increase after optimizing your Google Business listing' },
          { icon: 'people', label: 'UGC Value', value: '4x higher', desc: 'User-generated content converts 4x better than branded content' },
          { icon: 'growth', label: 'Repeat Customer Value', value: '5-7x cheaper', desc: 'Cost to retain vs acquire a new customer' },
        ] as KBStat[],
      },
      {
        type: 'list',
        heading: '8 Low-Cost Marketing Tactics That Actually Work',
        content: [
          'Google Maps optimization (free): Claim your Google Business profile, add 20+ high-quality photos, fill in hours/menu/phone, and actively respond to every review. In Vietnam, 70%+ of restaurant discovery starts with Google Maps or Grab search. This single action can increase walk-ins by 25-40%.',
          'Micro-influencer partnerships (500K-2M VND/post): Forget celebrity influencers. Find local food bloggers with 5,000-30,000 followers in your city. Invite them for a free meal in exchange for an honest review. Their audience is local, engaged, and trusts their recommendations.',
          'User-generated content (free): Create one "Instagrammable" spot in your restaurant — a feature wall, a neon sign, a unique drink presentation. Customers will photograph it and share it for free. Repost their content (with permission) on your page. This is more authentic than any ad.',
          'Loyalty program via Zalo OA (nearly free): Set up a Zalo Official Account and create a simple stamp card system. Every 10th coffee free, or spend 500K VND and get a 50K voucher. Zalo has 75M+ users in Vietnam — it\'s the cheapest CRM channel available.',
          'Strategic GrabFood/ShopeeFood promotions (variable): Instead of 24/7 discounts that eat your margins, run targeted promotions during slow hours (2-5 PM weekdays). A 15% discount during dead hours costs less than you think and builds the delivery habit.',
          'Community events and partnerships (low cost): Partner with nearby offices for lunch deals, host a small latte art workshop on weekends, or set up a "study-friendly hours" policy. These create community and repeat visits at almost zero cost.',
          'TikTok short-form content (free): Film 15-30 second videos of food preparation, behind-the-scenes kitchen moments, or customer reactions. TikTok\'s algorithm in Vietnam favors local content — even accounts with 0 followers can get 10K+ views on a good video.',
          'Grand opening done right (controlled cost): Instead of one big expensive launch, do a "soft opening week" with different daily promotions. Day 1: 50% off for first 50 customers. Day 3: Free add-on with any order. Day 5: Bring a friend, both eat at 30% off. Spreads the buzz over 7 days instead of 1.',
        ],
      },
      {
        type: 'table',
        heading: 'Marketing Channel Comparison for F&B',
        content: [
          { label: 'Google Maps optimization', range: 'Free', note: 'Best ROI for walk-in traffic. Takes 2-4 weeks to see results' },
          { label: 'Facebook/Instagram page + content', range: '2-5M VND/mo', note: 'Boosted posts reach 5,000-20,000 locals per post' },
          { label: 'TikTok organic content', range: 'Free (time only)', note: 'Highest viral potential but inconsistent. Post 3-5x/week' },
          { label: 'Micro-influencer collaborations', range: '500K-3M VND/post', note: '1 good collab = 50-200 new customers. Choose food-focused accounts' },
          { label: 'GrabFood/ShopeeFood promotions', range: '5-15% of delivery revenue', note: 'Drives volume but watch commission stack (promo + platform fee)' },
          { label: 'Zalo OA loyalty program', range: 'Nearly free', note: 'Best for retention. 40-60% open rate on Zalo messages vs 5-10% on email' },
          { label: 'Flyers / banners in neighborhood', range: '1-3M VND/batch', note: 'Old-school but effective for local awareness within 1km radius' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Marketing Pitfalls to Avoid',
        content: [
          { icon: 'warning', title: 'Deep discounts as a long-term strategy', desc: 'Running 30-50% off permanently trains customers to wait for deals and destroys your margin. Promotions should be temporary and strategic.', severity: 'critical' },
          { icon: 'warning', title: 'Ignoring negative reviews', desc: 'One unanswered 1-star Google review can cost you 30+ potential customers. Always respond professionally within 24 hours — even to unfair reviews.', severity: 'warning' },
          { icon: 'warning', title: 'Spending on marketing before fixing operations', desc: 'If your food or service is inconsistent, marketing just accelerates the spread of bad reviews. Fix quality first, then amplify.', severity: 'warning' },
          { icon: 'warning', title: 'Not tracking which channel brings customers', desc: 'Ask every new customer "How did you find us?" or add tracking codes to different promotions. If you can\'t measure it, you can\'t improve it.', severity: 'tip' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'The best marketing for an F&B business is consistently good food, friendly service, and a clean space. Everything else just amplifies that foundation. Start with the free tactics, measure what works, and gradually invest more in the channels that deliver. Use Validator.vn to see how your marketing budget fits into your overall cost structure and profitability targets.',
      },
    ],
  },
  {
    slug: 'khi-nao-nen-dong-cua-quan',
    title: 'When Should You Close Your F&B Business?',
    excerpt: 'The hardest decision in F&B isn\'t opening — it\'s knowing when to close. Here are the objective signals that it might be time.',
    date: '2026-02-18',
    author: 'Khang Pham',
    tags: ['experience', 'finance'],
    sections: [
      {
        type: 'text',
        content: 'Nobody opens a restaurant planning to close it. But the reality is: over 60% of F&B businesses in Vietnam close within 18 months, and many owners hold on too long — burning through savings, taking on debt, and damaging their health in the process. Knowing when to walk away is not failure; it\'s financial intelligence. This article gives you a clear, data-driven framework for making this difficult decision.',
      },
      {
        type: 'warning-list',
        heading: '6 Warning Signs It May Be Time to Close',
        content: [
          { icon: 'warning', title: 'Negative cash flow for 3+ consecutive months', desc: 'If you\'re spending more than you earn for 3 months straight — even after cutting costs — the trend is unlikely to reverse without a major change (new location, concept pivot, or significant capital injection).', severity: 'critical' },
          { icon: 'warning', title: 'Dipping into personal savings or taking loans to cover operations', desc: 'The moment you start funding business losses with personal money or credit card debt, you\'re no longer running a business — you\'re subsidizing a hobby. Set a hard limit on how much personal capital you\'ll inject.', severity: 'critical' },
          { icon: 'warning', title: 'Revenue declining month-over-month for 4+ months', desc: 'A one-month dip is normal (seasonality, holidays). Four consecutive months of decline — especially after you\'ve tried promotions and menu changes — signals a structural problem that more effort won\'t fix.', severity: 'critical' },
          { icon: 'warning', title: 'Staff turnover exceeding 50% in 3 months', desc: 'When good employees keep leaving, they\'re telling you something. High turnover destroys service quality, increases training costs, and signals deep operational problems.', severity: 'warning' },
          { icon: 'warning', title: 'You\'re no longer passionate or present', desc: 'F&B requires hands-on ownership, especially in the first 2 years. If you\'re dreading going to the shop, avoiding dealing with problems, or have mentally checked out — the business will follow.', severity: 'warning' },
          { icon: 'warning', title: 'The market has fundamentally shifted', desc: 'A new competitor with deep pockets opened next door. The office building that supplied 60% of your lunch customers relocated. Road construction blocked access for 6 months. Some external changes are simply too large to overcome.', severity: 'warning' },
        ] as KBWarningItem[],
      },
      {
        type: 'table',
        heading: 'The "Close or Continue" Checklist',
        content: [
          { label: 'Monthly revenue trend (last 6 months)', range: 'Growing / Flat / Declining', note: 'Declining = major concern. Flat may be fixable. Growing = probably don\'t close' },
          { label: 'Monthly profit (after all costs)', range: 'Positive / Breakeven / Negative', note: 'Negative for 3+ months = serious red flag' },
          { label: 'Cash reserves remaining', range: 'X months of expenses', note: 'Under 2 months = urgent decision needed' },
          { label: 'Personal debt taken for business', range: 'Amount in VND', note: 'Any personal debt = stop and reassess immediately' },
          { label: 'Lease remaining', range: 'X months', note: 'Closing near lease end minimizes penalty. Closing mid-lease is expensive but sometimes necessary' },
          { label: 'Owner mental health / passion', range: 'High / Medium / Low', note: 'Be honest. Burnout leads to poor decisions that make everything worse' },
        ] as KBTableRow[],
      },
      {
        type: 'list',
        heading: 'How to Close Gracefully (Minimizing Losses)',
        content: [
          'Set a hard deadline and financial limit: "If we\'re not cash-flow positive by [date], or if I\'ve invested more than [X VND] of personal money, we close." Having a pre-committed exit point removes emotion from the decision.',
          'Negotiate lease termination early: Talk to your landlord before your money runs out. Many landlords prefer negotiating a partial deposit return over dealing with a tenant who simply disappears. In Vietnam, getting 50-70% of your deposit back is realistic if you negotiate well.',
          'Liquidate equipment strategically: Used F&B equipment sells for 30-50% of purchase price. Post on Cho Tot, Facebook F&B groups, and contact equipment dealers early. The longer you wait, the more desperate you look and the less you\'ll get.',
          'Settle with suppliers professionally: Pay what you owe. Vietnam\'s F&B community is small — if you burn bridges, word travels fast. If you can\'t pay in full, negotiate a payment plan. Most suppliers prefer some payment over none.',
          'Learn and document everything: Write down what worked, what didn\'t, and what you\'d do differently. Many successful F&B owners in Vietnam failed on their first venture but succeeded on their second because they applied lessons learned.',
        ],
      },
      {
        type: 'stat-grid',
        heading: 'The Cost of Closing Too Late',
        content: [
          { icon: 'money', label: 'Average Extra Loss', value: '100-300M VND', desc: 'Amount owners lose by holding on 3-6 months too long' },
          { icon: 'calendar', label: 'Emotional Recovery', value: '6-12 months', desc: 'Time to recover mentally — faster if you close on your terms' },
          { icon: 'growth', label: 'Second Venture Success', value: '2x higher', desc: 'Owners who learn from failure have significantly better odds next time' },
          { icon: 'people', label: 'Industry Norm', value: '60%+ close', desc: 'Closing is extremely common — it\'s not a personal failure, it\'s a business reality' },
        ] as KBStat[],
      },
      {
        type: 'text',
        content: 'Closing a business is never easy, but it\'s sometimes the smartest move you can make. The money you save by closing 3 months earlier could fund your next, better-planned venture. There\'s no shame in it — only wisdom in recognizing when the numbers no longer work. Use Validator.vn to objectively assess your business health — sometimes seeing the data clearly is all you need to make the right call.',
      },
    ],
  },
];

export default BLOG_POSTS;
