// Formatting helpers for "years before present" (BP, present = 1950).

const nf = new Intl.NumberFormat('en-IE');

/** "8,000 years ago", "1,000 years ago", or "Present day" for 0. */
export function formatBP(yearsBP: number): string {
  if (yearsBP <= 0) return 'Present day';
  return `${nf.format(yearsBP)} years ago`;
}

/** Span label for a period, e.g. "9,000–4,000 years ago" or "1,000 years ago – present". */
export function formatSpan(startBP: number, endBP: number): string {
  if (endBP <= 0) return `${nf.format(startBP)} years ago – present`;
  return `${nf.format(startBP)}–${nf.format(endBP)} years ago`;
}
