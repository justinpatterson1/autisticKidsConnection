# Coding Standards

Scope: the JusDev portfolio — a Next.js 16 App Router site with no database, no auth and no API routes. If a rule here would only make sense in an app with a backend, it doesn't belong.

## TypeScript

- Strict mode is on. No `any` unless there is genuinely no alternative, and say why in a comment when you use one.
- Interfaces for object shapes, type aliases for unions and intersections.
- Prefer `const` over `let`. Never `var`.
- Content constants get explicit types and `as const` where the literal values matter (`NAV_ITEMS`, `PALETTES`).

## React / Next.js

- **Server components by default.** Add `"use client"` only for the things that need it: the sidebar (scrollspy and route-aware links), the theme toggle, the Selected Work slider arrows, and the Tweaks panel if it gets built.
- Push `"use client"` as far down the tree as possible. A section that is static markup except for one interactive control should stay a server component and import a small client child.
- Use App Router conventions (`page.tsx`, `layout.tsx`, `not-found.tsx`).
- Use the `@/*` path alias (maps to `./src/*`). No `../../..` imports.
- Use `next/image` for the About photo and project screenshots, `next/font/google` for Poppins. Don't hand-roll `<link rel="stylesheet">` font loading or bare `<img>`.

**Next.js 16 is recent and its APIs may differ from training data.** Before writing routing, metadata, font, image or config code, read the relevant guide in `node_modules/next/dist/docs/01-app/`. Don't write Next.js API calls from memory.

## Styling

Tailwind CSS v4, configured in CSS — there is no `tailwind.config.js`.

- **Design tokens are the single source of color.** Declare the raw values as custom properties in `src/app/globals.css`, then expose them through `@theme` so they become utilities. The token names and `oklch()` / hex values come from [features/00-foundations.md](features/00-foundations.md) and are copied verbatim; [design-system.md](design-system.md) §2 lists the same set with the role each token plays, and is the faster lookup.
- **Other shared values come from the design system too.** Type scale (§3), spacing and grids (§4), radii and shadows (§5), icon stroke widths and sizes (§6), component anatomy (§7), motion durations and easings (§8) are all specified in [design-system.md](design-system.md). Read the value there rather than eyeballing it from a neighbouring component.
- **Never hardcode a color in a component.** No `#fff`, `white`, `black`, or a raw hex in `className`. The only exceptions the spec allows are the accent CTA text, chip hover text, featured service text, the project glyph, and fills inside SVGs.
- Dark mode is driven by `data-theme="dark"` on `<html>`, not by Tailwind's `dark:` media strategy and not by `prefers-color-scheme`. Register a custom variant so `dark:` maps to the attribute.
- The two breakpoints (980px, 640px) are named screens in `@theme`. Use them as variants; don't write arbitrary `[@media(max-width:980px)]` values inline.
- Keyframes, the base type scale and anything Tailwind can't express live in `globals.css`. Everything else is utilities on the element.
- **Both themes, every time.** A component isn't done until it has been checked in light and dark.
- **Keep the design system current.** Changing a token, a scale row, a radius or a timing means editing [design-system.md](design-system.md) in the same commit.

## Accessibility

- Every interactive element is a real `<button>` or `<a>`. No click handlers on `<div>`.
- Icon-only controls (the whole sidebar rail, social links, project actions) need an `aria-label`.
- Tooltips and hover reveals must also trigger on `:focus-visible`.
- Respect `prefers-reduced-motion`: ambient loops off, hover transitions on.
- Don't remove focus outlines without replacing them with something visible in both themes.

## Naming Conventions

- **Files:** kebab-case (`hero-background.tsx`, `work-slider.tsx`).
- **Component exports:** PascalCase (`HeroBackground`, `WorkSlider`).
- **Variables/functions:** camelCase.
- **Types/interfaces:** PascalCase.
- **Content constants:** SCREAMING_SNAKE_CASE (`SKILLS`, `PROJECTS`, `NAV_ITEMS`).
- **CSS custom properties:** the exact names from the foundations PRD. Don't rename or "improve" them.

## Project Structure

```
src/
  app/           App Router pages, layout, globals.css
  components/
    layout/      Sidebar, TechTicker, Footer
    home/        Hero, About, Skills, Projects, Services and their parts
    ui/          Shared primitives
    icons/       The 19-icon set
  lib/
    content/     Typed content constants
    theme/       Palette definitions + theme helpers
  types/         Shared types
public/          Images, resume PDF, favicon
```

One component per file. A section component that grows past roughly 150 lines usually wants its subparts split into siblings in the same folder.

## Content

Copy and data live in `src/lib/content/`, not inline in layout components. The exceptions the PRDs call out — Hero headline, About bio, Footer contact details — stay inline because they are prose, not repeated records.

## Verification

- `npm run build` and `npm run lint` must pass before a feature is called done.
- There is no test runner in this project. Sections are verified by looking at them: both themes, all four palettes, and all three widths (>980, ≤980, ≤640).
- If a utility ever gets complex enough to want a unit test, raise it — adding a test runner is a decision, not a drive-by.
