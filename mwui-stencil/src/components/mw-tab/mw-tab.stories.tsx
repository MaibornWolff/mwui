import "../../global/global.css";
import docs from "./mw-tab.docs.mdx";

export default {
  title: "Components/Tab",
  component: "mw-tab",
  parameters: {
    docs: { page: docs },
  },
};

const TemplateWithIcon = args => `
<mw-tab
  selected="${args.selected}"
  icon="${args.icon}"
  label="${args.label}"
  disabled="${args.disabled}">
</mw-tab>`;

const Template = args => `
<mw-tab
  selected="${args.selected}"
  label="${args.label}"
  disabled="${args.disabled}">
</mw-tab>`;

export const IconLabelEnabled = TemplateWithIcon.bind({});
IconLabelEnabled.args = {
  selected: false,
  icon: "home",
  label: "TAB",
  disabled: false,
};

export const IconLabelEnabledSelected = TemplateWithIcon.bind({});
IconLabelEnabledSelected.args = {
  selected: true,
  icon: "home",
  label: "TAB",
  disabled: false,
};

export const IconLabelDisabled = TemplateWithIcon.bind({});
IconLabelDisabled.args = {
  selected: false,
  icon: "home",
  label: "TAB",
  disabled: true,
};

export const IconEnabled = TemplateWithIcon.bind({});
IconEnabled.args = {
  selected: false,
  icon: "home",
  label: "",
  disabled: false,
};

export const LabelEnabled = Template.bind({});
LabelEnabled.args = {
  selected: false,
  label: "TAB",
  disabled: false,
};
