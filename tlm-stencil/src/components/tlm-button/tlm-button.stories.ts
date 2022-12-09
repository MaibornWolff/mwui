export default {
  title: 'Components/atoms/tlm-button',
};

import '../../global/global.css';

const Template = args => `
<tlm-button test-id="${args.testId}" onClick="${args.onClick}" disabled="${args.disabled}" secondary="${args.secondary}">${args.label}</tlm-button>`;

export const Button = Template.bind({});
Button.args = {
  testId: 'button',
  label: 'Button',
  onClick: () => {
    console.log('clicked');
  },
  disabled: false,
  secondary: false,
};
