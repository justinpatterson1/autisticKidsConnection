---
target: homepage
total_score: 20
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
target_identity: "file:D:\\Development Files\\React Development\\autisticKidsConnection\\src\\app\\page.tsx"
target_fingerprint: "sha256:fb513ead7574d0d46067fdb9d518062578a19592ddb0172b858b0e95ff193635"
target_path: "D:\\Development Files\\React Development\\autisticKidsConnection\\src\\app\\page.tsx"
timestamp: 2026-10-06T14-30-13Z
slug: src-app-page-tsx
---
Method: dual-agent (A: design review · B: detector + browser)
Target: src/app/page.tsx (homepage, 7 of 16 sections built)

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 2 | Header is absolute, not sticky (site-header.tsx:22); active nav fixed on "Home" |
| 2 | Match System / Real World | 3 | "Register Now" asks for commitment from a parent still asking questions; "Find us: Curepe" too vague |
| 3 | User Control and Freedom | 3 | Good menu Escape/focus return; no persistent header on a 9,160px mobile scroll |
| 4 | Consistency and Standards | 3 | Goal pills look like the ghost buttons; Home + logo duplicate |
| 5 | Error Prevention | 2 | 8 links to #fees/#contact, including both hero CTAs and Register, go nowhere yet |
| 6 | Recognition Rather Than Recall | 3 | Phone shown only >=1480px; no address or map link |
| 7 | Flexibility and Efficiency | n/a | One-page Persuade surface |
| 8 | Aesthetic and Minimalist Design | 3 | Calm and restrained; long equal-weight lists (9 + 7 + 5 + 5) |
| 9 | Error Recovery | 1 | Dead CTA taps fail silently, no tel:/mailto: fallback |
| 10 | Help and Documentation | n/a | Marketing page; FAQ-style policies come later |
| Total | | 20/32 (63%) | Acceptable |

## Design Specificity
Competent, calm, mostly category-interchangeable. Owned moves: brand stripe, logo-colour goal pills, "connection comes before correction" quote, Caribbean children in the hero. Five sections share the same opening (eyebrow -> 46px H2 -> muted paragraph -> list/grid); About and Families are mirrored photo/text splits. Nothing beyond the word "Curepe" says Trinidad; the school's own method (structured routines, visual supports) is never shown.
Detector: CLI 0 findings. Browser overlay: 1 buried-raster (our-goal.tsx:20-26, full-bleed photo at 12% opacity, reusing the Services small-group photo). Supplementary: no overflow at 390/1440; logo link 231x40 on mobile (<44px); #fees and #contact missing.

## Priority Issues
- [P1] No way to call on most screens; every CTA is a dead anchor until sections 13-16 ship. Phone only >=1480px (site-header.tsx:83). Fix: show phone from 1180px, tel: Call button beside Menu on mobile, interim tel:/mailto: or ship sticky mobile CTA early. -> /impeccable adapt
- [P1] Header scrolls away on a 9,160px mobile page. Fix: sticky bottom CTA bar (feature 16) now, or a compact sticky header. -> /impeccable layout
- [P1] Structural sameness and flat lists. 9 equal checklist tiles = ~750px of identical rows on mobile. Fix: cluster Approach into 3 themes or a visual-schedule strip; drop redundant eyebrows on 2+ sections. -> /impeccable layout, /impeccable distill
- [P2] Imagery breaks the T&T story: Family photo is the same shoot/teacher/room as the hero; Life Skills (white family home kitchen) and About inset read as stock-elsewhere. Fix: re-source stand-ins to match setting until real photos arrive; no repeats. -> /impeccable polish
- [P2] Hero H1 breaks against its rhythm ("Differences. Building" at 1440). Fix: each sentence a block span; consider ~60px max. -> /impeccable typeset

## Persona Red Flags
Jordan: taps "Programs & Fees", nothing happens; Home and logo do the same thing. Casey: no phone on mobile, header gone after first screen, 9 tiles + 7 cards to thumb through, location not tappable. Riley: 8 dead anchors, non-interactive pills that look like buttons, active nav stuck on Home, phone vanishes 1180-1479px. Anxious T&T parent: recognises their child in the hero, then sees the same teacher again in Families and a foreign kitchen in Life Skills; no "visits welcome", no street address.

## Minor Observations
Our Goal backdrop reuses a visible photo and downloads full-size for 12% opacity. Services titles wrap unevenly at 1440; Birthday Club card ~2x Music height. Families: left list ends well above the right column; one-line body adds little under the H2. Key-info strip lacks pickup time/phone. Header descriptor 12px. Mobile logo link 40px tall.

## Questions
- Should the first ask be "Book a visit"/"Call us" rather than "Register Now"?
- What would make this page impossible to mistake for a school in Toronto or Atlanta?
- Could the page work like a visual schedule (fit -> approach -> a day here -> cost -> visit)?
