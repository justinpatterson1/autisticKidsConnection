# 07 · Family & community support + Professional collaboration

Section PRD for the Autistic Kids Connection homepage. Design reference: `AKC Homepage v4.dc.html`. Styles: `../DESIGN-SYSTEM.md`.

| | |
|---|---|
| Anchor | `#families` |
| Background | White |
| Position | Section 7 of 16 |

## Purpose
Show that AKC supports the whole family and works with professionals, without overstating clinical services.

## Requirements
- Five community initiatives as a divided list.
- Collaboration card naming Neuroness Child Psychology Clinic.
- Wording "when appropriate" retained; no implied in-house clinical services.

## Acceptance criteria
- [ ] Partner name exact.
- [ ] Image + card stack below list on mobile.
- [ ] WCAG AA contrast, visible focus ring (#F5B020), reduced-motion respected.
- [ ] Responsive from 320px to 1920px with no horizontal scroll.

## Build prompt

**Global prefix**
> You are building a section of the Autistic Kids Connection (AKC) website, a school in Curepe, Trinidad & Tobago offering homeschooling, tutoring and developmental support for children with autism and other developmental or learning differences. Follow DESIGN-SYSTEM.md exactly: Poppins type, primary blue #1A6E99, navy #1C3254, tint #EEF5FA, sand #F7F5F1, logo accent colours only where specified. Clean Corporate-Empathy style: structured, calm, credible, warm. WCAG AA contrast, 44px+ touch targets, visible focus ring #F5B020, reduced-motion support, semantic HTML with the section `aria-labelledby` its heading. Fully responsive; mobile is not a shrunken desktop. Use the supplied copy verbatim. Do not invent facts, statistics, staff or testimonials.

**Section prompt**
> Two-column split. Left: eyebrow "Family & community support"; H2 "AKC is more than a learning environment."; body "We believe in supporting the whole family."; label "Our community initiatives include:"; a divided list (hairlines, 10px blue dots): Parent counselling and support · Community fundraisers and family events · Parent education and workshops · Collaboration with professionals and specialists · Developmental support and referrals when needed. Right: a 16:10 photo (educator with group), then a tint card "Professional collaboration" with a 56px solid blue people icon: "AKC collaborates with **Neuroness Child Psychology Clinic**, allowing families to access professional child psychology and evaluation services when appropriate." + "We believe collaboration between educators, parents and professionals helps us better understand each child's individual needs and support their development."
