import "../../global/global.css";

export default {
  title: "Components/RadioGroup",
  component: "mw-radio-group",
};

const Template = () => `
<mw-radio-group value="two">
    <mw-radio label="one" value="one"></mw-radio>
    <mw-radio label="two" value="two"></mw-radio>
    <mw-radio label="three" value="three"></mw-radio>
</mw-radio-group>`;

export const Default = Template.bind({});
