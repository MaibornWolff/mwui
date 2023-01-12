import '../../global/global.css';
// @ts-ignore
import docs from './mw-tab.docs.mdx';

export default {
  title: 'Components/Tab',
  component: 'mw-tab',
  parameters: {
    docs: { page: docs },
  },
};

const Template = args => `
<mw-tab
  selected="${args.selected}"
  icon="${args.selected}"
  label="${args.label}"
  disabled="${args.disabled}">
</mw-tab>`;

export const IconLabelEnabled = Template.bind({});
IconLabelEnabled.args = {
  selected: false,
  icon: 'placeholder',
  label: 'TAB',
  disabled: false,
};

export const IconLabelEnabledSelected = Template.bind({});
IconLabelEnabledSelected.args = {
  selected: true,
  icon: 'placeholder',
  label: 'TAB',
  disabled: false,
};

export const IconLabelDisabled = Template.bind({});
IconLabelDisabled.args = {
  selected: false,
  icon: 'placeholder',
  label: 'TAB',
  disabled: true,
};

export const IconEnabled = Template.bind({});
IconEnabled.args = {
  selected: false,
  icon: 'placeholder',
  label: '',
  disabled: true,
};

export const LabelEnabled = Template.bind({});
LabelEnabled.args = {
  selected: false,
  icon: null,
  label: 'TAB',
  disabled: true,
};
