// Resolve a /public asset path against the app's base URL so images work both
// locally and under the GitHub Pages subpath (/IrishTrees/). Content data stores
// root-absolute paths like "/generated-images/x.png"; this prefixes the base.
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
