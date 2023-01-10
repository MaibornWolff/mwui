import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import { angularOutputTarget as angular } from '@stencil/angular-output-target';
import { vueOutputTarget as vue } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'tlm-stencil',
  globalStyle: 'src/global/global.css',
  outputTargets: [
    react({
      componentCorePackage: 'tlm-stencil',
      proxiesFile: '../tlm-react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    angular({
      componentCorePackage: 'tlm-stencil',
      directivesProxyFile: '../tlm-angular/projects/tlm-component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../tlm-angular/projects/tlm-component-library/src/lib/stencil-generated/index.ts',
    }),
    vue({
      componentCorePackage: 'tlm-stencil',
      proxiesFile: '../tlm-vue/src/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-json',
      file: 'docs.json',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
