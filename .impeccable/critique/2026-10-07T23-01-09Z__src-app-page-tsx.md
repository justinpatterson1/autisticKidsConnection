---
target: homepage (src/app/page.tsx)
total_score: 24
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 2
target_identity: "file:D:\\Development Files\\React Development\\autisticKidsConnection\\src\\app\\page.tsx"
target_fingerprint: "sha256:72bb3d66ca6a837182ba7bf7a3071d625ae7631ca73f7c8a381cf98ad91e7d53"
target_path: "D:\\Development Files\\React Development\\autisticKidsConnection\\src\\app\\page.tsx"
timestamp: 2026-10-07T23-01-09Z
slug: src-app-page-tsx
closed: true
---
Method: dual-agent (A: design review sub-agent · B: detector/browser sub-agent)

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Form/accordion states clear; no "where am I" on a very long page |
| 2 | Match System / Real World | 3 | Parent language; "$" never says TT$ or US$ |
| 3 | User Control and Freedom | 3 | Menu Esc/tap-out, chips toggle; accordion closes the panel you were reading; mobile nav lost after the hero |
| 4 | Consistency and Standards | 2 | Three names per package (Services / Fees / form chips); sky submit differs from other main buttons |
| 5 | Error Prevention | 3 | Rule stated up front, inline checks, honeypot; Child's age has no hint |
| 6 | Recognition Rather Than Recall | 2 | Costs scattered across Fees / Hours ($20) / Policies ($100); Hours has no anchor or nav link |
| 7 | Flexibility and Efficiency | n/a | One-time persuasion page; skip link, tap-to-call/email, sticky Call cover fast paths |
| 8 | Aesthetic and Minimalist Design | 3 | Calm, uncluttered; ~11.2k px desktop / 17.5k px mobile; three "more than a classroom" beats |
| 9 | Error Recovery | 3 | Focus to first bad field, specific messages; send-failure contacts not tappable, number wraps at 390px |
| 10 | Help and Documentation | 2 | No "what happens next" (visits, diagnosis needed?, class size, reply time) |
| **Total** | | **24/36** | **Acceptable (67%)** |

## Design Specificity Verdict
LLM: competent, calm, disciplined but mostly category-interchangeable (dark photo hero + badge + pills, overlap strip, ~10 identical eyebrow+H2 openers, 4 photo + 3 icon cards, featured-middle pricing row, manifesto band, two-tone closing slogan). Product-specific: the "A predictable school day" timeline and the logo-colour stripe/dots. Missed: AKC's structured routines and visual supports as the design language. Calm achieved; character not.

Detector: exit 0, 4 advisory `design-system-font-size` findings: text-[13px] fees-packages.tsx:50 and :166 (kicker, term pills); text-[19px] meet-the-team.tsx:27 and testimonials.tsx:21. Used consistently, so DESIGN.md is missing 13px (uppercase labels) and 19px steps. No overlap with the LLM review.

Browser overlay (headless, not user-visible): 1 finding at 1440 and 390, `buried-raster` on the Our Goal backdrop at 12% opacity (our-goal.tsx:19-25). Intentional and decorative (alt=""), partly a false positive; corroborates the existing "full-size image for a 12% backdrop" issue. No console errors.

## Overall Impression
Honest, accessible and calm. The weakness is the ending: after the emotional peak (Our Goal) the page runs prices, rules, penalties and a repeated slogan before the form. Biggest opportunity: reorder to end on reassurance, then give it one visual motif drawn from how AKC teaches.

## What's Working
1. School-day timeline + Aftercare panel: scannable in 3 seconds; look matches promise.
2. Mobile contact always in reach: sticky Call/Register (deferred until hero buttons leave), +1-868 tel links, phone-or-email form with "Not sure yet" and a plain privacy note.
3. Honest restraint: no fake staff/testimonials/stats, AA contrast, clear focus ring, policies in an accordion.

## Priority Issues
- [P1] Page ends on rules, not reassurance (src/app/page.tsx). Fees, Hours, Policies (penalties, "dysregulation", premature "Thank you for choosing AKC"), Vision (restates Goal), then Contact; daily routine buried after prices; no "what happens next". Fix: Hours after Services; Fees just before Contact; Policies after Contact or a closed-by-default "Before you enrol" accordion; fold Vision into Goal; 3-step "What happens next" above the form ([Placeholder] until AKC confirms). Command: /impeccable layout.
- [P1] Fees read as a "pick a plan" table (fees-packages.tsx, fees.ts). Featured dark middle card is the upsell trope; package names differ across Services/Fees/form; no currency; $3,500-$4,000 unexplained. AKC-supplied copy issues: Preschool "for children who are not on the autism spectrum", Potty Care $200 vs $300. Fix: equal-weight cards, one name per package, TT$ once confirmed, "Not sure which fits?" link to #contact with "Not sure yet" pre-selected, ask AKC about wording and prices. Command: /impeccable clarify.
- [P2] Mobile nav disappears mid-page; sticky bar intrudes in the form (sticky-mobile-cta.tsx, mobile-menu.tsx). Menu scrolls away below 1180px on a 17.5k px page; sticky Register covers ~76px inside the form; open menu doesn't trap focus. Fix: compact Menu in the sticky bar, hide the bar while #contact is visible, focus trap, #hours anchor. Command: /impeccable adapt.
- [P2] Generic visual language; pedagogy never shown (section-heading.tsx, our-approach.tsx, our-services.tsx, our-vision.tsx). ~10 identical openers, flat 9-item Approach list, 7 Services cards without a subheading, three repeated manifesto beats. Fix: visual-schedule cards as the signature motif (Approach + school day), group Approach under Learning/Development/Wellbeing, label extracurriculars, merge Vision into Goal. Commands: /impeccable distill then /impeccable bolder.
- [P3] Form state rough edges (enquiry-form.tsx, contact.ts). Error-box phone/email not tappable and the number wraps mid-digit at 390px; shared phone-or-email error sits after Child's age; success says "soon" with no timeframe; no age hint; contact-row email breaks at "gmail."/"com" at 390px. Fix: tappable nowrap links, error under Phone/Email, reply-time promise once confirmed, "e.g. 4 years". Command: /impeccable harden.

## Persona Red Flags
- Jordan: three naming systems (Services, Fees, chips); "$" currency unknown; no way to learn how to visit or what happens next.
- Casey: Menu gone after the hero and Hours has no anchor; Menu top-right out of thumb reach; sticky Register useless in the form; error phone not tappable and wraps.
- Riley: valid submit fails generically (no key here) with non-tappable contacts; Child's age accepts any text; opening one policy closes another; unexplained $3,500-$4,000 and Potty Care prices; focus escapes the open menu.
- Maya (newly diagnosed 3-year-old, not toilet-trained): Preschool line sorts her child by diagnosis; two Potty Care prices with the rule two sections away; no answer on diagnosis, class size or teachers (team hidden, no interim line); last read before "Come grow with us" is a dysregulation liability policy.

## Minor Observations
- Vision paragraph above the H2 (per spec); its two-tone slogan is the largest type after the hero for the least informative content.
- ~350px empty left column under the contact rows on desktop; empty top-right in School Hours.
- Hero educator's head cropped by the header at 1440; "Now registering" repeats in Hero and Contact.
- Accordion opens on Payment by default.
- Key-info address underline wraps to two lines at 1440, unbalancing the strip.
- Add 13px and 19px steps to DESIGN.md (detector).

## Questions to Consider
- What if the page read like a child's visual schedule?
- Why is "which package fits my child" styled as a SaaS plan picker with a featured tier?
- Should late fees and property damage be the last substantive thing before "Come grow with us"?
- Goal, Vision and "more than a learning environment" say one thing three times: keep one, and could a first-visit walkthrough replace the others?
