import docs from "./mw-modal.docs.mdx";
import { ModalSizeEnum } from "./models/enums/modal-size.enum";

export default {
  title: "Components/Modal",
  component: "mw-modal",
  parameters: {
    docs: { page: docs },
  },
};

const DefaultTemplate = args => `
<div>
    <mw-button
        id="open-default-modal"
        label="Open Modal"
      ></mw-button>
    <mw-modal
      trigger="open-default-modal"
      dismiss-trigger="dismiss-default-modal"
      backdrop-dismiss="${args.backdropDismiss}"
      size="${args.size}"
    >
        <mw-modal-title headline="${args.headline}" description="${args.description}">
            <mw-icon icon=${args.icon} id="dismiss-default-modal" size="medium" slot="icon"></mw-icon>
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
  size: ModalSizeEnum.DEFAULT,
};

const ModalTitleTemplate = args => `
<div>
    <mw-button
        id="open-modal-title"
        label="Open Modal with Title"
      ></mw-button>
    <mw-modal
      trigger="open-modal-title"
      dismiss-trigger="dismiss-modal-title"
      backdrop-dismiss="${args.backdropDismiss}"
    >
        <mw-modal-title headline="${args.headline}" description="${args.description}">
            <mw-icon icon=${args.icon} id="dismiss-modal-title" size="medium" slot="icon"></mw-icon>
        </mw-modal-title>
    </mw-modal>
</div>`;

export const ModalTitle = ModalTitleTemplate.bind({});

ModalTitle.args = {
  icon: "close",
  headline: "Title",
  backdropDismiss: true,
  description: `A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.`,
};

const ModalFooterTemplate = args => `
<div>
    <mw-button
        id="open-modal-footer"
        label="Open Modal with footer"
      ></mw-button>
    <mw-modal
      trigger="open-modal-footer"
      dismiss-trigger="dismiss-modal-footer"
      backdrop-dismiss="${args.backdropDismiss}"
    >
        <mw-modal-title headline="${args.headline}" description="${args.description}">
            <mw-icon icon=${args.icon} id="dismiss-modal-footer" size="medium" slot="icon"></mw-icon>
        </mw-modal-title>
        <mw-modal-footer>
            <span slot="start">
              <mw-button label="Action 1"></mw-button>
              <mw-button label="Action 2" variant="ghost"></mw-button>
            </span>
        </mw-modal-footer>
    </mw-modal>
</div>`;

export const ModalFooter = ModalFooterTemplate.bind({});

ModalFooter.args = {
  icon: "close",
  headline: "Title",
  backdropDismiss: true,
  description: `A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.`,
};

const NotificationTemplate = args => `
<div>
    <mw-button id="open-notification-modal" label="Open Modal"></mw-button>
    <mw-modal trigger="open-notification-modal">
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

const IsOpenTemplate = args => `
<div>
    <mw-modal is-open="true">
        <mw-modal-title headline="${args.headline}" description="${args.description}"></mw-modal-title>

        <mw-modal-footer>
            <span slot="end">
              <mw-button label="Not now" variant="ghost"></mw-button>
              <mw-button label="Ok"></mw-button>
            </span>
        </mw-modal-footer>
    </mw-modal>
</div>`;

export const IsOpenModal = IsOpenTemplate.bind({});

IsOpenModal.args = {
  headline: "I pop up automatically!",
  description: "Get notified when traffic is impacted along your usual routes. Add your preferred routes and travel times to get started with traffic updates.",
};
