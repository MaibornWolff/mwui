/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import { r as registerInstance, f as createEvent, h, e as Host } from './index-a62bab22.js';

const mwSwitchCss = ":host{display:flex;justify-content:flex-start;align-items:center}.label{font-size:16px;font-family:'Poppins', sans-serif;margin-left:var(--mw-component-controls-with-label-gap);color:var(--mw-component-controls-color-label-default)}.switch{position:relative;display:inline-block;width:var(--mw-component-size-toggle-switch-default-w);height:var(--mw-component-size-toggle-switch-default-h)}.switch input{opacity:0;width:0;height:0}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:var(--mw-component-controls-color-bg-unselected);-webkit-transition:0.4s;transition:0.4s}input:checked+.slider:before{position:absolute;content:'';height:24px;width:24px;left:4px;bottom:4px;background-color:var(--mw-component-controls-color-fg-default);-webkit-transition:0.4s;transition:0.4s;-webkit-transform:translateX(20px);-ms-transform:translateX(20px);transform:translateX(20px)}input:not(:checked)+.slider:before{position:absolute;content:'';height:16px;width:16px;left:8px;bottom:8px;background-color:var(--mw-component-controls-color-fg-off);-webkit-transition:0.4s;transition:0.4s}input:active+.slider:before{position:absolute;content:'';height:28px;width:28px;left:2px;bottom:2px;background-color:var(--mw-component-controls-color-fg-default);-webkit-transition:0.4s;transition:0.4s}input:not(:checked):not(:disabled):active+.slider:before{position:absolute;content:'';height:28px;width:28px;left:2px;bottom:2px;background-color:var(--mw-component-controls-color-fg-off);-webkit-transition:0.4s;transition:0.4s}input:disabled+.slider:before{position:absolute;content:'';height:16px;width:16px;left:8px;bottom:8px;background-color:var(--mw-component-controls-color-fg-disabled);-webkit-transition:0.4s;transition:0.4s}input:checked+.slider{background-color:var(--mw-component-controls-color-bg-selected)}input:disabled+.slider{background-color:var(--mw-component-controls-color-bg-disabled)}input:focus:not(:active):not(:disabled)+.slider{box-shadow:inset 0 0 0 var(--mw-component-controls-border-width-focused) var(--mw-component-controls-color-outline-default);background-color:var(--mw-component-controls-color-bg-focused)}input:hover:not(:disabled)+.slider{background-color:var(--mw-component-controls-color-bg-hover)}input:active:not(:disabled)+.slider{background-color:var(--mw-component-controls-color-bg-pressed)}input:not(:checked):not(:disabled)+.slider{box-shadow:inset 0 0 0 var(--mw-component-controls-border-width-unselected) var(--mw-component-controls-color-outline-default)}input:not(:checked):disabled+.slider{box-shadow:inset 0 0 0 var(--mw-component-controls-border-width-unselected) var(--mw-component-controls-color-outline-disabled)}.slider.round{border-radius:34px;-webkit-border-radius:34px}.slider.round:before{border-radius:50%;-webkit-border-radius:50%}";

const MwSwitch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.emitter = createEvent(this, "emitter", 4);
    this.testId = undefined;
    this.disabled = undefined;
    this.label = undefined;
    this.onText = undefined;
    this.offText = undefined;
    this.checked = false;
  }
  toggleSwitch(event) {
    event.target.blur();
    event.path[1].blur();
    this.checked = this.checkbox.checked;
    this.emitter.emit(event);
  }
  componentWillLoad() {
    this.hasLabel = !!this.label;
    this.hasOnOffLabel = !!this.onText && !!this.offText;
  }
  render() {
    return (h(Host, null, h("label", { "test-id": this.testId, onClick: this.toggleSwitch.bind(this), class: "switch" }, h("input", { disabled: this.disabled, ref: (el) => (this.checkbox = el), type: "checkbox", checked: this.checked }), h("span", { class: "slider round" })), this.hasLabel && h("span", { class: "label" }, this.label), this.hasOnOffLabel && h("span", { class: "label" }, this.checked ? this.onText : this.offText)));
  }
};
MwSwitch.style = mwSwitchCss;

export { MwSwitch as mw_switch };
