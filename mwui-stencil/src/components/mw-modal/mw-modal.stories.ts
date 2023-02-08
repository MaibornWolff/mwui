import "../../global/global.css";

export default {
  title: "Molecules/Modal",
  component: "mw-modal",
};

const DefaultTemplate = args => `
<div>
    <mw-button
        id="open-modal"
        label="Open Modal"
      ></mw-button>
    <mw-modal
      trigger="open-modal"
      dismiss-trigger="close-icon"
      backdrop-dismiss="${args.backdropDismiss}"
    >
        <mw-modal-title headline="${args.headline}" description="${args.description}">
            <mw-icon icon=${args.icon} id="close-icon" size="medium" slot="icon"></mw-icon>
        </mw-modal-title>

        <div style="display: flex; justify-content: center; align-items: center; background: #C8EBFD; flex-direction: column; height: 200px">
            <h3 style="font-weight: bold; text-align: center; margin: 0; margin-bottom: 12px;">Slot</h3>
            <p style="text-align: center; margin: 4px;">This is a placeholder component</p>
            <p style="text-align: center; margin: 4px;">Replace with your component</p>
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
  icon: "close",
  headline: "Title",
  backdropDismiss: true,
  description: `A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.`,
};

const RadioTemplate = args => `
<div>
    <mw-button id="open-modal" label="Open Modal"></mw-button>
    <mw-modal
        trigger="open-modal"
        dismiss-trigger="close-icon"
    >
        <mw-modal-title headline="${args.headline}">
            <mw-icon icon=${args.icon} id="close-icon" size="medium" slot="icon"></mw-icon>
        </mw-modal-title>

        <mw-radio label="No Equipment"></mw-radio>
        <mw-radio label="Windows" checked="true"></mw-radio>

        <mw-modal-footer>
            <span slot="end">
              <mw-button label="Cancel" variant="ghost"></mw-button>
              <mw-button label="Next"></mw-button>
            </span>
        </mw-modal-footer>
    </mw-modal>
</div>`;

export const RadioModal = RadioTemplate.bind({});

RadioModal.args = {
  icon: "close",
  headline: "Select a Workspace Type",
};

const NotificationTemplate = args => `
<div>
    <mw-button id="open-modal" label="Open Modal"></mw-button>
    <mw-modal trigger="open-modal">
        <mw-modal-title headline="${args.headline}" description="${args.description}"></mw-modal-title>

        <mw-modal-footer>
            <span slot="end">
              <mw-button label="Not now" variant="ghost"></mw-button>
              <mw-button label="Ok"></mw-button>
            </span>
        </mw-modal-footer>
    </mw-modal>
</div>`;

export const NotificationModal = NotificationTemplate.bind({});

NotificationModal.args = {
  headline: "Set up traffic updates?",
  description: "Get notified when traffic is impacted along your usual routes. Add your preferred routes and travel times to get started with traffic updates.",
};
