import { setStencilDocJson, extractArgTypesFactory, extractComponentDescription } from '@pxtrn/storybook-addon-docs-stencil';
import docJson from '../docs.json';
import { defineCustomElements } from '../loader';

defineCustomElements();

if (docJson) setStencilDocJson(docJson);

export const parameters = {
  docs: {
    extractArgTypes: extractArgTypesFactory({ dashCase: true }),
    extractComponentDescription,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
