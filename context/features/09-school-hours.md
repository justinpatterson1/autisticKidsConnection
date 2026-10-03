# 09 · School hours & aftercare

Section PRD for the Autistic Kids Connection homepage. Design reference: `AKC Homepage v4.dc.html`. Styles: `../DESIGN-SYSTEM.md`.

| | |
|---|---|
| Anchor | — |
| Background | White |
| Position | Section 9 of 16 |

## Purpose
Make the daily schedule and aftercare fees predictable and easy to scan.

## Requirements
- Vertical timeline with four times and logo-colour dots.
- Aftercare panel with three rules and footnote.

## Acceptance criteria
- [ ] Times and $20 fee match source.
- [ ] Timeline legible at 320px.
- [ ] WCAG AA contrast, visible focus ring (#F5B020), reduced-motion respected.
- [ ] Responsive from 320px to 1920px with no horizontal scroll.

## Build prompt

**Global prefix**
> You are building a section of the Autistic Kids Connection (AKC) website, a school in Curepe, Trinidad & Tobago offering homeschooling, tutoring and developmental support for children with autism and other developmental or learning differences. Follow DESIGN-SYSTEM.md exactly: Poppins type, primary blue #1A6E99, navy #1C3254, tint #EEF5FA, sand #F7F5F1, logo accent colours only where specified. Clean Corporate-Empathy style: structured, calm, credible, warm. WCAG AA contrast, 44px+ touch targets, visible focus ring #F5B020, reduced-motion support, semantic HTML with the section `aria-labelledby` its heading. Fully responsive; mobile is not a shrunken desktop. Use the supplied copy verbatim. Do not invent facts, statistics, staff or testimonials.

**Section prompt**
> Two-column split. Left: eyebrow "School hours & aftercare", H2 "A predictable school day", then a vertical timeline (2px #D3E5F1 rail, 24px dots with 6px white halo): 7:30 AM – Early drop-off (green #3E9A5A) · 8:30 AM – 2:30 PM – Regular school hours (blue #1A6E99) · 3:00 PM – Pickup deadline, aftercare after this time (yellow #F5B020) · 3:30 PM – Latest pickup time (purple #6A4BA8). Right: tint panel "Aftercare" with dotted list: "Children must be picked up by 3:00 PM." · "Any pickup after 3:00 PM will be considered aftercare and a $20 fee will apply." · "The latest pickup time is 3:30 PM." and a divided footnote "Please ensure that children are picked up on time to avoid additional fees."
