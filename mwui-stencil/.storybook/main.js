module.exports = {
  stories: ["../src/pages/welcome.stories.mdx", "../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@pxtrn/storybook-addon-docs-stencil", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/html-webpack5",
    options: {},
  },
  features: {
    buildStoriesJson: true,
  },
};
