import type { KBTopic, KBTableRow, KBStat, KBWarningItem, KBFAQItem } from '@/types';

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
      {
        type: 'faq',
        heading: 'Vietnam Sugar Tax — Frequently Asked Questions',
        content: [
          {
            question: 'When does Vietnam start taxing sugary drinks?',
            answer: 'Vietnam\'s Special Consumption Tax (SCT) on sugary drinks >5g sugar/100ml takes effect from January 1, 2027 at 8%, rising to 10% from 2028. The law was passed in 2025, with 2026 as the preparation year (no tax collected yet, but regulations already in force). It applies to bottled carbonated drinks, bottled bubble tea, energy drinks (Sting, Red Bull), and other packaged beverages with sugar >5g/100ml.',
          },
          {
            question: 'What is the sugar tax rate in Vietnam?',
            answer: 'The tax rate is 8% in 2027, rising to 10% in 2028. Applied to the factory price (or import price) of beverages containing more than 5g of sugar per 100ml (per Vietnamese Standard TCVN). This is on top of the standard 10% VAT. Manufacturers will pass the tax through to wholesale prices, so F&B operators should expect ingredient costs to rise 5-10% from 2027.',
          },
          {
            question: 'Which drinks are exempt from Vietnam\'s sugar tax?',
            answer: 'Exemptions include: (1) Fresh milk and dairy products; (2) 100% natural fruit juices (no added sugar); (3) Pure coconut water; (4) Mineral and purified water; (5) Any beverage with less than 5g sugar/100ml. This creates an opportunity for F&B shops to pivot toward healthy drinks — both avoiding the tax and capturing the growing consumer preference for lower-sugar options in Vietnam.',
          },
          {
            question: 'Do Coca-Cola, Pepsi, Sprite get taxed?',
            answer: 'Yes. Coca-Cola (~10.6g/100ml), Pepsi (~11g), Sprite (~9g), Fanta, and Schweppes Tonic all far exceed the 5g/100ml threshold. From 2027 they face 8% SCT (rising to 10% in 2028) on top of the standard 10% VAT. Manufacturers will pass this through, so cafes/restaurants buying these drinks wholesale should expect 8-10% higher prices from 2027.',
          },
          {
            question: 'How does the sugar tax affect bubble tea shops?',
            answer: 'Bubble tea prepared on-premise (not industrially bottled) is NOT directly taxed. However: (1) Industrial syrups, packaged tapioca pearls, and liquid creamers with sugar >5g/100ml WILL be taxed → ingredient costs up 5-8%; (2) Bottled tea products sold alongside are taxed. Expect a typical bubble tea shop to see ingredient costs rise 3-6% from 2027, requiring price adjustments of 1,000-2,000 VND per cup to preserve margins.',
          },
          {
            question: 'What is the sugar threshold that triggers the tax?',
            answer: 'The threshold is >5g of sugar per 100ml (measured per Vietnamese Standard TCVN). Example: a 500ml drink containing more than 25g of sugar is taxed. Most carbonated soft drinks (Coca 10.6g, Pepsi 11g, Sprite 9g), bottled bubble tea (40-60g per 500ml), and energy drinks (8-12g) far exceed this threshold. Low-sugar drinks below 5g/100ml (some flavored water, lightly-sweetened tea) are not taxed.',
          },
          {
            question: 'Who pays Vietnam\'s sugar tax — seller or buyer?',
            answer: 'Legally, the SCT is collected from manufacturers/importers at the factory/import stage. In practice, however, the tax is passed through the supply chain: suppliers raise wholesale prices → F&B operators pay more → end consumers ultimately absorb the higher retail price. So while F&B businesses do not file SCT returns themselves, they bear the tax indirectly through higher ingredient costs. The end consumer is the effective payer.',
          },
          {
            question: 'What should F&B businesses do to prepare before 2027?',
            answer: '5-step checklist for 2026: (1) Audit all beverage ingredients — identify which will be taxed; (2) Recalculate cost-of-goods assuming 8-10% supplier price increases from 2027; (3) Add low-sugar/no-sugar options to menu to reduce dependence on taxed ingredients; (4) Replace industrial syrups with fresh alternatives (fresh fruit, honey, palm sugar); (5) Plan gradual price increases from late 2026 rather than sudden hikes when the tax hits — customers need time to adjust.',
          },
          {
            question: 'Does Vietnam\'s sugar tax apply to drinks made in the cafe?',
            answer: 'No — drinks prepared on-site (bubble tea, coffee, smoothies) are NOT directly subject to SCT. The tax only applies to bottled/canned drinks produced industrially. However, cafes still feel the impact indirectly: industrial ingredients they buy (syrups, bottled tea, liquid creamer with sugar >5g/100ml) will be taxed, raising ingredient costs 5-10%. Plan a menu review and price adjustment strategy for late 2026.',
          },
          {
            question: 'Which Vietnam sugar tax rate applies to energy drinks?',
            answer: 'Energy drinks (Sting, Red Bull, Number 1, Wake-Up 247, etc.) typically contain 8-12g sugar per 100ml and often include caffeine — both criteria for SCT. From 2027 they face 8% SCT, rising to 10% in 2028, on top of standard 10% VAT. F&B operators selling energy drinks should expect cost of goods to rise ~10% from 2027 and factor this into 2027 pricing decisions now.',
          },
          {
            question: 'Is Vietnam the only country with a sugar tax?',
            answer: 'No — Vietnam joins about 50 countries worldwide that have implemented some form of sugar-sweetened beverage (SSB) tax. Notable examples: UK (from 2018, up to 24p/liter), Mexico (10% since 2014), Philippines (6-12 pesos/liter since 2018), Thailand (since 2017, tiered by sugar content), South Africa (2018). The stated goal is to reduce sugar consumption and combat obesity, with tax revenue often earmarked for public health programs.',
          },
          {
            question: 'What are the F&B industry\'s options to reduce sugar tax impact?',
            answer: '4 strategic responses: (1) Reformulate — reduce sugar content in industrial products below 5g/100ml to avoid the tax entirely (many international brands did this in the UK); (2) Pivot menu — shift toward exempt categories (fresh juices, milk-based, coconut water); (3) Absorb the cost — for premium brands with pricing power, keep prices stable and let margins compress slightly; (4) Pass-through — raise prices 3-5% and communicate the reason clearly to customers. Most operators will use a mix depending on category.',
          },
        ] as KBFAQItem[],
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
  {
    id: 'why_fnb_close_essay',
    slug: 'tai-sao-50-phan-tram-quan-fnb-dong-cua',
    publishDate: '2026-06-28',
    icon: 'warning',
    title: 'Why 50,000 F&B Outlets Closed in H1 2025 — 7 Root Causes No One Teaches',
    subtitle: 'Deep analysis from Soya Garden, Chuk Tea, Baemin failures to Phúc Long & Pizza 4P\'s counter-examples — and the "boring framework" to survive',
    seoTitle: 'Why 50% of Vietnam F&B Shops Close in 2 Years: 7 Real Causes + Case Studies',
    seoDescription: 'Deep analysis of 50K+ F&B closures H1 2025: Soya Garden ($4.35M VC, 50→1 store), Chuk Tea KIDO ($13M loss), Baemin (1.4T VND/yr loss). 7 root causes + boring survival framework.',
    color: 'secondary-light',
    category: 'trends',
    highlights: [
      { label: 'Closures H1 2025', value: '50,000+', note: 'up 67% YoY' },
      { label: 'Revenue decline 2024', value: '60%+ businesses', note: '4,000+ surveyed' },
      { label: '#1 cause', value: 'Cash reserves', note: 'insufficient buffer' },
      { label: '5-year survival', value: '~51%', note: 'US benchmark, VN lower' },
    ],
    sections: [
      {
        type: 'tldr',
        content: [
          'H1 2025: 50,000+ F&B outlets closed in Vietnam (up 67% YoY). Yet market revenue grew 9.6% — operator failure, not industry failure',
          '7 root causes: (1) cash reserves <9 months, (2) 40-50 item menus, (3) marketing after launch, (4) key person dependency, (5) chasing short-term trends, (6) "artisan" not "operator" mindset, (7) wrong location',
          'Major failures: Soya Garden ($4.35M VC, 50→1 store), Chuk Tea KIDO (308B VND invested → 35B loss Q3 2022), Baemin (1.4T VND/yr loss, exit 2023)',
          'Counter-examples: Phúc Long (50+ years, gross margin higher than Starbucks), Pizza 4P\'s (15 years, values built into compensation), Highlands Coffee (20+ years, system over hero)',
          'Boring survival framework: cash > decor, menu 15-20 > 40-50, weekly metrics > "feel good", 6-week soft launch > grand opening, 1-city dominance > national year 1',
        ],
      },
      {
        type: 'text',
        content: 'This is the longest article on Validator — 15-20 min read. If you\'re considering opening an F&B business in Vietnam in 2026, these are the 7 real reasons 50% of new shops close within 2 years, with 5 specific case studies (Soya Garden, Chuk Tea, Baemin, Phúc Long, Pizza 4P\'s) and a "boring framework" to avoid becoming the next statistic.',
      },
      {
        type: 'text',
        heading: 'Part 1 · Market landscape — numbers do not lie',
        content: 'In H1 2025, per Vietstock and B-Company data, 50,000+ Vietnam F&B outlets closed — up 67% from H1 2024 (~30,000 closures). Meanwhile market revenue grew 9.6% YoY to 726.5T VND in 2025.',
      },
      {
        type: 'text',
        content: 'This paradox has one explanation: consolidation. Market grows, but at large optimized chains. The 50K+ closures are mostly indie shops under 2 years old. Per Vietnam News, 60%+ F&B businesses reported revenue decline in 2024 — operator failure, not industry failure.',
      },
      {
        type: 'stat-grid',
        heading: 'International survival benchmarks',
        content: [
          { icon: 'chart', label: 'US 5-year', value: '~51%', desc: 'Per Toast + Datassential 2025 — only half survive 5 years.' },
          { icon: 'chart', label: 'US 10-year', value: '~34.6%', desc: 'Only 1/3 reach 10 years. Vietnam has no official rate.' },
          { icon: 'warning', label: 'VN indie estimate', value: '< 50%', desc: 'Based on closure trends, likely lower than US — no chain system support.' },
          { icon: 'wallet', label: 'Core reason', value: 'Thin margins', desc: 'Thin margins + capital trapped in physical assets + customers less loyal than imagined.' },
        ] as KBStat[],
      },
      {
        type: 'text',
        content: 'F&B sounds easy but is brutally hard. 99% of first-time openers underestimate this difficulty.',
      },
      {
        type: 'text',
        heading: 'Part 2 · 5 case studies — failures and counter-examples',
        content: 'To understand the causes, see 5 specific cases: 3 large failures (Soya Garden, Chuk Tea, Baemin) and 2 counter-examples (Phúc Long, Pizza 4P\'s).',
      },
      {
        type: 'table',
        heading: 'Case 1 — Soya Garden: $4.35M VC, 50 stores, collapsed in 2 years (2016-2022)',
        content: [
          { label: 'VC raised', range: '$4.35M USD', note: 'Shark Tank + VC investors. Founder: Hoàng Anh Tuấn.' },
          { label: 'Concept', range: 'Premium soybean chain', note: 'Single category, urban premium positioning.' },
          { label: 'Plan', range: '50+ stores in 2 years', note: 'Race to scale with VC money.' },
          { label: 'Reality 2022', range: '1 store remaining', note: 'Scaled before product-market fit. Did not match Vietnamese taste.' },
          { label: 'Lessons (Vietnam Business Insider)', range: 'PMF before scale', note: 'VC cannot replace PMF. Wait for 3-5 profitable + repeatable stores before expansion.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: 'Case 2 — Chuk Tea & Coffee (KIDO): 308B VND invested, 35B VND loss Q3 2022',
        content: [
          { label: 'Investment', range: '308B VND', note: 'KIDO Group funded 2018-2022.' },
          { label: 'Target', range: '200-300 stores', note: 'Ambition to compete with Highlands, Phúc Long.' },
          { label: 'Reality 2022', range: '50-60 stores', note: 'Reached 1/4 target. 35B loss Q3.' },
          { label: 'Outcome', range: 'Divested 12/2022', note: 'KIDO formally exited chain F&B segment.' },
          { label: 'Lessons', range: 'Capital + brand not enough', note: 'Weak menu engineering, locations picked by availability not demographic, unit economics unproven.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: 'Case 3 — Baemin Vietnam: exit 2023 after 4 years',
        content: [
          { label: 'Market entry', range: '2019', note: 'Korea, invested hundreds of millions USD.' },
          { label: 'Annual loss', range: '~1.4T VND', note: 'CEO publicly admitted "never profitable".' },
          { label: 'Market share', range: 'GrabFood + ShopeeFood ~90%', note: 'Super-apps dominate; standalone Baemin had no ride-hailing cross-subsidy.' },
          { label: 'Exit', range: 'Late 2023', note: 'After 4 years operation.' },
          { label: 'Lessons', range: 'Understand market structure', note: 'When 90% of market belongs to 2 players, the 3rd needs a very clear advantage.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: 'Case 4 (counter) — Phúc Long: 50+ years, margins beating Starbucks',
        content: [
          { label: 'Founded', range: '1968 in Bảo Lộc', note: 'Lâm Bội Minh family. See Expert Perspectives for detailed profile.' },
          { label: 'Flagship 9M 2024 revenue', range: '761B VND', note: 'Per VIR.' },
          { label: 'Gross margin', range: '> global Starbucks', note: 'One of few Vietnamese F&B beating global benchmark.' },
          { label: 'Secret 1', range: 'Unchanging core product', note: 'Vietnamese tea + coffee, 1,000+ farm partnerships.' },
          { label: 'Secret 2', range: 'Flexible channels', note: '35% revenue from online/delivery.' },
          { label: 'Secret 3', range: 'Patient expansion', note: '50 years in HCMC before scaling. Sold to Masan 2022 for $370M.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: 'Case 5 (counter) — Pizza 4P\'s: 15 years, values built into operations',
        content: [
          { label: 'Founded', range: '2011', note: 'Yosuke Masuko (Japanese). See Expert Perspectives for detailed profile.' },
          { label: 'Current 2026', range: '40+ stores, 5 countries', note: 'Expanding to New York 2025.' },
          { label: 'Profit 2023', range: '115B VND (+38% YoY)', note: 'One of the most profitable Vietnamese F&B businesses.' },
          { label: 'Secret 1', range: 'Values in compensation', note: 'Omotenashi service + kaizen wired into pay — not poster slogans.' },
          { label: 'Secret 2', range: 'Self-built supply chain', note: 'Đà Lạt burrata factory 2,000 pieces/day.' },
          { label: 'Secret 3', range: 'Systems beat hero', note: 'Founder is "ops/system builder", not "great cook".' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Part 3 · 7 real root causes — no one teaches',
        content: [
          { icon: 'warning', title: '1. Insufficient cash reserves — killer #1', desc: '82% of restaurant failures due to cash flow (industry standard). Vietnamese startups typically plan 6 months — reality needs 9-12. Reason: ramp-up 3-6 months (revenue only 30-60% capacity) + unexpected costs. Rule: setup capital × 1.5 = required cash buffer. Opening at 500M, need 250M cash reserve.', severity: 'critical' },
          { icon: 'warning', title: '2. Menu 40-50 items → 30-40% inventory waste', desc: 'Founders want to "serve everyone" → 50-item menu. Reality: top 10 items sell 80% of revenue. Other 40 = inventory waste + confused cooks + slow service. Industry warning: 70% restaurants with >40 menu items exceed 35% food cost. Pizza 4P\'s started with 12 items. Phúc Long: 15 core items.', severity: 'critical' },
          { icon: 'warning', title: '3. Marketing starts after launch', desc: 'Most common mistake: spend everything on setup, no marketing budget months 1-2 → slow growth → fast cash burn. Industry rule: marketing should start 4-6 weeks BEFORE launch (soft launch + content + Facebook groups + Zalo word-of-mouth). 7-9pm peak engagement time for F&B social content.', severity: 'critical' },
          { icon: 'warning', title: '4. Key person dependency', desc: 'Great chef quits = quality drops 30-50% in 2 weeks → loyal customers vanish. Great manager quits = operations chaos. Solution: standardize recipe cards + cross-training + clear SOP. As Đào Thế Vinh of Golden Gate said: "A system can produce any product; an artisan produces only what they\'re skilled at."', severity: 'critical' },
          { icon: 'warning', title: '5. Chasing short-term trends', desc: 'F&B trends have 12-18 month lifecycle. Opening takes 6 months setup. By time you open, trend has peaked. 6 months later, trend is dead → "pretty" shop with no repeat customers. Soya Garden is the classic case: caught "healthy soybean" trend 2016, by 2020 trend dead, couldn\'t pivot. Build sustainable concept, not trendy.', severity: 'critical' },
          { icon: 'warning', title: '6. Artisan mindset, not operator mindset', desc: 'Founder wants to be "great cook" more than "great owner". Loves product + decor + Instagram. Doesn\'t love staff scheduling, inventory tracking, weekly P&L review, customer feedback analysis. Result: beautiful product, beautiful shop, chaotic operations, foggy financials. Bakeries are most prone.', severity: 'critical' },
          { icon: 'warning', title: '7. Wrong location — no foot traffic + cost-per-customer math', desc: '"Beautiful" D1 HCMC location 80M/mo → rent ratio 30%+ → impossible to profit. Or "cheap" back-alley 8M/mo but 1/10 foot traffic → cost-per-customer 3x higher than street-front. 50% of F&B failures have location as root cause. See our "F&B Location Mistakes" article.', severity: 'critical' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        heading: 'Part 4 · 2026 cost pressures — why it gets harder',
        content: 'If the above causes already killed 50K+ shops in 2024-2025, 2026 adds 3 more cost pressures.',
      },
      {
        type: 'table',
        heading: '3 new cost pressures in 2026',
        content: [
          { label: 'Minimum wage Zone I', range: 'VND 5.31M/mo (+7.2%)', note: 'Decree 293/2025/NĐ-CP, effective 1/1/2026. Plus 21.5% employer insurance = real labor cost rises ~9% YoY.' },
          { label: 'Sugar tax 2027', range: '10% special consumption tax', note: 'Sugary drinks (≥5g/100ml). Cafe, bubble tea, soft drinks all affected. Phúc Long + Highlands already testing "reduced sugar" menus.' },
          { label: 'Ingredient inflation', range: '+8-15% YoY', note: '35.4% Vietnamese F&B cite ingredient costs as main closure driver 2024 (VietData). Coffee, sugar, milk, oil all rising.' },
        ] as KBTableRow[],
      },
      {
        type: 'text',
        content: 'Shops at 28% labor ratio → 2026 jumps to 30-31% if menu prices don\'t adjust. Meaning: 2024-2025 was hard, 2026 will be harder. Opening in 2026 without rigorous validation = F1 racing without brakes.',
      },
      {
        type: 'warning-list',
        heading: 'Part 5 · The "boring" survival framework — 5 anti-trend choices',
        content: [
          { icon: 'money', title: 'Boring choice 1 — Cash > decor', desc: 'Setup capital never exceeds 70% total budget. Keep 30%+ as working capital for 9-12 months. Pretty decor draws check-in customers months 1-3 but you run out of payroll cash by month 4-6 = closure.', severity: 'tip' },
          { icon: 'menu', title: 'Boring choice 2 — Menu 15-20 items > 40-50 items', desc: 'Pizza 4P\'s started with 12. Phúc Long: 15 core. Top 10 items sell 80% of revenue — focus there. Each extra item = inventory + complexity + slower service. Less = more.', severity: 'tip' },
          { icon: 'chart', title: 'Boring choice 3 — Weekly metrics > "feel good"', desc: 'Every week, review: revenue, food cost %, labor cost %, top 5 items, customer feedback, staff churn. No review time = no fix time. POS tools (KiotViet/Sapo/iPOS) all have these dashboards — just read.', severity: 'tip' },
          { icon: 'people', title: 'Boring choice 4 — 6-week soft launch > grand opening day 1', desc: 'Open "stealth" 4-6 weeks for 50-100 friends + micro-KOLs to test menu, fix bugs, optimize service flow. Grand opening = month 2-3 when you have 30-50 good reviews + Facebook page with content. Vs day 1: first 1-2 star reviews = algorithm reduces visibility = early death.', severity: 'tip' },
          { icon: 'location', title: 'Boring choice 5 — 1-city dominance > national year 1', desc: 'Phúc Long 50 years in HCMC before scaling. Pizza 4P\'s 8 years in Vietnam before India + Japan. Open store 2 only when store 1 profitable 6+ months + manager training-the-trainer ready. Race to scale = race to failure.', severity: 'tip' },
        ] as KBWarningItem[],
      },
      {
        type: 'list',
        heading: 'Part 6 · Action items — 10-step checklist if you still want to open',
        content: [
          'Validate idea with Validator (free, 30 min). If tool says "unhealthy" → recheck assumptions or drop idea.',
          'Survey location 2-3 weeks — count foot traffic 5 days × 3 time windows, no guessing.',
          '9-12 month cash reserve in account before signing lease. Setup capital × 1.5.',
          'Menu 15-20 items for first 6 months. Test with 30-50 friends before launch.',
          'Marketing soft launch 4-6 weeks before grand opening — content + micro-KOL + Facebook groups.',
          'Standardize SOP + recipe cards from day one — cross-train 2 staff for each key role.',
          'Setup POS daily tracking from day 1 (see "POS systems comparison" on Validator).',
          'Weekly metrics review — fixed 1h/week, no skip.',
          'Validator existing mode quarterly — diagnose shop health every 3 months.',
          'Open store 2 only when store 1 profitable 6+ months + manager replacement ready.',
        ],
      },
      {
        type: 'text',
        content: 'Not a "success formula" — F&B has no formula. This is a "failure avoidance formula". Done right, eliminates ~70% normal risk. Remaining 30% is market timing + luck + execution skill — what no one can teach.',
      },
      {
        type: 'text',
        heading: 'Part 7 · Closing — why this article exists',
        content: 'Validator.vn was built to solve one problem: help Vietnam F&B owners avoid becoming a number in the 50K closure statistic. Tool is free, no signup, because impact > monetization.',
      },
      {
        type: 'text',
        content: 'If this article helped, share with one person considering opening a shop — might save them $10-30K + 18 months of life. Comments + feedback to hello@validator.vn — we read every one.',
      },
      {
        type: 'text',
        content: 'Opening an F&B business is still one of the most meaningful journeys — if done right. Don\'t let the 7 causes above kill your good idea. Validate first, build second, scale slow. Boring beats trendy. Discipline beats passion. Systems beat heroes. Phúc Long, Pizza 4P\'s, Highlands proved it — you could be the next one.',
      },
    ],
  },
];

export default TRENDS_ARTICLES;
