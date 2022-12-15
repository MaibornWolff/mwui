const { filterTokensByType } = require('../../src/scripts/utils');
const mw = require('../input/MW_core.json');

const colors = { ...filterTokensByType('color', mw.core.colors) };
const spacing = { ...filterTokensByType('spacing', mw) };

module.exports = {
  darkMode: 'class',
  content: ['*.{html,js,jsx,ts,tsx,vue}'],
  theme: {
    colors,
    spacing
  },
  variants: {},
  plugins: []
};