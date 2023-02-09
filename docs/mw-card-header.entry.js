/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import { r as registerInstance, h, e as Host } from './index-a62bab22.js';

const mwCardHeaderCss = ":host{display:block;display:flex;flex-direction:row;align-items:center;padding:0 var(--mw-component-card-padding-components-x-default) 0 var(--mw-component-card-padding-components-x-default);gap:16px}.header{font-family:var(--mw-component-card-header-font-family);font-size:var(--mw-component-card-header-font-size);font-weight:var(--mw-component-card-header-font-weight);line-height:var(--mw-component-card-header-line-height)}.subheader{font-family:var(--mw-component-card-subhead-font-family);font-size:var(--mw-component-card-subhead-font-size);font-weight:var(--mw-component-card-subhead-font-weight);line-height:var(--mw-component-card-subhead-line-height);color:var(--mw-component-card-fg-muted)}";

const MwCardHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.header = undefined;
    this.subheader = undefined;
  }
  render() {
    return (h(Host, null, h("slot", { name: "icon" }), h("div", { class: "text" }, h("div", { class: "header" }, this.header), h("div", { class: "subheader" }, this.subheader))));
  }
};
MwCardHeader.style = mwCardHeaderCss;

export { MwCardHeader as mw_card_header };
