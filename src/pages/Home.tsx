import { Link } from 'react-router-dom';
import { SITE } from '../content/site';
import { periods } from '../content/periods';
import { formatSpan } from '../lib/format';
import { asset } from '../lib/asset';
import { useScrollReveal } from '../lib/useScrollReveal';

const hero = periods.find((p) => p.keyImage)?.keyImage;

export function Home() {
  const scope = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={scope}>
      <section className="hero hero--immersive">
        <div className="hero__media">
          {hero && (
            <img src={asset(hero.src)} alt={hero.alt} width={1672} height={941} />
          )}
          <div className="hero__scrim" aria-hidden="true" />
        </div>
        <div className="hero__body">
          <p className="eyebrow">Fourteen thousand years · one island</p>
          <h1>{SITE.tagline}</h1>
          <p className="lead">{SITE.description}</p>
          <div className="hero__actions">
            <Link className="btn btn--primary" to="/timeline">
              Explore the timeline
            </Link>
            <Link className="btn btn--ghost" to="/rewilding">
              Rewild your garden
            </Link>
          </div>
        </div>
      </section>

      <div className="page">
      <section className="section" aria-labelledby="mission-h">
        <div className="section__head" data-reveal>
          <p className="eyebrow">Why this matters</p>
          <h2 id="mission-h">Understand the past to rebuild the future</h2>
        </div>
        <div className="cardRow">
          <article className="feature" data-reveal>
            <h3>See the change over time</h3>
            <p>
              From tundra to pinewood to bog, Ireland’s habitats shifted with the
              climate. A scrollable timeline makes 14,000 years easy to grasp.
            </p>
          </article>
          <article className="feature" data-reveal>
            <h3>Learn the living detail</h3>
            <p>
              Each period covers its climate, landscape, habitats and wildlife —
              clear and concise, not a wall of text.
            </p>
          </article>
          <article className="feature" data-reveal>
            <h3>Act where you live</h3>
            <p>
              Turn the history into practice with rewilding techniques for
              gardens, schools and communities — and real success stories.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--muted" aria-labelledby="timeline-teaser-h">
        <div className="section__head" data-reveal>
          <p className="eyebrow">The timeline</p>
          <h2 id="timeline-teaser-h">Ireland’s ecosystems through time</h2>
        </div>
        <ol className="teaser">
          {periods.map((p) => (
            <li key={p.id} data-reveal>
              <Link className="teaser__item" to={`/timeline/${p.id}`}>
                <span className="teaser__dot" style={{ background: p.accent }} aria-hidden="true" />
                <span className="teaser__text">
                  <strong>{p.name}</strong>
                  <span className="teaser__span">{formatSpan(p.startYearBP, p.endYearBP)}</span>
                  <span className="teaser__tag">{p.tagline}</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
        <p className="section__cta" data-reveal>
          <Link className="btn btn--primary" to="/timeline">
            Open the full timeline
          </Link>
        </p>
      </section>
      </div>
    </div>
  );
}
