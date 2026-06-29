# Changelog

All notable changes to the San Diego CCUG website are documented here. The
format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added
- **Spec Driven Coding** page (`src/spec.html`) — a walkthrough of creating a
  feature with GitHub Spec Kit and the Superpowers plugin, shown in a styled
  Claude Code terminal plus a plain-English step list.
- "Spec Code" hero button on Home (right of "Browse Dev Guides") and a
  "Spec Driven Coding" item added to the primary nav and footer on all pages.
- Reusable pure-CSS `.terminal` component for code/terminal samples (no JS).
- ADR: render code/terminal samples with a pure-CSS `<pre>` component
  (no client-side syntax highlighter).
- Initial three-page static site for the San Diego Claude Code Users Group:
  Home, Claude News, and Dev Guides.
- Coastal visual design (ocean-blue + sandy-gold palette) with a single shared
  tokenized stylesheet and an original inline-SVG sun-and-waves logo.
- Claude News page with dated community-note entries.
- Dev Guides page with step-by-step how-tos (getting started, effective
  prompts, skills & slash commands, MCP, and a safe review-and-ship workflow).
- Organizer `README.md` documenting how to view and edit the site.
- Foundational frontend stack ADR (plain static HTML + CSS, no framework/build).
