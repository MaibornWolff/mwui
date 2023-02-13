import "../../global/global.css";
import docs from "./mw-divider.docs.mdx";

export default {
  title: "Components/Divider",
  component: "mw-divider",
  parameters: {
    docs: { page: docs },
  },
};

const Template = args => `
<mw-divider
  inset="${args.inset}"
></mw-divider>`;

export const Full = Template.bind({});
Full.args = {
  inset: false,
};

export const Inset = Template.bind({});
Inset.args = {
  inset: true,
};
