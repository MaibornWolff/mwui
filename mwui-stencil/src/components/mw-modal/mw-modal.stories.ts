import "../../global/global.css";

export default {
  title: "Molecules/Modal",
  component: "mw-modal",
};

const DefaultTemplate = args => `
<div>
    <mw-button id="${args.id}" label="Open Modal"></mw-button>
    <mw-modal trigger="${args.id}">
        <mw-icon icon="close" size="medium" slot="end"></mw-icon>
        <div> ${args.text} </div>
        <mw-modal-footer></mw-modal-footer>
    </mw-modal>
</div>`;

export const Default = DefaultTemplate.bind({});

Default.args = {
  id: "open-modal",
  text: `A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.`,
};
