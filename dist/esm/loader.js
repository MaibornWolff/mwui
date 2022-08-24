import { p as promiseResolve, b as bootstrapLazy } from './index-2039e01e.js';

/*
 Stencil Client Patch Esm v2.17.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["my-component_2",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[4,"tlm-button",{"buttonId":[1,"button-id"]}]]]], options);
  });
};

export { defineCustomElements };
