---
type: adr
status: accepted
date: 2026-06-26
supersedes: []
related: [docs/architecture/adr/2026-06-24-foundational-frontend-stack.md]
---

# ADR — Render code & terminal samples with a pure-CSS component (no JS highlighter)

## Status

Accepted — 2026-06-26.

## Context

The CCUG site is a plain static HTML5 + CSS site with no framework, no build
step, and no runtime dependencies (see the foundational-frontend-stack ADR). The
Dev Guides already show short commands using inline `<code>`. The new **Spec
Driven Coding** page needs to display a multi-line *Claude Code terminal*
session (SpecKit + Superpowers). This raises a standing question that will recur
as more guide-style content is added: **how do we present styled code/terminal
samples?**

## Decision

Render all code and terminal samples as **semantic `<pre>`/`<code>` markup styled
by scoped CSS classes** in the single shared stylesheet. No client-side syntax
highlighter, no CDN script, no build-time highlighting.

- Multi-line terminals use a `.terminal` component: a window-chrome bar plus a
  `<pre class="terminal-body">` whose lines use helper spans
  (`.t-prompt`, `.t-cmd`, `.t-comment`, `.t-ok`) for color.
- Inline commands continue to use `<code>` as today.
- Coloring is decorative; the underlying text remains complete and selectable so
  meaning never depends on color alone.

## Alternatives considered

- **Client-side highlighter (highlight.js / Prism via CDN).** Rejected: adds a
  runtime script dependency and a network fetch, contradicting the
  no-runtime-dependency posture, for marginal benefit on short illustrative
  snippets.
- **Pre-rendered terminal images.** Rejected: non-selectable text, poor
  accessibility, and high maintenance cost to edit.

## Consequences

- **Positive:** Stays fully within the foundational stack — zero JS, zero deps,
  accessible, copy-pasteable, trivially editable by organizers.
- **Positive:** Reusable `.terminal` component for future guides.
- **Negative:** No automatic language-aware highlighting; coloring is applied by
  hand via helper spans. Acceptable for short, curated samples; revisit only if
  the site grows large, dynamically-generated code listings.

## Compliance

This ADR specializes — and does not conflict with — the
foundational-frontend-stack ADR. It introduces no new dependency or tooling.
