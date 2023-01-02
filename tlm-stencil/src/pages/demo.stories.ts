import '../global/global.css';
import '../../../tlm-token-farm/dist/css/MW_core.css';

export default {
  title: 'Documentation/Demo',
};

const Template = () => `
<div style="display: flex; justify-content: center">
  <div style="text-align: center">
    <h1>Hello World</h1>
    <mw-button label="BUTTON" />
  </div>
</div>
`;

export const Page = Template.bind({});
Page.args = {};
