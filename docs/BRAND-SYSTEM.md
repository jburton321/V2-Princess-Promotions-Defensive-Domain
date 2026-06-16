# Princess Promotions Reviews - Brand System

Single source of truth for all visual and brand decisions.

---

## Identity

- **Name:** Princess Promotions Reviews
- **URL:** princesspromtionsreviews.com
- **Tagline:** Independent Consumer Reviews & Ratings
- **Positioning:** Independent third-party consumer review site. NOT owned by, affiliated with, or endorsed by Princess Promotions, Open Network Exchange (ONE Inc.), Princess Cruises, or Carnival Corporation.

---

## Colors

### Primary

| Token | Hex | Usage |
|-------|-----|-------|
| Navy | `#0F1923` | Dark backgrounds, hero, verdict, overall score card |
| Navy Mid | `#1B2A4A` | Headings, logo text, card titles, journey phone card |
| Blue | `#2E75B6` | Accent bar, "REVIEWS" text, links, CTAs, kickers, step badges, journey stat card |
| Blue Light | `#5BA0D9` | Hero italic text, dark-bg accents, seal strokes, image card kickers |
| Blue Pale | `#EAF2FB` | Blue callout bg, quote card bg, split-compare left side |
| Gold | `#C4922A` | Trust seals, star ratings, warning borders, score badge, hero score number, journey stat values |
| Gold Pale | `#FBF3E2` | Warning callout bg, warning card bg, split-compare right side |

### Neutral

| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#F5F6F9` | Page background |
| Card | `#FFFFFF` | Card surfaces, form bg |
| Card Alt | `#F0F2F7` | Hover states, alternating backgrounds |
| Text | `#171A20` | Body text |
| Text 2 | `#4A4F5C` | Paragraphs, descriptions |
| Text 3 | `#8B8F9A` | Metadata, captions, labels |
| Border | `#E2E5EC` | Card borders, form inputs |

### Status

| Token | Hex | Usage |
|-------|-----|-------|
| Red / Red Pale | `#C0392B` / `#FDF0EF` | Scores below 3.0, severe issue badges, stat card bg |
| Green / Green Pale | `#1A8B4C` / `#EEFBF3` | Scores 4.0+, positive card, success state |
| Amber / Amber Pale | `#B7950B` / `#FEF9E7` | Scores 3.0–3.9, moderate badges, overall score |

### Rules

1. Gold is ONLY for trust elements - seals, stars, score badge, stat values on dark
2. Blue is the action color - CTAs, links, kickers, accent bars
3. Navy is authority - headings, dark sections, hero cards
4. Never use pure black (#000) - use Navy or Text Primary
5. Never use pure white (#FFF) for page bg - use #F5F6F9. White is for cards only
6. Score thresholds: Red < 3.0, Amber 3.0–3.9, Green 4.0+

---

## Typography

### Fonts

| Role | Family | Weights |
|------|--------|---------|
| Body / UI | Inter | 400, 500, 600, 700 |
| Headlines / Quotes | Instrument Serif | 400, 400 italic |

### Scale

| Element | Font | Weight | Size |
|---------|------|--------|------|
| H1 hero | Instrument Serif | 400 | clamp(3rem, 8vw, 6.5rem) |
| H1 hero italic | Instrument Serif | 400 italic | Same - Blue Light color |
| H2 section titles | Instrument Serif | 400 | clamp(2rem, 5vw, 3.5rem) |
| H2 editorial | Instrument Serif | 400 | clamp(1.8rem, 4vw, 2.8rem) |
| H2 "Is It a Scam?" | Instrument Serif | 400 | clamp(2.5rem, 7vw, 5rem) |
| H3 card titles | Inter | 600 | 0.92rem |
| H3 serif card titles | Instrument Serif | 400 | 1.1–1.3rem |
| Body | Inter | 400 | 0.95–1.05rem |
| Pull quote | Instrument Serif | 400 italic | clamp(1.3rem, 3vw, 1.8rem) |
| Kicker | Inter | 700 | 0.65rem, uppercase, letter-spacing 0.2em |
| Card category label | Inter | 700 | 0.62rem, uppercase, letter-spacing 0.12em |
| Score number | Instrument Serif | 400 | 2.2–4.5rem (varies by context) |
| Stat card number | Instrument Serif | 400 | 3.5rem |
| Journey phone number | Instrument Serif | 400 | clamp(2rem, 5vw, 3.2rem) |
| Form labels | Inter | 600 | 0.68rem, uppercase, letter-spacing 0.08em |
| Seal pill | Inter | 600 | 0.6rem, uppercase |

### Rules

1. Instrument Serif is for: H1, H2, pull quotes, testimonial quotes, score numbers, stat card numbers, journey phone number, issue hero h3, positive card h3, image card h3, journey stat value. NEVER for body, labels, buttons, or forms.
2. Title Case on ALL headings, kickers, FAQ questions, and card titles. Minor words (a, the, to, on, at, as, of, if, it) stay lowercase unless first word.
3. Uppercase + tracked text is reserved for: kickers, category labels, seal pills, form labels, stat labels, and "REVIEWS" in the logo.

---

## Logo

Typographic lockup with blue accent bar. No icon - the bar IS the mark.

### Files

| File | Use |
|------|-----|
| `logo-header-with-tagline.svg` | Site header |
| `logo-horizontal-light.svg` | Light backgrounds |
| `logo-horizontal-dark.svg` | Dark backgrounds |
| `logo-stacked-light.svg` | Compact / mobile |
| `logo-stacked-dark.svg` | Compact / dark |

### Sizing

| Context | Bar | Name Size | "REVIEWS" Size |
|---------|-----|-----------|----------------|
| Header | 3px × 30px | 0.85rem / 600 | 0.52rem / 700 |
| Footer | 3px × 20px | 0.8rem / 600 | 0.5rem / 700 |

### Rules

1. Blue bar always present - it IS the mark
2. "REVIEWS" always tracked (0.45em), uppercase, brand blue
3. On dark: name = white, "REVIEWS" = Blue Light, bar = Blue Light
4. Never place on blue or gold backgrounds
5. Never distort, rotate, or add effects

---

## Seals

| File | Name | Color |
|------|------|-------|
| `seal-circle-blue.svg` | Trusted Review | Blue |
| `seal-framed-lockup.svg` | Branded Verification | Blue + Navy |
| `seal-gold-circle.svg` | Verified 2026 | Gold |

Appear as inline pills in hero and as badge cards in verdict section.

---

## Favicon

| File | Background | "R" | Bar |
|------|-----------|-----|-----|
| `favicon-light.svg` | White | Navy | Blue |
| `favicon-dark.svg` | Navy | White | Blue Light |

Generate: favicon.ico (16/32), apple-touch-icon (180), android-chrome (192/512).

---

## Layout

### One Width

Every section wrapper: `max-width: 1100px; margin: 0 auto; padding: 0 1.5rem`. No exceptions.

### Border Radius

| Element | Radius |
|---------|--------|
| Cards, callouts, images, form | 20px |
| Form inputs | 12px |
| Buttons | 14px |
| Pills, tags | 100px |
| Issue badges, step badges | 10px |
| Logo bar | 2px |

### Grid Gap

All bento grids, journey grids: 14px.

### Section Spacing

| Element | Spacing |
|---------|---------|
| Major sections (.sec) | padding: 7rem 1.5rem |
| Minor sections (.sec-sm) | padding: 5rem 1.5rem |
| Big answer section | padding: 6rem 1.5rem |
| Verdict | padding: 8rem 1.5rem |
| Form | padding: 6rem 1.5rem |

---

## Animation

### Scroll Reveal

- Default: opacity 0, translateY(60px)
- Active (.v): opacity 1, translateY(0)
- Easing: cubic-bezier(.16, 1, .3, 1) - spring-like
- Duration: 0.8s
- Stagger delays: rv-d1 = 0.1s → rv-d6 = 0.6s
- Trigger: IntersectionObserver, threshold 0.08, rootMargin 0px 0px -60px 0px
- Observe once, then unobserve

### Hero

- Words: fadeUp, staggered 0.3s–0.95s
- Score: scale(0.8→1) + fade, 1.2s delay
- Seals/byline: fade, 2.0–2.2s delay
- Scroll cue: fade at 2.5s delay

### Counters

- From 0 to target, 800ms, cubic easing
- Triggered at threshold 0.5
- toFixed(1) for display

### Hover

- Cards: translateY(-6px) + box-shadow 0 20px 40px rgba(0,0,0,.08)
- Easing: cubic-bezier(.16, 1, .3, 1), 0.4s
- Submit button: translateY(-2px) + shadow on hover

### Rules

1. No animation on load except hero
2. Cards animate once on scroll - never re-animate
3. No parallax, no scroll-jacking, no autoplay carousels
4. All transitions under 0.8s

---

## Rating Scores (Do Not Change)

| Category | Score | Color |
|----------|-------|-------|
| Cruise Credit Value | 3.8 | Amber |
| Hotel Credit Value | 2.6 | Red |
| Sales Transparency | 2.8 | Red |
| Post-Sale Support | 2.9 | Red |
| Overall Package Value | 3.4 | Amber |
| **Aggregate** | **3.1** | **Amber** |

Verdict: "Conditionally Recommended"

---

## Independence Disclaimer

Appears 2 times. Non-negotiable. Must include all four entities.

**Hero callout:** mentions Princess Promotions, ONE Inc., Princess Cruises

**Footer:** mentions Princess Promotions, ONE Inc., Princess Cruises, AND Carnival Corporation
