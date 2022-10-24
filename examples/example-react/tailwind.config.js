const { filterTokensByType } = require('../../tlm-token-farm/src/scripts/utils');
const global = require('../../tlm-token-farm/input/global.json');

const colors = { ...filterTokensByType('color', global) };
const spacing = { ...filterTokensByType('spacing', global) };
// const typography = { ...filterTokensByType('typography', global) };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    spacing,
    colors,
    extend: {
      colors: {
        code: '#f0f0f0'
      }
    }
  },
  plugins: [],
};
