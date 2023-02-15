import "../../global/global.css";
import docs from "./mw-radio-group.docs.mdx";

export default {
  title: "Components/RadioGroup",
  component: "mw-radio-group",
  parameters: {
    docs: { page: docs },
  },
};

const Template = () => `
<mw-radio-group>
    <mw-radio label="one" value="one"></mw-radio>
    <mw-radio label="two" value="two"></mw-radio>
    <mw-radio label="three" value="three"></mw-radio>
</mw-radio-group>`;

export const RadioGroup = Template.bind({});

const PreSelected = () => `
<mw-radio-group value="three">
    <mw-radio label="one" value="one"></mw-radio>
    <mw-radio label="two" value="two"></mw-radio>
    <mw-radio label="three" value="three"></mw-radio>
</mw-radio-group>`;

export const RadioGroupPreselected = PreSelected.bind({});
