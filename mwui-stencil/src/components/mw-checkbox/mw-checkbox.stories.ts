import docs from "./mw-checkbox.docs.mdx";

export default {
  title: "Components/Checkbox",
  component: "mw-checkbox",
  tags: ["autodocs"],
  parameters: {
    docs: { page: docs },
  },
};

const Template = args => `
<mw-checkbox
  test-id="${args.testId}"
  value="${args.value}"
  name="${args.name}"
  checked="${args.checked}"
  disabled="${args.disabled}"
  label="${args.label}"
  label-position="${args.labelPosition}">
</mw-checkbox>`;

export const EnabledUnchecked = Template.bind({});
EnabledUnchecked.args = {
  testId: "some-checkbox-id",
  value: "some-value",
  name: "some-name",
  checked: false,
  disabled: false,
  label: "CHECKBOX",
  labelPosition: "right",
};

export const EnabledChecked = Template.bind({});
EnabledChecked.args = {
  testId: "some-checkbox-id",
  value: "some-value",
  name: "some-name",
  checked: true,
  disabled: false,
  label: "CHECKBOX",
  labelPosition: "right",
};

export const DisabledUnchecked = Template.bind({});
DisabledUnchecked.args = {
  testId: "some-checkbox-id",
  value: "some-value",
  name: "some-name",
  checked: false,
  disabled: true,
  label: "CHECKBOX",
  labelPosition: "right",
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  testId: "some-checkbox-id",
  value: "some-value",
  name: "some-name",
  checked: true,
  disabled: true,
  label: "CHECKBOX",
  labelPosition: "right",
};

export const WithLeftLabel = Template.bind({});
WithLeftLabel.args = {
  testId: "some-checkbox-id",
  value: "some-value",
  name: "some-name",
  checked: true,
  disabled: false,
  label: "CHECKBOX",
  labelPosition: "left",
};
