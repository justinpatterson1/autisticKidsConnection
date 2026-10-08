---
target: the homepage (src/app/page.tsx)
total_score: 25
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 2
target_identity: "file:D:\\Development Files\\React Development\\autisticKidsConnection\\src\\app\\page.tsx"
target_fingerprint: "sha256:3829ee4b9699acf78c866b82e4d9a50a57b1708a34c83805164a25f565d8de02"
target_path: "D:\\Development Files\\React Development\\autisticKidsConnection\\src\\app\\page.tsx"
timestamp: 2026-10-08T01-07-32Z
slug: src-app-page-tsx
closed: true
---
Method: dual-agent (A: design review · B: detector + browser evidence)

## Design Health Score: 25/36 (69%, Acceptable; H7 n/a)
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Form states good; nav aria-current never set |
| 2 | Match System / Real World | 2 | No currency; package names drift card vs chip; "Homeschooling" vs on-site day |
| 3 | User Control and Freedom | 3 | No way to correct/resend after success |
| 4 | Consistency and Standards | 3 | Register Now / Registration enquiry / Send enquiry |
| 5 | Error Prevention | 3 | Notes silently capped at 2,000 chars |
| 6 | Recognition Rather Than Recall | 3 | Mobile fee comparison spans ~3 screens |
| 7 | Flexibility and Efficiency | n/a | Single-page brochure |
| 8 | Aesthetic and Minimalist Design | 3 | 11 bands; Goal band stacks 3 statements |
| 9 | Error Recovery | 3 | Phone error doesn't state expected format |
| 10 | Help and Documentation | 2 | "What happens next" hidden; no visit/reply-time info |

## Design Specificity
Competent system, two authored moments (visual school-day schedule, Goal progress line); rest is eyebrow->H2->card-grid repeated. Detector: 0 findings over 51 files. Browser overlay skipped (no browser automation tool).

## Priority Issues
1. [P1] Email subject regex `/s+/g` strips letter "s" from parent names (send-enquiry.ts:60). Fix: `/\s+/g` + trim. (harden)
2. [P1] Fees hard to read: no currency, "not on the autism spectrum" subtitle reads exclusionary (fees.ts:46), monthly vs termly logic buried in policies after form, card/chip names mismatch. (clarify, layout)
3. [P2] No "what happens after I enquire"; NEXT_STEPS empty; "Register Now" over-promises. (clarify, onboard)
4. [P2] Page ends on penalties + presumptive "Thank you for choosing AKC". Move Policies above Contact. (layout, clarify)
5. [P3] Structural sameness across sections; Contact left column void at 1440 with Next Steps hidden. (layout, bolder)

## Persona Red Flags
- Jordan: school vs tutoring vs homeschool unclear; which package is my child; diagnosis needed?
- Riley: subject bug; silent 2,000 cap; RESEND sender/key unverified (local error state observed); no post-success correction.
- Casey: Call icon-only <400px; otherwise strong mobile reach.
- Anxious T&T parent: no WhatsApp; stock photos; no class size/visit info; exclusionary preschool line.

## Minor
Goal-band vision line competes with peak; "Find us" wraps in info strip at 1440; Services H3 min-h leaves blank line; mobile menu duplicates Register; success state doesn't echo reply address.

## Questions
- Should the page follow a "your first week" sequence like the schedule does?
- WhatsApp vs six-field form?
- "Register Now" vs "Come for a visit"?
