import docs from "./mw-chip.docs.mdx";

export default {
  title: "Components/Chip",
  component: "mw-chip",
  parameters: {
    docs: { page: docs },
  },
};

const DefaultTemplate = args => `
<mw-chip test-id="${args.testId}">Chip & Chap</mw-chip>`;

export const Default = DefaultTemplate.bind({});
Default.args = {
  testId: "chip",
  icon: "favorite",
};

const SelectedTemplate = args => `
<mw-chip test-id="${args.testId}" selected="${args.selected}">Chip & Chap</mw-chip>`;

export const Selected = SelectedTemplate.bind({});
Selected.args = {
  testId: "chip",
  icon: "favorite",
  selected: true,
};

const Template = args => `
<mw-chip
  icon="${args.icon}"
  disabled="${args.disabled}"
  test-id="${args.testId}"
  show-close="${args.showClose}">
  Peter Pan
</mw-chip>`;

export const Icon = Template.bind({});
Icon.args = {
  testId: "chip",
  showClose: false,
  icon: "check",
  disabled: false,
};

const AvatarTemplate = args => `
<mw-chip
  disabled="${args.disabled}"
  test-id="${args.testId}"
  show-close="${args.showClose}">
    <mw-avatar
      src="https://i.pravatar.cc/150?img=23"
      alt="Peter Pan"
      size="x-small">
    </mw-avatar>
    Peter Pan
</mw-chip>`;

export const Avatar = AvatarTemplate.bind({});
Avatar.args = {
  testId: "chip",
  showClose: false,
  disabled: false,
};

const CloseTemplate = args => `
<mw-chip
  icon="${args.icon}"
  disabled="${args.disabled}"
  test-id="${args.testId}"
  show-close="${args.showClose}">
  Peter Pan
</mw-chip>`;

export const Closable = CloseTemplate.bind({});
Closable.args = {
  testId: "chip-closable",
  icon: "check",
  showClose: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  testId: "chip",
  icon: "check",
  showClose: true,
  disabled: true,
};
