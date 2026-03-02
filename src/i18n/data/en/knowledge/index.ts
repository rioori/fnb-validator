import type { KBTopic } from '@/types';
import COST_ARTICLES from './cost';
import OPERATIONS_ARTICLES from './operations';
import STRATEGY_ARTICLES from './strategy';
import LEGAL_ARTICLES from './legal';
import TECHNOLOGY_ARTICLES from './technology';
import TRENDS_ARTICLES from './trends';

const KNOWLEDGE_BASE: KBTopic[] = [
  ...COST_ARTICLES,
  ...OPERATIONS_ARTICLES,
  ...STRATEGY_ARTICLES,
  ...LEGAL_ARTICLES,
  ...TECHNOLOGY_ARTICLES,
  ...TRENDS_ARTICLES,
];

export default KNOWLEDGE_BASE;

export { COST_ARTICLES, OPERATIONS_ARTICLES, STRATEGY_ARTICLES, LEGAL_ARTICLES, TECHNOLOGY_ARTICLES, TRENDS_ARTICLES };
