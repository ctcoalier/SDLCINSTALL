---
type: adr
status: accepted
date: 2026-06-24
---

# Foundational Frontend Stack — Plain Static HTML + CSS

## Context

The San Diego CCUG website (see
[PRD](../../product/ccug-website/prd.md) and
[spec](../../superpowers/specs/2026-06-24-ccug-website-static-site.md)) is a small
informational site (three pages: Home, Claude News, Dev Guides) for a
volunteer-run community group. The PRD constrains it to "simple HTML",
low-maintenance, no backend, with content an organizer can update by hand. This
is a greenfield repo, so this choice establishes the foundational frontend
convention.

## Decision

Build the site as **plain static HTML + CSS with no framework and no build
step**. Supporting sub-decisions:

- A **single shared stylesheet** (`assets/styles.css`) using **CSS custom
  properties as design tokens** for the coastal palette, type scale, and
  spacing — one place to keep the three pages visually consistent.
- An **original inline-SVG logo/wordmark** embedded directly in each page's
  header — no binary image asset, brand stays text-editable.

The site renders by opening `index.html` directly or serving the folder from any
static host.

## Consequences

- **Positive:** Zero dependencies and no toolchain to maintain; trivially
  hostable; the lowest possible barrier for an organizer to edit content;
  maximizes the PRD's "longevity with minimal upkeep" success constraint.
- **Negative / trade-off:** No templating means the shared header/footer chrome
  is duplicated across the three HTML files. Mitigated by the small page count
  and a documented shared-chrome contract in the spec; if the page count grows
  substantially, revisit with a static-site generator (a future superseding ADR).
- Establishes the repo convention: new pages are added as static HTML using the
  shared stylesheet and chrome.

## Alternatives Considered

- **Static-site generator (Eleventy/Astro):** Better content reuse/templating,
  but introduces a Node build step, dependencies, and upgrade burden the PRD
  explicitly wants to avoid for a hand-edited community site.
- **SPA framework (React/Vite):** Overkill for three informational pages with no
  interactive requirement; adds a build toolchain and runtime for no benefit.
