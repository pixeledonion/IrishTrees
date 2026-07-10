import { Link } from 'react-router-dom';
import { periods } from '../content/periods';
import { formatSpan } from '../lib/format';
import { useScrollReveal } from '../lib/useScrollReveal';
import { StatusBadge } from '../components/StatusBadge';
import { EcosystemScene } from '../components/EcosystemScene';

export function Timeline() {
  const scope = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={scope} className="timelinePage">
      <header className="pageHead timelinePage__head">
        <p className="eyebrow">The timeline</p>
        <h1>8,000 years of Irish ecosystems</h1>
        <p className="lead">
          Scroll from the retreating ice to the present day. Each period is a
          snapshot of the climate, landscape and wildlife of its age. Tap the
          glowing points to inspect landscape, plants and wildlife, then open one
          for the full detail.
        </p>
      </header>

      <ol className="storyTimeline" aria-label="Scrollable ecosystem timeline">
        {periods.map((p, i) => (
          <li className="storyPanel" key={p.id} style={{ '--accent': p.accent } as React.CSSProperties}>
            <div className="storyPanel__rail" aria-hidden="true">
              <span>{String(i + 1).padStart(2, '0')}</span>
            </div>
            <article className="storyPanel__body" data-reveal>
              <EcosystemScene period={p} index={i} />
              <div className="storyPanel__content">
                <div className="timeline__meta">
                  <span className="timeline__era">{p.era}</span>
                  <span className="timeline__span">{formatSpan(p.startYearBP, p.endYearBP)}</span>
                  {p.status === 'draft' && <StatusBadge status={p.status} />}
                </div>
                <h2>
                  <Link to={`/timeline/${p.id}`}>{p.name}</Link>
                </h2>
                <p className="timeline__tag">{p.tagline}</p>
                <p>{p.summary}</p>
                <dl className="storyPanel__facts">
                  <div>
                    <dt>Weather</dt>
                    <dd>{p.climate}</dd>
                  </div>
                  <div>
                    <dt>Habitats</dt>
                    <dd>{p.habitats.map((h) => h.name).join(' / ')}</dd>
                  </div>
                </dl>
                <Link className="timeline__more" to={`/timeline/${p.id}`}>
                  Explore this period
                  <span aria-hidden="true"> →</span>
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
