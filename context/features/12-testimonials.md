# 12 · Testimonials (placeholder)

Section PRD for the Autistic Kids Connection homepage. Design reference: `AKC Homepage v4.dc.html`. Styles: `../DESIGN-SYSTEM.md`.

| | |
|---|---|
| Anchor | — |
| Background | Primary blue #1A6E99 |
| Position | Section 12 of 16 |

## Purpose
Share genuine parent voices. Ships hidden until real, consented quotes exist.

## Requirements
- Two-column quote cards with name and relationship.
- Hidden until content supplied.

## Acceptance criteria
- [ ] Only genuine quotes with written consent.
- [ ] WCAG AA contrast, visible focus ring (#F5B020), reduced-motion respected.
- [ ] Responsive from 320px to 1920px with no horizontal scroll.

## Build prompt

**Global prefix**
> You are building a section of the Autistic Kids Connection (AKC) website, a school in Curepe, Trinidad & Tobago offering homeschooling, tutoring and developmental support for children with autism and other developmental or learning differences. Follow DESIGN-SYSTEM.md exactly: Poppins type, primary blue #1A6E99, navy #1C3254, tint #EEF5FA, sand #F7F5F1, logo accent colours only where specified. Clean Corporate-Empathy style: structured, calm, credible, warm. WCAG AA contrast, 44px+ touch targets, visible focus ring #F5B020, reduced-motion support, semantic HTML with the section `aria-labelledby` its heading. Fully responsive; mobile is not a shrunken desktop. Use the supplied copy verbatim. Do not invent facts, statistics, staff or testimonials.

**Section prompt**
> Primary blue (#1A6E99) band. Eyebrow "What families say" (#C2E3F5), H2 "In their own words" (white). Two-column grid of white quote cards (radius 20, padding 36): quote 19px/500 navy, caption "Parent name · Relationship to child". Use only genuine quotes shared with consent.
