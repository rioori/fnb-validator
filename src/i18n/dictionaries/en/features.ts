const features = {
  breadcrumb: { home: 'Home', features: 'Features' },
  verticalCta: {
    heading: 'Choose your industry',
    comingSoon: 'Coming soon',
    start: 'Get started →',
  },
  verticals: [
    { name: 'F&B', desc: 'Coffee shops, restaurants, milk tea, bakery, bar', icon: 'coffee', active: true },
    { name: 'Retail', desc: 'Fashion, grocery, convenience stores', icon: 'retail', active: false },
    { name: 'Education', desc: 'Training centers, tutoring, online courses', icon: 'education', active: false },
    { name: 'Services', desc: 'Spa, salon, gym, laundry, repair, studio', icon: 'services', active: false },
  ],
  financialAnalysis: {
    meta: {
      title: 'Financial Analysis — Validator.vn',
      description: 'Auto-calculate 12-month P&L, break-even, payback period and health score for your business model.',
    },
    slug: 'phan-tich-tai-chinh',
    heading: 'Financial Analysis',
    desc: 'Enter your business data — get a 12-month P&L report, break-even point, payback period and automated health score. No accounting knowledge needed.',
    icon: 'chart',
    color: 'bg-pastel-blue',
    highlights: [
      { icon: 'chart', title: '12-Month P&L', desc: 'Revenue, cost, and net profit projections for each month — auto-generated from your inputs' },
      { icon: 'trending', title: 'Break-even & Payback', desc: 'Know exactly which month you break even and how long to recover your initial investment' },
      { icon: 'bolt', title: 'Health Score', desc: 'Composite score evaluating financial health — helps you know if the model is viable' },
    ],
    verticalAction: 'quick-calc',
  },
  aiAdvisor: {
    meta: {
      title: 'AI Advisor — Validator.vn',
      description: 'Chat directly with AI about business strategy, cost optimization, operations and marketing for your model.',
    },
    slug: 'ai-advisor',
    heading: 'AI Advisor',
    desc: 'Ask any business question — the AI advisor responds based on your actual data and industry-specific knowledge.',
    icon: 'chat',
    color: 'bg-pastel-mint',
    highlights: [
      { icon: 'chat', title: 'Personalized advice', desc: 'AI analyzes based on your model data — not generic advice' },
      { icon: 'bolt', title: 'Instant answers', desc: 'Ask about costs, pricing, marketing, staffing, legal — get detailed answers immediately' },
      { icon: 'book', title: 'Deep expertise', desc: 'Trained on Vietnam market data — understands local business context' },
    ],
    verticalAction: 'ai-chat',
  },
  knowledgeBase: {
    meta: {
      title: 'Knowledge Library — Validator.vn',
      description: 'In-depth articles, market reports and real-world insights on costs, operations, strategy and legal for Vietnamese business owners.',
    },
    slug: 'kien-thuc',
    heading: 'Knowledge Library',
    desc: 'In-depth articles, market reports and real-world insights — covering cost structures, operations, legal requirements and marketing strategies.',
    icon: 'book',
    color: 'bg-pastel-cream',
    highlights: [
      { icon: 'book', title: 'In-depth articles', desc: 'From cost structures, staffing, marketing to business registration — all the knowledge you need' },
      { icon: 'chart', title: '4 categories', desc: 'Cost · Operations · Strategy · Legal — easy to find, read, and apply' },
      { icon: 'trending', title: 'Continuously updated', desc: 'New articles added regularly — bilingual Vietnamese-English for your reference' },
    ],
    verticalAction: null,
    knowledgeLink: '/kien-thuc',
  },
  checklist: {
    meta: {
      title: 'Business Checklist — Validator.vn',
      description: '80+ items to prepare before launching — from legal, construction, equipment to operations. Track progress in your browser.',
    },
    slug: 'checklist',
    heading: 'Business Checklist',
    desc: '80+ items to prepare from legal, construction, equipment to operations. Track your progress — data saved in your browser.',
    icon: 'checklist',
    color: 'bg-pastel-gold',
    highlights: [
      { icon: 'checklist', title: '80+ detailed items', desc: 'Covers every stage: legal, premises, construction, equipment, staffing, marketing' },
      { icon: 'bolt', title: 'Track progress', desc: 'Check off completed items — data auto-saves in your browser' },
      { icon: 'trending', title: 'Nothing missed', desc: 'Compiled from real-world experience — thorough preparation before opening day' },
    ],
    verticalAction: 'checklist',
  },
};
export default features;
