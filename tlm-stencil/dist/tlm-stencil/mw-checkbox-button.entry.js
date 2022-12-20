import { r as registerInstance, h, g as getAssetPath } from './index-6f3bbc45.js';

const mwCheckboxButtonCss = ".mw-checkbox-button{display:inline-flex;cursor:pointer;align-items:center;gap:var(--mw-component-controls-with-label-gap);padding:var(--mw-component-controls-with-label-padding-tb) var(--mw-component-controls-with-label-padding-r) var(--mw-component-controls-with-label-padding-tb) var(--mw-component-controls-with-label-padding-l)}.mw-checkbox-button input{position:absolute;opacity:0;cursor:pointer;height:0;width:0;}.mw-checkbox{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;width:var(--mw-component-size-checkbox-radiobutton-wh);height:var(--mw-component-size-checkbox-radiobutton-wh);border-radius:var(--mw-component-checkbox-border-radius);display:flex;justify-content:center;align-items:center}.mw-checkbox-button .mw-checkbox.unselected{border:var(--mw-component-checkbox-selected-border-width-unselected) solid var(--mw-component-controls-color-outline-default);background:var(--mw-component-controls-color-bg-unselected)}.mw-checkbox-button:hover .mw-checkbox.unselected{background:var(--mw-component-controls-color-bg-hover);border:var(--mw-component-checkbox-selected-border-width-unselected) solid var(--mw-component-controls-color-outline-default)}input:focus+.mw-checkbox.unselected{background:var(--mw-component-controls-color-bg-focused);border:var(--mw-component-checkbox-selected-border-width-focused) solid var(--mw-component-controls-color-outline-default)}.mw-checkbox-button:active .mw-checkbox.unselected{background:var(--mw-component-controls-color-bg-pressed);border:var(--mw-component-checkbox-selected-border-width-unselected) solid var(--mw-component-controls-color-outline-default)}.mw-checkbox-button .mw-checkbox.selected{background:var(--mw-component-controls-color-bg-selected);border:var(--mw-component-checkbox-selected-border-width-default) solid var(--mw-component-controls-color-outline-default)}.mw-checkbox-button:hover .mw-checkbox.selected{background:var(--mw-component-controls-color-bg-hover);border:var(--mw-component-checkbox-selected-border-width-default) solid var(--mw-component-controls-color-outline-default)}input:focus+.mw-checkbox.selected{background:var(--mw-component-controls-color-bg-focused);border:var(--mw-component-checkbox-selected-border-width-focused) solid var(--mw-component-controls-color-outline-default)}.mw-checkbox-button:active .mw-checkbox.selected{background:var(--mw-component-controls-color-bg-pressed);border:var(--mw-component-checkbox-selected-border-width-default) solid var(--mw-component-controls-color-outline-default)}.mw-checkmark{width:14px;height:11px;display:none}.mw-checkmark.selected{display:unset}.mw-checkbox-label{color:var(--mw-component-controls-color-label-default)}";

const MwCheckboxButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.handleCheck = () => {
      this.checked = !this.checked;
    };
  }
  render() {
    return (h("div", { class: "mw-checkbox-button", onClick: () => this.handleCheck() }, h("input", { type: "checkbox", checked: this.checked, value: this.value, name: this.name }), h("span", { class: `mw-checkbox ${this.checked ? "selected" : "unselected"} ${this.disabled ? "disabled" : ""}` }, h("img", { class: `mw-checkmark ${this.checked ? "selected" : "unselected"}`, src: getAssetPath("../assets/mw-checkbox_icon.svg"), alt: "Checkmark" })), h("span", { class: "mw-checkbox-label" }, h("slot", null))));
  }
  static get assetsDirs() { return ["../assets"]; }
};
MwCheckboxButton.style = mwCheckboxButtonCss;

export { MwCheckboxButton as mw_checkbox_button };
