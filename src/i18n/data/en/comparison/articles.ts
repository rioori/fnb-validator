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
  {
    id: 'validator_vs_excel',
    slug: 'validator-vs-excel-template-tinh-chi-phi-fnb',
    publishDate: '2026-06-28',
    icon: 'chart',
    title: 'Validator vs Excel template — which tool for F&B startup cost?',
    subtitle: 'Real comparison: build your own Excel or use a dedicated tool — when to use which',
    seoTitle: 'Validator vs Excel Template for F&B Cost: Which Fits You?',
    seoDescription: 'Compare Validator.vn with free Excel templates for cafe/restaurant startup costs. When Excel is enough, when you need a specialized tool. Detailed comparison + checklist.',
    color: 'primary-light',
    category: 'cost',
    highlights: [
      { label: 'Excel template', value: 'Free', note: 'self-build or download' },
      { label: 'Validator.vn', value: 'Free', note: 'no signup needed' },
      { label: 'Setup time', value: 'Excel 2-4h / Validator 5 min', note: '' },
      { label: 'VN benchmark', value: 'Excel: NO / Validator: AUTO', note: '' },
    ],
    sections: [
      {
        type: 'tldr',
        content: [
          'Excel template fits if you have a clean template + know F&B benchmarks (food cost %, labor %, rent %) — otherwise easy to miscalculate',
          'Validator has benchmarks for 8 models × 13 cities built-in — input your numbers, get instant verdict + alerts',
          'Excel: full control, custom formulas — but NO ramp-up, seasonality, sensitivity analysis built-in',
          'Validator: 12-month model with ramp-up + seasonal + 8 sensitivity scenarios — F&B-specific, not generic',
          'Rule of thumb: first-time opener → Validator. 5+ existing shops → custom Excel may suffice',
        ],
      },
      {
        type: 'text',
        content: 'When estimating F&B startup costs, people typically search "free Excel template" — and get overwhelmed by 50+ templates on Google with no idea which is usable. Or build Excel from scratch — spending 3-5 hours, missing cost categories, not knowing the right benchmarks. This article compares the two approaches: Excel template vs dedicated tool like Validator, and when to use which.',
      },
      {
        type: 'table',
        heading: 'Detailed comparison — feature by feature',
        content: [
          { label: 'Cost', range: 'Excel: $0 / Validator: $0', note: 'Both free. Validator needs no signup.' },
          { label: 'Initial setup time', range: 'Excel 2-4h / Validator 5 min', note: 'Excel: download + customize + input. Validator: open page, input numbers.' },
          { label: 'Vietnam benchmarks built-in', range: 'Excel: NO / Validator: 8 models × 13 cities', note: 'Generic Excel only has hard-coded numbers. Validator updates with real data.' },
          { label: 'Ramp-up model', range: 'Excel: typically NO / Validator: built-in 45-100% over 6 months', note: 'Months 1-3 revenue is only 30-60% — many Excels skip this.' },
          { label: 'Seasonality', range: 'Excel: NO / Validator: yes', note: 'Tết +10%, Feb-Mar -25%. Validator has multipliers.' },
          { label: 'Break-even analysis', range: 'Excel: self-build / Validator: automatic', note: 'One click vs manual formula.' },
          { label: 'Sensitivity scenarios', range: 'Excel: NO / Validator: 8 scenarios', note: 'Rent ±10%, food cost ±5%, etc. Excel needs Goal Seek manually.' },
          { label: 'Alerts', range: 'Excel: NO / Validator: auto', note: 'Alerts if prime cost >65%, rent >25%.' },
          { label: 'Mobile-friendly', range: 'Excel: POOR / Validator: GOOD', note: 'Excel on phone = nightmare.' },
          { label: 'Save data', range: 'Excel: save file / Validator: localStorage', note: 'Validator auto-saves drafts, no signup.' },
          { label: 'Custom formulas', range: 'Excel: FULL / Validator: limited', note: 'Validator weakness — Excel more flexible for unique models.' },
          { label: 'Multi-scenario compare', range: 'Excel: copy sheet / Validator: 2 scenarios built-in', note: 'Compare "D1 vs D7" or "cafe vs eatery" — both can do.' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Common Excel template mistakes',
        content: [
          { icon: 'warning', title: 'Using US/China template for Vietnam', desc: 'Food cost VN 28-35%, US 28-32% — close, but labor VN 20-25%, US 30-35% → results off 10-15%. Packaging, insurance, tax structure all different.', severity: 'critical' },
          { icon: 'warning', title: 'Forgetting 3-6 month ramp-up', desc: 'Months 1-3 revenue typically only 30-60% of capacity. If Excel assumes 100% immediately → BEP forecast 2-3 months shorter than reality.', severity: 'critical' },
          { icon: 'warning', title: 'Missing 21.5% employer insurance', desc: 'Basic Excel only computes base salary. BHXH = +21.5% → actual labor cost 21.5% higher than Excel shows.', severity: 'critical' },
          { icon: 'warning', title: 'No sensitivity analysis', desc: 'Excel gives one "BEP 6 months" but not what happens if rent rises 10%. Decision-making lacks robustness.', severity: 'warning' },
          { icon: 'warning', title: 'Hard-coding rent estimates by feel', desc: 'Excel templates lack location-specific rent data. Many people type 15M/mo for D1 HCMC (real: 60-120M) → BEP completely wrong.', severity: 'warning' },
        ] as KBWarningItem[],
      },
      {
        type: 'list',
        heading: 'When to use Excel vs Validator',
        content: [
          'USE EXCEL: you have 5+ existing shops, know your own benchmarks, need custom formulas (e.g., franchise royalty 6%/revenue).',
          'USE VALIDATOR: opening first shop, do not know what food cost % should be, need quick reference benchmark, want warnings if numbers unhealthy.',
          'USE BOTH: Validator for quick viability check (5 min), if OK → Excel for detailed concept-specific modeling.',
          'USE NEITHER: if you have not surveyed location + asked rent + researched specific food cost → both Excel and Validator are garbage-in-garbage-out.',
        ],
      },
      {
        type: 'text',
        content: 'Free Excel templates are everywhere on Google — but 80% are copies of copies, no VN benchmarks, no ramp-up, no sensitivity. Validator was built specifically for Vietnam F&B with real data from 100+ shops. Use Validator for first viability check (5 min, free, no signup), then if model is OK → go deeper with custom Excel or hire a consultant.',
      },
    ],
  },
  {
    id: 'validator_vs_consultant',
    slug: 'validator-vs-thue-tu-van-fnb',
    publishDate: '2026-06-28',
    icon: 'people',
    title: 'Validator vs F&B consultant — is paying $2K-$20K worth it?',
    subtitle: 'Real comparison: use free tool, hire consultant $2K-$20K, or combine both',
    seoTitle: 'Validator vs F&B Consultant Vietnam: When Do You Need $2K-$20K?',
    seoDescription: 'Compare using Validator (free) vs hiring an F&B consultant ($2K-$20K). When tool is enough, when you need expert. Vietnam consultant rate table + checklist.',
    color: 'primary-light',
    category: 'cost',
    highlights: [
      { label: 'Validator', value: 'Free', note: 'use anytime' },
      { label: 'Basic consultant', value: '$800-3.2K', note: '1-2 audit sessions + report' },
      { label: 'Deep consultant', value: '$4K-12K', note: '3-6 months engagement' },
      { label: 'Top-tier chain setup', value: '$12K-40K+', note: 'full chain setup' },
    ],
    sections: [
      {
        type: 'tldr',
        content: [
          'Validator (free) fits pre-decision phase — self-check model viability + understand benchmarks',
          'Consultant $800-3.2K fits when you need outside perspective + deep audit + one-time written report',
          'Consultant $4K-12K fits when opening first shop + need 3-6 month accompaniment (concept, location, hiring, soft launch)',
          'Top-tier $12K+ fits when opening 3+ store chain + need SOP, P&L system, brand framework',
          'Rule: use Validator pre-decision (free, 30 min), hire consultant post-decision (need expertise + accountability)',
        ],
      },
      {
        type: 'text',
        content: 'When opening your first F&B business, two questions always come up: "Can I do it alone?" and "Do I need a consultant?" — Answer depends: budget, experience, scale, tolerable risk. This article analyzes directly — what Validator (free) fits which phase, how a $2K-$20K consultant helps, when to combine both.',
      },
      {
        type: 'table',
        heading: 'Vietnam F&B consultant rate table (reference 2026)',
        content: [
          { label: 'Basic 1-session audit', range: '$400-1,000', note: 'Consultant visits + interviews + delivers 5-10 observations. Fits operating shops needing outside eye.' },
          { label: 'Audit + written report', range: '$800-2,400', note: 'Audit + 20-40 page report. 2-4 weeks delivery. Best for evidence before major decisions.' },
          { label: '3-month accompaniment', range: '$3,200-6,000', note: 'Weekly meetings, decision support, SOP review, training.' },
          { label: '6-month concept-to-launch', range: '$6,000-12,000', note: 'From concept → location scouting → menu engineering → hiring → soft launch.' },
          { label: 'Chain setup (concept + SOP + training)', range: '$12,000-32,000', note: 'Build from scratch: brand, SOP, recipe cards, training manual, P&L system. 6-12 months.' },
          { label: 'Top-tier (CEO-as-service)', range: '$20,000-40,000+', note: 'Former chain CEOs for 1-2 years with equity or retainer. Rare and expensive.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: 'Validator vs Consultant — when to use which',
        content: [
          { label: 'Pre-decision (not yet committed)', range: 'Validator (free)', note: 'Check viability in 30 min. No spending before commit.' },
          { label: 'Location scouting', range: 'Validator + lite consultant', note: 'Validator for rent benchmark, consultant walks 3-5 locations with you.' },
          { label: 'Concept + menu engineering', range: 'Consultant $3,200-8,000', note: 'Needs expert knowing market + food cost + pricing.' },
          { label: 'Operations post-launch', range: 'Validator existing + consultant audit', note: 'Validator diagnoses P&L, consultant audits quarterly.' },
          { label: 'Chain expansion 3+ stores', range: 'Consultant $12,000-32,000', note: 'SOP, P&L system, brand framework — worth it to scale right.' },
          { label: 'Need outside perspective', range: 'Consultant 1-session audit', note: 'Cheap, fast, valuable. Tool cannot "challenge" you like a person.' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Mistakes when deciding on a consultant',
        content: [
          { icon: 'warning', title: 'Hiring because "afraid to do wrong" — no specific issue', desc: 'Consultant is not insurance. Hire when you have a SPECIFIC issue ("menu not selling", "labor cost >35%").', severity: 'critical' },
          { icon: 'warning', title: 'Choosing "famous" over "right fit"', desc: 'Top consultants specialize: fine dining, casual chain, cafe, bar — pick for YOUR segment.', severity: 'critical' },
          { icon: 'warning', title: 'Not checking references / case studies', desc: 'Demand 2-3 past clients to talk directly. If they refuse = red flag.', severity: 'critical' },
          { icon: 'warning', title: 'Paying 100% upfront', desc: 'Industry standard: 30-50% upfront + milestone payments. Full upfront = lose leverage.', severity: 'warning' },
          { icon: 'warning', title: 'No clear deliverables in contract', desc: 'Must specify: 30-page report, SOPs for 5 roles, 10 training sessions, etc. "Advise as needed" = scope creep.', severity: 'warning' },
          { icon: 'warning', title: 'Using FREE Validator then paid consultant adds nothing', desc: 'Some consultants only use similar tools + chart to slides. Ask: what value over free tool?', severity: 'warning' },
        ] as KBWarningItem[],
      },
      {
        type: 'list',
        heading: 'Decision: tool or consultant?',
        content: [
          'Budget <$2K setup: Validator + 1 consultant audit $400-1,000.',
          'Budget $2-8K setup: Validator pre-decision + 1 audit + 1 pre-launch review. ~$1,200-2,000 consulting.',
          'Budget $8-40K setup: Validator + consultant 3-6 month accompaniment. ~$4,000-10,000 consulting.',
          'Budget >$40K setup: Validator + deep consultant chain setup. 20-30% budget consulting.',
          'Operating existing shop: Validator existing mode + consultant quarterly audit. ~$3,200-6,400/year.',
          'Opening 3+ stores: consultant $12K+ mandatory. Validator supports scenario planning per store.',
        ],
      },
      {
        type: 'text',
        content: 'Validator is a tool — does not replace humans. Consultant is human — expensive but offers experience + accountability. Both have unique value. Simple rule: use Validator to screen ideas (free), hire consultant when committed and need accompaniment.',
      },
    ],
  },
  {
    id: 'validator_vs_pos',
    slug: 'validator-vs-pos-cho-nguoi-moi-mo-quan',
    publishDate: '2026-06-28',
    icon: 'calculator',
    title: 'Validator vs POS (KiotViet, Sapo, MISA) — which tool before opening?',
    subtitle: 'POS is OPERATING tool (post-launch), Validator is DECISION tool (pre-launch) — do not confuse',
    seoTitle: 'Validator vs POS (KiotViet, Sapo): Which Tool Before Opening F&B?',
    seoDescription: 'POS (KiotViet, Sapo, MISA) is post-launch operating tool. Validator is pre-launch decision tool. Comparison + usage order.',
    color: 'primary-light',
    category: 'technology',
    highlights: [
      { label: 'Validator', value: 'Before opening', note: 'check model viability' },
      { label: 'POS', value: 'After opening', note: 'manage orders + payment' },
      { label: 'Validator cost', value: 'Free', note: '' },
      { label: 'POS cost', value: '$8-32/month', note: '' },
    ],
    sections: [
      {
        type: 'tldr',
        content: [
          'POS (KiotViet, Sapo, iPOS, CukCuk) only useful AFTER shop opens',
          'Validator answers "Will this be profitable?" — POS answers "How is the shop doing right now?"',
          'Right order: Validator (pre-launch) → decision → setup → choose POS (post-launch) → operate + track + revalidate quarterly with Validator existing mode',
          'POS has no sensitivity analysis, no alerts. Validator predicts + simulates.',
          'Both needed: Validator to DECIDE, POS to OPERATE',
        ],
      },
      {
        type: 'text',
        content: 'Common question when opening new shop: "Should I use KiotViet or Sapo POS?" — wrong question. The first should be: "Is this shop model viable?" — needs Validator (free, 5 min). POS only needed after the shop opens.',
      },
      {
        type: 'table',
        heading: 'Validator vs POS — distinct roles',
        content: [
          { label: 'When to use', range: 'Validator: BEFORE / POS: AFTER', note: 'Confusing = wasted POS subscription for 3-6 months.' },
          { label: 'Question answered', range: 'Validator: profitability / POS: today\'s revenue', note: 'Predict vs Track.' },
          { label: 'Inputs', range: 'Validator: expected / POS: actual transactions', note: 'Simulate vs record.' },
          { label: 'Outputs', range: 'Validator: BEP + payback + verdict / POS: daily revenue, top items, margin', note: 'Forecast vs report.' },
          { label: 'Cost', range: 'Validator: free / POS: $8-32/mo', note: 'POS ongoing, Validator only when needed.' },
          { label: 'Setup time', range: 'Validator: 5 min / POS: 1-3 days + training', note: 'POS complex due to integration.' },
          { label: 'Sensitivity analysis', range: 'Validator: 8 scenarios / POS: NO', note: 'POS does not answer "what if rent rises 10%?".' },
          { label: 'Existing business mode', range: 'Validator: yes / POS: tracking only', note: 'Validator = diagnosis, POS = ongoing operations.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: 'Tool usage order — pre-launch to operations',
        content: [
          { label: 'Week 1-2 (idea)', range: 'Validator (free)', note: 'Test 3-5 models + cities. Eliminate unhealthy ideas.' },
          { label: 'Week 3-4 (decision)', range: 'Validator + optional audit', note: 'If Validator says OK, audit consultant $400-1,000.' },
          { label: 'Month 2-3 (setup)', range: 'Excel + design + legal', note: 'No POS, no Validator. Focus on building shop.' },
          { label: '2 weeks before launch', range: 'Setup POS', note: 'Pick main POS, train staff 2-3 days, test order flow.' },
          { label: 'After launch', range: 'POS daily + Validator existing quarterly', note: 'POS daily, Validator existing mode quarterly for diagnosis.' },
          { label: 'Opening store 2-3', range: 'Validator (forecast) + POS chains', note: 'Validator simulates store 2, POS compares performance.' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Common tool-choosing mistakes',
        content: [
          { icon: 'warning', title: 'Buying POS before validating idea', desc: 'Pay $8-32/mo × 3 months = $24-96 for unused POS. Validate Validator first (5 min, free).', severity: 'critical' },
          { icon: 'warning', title: 'Using POS to "predict" future', desc: 'POS only tracks past. Predict needs Validator scenarios.', severity: 'critical' },
          { icon: 'warning', title: 'Ignoring Validator existing mode after opening', desc: 'POS shows WHAT, Validator shows WHY. Both needed quarterly.', severity: 'critical' },
          { icon: 'warning', title: 'POS without delivery integration', desc: 'Manual sync with GrabFood/ShopeeFood = errors + time. Check before signing.', severity: 'warning' },
          { icon: 'warning', title: 'Skip POS, use Excel + manual', desc: 'Small shop OK. >50 orders = errors + cannot keep up.', severity: 'warning' },
        ] as KBWarningItem[],
      },
      {
        type: 'list',
        heading: 'Optimal workflow — combine Validator + POS',
        content: [
          'Pre-launch: Validator (free) → test 3-5 models → pick healthiest → lease + setup.',
          '2 weeks before launch: pick POS (see [POS systems comparison](https://www.validator.vn/en/comparison/comparison-pos-systems)).',
          'Week 1: POS tracks every order. Validator existing not yet useful.',
          'Month 2-3: POS daily. End month 3, input POS data into Validator existing mode → diagnose health.',
          'Quarterly: revalidate. If unhealthy → identify issue → action.',
          'Opening store 2: Validator forecasts + POS chains compares. Decision-making data-driven.',
        ],
      },
      {
        type: 'text',
        content: 'POS and Validator solve different problems. Use Validator FREE to validate idea first; if OK, invest $8-32/month in POS. Post-launch, use both: POS daily, Validator existing mode quarterly. Optimal workflow for 99% of small-mid Vietnamese F&B shops.',
      },
    ],
  },
];

export default COMPARISON_ARTICLES;
