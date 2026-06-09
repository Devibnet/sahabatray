# Cerita.In

Static HTML/CSS/JS site — no build tools, no package manager, no server.

## Content

All page data (counselors, articles, quotes) is hardcoded in `scripts.js` as plain JS arrays (`konselors`, `artikels`, `quotes`). To add/change content, edit those arrays. Images live in `Foto/` and are referenced by filename from the JS.

## Development

Open any `.html` file directly in a browser — no dev server needed. All styling is in `styles.css`, all logic in `scripts.js`.

## Language

All UI text and code identifiers use **Indonesian** (bahasa Indonesia).

## Architecture

- **5 pages**: `index.html` (home), `konselor.html` (counselor list), `profil-konselor.html` (counselor detail + contact form), `artikel.html` (articles), `quotes.html` (quotes)
- State between `konselor.html` → `profil-konselor.html` is passed via `localStorage` + URL query param (`?id=`)
- Counselor profile page (`profil-konselor.html`) renders a 2-column layout: profile card + contact form. Form submission calls `kirimWA()` which opens WhatsApp with a pre-filled message.
- External deps: Font Awesome 6.4.0 (CDN), Google Fonts Space Grotesk + Inter (CDN) — both loaded via `<link>` in HTML
- No testing, no linting, no CI

## Conventions

- CSS uses `--var` custom properties for colors/spacing/radius/shadow
- JS uses a `$()` shorthand for `document.getElementById`
- Scroll reveal: add `.reveal` / `.reveal-left` / `.reveal-right` / `.reveal-scale` / `.stagger` classes (JS uses IntersectionObserver)
- Counter animation: add `data-target="N"` attribute to element
- Particle system: add `<canvas id="particle-canvas">` to page (only on `index.html`)
- All images use `loading="lazy"`
