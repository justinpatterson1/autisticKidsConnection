# AI Interaction Guidelines

## Workflow

1. **Read context first.** `CLAUDE.md`, then [project_overview.md](project_overview.md), then [design-system.md](design-system.md), then the PRD for whatever you're building in [features/](features/).
2. **[design-system.md](design-system.md) is the design reference; the PRDs are the detail.** Use the design system for anything cross-cutting — a token value, a type-scale row, a radius, a hover-lift distance, a motion duration, a copy rule — instead of re-deriving it from a PRD or from the prototype. Go to the PRD for the component you are building; it carries anatomy and acceptance criteria the design system only summarizes. The two should agree. If they disagree, the component's PRD wins and design-system.md gets corrected in the same change — say so in the review.
3. **The PRDs are design truth, not architecture truth.** They were written for a no-bundler HTML + Babel prototype. This repo is Next.js 16 + React 19 + Tailwind v4. Port the tokens, type scale, layout, copy and motion verbatim; translate the delivery. See §3 of the overview.
4. **Confirm before large changes.** For multi-file work or an architectural call, outline the plan and get approval.
5. **Work incrementally.** One PRD at a time, in the build order from [features/00-README-component-index.md](features/00-README-component-index.md). Don't bundle unrelated changes.
6. **Stay in scope.** Only modify what's asked. No drive-by refactors, extra abstractions, or bonus sections.

## Feature lifecycle

Work is tracked through the `/feature` skill against [current-feature.md](current-feature.md): `load` → `start` → `review` → `explain` → `complete`. Don't hand-edit the `## History` section; `complete` appends to it.

## Communication

- Be concise and direct.
- Lead with the action or answer, not the reasoning.
- When referencing code, include file paths and line numbers.
- Ask clarifying questions when requirements are ambiguous rather than guessing.

## Code Changes

- Read files before editing them.
- Prefer editing existing files over creating new ones.
- Check `npm run build` and `npm run lint` before calling a change done.
- Follow [coding-standards.md](coding-standards.md).
- When a change alters a shared value — a token, a type-scale row, a radius, a motion timing, an icon stroke width — update [design-system.md](design-system.md) in the same commit. It is a live reference, not a snapshot.

## Next.js 16

This is a recent major and its APIs may differ from training data. Read the relevant guide in `node_modules/next/dist/docs/01-app/` before writing routing, metadata, font, image or config code. Don't write Next.js API calls from memory, and heed deprecation notices.

## Verification

There is no test runner in this project — it's a static marketing page with no server logic. A section is verified by looking at it:

- Light **and** dark theme.
- All four palettes (Violet, Cobalt, Sunset, Forest).
- All three widths: >980px, ≤980px, ≤640px.
- Keyboard focus reaches every interactive element and the focus ring is visible in both themes.
- Ambient motion stops under `prefers-reduced-motion`; hover transitions still work.

Don't add a test runner without asking.

## What to Avoid

- Don't hardcode colors. Every color reads a token — the full set is [design-system.md](design-system.md) §2, and the only literal-`white` exceptions are listed in §2.4.
- Don't invent a value the design system already names. No new radii, sizes, durations or shades outside §3–§8; if a section genuinely needs one, add it there first.
- Don't add a database, auth, API route or CMS. There is no backend — see [backend-architecture.md](backend-architecture.md).
- Don't reach for a UI or animation library. Icons are inline SVG; motion is CSS keyframes.
- Don't add comments, docstrings, or type annotations to unchanged code.
- Don't add error handling for impossible scenarios.
- Don't create utilities or abstractions for one-time operations.
- Don't add backwards-compatibility shims — just change the code.
- Don't mark a PRD complete while its acceptance criteria are unmet. If one can't be met, say so explicitly.
