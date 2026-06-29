# San Diego Claude Code Users Group (CCUG) Website

A simple, static website for the San Diego Claude Code Users Group. Three pages —
**Home**, **Claude News**, and **Dev Guides** — built as plain HTML + CSS with no
framework and no build step.

## View the site

Just open the files in a browser:

```
src/index.html
```

Double-click it, or drag it into a browser tab. No server, install, or build is
required. To serve it over HTTP (optional), any static file server works, e.g.:

```
# from the repo root
python -m http.server 8000 --directory src
# then visit http://localhost:8000
```

## File layout

```
src/
  index.html          # Home
  news.html           # Claude News
  guides.html         # Dev Guides
  assets/
    styles.css        # shared stylesheet (all design tokens + components)
```

## Editing content (for organizers)

Everything is hand-authored HTML — no special tools needed.

- **Add a news entry:** open `src/news.html`, copy an existing
  `<article class="news-item">…</article>` block to the top of the
  `<div class="news-list">`, and edit the `<time>`, heading, summary, and source
  link. Newest entries go first.
- **Add a guide:** open `src/guides.html`, copy a
  `<article class="guide">…</article>` card, give it a unique `id`, and edit the
  title, blurb, and the `<ol>` steps.
- **Update meeting details:** the placeholder cadence/venue appears in the
  footer of all three pages and in the "Next meetup" strip on `index.html`.
  Search for "third Thursday" and the `hello@sdccug.example` address and replace
  with your real details.
- **Tweak the look:** all colors, type sizes, and spacing live as CSS custom
  properties at the top of `src/assets/styles.css` (the `:root` block). Change a
  token there and it updates everywhere.

## Design & decisions

- PRD: `docs/product/ccug-website/prd.md`
- Spec: `docs/superpowers/specs/2026-06-24-ccug-website-static-site.md`
- Stack ADR (why plain static HTML): `docs/architecture/adr/2026-06-24-foundational-frontend-stack.md`

The visual style is an original coastal treatment inspired by sandiego.org; no
San Diego Tourism Authority logos or imagery are used.
