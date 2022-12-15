const fs = require('fs');
const { utilities } = require('./utility-classes.ts');
const template = require('lodash.template');
const typingsES6Template = template(fs.readFileSync('src/templates/typings/es6.template'));

const utilityClassFormat = {
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
};

const cssVariablesFormat = {
  name: 'css/variables',
  formatter: dictionary => {
    const getValue = prop => {
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
      return prop.value;
    };
    const primitiveProperties = dictionary.allProperties.filter(p => typeof p.value === 'number' || typeof p.value === 'string');

    return `:root {\n${primitiveProperties.map(prop => `  --${prop.name}: ${getValue(prop)};`).join('\n')}\n}`;
  },
};

const scssVariablesFormat = {
  name: 'scss/variables',
  formatter: dictionary => {
    const getValue = prop => prop.value;
    const primitiveProperties = dictionary.allProperties.filter(p => typeof p.value === 'number' || typeof p.value === 'string');

    return `\n${primitiveProperties.map(prop => `$${prop.name}: ${getValue(prop)};`).join('\n')}\n`;
  },
};

const typingsES6Format = {
  name: 'typings/es6',
  formatter: typingsES6Template,
};

module.exports = [utilityClassFormat, cssVariablesFormat, scssVariablesFormat, typingsES6Format];
