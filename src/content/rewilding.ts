import type { GardenWildlife, Reference, RewildingScene, SuccessStory, Technique } from './types';

// Rewilding techniques and success stories. ChatGPT/Codex will expand and add
// sourced, verified stories; these are an accurate starting set.

export const techniques: Technique[] = [
  {
    title: 'Plant native, local-provenance stock',
    summary:
      'Use Irish native species grown from traceable Irish seed where possible. Local-provenance plants are better matched to climate, fungi, insects and long-term resilience.',
    steps: [
      'Pick a focal native tree suited to your soil: Scots pine or birch for acidic/free-draining ground; alder or willow for wet ground; oak, rowan or hazel for richer garden soils.',
      'Source from a nursery that can confirm Irish provenance.',
      'Add a native shrub layer such as hazel, hawthorn, blackthorn, holly or guelder rose for blossom, berries and cover.',
    ],
  },
  {
    title: 'Build layers, not a lawn',
    summary:
      'Real habitat has canopy, shrub, ground, water and decay layers. Replace uniform mowing with a mosaic of heights so more species find a niche.',
    steps: [
      'Let part of the grass grow long and cut it only once or twice a year, removing clippings to lower fertility.',
      'Add ground-layer natives that suit the place: ferns and wood sorrel in shade; heather and bilberry only where the soil is acidic.',
      'Leave leaf litter and needles to build soil and feed fungi.',
    ],
  },
  {
    title: 'Leave deadwood in place',
    summary:
      'Fallen logs, stumps and standing deadwood are among the richest microhabitats — for fungi, beetles, woodlice and the birds that eat them.',
    steps: [
      'Keep fallen branches and logs rather than clearing them.',
      'Stack a small log pile in a shady, damp corner.',
      'Keep some upright dead stems through winter for insects and seed-eating birds.',
    ],
  },
  {
    title: 'Add a fish-free pond',
    summary:
      'A small pond with no fish is often the single biggest boost to garden biodiversity — dragonflies, beetles, amphibians and drinking water for birds.',
    steps: [
      'Dig gently sloping edges so wildlife can get in and out.',
      'Let it fill with rain where possible; plant native sedges, rushes or yellow flag iris at the margins.',
      'Never add fish — they eat the invertebrates and amphibian larvae.',
    ],
  },
  {
    title: 'Join up habitat',
    summary:
      'One garden is useful; connected gardens are powerful. Hedges, gaps under fences, pond networks and long-grass strips let wildlife move safely.',
    steps: [
      'Plant or restore a mixed native hedge rather than a hard boundary.',
      'Leave a small ground-level gap in fences where safe so hedgehogs and amphibians can pass.',
      'Talk to neighbours or schools about creating a local mini-corridor.',
    ],
  },
  {
    title: 'Work with natural processes',
    summary:
      'Rewilding leans on nature doing the work: natural regeneration, grazing, water and decay, with light human steering rather than constant control.',
    steps: [
      'Let seedlings from nearby trees establish where they land.',
      'Avoid pesticides and excessive tidying.',
      'Think in decades — treat it as a 20–40 year project.',
    ],
  },
];

export const rewildingReferences: Reference[] = [
  {
    id: 'pollinator-plan-gardens',
    title: 'Gardens: Actions to Help Pollinators',
    source: 'All-Ireland Pollinator Plan',
    url: 'https://pollinators.ie/gardens/',
  },
  {
    id: 'pollinator-plan-resources',
    title: 'All-Ireland Pollinator Plan Resources',
    source: 'National Biodiversity Data Centre',
    url: 'https://pollinators.ie/resources/',
  },
  {
    id: 'vincent-wildlife-pine-marten',
    title: 'Pine marten',
    source: 'Vincent Wildlife Trust Ireland',
    url: 'https://www.vincentwildlife.ie/species/pine-marten',
  },
  {
    id: 'fossitt-habitats',
    title: 'A Guide to Habitats in Ireland',
    source: 'The Heritage Council / Fossitt',
    url: 'https://www.npws.ie/sites/default/files/publications/pdf/A%20Guide%20to%20Habitats%20in%20Ireland%20-%20Fossitt.pdf',
    year: 2000,
  },
];

export const gardenWildlife: GardenWildlife[] = [
  {
    name: 'Common frog',
    latin: 'Rana temporaria',
    kind: 'amphibian',
    whereToLook: 'Fish-free ponds, damp grass, log piles and shaded leaf litter.',
    whyItMatters: 'A visible sign that water, shelter and pesticide-free conditions are working together.',
    helpedBy: ['Fish-free pond', 'Sloping pond edges', 'Long grass', 'Leaf litter', 'Log piles'],
  },
  {
    name: 'Blue-tailed damselfly',
    latin: 'Ischnura elegans',
    kind: 'insect',
    whereToLook: 'Sunny pond edges and emergent plants such as sedges, rushes and iris.',
    whyItMatters: 'Damselflies need clean water for larvae and hunting perches as adults.',
    helpedBy: ['Fish-free pond', 'Emergent pond plants', 'No pesticides'],
  },
  {
    name: 'Garden bumblebees',
    latin: 'Bombus spp.',
    kind: 'insect',
    whereToLook: 'Clover, knapweed, selfheal, willow, hawthorn, bramble and late-season flowers.',
    whyItMatters: 'They pollinate wildflowers, fruit and garden plants, and need nectar from spring to autumn.',
    helpedBy: ['Less mowing', 'Native flowering shrubs', 'Long flowering season', 'No pesticides'],
  },
  {
    name: 'Hoverflies',
    latin: 'Syrphidae',
    kind: 'insect',
    whereToLook: 'Open flowers such as yarrow, oxeye daisy, hawthorn and umbellifers.',
    whyItMatters: 'Adults pollinate flowers; many larvae eat aphids and help balance garden pests.',
    helpedBy: ['Open native flowers', 'No pesticides', 'Layered planting'],
  },
  {
    name: 'Small tortoiseshell',
    latin: 'Aglais urticae',
    kind: 'insect',
    whereToLook: 'Sunny nectar flowers, nettle patches and sheltered hedge edges.',
    whyItMatters: 'A familiar butterfly whose caterpillars depend on nettles.',
    helpedBy: ['Nettle patch', 'Sunny flowers', 'Sheltered hedge', 'No pesticides'],
  },
  {
    name: 'Hedgehog',
    latin: 'Erinaceus europaeus',
    kind: 'mammal',
    whereToLook: 'Connected gardens, hedge bases, leaf piles, rough grass and log piles.',
    whyItMatters: 'Needs connected habitat and safe shelter; garden barriers can isolate it.',
    helpedBy: ['Hedge gaps', 'Log piles', 'Leaf litter', 'Pesticide-free slug control'],
  },
  {
    name: 'Robin',
    latin: 'Erithacus rubecula',
    kind: 'bird',
    whereToLook: 'Shrubs, hedges, leaf litter, log piles and rough grass edges.',
    whyItMatters: 'Uses dense cover for nesting and feeds on invertebrates in soil and leaf litter.',
    helpedBy: ['Native hedge', 'Leaf litter', 'Deadwood', 'Mixed-height vegetation'],
  },
  {
    name: 'Woodlice, beetles and fungi',
    kind: 'fungi',
    whereToLook: 'Decaying logs, damp leaf litter, shaded corners and old stems.',
    whyItMatters: 'They recycle nutrients and feed birds, frogs, hedgehogs and predatory insects.',
    helpedBy: ['Deadwood', 'Leaf litter', 'Damp shade', 'No over-tidying'],
  },
];

export const rewildingScenes: RewildingScene[] = [
  {
    id: 'native-layers',
    title: 'Native Layers: More Than Trees',
    summary:
      'A rewilded garden works best when it has layers: trees, shrubs, ground plants, leaf litter and open edges. This gives wildlife food, shelter and movement routes at different heights.',
    image: {
      src: '/generated-images/rewilding-native-layers-garden.png',
      alt: 'A rewilded Irish garden with native trees, rowan berries, a hawthorn hedge, ferns, long grass and a narrow mown path.',
      caption: 'AI visualisation of a layered native garden habitat.',
      credit: 'Generated with OpenAI image tools for this project.',
    },
    hotspots: [
      {
        id: 'canopy',
        x: 22,
        y: 21,
        category: 'plants',
        title: 'Young Canopy Trees',
        body:
          'Oak, birch, rowan, willow or Scots pine can become the long-term structure of the garden. Choose species for your soil and space, then allow leaf litter to build below them.',
      },
      {
        id: 'shrub-layer',
        x: 79,
        y: 42,
        category: 'plants',
        title: 'Native Shrub Layer',
        body:
          'Hawthorn, hazel, blackthorn, holly, bramble and guelder rose provide blossom, berries, nesting cover and shelter from wind.',
      },
      {
        id: 'rough-ground',
        x: 48,
        y: 74,
        category: 'landscape',
        title: 'Rough Grass And Leaf Litter',
        body:
          'Leave some ground untidy. Long grass, fallen leaves and old stems create hunting and overwintering places for insects, frogs and birds.',
      },
    ],
    expectedWildlife: gardenWildlife.filter((item) =>
      ['Garden bumblebees', 'Hoverflies', 'Robin', 'Woodlice, beetles and fungi'].includes(item.name),
    ),
    actions: [
      'Plant one native tree that suits your soil and future space.',
      'Add two or three native shrubs instead of a hard ornamental boundary.',
      'Keep a narrow path mown if needed, but let the sides grow taller.',
    ],
    references: [rewildingReferences[0], rewildingReferences[3]],
  },
  {
    id: 'fish-free-pond',
    title: 'Fish-Free Pond: The Fastest Biodiversity Boost',
    summary:
      'A small pond with no fish can quickly attract frogs, damselflies, dragonflies, water beetles, pond skaters and drinking birds. Shallow edges matter more than size.',
    image: {
      src: '/generated-images/rewilding-fish-free-wildlife-pond.png',
      alt: 'A fish-free wildlife pond with sedges, yellow flag iris, mossy stones, clear water, a frog and a damselfly.',
      caption: 'AI visualisation of a fish-free garden wildlife pond.',
      credit: 'Generated with OpenAI image tools for this project.',
    },
    hotspots: [
      {
        id: 'sloping-edge',
        x: 19,
        y: 72,
        category: 'water',
        title: 'Sloping Edges',
        body:
          'Gentle edges let frogs, beetles, hedgehogs and birds get in and out safely. A steep-sided pond is much less useful for wildlife.',
      },
      {
        id: 'emergent-plants',
        x: 56,
        y: 35,
        category: 'plants',
        title: 'Emergent Plants',
        body:
          'Rushes, sedges, yellow flag iris and other native margins give dragonflies and damselflies places to climb out, perch and hunt.',
      },
      {
        id: 'no-fish',
        x: 73,
        y: 67,
        category: 'wildlife',
        title: 'No Fish',
        body:
          'Fish eat many aquatic insects and amphibian larvae. For biodiversity, a small clean pond with no fish is usually better than an ornamental pond.',
      },
    ],
    expectedWildlife: gardenWildlife.filter((item) =>
      ['Common frog', 'Blue-tailed damselfly', 'Hoverflies'].includes(item.name),
    ),
    actions: [
      'Create one shallow area and one deeper refuge if space allows.',
      'Use rainwater where possible and avoid adding fish.',
      'Plant native pond margins and leave nearby long grass for shelter.',
    ],
    references: [rewildingReferences[0], rewildingReferences[3]],
  },
  {
    id: 'deadwood-and-decay',
    title: 'Deadwood And Decay: The Hidden Engine',
    summary:
      'Deadwood is not waste. It feeds fungi, beetles, woodlice and soil life, which then support frogs, birds and mammals. A small log pile can be one of the richest corners of a garden.',
    image: {
      src: '/generated-images/rewilding-deadwood-log-pile.png',
      alt: 'A damp shaded rewilded garden corner with mossy logs, fungi, leaf litter, ferns and native shrub cover.',
      caption: 'AI visualisation of a deadwood and leaf-litter habitat corner.',
      credit: 'Generated with OpenAI image tools for this project.',
    },
    hotspots: [
      {
        id: 'log-pile',
        x: 38,
        y: 48,
        category: 'wildlife',
        title: 'Log Pile',
        body:
          'Different log sizes create damp cracks, dry bark, fungal wood and beetle habitat. Use untreated wood and let it decay slowly.',
      },
      {
        id: 'fungi',
        x: 47,
        y: 61,
        category: 'plants',
        title: 'Fungi And Moss',
        body:
          'Fungi break down timber and recycle nutrients. Moss and damp shade help keep the decay layer active through dry spells.',
      },
      {
        id: 'leaf-litter',
        x: 55,
        y: 82,
        category: 'landscape',
        title: 'Leaf Litter',
        body:
          'Leaves protect soil, shelter invertebrates and feed earthworms. Avoid clearing every corner of the garden.',
      },
    ],
    expectedWildlife: gardenWildlife.filter((item) =>
      ['Woodlice, beetles and fungi', 'Common frog', 'Robin', 'Hedgehog'].includes(item.name),
    ),
    actions: [
      'Stack untreated logs in a shady corner.',
      'Leave some leaves under shrubs instead of bagging them.',
      'Keep a few hollow stems standing through winter.',
    ],
    references: [rewildingReferences[0], rewildingReferences[3]],
  },
  {
    id: 'pollinator-corridor',
    title: 'Pollinator Meadow And Hedge Corridor',
    summary:
      'Less mowing and native hedges turn a garden edge into a food route. The aim is continuous nectar, safe nesting places and cover that connects one garden to the next.',
    image: {
      src: '/generated-images/rewilding-pollinator-meadow-hedge.png',
      alt: 'A long-grass wildflower meadow strip beside a native hedge with hawthorn blossom, butterflies, bumblebees and a small wildlife gap below the hedge.',
      caption: 'AI visualisation of a garden pollinator corridor.',
      credit: 'Generated with OpenAI image tools for this project.',
    },
    hotspots: [
      {
        id: 'less-mowing',
        x: 66,
        y: 62,
        category: 'landscape',
        title: 'Less Mowing',
        body:
          'Let grass flower, then cut and remove clippings. Over time this lowers fertility and helps wildflowers compete with vigorous grass.',
      },
      {
        id: 'native-flowers',
        x: 46,
        y: 70,
        category: 'plants',
        title: 'Open Native Flowers',
        body:
          'Clover, selfheal, knapweed, yarrow, oxeye daisy and bird’s-foot trefoil give bees, hoverflies and butterflies easy access to nectar and pollen.',
      },
      {
        id: 'hedge-gap',
        x: 17,
        y: 55,
        category: 'wildlife',
        title: 'Movement Gap',
        body:
          'A small ground-level gap below a hedge or fence lets hedgehogs and amphibians move between gardens. Connected habitat is more valuable than isolated habitat.',
      },
    ],
    expectedWildlife: gardenWildlife.filter((item) =>
      ['Garden bumblebees', 'Hoverflies', 'Small tortoiseshell', 'Hedgehog', 'Robin'].includes(item.name),
    ),
    actions: [
      'Leave a strip unmown until late summer and remove the cuttings.',
      'Plant or thicken a native hedge with hawthorn, blackthorn, willow and bramble.',
      'Avoid pesticides and leave a safe ground-level wildlife gap where appropriate.',
    ],
    references: [rewildingReferences[0], rewildingReferences[1]],
  },
];

export const successStories: SuccessStory[] = [
  {
    name: 'Wild Nephin',
    location: 'Co. Mayo, Ireland',
    scale: 'Landscape (~11,000 ha)',
    summary:
      'A major Irish wild landscape project centred on blanket bog, mountains, rivers and former forestry lands. It is a strong case study for peatland protection, natural processes and restoration at landscape scale.',
    url: 'https://www.nationalparks.ie/wild-nephin/',
    status: 'published',
  },
  {
    name: 'Pine marten recovery',
    location: 'Nationwide, Ireland',
    scale: 'Species recovery',
    summary:
      'A native predator has recovered across parts of Ireland after severe historic decline. Its return is linked in many areas with better prospects for red squirrels, because pine martens can suppress grey squirrel numbers.',
    url: 'https://www.vincentwildlife.ie/species/pine-marten',
    status: 'published',
  },
  {
    name: 'All-Ireland Pollinator Plan',
    location: 'Ireland',
    scale: 'Gardens, schools, farms and public land',
    summary:
      'A practical national framework for changing mowing, planting, pesticide use and nesting habitat so pollinators can survive in everyday places.',
    url: 'https://pollinators.ie/gardens/',
    status: 'published',
  },
  {
    name: 'Knepp Estate',
    location: 'West Sussex, England',
    scale: 'Landscape (~1,400 ha)',
    summary:
      'A former intensive farm transformed by grazing-driven rewilding. It is useful as an international example of how natural processes can rapidly restore structure and wildlife abundance.',
    url: 'https://knepp.co.uk/',
    status: 'published',
  },
];
