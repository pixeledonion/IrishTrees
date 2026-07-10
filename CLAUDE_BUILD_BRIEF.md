# Claude Code Build Brief

This project should become a modern, accessible React web app about native Irish ecosystems through time and practical garden rewilding.

## Read First

- `PROJECT_CONTEXT.md`
- `RESEARCH_CONTENT.md`
- `CONTENT_DATA.json`
- `ASSET_MANIFEST.md`
- `IMAGE_BRIEF.md`

## Product Goal

Build a scalable educational app where users can explore Irish ecosystem history on a timeline, learn about habitat types, and see practical ways to rewild gardens and school grounds.

## Suggested Navigation

- Timeline
- Ecosystems
- Rewild Your Garden
- Case Studies
- Student Zone
- Sources

## First Release Scope

Use `CONTENT_DATA.json` as the first data source.

Core components:

- Responsive shell with simple top navigation.
- Homepage hero using `/generated-images/irish-trees-hero-atlantic-pinewood-grove.png`.
- Interactive timeline from `CONTENT_DATA.json`.
- Ecosystem cards generated from timeline/habitat data.
- Garden actions section.
- Case study cards.
- Sources section linking to `RESEARCH_CONTENT.md` references.

## Accessibility Requirements

- WCAG AA contrast.
- Keyboard-accessible navigation and timeline controls.
- Semantic headings.
- Avoid text embedded in images as primary information.
- Provide alt text for all images.
- Respect reduced-motion preferences.
- Large tap targets on mobile.

## Design Direction

Professional, calm, editorial, nature-documentary feel.

- Typography: strong readable serif or humanist display for headings; clean sans-serif for body.
- Palette: deep green, moss, off-white, bark brown, water blue accents, heather purple used sparingly.
- Layout: spacious but content-rich; avoid generic marketing cards.
- Interactions: subtle timeline transitions, section reveals, image parallax only if accessible and respectful of reduced motion.

## Technical Notes

- Keep content data separate from components for future expansion.
- Prefer CSS animations first; add GSAP only if it materially improves timeline interaction.
- Do not make dense infographic PNGs the main accessible content. Rebuild key content as HTML.

