/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import { r as registerInstance, h, e as Host } from './index-a62bab22.js';

const mwDropdownCss = ":host{display:flex;align-items:center}.wrapper{display:inline-flex;flex-direction:column}.textfield{display:flex;flex-direction:column;min-width:var(--mw-component-size-text-field-min-width);color:var(--mw-component-text-field-fg-default)}.textfield.disabled,.textfield.disabled input{color:var(--mw-component-text-field-fg-disabled)}label{padding:0 var(--mw-component-text-field-padding-text-field-label-vertical-x);font-family:var(--mw-component-text-field-label-font-family);font-weight:var(--mw-component-text-field-label-font-weight);font-size:var(--mw-component-text-field-label-font-size);line-height:var(--mw-component-text-field-label-line-height)}.textfield.inline{flex-direction:row;display:inline-flex;align-items:center}.textfield.inline .input{width:max-content;min-width:var(--mw-component-size-text-field-min-width)}.textfield.inline label{width:var(--mw-component-size-text-field-label-horizontal-width);padding:var(--mw-component-text-field-padding-text-field-label-horizontal)}.input{position:relative;display:flex;align-items:center;border-radius:var(--border-radius-standard-md);padding:var(--mw-component-text-field-padding-text-field-y) var(--mw-component-text-field-padding-text-field-x);background:var(--mw-component-text-field-bg-default);box-shadow:inset 0 0 0 var(--mw-component-text-field-default) var(--mw-component-text-field-border-default)}.input:focus-within{background:var(--mw-component-text-field-bg-default);box-shadow:inset 0 0 0 var(--mw-component-text-field-focused) var(--mw-component-text-field-border-focused)}.input:not(.disabled):hover{background:var(--mw-component-text-field-bg-hover)}.input.has-error{background:var(--mw-component-text-field-bg-error)}.icon{color:var(--mw-component-text-field-fg-icon-default)}.focused{color:var(--mw-component-text-field-fg-icon-focused)}.focused.has-error{color:var(--mw-component-text-field-fg-error)}.icon-start{margin-right:var(--mw-component-text-field-gap-horizontal-gap-within)}.icon-end{margin-left:var(--mw-component-text-field-gap-horizontal-gap-within)}.input input{border:none;padding:0;width:100%;background:transparent;font-family:var(--mw-component-text-field-text-font-family);font-weight:var(--mw-component-text-field-text-font-weight);font-size:var(--mw-component-text-field-text-font-size);line-height:var(--mw-component-text-field-text-line-height)}.input input:focus-visible,.input input:focus{outline:none;border:none;box-shadow:none}.input input::placeholder{color:var(--mw-component-text-field-fg-placeholder)}.helper-text{align-self:flex-end;padding:var(--mw-component-text-field-padding-helper-text-y) 0;color:var(--mw-component-text-field-fg-helper-text);font-family:var(--mw-component-text-field-helper-text-font-family);font-weight:var(--mw-component-text-field-helper-text-font-weight);font-size:var(--mw-component-text-field-helper-text-font-size);line-height:var(--mw-component-text-field-helper-text-line-height)}.has-error{color:var(--mw-component-text-field-fg-error)}.required{color:var(--mw-component-text-field-fg-error)}.dropdown-menu.menu-focused{visibility:visible;z-index:999}.dropdown-menu-wrapper{position:relative}.dropdown-menu{visibility:hidden;position:absolute;width:100%;top:0;box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);padding:12px;background:var(--mw-component-menu-item-bg-default);border-radius:var(--mw-component-menu-item-border-radius);border-width:var(--mw-component-menu-item-border-width-default);box-sizing:border-box}";

const MwDropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.value = undefined;
    this.name = undefined;
    this.label = undefined;
    this.placeholder = undefined;
    this.helperText = undefined;
    this.hasError = false;
    this.inline = false;
    this.required = false;
    this.disabled = false;
  }
  render() {
    return (h(Host, null, h("mw-textfield", { label: this.label, name: this.name, value: this.value, placeholder: this.placeholder, helperText: this.helperText, hasError: this.hasError, inline: this.inline, required: this.required, disabled: this.disabled, readOnly: true }, h("div", { slot: "dropdown-menu" }, h("slot", null)))));
  }
};
MwDropdown.style = mwDropdownCss;

export { MwDropdown as mw_dropdown };
