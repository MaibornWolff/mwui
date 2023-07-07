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
    inline="${args.inline}"
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
  inline: false,
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
    inline="${args.inline}"
    required="${args.required}"
    disabled="${args.disabled}"
    ></mw-chip-input>
`;

const InlineTemplate = args => `
  <mw-chip-input
    selected-chips="${args.selectedChips}"
    name="${args.name}"
    label="${args.label}"
    placeholder="${args.placeholder}"
    helper-text="${args.helperText}"
    has-error="${args.hasError}"
    inline="${args.inline}"
    required="${args.required}"
    disabled="${args.disabled}"
    ></mw-chip-input>
`;

export const Inline = InlineTemplate.bind({});
Inline.args = {
  label: "ChipInput",
  value: "",
  name: "chip-input",
  placeholder: "Enter a value",
  helperText: "",
  hasError: false,
  inline: true,
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
  inline: false,
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
  inline: false,
  required: false,
  disabled: false,
};
