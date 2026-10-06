# Current Feature: Our Services

## Status

In Progress

## Goals

- `#services` section on white, labelled by its H2 (`aria-labelledby`)
- Centred eyebrow "Our services" with rules on both sides; centred H2 "Support shaped around each child"
- Row 1: four photo cards — 4 cols ≥1100px, 2 cols ≥600px, 1 col below; never an orphan
  - Each: white, radius 20px, hairline ring (`0 0 0 1px #E0E8EF`), 4:3 candid photo, padding 26/30, H3 20px/600, body 15px muted
  - Hover: lift `translateY(-4px)` + card-hover shadow (`0 24px 48px -24px rgba(28,50,84,.3)` + hairline), `.25s`; no lift under reduced motion
  - "One-on-One Tutoring" — "Individual attention designed around your child's learning needs and goals."
  - "Small-Group Learning" — "A supportive classroom environment that allows children to learn alongside peers while receiving individualized guidance."
  - "Life Skills" — "Developing practical skills that encourage independence, confidence and participation in everyday life."
  - "Sensory Play & Movement" — "Activities designed to support regulation, body awareness, coordination and engagement."
- Row 2: three sand (`#F7F5F1`) icon cards (radius 20px, padding 32px, 60px solid blue icon circle with white line icon, H3 20px, body 15px); no emoji
  - "Music Program" (music note) — "Our music program gives children opportunities to explore rhythm, sound, movement and self-expression in a fun and supportive environment."
  - "Physical Education" (ball) — "Our Physical Education program encourages children to move, play and develop their physical abilities in a supportive environment."
  - "Birthday Club" (cake) — "We believe every child deserves to feel celebrated and included." + "Our Birthday Club gives us an opportunity to recognize and celebrate our children's special days together, creating positive memories and strengthening our AKC community."
- Copy verbatim; descriptive alt text on all four photos; icons decorative
- No orphan card at any breakpoint (both rows)
- WCAG AA contrast, #F5B020 focus ring, reduced-motion respected
- Responsive 320px–1920px with no horizontal scroll

## Notes

- Spec: `context/features/05-our-services.md` — Section 5 of 16; anchor `#services` (header nav "Services" and the Who We Support CTA already link here)
- Background rhythm: follows tint "Our approach", so white here is correct
- Reuse `Eyebrow` and `SectionHeading`. Eyebrow needs a centred variant with rules on both sides (design system §3: "centred variants have rules on both sides")
- Breakpoints 1100px / 600px are section-specific (design system §4 "Services grid") — use arbitrary `min-[1100px]:` / `min-[600px]:` variants or register named screens; don't use auto-fit here because the spec fixes the column counts
- Row 2 orphan risk: three cards at two columns leaves one orphan — row 2 should go straight 3 → 1 (e.g. 3 cols ≥900px-ish, else 1), or span the last card full width at 2 cols
- Cards aren't links (no destinations given), so hover lift is decorative only — no focusable elements; don't wrap in `<a>`. Hover transitions: `transform`/`box-shadow` `.25s`, disabled by the global reduced-motion rule
- Photos: four needed, none exist yet — Unsplash stand-ins marked `[Placeholder]` unless real AKC photos are supplied; follow photography rules (candid, natural light, no children staring at camera, no medical settings, no puzzle pieces); avoid visible signage/place names
- Icons: line icons, 24×24 viewBox, stroke 1.6–1.8, round caps/joins, white stroke on the solid primary circle; add music-note, ball and cake to `src/components/icons/`
- Birthday Club has two paragraphs — render as two `<p>`s
- Card headings are H3 under the section H2

## History

- **00 · Brand Stripe + Header / Navigation** (2026-10-03) — Six-colour brand stripe and transparent header over the hero; inline nav ≥1180px with active underline + `aria-current`, phone block ≥1480px, Register Now pill; mobile Menu/Close drop-down (closes on link select / Escape); skip link, #F5B020 focus ring, reduced motion. Added design-system tokens and `nav`/`wide` breakpoints to `globals.css`, Poppins via `next/font`, `NAV_ITEMS` in `src/lib/content/navigation.ts`. Follow-ups: `public/assets/akc-mark.png` still missing; focus-ring contrast on the white drop-down, cramped brand block at 1180–1479px, menu stays open across resize.
- **01 · Hero** (2026-10-03) — Full-bleed `#main` hero with photo + navy overlay, "Now registering" badge, verbatim H1 and lead, "Register Now →" (#contact) and ghost "Programs & Fees" (#fees) CTAs, room for the overlapping info strip. Copy in `src/lib/content/hero.ts`. Overlay strengthened (`.7` at 58%, plus flat `.62` layer below 1180px) so the lead is ≥4.5:1 at every width (min 5.38:1 measured); H1 drops to 34px below 360px to avoid overflow at 320px; design-system.md updated. Follow-ups: replace Unsplash stand-in `public/images/hero-placeholder.jpg` with a real AKC photo and re-check contrast; `transition-colors` fades the focus ring in (header too); `pt-[calc(97px+…)]` hardcodes header height.
- **02 · Key Info Strip** (2026-10-04) — White card overlapping the hero by `clamp(64px, 7vw, 100px)` with School hours (8:30 AM – 2:30 PM), Early drop-off (From 7:30 AM) and Find us (Curepe, Trinidad & Tobago); 56px tint-strong icon circles with decorative clock/sunrise/pin line icons; items `flex: 1 1 260px` with 1px dividers, stacking on mobile; visually hidden "Key information" heading. Content in `src/lib/content/key-info.ts`; `--shadow-raised` token added. Measured ≥66px clearance from hero CTAs at every width, no horizontal scroll 320–1920px. Follow-ups: raw NBSP characters in `key-info.ts` should be written as `\u00a0` escapes; label→value `mt-0.5` (2px) is off the spacing scale.
- **03 · Who We Support** (2026-10-04) — `#about` two-column split (auto-fit, min 440px): 4:5 main photo with overlapping 1:1 inset (52%, 8px white border, raised shadow) left; eyebrow, H2 "A smaller, more individualized place to learn", body, tint callout "…different does not mean less." and navy "Explore our services →" (#services) right. Below 640px the inset hides and the main photo goes 4:3. Added shared ui primitives `Eyebrow`, `ButtonLink` (primary/secondary; transitions background only, so the focus ring appears instantly) and `Callout` in `src/components/ui/`; copy in `src/lib/content/who-we-support.ts`. Follow-ups: replace Unsplash stand-ins `about-main-placeholder.jpg` / `about-inset-placeholder.jpg` with real AKC photos (brief: educator with child and workbook); inset covers part of the main photo's subject at desktop; collage centred over left-aligned text when stacked (640–1180px); migrate header/hero buttons to `ButtonLink` to fix their focus-ring fade.
- **04 · Our Approach** (2026-10-05) — `#approach` tint section: eyebrow "Our approach" + H2 "Every child is different." left, intro (max 460px) right; "Our learning environment combines:" label naming a `ul` of nine verbatim checklist tiles (white, radius 14, 26px solid check) in an auto-fit grid (min 300px, gap 12) reflowing 3 → 2 → 1 at ~1024 / 768 / ≤640px with no overflow; navy quote block "connection comes before correction…" (no attribution). Added shared ui primitives `SectionHeading` (now also used by Who We Support), `CheckMark` and `QuoteBlock`; copy in `src/lib/content/our-approach.ts`. Follow-ups: hyphenated items break at the hyphen at 320px; `QuoteBlock`'s `figure` has no caption; `SectionHeading` leaves a trailing space in `className`.
