# 06 · Our goal

Section PRD for the Autistic Kids Connection homepage. Design reference: `AKC Homepage v4.dc.html`. Styles: `../DESIGN-SYSTEM.md`.

| | |
|---|---|
| Anchor | — |
| Background | Navy with faint photo |
| Position | Section 6 of 16 |

## Purpose
Communicate the outcomes AKC works toward and that all progress is celebrated.

## Requirements
- Five goal pills, each bordered in one logo colour.
- Progress paragraph verbatim.
- Background photo ≤12% opacity; never behind body text at lower contrast.

## Acceptance criteria
- [ ] White text ≥4.5:1 on navy.
- [ ] Pills wrap neatly on mobile.
- [ ] WCAG AA contrast, visible focus ring (#F5B020), reduced-motion respected.
- [ ] Responsive from 320px to 1920px with no horizontal scroll.

## Build prompt

**Global prefix**
> You are building a section of the Autistic Kids Connection (AKC) website, a school in Curepe, Trinidad & Tobago offering homeschooling, tutoring and developmental support for children with autism and other developmental or learning differences. Follow DESIGN-SYSTEM.md exactly: Poppins type, primary blue #1A6E99, navy #1C3254, tint #EEF5FA, sand #F7F5F1, logo accent colours only where specified. Clean Corporate-Empathy style: structured, calm, credible, warm. WCAG AA contrast, 44px+ touch targets, visible focus ring #F5B020, reduced-motion support, semantic HTML with the section `aria-labelledby` its heading. Fully responsive; mobile is not a shrunken desktop. Use the supplied copy verbatim. Do not invent facts, statistics, staff or testimonials.

**Section prompt**
> Full-width navy (#1C3254) band with a classroom photo at 12% opacity behind. Centred: eyebrow "Our goal" (#ABDAF2); H2 "Our goal is not simply to help children complete schoolwork." (white); line "We want to help children become more:" (#CAD6E4). A wrapping row of five transparent pills, uppercase 600 white with 0.08em tracking, each with a 2px border in one logo colour: CONFIDENT (#E2483A), INDEPENDENT (#F08A24), COMMUNICATIVE (#F5B020), CAPABLE (#3E9A5A), CONNECTED (#2E8FC7). Below, centred paragraph (max 44em): "We celebrate progress, whether it is a first word, a new skill, completing an activity independently, making a friend, learning to write a name, or simply feeling comfortable enough to participate."
