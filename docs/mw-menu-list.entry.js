/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import { r as registerInstance, h, e as Host } from './index-a62bab22.js';

const mwMenuListCss = ":host{display:block}.mw-menu-list{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);background:var(--mw-component-menu-item-bg-default);border-radius:var(--mw-component-menu-item-border-radius);border-width:var(--mw-component-menu-item-border-width-default)}";

const MwMenuList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.testId = undefined;
  }
  render() {
    return (h(Host, null, h("div", { "test-id": this.testId, slot: "content", class: "mw-menu-list" }, h("slot", null))));
  }
};
MwMenuList.style = mwMenuListCss;

export { MwMenuList as mw_menu_list };
