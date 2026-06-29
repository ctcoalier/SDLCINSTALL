---
lifecycle_state: saved
adr_compliance: compliant
last_action: spec
last_action_date: 2026-06-26
last-plan-state: prototyped
parent_prd: docs/product/spec-driven-coding/prd.md
new_adrs: [docs/architecture/adr/2026-06-26-static-code-sample-rendering.md]
adrs_cited: [/docs/architecture/adr/2026-06-24-foundational-frontend-stack.md, /docs/architecture/adr/2026-06-26-static-code-sample-rendering.md]
---

# Spec — Spec Driven Coding Page (CCUG Website)

## Context

Feature on the existing `ccug-website` static site. Adds a **Spec Driven Coding**
page that walks members through creating a new feature with **GitHub Spec Kit**
and the **Superpowers** Claude Code plugin, depicted as a styled *Claude Code
terminal*. Adds a **"Spec Code"** hero button on Home (right of "Browse Dev
Guides") and a **Spec Driven Coding** primary-nav item on every page.

Source: `docs/product/spec-driven-coding/prd.md`.

## Goals

1. A new page `src/spec.html` matching the site's existing chrome and design tokens.
2. An accurate, copy-readable terminal walkthrough of the SpecKit + Superpowers
   feature-creation flow.
3. Discoverable: a hero "Spec Code" button + a nav item on all pages.
4. No new runtime, JS, or build step — stays within the foundational stack.

## Non-Goals

- No clipboard JS, no live execution, no analytics, no backend.
- No redesign of existing pages beyond the shared nav addition.

## Design

### Navigation (all pages)

Add a fourth primary-nav link after "Dev Guides" on `index.html`, `news.html`,
`guides.html`, and the new `spec.html`:

```html
<a href="spec.html">Spec Driven Coding</a>
```

Mark `aria-current="page"` only on `spec.html`. Header/footer chrome stays byte-
identical across pages (existing invariant). Add the same link to the footer
"Explore" column on all pages.

### Home hero button

In `src/index.html` `.btn-row`, add a third button immediately to the right of
"Browse Dev Guides":

```html
<a class="btn btn-ghost" href="spec.html">Spec Code</a>
```

`btn-ghost` matches the adjacent button styling; `.btn-row` already wraps
responsively. Order: `See what's new` (primary) · `Browse Dev Guides` (ghost) ·
`Spec Code` (ghost).

### spec.html page structure

Reuse the guides-page pattern: `.hero.banner` intro, then a `.section` with the
walkthrough. Sections:

1. **Hero banner** — pill "Workflow", H1 "Spec Driven Coding", one-line tagline.
2. **Intro** — 2–3 sentences: what spec-driven development is and why SpecKit +
   Superpowers pair well (SpecKit structures the spec→plan→tasks→implement
   artifacts; Superpowers brings the process discipline — brainstorming, plan
   writing, TDD).
3. **Prerequisites** — short list (Claude Code installed; the Superpowers plugin;
   `uv`/`uvx` for SpecKit).
4. **The terminal walkthrough** — the styled `.terminal` component (below).
5. **Step-by-step** — an ordered `.guide`-style list mirroring the terminal, so
   the steps are readable as prose too (accessibility + skimming).
6. **Footer CTA strip** — link back to Dev Guides / next meetup.

### New CSS component: `.terminal`

Add to the shared stylesheet (`src/assets/styles.css`). A dark "Claude Code
terminal" card using existing tokens where possible:

- `.terminal` — dark surface (`--ocean-deep` derived), `--radius`, `--shadow`,
  monospace font stack, horizontal scroll guard (`overflow-x:auto`).
- `.terminal-bar` — window chrome strip with three dots and a title
  ("claude — spec-driven-coding").
- `.terminal-body` — padded `<pre>` area, `font-size:0.86rem`, light-on-dark text
  meeting WCAG AA.
- Helper spans: `.t-prompt` (`$`/`>` prompt, sandy gold), `.t-cmd` (commands,
  bright), `.t-comment` (muted), `.t-ok` (success ✔, surf blue/green).

Define a small dark-text palette inside the component so contrast is controlled
locally without adding global tokens that the rest of the site doesn't use.

### Terminal content (for review)

A realistic combined flow — SpecKit slash commands interleaved with Superpowers
skills (exact wording finalized at implement review):

```
$ uvx --from git+https://github.com/github/spec-kit.git specify init --here --ai claude
✔ Spec Kit initialized · slash commands installed for Claude Code

$ claude

> /speckit.constitution
  Establishing project principles — quality, testing, UX, performance…
  ✔ Wrote .specify/memory/constitution.md

> Let's add saved searches. Brainstorm the approach first.
  ⚡ superpowers:brainstorming — exploring intent, users, and edge cases
  ✔ Agreed scope: name a filter set, list saved searches, re-apply one

> /speckit.specify Saved searches: name and revisit a set of filters
  ✔ specs/001-saved-searches/spec.md  (user stories + requirements)

> /speckit.plan Use the existing stack; no new services
  ✔ plan.md · research.md · data-model.md · contracts/

> /speckit.tasks
  ✔ tasks.md — 14 ordered, dependency-aware tasks

> /speckit.implement
  ⚡ superpowers:test-driven-development — red → green per task
  ✔ 14/14 tasks complete · tests passing
```

Commands verified current (June 2026): SpecKit uses the namespaced
`/speckit.*` slash commands and `specify init`. Superpowers skills
(`brainstorming`, `writing-plans`, `test-driven-development`) trigger by name.

## Accessibility

- Semantic landmarks (`header`/`nav`/`main`/`footer`); exactly one
  `aria-current="page"`.
- Terminal text meets WCAG AA contrast on its dark background.
- The prose step list duplicates the terminal so the content isn't conveyed by
  the styled block alone.

## Validation

- `node scripts/validate.js` passes (extend required-files list to include
  `src/spec.html`).
- Visual check desktop + mobile via Playwright; no console errors; chrome
  identical to other pages.

## ADR Rationale

- **`/docs/architecture/adr/2026-06-24-foundational-frontend-stack.md`** — This
  feature is fully realizable within the ratified stack: plain static HTML5 + CSS,
  one shared tokenized stylesheet, no framework/build/runtime. The new page,
  hero button, and nav item add no dependencies and reuse existing design tokens.
- **`/docs/architecture/adr/2026-06-26-static-code-sample-rendering.md`** — The
  `.terminal` walkthrough is rendered as semantic `<pre>`/`<code>` styled by
  scoped CSS classes, with no JavaScript syntax highlighter, exactly as this ADR
  decides. Coloring is decorative; text stays complete and selectable.

Both ADRs are satisfied; neither is superseded.

## Simulation Findings

**Lens 1 — Gap analysis.**
- `scripts/validate.js` lists required files; `src/spec.html` must be added or
  validation won't cover the new page. → captured in Validation.
- The new page needs the same inline data-URI favicon as the other pages
  (otherwise a 404 in console). → add to implement checklist.
- Footer "Explore" column lists Home/News/Guides — add the Spec link there too
  on all pages for chrome consistency. → captured in Design.
- Long terminal lines (the `uvx … specify init` line) could overflow on narrow
  screens. → `.terminal-body` gets `overflow-x:auto`; line is allowed to scroll.

**Lens 2 — Contradiction check.**
- No contradiction with the foundational-frontend-stack ADR: the page is pure
  HTML+CSS, no JS, no build. The `.terminal` block is presentational only.
- Header/footer "byte-identical chrome" invariant is preserved because the nav +
  footer link are added to ALL pages in the same change.

**Lens 3 — ADR-warranting flags.**
- None. No new dependency, no framework, no runtime, no build-tooling decision.
  `simulator-flagged-adr = false`. The existing ADR governs this change.

## Refinement Status

All simulation findings folded into Design/Validation (validate.js update,
favicon, footer link, terminal overflow). No open contradictions; scope is
bounded to one new page + shared nav/button + one CSS component.

Refinement: CONVERGED round 1

## ADR Brainstorm

One decision worth recording for the future: **how to render styled terminal /
code-sample content** on this no-build static site.

- **Option A — pure-CSS `<pre>` component (chosen).** Semantic `<pre>` markup
  plus scoped CSS classes for prompt/command/comment/success coloring. Zero
  JavaScript, zero dependencies, accessible, copy-pasteable text.
- **Option B — client-side syntax highlighter** (e.g. highlight.js/Prism via
  CDN). Adds a runtime script dependency and a network fetch; conflicts with the
  no-runtime-dependency posture; marginal benefit for short illustrative snippets.
- **Option C — pre-rendered images of terminals.** Not selectable text; fails
  accessibility and maintainability.

Decision → Option A. Recorded as a new ADR
(`adr-static-code-sample-rendering`). This generalizes beyond this page (the
Dev Guides already use inline `<code>`), so it earns a standing decision record.
