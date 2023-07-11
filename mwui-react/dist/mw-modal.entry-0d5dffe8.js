import { r as registerInstance, h, H as Host, g as getElement } from './index-3847b4d2.js';

/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */

const attachComponent = async (delegate, container) => {
  if (delegate) {
    return delegate.attachViewToDom(container);
  }
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};
const CoreDelegate = () => {
  let BaseComponent;
  let Reference;
  const attachViewToDom = async (parentElement) => {
    var _a;
    BaseComponent = parentElement;
    const root = BaseComponent.firstElementChild;
    if (!root.classList.contains("mw-teleport-container")) {
      const el = (_a = BaseComponent.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement("div");
      el.classList.add("mw-teleport-container");
      el.append(...Array.from(BaseComponent.children));
      BaseComponent.appendChild(el);
    }
    const app = document.body; // @TODO: add custom anchor element
    Reference = document.createComment("mwui-anchor-comment");
    BaseComponent.parentNode.insertBefore(Reference, BaseComponent);
    app.appendChild(BaseComponent);
    return BaseComponent;
  };
  const removeViewFromDom = () => {
    var _a;
    if (BaseComponent && Reference) {
      (_a = Reference.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(BaseComponent, Reference);
      Reference.remove();
    }
    return Promise.resolve();
  };
  return { attachViewToDom, removeViewFromDom };
};

var ModalSizeEnum;
(function (ModalSizeEnum) {
  ModalSizeEnum["DEFAULT"] = "default";
  ModalSizeEnum["SMALL"] = "small";
})(ModalSizeEnum || (ModalSizeEnum = {}));

const mwModalCss = ":host{display:block}:host(.overlay-hidden){display:none}.mw-modal{display:flex;justify-content:center;align-items:start;position:fixed;left:0;top:0;bottom:0;right:0;width:100%;height:100%;box-sizing:border-box;contain:strict;z-index:999999}.mw-modal.dismiss-animation .mw-modal__backdrop{animation:fadeOut 0.33s cubic-bezier(0.165, 0.84, 0.44, 1) forwards}.mw-modal.dismiss-animation .mw-modal__wrapper{animation:scaleDown 0.33s cubic-bezier(0.165, 0.84, 0.44, 1) forwards}.mw-modal__backdrop{animation:fadeIn 0.33s cubic-bezier(0.165, 0.84, 0.44, 1) forwards}.mw-modal__wrapper{-webkit-box-shadow:var(--mw-component-modal-shadow-default-0-x) var(--mw-component-modal-shadow-default-0-y) var(--mw-component-modal-shadow-default-0-blur) var(--mw-component-modal-shadow-default-0-spread) var(--mw-component-modal-shadow-default-0-color);-moz-box-shadow:var(--mw-component-modal-shadow-default-0-x) var(--mw-component-modal-shadow-default-0-y) var(--mw-component-modal-shadow-default-0-blur) var(--mw-component-modal-shadow-default-0-spread) var(--mw-component-modal-shadow-default-0-color);box-shadow:var(--mw-component-modal-shadow-default-0-x) var(--mw-component-modal-shadow-default-0-y) var(--mw-component-modal-shadow-default-0-blur) var(--mw-component-modal-shadow-default-0-spread) var(--mw-component-modal-shadow-default-0-color);z-index:1;margin-top:var(--mw-component-modal-margin-t);margin-left:var(--mw-component-modal-margin-x);margin-right:var(--mw-component-modal-margin-x);background:var(--mw-component-modal-bg-default);border-radius:var(--mw-component-modal-border-radius);padding:var(--mw-component-modal-padding-components-x-default) var(--mw-component-modal-padding-components-x-default);animation:scaleUp 0.33s cubic-bezier(0.165, 0.84, 0.44, 1) forwards}.mw-modal__wrapper--default{max-width:var(--mw-component-size-modal-default-w)}.mw-modal__wrapper--small{max-width:var(--mw-component-size-modal-small-w)}@keyframes fadeIn{0%{opacity:0}100%{opacity:0.4}}@keyframes fadeOut{0%{opacity:0.4}100%{opacity:0}}@keyframes scaleUp{0%{transform:scale(0.8) translateY(100px);opacity:0}100%{transform:scale(1) translateY(0px);opacity:1}}@keyframes scaleDown{0%{transform:scale(1) translateY(0px);opacity:1}100%{transform:scale(0.8) translateY(100px);opacity:0}}";

const MwModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.delegate = CoreDelegate();
    this.animationDuration = 300;
    this.configureTriggerInteraction = () => {
      const { trigger, el, destroyTriggerInteraction } = this;
      if (destroyTriggerInteraction) {
        destroyTriggerInteraction();
      }
      if (!trigger) {
        return;
      }
      const configureTriggerInteraction = (triggerElement, modalEl) => {
        const openModal = () => {
          modalEl.present();
        };
        triggerElement.addEventListener("click", openModal);
        return () => {
          triggerElement.removeEventListener("click", openModal);
        };
      };
      this.destroyTriggerInteraction = configureTriggerInteraction(this.getTriggerElement(trigger), el);
    };
    this.configureDismissTriggerInteraction = () => {
      const { dismissTrigger, el, destroyDismissTriggerInteraction } = this;
      if (destroyDismissTriggerInteraction) {
        destroyDismissTriggerInteraction();
      }
      if (!dismissTrigger) {
        return;
      }
      const configureDismissTriggerInteraction = (triggerElement, modalEl) => {
        const dismissModal = () => {
          modalEl.dismiss();
        };
        triggerElement.addEventListener("click", dismissModal);
        return () => {
          triggerElement.removeEventListener("click", dismissModal);
        };
      };
      this.destroyDismissTriggerInteraction = configureDismissTriggerInteraction(this.getTriggerElement(dismissTrigger), el);
    };
    this.handleDismiss = () => {
      this.dismiss();
    };
    this.dismissAnimationRunning = false;
    this.overlayHidden = true;
    this.modalIsOpen = false;
    this.backdropDismiss = true;
    this.size = ModalSizeEnum.DEFAULT;
    this.trigger = undefined;
    this.dismissTrigger = undefined;
    this.isOpen = false;
  }
  onTriggerChange() {
    this.configureTriggerInteraction();
  }
  onDismissTriggerChange() {
    this.configureDismissTriggerInteraction();
  }
  onIsOpenChange(newValue, oldValue) {
    if (newValue === true && oldValue === false) {
      this.present();
    }
    else if (newValue === false && oldValue === true) {
      this.dismiss();
    }
  }
  componentDidLoad() {
    if (this.isOpen === true) {
      this.present();
    }
  }
  connectedCallback() {
    this.configureTriggerInteraction();
    this.configureDismissTriggerInteraction();
  }
  disconnectedCallback() {
    const { destroyTriggerInteraction, destroyDismissTriggerInteraction } = this;
    if (destroyTriggerInteraction) {
      destroyTriggerInteraction();
    }
    if (destroyDismissTriggerInteraction) {
      destroyDismissTriggerInteraction();
    }
  }
  getTriggerElement(triggerId) {
    return triggerId ? document.getElementById(triggerId) : null;
  }
  runPresentAnimation() {
    this.overlayHidden = false;
    return new Promise(resolve => setTimeout(() => {
      resolve();
    }, this.animationDuration));
  }
  runDismissAnimation() {
    this.dismissAnimationRunning = true;
    return new Promise(resolve => setTimeout(() => {
      this.overlayHidden = true;
      this.dismissAnimationRunning = false;
      resolve();
    }, this.animationDuration));
  }
  /**
   * Method to present the modal
   */
  async present() {
    const { delegate, el } = this;
    if (this.modalIsOpen) {
      return;
    }
    this.modalContentElement = await attachComponent(delegate, el);
    await this.runPresentAnimation();
    this.modalIsOpen = true;
  }
  /**
   * Method to dismiss the modal
   */
  async dismiss() {
    const { delegate } = this;
    if (!this.modalIsOpen) {
      return;
    }
    await this.runDismissAnimation();
    await detachComponent(delegate, this.modalContentElement);
    this.modalIsOpen = false;
  }
  render() {
    return (h(Host, { class: {
        "overlay-hidden": this.overlayHidden,
      }, onBackdropClick: this.handleDismiss, onIconClick: this.handleDismiss }, h("div", { class: {
        "mw-modal": true,
        "dismiss-animation": this.dismissAnimationRunning,
      } }, h("mw-backdrop", { class: "mw-modal__backdrop", part: "backdrop", backdropDismiss: this.backdropDismiss }), h("div", { class: `mw-modal__wrapper mw-modal__wrapper--${this.size}`, part: "content" }, h("slot", null)))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "trigger": ["onTriggerChange", "onDismissTriggerChange"],
    "isOpen": ["onIsOpenChange"]
  }; }
};
MwModal.style = mwModalCss;

export { MwModal as mw_modal };
