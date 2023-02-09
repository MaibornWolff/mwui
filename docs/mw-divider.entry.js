/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import { r as registerInstance, h } from './index-a62bab22.js';

const mwDividerCss = ".mw-divider{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;border:0;border-top:var(--mw-component-divider-border-width-default) solid var(--mw-component-divider-fg-default)}.mw-divider.inset{margin:0 var(--mw-component-divider-inset)}";

const MwDivider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inset = false;
  }
  render() {
    return h("div", { class: `mw-divider ${this.inset && "inset"}` });
  }
};
MwDivider.style = mwDividerCss;

export { MwDivider as mw_divider };
