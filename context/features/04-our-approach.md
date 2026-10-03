# 04 · Our approach

Section PRD for the Autistic Kids Connection homepage. Design reference: `AKC Homepage v4.dc.html`. Styles: `../DESIGN-SYSTEM.md`.

| | |
|---|---|
| Anchor | `#approach` |
| Background | Tint #EEF5FA |
| Position | Section 4 of 16 |

## Purpose
Show how AKC teaches: nine elements of the learning environment and the "connection before correction" philosophy.

## Requirements
- Header row: H2 left, intro right.
- Nine checklist tiles in an auto-fit grid (min 300px).
- Navy quote block with philosophy statement.

## Acceptance criteria
- [ ] All nine items present verbatim.
- [ ] Grid reflows 3 → 2 → 1 columns without orphan overflow.
- [ ] WCAG AA contrast, visible focus ring (#F5B020), reduced-motion respected.
- [ ] Responsive from 320px to 1920px with no horizontal scroll.

## Build prompt

**Global prefix**
> You are building a section of the Autistic Kids Connection (AKC) website, a school in Curepe, Trinidad & Tobago offering homeschooling, tutoring and developmental support for children with autism and other developmental or learning differences. Follow DESIGN-SYSTEM.md exactly: Poppins type, primary blue #1A6E99, navy #1C3254, tint #EEF5FA, sand #F7F5F1, logo accent colours only where specified. Clean Corporate-Empathy style: structured, calm, credible, warm. WCAG AA contrast, 44px+ touch targets, visible focus ring #F5B020, reduced-motion support, semantic HTML with the section `aria-labelledby` its heading. Fully responsive; mobile is not a shrunken desktop. Use the supplied copy verbatim. Do not invent facts, statistics, staff or testimonials.

**Section prompt**
> Tint (#EEF5FA) section. Header row: left eyebrow "Our approach" + H2 "Every child is different."; right paragraph (max 460px) "That means every child deserves an approach that recognizes their individual strengths, needs and learning style." Then a label "Our learning environment combines:" and a responsive grid (auto-fit, min 300px, gap 12) of white tiles (radius 14), each with a solid blue check circle and 16px/500 text: Child-led and play-based learning · Individualized academic support · Sensory activities and movement · Communication development · Fine- and gross-motor activities · Life-skills development · Social and emotional support · Structured routines and visual supports · Small-group and one-on-one instruction. Finish with a navy quote block (radius 20, sky quote glyph): "We believe that connection comes before correction and that children learn best when they feel safe and supported."
