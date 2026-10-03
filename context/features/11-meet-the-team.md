# 11 · Meet the team (placeholder)

Section PRD for the Autistic Kids Connection homepage. Design reference: `AKC Homepage v4.dc.html`. Styles: `../DESIGN-SYSTEM.md`.

| | |
|---|---|
| Anchor | — |
| Background | White |
| Position | Section 11 of 16 |

## Purpose
Introduce real educators so families can put faces to names. Ships hidden until content exists.

## Requirements
- Card per staff member: photo, name, role, short description, optional qualification.
- Hidden behind `showPlaceholderSections` until real content supplied.

## Acceptance criteria
- [ ] No invented names, roles or credentials published.
- [ ] WCAG AA contrast, visible focus ring (#F5B020), reduced-motion respected.
- [ ] Responsive from 320px to 1920px with no horizontal scroll.

## Build prompt

**Global prefix**
> You are building a section of the Autistic Kids Connection (AKC) website, a school in Curepe, Trinidad & Tobago offering homeschooling, tutoring and developmental support for children with autism and other developmental or learning differences. Follow DESIGN-SYSTEM.md exactly: Poppins type, primary blue #1A6E99, navy #1C3254, tint #EEF5FA, sand #F7F5F1, logo accent colours only where specified. Clean Corporate-Empathy style: structured, calm, credible, warm. WCAG AA contrast, 44px+ touch targets, visible focus ring #F5B020, reduced-motion support, semantic HTML with the section `aria-labelledby` its heading. Fully responsive; mobile is not a shrunken desktop. Use the supplied copy verbatim. Do not invent facts, statistics, staff or testimonials.

**Section prompt**
> Centred eyebrow "Meet the team", H2 "The people who will know your child". Responsive grid (auto-fit, min 250px) of white cards (radius 20, hairline ring): 1:1 staff portrait, name 19px/600, role 15px/500 blue, 1–2 sentence description 15px muted, optional qualification. Content must be supplied by AKC; do not invent names or credentials.
