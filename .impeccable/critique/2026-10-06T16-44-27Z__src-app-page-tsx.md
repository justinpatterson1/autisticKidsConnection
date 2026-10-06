---
target: homepage
total_score: 23
max_score: 36
na_heuristics: 10
p0_count: 0
p1_count: 2
target_identity: "file:D:\\Development Files\\React Development\\autisticKidsConnection\\src\\app\\page.tsx"
target_fingerprint: "sha256:79a3173a14a30041c768f461b939235beca7beb9da03e2820fbd1ff8a0962ff5"
target_path: "D:\\Development Files\\React Development\\autisticKidsConnection\\src\\app\\page.tsx"
timestamp: 2026-10-06T16-44-27Z
slug: src-app-page-tsx
---
Method: dual-agent (A: design review · B: detector + browser)
Target: src/app/page.tsx (7 of 16 sections + compact desktop header + sticky mobile CTA)

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 2 | No scroll-aware nav state; Register/Contact open mail with no cue |
| 2 | Match System / Real World | 3 | "Register Now" actually sends an enquiry email |
| 3 | User Control and Freedom | 2 | mailto exits page; mobile menu ignores outside tap, no focus move |
| 4 | Consistency and Standards | 3 | Descriptor duplicated at 640-1179 |
| 5 | Error Prevention | 2 | 4 dead #fees links (expected); no email text <640 |
| 6 | Recognition Rather Than Recall | 3 | Sticky bar, compact header, address keep next step in view |
| 7 | Flexibility and Efficiency | 3 | Skip link, tel:+1868, Maps link, thumb-zone bar |
| 8 | Aesthetic and Minimalist Design | 3 | Two Register pills ~40px apart on phone first screen |
| 9 | Error Recovery | 2 | No mail client = silent dead CTA; phones lack email fallback |
| 10 | Help and Documentation | n/a | Marketing page |
| Total | | 23/36 (64%) | Acceptable, flat vs run 2 |

## Design Specificity
Calm, on-brief, structurally a standard care-provider landing page; AKC lives in its words + stripe/dots. The page's most specific sentence ("first word... write a name") sits small and muted under five uppercase value words.
Detector: CLI 0. Browser: 1 buried-raster (goal backdrop, now unique photo). Supplementary: no overflow, no text <14px, targets >=44, images load, headings ordered, sticky bar clear, compact header visible at y=1600, two-tone focus ring computed. Only broken: 4x #fees.

## Priority Issues
- [P1] Register Now is first ask and silently opens email; no low-commitment path; phones see no email text. Fix: caption under hero CTA (copy needs approval) + email visible on phones. -> /impeccable clarify
- [P1] #fees dead links are a release risk. Fix: build section 08 before deploy or gate links.
- [P2] Descriptor duplicated at 640-1179 (header sm:max-nav + hero kicker; regression from polish). Fix: one per width. -> /impeccable polish
- [P2] Phone first screen: two identical Register buttons; sticky bar covers key-info at 1024 on load. Fix: show sticky bar only after hero CTAs leave view (IntersectionObserver). -> /impeccable adapt
- [P2] Emotional peak under-designed: value words outrank "We celebrate progress..." Fix: flip hierarchy, supplied copy unchanged. -> /impeccable typeset or layout
- [P3] Focus ring fades in via transition-colors (outline-color animates); DESIGN says background only. Fix: transition-[background-color]. -> /impeccable polish

## Persona Red Flags
Jordan: Contact opens Outlook; Fees dead; "About" vs "Who we support"; no age range. Casey: ~8.9k px, 7 stacked cards; no email text; doubled Register. Riley: dead CTA w/o mail client; menu outside tap/focus; no current-section indicator. T&T parent: no class size/ratio/age/first-visit info (content gaps); handwashing photo is a home kitchen.

## Minor Observations
Teacher's head under header bar at 1440; Approach intro leaves wide gap beside H2 at 1440; key-info address wraps 3 ragged lines at 1024-1180; Birthday Club card taller.

## Questions
- Should the first ask invite connection ("Come visit") rather than registration?
- Could the page show a real AKC day instead of service cards?
- Should "We celebrate progress..." be the biggest type after the hero?
