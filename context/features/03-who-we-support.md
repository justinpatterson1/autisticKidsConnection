# 03 · Who we support

Section PRD for the Autistic Kids Connection homepage. Design reference: `AKC Homepage v4.dc.html`. Styles: `../DESIGN-SYSTEM.md`.

| | |
|---|---|
| Anchor | `#about` |
| Background | White |
| Position | Section 3 of 16 |

## Purpose
Explain which children AKC is for, using child-first, non-deficit language.

## Requirements
- Two-column split: photo collage left, copy right; stacks on mobile.
- Body and callout copy verbatim.
- Callout: "different does not mean less."
- Button to `#services`.

## Acceptance criteria
- [ ] Collage simplifies cleanly on mobile.
- [ ] Section labelled by its H2.
- [ ] WCAG AA contrast, visible focus ring (#F5B020), reduced-motion respected.
- [ ] Responsive from 320px to 1920px with no horizontal scroll.

## Build prompt

**Global prefix**
> You are building a section of the Autistic Kids Connection (AKC) website, a school in Curepe, Trinidad & Tobago offering homeschooling, tutoring and developmental support for children with autism and other developmental or learning differences. Follow DESIGN-SYSTEM.md exactly: Poppins type, primary blue #1A6E99, navy #1C3254, tint #EEF5FA, sand #F7F5F1, logo accent colours only where specified. Clean Corporate-Empathy style: structured, calm, credible, warm. WCAG AA contrast, 44px+ touch targets, visible focus ring #F5B020, reduced-motion support, semantic HTML with the section `aria-labelledby` its heading. Fully responsive; mobile is not a shrunken desktop. Use the supplied copy verbatim. Do not invent facts, statistics, staff or testimonials.

**Section prompt**
> Two-column split (auto-fit, min 440px). Left: an image collage: a 4:5 photo (educator with child and workbook), radius 20, with a second 1:1 photo overlapping its bottom-right corner (52% width, 8px white border, soft shadow). Right: eyebrow "Who we support"; H2 "A smaller, more individualized place to learn"; body "AKC provides support for children who may benefit from a smaller, more individualized learning environment, including children with autism and other developmental or learning differences."; a tint callout (radius 16, 18–21px/600 navy) "We recognize that children develop at different rates—and different does not mean less."; navy pill button "Explore our services →" to #services (hover #1A6E99).
