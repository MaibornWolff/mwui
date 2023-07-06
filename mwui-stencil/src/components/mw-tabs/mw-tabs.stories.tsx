import docs from "./mw-tabs.docs.mdx";

export default {
  title: "Components/Tabs",
  component: "mw-tabs",
  parameters: {
    docs: { page: docs },
  },
};

const Template = args => `
<mw-tabs test-id="${args.testId}" selected="${args.selected}">
   <mw-tab icon="home" label="TAB"></mw-tab>
   <mw-tab icon="search" label="TAB"></mw-tab>
   <mw-tab icon="favorite" label="TAB"></mw-tab>
   <mw-tab icon="comment" label="TAB"></mw-tab>
   <mw-tab icon="settings" label="TAB"></mw-tab>
</mw-tabs>`;

export const Default = Template.bind({});
Default.args = {
  selected: 0,
  testId: "tabs",
};
