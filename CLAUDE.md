# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Serve the site locally** (required before running tests):
```bash
python3 -m http.server 8080
```

**Run all tests** (server must be running on :8080):
```bash
npm test
```

**Run a single test by name:**
```bash
npx playwright test --grep "nav scrolled class"
```

**Run tests headed (visible browser):**
```bash
npx playwright test --headed
```

**List all tests without running them:**
```bash
npx playwright test --list
```

**Install/reinstall the Chromium browser:**
```bash
npx playwright install chromium
```

## Architecture

The project is a **no-build static site** — there is no bundler, framework, or compile step. Everything lives in a single file:

- **`index.html`** — the entire site: all CSS (in `<style>`), all HTML, and all JavaScript (in `<script>`). No external JS dependencies beyond Google Fonts.
- **`tests/regression.spec.js`** — Playwright end-to-end regression tests.
- **`playwright.config.js`** — Chromium-only, targets `http://localhost:8080`, no `webServer` config (server is started manually).

### index.html structure

The file is organized in this order:
1. `<style>` — design tokens (`--color-*`, `--font-*`, `--space-*`), then component styles in section order
2. HTML body — `<nav>`, `<main>` with sections `#values → #services → #manifesto → #problems → #contact`, then `<footer>`
3. `<script>` — nav scroll behavior (`.scrolled` class at `scrollY > 40`), hamburger toggle (`.open` on `#navLinks`), intersection-observer reveal animations, and contact form handler

### Contact form behavior

The form (`#contactForm`) uses `novalidate` — validation is handled entirely in JS:
- Empty fields or invalid email → silently returns (no native browser validation)
- Invalid email also calls `form.email.focus()`
- Valid submit → button text becomes `"Sending…"`, disabled; after 800 ms → button hidden, `#formSuccess` shown via `style.display = 'block'`

### CSS naming

Styles follow BEM: `.nav__logo`, `.hero__headline`, `.value-card__title`, etc. Responsive breakpoints are in a single `@media` block near the bottom of `<style>`.

### Old/

The `Old/` directory contains archived HTML prototypes and is not part of the site.
