# Proofhouse Labs — Marketing Site

A React + Vite single-page marketing site for Proofhouse Labs.

## Stack
- React 18 + Vite
- No external UI libraries — hand-built components and CSS
- Fonts: Fraunces (display), Inter (body), IBM Plex Mono (data/labels)

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build locally
```

## Structure

```
public/
  favicon.svg        Site icon (also used as brand mark)
  logo.svg            Full logo lockup (mark + wordmark)
  robots.txt          Search engine crawl rules
  sitemap.xml          Sitemap (update if you add routes/pages)
  site.webmanifest      PWA manifest
src/
  components/
    Nav.jsx           Sticky header + mobile menu
    Hero.jsx            Hero section with the certification-report visual
    Method.jsx            3-step process explanation
    Verifier.jsx           Technical deep-dive on the verifier
    ForWhom.jsx              Audience-fit section
    Pricing.jsx                Two pricing tiers (custom-quote model)
    FAQ.jsx                      Accordion FAQ (also mirrored in JSON-LD)
    Contact.jsx                    Lead-capture form
    Footer.jsx
  App.jsx             Page composition + shared button styles
  index.css              Design tokens (colors, type, spacing)
  main.jsx                 Entry point
index.html            All SEO meta tags + JSON-LD structured data live here
```

## SEO included

- Full meta tags: title, description, keywords, canonical, robots
- Open Graph + Twitter Card tags
- JSON-LD structured data: Organization, SoftwareApplication, FAQPage
- `robots.txt` + `sitemap.xml`
- Semantic HTML (single `h1`, proper heading hierarchy, `<nav>`, `<main>`, `<footer>`)
- Fast build (no heavy dependencies) — 175KB JS, gzipped ~53KB

## Before deploying

1. Swap `https://proofhouselabs.com` placeholders in `index.html`, `public/robots.txt`,
   and `public/sitemap.xml` for your real domain if different.
2. The contact form in `src/components/Contact.jsx` currently just shows a local
   success state — wire it to your form backend / email service / CRM of choice
   (e.g. a serverless function, Formspree, HubSpot form API).
3. Consider generating a raster `og-image.png` (1200×630) for platforms that don't
   render SVG in link previews (some do not); swap the `og:image` / `twitter:image`
   tags in `index.html` to point to it once you have one.
4. Deploy `dist/` to any static host (Vercel, Netlify, Cloudflare Pages, S3+CloudFront).

## Design notes

Visual direction: a "certification lab" aesthetic (ink-dark background, calibrated
lab-green accent, monospace data readouts, a seal/stamp mark) rather than a generic
AI-startup gradient look — deliberately chosen to match "Proofhouse" as a name and
the product's actual value prop (certified evidence, not hype).
# Proofhouselabs
