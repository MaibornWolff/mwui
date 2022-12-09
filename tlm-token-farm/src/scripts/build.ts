/* eslint-disable no-console */
const StyleDictionaryPackage = require('style-dictionary');
const { createArray } = require('./utils.js');
const formats = require('./formats.ts');

formats.forEach(format => StyleDictionaryPackage.registerFormat(format));

StyleDictionaryPackage.registerTransform({
  name: 'size/px',
  type: 'value',
  matcher: prop => {
    // You can be more specific here if you only want 'em' units for font sizes
    return ['fontSizes', 'spacing', 'borderRadius', 'borderWidth', 'sizing'].includes(prop.type);
  },
  transformer: prop => {
    if (typeof prop.original.value === 'number') {
      return `${parseFloat(prop.original.value)}px`;
    }

    if (typeof prop.original.value === 'string' && prop.original.value.includes('+')) {
      const clearedValue = prop.original.value.replaceAll('px', '').replaceAll('+', ' ');

      return `${clearedValue.split(' ').reduce((acc, cur) => {
        acc = Number(acc) + Number(cur);
        return acc;
      }, 0)}px`;
    }
    // You can also modify the value here if you want to convert pixels to ems
    return prop.original.value.includes('px') ? parseFloat(prop.original.value) : `${parseFloat(prop.original.value)}px`;
  },
});

const baseTransforms = ['attribute/cti', 'size/px'];
const jsTransforms = baseTransforms.concat(['name/cti/camel']);
const scssTransforms = baseTransforms.concat(['name/cti/kebab']);

const getStyleDictionaryConfig = (theme: string) => {
  return {
    source: [`input/${theme}.json`],
    format: {
      createArray,
    },
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: 'dist/',
        files: [
          {
            destination: `index.css`,
            format: 'utilityClass',
          },
        ],
      },
      cssVariables: {
        transformGroup: 'css',
        buildPath: 'dist/',
        files: [
          {
            destination: `variables.css`,
            format: 'css/variables',
          },
        ],
      },
      js: {
        transforms: jsTransforms,
        buildPath: 'dist/js/',
        files: [
          {
            destination: `${theme}.js`,
            format: 'javascript/es6',
          },
        ],
      },
    },
  };
};
console.log('Build started...');

['MW_core', 'MW_component', 'MW_semantic_light'].forEach(theme => {
  console.log('\n==============================================');
  console.log(`\nProcessing: [${theme}]`);

  const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(theme));
  StyleDictionary.buildAllPlatforms();

  console.log('\nEnd processing');
});

console.log('\n==============================================');
console.log('\nBuild completed!');
