import type { ModelKey } from '@/types';

export interface Preset {
  id: string;
  modelKey: ModelKey;
  nameVi: string;
  nameEn: string;
  descVi: string;
  descEn: string;
  icon: string;
  overrides: {
    sqm: number;
    seats: number;
    rent: number;
    budget: number;
  };
}

export const PRESETS: Preset[] = [
  {
    id: 'cafe-small',
    modelKey: 'coffee',
    nameVi: 'Qu\u00e1n cafe nh\u1ecf ~30m\u00b2',
    nameEn: 'Small Cafe ~30sqm',
    descVi: 'Cafe take-away ho\u1eb7c ng\u1ed3i nh\u1ecf, v\u1ed1n v\u1eeba ph\u1ea3i',
    descEn: 'Takeaway or small seating cafe, moderate budget',
    icon: 'coffee',
    overrides: { sqm: 30, seats: 15, rent: 15_000_000, budget: 400_000_000 },
  },
  {
    id: 'eatery-street',
    modelKey: 'eatery',
    nameVi: 'Qu\u00e1n \u0103n b\u00ecnh d\u00e2n',
    nameEn: 'Street-side Eatery',
    descVi: 'C\u01a1m b\u00ecnh d\u00e2n, b\u00fan ph\u1edf \u2014 v\u1ed1n th\u1ea5p, nhu c\u1ea7u \u1ed5n \u0111\u1ecbnh',
    descEn: 'Simple Vietnamese food \u2014 low budget, steady demand',
    icon: 'eatery',
    overrides: { sqm: 35, seats: 25, rent: 12_000_000, budget: 250_000_000 },
  },
  {
    id: 'bubbletea-shop',
    modelKey: 'bubbletea',
    nameVi: 'Qu\u00e1n tr\u00e0 s\u1eefa',
    nameEn: 'Bubble Tea Shop',
    descVi: 'Tr\u00e0 s\u1eefa take-away, bi\u00ean l\u1eddi cao, c\u1ea1nh tranh l\u1edbn',
    descEn: 'Takeaway bubble tea, high margin, competitive market',
    icon: 'bubbletea',
    overrides: { sqm: 20, seats: 8, rent: 18_000_000, budget: 450_000_000 },
  },
  {
    id: 'restaurant-mid',
    modelKey: 'restaurant',
    nameVi: 'Nh\u00e0 h\u00e0ng t\u1ea7m trung',
    nameEn: 'Mid-range Restaurant',
    descVi: 'Nh\u00e0 h\u00e0ng 80-120m\u00b2, v\u1ed1n l\u1edbn, c\u1ea7n qu\u1ea3n l\u00fd chuy\u00ean nghi\u1ec7p',
    descEn: 'Mid-range restaurant 80-120sqm, significant investment',
    icon: 'restaurant',
    overrides: { sqm: 100, seats: 50, rent: 35_000_000, budget: 1_500_000_000 },
  },
];
