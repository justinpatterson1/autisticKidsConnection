# Current Feature: Key Info Strip

## Status

In Progress

## Goals

- White card (max-width 1200px, radius 20px, raised shadow `0 24px 60px -24px rgba(28,50,84,.35)`) pulled up to overlap the hero bottom by `clamp(64px, 7vw, 100px)`
- Three equal items separated by 1px gaps (container bg `#E3EAF0` / `border-soft`), each `flex: 1 1 260px`
- Each item: 56px `#E4F1F9` (`tint-strong`) icon circle with a blue (`#1A6E99`) line icon, small label (14px `#4A5A72`) and value (18px/600 navy)
- Copy verbatim: "School hours" / "8:30 AM – 2:30 PM" (clock); "Early drop-off" / "From 7:30 AM" (sunrise); "Find us" / "Curepe, Trinidad & Tobago" (pin)
- Icons decorative (`aria-hidden`)
- Items wrap and stack on mobile (mobile is not a shrunken desktop)
- No overlap with hero text at any width
- Semantic HTML; WCAG AA contrast, #F5B020 focus ring, reduced-motion respected
- Responsive 320px–1920px with no horizontal scroll

## Notes

- Spec: `context/features/02-key-info-strip.md` — Section 2 of 16; no anchor
- Hero (01) already reserves `clamp(130px, 14vw, 180px)` bottom padding for this strip — verify the overlap never reaches the hero buttons, especially at 320px where items stack and the card is tallest
- Global prefix asks for the section to be `aria-labelledby` its heading, but the spec shows no visible heading — needs a visually hidden heading or an `aria-label`
- Icons per design system §6: line icons, 24×24 viewBox, stroke-width 1.6–1.8, round caps/joins; light circle variant (`#E4F1F9` circle, `#1A6E99` stroke). Existing icon pattern: `src/components/icons/phone-icon.tsx`
- Values are confirmed facts (hours 8:30 AM – 2:30 PM, drop-off from 7:30 AM) — use verbatim, en dash in the time range
- Content goes in `src/lib/content/`; section is static, so a server component

## History

- **00 · Brand Stripe + Header / Navigation** (2026-10-03) — Six-colour brand stripe and transparent header over the hero; inline nav ≥1180px with active underline + `aria-current`, phone block ≥1480px, Register Now pill; mobile Menu/Close drop-down (closes on link select / Escape); skip link, #F5B020 focus ring, reduced motion. Added design-system tokens and `nav`/`wide` breakpoints to `globals.css`, Poppins via `next/font`, `NAV_ITEMS` in `src/lib/content/navigation.ts`. Follow-ups: `public/assets/akc-mark.png` still missing; focus-ring contrast on the white drop-down, cramped brand block at 1180–1479px, menu stays open across resize.
- **01 · Hero** (2026-10-03) — Full-bleed `#main` hero with photo + navy overlay, "Now registering" badge, verbatim H1 and lead, "Register Now →" (#contact) and ghost "Programs & Fees" (#fees) CTAs, room for the overlapping info strip. Copy in `src/lib/content/hero.ts`. Overlay strengthened (`.7` at 58%, plus flat `.62` layer below 1180px) so the lead is ≥4.5:1 at every width (min 5.38:1 measured); H1 drops to 34px below 360px to avoid overflow at 320px; design-system.md updated. Follow-ups: replace Unsplash stand-in `public/images/hero-placeholder.jpg` with a real AKC photo and re-check contrast; `transition-colors` fades the focus ring in (header too); `pt-[calc(97px+…)]` hardcodes header height.
