# GPT Project Memory

Last updated: 2026-07-10 22:27 IST

This file records GPT/Codex-side actions and project context for future sessions.
Use it as the first-read memory file before adding research, content or images.

## Project Goal

Build a React web app about native Irish ecosystems through history, especially
the last 8,000 years, with:

- an interactive ecosystem timeline
- professional full-background visuals
- clickable information dots/cards
- accurate, accessible educational content
- practical rewilding guidance for gardens, students and communities
- sources and visible attribution

The user wants GPT/Codex to focus on research, content and image creation. Claude
Code is expected to handle most UI/build implementation and localhost preview.

## Current Project Shape

Working folder:

- `/Users/derricksandy/Source/IrishTrees-test`

App stack:

- Vite
- React
- TypeScript
- React Router
- GSAP dependency available

Important app files:

- `src/content/periods.ts` - timeline period content and image references
- `src/content/rewilding.ts` - rewilding techniques, scenes, wildlife and sources
- `src/content/types.ts` - shared content types
- `src/pages/Rewilding.tsx` - current Rewilding page implementation
- `src/pages/Timeline.tsx` - timeline page
- `src/components/EcosystemScene.tsx` - timeline-style interactive scene component

Validation commands that have passed repeatedly:

```bash
npm run build
npm run lint
```

Do not start localhost unless the user asks. The user prefers Claude to run the
local dev server.

## Research And Content Files Added

- `PROJECT_CONTEXT.md`
  - Summary of the original ChatGPT shared conversation about a Donegal
    Caledonian/Atlantic pinewood grove, 7m x 10m garden-scale design, Scots
    pine, birch, rowan, juniper, hazel, pond, heather/bilberry, sedges and
    wildlife.

- `RESEARCH_CONTENT.md`
  - Web-ready starter copy for the overall app, timeline periods, rewilding,
    student angle and sources.

- `CONTENT_DATA.json`
  - Structured starter data for timeline and case studies.

- `CLAUDE_BUILD_BRIEF.md`
  - Handoff instructions for Claude: navigation, sections, accessibility,
    design direction and scalable content model.

- `IMAGE_BRIEF.md`
  - Image generation style and future prompts.

- `ASSET_MANIFEST.md`
  - Main asset inventory for Claude and future agents.

- `WEB_CONTENT_AND_IMAGE_SOURCES.md`
  - Web image/source notes, especially Wikimedia and official sources.

- `REWILDING_INTERACTIVE_CONTENT.md`
  - Handoff for new Rewilding interactive image/hotspot sections.

## Timeline Periods Now Covered

`src/content/periods.ts` currently contains published content for:

1. Late-Glacial Pioneers
2. Birch & Hazel Colonisation
3. Caledonian Pine Maximum
4. Oak, Elm & Alder Forest
5. Blanket Bog & First Farmers
6. Today & the Rewilding Window

Each period has:

- summary
- climate
- environment
- habitats
- wildlife
- key image
- references
- status
- accent colour

Accuracy note:

- For birch during the Caledonian Pine Maximum, palaeoecological evidence often
  identifies `Betula` pollen rather than cleanly separating downy birch and
  silver birch. Both are native Irish birches and visually defensible in a
  pine-birch-heath reconstruction. Mention this caveat when discussing evidence.

## Generated Timeline Images

Saved under `public/generated-images/`.

Historical/ecological reconstructions:

- `late-glacial-pioneer-landscape.png`
- `early-holocene-birch-hazel-woodland.png`
- `mid-holocene-oak-elm-alder-wildwood.png`
- `late-holocene-blanket-bog-clearance.png`
- `modern-garden-rewilding-pond.png`

Caledonian Pine Maximum image evolution:

- `irish-trees-hero-atlantic-pinewood-grove.png`
  - Original generated hero. Strong right-side Scots pine, birch and rowan, but
    left side was too dark/crowded.

- `irish-trees-hero-atlantic-pinewood-grove-v2.png`
  - Brightened/opened the left side while keeping the right-side Scots pine,
    birch and rowan grouping.

- `irish-trees-hero-atlantic-pinewood-grove-v3-birch-juniper.png`
  - Added downy/silver birch and common juniper to the left-side pine-heath
    mosaic.

- `irish-trees-hero-atlantic-pinewood-grove-v4-left-pines.png`
  - Current preferred Caledonian Pine Maximum image.
  - Adds one mature Scots pine among the left-side birches and scattered younger
    Scots pines around the pine/birch area.
  - App data now points to this version.

Generated image manifest:

- `public/generated-images/manifest.json`

All generated images should be captioned as AI reconstructions or AI
visualisations, not photographs.

## Rewilding Images And Interactive Content

Generated images added for the Rewilding page:

- `rewilding-native-layers-garden.png`
- `rewilding-fish-free-wildlife-pond.png`
- `rewilding-deadwood-log-pile.png`
- `rewilding-pollinator-meadow-hedge.png`

Structured content added in `src/content/rewilding.ts`:

- `techniques`
- `rewildingReferences`
- `gardenWildlife`
- `rewildingScenes`
- `successStories`

`rewildingScenes` is designed for Claude to render like the timeline dots:

- scene image
- 3 hotspot positions
- hotspot card content
- expected wildlife
- actions
- references

Expected garden wildlife currently listed:

- Common frog
- Blue-tailed damselfly
- Garden bumblebees
- Hoverflies
- Small tortoiseshell
- Hedgehog
- Robin
- Woodlice, beetles and fungi

Main Rewilding source basis:

- All-Ireland Pollinator Plan
- All-Ireland Pollinator Plan resources
- Fossitt, `A Guide to Habitats in Ireland`
- Vincent Wildlife Trust Ireland for pine marten

## Downloaded Web Images

Saved under `public/web-images/`.

- `wild-nephin-blanket-bog-landscape.jpg`
  - Source page:
    https://commons.wikimedia.org/wiki/File:Ballycroy_National_Park_from_Nephin_Beg_Range,_July2012.jpg
  - Use: Wild Nephin, blanket bog, peatland restoration.

- `killarney-oakwood-lakes-view.jpg`
  - Source page:
    https://commons.wikimedia.org/wiki/File:Ladies_view.jpg
  - Use: Killarney, Atlantic woodland/lake reference.

- `killarney-lakes-native-woodland.jpg`
  - Source page:
    https://commons.wikimedia.org/wiki/File:Lakes_of_Killarney.JPG
  - Use: native woodland/lake habitat reference.

- `scots-pine-mature-form.jpg`
  - Source page:
    https://commons.wikimedia.org/wiki/File:Skuleskogen_pine.jpg
  - Use: Scots pine morphology only.
  - Not an Irish location, so do not present as Irish habitat evidence.

Manifest:

- `public/web-images/manifest.json`

Before public launch, verify and display exact Commons author/licence attribution
for every Wikimedia image used.

## ChatGPT Imported Assets

Earlier in the project, ChatGPT shared-chat images were gathered:

- `public/chatgpt-images/`
  - Many generic reference images from the shared ChatGPT conversation.
  - Treat as visual references only unless curated.

- `public/chatgpt-created-images/`
  - Renamed, reusable ChatGPT-created infographic-style assets:
    - `atlantic-pinewood-grove-planting-timeline-infographic.png`
    - `caledonian-pinewood-grove-layout-timeline.png`
    - `atlantic-pinewood-grove-wildlife-support-infographic.png`
    - `fish-free-pond-insect-life-infographic.png`
    - `donegal-caledonian-pinewood-post-ice-age-history.png`
    - `caledonian-pinewood-grove-20-year-timeline.png`
    - `donegal-post-glacial-pinewood-habitat-evidence.png`
    - `caledonian-pinewood-grove-7x10m-layout-plan.png`

Recommendation:

- Do not rely on infographic images as the primary way to deliver text.
- Rebuild important infographic content as accessible HTML.

## Source List Used So Far

Key sources referenced in content/handoff files:

- All-Ireland Pollinator Plan gardens:
  https://pollinators.ie/gardens/

- All-Ireland Pollinator Plan resources:
  https://pollinators.ie/resources/

- Wild Nephin National Park:
  https://www.nationalparks.ie/wild-nephin/

- Killarney National Park:
  https://www.nationalparks.ie/killarney/

- Fossitt, `A Guide to Habitats in Ireland`:
  https://www.npws.ie/sites/default/files/publications/pdf/A%20Guide%20to%20Habitats%20in%20Ireland%20-%20Fossitt.pdf

- Woodlands of Ireland:
  https://www.woodlandsofireland.com/

- Scots pine:
  https://en.wikipedia.org/wiki/Scots_pine

- Vincent Wildlife Trust Ireland, pine marten:
  https://www.vincentwildlife.ie/species/pine-marten

- Knepp Estate:
  https://knepp.co.uk/

- Mitchell & Ryan, `Reading the Irish Landscape`, 1997
  - Used as a general palaeoecology/landscape history source.
  - Needs bibliographic treatment if the app grows into a formal source list.

## Current User Preferences / Decisions

- User wants GPT/Codex to create or curate images/content.
- User wants Claude to run localhost and continue UI implementation.
- User prefers professional, immersive imagery, not basic placeholder visuals.
- Timeline should use full-background scenes with clickable dot/circle hotspots.
- Rewilding section should also use image scenes with circle-dot hotspots.
- Captions and sources matter.
- AI historical images are acceptable when photos do not exist, but must be
  described as reconstructions/visualisations.

## Open / Future Work

- Claude still needs to render `rewildingScenes` interactively on the Rewilding
  page.
- Need exact Commons attribution display before public launch.
- Need deeper academic references for:
  - pine maximum timing in Ireland
  - regional Scots pine decline after c. 4,000 BP
  - birch species-level confidence
  - elm decline causes in Ireland
  - prehistoric woodland clearance and blanket bog expansion
- Could add a close-detail wildlife pond supporting image if the user wants more
  pond-specific insect/water life visuals.
- Could add student learning activities and downloadable classroom prompts.

