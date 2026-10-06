# Current Feature: Our Goal

## Status

In Progress

## Goals

- Full-width navy (`#1C3254`) band with a classroom photo behind at ≤12% opacity; section labelled by its H2 (`aria-labelledby`)
- Centred content: eyebrow "Our goal" in sky-light (`#ABDAF2`); H2 "Our goal is not simply to help children complete schoolwork." in white; line "We want to help children become more:" in `#CAD6E4`
- Wrapping row of five transparent pills — uppercase, 600, white, 0.08em tracking, `clamp(15px, 1.4vw, 18px)` — each with a 2px border in one logo colour:
  - CONFIDENT (`#E2483A`)
  - INDEPENDENT (`#F08A24`)
  - COMMUNICATIVE (`#F5B020`)
  - CAPABLE (`#3E9A5A`)
  - CONNECTED (`#2E8FC7`)
- Centred paragraph (max-width 44em) verbatim: "We celebrate progress, whether it is a first word, a new skill, completing an activity independently, making a friend, learning to write a name, or simply feeling comfortable enough to participate."
- White text ≥4.5:1 on navy; photo never lowers body-text contrast
- Pills wrap neatly on mobile
- WCAG AA contrast, #F5B020 focus ring, reduced-motion respected
- Responsive 320px–1920px with no horizontal scroll

## Notes

- Spec: `context/features/06-our-goal.md` — Section 6 of 16; no anchor
- Background rhythm: follows white "Our services"; this is the navy band in the design-system rhythm (White → Tint → White → Navy → White …)
- Accent colours are approved here only as pill borders (design system §2 "Goal pill border") — never as text or fills
- Photo: decorative (`alt=""`, `aria-hidden`), ≤12% opacity over navy so text contrast stays ~12:1+; verify measured contrast with the photo present. Needs a classroom stand-in (Unsplash `[Placeholder]`) — could reuse an existing classroom image from `public/images/` rather than adding another
- Eyebrow here is on dark: sky-light text and rule — the shared `Eyebrow` is primary-coloured, so it needs a dark/on-navy variant; centred variant (rules both sides) already exists
- `SectionHeading` is navy text — needs a white/on-dark option
- Pills: the words should read naturally to screen readers; uppercase via CSS (`uppercase`) with source text in sentence case ("Confident") avoids screen readers spelling them out. Render as a `ul`/`li` list continuing "We want to help children become more:"
- Pill text 15–18px uppercase is "large-ish" but not large text by WCAG — white on navy is ~12.9:1 so fine; borders are decorative
- Paragraph text colour not specified — `#CAD6E4` (text-on-dark-muted, ~9:1 on navy) fits the design system

## History

- **00 · Brand Stripe + Header / Navigation** (2026-10-03) — Six-colour brand stripe and transparent header over the hero; inline nav ≥1180px with active underline + `aria-current`, phone block ≥1480px, Register Now pill; mobile Menu/Close drop-down (closes on link select / Escape); skip link, #F5B020 focus ring, reduced motion. Added design-system tokens and `nav`/`wide` breakpoints to `globals.css`, Poppins via `next/font`, `NAV_ITEMS` in `src/lib/content/navigation.ts`. Follow-ups: `public/assets/akc-mark.png` still missing; focus-ring contrast on the white drop-down, cramped brand block at 1180–1479px, menu stays open across resize.
- **01 · Hero** (2026-10-03) — Full-bleed `#main` hero with photo + navy overlay, "Now registering" badge, verbatim H1 and lead, "Register Now →" (#contact) and ghost "Programs & Fees" (#fees) CTAs, room for the overlapping info strip. Copy in `src/lib/content/hero.ts`. Overlay strengthened (`.7` at 58%, plus flat `.62` layer below 1180px) so the lead is ≥4.5:1 at every width (min 5.38:1 measured); H1 drops to 34px below 360px to avoid overflow at 320px; design-system.md updated. Follow-ups: replace Unsplash stand-in `public/images/hero-placeholder.jpg` with a real AKC photo and re-check contrast; `transition-colors` fades the focus ring in (header too); `pt-[calc(97px+…)]` hardcodes header height.
- **02 · Key Info Strip** (2026-10-04) — White card overlapping the hero by `clamp(64px, 7vw, 100px)` with School hours (8:30 AM – 2:30 PM), Early drop-off (From 7:30 AM) and Find us (Curepe, Trinidad & Tobago); 56px tint-strong icon circles with decorative clock/sunrise/pin line icons; items `flex: 1 1 260px` with 1px dividers, stacking on mobile; visually hidden "Key information" heading. Content in `src/lib/content/key-info.ts`; `--shadow-raised` token added. Measured ≥66px clearance from hero CTAs at every width, no horizontal scroll 320–1920px. Follow-ups: raw NBSP characters in `key-info.ts` should be written as `\u00a0` escapes; label→value `mt-0.5` (2px) is off the spacing scale.
- **03 · Who We Support** (2026-10-04) — `#about` two-column split (auto-fit, min 440px): 4:5 main photo with overlapping 1:1 inset (52%, 8px white border, raised shadow) left; eyebrow, H2 "A smaller, more individualized place to learn", body, tint callout "…different does not mean less." and navy "Explore our services →" (#services) right. Below 640px the inset hides and the main photo goes 4:3. Added shared ui primitives `Eyebrow`, `ButtonLink` (primary/secondary; transitions background only, so the focus ring appears instantly) and `Callout` in `src/components/ui/`; copy in `src/lib/content/who-we-support.ts`. Follow-ups: replace Unsplash stand-ins `about-main-placeholder.jpg` / `about-inset-placeholder.jpg` with real AKC photos (brief: educator with child and workbook); inset covers part of the main photo's subject at desktop; collage centred over left-aligned text when stacked (640–1180px); migrate header/hero buttons to `ButtonLink` to fix their focus-ring fade.
- **04 · Our Approach** (2026-10-05) — `#approach` tint section: eyebrow "Our approach" + H2 "Every child is different." left, intro (max 460px) right; "Our learning environment combines:" label naming a `ul` of nine verbatim checklist tiles (white, radius 14, 26px solid check) in an auto-fit grid (min 300px, gap 12) reflowing 3 → 2 → 1 at ~1024 / 768 / ≤640px with no overflow; navy quote block "connection comes before correction…" (no attribution). Added shared ui primitives `SectionHeading` (now also used by Who We Support), `CheckMark` and `QuoteBlock`; copy in `src/lib/content/our-approach.ts`. Follow-ups: hyphenated items break at the hyphen at 320px; `QuoteBlock`'s `figure` has no caption; `SectionHeading` leaves a trailing space in `className`.
- **05 · Our Services** (2026-10-06) — `#services` on white: centred eyebrow "Our services" (rules both sides) + H2 "Support shaped around each child"; row 1 four photo cards (One-on-One Tutoring, Small-Group Learning, Life Skills, Sensory Play & Movement — white, radius 20, hairline ring, 4:3 photo, H3 20px, body 15px) at 4/2/1 cols (≥1100/≥600px), hover lift −4px + card-hover shadow over .25s, no lift under reduced motion; row 2 three sand icon cards (Music Program, Physical Education, Birthday Club) with 60px solid blue icon circles, 3 cols ≥900px else 1, so no orphan at any width. Added music-note/ball/cake icons, `Eyebrow` `centered` variant, `--shadow-card` / `--shadow-card-hover` tokens; copy in `src/lib/content/services.ts`. Follow-ups: replace four Unsplash stand-ins `service-*-placeholder.jpg` with real AKC photos; shadow tokens repeat `#e0e8ef` instead of `var(--border)`; cards lift on hover but aren't links; `Eyebrow` reuses one rule element twice.
