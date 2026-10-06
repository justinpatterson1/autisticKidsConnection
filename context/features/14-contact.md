# 14 · Come grow with us — Contact & enquiry

Section PRD for the Autistic Kids Connection homepage. Design reference: `AKC Homepage v4.dc.html`. Styles: `../DESIGN-SYSTEM.md`.

| | |
|---|---|
| Anchor | `#contact` |
| Background | White |
| Position | Section 14 of 16 |

## Purpose
Convert interest into a conversation: call, email, visit or send an enquiry.

## Requirements
- Address, `tel:3717281`, `mailto:autistickidstutoring@gmail.com`.
- Enquiry form: name, phone, email, child's age, package chips (single-select, `aria-pressed`), notes.
- Validation: name + (phone or email) required.
- Submit to school email via **Resend** (decided 2026-10-06); success + error states; honeypot spam protection; privacy note. "Register Now" (header, hero, sticky bar) and the Contact nav item already link to `#contact`.

## Acceptance criteria
- [ ] All inputs have visible labels.
- [ ] Email address wraps without overflow at 320px.
- [ ] Form submits and shows confirmation.
- [ ] WCAG AA contrast, visible focus ring (#F5B020), reduced-motion respected.
- [ ] Responsive from 320px to 1920px with no horizontal scroll.

## Build prompt

**Global prefix**
> You are building a section of the Autistic Kids Connection (AKC) website, a school in Curepe, Trinidad & Tobago offering homeschooling, tutoring and developmental support for children with autism and other developmental or learning differences. Follow DESIGN-SYSTEM.md exactly: Poppins type, primary blue #1A6E99, navy #1C3254, tint #EEF5FA, sand #F7F5F1, logo accent colours only where specified. Clean Corporate-Empathy style: structured, calm, credible, warm. WCAG AA contrast, 44px+ touch targets, visible focus ring #F5B020, reduced-motion support, semantic HTML with the section `aria-labelledby` its heading. Fully responsive; mobile is not a shrunken desktop. Use the supplied copy verbatim. Do not invent facts, statistics, staff or testimonials.

**Section prompt**
> Two-column split. Left: "Now registering" badge; H2 "Come grow with us" (34–54px); line "Every child has potential. Our job is to help them discover it."; three tint contact rows (radius 16, 48px solid blue icon circles, label + 17px/600 value): Visit us — "#2 Mc Inroy Street, Curepe, Trinidad & Tobago"; Call us — "371-7281" (tel:3717281); Email — "autistickidstutoring@gmail.com" (mailto, wraps safely). Right: navy form card (radius 24) "Registration enquiry" / "Tell us a little about your child and we'll be in touch." Fields with visible labels: Your name, Phone, Email, Child's age (2-col grid on wide), a fieldset "Package you're interested in" with single-select pill chips (Preschool / Autism Support / Personal Tutor / Not sure yet; aria-pressed; selected = #8DCBEB fill), optional textarea "Anything you'd like us to know?", and a full-width #8DCBEB submit "Send enquiry →". Inputs 52px, radius 12, bg #233B60, border #344C70. Add validation, success/error states and a privacy note.
