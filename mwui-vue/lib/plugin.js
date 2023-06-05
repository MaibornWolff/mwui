import { applyPolyfills, defineCustomElements } from "@maibornwolff/mwui-stencil/loader";
export const MwuiComponents = {
    async install() {
        applyPolyfills().then(() => {
            defineCustomElements(window, {
                ael: (el, eventName, cb, opts) => el.addEventListener(eventName.toLowerCase(), cb, opts),
                rel: (el, eventName, cb, opts) => el.removeEventListener(eventName.toLowerCase(), cb, opts),
                ce: (eventName, opts) => new CustomEvent(eventName.toLowerCase(), opts),
            });
        });
    },
};
//# sourceMappingURL=plugin.js.map
