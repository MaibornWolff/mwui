export default {
  title: 'Components/molecules/tlm-button-group',
};

import '../../global/global.css';


const Template = args => `
<tlm-button-group test-id="${args.testId}">
  <tlm-button>one</tlm-button>
  <tlm-button>two</tlm-button>
  <tlm-button>three</tlm-button>
</tlm-button-group>`;

export const Example = Template.bind({});
Example.args = {
  testId: 'button-group-1',

};
