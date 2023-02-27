import "../../global/global.css";

export default {
  title: "Components/ChipInput",
  component: "mw-chip-input",
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
    multiple="${args.multiple}"
    ></mw-chip-input>
`;

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
