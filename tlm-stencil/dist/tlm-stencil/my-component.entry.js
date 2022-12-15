import { r as registerInstance, h } from './index-310f4825.js';

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

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText());
  }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
