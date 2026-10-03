# 16 · Sticky mobile CTA

Section PRD for the Autistic Kids Connection homepage. Design reference: `AKC Homepage v4.dc.html`. Styles: `../DESIGN-SYSTEM.md`.

| | |
|---|---|
| Anchor | — |
| Background | White fixed bar |
| Position | Section 16 of 16 |

## Purpose
Keep the two key actions (call, register) within thumb reach on mobile.

## Requirements
- Shown below 1180px only.
- "Call 371-7281" (tel) and "Register Now" (#contact), 52px tall.

## Acceptance criteria
- [ ] Never covers footer content.
- [ ] Hidden on desktop.
- [ ] WCAG AA contrast, visible focus ring (#F5B020), reduced-motion respected.
- [ ] Responsive from 320px to 1920px with no horizontal scroll.

## Build prompt

**Global prefix**
> You are building a section of the Autistic Kids Connection (AKC) website, a school in Curepe, Trinidad & Tobago offering homeschooling, tutoring and developmental support for children with autism and other developmental or learning differences. Follow DESIGN-SYSTEM.md exactly: Poppins type, primary blue #1A6E99, navy #1C3254, tint #EEF5FA, sand #F7F5F1, logo accent colours only where specified. Clean Corporate-Empathy style: structured, calm, credible, warm. WCAG AA contrast, 44px+ touch targets, visible focus ring #F5B020, reduced-motion support, semantic HTML with the section `aria-labelledby` its heading. Fully responsive; mobile is not a shrunken desktop. Use the supplied copy verbatim. Do not invent facts, statistics, staff or testimonials.

**Section prompt**
> Below 1180px, a fixed bottom bar (white, top hairline, 10–12px padding) with two 52px pill buttons: outline navy "Call 371-7281" (tel link) and primary blue "Register Now" (#contact), in a 1 : 1.4 grid. Add 76px padding to the footer bottom so content isn't covered.
