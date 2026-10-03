# Current Feature: Hero

## Status

In Progress

## Goals

- Full-bleed hero (`#main`), min-height `clamp(640px, 90vh, 880px)`, sitting under the transparent header
- Candid photo of an educator engaging with a child in warm natural light, `object-position: center 35%`, descriptive alt text (not posed)
- Overlay `linear-gradient(90deg, rgba(18,34,62,.9) 0%, rgba(18,34,62,.66) 48%, rgba(18,34,62,.15) 100%)` keeps text ≥4.5:1 across the photo
- Left-aligned content, max-width 760px
- "Now registering" pill badge (#8DCBEB bg, navy 14px/600 text, 8px navy dot, padding 6px 14px) — easy to edit or remove
- H1 verbatim: "Understanding Differences. Building Confidence. Creating Possibilities." — `clamp(38px, 5.4vw, 70px)`, 700, line-height 1.08, -0.025em, `text-wrap: balance`, readable at 320px without overflow
- Lead verbatim: "At Autistic Kids Connection (AKC), we believe every child deserves an environment where they feel safe, understood, accepted and capable of learning." — `clamp(18px, 1.5vw, 20px)`, #E3EBF3, line-height 1.65, measure ≤36em
- Primary CTA "Register Now →" → `#contact` (arrow `aria-hidden`); ghost CTA "Programs & Fees" → `#fees` (1.5px rgba(255,255,255,.7) border, hover rgba(255,255,255,.12)); both ≥48px tall
- ~130–180px bottom padding leaving room for the overlapping info strip (feature 02)
- Section `aria-labelledby` its heading; WCAG AA contrast, #F5B020 focus ring, reduced-motion respected
- Responsive 320px–1920px with no horizontal scroll

## Notes

- Spec: `context/features/01-hero.md` — Section 1 of 16; anchor `#main` (skip link and Home nav already target it)
- Replaces the navy placeholder `<main id="main">` in `src/app/page.tsx` added by feature 00
- Header is `absolute` over the top of the page, so hero content needs top padding to clear the 5px stripe + 92px bar
- Photo: design system says current images are Unsplash stand-ins to be replaced with real AKC photos (with consent); no children staring at camera, no medical settings, no puzzle-piece imagery. No hero photo exists in `public/` yet — source/decide before building
- Buttons per design system §6: primary bg #1A6E99 → hover #135678, 600 weight, radius 999, min-height 52–58px, padding 0 26–30px; transitions `background .2s`
- Use `next/image` (`preload` replaces deprecated `priority` in Next 16) for the LCP hero photo
- Use supplied copy verbatim; do not invent facts

## History

- **00 · Brand Stripe + Header / Navigation** (2026-10-03) — Six-colour brand stripe and transparent header over the hero; inline nav ≥1180px with active underline + `aria-current`, phone block ≥1480px, Register Now pill; mobile Menu/Close drop-down (closes on link select / Escape); skip link, #F5B020 focus ring, reduced motion. Added design-system tokens and `nav`/`wide` breakpoints to `globals.css`, Poppins via `next/font`, `NAV_ITEMS` in `src/lib/content/navigation.ts`. Follow-ups: `public/assets/akc-mark.png` still missing; focus-ring contrast on the white drop-down, cramped brand block at 1180–1479px, menu stays open across resize.
