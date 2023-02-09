/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import { r as registerInstance, h, g as getElement } from './index-a62bab22.js';

const mwTabsCss = ".mw-tabs{display:flex;flex-flow:row;gap:0;width:100%}";

const MwTabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.testId = undefined;
    this.selected = null;
    this.tabs = [];
  }
  componentWillRender() {
    this.tabs = [];
    for (let i = 0; i < this.host.children.length; i++) {
      this.host.children[i].setAttribute("index", i.toString());
      if (i === this.selected) {
        this.host.children[i].setAttribute("selected", "");
        this.tabs.push(this.host.children[i]);
      }
      else {
        this.host.children[i].removeAttribute("selected");
        this.tabs.push(this.host.children[i]);
      }
    }
  }
  render() {
    return (h("div", { "test-id": this.testId, class: "mw-tabs" }, this.tabs.map((item, key) => (h("mw-tab", { key: key, icon: item.icon, label: item.label, selected: item.selected, disabled: item.disabled, onClick: () => (this.selected = key) })))));
  }
  get host() { return getElement(this); }
};
MwTabs.style = mwTabsCss;

export { MwTabs as mw_tabs };
