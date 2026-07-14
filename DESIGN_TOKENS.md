# Design Tokens — Validator.vn

Source of truth for Khang + AI to reference before shipping new UI. Update this doc when adding tokens in `src/app/globals.css`.

## When to use what

**Semantic first, decorative fallback.** If the card represents a *concept* (story, tool, expert, market data, onboarding), use the semantic token. Only fall back to `bg-pastel-*` when purely decorative rotation is needed.

---

## Colors

### Brand core
| Token | Hex | Use |
|---|---|---|
| `--color-cta` | `#22C55E` | Primary buttons, CTAs, active states |
| `--color-cta-hover` | `#16A34A` | Button hover, active links |
| `--color-primary` | `#FDBCB4` | Warm accent buttons (secondary) |
| `--color-secondary` | `#ADD8E6` | Cool accent buttons |
| `--color-text` | `#2D3748` | Body text + borders |
| `--color-text-muted` | `#64748B` | Descriptions |
| `--color-text-light` | `#94A3B8` | Placeholders, meta |

### Semantic cards (use these, not raw pastel)
| Token | Concept | Where |
|---|---|---|
| `--color-card-story` | Owner stories, case studies, social proof | OwnerStoriesPreview, /cau-chuyen-chu-quan cards |
| `--color-card-tool` | Calculators, wizard steps, tools | QuickCalc, FeatureCards tool cards |
| `--color-card-expert` | Expert insights, authority | ExpertPreview, /goc-nhin-chuyen-gia |
| `--color-card-market` | Market data, trends, benchmarks | TrendPreview, market charts |
| `--color-card-onboard` | Onboarding, wizard entry, warm greeting | WelcomeModal, hero warm zones |

### Decorative pastel primitives (legacy, keep for rotation)
`--color-pastel-cream`, `-blue`, `-mint`, `-gold`, `-blush` — use only when you need a rotating card BG set (`CARD_BGS = [...]`).

### Accent border colors (retire hex literals)
`--color-accent-gold` `#C8A96E` · `--color-accent-mint` `#7CB98B` · `--color-accent-sky` `#7BAFCB` · `--color-accent-terra` `#D4956A` · `--color-accent-plum` `#B88BAF`

**Usage:** inline `style={{ borderLeftColor: 'var(--color-accent-gold)' }}` — Tailwind arbitrary values like `border-l-[#C8A96E]` are banned going forward.

### Semantic states
| Token | Use |
|---|---|
| `--color-success` `#22C55E` | Positive metrics, "good" status ring |
| `--color-warning` `#EAB308` | Attention needed, "warn" status |
| `--color-danger` `#EF4444` | Alerts, drop-off, "bad" status |

---

## Elevation

3 levels + focus ring. Applied via `--shadow-clay-*` tokens on `.clay-card*` variants.

| Token | Value | When |
|---|---|---|
| `--shadow-clay-rest` | `2px 2px 0 var(--color-text)` | Default card at rest |
| `--shadow-clay-hover` | `4px 4px 0 var(--color-text)` | Card hover, mid emphasis |
| `--shadow-clay-lift` | `6px 6px 0 var(--color-text)` | Hero/signature card at rest |
| `--shadow-focus` | `0 0 0 3px rgba(34, 197, 94, 0.35)` | Input focus ring |

### Clay card variants

| Class | Rest | Hover | Use |
|---|---|---|---|
| `.clay-card` | rest | hover | Interactive card (default) |
| `.clay-card-static` | rest | — | Non-interactive container |
| `.clay-card-lift` | hover | lift | Hero moment, signature card |

---

## Spacing rhythm

**Retire uniform `mb-4` everywhere.** Use hierarchy:

| Scale | Class | Use |
|---|---|---|
| Tight | `mb-2 gap-2` | Dense items (tags, badges, inline chips) |
| Comfy | `mb-4 gap-3` | Cards within a section, standard rhythm |
| Breath | `mb-8 gap-4` | Between related sections |
| Grand | `mb-16 gap-6` | Between major page zones (hero → features → CTA) |

## Typography

Family: `--font-heading` (Montserrat) + `--font-body` (Roboto) — both with Vietnamese subset.

| Size | Weight | Use |
|---|---|---|
| `text-xl` (20px) | 700–800 | h1 hero heading |
| `text-lg` (18px) | 700 | h2 section heading |
| `text-[16px]` | 700 | h3 sub-section |
| `text-[14px]` | 600–700 | Card titles |
| `text-[13px]` | 500 | Body |
| `text-[12px]` | 500 | Card descriptions |
| `text-[11px]` | 500 | Meta, hints |
| `text-[10px]` | 700 | Uppercase labels, badges |

Global letter-spacing on headings: `-0.01em` (globals.css line 54).

---

## Anti-patterns (banned)

- ❌ `bg-[#FDEEC4]` — use `bg-pastel-gold` or `bg-[color:var(--color-card-expert)]`
- ❌ `border-l-[#7CB98B]` — use inline `style={{ borderLeftColor: 'var(--color-accent-mint)' }}`
- ❌ `shadow-[2px_2px_0_#2D3748]` — use `.clay-card` / `.clay-card-static` / `.clay-card-lift`
- ❌ `mb-4` everywhere — pick from spacing rhythm above based on relationship
- ❌ New pastel token additions without semantic mapping — add both primitive + semantic alias in one PR

---

## Adding new tokens

1. Add primitive in `@theme inline` block of `globals.css`
2. If it maps to a concept, also add semantic alias
3. Document here (this file) with when-to-use
4. If it's an elevation/shadow, update `.clay-card*` variants to reference

---

_Last updated: 2026-07-15 (W2 Wed of council 4wk sprint)_
