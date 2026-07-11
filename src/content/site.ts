// Central site configuration — change the brand or nav in one place.

export const SITE = {
  name: 'The Irish Wildwood',
  short: 'Wildwood',
  tagline: 'Ireland’s native ecosystems, from 14,000 years ago to your back garden.',
  description:
    'Explore how Ireland’s wild habitats changed across 14,000 years — and how to rebuild fragments of them through rewilding.',
  contextSource: 'https://chatgpt.com/share/6a512fc0-cb4c-83eb-a9f9-eb7b646c6b64',
};

export interface NavItem {
  label: string;
  to: string;
}

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Timeline', to: '/timeline' },
  { label: 'Rewilding', to: '/rewilding' },
  { label: 'Sources', to: '/sources' },
];
