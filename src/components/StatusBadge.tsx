import type { ContentStatus } from '../content/types';

/** Small badge flagging content still awaiting research (draft). */
export function StatusBadge({ status }: { status: ContentStatus }) {
  if (status === 'published') return null;
  return (
    <span className="badge badge--draft" title="Content is being researched and will be expanded">
      Draft — research in progress
    </span>
  );
}
