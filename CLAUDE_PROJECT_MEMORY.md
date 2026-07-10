# Claude Project Memory

Last updated: 2026-07-10

This file records Claude Code-side actions, decisions and build state for future
sessions. It is the companion to `GPT_PROJECT_MEMORY.md`. Read both before working:
GPT/Codex owns research, content and images; Claude owns the React app and design.

## Role & Lane Split (agreed with user, "split by file")

To stop the two AIs clobbering each other's edits in `src/` (which happened live
during this project), work is divided by file:

- **Claude owns:** `src/styles.css` + the whole design system, all `src/pages/*`,
  all `src/components/*`, routing (`App.tsx`, `main.tsx`), the content **schema**
  (`src/content/types.ts`), shared libs (`src/lib/*`), and running the local dev
  server / verification.
- **Codex owns:** image assets in `public/`, the content **data values** inside
  `src/content/periods.ts` and `src/content/rewilding.ts`, and all handoff docs
  (`GPT_PROJECT_MEMORY.md`, `CLAUDE_BUILD_BRIEF.md`, `IMAGE_BRIEF.md`,
  `ASSET_MANIFEST.md`, `RESEARCH_CONTENT.md`, `REWILDING_INTERACTIVE_CONTENT.md`,
  `WEB_CONTENT_AND_IMAGE_SOURCES.md`, `PROJECT_CONTEXT.md`).
- **Codex should not edit pages or CSS.** If markup references a class or field
  that isn't styled/typed yet, treat it as a Codex handoff and build the missing
  CSS/component to match rather than reverting.
- Before writing a shared file (esp. `periods.ts` / `rewilding.ts` / `types.ts`),
  check for concurrent edits first.

## App Architecture (built by Claude)

Stack: Vite + React 18 + TypeScript + React Router + GSAP. Fonts: Fraunces
(display serif) + Inter (body), bundled locally via `@fontsource-variable/*`
(no external requests).

Product: **"The Irish Wildwood"** — Ireland's native ecosystems across ~8,000
years on an immersive timeline, plus an interactive rewilding section. Brand/nav
are centralised in `src/content/site.ts`.

Routes (`src/App.tsx`, under a shared `Layout`):

- `/` — Home (`src/pages/Home.tsx`)
- `/timeline` — scrollytelling timeline (`src/pages/Timeline.tsx`)
- `/timeline/:id` — period detail (`src/pages/PeriodDetail.tsx`)
- `/rewilding` — rewilding + garden explorer (`src/pages/Rewilding.tsx`)
- `/sources` — aggregated references (`src/pages/Sources.tsx`)
- `*` — NotFound (`src/pages/NotFound.tsx`)

Components:

- `components/Layout.tsx` — header/nav (accessible mobile menu with
  aria-expanded / Escape / route-close), skip link, footer.
- `components/EcosystemScene.tsx` — timeline scene: full-bleed image, auto-built
  Landscape/Plants/Wildlife hotspots from period data, info card. (Originally
  scaffolded by Codex; Claude now owns it. Claude added image caption/credit
  rendering + real alt text.)
- `components/GardenScene.tsx` — Rewilding interactive scene: image with
  category-coloured placed hotspots + a "What you might see" wildlife selector
  (insects/birds/amphibian/mammal/fungi) showing where-to-look / why-it-matters /
  helped-by tags, plus actions and sources.
- `components/StatusBadge.tsx` — draft/published badge.

Libs:

- `lib/useScrollReveal.ts` — GSAP + ScrollTrigger fade-rise reveal; fully skipped
  under `prefers-reduced-motion` so content is never trapped behind an animation.
- `lib/format.ts` — "years before present" (BP) formatting helpers.

## Design System Decisions

- **Committed single cinematic dark theme** (not OS light/dark) for an
  imagery-forward identity; tokens in `:root` in `src/styles.css`.
- Palette: deep forest ink, cream text, gold + moss + teal accents, glass panels.
- Accessibility: AA contrast targeted throughout, `:focus-visible` outlines,
  semantic landmarks, keyboard-operable hotspots/tabs (real `<button>` +
  `aria-pressed`), `aria-live` info panels, reduced-motion guards.
- Consistent widths: page content is constrained by `.page` (max-width 1200 +
  `--gutter`); the Home hero is the deliberate full-bleed exception.
- Image attribution is rendered everywhere images appear: scene images show a
  persistent caption/credit chip; gallery `plate`s render credit. This satisfies
  Codex's rule that AI images read as reconstructions/visualisations and Wikimedia
  images keep visible attribution.

## History / Chronology of Claude's Work (2026-07-10)

1. Turned the initial single landing page into the routed multi-section app;
   defined the content schema and seeded timeline data.
2. Built accessible shell + all pages + the first design system; verified with a
   clean `tsc -b` and dev-server smoke tests.
3. Redesign request ("too basic"): committed to the cinematic dark theme, wired
   Fraunces/Inter, and styled the immersive markup (hero, storyPanels, scene
   hotspots) that had been half-built during a live Codex collision. This is where
   the "split by file" lane agreement was made.
4. Wired image attribution into the UI per Codex's note (scene credit chip +
   gallery credits + real alt text).
5. Fixed Home layout: wrapped below-hero sections in `.page` for consistent width,
   made the muted band a contained panel, realigned hero text to the page grid,
   capitalised the hero eyebrow.
6. Built the Rewilding garden explorer: habitat selector tabs + `GardenScene`
   rendering `rewildingScenes` hotspots and the `gardenWildlife` interaction.
   (This clears the "Claude still needs to render rewildingScenes" open item from
   `GPT_PROJECT_MEMORY.md`.)

Verification approach: `npx tsc -b` (clean) plus curl smoke tests against the
running Vite dev server on `http://localhost:5173`. User prefers Claude to run the
local dev server; do not commit until the user asks.

## Known Issues / Open Items

- **No git commit yet.** Repo has staged files but zero commits; user wants a
  first commit once v1 is approved.
- **`src/groveData.ts` is orphaned** (superseded by `src/content/`) — awaiting
  user OK to delete.
- **Caledonian Pine Maximum `keyImage`** still captioned "Reconstruction…" with no
  `credit` (all other AI scenes say "AI reconstruction/visualisation" + credit).
  Codex to fix wording/credit in `periods.ts` — it will then render automatically.
  Note: `GPT_PROJECT_MEMORY.md` says app data should point at
  `…-v4-left-pines.png`, but `periods.ts` currently references the original
  `irish-trees-hero-atlantic-pinewood-grove.png` — Codex to reconcile.
- **Wikimedia attribution is now baked in** for the two in-use images. Added a
  structured `ImageLicense` field to `MediaAsset` (`src/content/types.ts`), a
  reusable `components/ImageAttribution.tsx` renderer, and an "Image credits"
  section on `/sources`. The two Commons images in `periods.ts` now carry full
  licence data (verified via the Commons API):
  - `killarney-oakwood-lakes-view.jpg` — "Ladies View" by Ingo Mehling, CC BY-SA 3.0.
  - `wild-nephin-blanket-bog-landscape.jpg` — "Ballycroy National Park…" by Youngbillyhappy, CC BY-SA 3.0.
  The two unused Commons files, when placed by Codex, still need their licence
  filled: `killarney-lakes-native-woodland.jpg` (Public domain) and
  `scots-pine-mature-form.jpg` ("Skuleskogen pine" by Mickaël Delcey / Silverkey,
  CC BY-SA 3.0 — Swedish location, Scots-pine form only, not Irish habitat).
  Note: CC BY-SA is fine to *display* with credit; if any Commons image is edited,
  set `license.modified: true` and release the edit under a compatible licence.
  (I edited `periods.ts` — Codex's data lane — to insert the two `license` objects.)
- **Home hero image** now pulls the first period's `keyImage` (late-glacial
  tundra) because every period has one. Can be pinned to the pinewood if preferred.
- **Wildlife-kind badges use emoji** (🐝🐦🐸🦔🍄) in `GardenScene`; could swap for
  custom SVG line icons if a stricter look is wanted.
