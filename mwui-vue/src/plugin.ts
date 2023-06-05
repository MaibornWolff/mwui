import { Plugin } from "vue";
import { applyPolyfills, defineCustomElements } from "@maibornwolff/mwui-stencil/loader";

export const MwuiComponents: Plugin = {
    async install() {
        applyPolyfills().then(() => {
            defineCustomElements(window, {
                ael: (el: any, eventName: string, cb: any, opts: any) => el.addEventListener(eventName.toLowerCase(), cb, opts),
                rel: (el: any, eventName: string, cb: any, opts: any) => el.removeEventListener(eventName.toLowerCase(), cb, opts),
                ce: (eventName: string, opts: any) => new CustomEvent(eventName.toLowerCase(), opts),
            } as any);
        });
    },
};
