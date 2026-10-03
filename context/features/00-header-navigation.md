# 00 · Brand stripe + Header / Navigation

Section PRD for the Autistic Kids Connection homepage. Design reference: `AKC Homepage v4.dc.html`. Styles: `../DESIGN-SYSTEM.md`.

| | |
|---|---|
| Anchor | — |
| Background | Over hero photo |
| Position | Section 0 of 16 |

## Purpose
Give families instant brand recognition and predictable, accessible routes to every part of the page and to registration.

## Requirements
- Six-colour 5px brand stripe at the very top.
- Transparent mark (`assets/akc-mark.png`) with name and descriptor set in type.
- Inline links ≥1180px; "Menu" toggle below 1180px with `aria-expanded`/`aria-controls`.
- Active link shows underline and `aria-current="page"`.
- Phone link shown ≥1480px; "Register Now" button ≥1180px.
- Skip-to-content link as first focusable element.
- Selecting a mobile menu link closes the menu.

## Acceptance criteria
- [ ] All links reachable by keyboard in logical order.
- [ ] Menu toggle works at 320px width with no horizontal scroll.
- [ ] Logo has meaningful alt text.
- [ ] WCAG AA contrast, visible focus ring (#F5B020), reduced-motion respected.
- [ ] Responsive from 320px to 1920px with no horizontal scroll.

## Build prompt

**Global prefix**
> You are building a section of the Autistic Kids Connection (AKC) website, a school in Curepe, Trinidad & Tobago offering homeschooling, tutoring and developmental support for children with autism and other developmental or learning differences. Follow DESIGN-SYSTEM.md exactly: Poppins type, primary blue #1A6E99, navy #1C3254, tint #EEF5FA, sand #F7F5F1, logo accent colours only where specified. Clean Corporate-Empathy style: structured, calm, credible, warm. WCAG AA contrast, 44px+ touch targets, visible focus ring #F5B020, reduced-motion support, semantic HTML with the section `aria-labelledby` its heading. Fully responsive; mobile is not a shrunken desktop. Use the supplied copy verbatim. Do not invent facts, statistics, staff or testimonials.

**Section prompt**
> Build a header that sits transparently over a full-bleed hero photo. At the very top, a 5px stripe split into six equal segments: #E2483A, #F08A24, #F5B020, #3E9A5A, #2E8FC7, #6A4BA8. Below it, a nav bar (min-height 92px, max-width 1320px, 1px rgba(255,255,255,.18) bottom border). Left: the AKC mark (`assets/akc-mark.png`, transparent, no background tile) at 84×56px, followed by "Autistic Kids Connection" (18px/700 white) and "Homeschooling • Tutoring • Developmental Support" (12px/500 #ABDAF2). Centre (≥1180px): links Home, About, Our Approach, Services, Families, Fees, Contact — 15px/500 white, hover #ABDAF2, active link has a 2px #8DCBEB underline and aria-current. Right: at ≥1480px a phone block ("Call us" / "371-7281", tel link, line phone icon); at ≥1180px a pill "Register Now" button (#1A6E99, hover #135678, 52px). Below 1180px replace links and button with a "Menu"/"Close" pill toggle that opens a white drop-down with 17px links separated by hairlines and a full-width "Register Now" button. Include a skip-to-content link.
