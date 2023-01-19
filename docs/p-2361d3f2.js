/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-5025b3ef.js';
import { g as globalScripts } from './app-globals-5baf0a08.js';

/*
 Stencil Client Patch Browser v2.21.0 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        // because the mark/measure APIs are designed to write entries to a buffer in the browser that does not exist,
        // simply stub the implementations out.
        // TODO(STENCIL-323): Remove this patch when support for older browsers is removed (breaking)
        // @ts-ignore
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find((s) => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
            s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = import.meta.url;
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-be6044de.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], {
                    type: 'application/javascript',
                }));
                mod = new Promise((resolve) => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["mw-icon-gallery",[[1,"mw-icon-gallery",{"icons":[32],"filteredIcons":[32],"fill":[32],"weight":[32]}]]],["mw-tabs",[[1,"mw-tabs",{"testId":[1,"test-id"],"selected":[1538],"tabs":[32]}]]],["mw-avatar",[[1,"mw-avatar",{"testId":[1,"test-id"],"src":[1],"icon":[1],"alt":[1],"size":[1]}]]],["mw-checkbox",[[1,"mw-checkbox",{"testId":[1,"test-id"],"value":[1537],"name":[1],"checked":[1540],"disabled":[4],"label":[1]}]]],["mw-chip",[[1,"mw-chip",{"testId":[1,"test-id"],"icon":[1],"disabled":[516],"showClose":[4,"show-close"],"selected":[1540]}]]],["mw-menu",[[1,"mw-menu",{"testId":[1,"test-id"],"placement":[1],"open":[1540]}]]],["mw-button",[[4,"mw-button",{"testId":[1,"test-id"],"disabled":[4],"label":[1],"variant":[1],"size":[1],"href":[1],"target":[1]}]]],["mw-card",[[1,"mw-card",{"testId":[1,"test-id"],"outlined":[4],"elevated":[4]}]]],["mw-card-body",[[1,"mw-card-body"]]],["mw-card-footer",[[1,"mw-card-footer",{"justifyCenter":[4,"justify-center"],"justifyStart":[4,"justify-start"],"justifyEnd":[4,"justify-end"],"justifyNormal":[4,"justify-normal"],"justifyLeft":[4,"justify-left"],"justifyRight":[4,"justify-right"],"justifyFlexStart":[4,"justify-flex-start"],"justifyFlexEnd":[4,"justify-flex-end"],"justifySpaceAround":[4,"justify-space-around"],"justifySpaceBetween":[4,"justify-space-between"],"justifySpaceEvenly":[4,"justify-space-evenly"]}]]],["mw-card-header",[[1,"mw-card-header",{"header":[1],"subheader":[1]}]]],["mw-card-image",[[1,"mw-card-image",{"src":[1],"alt":[1]}]]],["mw-card-title",[[1,"mw-card-title",{"title":[1],"subtitle":[1],"metadata":[1]}]]],["mw-divider",[[1,"mw-divider",{"inset":[4]}]]],["mw-link",[[1,"mw-link",{"href":[1]}]]],["mw-menu-item",[[1,"mw-menu-item",{"title":[1],"subtitle":[1],"disabled":[4],"selected":[1540]}]]],["mw-menu-list",[[1,"mw-menu-list",{"testId":[1,"test-id"]}]]],["mw-radio",[[4,"mw-radio",{"disabled":[4],"checked":[1028],"value":[1],"name":[1],"testId":[1,"test-id"]}]]],["mw-tab",[[1,"mw-tab",{"selected":[4],"icon":[1],"label":[1],"disabled":[4]}]]],["mw-popover",[[1,"mw-popover",{"testId":[1,"test-id"],"open":[1028],"placement":[1],"dismissable":[4],"noPadding":[4,"no-padding"],"name":[1]}]]],["mw-switch",[[1,"mw-switch",{"testId":[1,"test-id"],"disabled":[4],"label":[1],"onText":[1,"on-text"],"offText":[1,"off-text"],"checked":[1028]}]]],["mw-textfield",[[1,"mw-textfield",{"type":[1],"value":[1544],"name":[1],"label":[513],"placeholder":[1],"helperText":[513,"helper-text"],"hasError":[4,"has-error"],"inline":[4],"required":[4],"disabled":[4],"focused":[32]}]]],["mw-icon",[[1,"mw-icon",{"icon":[1],"size":[1],"fill":[4],"color":[1],"weight":[2]}]]]], options);
});
