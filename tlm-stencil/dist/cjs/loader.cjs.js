'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ed04e6fd.js');

/*
 Stencil Client Patch Esm v2.18.1 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["tlm-button_2.cjs",[[4,"tlm-button",{"testId":[1,"test-id"],"disabled":[4]}],[4,"tlm-button-group",{"testId":[1,"test-id"]}]]],["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
