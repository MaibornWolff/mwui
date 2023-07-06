import docs from "./mw-dropdown.docs.mdx";

export default {
  title: "Components/Dropdown",
  component: "mw-dropdown",
  parameters: {
    docs: { page: docs },
  },
};

const Template = args => `
<mw-dropdown
  value="${args.value}"
  name="${args.name}"
  label="${args.label}"
  placeholder="${args.placeholder}"
  helper-text="${args.helperText}"
  has-error="${args.hasError}"
  inline="${args.inline}"
  required="${args.required}"
  disabled="${args.disabled}"
  >
  <div slot="dropdown-menu">
    <mw-menu-item title="List Item 1" subtitle="Subtitle"></mw-menu-item>
    <mw-menu-item title="List Item 2" subtitle="Subtitle"></mw-menu-item>
    <mw-menu-item title="List Item 3" subtitle="Subtitle"></mw-menu-item>
    <mw-menu-item title="List Item 4" subtitle="Subtitle"></mw-menu-item>
  </div>

</mw-dropdown>`;

const IconTemplate = args => `
<mw-dropdown
  value="${args.value}"
  name="${args.name}"
  label="${args.label}"
  placeholder="${args.placeholder}"
  helper-text="${args.helperText}"
  has-error="${args.hasError}"
  inline="${args.inline}"
  required="${args.required}"
  disabled="${args.disabled}"
  >
  <mw-icon slot="icon-start" icon="language"></mw-icon>
  <div slot="dropdown-menu">
    <mw-menu-item title="List Item 1" subtitle="Subtitle"></mw-menu-item>
    <mw-menu-item title="List Item 2" subtitle="Subtitle"></mw-menu-item>
    <mw-menu-item title="List Item 3" subtitle="Subtitle"></mw-menu-item>
    <mw-menu-item title="List Item 4" subtitle="Subtitle"></mw-menu-item>
  </div>

</mw-dropdown>`;

export const Default = Template.bind({});
Default.args = {
  label: "Dropdown",
  value: "",
  name: "dropdown",
  placeholder: "Select option",
  helperText: "",
  hasError: false,
  inline: false,
  required: false,
  disabled: false,
};

export const Inline = IconTemplate.bind({});
Inline.args = {
  label: "Dropdown",
  value: "",
  name: "dropdown",
  placeholder: "Select option",
  helperText: "",
  hasError: false,
  inline: true,
  required: false,
  disabled: false,
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Dropdown",
  value: "",
  name: "dropdown",
  placeholder: "Select option",
  helperText: "Error",
  hasError: true,
  inline: false,
  required: true,
  disabled: false,
};
