const core = require('mwui-token-farm/input/MW_core.json');
const filterTokensByType = (type, tokens) => {
  const entries = Object.entries(tokens);
  const res = entries.reduce((acc, cur) => {
    if (cur[1].type === type) {
      acc = { ...acc, [cur[0]]: cur[1].value };
      return acc;
    }

    // @ts-ignore
    if (Object.values(cur[1])[0].type === type) {
      const value = cur[1];
      acc = {
        ...acc,
        [cur[0]]: Object.entries(value).reduce((a, c) => {
          // @ts-ignore
          a = { ...a, [Number(c[0]) || c[0]]: c[1].value };
          return a;
        }, {}),
      };

      return acc;
    }

    return acc;
  }, {});

  return res;
};

const colors = { ...filterTokensByType('color', core.mw.core.color) };
const spacing = { ...filterTokensByType('spacing', core) };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors,
    extend: {
      spacing,
      colors: {
        code: '#f0f0f0',
      },
    },
  },
  plugins: [],
};
