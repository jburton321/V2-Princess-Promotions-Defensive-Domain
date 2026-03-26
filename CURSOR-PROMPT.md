# CURSOR PROMPT — Princess Promotions Reviews

Paste everything below into Cursor as your first prompt after opening this repo.

---

## Context

This repo contains all source files for a competition-grade (Awwwards / CSS Design Awards / FWA) defensive domain review website: **princesspromtionsreviews.com**. It's an independent third-party consumer review site about Princess Promotions — NOT affiliated with Princess Promotions, Princess Cruises, or Carnival Corporation.

The files are already organized in this repo. Your job is to convert the single-file HTML site into a component-based Next.js 14 (App Router) project and get it running.

---

## Repo Structure (Already in Place)

```
/
├── CURSOR-PROMPT.md                ← This file (your instructions)
├── README.md                       ← Project overview & post-launch checklist
├── setup.sh                        ← File organization script (already run)
│
├── src/
│   └── princesspromtionsreviews-v9.html   ← THE source site. Convert this.
│
├── docs/                           ← Reference only — do NOT deploy
│   ├── BRAND-SYSTEM.md             ← Brand rules, colors, type, spacing, animation
│   ├── defensive-domain-strategy-v3.docx
│   ├── pp-research-brief.docx
│   └── pp-reviews-copy-v6.docx
│
└── public/
    ├── logos/
    │   ├── logo-header-with-tagline.svg
    │   ├── logo-horizontal-light.svg
    │   ├── logo-horizontal-dark.svg
    │   ├── logo-stacked-light.svg
    │   └── logo-stacked-dark.svg
    ├── seals/
    │   ├── seal-circle-blue.svg
    │   ├── seal-framed-lockup.svg
    │   └── seal-gold-circle.svg
    └── favicons/
        ├── favicon-light.svg
        └── favicon-dark.svg
```

---

## Step 1: Read the Source Files First

Before writing any code:

1. **Read `src/princesspromtionsreviews-v9.html`** in full. This is the complete site — all CSS, HTML, JS, and structured data. Every design decision is intentional.
2. **Read `docs/BRAND-SYSTEM.md`** for the complete brand reference — colors, typography, logo rules, spacing, animation specs, and rating scores.

These two files are your source of truth. If anything in this prompt conflicts with the HTML source, the HTML wins.

---

## Step 2: Initialize Next.js

In the repo root, initialize a Next.js 14+ project with App Router and Tailwind:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --no-import-alias
```

This will create the `app/` directory and config files around the existing `/public`, `/docs`, and `/src` folders.

Then create this component structure:

```
app/
├── layout.tsx              # Root layout — fonts, metadata, 3 JSON-LD blocks
├── page.tsx                # Main page composing all sections in order
├── globals.css             # CSS custom properties from the HTML <style> block
└── favicon.ico             # Generated from public/favicons/ SVG

components/
├── ProgressBar.tsx         # Fixed 2px blue scroll progress bar
├── Header.tsx              # Transparent → frosted glass on scroll
├── Hero.tsx                # 100vh, word-by-word animation, giant score, seals
├── IndependenceBar.tsx     # Blue accent disclaimer card
├── RatingGrid.tsx          # 5-col bento + overall card, counter animations
├── ImageDivider.tsx        # Full-width image break (reusable)
├── WhatIsPP.tsx            # Editorial — media grid, fact strip, callout
├── PPvsPrincess.tsx        # Editorial — media grid, pull quote, split compare
├── BigAnswer.tsx           # Centered typographic "Is It a Scam? No." moment
├── IssueBento.tsx          # 4-col grid, 6 distinct card types
├── RedeemFCC.tsx           # Journey bento — phone/stat/action/warning/image
├── RedeemHotel.tsx         # Editorial — media grid, callout
├── TestimonialScroll.tsx   # Horizontal scroll gallery + scroll hint
├── FAQAccordion.tsx        # CSS grid expand + rotating plus
├── HowWeReview.tsx         # Methodology card
├── Verdict.tsx             # Dark bg image, gradient overlay, seals
├── ReviewForm.tsx          # Star rating, escalation checkbox, success state
├── Footer.tsx              # Logo, tagline, full disclaimer
├── Callout.tsx             # Reusable (gold warning / blue info)
├── PullQuote.tsx           # Reusable serif italic quote
└── ScrollReveal.tsx        # IntersectionObserver wrapper

hooks/
└── useScrollProgress.ts    # Returns scroll % for progress bar

lib/
└── metadata.ts             # Centralized SEO config + JSON-LD generators
```

---

## Step 3: Design Tokens

Extract ALL CSS custom properties from the HTML `<style>` block into `app/globals.css`:

```css
:root {
  --navy: #0F1923;
  --navy-mid: #1B2A4A;
  --blue: #2E75B6;
  --blue-lt: #5BA0D9;
  --blue-pl: #EAF2FB;
  --gold: #C4922A;
  --gold-pl: #FBF3E2;
  --bg: #F5F6F9;
  --card: #FFFFFF;
  --card-alt: #F0F2F7;
  --tx: #171A20;
  --tx2: #4A4F5C;
  --tx3: #8B8F9A;
  --bdr: #E2E5EC;
  --r: 20px;
  --g: 14px;
  --red: #C0392B;
  --red-pl: #FDF0EF;
  --grn: #1A8B4C;
  --grn-pl: #EEFBF3;
  --amb: #B7950B;
  --amb-pl: #FEF9E7;
}
```

Also mirror these into `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0F1923', mid: '#1B2A4A' },
        blue: { DEFAULT: '#2E75B6', lt: '#5BA0D9', pl: '#EAF2FB' },
        gold: { DEFAULT: '#C4922A', pl: '#FBF3E2' },
        bg: { DEFAULT: '#F5F6F9', card: '#FFFFFF', 'card-alt': '#F0F2F7' },
        tx: { DEFAULT: '#171A20', '2': '#4A4F5C', '3': '#8B8F9A' },
        bdr: { DEFAULT: '#E2E5EC' },
        status: {
          red: '#C0392B', 'red-pl': '#FDF0EF',
          grn: '#1A8B4C', 'grn-pl': '#EEFBF3',
          amb: '#B7950B', 'amb-pl': '#FEF9E7',
        },
      },
      borderRadius: { bento: '20px' },
      maxWidth: { content: '1100px' },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
```

---

## Step 4: Fonts

In `app/layout.tsx` use `next/font/google`:

```typescript
import { Inter, Instrument_Serif } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-sans', weight: ['400','500','600','700'] })
const instrumentSerif = Instrument_Serif({ subsets: ['latin'], variable: '--font-serif', weight: '400', style: ['normal','italic'] })
```

Apply both as CSS variable classes on `<body>`.

---

## Step 5: SEO Metadata

### Full Metadata Export (in layout.tsx)

```typescript
export const metadata: Metadata = {
  title: 'Princess Promotions Reviews — Scam or Legit? Independent Consumer Review [2026]',
  description: 'Are Princess Promotions Future Cruise Packages worth it? We independently reviewed BBB complaints, hotel credit issues, FCC redemption, and real customer feedback. Read before you buy.',
  keywords: 'Princess Promotions reviews, Princess Promotions scam, is Princess Promotions legit, Princess Promotions hotel credits, Princess Promotions future cruise credit, Princess Promotions cancel, Princess Promotions refund, Princess Promotions vs Princess Cruises, Princess Promotions BBB complaints, Princess Promotions hidden fees, Princess Promotions hotel certificate, Open Network Exchange ONE Inc',
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' as const },
  alternates: { canonical: 'https://princesspromtionsreviews.com/' },
  openGraph: {
    type: 'article',
    title: 'Princess Promotions Reviews — Scam or Legit? Independent Consumer Review [2026]',
    description: 'We independently investigated Princess Promotions Future Cruise Packages. BBB complaints, hotel credit issues, FCC redemption, and real customer feedback — all reviewed.',
    url: 'https://princesspromtionsreviews.com/',
    siteName: 'Princess Promotions Reviews',
    images: [{ url: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80', width: 1200, height: 630 }],
    locale: 'en_US',
    publishedTime: '2026-03-01T00:00:00+00:00',
    modifiedTime: '2026-03-25T00:00:00+00:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Princess Promotions Reviews — Scam or Legit? [2026]',
    description: 'Independent review of Princess Promotions Future Cruise Packages. Hotel credits, FCCs, BBB complaints, and real customer feedback analyzed.',
    images: ['https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80'],
  },
}
```

### JSON-LD — 3 Blocks

Extract these EXACTLY from the bottom of the HTML file. Render all three in `layout.tsx` via `<script type="application/ld+json">`:
1. **Organization** — site identity
2. **Article + AggregateRating** — 3.1/5, 247 reviews (Google star snippets)
3. **FAQPage** — 5 questions (Google accordion rich snippets)

---

## Step 6: Images

Configure `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
}
module.exports = nextConfig
```

All image URLs are in the HTML source. Use `next/image` with `fill` or explicit dimensions.

---

## Step 7: Competition-Grade Features (Must Preserve)

These are extracted from the HTML. Each must be faithfully converted to React components:

### 1. Scroll Progress Bar
2px blue line fixed at top. Width = scroll %. Passive scroll listener.

### 2. Header State Transition
Transparent over hero (white text) → frosted glass on scroll >100px (dark text, blur bg). All properties transition 0.3s.

### 3. Hero Word-by-Word Animation
Each word in H1 wrapped in `<span>` with staggered animation-delay (0.3s–0.95s). `@keyframes wordIn`: translateY(40px) + opacity 0 → normal. Score animates with scale at 1.2s. Seals fade at 2.0–2.2s.

### 4. Score Counter Animations
Rating numbers count from 0 → target (e.g., 0 → 3.8). requestAnimationFrame, cubic easing, 800ms. IntersectionObserver at threshold 0.5. Display with toFixed(1).

### 5. Scroll Reveal
All `.rv` elements: opacity 0, translateY(60px) → 1, 0. Easing: cubic-bezier(.16,1,.3,1). Duration 0.8s. Stagger delays rv-d1 to rv-d6 (0.1s increments). Observe once.

### 6. Issue Bento — 6 Card Types (4-col grid)
| # | Type | Span | Visual Treatment |
|---|------|------|------------------|
| 1 | Hero | 2×2 | Navy bg, serif h3, gold stats (50%, #1) |
| 2 | Image | 1×1 | Photo bg + dark overlay, serif h3 white |
| 5 | Stat | 1×1 | Giant serif "7", red-pale bg, centered |
| 3 | Quote | 1×1 | Italic serif pullquote, blue-pale bg |
| 4 | Standard | 1×1 | White card, sans h3 (only standard card) |
| 6 | Image Wide | 2×1 | Photo bg + overlay, serif h3 white |
| ✓ | Positive | 2×1 | Green-pale bg, serif h3 |

### 7. FCC Journey Bento (2-col grid)
| Type | Span | Visual |
|------|------|--------|
| Phone | Full-width | Navy, giant serif "1-800-PRINCESS" centered |
| Stat | 1×1 | "$1 = 1 FCC" on blue bg |
| Action | 1×1 | White card, blue kicker |
| Warning | 1×1 | Gold-pale bg, gold kicker |
| Image | 1×1 | Ship photo, dark overlay |

### 8. Horizontal Scroll Testimonials
overflow-x auto, hidden scrollbar, flex row, width max-content. Featured card: navy bg, 420px wide. Others: 380px. Scroll hint with animated arrow.

### 9. FAQ Accordion
CSS `grid-template-rows: 0fr → 1fr` for expand. Plus icon via ::before/::after pseudo-elements, ::after rotates 90° on open. Easing: cubic-bezier(.16,1,.3,1), 0.4s.

### 10. "Is It a Scam?" Typographic Moment
Full-width centered. H2 at clamp(2.5rem, 7vw, 5rem). "No." and "Yes." in italic blue.

---

## Step 8: Run

```bash
npm install
npm run dev
```

Verify at `localhost:3000` — must match the V9 HTML exactly.

---

## Step 9: Deployment Checklist

- [ ] 3 JSON-LD blocks in page source
- [ ] OG image in social preview tools
- [ ] Hero word-by-word animation on load
- [ ] Score counters animate 0 → target on scroll
- [ ] Progress bar tracks full page scroll
- [ ] Header transparent → frosted glass transition
- [ ] Issue bento: 6 distinct card types visible
- [ ] Journey bento: 5 distinct card types visible
- [ ] Testimonials scroll horizontally
- [ ] FAQ expands with grid transition + rotating plus
- [ ] "Is It a Scam?" headline at display scale
- [ ] Verdict bg image + gradient overlay
- [ ] Star rating works in form
- [ ] Form shows success state
- [ ] All images lazy-load
- [ ] Responsive: 320px, 375px, 500px, 700px, 800px, 900px
- [ ] Independence disclaimer in hero callout + footer
- [ ] Footer names: Princess Promotions, ONE Inc., Princess Cruises, Carnival Corporation
- [ ] All headings Title Case
- [ ] Every wrapper max-width: 1100px
- [ ] No `<ol>`, `<ul>`, `<li>` anywhere
- [ ] Favicon renders
- [ ] Lighthouse SEO > 95
- [ ] Lighthouse Performance > 80

---

## Absolute Rules

1. **Do NOT rewrite copy.** Based on real BBB/Cruise Critic/PissedConsumer complaint research.
2. **Do NOT modify JSON-LD schemas.** AggregateRating 3.1/5 and FAQPage are SEO-critical.
3. **Do NOT change rating scores.** 3.8, 2.6, 2.8, 2.9, 3.4, 3.1 — research-based.
4. **Do NOT change the independence disclaimer.** Must name all four entities.
5. **Do NOT add numbered lists or bullet points.** No `<ol>`, `<ul>`, `<li>`.
6. **Do NOT change heading case.** All headings are Title Case.
7. **Do NOT vary max-widths.** ONE width: 1100px. Every wrapper.
8. **Do NOT simplify bento cards to uniform styles.** Each card type is intentionally different.
9. **The site is INDEPENDENT.** Not a Princess Promotions property.

---

End of prompt. Read `src/princesspromtionsreviews-v9.html` and `docs/BRAND-SYSTEM.md` first, then build.
