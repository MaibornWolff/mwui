/* eslint-disable no-console */
const StyleDictionaryPackage = require('style-dictionary');
const { createArray } = require('./utils.js');
const formats = require('./formats.ts');
const transforms = require('./transforms');

formats.forEach(format => StyleDictionaryPackage.registerFormat(format));
transforms.forEach(transform => StyleDictionaryPackage.registerTransform(transform));

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
        buildPath: 'dist/css/',
        files: [
          {
            destination: `index.css`,
            format: 'utilityClass',
          },
        ],
      },
      cssVariables: {
        transformGroup: 'css',
        buildPath: 'dist/css/',
        files: [
          {
            destination: `${theme}.css`,
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
