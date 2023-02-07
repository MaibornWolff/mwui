import "../../global/global.css";

export default {
  title: "Molecules/Modal",
  component: "mw-modal",
};

const DefaultTemplate = args => `
<div>
    <mw-button id="${args.id}" label="Open Modal"></mw-button>
    <mw-modal trigger="${args.id}">
        <mw-modal-header slot="header">header text</mw-modal-header>
        <div> some content </div>
        <mw-modal-footer></mw-modal-footer>
    </mw-modal>
</div>`;

export const Default = DefaultTemplate.bind({});

Default.args = {
  id: "open-modal",
};
