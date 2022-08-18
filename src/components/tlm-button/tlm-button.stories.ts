export default {
  title: 'Components/atoms/tlm-button',
};

const Template = args => `<tlm-button button-id="${args.buttonId}">${args.slot}</tlm-button>`;

export const Example = Template.bind({});
Example.args = {
  buttonId: 'button-1',
  slot: 'Press here',
};
