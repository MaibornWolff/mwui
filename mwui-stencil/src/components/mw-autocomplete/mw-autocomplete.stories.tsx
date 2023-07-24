import docs from "./mw-autocomplete.docs.mdx";

export default {
  title: "Components/Autocomplete",
  component: "mw-autocomplete",
  tags: ["autodocs"],
  parameters: {
    docs: { page: docs },
  },
};

const Template = args => `
<mw-autocomplete
  value="${args.value}"
  name="${args.name}"
  label="${args.label}"
  placeholder="${args.placeholder}"
  helper-text="${args.helperText}"
  no-suggestions-text="No suggestions found."
  has-error="${args.hasError}"
  inline="${args.inline}"
  required="${args.required}"
  disabled="${args.disabled}"
  read-only="${args.readOnly}"
  multiple="${args.multiple}"
  maximum="${args.maximum}"
  maximumText="${args.maximumText}"
  option-counter="${args.optionCounter}"
  selected="${args.selected}"
  >
  <div slot="dropdown-menu">
    <mw-menu-item text="List Item 1"></mw-menu-item>
    <mw-menu-item text="List Item 2"></mw-menu-item>
    <mw-menu-item text="List Item 3"></mw-menu-item>
    <mw-menu-item text="List Item 4"></mw-menu-item>
  </div>

</mw-autocomplete>`;

const IconTemplate = args => `
<mw-autocomplete
  value="${args.value}"
  name="${args.name}"
  label="${args.label}"
  placeholder="${args.placeholder}"
  helper-text="${args.helperText}"
  no-suggestions-text="No suggestions found."
  has-error="${args.hasError}"
  layout="${args.layout}"
  required="${args.required}"
  disabled="${args.disabled}"
  read-only="${args.readOnly}"
  multiple="${args.multiple}"
  maximum="${args.maximum}"
  maximumText="${args.maximumText}"
  option-counter="${args.optionCounter}"
  selected="${args.selected}"
  >
  <mw-icon slot="icon-start" icon="search"></mw-icon>
  <div slot="dropdown-menu">
    <mw-menu-item text="List Item 1"></mw-menu-item>
    <mw-menu-item text="List Item 2"></mw-menu-item>
    <mw-menu-item text="List Item 3"></mw-menu-item>
    <mw-menu-item text="List Item 4"></mw-menu-item>
  </div>

</mw-autocomplete>`;

export const Default = Template.bind({});
Default.args = {
  label: "Single choice",
  value: "",
  name: "autocomplete",
  placeholder: "Select option...",
  helperText: "helper text",
  multiple: false,
  hasError: false,
  layout: "vertical",
  required: false,
  disabled: false,
  maximum: 4,
  optionCounter: false,
};

export const Multiple = Template.bind({});
Multiple.args = {
  label: "Multiple choice",
  value: "",
  name: "autocomplete",
  placeholder: "Select options...",
  helperText: "helper text:",
  hasError: false,
  layout: "vertical",
  required: false,
  disabled: false,
  multiple: true,
  maximum: 4,
  optionCounter: true,
};

export const Horizontal = IconTemplate.bind({});
Horizontal.args = {
  label: "Multiple choice",
  value: "",
  name: "autocomplete",
  placeholder: "Select options...",
  helperText: "",
  hasError: false,
  layout: "horizontal",
  required: true,
  disabled: false,
  multiple: true,
  maximum: 12,
  optionCounter: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Multiple choice",
  value: "",
  name: "autocomplete",
  placeholder: "Select options...",
  helperText: "helper text:",
  hasError: false,
  layout: "vertical",
  required: false,
  disabled: true,
  multiple: true,
  maximum: 4,
  optionCounter: true,
};
