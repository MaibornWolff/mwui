import '../../global/global.css';
// @ts-ignore
import docs from './mw-radio.docs.mdx';

export default {
  title: 'Components/Radio',
  component: 'mw-radio',
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
</mw-radio>`;

export const EnabledUnchecked = Template.bind({});
EnabledUnchecked.args = {
  testId: 'some-radio-id',
  value: 'some-value',
  name: 'some-name',
  checked: false,
  disabled: false,
  label: 'RADIO',
};

export const EnabledChecked = Template.bind({});
EnabledChecked.args = {
  testId: 'some-radio-id',
  value: 'some-value',
  name: 'some-name',
  checked: true,
  disabled: false,
  label: 'RADIO',
};

export const DisabledUnchecked = Template.bind({});
DisabledUnchecked.args = {
  testId: 'some-radio-id',
  value: 'some-value',
  name: 'some-name',
  checked: false,
  disabled: true,
  label: 'RADIO',
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  testId: 'some-radio-id',
  value: 'some-value',
  name: 'some-name',
  checked: true,
  disabled: true,
  label: 'RADIO',
};
