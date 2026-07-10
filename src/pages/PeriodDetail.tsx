import { Link, useParams } from 'react-router-dom';
import { getPeriod, periods } from '../content/periods';
import type { Species, SpeciesKind } from '../content/types';
import { formatSpan } from '../lib/format';
import { useScrollReveal } from '../lib/useScrollReveal';
import { StatusBadge } from '../components/StatusBadge';
import { NotFound } from './NotFound';
import { EcosystemScene } from '../components/EcosystemScene';
import { ImageAttribution } from '../components/ImageAttribution';
import { asset } from '../lib/asset';

const KIND_LABEL: Record<SpeciesKind, string> = {
  tree: 'Trees',
  shrub: 'Shrubs',
  plant: 'Plants & ground layer',
  bird: 'Birds',
  mammal: 'Mammals',
  insect: 'Insects & invertebrates',
  amphibian: 'Amphibians',
  fungi: 'Fungi',
  other: 'Other',
};

const KIND_ORDER: SpeciesKind[] = [
  'tree', 'shrub', 'plant', 'fungi', 'bird', 'mammal', 'amphibian', 'insect', 'other',
];

function groupWildlife(wildlife: Species[]) {
  const groups = new Map<SpeciesKind, Species[]>();
  for (const s of wildlife) {
    if (!groups.has(s.kind)) groups.set(s.kind, []);
    groups.get(s.kind)!.push(s);
  }
  return KIND_ORDER.filter((k) => groups.has(k)).map((k) => ({
    kind: k,
    label: KIND_LABEL[k],
    items: groups.get(k)!,
  }));
}

export function PeriodDetail() {
  const { id } = useParams();
  const scope = useScrollReveal<HTMLDivElement>();
  const period = id ? getPeriod(id) : undefined;

  if (!period) return <NotFound />;

  const index = periods.findIndex((p) => p.id === period.id);
  const prev = periods[index - 1];
  const next = periods[index + 1];
  const groups = groupWildlife(period.wildlife);

  return (
    <div ref={scope} className="page" style={{ '--accent': period.accent } as React.CSSProperties}>
      <p className="breadcrumb">
        <Link to="/timeline">← All periods</Link>
      </p>

      <header className="periodHead" data-reveal>
        <div className="periodHead__meta">
          <span className="periodHead__era">{period.era}</span>
          <span className="periodHead__span">{formatSpan(period.startYearBP, period.endYearBP)}</span>
          <StatusBadge status={period.status} />
        </div>
        <h1>{period.name}</h1>
        <p className="lead">{period.summary}</p>
      </header>

      <section className="section section--first" data-reveal aria-label={`${period.name} interactive ecosystem scene`}>
        <EcosystemScene period={period} index={index} />
      </section>

      <div className="periodGrid">
        <section className="panel" data-reveal aria-labelledby="climate-h">
          <h2 id="climate-h">Climate & weather</h2>
          <p>{period.climate}</p>
        </section>
        <section className="panel" data-reveal aria-labelledby="env-h">
          <h2 id="env-h">Landscape & environment</h2>
          <p>{period.environment}</p>
        </section>
      </div>

      {period.habitats.length > 0 && (
        <section className="section" data-reveal aria-labelledby="habitats-h">
          <h2 id="habitats-h">Habitats</h2>
          <div className="cardRow">
            {period.habitats.map((h) => (
              <article className="habitatCard" key={h.name}>
                <h3>{h.name}</h3>
                <p>{h.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {groups.length > 0 && (
        <section className="section" data-reveal aria-labelledby="wildlife-h">
          <h2 id="wildlife-h">Wildlife</h2>
          {groups.map((g) => (
            <div className="speciesGroup" key={g.kind}>
              <h3>{g.label}</h3>
              <ul className="speciesList">
                {g.items.map((s) => (
                  <li key={s.name}>
                    <span className="species__name">{s.name}</span>
                    {s.latin && <span className="species__latin">{s.latin}</span>}
                    <span className="species__note">{s.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {period.gallery && period.gallery.length > 0 && (
        <section className="section" data-reveal aria-labelledby="gallery-h">
          <h2 id="gallery-h">In detail</h2>
          <div className="galleryGrid">
            {period.gallery.map((img) => (
              <figure className="plate" key={img.src}>
                <img src={asset(img.src)} alt={img.alt} loading="lazy" />
                {(img.caption || img.credit || img.license) && (
                  <figcaption>
                    {img.caption}
                    {(img.credit || img.license) && (
                      <span className="plate__credit">
                        <ImageAttribution image={img} />
                      </span>
                    )}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}

      {period.references.length > 0 && (
        <section className="section" data-reveal aria-labelledby="refs-h">
          <h2 id="refs-h">Sources</h2>
          <ul className="refList">
            {period.references.map((r) => (
              <li key={r.id}>
                {r.url ? (
                  <a href={r.url} target="_blank" rel="noreferrer">{r.title}</a>
                ) : (
                  <span>{r.title}</span>
                )}
                <span className="refList__meta">
                  {r.source}{r.year ? `, ${r.year}` : ''}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <nav className="periodNav" aria-label="Timeline periods">
        {prev ? (
          <Link className="periodNav__link periodNav__link--prev" to={`/timeline/${prev.id}`}>
            <span className="periodNav__dir">← Earlier</span>
            <span className="periodNav__name">{prev.name}</span>
          </Link>
        ) : <span />}
        {next ? (
          <Link className="periodNav__link periodNav__link--next" to={`/timeline/${next.id}`}>
            <span className="periodNav__dir">Later →</span>
            <span className="periodNav__name">{next.name}</span>
          </Link>
        ) : <span />}
      </nav>
    </div>
  );
}
