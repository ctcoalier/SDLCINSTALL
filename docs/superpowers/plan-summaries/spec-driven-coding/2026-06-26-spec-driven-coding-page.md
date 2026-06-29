---
lifecycle_state: saved
adr_compliance: compliant
parent_spec: docs/superpowers/specs/2026-06-26-spec-driven-coding-page.md
last-implement-state: shipped
adrs_cited: [/docs/architecture/adr/2026-06-24-foundational-frontend-stack.md, /docs/architecture/adr/2026-06-26-static-code-sample-rendering.md]
last_action: plan
last_action_date: 2026-06-26
---

# Plan Summary — Spec Driven Coding Page

Parent spec: `docs/superpowers/specs/2026-06-26-spec-driven-coding-page.md`
Plan body (gitignored): `docs/superpowers/plans/2026-06-26-spec-driven-coding-page.md`

## Scope

Add a static **Spec Driven Coding** page to the CCUG site, a "Spec Code" hero
button on Home (right of "Browse Dev Guides"), and a "Spec Driven Coding" nav +
footer link on all pages. Introduce a reusable pure-CSS `.terminal` component to
present the SpecKit + Superpowers feature-creation walkthrough.

## Tasks

1. Add `.terminal` component CSS to `src/assets/styles.css`.
2. Create `src/spec.html` (shared chrome + hero banner, intro, prereqs, terminal,
   prose step list, CTA strip).
3. Add the "Spec Code" hero button to `src/index.html`.
4. Add the nav item + footer link to all four pages.
5. Update `scripts/validate.js`; run validation + Playwright visual check.

## Verification

`node scripts/validate.js` passes (now including `src/spec.html`); Playwright
desktop + mobile screenshots show correct render, consistent chrome, no console
errors.

## ADR Rationale

Stays within `foundational-frontend-stack` (no framework/build/runtime) and
implements the `static-code-sample-rendering` decision (pure-CSS `<pre>`
terminal, no JS highlighter).

## Plan Summaries

Single plan, single scope. No sub-plans.

## Simulation Findings

- **Sequencing risks:** Only Task 1→2 is order-dependent (page uses the
  component). Tasks 3–4 touch existing pages independently; Task 5 is last. Low.
- **Dependency assumptions:** No external deps. SpecKit/Superpowers names are
  content only, not site dependencies. `uvx`/`specify` appears in the depicted
  terminal text — not executed. Verified current (June 2026). Low.
- **Test gaps:** No unit-test framework; coverage is file-existence + visual.
  Acceptable per the established site pattern; validate.js extended to spec.html.
- `risky_assumptions_present = false`.

## Refinement Status

Simulation surfaced no blocking risks. Task ordering and the single-pass nav/
footer edit mitigate the only real hazard (chrome drift). Plan is bounded and
ready to execute.

Refinement: CONVERGED round 1
