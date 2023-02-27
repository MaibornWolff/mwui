import "../../global/global.css";
// import docs from "./mw-autocomplete.docs.mdx";

export default {
  title: "Components/Autocomplete",
  component: "mw-autocomplete",
  // parameters: {
  //   docs: { page: docs },
  // },
};

const Template = args => `
<mw-autocomplete
  value="${args.value}"
  name="${args.name}"
  label="${args.label}"
  placeholder="${args.placeholder}"
  helper-text="${args.helperText}"
  has-error="${args.hasError}"
  inline="${args.inline}"
  required="${args.required}"
  disabled="${args.disabled}"
  multiple="${args.multiple}"
  >
  <div slot="dropdown-menu">
    <mw-menu-item title="List Item 1" subtitle="Subtitle" value="List Item 1"></mw-menu-item>
    <mw-menu-item title="List Item 2" subtitle="Subtitle" value="List Item 2"></mw-menu-item>
    <mw-menu-item title="List Item 3" subtitle="Subtitle" value="List Item 3"></mw-menu-item>
    <mw-menu-item title="List Item 4" subtitle="Subtitle" value="List Item 4"></mw-menu-item>
  </div>

</mw-autocomplete>`;

export const Default = Template.bind({});
Default.args = {
  label: "Autocomplete",
  value: "",
  name: "autocomplete",
  placeholder: "Select option",
  helperText: "",
  hasError: false,
  inline: false,
  required: false,
  disabled: false,
  multiple: true,
};
