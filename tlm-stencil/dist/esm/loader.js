import { p as promiseResolve, b as bootstrapLazy } from './index-04b25673.js';

/*
 Stencil Client Patch Esm v2.17.4 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["my-component_2",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[4,"tlm-button",{"testId":[1,"test-id"],"disabled":[4]}]]]], options);
  });
};

export { defineCustomElements };
