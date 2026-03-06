# PLAN.md — Data Agency Landing Page

## Reference Analysis: lin3s.com

Key design principles extracted:

- **Neutral-dominant palette**: whites, near-blacks, and grays as foundation
- **Arrow-driven wayfinding**: directional cues give forward momentum
- **Breathing whitespace**: generous margins between sections create luxury feel
- **Component-based modular layout**: each section is self-contained with clear hierarchy
- **Professional minimalism**: confident restraint — every element earns its place
- **Typography-forward**: headlines carry the visual weight, not decoration
- **Restrained accent usage**: brand color appears in CTAs and key moments only

---

## Design System

### Color Palette

```css
--color-bg:          #0c0c0e;   /* near-black site background */
--color-surface:     #131316;   /* card/section surface */
--color-border:      #1f1f28;   /* subtle separators */
--color-text-primary:#ededf0;   /* off-white — softer than pure white */
--color-text-muted:  #7a7a8c;   /* secondary text, labels */
--color-accent:      #3dffa0;   /* electric mint — used sparingly */
--color-accent-dim:  rgba(61, 255, 160, 0.08); /* accent at low opacity for glow */
```

Accent color (#3dffa0 — electric mint green) appears in:

- CTA button fills
- Service item hover state (number highlight)
- Manifesto underline detail
- Active nav indicator
- Form focus rings

### Typography

Google Fonts (2 faces, loaded via `<link>`):

- **Display**: `DM Serif Display` — elegant, editorial serif for major headings
- **Body**: `Inter` — clean, modern sans-serif for everything else

```css
/* Type scale — base 16px */
--text-xs:    0.75rem;    /* 12px — labels, captions */
--text-sm:    0.875rem;   /* 14px — nav, footnotes */
--text-base:  1rem;       /* 16px — body copy */
--text-lg:    1.25rem;    /* 20px — lead text */
--text-xl:    1.5rem;     /* 24px — section labels, card titles */
--text-2xl:   2rem;       /* 32px — subsection headings */
--text-3xl:   3.25rem;    /* 52px — section headings */
--text-4xl:   5rem;       /* 80px — hero sub-headline */
--text-hero:  clamp(4rem, 10vw, 8.5rem); /* fluid hero headline */

/* Weight */
--weight-regular: 400;
--weight-medium:  500;
--weight-bold:    700;

/* Letter spacing */
--tracking-tight:  -0.04em;  /* display headings */
--tracking-normal: -0.01em;  /* body */
--tracking-wide:   0.12em;   /* labels / caps */
```

### Spacing (8px base unit)

```css
--space-1:   0.5rem;   /* 8px */
--space-2:   1rem;     /* 16px */
--space-3:   1.5rem;   /* 24px */
--space-4:   2rem;     /* 32px */
--space-6:   3rem;     /* 48px */
--space-8:   4rem;     /* 64px */
--space-12:  6rem;     /* 96px */
--space-16:  8rem;     /* 128px */
--space-24: 12rem;     /* 192px */

/* Section vertical padding */
--section-py: clamp(5rem, 10vh, 8rem);
/* Container max-width */
--container:  1280px;
--container-padding: clamp(1.5rem, 5vw, 5rem);
```

### Grid System

- 12-column CSS grid with `--container` max-width and `--container-padding`
- Sections use named grid areas for clarity
- Gaps follow spacing scale

---

## Section-by-Section Layout

### Navigation (sticky, fixed)

```
[DATUM.]                        [Services] [About] [Work] [Contact →]
```

- Height: 72px
- Background: transparent initially, `--color-bg` at 95% opacity on scroll (backdrop-filter: blur)
- Logo: wordmark "DATUM." in Inter Bold, accent dot
- Links: Inter 14px, letter-spaced, underline slides in on hover
- Right CTA: "Contact →" styled differently (accent underline)
- Thin 1px border-bottom appears when scrolled

### 01 — Hero (100vh)

```
                    ┌──────────────────────────────┐
                    │  SCROLL INDICATOR ↓          │
                    │                              │
                    │  We turn data                │
                    │  into decisions.             │
                    │                              │
                    │  A boutique analytics agency │
                    │  for businesses that need    │
                    │  clarity, not complexity.    │
                    │                              │
                    │  [Start the conversation →]  │
                    │                              │
                    │           [SVG ORBS]         │
                    └──────────────────────────────┘
```

- Left-aligned content, ~55% width on desktop
- Right side: abstract SVG — 3 overlapping rings/circles with subtle CSS animation (rotate, pulse)
- Background: radial gradient from `#0c0c0e` to `#0d1018` (almost imperceptible blue shift)
- Headline: DM Serif Display, `--text-hero`, negative letter-spacing
- Subheading: Inter Regular, `--text-xl`, muted color
- CTA: pill-shaped button, accent background, dark text

### 02 — Value Proposition

```
  WHY DATUM
  ──────────────────────────────────────────
  01 Quality Data   02 Real Insights   03 Competitive Edge   04 Privacy First
  [icon/graphic]    [icon/graphic]     [icon/graphic]        [icon/graphic]
  Description       Description        Description           Description
```

- Section label: caps, muted, `--text-xs`, `--tracking-wide`
- Thin horizontal rule below label
- 4-column grid on desktop, 2-col tablet, 1-col mobile
- Each card: number in accent color (large, light opacity), title, 2-line description
- No card backgrounds — just spacing and thin left border
- Staggered scroll reveal (0.1s delay per card)

### 03 — Services

```
  SERVICES                                 01 Data Collection
  ─────────────────────     ──────────────────────────────────
                            02 Data Analysis
                            03 Visualization
                            04 Predictive Modeling
                            05 Business Intelligence
                            06 Market Research
                            07 Strategy Consulting
                            08 Data Security
                            09 Executive Reporting
```

- Two-column layout: left = section label (sticky within section), right = list
- Each service: large number + service name as one line
- On hover: name color shifts to accent, and a one-line description slides in below
- Numbered items have a thin `border-bottom` that extends on hover via CSS transform

### 04 — Manifesto

```
  ┌──────────────────────────────────────────────────────────┐
  │                                                          │
  │   "Technology should amplify human judgement,            │
  │    not replace it. We build data systems                 │
  │    that keep people — not algorithms — in control."      │
  │                                                          │
  │                                        — DATUM           │
  └──────────────────────────────────────────────────────────┘
```

- Full-width dark section (slightly different bg: `#0d0d10`)
- Quote in DM Serif Display, `clamp(1.75rem, 3.5vw, 3rem)`, centered
- Max-width 900px, centered
- Thin accent-color top border (4px)
- Attribution: Inter caps, muted, `--tracking-wide`
- Scroll-triggered: text fades in as single block

### 05 — Pain Points / How We Help

```
  THE PROBLEM.          THE ANSWER.
  ──────────────        ────────────────────────────
  "We have the data,    We extract signal from noise.
   but no insight"

  "Our team lacks       We become your embedded
   data expertise"      analytics team.

  [etc.]
```

- Two-column: left col = client frustration (italic, muted), right col = our answer (regular, bright)
- Each pair separated by thin horizontal rule
- Section background: `--color-surface` for visual break
- Scroll reveal: left rows slide in from left, right rows from right (alternating)

### 06 — Contact / CTA

```
  Ready to make your
  data work harder?

  hello@datum.agency                     [Or use the form →]

  ┌──────────────────────────────────────┐
  │  Name         │  Email               │
  │  Message                             │
  │                       [Send →]       │
  └──────────────────────────────────────┘
```

- Large headline in serif
- Email as large styled link (hover: accent color)
- Inline form: minimal, custom-styled inputs (no borders except bottom line style)
- Submit button: same CTA style as hero

### Footer

```
  DATUM. © 2025          Privacy    Services    Contact
```

- Single row, thin top border
- Muted text, small size
- Logo left, links right

---

## Animation Strategy

### Load Animations (no scroll needed, CSS keyframes)


| Element                | Animation              | Duration | Delay |
| ---------------------- | ---------------------- | -------- | ----- |
| Nav                    | fade-in                | 0.4s     | 0s    |
| Hero headline (line 1) | slide-up + fade-in     | 0.7s     | 0.1s  |
| Hero headline (line 2) | slide-up + fade-in     | 0.7s     | 0.25s |
| Hero subheading        | fade-in                | 0.5s     | 0.5s  |
| Hero CTA               | fade-in + slight scale | 0.4s     | 0.7s  |
| SVG orbs               | rotate (infinite, 30s) | —        | —     |


### Scroll-Triggered Reveals (Intersection Observer)

Each observed element gets class `.reveal` and starts with:

```css
opacity: 0;
transform: translateY(28px);
```

On intersection, class `.visible` is added:

```css
opacity: 1;
transform: translateY(0);
transition: opacity 0.65s ease, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
```

Stagger: sibling elements get `--delay: Xms` custom property.


| Section           | What animates    | Stagger |
| ----------------- | ---------------- | ------- |
| Value Proposition | Each card        | 100ms   |
| Services          | Each service row | 60ms    |
| Manifesto         | Quote block      | none    |
| Pain Points       | Each row pair    | 80ms    |
| Contact           | Headline, form   | 100ms   |


### Hover States


| Element       | Effect                                       |
| ------------- | -------------------------------------------- |
| Nav links     | Underline slides in from left (scaleX 0→1)   |
| CTA Button    | Scale 1.02, accent glow shadow               |
| Service items | Number turns accent, description slides down |
| Value cards   | Left border turns accent color               |
| Email link    | Color shifts to accent with underline        |
| Form inputs   | Bottom border turns accent color             |


---

## Component Structure (within single HTML file)

```
<html>
  <head>
    fonts (Google Fonts link)
    <style>
      :root { design tokens }
      reset / base
      utility classes
      nav styles
      hero styles
      value-prop styles
      services styles
      manifesto styles
      pain-points styles
      contact styles
      footer styles
      animation keyframes
      reveal animation classes
      responsive (mobile-first media queries)
    </style>
  </head>
  <body>
    <nav> ... </nav>
    <main>
      <section id="hero"> ... </section>
      <section id="values"> ... </section>
      <section id="services"> ... </section>
      <section id="manifesto"> ... </section>
      <section id="problems"> ... </section>
      <section id="contact"> ... </section>
    </main>
    <footer> ... </footer>
    <script>
      // Nav scroll behavior
      // Intersection Observer for reveals
      // Stagger delay application
      // Form submit handler (preventDefault + feedback)
    </script>
  </body>
</html>
```

---

## Responsive Breakpoints

```
Mobile:  < 640px   → single column, text-hero = 3.5rem
Tablet:  640–1023px → 2-column where applicable, text-hero = 5.5rem
Desktop: 1024px+   → full multi-column layout, text-hero = up to 8.5rem
```

Key adjustments per breakpoint:


| Section      | Mobile            | Tablet                   | Desktop            |
| ------------ | ----------------- | ------------------------ | ------------------ |
| Hero         | stacked, centered | left-aligned, SVG hidden | left + SVG visible |
| Values       | 1 col             | 2×2 grid                 | 4 col              |
| Services     | single list       | single list wider        | 2-col label+list   |
| Pain Points  | stacked           | stacked                  | 2-col              |
| Contact form | stacked inputs    | 2-col name+email         | 2-col name+email   |


---

## File Output

Single file: `index.html`