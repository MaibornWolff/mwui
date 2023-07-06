import docs from "./mw-link.docs.mdx";

export default {
  title: "Components/Link",
  component: "mw-link",
  parameters: {
    docs: { page: docs },
  },
};

const Template = args => `
<mw-link href=${args.href} target="${args.target}" underline="${args.underline}">${args.slot}</mw-link>
`;
export const Default = Template.bind({});
Default.args = {
  href: "https://maibornwolff.de",
  slot: "This is a link",
};

export const NoUnderline = Template.bind({});
NoUnderline.args = {
  href: "https://maibornwolff.de",
  underline: false,
  slot: "This is a link",
};
