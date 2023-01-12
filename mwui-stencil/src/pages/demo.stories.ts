import '../global/global.css';
import '../../../mwui-token-farm/dist/css/MW_core.css';

export default {
  title: 'Pages/Demo',
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
