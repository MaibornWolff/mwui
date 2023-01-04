import '../../global/global.css';
// @ts-ignore
import docs from './mw-chip.docs.mdx';

export default {
  title: 'Components/Chip',
  component: 'mw-chip',
  parameters: {
    docs: { page: docs },
  },
};

const DefaultTemplate = args => `
<mw-chip test-id="${args.testId}">Chip & Chap</mw-icon>`;

export const Default = DefaultTemplate.bind({});
Default.args = {
  testId: 'chip',
  icon: 'placeholder',
};

const Template = args => `
<mw-chip
  icon="${args.icon}"
  disabled="${args.disabled}"
  test-id="${args.testId}"
  close="${args.close}">
  Peter Pan
</mw-chip>`;

export const Icon = Template.bind({});
Icon.args = {
  testId: 'chip',
  close: false,
  icon: 'check',
  disabled: false,
};

const AvatarTemplate = args => `
<mw-chip
  disabled="${args.disabled}"
  test-id="${args.testId}"
  close="${args.close}">
    <mw-avatar
      src="https://i.pravatar.cc/150"
      alt="Peter Pan"
      size="x-small">
    </mw-avatar>
    Peter Pan
</mw-chip>`;

export const Avatar = AvatarTemplate.bind({});
Avatar.args = {
  testId: 'chip',
  close: false,
  disabled: false,
};

export const Closable = Template.bind({});
Closable.args = {
  testId: 'chip',
  icon: 'check',
  close: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  testId: 'chip',
  icon: 'check',
  close: true,
  disabled: true,
};
