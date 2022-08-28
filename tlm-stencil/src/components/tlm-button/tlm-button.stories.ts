export default {
  title: 'Components/atoms/tlm-button',
};

import '../../global/global.css';


const Template = args => `
<tlm-button test-id="${args.testId}" onClick="${args.onClick}" disabled="${args.disabled}">${args.slot}</tlm-button>`;

export const Example = Template.bind({});
Example.args = {
  testId: 'button-1',
  slot: 'Press here',
  onClick: () => {
    console.log('clicked');
  },
  disabled: false,
};
