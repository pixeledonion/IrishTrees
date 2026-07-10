import { useMemo, useState } from 'react';
import type { Period } from '../content/types';

interface Hotspot {
  id: string;
  label: string;
  title: string;
  body: string;
  x: number;
  y: number;
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

  return [
    {
      id: 'landscape',
      label: 'Landscape',
      title: firstHabitat?.name ?? 'Landscape',
      body: firstHabitat?.description ?? period.environment,
      x: 23,
      y: 63,
    },
    {
      id: 'plants',
      label: 'Plants',
      title: plantLife.slice(0, 3).map((item) => item.name).join(', ') || 'Plant life',
      body: plantLife[0]?.note ?? period.environment,
      x: 54,
      y: 38,
    },
    {
      id: 'wildlife',
      label: 'Wildlife',
      title: animalLife.slice(0, 3).map((item) => item.name).join(', ') || 'Wildlife',
      body: animalLife[0]?.note ?? period.climate,
      x: 77,
      y: 58,
    },
  ];
}

interface EcosystemSceneProps {
  period: Period;
  index?: number;
  compact?: boolean;
}

export function EcosystemScene({ period, index = 0, compact = false }: EcosystemSceneProps) {
  const hotspots = useMemo(() => buildHotspots(period), [period]);
  const [activeId, setActiveId] = useState(hotspots[0]?.id ?? '');
  const active = hotspots.find((item) => item.id === activeId) ?? hotspots[0];
  const image = getSceneImage(period, index);
  const meta = period.keyImage;

  return (
    <div className={compact ? 'scene scene--compact' : 'scene'}>
      <img
        className="scene__image"
        src={image}
        alt={meta?.alt ?? ''}
        loading={index < 2 ? 'eager' : 'lazy'}
      />
      <div className="scene__wash" aria-hidden="true" />
      {(meta?.caption || meta?.credit) && (
        <p className="scene__credit">
          {meta?.caption && <span className="scene__credit-line">{meta.caption}</span>}
          {meta?.credit && <span className="scene__credit-src">{meta.credit}</span>}
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
          <span className="scene__dot" aria-hidden="true" />
        </button>
      ))}
      {active && (
        <article className="scene__card" aria-live="polite">
          <p className="scene__kicker">{active.label}</p>
          <h3>{active.title}</h3>
          <p>{active.body}</p>
        </article>
      )}
    </div>
  );
}
