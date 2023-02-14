import "../../global/global.css";

export default {
  title: "Components/RadioGroup",
  component: "mw-radio-group",
};

const Template = () => `
<mw-radio-group>
    <mw-radio label="one"></mw-radio>
    <mw-radio label="two"></mw-radio>
    <mw-radio label="three"></mw-radio>
</mw-radio-group>`;

export const Default = Template.bind({});
