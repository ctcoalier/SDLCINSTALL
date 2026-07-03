---
type: prd
lifecycle_state: analyzed
last_action: analyze
last_action_date: 2026-07-02
---

# PRD — San Diego Claude Code Users Group (CCUG) Website

## Problem

Active members of the San Diego Claude Code Users Group have no single, current
home base between meetups. Claude moves fast (new models, features, pricing) and
practical Claude Code know-how is scattered across chat threads, personal notes,
and memory. Members who want to stay sharp between sessions have nowhere
canonical to return to. The result is lost momentum: engagement spikes at a
meetup and decays until the next one.

The job of this site is to be that home base — a simple, always-current hub of
**Claude News** and **Dev Guides** that members bookmark and come back to.

## Users

**Primary — Active members.** Regulars who already attend or follow the group.
They feel the problem most acutely: they want ongoing value between meetings and
a reliable place to catch up on what changed and how to apply it. Success is
defined by *their* repeat visits.

**Secondary — Newcomers.** People who just discovered the group and need to
quickly understand what it is and what they'll get. The site should make a good
first impression without being built primarily for them in v1.

**Secondary — Organizers.** Group leaders who need a credible presence to point
people to and a structure they can keep current with minimal effort.

## Strategy

A **simple, static, hand-authored HTML site**, visually styled after
[sandiego.org](https://www.sandiego.org/) — a clean coastal aesthetic (ocean
blues with warm sandy/golden accents on white, clean sans-serif type, a
horizontal nav, a full-width hero, solid call-to-action buttons, and generous
whitespace) carried by a CCUG logo/wordmark in the same spirit.

Scope for v1 is three pages mirroring the top-level menu:

1. **Home** — hero, what the group is, and entry points into News and Guides.
2. **Claude News** — hand-authored, dated entries on Claude/Claude Code
   developments relevant to the group.
3. **Dev Guides** — practical, hand-authored how-to content for getting more out
   of Claude Code.

The content model is deliberately **static and hand-authored** — no backend, no
CMS, no external feeds in v1. This keeps the site cheap to host, trivial to
deploy, and low-maintenance, which directly serves the "stays useful with
minimal upkeep" constraint. Placeholder meeting/contact details are authored so
the site feels complete and are editable later.

The engagement mechanism is **inform & engage**: fresh, genuinely useful news
and guides give active members a reason to return, building the bookmark/habit
that is the primary success signal.

## Metrics

Primary success signal: **repeat visits** by active members — the site becomes a
bookmark/habit rather than a one-time visit. Because v1 is static with no
backend analytics commitment, this is observed qualitatively (members referencing
the site, returning between meetups) and can be instrumented later with
lightweight analytics if desired.

Supporting indicators (secondary, not v1 commitments): newcomer first-visit
comprehension, content shared outward, and longevity with minimal upkeep.

## Constraints

- **Simple HTML**, static, no backend or build-time data fetching in v1.
- **Low-maintenance**: structure must be easy for an organizer to update by hand.
- **Style fidelity**: visually evoke sandiego.org without copying proprietary
  assets; the CCUG logo/wordmark is an original treatment in the same spirit.
- **Meeting/contact info**: realistic placeholders in v1, clearly editable.
- Content must be **original/appropriate** and attributable where it references
  external Claude/Anthropic facts.

## Jobs To Be Done — Switch Interview (4 Forces)

The "customer" is the active CCUG member deciding whether to make this site a
regular stop.

1. **Push of the situation** — Between meetups, members lose the thread on what's
   new with Claude and how to apply it; relevant knowledge is scattered and
   decays. The current state (no home base) makes staying current feel like work.
2. **Pull of the new** — A single, well-styled hub that aggregates Claude news
   and practical guides in one trustworthy place they can check in two minutes.
3. **Anxiety** — "Will it actually stay current, or go stale like most group
   sites?" and "Is the content trustworthy / worth my time?"
4. **Habit** — Today members already default to Twitter/X, Anthropic's own blog,
   Discord, and personal notes. Those incumbent habits resist a new destination.

**6-stage timeline placement:** *first thought* (heard about the group) →
*passive looking* (curious what they offer) → *active looking* (looking for a
place to keep up between meetups) → *deciding* (is this site worth bookmarking?)
→ *first use* (reads a guide / news entry) → *ongoing use* (returns regularly —
the target state and the metric).

## Ulwick Outcome Statements

1. Minimize the time it takes to find out what's new with Claude/Claude Code,
   when checking in between meetups.
2. Minimize the time it takes to locate a practical how-to for a Claude Code
   task, when trying to get unstuck.
3. Minimize the likelihood that a member sees stale or outdated content, when
   they visit expecting current information.
4. Minimize the effort it takes an organizer to publish a news entry or guide,
   when keeping the site current by hand.
5. Minimize the time it takes a newcomer to understand what the group is and
   what they'll get, when landing on the site for the first time.
6. Minimize the likelihood that a member can't tell where to go next (News vs
   Guides), when arriving on the home page.

---

## Feature — Site Feedback Button (analyzed 2026-07-02)

A small, proportionate feature analyzed against the existing analyzed PRD. It
does not change the site's strategy, stack, or content model; it adds one
persistent affordance for visitor-to-organizer feedback.

### Job To Be Done

> When I have an opinion about the site — something confusing, broken, missing,
> or worth praising — I want a fast, obvious way to tell the organizers, so I
> feel heard and can help shape the site I rely on between meetups.

The "customer" in the JTBD frame is the site visitor (primarily an active
member, secondarily a newcomer). The internal counterpart the job serves is the
**organizer**, for whom inbound feedback is the only lightweight signal about
what to fix or publish next on an otherwise analytics-free static site.

### Target users

- **Primary — active members.** They return between meetups, form opinions about
  usefulness and freshness, and are the population whose repeat-visit habit is
  the site's headline metric. They are most likely to have actionable feedback.
- **Secondary — newcomers.** First-visit friction ("I couldn't find X") is
  valuable signal, and an obvious feedback affordance lowers the bar to report it.
- **Beneficiary — organizers.** Not the clicker, but the party the job ultimately
  serves; feedback is their qualitative substitute for backend analytics.

### JTBD switch interview — 4 forces

1. **Push of the situation** — A visitor notices something (a dead-ish link, a
   stale entry, a topic they wish existed) but has no in-context way to say so;
   the reaction dissipates and the organizers never learn about it.
2. **Pull of the new** — A single, always-present "Feedback" button that opens a
   pre-addressed, pre-subjected email in one click — no form to fill, no account,
   no page to hunt for a contact address.
3. **Anxiety** — "Will this actually reach anyone / get read?" and "Do I have to
   write a formal message?" Mitigated by a recognizable destination address and a
   ready subject line that signals the low-effort, informal nature of the channel.
4. **Habit** — Today the fallback is doing nothing, mentioning it verbally at the
   next meetup, or digging for a contact address in the footer. The button must
   be visible enough to beat "do nothing."

**6-stage timeline placement:** *first thought* (notices something worth saying)
→ *passive looking* (glances for any way to comment) → *active looking* (scans the
page/footer for a contact) → *deciding* (is it worth the effort to reach out?) →
*first use* (clicks Feedback, email client opens pre-filled) → *ongoing use*
(feels heard, reaches out again next time something comes up).

### Ulwick outcome statements

1. Minimize the time it takes a visitor to locate a way to send feedback, when
   they form an opinion while browsing any page (target: findable in one glance,
   no scrolling required).
2. Minimize the number of steps between wanting to give feedback and a ready-to-
   send message, when a visitor decides to reach out (target: one click to a
   pre-addressed, pre-subjected email).
3. Minimize the likelihood that feedback lands in the wrong place or is lost,
   when a visitor sends it (target: every submission arrives at the organizers'
   monitored inbox).
4. Minimize the effort it takes an organizer to receive and triage feedback,
   when keeping the static site current (target: zero new tooling — feedback
   arrives as ordinary, consistently-subjected email).
5. Minimize the likelihood that a visitor abandons the attempt because the
   channel feels heavyweight or ambiguous, when they are on the fence about
   reaching out (target: no form, no login, informal tone signalled by the
   pre-filled subject).
6. Minimize the likelihood that the feedback affordance looks or behaves
   differently across pages, when a visitor moves through the site (target:
   identical chrome and behavior on every page).

### Success signals

- Organizers receive occasional, correctly-subjected "Site feedback" emails —
  qualitative evidence the channel works and is discoverable.
- No regression to the primary PRD metric (repeat visits) — the button is
  additive and unobtrusive.
- Consistent presence and appearance across all pages (no per-page drift).

### Scope / non-goals

**In scope**
- A single, persistent "Feedback" call-to-action present on every page, using the
  shared header/footer chrome and the existing `.btn` component styling.
- A `mailto:hello@sdccug.example?subject=Site%20feedback` link — matching the
  site's established mailto pattern (the existing RSVP / "Get meetup updates"
  CTAs) and the static-only constraint.
- Semantic, accessible markup: keyboard-reachable, WCAG AA contrast, identical
  across pages.

**Non-goals (v1)**
- No backend, no form POST, no serverless endpoint, no stored data — the site is
  fully static per CLAUDE.md and the foundational-frontend-stack ADR.
- No embedded form, no third-party feedback widget or tracking.
- No categorization, ratings, or per-page feedback context in v1.
- Final placement (footer vs. persistent floating vs. header) is a spec-phase
  decision, not settled here.

### Open questions (non-blocking — resolve in spec)

- **Placement:** persistent footer CTA (matches existing chrome, lowest risk) vs.
  a floating always-visible button (more discoverable, more novel styling). Intent
  is "persistent"; both satisfy it. Recommend footer-anchored for chrome
  consistency unless the spec prioritizes glance-findability.
- **Prefilled body:** whether to include a short `&body=` template (e.g., "Page:
  / What happened:"). Low cost; deferred to spec.
- **Destination address:** `hello@sdccug.example` is a placeholder consistent with
  the site's other mailto links; swap for the real inbox when known.
