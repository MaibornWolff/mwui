import '../../global/global.css';
// @ts-ignore
import docs from './mw-button.docs.mdx';

export default {
  title: 'Components/Button',
  component: 'mw-button',
  parameters: {
    docs: { page: docs },
  },
};

const Template = args => `
<mw-button
  test-id="${args.testId}"
  label="${args.label}"
  onClick="${args.onClick}"
  disabled="${args.disabled}"
  variant="${args.variant}">
</mw-button>`;

export const Filled = Template.bind({});
Filled.args = {
  testId: 'some-button-id',
  label: 'BUTTON',
  onClick: () => {},
  disabled: false,
  variant: 'filled',
};

export const Outline = Template.bind({});
Outline.args = {
  testId: 'button',
  label: 'BUTTON',
  disabled: false,
  variant: 'outline',
};

export const Ghost = Template.bind({});
Ghost.args = {
  testId: 'button',
  label: 'BUTTON',
  disabled: false,
  variant: 'ghost',
};

const WithIconTemplate = args => `
<mw-button test-id="${args.testId}" label="${args.label}" onClick="${args.onClick}" disabled="${args.disabled}" variant="${args.variant}">
  <mw-icon slot="icon-start" icon="settings"></mw-icon>
  <mw-icon slot="icon-end" icon="search"></mw-icon>
</mw-button>`;

export const WithIcon = WithIconTemplate.bind({});
WithIcon.args = {
  testId: 'button',
  label: 'BUTTON',
  disabled: false,
  variant: 'filled',
};

const IconTemplate = args => `
<mw-button test-id="${args.testId}" onClick="${args.onClick}" disabled="${args.disabled}" variant="${args.variant}">
  <mw-icon slot="icon-start" icon="settings"></mw-icon>
</mw-button>`;

export const Icon = IconTemplate.bind({});
Icon.args = {
  testId: 'button',
  disabled: false,
  variant: 'filled',
};

const LinkTemplate = args => `
<mw-button test-id="${args.testId}" label="${args.label}" href="${args.href}" target="${args.target}" disabled="${args.disabled}" variant="${args.variant}"></mw-button>`;

export const Link = LinkTemplate.bind({});
Link.args = {
  testId: 'button',
  label: 'LINK BUTTON',
  href: '#',
  target: '_self',
  disabled: false,
  variant: 'filled',
};
