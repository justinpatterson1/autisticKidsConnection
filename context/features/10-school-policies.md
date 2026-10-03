# 10 · School policies

Section PRD for the Autistic Kids Connection homepage. Design reference: `AKC Homepage v4.dc.html`. Styles: `../DESIGN-SYSTEM.md`.

| | |
|---|---|
| Anchor | `#policies` |
| Background | Tint #EEF5FA |
| Position | Section 10 of 16 |

## Purpose
Present payment, potty-care and property-damage policies clearly and respectfully.

## Requirements
- Accessible accordion; one item open at a time; first open by default.
- `aria-expanded` on headers; 72px header targets.
- Thank-you message below.

## Acceptance criteria
- [ ] Policy text verbatim.
- [ ] Accordion fully operable by keyboard (Enter/Space).
- [ ] WCAG AA contrast, visible focus ring (#F5B020), reduced-motion respected.
- [ ] Responsive from 320px to 1920px with no horizontal scroll.

## Build prompt

**Global prefix**
> You are building a section of the Autistic Kids Connection (AKC) website, a school in Curepe, Trinidad & Tobago offering homeschooling, tutoring and developmental support for children with autism and other developmental or learning differences. Follow DESIGN-SYSTEM.md exactly: Poppins type, primary blue #1A6E99, navy #1C3254, tint #EEF5FA, sand #F7F5F1, logo accent colours only where specified. Clean Corporate-Empathy style: structured, calm, credible, warm. WCAG AA contrast, 44px+ touch targets, visible focus ring #F5B020, reduced-motion support, semantic HTML with the section `aria-labelledby` its heading. Fully responsive; mobile is not a shrunken desktop. Use the supplied copy verbatim. Do not invent facts, statistics, staff or testimonials.

**Section prompt**
> Tint section, max-width 900px. Centred eyebrow "School policies", H2 "Good to know". An accessible accordion of white panels (radius 18, 72px header buttons, 18px/600, +/− in a 36px circle that turns solid blue when open, aria-expanded). Only one open at a time; first open by default.
> • "Payment policy": sub-heading "Monthly payments": "All school fees are due by the 1st of each month." / "Parents are given a one-week grace period to make payment." / "After the one-week grace period, a $100 late fee will be added to the outstanding balance." Sub-heading "Termly payments": "Parents who choose to pay by the term must pay the full term fee." / "Monthly payments are installments toward the full termly commitment." / "All school fees must be fully paid by the end of the term."
> • "Potty care": "If a child is reported as fully toilet trained but still requires staff assistance, supervision or support with toileting, the applicable potty-care fee will be charged."
> • "Property damage policy": "We understand that children may have accidents or moments of dysregulation. However, if a child intentionally or through repeated unsafe behaviour damages school property or another child's personal property, the parent/guardian will be responsible for the cost of repairing or replacing the damaged item." / "Parents will be informed of the incident and the applicable cost of the damage." / "We appreciate your cooperation in helping us maintain a safe and respectful environment for everyone."
> Below, centred: "**Thank you** for choosing Autistic Kids Connection and for partnering with us in supporting your child's growth, development and independence."
