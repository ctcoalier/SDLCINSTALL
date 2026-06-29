---
type: prd
lifecycle_state: analyzed
last_action: analyze
last_action_date: 2026-06-23
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
