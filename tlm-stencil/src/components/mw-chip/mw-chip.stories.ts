import '../../global/global.css';

export default {
  title: 'Components/Chip',
  component: 'mw-chip',
};

const DefaultTemplate = args => `
<mw-chip test-id="${args.testId}">Chip & Chap</mw-icon>`;

export const Default = DefaultTemplate.bind({});
Default.args = {
  testId: 'chip',
  icon: 'placeholder',
};

const Template = args => `
<mw-chip icon="${args.icon}" disabled="${args.disabled}" test-id="${args.testId}" close="${args.close}">With Icon</mw-chip>`;

export const Icon = Template.bind({});
Icon.args = {
  testId: 'chip',
  close: false,
  icon: 'placeholder',
  disabled: false,
};

export const Closable = Template.bind({});
Closable.args = {
  testId: 'chip',
  icon: 'check',
  close: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  testId: 'chip',
  icon: 'check',
  close: true,
  disabled: true,
};
