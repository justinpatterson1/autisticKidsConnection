---
target: homepage
total_score: 23
max_score: 36
na_heuristics: 10
p0_count: 0
p1_count: 2
target_identity: "file:D:\\Development Files\\React Development\\autisticKidsConnection\\src\\app\\page.tsx"
target_fingerprint: "sha256:cab7d0491dc42407b63fae101d3c7b36706c234a39e388b1e7c525e1b74a9957"
target_path: "D:\\Development Files\\React Development\\autisticKidsConnection\\src\\app\\page.tsx"
timestamp: 2026-10-06T16-21-11Z
slug: src-app-page-tsx
closed: true
---
Method: dual-agent (A: design review · B: detector + browser)
Target: src/app/page.tsx (homepage, 7 of 16 sections + sticky mobile CTA)

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 2 | Desktop header not sticky; nav/phone/Register gone after hero |
| 2 | Match System / Real World | 3 | "Register Now" opens email; school vs homeschool ambiguity |
| 3 | User Control and Freedom | 2 | Nav "Contact" silently opens mail app; menu ignores outside tap |
| 4 | Consistency and Standards | 3 | Goal pills share outlined-button form |
| 5 | Error Prevention | 2 | 2 dead #fees links (expected); mailto no fallback; tel lacks +1-868 |
| 6 | Recognition Rather Than Recall | 3 | No street address or email shown as text |
| 7 | Flexibility and Efficiency | 3 | Skip link, tap-to-call, sticky mobile bar; nothing on desktop |
| 8 | Aesthetic and Minimalist Design | 3 | Calm; Register repeated 2-3x on mobile |
| 9 | Error Recovery | 2 | No mail client = dead Register/Contact, no address to copy |
| 10 | Help and Documentation | n/a | Marketing page |
| Total | | 23/36 (64%) | Acceptable. Like-for-like with run 1 (7 n/a): 20/32, flat |

## Design Specificity
Calm, disciplined, still template-adjacent (standard education section sequence). Owned: brand stripe, logo-colour goal pills, the school's copy. No Trinidad presence beyond "Curepe"; butterfly unused beyond header.
Detector: CLI 0. Browser: 1 buried-raster (our-goal.tsx:21-24, 12% opacity reused photo). Supplementary: all targets >=44px, no text <14px, no overflow, dead in-page anchors down 8 -> 2 (#fees).

## Priority Issues
- [P1] First screen doesn't say what AKC is: descriptor hidden <640 and 1180-1479; H1 slogans; no "school/tutoring/ages/Curepe" above the fold. Fix: kicker beside badge using existing descriptor wording. -> /impeccable clarify, /impeccable layout
- [P1] Desktop loses the next step after the hero; mailto interim has no visible email/address/what-happens-next; tel lacks +1-868. Fix: show email + street as text (Find us -> Maps), tel:+18683717281, compact sticky desktop header or closing CTA band. -> /impeccable adapt, /impeccable harden
- [P2] Imagery repeats (Families = hero shoot; Goal reuses small-group) and reads non-T&T (US library inset, Christmas decor, designer kitchen). -> /impeccable polish
- [P2] Focus ring #F5B020 ~1.9:1 on white, below WCAG 1.4.11 3:1. Fix: two-tone navy+yellow ring. -> /impeccable audit, /impeccable polish
- [P2] Goal pills look like buttons (carried over). -> /impeccable polish

## Persona Red Flags
Jordan: school vs homeschool? ages? pills look tappable; Programs & Fees dead. Casey: menu unreachable mid-page; Register opens Gmail; hero fills first screen, Programs & Fees 11px under sticky bar. Riley: no mail client = dead CTAs; tel fails abroad; no-JS mobile nav; menu ignores outside tap; sticky bar last in tab order. T&T parent: non-verbal/visit questions unanswered (content gaps); US library + Christmas classroom read "not here"; strongest reassurance in bottom half.

## Minor Observations
Families ~160px empty above heading at 1440; approach panel column-fill vs row reading; key-info icons imply links; service bodies ~28ch at 1440; mobile hero min-height pushes strip below fold.

## Questions
- Could a parent say what AKC is from the first phone screen?
- "Come and see a day at AKC" vs "Register"?
- What if Our Goal came straight after the hero?
