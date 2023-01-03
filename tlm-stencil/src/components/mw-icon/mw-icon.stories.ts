import '../../global/global.css';

export default {
  title: 'Components/Icon',
  component: 'mw-icon',
};

const DefaultTemplate = args => `
<mw-icon icon="${args.icon}" size="${args.size}"></mw-icon>`;

export const Default = DefaultTemplate.bind({});
Default.args = {
  testId: 'icon',
  size: 'medium',
  icon: 'placeholder',
};

const ColorTemplate = args => `
<mw-icon icon="${args.icon}" size="${args.size}" color="${args.color}"></mw-icon>`;

export const Color = ColorTemplate.bind({});
Color.args = {
  testId: 'icon',
  size: 'medium',
  icon: 'placeholder',
  color: '#ff00ff',
};
