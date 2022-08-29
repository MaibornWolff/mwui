import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from 'tlm-stencil/loader';

export const TlmComponents: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};
