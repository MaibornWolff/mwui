import '../../global/global.css';
// @ts-ignore
import docs from './mw-link.docs.mdx';

export default {
  title: 'Components/Link',
  component: 'mw-link',
  parameters: {
    docs: { page: docs },
  },
};

const Template = args => `
<mw-link href=${args.href}>${args.slot}</mw-link>
`
export const Default = Template.bind({});
Default.args = {
  href: "#",
  slot: "This is a link"
}
