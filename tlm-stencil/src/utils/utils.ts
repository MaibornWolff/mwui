export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export function getFontWeightValue(fontWeight: string): number {
  return {
    'light': 300,
    'regular': 400,
    'semibold': 400,
    'bold': 700,
    // font-style and not font-weight (but set in design)
    'italic': 300,
    'light italic': 300,
  }[fontWeight.toLowerCase()];
}
