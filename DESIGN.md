---
name: Autistic Kids Connection
description: Calm, structured, credible homepage for a Curepe school offering homeschooling, tutoring and developmental support.
colors:
  primary: "#1a6e99"
  primary-hover: "#135678"
  navy: "#1c3254"
  navy-deep: "#142642"
  sky: "#8dcbeb"
  sky-light: "#abdaf2"
  sky-pale: "#c2e3f5"
  tint: "#eef5fa"
  tint-strong: "#e4f1f9"
  sand: "#f7f5f1"
  white: "#ffffff"
  text-muted: "#4a5a72"
  text-on-dark-muted: "#cad6e4"
  text-on-photo: "#e3ebf3"
  border: "#e0e8ef"
  border-soft: "#e3eaf0"
  logo-red: "#e2483a"
  logo-orange: "#f08a24"
  logo-yellow: "#f5b020"
  logo-green: "#3e9a5a"
  logo-blue: "#2e8fc7"
  logo-purple: "#6a4ba8"
typography:
  display:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "clamp(38px, 5.4vw, 60px)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "clamp(30px, 3.4vw, 46px)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.3
  lead:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "clamp(18px, 1.5vw, 20px)"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.7
  body-small:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
  meta:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 500
  label-caps:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "clamp(15px, 1.4vw, 18px)"
    fontWeight: 600
    letterSpacing: "0.08em"
rounded:
  input: "12px"
  callout: "16px"
  card: "20px"
  price-card: "24px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 4vw, 48px)"
  section: "clamp(80px, 10vw, 120px)"
  heading-gap: "56px"
  group-gap: "56px"
  label-gap: "12px"
  grid-gap: "24px"
  split-gap: "clamp(40px, 6vw, 88px)"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "52px"
  button-secondary-hover:
    backgroundColor: "{colors.primary}"
  button-outline:
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "0 12px"
    height: "52px"
  button-ghost-on-photo:
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "56px"
  badge:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  card-photo:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "26px 30px 30px"
  card-feature:
    backgroundColor: "{colors.sand}"
    rounded: "{rounded.card}"
    padding: "28px"
  checklist-panel:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.card}"
    padding: "8px 24px"
  callout:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.navy}"
    rounded: "{rounded.callout}"
    padding: "24px 28px"
  quote-block:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "clamp(28px, 4vw, 44px)"
  goal-pill:
    textColor: "{colors.white}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.pill}"
    padding: "10px 24px"
---

# Design System: Autistic Kids Connection

## Overview

**Creative North Star: "The Calm Classroom"**

AKC's site should feel like walking into a good specialist classroom: structured, quiet and well-lit, with everything in its place and nothing competing for attention. Two colours carry the page: a single blue taken from the logo's wing, and the deep navy of its lettering. Pale tint and warm sand surfaces give each section its own room. The six logo colours appear only in small, deliberate moments: the stripe at the top of the page, the goal-label dots and the focus ring. Warmth comes from candid photography and the school's own words, not from decoration.

Density is generous. Sections breathe, with 80–120px of vertical padding, and content sits in a 1200px column. Headlines are bold and slightly tightened, and body text is unhurried. The rhythm alternates surfaces (white, tint, white, navy, white, sand…) so a parent always knows where one idea ends and the next begins. Motion is almost absent: colour changes and a 4px card lift are the whole vocabulary, and both switch off for people who ask for reduced motion.

The system deliberately rejects two looks. It isn't clinical: no sterile hospital-white emptiness, medical imagery or clinical language. And it isn't salesy: no urgency banners, countdowns, hype or stock-photo smiles. It should read as credible and kind.

**Key Characteristics:**
- One blue and one navy carry the structure; the logo's colours are accents, never fills.
- Surfaces separate content by tone (tint, sand, navy) and hairlines, not by heavy shadows.
- Soft-edged forms: full pill buttons, 16–24px corners on callouts, panels and cards.
- Poppins throughout, from bold, tightened headlines to unhurried 17px body text.
- Minimal, calm motion that always respects reduced motion.
- Accessibility is visible in the design: a two-tone navy-and-yellow focus ring, 44px+ targets, AA contrast measured over photos.

## Colors

A calm, cool palette with one blue voice and one dark anchor, warmed by sand and the logo's colours used in small amounts.

### Primary
- **Wing Blue** (`primary`): the brand blue, taken from the logo's wing and darkened to pass AA (5.6:1 against white). Used for primary buttons, label text and its rule, icon circles, check marks and active highlights. It is the only colour that says "act here".
- **Deep Wing Blue** (`primary-hover`): the hover and pressed state of Wing Blue, and nothing else.

### Secondary
- **Lettering Navy** (`navy`): the deep navy of the logo wordmark. It is the text colour for headings and emphasis, the background of dark bands ("Our goal") and quote blocks, and the secondary button colour.
- **Night Navy** (`navy-deep`): reserved for the footer, the darkest point of the page.

### Tertiary
- **Sky** (`sky`): the accent on dark backgrounds, used for the "Now registering" badge, the quote glyph and the active nav underline.
- **Light Sky** (`sky-light`): label text and secondary text on navy and over the hero photo, and the nav hover colour.
- **Pale Sky** (`sky-pale`): labels on primary-blue bands.
- **Logo accents** (`logo-red`, `logo-orange`, `logo-yellow`, `logo-green`, `logo-blue`, `logo-purple`): the six colours of the logo butterfly. **Logo Yellow** doubles as the focus ring.

### Neutral
- **Morning Tint** (`tint`): the alternate section background ("Our approach") and the callout fill.
- **Strong Tint** (`tint-strong`): pale icon circles, and hover on tint.
- **Warm Sand** (`sand`): the warm neutral surface for feature cards and the fees section. It stops the palette from feeling cold.
- **Paper White** (`white`): the page and card background.
- **Slate** (`text-muted`): body copy and descriptions, 6.9:1 against white and about 6.4:1 on tint and sand.
- **Mist** (`text-on-dark-muted`): body copy on navy.
- **Photo Mist** (`text-on-photo`): the hero lead over the darkened photo.
- **Hairline** (`border`) and **Soft Hairline** (`border-soft`): card outlines, dividers, and the 1px gaps between info-strip items.

### Named Rules
**The Two-Voice Rule.** Wing Blue and Lettering Navy carry every structural decision. If something needs emphasis, make it blue or navy, never a logo colour.

**The No-Rainbow Rule.** Logo colours appear only in the 5px brand stripe, goal-label dots, timeline dots and the focus ring. They are never text, never large fills, and never a whole rainbow section.

**The Measured-Overlay Rule.** Text over photography sits on a navy overlay tuned until the worst point of the photo still gives at least 4.5:1. Swapping the photo means re-measuring.

## Typography

**Display Font:** Poppins (with system-ui, sans-serif)
**Body Font:** Poppins (with system-ui, sans-serif)

**Character:** One geometric, friendly sans-serif does all the work. Weight and tracking create the hierarchy: bold, slightly tightened headlines over relaxed regular body text. It reads modern and warm without being childish.

### Hierarchy
- **Display** (`display`): the hero H1 only. Each of its three sentences is its own line (a balanced block), so the rhythm reads "Understanding Differences. / Building Confidence. / Creating Possibilities." from about 600px up and as three two-line pairs on phones. Capped at 60px so it stays calm; drops to 34px below 360px so "Understanding" never overflows.
- **Headline** (`headline`): every section H2 (the shared `SectionHeading`), with balanced line breaks.
- **Title** (`title`): card H3s.
- **Lead** (`lead`): the hero intro and the Our Goal lead line, at most 36em per line.
- **Body** (`body`): section body copy, with pretty line breaks and at most 34em (~67 characters) per line, including centred text on navy. List labels ("Our community initiatives include:") use Body in Slate so they introduce a list instead of joining it.
- **Body Small** (`body-small`): card descriptions.
- **Label** (`label`): eyebrow labels (with a 28×2px rule, on both sides when centred) and button text (16px).
- **Meta** (`meta`): small supporting text: the header descriptor, the "Call us" label, key-info labels and the badge. 14px is the floor for any text on the page.
- **Label Caps** (`label-caps`): goal labels only. Uppercase is applied by CSS; the source text is sentence case, so screen readers say the word instead of spelling it.

### Named Rules
**The No-Shouting Rule.** Uppercase belongs only to goal labels and short kickers. Sentences are never set in capitals.

**The 15px Floor Rule.** Body text never goes below 15px; 16–17px is preferred. Meta text stops at 14px.

**The Comfortable Line Rule.** Reading text runs 45–75 characters per line: body at most 34em, the quote at most 32em. Wide or centred paragraphs get a cap, never a full-width line.

## Layout

A single centred column on a full-bleed band. Content is capped at 1200px; the header and hero go to 1320px. Side padding is `clamp(20px, 4vw, 48px)`, and sections have `clamp(80px, 10vw, 120px)` of vertical padding. Spacing works in roles rather than one repeated value: eyebrow to H2 16px, H2 to body 20px, section header to content 56px, label to its list 12px, and 48–56px between groups inside a section, always at least twice the gap inside a group. More space sits above a heading than below it.

- **Two-column splits** are one column until 1024px, then two equal columns with a 40–88px gap. When stacked, the text comes before the photos, so a parent reads the answer before the picture.
- **Grids** with fixed column counts use explicit breakpoints:
  - Services photo cards: 4 columns at 1100px, 2 at 600px, otherwise 1.
  - Icon cards: 3 columns at 900px, otherwise 1.
  - The approach checklist fills down columns: 1, then 2 (5 + 4) at 640px, then 3 (3 + 3 + 3) at 1024px.
  - The key-info strip is one column, then three equal columns from 720px.
- **Paired splits.** Families uses a 2×2 grid at 1024px: heading beside the photo (bottoms aligned), initiatives list beside the collaboration card. Who We Support puts its text first below 1024px and its collage on the left above.
- **No lone items.** Grids never leave a single card alone on its last row. If a count can't divide evenly, the layout changes rather than leaving one behind.
- **Breakpoints:**
  - 640px (`sm`): small-screen simplifications, such as hiding the collage inset and showing the hero contact line; the approach checklist goes to two columns.
  - 720px: the key-info strip becomes three equal columns.
  - 1024px (`lg`): two-column splits, the approach header row and the three-column checklist.
  - 1180px (`nav`): inline navigation, the phone number and the Register button. The descriptor hides and the name may wrap to two lines.
  - 1480px (`wide`): adds the descriptor and the "Call us" label above the phone number.
- **Surface rhythm:** White → Tint → White → Navy → White → Sand → White → Tint… Two tinted sections never sit back to back.

## Elevation & Depth

Flat with gentle lift. Surfaces are flat by default and outlined with a 1px hairline ring rather than a border. Depth comes mainly from tone (tint, sand and navy bands) and only occasionally from soft, navy-tinted shadows. Shadows are always diffuse and pulled in on the sides (a negative spread), so they read as ambient light, not hard drop shadows.

### Shadow Vocabulary
- **Raised** (`box-shadow: 0 24px 60px -24px rgba(28,50,84,.35)`): the key-info card overlapping the hero, the collage inset photo and the mobile menu dropdown. Anything that physically sits on top of another layer.
- **Card rest** (`box-shadow: 0 0 0 1px #E0E8EF`): the hairline ring on white photo cards.
- **Card hover** (`box-shadow: 0 24px 48px -24px rgba(28,50,84,.3), 0 0 0 1px #E0E8EF`): photo cards on hover, together with a 4px lift.

### Named Rules
**The Earned-Shadow Rule.** A shadow means "this layer overlaps another" or "you are hovering this". Resting cards get a hairline, not a shadow.

## Shapes

Soft-edged and steady. Every interactive control and pill is fully rounded (999px). Containers step up in radius with their size:

| Element | Radius |
|---|---|
| Input fields (planned) | 12px |
| Callouts | 16px |
| Cards, quote blocks, photos | 20px |
| Price cards (planned) | 24px |

Icon circles are perfect circles: 26px check marks, 56–60px icon badges. Photos are clipped to the card radius; the collage inset adds an 8px white border. There are no sharp corners anywhere a hand or eye rests.

## Components

### Buttons
Soft-edged and steady: full pills that change colour on hover and never move.
- **Shape:** full pill (`rounded.pill`), at least 52px tall (56px in the hero), 26–30px horizontal padding, 16px/600 text, with an optional `→` hidden from screen readers.
- **Primary:** Wing Blue with white text, turning Deep Wing Blue on hover. For the main action ("Register Now").
- **Secondary:** Lettering Navy with white text, turning Wing Blue on hover. For in-section navigation ("Explore our services").
- **Outline:** transparent with a 1.5px Lettering Navy border and navy text, on white. Used for "Call 371-7281" in the sticky mobile bar.
- **Ghost (on photo):** transparent with a 1.5px white border at 70% opacity and white text; on hover the fill becomes white at 12% opacity. Only over the darkened hero.
- **Hover / Focus:** only the background colour transitions (0.2s), so the focus ring (3px Logo Yellow (#F5B020) outline at a 3px offset, with a 3px Lettering Navy ring filling the gap (`box-shadow: 0 0 0 3px`), so it clears 3:1 on white (yellow alone is ~1.9:1) and on navy) appears instantly. Transitions are off under reduced motion.

### Badge
A sky pill with 14px/600 navy text and an 8px navy dot ("Now registering"). Status only, never a link. It shares a row with the hero descriptor line ("Homeschooling • Tutoring • Developmental Support · Curepe", 15px/500 Light Sky) wherever the header descriptor is hidden (below 640px and 1180–1479px), so the first screen says what AKC is exactly once, followed at every width by "Ages 2–12 · Curepe". From 640px the phone number and email sit as text links under the hero buttons. "Register Now" and Contact go to the enquiry form (`#contact`), which sends to the school through Resend.

### Eyebrow label
15px/600 text with a 28×2px rule before it, and a second rule after it when centred. Wing Blue on light surfaces, Light Sky on navy (`tone="dark"`). Only where it names something the heading doesn't; Our Goal has none because its H2 already begins "Our goal…".

### Cards / Containers
- **Photo card:** white, 20px corners, hairline ring, 4:3 photo, 26/30px padding, 20px title, 15px Slate body. On hover it lifts 4px and gains the card-hover shadow over 0.25s; with reduced motion it doesn't move.
- **Feature card:** Warm Sand, 20px corners, 28px padding, a 60px solid Wing Blue icon circle beside the 20px title. Sits 56px below the photo cards so the two groups stay distinct.
- **Checklist panel:** one white panel on tint, 20px corners, holding a hairline-divided list with a 26px solid blue check circle and 16px/500 navy text per row.
- **Callout:** Morning Tint, 16px corners, 24/28px padding, 18–21px/600 navy text, for a single key statement.
- **Quote block:** Lettering Navy, 20px corners, 28–44px padding, a Sky quote glyph, 19–24px/500 white text, marked up as `figure > blockquote`.
- **Info strip:** a white card that overlaps the hero by 64–100px with the Raised shadow. Its items are separated by 1px Soft Hairline gaps; each has a 56px Strong Tint icon circle, a 14px Slate label and an 18px/600 value. The "Find us" value is the street address, underlined in Sky and linked to Maps.

### Goal label
Uppercase white 15px/600 text led by a 10px solid dot in one logo colour. No border or pill, so they read as labels rather than buttons. On navy only. Five of them form the "Our goal" list, wrapping centred (2 + 2 + 1 on phones, one row from 1100px). They support the band's main statement, the progress line ("We celebrate progress, whether it is a first word…"), which sits directly under the H2 in large white type.

### Navigation
- A 5px brand stripe of six equal logo-colour segments, then a transparent bar over the hero, at least 92px tall, with a 1px white-at-18% bottom hairline.
- The 84×56 logo mark sits next to the name in type (18px/700 white) and the descriptor (12px/500 Light Sky).
- No "Home" link; the logo returns to the top. Links are 15px/500 white; hover turns them Light Sky. The 2px inset Sky underline with `aria-current="page"` is reserved for a future scroll-aware nav and marks nothing today.
- From 1180px, once the full header scrolls away, a compact fixed navy bar (64px) keeps the mark, nav, phone and Register in view. It appears without motion.
- Below 1180px a fixed white bottom bar holds "Call 371-7281" and "Register Now" (52px pills, 1 : 1.4), so calling and enquiring stay in thumb reach on every phone. It appears once the hero's own buttons scroll away, so Register never shows twice.
- Below 1180px, a "Menu"/"Close" pill (`aria-expanded`) opens a white dropdown with 17px navy links, hairline dividers and a full-width primary button. Opening it moves focus to the first link; Escape closes it and returns focus to the toggle; a tap or click outside the toggle and panel closes it.
- A skip link is the first thing focusable.

## Do's and Don'ts

### Do:
- **Do** let Wing Blue (#1A6E99) and Lettering Navy (#1C3254) carry structure and emphasis.
- **Do** separate sections by surface tone, following the White → Tint → White → Navy → White → Sand rhythm.
- **Do** use the two-tone focus ring (3px Logo Yellow #F5B020 outline at a 3px offset over a 3px Lettering Navy ring) on everything interactive, and transition background colour only, so the ring appears instantly.
- **Do** measure text contrast over photography at the photo's brightest point, and darken the overlay until it passes 4.5:1.
- **Do** keep buttons as full pills at least 52px tall, and touch targets at 44px or more.
- **Do** keep resting cards flat, using the hairline ring (0 0 0 1px #E0E8EF); save shadows for overlapping layers and hover.
- **Do** switch off lift and smooth scrolling under `prefers-reduced-motion`.

### Don't:
- **Don't** use logo colours as text, large fills or whole sections. They belong only to the brand stripe, goal-label dots, timeline dots and the focus ring.
- **Don't** make it feel clinical: no sterile hospital-white emptiness, medical imagery or clinical language.
- **Don't** make it salesy: no urgency banners, countdowns, hype, or posed stock-photo smiles.
- **Don't** use photos with children staring at the camera, medical settings, or visible signs or place names from somewhere else.
- **Don't** set sentences in uppercase or body text below 15px.
- **Don't** leave a lone card on the last row of a grid.
- **Don't** add looping, parallax or bouncing motion.
