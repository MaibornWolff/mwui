/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import { r as registerInstance, h, e as Host } from './index-a62bab22.js';

const mwAppBarTitleCss = ":host .mw-app-bar-title{color:var(--mw-component-header-fg-default);font-family:var(--mw-component-header-title-font-family);font-weight:var(--mw-component-header-title-font-weight);line-height:var(--mw-component-header-title-line-height);font-size:var(--mw-component-header-title-font-size)}";

const MwAppBarTitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("div", { class: "mw-app-bar-title" }, h("slot", null))));
  }
};
MwAppBarTitle.style = mwAppBarTitleCss;

export { MwAppBarTitle as mw_app_bar_title };
