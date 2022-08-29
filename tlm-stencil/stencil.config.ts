import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import { angularOutputTarget as angular } from "@stencil/angular-output-target";

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
      directivesProxyFile: '../tlm-angular/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../tlm-angular/projects/component-library/src/lib/stencil-generated/index.ts',
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
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
