import docs from "./mw-radio.docs.mdx";

export default {
  title: "Components/Radio",
  component: "mw-radio",
  tags: ["autodocs"],
  parameters: {
    docs: { page: docs },
  },
};

const Template = args => `
<mw-radio
  test-id="${args.testId}"
  value="${args.value}"
  name="${args.name}"
  checked="${args.checked}"
  disabled="${args.disabled}"
  label="${args.label}"
  label-position="${args.labelPosition}">
</mw-radio>`;

export const EnabledUnchecked = Template.bind({});
EnabledUnchecked.args = {
  testId: "some-radio-id",
  value: "some-value",
  name: "some-name",
  checked: false,
  disabled: false,
  label: "RADIO",
  labelPosition: "right",
};

export const EnabledChecked = Template.bind({});
EnabledChecked.args = {
  testId: "some-radio-id",
  value: "some-value",
  name: "some-name",
  checked: true,
  disabled: false,
  label: "RADIO",
  labelPosition: "right",
};

export const DisabledUnchecked = Template.bind({});
DisabledUnchecked.args = {
  testId: "some-radio-id",
  value: "some-value",
  name: "some-name",
  checked: false,
  disabled: true,
  label: "RADIO",
  labelPosition: "right",
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  testId: "some-radio-id",
  value: "some-value",
  name: "some-name",
  checked: true,
  disabled: true,
  label: "RADIO",
  labelPosition: "right",
};

export const WithLeftLabel = Template.bind({});
WithLeftLabel.args = {
  testId: "some-radio-id",
  value: "some-value",
  name: "some-name",
  checked: true,
  disabled: false,
  label: "RADIO",
  labelPosition: "left",
};
