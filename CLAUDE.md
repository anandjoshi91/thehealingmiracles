# The Healing Miracles - Website

## Overview
Static website for **The Healing Miracles** — a healing/reiki practice run by Parth Katira. No frameworks, no build tools — pure HTML, CSS, and vanilla JavaScript. Deployed via GitHub Pages with custom domain `thehealingmiracles.com`.

## Tech Stack
- **HTML5** — 7 pages (index, about, services, testimonials, resources, faq, contact)
- **CSS** — Single stylesheet `css/styles.css` using CSS custom properties for theming
- **JavaScript** — Vanilla JS in `js/main.js` (mobile menu, FAQ accordion, scroll animations, WhatsApp integration, daily affirmations)
- **Fonts** — Google Fonts CDN (Cormorant Garamond for headings, Nunito Sans for body)
- **Icons** — Font Awesome 6.5.1 CDN
- **Images** — Local images in `images/`, some Unsplash URLs used as placeholders

## Project Structure
```
index.html, about.html, services.html, testimonials.html, resources.html, faq.html, contact.html
css/styles.css          # All styles, CSS variables for theming
js/main.js              # All interactivity
images/                 # logo.jpeg, parth.jpeg
serve.sh                # Local dev server (Python/PHP)
CNAME                   # Custom domain for GitHub Pages
```

## Development

### Local Server
```bash
./serve.sh        # Starts on port 8000
./serve.sh 3000   # Custom port
```
Uses Python 3 `http.server` (falls back to Python 2 or PHP).

### Deployment
Push to `main` branch — GitHub Pages serves automatically. Custom domain configured via `CNAME` file.

## Key Design Decisions
- **No build step** — edit HTML/CSS/JS directly, deploy by pushing
- **WhatsApp-first** — all CTAs route to WhatsApp (+91 88069 12333) with prefilled messages; contact form also redirects to WhatsApp (no backend)
- **CSS variables** for theming: `--primary` (sage green #7C9A92), `--secondary` (lavender #B8A9C9), `--accent` (blush pink #E8B4BC), `--background` (warm white #F9F7F4)
- **Responsive breakpoints**: 1024px, 768px, 480px
- **Single CSS file, single JS file** — keep it simple

## Editing Guidelines
- All content is inline in HTML files — no templating
- Navigation is duplicated across all 7 pages — update all when changing nav
- Styles use BEM-like class naming
- JS initializes all features on DOMContentLoaded via individual `init*()` functions

## Status
Some content sections contain **placeholder/dummy data** that needs to be replaced with real content (e.g., Unsplash placeholder images, sample testimonials, resource articles).
