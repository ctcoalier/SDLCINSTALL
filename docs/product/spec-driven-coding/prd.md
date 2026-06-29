---
lifecycle_state: analyzed
last_action: analyze
last_action_date: 2026-06-26
parent_scope: ccug-website
---

# PRD — Spec Driven Coding Page (CCUG Website)

## Summary

Add a new **Spec Driven Coding** page to the San Diego CCUG static site. The page
teaches members how to create a new feature with **GitHub Spec Kit** and the
**Superpowers** Claude Code plugin, shown as a realistic, copy-readable sequence
of steps inside a styled *Claude Code terminal*. A new **"Spec Code"** call-to-action
button sits immediately to the right of the existing **"Browse Dev Guides"** button
in the home hero, and a **Spec Driven Coding** item is added to the primary nav on
every page.

This is a feature on the existing `ccug-website` product. It changes no backend
(there is none) and stays within the ratified static-HTML+CSS stack.

## Problem / Job to be Done

**When** a CCUG member wants to try spec-driven development with Claude Code,
**they want** a single, trustworthy, copy-able walkthrough of the SpecKit +
Superpowers flow, **so they can** go from idea to a planned, implemented feature
without piecing the workflow together from scattered docs.

### Forces (JTBD)

- **Push:** Members hear "spec-driven coding," SpecKit, and Superpowers at meetups
  but lack a concrete end-to-end example.
- **Pull:** A clean terminal walkthrough they can mirror in their own repo.
- **Anxiety:** "Which command comes first? Do SpecKit and Superpowers conflict?"
- **Habit:** Today they improvise prompts; the page gives a repeatable ritual.

## Target User

Active CCUG members (the existing site audience) — developers already using or
curious about Claude Code, ranging from tinkerers to teams shipping in production.

## Scope

### In scope
- New static page `src/spec.html` titled **Spec Driven Coding**.
- A styled "Claude Code terminal" component presenting the SpecKit + Superpowers
  feature-creation steps (`/speckit.specify → /speckit.plan → /speckit.tasks →
  /speckit.implement`, interleaved with Superpowers `brainstorming`,
  `writing-plans`, and TDD discipline).
- New hero button **"Spec Code"** to the right of "Browse Dev Guides" on
  `src/index.html`, linking to `spec.html`.
- **Spec Driven Coding** primary-nav item added to all pages (Home, Claude News,
  Dev Guides, Spec Driven Coding), keeping header/footer chrome identical.
- Reuse existing design tokens; add only the terminal-component CSS to the shared
  stylesheet.

### Out of scope
- Any runtime, JS interactivity, copy-to-clipboard scripting, or build step.
- Backend, analytics, or user data.
- Rewriting existing pages beyond the shared nav addition.

## Success Signals

- **Primary (repeat-visit aligned):** Members return to the page as a reference
  when starting a new feature (qualitative — referenced at meetups).
- The page renders correctly desktop + mobile with WCAG AA contrast, no console
  errors, and identical header/footer chrome to the rest of the site.

## Ulwick-style Outcome Statements

1. Minimize the time to understand the correct order of SpecKit commands.
2. Minimize the effort to see where Superpowers skills fit in the SpecKit flow.
3. Increase confidence that the depicted commands are current and accurate.
4. Minimize the steps to navigate from the home page to the walkthrough.
5. Minimize the visual inconsistency between this page and the rest of the site.

## Constraints

- Plain static HTML5 + CSS only; no framework, no build, no runtime deps
  (foundational-frontend-stack ADR).
- One shared stylesheet using CSS custom-property design tokens.
- Semantic landmarks; `aria-current="page"`; identical shared chrome.

## Open Questions

- Exact terminal transcript wording — to be confirmed during spec/implement review.
