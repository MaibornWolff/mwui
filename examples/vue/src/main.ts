import { createApp } from "vue";
import { MwuiComponents } from "@maibornwolff/mwui-vue";
import App from "./App.vue";

import "@maibornwolff/mwui-stencil/dist/mwui-stencil/mwui-stencil.css";

defineCustomElements(window, {
    ael: (el: any, eventName: string, cb: any, opts: any) => el.addEventListener(eventName.toLowerCase(), cb, opts),
    rel: (el: any, eventName: string, cb: any, opts: any) => el.removeEventListener(eventName.toLowerCase(), cb, opts),
    ce: (eventName: string, opts: any) => new CustomEvent(eventName.toLowerCase(), opts),
} as any);

createApp(App).use(MwuiComponents).mount("#app");
