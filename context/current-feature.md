# Current Feature: Brand Stripe + Header / Navigation

## Status

In Progress

## Goals

- Six-colour 5px brand stripe at the very top (#E2483A, #F08A24, #F5B020, #3E9A5A, #2E8FC7, #6A4BA8, equal segments)
- Header sits transparently over the full-bleed hero photo; nav bar min-height 92px, max-width 1320px, 1px rgba(255,255,255,.18) bottom border
- Transparent AKC mark (`assets/akc-mark.png`, 84×56px, meaningful alt text) with "Autistic Kids Connection" (18px/700 white) and "Homeschooling • Tutoring • Developmental Support" (12px/500 #ABDAF2) set in type
- Inline links ≥1180px: Home, About, Our Approach, Services, Families, Fees, Contact — 15px/500 white, hover #ABDAF2
- Active link shows 2px #8DCBEB underline and `aria-current="page"`
- Phone block ("Call us" / "371-7281", tel link, line phone icon) shown ≥1480px
- Pill "Register Now" button (#1A6E99, hover #135678, 52px) shown ≥1180px
- Below 1180px: "Menu"/"Close" pill toggle with `aria-expanded`/`aria-controls`, opening a white drop-down with 17px hairline-separated links and a full-width "Register Now" button
- Selecting a mobile menu link closes the menu
- Skip-to-content link is the first focusable element
- All links reachable by keyboard in logical order
- Works from 320px to 1920px with no horizontal scroll
- WCAG AA contrast, visible focus ring #F5B020, reduced-motion respected

## Notes

- Spec: `context/features/00-header-navigation.md` — Section 0 of 16 of the AKC homepage
- Design reference: `AKC Homepage v4.dc.html`; styles per `context/DESIGN-SYSTEM.md`
- Global rules: Poppins type, primary blue #1A6E99, navy #1C3254, tint #EEF5FA, sand #F7F5F1; logo accent colours only where specified; Clean Corporate-Empathy style
- 44px+ touch targets, semantic HTML, section `aria-labelledby` its heading
- Mobile is not a shrunken desktop; use supplied copy verbatim; do not invent facts, stats, staff or testimonials
- Implementation goes in `src/` (components in `src/components/`, content constants in `src/lib/content/`)
- This Next.js version has breaking changes — read `node_modules/next/dist/docs/` before writing code

## History
