import icon from '../assets/icon-placeholder.svg';
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
<mw-button test-id="${args.testId}" label="${args.label}"  onClick="${args.onClick}" disabled="${args.disabled}" secondary="${args.secondary}"></mw-button>`;

export const Primary = Template.bind({});
Primary.args = {
  testId: 'button',
  label: 'BUTTON',
  onClick: () => {
    console.log('clicked');
  },
  disabled: false,
  secondary: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  testId: 'button',
  label: 'BUTTON',
  disabled: false,
  secondary: true,
};

const IconTemplate = args => `
<mw-button test-id="${args.testId}" label="${args.label}" onClick="${args.onClick}" disabled="${args.disabled}" secondary="${args.secondary}"><span slot="icon-start"><img width="20" src="${icon}" alt="icon-placeholder" /></span></mw-button>`;

export const Icon = IconTemplate.bind({});
Icon.args = {
  testId: 'button',
  label: 'BUTTON',
  disabled: false,
  secondary: false,
};

export const IconOnly = IconTemplate.bind({});
IconOnly.args = {
  testId: 'button',
  disabled: false,
  secondary: false,
};

const LinkTemplate = args => `
<mw-button test-id="${args.testId}" label="${args.label}" href="${args.href}" target="${args.target}" disabled="${args.disabled}" secondary="${args.secondary}"></mw-button>`;

export const Link = LinkTemplate.bind({});
Link.args = {
  testId: 'button',
  label: 'LINK BUTTON',
  href: '#',
  target: '_self',
  disabled: false,
  secondary: false,
};
