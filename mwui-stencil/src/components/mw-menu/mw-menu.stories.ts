import '../../global/global.css';
// @ts-ignore
import docs from './mw-menu.docs.mdx';

export default {
  title: 'Components/Menu',
  component: 'mw-menu',
  parameters: {
    docs: { page: docs },
  },
};

const DefaultTemplate = args => `
<mw-menu testId="${args.testId}" placement="${args.placement}" open="${args.open}" style="width: fit-content">
  <mw-button slot="anchor" label="Menu Trigger"></mw-button>
  <mw-menu-item title="Disabled Item" disabled>
  </mw-menu-item>
  <mw-menu-item title="List Item Loooong" subtitle="Subtitle">
  </mw-menu-item>
  <mw-menu-item title="List Item" subtitle="Subtitle">
  </mw-menu-item>
</mw-menu>
`;
export const Default = DefaultTemplate.bind({});
Default.args = {
  testId: 'menu',
  placement: 'bottom',
  open: true
};
