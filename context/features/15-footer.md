# 15 · Footer

Section PRD for the Autistic Kids Connection homepage. Design reference: `AKC Homepage v4.dc.html`. Styles: `../DESIGN-SYSTEM.md`.

| | |
|---|---|
| Anchor | `#footer` |
| Background | Navy-deep #142642 |
| Position | Section 15 of 16 |

## Purpose
Provide brand sign-off, contact details, hours and quick links on every visit.

## Requirements
- Full logo image (`assets/akc-logo.png`) on white panel; name/tagline not repeated as text.
- Columns: logo + contact · hours + social · Explore · Admissions.
- Bottom bar: © 2026, Accessibility, Privacy Policy.
- Extra bottom padding when sticky CTA visible.

## Acceptance criteria
- [ ] Social icons ≥44px with labels.
- [ ] Links meet contrast on navy.
- [ ] WCAG AA contrast, visible focus ring (#F5B020), reduced-motion respected.
- [ ] Responsive from 320px to 1920px with no horizontal scroll.

## Build prompt

**Global prefix**
> You are building a section of the Autistic Kids Connection (AKC) website, a school in Curepe, Trinidad & Tobago offering homeschooling, tutoring and developmental support for children with autism and other developmental or learning differences. Follow DESIGN-SYSTEM.md exactly: Poppins type, primary blue #1A6E99, navy #1C3254, tint #EEF5FA, sand #F7F5F1, logo accent colours only where specified. Clean Corporate-Empathy style: structured, calm, credible, warm. WCAG AA contrast, 44px+ touch targets, visible focus ring #F5B020, reduced-motion support, semantic HTML with the section `aria-labelledby` its heading. Fully responsive; mobile is not a shrunken desktop. Use the supplied copy verbatim. Do not invent facts, statistics, staff or testimonials.

**Section prompt**
> Navy-deep (#142642) footer, 4 auto-fit columns (min 210px). Col 1: the full AKC logo (`assets/akc-logo.png`, which already contains the name and tagline) at 180px wide on a white panel (radius 20, padding 8) so the navy wordmark stays legible; then address, phone and email links. Do not repeat the name/tagline as text. Col 2: "School hours" — 8:30 AM – 2:30 PM / Early drop-off from 7:30 AM / Latest pickup 3:30 PM; social icon buttons (44px circles). Col 3: "Explore" — Who We Support, Our Approach, Our Services, Family & Community. Col 4: "Admissions" — Fees & Packages, School Policies, Register Now. Bottom bar with hairline: "© 2026 Autistic Kids Connection" and links Accessibility, Privacy Policy.
