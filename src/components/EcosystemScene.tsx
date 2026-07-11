import { useMemo, useState } from 'react';
import type { Period } from '../content/types';
import { asset } from '../lib/asset';
import { ImageAttribution } from './ImageAttribution';
import { SpeciesIcon, iconForSpecies, type IconName } from './SpeciesIcon';

interface Hotspot {
  id: string;
  label: string;
  title: string;
  body: string;
  x: number;
  y: number;
  icon: IconName;
}

const fallbackScenes = [
  '/chatgpt-images/chatgpt-image-001.jpg',
  '/chatgpt-images/chatgpt-image-006.jpg',
  '/chatgpt-images/chatgpt-image-009.jpg',
  '/chatgpt-images/chatgpt-image-018.jpg',
  '/chatgpt-images/chatgpt-image-021.jpg',
  '/chatgpt-images/chatgpt-image-027.jpg',
];

function getSceneImage(period: Period, index = 0): string {
  return period.keyImage?.src ?? fallbackScenes[index % fallbackScenes.length];
}

function buildHotspots(period: Period): Hotspot[] {
  const firstHabitat = period.habitats[0];
  const plantLife = period.wildlife.filter((item) =>
    ['tree', 'shrub', 'plant', 'fungi'].includes(item.kind),
  );
  const animalLife = period.wildlife.filter((item) =>
    ['bird', 'mammal', 'insect', 'amphibian', 'other'].includes(item.kind),
  );

  const habitatName = (firstHabitat?.name ?? '').toLowerCase();
  const watery = /pool|pond|bog|water|wet|carr|melt|marsh|lake/.test(habitatName);
  const rep = animalLife[0];
  const plantRep = plantLife[0];

  return [
    {
      id: 'landscape',
      label: 'Landscape',
      title: firstHabitat?.name ?? 'Landscape',
      body: firstHabitat?.description ?? period.environment,
      x: 23,
      y: 63,
      icon: watery ? 'water' : 'hill',
    },
    {
      id: 'plants',
      label: 'Plants',
      title: plantLife.slice(0, 3).map((item) => item.name).join(', ') || 'Plant life',
      body: plantLife[0]?.note ?? period.environment,
      x: 54,
      y: 38,
      icon: plantRep ? iconForSpecies(plantRep) : 'leaf',
    },
    {
      id: 'wildlife',
      label: 'Wildlife',
      title: animalLife.slice(0, 3).map((item) => item.name).join(', ') || 'Wildlife',
      body: animalLife[0]?.note ?? period.climate,
      x: 77,
      y: 58,
      icon: rep ? iconForSpecies(rep) : 'paw',
    },
  ];
}

interface EcosystemSceneProps {
  period: Period;
  index?: number;
  compact?: boolean;
  /** Full-bleed, full-height variant used on the timeline page. */
  full?: boolean;
}

export function EcosystemScene({ period, index = 0, compact = false, full = false }: EcosystemSceneProps) {
  const hotspots = useMemo(() => buildHotspots(period), [period]);
  const [activeId, setActiveId] = useState(hotspots[0]?.id ?? '');
  const active = hotspots.find((item) => item.id === activeId) ?? hotspots[0];
  const image = getSceneImage(period, index);
  const meta = period.keyImage;

  const className = ['scene', compact && 'scene--compact', full && 'scene--full']
    .filter(Boolean)
    .join(' ');

  return (
    <div className={className}>
      <img
        className="scene__image"
        src={asset(image)}
        alt={meta?.alt ?? ''}
        loading={index < 2 ? 'eager' : 'lazy'}
      />
      <div className="scene__wash" aria-hidden="true" />
      {meta && (meta.caption || meta.credit || meta.license) && (
        <p className="scene__credit">
          {meta.caption && <span className="scene__credit-line">{meta.caption}</span>}
          {(meta.credit || meta.license) && (
            <span className="scene__credit-src">
              <ImageAttribution image={meta} />
            </span>
          )}
        </p>
      )}
      {hotspots.map((spot) => (
        <button
          className="scene__hotspot"
          key={spot.id}
          type="button"
          style={{ '--x': `${spot.x}%`, '--y': `${spot.y}%` } as React.CSSProperties}
          aria-pressed={activeId === spot.id}
          aria-label={`Show ${spot.label.toLowerCase()} information for ${period.name}`}
          onClick={() => setActiveId(spot.id)}
        >
          <span className="scene__pulse" aria-hidden="true" />
          <span className="scene__marker" aria-hidden="true">
            <SpeciesIcon name={spot.icon} />
          </span>
        </button>
      ))}
      {active && (
        <article className="scene__card" aria-live="polite">
          <span className="scene__cardIcon" aria-hidden="true">
            <SpeciesIcon name={active.icon} />
          </span>
          <div className="scene__cardText">
            <p className="scene__kicker">{active.label}</p>
            <h3>{active.title}</h3>
            <p>{active.body}</p>
          </div>
        </article>
      )}
    </div>
  );
}
