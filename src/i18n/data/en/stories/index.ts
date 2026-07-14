import type { OwnerStory } from '@/types';

const STORIES: OwnerStory[] = [
  {
    id: 'ca-phe-quan-3-cost-45',
    slug: 'ca-phe-quan-3-cat-menu-margin-tang-gap-doi',
    ownerName: 'Minh',
    ownerRole: 'Cafe owner',
    city: 'District 3, HCMC',
    model: 'coffee',
    scale: '48sqm · 20 seats · 3 staff',
    monthsOpen: 14,
    timeframe: '4 months',
    headline: 'Cost 45% → 34% after cutting 40% of menu — margin doubled from 8% to 18%',
    summary:
      'A busy District 3 cafe was losing money each month. After using AI Chat and cost benchmarks, Minh cut over half the menu, changed dairy supplier, and repriced 2 signature drinks. Four months later: cost ratio down 11 points, margin doubled.',
    context:
      'Cafe open ~14 months on a small District 3 street, serving mostly office workers and freelancers. Menu of 32 items (coffee, blended, tea, pastries, sandwiches). Monthly revenue ~180M VND — seemingly fine — but only ~15M VND cash left after payroll and expenses.',
    painPoints: [
      'Ingredient cost was 45% of revenue — well above the industry benchmark of 30-35% for cafes.',
      'Menu had 32 items but the top 8 drove 78% of revenue. The remaining 24 items generated 22% but consumed most of the management and inventory effort.',
      'Fresh milk + condensed milk was 32% of ingredient cost — the incumbent supplier was ~15% above market.',
      'Two signature drinks (Bac Xiu, Cold Brew) had never been repriced since opening despite input costs rising 20%.',
    ],
    turningPoint:
      'One evening on Validator\'s AI Chat ("Is 45% cost normal for a District 3 cafe?" — "What revenue do I need to break even at this cost level?"), Minh realised the issue wasn\'t revenue — it was cost ratio eating the entire margin. Benchmarking confirmed: industry standard is 30-35%, this cafe was in the top 15% highest.',
    actions: [
      {
        title: 'Cut 13 slow-moving items (kept 19)',
        desc: 'Removed 5 slow pastries, 3 rare blended drinks, 5 low-order tea options. Ingredient SKUs went from 47 to 28.',
      },
      {
        title: 'Switched dairy supplier',
        desc: 'Moved to a local supplier ~15% cheaper. Negotiated 2-day delivery cycles instead of 3 to reduce fresh milk inventory.',
      },
      {
        title: 'Repriced 2 signature drinks +15%',
        desc: 'Bac Xiu: 35k → 40k. Cold Brew: 45k → 52k. Zero complaints — customers came for quality, not price.',
      },
      {
        title: 'Tracked cost weekly instead of monthly',
        desc: 'Spent 30 minutes each Sunday inputting the previous week into Validator. Caught patterns earlier — adjustments happened mid-month, not after the fact.',
      },
    ],
    metrics: [
      { label: 'Cost ratio (ingredients / revenue)', before: '45%', after: '34%', delta: '−11 pts' },
      { label: 'Menu SKUs', before: '32 items', after: '19 items', delta: '−40%' },
      { label: 'Monthly revenue', before: '180M VND', after: '172M VND', delta: '−4%' },
      { label: 'Monthly net profit', before: '~15M VND', after: '~31M VND', delta: '+107%' },
      { label: 'Net margin', before: '8%', after: '18%', delta: '+10 pts' },
    ],
    lessons: [
      'A slight revenue dip is not the enemy — cost ratio dropping matters far more.',
      'Shorter menu = leaner inventory + faster staff training + faster order flow.',
      'Weekly tracking is completely different from monthly tracking. Weekly = 4 chances to course-correct per month.',
      'Repricing signature items 10-15% rarely loses customers if quality is real.',
    ],
    toolsUsed: [
      { label: 'AI Chat — cost benchmark & scenario questions', href: '/en/ai-chat' },
      { label: 'Calculator — recompute break-even at new cost', href: '/en/fnb' },
      { label: 'Knowledge — Menu Engineering articles', href: '/en/kien-thuc' },
    ],
    disclaimer:
      'Composite story drawn from real owner patterns on Validator\'s AI Chat and calculator. Names and specific numbers anonymised. Insights, decisions and lessons reflect what actually happened.',
    seoTitle: 'District 3 cafe cut 40% of menu, margin from 8% to 18% — Owner Story',
    seoDescription:
      'Minh (District 3 cafe, HCMC) cut cost from 45% to 34% using Validator AI Chat + benchmarks. 4 months, margin doubled. Full case study with numbers.',
  },
  {
    id: 'bakery-da-nang-mon-loi-mon-lo',
    slug: 'bakery-da-nang-phat-hien-mon-chu-luc-dang-lo',
    ownerName: 'Hang',
    ownerRole: 'Bakery owner',
    city: 'Da Nang',
    model: 'bakery',
    scale: '35sqm · 8 seats + take-away · 4 staff',
    monthsOpen: 22,
    timeframe: '3 months',
    headline: 'Found signature item was losing 8k/piece — after repricing, margin gained 12 points',
    summary:
      'A Da Nang bakery\'s best-seller was its signature banh mi — 60 pieces/day, universally loved. Using Validator\'s Wizard "already open" mode to recalculate true per-item cost (ingredients + labour + electricity + depreciation), Hang discovered it was losing 8k VND per piece. 3 months after repricing: margin gained 12 points.',
    context:
      'Bakery open ~2 years, making banh mi, pastries and birthday cakes. Signature banh mi drove 60% of revenue — the "hero" item, drawing customers just for that. Hang was busy running operations and had never done per-item cost accounting — she just checked monthly totals were positive.',
    painPoints: [
      'Monthly revenue ~145M VND but net profit only ~9M VND — 6% margin, abnormally low for bakery (industry: 15-25%).',
      'No idea which items were profitable vs unprofitable. Just "overall positive".',
      'Signature banh mi priced at 25k, took 22 minutes per batch of 3 → labour cost higher than assumed.',
      'Custom birthday cakes had high margin (~55%) but only 12% of revenue — never actively promoted.',
    ],
    turningPoint:
      'Hang tried Validator\'s Wizard "operating mode", entering detailed per-item cost: ingredients, hourly labour, oven electricity, equipment depreciation, waste rate. Result: the signature banh mi was losing 8k VND per piece once all costs were included. The "hero" item was actually dragging total margin down — every extra sale = extra loss.',
    actions: [
      {
        title: 'Raised signature banh mi price 25k → 35k',
        desc: 'Announced 2 weeks ahead: new recipe (added topping), customers accepted because value was visible. Unit sales dropped ~18% but revenue rose.',
      },
      {
        title: 'Featured birthday cakes on Facebook + website homepage',
        desc: 'Highest-margin item, previously only ordered by regulars. After 2 months: birthday cake orders 2.3x higher.',
      },
      {
        title: 'Discontinued 2 negative-margin pastries',
        desc: 'In-house croissants and seasonal fruit tarts — high labour, price ceiling too low. Dropped both, saved 6 hours/week.',
      },
      {
        title: 'Set up weekly cost-per-SKU tracking sheet',
        desc: 'Copied structure from Wizard, updates each Sunday with ingredient prices + hours worked. Catches early signals when flour or egg prices move.',
      },
    ],
    metrics: [
      { label: 'Monthly revenue', before: '145M VND', after: '156M VND', delta: '+8%' },
      { label: 'Monthly net profit', before: '~9M VND', after: '~28M VND', delta: '+211%' },
      { label: 'Net margin', before: '6%', after: '18%', delta: '+12 pts' },
      { label: '% revenue from birthday cakes', before: '12%', after: '24%', delta: '2x' },
      { label: 'Signature banh mi sold/day', before: '60 pieces', after: '49 pieces', delta: '−18%' },
    ],
    lessons: [
      'The "hero" item is not always profitable — you must sum all costs (ingredients + labour + depreciation + electricity) to see the truth.',
      'Repricing +40% with only 18% unit loss = a huge win. Customers buy quality, not cheapness.',
      'Pushing high-margin items is easier than cutting low-margin ones — do both in parallel.',
      'Cost-per-SKU tracking is a 30-min/week job that prevents the "selling lots, no cash" trap.',
    ],
    toolsUsed: [
      { label: 'Wizard — "operating mode" for cost per item', href: '/en/fnb' },
      { label: 'AI Chat — how to reprice without losing customers', href: '/en/ai-chat' },
      { label: 'Knowledge — Menu Engineering + Cost Control', href: '/en/kien-thuc' },
    ],
    disclaimer:
      'Composite story drawn from bakery and F&B owner patterns using Validator\'s Wizard "existing mode" and AI Chat. Names and specific numbers anonymised. Diagnostic content and lessons reflect what real users experienced.',
    seoTitle: 'Da Nang bakery found signature item losing 8k/piece — Owner Story',
    seoDescription:
      'Hang (Da Nang bakery) used Validator\'s Wizard operating mode to find her signature banh mi was losing 8k/piece. After repricing: margin 6% → 18%. Full case study.',
  },
  {
    id: 'tra-sua-hcmc-chi-nhanh-3',
    slug: 'chuoi-tra-sua-hcmc-so-3-kich-ban-chon-mat-bang-payback-8-thang',
    ownerName: 'Vy',
    ownerRole: 'Founder, bubble tea chain (2 locations)',
    city: 'HCMC',
    model: 'bubbletea',
    scale: 'New store: 40sqm · 15 seats · 5 staff',
    monthsOpen: 8,
    timeframe: '8 months (since opening store #3)',
    headline: 'Compared 3 locations with Wizard — chose the cheaper one, payback 8 months instead of 14',
    summary:
      'Vy already ran 2 bubble tea stores and wanted to open a third. She had 3 "nice" locations in mind, rents from 28-55M VND/month. Instead of picking the flashiest by feel, she ran all 3 as parallel scenarios in Validator\'s Wizard. Result: the "middling" location delivered payback nearly twice as fast.',
    context:
      'Two-store bubble tea chain, ~250M VND monthly revenue per store, ~22% margin. Wanted to open store #3 to leverage rising brand and experienced ops team. Investment budget ~600M VND (excluding working capital).',
    painPoints: [
      'Option A: 55M VND/month, main street in Binh Thanh, high foot traffic — but 6-month deposit = 330M VND, half the investment budget.',
      'Option B: 35M VND/month, wide alley in District 7, opposite an office tower — moderate traffic.',
      'Option C: 28M VND/month, inside a new Thu Duc residential complex — dense residents but few walk-in customers.',
      'Team was emotionally leaning toward Option A for its "look" and "brand awareness".',
    ],
    turningPoint:
      'Vy entered all 3 locations into Wizard as separate scenarios, each with different revenue assumptions (A: 320M/month conservative, B: 240M, C: 220M). AI Chat added the stress-test: "if revenue is 30% below plan in the first 6 months, which scenario survives?". Numbers were unambiguous: A break-even at 280M/month (risky), B at 165M (comfortable), C at 145M (very safe).',
    actions: [
      {
        title: 'Chose Option B (District 7, 35M VND)',
        desc: 'Balanced traffic and fixed cost. 3-month deposit (105M VND) — kept 65% of budget for working capital and first 6 months of marketing.',
      },
      {
        title: 'Invested heavily in local marketing for first 3 months',
        desc: 'Money saved from lower rent + deposit → flyers in the office building opposite, Grab/Shopee Food vouchers, brewing workshops for regulars.',
      },
      {
        title: 'Set weekly KPI tracking against Wizard scenario',
        desc: 'Actual numbers entered weekly into Validator, compared to projection. Caught month-3 revenue lag early — added a new topping combo to lift AOV.',
      },
      {
        title: 'Did not open Option A despite team\'s regret',
        desc: 'Hardest decision. But Wizard data showed if revenue hit only 70% of expectation, Option A would burn all working capital in 4 months.',
      },
    ],
    metrics: [
      { label: 'Monthly rent', before: 'A: 55M / B: 35M / C: 28M', after: 'Chose B: 35M', delta: '—' },
      { label: 'Monthly revenue (month 8)', before: 'projection 240M', after: '265M', delta: '+10% vs plan' },
      { label: 'Margin', before: 'projection 20%', after: '23%', delta: '+3 pts' },
      { label: 'Payback period', before: 'plan A: 14 months', after: 'actual B: 8 months', delta: '1.75x faster' },
      { label: 'Working capital after month 3', before: 'A: −50M', after: 'B: +180M', delta: 'safe' },
    ],
    lessons: [
      'The "nicest" location is not the "best for payback". Compute break-even first, decide second.',
      'Scenario comparison beats scenario-alone — that\'s where real trade-offs surface.',
      'Saving 20M VND rent/month = 240M/year — enough for marketing or the next store.',
      'Experienced teams get overconfident. Data + AI stress-testing rebalances gut feel.',
    ],
    toolsUsed: [
      { label: 'Wizard — run 3 scenarios in parallel', href: '/en/fnb' },
      { label: 'AI Chat — stress-test low-revenue scenarios', href: '/en/ai-chat' },
      { label: 'Knowledge — F&B Location Selection article', href: '/en/kien-thuc' },
    ],
    disclaimer:
      'Composite story drawn from F&B chain owner patterns using Validator\'s Wizard scenario comparison. Names and some numbers anonymised. Decision framework, trade-offs and lessons are faithful.',
    seoTitle: 'HCMC bubble tea chain compared 3 locations via Wizard — payback in 8 months, not 14',
    seoDescription:
      'Vy (2-store bubble tea chain) used Wizard scenario comparison on Validator, chose Option B over "nicest" Option A. Payback 1.75x faster. Full case study.',
  },
];

export default STORIES;
