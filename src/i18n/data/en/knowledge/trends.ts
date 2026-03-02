import type { KBTopic, KBTableRow, KBStat, KBWarningItem } from '@/types';

const TRENDS_ARTICLES: KBTopic[] = [
  {
    id: 'sugar_tax_2026',
    slug: 'vietnam-sugar-tax-2026-fb-impact',
    icon: 'chart',
    publishDate: '2026-03-01',
    title: 'Vietnam Sugar Tax 2026–2028: What F&B Operators Need to Know',
    subtitle: 'New excise law targets sugary drinks — how to prepare your menu and margins',
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
];

export default TRENDS_ARTICLES;
