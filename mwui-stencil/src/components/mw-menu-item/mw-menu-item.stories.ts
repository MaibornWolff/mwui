export default {
  title: "Components/MenuItem",
  component: "mw-menu-item",
};

const DefaultTemplate = args => `
<mw-menu-item text="${args.text}" subtitle="${args.subtitle}" disabled="${args.disabled}" selected="${args.selected}"></mw-menu-item>`;

export const Default = DefaultTemplate.bind({});
Default.args = {
  text: "Title",
  subtitle: "Subtitle",
  disabled: false,
  selected: false,
};
