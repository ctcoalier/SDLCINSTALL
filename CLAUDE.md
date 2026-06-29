# San Diego Claude Code Users Group (CCUG) Website

A simple, static HTML website for the San Diego Claude Code Users Group — a home
base for active members between meetups, surfacing **Claude News** and **Dev
Guides**. Built as plain static HTML + CSS with no framework and no build step,
styled after sandiego.org's coastal aesthetic.

See `docs/product/ccug-website/prd.md` (PRD),
`docs/superpowers/specs/2026-06-24-ccug-website-static-site.md` (spec), and
`docs/architecture/adr/2026-06-24-foundational-frontend-stack.md` (stack ADR).

## Project Structure

- `src/index.html` — Home
- `src/news.html` — Claude News
- `src/guides.html` — Dev Guides
- `src/assets/styles.css` — single shared stylesheet (design tokens + components)

## Coding Standards

- Plain static HTML5 + CSS only. **No framework, no build step, no runtime
  dependencies** (ratified in the foundational-frontend-stack ADR).
- One shared stylesheet using CSS custom properties as design tokens; do not
  inline page-specific styles that duplicate tokens.
- Semantic HTML5 landmarks (`header`, `nav`, `main`, `footer`); mark the current
  nav item with `aria-current="page"`; meet WCAG AA contrast.
- Keep the shared header/footer chrome identical across pages.
- @TODO: link `docs/development/coding-standards.md` once canon docs are vendored.

## Sensitive Data

PII / PHI / customer data must never be committed to git. The `data/` directory
is gitignored. This site is fully public/static and stores no user data.

## Validation

`npx vibe-validate validate` is the intended pre-commit gate (soft until a
vibe-validate config is added). View the site by opening `src/index.html` in a
browser — no build or server required.
