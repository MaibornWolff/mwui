import { Component, Host, h, Prop, Element, Watch, Method } from "@stencil/core";
import { ComponentRef } from "@stencil/core/internal";
import { attachComponent, CoreDelegate, detachComponent } from "../../utils/delegate";

@Component({
  tag: "mw-modal",
  styleUrl: "mw-modal.css",
  shadow: true,
})
export class MwModal {
  private destroyTriggerInteraction?: () => void;
  private modalContentElement?: HTMLElement;
  private delegate = CoreDelegate();

  @Element() private el!: HTMLMwModalElement;

  @Prop() backdropDismiss = true;
  @Prop() component?: ComponentRef;

  @Prop() trigger: string | undefined;
  @Watch("trigger")
  onTriggerChange(): void {
    this.configureTriggerInteraction();
  }

  connectedCallback(): void {
    this.configureTriggerInteraction();
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

  @Method()
  async present(): Promise<void> {
    const { delegate, el } = this;
    el.classList.remove("overlay-hidden");
    this.modalContentElement = await attachComponent(delegate, el);
  }

  @Method()
  async dismiss(): Promise<void> {
    const { delegate, el } = this;
    el.classList.add("overlay-hidden");
    await detachComponent(delegate, this.modalContentElement);
  }

  private onBackdropClick = (): void => {
    this.dismiss();
  };

  render() {
    return (
      <Host
        class={{
          "overlay-hidden": true,
        }}
        onBackdropClick={this.onBackdropClick}
      >
        <mw-backdrop part="backdrop" backdropDismiss={this.backdropDismiss} />
        <div class="modal-wrapper">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
