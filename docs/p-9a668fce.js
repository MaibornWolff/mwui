/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-b647fb4c.js';
export { s as setNonce } from './index-b647fb4c.js';
import { g as globalScripts } from './app-globals-5baf0a08.js';

/*
 Stencil Client Patch Browser v2.22.2 | MIT Licensed | https://stenciljs.com
 */
/**
 * Helper method for querying a `meta` tag that contains a nonce value
 * out of a DOM's head.
 *
 * @param doc The DOM containing the `head` to query against
 * @returns The content of the meta tag representing the nonce value, or `undefined` if no tag
 * exists or the tag has no content.
 */
function queryNonceMetaTagContent(doc) {
    var _a, _b, _c;
    return (_c = (_b = (_a = doc.head) === null || _a === void 0 ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) === null || _b === void 0 ? void 0 : _b.getAttribute('content')) !== null && _c !== void 0 ? _c : undefined;
}
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
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-8c5fbae5.js').then(() => opts);
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
            var _a;
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], {
                    type: 'application/javascript',
                }));
                // Apply CSP nonce to the script tag if it exists
                const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
                if (nonce != null) {
                    script.setAttribute('nonce', nonce);
                }
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
  return bootstrapLazy([["mw-icon-gallery",[[1,"mw-icon-gallery",{"icons":[16],"filteredIcons":[32],"fill":[32],"weight":[32]}]]],["mw-autocomplete",[[1,"mw-autocomplete"]]],["mw-dropdown",[[1,"mw-dropdown",{"value":[1544],"valueLabel":[1544,"value-label"],"name":[1],"label":[513],"placeholder":[1],"helperText":[513,"helper-text"],"hasError":[4,"has-error"],"inline":[4],"required":[4],"disabled":[4],"focused":[32],"isDropdownOpen":[32]},[[0,"mw-menu-item-click","clickEmitterHandler"],[0,"mw-popover-open","stateEmitterHandler"]]]]],["mw-tabs",[[1,"mw-tabs",{"testId":[1,"test-id"],"selected":[1538],"tabs":[32]}]]],["mw-avatar",[[1,"mw-avatar",{"testId":[1,"test-id"],"src":[1],"icon":[1],"alt":[1],"size":[1]}]]],["mw-checkbox",[[1,"mw-checkbox",{"testId":[1,"test-id"],"value":[513],"name":[1],"checked":[1540],"disabled":[4],"label":[1]}]]],["mw-menu",[[1,"mw-menu",{"testId":[1,"test-id"],"placement":[1],"open":[516]}]]],["mw-modal",[[1,"mw-modal",{"backdropDismiss":[4,"backdrop-dismiss"],"size":[1],"trigger":[1],"dismissTrigger":[1,"dismiss-trigger"],"isOpen":[4,"is-open"],"dismissAnimationRunning":[32],"overlayHidden":[32],"modalIsOpen":[32],"present":[64],"dismiss":[64]}]]],["mw-slider",[[1,"mw-slider",{"testId":[1,"test-id"],"name":[1],"label":[1],"helperText":[1,"helper-text"],"startIcon":[1,"start-icon"],"endIcon":[1,"end-icon"],"min":[2],"max":[2],"step":[2],"value":[1538],"inline":[4],"disabled":[4]}]]],["mw-app-bar",[[1,"mw-app-bar",{"ariaRole":[1,"aria-role"],"position":[1]}]]],["mw-app-bar-title",[[1,"mw-app-bar-title"]]],["mw-button",[[1,"mw-button",{"testId":[1,"test-id"],"disabled":[4],"label":[1],"variant":[1],"size":[1],"href":[1],"target":[1]}]]],["mw-card",[[1,"mw-card",{"testId":[1,"test-id"],"outlined":[4],"elevated":[4]}]]],["mw-card-body",[[1,"mw-card-body"]]],["mw-card-footer",[[1,"mw-card-footer",{"justifyCenter":[4,"justify-center"],"justifyStart":[4,"justify-start"],"justifyEnd":[4,"justify-end"],"justifyNormal":[4,"justify-normal"],"justifyLeft":[4,"justify-left"],"justifyRight":[4,"justify-right"],"justifyFlexStart":[4,"justify-flex-start"],"justifyFlexEnd":[4,"justify-flex-end"],"justifySpaceAround":[4,"justify-space-around"],"justifySpaceBetween":[4,"justify-space-between"],"justifySpaceEvenly":[4,"justify-space-evenly"]}]]],["mw-card-header",[[1,"mw-card-header",{"header":[1],"subheader":[1]}]]],["mw-card-image",[[1,"mw-card-image",{"src":[1],"alt":[1]}]]],["mw-card-title",[[1,"mw-card-title",{"title":[1],"subtitle":[1],"metadata":[1]}]]],["mw-divider",[[1,"mw-divider",{"inset":[4]}]]],["mw-link",[[1,"mw-link",{"href":[1],"target":[1],"underline":[4]}]]],["mw-menu-item",[[1,"mw-menu-item",{"title":[1],"subtitle":[1],"disabled":[4],"selected":[516],"value":[1]}]]],["mw-menu-list",[[1,"mw-menu-list",{"testId":[1,"test-id"]}]]],["mw-modal-footer",[[1,"mw-modal-footer"]]],["mw-modal-title",[[1,"mw-modal-title",{"headline":[1],"description":[1]}]]],["mw-radio",[[0,"mw-radio",{"disabled":[4],"checked":[1540],"value":[1],"name":[1],"testId":[1,"test-id"],"label":[1]}]]],["mw-radio-group",[[0,"mw-radio-group",{"value":[1032]}]]],["mw-tab",[[1,"mw-tab",{"selected":[4],"icon":[1],"label":[1],"disabled":[4]}]]],["mw-backdrop",[[1,"mw-backdrop",{"backdropDismiss":[4,"backdrop-dismiss"]},[[2,"click","onMouseDown"]]]]],["mw-switch",[[1,"mw-switch",{"testId":[1,"test-id"],"disabled":[4],"label":[1],"onText":[1,"on-text"],"offText":[1,"off-text"],"checked":[1028]}]]],["mw-chip",[[1,"mw-chip",{"testId":[1,"test-id"],"icon":[1],"disabled":[516],"showClose":[4,"show-close"],"value":[8],"selected":[1540]}]]],["mw-popover",[[1,"mw-popover",{"testId":[1,"test-id"],"open":[1028],"placement":[1],"dismissable":[4],"closeOnClick":[4,"close-on-click"],"noPadding":[4,"no-padding"],"name":[1]}]]],["mw-icon",[[1,"mw-icon",{"icon":[1],"size":[1],"fill":[4],"color":[1],"weight":[2]}]]],["mw-textfield",[[1,"mw-textfield",{"type":[1],"value":[1544],"name":[1],"label":[513],"placeholder":[1],"helperText":[513,"helper-text"],"hasError":[4,"has-error"],"inline":[4],"required":[4],"disabled":[4],"readOnly":[4,"read-only"],"multiple":[4],"multipleMaximum":[2,"multiple-maximum"],"multipleValues":[1040],"focused":[32],"isDropdownOpen":[32]},[[0,"mw-menu-item-click","clickEmitterHandler"],[0,"mw-popover-open","stateEmitterHandler"],[0,"mw-chip-close","closeEmitterHandler"],[1,"keydown","handleEnterPress"]]]]]], options);
});
