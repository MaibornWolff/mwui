/* eslint-disable no-console */
const fs = require('fs');
const template = require('lodash.template');
const StyleDictionaryPackage = require('style-dictionary');
const { createArray } = require('./utils.ts');
const { utilities } = require('./utility-classes.ts');

const typingsES6Template = template(fs.readFileSync('src/templates/typings/es6.template'));

StyleDictionaryPackage.registerFormat({
  name: 'utilityClass',
  formatter: dictionary => {
    let output = '';
    dictionary.allProperties.forEach(({ type, name, value }) => {
      utilities.forEach(utility => {
        // do not include spacings like xl-left
        if (type === utility.tokenType && !name.includes('-')) {
          const utilityClass = `${utility.name}-${name}`;

          // support x and y utilities, e.g. mx = ml & mr
          if (utility.CSSprop.length > 1) {
            output += `.${utilityClass} {
  ${utility.CSSprop[0]}: ${value}px;
  ${utility.CSSprop[1]}: ${value}px;
  }\n\n`;
          } else {
            output += `.${utilityClass} {
  ${utility.CSSprop[0]}: ${value}px;
  }\n\n`;
          }
        }
      });
    });
    return output;
  },
});

StyleDictionaryPackage.registerFormat({
  name: 'css/variables',
  formatter: dictionary => {
    const getValue = prop => prop.value;

    return `:root {\n${dictionary.allProperties.map(prop => `  --${prop.name}: ${getValue(prop)};`).join('\n')}\n}`;
  },
});

StyleDictionaryPackage.registerFormat({
  name: 'scss/variables',
  formatter: dictionary => {
    const getValue = prop => prop.value;

    return `\n${dictionary.allProperties.map(prop => `  $${prop.name}: ${getValue(prop)};`).join('\n')}\n`;
  },
});

StyleDictionaryPackage.registerFormat({
  name: 'typings/es6',
  formatter: typingsES6Template,
});

StyleDictionaryPackage.registerTransform({
  name: 'sizes/px',
  type: 'value',
  matcher: prop => {
    // You can be more specific here if you only want 'em' units for font sizes
    return ['fontSizes', 'spacing', 'borderRadius', 'borderWidth', 'sizing'].includes(prop.attributes.category);
  },
  transformer: prop => {
    // You can also modify the value here if you want to convert pixels to ems
    return `${parseFloat(prop.original.value)}px`;
  },
});

const baseTransforms = ['attribute/cti', 'size/px'];
const jsTransforms = baseTransforms.concat(['name/cti/camel']);
// const scssTransforms = baseTransforms.concat(['name/cti/kebab']);

// Configuration of the export dictionaries happens here - currently exporting as css, json and javaScript files

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
