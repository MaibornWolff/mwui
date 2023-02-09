/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import { r as registerInstance, f as createEvent, h } from './index-a62bab22.js';

const mwCheckboxCss = ".mw-checkbox-container{display:inline-flex;cursor:pointer;align-items:center;gap:var(--mw-component-controls-with-label-gap);margin:var(--mw-component-controls-with-label-padding-y) var(--mw-component-controls-with-label-padding-r) var(--mw-component-controls-with-label-padding-y)\r\n    var(--mw-component-controls-with-label-padding-l)}.mw-checkbox-container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0;}.mw-checkbox{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;width:var(--mw-component-size-controls-checkbox-radiobutton-container);height:var(--mw-component-size-controls-checkbox-radiobutton-container);border-radius:var(--mw-component-checkbox-border-radius);display:flex;justify-content:center;align-items:center}.mw-checkbox-container .mw-checkbox.unselected.enabled{border:var(--mw-component-controls-border-width-unselected) solid var(--mw-component-controls-color-outline-default);background:var(--mw-component-controls-color-bg-unselected)}.mw-checkbox-container .mw-checkbox.unselected.disabled{background:var(--mw-component-controls-color-bg-unselected);border:var(--mw-component-controls-border-width-unselected) solid var(--mw-component-controls-color-outline-disabled)}.mw-checkbox-container:hover .mw-checkbox.unselected.enabled{background:var(--mw-component-controls-color-bg-hover);border:var(--mw-component-controls-border-width-unselected) solid var(--mw-component-controls-color-outline-default)}input:focus+.mw-checkbox.unselected.enabled{background:var(--mw-component-controls-color-bg-focused);border:var(--mw-component-controls-border-width-focused) solid var(--mw-component-controls-color-outline-default)}.mw-checkbox-container:active .mw-checkbox.unselected.enabled{background:var(--mw-component-controls-color-bg-pressed);border:var(--mw-component-controls-border-width-unselected) solid var(--mw-component-controls-color-outline-default)}.mw-checkbox-container .mw-checkbox.selected.enabled{background:var(--mw-component-controls-color-bg-selected);border:var(--mw-component-controls-border-width-selected) solid var(--mw-component-controls-color-outline-default)}.mw-checkbox-container .mw-checkbox.selected.disabled{background:var(--mw-component-controls-color-bg-disabled);border:var(--mw-component-controls-border-width-selected) solid var(--mw-component-controls-color-outline-disabled)}.mw-checkbox-container:hover .mw-checkbox.selected.enabled{background:var(--mw-component-controls-color-bg-hover);border:var(--mw-component-controls-border-width-selected) solid var(--mw-component-controls-color-outline-default)}input:focus+.mw-checkbox.selected.enabled{background:var(--mw-component-controls-color-bg-focused);border:var(--mw-component-controls-border-width-focused) solid var(--mw-component-controls-color-outline-default)}.mw-checkbox-container:active .mw-checkbox.selected.enabled{background:var(--mw-component-controls-color-bg-pressed);border:var(--mw-component-controls-border-width-selected) solid var(--mw-component-controls-color-outline-default)}.mw-checkmark{display:none}.mw-checkmark.selected{height:var(--mw-component-size-controls-checkbox-radiobutton-container);display:unset}.mw-checkbox-label{font-family:var(--mw-component-control-label-font-family);font-weight:var(--mw-component-control-label-font-weight);font-size:var(--mw-component-control-label-font-size);line-height:var(--mw-component-control-label-line-height);color:var(--mw-component-controls-color-label-default)}";

const MwCheckbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.emitter = createEvent(this, "emitter", 4);
    this.handleCheck = () => {
      if (!this.disabled) {
        this.checked = !this.checked;
        this.emitter.emit();
      }
    };
    this.testId = undefined;
    this.value = undefined;
    this.name = undefined;
    this.checked = false;
    this.disabled = false;
    this.label = undefined;
  }
  render() {
    return (h("div", { "test-id": this.testId, class: "mw-checkbox-container", onClick: this.handleCheck }, h("input", { type: "checkbox", checked: this.checked, value: this.value, name: this.name }), h("span", { class: `mw-checkbox ${this.checked ? "selected" : "unselected"} ${this.disabled ? "disabled" : "enabled"}` }, h("mw-icon", { class: `mw-checkmark ${this.checked ? "selected" : "unselected"}`, color: `var(--mw-component-controls-color-fg-default)`, icon: "check", weight: 600, size: "medium" })), h("span", { class: "mw-checkbox-label" }, this.label)));
  }
  static get assetsDirs() { return ["./../assets"]; }
};
MwCheckbox.style = mwCheckboxCss;

export { MwCheckbox as mw_checkbox };
