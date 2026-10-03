# Project Overview — JusDev Portfolio

A single-page portfolio for Justin Sheppard, a Full Stack Developer based in Trinidad and Tobago. This file describes what the site is, how it's put together, and how to work on it.

The visual language is consolidated in [design-system.md](design-system.md) — read it before any UI work. Component-level specs live in `context/features/`; start with [00-README-component-index.md](features/00-README-component-index.md).

> **Read this first if you are new to the repo.** The 16 PRDs in `context/features/` were written against an earlier no-bundler prototype (`JusDev Portfolio.html` + `app.jsx`, React 18 UMD, Babel standalone). **That is not what we are building.** This repo is a Next.js App Router application. The PRDs are the authoritative source for *design* — tokens, type scale, layout, copy, motion, component anatomy — and are **not** authoritative for *architecture*. See §3.

---

## 1. Purpose

The site needs to do three things:

1. **Say who Justin is and what he builds.** Hero, About.
2. **Show proof.** Skills, Projects, Services, Tech ticker.
3. **Get the visitor to make contact.** Sidebar CTA, Footer mail link.

Everything on the page supports one of those three. If a new section doesn't, it doesn't belong.

---

## 2. Design principles

- **Keep it minimal, with strong color.** Lots of whitespace and few elements, but the accent is saturated and used with confidence. Don't dilute it.
- **One accent, one punch color.** Violet (`--accent`) carries the structure. Coral (`--co-coral`) appears at most once per section as a highlight. Never use it for anything structural.
- **Alternate light and dark sections.** Light → light → tinted → **dark** → light band → **dark**. There are exactly two dark sections (Services, Footer). Don't add a third.
- **Every headline ends in a period.** This matches the `JusDev.` wordmark. "Skills Acquired." "Featured Projects." "Let's work together."
- **Headlines get negative tracking, uppercase labels get positive tracking,** and nothing else gets tracking.
- **Motion is ambient or responsive, never decorative on load.** Background loops are slow (14–60s). Hover states are fast (0.15–0.3s). Nothing animates in on scroll.

---

## 3. Tech stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Next.js 16 (App Router) | Routing, RSC, image + font optimization |
| UI | React 19 | Server components by default |
| Language | TypeScript (strict) | — |
| Styling | Tailwind CSS v4, `@theme` tokens | Design tokens exposed as utilities |
| Font | Poppins via `next/font/google`, weights 300–800 | Brand requirement |
| Icons | Inline SVG components | No dependency, inherits `currentColor` |
| Illustration | Inline SVG + CSS keyframes | Follows the palette automatically |
| Lint | ESLint 9 + `eslint-config-next` | — |
| Hosting | Vercel, server-rendered | Zero-config, branch previews, no adapter |
| Data | None | All content is typed constants in the repo |

No database, no auth, no API routes, no CMS. This is a content-static marketing page.

### What changed from the PRDs

| PRD says | This repo does |
|----------|----------------|
| `JusDev Portfolio.html` owns 100% of the CSS | `src/app/globals.css` owns tokens + keyframes; components use Tailwind utilities |
| `app.jsx` owns 100% of markup | One component file per section under `src/components/` |
| React 18 UMD from a CDN, pinned integrity hashes | React 19 via npm |
| Babel standalone transpiles in the browser | Next.js compiles at build time |
| Shared values hung off `window` | Normal ES imports |
| Hand-written custom properties in a `<style>` block | Same token *names* and *values*, declared in `globals.css` and registered with `@theme` |
| `tweaks-panel.jsx` dev overlay | Optional; skip unless asked (PRD 15) |

**The token names and values carry over verbatim.** `--accent`, `--bg`, `--ink`, `--on-ink`, `--hair` and the rest keep the exact `oklch()` / hex values from [00-foundations.md](features/00-foundations.md). Only the delivery mechanism changes.

### Next.js 16 caveat

This is a recent Next.js major and its APIs may differ from training data. Read the relevant guide in `node_modules/next/dist/docs/01-app/` before writing routing, metadata, font or config code. Do not write Next.js API calls from memory.

---

## 4. File structure

```
src/
  app/
    layout.tsx        Root layout: <html>, Poppins, theme bootstrap script, metadata
    page.tsx          Composes every section in render order
    globals.css       Tailwind import, @theme tokens, dark theme, keyframes
  components/
    layout/           Sidebar, TechTicker, Footer
    home/             Hero, HeroBackground, About, Experience, Work, Skills, Services, Education, Footer
    ui/               Shared primitives: Cta, Eyebrow, Pill, Chip, Section
    icons/            The 19-icon set
  lib/
    content/          Typed content constants: SKILLS, PROJECTS, SERVICES, TECHS, NAV_ITEMS
    theme/            Palette definitions + theme helpers
  types/              Shared TypeScript types
public/               me.jpg, project screenshots, favicon, resume PDF
context/              Project docs (this file) and PRDs under features/
```

**Split of responsibility:** `globals.css` owns tokens, base type and keyframes. Components own their own layout via Tailwind utilities. Content lives in `src/lib/content/`, never inlined in a component that also does layout.

---

## 5. Page structure

```
┌──────┬──────────────────────────────────────────────┐
│      │  01 Hero         copy + animated coder scene  │
│  S   │  02 About        photo slot + bio + 4 facts   │
│  I   │  03 Skills       2×2 category cards w/ chips  │
│  D   │  04 Projects     3 project cards              │
│  E   │  05 Services     ■ dark ■ 3×2 service cards   │
│  B   │  06 Tech ticker  infinite marquee band        │
│  A   │  07 Footer       ■ dark ■ contact + links     │
│  R   │                                               │
└──────┴──────────────────────────────────────────────┘
 88px    content max-width 1200px, centered
```

| # | Section | Component | Anchor id | Content source |
|---|---------|-----------|-----------|----------------|
| — | Sidebar | `<Sidebar>` | — | `NAV_ITEMS` |
| 01 | Hero | `<Hero>` | *(top)* | inline |
| 02 | About | `<About>` | `about` | inline |
| 03 | Skills | `<Skills>` | `skills` | `SKILLS` |
| 04 | Projects | `<Projects>` | `projects` | `PROJECTS` |
| 05 | Services | `<Services>` | `services` | `SERVICES` |
| 06 | Tech ticker | `<TechTicker>` | — | `TECHS` |
| 07 | Footer | `<Footer>` | `contact` | inline |

---

## 6. How it works

### 6.1 Rendering

`src/app/page.tsx` composes the sections in the order above. Sections are **server components by default**. Only the pieces that need browser state get `"use client"`:

- `<Sidebar>` — scrollspy listener
- theme toggle — reads/writes `localStorage`
- `<TechTicker>` — hover pause
- `<TweaksPanel>` — if built at all

Everything else (Hero copy, About, Skills, Projects, Services, Footer) is static markup and should stay on the server.

### 6.2 Theming — the core mechanism

All color comes from CSS custom properties on `<html>`. Nothing in component styling hardcodes a theme color.

```
Theme state (theme, palette)
      │
      ▼
<html data-theme="dark" style="--accent: …; --accent-soft: …">
      │
      ▼  cascade
Every utility resolving to var(--color-accent), var(--color-bg), …
```

- **Light/dark:** a client component sets `data-theme` on `<html>`. `globals.css` swaps the token set under `html[data-theme="dark"]`. The choice is saved to `localStorage['jusdev-theme']`.
- **Accent palette:** five accent tokens are written inline on `<html>`. Four palettes: Violet (default), Cobalt, Sunset, Forest. Definitions in `src/lib/theme/`.
- **Why it's fast:** changing theme or palette re-renders zero components. The browser just re-resolves variables.
- **`--accent-strong` swaps to `accentLight` in dark mode** — the light-mode value is too dark to read on a dark surface.

Two things to preserve if you touch background handling:

1. The light-mode `--bg` is written inline on `<html>`, and inline styles beat the `html[data-theme="dark"]` selector. In dark mode the theme effect must explicitly **remove** that inline `--bg`.
2. A small script runs in `<head>` **before paint** to apply the stored theme. Without it the page flashes light for one frame on a dark-mode load. This was a known bug in the prototype; don't reintroduce it.

### 6.3 Navigation

The sidebar is a fixed icon rail with a tooltip on each icon.

- **Scrollspy:** on scroll, the section whose top has passed `scrollY + 140` becomes active. Above `scrollY < 200`, Home is always active. When the page is scrolled to its end, the last section present is active, because a last section shorter than the viewport can never bring its top to the 140px line (the footer is 528px on desktop).
- **Click:** smooth-scrolls to the section with a 40px offset.
- **Order dependency:** `NAV_ITEMS` must stay in the same order as the sections in `page.tsx`.

### 6.4 Motion

| Where | What | Loop |
|-------|------|------|
| Hero background | Drifting grid, 3 blurred orbs, rotating orbit, 9 particles | 14–60s |
| Coder scene | Head bob, typing arms, code flicker, cursor, steam, floaters | 0.45–5s |
| Tech ticker | Marquee, pauses on hover | 40s |
| Status pill | Pulsing dot | 2.4s |

All ambient motion stops under `prefers-reduced-motion`. Hover transitions stay on — they are discrete state changes, not ambient animation.

### 6.5 Responsive

Two breakpoints only.

| Width | Sidebar | Grids |
|-------|---------|-------|
| > 980px | 88px | Full layout |
| ≤ 980px | 72px | Hero/About/Skills/Footer go to 1 column. Projects/Services go to 2 columns. |
| ≤ 640px | 64px | Everything goes to 1 column. Tighter padding. |

The sidebar never becomes a hamburger menu. It narrows instead.

These are custom widths, not Tailwind's default stops. Register them as named screens in `@theme` so components use them as ordinary variants rather than arbitrary values.

---

## 7. Editing content

All copy lives in typed constants under `src/lib/content/`.

| To change | Edit |
|-----------|------|
| Skill categories/chips | `SKILLS` |
| Projects | `PROJECTS` |
| Services / featured service | `SERVICES` (`featured: true` on exactly one) |
| Ticker technologies | `TECHS` |
| Nav icons/labels | `NAV_ITEMS` |
| Hero headline, bio, CTAs | `<Hero>` |
| About bio + 4 fact tiles | `<About>` |
| Email, socials, copyright | `<Footer>` |

### Adding the photo

Put `me.jpg` (4:5 portrait, 800×1000px or larger) in `public/`, then render it through `next/image` inside the photo frame in `<About>`, replacing the placeholder. Give it explicit `width`/`height` and a real `alt`.

### Adding project screenshots

Put 16:10 images (800×500px or larger) in `public/`, add an `image` field to each `PROJECTS` entry, and swap `<ProjectThumb>` for a `next/image` inside the thumb. See [10-projects.md](features/10-projects.md).

### Changing the brand color

Add or edit an entry in the palette map in `src/lib/theme/`. The construction rules for a new palette are in [00-foundations.md](features/00-foundations.md) §3.

---

## 8. Before launch

### Placeholders to replace

- [ ] Photo in About (`public/me.jpg`)
- [ ] `hello@example.com` — **appears twice** in Footer
- [ ] LinkedIn, Twitter/X, GitHub `href="#"` in Footer
- [ ] "Download Resume" `href="#"` in Hero, linked to a real PDF in `public/`
- [ ] "View all projects" `href="#"` in Projects
- [ ] Project data (currently sample projects with generated thumbnails)
- [ ] Footer credit line — make sure it names the stack actually in use
- [ ] `metadata` in `layout.tsx` still says "Create Next App"

### Production hardening

- [ ] Real `metadata`: title, description, Open Graph, favicon
- [ ] Inline the pre-paint theme script so dark mode doesn't flash
- [ ] Check the Lighthouse accessibility score
- [ ] Attach the custom domain in Vercel — see [backend-architecture.md](backend-architecture.md) §4

Carried-over defects from the prototype are tracked in [open-issues.md](open-issues.md) — check it before declaring a section done.

---

## 9. Documentation map

| File | Covers |
|------|--------|
| [design-system.md](design-system.md) | Brand, tokens, type, layout, components, motion, theming, copy — the whole visual language in one file |
| [features/00-README-component-index.md](features/00-README-component-index.md) | Inventory, render order, build order |
| [features/00-foundations.md](features/00-foundations.md) | Tokens, type scale, layout, breakpoints, motion |
| [features/01-primitives.md](features/01-primitives.md) | `.cta`, `.eyebrow`, `.h2`, `.lede`, `.pill`, `.chip` |
| [features/02-icon-set.md](features/02-icon-set.md) | All 19 icons + usage map |
| [features/03-sidebar.md](features/03-sidebar.md) | Rail, scrollspy, tooltips |
| [features/04-theme-toggle.md](features/04-theme-toggle.md) | Dark mode architecture |
| [features/05-hero.md](features/05-hero.md) | Hero layout + card |
| [features/06-hero-background.md](features/06-hero-background.md) | Animated background layers |
| [features/07-coder-scene.md](features/07-coder-scene.md) | SVG illustration + animations |
| [features/08-about.md](features/08-about.md) | Photo slot + fact tiles |
| [features/09-skills.md](features/09-skills.md) | Skill cards |
| [features/10-projects.md](features/10-projects.md) | Project cards + generated thumbnails |
| [features/11-services.md](features/11-services.md) | Dark services grid |
| [features/12-tech-ticker.md](features/12-tech-ticker.md) | Infinite marquee |
| [features/13-footer.md](features/13-footer.md) | Contact block + links |
| [features/14-app-root.md](features/14-app-root.md) | Composition + all effects |
| [features/15-tweaks-panel.md](features/15-tweaks-panel.md) | Dev overlay (optional) |
| [coding-standards.md](coding-standards.md) | TypeScript, React, Tailwind, naming conventions |
| [ai-interaction.md](ai-interaction.md) | How to work in this repo |
| [backend-architecture.md](backend-architecture.md) | Hosting, deployment, forms |
| [open-issues.md](open-issues.md) | Known defects and carried-over bugs |
| [current-feature.md](current-feature.md) | Active feature + completed history |
