import type { KBTopic, KBTableRow, KBStat, KBWarningItem } from '@/types';

const COMPARISON_ARTICLES: KBTopic[] = [
  {
    id: 'pos_systems_comparison',
    slug: 'comparison-pos-systems',
    publishDate: '2026-06-28',
    icon: 'calculator',
    title: 'POS Systems Comparison: KiotViet vs Sapo vs iPOS vs CukCuk',
    subtitle: 'Choose the right POS for your F&B business — cost, features, complexity',
    color: 'primary-light',
    category: 'technology',
    highlights: [
      { label: 'Average cost', value: '200-800K/month' },
      { label: 'Setup time', value: '1-3 days' },
      { label: 'F&B using POS', value: '>85%' },
    ],
    sections: [
      {
        type: 'tldr',
        content: [
          'Go with ready-made POS → 1-3 days setup, no engineering needed; avoid custom-built POS (3-6 months, high risk)',
          'KiotViet: #1 choice for small shops 20-100 orders/day; user-friendly, good support, 200-600K/month',
          'Sapo FnB: strong for delivery & online sales; 250-700K/month; integrates with Sapo if you sell online',
          'iPOS: F&B-focused (table management, QR menu); 300-800K/month; complex UI but deep features',
          'CukCuk/MISA: accounting & financial control power; 250-500K/month; for strict bookkeeping needs',
        ],
      },
      {
        type: 'table',
        heading: 'Complete comparison of 4 popular POS systems',
        content: [
          {
            label: 'KiotViet',
            range: '200-600K/month',
            note: 'User-friendly UI, most popular for small shops. 24/7 support, free tier for 1 location. Table management, order, payment stable. Delivery app integration (Grab, Shopee) excellent. Main users: 20-100 orders/day shops.',
          },
          {
            label: 'Sapo FnB',
            range: '250-700K/month',
            note: 'Strong inventory & reporting. Integrates Sapo platform if you sell online. Delivery app features similar to KiotViet. Modern UI, good for shops managing online sales in parallel.',
          },
          {
            label: 'iPOS',
            range: '300-800K/month',
            note: 'F&B-specialized: table management, bill splitting, QR ordering, print recipes to kitchen. Many features but complex UI. Suited for restaurants and larger shops needing advanced features.',
          },
          {
            label: 'CukCuk (MISA)',
            range: '250-500K/month',
            note: 'By MISA, powerful accounting & financial reporting. Auto sync ledger, taxes, invoices. For owners wanting strict finance control with dedicated accounting staff.',
          },
          {
            label: 'Manual notebook / Excel',
            range: 'Free',
            note: 'OK starting solo with small shop. But above 50 orders/day or with staff, migrate to POS to prevent fraud.',
          },
        ] as KBTableRow[],
      },
      {
        type: 'stat-grid',
        heading: 'Quick pros & cons',
        content: [
          {
            icon: 'trending-up',
            label: 'KiotViet ✓',
            value: 'Easy, popular',
            desc: 'Good support, large community, ready solutions, low cost. Fits 95% of small shops.',
          },
          {
            icon: 'globe',
            label: 'Sapo FnB ✓',
            value: 'Online complete',
            desc: 'If you sell both on Sapo website & shop, integrates well. Clear reporting, familiar UI for Sapo users.',
          },
          {
            icon: 'settings',
            label: 'iPOS ✓',
            value: 'Deep features',
            desc: 'Most detailed F&B management. If you need QR ordering, auto bill split, detailed recipes, iPOS excels.',
          },
          {
            icon: 'balance-scale',
            label: 'CukCuk ✓',
            value: 'Finance tight',
            desc: 'If you need proper books, auto tax reporting, CukCuk wins. Requires accounting knowledge.',
          },
        ] as KBStat[],
      },
      {
        type: 'list',
        heading: 'Must-have features checklist',
        content: [
          'Order & payment management: quick order entry, bill printing, QR payment support (e-wallets). All 4 systems handle this well.',
          'Inventory management: purchase, destock by recipe, low-stock alerts. KiotViet, Sapo, iPOS all good. CukCuk more accounting-focused.',
          'Revenue reporting: see today\'s sales, bestselling items, peak hours. All have this, but CukCuk\'s financial reports most detailed.',
          'Staff management: attendance, payroll, permissions. KiotViet & iPOS strong. Sapo & CukCuk basic.',
          'Delivery app integration: receive Grab/Shopee orders directly in POS. KiotViet & Sapo best. iPOS & CukCuk weaker.',
          'Offline mode: process sales when internet down. All support it.',
          'Customer support: 24/7 when issues arise. KiotViet best, iPOS second, Sapo & CukCuk fair.',
        ],
      },
      {
        type: 'table',
        heading: 'Hidden costs when running POS (beyond monthly fee)',
        content: [
          {
            label: 'Tablet / POS device',
            range: '3-8M',
            note: 'Budget Android tablets from 3M. iPad from 8M. Dedicated POS device 5-15M. Start cheap — upgrade later if needed.',
          },
          {
            label: 'Receipt printer',
            range: '1-3M',
            note: '80mm thermal printer. Choose Bluetooth model for flexibility. Receipt paper ~100K/roll, 5-10 rolls/month depending on volume.',
          },
          {
            label: 'Kitchen printer',
            range: '1-2M',
            note: 'Print orders to kitchen. Only if 2+ prep zones (bar + kitchen). Not needed for single-kitchen shops.',
          },
          {
            label: 'Cash drawer',
            range: '500K-2M',
            note: 'Connects to POS, auto-opens at payment. Not mandatory but helps cash control.',
          },
          {
            label: 'Setup & training',
            range: '0-2M',
            note: 'Many vendors offer free setup. Staff training 2-4 hours. Factor "lost revenue" during 1-2 day transition.',
          },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Common POS selection mistakes',
        content: [
          {
            icon: 'warning',
            title: 'Buy expensive system from day one',
            desc: 'New shop, 20-30 orders/day, doesn\'t need a 15-20M system. Start basic at 200-300K/month, upgrade when truly needed.',
            severity: 'warning',
          },
          {
            icon: 'warning',
            title: 'Poor staff training',
            desc: 'Buy POS but staff still handwrite because it\'s "faster". Result: bad data, useless reports, wasted money. Invest 2-3 days solid training before enforcement.',
            severity: 'warning',
          },
          {
            icon: 'warning',
            title: 'Ignore account lock policies',
            desc: 'Some POS lock accounts if payments are late, losing all data. Read carefully: do you own the data? Can you export to Excel? What happens if you quit?',
            severity: 'critical',
          },
          {
            icon: 'warning',
            title: 'Choose trendy POS, not your actual need',
            desc: 'You need inventory control but pick iPOS because it looks cool. Result: overkill, complex, wasted money. Choose by real requirements.',
            severity: 'warning',
          },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Verdict: If unsure, start with KiotViet — it\'s the Goldilocks for 95% of small F&B shops: user-friendly, reasonable cost, solid support. Try it 1-2 months; if features are missing, migrate to iPOS (deeper inventory) or Sapo (if selling online). Never "build your own" POS — high deployment cost, data loss risk, and you\'re not an IT pro.',
      },
    ],
  },
  {
    id: 'business_structure_comparison',
    slug: 'comparison-sole-proprietor-vs-limited-company',
    publishDate: '2026-06-28',
    icon: 'building',
    title: 'Sole Proprietor vs Limited Company: Which for Your F&B?',
    subtitle: '>80% small F&B runs as sole proprietor — but when should you incorporate?',
    color: 'secondary-light',
    category: 'legal',
    highlights: [
      { label: 'F&B as sole proprietor', value: '>80%' },
      { label: 'Sole proprietor tax', value: '4.5%/revenue' },
      { label: 'Setup time', value: '3 days' },
      { label: 'Tax-free threshold', value: '<200M/year' },
    ],
    sections: [
      {
        type: 'tldr',
        content: [
          '>80% small F&B operates as sole proprietor (not incorporated); 3-day setup, 100K registration, 4.5% tax rate on revenue',
          'Incorporate as Limited Company only if: revenue >500M/year (or >1B from 2026), planning chain 2+, seeking large bank loans, or need tax deductible invoicing',
          'Sole proprietor tax 4.5% is major advantage; company must pay corporate tax 15-20% + VAT 8-10% = >20% total',
          'Sole proprietor tax-free if revenue <200M/year; company must hire accounting 500K-1.3M/month minimum',
        ],
      },
      {
        type: 'table',
        heading: 'Full comparison: Sole Proprietor vs Limited Company',
        content: [
          {
            label: 'Setup process',
            range: 'Sole: 3 days',
            note: 'Company: 3-5 days + invoice setup, digital signature, accounting. Sole is quick & simple: submit to district office, 100K fee, done in 1-2 days.',
          },
          {
            label: 'Initial costs',
            range: 'Sole: ~1.5-3M',
            note: 'Company: ~4-8M + 6-16M/year accounting. Sole: 100K fee + 1-2M stamp + 1M ATTP + health check.',
          },
          {
            label: 'Legal entity status',
            range: 'Sole: No',
            note: 'Company: Yes — easier to get bank loans, sign major contracts. Sole proprietors struggle to borrow >300M.',
          },
          {
            label: 'Personal liability',
            range: 'Sole: Unlimited',
            note: 'Company: Limited (capped at capital). Sole: business debt = your personal debt; creditors can pursue personal assets.',
          },
          {
            label: 'Taxes',
            range: 'Sole: 4.5%/revenue',
            note: 'Company: Corp tax 15-20% + VAT 8-10% = 20-30% total. Sole: 600M revenue → 27M tax/year = 2.25M/month. Company: 100M profit → 20M tax.',
          },
          {
            label: 'Accounting',
            range: 'Sole: Not mandatory',
            note: 'Company: Mandatory — hire 500K-1.3M/month. Sole: you self-file or hire part-time cheap.',
          },
          {
            label: 'Invoices',
            range: 'Sole: Tax office supplies',
            note: 'Company: Self-issued tax invoices, input VAT deductible. Sole: can\'t deduct input, but sell retail (no need to).',
          },
          {
            label: 'Multiple locations',
            range: 'Sole: Allowed, separate registration',
            note: 'Company: Easy, unlimited branches. Sole: each branch 100K fee.',
          },
        ] as KBTableRow[],
      },
      {
        type: 'stat-grid',
        heading: 'Sole proprietor tax breakdown (revenue-based)',
        content: [
          {
            icon: 'money',
            label: 'VAT',
            value: '3%',
            desc: 'On total revenue — dining services category. Fixed regardless of profit.',
          },
          {
            icon: 'wallet',
            label: 'Personal income tax',
            value: '1.5%',
            desc: 'On total revenue — from self-employment in dining.',
          },
          {
            icon: 'chart',
            label: 'Total tax rate',
            value: '4.5%',
            desc: '600M/year revenue → 27M tax = 2.25M/month. Simple, predictable.',
          },
          {
            icon: 'target',
            label: 'Tax-free threshold',
            value: '<200M/year',
            desc: 'From July 2025: sole proprietor F&B under 200M revenue pays zero tax. Huge benefit.',
          },
        ] as KBStat[],
      },
      {
        type: 'table',
        heading: 'Tax calculation example: Coffee shop 800M/year revenue',
        content: [
          {
            label: 'Monthly revenue',
            range: '~67M',
            note: '= 800M ÷ 12 months average',
          },
          {
            label: 'VAT (3%)',
            range: '2M/month',
            note: '= 3% × 67M = 24M/year',
          },
          {
            label: 'Income tax (1.5%)',
            range: '1M/month',
            note: '= 1.5% × 67M = 12M/year',
          },
          {
            label: 'Total tax/month',
            range: '3M/month',
            note: '= 36M/year (4.5% × 800M)',
          },
          {
            label: 'License fee',
            range: '1M/year',
            note: 'If revenue >500M. Scheduled to be removed in 2026.',
          },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'When SHOULD you incorporate as Limited Company?',
        content: [
          {
            icon: 'trending-up',
            title: 'Revenue exceeds 1B/year (from 06/2025)',
            desc: 'From June 2025, revenue ≥1B/year requires e-invoicing + POS integration with tax office. Consider incorporating for easier compliance.',
            severity: 'warning',
          },
          {
            icon: 'target',
            title: 'Planning 2-3+ locations (chain)',
            desc: 'Sole proprietor still possible for multiple locations, but management gets complex + fees accumulate. Limited Company cleaner for chains.',
            severity: 'warning',
          },
          {
            icon: 'wallet',
            title: 'Need large bank loan >500M',
            desc: 'Banks prioritize lending to incorporated entities. Sole proprietors struggle to secure >300M loans.',
            severity: 'warning',
          },
          {
            icon: 'handshake',
            title: 'B2B clients need deductible invoices',
            desc: 'Major chains, corporate caterers need tax invoices for input deduction. Sole proprietor cannot issue tax invoices.',
            severity: 'tip',
          },
          {
            icon: 'clipboard',
            title: 'Significant equipment & material purchases',
            desc: 'Company can deduct VAT on inputs (machinery, ingredients with invoices). Sole proprietor cannot, but as retailer doesn\'t need input deduction anyway.',
            severity: 'tip',
          },
        ] as KBWarningItem[],
      },
      {
        type: 'list',
        heading: 'Actual costs to register as sole proprietor (complete)',
        content: [
          'Business registration fee: 100,000 dong (3 days processing)',
          'Stamp engraving (optional): 200,000-500,000 dong',
          'Food Safety Certificate: 500,000-1,000,000 dong (15-20 days)',
          'Health check (owner + staff): 200,000-400,000 dong/person (required before ATTP approval)',
          'Food Safety training: 500,000 dong/group (usually online, 4-8 hours)',
          'Signboard/storefront (if needed): 500,000-1,500,000 dong',
          'Total: ~1.5-3M dong, completed in 3-4 weeks',
        ],
      },
      {
        type: 'text',
        content: 'Recommendation: 99% of new small F&B should start as sole proprietor. Low cost, quick, tax-advantaged. Only incorporate when you truly need it — revenue scale (>500M), chain expansion, or major financing. When in doubt, ask your local tax office or accounting consultant for free advice.',
      },
    ],
  },
];

export default COMPARISON_ARTICLES;
