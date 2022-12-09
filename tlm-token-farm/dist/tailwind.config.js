const { filterTokensByType } = require('../../src/scripts/utils');
const mw = require('../json/mw.json');

const colors = { ...filterTokensByType('color', mw) };
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