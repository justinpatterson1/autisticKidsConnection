# Test Action

This project has **no test runner**. It is a static marketing page with no server logic, no data layer and no API routes — there is nothing a unit test would meaningfully cover. Verification is visual and mechanical instead.

1. Read `current-feature.md` to understand what was implemented.
2. Run the checks that must pass:
   - `npm run lint`
   - `npm run build`
3. Verify the feature visually against its PRD acceptance criteria:
   - **Both themes** — light and dark.
   - **All four palettes** — Violet, Cobalt, Sunset, Forest.
   - **All three widths** — >980px, ≤980px, ≤640px.
   - **Keyboard** — focus reaches every interactive element and the focus ring is visible in both themes.
   - **Reduced motion** — ambient loops stop under `prefers-reduced-motion`; hover transitions still work.
4. Re-read the acceptance criteria in the feature's PRD under `context/features/` and confirm each one, individually.
5. Report what passed, what failed, and anything that could not be checked. Do not report a criterion as met if it was not actually verified.

**Do not add a test runner.** If a utility appears that genuinely warrants unit tests, raise it with the user as a decision — adding Vitest is not a drive-by change.
