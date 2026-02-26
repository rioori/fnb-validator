import type { Locale } from './config';

const dictionaries = {
  vi: () =>
    Promise.all([
      import('./dictionaries/vi/common'),
      import('./dictionaries/vi/wizard'),
      import('./dictionaries/vi/dashboard'),
      import('./dictionaries/vi/landing'),
      import('./dictionaries/vi/fnb-home'),
      import('./dictionaries/vi/knowledge'),
      import('./dictionaries/vi/features'),
      import('./dictionaries/vi/experts'),
    ]).then(([common, wizard, dashboard, landing, fnbHome, knowledge, features, experts]) => ({
      common: common.default,
      wizard: wizard.default,
      dashboard: dashboard.default,
      landing: landing.default,
      fnbHome: fnbHome.default,
      knowledge: knowledge.default,
      features: features.default,
      experts: experts.default,
    })),

  en: () =>
    Promise.all([
      import('./dictionaries/en/common'),
      import('./dictionaries/en/wizard'),
      import('./dictionaries/en/dashboard'),
      import('./dictionaries/en/landing'),
      import('./dictionaries/en/fnb-home'),
      import('./dictionaries/en/knowledge'),
      import('./dictionaries/en/features'),
      import('./dictionaries/en/experts'),
    ]).then(([common, wizard, dashboard, landing, fnbHome, knowledge, features, experts]) => ({
      common: common.default,
      wizard: wizard.default,
      dashboard: dashboard.default,
      landing: landing.default,
      fnbHome: fnbHome.default,
      knowledge: knowledge.default,
      features: features.default,
      experts: experts.default,
    })),
};

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)['vi']>>;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
