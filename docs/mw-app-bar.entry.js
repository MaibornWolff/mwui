/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import { r as registerInstance, h, e as Host } from './index-a62bab22.js';

/**
 * This is incomplete and should be extended when new roles are needed
 */
var AriaRolesEnum;
(function (AriaRolesEnum) {
  AriaRolesEnum["NAVIGATION"] = "navigation";
  AriaRolesEnum["TOOLBAR"] = "toolbar";
})(AriaRolesEnum || (AriaRolesEnum = {}));

const mwAppBarCss = ":host{display:block}.mw-app-bar{z-index:1000;box-sizing:border-box;width:100%;display:flex;flex-flow:row;justify-content:space-between;align-items:center;height:var(--mw-component-size-header-height);background:var(--mw-component-header-bg-default);color:var(--mw-component-header-fg-default);padding:0 var(--mw-component-header-padding-x)}.mw-app-bar.fixed{position:fixed;top:0;left:0}.mw-app-bar.absolute{position:absolute;top:0;left:0}.mw-app-bar.sticky{position:sticky;top:0;left:0}::slotted(*){display:flex;flex-flow:row;align-items:center;gap:var(--mw-component-header-gap-within)}slot[name=\"start\"]::slotted(*){justify-content:start}slot[name=\"center\"]::slotted(*){justify-content:center}slot[name=\"end\"]::slotted(*){justify-content:end}";

const MwAppBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ariaRole = AriaRolesEnum.NAVIGATION;
    this.position = "relative";
  }
  render() {
    return (h(Host, null, h("div", { class: `mw-app-bar ${this.position}`, role: this.ariaRole }, h("slot", { name: "start" }), h("slot", { name: "center" }), h("slot", { name: "end" }))));
  }
};
MwAppBar.style = mwAppBarCss;

export { MwAppBar as mw_app_bar };
