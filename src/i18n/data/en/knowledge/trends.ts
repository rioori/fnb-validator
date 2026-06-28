import type { KBTopic, KBTableRow, KBStat, KBWarningItem } from '@/types';

const TRENDS_ARTICLES: KBTopic[] = [
  {
    id: 'sugar_tax_2026',
    slug: 'vietnam-sugar-tax-2026-fb-impact',
    icon: 'chart',
    publishDate: '2026-03-01',
    title: 'Vietnam Sugar Tax 2027: 8% Excise on Sugary Drinks — F&B Impact & Menu Strategy',
    subtitle: 'New 8% tax (rising to 10% in 2028) hits drinks >5g sugar/100ml. Exact pricing math, menu reformulation playbook, and margin protection for cafes, bubble tea, and restaurants.',
    color: 'primary-light',
    category: 'trends',
    highlights: [
      { label: 'Tax rate from 2027', value: '8%', note: 'Rises to 10% from 2028' },
      { label: 'Sugar threshold', value: '>5g/100ml', note: 'Per Vietnamese Standard' },
      { label: 'Key exemptions', value: 'Milk, pure juice, coconut water', note: 'Under current regulations' },
      { label: 'Vietnam beverage market', value: '$2.1B', note: '2024 market size' },
    ],
    sections: [
      {
        type: 'text',
        content:
          "Vietnam's National Assembly has passed a new Special Consumption Tax (SCT) law effective January 1, 2026, introducing a phased excise tax on sugar-sweetened beverages. The tax rates are set at 8% from 2027 and 10% from 2028. While 2026 is a preparation year with no tax collection yet, F&B operators who sell sweetened drinks — from bubble tea shops to restaurants offering soft drinks — need to understand this now. The tax hits manufacturers and importers first, but the cost will flow downstream to every café and restaurant that buys sweetened ingredients at the wholesale level.",
      },
      {
        type: 'stat-grid',
        heading: 'Key numbers at a glance',
        content: [
          {
            icon: 'chart',
            label: 'Tax rate (2027)',
            value: '8%',
            desc: 'Applied to manufacturing/import price of drinks with >5g sugar per 100ml. Rises to 10% in 2028.',
          },
          {
            icon: 'money',
            label: 'Sugar threshold',
            value: '5g/100ml',
            desc: 'A typical 500ml bubble tea contains 40–60g of sugar — far exceeding the threshold. Even "less sweet" versions often qualify.',
          },
          {
            icon: 'growth',
            label: 'Beverage inventory',
            value: '+23.7%',
            desc: 'Unsold beverage inventory rose 23.7% in late 2024 vs. 2023 — the sector was already under pressure before the new tax.',
          },
          {
            icon: 'users',
            label: 'Sector output decline',
            value: '-9.2%',
            desc: 'Beer and soft drink production fell 9.2% in 2024. The new tax adds further headwinds to a market still recovering.',
          },
        ] as KBStat[],
      },
      {
        type: 'text',
        content:
          'The most common misconception among small F&B operators is: "This tax targets manufacturers, not my shop." That logic is flawed. When manufacturers face higher production costs, they pass them on through higher wholesale prices. If you buy bottled soft drinks, ready-made syrups, or pre-sweetened beverage bases, your input costs will rise — even if you never fill out a tax form yourself. The tax is indirect but real, and it will compress margins for operators who fail to plan.',
      },
      {
        type: 'table',
        heading: 'Which products are taxed vs. exempt?',
        content: [
          {
            label: 'Carbonated soft drinks (Coke, Pepsi, 7-Up)',
            range: 'Taxed',
            note: 'Approx. 10g sugar/100ml — well above threshold',
          },
          {
            label: 'Energy drinks (Red Bull, Sting, Monster)',
            range: 'Taxed',
            note: 'High sugar + caffeine content — clearly taxed',
          },
          {
            label: 'Packaged milk tea (Suntory, V-Fresh)',
            range: 'Taxed',
            note: 'Most commercial brands exceed 10g/100ml',
          },
          {
            label: '100% natural fruit juice (no added sugar)',
            range: 'Exempt',
            note: 'Under current regulations — definition may tighten',
          },
          {
            label: 'Fresh milk and pure dairy products',
            range: 'Exempt',
            note: 'Milk and dairy products explicitly excluded',
          },
          {
            label: 'Pure coconut water (no added sugar)',
            range: 'Exempt',
            note: 'Must be unprocessed or minimally processed',
          },
          {
            label: 'Pre-sweetened tea in industrial packaging',
            range: 'Taxed',
            note: 'If >5g/100ml when served, qualifies for SCT',
          },
          {
            label: 'Commercial syrups (Monin, Torani, local brands)',
            range: 'Verify with supplier',
            note: 'Classification depends on product format — confirm with your supplier',
          },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: 'Estimated cost impact (bubble tea shop, 100 drinks/day)',
        content: [
          {
            label: 'Current monthly syrup/sweetener cost',
            range: 'VND 4–8M',
            note: 'Assuming 50% of orders use commercial sweet syrups',
          },
          {
            label: 'Additional cost at 8% tax (from 2027)',
            range: '+VND 320K–640K/mo',
            note: 'Manufacturer passes tax to wholesale price',
          },
          {
            label: 'Additional cost at 10% tax (from 2028)',
            range: '+VND 400K–800K/mo',
            note: 'Impact grows with higher tax rate',
          },
          {
            label: 'Cumulative annual cost increase',
            range: 'VND 3.8M–9.6M',
            note: 'Not negligible for a small operator',
          },
          {
            label: 'Required price adjustment to maintain margin',
            range: 'VND 1,000–2,000/drink',
            note: 'Or reduce sugar-based ingredients in recipe',
          },
        ] as KBTableRow[],
      },
      {
        type: 'list',
        heading: '5 actions to take in 2026 (before tax kicks in)',
        content: [
          'Audit your ingredient list: Identify every sweetened product you purchase commercially. Ask each supplier whether their products will be subject to SCT from 2027. Do not wait for a price increase notice — ask proactively.',
          'Recalculate unit economics with a 5–10% ingredient cost increase: For each menu item, model the impact of higher input costs on your gross margin. Determine which items are most exposed and where you have pricing flexibility.',
          'Gradually introduce low-sugar and unsweetened options: This hedges both against the tax and the broader consumer trend toward healthier beverages. Customers in Vietnam are increasingly ordering "less sweet" — this is both good policy alignment and good business.',
          'Consider switching from commercial syrups to fresh ingredients: Fresh fruit, natural sweeteners (honey, coconut sugar), and house-made syrups are not subject to the same industrial classification — and they support a "clean label" positioning that commands higher prices.',
          'Plan price adjustments for late 2026, not early 2027: Announce any menu repricing before the tax takes effect. Customers adapt better when price changes are gradual and communicated in advance. A sudden VND 2,000–3,000 increase at the same time as news about "sugar taxes" will generate more negative reaction.',
        ],
      },
      {
        type: 'warning-list',
        heading: 'Key considerations',
        content: [
          {
            icon: 'warning',
            title: 'Tax is on manufacturers — but operators absorb it too',
            desc: "The tax is collected upstream, but wholesale prices will rise. Every operator buying commercial sweetened ingredients will see higher costs. This is not theoretical — it's standard pass-through economics.",
            severity: 'critical',
          },
          {
            icon: 'warning',
            title: 'In-house syrups made fresh on-premises may be exempt',
            desc: 'If you cook your own sugar syrup from raw cane sugar (not industrial packaging), it likely falls outside the SCT classification. This is an advantage for artisan shops over bubble tea chains using factory-made bases.',
            severity: 'tip',
          },
          {
            icon: 'warning',
            title: 'Monitor implementing regulations — details still being finalized',
            desc: "The law is passed but detailed ministerial circulars are still being issued. The exact product list and classification criteria may shift. Follow updates from the Ministry of Finance and Vietnam Chamber of Commerce (VCCI).",
            severity: 'warning',
          },
          {
            icon: 'warning',
            title: 'Strategic opportunity: reposition as a "low-sugar" brand',
            desc: 'The tax creates a market signal. Shops that proactively shift to lower-sugar menus will align with regulatory direction, consumer health trends, and potentially command premium prices for "natural" products.',
            severity: 'tip',
          },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content:
          'The sugar tax is not an existential threat to Vietnam\'s F&B sector, but it will separate operators who plan ahead from those who react too late. With 2026 as your runway, there is time to renegotiate supplier terms, test lower-sugar recipes, and adjust pricing gradually. Use Validator.vn to model your financials with a 5–10% increase in ingredient costs — see how your break-even point shifts and what adjustments will protect your margins in the years ahead.',
      },
    ],
  },
  {
    id: 'cloud_kitchen_2026',
    slug: 'cloud-kitchen-vietnam-2026-guide',
    icon: 'trending',
    publishDate: '2026-05-01',
    title: 'Cloud Kitchens in Vietnam 2026: The Fastest-Growing F&B Segment',
    subtitle: 'Low capital, high growth — but platform fees and digital skills are the real barriers',
    color: 'secondary-light',
    category: 'trends',
    highlights: [
      { label: 'Segment CAGR', value: '18.7%', note: '2026–2031, fastest in Vietnam F&B' },
      { label: 'Startup cost', value: '$30K–50K', note: 'vs. $100K+ for traditional restaurants' },
      { label: 'Delivery market', value: '$2B', note: 'Vietnam 2026, growing 12.9% annually' },
      { label: 'Independent outlets', value: '77.4%', note: 'Most of Vietnam F&B is small operators' },
    ],
    sections: [
      {
        type: 'text',
        content:
          "Vietnam's cloud kitchen segment — delivery-only kitchens with no dine-in space — is projected to grow at 18.73% CAGR from 2026 to 2031, making it the fastest-growing category in the country's $29 billion foodservice market. The model is straightforward: lease a small kitchen in a low-rent area, cook food, and sell exclusively through delivery platforms like GrabFood and ShopeeFood. No storefront, no dining room furniture, no front-of-house staff. With startup costs of $30,000–$50,000 (roughly 60–70% less than a traditional restaurant), cloud kitchens have become the most accessible entry point into Vietnam's F&B industry.",
      },
      {
        type: 'stat-grid',
        heading: 'Key numbers',
        content: [
          {
            icon: 'growth',
            label: 'Cloud kitchen CAGR',
            value: '18.7%',
            desc: 'Fastest-growing F&B segment in Vietnam (2026–2031). Traditional dine-in restaurants grow at 8–10% by comparison.',
          },
          {
            icon: 'money',
            label: 'Startup investment',
            value: '$30K–50K',
            desc: '60–70% less than a traditional restaurant. No storefront lease, no dining furniture, no decoration costs.',
          },
          {
            icon: 'chart',
            label: 'Delivery market size',
            value: '$2 billion',
            desc: 'Vietnam online food delivery market in 2026. Expected to reach $3.5B by 2031, driven by smartphone penetration and urban convenience demand.',
          },
          {
            icon: 'users',
            label: 'Total F&B market',
            value: 'VND 760T',
            desc: '333,600 outlets nationwide. Growth at 9.6% annually, but entering a consolidation phase where operational efficiency matters more than expansion speed.',
          },
        ] as KBStat[],
      },
      {
        type: 'text',
        content:
          "Three structural factors are driving cloud kitchen adoption in Vietnam. First, commercial rent in Ho Chi Minh City and Hanoi has become prohibitive for new operators — street-facing locations cost VND 30–80 million/month ($1,200–$3,200), while a kitchen in a back alley runs VND 5–15 million ($200–$600). Second, online food delivery is growing at 12.9% annually, with GrabFood and ShopeeFood now embedded in daily routines for urban professionals. Third, the post-COVID lesson that delivery can represent 40–60% of a restaurant's revenue has convinced many operators that paying premium rent for walk-in traffic is no longer the only viable model.",
      },
      {
        type: 'table',
        heading: 'Cloud kitchen vs. traditional restaurant',
        content: [
          {
            label: 'Initial investment',
            range: '$30K–50K vs. $100K–200K',
            note: 'Cloud kitchens save 60–70% on startup costs',
          },
          {
            label: 'Monthly rent',
            range: '$200–600 vs. $1,200–3,200',
            note: 'Back-alley/industrial kitchen vs. street-facing location',
          },
          {
            label: 'Minimum staff',
            range: '2–4 vs. 6–12',
            note: 'No waitstaff, cashier, or security needed',
          },
          {
            label: 'Time to breakeven',
            range: '6–12 months vs. 18–36 months',
            note: 'Lower fixed costs = faster payback period',
          },
          {
            label: 'Downside risk',
            range: 'Low vs. Very high',
            note: 'Cloud kitchens are easy to close/pivot; no long-term storefront lease',
          },
          {
            label: 'Scalability',
            range: 'Fast vs. Slow',
            note: 'New kitchen operational in 2–4 weeks, no need to find premium location',
          },
        ] as KBTableRow[],
      },
      {
        type: 'list',
        heading: 'Who should consider a cloud kitchen?',
        content: [
          'First-time F&B entrepreneurs with under $50K budget: Cloud kitchens let you test a concept with minimal financial exposure. If the food sells, scaling is fast and cheap.',
          'Existing restaurant owners expanding via "virtual branches": You already have recipes, suppliers, and processes — just rent an additional kitchen in a new delivery zone without investing in a full second location.',
          'Skilled chefs who want to focus on cooking, not property management: The cloud model eliminates front-of-house complexity (décor, ambiance, table service). You focus on food quality and packaging.',
          'Operators running multiple brands from one kitchen: A single cloud kitchen can operate 2–3 different brands on delivery apps simultaneously (e.g., rice bowls + pho + healthy salads) — maximizing kitchen utilization.',
        ],
      },
      {
        type: 'warning-list',
        heading: 'Critical risks and opportunities',
        content: [
          {
            icon: 'warning',
            title: 'Platform commissions consume 20–30% of revenue',
            desc: 'GrabFood and ShopeeFood charge 20–30% commission per order. On a VND 50,000 ($2) order, you receive only VND 35,000–40,000. Price your menu to absorb platform fees — do not set prices and then discover the commission gap.',
            severity: 'critical',
          },
          {
            icon: 'warning',
            title: 'No storefront means zero walk-in traffic',
            desc: '100% of customers come from apps and online marketing. If you lack digital marketing skills — optimizing app listings, managing reviews, running promotions — order volume will be critically low. Cloud kitchens require digital competence as a core skill.',
            severity: 'critical',
          },
          {
            icon: 'warning',
            title: 'Not all foods survive delivery',
            desc: 'Fried items get soggy, hot soups cool down, salads wilt. Design your menu specifically for delivery: choose dishes that maintain quality after 20–30 minutes of transport. Packaging innovation matters as much as cooking skill.',
            severity: 'warning',
          },
          {
            icon: 'warning',
            title: 'Food safety licensing still required under Decree 46/2026',
            desc: "Vietnam's new food safety regulation (Decree 46/2026), effective April 2026, applies to cloud kitchens. You still need a food safety certificate, business registration, and hygiene compliance — there is no exemption for delivery-only operations.",
            severity: 'warning',
          },
          {
            icon: 'warning',
            title: 'Opportunity: virtual brands multiply revenue per kitchen',
            desc: 'The biggest advantage cloud kitchens have over traditional restaurants is the ability to run multiple brands from one location. Same kitchen, same staff, 2–3 different brand identities on delivery apps — each targeting a different customer segment.',
            severity: 'tip',
          },
        ] as KBWarningItem[],
      },
      {
        type: 'list',
        heading: '5 steps to launch a cloud kitchen under $40K',
        content: [
          'Pick one hero dish category for delivery: Do not launch with 30 menu items. Start with 5–8 dishes around a single concept (chicken rice, beef pho, poke bowls). Every item must hold quality after 30 minutes in a delivery bag.',
          'Lease a kitchen in a high-delivery-density area: Districts 1, 3, Binh Thanh, Tan Binh (HCMC) or Cau Giay, Dong Da, Thanh Xuan (Hanoi). Use GrabFood merchant analytics to identify zones with highest order density.',
          'Complete all licensing before your first sale: Business registration + Food Safety Certificate. Decree 46/2026 introduced a risk-based inspection framework — cloud kitchens are within scope regardless of size.',
          'Optimize your delivery app listing from day one: Professional food photography, clear descriptions, competitive pricing, profitable combo meals. 70% of customers decide based on photos and reviews — invest in photography before marketing.',
          'Track daily metrics, adjust weekly: Cancellation rate, prep time, customer ratings, food cost per dish. Use Validator.vn to model your financials before committing to a kitchen lease — validate the numbers first, then invest.',
        ],
      },
      {
        type: 'text',
        content:
          "Cloud kitchens are not a shortcut to easy profits — but they are the lowest-risk entry point into Vietnam's F&B industry in 2026. With the online delivery market at $2 billion and growing nearly 13% annually, demand-side conditions are strong. The question is whether you can execute: manage platform economics, build a digital-first brand, and deliver food that customers want to reorder. Use Validator.vn to stress-test your cloud kitchen business model — run the numbers on rent, staffing, food costs, and platform fees before signing any lease.",
      },
    ],
  },
  {
    id: 'fnb_industry_benchmark_2026',
    slug: 'so-lieu-nganh-fnb-viet-nam-2026',
    publishDate: '2026-06-28',
    icon: 'chart',
    title: 'Vietnam F&B Industry Benchmark 2026: Reference Data',
    subtitle: 'Market size 726T VND, average revenue, profit margins, failure rates by segment',
    seoTitle: 'Vietnam F&B Industry Data 2026: 726T VND market + segment benchmarks',
    seoDescription: 'Vietnam F&B 2026 benchmark report: 726T VND market, 329K outlets, profit margins by segment, top 3 failure reasons, delivery & consumer behavior data.',
    color: 'secondary-light',
    category: 'strategy',
    highlights: [
      { label: 'Market size', value: '726.5T VND', note: '~$27.3B USD (2025)' },
      { label: 'F&B outlets', value: '329,500', note: '300K-329K (2025)' },
      { label: 'Closures H1 2025', value: '50,000+', note: 'red alert' },
      { label: 'YoY growth', value: '+9.6%', note: '2024→2025' },
    ],
    sections: [
      {
        type: 'tldr',
        content: [
          'Vietnam F&B market 2025: 726.5 trillion VND (~$27.3B), +9.6% YoY — but H1 2025 saw 50,000+ outlet closures',
          'Over 60% of Vietnamese F&B businesses reported revenue decline in 2024 — fierce competition + 25-40% rent hikes',
          'Average profit margins: gross 38.2% (Vietnam), net 2-10% by segment — coffee 5-15%, bakery 8-12%, bubble tea 15%+',
          'Delivery market: $2.1B (2025), +19% YoY, ShopeeFood + GrabFood hold 90% (48% each)',
        ],
      },
      {
        type: 'text',
        content: 'This page consolidates official Vietnam F&B industry benchmark data — market size, segment-by-segment profit margins, consumer behavior. Every number has a source (Decision Lab, Statista, VietData, Vietnam Briefing, Ken Research...). Use as reference when planning, comparing operational efficiency, or citing in reports.',
      },
      {
        type: 'table',
        heading: '1. Market size & growth',
        content: [
          { label: 'Total Vietnam F&B revenue 2025', range: '726.5T VND', note: '~$27.3-30.5B USD. Source: HCMC FOODEX 2024 forecast.' },
          { label: '2024 revenue', range: '688.8T VND', note: '~$27.3B USD. Up 16.6% from 2023. Source: Vietnam.vn.' },
          { label: 'YoY growth 2024→2025', range: '+9.6%', note: 'Slower than 2023→2024 (+16.6%) — market saturation signal. Source: Vietnam.vn.' },
          { label: 'Registered F&B outlets', range: '329,500', note: 'End 2024: 323,010. H1 2025 ~300,000 (down 7.1%). Source: HCMC FOODEX, B-Company.' },
          { label: '% revenue from restaurants', range: '68%+', note: 'Rest: cafes, beverages, bars, fast food. Source: Vietnam Foodexpo.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: '2. Closure rate & failure reasons',
        content: [
          { label: 'H1 2024 closures', range: '~30,000 outlets', note: 'Source: Investor.vn (official F&B survey).' },
          { label: 'H1 2025 closures', range: '~50,000+ outlets', note: 'Up 67% YoY — alarming trend. Source: B-Company, Vietstock.' },
          { label: '5-year survival rate (US benchmark)', range: '~51%', note: 'Vietnam has no official rate; reference US. Source: Toast, Escoffier.' },
          { label: '10-year survival (US)', range: '~34.6%', note: 'Source: Toast.' },
          { label: '% businesses reporting revenue decline 2024', range: '60%+', note: '4,000+ businesses surveyed. Source: Vietnam News.' },
          { label: 'Top 3 failure reasons', range: 'Cost + competition + weak marketing', note: '45% businesses hit by 25-40% rent hikes H1 2024. Weak marketing + "quick open-quick close" model. Source: VIR, Investor.vn.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: '3. Profit margins by segment',
        content: [
          { label: 'Vietnam F&B average', range: 'Gross 38.2% / Net 2-10%', note: 'Official Vietnam data. Low net due to rent + competition. Source: VietData.' },
          { label: 'Coffee shop', range: 'Gross 60-65% / Net 5-15%', note: 'Espresso 65-75% gross, drip 85-90%. Source: Pool Six, Financial Models Lab.' },
          { label: 'Restaurant (casual dining)', range: 'Gross 60-65% / Net 3-5%', note: 'Food cost 28-35%. Source: CLFI, Restaurant 365.' },
          { label: 'Bakery', range: 'Gross 55-70% / Net 8-12%', note: 'Food cost 25-30%. Source: SoccaSH.' },
          { label: 'Bubble tea', range: 'Gross 60-75% / Net 15%+', note: 'Phúc Long Heritage 2024 net profit +4x YoY. Source: Vietnam.vn.' },
          { label: 'Cloud kitchen', range: 'Gross 60-65% / Net 3-8%', note: 'Saves rent but app fees 25-30%. Source: Ken Research.' },
          { label: 'Fast food / QSR', range: 'Gross 55-65% / Net 2-6%', note: 'Volume play, thin margins. Source: Toast.' },
        ] as KBTableRow[],
      },
      {
        type: 'text',
        content: 'Critical note: Vietnam is harsh on costs — 44.8% of Vietnamese F&B businesses report ingredients account for 30%+ of selling price, 6.2% exceed 50% (vs. global benchmark 28-35%). Only 24.8% keep ingredients below 20%. Main reason Vietnam net margins lag global benchmarks.',
      },
      {
        type: 'table',
        heading: '4. Cost structure (% of revenue)',
        content: [
          { label: 'Food cost (COGS)', range: '28-35% (target)', note: 'Vietnam reality: 44.8% at 30%+. Source: NetSuite, VietData.' },
          { label: 'Labor cost', range: '20-30%', note: 'Plus 21.5% employer insurance. Source: Taxfyle, Texas Coffee.' },
          { label: 'Rent', range: '8-12% (target)', note: 'H1 2024 HCMC +25-40% YoY. Prime D1: $150+/m². Source: Vietnam Briefing.' },
          { label: 'Marketing', range: '3-5%', note: 'Many Vietnamese shops under-invest. Source: Toast.' },
          { label: 'Utilities + ops', range: '3-6%', note: 'Cafe + bakery higher.' },
          { label: 'Prime cost (Food + Labor)', range: '50-55%', note: '>60% = red alert. Source: Texas Coffee School.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: '5. Revenue per customer / per m²',
        content: [
          { label: 'Avg lunch ticket', range: 'VND 31-50K', note: '47.7% of consumers (2023). Source: Statista.' },
          { label: 'Avg fast food combo', range: '$5.15 (~VND 125K)', note: 'Source: Insight Asia 2024.' },
          { label: 'Hospitality spend per capita', range: '$288.68/year', note: 'Forecast 2025. Source: Statista.' },
          { label: 'D1 HCMC prime rent', range: '$150+/m²/mo', note: 'Source: Vietnam Briefing.' },
          { label: 'Revenue/m²/mo (cafe)', range: 'VND 2-5M/m²', note: 'From Validator data.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: '6. Delivery & cloud kitchen',
        content: [
          { label: 'Delivery GMV 2025', range: '$2.1B USD', note: '+19% YoY. Source: VIR.com.vn.' },
          { label: 'CAGR 2024-2029', range: '~30%', note: 'Source: IMARC Group.' },
          { label: 'ShopeeFood + GrabFood share', range: '90% (48% each)', note: 'beFood 4%. Source: VnExpress, B-Company.' },
          { label: 'Food app users', range: '~17.8M', note: '2025. Source: B-Company.' },
          { label: 'Delivery commission', range: '20-30%', note: 'New vendors 25-30%+. Source: Vietnam News.' },
          { label: 'Cloud kitchen market', range: '$1.1B (2024)', note: 'CAGR 19% 2024-2029. 52.3% South VN. Source: Ken Research.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: '7. Labor & wages',
        content: [
          { label: 'Vietnam labor force', range: '51.6M', note: '58% under 35. Source: Talentnet.' },
          { label: 'Q1 2025 avg salary', range: 'VND 8.3M (~$321)', note: '+9.5% YoY. Source: Talentnet.' },
          { label: '2026 min wage Zone I', range: 'VND 5.31M/mo', note: '+7.2% from 1/1/2026. Source: Decree 293/2025/NĐ-CP.' },
          { label: 'Employer insurance', range: '21.5% of salary', note: 'BHXH 14% + BHYT 3% + BHTN/accident 1.5% + other 3%. Source: Vietnam Briefing.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: '8. Consumer behavior',
        content: [
          { label: '% eating out 3-4x/week', range: '29% (2023)', note: 'Up from 17.9% (2022). Source: Statista.' },
          { label: '% setting eating-out budget', range: '84%', note: 'Gen Z: 49% strict. Source: Decision Lab.' },
          { label: 'Top eating venues', range: 'Cafe 57%, street 48%, restaurant 43%', note: '2024. Source: Decision Lab.' },
          { label: '% combo in fast food', range: '68% orders / 72% revenue', note: 'Source: Insight Asia.' },
          { label: 'Core demographic', range: 'Male, 15-35, VND 7.5-30M/mo', note: 'Primary customer profile. Source: Decision Lab.' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Insights for F&B founders 2026',
        content: [
          { icon: 'warning', title: 'Market grew 9.6% but outlet count dropped 7%', desc: 'Consolidation. New entrants compete with chains that have optimized operations. Harder than 2-3 years ago.', severity: 'critical' },
          { icon: 'warning', title: 'Vietnam net margin (2-10%) trails global benchmark (5-15%)', desc: 'Due to ingredients + rent being relatively expensive vs. selling price. Optimize both: food cost ≤30%, rent ≤20%.', severity: 'critical' },
          { icon: 'warning', title: 'Delivery 90% in 2 apps', desc: 'Single-app dependency = high risk. Need 2+ channels + self-delivery within 3km if volume justifies.', severity: 'warning' },
          { icon: 'warning', title: 'Minimum wage rising 7.2% annually', desc: 'Labor cost rises steadily. Need menu pricing +5-7%/year or productivity gains.', severity: 'warning' },
          { icon: 'warning', title: 'Cloud kitchen = low-risk entry', desc: 'CAGR 19%, market $1.1B. Low capex (VND 30-80M) vs. 300-700M traditional cafe. Test concept first.', severity: 'tip' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'These benchmarks are reference, not absolute targets. Each shop has unique context. Use these numbers to CHECK viability and set correct expectations. A new shop should expect 5-8% net margin year 1, 10-15% after 2-3 years. Expecting >20% net from day one = unrealistic. Use F&B Validator to model your specific numbers and know break-even time.',
      },
    ],
  },
];

export default TRENDS_ARTICLES;
