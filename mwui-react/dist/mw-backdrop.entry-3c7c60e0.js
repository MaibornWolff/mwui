import { r as registerInstance, c as createEvent, h, H as Host } from './index-3847b4d2.js';

/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */

const mwBackdropCss = ".backdrop{position:absolute;top:0;left:0;width:100vw;height:100vh;background:var(--mw-component-modal-backdrop);opacity:0.4}";

const MwBackdrop = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.backdropClick = createEvent(this, "backdropClick", 7);
    this.backdropDismiss = true;
  }
  onMouseDown(ev) {
    this.emitClick(ev);
  }
  emitClick(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    if (!this.backdropDismiss) {
      return;
    }
    this.backdropClick.emit();
  }
  render() {
    return (h(Host, null, h("div", { class: "backdrop" })));
  }
};
MwBackdrop.style = mwBackdropCss;

export { MwBackdrop as mw_backdrop };
