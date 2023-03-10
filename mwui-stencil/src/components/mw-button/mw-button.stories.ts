import "../../global/global.css";
import docs from "./mw-button.docs.mdx";

export default {
  title: "Components/Button",
  component: "mw-button",
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
  size="${args.size}"
  variant="${args.variant}">
</mw-button>`;

export const Filled = Template.bind({});
Filled.args = {
  testId: "some-button-id",
  label: "BUTTON",
  onClick: () => {},
  disabled: false,
  variant: "filled",
  size: "medium",
};

export const Outline = Template.bind({});
Outline.args = {
  testId: "button",
  label: "BUTTON",
  disabled: false,
  variant: "outline",
  size: "medium",
};

export const Ghost = Template.bind({});
Ghost.args = {
  testId: "button",
  label: "BUTTON",
  disabled: false,
  variant: "ghost",
  size: "medium",
};

const WithIconTemplate = args => `
<mw-button test-id="${args.testId}" label="${args.label}" onClick="${args.onClick}" size="${args.size}" disabled="${args.disabled}" variant="${args.variant}">
  <mw-icon slot="icon-start" icon="settings"></mw-icon>
  <mw-icon slot="icon-end" icon="search"></mw-icon>
</mw-button>`;

export const WithIcon = WithIconTemplate.bind({});
WithIcon.args = {
  testId: "button",
  label: "BUTTON",
  disabled: false,
  variant: "filled",
  size: "medium",
};

const IconTemplate = args => `
<mw-button test-id="${args.testId}" onClick="${args.onClick}" size="${args.size}" disabled="${args.disabled}" variant="${args.variant}" href="${args.href}">
  <mw-icon slot="icon-start" icon="settings"></mw-icon>
</mw-button>`;

export const Icon = IconTemplate.bind({});
Icon.args = {
  testId: "button",
  disabled: false,
  variant: "filled",
  label: "LINK BUTTON",
  size: "medium",
  href: "#example.com",
};

const LinkTemplate = args => `
<mw-button test-id="${args.testId}" label="${args.label}" size="${args.size}" href="${args.href}" target="${args.target}" disabled="${args.disabled}" variant="${args.variant}"></mw-button>`;

export const Link = LinkTemplate.bind({});
Link.args = {
  testId: "button",
  label: "LINK BUTTON",
  href: "#",
  target: "_self",
  disabled: false,
  variant: "filled",
  size: "medium",
};
