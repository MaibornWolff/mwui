import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from 'mwui-stencil/loader';

export const MwuiComponents: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};
