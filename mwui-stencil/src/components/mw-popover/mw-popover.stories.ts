import docs from "./mw-popover.docs.mdx";

export default {
  title: "Components/Popover",
  component: "mw-popover",
  parameters: {
    docs: { page: docs },
  },
};

const DefaultTemplate = args => `
<div style="height: 100px">
  <mw-popover style="width: fit-content" placement="${args.placement}" name="${args.name}" testId="${args.testId}" open="${args.open}" dismissable="${args.dismissable}">
    <mw-button slot="anchor" label="Anchor Element"></mw-button>
    <div slot="content">Popover content.</div>
  </mw-popover>
</div>`;

export const Default = DefaultTemplate.bind({});
Default.args = {
  testId: "popover",
  name: "tooltip",
  dismissable: false,
  placement: "bottom",
  open: false,
};

const DismissableTemplate = args => `
<div style="height: 100px">
  <mw-popover style="width: fit-content" placement="${args.placement}" name="${args.name}" testId="${args.testId}" open="${args.open}" dismissable="${args.dismissable}">
    <mw-button slot="anchor" label="Anchor Element"></mw-button>
    <div slot="content">Popover content.</div>
  </mw-popover>
</div>`;

export const Dismissable = DismissableTemplate.bind({});
Dismissable.args = {
  testId: "popover",
  name: "tooltip",
  dismissable: true,
  placement: "bottom",
  open: false,
};
