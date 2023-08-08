import docs from "./mw-chip-input.docs.mdx";

export default {
  title: "Components/ChipInput",
  component: "mw-chip-input",
  tags: ["autodocs"],
  parameters: {
    docs: { page: docs },
  },
};

const Template = args => `
  <mw-chip-input
    value="${args.value}"
    name="${args.name}"
    label="${args.label}"
    placeholder="${args.placeholder}"
    helper-text="${args.helperText}"
    has-error="${args.hasError}"
    layout="${args.layout}"
    required="${args.required}"
    disabled="${args.disabled}"
    ></mw-chip-input>
`;

export const Default = Template.bind({});
Default.args = {
  label: "ChipInput",
  value: "",
  name: "chip-input",
  placeholder: "Enter a value",
  helperText: "",
  hasError: false,
  layout: "vertical",
  required: false,
  disabled: false,
};

const DisabledTemplate = args => `
  <mw-chip-input
    selected-chips="${args.selectedChips}"
    name="${args.name}"
    label="${args.label}"
    placeholder="${args.placeholder}"
    helper-text="${args.helperText}"
    has-error="${args.hasError}"
    layout="${args.layout}"
    required="${args.required}"
    disabled="${args.disabled}"
    ></mw-chip-input>
`;

const HorizontalTemplate = args => `
  <mw-chip-input
    selected-chips="${args.selectedChips}"
    name="${args.name}"
    label="${args.label}"
    placeholder="${args.placeholder}"
    helper-text="${args.helperText}"
    has-error="${args.hasError}"
    layout="${args.layout}"
    required="${args.required}"
    disabled="${args.disabled}"
    ></mw-chip-input>
`;

export const Horizontal = HorizontalTemplate.bind({});
Horizontal.args = {
  label: "ChipInput",
  value: "",
  name: "chip-input",
  placeholder: "Enter a value",
  helperText: "",
  hasError: false,
  layout: "horizontal",
  required: false,
  disabled: false,
};

export const Disabled = DisabledTemplate.bind({});
Disabled.args = {
  label: "ChipInput",
  value: "",
  name: "chip-input",
  placeholder: "Enter a value",
  helperText: "",
  hasError: false,
  layout: "vertical",
  required: false,
  disabled: true,
};

export const Error = DisabledTemplate.bind({});
Error.args = {
  label: "ChipInput",
  value: "",
  name: "chip-input",
  placeholder: "Enter a value",
  helperText: "",
  hasError: true,
  layout: "vertical",
  required: false,
  disabled: false,
};
