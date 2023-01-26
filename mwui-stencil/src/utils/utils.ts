export function format(first: string, middle: string, last: string): string {
  return (first || "") + (middle ? ` ${middle}` : "") + (last ? ` ${last}` : "");
}

export function getFontWeightValue(fontWeight: string): number {
  return {
    "light": 300,
    "regular": 400,
    "medium": 500,
    "semibold": 400,
    "bold": 700,
    "italic": 300,
    "light italic": 300,
  }[fontWeight.toLowerCase()];
}

/**
 *
 * @param fontWeight design token specific: includes also information about font-style
 * @returns italic | oblique | normal
 */
export function getFontStyle(input: string): "italic" | "normal" | "oblique" {
  const fontWeight = input.toLowerCase();
  if (fontWeight.includes("italic")) {
    return "italic";
  }

  if (fontWeight.includes("oblique")) {
    return "oblique";
  }

  return "normal";
}
