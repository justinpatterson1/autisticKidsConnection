# 01 · Hero

Section PRD for the Autistic Kids Connection homepage. Design reference: `AKC Homepage v4.dc.html`. Styles: `../DESIGN-SYSTEM.md`.

| | |
|---|---|
| Anchor | `#main` |
| Background | Photo + navy gradient overlay |
| Position | Section 1 of 16 |

## Purpose
Tell parents within seconds who AKC is, who it serves and that registration is open, in a reassuring rather than sales-driven tone.

## Requirements
- "Now registering" badge (editable / removable).
- H1 and lead copy verbatim.
- Primary CTA "Register Now" → `#contact`; secondary "Programs & Fees" → `#fees`.
- Overlay keeps text ≥4.5:1 contrast across the photo.
- Bottom padding leaves room for the overlapping info strip.

## Acceptance criteria
- [ ] Headline readable at 320px without overflow.
- [ ] Both CTAs ≥48px tall.
- [ ] Image has descriptive alt text; candid, not posed.
- [ ] WCAG AA contrast, visible focus ring (#F5B020), reduced-motion respected.
- [ ] Responsive from 320px to 1920px with no horizontal scroll.

## Build prompt

**Global prefix**
> You are building a section of the Autistic Kids Connection (AKC) website, a school in Curepe, Trinidad & Tobago offering homeschooling, tutoring and developmental support for children with autism and other developmental or learning differences. Follow DESIGN-SYSTEM.md exactly: Poppins type, primary blue #1A6E99, navy #1C3254, tint #EEF5FA, sand #F7F5F1, logo accent colours only where specified. Clean Corporate-Empathy style: structured, calm, credible, warm. WCAG AA contrast, 44px+ touch targets, visible focus ring #F5B020, reduced-motion support, semantic HTML with the section `aria-labelledby` its heading. Fully responsive; mobile is not a shrunken desktop. Use the supplied copy verbatim. Do not invent facts, statistics, staff or testimonials.

**Section prompt**
> Full-bleed hero, min-height clamp(640px, 90vh, 880px). Background: candid photo of an educator engaging with a child in warm natural light, object-position center 35%, with overlay linear-gradient(90deg, rgba(18,34,62,.9) 0%, rgba(18,34,62,.66) 48%, rgba(18,34,62,.15) 100%). Left-aligned content, max-width 760px: a pill badge "Now registering" (#8DCBEB bg, navy text, 8px navy dot); H1 "Understanding Differences. Building Confidence. Creating Possibilities." (clamp(38px, 5.4vw, 70px), 700, -0.025em, balanced); lead "At Autistic Kids Connection (AKC), we believe every child deserves an environment where they feel safe, understood, accepted and capable of learning." (18–20px, #E3EBF3). Two buttons: primary "Register Now →" to #contact, ghost "Programs & Fees" (1.5px white 70% border) to #fees. Leave ~130–180px bottom padding for the overlapping info strip.
