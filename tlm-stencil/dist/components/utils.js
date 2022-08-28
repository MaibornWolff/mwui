function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
function getFontWeightValue(fontWeight) {
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

export { format as f, getFontWeightValue as g };
