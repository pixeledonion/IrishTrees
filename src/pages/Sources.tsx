import { Link } from 'react-router-dom';
import { periods } from '../content/periods';
import { rewildingScenes } from '../content/rewilding';
import { SITE } from '../content/site';
import type { MediaAsset } from '../content/types';
import { useScrollReveal } from '../lib/useScrollReveal';
import { ImageAttribution } from '../components/ImageAttribution';

interface AggregatedRef {
  id: string;
  title: string;
  source: string;
  url?: string;
  year?: number;
  periods: string[];
}

function aggregateReferences(): AggregatedRef[] {
  const byId = new Map<string, AggregatedRef>();
  for (const p of periods) {
    for (const r of p.references) {
      const existing = byId.get(r.id);
      if (existing) {
        existing.periods.push(p.name);
      } else {
        byId.set(r.id, { ...r, periods: [p.name] });
      }
    }
  }
  return [...byId.values()].sort((a, b) => a.title.localeCompare(b.title));
}

/** Every image the app renders, de-duplicated by src. */
function collectImages(): MediaAsset[] {
  const all: MediaAsset[] = [];
  for (const p of periods) {
    if (p.keyImage) all.push(p.keyImage);
    p.gallery?.forEach((g) => all.push(g));
  }
  for (const s of rewildingScenes) all.push(s.image);
  const seen = new Set<string>();
  return all.filter((img) => (seen.has(img.src) ? false : (seen.add(img.src), true)));
}

export function Sources() {
  const scope = useScrollReveal<HTMLDivElement>();
  const refs = aggregateReferences();
  const images = collectImages();
  const licensed = images.filter((img) => img.license);
  const generated = images.filter((img) => !img.license && img.credit);

  return (
    <div ref={scope} className="page page--narrow">
      <header className="pageHead">
        <p className="eyebrow">Transparency</p>
        <h1>Sources & method</h1>
        <p className="lead">
          This is an educational project. Historical content is being researched
          and expanded over time; periods still marked “draft” carry a starting
          summary and will gain full, cited detail.
        </p>
      </header>

      <section className="section" data-reveal aria-labelledby="refs-h">
        <h2 id="refs-h">References</h2>
        {refs.length > 0 ? (
          <ul className="refList">
            {refs.map((r) => (
              <li key={r.id}>
                {r.url ? (
                  <a href={r.url} target="_blank" rel="noreferrer">{r.title}</a>
                ) : (
                  <span>{r.title}</span>
                )}
                <span className="refList__meta">
                  {r.source}{r.year ? `, ${r.year}` : ''} · {r.periods.join(', ')}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p>References are being compiled and will appear here.</p>
        )}
      </section>

      <section className="section" data-reveal aria-labelledby="image-credits-h">
        <h2 id="image-credits-h">Image credits</h2>
        {licensed.length > 0 && (
          <>
            <h3>Licensed photographs</h3>
            <ul className="refList">
              {licensed.map((img) => (
                <li key={img.src}>
                  {img.caption && <span>{img.caption}</span>}
                  <span className="refList__meta">
                    <ImageAttribution image={img} />
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}
        {generated.length > 0 && (
          <>
            <h3>AI-generated images</h3>
            <p>
              Historical scenes for which no photograph can exist are AI
              reconstructions/visualisations, not photographs. {generated.length}{' '}
              such images are used across the site, each credited on the image
              itself.
            </p>
          </>
        )}
      </section>

      <section className="section" data-reveal aria-labelledby="method-h">
        <h2 id="method-h">How this is made</h2>
        <p>
          Research, written content and imagery are prepared collaboratively and
          reviewed before a period is marked published. The founding concept was
          distilled from a background conversation on a Caledonian-style pinewood
          grove in Donegal.
        </p>
        <p>
          <a href={SITE.contextSource} target="_blank" rel="noreferrer">
            Read the source conversation
          </a>{' '}
          or head back to <Link to="/timeline">the timeline</Link>.
        </p>
      </section>
    </div>
  );
}
