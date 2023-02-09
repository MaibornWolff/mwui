/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import { r as registerInstance, h, g as getElement } from './index-a62bab22.js';

const mwRadioCss = ".mw-radio-container{display:flex;position:relative;cursor:pointer;align-items:center;padding-top:var(--mw-component-controls-with-label-padding-y);padding-bottom:var(--mw-component-controls-with-label-padding-y);padding-right:var(--mw-component-controls-with-label-padding-r);padding-left:var(--mw-component-controls-with-label-padding-l);gap:var(--mw-component-controls-with-label-gap)}.mw-radio-container .mw-radio-label{color:var(--mw-component-controls-color-label-default);font-size:var(--mw-semantic-font-font-size-body-regular);line-height:var(--mw-semantic-font-line-height-body-regular);font-family:var(--mw-core-font-font-families-body);font-weight:var(--mw-core-font-weight-body-regular)}.mw-radio-container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.mw-radio{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;display:flex;justify-content:center;align-items:center;height:var(--mw-component-size-controls-radiobutton-outline);width:var(--mw-component-size-controls-radiobutton-outline);border:var(--mw-component-controls-border-width-unselected) solid var(--mw-component-controls-color-outline-default);border-radius:var(--border-radius-standard-circle)}.mw-radio-container input:checked~.mw-radio{border-width:var(--mw-component-controls-border-width-selected);background-color:var(--mw-component-controls-color-bg-selected)}.mw-radio-container input:checked~.mw-radio:after{content:'';border-radius:var(--border-radius-standard-circle);height:var(--mw-component-size-controls-radiobutton-fill);width:var(--mw-component-size-controls-radiobutton-fill);background-color:var(--mw-component-controls-color-fg-default)}.mw-radio-container:hover input:checked~.mw-radio{background-color:var(--mw-component-controls-color-bg-hover)}.mw-radio-container:hover input~.mw-radio{background-color:var(--mw-component-controls-color-bg-hover)}.mw-radio-container:active input~.mw-radio{background-color:var(--mw-component-controls-color-bg-pressed)}.mw-radio-container:active input:checked~.mw-radio{background-color:var(--mw-component-controls-color-bg-pressed)}.mw-radio-container input:disabled~.mw-radio{border:var(--mw-component-controls-border-width-unselected) solid var(--mw-component-controls-color-outline-disabled);background-color:var(--mw-component-controls-color-bg-unselected)}.mw-radio-container:has(input:disabled){cursor:default}.mw-radio-container:has(input:disabled) .mw-radio-label{color:var(--mw-component-controls-color-label-disabled)}.mw-radio-container input:disabled:checked~.mw-radio{background-color:var(--mw-component-controls-color-bg-disabled);border-width:var(--mw-component-controls-border-width-selected)}.mw-radio-container input:disabled:checked~.mw-radio:after{background-color:var(--mw-component-controls-color-fg-disabled)}.mw-radio-container input:focus~.mw-radio{border:var(--mw-component-controls-border-width-focused) solid var(--mw-component-controls-color-outline-default)}.mw-radio-container input:focus:checked~.mw-radio{background-color:var(--mw-component-controls-color-bg-focused)}";

const MwRadio = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.disabled = undefined;
    this.checked = undefined;
    this.value = undefined;
    this.name = undefined;
    this.testId = undefined;
    this.label = undefined;
  }
  render() {
    return (h("label", { "test-id": this.testId, class: "mw-radio-container" }, h("input", { id: "radio-input", type: "radio", value: this.value, name: this.name, checked: this.checked, disabled: this.disabled }), h("span", { class: "mw-radio" }), h("span", { class: "mw-radio-label" }, this.label)));
  }
  get hostElement() { return getElement(this); }
};
MwRadio.style = mwRadioCss;

export { MwRadio as mw_radio };
