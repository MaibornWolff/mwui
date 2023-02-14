import { Config } from "@stencil/core";
import { reactOutputTarget as react } from "@stencil/react-output-target";
import { angularOutputTarget as angular } from "@stencil/angular-output-target";
import { vueOutputTarget as vue } from "@stencil/vue-output-target";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "mwui-stencil",
  globalStyle: "src/global/global.css",
  preamble: "Built with Stencil\nCopyright (c) Maibornwolff GmbH.",
  extras: {
    experimentalImportInjection: true,
  },
  testing: {
    coverageDirectory: "./reports",
    coverageReporters: ["html", "text"],
    moduleNameMapper: {
      "@mwui-token-farm/(.*)$": "<rootDir>/mwui-token-farm/dist/js/$1",
    },
  },
  plugins: [sass()],
  outputTargets: [
    react({
      componentCorePackage: "@maibornwolff/mwui-stencil",
      proxiesFile: "../mwui-react/src/components/stencil-generated/index.ts",
      includeDefineCustomElements: true,
    }),
    angular({
      componentCorePackage: "@maibornwolff/mwui-stencil",
      directivesProxyFile: "../mwui-angular/projects/mwui-component-library/src/lib/stencil-generated/components.ts",
      directivesArrayFile: "../mwui-angular/projects/mwui-component-library/src/lib/stencil-generated/index.ts",
    }),
    vue({
      componentCorePackage: "@maibornwolff/mwui-stencil",
      proxiesFile: "../mwui-vue/src/components.ts",
    }),
    {
      type: "dist",
      esmLoaderPath: "../loader",
      copy: [
        {
          src: "**/*.{jpg,png,svg,svg.json}",
          dest: "dist/components/assets",
          warn: true,
        },
      ],
    },
    {
      type: "dist-custom-elements",
      copy: [
        {
          src: "**/*.{jpg,png,svg,svg.json}",
          dest: "dist/components/assets",
          warn: true,
        },
      ],
    },
    {
      type: "docs-readme",
    },
    {
      type: "docs-json",
      file: "docs.json",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
  ],
};
