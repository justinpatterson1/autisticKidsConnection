# Current Feature

## Status

Not Started

## Goals

<!-- Goals will be populated when a feature is loaded -->

## Notes

<!-- Notes will be populated when a feature is loaded -->

## History

- **00 · Brand Stripe + Header / Navigation** (2026-10-03) — Six-colour brand stripe and transparent header over the hero; inline nav ≥1180px with active underline + `aria-current`, phone block ≥1480px, Register Now pill; mobile Menu/Close drop-down (closes on link select / Escape); skip link, #F5B020 focus ring, reduced motion. Added design-system tokens and `nav`/`wide` breakpoints to `globals.css`, Poppins via `next/font`, `NAV_ITEMS` in `src/lib/content/navigation.ts`. Follow-ups: `public/assets/akc-mark.png` still missing; focus-ring contrast on the white drop-down, cramped brand block at 1180–1479px, menu stays open across resize.
- **01 · Hero** (2026-10-03) — Full-bleed `#main` hero with photo + navy overlay, "Now registering" badge, verbatim H1 and lead, "Register Now →" (#contact) and ghost "Programs & Fees" (#fees) CTAs, room for the overlapping info strip. Copy in `src/lib/content/hero.ts`. Overlay strengthened (`.7` at 58%, plus flat `.62` layer below 1180px) so the lead is ≥4.5:1 at every width (min 5.38:1 measured); H1 drops to 34px below 360px to avoid overflow at 320px; design-system.md updated. Follow-ups: replace Unsplash stand-in `public/images/hero-placeholder.jpg` with a real AKC photo and re-check contrast; `transition-colors` fades the focus ring in (header too); `pt-[calc(97px+…)]` hardcodes header height.
- **02 · Key Info Strip** (2026-10-04) — White card overlapping the hero by `clamp(64px, 7vw, 100px)` with School hours (8:30 AM – 2:30 PM), Early drop-off (From 7:30 AM) and Find us (Curepe, Trinidad & Tobago); 56px tint-strong icon circles with decorative clock/sunrise/pin line icons; items `flex: 1 1 260px` with 1px dividers, stacking on mobile; visually hidden "Key information" heading. Content in `src/lib/content/key-info.ts`; `--shadow-raised` token added. Measured ≥66px clearance from hero CTAs at every width, no horizontal scroll 320–1920px. Follow-ups: raw NBSP characters in `key-info.ts` should be written as `\u00a0` escapes; label→value `mt-0.5` (2px) is off the spacing scale.
- **03 · Who We Support** (2026-10-04) — `#about` two-column split (auto-fit, min 440px): 4:5 main photo with overlapping 1:1 inset (52%, 8px white border, raised shadow) left; eyebrow, H2 "A smaller, more individualized place to learn", body, tint callout "…different does not mean less." and navy "Explore our services →" (#services) right. Below 640px the inset hides and the main photo goes 4:3. Added shared ui primitives `Eyebrow`, `ButtonLink` (primary/secondary; transitions background only, so the focus ring appears instantly) and `Callout` in `src/components/ui/`; copy in `src/lib/content/who-we-support.ts`. Follow-ups: replace Unsplash stand-ins `about-main-placeholder.jpg` / `about-inset-placeholder.jpg` with real AKC photos (brief: educator with child and workbook); inset covers part of the main photo's subject at desktop; collage centred over left-aligned text when stacked (640–1180px); migrate header/hero buttons to `ButtonLink` to fix their focus-ring fade.
- **04 · Our Approach** (2026-10-05) — `#approach` tint section: eyebrow "Our approach" + H2 "Every child is different." left, intro (max 460px) right; "Our learning environment combines:" label naming a `ul` of nine verbatim checklist tiles (white, radius 14, 26px solid check) in an auto-fit grid (min 300px, gap 12) reflowing 3 → 2 → 1 at ~1024 / 768 / ≤640px with no overflow; navy quote block "connection comes before correction…" (no attribution). Added shared ui primitives `SectionHeading` (now also used by Who We Support), `CheckMark` and `QuoteBlock`; copy in `src/lib/content/our-approach.ts`. Follow-ups: hyphenated items break at the hyphen at 320px; `QuoteBlock`'s `figure` has no caption; `SectionHeading` leaves a trailing space in `className`.
