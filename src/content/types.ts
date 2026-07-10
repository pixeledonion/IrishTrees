// Content model for Éire Wild — Ireland's native ecosystems through time.
//
// This file is the CONTRACT between content authoring (ChatGPT/Codex, who
// research text + generate images) and the React app (Claude Code, who renders
// it). Adding a new timeline period, species, or source should never require a
// code change — only new data objects that satisfy these types.
//
// Years are expressed as "BP" (years Before Present), where Present = 1950 by
// paleoecological convention. Larger BP = further in the past. A period spans
// from `startYearBP` (older) down to `endYearBP` (younger).

export type SpeciesKind =
  | 'tree'
  | 'shrub'
  | 'plant'
  | 'bird'
  | 'mammal'
  | 'insect'
  | 'amphibian'
  | 'fungi'
  | 'other';

export interface Species {
  name: string;
  latin?: string;
  kind: SpeciesKind;
  note: string;
}

export interface Habitat {
  name: string;
  description: string;
}

/**
 * Structured attribution for a licensed image (e.g. Wikimedia Commons).
 * Prefer this over the free-text `credit` for anything under a real licence so
 * the UI can render a compliant, linked credit.
 */
export interface ImageLicense {
  /** Work title as given on the source, e.g. "Ladies View". */
  title?: string;
  /** Creator, e.g. "Ingo Mehling". Omit for public-domain works with no named author. */
  author?: string;
  /** Human label, e.g. "CC BY-SA 3.0" or "Public domain". */
  licenseName: string;
  /** Link to the licence deed (omit for public domain). */
  licenseUrl?: string;
  /** Link to the source file page (e.g. the Commons page). */
  sourceUrl?: string;
  /** Where the file came from, e.g. "Wikimedia Commons". */
  sourceName?: string;
  /** True if the image has been altered from the original (share-alike note). */
  modified?: boolean;
}

export interface MediaAsset {
  /** Path under /public, e.g. "/generated-images/foo.png". */
  src: string;
  /** Required for accessibility — describe the image, don't repeat the caption. */
  alt: string;
  caption?: string;
  /** Free-text credit, e.g. AI-generation note. Use `license` for licensed works. */
  credit?: string;
  /** Structured licence + attribution for CC / public-domain images. */
  license?: ImageLicense;
}

export interface Reference {
  id: string;
  title: string;
  /** Publication, journal, institution or author. */
  source: string;
  url?: string;
  year?: number;
}

/** 'published' content is real and reviewed; 'draft' is scaffolding awaiting research. */
export type ContentStatus = 'published' | 'draft';

/** Category of an interactive scene hotspot — drives its icon and colour. */
export type HotspotCategory =
  | 'landscape'
  | 'plants'
  | 'wildlife'
  | 'water'
  | 'climate'
  | 'people';

export interface Hotspot {
  id: string;
  /** Position over the scene image, 0–100 as a percentage of width/height. */
  x: number;
  y: number;
  category: HotspotCategory;
  title: string;
  /** 1–3 sentences shown in the pop-up card. */
  body: string;
  image?: MediaAsset;
}

/** A full-bleed period scene: a photo when available, always an atmospheric gradient. */
export interface Scene {
  /** Two CSS colours forming the atmospheric gradient / photo tint. */
  gradient: [string, string];
  image?: MediaAsset;
  hotspots?: Hotspot[];
}

export interface Period {
  /** URL slug — stable, kebab-case. */
  id: string;
  name: string;
  /** Broad geological/archaeological era, e.g. "Early Holocene". */
  era: string;
  startYearBP: number;
  endYearBP: number;
  /** One-line hook shown on the timeline. */
  tagline: string;
  /** 1–3 sentence overview. Plain language, not wordy. */
  summary: string;
  /** Climate & weather of the period. */
  climate: string;
  /** The landscape / environment character. */
  environment: string;
  habitats: Habitat[];
  wildlife: Species[];
  keyImage?: MediaAsset;
  gallery?: MediaAsset[];
  references: Reference[];
  status: ContentStatus;
  /** Accent hue (CSS color) used for this period across the UI. */
  accent: string;
}

export interface Technique {
  title: string;
  summary: string;
  steps?: string[];
}

export interface GardenWildlife {
  name: string;
  latin?: string;
  kind: SpeciesKind;
  whereToLook: string;
  whyItMatters: string;
  helpedBy: string[];
}

export interface RewildingScene {
  id: string;
  title: string;
  summary: string;
  image: MediaAsset;
  hotspots: Hotspot[];
  expectedWildlife: GardenWildlife[];
  actions: string[];
  references: Reference[];
}

export interface SuccessStory {
  name: string;
  location: string;
  /** e.g. "Garden", "Community", "Landscape (600 ha)". */
  scale: string;
  summary: string;
  url?: string;
  status: ContentStatus;
}
