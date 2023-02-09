/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import { r as registerInstance, h, e as Host } from './index-a62bab22.js';

const mwTabCss = ":host{width:100%;flex-grow:1}.mw-tab{width:100%;box-sizing:border-box;appearance:none;text-decoration:none;border:none;cursor:pointer;height:var(--mw-component-size-tabs-default-h);display:inline-flex;flex-flow:column;padding:0 var(--mw-component-tabs-padding-x);justify-content:center;align-items:center;border-bottom:var(--mw-component-divider-border-width-default) solid var(--mw-component-tabs-bg-default);background:var(--mw-component-tabs-bg-default);color:var(--mw-component-tabs-fg-default);gap:var(--mw-component-tabs-gap-within);font-family:var(--mw-component-tabs-label-font-family);font-weight:var(--mw-component-tabs-label-font-weight);font-size:var(--mw-component-tabs-label-font-size);line-height:var(--mw-component-tabs-label-line-height)}.mw-tab.label-with-icon{height:var(--mw-component-size-tabs-with-icon-h)}.mw-tab.selected{color:var(--mw-component-tabs-fg-selected);border-bottom:var(--mw-component-divider-border-width-default) solid var(--mw-component-tabs-fg-selected)}.mw-tab:active{}.mw-tab:disabled{cursor:unset;color:var(--mw-component-tabs-fg-disabled)}.mw-tab:not(.selected):not(:disabled):hover{background:var(--mw-component-tabs-bg-hover)}";

const MwTab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selected = undefined;
    this.icon = undefined;
    this.label = undefined;
    this.disabled = undefined;
  }
  render() {
    return (h(Host, null, h("button", { disabled: this.disabled, class: `mw-tab ${this.icon && this.label ? "label-with-icon" : ""} ${this.selected ? "selected" : ""}` }, this.icon && h("mw-icon", { icon: this.icon, size: "small" }), this.label)));
  }
};
MwTab.style = mwTabCss;

export { MwTab as mw_tab };
