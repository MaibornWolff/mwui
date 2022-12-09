function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
function getFontWeightValue(fontWeight) {
  return {
    'light': 300,
    'regular': 400,
    'semibold': 400,
    'bold': 700,
    'italic': 300,
    'light italic': 300,
  }[fontWeight.toLowerCase()];
}
/**
 *
 * @param fontWeight design token specific: includes also information about font-style
 * @returns italic | oblique | normal
 */
function getFontStyle(input) {
  const fontWeight = input.toLowerCase();
  if (fontWeight.includes('italic')) {
    return 'italic';
  }
  if (fontWeight.includes('oblique')) {
    return 'oblique';
  }
  return 'normal';
}

export { format as f, getFontWeightValue as g };
