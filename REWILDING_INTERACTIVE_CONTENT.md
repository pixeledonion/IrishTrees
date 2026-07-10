# Rewilding Interactive Content

Claude should use `rewildingScenes` from `src/content/rewilding.ts` to build the
interactive Rewilding section. Each scene has:

- a generated image
- 3 hotspot dots with `x` / `y` coordinates
- expected wildlife
- practical actions
- references

## Scenes

1. `native-layers`
   - Image: `/generated-images/rewilding-native-layers-garden.png`
   - Hotspots: young canopy trees, native shrub layer, rough grass/leaf litter.
   - Expected wildlife: bumblebees, hoverflies, robin, decomposers.

2. `fish-free-pond`
   - Image: `/generated-images/rewilding-fish-free-wildlife-pond.png`
   - Hotspots: sloping edges, emergent plants, no fish.
   - Expected wildlife: common frog, damselflies, hoverflies, pond insects.

3. `deadwood-and-decay`
   - Image: `/generated-images/rewilding-deadwood-log-pile.png`
   - Hotspots: log pile, fungi and moss, leaf litter.
   - Expected wildlife: woodlice, beetles, fungi, frogs, robins, hedgehogs.

4. `pollinator-corridor`
   - Image: `/generated-images/rewilding-pollinator-meadow-hedge.png`
   - Hotspots: less mowing, open native flowers, movement gap.
   - Expected wildlife: bumblebees, hoverflies, butterflies, hedgehogs, robins.

## Suggested UX

- Use the same interaction pattern as the timeline scene dots.
- On desktop, show the image full-width with clickable dots and a side/bottom
  card for the active hotspot.
- On mobile, keep the image first, then render hotspot cards as stacked buttons
  or an accordion so the content remains accessible.
- Do not put critical text inside images.
- Include captions that say the images are AI visualisations.
- Add visible source links at the end of the section.

## Expected Garden Wildlife

The `gardenWildlife` export contains reusable wildlife cards:

- Common frog
- Blue-tailed damselfly
- Garden bumblebees
- Hoverflies
- Small tortoiseshell
- Hedgehog
- Robin
- Woodlice, beetles and fungi

## Sources

- All-Ireland Pollinator Plan: https://pollinators.ie/gardens/
- All-Ireland Pollinator Plan resources: https://pollinators.ie/resources/
- Vincent Wildlife Trust Ireland, pine marten: https://www.vincentwildlife.ie/species/pine-marten
- Fossitt, `A Guide to Habitats in Ireland`: https://www.npws.ie/sites/default/files/publications/pdf/A%20Guide%20to%20Habitats%20in%20Ireland%20-%20Fossitt.pdf

