export default {
  title: "Components/MenuItem",
  component: "mw-menu-item",
};

const DefaultTemplate = args => `
<mw-menu-item title="${args.title}" subtitle="${args.subtitle}" disabled="${args.disabled}" selected="${args.selected}"></mw-menu-item>`;

export const Default = DefaultTemplate.bind({});
Default.args = {
  title: "Title",
  subtitle: "Subtitle",
  disabled: false,
  selected: false,
};
