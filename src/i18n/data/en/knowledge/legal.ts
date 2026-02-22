import type { KBTopic, KBTableRow, KBStat, KBWarningItem } from '@/types';

const LEGAL_ARTICLES: KBTopic[] = [
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
  {
    id: 'food_safety',
    slug: 'an-toan-thuc-pham',
    icon: 'check',
    title: 'Food Safety & Hygiene',
    subtitle: 'ATTP regulations, certifications, and daily practices',
    color: 'secondary-light',
    category: 'legal',
    highlights: [
      { label: 'ATTP Certificate', value: 'Mandatory', note: 'before opening' },
      { label: 'Health Check-ups', value: 'Every 6 months', note: 'for all food handlers' },
      { label: 'Fine for No ATTP', value: 'VND 15-30M', note: '+ suspension' },
      { label: 'Safe Food Temp', value: '<5°C or >60°C', note: 'danger zone: 5-60°C' },
    ],
    sections: [
      {
        type: 'table',
        heading: 'ATTP Requirements Checklist',
        content: [
          { label: 'Food Safety Certificate (ATTP)', range: 'Before opening', note: 'Apply at district health authority. Requires: business registration, health certificates, facility inspection.' },
          { label: 'Staff Health Certificates', range: 'Every 6 months', note: 'All staff who handle, prepare, or serve food. Blood test + stool test + general exam.' },
          { label: 'Food Safety Knowledge Certificate', range: 'Before opening', note: 'Owner + kitchen manager must complete a certified training course (usually 1-2 days, ~VND 500K).' },
          { label: 'Ingredient Source Documentation', range: 'Ongoing', note: 'Keep invoices and certificates of origin for all ingredients. Inspectors WILL ask for these.' },
          { label: 'Water Quality Test', range: 'Annually', note: 'If using well water or filtered water for cooking/ice. Municipal tap water is generally accepted.' },
          { label: 'Pest Control Records', range: 'Monthly', note: 'Contract with a licensed pest control service. Keep treatment records on file.' },
          { label: 'Kitchen Layout Compliance', range: 'At setup', note: 'One-way flow: receiving → storage → prep → cooking → serving. No cross-contamination paths.' },
        ] as KBTableRow[],
      },
      {
        type: 'stat-grid',
        heading: 'Key Food Safety Numbers',
        content: [
          { icon: 'meat', label: 'Danger Zone', value: '5°C - 60°C', desc: 'Bacteria multiply rapidly in this range. Food must pass through this zone in under 2 hours.' },
          { icon: 'check', label: 'Handwashing Frequency', value: 'Every 30 min', desc: 'Plus: after handling raw meat, after using the restroom, after touching face/hair, before plating.' },
          { icon: 'clock', label: 'Cooked Food Holding', value: 'Max 4 hours', desc: 'At room temperature. After 4 hours, food must be discarded or reheated to >75°C.' },
          { icon: 'warning', label: 'Refrigerator Temp', value: '0-5°C', desc: 'Check twice daily with a thermometer. A fridge "feeling cold" is not enough — verify with data.' },
        ] as KBStat[],
      },
      {
        type: 'list',
        heading: 'Daily Food Safety Practices',
        content: [
          'Temperature checks: Record fridge (0-5°C) and freezer (-18°C or below) temperatures at opening and closing. Post the log sheet on the fridge door.',
          'Handwashing station: Soap, running water, paper towels, and a sign at EVERY handwashing point. Staff must wash hands for at least 20 seconds.',
          'Color-coded cutting boards: Red for raw meat, green for vegetables, white for cooked food, blue for seafood. Never mix — this is the #1 cross-contamination source.',
          'FIFO for all storage: Label every container with item name and date. Use oldest stock first. Check daily for expired items.',
          'Cleaning schedule: Tables and prep surfaces wiped after every use. Floors mopped at minimum twice per shift. Deep clean kitchen weekly.',
          'Separate raw and cooked food storage: Raw meat on bottom shelves, cooked/ready-to-eat on top. Never store raw above cooked — dripping causes contamination.',
          'Pest prevention: Seal all food containers. No open bags in storage. Empty trash bins before they overflow. Check for signs of rodents weekly.',
          'Staff hygiene: Clean uniforms daily, hair nets/caps in kitchen, no jewelry while cooking, no eating/smoking in prep areas. Lead by example.',
        ],
      },
      {
        type: 'table',
        heading: 'Common Violations & Fines',
        content: [
          { label: 'No Food Safety Certificate (ATTP)', range: 'VND 15-30M', note: 'Plus mandatory suspension until certificate is obtained. Repeat offense: VND 30-60M.' },
          { label: 'Staff without health certificates', range: 'VND 1-3M per person', note: 'Cumulative per employee. 5 staff without certificates = up to VND 15M in fines.' },
          { label: 'Expired/no-origin ingredients', range: 'VND 5-10M', note: 'Plus confiscation of all suspect ingredients. Reputational damage if publicized.' },
          { label: 'Unsanitary conditions (cockroaches, mold)', range: 'VND 3-7M', note: 'If a customer posts photos on social media, the business damage far exceeds the fine.' },
          { label: 'No ingredient traceability records', range: 'VND 1-3M', note: 'Keep purchase invoices for at least 6 months. Inspectors check randomly.' },
          { label: 'Using banned additives/chemicals', range: 'VND 30-50M', note: 'Plus potential criminal charges. Common violations: borax in meatballs, industrial coloring in drinks.' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Critical Warnings',
        content: [
          { icon: 'warning', title: 'One food poisoning incident can end your business', desc: 'A single case of food poisoning reported to authorities triggers inspection, potential shutdown, and media coverage. Prevention costs 1% of the cleanup.', severity: 'critical' },
          { icon: 'warning', title: 'Social media amplifies hygiene failures', desc: 'A customer photo of a cockroach or hair in food goes viral in hours. One post on TikTok or Facebook can destroy months of reputation building. Invest in prevention.', severity: 'critical' },
          { icon: 'warning', title: 'Inspections are increasing in frequency', desc: 'Vietnamese food safety authorities conduct more unannounced inspections since 2024, especially during Tet, summer, and after food poisoning incidents in the news.', severity: 'warning' },
          { icon: 'warning', title: 'Delivery food needs extra care', desc: 'Food delivered via GrabFood/ShopeeFood sits at room temperature for 20-40 minutes. Use sealed containers, keep hot food hot, and never pack raw items with cooked food.', severity: 'warning' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Food safety (ATTP) is not just a legal checkbox — it is a competitive advantage. Businesses known for clean kitchens and safe food build trust that translates directly to repeat customers and positive reviews. The cost of compliance (VND 5-10M/year for training, health checks, and supplies) is negligible compared to the cost of one food safety incident (VND 50M+ in fines, lost revenue, and irreparable reputation damage).',
      },
    ],
  },
];

export default LEGAL_ARTICLES;
