export default {
  title: 'Components/button',
};

import '../../global/global.css';

const Template = args => `
<mw-button test-id="${args.testId}" onClick="${args.onClick}" disabled="${args.disabled}" secondary="${args.secondary}">${args.label}</mw-button>`;

export const Default = Template.bind({});
Default.args = {
  testId: 'button',
  label: 'Button',
  onClick: () => {
    console.log('clicked');
  },
  disabled: false,
  secondary: false,
};
