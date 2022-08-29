export declare function format(first: string, middle: string, last: string): string;
export declare function getFontWeightValue(fontWeight: string): number;
/**
 *
 * @param fontWeight design token specific: includes also information about font-style
 * @returns italic | oblique | normal
 */
export declare function getFontStyle(input: string): 'italic' | 'normal' | 'oblique';
