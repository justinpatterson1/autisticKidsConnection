# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** parents and caregivers in Trinidad & Tobago whose child has autism or another developmental or learning difference. They are comparing options for their child and deciding whether to enquire about, visit or register with Autistic Kids Connection (AKC). They want to know quickly: is this place for my child, how does it teach, what does it cost, what does a day look like, and how do I get in touch.

**Secondary:** professionals who may refer families (therapists, psychologists, teachers). The site does not need to be built around them, but it must not mislead them about what AKC offers.

## Product Purpose

A single-page homepage for AKC, a small school in Curepe, Trinidad & Tobago, offering homeschooling, tutoring and developmental support. It explains who AKC supports, its approach, services, fees and packages, school hours and aftercare, policies, and how to get in touch.

Success means a parent leaves understanding whether AKC fits their child and takes a next step: calling, emailing, visiting, or sending a registration enquiry.

## Positioning

AKC is a smaller, more individualized learning environment for children who may benefit from one, including children with autism and other developmental or learning differences. It combines academic learning with developmental support (sensory activities, communication, motor skills, life skills, social and emotional support) under a child-led, play-based approach summed up as "connection comes before correction".

AKC is a school, not a clinic. It collaborates with **Neuroness Child Psychology Clinic** so families can access professional child psychology and evaluation services *when appropriate*. Nothing may imply that AKC provides clinical services in-house.

## Operating Context

- Location: #2 Mc Inroy Street, Curepe, Trinidad & Tobago. Phone 371-7281. Email autistickidstutoring@gmail.com.
- Ages: children aged 3–10 (confirmed by the school, 2026-10-06). Class size and how a first visit works are not yet supplied.
- School day: early drop-off from 7:30 AM; regular hours 8:30 AM – 2:30 PM; pickup by 3:00 PM; pickup after 3:00 PM counts as aftercare with a $20 fee; latest pickup 3:30 PM.
- Programs and packages: Preschool, Autism Support and Personal Tutor, plus registration, uniform and school terms. Prices exactly as supplied in `context/features/08-fees-packages.md`.
- Extracurriculars: Music Program, Physical Education, Birthday Club.
- Family and community: parent counselling and support, community fundraisers and family events, parent education and workshops, collaboration with professionals and specialists, developmental support and referrals when needed.
- Policies parents need to know: payment, potty care and property damage.
- AKC is currently registering new families.

## Capabilities and Constraints

- A content-static, single-page marketing site, built in this repo with Next.js 16 (App Router), React 19 and Tailwind CSS v4. There is no database, authentication or CMS. Copy lives as typed constants in `src/lib/content/`.
- The page has 16 sections, each specified in `context/features/00–16`. Those PRDs carry the supplied copy, which must be used verbatim.
- **Decided:** the registration enquiry form (feature 14) sends submissions to the school's email through **Resend**. "Register Now" and the Contact nav item link to that form (`#contact`) at the bottom of the page.
- "Meet the team" and "Testimonials" ship hidden until real content exists.
- Terminology: "Autistic Kids Connection", short form "AKC" after first mention. Child-first language throughout.

## Brand Commitments

- Name: **Autistic Kids Connection** (AKC). Descriptor: **Homeschooling • Tutoring • Developmental Support**. Headline: **Understanding Differences. Building Confidence. Creating Possibilities.**
- Logo: the full logo is on hand at `assets/images/autistickidslogo.png`. It shows a butterfly whose wings are coloured puzzle pieces, two waving children, the wordmark "AUTISTIC KIDS CONNECTION" and the tagline "Homeschooling Tutoring / Understanding Differences". The mark-only (`public/assets/akc-mark.png`, butterfly and children) and butterfly-only (`public/assets/akc-butterfly.png`, also used for `src/app/icon.png` and `apple-icon.png`) versions were derived from it. The butterfly's lower wings overlap the children in the source artwork, so in the butterfly-only crop the areas behind the children's hands are filled with the flat wing colour. An official butterfly-only file from the school would replace it.
- **Open questions about the logo:**
  - Its tagline differs from the site descriptor ("Homeschooling • Tutoring • Developmental Support"). Which is canonical has not been confirmed.
  - The butterfly's wings are puzzle pieces, while the imagery rules exclude puzzle-piece imagery. The logo is the school's own and is used as supplied; the exclusion applies to photography and illustration around it.
- Voice: compassionate, clear, respectful, hopeful and professional. Child-first language centred on strengths, development, communication, confidence, independence and belonging. Avoid "fixing", "overcoming limitations", "normal children", "special children" and "superpowers".
- Use the school's supplied copy verbatim. Mark anything unconfirmed as `[Placeholder]`.

## Evidence on Hand

- **Real:** all section copy, prices, hours, policies, contact details and the partner name, in `context/features/*.md`.
- **On hand:** the full logo, `assets/images/autistickidslogo.png` (copied to `public/assets/akc-logo.png`), plus mark-only and butterfly-only versions derived from it.
- **Absent, and must not be fabricated:**
  - Real AKC photos. All current images in `public/images/*-placeholder.jpg` are Unsplash stand-ins marked `[Placeholder]`. They must be replaced with consented AKC photos.
  - Staff names, roles, bios and credentials.
  - Parent testimonials.
  - Statistics, outcomes, accreditations and awards.

## Product Principles

1. **Honest first.** Never invent claims, staff, testimonials, statistics or clinical services. When content is missing, mark it as a placeholder or hide the section.
2. **Answer the parent's real questions fast.** Fit, approach, cost, daily routine and how to make contact should each be easy to find and scan.
3. **Calm and predictable.** Many families arrive anxious or overwhelmed, so the experience should feel steady, structured and reassuring, never salesy or overstimulating.
4. **Child-first and respectful.** Language and imagery treat children as capable individuals and families as partners.
5. **Easy next step.** Calling, emailing, visiting and enquiring should always be within reach, especially on mobile.

## Accessibility & Inclusion

- WCAG 2.2 AA as the baseline: contrast, visible focus, touch targets of at least 44px, and semantic landmarks with each section labelled by its heading.
- Respect `prefers-reduced-motion`. Motion is minimal and never decorative-looping. The audience includes neurodivergent children and parents, so avoid sensory overload.
- Imagery: candid, consented photos. No children staring at the camera, no medical settings, no puzzle-piece imagery.
