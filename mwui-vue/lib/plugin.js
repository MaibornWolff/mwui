import { applyPolyfills, defineCustomElements } from '@maibornwolff/mwui-stencil/loader';
export const MwuiComponents = {
    async install() {
        applyPolyfills().then(() => {
            defineCustomElements();
        });
    },
};
//# sourceMappingURL=plugin.js.map