import type { ReactNode } from 'react';

// Simple single-colour outline/silhouette icons (fill/stroke = currentColor) used
// as hotspot markers and little card illustrations. These are a first pass — swap
// individual entries for Codex-generated animal outlines by editing ICONS below.

export type IconName =
  | 'deer'
  | 'boar'
  | 'bird'
  | 'marten'
  | 'hedgehog'
  | 'frog'
  | 'bee'
  | 'butterfly'
  | 'leaf'
  | 'tree'
  | 'hill'
  | 'water'
  | 'fungi'
  | 'paw';

const line = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const ICONS: Record<IconName, ReactNode> = {
  deer: (
    <>
      <path fill="currentColor" d="M12 8.4c-1.7 0-3 1.7-3 4.2 0 2.6 1.3 5.4 3 5.4s3-2.8 3-5.4c0-2.5-1.3-4.2-3-4.2z" />
      <g {...line}>
        <path d="M10 8.6C9.2 7 8.7 5.4 8.9 3.6" />
        <path d="M9 5.3 7.2 4.6" />
        <path d="M9.5 6.9 7.7 6.8" />
        <path d="M14 8.6c.8-1.6 1.3-3.2 1.1-5" />
        <path d="M15 5.3l1.8-.7" />
        <path d="M14.5 6.9l1.8-.1" />
      </g>
    </>
  ),
  boar: (
    <>
      <path
        fill="currentColor"
        d="M4.5 13.2c0-2.2 2.1-3.9 5-3.9h5l2.8-1.5c.6-.3 1.2.3.9.9l-1 1.9c1 .7 1.6 1.7 1.6 2.8 0 .5-.4.9-.9.9H6c-.9 0-1.5-.5-1.5-1.1z"
      />
      <g {...line}>
        <path d="M7 14.4V17" />
        <path d="M10 14.4V17" />
        <path d="M13 14.4V17" />
        <path d="M18.2 12.4c.7.1 1.1.7.9 1.3" />
      </g>
    </>
  ),
  bird: (
    <>
      <ellipse cx="10.5" cy="13" rx="5" ry="3.6" fill="currentColor" />
      <circle cx="15.5" cy="9.6" r="2.4" fill="currentColor" />
      <path fill="currentColor" d="M17.4 8.7 20.6 8l-2.8 1.6z" />
      <path fill="currentColor" d="M5.6 13 2.5 15.6 6.2 15z" />
      <g {...line}>
        <path d="M11 16.2v2.3" />
        <path d="M13.4 16.2v2.3" />
      </g>
    </>
  ),
  marten: (
    <>
      <ellipse cx="11.5" cy="13" rx="6" ry="2.7" fill="currentColor" />
      <circle cx="17.6" cy="11.4" r="2.1" fill="currentColor" />
      <path {...line} d="M5.6 13c-2 .1-3.4 1.6-3.9 3.6.7-.5 1.7-.9 2.7-.9" />
      <g {...line}>
        <path d="M8.6 15.2v2" />
        <path d="M13.6 15.2v2" />
      </g>
    </>
  ),
  hedgehog: (
    <>
      <path fill="currentColor" d="M3.8 16.4c0-4 3.7-7.1 8.2-7.1s8.2 3.1 8.2 7.1z" />
      <circle cx="18.4" cy="15" r="1" fill="currentColor" />
      <g {...line}>
        <path d="M7.5 9.4V6.6" />
        <path d="M10.5 8.8V5.8" />
        <path d="M13.5 9V6.2" />
      </g>
    </>
  ),
  frog: (
    <>
      <ellipse cx="12" cy="14" rx="6" ry="4" fill="currentColor" />
      <circle cx="8.6" cy="9.6" r="2.1" fill="currentColor" />
      <circle cx="15.4" cy="9.6" r="2.1" fill="currentColor" />
      <g {...line}>
        <path d="M6.2 17c-2 0-3.2 1-3.2 2.1" />
        <path d="M17.8 17c2 0 3.2 1 3.2 2.1" />
      </g>
    </>
  ),
  bee: (
    <>
      <ellipse cx="8" cy="10.5" rx="2.6" ry="3.4" fill="currentColor" opacity="0.5" />
      <ellipse cx="16" cy="10.5" rx="2.6" ry="3.4" fill="currentColor" opacity="0.5" />
      <ellipse cx="12" cy="14" rx="3.4" ry="5" fill="currentColor" />
    </>
  ),
  butterfly: (
    <>
      <ellipse cx="8" cy="9.5" rx="3.6" ry="3.1" fill="currentColor" />
      <ellipse cx="8" cy="15" rx="3.1" ry="2.7" fill="currentColor" />
      <ellipse cx="16" cy="9.5" rx="3.6" ry="3.1" fill="currentColor" />
      <ellipse cx="16" cy="15" rx="3.1" ry="2.7" fill="currentColor" />
      <rect x="11.3" y="8" width="1.4" height="9" rx="0.7" fill="currentColor" />
    </>
  ),
  leaf: (
    <path fill="currentColor" d="M5 19C5 11 11 5 19 5c0 8-6 14-14 14z M8 16c2-4 5-7 9-8" />
  ),
  tree: (
    <>
      <circle cx="12" cy="9" r="6" fill="currentColor" />
      <rect x="11" y="13" width="2" height="7" rx="0.6" fill="currentColor" />
    </>
  ),
  hill: (
    <path fill="currentColor" d="M2 19 8 8.5l3.6 6 2.8-4L22 19z" />
  ),
  water: (
    <path fill="currentColor" d="M12 3c4 5 6 8.2 6 11.2a6 6 0 0 1-12 0C6 11.2 8 8 12 3z" />
  ),
  fungi: (
    <>
      <path fill="currentColor" d="M5 12.2a7 7 0 0 1 14 0z" />
      <path fill="currentColor" d="M10.5 12.2h3v6a1.5 1.5 0 0 1-3 0z" />
    </>
  ),
  paw: (
    <g fill="currentColor">
      <circle cx="7" cy="10" r="1.7" />
      <circle cx="12" cy="8.4" r="1.9" />
      <circle cx="17" cy="10" r="1.7" />
      <path d="M12 12c3 0 5.2 2 5.2 4.1A3 3 0 0 1 14.2 19h-4.4A3 3 0 0 1 6.8 16c0-2 2.2-4 5.2-4z" />
    </g>
  ),
};

export function iconForSpecies(sp: { name: string; latin?: string; kind: string }): IconName {
  const s = `${sp.name} ${sp.latin ?? ''}`.toLowerCase();
  if (/reindeer|\bdeer\b|megaloceros|rangifer|elk/.test(s)) return 'deer';
  if (/boar|\bpig\b|sus /.test(s)) return 'boar';
  if (/marten|martes|weasel|stoat|otter/.test(s)) return 'marten';
  if (/hedgehog/.test(s)) return 'hedgehog';
  if (/frog|toad|newt|rana/.test(s)) return 'frog';
  if (/bee|bombus|wasp/.test(s)) return 'bee';
  if (/butterfly|tortoiseshell|moth|damselfly|dragonfly/.test(s)) return 'butterfly';
  if (/grouse|robin|goldcrest|\btit\b|wren|finch|thrush|blackbird|lagopus|regulus|\bbird\b/.test(s)) return 'bird';
  switch (sp.kind) {
    case 'bird': return 'bird';
    case 'insect': return 'bee';
    case 'amphibian': return 'frog';
    case 'mammal': return 'paw';
    case 'fungi': return 'fungi';
    case 'tree': return 'tree';
    case 'shrub':
    case 'plant': return 'leaf';
    default: return 'paw';
  }
}

export function SpeciesIcon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {ICONS[name] ?? ICONS.paw}
    </svg>
  );
}
