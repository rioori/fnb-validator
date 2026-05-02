import type { KBTopic, KBTableRow, KBStat, KBWarningItem } from '@/types';

const TECHNOLOGY_ARTICLES: KBTopic[] = [
  {
    id: 'pos_systems',
    slug: 'chon-he-thong-pos',
    publishDate: '2026-02-15',
    icon: 'calculator',
    title: 'Choosing the Right POS System',
    subtitle: 'Don\'t overspend on POS when you\'re just starting out',
    color: 'primary-light',
    category: 'technology',
    highlights: [
      { label: 'POS Cost', value: 'VND 0 - 5M/month' },
      { label: 'Average ROI', value: '3-6 months' },
      { label: 'Shrinkage Reduction', value: '5-15%' },
    ],
    sections: [
      {
        type: 'table',
        heading: 'Popular POS Systems in Vietnam Compared',
        content: [
          { label: 'KiotViet', range: 'VND 200-600K/month (~$8-24)', note: 'Most popular for small shops. Easy interface, good support. Free tier for 1 location with basic features.' },
          { label: 'Sapo FnB', range: 'VND 250-700K/month (~$10-28)', note: 'Strong inventory management and reporting. Integrates with Sapo e-commerce. Great for shops with heavy delivery volume.' },
          { label: 'iPOS', range: 'VND 300-800K/month (~$12-32)', note: 'F&B-specialized: table management, bill splitting, QR ordering. Feature-rich but steeper learning curve.' },
          { label: 'CukCuk (MISA)', range: 'VND 250-500K/month (~$10-20)', note: 'By MISA, strong accounting integration. Auto-syncs with bookkeeping. Ideal for owners who want tight financial control.' },
          { label: 'Pen & Paper / Excel', range: 'Free', note: 'Perfectly fine for a brand-new small shop. But once you exceed 50 orders/day or hire staff, switch to POS.' },
        ] as KBTableRow[],
      },
      {
        type: 'list',
        heading: 'Must-Have Features When Choosing a POS',
        content: [
          'Order & payment processing: The most basic feature. Make sure it handles fast checkout, receipt printing, and QR code payments (MoMo, ZaloPay, bank transfers).',
          'Ingredient inventory management: Track purchases, auto-deduct stock per dish sold, low-stock alerts. Helps you know exact inventory daily and reduces shrinkage by 5-15%.',
          'Revenue reports (daily/weekly/monthly): Know instantly how much you sold today, which items are bestsellers, and peak hours. No reports = flying blind.',
          'Staff & shift management: Attendance, payroll, role-based permissions (staff can\'t void orders, only managers can apply discounts). Prevents internal fraud.',
          'Delivery app integration: Receive GrabFood and ShopeeFood orders directly in POS — no manual entry. Reduces errors and saves time.',
          'Offline capability: Keep processing orders even when internet goes down. Data syncs automatically when connection restores. Critical in areas with unreliable wifi.',
        ],
      },
      {
        type: 'table',
        heading: 'Real POS Costs Beyond the Monthly Fee',
        content: [
          { label: 'Tablet / POS terminal', range: 'VND 3-8M (~$120-320)', note: 'Cheapest Android tablet from VND 3M. iPad from VND 8M. Dedicated POS hardware VND 5-15M.' },
          { label: 'Receipt printer', range: 'VND 1-3M (~$40-120)', note: '80mm thermal printer. Get one with Bluetooth for flexibility. Thermal paper rolls ~VND 100K each.' },
          { label: 'Kitchen printer', range: 'VND 1-2M (~$40-80)', note: 'Prints orders to kitchen. Only needed with 2+ prep areas (bar + kitchen). Optional for small shops.' },
          { label: 'Cash drawer', range: 'VND 500K-2M (~$20-80)', note: 'Connects to POS, opens automatically at checkout. Not mandatory but helps with cash control.' },
          { label: 'Setup & training', range: 'VND 0-2M (~$0-80)', note: 'Many providers offer free setup. But training staff takes 2-4 hours. Factor in lost revenue during the switchover day.' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Common POS Mistakes to Avoid',
        content: [
          { icon: 'warning', title: 'Buying an expensive system right away', desc: 'A new shop doing 20-30 orders/day doesn\'t need a VND 15-20M setup with barcode scanners and large touchscreens. Start with a basic plan at VND 200-300K/month (~$8-12), upgrade when you actually need it.', severity: 'warning' },
          { icon: 'warning', title: 'Not training staff properly', desc: 'You buy POS but staff still write on paper because it\'s "faster." Result: bad data, useless reports, wasted money. Spend 2-3 days on thorough training before making POS mandatory.', severity: 'warning' },
          { icon: 'warning', title: 'Not checking the lock-out policy', desc: 'Some POS providers lock your account if you\'re late on payment, and you lose all your data. Read the fine print: Do you own your data? Can you export to Excel? What happens if you cancel?', severity: 'critical' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'The golden rule for POS: start with the cheapest (or free) plan, get comfortable for 1-2 months, then upgrade when you genuinely need advanced features. The best POS is the one you and your staff ACTUALLY USE every day — not the one with the most features.',
      },
    ],
  },
  {
    id: 'online_delivery',
    slug: 'dat-hang-truc-tuyen-giao-hang',
    publishDate: '2026-02-15',
    icon: 'phone',
    title: 'Online Ordering & Delivery',
    subtitle: 'Delivery accounts for 30-50% of revenue at many shops',
    color: 'mint-light',
    category: 'technology',
    highlights: [
      { label: 'App fees', value: '20-30%' },
      { label: '% Revenue from delivery', value: '30-50%' },
      { label: 'Self-delivery savings', value: '10-15%' },
    ],
    sections: [
      {
        type: 'table',
        heading: 'Delivery Platforms in Vietnam Compared (2025-2026)',
        content: [
          { label: 'GrabFood', range: '25-30% commission', note: 'Largest platform, most customers. Easy merchant dashboard. GrabKitchen program for cloud kitchens. Payment every 7 days.' },
          { label: 'ShopeeFood', range: '22-27% commission', note: 'Lower fees than Grab. Lots of vouchers to attract customers. But average order value is lower and more deal-hunters.' },
          { label: 'BeFood (Be)', range: '18-25% commission', note: 'Lowest fees. Vietnamese-owned app, growing fast. Fewer orders than the top 2, but less competition = easier to stand out.' },
          { label: 'GoFood (Gojek)', range: '20-25% commission', note: 'Strong in inner-city areas. Steady order volume but lower than Grab/Shopee. Payment every 14 days.' },
          { label: 'Self-delivery (Zalo/Hotline)', range: 'VND 5-10K/order (~$0.20-0.40)', note: 'Hire your own driver at VND 6-8M/month (~$240-320) or pay per order. 3-5km radius. Keep 100% of revenue but need to manage drivers.' },
        ] as KBTableRow[],
      },
      {
        type: 'stat-grid',
        heading: 'How to Actually Profit from Delivery',
        content: [
          { icon: 'money', label: 'Raise prices on apps', value: '+10-15%', desc: 'Most customers accept higher app prices for the convenience. Some apps let you set different prices from dine-in — take advantage of this.' },
          { icon: 'target', label: 'Delivery-only menu', value: '10-15 items', desc: 'Only keep items that travel well (won\'t get soggy or spill), have high margins, and are easy to package. Cut soups, hot pots, and watery dishes.' },
          { icon: 'chart', label: 'Combo deals to increase order value', value: '+40-60%', desc: 'Bundle 2-3 items + a drink. A VND 45K order becomes VND 75K (~$1.80 to $3). Same commission %, but much higher absolute profit per order.' },
          { icon: 'phone', label: 'Build your own ordering channel', value: 'Zalo/Facebook', desc: 'Regulars order via Zalo — you save 25-30% in app fees. Create a "VIP Customers" Zalo group with small perks to build loyalty.' },
        ] as KBStat[],
      },
      {
        type: 'list',
        heading: 'Optimizing Your Menu for Delivery — Sell More, Lose Less',
        content: [
          'Pick items that survive 30 minutes: Food should still taste good after 30 minutes of transport. Rice dishes, dry noodles, banh mi, spring rolls = great. Pho, hot pot, crispy fried items = problematic (they get soggy or cold).',
          'Packaging is your delivery storefront: Customers can\'t see your shop — they only see the box. Invest in quality containers (leak-proof, heat-retaining) with branded stickers. An extra VND 1-2K/order (~$0.04-0.08) but boosts experience and good reviews.',
          'Great photos = more orders: Photograph your dishes properly (or use a phone with natural lighting). Shops with professional photos sell 30-50% more than those without on delivery apps.',
          'Write detailed item descriptions: "Crispy chicken rice + seaweed soup + stir-fried veggies + steamed rice" beats "Chicken rice." Delivery customers can\'t ask questions — they must understand the dish from the description alone.',
          'Monitor ratings and respond to reviews: A rating below 4.5 stars means the app reduces your visibility. Reply to all reviews (good and bad) within 24 hours. One unanswered negative review can cost you 5-10 potential customers.',
        ],
      },
      {
        type: 'warning-list',
        heading: 'Delivery Traps — Avoid These or Lose Money',
        content: [
          { icon: 'warning', title: 'Selling at dine-in prices on apps = guaranteed loss', desc: 'App fees 25-30% + packaging 5-8% = losing 30-38% of revenue. You must raise app prices by 10-15% or create a separate menu with optimized portions.', severity: 'critical' },
          { icon: 'warning', title: 'Running promotions without doing the math', desc: '30% discount + free shipping + 27% app commission. A VND 50K item sells for VND 35K (~$1.40), app takes VND 9.5K, ingredients VND 18K, packaging VND 5K = only VND 2.5K left (5%). The more you sell, the more you lose.', severity: 'critical' },
          { icon: 'warning', title: 'Depending 100% on one app', desc: 'If the app changes its algorithm, raises fees, or has a technical outage, you lose 50-70% of orders overnight. Always have at least 2 channels: 1 delivery app + 1 owned channel (Zalo, Facebook, website).', severity: 'warning' },
          { icon: 'warning', title: 'Delivery overloading your dine-in quality', desc: 'During peak hours, the kitchen gets overwhelmed with delivery orders, making dine-in customers wait too long. Solution: cap delivery orders during rush hours, or dedicate a separate station/person for delivery.', severity: 'warning' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Delivery is a powerful revenue channel — but only if you get the economics right. Target: delivery at 30-40% of total revenue (not over 50% to reduce app dependency), with delivery margins of at least 10% after all fees. If you\'re below that, revisit your pricing or cut low-margin items.',
      },
    ],
  },
  {
    id: 'ai_in_fnb',
    slug: 'ung-dung-ai-trong-fnb',
    publishDate: '2026-02-15',
    icon: 'rocket',
    title: 'AI & Technology in F&B',
    subtitle: 'You don\'t need to understand AI — just know how to use it',
    color: 'secondary-light',
    category: 'technology',
    highlights: [
      { label: 'Time saved', value: '5-10 hrs/week' },
      { label: 'Cost reduction', value: '10-20%' },
      { label: 'Efficiency gain', value: '2-3x' },
    ],
    sections: [
      {
        type: 'stat-grid',
        heading: 'Practical AI Tools for Small F&B Shops — Use Today, For Free',
        content: [
          { icon: 'rocket', label: 'ChatGPT / Gemini', value: 'Free', desc: 'Write menu descriptions, respond to customer reviews, brainstorm promotions, calculate food cost, draft Facebook posts. Saves 3-5 hours/week on content creation.' },
          { icon: 'globe', label: 'Canva AI', value: 'Free - VND 120K/month (~$5)', desc: 'Design posters, menus, Instagram stories, promo banners. No Photoshop skills needed. AI suggests layouts and removes food photo backgrounds.' },
          { icon: 'phone', label: 'Meta Business Suite', value: 'Free', desc: 'Manage Facebook + Instagram in one place. Schedule posts, view analytics, set up auto-replies to messages. Saves 2-3 hours/week on marketing.' },
          { icon: 'calculator', label: 'Google Sheets + AI', value: 'Free', desc: 'Track revenue, expenses, and inventory. Use pre-built templates or ask ChatGPT to write formulas for you. Completely replaces paper notebooks.' },
        ] as KBStat[],
      },
      {
        type: 'table',
        heading: 'Technology Investments by Growth Stage',
        content: [
          { label: 'Just starting (months 1-6)', range: 'VND 0 - 500K/month (~$0-20)', note: 'Basic POS (free tier), QR payments, Facebook page, free Zalo OA. Nothing fancy needed — focus on your product and customers.' },
          { label: 'Stabilizing (months 6-18)', range: 'VND 500K - 2M/month (~$20-80)', note: 'Upgraded POS (inventory, reports), sign up for delivery apps, basic Facebook ads (VND 100-300K/day), Canva for visuals.' },
          { label: 'Expanding (after 18 months)', range: 'VND 2 - 5M/month (~$80-200)', note: 'Multi-branch POS, HR management software, loyalty app (points system), AI-powered inventory cameras, auto-reply chatbot.' },
          { label: 'Chain (3+ locations)', range: 'VND 5 - 15M/month (~$200-600)', note: 'ERP system, centralized data hub, branded ordering app, kitchen display system (KDS), AI demand forecasting.' },
        ] as KBTableRow[],
      },
      {
        type: 'list',
        heading: '5 Things AI Can Do for Your F&B Business Right Now',
        content: [
          'Write compelling menu descriptions: Paste this prompt into ChatGPT: "Write a 50-word description for Bun Bo Hue, casual tone, for a casual eatery menu." Get 5-10 options in 2 minutes instead of spending an hour thinking.',
          'Respond to Google Maps reviews: Copy a negative review, paste into ChatGPT: "Write a polite, professional reply apologizing and promising improvement." Fast responses boost credibility and Google prioritizes active businesses.',
          'Calculate food cost automatically: Paste your recipe + ingredient prices into ChatGPT or Google Sheets. It calculates food cost %, suggests selling prices, and flags items over threshold.',
          'Plan a month of social media posts: Use ChatGPT to generate 30 post ideas for one month (new dishes, behind-the-scenes kitchen shots, customer reviews, promotions). Schedule them on Meta Business Suite to auto-publish daily.',
          'Forecast ingredient purchases: Record daily sales for 2-4 weeks. Paste the data into ChatGPT: "Forecast next week\'s sales and suggest ingredient quantities to order." Reduces ingredient waste by 10-20% by ordering the right amounts.',
        ],
      },
      {
        type: 'warning-list',
        heading: 'Watch Out — Don\'t Get Addicted to Tech',
        content: [
          { icon: 'warning', title: 'Investing in tech before you have customers', desc: 'A shop with fewer than 30 orders/day buying a VND 10-20M system (~$400-800). Technology doesn\'t create customers — great food and marketing do. Buy tech when you NEED it, not when you WANT it.', severity: 'critical' },
          { icon: 'warning', title: 'Too many tools, none fully used', desc: 'Signing up for 5-6 software subscriptions, using only 20% of each, spending VND 2-3M/month (~$80-120). Stick to 2-3 core tools max: POS + accounting + marketing. Add more only when truly needed.', severity: 'warning' },
          { icon: 'warning', title: 'Trusting AI blindly without verification', desc: 'ChatGPT can be wrong about ingredient prices, regulations, or market data. Always verify important information. Use AI as your assistant, not your boss.', severity: 'warning' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'The best technology is the one you ACTUALLY USE every day and that saves you time or money. Don\'t chase trends — a shop with one simple POS + one Google Sheet for revenue tracking + ChatGPT for marketing support is already running more efficiently than 80% of F&B businesses out there.',
      },
    ],
  },
  {
    id: 'accounting_software',
    slug: 'phan-mem-quan-ly-tai-chinh',
    publishDate: '2026-02-15',
    icon: 'laptop',
    title: 'Financial Management Software for F&B',
    subtitle: 'Know where your money goes every day — don\'t wait until month-end',
    color: 'mint-light',
    category: 'technology',
    highlights: [
      { label: 'Shops with no bookkeeping', value: '60%+' },
      { label: 'Ingredient waste', value: '5-10%' },
      { label: 'Inventory time saved', value: '70% less' },
    ],
    sections: [
      {
        type: 'text',
        content: 'The harsh reality: over 60% of small F&B businesses in Vietnam have no clear financial tracking system. Owners know if the month was "okay" or "tight" but can\'t tell you exactly how much they made or lost, where the cash went, or how much inventory they have. Result: money leaks they never notice — until the account runs dry.',
      },
      {
        type: 'list',
        heading: 'Why So Many Owners Skip Financial Tracking',
        content: [
          '"My shop is too small for bookkeeping": Wrong. The smaller the shop, the more every dong matters. Being off by VND 500K/day (~$20) = VND 15M/month (~$600) = nearly one employee\'s salary.',
          'Don\'t know where to start: Too many numbers, nobody taught them. In reality, you only need to track 3 things: money in (revenue), money out (expenses), and what\'s left (profit or loss).',
          'Too busy to keep records: Cooking, serving, handling payments all at once — no time for bookkeeping. Solution: just 10 minutes at the end of each day, or let POS do the tracking for you.',
          'An analogy: not tracking finances is like driving at night with the headlights off. You might get somewhere for a while, but sooner or later you\'ll crash into something.',
        ],
      },
      {
        type: 'table',
        heading: 'Financial Management Tools for F&B Compared',
        content: [
          { label: 'Pen & paper + calculator', range: 'Free', note: 'Basic record-keeping. Fine for the first 1-2 weeks after opening. Downsides: easy to forget, hard to search, no automatic reports.' },
          { label: 'Google Sheets / Excel', range: 'Free', note: 'Build revenue, expense, and inventory trackers. Use templates (ask ChatGPT to create one). Good for shops doing 20-50 orders/day.' },
          { label: 'KiotViet', range: 'VND 200-600K/month (~$8-24)', note: 'POS combined with financial management. Auto-calculates revenue, profit, inventory. Visual reports. Suited for 50+ orders/day.' },
          { label: 'iPOS', range: 'VND 300-800K/month (~$12-32)', note: 'F&B strength: per-item food cost, recipe management, ingredient reports. Ideal for restaurants needing tight ingredient control.' },
          { label: 'MISA CukCuk', range: 'VND 250-500K/month (~$10-20)', note: 'Strongest accounting features: auto tax calculation, invoice generation, tax reporting. For shops wanting proper books with an accountant.' },
          { label: 'So Ban Hang', range: 'Free - VND 200K/month (~$0-8)', note: 'Mobile app, extremely simple. Just record sales and expenses, no complex setup. Perfect for very small shops with 1-2 staff.' },
        ] as KBTableRow[],
      },
      {
        type: 'stat-grid',
        heading: 'What to Track — and How Often',
        content: [
          { icon: 'money', label: 'Daily (5 minutes)', value: 'Revenue + cash on hand', desc: 'End of day: record total revenue, count cash against POS, note any expenses (ingredient purchases, repairs). Takes just 5 minutes.' },
          { icon: 'chart', label: 'Weekly (15 minutes)', value: 'Profit/loss + food cost', desc: 'Every Monday: total up the week\'s revenue and expenses, calculate profit/loss. Compare actual food cost vs. theoretical. Catch problems early.' },
          { icon: 'calculator', label: 'Monthly (1 hour)', value: 'P&L + inventory + cash flow', desc: 'Full profit & loss statement. Physical inventory count (actual vs. books). Cash flow analysis: how much cash is left vs. last month.' },
          { icon: 'target', label: 'Quarterly (2 hours)', value: 'Full review + planning', desc: 'Compare the past 3 months: revenue trends, which costs are rising, which items sell well or poorly. Set next quarter\'s targets and adjust strategy.' },
        ] as KBStat[],
      },
      {
        type: 'warning-list',
        heading: 'Most Common Financial Mistakes',
        content: [
          { icon: 'warning', title: 'Mixing personal and business money', desc: 'Using sales revenue for personal rent or groceries. By month-end you can\'t tell if the business is profitable. You MUST have a separate account for the business — even a regular bank account works.', severity: 'critical' },
          { icon: 'warning', title: 'Not paying yourself a salary', desc: 'The owner does everything but "doesn\'t count a salary." Result: you think you\'re making VND 10M/month (~$400) profit, but subtract a VND 8M (~$320) owner\'s salary and you\'re actually losing VND 2M. Always account for your own labor as if you were an employee.', severity: 'critical' },
          { icon: 'warning', title: 'Watching revenue but ignoring profit', desc: 'VND 300M/month (~$12,000) in revenue sounds impressive, but if expenses are VND 290M then profit is just VND 10M (3%). Growing revenue without controlling costs = the more you sell, the more you lose.', severity: 'warning' },
          { icon: 'warning', title: 'Not tracking ingredient shrinkage', desc: 'Ingredients lost to spoilage, spills, excess, and theft can be 5-10%. A shop doing VND 200M/month (~$8,000) losing 5% = VND 10M/month = VND 120M/year (~$4,800). That\'s enough to hire one more employee.', severity: 'warning' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Start simple: one notebook or one Google Sheet, recording 3 numbers every day — revenue, expenses, and cash on hand. Just 5 minutes/day, but already more effective than the 90% of shops that track nothing. Once you\'re comfortable, upgrade to a POS with built-in reporting. The goal: always know "did my shop make or lose money today?" — never wait until month-end to find out.',
      },
    ],
  },
  {
    id: 'digital_marketing',
    slug: 'digital-marketing-small-fnb',
    publishDate: '2026-05-02',
    icon: 'globe',
    title: 'Digital Marketing for Small F&B Businesses',
    subtitle: '70% of customers find restaurants through Google Maps and social media',
    color: 'secondary-light',
    category: 'technology',
    highlights: [
      { label: 'Customers finding via online', value: '70%+', note: 'Google Maps, TikTok, Facebook' },
      { label: 'Marketing budget', value: 'VND 3-10M/month', note: 'for small shops (~$120-400)' },
      { label: 'Order increase', value: '30-50%', note: 'after 3 months of consistency' },
      { label: 'Starting cost', value: '$0', note: 'many channels are free' },
    ],
    sections: [
      {
        type: 'text',
        content: 'In 2026, an F&B business without an online presence is virtually invisible to most customers. Research shows over 70% of consumers search for restaurants on Google Maps, TikTok, or Facebook before visiting. The good news: you don\'t need a big budget — many channels are completely free, requiring just 30-60 minutes of consistent daily effort.',
      },
      {
        type: 'stat-grid',
        heading: 'Vietnam F&B Consumer Behavior 2026 — Know Your Customer',
        content: [
          { icon: 'users', label: 'Visit F&B 3-4 times/week', value: '32.8%', desc: 'Vietnamese F&B consumers visit frequently but spend modestly each time. Focus on retention — bringing back existing customers costs 5x less than acquiring new ones.' },
          { icon: 'money', label: 'Spend under VND 35K/visit', value: '52.3%', desc: 'The "Lipstick Effect" — customers are budget-conscious but still crave experiences. Value combos and affordable signature items win over deep discounting.' },
          { icon: 'trending', label: 'Health-conscious priority', value: '29.6%', desc: 'Nearly 1 in 3 customers prioritize transparent sourcing, clean labels, and healthier options. Highlighting these in your content marketing builds trust and differentiation.' },
          { icon: 'phone', label: 'Read reviews before visiting', value: '85%+', desc: 'Google Maps ratings, Facebook reviews, TikTok food videos — customers research thoroughly. One unanswered negative review can cost you 5-10 potential visitors.' },
        ] as KBStat[],
      },
      {
        type: 'table',
        heading: 'Online Marketing Channels for F&B Compared',
        content: [
          { label: 'Google Maps (Google Business)', range: 'Free', note: 'THE MOST IMPORTANT channel. When customers search "coffee shop near me," you appear. Requires: quality photos, hours, phone number, review responses. 100% free.' },
          { label: 'Facebook Page + Reels', range: '$0 - $120/month', note: 'Post 3-5 times/week. Reels (short video) get 3-5x more reach than static images. Run ads from $2-4/day targeting a 3-5km radius around your shop.' },
          { label: 'TikTok', range: 'Free', note: 'Behind-the-scenes kitchen videos, food reviews, "a day at the shop" content goes viral. No need for polished production — authentic, fun, story-driven works best. Excellent organic reach.' },
          { label: 'Zalo Official Account', range: 'Free - $20/month', note: 'Best channel for retaining existing customers in Vietnam. Send promotions and new menu updates directly. 90% of Vietnamese use Zalo daily — 60-80% open rate, 4x higher than email.' },
          { label: 'KOL / Food Reviewers', range: '$20 - $200/post', note: 'Invite food bloggers or TikTokers to your shop. Micro-KOLs (5K-50K followers) are more effective for small shops — lower cost, higher engagement, local audience.' },
          { label: 'Google Ads', range: '$80 - $400/month', note: 'Ads triggered when people search "pho restaurant District 1" or "best coffee Thu Duc." You only pay per click. Effective but requires setup knowledge or hiring an agency.' },
        ] as KBTableRow[],
      },
      {
        type: 'list',
        heading: 'Google Maps — The Most Powerful Free Channel Most Shops Ignore',
        content: [
          'Register Google Business Profile today (free): Go to business.google.com → enter shop name, address, phone number, opening hours, business type (restaurant/cafe/eatery). Google sends a verification code via mail or phone.',
          'Upload at least 10 quality photos: 3 exterior shots (help customers find you), 5 photos of your bestselling dishes, 2 interior ambiance shots. Phone photos with natural lighting work perfectly — no professional photographer needed.',
          'Respond to 100% of reviews — including negative ones: 5-star review → "Thank you! See you again soon." Negative review → sincere apology, propose a solution, invite them back. NEVER argue, NEVER delete reviews.',
          'Post Google Updates 2-3 times/week: Few people know Google Maps has a posting feature. Share: new dishes, promotions, events. Helps your shop rank higher in search results.',
          'Encourage customers to leave reviews: After good service, gently ask: "Would you mind leaving us a review on Google Maps?" Shops above 4.5 stars with 50+ reviews get automatically boosted to the top of search results.',
        ],
      },
      {
        type: 'list',
        heading: 'Weekly Content Calendar — What to Post Each Day',
        content: [
          'Monday — "Dish of the Week": Feature one special or new item. Photo/short video + price + why they should try it. Format: 15-30 second Reels or image carousel.',
          'Tuesday/Wednesday — "Behind the Scenes": Video of morning kitchen prep, drink-making, fresh ingredient delivery. Customers love seeing the real process — builds trust in hygiene and quality.',
          'Thursday — "Customer Spotlight": Repost positive reviews, customer check-in photos (with permission), or video testimonials. Social proof is more powerful than any paid ad.',
          'Friday — "Weekend Special": Exclusive weekend-only deal. Create urgency: "Only 50 servings," "While supplies last." Share in local Zalo community groups for extra reach.',
          'Weekend — "Free-form Stories/Reels": Lighthearted content: happy staff, busy house, casual behind-the-scenes. No need for polish — authentic and natural content builds stronger connections.',
          'Pro tip: Shoot landscape video for YouTube, portrait for TikTok/Reels/Stories. One 30-minute filming session can produce 5-7 clips for the whole week.',
        ],
      },
      {
        type: 'table',
        heading: 'Marketing Budget by Shop Size',
        content: [
          { label: 'Newly opened (months 1-3)', range: '$0 - $80/month', note: 'Focus on free channels: Google Maps, organic Facebook, TikTok. Invite 2-3 micro-KOLs for free tastings in exchange for reviews. No paid ads needed yet.' },
          { label: 'Stabilizing (months 4-12)', range: '$120 - $200/month', note: 'Start Facebook Ads at $4-6/day. Target 3-5km radius. Boost high-engagement posts. Maintain 5 posts/week cadence.' },
          { label: 'Growth-focused', range: '$200 - $400/month', note: 'Facebook Ads + Google Ads. Partner with 1-2 KOLs per month. Launch a loyalty program (points via Zalo OA). A/B test different content types.' },
          { label: 'Chain / multi-location', range: '$600 - $1,200/month', note: 'Hire an agency or dedicated marketing staff. Run multi-channel: Facebook + Google + TikTok Ads. Seasonal influencer campaigns.' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Common Marketing Mistakes — Burning Money Without Knowing It',
        content: [
          { icon: 'warning', title: 'Running Facebook Ads without tracking ROI', desc: 'Spending $120-200/month on ads but can\'t tell how many customers actually came from them vs. walked in organically. Simple fix: use a unique discount code for ads (e.g., "mention FACEBOOK for 10% off") — now you can count exactly how many customers the ad brought.', severity: 'critical' },
          { icon: 'warning', title: 'Posting inconsistently — 3 weeks on, 2 months off', desc: 'Facebook and TikTok algorithms penalize accounts that go dormant. Your shop disappears from customer feeds. Posting 3 times/week CONSISTENTLY for 6 months beats daily posting for 1 month then stopping.', severity: 'critical' },
          { icon: 'warning', title: 'Ignoring Google Maps — only doing Facebook', desc: 'Facebook organic reach keeps declining (only 2-5% of followers see your posts). Google Maps reach is GROWING because customers actively search. No Google Maps listing = missing 30-40% of potential customers.', severity: 'warning' },
          { icon: 'warning', title: 'Buying fake followers or likes', desc: 'A page with 10K followers but only 3 likes per post. Facebook\'s algorithm detects this and reduces your real reach. Customers can tell too. Better to have 500 genuine followers with active engagement.', severity: 'warning' },
          { icon: 'warning', title: 'Only posting promotions — no value content', desc: 'If every post is "20% off!" or "buy 1 get 1," customers only visit for deals and have zero brand loyalty. Golden ratio: 70% value content (great dishes, stories, knowledge) + 30% promotions.', severity: 'tip' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Digital marketing for a small F&B business isn\'t complicated and doesn\'t require a big budget. Start with 3 free actions: (1) register on Google Maps and upload quality photos, (2) create a Facebook page and post 3 times/week, (3) shoot 1-2 TikTok videos per week. Just 30 minutes daily, and after 3 months you\'ll see a clear difference. Use F&B Validator to calculate the right marketing budget for your shop\'s size and revenue.',
      },
    ],
  },
];

export default TECHNOLOGY_ARTICLES;
