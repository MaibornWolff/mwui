'use strict';

const index = require('./index-43cff046.js');

/*
 Stencil Client Patch Browser v2.17.3 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('tlm-components.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["my-component_2.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[4,"tlm-button",{"buttonId":[1,"button-id"]}]]]], options);
});
