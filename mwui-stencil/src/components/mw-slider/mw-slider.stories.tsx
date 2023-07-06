import docs from "./mw-slider.docs.mdx";

export default {
  title: "Components/Slider",
  component: "mw-slider",
  parameters: {
    docs: { page: docs },
  },
};

const Template = (args): string => `<mw-slider
  test-id="${args.testId}"
  name="${args.name}"
  label="${args.label}"
  helper-text="${args.helperText}"
  start-icon="${args.startIcon}"
  end-icon="${args.endIcon}"
  min="${args.min}"
  max="${args.max}"
  step="${args.step}"
  inline="${args.inline}"
  disabled="${args.disabled}"
  value="${args.value}"
>
</mw-slider>`;
export const Default = Template.bind({});
Default.args = {
  testId: "slider",
  name: "slider",
  label: "Label",
  helperText: "Helper Text",
  startIcon: "home",
  endIcon: "check",
  min: 0,
  max: 100,
  step: 1,
  inline: false,
  disabled: false,
  value: 50,
};
