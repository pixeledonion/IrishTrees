import type { Period } from './types';

// Timeline periods, ordered oldest → youngest. Adding a future period should be
// a content change: append one object here with sources, image metadata and
// concise web-ready copy.

export const periods: Period[] = [
  {
    id: 'late-glacial-pioneers',
    name: 'Late-Glacial Pioneers',
    era: 'Late-Glacial',
    startYearBP: 14000,
    endYearBP: 11700,
    tagline: 'Tundra, juniper scrub and the last of the giant deer.',
    summary:
      'As the last ice sheets retreated, Ireland was not yet a forested island. Cold open ground, sedges, grasses, dwarf shrubs and scattered pools dominated, with juniper and dwarf birch taking hold only in sheltered places. The Younger Dryas cold phase then pushed the landscape back toward tundra conditions before the Holocene warming began.',
    climate:
      'Cold and highly changeable: warming pulses after deglaciation, followed by the Younger Dryas cold reversal around 12,900–11,700 BP.',
    environment:
      'Open tundra, wet hollows, bare glacial till and mineral-rich ground. Soils were young and thin, so plants grew in patches rather than in a closed canopy.',
    habitats: [
      { name: 'Arctic-alpine tundra', description: 'Grasses, sedges, dwarf willow and mountain avens on exposed, cold ground.' },
      { name: 'Juniper-birch scrub', description: 'Low woody pioneers colonising sheltered, better-drained pockets before true woodland developed.' },
      { name: 'Meltwater pools', description: 'Shallow, cold pools and wet hollows left by ice retreat, important for early aquatic life.' },
    ],
    wildlife: [
      { name: 'Giant Irish deer', latin: 'Megaloceros giganteus', kind: 'mammal', note: 'Iconic grazer of the open tundra; extinct in Ireland by the end of this period.' },
      { name: 'Reindeer', latin: 'Rangifer tarandus', kind: 'mammal', note: 'Cold-adapted herds ranging the open landscape.' },
      { name: 'Dwarf willow', latin: 'Salix herbacea', kind: 'shrub', note: 'Ground-hugging pioneer of exposed, cold ground.' },
      { name: 'Juniper', latin: 'Juniperus communis', kind: 'shrub', note: 'One of the earliest woody plants to spread in sheltered ground after ice retreat.' },
      { name: 'Mountain avens', latin: 'Dryas octopetala', kind: 'plant', note: 'Arctic-alpine flower associated with cold, open calcareous ground.' },
    ],
    keyImage: {
      src: '/generated-images/late-glacial-pioneer-landscape.png',
      alt: 'A cold open post-glacial Irish landscape with low hills, wet hollows, sedges, dwarf shrubs and scattered juniper.',
      caption: 'AI reconstruction of late-glacial pioneer habitats. No photograph exists for this period.',
      credit: 'Generated with OpenAI image tools for this project.',
    },
    references: [
      {
        id: 'fossitt-habitats',
        title: 'A Guide to Habitats in Ireland',
        source: 'The Heritage Council / Fossitt',
        url: 'https://www.npws.ie/sites/default/files/publications/pdf/A%20Guide%20to%20Habitats%20in%20Ireland%20-%20Fossitt.pdf',
        year: 2000,
      },
      {
        id: 'mitchell-ryan-landscape',
        title: 'Reading the Irish Landscape',
        source: 'Frank Mitchell & Michael Ryan',
        year: 1997,
      },
    ],
    status: 'published',
    accent: '#7c9cb5',
  },
  {
    id: 'birch-hazel-colonisation',
    name: 'Birch & Hazel Colonisation',
    era: 'Early Holocene',
    startYearBP: 11700,
    endYearBP: 9000,
    tagline: 'Rapid warming opens the door to Ireland’s first true woodland.',
    summary:
      'After the Younger Dryas ended, warmth returned quickly. Birch expanded first, then hazel spread so strongly that early Holocene Ireland may have held vast hazel-rich woodland and scrub. These young woods built soils, shaded the open ground and created food-rich habitat for insects, birds, mammals and people.',
    climate: 'Rapid Holocene warming with a wetter Atlantic influence gradually becoming established.',
    environment: 'Light woodland and scrub on developing soils: birch as the pioneer canopy, hazel forming dense nut-rich thickets, with damp hollows, moss and leaf litter accumulating below.',
    habitats: [
      { name: 'Birch pioneer woodland', description: 'Fast-growing birch shading out the tundra and building leaf litter and soil.' },
      { name: 'Hazel scrub-woodland', description: 'Dense, nut-rich hazel woodland — a key food source for early people.' },
      { name: 'Woodland clearings', description: 'Small gaps with grasses, flowers and young shrubs, important for insects and browsing mammals.' },
    ],
    wildlife: [
      { name: 'Hazel', latin: 'Corylus avellana', kind: 'tree', note: 'The defining tree of the period; its pollen dominates early Holocene records.' },
      { name: 'Downy birch', latin: 'Betula pubescens', kind: 'tree', note: 'Hardy pioneer building the first closed canopy.' },
      { name: 'Wild boar', latin: 'Sus scrofa', kind: 'mammal', note: 'Woodland rooter, an important native mammal of early forests.' },
      { name: 'Willow', latin: 'Salix spp.', kind: 'tree', note: 'Common around wet hollows, streams and lake edges.' },
      { name: 'Wood sorrel', latin: 'Oxalis acetosella', kind: 'plant', note: 'A familiar ground-layer plant of shaded, damp woodland.' },
    ],
    keyImage: {
      src: '/generated-images/early-holocene-birch-hazel-woodland.png',
      alt: 'A young early Holocene birch and hazel woodland with moss, damp ground, leaf litter and sunlit clearings.',
      caption: 'AI reconstruction of early Holocene birch-hazel woodland.',
      credit: 'Generated with OpenAI image tools for this project.',
    },
    references: [
      {
        id: 'mitchell-ryan-landscape',
        title: 'Reading the Irish Landscape',
        source: 'Frank Mitchell & Michael Ryan',
        year: 1997,
      },
      {
        id: 'woodlands-of-ireland',
        title: 'Native Woodland Information Notes',
        source: 'Woodlands of Ireland',
        url: 'https://www.woodlandsofireland.com/',
      },
    ],
    status: 'published',
    accent: '#c7a94a',
  },
  {
    id: 'caledonian-pine-maximum',
    name: 'Caledonian Pine Maximum',
    era: 'Mid-Holocene',
    startYearBP: 9000,
    endYearBP: 4000,
    tagline: 'Scots pine at its greatest extent — Ireland’s Atlantic pinewood age.',
    summary:
      'Scots pine expanded to its widest reach across Ireland, forming open pine-birch woodland over heath and bog margins — the closest Ireland came to the Caledonian pinewoods still seen in Scotland. Pine declined sharply after about 4,000 BP as the climate grew wetter and blanket bog spread.',
    climate:
      'Warm and relatively dry in the earlier phase, turning wetter and cooler toward the end, which favoured bog over pine.',
    environment:
      'Open pine-birch woodland on lighter, acidic soils, grading into heath, bog and rocky ground — a mosaic of trees, dwarf shrubs and wetland.',
    habitats: [
      { name: 'Atlantic pinewood', description: 'Open Scots pine canopy over heather, bilberry and moss — light, acidic and biodiverse.' },
      { name: 'Pine–birch–heath mosaic', description: 'Birch and rowan among the pines, with heath and dwarf shrubs in the gaps.' },
      { name: 'Fish-free pools & bog margins', description: 'Sedge-fringed pools rich in dragonflies, beetles and amphibians.' },
    ],
    wildlife: [
      { name: 'Scots pine', latin: 'Pinus sylvestris', kind: 'tree', note: 'The defining tree — evergreen cover, winter shelter and long-term structure.' },
      { name: 'Downy birch', latin: 'Betula pubescens', kind: 'tree', note: 'Native birch of wetter, acidic ground; pollen evidence often records birch at genus level.' },
      { name: 'Silver birch', latin: 'Betula pendula', kind: 'tree', note: 'Native birch of lighter, drier ground; visually plausible within open pine-birch mosaics.' },
      { name: 'Rowan', latin: 'Sorbus aucuparia', kind: 'tree', note: 'Spring flowers for insects, autumn berries for birds.' },
      { name: 'Juniper', latin: 'Juniperus communis', kind: 'shrub', note: 'Evergreen accent of the driest, sunniest, best-drained ground.' },
      { name: 'Heather', latin: 'Calluna vulgaris', kind: 'plant', note: 'Nectar, shelter and moth caterpillars in the open ground layer.' },
      { name: 'Goldcrest', latin: 'Regulus regulus', kind: 'bird', note: 'Ireland’s smallest bird, foraging in the pine canopy.' },
      { name: 'Common polypody', latin: 'Polypodium vulgare', kind: 'plant', note: 'Fern of mossy logs, stumps and the base of old pines.' },
    ],
    keyImage: {
      src: '/generated-images/irish-trees-hero-atlantic-pinewood-grove-v4-left-pines.png',
      alt: 'A mature Atlantic pinewood grove with a Scots pine among downy and silver birches on the left, younger pines and common juniper scattered through heath, and a large Scots pine, rowan berries, ferns and a small wildlife pond on the right.',
      caption: 'Reconstruction of an Atlantic pinewood grove at its mid-Holocene peak.',
      credit: 'Generated with OpenAI image tools for this project.',
    },
    gallery: [
      {
        src: '/chatgpt-created-images/donegal-caledonian-pinewood-post-ice-age-history.png',
        alt: 'Infographic on how Caledonian-style pinewood fits Donegal after the last Ice Age.',
        caption: 'Post-Ice-Age pinewood history.',
      },
      {
        src: '/chatgpt-created-images/donegal-post-glacial-pinewood-habitat-evidence.png',
        alt: 'Infographic showing the evidence that post-glacial pinewood habitat existed locally.',
        caption: 'Evidence this habitat was locally plausible.',
      },
      {
        src: '/chatgpt-created-images/fish-free-pond-insect-life-infographic.png',
        alt: 'Infographic of insects and invertebrates that a fish-free wildlife pond attracts.',
        caption: 'Fish-free pond insect life.',
      },
    ],
    references: [
      {
        id: 'mitchell-ryan-landscape',
        title: 'Reading the Irish Landscape',
        source: 'Frank Mitchell & Michael Ryan',
        year: 1997,
      },
      {
        id: 'scots-pine-species',
        title: 'Scots pine',
        source: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Scots_pine',
      },
      {
        id: 'woodlands-of-ireland',
        title: 'Native Woodland Information Notes',
        source: 'Woodlands of Ireland',
        url: 'https://www.woodlandsofireland.com/',
      },
    ],
    status: 'published',
    accent: '#6b8a3d',
  },
  {
    id: 'oak-alder-mixed-forest',
    name: 'Oak, Elm & Alder Forest',
    era: 'Mid-Holocene',
    startYearBP: 7000,
    endYearBP: 5000,
    tagline: 'The great mixed broadleaf “wildwood” at its richest.',
    summary:
      'On deeper, richer soils Ireland’s wildwood reached its most complex form: oak and elm on better-drained ground, alder and willow in wet valleys, hazel and holly below, and deadwood feeding fungi and insects. The elm decline around the mid-Holocene marks a major ecological change, probably involving disease, climate pressure and human influence.',
    climate: 'Warm, moist and relatively stable during the Holocene climatic optimum, with strong Atlantic humidity in the west.',
    environment: 'Closed broadleaf forest on brown-earth soils, wet alder carr along rivers and lakes, and a shaded ground layer of ferns, mosses and woodland herbs.',
    habitats: [
      { name: 'Oak–elm high forest', description: 'Tall closed canopy on the best-drained fertile soils.' },
      { name: 'Alder carr', description: 'Wet woodland of alder and willow lining rivers, lakes and floodplains.' },
      { name: 'Atlantic woodland floor', description: 'Mosses, ferns, fungi, leaf litter and decaying timber recycling nutrients below the canopy.' },
    ],
    wildlife: [
      { name: 'Pedunculate oak', latin: 'Quercus robur', kind: 'tree', note: 'Keystone of the wildwood, supporting hundreds of species.' },
      { name: 'Wych elm', latin: 'Ulmus glabra', kind: 'tree', note: 'Its abrupt pollen decline (~5,800 BP) marks the “Elm Decline”.' },
      { name: 'Alder', latin: 'Alnus glutinosa', kind: 'tree', note: 'Coloniser of wet ground, fixing nitrogen and stabilising banks.' },
      { name: 'Holly', latin: 'Ilex aquifolium', kind: 'tree', note: 'Evergreen understory structure and winter berries for birds.' },
      { name: 'Wood anemone', latin: 'Anemone nemorosa', kind: 'plant', note: 'Spring woodland flower associated with long-established woodland.' },
      { name: 'Fungi and deadwood beetles', kind: 'fungi', note: 'Dead timber would have been a major habitat engine in old-growth woodland.' },
    ],
    keyImage: {
      src: '/generated-images/mid-holocene-oak-elm-alder-wildwood.png',
      alt: 'A rich mid-Holocene Irish broadleaf wildwood with mature oaks, wet alder carr, ferns, moss and fallen timber.',
      caption: 'AI reconstruction of mixed oak, elm and alder wildwood.',
      credit: 'Generated with OpenAI image tools for this project.',
    },
    gallery: [
      {
        src: '/web-images/killarney-oakwood-lakes-view.jpg',
        alt: 'Modern Killarney landscape with lakes and native woodland.',
        caption: 'Modern Killarney gives a real-world reference for Atlantic woodland, lakes and humid western habitats.',
        credit: 'Wikimedia Commons; verify author/licence before public launch.',
      },
    ],
    references: [
      {
        id: 'killarney-national-park',
        title: 'Killarney National Park',
        source: 'National Parks and Wildlife Service',
        url: 'https://www.nationalparks.ie/killarney/',
      },
      {
        id: 'fossitt-habitats',
        title: 'A Guide to Habitats in Ireland',
        source: 'The Heritage Council / Fossitt',
        url: 'https://www.npws.ie/sites/default/files/publications/pdf/A%20Guide%20to%20Habitats%20in%20Ireland%20-%20Fossitt.pdf',
        year: 2000,
      },
      {
        id: 'mitchell-ryan-landscape',
        title: 'Reading the Irish Landscape',
        source: 'Frank Mitchell & Michael Ryan',
        year: 1997,
      },
    ],
    status: 'published',
    accent: '#4f7a4a',
  },
  {
    id: 'blanket-bog-and-clearance',
    name: 'Blanket Bog & First Farmers',
    era: 'Late Holocene',
    startYearBP: 5500,
    endYearBP: 1000,
    tagline: 'Neolithic clearance and a wetter climate reshape the island.',
    summary:
      'From the Neolithic onward, people opened woodland for grazing and crops while the climate became wetter. On waterlogged ground, peat accumulated and blanket bog expanded across uplands and western landscapes. This was not a single moment of destruction, but a long shift into a mosaic of farms, woodland fragments, heath and bog.',
    climate: 'Cooler and wetter than the early Holocene, with high rainfall encouraging waterlogging and peat growth.',
    environment: 'A patchwork of woodland edges, farmed clearings, wet heath, blanket bog, pools and peat-forming mosses.',
    habitats: [
      { name: 'Blanket bog', description: 'Rain-fed peatland of sphagnum, sedges and heath spreading over cleared and waterlogged ground.' },
      { name: 'Farmed clearings', description: 'Neolithic grazing and tillage plots opened within the woodland.' },
      { name: 'Wet heath', description: 'Heather, cross-leaved heath, bog myrtle and rushes on acidic, waterlogged soils.' },
    ],
    wildlife: [
      { name: 'Sphagnum mosses', latin: 'Sphagnum spp.', kind: 'plant', note: 'The bog-builders, holding water and locking away carbon.' },
      { name: 'Bog myrtle', latin: 'Myrica gale', kind: 'shrub', note: 'Aromatic shrub of bog margins and damp heath.' },
      { name: 'Red grouse', latin: 'Lagopus lagopus', kind: 'bird', note: 'Heather-feeding bird of open bog and moor.' },
      { name: 'Bog cotton', latin: 'Eriophorum spp.', kind: 'plant', note: 'White seed heads are a familiar sign of wet peatland.' },
      { name: 'Heather', latin: 'Calluna vulgaris', kind: 'plant', note: 'Dominant dwarf shrub of heath and bog margins, valuable for pollinators.' },
    ],
    keyImage: {
      src: '/generated-images/late-holocene-blanket-bog-clearance.png',
      alt: 'A wet late Holocene Irish landscape with blanket bog, sphagnum pools, heath, rain and retreating woodland edge.',
      caption: 'AI reconstruction of bog expansion and woodland opening.',
      credit: 'Generated with OpenAI image tools for this project.',
    },
    gallery: [
      {
        src: '/web-images/wild-nephin-blanket-bog-landscape.jpg',
        alt: 'Modern blanket bog landscape in Wild Nephin National Park, County Mayo.',
        caption: 'Modern blanket bog at Wild Nephin National Park.',
        credit: 'Wikimedia Commons; verify author/licence before public launch.',
      },
    ],
    references: [
      {
        id: 'wild-nephin-national-park',
        title: 'Wild Nephin National Park',
        source: 'National Parks and Wildlife Service',
        url: 'https://www.nationalparks.ie/wild-nephin/',
      },
      {
        id: 'fossitt-habitats',
        title: 'A Guide to Habitats in Ireland',
        source: 'The Heritage Council / Fossitt',
        url: 'https://www.npws.ie/sites/default/files/publications/pdf/A%20Guide%20to%20Habitats%20in%20Ireland%20-%20Fossitt.pdf',
        year: 2000,
      },
    ],
    status: 'published',
    accent: '#9a7b4f',
  },
  {
    id: 'present-and-rewilding',
    name: 'Today & the Rewilding Window',
    era: 'Present',
    startYearBP: 1000,
    endYearBP: 0,
    tagline: 'One of Europe’s least-wooded countries — and its opportunity.',
    summary:
      'Centuries of clearance, drainage and simplified land use left Ireland with little native woodland and many damaged wetlands. But the deep history of pine, oak, hazel, bog, pond and meadow gives a practical template. Gardens, schools and communities can rebuild small habitat networks using native planting, less mowing, ponds, deadwood and pesticide-free care.',
    climate: 'Mild, wet Atlantic climate — ideal for fast native woodland growth.',
    environment: 'A fragmented landscape of farmland, conifer plantation, bog and small native woodland remnants.',
    habitats: [
      { name: 'Native woodland remnants', description: 'Surviving oak and mixed woodland pockets, often in gorges and demesnes.' },
      { name: 'Gardens & marginal land', description: 'The frontier for rewilding — small spaces that can host real habitat.' },
      { name: 'Pollinator corridors', description: 'Hedgerows, long grass, ponds and flowering native trees linking habitat through towns and farms.' },
    ],
    wildlife: [
      { name: 'Pine marten', latin: 'Martes martes', kind: 'mammal', note: 'A native predator recovering across Ireland — a rewilding success story.' },
      { name: 'Robin', latin: 'Erithacus rubecula', kind: 'bird', note: 'Familiar garden bird that thrives where cover and deadwood return.' },
      { name: 'Common frog', latin: 'Rana temporaria', kind: 'amphibian', note: 'Often one of the first visible winners from fish-free wildlife ponds.' },
      { name: 'Solitary bees', kind: 'insect', note: 'Need flowers, bare ground, hollow stems and pesticide-free gardens.' },
      { name: 'Hawthorn', latin: 'Crataegus monogyna', kind: 'shrub', note: 'Spring blossom for insects, autumn berries for birds, and excellent hedge structure.' },
    ],
    keyImage: {
      src: '/generated-images/modern-garden-rewilding-pond.png',
      alt: 'A modern Irish garden rewilded with a fish-free pond, long grass, native trees, rowan, deadwood and a mown path.',
      caption: 'AI visualisation of a garden-scale native ecosystem.',
      credit: 'Generated with OpenAI image tools for this project.',
    },
    gallery: [
      {
        src: '/chatgpt-created-images/caledonian-pinewood-grove-7x10m-layout-plan.png',
        alt: 'Plan for a compact Caledonian-style pinewood garden grove.',
        caption: 'Garden-scale pinewood grove layout reference.',
      },
      {
        src: '/chatgpt-created-images/caledonian-pinewood-grove-20-year-timeline.png',
        alt: 'Timeline showing how a planted native pinewood grove changes over twenty years.',
        caption: 'Long-term rewilding needs patience: think in decades.',
      },
    ],
    references: [
      {
        id: 'pollinator-plan-gardens',
        title: 'Gardens: Actions to Help Pollinators',
        source: 'All-Ireland Pollinator Plan',
        url: 'https://pollinators.ie/gardens/',
      },
      {
        id: 'wild-nephin-national-park',
        title: 'Wild Nephin National Park',
        source: 'National Parks and Wildlife Service',
        url: 'https://www.nationalparks.ie/wild-nephin/',
      },
      {
        id: 'woodlands-of-ireland',
        title: 'Native Woodland Information Notes',
        source: 'Woodlands of Ireland',
        url: 'https://www.woodlandsofireland.com/',
      },
    ],
    status: 'published',
    accent: '#3f7d6e',
  },
];

export function getPeriod(id: string): Period | undefined {
  return periods.find((p) => p.id === id);
}
