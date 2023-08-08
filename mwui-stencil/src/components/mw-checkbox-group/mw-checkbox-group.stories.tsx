import docs from "./mw-checkbox-group.docs.mdx";

export default {
  title: "Components/CheckboxGroup",
  component: "mw-checkbox-group",
  tags: ["autodocs"],
  parameters: {
    docs: { page: docs },
  },
};

const Template = () => `
<mw-checkbox-group parent-label="Parent">
    <mw-checkbox label="Child 1" value="one"></mw-checkbox>
    <mw-checkbox label="Child 2" value="two"></mw-checkbox>
    <mw-checkbox label="Child 3" value="three"></mw-checkbox>
</mw-checkbox-group>`;

export const Unchecked = Template.bind({});

const TemplateIndeterminate = () => `
<mw-checkbox-group parent-label="Parent">
    <mw-checkbox label="Child 1" value="one"></mw-checkbox>
    <mw-checkbox label="Child 2" value="two" checked></mw-checkbox>
    <mw-checkbox label="Child 3" value="three"></mw-checkbox>
</mw-checkbox-group>`;

export const Indeterminate = TemplateIndeterminate.bind({});

const TemplateChecked = () => `
<mw-checkbox-group parent-label="Parent">
    <mw-checkbox label="Child 1" value="one" checked></mw-checkbox>
    <mw-checkbox label="Child 2" value="two" checked></mw-checkbox>
    <mw-checkbox label="Child 3" value="three" checked></mw-checkbox>
</mw-checkbox-group>`;

export const Checked = TemplateChecked.bind({});
