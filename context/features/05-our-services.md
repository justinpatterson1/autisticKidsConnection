# 05 · Our services

Section PRD for the Autistic Kids Connection homepage. Design reference: `AKC Homepage v4.dc.html`. Styles: `../DESIGN-SYSTEM.md`.

| | |
|---|---|
| Anchor | `#services` |
| Background | White |
| Position | Section 5 of 16 |

## Purpose
Present the four core services and three extracurriculars clearly enough for parents to picture their child taking part.

## Requirements
- Row 1: four photo cards (4/2/1 columns at 1100/600px).
- Row 2: three icon cards: Music, Physical Education, Birthday Club.
- No emoji; line icons in blue circles.
- Hover lift respects reduced motion.

## Acceptance criteria
- [ ] Copy verbatim from school content.
- [ ] No orphan card at any breakpoint.
- [ ] WCAG AA contrast, visible focus ring (#F5B020), reduced-motion respected.
- [ ] Responsive from 320px to 1920px with no horizontal scroll.

## Build prompt

**Global prefix**
> You are building a section of the Autistic Kids Connection (AKC) website, a school in Curepe, Trinidad & Tobago offering homeschooling, tutoring and developmental support for children with autism and other developmental or learning differences. Follow DESIGN-SYSTEM.md exactly: Poppins type, primary blue #1A6E99, navy #1C3254, tint #EEF5FA, sand #F7F5F1, logo accent colours only where specified. Clean Corporate-Empathy style: structured, calm, credible, warm. WCAG AA contrast, 44px+ touch targets, visible focus ring #F5B020, reduced-motion support, semantic HTML with the section `aria-labelledby` its heading. Fully responsive; mobile is not a shrunken desktop. Use the supplied copy verbatim. Do not invent facts, statistics, staff or testimonials.

**Section prompt**
> Centred eyebrow "Our services" (rules both sides) and H2 "Support shaped around each child". Row 1: four photo cards (4 cols ≥1100px, 2 cols ≥600px, 1 col below; never leave an orphan). Each: white, radius 20, hairline ring, 4:3 candid photo, H3 20px/600, body 15px muted; hover lifts 4px with soft shadow. Cards: "One-on-One Tutoring" – "Individual attention designed around your child's learning needs and goals."; "Small-Group Learning" – "A supportive classroom environment that allows children to learn alongside peers while receiving individualized guidance."; "Life Skills" – "Developing practical skills that encourage independence, confidence and participation in everyday life."; "Sensory Play & Movement" – "Activities designed to support regulation, body awareness, coordination and engagement." Row 2: three sand (#F7F5F1) icon cards with 60px solid blue icon circles (no emoji): "Music Program" (music note) – "Our music program gives children opportunities to explore rhythm, sound, movement and self-expression in a fun and supportive environment."; "Physical Education" (ball) – "Our Physical Education program encourages children to move, play and develop their physical abilities in a supportive environment."; "Birthday Club" (cake) – "We believe every child deserves to feel celebrated and included." + "Our Birthday Club gives us an opportunity to recognize and celebrate our children's special days together, creating positive memories and strengthening our AKC community."
