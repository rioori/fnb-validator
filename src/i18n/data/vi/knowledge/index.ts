import type { KBTopic } from '@/types';
import COST_ARTICLES from './cost';
import OPERATIONS_ARTICLES from './operations';
import STRATEGY_ARTICLES from './strategy';
import LEGAL_ARTICLES from './legal';

const KNOWLEDGE_BASE: KBTopic[] = [
  ...COST_ARTICLES,
  ...OPERATIONS_ARTICLES,
  ...STRATEGY_ARTICLES,
  ...LEGAL_ARTICLES,
];

export default KNOWLEDGE_BASE;

export { COST_ARTICLES, OPERATIONS_ARTICLES, STRATEGY_ARTICLES, LEGAL_ARTICLES };
