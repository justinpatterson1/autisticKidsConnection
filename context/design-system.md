# AKC Design System

Design system for the Autistic Kids Connection (AKC) website. Source of truth: `AKC Homepage v4.dc.html`.

**Direction:** Clean Corporate-Empathy. Structured, credible and calm, like a respected pediatric or specialist education centre, with warmth coming from photography, copy and the logo's colours used sparingly as accents.

**Principles**
1. Calm first. One main colour (blue) and one dark (navy) carry the page. Logo colours are accents only.
2. Clarity over decoration. Typography, spacing and photography create the hierarchy; cards are used only where content is a discrete unit.
3. Accessibility is non-negotiable. WCAG AA contrast, 44px+ touch targets, visible focus, reduced-motion support.
4. Honest content. No invented claims, statistics, staff or testimonials. Placeholders are clearly marked.

---

## 1. Brand

### Logo
| Asset | File | Use |
|---|---|---|
| Full logo (mark + wordmark) | `assets/akc-logo.png` (500×500, transparent) | Footer, print, social, Open Graph |
| Mark only (butterfly + children) | `assets/akc-mark.png` (460×300) | Navbar |
| Butterfly only | `assets/akc-butterfly.png` (320×200) | Favicon / small sizes |

**Rules**
- **Navbar:** mark only, transparent, directly on the hero overlay (no tile), 84×56px, followed by the name and descriptor set in type.
- **Footer:** full logo (`akc-logo.png`) at 180px wide on a white panel (`#FFFFFF`, radius 20px, padding 8px). The panel is required because the navy wordmark is unreadable on the navy-deep footer. Do not repeat the name/descriptor as text next to it.
- Always pair the mark with the name set in type ("Autistic Kids Connection", Poppins 700) — never rely on the image wordmark at small sizes.
- Don't recolour, stretch or crop the children. Over photography, only place it on the darkened overlay area.

### Name & tagline
- Name: **Autistic Kids Connection** (short form **AKC** after first mention)
- Descriptor: **Homeschooling • Tutoring • Developmental Support**
- Headline line: **Understanding Differences. Building Confidence. Creating Possibilities.**

---

## 2. Colour

### Core palette
| Token | Hex | Role |
|---|---|---|
| `primary` | `#1A6E99` | Main brand blue (from logo wing, darkened for AA). Primary buttons, links, eyebrows, icons |
| `primary-hover` | `#135678` | Hover/pressed for primary |
| `navy` | `#1C3254` | Body text, headings, dark sections, secondary buttons (from logo lettering) |
| `navy-deep` | `#142642` | Footer background |
| `sky` | `#8DCBEB` | Accent on dark backgrounds: badges, active nav underline, form submit |
| `sky-light` | `#ABDAF2` | Secondary text/eyebrows on dark backgrounds |
| `sky-pale` | `#C2E3F5` | Eyebrow rules and tags on primary background — not eyebrow text (4.18:1 on primary, below AA at 15px) |
| `tint` | `#EEF5FA` | Section background, callout boxes, contact rows |
| `tint-strong` | `#E4F1F9` | Icon circles, hover on tint |
| `sand` | `#F7F5F1` | Warm neutral section background (Fees, extracurricular cards) |
| `white` | `#FFFFFF` | Page background, cards |

### Text
| Token | Hex | Use |
|---|---|---|
| `text` | `#1C3254` | Headings, body emphasis |
| `text-muted` | `#4A5A72` | Body copy, descriptions |
| `text-on-dark` | `#FFFFFF` | Headings on navy/photo |
| `text-on-dark-muted` | `#CAD6E4` | Body on navy |
| `text-on-photo` | `#E3EBF3` | Body on hero photo (lead) |

### Lines & surfaces
| Token | Hex | Use |
|---|---|---|
| `border` | `#E0E8EF` | Card outlines, dividers |
| `border-soft` | `#E3EAF0` | Mobile menu dividers, strip gaps |
| `border-tint` | `#D3E5F1` | Dividers inside tint panels, timeline rail |
| `border-on-dark` | `#344C70` | Inputs/dividers on navy |
| `input-on-dark` | `#233B60` | Form field fill on navy |
| `error-on-dark` | `#FFA597` | Form error text and invalid-field borders on navy (6.78:1 on navy, 5.94:1 on `input-on-dark`); logo red is only 3.2:1 there |
| `footer-divider` | `#26406A` | Footer bottom rule (exposed as a utility in 15) |

### Logo accent colours (use sparingly)
| Token | Hex | Approved uses |
|---|---|---|
| `logo-red` | `#E2483A` | Brand stripe, goal-label dot |
| `logo-orange` | `#F08A24` | Brand stripe, goal-label dot |
| `logo-yellow` | `#F5B020` | Brand stripe, goal-label dot, **focus ring**, timeline dot |
| `logo-green` | `#3E9A5A` | Brand stripe, goal-label dot, timeline dot |
| `logo-blue` | `#2E8FC7` | Brand stripe, goal-label dot |
| `logo-purple` | `#6A4BA8` | Brand stripe, timeline dot |

**Rules**
- Accent colours appear only in: the 5px six-colour brand stripe at the top of the page, the 12px dots of the "Our Goal" labels, timeline dots and the focus ring.
- Never use accent colours as text colour or as large fills. No rainbow sections.
- Overlay for hero photography (≥1180px): `linear-gradient(90deg, rgba(18,34,62,.9) 0%, rgba(18,34,62,.7) 58%, rgba(18,34,62,.15) 100%)`. Below 1180px, where the text spans the full width, a flat `rgba(18,34,62,.62)` layer is added on top. Both were tuned (from `.66` at 48%) so the lead stays ≥4.5:1 over the brightest part of the photo at every width; re-check if the photo changes.

### Contrast (AA)
- `#FFFFFF` on `#1A6E99` ≈ 5.6:1 ✓
- `#1C3254` on `#FFFFFF` ≈ 12.9:1 ✓
- `#4A5A72` on `#FFFFFF` ≈ 6.9:1 ✓
- `#1C3254` on `#8DCBEB` ≈ 7.5:1 ✓
- `#CAD6E4` on `#1C3254` ≈ 9:1 ✓

---

## 3. Typography

**Family:** Poppins (Google Fonts) — weights 400, 500, 600, 700. Fallback `system-ui, sans-serif`.
**Utility mono:** IBM Plex Mono 400 — placeholder labels only, never public copy. Exposed as `font-mono` (`"IBM Plex Mono", ui-monospace, monospace`) but deliberately not web-loaded, so production pays nothing for preview-only labels; devices without it fall back to their system mono.

| Style | Size | Weight | Line height | Tracking | Notes |
|---|---|---|---|---|---|
| H1 (hero) | `clamp(38px, 5.4vw, 60px)` (34px below 360px) | 700 | 1.08 | -0.025em | One sentence per line (each a balanced block); "Understanding Differences." is ~13.45em, so the hero column is 820px. 1+1+1 lines from ~600px, 2+2+2 on phones. 38px overflows "Understanding" at 320px |
| H2 (section) | `clamp(30px, 3.4vw, 46px)` | 700 | 1.15 | -0.02em | `text-wrap: balance` |
| H2 large (Contact CTA) | `clamp(34px, 4vw, 54px)` | 700 | 1.1 | -0.02em | `SectionHeading size="cta"` (Contact only, per PRD 14). Vision is now an H3 inside Our goal |
| H3 (card) | 19–24px | 600 (700 for price cards) | 1.3 | — | |
| Eyebrow | 15px | 600 | — | — | Primary colour, preceded by 28×2px rule (centred variants have rules on both sides) |
| Lead | `clamp(18px, 1.5vw, 20px)` | 400 | 1.65 | — | Hero / intro |
| Body | 16–17px | 400 | 1.65–1.75 | — | `text-wrap: pretty`; max 34em (~67ch) |
| List label | 17px | 400 muted | 1.7 | — | Lead-in sentence that names a list ("Our learning environment combines:"); muted so it never reads as another item |
| Statement | 18–30px | 500–600 | 1.45–1.5 | — | Callout, quote and the Our Goal progress line; quote max 32em, progress line max 30em |
| Small | 15px | 400 | 1.6 | — | Card descriptions |
| Meta | 14px | 400–500 | — | — | Header descriptor, "Call us", key-info labels, badge. The floor for any text |
| Kicker (price cards) | 13px | 600 | — | 0.08em, uppercase | |
| Price | `clamp(30px, 3vw, 38px)` | 700 | 1 | -0.02em | |
| Goal label | `clamp(15px, 1.4vw, 18px)` | 600 | — | 0.08em, uppercase | |

**Rules:** Minimum body size 15px (16px preferred); nothing below 14px. Measure ≤ 36em for lead text, ≤ 34em for body (centred light-on-dark text included), ≤ 32em for the quote. Never all-caps for sentences.

---

## 4. Layout & spacing

- **Container:** `max-width: 1200px` content; `1320px` for header/hero.
- **Gutters:** `padding-inline: clamp(20px, 4vw, 48px)`.
- **Section padding:** `clamp(80px, 10vw, 120px)` vertical (hero/feature bands up to 128px).
- **Anchor offset:** from 1180px `html { scroll-padding-top: 80px }` so `#fees`, `#contact` etc. land clear of the 64px fixed compact header. Below 1180px nothing is fixed at the top, so no offset.
- **Heading → content gap:** 48–56px.
- **Grid gaps:** 24px cards, 40–88px two-column splits.
- **Spacing roles:** eyebrow → H2 16px · H2 → body 20px · header → content 56px · label → list 12px · between groups within a section 48–56px (always ≥2× the gap inside a group).
- **Two-column split:** `grid-template-columns: repeat(auto-fit, minmax(min(100%, 440px), 1fr))`.
- **Spacing scale (px):** 4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 56, 72, 80, 96, 120.

### Section background rhythm
Section order follows a parent's questions: Hero · Key info · Who we support (white) · Our approach (tint) · Our services (white) · School hours `#hours` (sand) · Our goal + vision (navy) · [Team (white) · Testimonials (primary), placeholder-only] · Family & community (white) · Fees (sand) · Contact (white) · School policies (tint) · Footer navy-deep. No two neighbours share a surface, with or without the placeholder sections. Never put two tinted sections back to back.

### Breakpoints (JS-driven)
| Name | Width | Changes |
|---|---|---|
| Mobile/tablet nav | `< 1180px` | Hamburger "Menu" button, sticky bottom CTA bar |
| Desktop | `≥ 1180px` | Full inline nav, phone number (icon + number) and Register button; descriptor hidden, name may wrap to two lines |
| Wide | `≥ 1480px` | Adds the descriptor (wraps after "Tutoring •") and the "Call us" label above the phone number |
| Services grid | `≥1100` 4 cols · `≥600` 2 cols · else 1 | |
| Package grid | `≥1000` 3 cols · else 1 | |

---

## 5. Shape, elevation, imagery

**Radius:** buttons/pills `999px` · cards `20px` · price cards & form `24px` · list items/rows `14–16px` · accordion `18px` · logo tile `14–16px`.

**Shadows**
- Raised strip: `0 24px 60px -24px rgba(28,50,84,.35)`
- Card hover: `0 24px 48px -24px rgba(28,50,84,.3)` + `0 0 0 1px #E0E8EF`
- Card rest: `0 0 0 1px #E0E8EF` (hairline, not a border)

**Photography**
- Candid, natural light, warm and muted; educators engaging with children at eye level; children absorbed in activities, not posing.
- No children staring at the camera, no medical settings, no puzzle-piece imagery.
- Crops: hero full-bleed `object-position: center 35%`; service cards `4:3`; about `4:5` + overlapping `1:1` with 8px white border; family image `16:10`.
- Every meaningful image has descriptive `alt`; decorative ones `alt=""`.
- Current images are Unsplash stand-ins — replace with real AKC photos (with consent).

**Icons**
- Line icons, 24×24 viewBox, `stroke-width 1.6–1.8`, round caps/joins.
- Sit in circles: 48–68px. Light variant: `#E4F1F9` circle, `#1A6E99` stroke. Solid variant: `#1A6E99` circle, white stroke.
- Checkmark: 24–26px solid primary circle with white tick.
- No emoji in UI.

---

## 6. Components

### Buttons
| Variant | Style | Hover |
|---|---|---|
| Primary | bg `#1A6E99`, text white, 600, radius 999, min-height 52–58px, padding 0 26–30px | bg `#135678` |
| Secondary (dark) | bg `#1C3254`, white text | bg `#1A6E99` |
| Ghost (on photo) | 1.5px border `rgba(255,255,255,.7)`, white text | bg `rgba(255,255,255,.12)` |
| Outline (light) | 1.5px border `#1C3254`, navy text | — |
| Accent submit (on navy) | bg `#8DCBEB`, navy text, full width, 56px | bg `#ABDAF2` |

Arrows `→` are `aria-hidden`. Transitions: `background .2s`.

### Badge — "Now registering"
Shared `Badge` (`src/components/ui/badge.tsx`), used in the Hero and Contact. Pill, bg `#8DCBEB`, navy text 14px/600, 8px navy dot, padding 6px 14px. Sits in a row with the hero descriptor line ("Homeschooling • Tutoring • Developmental Support · Curepe", 15px/500 Light Sky), shown below 640px and at 1180–1479px — exactly where the header descriptor is hidden — so the first screen always says what AKC is, once. "Ages 2–12 · Curepe" follows it at every width.

### Hero contact line
From 640px, under the hero buttons: phone and email as text links (15px/500 Photo Mist, 18px Light Sky icons, 44px targets) — contact details a parent can copy. Hidden on phones, where the sticky bar carries Call.

### Eyebrow
15px/600 primary, `inline-flex`, gap 10px, preceded by a 28×2px primary bar (centred variant: a bar on both sides). Tones: `light` (primary text + bar), `dark` on navy (sky-light text + bar), `primary` on the primary band (white text 5.62:1 + sky-pale bar). Use only when it names something the H2 doesn't; never repeat the H2 (Our Goal has none for this reason).

### Info strip
White card overlapping the hero by `clamp(64px, 7vw, 100px)`, radius 20, raised shadow. Items separated by 1px gaps (container bg `#E3EAF0`): one column below 720px, three equal columns from 720px (icon stacked above label/value until 1024px, beside it from 1024px). Icon circle + label (14px muted) + value (18px/600).

### Service card (photo)
White, radius 20, hairline ring, `4:3` image, padding 26/30. No hover effect (not links). Below the four photo cards an H3 "Extracurricular activities" (20px/600 navy, 64px above) labels the three sand icon cards, whose titles are H4s.

### Feature card (icon)
Sand bg, radius 20, padding 28, solid icon circle 60px inline with the H3 (gap 16), H3 20px, body 15px. In Services the icon-card row sits 56px below the photo cards so the two groups read separately; photo-card titles reserve two lines in the 4-up row so bodies align.

### Checklist panel
One white panel on tint (radius 20) holding the nine supplied items in three labelled groups of three: Learning · Development · Wellbeing (our grouping, items verbatim). Each group: a 44px primary badge with a 22px line icon (book · sprout · heart, echoing the visual schedule) beside an 18px/600 navy H3, then a list of checkmark + 16px/500 navy rows 14px apart; its `ul` is labelled by the H3. Groups stack with hairline dividers (padding 24px block, 24/32px inline) and sit side by side from 1024px with vertical hairlines (32px inline padding).

### Quote block
Navy bg, radius 20, padding 28–44px, sky quote glyph, 19–24px/500 white text.

### Callout
Tint bg, radius 16, padding 24/28, 18–21px/600 navy text — for single key statements.

### Price card
Radius 24, padding 28–36. Kicker → name → optional sub → price(s) with hairline below → extras label → extras list (name left, price right). All three cards are white with equal weight (the former navy "featured" Autism Support card was dropped after the 2026-10-07 critique: the packages suit different children, they are not upgrade tiers). Extras rows share one order (Music · Physical Education (PE) · Potty Care) so cards compare row by row; "Education (PE)" is joined by an NBSP. Kicker 13px/600 uppercase, name H3 24px/700 (hyphenated words kept whole), extras label H4 15px/600, extras rows 15px with hairline dividers. In the 3-up row the cards are a CSS subgrid (header · prices · extras), so the price hairlines line up across cards. Under the cards, centred 17px muted "Not sure which package fits your child?" + a 44px primary text link "Tell us about your child →" (`PackagePromptLink`) that jumps to `#contact` and pre-selects the "Not sure yet" chip via the `akc:select-package` window event (plain anchor without JS).

### Registration card
White, radius 24, hairline ring, padding 28–36. H3 20px/600, then a divided name/value list (registration fee 20px/700 with its "Includes…" note beneath; extra T-shirts) and two H4 sub-columns ≥520px (Uniform Bottoms · Footwear, 6px blue dots). Sits beside the terms card in a two-column split.

### Term row
Tint bg, radius 14, primary pill label ("TERM 1") + 16px/500 date range.

### Visual schedule (School hours)
The school day as the picture-card sequence AKC teaches with (the site's signature motif): an `ol` of four white cards (radius 20, hairline ring, padding 24) on sand, each with a 56px logo-colour badge holding a 26px line icon — 7:30 AM sunrise (green), 8:30 AM – 2:30 PM book (primary), 3:00 PM clock (yellow, **navy** icon since white on yellow is ~1.9:1), 3:30 PM home (purple) — then the time `clamp(20px, 1.9vw, 26px)`/700 navy and the label 16px muted. One column below 1024px (badge beside text, 16px gaps), four columns from 1024px (badge above text, 24px gaps). A 2px `sky` rail joins each card to the next at the badge centre (52px in), spanning exactly the gap. Badges are decorative (`aria-hidden`); order is carried by the `ol`.

### Rules panel (Aftercare)
Full-width white card under the schedule (radius 20, hairline ring, padding 24–32). H3 20px/600, dotted rules (8px primary dots, 16px navy, 12px apart) and a 15px muted footnote. Below 1024px one column with a hairline above the footnote; from 1024px title + footnote on the left, rules on the right (1 : 2).

### Accordion (policies)
White, radius 18, hairline ring, 12px between items, max-width 900px. Each header is an H3 wrapping a full-width button (min-height 72px, 18px/600 navy, padding 20–28px) with `aria-expanded`/`aria-controls`; `+`/`−` in a 36px circle (tint→primary when open, background fades .2s). Panels are `role="region"` labelled by their button and use `hidden` when closed, so their text leaves the tab order. One item open at a time — clicking the open one closes it (all closed allowed); all items closed by default (it sits after Contact as reference, so it never opens on payment rules). Open/close is instant (no height animation). Panel text 16px/1.7 muted; sub-headings H4 16px/600 navy; rules as 8px-dot lists.

### Team card (hidden until content exists)
White, radius 20, hairline ring, 1:1 portrait, body padding 24 (28 bottom): name H3 19px/600 navy, role 15px/500 primary, description 15px muted, optional qualification 14px muted above a hairline. Grid `repeat(auto-fit, minmax(min(100%, 250px), 280px))`, centred, gap 24 — tracks cap at 280px so one or two staff never stretch into giant portraits. Renders only when `TEAM` has real entries; while empty it is omitted, or shown as mono `[Placeholder]` cards (tint square where the photo goes, no names or faces) when `SHOW_PLACEHOLDER_SECTIONS=true` (`showPlaceholderSections` in `src/lib/content/site-flags.ts`).

### Testimonial card (hidden until content exists)
On the primary band. White, radius 20, padding 28–36, no shadow. Primary quote glyph (decorative), quote 19px/500 navy, line-height 1.5, then a hairline and caption 15px muted with the name 600 navy: "Name · Relationship". Marked up as `figure` > `blockquote` + `figcaption`. One column below 768px, two from 768px with equal-height rows; an odd last card centres at one column's width. Same gating as the team card: `TESTIMONIALS` ships empty — genuine, consented quotes only — so the band is omitted, or shown as mono `[Placeholder]` cards when `SHOW_PLACEHOLDER_SECTIONS=true`.

### What happens next (Contact)
Under the contact rows in the left column: H3 20px/600 navy, then an `ol` of steps with 32px outlined primary number circles (numbers carry the order), title 17px/600 navy, body 15px muted. `NEXT_STEPS` in `src/lib/content/contact.ts` ships empty until AKC confirms its enrolment steps, so the block is hidden; `[Placeholder]` mono steps show with `SHOW_PLACEHOLDER_SECTIONS=true`.

### Vision (inside Our goal)
No longer its own section: it closes the navy Our goal band below a `border-on-dark` hairline (64–96px above, 48–72px below): centred dark eyebrow "Our vision", 17–19px `text-on-dark-muted` paragraph, then an H3 `clamp(24px, 2.6vw, 34px)`/700 with the second sentence in sky (white 8.72:1 / sky 7.27:1 on navy). Sized below the goal H2 so it supports the peak.

### Contact row
Tint bg, radius 16, padding 18/20, 48px solid icon circle, label 14px muted + value 17px/600. Phone/email rows are `tel:`/`mailto:` links.

### Form (on navy)
Radius 24, padding 24–44. H3 24px/600 white, intro 16px + required note 14px in `text-on-dark-muted`. Labels 14px/500 `text-on-dark-muted` above inputs, "(optional)" in 400. Inputs min-height 52px, radius 12, bg `#233B60`, border `#344C70`, white text; invalid fields get an `error-on-dark` border and a 14px `error-on-dark` message linked by `aria-describedby`. Fields: name + child's age, then phone + email (2-col grid from 640px), so the shared "phone or email" error sits directly under the pair; child's age shows the example placeholder "e.g. 4 years" (`text-on-dark-muted` at 75%, 5.05:1 on the input fill); only name is `aria-required` (phone and email are one-of); then package chips; then the optional textarea. Package chips: 44px pills, `aria-pressed`, single-select (pressing the selected chip clears it), selected = sky fill + navy text. Submit: full-width 56px sky pill, navy text, hover sky-light; "Sending…" while pending. Validation (shared client/server in `src/lib/enquiry.ts`): name + (phone or email); the "phone or email" message is described by both fields; on a failed submit focus moves to the first invalid field and errors update as the parent types. Server errors show a bordered `role="alert"` box whose phone number (nowrap) and email are tappable `tel:`/`mailto:` links, and keep the entered values; success replaces the form with a check, focused H3 and body. Honeypot field `akc_hp` (deliberately meaningless so browsers never autofill it), labelled "Leave this field empty", off-screen, `aria-hidden`, `tabindex=-1`. Privacy note 14px muted under the button. Sends via Resend from the `sendEnquiry` Server Action (`RESEND_API_KEY`, optional `RESEND_FROM` / `ENQUIRY_TO`; blank values fall back to the defaults; the name is whitespace-collapsed before it enters the subject). Long email addresses break after "@" via `BreakableEmail` (Contact row, footer, error box).

### Goal labels
On navy: uppercase white 15px/600 text (0.08em tracking), each led by a 10px solid dot in one logo colour (red, orange, yellow, green, blue). No border or pill shape, so they read as labels, not buttons. Wrap centred (gap 28/12px), max 560px until 1100px, one row above.

### Our Goal band order
H2 → the progress line as the band's main statement (white, `clamp(21px, 2.3vw, 30px)`/500, line-height 1.45, max 30em, 32px below the H2) → 56px → lead "We want to help children become more:" (17px muted) → goal labels 16px below. The concrete line ("a first word… write a name") is the emotional peak, so it outranks the value words.

### Header / nav
- 5px six-colour brand stripe at very top.
- Transparent over hero photo, 1px `rgba(255,255,255,.18)` bottom border, min-height 92px.
- Items: About · Our Approach · Services · Families · Fees · Contact. No "Home" item — the logo links to `#main`.
- Links 15px/500 white, hover `#ABDAF2`, padding 10px (12px ≥1480px). Active style (inset 2px sky underline via `aria-current="page"`) is reserved for a future scroll-aware nav; nothing is marked active today.
- Phone link is visible from 1180px so calling is never hidden on desktop.
- Mobile: "Menu"/"Close" pill toggles a white drop-down list (17px links, 16px vertical padding, dividers) with full-width Register button. Opening it moves focus to the first link; Escape closes it and returns focus to the toggle; a tap or click outside the toggle and panel closes it. Focus is kept inside the open menu (Tab cycles toggle → links → Register), and it closes when the window crosses 1180px (`useMenu`). Once the header scrolls away, the sticky bar's Menu takes over.

### Compact header (desktop)
≥1180px only: once the full header scrolls out of view (IntersectionObserver), a fixed navy bar (min-height 64px, raised shadow) shows the 60×40 mark, name (from 1480px only; below that the full 1-868 number needs the room, and the mark keeps its "Autistic Kids Connection, home" label), nav, phone and a 44px Register pill. Appears instantly (no motion). Nav labelled "Quick navigation".

### Sticky mobile CTA
Fixed bottom bar (`< 1180px`), shown once the hero buttons have scrolled out of view and hidden again while the Contact section covers the bottom of the screen (two IntersectionObservers; the section's own Call row and form take over there): white, top hairline, 12px padding (bottom respects `env(safe-area-inset-bottom)`), three 52px controls in an `auto auto 1fr` grid (max 640px wide), 15px/600. (1) **Menu**: navy text button with a 20px menu icon, `aria-expanded`; opens a sheet *above* the bar (white, radius 20, raised shadow, the six `NAV_ITEMS` as 17px links with dividers, labelled "Sections") so navigation stays in thumb reach after the header scrolls away; label switches to "Close". (2) **Call** outline navy pill (`tel:`, accessible name "Call us 1-868-371-7281" at every width): phone icon only below 400px, the number from 400px, "Call" + number from 520px. (3) **Register Now** primary pill filling the rest. Both mobile menus share `useMenu` (`src/lib/hooks/use-menu.ts`): focus moves to the first link on open, Tab cycles between toggle and links, Escape closes and refocuses the toggle, a tap outside closes, and crossing 1180px closes. The footer carries the `77px + safe-area` bottom padding that keeps content clear of the bar.

### Footer
`<footer id="footer">` after `main`, navy-deep, labelled by a visually hidden H2 "Site footer"; padding top `clamp(56px, 7vw, 88px)`, bottom 32px (+ 77px + safe area below 1180px for the sticky bar). Columns 1 → 2 (640px) → 4 (1180px, first column 1.3fr), gap 40/48px — explicit rather than the PRD's `minmax(210px, 1fr)` auto-fit, which left Admissions alone on a row at ~1024px. Col 1: full logo 180px on a white panel (radius 20, padding 8; alt reads the logo text), then address (Maps), phone, email as 15px links with 18px sky-light icons on the first line. Col 2: H3 "School hours" + three lines (from `TIMES`), then social buttons (44px circles, `border-on-dark` ring, sky-light icon, `aria-label`) — none render while `SOCIAL_LINKS` is empty; `[Placeholder]` dashed circles with `SHOW_PLACEHOLDER_SECTIONS=true`. Cols 3–4: `nav` landmarks labelled by their H3 ("Explore", "Admissions"). Column titles 15px/600 sky-light (10.13:1); links 15px `text-on-dark-muted` (10.28:1), hover white, min-height 44px. Bottom bar: `footer-divider` hairline, "© {current year} Autistic Kids Connection" 14px muted (year read at build); Accessibility / Privacy Policy links render only once `LEGAL_LINKS` has entries.

---

## 7. Motion
- Only: button/link colour and background `.2s`. (The service-card hover lift was removed 2026-10-07: the cards aren't interactive.)
- No parallax, autoplay, bouncing or looping animation.
- `@media (prefers-reduced-motion: reduce)` disables all transitions and smooth scrolling.

## 8. Accessibility checklist
- Skip link to `#main` (visible on focus).
- Landmarks: `header > nav[aria-label="Main"]`, `main`, `footer`; every section `aria-labelledby` its H2.
- Focus ring: `3px solid #F5B020`, offset 3px, plus `box-shadow: 0 0 0 3px #1C3254` filling the offset gap — two-tone so it passes 3:1 on white and on navy.
- Touch targets ≥ 44px (buttons 48–58px).
- Decorative SVGs/images `aria-hidden` / `alt=""`.
- Large-text preview tweak (zoom 1.15) to test reflow.

## 9. Voice & copy
Compassionate, clear, respectful, hopeful, professional. Child-first language: strengths, development, communication, confidence, independence, belonging.
Avoid: "fixing", "overcoming limitations", "normal children", "special children", "superpowers".
Use the school's supplied copy verbatim; mark anything unconfirmed as `[Placeholder]`.
