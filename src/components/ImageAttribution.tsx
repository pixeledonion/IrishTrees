import type { MediaAsset } from '../content/types';

/**
 * Renders a compliant, linked attribution for an image's licence, or its
 * free-text credit as a fallback. Returns null when there is nothing to show.
 * Drop it inside whatever wrapper each surface uses (scene overlay, figcaption…).
 */
export function ImageAttribution({ image }: { image: MediaAsset }) {
  const { credit, license } = image;

  if (license) {
    return (
      <>
        {license.title && <cite className="attr__title">{license.title}</cite>}
        {license.author ? ` by ${license.author}` : ''}
        {' · '}
        {license.licenseUrl ? (
          <a href={license.licenseUrl} target="_blank" rel="noreferrer">
            {license.licenseName}
          </a>
        ) : (
          license.licenseName
        )}
        {license.sourceUrl && (
          <>
            {' · '}
            <a href={license.sourceUrl} target="_blank" rel="noreferrer">
              {license.sourceName ?? 'Source'}
            </a>
          </>
        )}
        {license.modified && ' · modified'}
      </>
    );
  }

  if (credit) return <>{credit}</>;
  return null;
}
