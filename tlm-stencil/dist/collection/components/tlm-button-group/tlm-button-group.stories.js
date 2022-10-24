export default {
  title: 'Components/molecules/tlm-button-group',
};
import '../../global/global.css';
const Template = args => `
<tlm-button-group test-id="${args.testId}">${args.slot}</tlm-button-group>`;
export const Example = Template.bind({});
Example.args = {
  testId: 'button-group-1',
  slot: 'Press here',
};
