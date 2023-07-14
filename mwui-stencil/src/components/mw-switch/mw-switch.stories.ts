import docs from "./mw-switch.docs.mdx";

export default {
  title: "Components/Switch",
  component: "mw-switch",
  tags: ["autodocs"],
  parameters: {
    docs: { page: docs },
  },
};

const DefaultTemplate = args => `
<mw-switch test-id="${args.testId}" checked="${args.checked}" disabled="${args.disabled}"></mw-switch>`;

export const Default = DefaultTemplate.bind({});
Default.args = {
  testId: "switch",
  disabled: false,
  checked: true,
};

const LabelTemplate = args => `
<mw-switch test-id="${args.testId}" checked="${args.checked}" label="${args.label}" disabled="${args.disabled}" label-postion="${args.labelPosition}"></mw-switch>`;

export const WithLabel = LabelTemplate.bind({});
WithLabel.args = {
  testId: "switch",
  disabled: false,
  checked: true,
  label: "Label",
  labelPosition: "right",
};

export const WithLeftLabel = LabelTemplate.bind({});
WithLeftLabel.args = {
  testId: "switch",
  disabled: false,
  checked: true,
  label: "Label",
  labelPosition: "left",
};

const OnOffTemplate = args => `
<mw-switch test-id="${args.testId}" checked="${args.checked}" on="${args.on}" off="${args.off}" disabled="${args.disabled}"></mw-switch>`;

export const WithDynamicLabel = OnOffTemplate.bind({});
WithDynamicLabel.args = {
  testId: "switch",
  disabled: false,
  checked: false,
  on: "Active",
  off: "Inactive",
  labelPosition: "right",
};
