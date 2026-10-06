# Current Feature: Family & Community Support + Professional Collaboration

## Status

Complete

## Goals

- `#families` section on white, labelled by its H2 (`aria-labelledby`)
- Two-column split; image + card stack below the list on mobile
- Left column:
  - Eyebrow "Family & community support"
  - H2 "AKC is more than a learning environment."
  - Body "We believe in supporting the whole family."
  - Label "Our community initiatives include:" naming a divided list (hairline dividers, 10px blue dots), verbatim:
    - Parent counselling and support
    - Community fundraisers and family events
    - Parent education and workshops
    - Collaboration with professionals and specialists
    - Developmental support and referrals when needed
- Right column:
  - 16:10 photo (educator with group), descriptive alt text
  - Tint card titled "Professional collaboration" with a 56px solid blue circle + white people line icon (decorative)
  - Paragraph 1 verbatim with the partner name bold: "AKC collaborates with **Neuroness Child Psychology Clinic**, allowing families to access professional child psychology and evaluation services when appropriate."
  - Paragraph 2 verbatim: "We believe collaboration between educators, parents and professionals helps us better understand each child's individual needs and support their development."
- Partner name exact ("Neuroness Child Psychology Clinic"); "when appropriate" retained; no implied in-house clinical services
- WCAG AA contrast, #F5B020 focus ring, reduced-motion respected
- Responsive 320px–1920px with no horizontal scroll

## Notes

- Spec: `context/features/07-family-community.md` — Section 7 of 16; anchor `#families` (header nav "Families" already links here)
- Background rhythm: follows navy "Our goal" — white here is correct
- Reuse `Eyebrow`, `SectionHeading`; two-column split per design system §4 (`repeat(auto-fit, minmax(min(100%, 440px), 1fr))`, gap 40–88px) — same pattern as Who We Support
- Divided list: `ul` labelled by the "Our community initiatives include:" label (same pattern as Our Approach); dividers `border-tint` / `border` hairlines; dots decorative
- Card heading "Professional collaboration" is an H3 under the section H2; partner name as `<strong>` (meaningful emphasis); do not add a link to the clinic — no URL supplied, and don't invent one
- Card spec in design system is close to the Callout/Contact row family: tint bg, radius 16–20px; icon circle 56px solid primary with white stroke
- Photo: one needed (educator with a group). Unsplash stand-in `[Placeholder]` unless a real AKC photo is supplied — existing small-group stand-in is already used twice (services card + Our Goal backdrop), so source a different one; family image crop per design system §5 is 16:10
- Add a people/group line icon to `src/components/icons/`
- Copy uses British "counselling" — keep verbatim

## History

- **00 · Brand Stripe + Header / Navigation** (2026-10-03) — Six-colour brand stripe and transparent header over the hero; inline nav ≥1180px with active underline + `aria-current`, phone block ≥1480px, Register Now pill; mobile Menu/Close drop-down (closes on link select / Escape); skip link, #F5B020 focus ring, reduced motion. Added design-system tokens and `nav`/`wide` breakpoints to `globals.css`, Poppins via `next/font`, `NAV_ITEMS` in `src/lib/content/navigation.ts`. Follow-ups: `public/assets/akc-mark.png` still missing; focus-ring contrast on the white drop-down, cramped brand block at 1180–1479px, menu stays open across resize.
- **01 · Hero** (2026-10-03) — Full-bleed `#main` hero with photo + navy overlay, "Now registering" badge, verbatim H1 and lead, "Register Now →" (#contact) and ghost "Programs & Fees" (#fees) CTAs, room for the overlapping info strip. Copy in `src/lib/content/hero.ts`. Overlay strengthened (`.7` at 58%, plus flat `.62` layer below 1180px) so the lead is ≥4.5:1 at every width (min 5.38:1 measured); H1 drops to 34px below 360px to avoid overflow at 320px; design-system.md updated. Follow-ups: replace Unsplash stand-in `public/images/hero-placeholder.jpg` with a real AKC photo and re-check contrast; `transition-colors` fades the focus ring in (header too); `pt-[calc(97px+…)]` hardcodes header height.
- **02 · Key Info Strip** (2026-10-04) — White card overlapping the hero by `clamp(64px, 7vw, 100px)` with School hours (8:30 AM – 2:30 PM), Early drop-off (From 7:30 AM) and Find us (Curepe, Trinidad & Tobago); 56px tint-strong icon circles with decorative clock/sunrise/pin line icons; items `flex: 1 1 260px` with 1px dividers, stacking on mobile; visually hidden "Key information" heading. Content in `src/lib/content/key-info.ts`; `--shadow-raised` token added. Measured ≥66px clearance from hero CTAs at every width, no horizontal scroll 320–1920px. Follow-ups: raw NBSP characters in `key-info.ts` should be written as `\u00a0` escapes; label→value `mt-0.5` (2px) is off the spacing scale.
- **03 · Who We Support** (2026-10-04) — `#about` two-column split (auto-fit, min 440px): 4:5 main photo with overlapping 1:1 inset (52%, 8px white border, raised shadow) left; eyebrow, H2 "A smaller, more individualized place to learn", body, tint callout "…different does not mean less." and navy "Explore our services →" (#services) right. Below 640px the inset hides and the main photo goes 4:3. Added shared ui primitives `Eyebrow`, `ButtonLink` (primary/secondary; transitions background only, so the focus ring appears instantly) and `Callout` in `src/components/ui/`; copy in `src/lib/content/who-we-support.ts`. Follow-ups: replace Unsplash stand-ins `about-main-placeholder.jpg` / `about-inset-placeholder.jpg` with real AKC photos (brief: educator with child and workbook); inset covers part of the main photo's subject at desktop; collage centred over left-aligned text when stacked (640–1180px); migrate header/hero buttons to `ButtonLink` to fix their focus-ring fade.
- **04 · Our Approach** (2026-10-05) — `#approach` tint section: eyebrow "Our approach" + H2 "Every child is different." left, intro (max 460px) right; "Our learning environment combines:" label naming a `ul` of nine verbatim checklist tiles (white, radius 14, 26px solid check) in an auto-fit grid (min 300px, gap 12) reflowing 3 → 2 → 1 at ~1024 / 768 / ≤640px with no overflow; navy quote block "connection comes before correction…" (no attribution). Added shared ui primitives `SectionHeading` (now also used by Who We Support), `CheckMark` and `QuoteBlock`; copy in `src/lib/content/our-approach.ts`. Follow-ups: hyphenated items break at the hyphen at 320px; `QuoteBlock`'s `figure` has no caption; `SectionHeading` leaves a trailing space in `className`.
- **05 · Our Services** (2026-10-06) — `#services` on white: centred eyebrow "Our services" (rules both sides) + H2 "Support shaped around each child"; row 1 four photo cards (One-on-One Tutoring, Small-Group Learning, Life Skills, Sensory Play & Movement — white, radius 20, hairline ring, 4:3 photo, H3 20px, body 15px) at 4/2/1 cols (≥1100/≥600px), hover lift −4px + card-hover shadow over .25s, no lift under reduced motion; row 2 three sand icon cards (Music Program, Physical Education, Birthday Club) with 60px solid blue icon circles, 3 cols ≥900px else 1, so no orphan at any width. Added music-note/ball/cake icons, `Eyebrow` `centered` variant, `--shadow-card` / `--shadow-card-hover` tokens; copy in `src/lib/content/services.ts`. Follow-ups: replace four Unsplash stand-ins `service-*-placeholder.jpg` with real AKC photos; shadow tokens repeat `#e0e8ef` instead of `var(--border)`; cards lift on hover but aren't links; `Eyebrow` reuses one rule element twice.
- **06 · Our Goal** (2026-10-06) — Full-width navy band with the small-group classroom stand-in at 12% opacity behind (decorative); centred sky-light eyebrow "Our goal", white H2 "Our goal is not simply to help children complete schoolwork.", lead "We want to help children become more:" and five transparent uppercase pills (Confident/Independent/Communicative/Capable/Connected) bordered red/orange/yellow/green/blue as a `ul` labelled by the lead (sentence case in source); pills stack as a centred column <640px, 3+2 at 640–1099px, one row ≥1100px; progress paragraph (max 44em). Worst-case contrast over the photo: white 8.9:1, label 6.3:1, body 6.1:1. Added `tone="dark"` to `Eyebrow` and `SectionHeading` (Eyebrow now renders two separate rules), `--text-on-dark-muted` token; copy in `src/lib/content/our-goal.ts`. Follow-ups: meets the looser reading of "never behind body text at lower contrast" only — photo lowers body text from ~9.3:1 to ~6.1:1 (a navy panel behind the text column was tried and reverted at the user's request); full-size background image is downloaded for a 12%-opacity backdrop; `SectionHeading` trailing space still present.
