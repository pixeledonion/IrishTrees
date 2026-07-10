import { useState } from 'react';
import type {
  HotspotCategory,
  RewildingScene,
  SpeciesKind,
} from '../content/types';
import { asset } from '../lib/asset';
import { ImageAttribution } from './ImageAttribution';

const CATEGORY_COLOR: Record<HotspotCategory, string> = {
  landscape: '#9ec473',
  plants: '#7fae54',
  wildlife: '#5cb9b2',
  water: '#5aa9d0',
  climate: '#e2b661',
  people: '#c19bd8',
};

const CATEGORY_LABEL: Record<HotspotCategory, string> = {
  landscape: 'Landscape',
  plants: 'Plants',
  wildlife: 'Wildlife',
  water: 'Water',
  climate: 'Climate',
  people: 'People',
};

const KIND_META: Record<SpeciesKind, { label: string; emoji: string; color: string }> = {
  insect: { label: 'Insect', emoji: '🐝', color: '#e2b661' },
  bird: { label: 'Bird', emoji: '🐦', color: '#5cb9b2' },
  amphibian: { label: 'Amphibian', emoji: '🐸', color: '#9ec473' },
  mammal: { label: 'Mammal', emoji: '🦔', color: '#c19bd8' },
  fungi: { label: 'Fungi & decay', emoji: '🍄', color: '#c98a4b' },
  plant: { label: 'Plant', emoji: '🌿', color: '#9ec473' },
  tree: { label: 'Tree', emoji: '🌳', color: '#7fae54' },
  shrub: { label: 'Shrub', emoji: '🌿', color: '#7fae54' },
  other: { label: 'Wildlife', emoji: '🌱', color: '#9ec473' },
};

export function GardenScene({ scene }: { scene: RewildingScene }) {
  const [activeHotspot, setActiveHotspot] = useState(scene.hotspots[0]?.id ?? '');
  const [selectedWildlife, setSelectedWildlife] = useState(
    scene.expectedWildlife[0]?.name ?? '',
  );

  const hotspot = scene.hotspots.find((h) => h.id === activeHotspot) ?? scene.hotspots[0];
  const creature =
    scene.expectedWildlife.find((w) => w.name === selectedWildlife) ??
    scene.expectedWildlife[0];
  const img = scene.image;

  return (
    <article className="gardenScene">
      <div className="gardenScene__head">
        <h3>{scene.title}</h3>
        <p className="lead">{scene.summary}</p>
      </div>

      <div className="scene">
        <img className="scene__image" src={asset(img.src)} alt={img.alt} loading="lazy" />
        <div className="scene__wash" aria-hidden="true" />
        {(img.caption || img.credit || img.license) && (
          <p className="scene__credit">
            {img.caption && <span className="scene__credit-line">{img.caption}</span>}
            {(img.credit || img.license) && (
              <span className="scene__credit-src">
                <ImageAttribution image={img} />
              </span>
            )}
          </p>
        )}
        {scene.hotspots.map((h) => (
          <button
            key={h.id}
            type="button"
            className="scene__hotspot"
            style={{
              '--x': `${h.x}%`,
              '--y': `${h.y}%`,
              '--accent': CATEGORY_COLOR[h.category],
            } as React.CSSProperties}
            aria-pressed={activeHotspot === h.id}
            aria-label={`Show ${h.title} (${CATEGORY_LABEL[h.category].toLowerCase()})`}
            onClick={() => setActiveHotspot(h.id)}
          >
            <span className="scene__pulse" aria-hidden="true" />
            <span className="scene__dot" aria-hidden="true" />
          </button>
        ))}
        {hotspot && (
          <article
            className="scene__card"
            aria-live="polite"
            style={{ '--accent': CATEGORY_COLOR[hotspot.category] } as React.CSSProperties}
          >
            <p className="scene__kicker">{CATEGORY_LABEL[hotspot.category]}</p>
            <h3>{hotspot.title}</h3>
            <p>{hotspot.body}</p>
          </article>
        )}
      </div>

      <div className="gardenScene__grid">
        <section className="gardenScene__col" aria-labelledby={`${scene.id}-actions`}>
          <h4 id={`${scene.id}-actions`} className="gardenScene__subhead">Do this</h4>
          <ul className="stepList">
            {scene.actions.map((a) => <li key={a}>{a}</li>)}
          </ul>
          {scene.references.length > 0 && (
            <p className="gardenScene__refs">
              Sources:{' '}
              {scene.references.map((r, i) => (
                <span key={r.id}>
                  {i > 0 && ', '}
                  {r.url ? (
                    <a href={r.url} target="_blank" rel="noreferrer">{r.source}</a>
                  ) : (
                    r.source
                  )}
                </span>
              ))}
            </p>
          )}
        </section>

        <section className="gardenScene__col" aria-labelledby={`${scene.id}-wildlife`}>
          <h4 id={`${scene.id}-wildlife`} className="gardenScene__subhead">
            What you might see
          </h4>
          <div className="wildlifeChips" role="group" aria-label="Expected garden wildlife — select to learn more">
            {scene.expectedWildlife.map((w) => (
              <button
                key={w.name}
                type="button"
                className="wildlifeChip"
                data-active={selectedWildlife === w.name}
                aria-pressed={selectedWildlife === w.name}
                onClick={() => setSelectedWildlife(w.name)}
              >
                <span
                  className="wildlifeChip__emoji"
                  style={{ '--k': KIND_META[w.kind].color } as React.CSSProperties}
                  aria-hidden="true"
                >
                  {KIND_META[w.kind].emoji}
                </span>
                <span className="wildlifeChip__name">{w.name}</span>
              </button>
            ))}
          </div>

          {creature && (
            <div className="wildlifeDetail" aria-live="polite">
              <p
                className="wildlifeDetail__kind"
                style={{ color: KIND_META[creature.kind].color }}
              >
                {KIND_META[creature.kind].label}
              </p>
              <h5>
                {creature.name}
                {creature.latin && <em> · {creature.latin}</em>}
              </h5>
              <dl className="wildlifeDetail__facts">
                <div>
                  <dt>Where to look</dt>
                  <dd>{creature.whereToLook}</dd>
                </div>
                <div>
                  <dt>Why it matters</dt>
                  <dd>{creature.whyItMatters}</dd>
                </div>
              </dl>
              <ul className="tagRow" aria-label="Helped by">
                {creature.helpedBy.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          )}
        </section>
      </div>
    </article>
  );
}
