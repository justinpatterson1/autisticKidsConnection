# 02 · Key info strip

Section PRD for the Autistic Kids Connection homepage. Design reference: `AKC Homepage v4.dc.html`. Styles: `../DESIGN-SYSTEM.md`.

| | |
|---|---|
| Anchor | — |
| Background | White card overlapping hero |
| Position | Section 2 of 16 |

## Purpose
Surface the three practical facts parents look for first: hours, drop-off and location.

## Requirements
- Three items: School hours, Early drop-off, Find us.
- Card overlaps hero by clamp(64px, 7vw, 100px).
- Items wrap and stack on mobile.
- Icons decorative (`aria-hidden`).

## Acceptance criteria
- [ ] Values match confirmed hours (8:30 AM – 2:30 PM, from 7:30 AM).
- [ ] No overlap with hero text at any width.
- [ ] WCAG AA contrast, visible focus ring (#F5B020), reduced-motion respected.
- [ ] Responsive from 320px to 1920px with no horizontal scroll.

## Build prompt

**Global prefix**
> You are building a section of the Autistic Kids Connection (AKC) website, a school in Curepe, Trinidad & Tobago offering homeschooling, tutoring and developmental support for children with autism and other developmental or learning differences. Follow DESIGN-SYSTEM.md exactly: Poppins type, primary blue #1A6E99, navy #1C3254, tint #EEF5FA, sand #F7F5F1, logo accent colours only where specified. Clean Corporate-Empathy style: structured, calm, credible, warm. WCAG AA contrast, 44px+ touch targets, visible focus ring #F5B020, reduced-motion support, semantic HTML with the section `aria-labelledby` its heading. Fully responsive; mobile is not a shrunken desktop. Use the supplied copy verbatim. Do not invent facts, statistics, staff or testimonials.

**Section prompt**
> A white card (max-width 1200px, radius 20, shadow 0 24px 60px -24px rgba(28,50,84,.35)) pulled up to overlap the hero bottom by clamp(64px, 7vw, 100px). Three equal items separated by 1px gaps (container bg #E3EAF0), each flex: 1 1 260px, with a 56px #E4F1F9 icon circle (blue line icon), small label (14px #4A5A72) and value (18px/600): "School hours" / "8:30 AM – 2:30 PM" (clock); "Early drop-off" / "From 7:30 AM" (sunrise); "Find us" / "Curepe, Trinidad & Tobago" (pin). Items wrap and stack on mobile.
