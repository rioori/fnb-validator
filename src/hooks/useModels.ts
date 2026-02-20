import { MODELS } from '@/lib/constants';
import MODELS_EN from '@/i18n/data/en/models';
import { useLocale } from '@/i18n/LocaleProvider';

/** Returns locale-aware MODELS data (translated names, desc, items) */
export function useModels() {
  const locale = useLocale();
  return locale === 'en' ? MODELS_EN : MODELS;
}
