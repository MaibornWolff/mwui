/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import { r as registerInstance, h, e as Host } from './index-a62bab22.js';

const mwMenuCss = ":host{display:block}";

const MwMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.testId = undefined;
    this.placement = "bottom-end";
    this.open = false;
  }
  render() {
    return (h(Host, null, h("mw-popover", { testId: this.testId, placement: this.placement, open: this.open, "no-padding": true }, h("div", { slot: "anchor" }, h("slot", { name: "anchor" })), h("div", { slot: "content", class: "menu" }, h("slot", null)))));
  }
};
MwMenu.style = mwMenuCss;

export { MwMenu as mw_menu };
