# Current Feature: Who We Support

## Status

In Progress

## Goals

- `#about` section on white, labelled by its H2 (`aria-labelledby`)
- Two-column split using `repeat(auto-fit, minmax(min(100%, 440px), 1fr))`: photo collage left, copy right; stacks on mobile
- Collage: 4:5 photo (educator with child and workbook), radius 20px, with a second 1:1 photo overlapping its bottom-right corner (52% width, 8px white border, soft shadow); simplifies cleanly on mobile
- Eyebrow "Who we support" (15px/600 primary, preceded by 28×2px primary bar)
- H2 verbatim: "A smaller, more individualized place to learn" — `clamp(30px, 3.4vw, 46px)`, 700, 1.15, -0.02em, balanced
- Body verbatim: "AKC provides support for children who may benefit from a smaller, more individualized learning environment, including children with autism and other developmental or learning differences."
- Tint callout (radius 16px, padding 24/28, 18–21px/600 navy) verbatim: "We recognize that children develop at different rates—and different does not mean less."
- Navy pill button "Explore our services →" → `#services` (hover #1A6E99, arrow `aria-hidden`, ≥48px tall)
- Descriptive alt text on both photos
- WCAG AA contrast, #F5B020 focus ring, reduced-motion respected
- Responsive 320px–1920px with no horizontal scroll

## Notes

- Spec: `context/features/03-who-we-support.md` — Section 3 of 16; anchor `#about` (header nav "About" already links here)
- First standard content section: section padding `clamp(80px, 10vw, 120px)` vertical, container max-width 1200px, gutters `clamp(20px, 4vw, 48px)`, two-column gap 40–88px. It follows the key info strip, which overlaps the hero — check spacing between the strip and this section
- Eyebrow, callout and secondary (navy) button are design-system components (§6) that later sections reuse — consider small shared primitives in `src/components/ui/` (Eyebrow, Button) rather than one-off markup
- Photos: two images needed and none exist yet in `public/images/`. Design system: candid, natural light, educators at eye level, no children staring at camera, no medical settings, no puzzle pieces; current images are Unsplash stand-ins to be replaced with real AKC photos (with consent). Mark stand-ins `[Placeholder]`
- "Simplifies cleanly on mobile": below the split, consider dropping or reducing the overlap so the inset photo doesn't crowd or overflow at 320px
- Callout copy uses an em dash with no spaces ("rates—and") — keep verbatim
- Child-first, non-deficit language; do not alter copy

## History

- **00 · Brand Stripe + Header / Navigation** (2026-10-03) — Six-colour brand stripe and transparent header over the hero; inline nav ≥1180px with active underline + `aria-current`, phone block ≥1480px, Register Now pill; mobile Menu/Close drop-down (closes on link select / Escape); skip link, #F5B020 focus ring, reduced motion. Added design-system tokens and `nav`/`wide` breakpoints to `globals.css`, Poppins via `next/font`, `NAV_ITEMS` in `src/lib/content/navigation.ts`. Follow-ups: `public/assets/akc-mark.png` still missing; focus-ring contrast on the white drop-down, cramped brand block at 1180–1479px, menu stays open across resize.
- **01 · Hero** (2026-10-03) — Full-bleed `#main` hero with photo + navy overlay, "Now registering" badge, verbatim H1 and lead, "Register Now →" (#contact) and ghost "Programs & Fees" (#fees) CTAs, room for the overlapping info strip. Copy in `src/lib/content/hero.ts`. Overlay strengthened (`.7` at 58%, plus flat `.62` layer below 1180px) so the lead is ≥4.5:1 at every width (min 5.38:1 measured); H1 drops to 34px below 360px to avoid overflow at 320px; design-system.md updated. Follow-ups: replace Unsplash stand-in `public/images/hero-placeholder.jpg` with a real AKC photo and re-check contrast; `transition-colors` fades the focus ring in (header too); `pt-[calc(97px+…)]` hardcodes header height.
- **02 · Key Info Strip** (2026-10-04) — White card overlapping the hero by `clamp(64px, 7vw, 100px)` with School hours (8:30 AM – 2:30 PM), Early drop-off (From 7:30 AM) and Find us (Curepe, Trinidad & Tobago); 56px tint-strong icon circles with decorative clock/sunrise/pin line icons; items `flex: 1 1 260px` with 1px dividers, stacking on mobile; visually hidden "Key information" heading. Content in `src/lib/content/key-info.ts`; `--shadow-raised` token added. Measured ≥66px clearance from hero CTAs at every width, no horizontal scroll 320–1920px. Follow-ups: raw NBSP characters in `key-info.ts` should be written as `\u00a0` escapes; label→value `mt-0.5` (2px) is off the spacing scale.
