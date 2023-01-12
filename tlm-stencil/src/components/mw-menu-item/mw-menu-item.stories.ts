import '../../global/global.css';
// @ts-ignore
import docs from '../mw-menu/mw-menu.docs.mdx';

export default {
  title: 'Components/MenuItem',
  component: 'mw-menu-item',
  parameters: {
    docs: { page: docs },
  },
};

const DefaultTemplate = args => `
<mw-menu-item title="${args.title}" subtitle="${args.subtitle}" disabled="${args.disabled}" selected="${args.selected}"></mw-menu-item>`;

export const Default = DefaultTemplate.bind({});
Default.args = {
  title: 'Title',
  subtitle: 'Subtitle',
  disabled: false,
  selected: false,
};
