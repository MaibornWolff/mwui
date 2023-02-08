import { Component, Host, h, Prop, Element, Watch, Method, State } from "@stencil/core";
import { attachComponent, CoreDelegate, detachComponent } from "../../utils/delegate";

@Component({
  tag: "mw-modal",
  styleUrl: "mw-modal.scss",
  shadow: true,
})
export class MwModal {
  private modalContentElement?: HTMLElement;
  private delegate = CoreDelegate();
  private animationDuration = 300;
  private destroyTriggerInteraction?: () => void;
  private destroyDismissTriggerInteraction?: () => void;

  @State() private dismissAnimationRunning = false;
  @State() private overlayHidden = true;

  @Element() private el!: HTMLMwModalElement;

  /**
   * Determines wether or not backdrop should dismiss modal
   */
  @Prop() backdropDismiss = true;

  /**
   * id used to present the modal
   */
  @Prop() trigger: string | undefined;
  @Watch("trigger")
  onTriggerChange(): void {
    this.configureTriggerInteraction();
  }

  /**
   * id used to dismiss the modal
   */
  @Prop() dismissTrigger: string | undefined;
  @Watch("trigger")
  onDismissTriggerChange(): void {
    this.configureDismissTriggerInteraction();
  }

  connectedCallback(): void {
    this.configureTriggerInteraction();
    this.configureDismissTriggerInteraction();
  }

  private configureTriggerInteraction = (): void => {
    const { trigger, el, destroyTriggerInteraction } = this;

    if (destroyTriggerInteraction) {
      destroyTriggerInteraction();
    }

    if (!trigger) {
      return;
    }

    const configureTriggerInteraction = (triggerElement: HTMLElement, modalEl: HTMLMwModalElement): (() => void) => {
      const openModal = (): void => {
        modalEl.present();
      };

      triggerElement.addEventListener("click", openModal);

      return () => {
        triggerElement.removeEventListener("click", openModal);
      };
    };

    this.destroyTriggerInteraction = configureTriggerInteraction(this.getTriggerElement(trigger), el);
  };

  private configureDismissTriggerInteraction = () => {
    const { dismissTrigger, el, destroyDismissTriggerInteraction } = this;

    if (destroyDismissTriggerInteraction) {
      destroyDismissTriggerInteraction();
    }

    if (!dismissTrigger) {
      return;
    }

    const configureDismissTriggerInteraction = (triggerElement: HTMLElement, modalEl: HTMLMwModalElement): (() => void) => {
      const dismissModal = (): void => {
        modalEl.dismiss();
      };

      triggerElement.addEventListener("click", dismissModal);

      return (): void => {
        triggerElement.removeEventListener("click", dismissModal);
      };
    };

    this.destroyDismissTriggerInteraction = configureDismissTriggerInteraction(this.getTriggerElement(dismissTrigger), el);
  };

  private getTriggerElement(triggerId: string): HTMLElement | null {
    return triggerId ? document.getElementById(triggerId) : null;
  }

  private runPresentAnimation(): Promise<void> {
    this.overlayHidden = false;

    return new Promise(resolve =>
      setTimeout(() => {
        resolve();
      }, this.animationDuration),
    );
  }

  private runDismissAnimation(): Promise<void> {
    this.dismissAnimationRunning = true;

    return new Promise(resolve =>
      setTimeout(() => {
        this.overlayHidden = true;
        this.dismissAnimationRunning = false;
        resolve();
      }, this.animationDuration),
    );
  }

  /**
   * Method to present the modal
   */
  @Method()
  async present(): Promise<void> {
    const { delegate, el } = this;

    this.modalContentElement = await attachComponent(delegate, el);
    await this.runPresentAnimation();
  }

  /**
   * Method to dismiss the modal
   */
  @Method()
  async dismiss(): Promise<void> {
    const { delegate } = this;

    await this.runDismissAnimation();
    await detachComponent(delegate, this.modalContentElement);
  }

  private handleDismiss = (): void => {
    this.dismiss();
  };

  render() {
    return (
      <Host
        class={{
          "overlay-hidden": this.overlayHidden,
        }}
        onBackdropClick={this.handleDismiss}
        onIconClick={this.handleDismiss}
      >
        <div
          class={{
            "mw-modal": true,
            "dismiss-animation": this.dismissAnimationRunning,
          }}
        >
          <mw-backdrop class="mw-modal__backdrop" part="backdrop" backdropDismiss={this.backdropDismiss} />
          <div class="mw-modal__wrapper" part="content">
            {this.backdropDismiss + ""}
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
