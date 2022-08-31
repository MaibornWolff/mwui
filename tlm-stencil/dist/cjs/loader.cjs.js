'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c8dae5de.js');

/*
 Stencil Client Patch Esm v2.17.4 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["my-component_2.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[4,"tlm-button",{"testId":[1,"test-id"],"disabled":[4]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
