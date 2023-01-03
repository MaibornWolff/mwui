import '../../global/global.css';

export default {
  title: 'Components/Switch',
  component: 'mw-switch',
};

const DefaultTemplate = args => `
<mw-switch test-id="${args.testId}" checked="${args.checked}" disabled="${args.disabled}"></mw-switch>`;

export const Default = DefaultTemplate.bind({});
Default.args = {
  testId: 'switch',
  disabled: false,
  checked: true,
};

const LabelTemplate = args => `
<mw-switch test-id="${args.testId}" checked="${args.checked}" label="${args.label}" disabled="${args.disabled}"></mw-switch>`;

export const WithLabel = LabelTemplate.bind({});
WithLabel.args = {
  testId: 'switch',
  disabled: false,
  checked: true,
  label: 'Label',
};

const OnOffTemplate = args => `
<mw-switch test-id="${args.testId}" checked="${args.checked}" on-text="${args.onText}" off-text="${args.offText}" disabled="${args.disabled}"></mw-switch>`;

export const WithDynamicLabel = OnOffTemplate.bind({});
WithDynamicLabel.args = {
  testId: 'switch',
  disabled: false,
  checked: true,
  onText: 'Active',
  offText: 'Inactive',
};
