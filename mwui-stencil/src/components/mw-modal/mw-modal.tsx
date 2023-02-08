import { Component, Host, h, Prop, Element, Watch, Method, State } from "@stencil/core";
import { ComponentRef } from "@stencil/core/internal";
import { attachComponent, CoreDelegate, detachComponent } from "../../utils/delegate";

@Component({
  tag: "mw-modal",
  styleUrl: "mw-modal.scss",
  shadow: true,
})
export class MwModal {
  private destroyTriggerInteraction?: () => void;
  private destroyDismissTriggerInteraction?: () => void;
  private modalContentElement?: HTMLElement;
  private delegate = CoreDelegate();
  private animationDuration = 500;

  @State() private dismissAnimationRunning = false;
  @State() private overlayHidden = true;

  @Element() private el!: HTMLMwModalElement;

  @Prop() backdropDismiss = true;
  @Prop() component?: ComponentRef;

  @Prop() trigger: string | undefined;
  @Watch("trigger")
  onTriggerChange(): void {
    this.configureTriggerInteraction();
  }

  @Prop() dismissTrigger: string | undefined;
  @Watch("trigger")
  onDismissTriggerChange(): void {
    this.configureDismissTriggerInteraction();
  }

  connectedCallback(): void {
    this.configureTriggerInteraction();
    this.configureDismissTriggerInteraction();
  }

  private configureTriggerInteraction = () => {
    const { trigger, el, destroyTriggerInteraction } = this;

    if (destroyTriggerInteraction) {
      destroyTriggerInteraction();
    }

    if (!trigger) {
      return;
    }

    const triggerEl = trigger !== undefined ? document.getElementById(trigger) : null;

    const configureTriggerInteraction = (triggerElement: HTMLElement, modalEl: HTMLMwModalElement) => {
      const openModal = (): void => {
        modalEl.present();
      };

      triggerElement.addEventListener("click", openModal);

      return () => {
        triggerElement.removeEventListener("click", openModal);
      };
    };

    this.destroyTriggerInteraction = configureTriggerInteraction(triggerEl, el);
  };

  private configureDismissTriggerInteraction = () => {
    const { dismissTrigger, el, destroyDismissTriggerInteraction } = this;

    if (destroyDismissTriggerInteraction) {
      destroyDismissTriggerInteraction();
    }

    if (!dismissTrigger) {
      return;
    }

    const triggerEl = dismissTrigger !== undefined ? document.getElementById(dismissTrigger) : null;

    const configureDismissTriggerInteraction = (triggerElement: HTMLElement, modalEl: HTMLMwModalElement) => {
      const dismissModal = (): void => {
        modalEl.dismiss();
      };

      triggerElement.addEventListener("click", dismissModal);

      return () => {
        triggerElement.removeEventListener("click", dismissModal);
      };
    };

    this.destroyDismissTriggerInteraction = configureDismissTriggerInteraction(triggerEl, el);
  };

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
          <div class="mw-modal__wrapper">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
