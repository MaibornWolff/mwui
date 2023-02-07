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

  @Element() private el!: any;
  @Prop() component?: ComponentRef;

  @Prop() trigger: string | undefined;
  @Watch("trigger")
  onTriggerChange() {
    this.configureTriggerInteraction();
  }

  connectedCallback() {
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

    const configureTriggerInteraction = (triggerElement: HTMLElement, modalEl: MwModal) => {
      const openModal = () => {
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
  async present() {
    const { delegate } = this;
    this.modalContentElement = await attachComponent(delegate, this.el).then(el => {
      el.classList.remove("overlay-hidden");

      return el;
    });
  }

  @Method()
  async dismiss(): Promise<void> {
    const { delegate } = this;

    await detachComponent(delegate, this.modalContentElement);
  }

  private onBackdropTap = () => {
    this.dismiss().then(() => this.el.classList.add("overlay-hidden"));
  };

  render() {
    return (
      <Host
        class={{
          "overlay-hidden": true,
        }}
        onIonBackdropTap={this.onBackdropTap}
      >
        <mw-backdrop part="backdrop" />
        <div class="modal-wrapper">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
