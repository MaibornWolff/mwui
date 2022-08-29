import { applyPolyfills, defineCustomElements } from 'tlm-stencil/loader';
export const TlmComponents = {
    async install() {
        applyPolyfills().then(() => {
            defineCustomElements();
        });
    },
};
//# sourceMappingURL=plugin.js.map