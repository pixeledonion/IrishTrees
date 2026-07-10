import { useState } from 'react';
import { Link } from 'react-router-dom';
import { rewildingScenes, techniques, successStories } from '../content/rewilding';
import { useScrollReveal } from '../lib/useScrollReveal';
import { StatusBadge } from '../components/StatusBadge';
import { GardenScene } from '../components/GardenScene';

export function Rewilding() {
  const scope = useScrollReveal<HTMLDivElement>();
  const [activeScene, setActiveScene] = useState(rewildingScenes[0].id);
  const scene = rewildingScenes.find((s) => s.id === activeScene) ?? rewildingScenes[0];

  return (
    <div ref={scope} className="page">
      <header className="pageHead">
        <p className="eyebrow">From history to action</p>
        <h1>Rewild your own patch</h1>
        <p className="lead">
          The deep history of Irish pine, oak and hazel is a template you can
          borrow. You don’t need a landscape — a garden, a school ground or a
          verge can hold real habitat. Here’s how to start.
        </p>
      </header>

      <section className="section" aria-labelledby="explore-h">
        <div className="section__head" data-reveal>
          <p className="eyebrow">Explore</p>
          <h2 id="explore-h">A rewilded garden, up close</h2>
          <p className="lead">
            Pick a habitat below, then tap the glowing points on the scene to see
            how it works — and select the insects, birds and other wildlife you
            could expect to find there.
          </p>
        </div>
        <div className="sceneTabs" role="group" aria-label="Choose a garden habitat">
          {rewildingScenes.map((s) => (
            <button
              key={s.id}
              type="button"
              className="sceneTab"
              data-active={activeScene === s.id}
              aria-pressed={activeScene === s.id}
              onClick={() => setActiveScene(s.id)}
            >
              {s.title.split(':')[0]}
            </button>
          ))}
        </div>
        <div data-reveal>
          <GardenScene key={scene.id} scene={scene} />
        </div>
      </section>

      <section className="section" aria-labelledby="techniques-h">
        <h2 id="techniques-h" data-reveal>Techniques</h2>
        <div className="techniqueList">
          {techniques.map((t, i) => (
            <article className="technique" key={t.title} data-reveal>
              <div className="technique__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
              <div className="technique__body">
                <h3>{t.title}</h3>
                <p>{t.summary}</p>
                {t.steps && (
                  <ul className="stepList">
                    {t.steps.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--muted" aria-labelledby="stories-h">
        <div className="section__head" data-reveal>
          <p className="eyebrow">It works</p>
          <h2 id="stories-h">Success stories</h2>
        </div>
        <div className="cardRow">
          {successStories.map((s) => (
            <article className="storyCard" key={s.name} data-reveal>
              <div className="storyCard__head">
                <h3>{s.name}</h3>
                <StatusBadge status={s.status} />
              </div>
              <p className="storyCard__loc">{s.location} · {s.scale}</p>
              <p>{s.summary}</p>
              {s.url && (
                <a href={s.url} target="_blank" rel="noreferrer">Learn more →</a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section callout" data-reveal>
        <h2>Start with one native tree and a wild corner</h2>
        <p>
          Pick a native suited to your soil, let a patch of grass grow long,
          leave the deadwood, and think in decades. See how these species fit
          together across{' '}
          <Link to="/timeline/caledonian-pine-maximum">the pinewood age</Link>.
        </p>
      </section>
    </div>
  );
}
