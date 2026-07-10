# Asset Manifest

Use this file as Claude Code's quick reference for available images.

## Generated Hero

- `/generated-images/irish-trees-hero-atlantic-pinewood-grove.png`
  - Use: original Caledonian pinewood reconstruction, retained for comparison.
  - Notes: 1672 x 941, darker and denser on the left.
- `/generated-images/irish-trees-hero-atlantic-pinewood-grove-v2.png`
  - Use: previous preferred Caledonian Pine Maximum background, retained for comparison.
  - Notes: 1672 x 941, brighter and more open on the left while preserving the right-side Scots pine, birch and rowan grouping.
- `/generated-images/irish-trees-hero-atlantic-pinewood-grove-v3-birch-juniper.png`
  - Use: previous Caledonian Pine Maximum background, retained for comparison.
  - Notes: 1672 x 941, adds downy/silver birch and common juniper to the left-side pine-heath mosaic.
- `/generated-images/irish-trees-hero-atlantic-pinewood-grove-v4-left-pines.png`
  - Use: preferred homepage hero / Caledonian Pine Maximum background.
  - Notes: 1672 x 941, adds one mature Scots pine and scattered younger pines among the left-side birches and juniper.

## Generated Timeline Reconstructions

- Manifest: `/generated-images/manifest.json`
- `/generated-images/late-glacial-pioneer-landscape.png`
- `/generated-images/irish-trees-hero-atlantic-pinewood-grove-v4-left-pines.png`
- `/generated-images/early-holocene-birch-hazel-woodland.png`
- `/generated-images/mid-holocene-oak-elm-alder-wildwood.png`
- `/generated-images/late-holocene-blanket-bog-clearance.png`
- `/generated-images/modern-garden-rewilding-pond.png`

Use these where a real photograph would be historically misleading. Captions in
the app should make clear that these are AI reconstructions or visualisations.

## Generated Rewilding Section Images

- `/generated-images/rewilding-native-layers-garden.png`
- `/generated-images/rewilding-fish-free-wildlife-pond.png`
- `/generated-images/rewilding-deadwood-log-pile.png`
- `/generated-images/rewilding-pollinator-meadow-hedge.png`

Use with `rewildingScenes` in `src/content/rewilding.ts`. These are intended for
interactive dot/circle overlays that explain habitat features and expected
garden wildlife.

## ChatGPT-Created Infographics

- `/chatgpt-created-images/atlantic-pinewood-grove-planting-timeline-infographic.png`
  - Use: research/reference, optional downloadable infographic.
- `/chatgpt-created-images/caledonian-pinewood-grove-layout-timeline.png`
  - Use: layout reference for a future interactive grove planner.
- `/chatgpt-created-images/atlantic-pinewood-grove-wildlife-support-infographic.png`
  - Use: wildlife education section reference.
- `/chatgpt-created-images/fish-free-pond-insect-life-infographic.png`
  - Use: pond/insects section reference.
- `/chatgpt-created-images/donegal-caledonian-pinewood-post-ice-age-history.png`
  - Use: historical timeline section reference.
- `/chatgpt-created-images/caledonian-pinewood-grove-20-year-timeline.png`
  - Use: garden rewilding timeline reference.
- `/chatgpt-created-images/donegal-post-glacial-pinewood-habitat-evidence.png`
  - Use: evidence/research section reference.
- `/chatgpt-created-images/caledonian-pinewood-grove-7x10m-layout-plan.png`
  - Use: garden-scale rewilding section reference.

## Reference Images From Shared Chat

- Folder: `/chatgpt-images/`
- Manifest: `/chatgpt-images/manifest.json`
- Use: visual references only. These are not yet curated or renamed by content topic.

## Downloaded Web Images

- Folder: `/web-images/`
- Manifest: `/web-images/manifest.json`
- Source notes: `WEB_CONTENT_AND_IMAGE_SOURCES.md`

Available now:

- `/web-images/wild-nephin-blanket-bog-landscape.jpg`
- `/web-images/killarney-oakwood-lakes-view.jpg`
- `/web-images/killarney-lakes-native-woodland.jpg`
- `/web-images/scots-pine-mature-form.jpg`

Use these as real-world visual references and add visible attribution before a
public release. Use AI-generated images for historical reconstructions where no
real photograph can honestly represent the period.

## Recommended App Use

For the first build, use the generated hero and avoid embedding dense infographic text as primary content. Instead, rebuild educational content as accessible HTML using `CONTENT_DATA.json` and `RESEARCH_CONTENT.md`.
