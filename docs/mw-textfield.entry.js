/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import { r as registerInstance, f as createEvent, h, e as Host, g as getElement } from './index-a62bab22.js';
import { c as classnames } from './index-ef318cfb.js';

const mwTextfieldCss = ":host{display:flex;align-items:center}.wrapper{display:inline-flex;flex-direction:column}.textfield{display:flex;flex-direction:column;min-width:var(--mw-component-size-text-field-min-width);color:var(--mw-component-text-field-fg-default)}.textfield.disabled,.textfield.disabled input{color:var(--mw-component-text-field-fg-disabled)}label{padding:0 var(--mw-component-text-field-padding-text-field-label-vertical-x);font-family:var(--mw-component-text-field-label-font-family);font-weight:var(--mw-component-text-field-label-font-weight);font-size:var(--mw-component-text-field-label-font-size);line-height:var(--mw-component-text-field-label-line-height)}.textfield.inline{flex-direction:row;display:inline-flex;align-items:center}.textfield.inline .input{width:max-content;min-width:var(--mw-component-size-text-field-min-width)}.textfield.inline label{width:var(--mw-component-size-text-field-label-horizontal-width);padding:var(--mw-component-text-field-padding-text-field-label-horizontal)}.textfield.read-only,.textfield.read-only .input input{cursor:pointer}.input{display:flex;align-items:center;border-radius:var(--border-radius-standard-md);padding:var(--mw-component-text-field-padding-text-field-y) var(--mw-component-text-field-padding-text-field-x);background:var(--mw-component-text-field-bg-default);box-shadow:inset 0 0 0 var(--mw-component-text-field-default) var(--mw-component-text-field-border-default)}.input:focus-within{background:var(--mw-component-text-field-bg-default);box-shadow:inset 0 0 0 var(--mw-component-text-field-focused) var(--mw-component-text-field-border-focused)}.input:not(.disabled):hover{background:var(--mw-component-text-field-bg-hover)}.input.has-error{background:var(--mw-component-text-field-bg-error)}.input .icon{color:var(--mw-component-text-field-fg-icon-default)}.focused{color:var(--mw-component-text-field-fg-icon-focused)}.focused.has-error{color:var(--mw-component-text-field-fg-error)}.icon-start{margin-right:var(--mw-component-text-field-gap-horizontal-gap-within)}.icon-end{margin-left:var(--mw-component-text-field-gap-horizontal-gap-within)}.input input{border:none;padding:0;width:100%;background:transparent;font-family:var(--mw-component-text-field-text-font-family);font-weight:var(--mw-component-text-field-text-font-weight);font-size:var(--mw-component-text-field-text-font-size);line-height:var(--mw-component-text-field-text-line-height)}.input input:focus-visible,.input input:focus{outline:none;border:none;box-shadow:none}.input input::placeholder{color:var(--mw-component-text-field-fg-placeholder)}.helper-text{align-self:flex-end;padding:var(--mw-component-text-field-padding-helper-text-y) 0;color:var(--mw-component-text-field-fg-helper-text);font-family:var(--mw-component-text-field-helper-text-font-family);font-weight:var(--mw-component-text-field-helper-text-font-weight);font-size:var(--mw-component-text-field-helper-text-font-size);line-height:var(--mw-component-text-field-helper-text-line-height)}.has-error{color:var(--mw-component-text-field-fg-error)}.required{color:var(--mw-component-text-field-fg-error)}.dropdown-menu.menu-focused{visibility:visible;z-index:999}.dropdown-menu-wrapper{position:relative}.dropdown-menu{visibility:hidden;position:absolute;width:100%;top:0;box-sizing:border-box}";

const MwTextfield = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChanged = createEvent(this, "valueChanged", 5);
    this.onValueChange = (event) => {
      this.value = event.target.value;
      this.valueChanged.emit(this.value);
    };
    this.onFocus = () => {
      this.inputElement.focus();
      this.focused = true;
    };
    this.onBlur = () => {
      this.focused = false;
    };
    this.type = "text";
    this.value = undefined;
    this.name = undefined;
    this.label = undefined;
    this.placeholder = undefined;
    this.helperText = undefined;
    this.hasError = false;
    this.inline = false;
    this.required = false;
    this.disabled = false;
    this.readOnly = false;
    this.focused = false;
  }
  componentWillLoad() {
    this.hasIconStartSlot = !!this.hostElement.querySelector("[slot='icon-start']");
    this.hasIconEndSlot = !!this.hostElement.querySelector("[slot='icon-end']");
    this.hasDropDownMenu = !!this.hostElement.querySelector("[slot='dropdown-menu']");
  }
  render() {
    return (h(Host, null, h("div", { class: "wrapper" }, h("div", { class: classnames("textfield", {
        "inline": this.inline,
        "has-error": this.hasError,
        "disabled": this.disabled,
        "read-only": this.readOnly,
      }) }, !!this.label && (h("label", { htmlFor: this.name, class: "label" }, this.label, this.required && h("span", { class: "required" }, "*"))), h("div", null, h("div", { onClick: this.onFocus, class: classnames("input", { "has-error": this.hasError, "disabled": this.disabled }) }, h("span", { class: classnames({ "icon-start": this.hasIconStartSlot, "focused": this.focused, "has-error": this.hasError }) }, h("slot", { name: "icon-start" })), h("input", { ref: el => (this.inputElement = el), placeholder: this.placeholder, class: classnames({
        "has-error": this.hasError,
      }), onFocus: this.onFocus, onBlur: this.onBlur, onInput: this.onValueChange, onChange: this.onValueChange, type: this.type, name: this.name, value: this.value, disabled: this.disabled, readOnly: this.readOnly }), h("span", { class: classnames({ "icon-end": this.hasIconEndSlot, "focused": this.focused, "has-error": this.hasError }) }, h("slot", { name: "icon-end" })), this.hasDropDownMenu && (h("span", { class: classnames({
        "icon-end": this.hasDropDownMenu,
        "focused": this.focused,
        "has-error": this.hasError,
      }) }, h("mw-icon", { icon: this.focused ? "keyboard_arrow_up" : "keyboard_arrow_down" })))), this.hasDropDownMenu && (h("div", { class: classnames({ "dropdown-menu-wrapper": this.hasDropDownMenu }) }, h("div", { class: `dropdown-menu ${this.focused && "menu-focused"}` }, h("mw-menu-list", null, h("slot", { name: "dropdown-menu" })))))), this.helperText && !this.inline && (h("span", { class: classnames("helper-text", {
        "has-error": this.hasError,
      }) }, this.helperText))), this.helperText && this.inline && (h("span", { class: classnames("helper-text", {
        "has-error": this.hasError,
      }) }, this.helperText)))));
  }
  get hostElement() { return getElement(this); }
};
MwTextfield.style = mwTextfieldCss;

export { MwTextfield as mw_textfield };
