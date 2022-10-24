const { filterTokensByType } = require('../../src/scripts/utils');
const global = require('../json/global.json');

const colors = { ...filterTokensByType('color', global) };
const spacing = { ...filterTokensByType('spacing', global) };

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