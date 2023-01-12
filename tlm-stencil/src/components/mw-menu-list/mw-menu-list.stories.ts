import '../../global/global.css';
// @ts-ignore
import docs from './mw-menu-list.docs.mdx';

export default {
  title: 'Components/MenuList',
  component: 'mw-menu-list',
  parameters: {
    docs: { page: docs },
  },
};

const DefaultTemplate = args => `
<mw-menu-list style="width: fit-content" testId="${args.testId}">
  <mw-menu-item title="List Item" subtitle="Subtitle"></mw-menu-item>
  <mw-menu-item title="List Item" subtitle="Subtitle"></mw-menu-item>
  <mw-menu-item title="List Item" subtitle="Subtitle"></mw-menu-item>
  <mw-menu-item title="List Item" subtitle="Subtitle"></mw-menu-item>
</mw-menu-list>`;

export const Default = DefaultTemplate.bind({});
Default.args = {
  testId: 'Menu List',
};
