# Web Content And Image Sources

This file is for the content/image workflow. Claude can use it as source context,
but should keep attribution visible wherever external images are used.

## Downloaded Web Images

All files below are saved under `public/web-images/`.

| Local file | Suggested use | Source page | Notes |
|---|---|---|---|
| `/web-images/wild-nephin-blanket-bog-landscape.jpg` | Wild Nephin case study, blanket bog/rewilding panels | https://commons.wikimedia.org/wiki/File:Ballycroy_National_Park_from_Nephin_Beg_Range,_July2012.jpg | Real Irish peatland landscape. Verify Commons author/licence text before public launch. |
| `/web-images/killarney-oakwood-lakes-view.jpg` | Atlantic mixed woodland, oakwood/lake ecosystem hero, Killarney case study | https://commons.wikimedia.org/wiki/File:Ladies_view.jpg | Strong scenic photo for full-background sections. Verify Commons attribution before public launch. |
| `/web-images/killarney-lakes-native-woodland.jpg` | Native woodland/lakes habitat reference | https://commons.wikimedia.org/wiki/File:Lakes_of_Killarney.JPG | Useful supporting image for woodland/lake mosaics. Verify Commons attribution before public launch. |
| `/web-images/scots-pine-mature-form.jpg` | Scots pine species card or pinewood visual reference | https://commons.wikimedia.org/wiki/File:Skuleskogen_pine.jpg | Not an Irish location; use as species morphology reference, not as evidence of Irish habitat. |

## Source Notes For Content

### Killarney National Park

Use for: Atlantic oakwood, yew woodland, lakes, wet woodland, bog/heath, long
woodland continuity, conservation case study.

Content notes:

- Killarney contains lakes, oak woodland, yew woodland, bog, heath, mountain and
  wetland habitats.
- It is a strong modern example of native woodland persistence in Ireland.
- It can be used as a present-day reference for what mixed Atlantic woodland and
  lake-edge habitats can look like.

Sources:

- https://en.wikipedia.org/wiki/Killarney_National_Park
- https://www.nationalparks.ie/killarney/

### Wild Nephin National Park

Use for: blanket bog, large-scale peatland conservation, Irish rewilding case
study.

Content notes:

- Wild Nephin is in County Mayo and includes a very large Atlantic blanket bog
  landscape.
- It works well as the Irish case study for peatland, bog restoration and
  rewilding at landscape scale.
- The additional Nephin Forest lands are relevant to rewilding discussion.

Sources:

- https://en.wikipedia.org/wiki/Wild_Nephin_National_Park
- https://www.nationalparks.ie/wild-nephin/

### Scots Pine

Use for: Caledonian/pine maximum period, species cards, plant ID.

Content notes:

- Scots pine is `Pinus sylvestris`.
- It is identifiable by blue-green needles and orange-red upper bark.
- In this app, avoid implying that every Scots pine image is from Ireland unless
  the source location confirms it.

Sources:

- https://en.wikipedia.org/wiki/Scots_pine

### Garden Rewilding / Pollinators

Use for: garden actions, student activities, school-ground rewilding.

Content notes:

- Mow less and remove clippings to reduce soil fertility over time.
- Even a strip or small section of less-frequently mown grass helps.
- Native flowering trees and hedgerow species such as hawthorn, blackthorn,
  rowan, willow and crab apple are useful early food sources.
- Provide nesting habitat with undisturbed grass, hedgerows, bare earth, old
  walls or drilled untreated wood.
- Avoid pesticides.

Sources:

- https://pollinators.ie/gardens/

## AI Image Generation Queue

Use generated images where historical reconstruction is needed and real photos
would be misleading. The first batch below has been generated and saved in
`public/generated-images/`.

1. `late-glacial-pioneer-landscape`
   - File: `/generated-images/late-glacial-pioneer-landscape.png`
   - Wide reconstruction of post-glacial Ireland: open tundra-like ground,
     sedges, dwarf willow, scattered juniper, meltwater pools, distant low hills.
   - No people, buildings, paths, fantasy animals or text.

2. `early-holocene-birch-hazel-woodland`
   - File: `/generated-images/early-holocene-birch-hazel-woodland.png`
   - Light birch and hazel woodland with damp Irish ground layer, moss, leaf
     litter and small clearings.
   - Warm early morning light, educational-naturalistic style.

3. `atlantic-oakwood-temperate-rainforest`
   - File: `/generated-images/mid-holocene-oak-elm-alder-wildwood.png`
   - Western Irish oakwood with mossy trunks, ferns, holly, rowan, lichens and
     humid Atlantic atmosphere.
   - Make it feel real and inspectable, not dark fantasy.

4. `garden-rewilding-before-after`
   - File: `/generated-images/modern-garden-rewilding-pond.png`
   - Split-scene or paired composition showing a plain lawn transformed into a
     native mini-ecosystem with long grass, pond, deadwood, native trees and
     flowering shrubs.
   - No embedded text; labels should be rendered as HTML by the app.

5. `wildlife-pond-close-view`
   - Status: still needed as a close-detail supporting image.
   - Fish-free wildlife pond with sedges, water beetles, dragonflies, amphibian
     shelter, rainwater edge and native planting.
   - No fish, fountains, decking or ornamental garden styling.
