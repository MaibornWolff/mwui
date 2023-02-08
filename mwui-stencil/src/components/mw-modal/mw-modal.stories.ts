import "../../global/global.css";

export default {
  title: "Molecules/Modal",
  component: "mw-modal",
};

const DefaultTemplate = args => `
<div>
    <mw-button id="${args.id}" label="Open Modal"></mw-button>
    <mw-modal trigger="${args.id}" dismiss-trigger="close-icon">
        <mw-modal-title headline="${args.headline}" description="${args.description}">
            <mw-icon icon=${args.icon} id="close-icon" size="medium" slot="icon"></mw-icon>
        </mw-modal-title>

        <div style="display: flex; justify-content: center; align-items: center; background: #C8EBFD; flex-direction: column;">
            <h3 style="font-weight: bold; text-align: center;">Slot</h3>
            <p style="text-align: center;">This is a placeholder component</p>
            <p style="text-align: center;">Replace with your component</p>
        </div>
        <mw-modal-footer>
            <span slot="end">
              <mw-button label="Action 1" variant="ghost"></mw-button>
              <mw-button label="Action 2"></mw-button>
            </span>
        </mw-modal-footer>
    </mw-modal>
</div>`;

export const Default = DefaultTemplate.bind({});

Default.args = {
  id: "open-modal",
  text: `A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.`,
  icon: "close",
  headline: "Title",
  description: `A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.`,
};
