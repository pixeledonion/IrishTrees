import { Link } from 'react-router-dom';
import { periods } from '../content/periods';
import { formatSpan } from '../lib/format';
import { useScrollReveal } from '../lib/useScrollReveal';
import { StatusBadge } from '../components/StatusBadge';
import { EcosystemScene } from '../components/EcosystemScene';

// Derive the timeline's span from the oldest period so the headline always
// matches the data (rounded to the nearest 1,000 years).
const spanYears =
  Math.round(Math.max(...periods.map((p) => p.startYearBP)) / 1000) * 1000;

export function Timeline() {
  const scope = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={scope} className="timelinePage">
      <header className="page timelinePage__head">
        <p className="eyebrow">The timeline</p>
        <h1>{spanYears.toLocaleString('en-IE')} years of Irish ecosystems</h1>
        <p className="lead">
          Scroll from the retreating ice to the present day. Each period is a
          snapshot of the climate, landscape and wildlife of its age. Tap the
          glowing markers to inspect the landscape, plants and wildlife, then open
          one for the full detail.
        </p>
      </header>

      <ol className="storyTimeline" aria-label="Scrollable ecosystem timeline">
        {periods.map((p, i) => (
          <li className="storyPanel" key={p.id} style={{ '--accent': p.accent } as React.CSSProperties}>
            <EcosystemScene period={p} index={i} full />
            <div className="storyPanel__content" data-reveal>
              <div className="timeline__meta">
                <span className="timeline__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="timeline__era">{p.era}</span>
                <span className="timeline__span">{formatSpan(p.startYearBP, p.endYearBP)}</span>
                {p.status === 'draft' && <StatusBadge status={p.status} />}
              </div>
              <h2>
                <Link to={`/timeline/${p.id}`}>{p.name}</Link>
              </h2>
              <p className="timeline__tag">{p.tagline}</p>
              <p className="storyPanel__summary">{p.summary}</p>
              <dl className="storyPanel__facts">
                <div>
                  <dt>Weather</dt>
                  <dd>{p.climate}</dd>
                </div>
                <div>
                  <dt>Habitats</dt>
                  <dd>{p.habitats.map((h) => h.name).join(' · ')}</dd>
                </div>
              </dl>
              <Link className="timeline__more" to={`/timeline/${p.id}`}>
                Explore this period
                <span aria-hidden="true"> →</span>
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
