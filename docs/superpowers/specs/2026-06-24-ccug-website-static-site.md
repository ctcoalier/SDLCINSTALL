---
type: spec
scope: ccug-website
date: 2026-06-24
lifecycle_state: saved
adr_compliance: compliant
last_action: save
last_action_date: 2026-06-24
last-plan-state: prototyped
last-plan-date: 2026-06-24
new_adrs:
  - docs/architecture/adr/2026-06-24-foundational-frontend-stack.md
adrs_cited:
  - /docs/architecture/adr/2026-06-24-foundational-frontend-stack.md
---

# Spec — San Diego CCUG Website (Static Site, v1)

## Summary

A three-page static HTML website for the San Diego Claude Code Users Group
(CCUG). It is the home base for active members between meetups, surfacing
**Claude News** and **Dev Guides**, styled after sandiego.org's coastal
aesthetic. No backend, no build step, no framework — plain HTML + one shared
CSS file, hand-authored content.

Source of truth for intent: [PRD](../../product/ccug-website/prd.md).

## Goals

- Three pages mirroring the top-level menu: **Home**, **Claude News**,
  **Dev Guides**.
- A coastal visual system (ocean blues + warm sandy/golden accents on white,
  clean sans-serif, full-width hero, solid CTA buttons, generous whitespace)
  evoking sandiego.org without copying its proprietary assets.
- An original CCUG logo/wordmark treatment (inline SVG, no external asset
  dependency).
- Content that an organizer can update by hand with no tooling.
- Realistic placeholder meeting/contact details, clearly editable.

## Non-Goals (v1)

- No backend, database, CMS, or server-side rendering.
- No build pipeline / bundler / package install required to view the site.
- No automated/external news feeds (news is hand-authored).
- No analytics commitment (may be added later).
- No member auth, comments, or submission forms.

## Architecture

Plain static files served as-is. Opening `index.html` in a browser (or serving
the folder with any static host) renders the full site.

```
src/
  index.html          # Home
  news.html           # Claude News
  guides.html         # Dev Guides
  assets/
    styles.css        # single shared stylesheet (design tokens + components)
  # logo is inline SVG in each page header (no binary asset)
```

Rationale for single shared CSS rather than per-page styles: one place to hold
the design tokens (colors, type scale, spacing) keeps the three pages visually
consistent and is the lowest-maintenance option for a hand-edited site. This is
flagged as an ADR-warranting decision (see "Decisions to ratify").

### Shared layout contract

Every page shares the same chrome so navigation and branding are identical:

- **Header**: inline-SVG CCUG logo/wordmark (left) + horizontal nav (right) with
  links Home / Claude News / Dev Guides. The current page's nav link is marked
  active (`aria-current="page"`).
- **Hero** (Home full-width; News/Guides a slimmer banner variant).
- **Main content** in a centered max-width container (~1080px) with generous
  whitespace.
- **Footer**: group name, placeholder meeting cadence + contact, and a short
  "built by the community" line.

## Information Architecture & Page Content

### Home (`index.html`)
- Full-width hero: CCUG name/tagline + primary CTA ("See what's new") and a
  secondary CTA ("Browse Dev Guides").
- Short "What is CCUG?" intro paragraph (who it's for, the value between
  meetups).
- Two cards linking into **Claude News** and **Dev Guides** with one-line
  descriptions.
- "Next meetup" placeholder strip (editable date/venue).

### Claude News (`news.html`)
- Banner heading + one-line purpose.
- A reverse-chronological list of **dated news entries** (hand-authored). Each
  entry: date, title, 1–3 sentence summary, optional "source" link. Seed with
  3–4 plausible, appropriate entries about Claude / Claude Code developments,
  clearly framed as community notes (no fabricated quotes or invented metrics).

### Dev Guides (`guides.html`)
- Banner heading + one-line purpose.
- A set of practical **how-to guide cards** for getting more out of Claude Code
  (e.g. "Getting started with Claude Code", "Writing effective prompts for
  coding", "Using skills & slash commands", "MCP servers in 5 minutes"). Each
  card: title, short blurb, and an anchored expandable/linked section with
  step-by-step body content authored on-page.

## Visual Design System (sandiego.org-inspired)

Defined as CSS custom properties in `styles.css`:

- **Colors**: primary ocean blue (deep + mid), warm sandy/golden accent,
  off-white background, charcoal body text. (Concrete hex values chosen during
  implementation; original palette, not copied.)
- **Typography**: system sans-serif stack for body; slightly heavier, larger
  weights for headings; clear H1→H3 scale.
- **Components**: solid primary button (accent or deep-blue fill), full-width
  hero with overlay text, card with subtle shadow + rounded corners,
  horizontal nav with active state, footer band.
- **Mood**: bright, coastal, inviting, generous whitespace.

Style is *evoked*, not reproduced asset-for-asset; no San Diego Tourism
Authority logo, imagery, or copyrighted material is used.

## Accessibility & Quality Bar

- Semantic HTML5 landmarks (`header`, `nav`, `main`, `footer`).
- Color contrast meets WCAG AA for text on its background.
- Nav reflects current page via `aria-current`.
- Responsive: readable on mobile (single column) and desktop via simple
  fl/grid + a small media query; no JS required for layout.
- Valid HTML; no console errors.

## Content Integrity Constraint

All authored news/guide content must be original and appropriate. Where a news
entry references an external Claude/Anthropic fact, it is phrased as a community
note and may carry a generic source link placeholder rather than a fabricated
citation. No invented quotes, statistics, or dates presented as authoritative.

## Decisions to ratify (ADR-warranting)

1. **No framework / plain static HTML+CSS** — chosen over React/static-site
   generators to honor the "simple HTML, low-maintenance, no build" constraint.
2. **Single shared stylesheet with CSS custom-property design tokens** — chosen
   over per-page inline styles or a CSS framework to centralize the coastal
   design system for hand-edited consistency.
3. **Inline-SVG original logo/wordmark** — chosen over a binary image asset to
   keep the repo dependency-free and the brand editable in text.

These are surfaced for the simulate/ADR steps to confirm or expand. Ratified in
[ADR 2026-06-24 — Foundational Frontend Stack](../../architecture/adr/2026-06-24-foundational-frontend-stack.md).

## Acceptance Criteria

- Opening `src/index.html` renders Home with working nav to News and Guides.
- All three pages share identical header/footer chrome and the coastal style.
- News page shows ≥3 dated, original entries; Guides page shows ≥4 guide cards
  with real step content.
- Active nav item is visually and programmatically marked on each page.
- Layout is legible on a ~375px-wide viewport and a desktop viewport.
- No external network dependency is required to render the site.

## Plan Summaries

- [2026-06-24 — CCUG Static Site plan](../plan-summaries/ccug-website/2026-06-24-ccug-website-static-site.md)

## ADR Rationale

- [2026-06-24-foundational-frontend-stack](/docs/architecture/adr/2026-06-24-foundational-frontend-stack.md): This spec's entire architecture (plain static HTML + CSS, no framework/build, a single tokenized shared stylesheet, and an inline-SVG logo) is the decision this ADR ratifies. Every "Architecture", "Visual Design System", and "Decisions to ratify" section here implements that ADR's chosen option directly.

## Simulation Findings

- **gap** Concrete hex values for the coastal palette are deferred to
  implementation; the spec names roles (ocean blue, sandy accent) but not exact
  values — acceptable, resolved during build.
- **gap** Exact news entries and guide bodies are not enumerated in the spec;
  authoring happens in implement against the "≥3 entries / ≥4 guides" acceptance
  bar — acceptable, intentional.
- **adr-warranting** (new-tech / breaks-convention) Choosing plain static
  HTML+CSS with no framework or build step establishes the foundational stack
  convention for this greenfield repo — warrants an ADR to record the decision.
- **adr-warranting** (breaks-convention) Single shared stylesheet with
  CSS-custom-property design tokens (vs a CSS framework) is a convention-setting
  choice — fold into the stack ADR.
- **adr-warranting** (new-tech) Inline-SVG original logo/wordmark instead of a
  binary asset — minor; can be captured within the same stack ADR rather than a
  separate one.

## Refinement Status

Round 1: All simulation findings reviewed. The two `gap` findings (deferred
palette hex values and deferred content authoring) are intentional and resolved
during implementation; they do not represent unresolved design risk. The
`adr-warranting` findings are forwarded to the ADR step (a single stack ADR
covering: no-framework static HTML+CSS, shared tokenized stylesheet, inline-SVG
logo). No contradictions found. No open design questions remain.

Refinement: CONVERGED round 1

## ADR Brainstorm: foundational-frontend-stack

**Decision under exploration:** What frontend stack should the CCUG website use?

**Heuristic fired:** new-tech / breaks-convention (greenfield repo — this choice
sets the foundational convention).

**Options considered:**
- *Plain static HTML + CSS, no framework, no build* — zero dependencies, opens in
  a browser directly, trivially hostable on any static host, lowest maintenance.
  Directly satisfies the PRD "simple HTML / low-maintenance / no backend"
  constraints.
- *Static-site generator (e.g. Eleventy/Astro)* — nicer templating/content
  reuse, but introduces a Node build step, dependencies, and upgrade burden the
  PRD explicitly wants to avoid for a hand-edited community site.
- *SPA framework (React/Vite)* — overkill for 3 informational pages; adds a build
  toolchain and runtime for no interactive requirement.

**Chosen:** Plain static HTML + CSS, no framework/build. Supporting sub-choices:
a single shared stylesheet using CSS custom properties as design tokens (one
place for the coastal palette/type scale), and an inline-SVG original
logo/wordmark (keeps the repo asset/dependency-free and the brand text-editable).

**Rationale:** Maximizes longevity-with-minimal-upkeep (the PRD's stated
success constraint), keeps the barrier to an organizer editing content as low as
possible, and avoids a build/runtime that a small volunteer-run group would have
to maintain. Trade-off accepted: no templating means the shared header/footer is
duplicated across three files; mitigated by the small page count and a documented
shared-chrome contract.
