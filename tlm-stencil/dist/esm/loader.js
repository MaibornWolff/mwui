import { p as promiseResolve, b as bootstrapLazy } from './index-8f5d143b.js';

/*
 Stencil Client Patch Esm v2.17.3 | MIT Licensed | https://stenciljs.com
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
