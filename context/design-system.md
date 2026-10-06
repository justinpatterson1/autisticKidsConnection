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
| `sky-pale` | `#C2E3F5` | Eyebrows/tags on primary background |
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
| `footer-divider` | `#26406A` | Footer bottom rule |

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
**Utility mono:** IBM Plex Mono 400 — placeholder labels only, never public copy.

| Style | Size | Weight | Line height | Tracking | Notes |
|---|---|---|---|---|---|
| H1 (hero) | `clamp(38px, 5.4vw, 60px)` (34px below 360px) | 700 | 1.08 | -0.025em | One sentence per line (each a balanced block); "Understanding Differences." is ~13.45em, so the hero column is 820px. 1+1+1 lines from ~600px, 2+2+2 on phones. 38px overflows "Understanding" at 320px |
| H2 (section) | `clamp(30px, 3.4vw, 46px)` | 700 | 1.15 | -0.02em | `text-wrap: balance` |
| H2 large (CTA / Vision) | `clamp(30–34px, 3.8–4vw, 50–54px)` | 700 | 1.1–1.15 | -0.02em | |
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
- **Heading → content gap:** 48–56px.
- **Grid gaps:** 24px cards, 40–88px two-column splits.
- **Spacing roles:** eyebrow → H2 16px · H2 → body 20px · header → content 56px · label → list 12px · between groups within a section 48–56px (always ≥2× the gap inside a group).
- **Two-column split:** `grid-template-columns: repeat(auto-fit, minmax(min(100%, 440px), 1fr))`.
- **Spacing scale (px):** 4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 56, 72, 80, 96, 120.

### Section background rhythm
White → Tint (`#EEF5FA`) → White → Navy → White → Sand (`#F7F5F1`) → White → Tint → White … Footer navy-deep. Never put two tinted sections back to back.

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
- Featured price card: `0 24px 60px -24px rgba(28,50,84,.5)`

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
Pill, bg `#8DCBEB`, navy text 14px/600, 8px navy dot, padding 6px 14px. Sits in a row with the hero descriptor line ("Homeschooling • Tutoring • Developmental Support · Curepe", 15px/500 Light Sky), shown below 640px and at 1180–1479px — exactly where the header descriptor is hidden — so the first screen always says what AKC is, once. "Ages 2–12 · Curepe" follows it at every width.

### Hero contact line
From 640px, under the hero buttons: phone and email as text links (15px/500 Photo Mist, 18px Light Sky icons, 44px targets) — contact details a parent can copy. Hidden on phones, where the sticky bar carries Call.

### Eyebrow
15px/600 primary, `inline-flex`, gap 10px, preceded by a 28×2px primary bar. Use only when it names something the H2 doesn't; never repeat the H2 (Our Goal has none for this reason).

### Info strip
White card overlapping the hero by `clamp(64px, 7vw, 100px)`, radius 20, raised shadow. Items separated by 1px gaps (container bg `#E3EAF0`): one column below 720px, three equal columns from 720px (icon stacked above label/value until 1024px, beside it from 1024px). Icon circle + label (14px muted) + value (18px/600).

### Service card (photo)
White, radius 20, hairline ring, `4:3` image, padding 26/30. Hover lifts `translateY(-4px)` + shadow.

### Feature card (icon)
Sand bg, radius 20, padding 28, solid icon circle 60px inline with the H3 (gap 16), H3 20px, body 15px. In Services the icon-card row sits 56px below the photo cards so the two groups read separately; photo-card titles reserve two lines in the 4-up row so bodies align.

### Checklist panel
One white panel on tint (radius 20, padding 8/24, 8/32 ≥640px) holding a divided list: hairline `#E0E8EF` rows, 16px vertical padding, checkmark + 16px/500 text. Fills down columns — 1 column, 2 (5 + 4) ≥640px, 3 (3 + 3 + 3) ≥1024px, 40px column gap — with the hairline dropped on each column's last row.

### Quote block
Navy bg, radius 20, padding 28–44px, sky quote glyph, 19–24px/500 white text.

### Callout
Tint bg, radius 16, padding 24/28, 18–21px/600 navy text — for single key statements.

### Price card
Radius 24, padding 28–36. Kicker → name → optional sub → price(s) with hairline below → extras label → extras list (name left, price right). **Featured** (Autism Support): navy bg, white text, sky kicker, stronger shadow (`--shadow-featured`), hairlines `#344C70`. Kicker 13px/600 uppercase, name H3 24px/700 (hyphenated words kept whole), extras label H4 15px/600, extras rows 15px with hairline dividers. In the 3-up row the cards are a CSS subgrid (header · prices · extras), so the price hairlines line up across cards.

### Registration card
White, radius 24, hairline ring, padding 28–36. H3 20px/600, then a divided name/value list (registration fee 20px/700 with its "Includes…" note beneath; extra T-shirts) and two H4 sub-columns ≥520px (Uniform Bottoms · Footwear, 6px blue dots). Sits beside the terms card in a two-column split.

### Term row
Tint bg, radius 14, primary pill label ("TERM 1") + 16px/500 date range.

### Timeline
Vertical 2px `#D3E5F1` rail; 24px coloured dots with 6px white halo; time 20px/700, label 16px muted. Ordered list, 32px between stops; the rail is drawn per stop down to the next dot's centre, so it ends at the last dot. Times use non-breaking spaces before AM/PM and stay on one line at 320px.

### Rules panel (Aftercare)
Tint bg, radius 20, padding 24–32. H3 20px/600, then a dotted list (8px primary dots, 16px navy text, 12px between items) then a `#D3E5F1` divider and a 15px muted footnote below it (24px above the rule, 20px below). At lg it sits beside the timeline, level with the first stop.

### Accordion (policies)
White, radius 18, hairline ring, 12px between items, max-width 900px. Each header is an H3 wrapping a full-width button (min-height 72px, 18px/600 navy, padding 20–28px) with `aria-expanded`/`aria-controls`; `+`/`−` in a 36px circle (tint→primary when open, background fades .2s). Panels are `role="region"` labelled by their button and use `hidden` when closed, so their text leaves the tab order. One item open at a time — clicking the open one closes it (all closed allowed); first item open by default, including in the server render. Open/close is instant (no height animation). Panel text 16px/1.7 muted; sub-headings H4 16px/600 navy; rules as 8px-dot lists.

### Contact row
Tint bg, radius 16, padding 18/20, 48px solid icon circle, label 14px muted + value 17px/600. Phone/email rows are `tel:`/`mailto:` links.

### Form (on navy)
Radius 24. Labels 14px/500 above inputs. Inputs min-height 52px, radius 12, bg `#233B60`, border `#344C70`, white text. Package chips: 44px pills, `aria-pressed`, selected = sky fill + navy text.

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
- Mobile: "Menu"/"Close" pill toggles a white drop-down list (17px links, 16px vertical padding, dividers) with full-width Register button. Opening it moves focus to the first link; Escape closes it and returns focus to the toggle; a tap or click outside the toggle and panel closes it.

### Compact header (desktop)
≥1180px only: once the full header scrolls out of view (IntersectionObserver), a fixed navy bar (min-height 64px, raised shadow) shows the 60×40 mark, name, nav, phone and a 44px Register pill. Appears instantly (no motion). Nav labelled "Quick navigation".

### Sticky mobile CTA
Fixed bottom bar (`< 1180px`), shown only once the hero buttons have scrolled out of view (IntersectionObserver), so the first screen never shows Register twice: white, top hairline, 12px padding (bottom respects `env(safe-area-inset-bottom)`), two pills in a `1fr 1.4fr` grid (max 640px wide) — outline navy "Call 371-7281" (`tel:`) and primary "Register Now" (`#contact`), 52px tall, 15px/600. Content below it gets `77px + safe-area` bottom padding; until the footer ships that padding sits on `main`, then moves to the footer.

### Footer
Navy-deep, 4 columns (`minmax(210px, 1fr)` auto-fit): Full logo on white panel + address/phone/email · School hours + social · Explore · Admissions. Bottom bar: © + Accessibility / Privacy Policy links.

---

## 7. Motion
- Only: button background `.2s`, card lift + shadow `.25s`.
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
