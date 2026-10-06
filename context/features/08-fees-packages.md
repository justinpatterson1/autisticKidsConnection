# 08 · Fees, packages, registration & terms

Section PRD for the Autistic Kids Connection homepage. Design reference: `AKC Homepage v4.dc.html`. Styles: `../DESIGN-SYSTEM.md`.

| | |
|---|---|
| Anchor | `#fees` |
| Background | Sand #F7F5F1 |
| Position | Section 8 of 16 |

## Purpose
Give transparent pricing so parents can choose a package with confidence.

## Requirements
- Three price cards; Autism Support featured in navy.
- Each card lists extras with prices.
- Registration & uniform card; school terms card.
- Prices exactly as supplied.

## Acceptance criteria
- [ ] All figures match source content.
- [ ] Cards stack to one column below 1000px.
- [ ] Open question: show currency as "TT$"?
- [ ] WCAG AA contrast, visible focus ring (#F5B020), reduced-motion respected.
- [ ] Responsive from 320px to 1920px with no horizontal scroll.

## Build prompt

**Global prefix**
> You are building a section of the Autistic Kids Connection (AKC) website, a school in Curepe, Trinidad & Tobago offering homeschooling, tutoring and developmental support for children with autism and other developmental or learning differences. Follow DESIGN-SYSTEM.md exactly: Poppins type, primary blue #1A6E99, navy #1C3254, tint #EEF5FA, sand #F7F5F1, logo accent colours only where specified. Clean Corporate-Empathy style: structured, calm, credible, warm. WCAG AA contrast, 44px+ touch targets, visible focus ring #F5B020, reduced-motion support, semantic HTML with the section `aria-labelledby` its heading. Fully responsive; mobile is not a shrunken desktop. Use the supplied copy verbatim. Do not invent facts, statistics, staff or testimonials.

**Section prompt**
> Sand (#F7F5F1) section. Centred eyebrow "School fees & program pricing" and H2 "Programs and packages". Three price cards (3 cols ≥1000px, else stacked), radius 24. Structure: uppercase kicker → name (24px/700) → optional subtitle → price(s) (clamp 30–38px/700 + "per month/term") with hairline below → extras label → extras rows (name left, value right).
> 1) White — kicker "Preschool Package", name "Preschool", sub "For children who are not on the autism spectrum", "$1,000 per month"; Extracurricular Activities: Music $200 per month · Physical Education (PE) $200 per term · Potty Care $200 per month.
> 2) **Featured navy** — kicker "Autism Support Package" (sky), name "Standard Support Package", "$2,000 per month" and "$8,000 per term"; Extracurricular Activities: Music $200 per month · PE $200 per term · Potty Care $300 per month.
> 3) White — kicker "Personal Tutor Package", name "Individualized One-on-One Support", "$3,500–$4,000 per month"; Additional Services: Potty Care $300 per month · Music $200 per month · PE $200 per term.
> Below, two white cards side by side: "Registration & uniform" — "Registration Fee: $500", "Includes 2 AKC T-shirts", "Additional T-shirts: $100 each"; sub-columns "Uniform Bottoms" ("Black pants or black skirts can be purchased at Charran's Bookstore.") and "Footwear" (Black shoes / Black sneakers are acceptable / Crocs are also permitted). "Our school terms" — three tint rows with blue pill labels: TERM 1 September – December · TERM 2 January – Easter · TERM 3 After Easter – August.
