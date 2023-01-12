import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import { angularOutputTarget as angular } from '@stencil/angular-output-target';
import { vueOutputTarget as vue } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'mwui-stencil',
  globalStyle: 'src/global/global.css',
  outputTargets: [
    react({
      componentCorePackage: 'mwui-stencil',
      proxiesFile: '../mwui-react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    angular({
      componentCorePackage: 'mwui-stencil',
      directivesProxyFile: '../mwui-angular/projects/mwui-component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../mwui-angular/projects/mwui-component-library/src/lib/stencil-generated/index.ts',
    }),
    vue({
      componentCorePackage: 'mwui-stencil',
      proxiesFile: '../mwui-vue/src/components.ts',
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
