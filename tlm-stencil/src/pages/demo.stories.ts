import '../global/global.css';

export default {
  title: 'Demo',
};

const Template = () => `
<div style="display: flex; justify-content: center">
<div style="text-align: center">
  <h1>Hello World</h1>
  <tlm-button>BUTTON</tlm-button>
  </div>
</div>
`;
export const Page = Template.bind({});
Page.args = {};
