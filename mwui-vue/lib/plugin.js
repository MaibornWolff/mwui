import { applyPolyfills, defineCustomElements } from 'mwui-stencil/loader';
export const MwuiComponents = {
    async install() {
        applyPolyfills().then(() => {
            defineCustomElements();
        });
    },
};
//# sourceMappingURL=plugin.js.map