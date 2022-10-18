/* eslint-disable no-console */
const StyleDictionaryPackage = require('style-dictionary');
const { createArray } = require('./utils.ts');
const formats = require('./formats.ts');

formats.forEach(format => StyleDictionaryPackage.registerFormat(format));

const baseTransforms = ['attribute/cti', 'size/px'];
const jsTransforms = baseTransforms.concat(['name/cti/camel']);
const scssTransforms = baseTransforms.concat(['name/cti/kebab']);

StyleDictionaryPackage.registerTransform({
  name: 'sizes/px',
  type: 'value',
  matcher: prop => {
    // You can be more specific here if you only want 'em' units for font sizes
    return ['fontSizes', 'spacing', 'borderRadius', 'borderWidth', 'sizing'].includes(prop.attributes.category);
  },
  transformer: prop => {
    // You can also modify the value here if you want to convert pixels to ems
    return prop.original.value.includes('px') ? parseFloat(prop.original.value) : `${parseFloat(prop.original.value)}px`;
  },
});

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

// ["global", "mw-theme", "mw-theme_dark"].forEach((theme) => {
['global'].forEach(theme => {
  console.log('\n==============================================');
  console.log(`\nProcessing: [${theme}]`);

  const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(theme));
  StyleDictionary.buildAllPlatforms();

  console.log('\nEnd processing');
});

console.log('\n==============================================');
console.log('\nBuild completed!');
