'use strict';

var index = require('./index-39b5736f.js');

/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */

/**
 * This is incomplete and should be extended when new roles are needed
 */
var AriaRolesEnum;
(function (AriaRolesEnum) {
  AriaRolesEnum["NAVIGATION"] = "navigation";
  AriaRolesEnum["TOOLBAR"] = "toolbar";
  AriaRolesEnum["COMBOBOX"] = "combobox";
})(AriaRolesEnum || (AriaRolesEnum = {}));

const mwAppBarCss = ":host{display:block}.mw-app-bar{z-index:1000;box-sizing:border-box;width:100%;display:flex;flex-flow:row;justify-content:space-between;align-items:center;height:var(--mw-component-size-header-height);background:var(--mw-component-header-bg-default);color:var(--mw-component-header-fg-default);padding:0 var(--mw-component-header-padding-x)}.mw-app-bar.fixed{position:fixed;top:0;left:0}.mw-app-bar.absolute{position:absolute;top:0;left:0}.mw-app-bar.sticky{position:sticky;top:0;left:0}::slotted(*){display:flex;flex-flow:row;align-items:center;gap:var(--mw-component-header-gap-within)}slot[name=\"start\"]::slotted(*){justify-content:start}slot[name=\"center\"]::slotted(*){justify-content:center}slot[name=\"end\"]::slotted(*){justify-content:end}";

const MwAppBar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ariaRole = AriaRolesEnum.NAVIGATION;
    this.position = "relative";
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: `mw-app-bar ${this.position}`, role: this.ariaRole }, index.h("slot", { name: "start" }), index.h("slot", { name: "center" }), index.h("slot", { name: "end" }))));
  }
};
MwAppBar.style = mwAppBarCss;

const mwAppBarTitleCss = ":host .mw-app-bar-title{color:var(--mw-component-header-fg-default);font-family:var(--mw-component-header-title-font-family);font-weight:var(--mw-component-header-title-font-weight);line-height:var(--mw-component-header-title-line-height);font-size:var(--mw-component-header-title-font-size)}";

const MwAppBarTitle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "mw-app-bar-title" }, index.h("slot", null))));
  }
};
MwAppBarTitle.style = mwAppBarTitleCss;

const mwAutocompleteCss = ":host{display:flex;align-items:center}.wrapper{display:inline-flex;flex-direction:column;width:100%}mw-label{white-space:nowrap}mw-popover{width:100%}.autocomplete{display:flex;flex-direction:column;min-width:var(--mw-component-size-text-field-min-width);color:var(--mw-component-text-field-fg-default)}.autocomplete.disabled,.autocomplete.disabled input{color:var(--mw-component-text-field-fg-disabled)}.autocomplete.inline{flex-direction:row;display:flex;align-items:center}.autocomplete.inline .input{min-width:var(--mw-component-size-text-field-min-w);width:100%}.autocomplete.inline label{display:block;width:var(--mw-component-size-text-field-label-horizontal-width);padding:var(--mw-component-text-field-padding-label-horizontal)}.autocomplete.read-only,.autocomplete.read-only .input input{cursor:pointer}.input{display:flex;align-items:center;border-radius:var(--border-radius-standard-md);padding:var(--mw-component-text-field-padding-text-field-y) var(--mw-component-text-field-padding-text-field-x);background:var(--mw-component-text-field-bg-default);box-shadow:inset 0 0 0 var(--mw-component-text-field-default) var(--mw-component-text-field-border-default)}.input .icon-start{margin-right:var(--mw-component-text-field-gap-horizontal-gap-within)}.input .icon-end{margin-left:var(--mw-component-text-field-gap-horizontal-gap-within)}.input.has-error{background:var(--mw-component-text-field-bg-error)}.input:focus-within{background:var(--mw-component-text-field-bg-hover);box-shadow:inset 0 0 0 var(--mw-component-text-field-focused) var(--mw-component-text-field-border-focused)}.input:not(.disabled):hover{background:var(--mw-component-text-field-bg-hover)}.input .icon{color:var(--mw-component-text-field-fg-icon-default)}.input .focused{color:var(--mw-component-text-field-fg-icon-focused)}.input .focused.has-error{color:var(--mw-component-text-field-fg-error)}.input input{border:none;padding:0;width:100%;background:transparent;font-family:var(--mw-component-text-field-text-font-family);font-weight:var(--mw-component-text-field-text-font-weight);font-size:var(--mw-component-text-field-text-font-size);line-height:var(--mw-component-text-field-text-line-height)}.input input:focus-visible,.input input:focus{outline:transparent;border:none;box-shadow:none}.input input::placeholder{color:var(--mw-component-text-field-fg-placeholder)}.has-error{color:var(--mw-component-text-field-fg-error)}.no-suggestions,.maximum-reached{flex-direction:column;justify-content:center;gap:var(--mw-component-menu-item-gap-between);padding:0 12px;height:var(--mw-component-size-menu-item-default-h);background:var(--mw-component-menu-item-bg-default);border:var(--mw-component-menu-item-border-width-default) solid var(--mw-component-menu-item-border-default);border-radius:var(--mw-component-menu-item-border-radius);color:var(--mw-component-menu-item-fg-disabled);font-family:var(--mw-component-menu-item-title-font-family);font-weight:var(--mw-component-menu-item-title-font-weight);line-height:var(--mw-component-menu-item-title-line-height);font-size:var(--mw-component-menu-item-title-font-size)}.no-suggestions{display:none}.maximum-reached{display:flex}.helper-text-container{display:flex;justify-content:right;gap:4px}";

const MwAutocomplete = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.valueChanged = index.createEvent(this, "selectionChanged", 5);
    this.onInputChange = (event) => {
      this.filterDropdownOptions(event.target.value);
      this.isDropdownOpen = true;
    };
    this.onFocus = () => {
      if (!this.disabled)
        this.focused = true;
    };
    this.onBlur = () => {
      this.focused = false;
    };
    this.addMultiValue = (value) => {
      if (!this.multiple || value.trim().length === 0) {
        return;
      }
      this.selection = [...this.selection, value];
      this.removeDropdownFilter();
    };
    this.setItemDisabledState = (selection) => {
      this.hostElement.querySelectorAll("mw-menu-item").forEach(item => {
        const isDisabled = selection.includes(item.getAttribute("value"));
        item.setAttribute("disabled", `${isDisabled}`);
      });
    };
    this.handleChipListValueChange = (event) => {
      this.selection = event.detail;
    };
    this.filterDropdownOptions = (value) => {
      let hasNoSuggestions = true;
      this.hostElement.querySelectorAll("mw-menu-item").forEach(item => {
        if (item.value.toLowerCase().includes(value.toString().toLowerCase())) {
          item.style.display = "unset";
          hasNoSuggestions = false;
        }
        else {
          item.style.display = "none";
        }
      });
      if (hasNoSuggestions) {
        this.noSuggestionsDisclaimer.style.display = "flex";
      }
      else {
        this.noSuggestionsDisclaimer.style.display = "none";
      }
    };
    this.removeDropdownFilter = () => {
      this.hostElement.querySelectorAll("mw-menu-item").forEach(item => {
        item.style.display = "unset";
      });
    };
    this.canAddToValues = () => {
      var _a;
      return !this.maximum || ((_a = this.selection) === null || _a === void 0 ? void 0 : _a.length) < this.maximum;
    };
    this.type = "text";
    this.value = undefined;
    this.name = undefined;
    this.label = undefined;
    this.placeholder = undefined;
    this.helperText = undefined;
    this.hasError = false;
    this.noSuggestionsText = "No suggestions found.";
    this.inline = false;
    this.required = false;
    this.disabled = false;
    this.readOnly = false;
    this.multiple = false;
    this.maximum = undefined;
    this.maximumText = "You reached the maximum number of options.";
    this.optionCounter = false;
    this.selection = [];
    this.focused = false;
    this.isDropdownOpen = false;
  }
  onSelectedChange(selection) {
    if (!this.canAddToValues()) {
      this.hostElement.querySelectorAll("mw-menu-item").forEach(item => {
        item.setAttribute("disabled", `true`);
      });
    }
    else {
      this.setItemDisabledState(selection);
    }
    this.valueChanged.emit();
  }
  clickEmitterHandler(event) {
    const emittedValue = event.target.getAttribute("value");
    if (this.multiple) {
      this.addMultiValue(emittedValue);
    }
    else {
      this.value = emittedValue;
    }
  }
  stateEmitterHandler(event) {
    this.isDropdownOpen = event.detail;
  }
  componentWillLoad() {
    this.hasIconStartSlot = !!this.hostElement.querySelector("[slot='icon-start']");
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { tabindex: "0", class: "wrapper", role: AriaRolesEnum.COMBOBOX }, index.h("div", { class: {
        "autocomplete": true,
        "inline": this.inline,
        "has-error": this.hasError,
        "disabled": this.disabled,
      } }, index.h("mw-label", { name: this.name, label: this.label, required: this.required }), index.h("mw-popover", { noPadding: true, closeOnClick: true, open: this.isDropdownOpen, dismissable: this.isDropdownOpen, disabled: this.disabled }, this.multiple ? (index.h("mw-chip-input", { name: this.name, placeholder: this.placeholder, disabled: this.disabled, hasError: this.hasError, maximum: this.maximum, selectedChips: this.selection, onFocus: this.onFocus, onBlur: this.onBlur, onValueChanged: this.handleChipListValueChange, onInput: this.onInputChange, slot: "anchor" }, this.hasIconStartSlot && (index.h("div", { class: {
        "focused": this.focused,
        "has-error": this.hasError,
      }, slot: "icon-start" }, index.h("slot", { name: "icon-start" }))), index.h("mw-icon", { slot: "icon-end", icon: this.isDropdownOpen ? "keyboard_arrow_up" : "keyboard_arrow_down", size: "medium" }))) : (index.h("mw-textfield", { disabled: this.disabled, type: this.type, value: this.value, name: this.name, hasError: this.hasError, placeholder: this.placeholder, onChange: this.onInputChange, onInput: this.onInputChange, slot: "anchor" }, this.hasIconStartSlot && (index.h("div", { class: {
        "focused": this.focused,
        "has-error": this.hasError,
      }, slot: "icon-start" }, index.h("slot", { name: "icon-start" }))), index.h("span", { class: {
        "focused": this.focused,
        "has-error": this.hasError,
      }, slot: "icon-end" }, index.h("mw-icon", { icon: this.isDropdownOpen ? "keyboard_arrow_up" : "keyboard_arrow_down", size: "medium" })))), index.h("div", { slot: "content" }, this.canAddToValues() ? index.h("slot", { name: "dropdown-menu" }) : index.h("div", { class: "maximum-reached" }, this.maximumText), index.h("div", { ref: el => (this.noSuggestionsDisclaimer = el), class: "no-suggestions" }, this.noSuggestionsText)))), index.h("div", { class: "helper-text-container" }, index.h("mw-helper-text", { helperText: this.helperText, hasError: this.hasError }), this.maximum && this.optionCounter && index.h("mw-helper-text", { helperText: `${this.selection.length}/${this.maximum}` })))));
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "selection": ["onSelectedChange"]
  }; }
};
MwAutocomplete.style = mwAutocompleteCss;

var SizeEnum;
(function (SizeEnum) {
  SizeEnum["X_LARGE"] = "x-large";
  SizeEnum["LARGE"] = "large";
  SizeEnum["MEDIUM"] = "medium";
  SizeEnum["SMALL"] = "small";
  SizeEnum["X_SMALL"] = "x-small";
})(SizeEnum || (SizeEnum = {}));

const mwAvatarCss = ":host{display:block}.avatar{position:relative;display:flex;align-items:center;justify-content:center;border-radius:50%;-webkit-border-radius:50%;background:var(--mw-component-avatars-color-bg-default);color:var(--mw-component-avatars-color-fg-default)}.avatar.large{width:var(--mw-component-size-avatars-lg);height:var(--mw-component-size-avatars-lg)}.avatar.medium{width:var(--mw-component-size-avatars-md);height:var(--mw-component-size-avatars-md)}.avatar.small{width:var(--mw-component-size-avatars-sm);height:var(--mw-component-size-avatars-sm)}.avatar.x-small{width:var(--mw-component-size-avatars-xs);height:var(--mw-component-size-avatars-xs)}.avatar img{position:absolute;border-radius:50%;-webkit-border-radius:50%}.avatar.large img{width:var(--mw-component-size-avatars-lg);height:var(--mw-component-size-avatars-lg)}.avatar.medium img{width:var(--mw-component-size-avatars-md);height:var(--mw-component-size-avatars-md)}.avatar.small img{width:var(--mw-component-size-avatars-sm);height:var(--mw-component-size-avatars-sm)}.avatar.x-small img{width:var(--mw-component-size-avatars-xs);height:var(--mw-component-size-avatars-xs)}.fallback{position:absolute}.fallback.large{font-family:var(--mw-component-avatars-typo-lg-font-family);font-size:var(--mw-component-avatars-typo-lg-font-size);font-weight:var(--mw-component-avatars-typo-lg-font-weight);line-height:var(--mw-component-avatars-typo-lg-line-height)}.fallback.medium{font-family:var(--mw-component-avatars-typo-md-font-family);font-size:var(--mw-component-avatars-typo-md-font-size);font-weight:var(--mw-component-avatars-typo-md-font-weight);line-height:var(--mw-component-avatars-typo-md-line-height)}.fallback.small{font-family:var(--mw-component-avatars-typo-sm-font-family);font-size:var(--mw-component-avatars-typo-sm-font-size);font-weight:var(--mw-component-avatars-typo-sm-font-weight);line-height:var(--mw-component-avatars-typo-sm-line-height)}.fallback.x-small{font-family:var(--mw-component-avatars-typo-xs-font-family);font-size:var(--mw-component-avatars-typo-xs-font-size);font-weight:var(--mw-component-avatars-typo-xs-font-weight);line-height:var(--mw-component-avatars-typo-xs-line-height)}.icon{position:absolute}";

const MwAvatar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.testId = undefined;
    this.src = undefined;
    this.icon = undefined;
    this.alt = undefined;
    this.size = SizeEnum.MEDIUM;
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { "test-id": this.testId, class: `avatar ${this.size}` }, this.alt && index.h("div", { class: `fallback ${this.size}` }, this.alt.substring(0, 1)), this.src && index.h("img", { src: this.src, alt: this.alt }), this.icon && index.h("mw-icon", { icon: this.icon, size: this.size }))));
  }
};
MwAvatar.style = mwAvatarCss;

var ButtonSizeEnum;
(function (ButtonSizeEnum) {
  ButtonSizeEnum["X_LARGE"] = "x-large";
  ButtonSizeEnum["LARGE"] = "large";
  ButtonSizeEnum["MEDIUM"] = "medium";
  ButtonSizeEnum["SMALL"] = "small";
})(ButtonSizeEnum || (ButtonSizeEnum = {}));

var ButtonVariantEnum;
(function (ButtonVariantEnum) {
  ButtonVariantEnum["FILLED"] = "filled";
  ButtonVariantEnum["OUTLINE"] = "outline";
  ButtonVariantEnum["GHOST"] = "ghost";
  ButtonVariantEnum["GHOST_INVERTED"] = "ghost-inverted";
})(ButtonVariantEnum || (ButtonVariantEnum = {}));

var TargetEnum;
(function (TargetEnum) {
  TargetEnum["BLANK"] = "_blank";
  TargetEnum["SELF"] = "_self";
  TargetEnum["PARENT"] = "_parent";
  TargetEnum["TOP"] = "_top";
})(TargetEnum || (TargetEnum = {}));

const mwButtonCss = "a{text-decoration:none}.mw-button{display:flex;align-items:center;justify-content:center;appearance:none;text-decoration:none;white-space:nowrap;overflow:hidden;border-radius:var(--mw-component-button-border-radius-default);min-width:var(--mw-component-size-button-filled-outline-min-w);letter-spacing:var(--mw-core-letter-spacing-buttons);transition:all 0.2s ease-out}.mw-button--small{font-weight:var(--mw-component-button-label-sm-font-weight);padding:var(--mw-component-button-sm-padding-y) var(--mw-component-button-sm-padding-x);font-family:var(--mw-component-button-label-sm-font-family);line-height:var(--mw-component-button-label-sm-line-height);font-size:var(--mw-component-button-label-sm-font-size)}.mw-button--medium{font-weight:var(--mw-component-button-label-md-font-weight);padding:var(--mw-component-button-md-padding-y) var(--mw-component-button-md-padding-x);font-family:var(--mw-component-button-label-md-font-family);line-height:var(--mw-component-button-label-md-line-height);font-size:var(--mw-component-button-label-md-font-size)}.mw-button--large{font-weight:var(--mw-component-button-label-lg-font-weight);padding:var(--mw-component-button-lg-padding-y) var(--mw-component-button-lg-padding-x);font-family:var(--mw-component-button-label-lg-font-family);line-height:var(--mw-component-button-label-lg-line-height);font-size:var(--mw-component-button-label-lg-font-size)}.mw-button--x-large{font-weight:var(--mw-component-button-label-xl-font-weight);padding:var(--mw-component-button-xl-padding-y) var(--mw-component-button-xl-padding-x);font-family:var(--mw-component-button-label-xl-font-family);line-height:var(--mw-component-button-label-xl-line-height);font-size:var(--mw-component-button-label-xl-font-size)}.mw-button--filled{border:var(--mw-component-button-border-width-filled-default);color:var(--mw-component-button-filled-color-fg-default);background-color:var(--mw-component-button-filled-color-bg-default)}.mw-button--filled:hover{background-color:var(--mw-component-button-filled-color-bg-hover);color:var(--mw-component-button-filled-color-fg-hover)}.mw-button--filled:focus{box-shadow:inset 0 0 0 var(--mw-component-button-border-width-filled-focused) var(--mw-component-button-filled-color-outline-focused);background-color:var(--mw-component-button-filled-color-bg-focused);color:var(--mw-component-button-filled-color-fg-focused)}.mw-button--filled:active{background-color:var(--mw-component-button-filled-color-bg-pressed);color:var(--mw-component-button-filled-color-fg-pressed)}.mw-button--filled:disabled{background-color:var(--mw-component-button-filled-color-bg-disabled);color:var(--mw-component-button-filled-color-fg-disabled)}.mw-button--outline{border:0;box-shadow:inset 0 0 0 var(--mw-component-button-border-width-outline-default) var(--mw-component-button-outline-ghost-color-border-default);color:var(--mw-component-button-outline-ghost-color-fg-default);background-color:var(--mw-component-button-outline-ghost-color-bg-default)}.mw-button--outline:hover{box-shadow:inset 0 0 0 var(--mw-component-button-border-width-outline-default) var(--mw-component-button-outline-ghost-color-border-hover);color:var(--mw-component-button-outline-ghost-color-fg-hover)}.mw-button--outline:focus{box-shadow:inset 0 0 0 var(--mw-component-button-border-width-outline-default) var(--mw-component-button-outline-ghost-color-border-focused);color:var(--mw-component-button-outline-ghost-color-fg-focused)}.mw-button--outline:active{box-shadow:inset 0 0 0 var(--mw-component-button-border-width-outline-default) var(--mw-component-button-outline-ghost-color-border-pressed);color:var(--mw-component-button-outline-ghost-color-fg-pressed)}.mw-button--outline:disabled{box-shadow:inset 0 0 0 var(--mw-component-button-border-width-outline-default) var(--mw-component-button-outline-ghost-color-border-disabled);color:var(--mw-component-button-outline-ghost-color-fg-disabled)}.mw-button--ghost{outline:none;box-shadow:none;border:none;color:var(--mw-component-button-outline-ghost-color-fg-default);background-color:var(--mw-component-button-outline-ghost-color-bg-default)}.mw-button--ghost:hover{color:var(--mw-component-button-outline-ghost-color-fg-hover)}.mw-button--ghost:focus{box-shadow:inset 0 0 0 var(--mw-component-button-border-width-outline-focused) var(--mw-component-button-outline-ghost-color-border-focused);color:var(--mw-component-button-outline-ghost-color-fg-focused)}.mw-button--ghost:active{box-shadow:none;color:var(--mw-component-button-outline-ghost-color-fg-pressed)}.mw-button--ghost:disabled{box-shadow:none;color:var(--mw-component-button-outline-ghost-color-fg-disabled)}.mw-button--ghost-inverted{outline:none;box-shadow:none;border:none;color:var(--mw-component-button-outline-ghost-color-fg-inverted);background-color:var(--mw-component-button-outline-ghost-color-bg-default)}.mw-button--ghost-inverted:hover{color:var(--mw-component-button-outline-ghost-color-fg-hover)}.mw-button--ghost-inverted:focus{box-shadow:none;color:var(--mw-component-button-outline-ghost-color-fg-focused)}.mw-button--ghost-inverted:active{box-shadow:none;color:var(--mw-component-button-outline-ghost-color-fg-pressed)}.mw-button--ghost-inverted:disabled{box-shadow:none;color:var(--mw-component-button-outline-ghost-color-fg-disabled)}.mw-button--icon-only{min-width:0}.mw-button--icon-only--small{padding:var(--mw-component-button-sm-padding-icon)}.mw-button--icon-only--medium{padding:var(--mw-component-button-md-padding-icon)}.mw-button--icon-only--large{padding:var(--mw-component-button-lg-padding-icon)}.mw-button--icon-only--x-large{padding:var(--mw-component-button-xl-padding-icon)}.mw-button .mw-button-icon-start--small{margin-right:var(--mw-component-button-sm-gap-between)}.mw-button .mw-button-icon-start--medium{margin-right:var(--mw-component-button-md-gap-between)}.mw-button .mw-button-icon-start--large{margin-right:var(--mw-component-button-lg-gap-between)}.mw-button .mw-button-icon-start--x-large{margin-right:var(--mw-component-button-xl-gap-between)}.mw-button .mw-button-icon-end--small{margin-left:var(--mw-component-button-sm-gap-between)}.mw-button .mw-button-icon-end--medium{margin-left:var(--mw-component-button-md-gap-between)}.mw-button .mw-button-icon-end--large{margin-left:var(--mw-component-button-lg-gap-between)}.mw-button .mw-button-icon-end--x-large{margin-left:var(--mw-component-button-xl-gap-between)}";

const MwButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.clickEmitter = index.createEvent(this, "clickEmitter", 4);
    this.handleClick = (event) => {
      if (this.disabled) {
        return;
      }
      event.target.blur();
      if (event.path && Array.isArray(event.path)) {
        event.path[1].blur();
      }
      this.clickEmitter.emit();
    };
    this.testId = undefined;
    this.disabled = undefined;
    this.label = undefined;
    this.variant = ButtonVariantEnum.FILLED;
    this.size = ButtonSizeEnum.MEDIUM;
    this.href = undefined;
    this.target = TargetEnum.SELF;
  }
  componentWillLoad() {
    this.hasIconStartSlot = !!this.hostElement.querySelector("[slot='icon-start']");
    this.hasIconEndSlot = !!this.hostElement.querySelector("[slot='icon-end']");
    this.hasLabel = !!this.label;
  }
  render() {
    const button = (index.h("button", { part: "button", disabled: this.disabled, onClick: this.handleClick, title: this.label, class: {
        "mw-button": true,
        "mw-button--icon-only": !this.label,
        [`mw-button--${this.variant}`]: true,
        [`mw-button--${this.size}`]: true,
      }, "test-id": this.testId, type: "button" }, this.hasIconStartSlot && (index.h("span", { class: {
        "mw-button-icon-start": true,
        [`mw-button-icon-start--${this.size}`]: this.hasLabel,
      } }, index.h("slot", { name: "icon-start" }))), index.h("span", null, this.label), this.hasIconEndSlot && (index.h("span", { class: {
        "mw-button-icon-end": true,
        [`mw-button-icon-end--${this.size}`]: this.hasLabel,
      } }, index.h("slot", { name: "icon-end" })))));
    return index.h(index.Host, null, this.href ? index.h("a", { href: this.href }, button) : button);
  }
  get hostElement() { return index.getElement(this); }
};
MwButton.style = mwButtonCss;

const mwCardCss = ":host{display:block}.card{max-width:600px;width:100%;overflow-wrap:break-word;display:flex;flex-direction:column;justify-content:space-between;gap:var(--mw-component-card-padding-components-y-default);padding-top:var(--mw-component-card-padding-components-y-default);padding-bottom:var(--mw-component-card-padding-components-y-default);background:var(--mw-component-card-bg-default);border-radius:var(--mw-component-card-border-radius);-webkit-border-radius:var(--mw-component-card-border-radius);-moz-border-radius:var(--mw-component-card-border-radius);color:var(--mw-component-card-fg-default);border:none;height:100%;box-sizing:border-box;transition:all 0.4 ease}.card:first-child{margin-top:0}.card.muted{color:var(--mw-component-card-fg-muted)}.card.outlined{border:var(--mw-component-card-border-width-outlined) solid var(--mw-component-card-border-outlined)}.card.elevated{box-shadow:var(--mw-component-card-shadow-elevated-0-x) var(--mw-component-card-shadow-elevated-0-y) var(--mw-component-card-shadow-elevated-0-blur) var(--mw-component-card-shadow-elevated-0-spread) var(--mw-component-card-shadow-elevated-0-color), var(--mw-component-card-shadow-elevated-1-x) var(--mw-component-card-shadow-elevated-1-y) var(--mw-component-card-shadow-elevated-1-blur) var(--mw-component-card-shadow-elevated-1-spread) var(--mw-component-card-shadow-elevated-1-color), var(--mw-component-card-shadow-elevated-2-x) var(--mw-component-card-shadow-elevated-2-y) var(--mw-component-card-shadow-elevated-2-blur) var(--mw-component-card-shadow-elevated-2-spread) var(--mw-component-card-shadow-elevated-2-color);border:none}";

const MwCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.clickEmitter = index.createEvent(this, "clickEmitter", 4);
    this.testId = undefined;
    this.outlined = false;
    this.elevated = false;
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { onClick: () => this.clickEmitter.emit(), "test-id": this.testId, class: {
        card: true,
        outlined: this.outlined,
        elevated: this.elevated,
      } }, index.h("slot", null))));
  }
};
MwCard.style = mwCardCss;

const mwCardBodyCss = ":host{display:block;padding:0 var(--mw-component-card-padding-components-x-default);flex:1}";

const MwCardBody = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
MwCardBody.style = mwCardBodyCss;

const mwCardFooterCss = ".card-footer{display:flex;justify-content:end;align-items:center;padding:var(--mw-component-card-padding-footer-t-default) var(--mw-component-card-padding-components-x-default) 0 var(--mw-component-card-padding-components-x-default);gap:var(--mw-component-button-sm-gap-between)}.justify-center{justify-content:center}.justify-start{justify-content:start}.justify-end{justify-content:end}.justify-flex-start{justify-content:flex-start}.justify-flex-end{justify-content:flex-end}.justify-space-around{justify-content:space-around}.justify-space-between{justify-content:space-between}.justify-space-evenly{justify-content:space-evenly}.justify-left{justify-content:left}.justify-right{justify-content:right}.justify-normal{justify-content:normal}";

const MwCardFooter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.justifyCenter = false;
    this.justifyStart = false;
    this.justifyEnd = false;
    this.justifyNormal = false;
    this.justifyLeft = false;
    this.justifyRight = false;
    this.justifyFlexStart = false;
    this.justifyFlexEnd = false;
    this.justifySpaceAround = false;
    this.justifySpaceBetween = false;
    this.justifySpaceEvenly = false;
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: {
        "card-footer": true,
        "justify-center": this.justifyCenter,
        "justify-start": this.justifyStart,
        "justify-flex-start": this.justifyFlexStart,
        "justify-flex-end": this.justifyFlexEnd,
        "justify-normal": this.justifyNormal,
        "justify-left": this.justifyLeft,
        "justify-right": this.justifyRight,
        "justify-space-around": this.justifySpaceAround,
        "justify-space-evenly": this.justifySpaceEvenly,
        "justify-space-between": this.justifySpaceBetween,
      } }, index.h("slot", null))));
  }
};
MwCardFooter.style = mwCardFooterCss;

const mwCardHeaderCss = ":host{display:block;display:flex;flex-direction:row;align-items:center;padding:0 var(--mw-component-card-padding-components-x-default) 0 var(--mw-component-card-padding-components-x-default);gap:16px}.header{font-family:var(--mw-component-card-header-font-family);font-size:var(--mw-component-card-header-font-size);font-weight:var(--mw-component-card-header-font-weight);line-height:var(--mw-component-card-header-line-height)}.subheader{font-family:var(--mw-component-card-subhead-font-family);font-size:var(--mw-component-card-subhead-font-size);font-weight:var(--mw-component-card-subhead-font-weight);line-height:var(--mw-component-card-subhead-line-height);color:var(--mw-component-card-fg-muted)}";

const MwCardHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.header = undefined;
    this.subheader = undefined;
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", { name: "icon" }), index.h("div", { class: "text" }, index.h("div", { class: "header" }, this.header), index.h("div", { class: "subheader" }, this.subheader))));
  }
};
MwCardHeader.style = mwCardHeaderCss;

const mwCardImageCss = ":host{display:block}.card-image img{width:100%;height:100%;border-radius:0;object-fit:fill}.card-image.top img{margin-top:calc(-1 * var(--mw-component-card-padding-components-y-default));border-top-left-radius:var(--mw-component-card-border-radius);border-top-right-radius:var(--mw-component-card-border-radius)}.card-image.bottom img{border-bottom-left-radius:var(--mw-component-card-border-radius);border-bottom-right-radius:var(--mw-component-card-border-radius);margin-bottom:calc(-1 * var(--mw-component-card-padding-components-y-default) - 4px)}.card-image.single img{border-radius:var(--mw-component-card-border-radius);margin-top:calc(-1 * var(--mw-component-card-padding-components-y-default));margin-bottom:calc(-1 * var(--mw-component-card-padding-components-y-default) - 4px)}";

const MwCardImage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.src = undefined;
    this.alt = undefined;
    this.height = undefined;
  }
  componentWillLoad() {
    const card = this.hostElement.parentNode;
    this.isOnlyChild = card.childElementCount === 1;
    this.isFirstChild = !this.isOnlyChild && this.hostElement.isSameNode(card.firstElementChild);
    this.isLastChild = !this.isOnlyChild && this.hostElement.isSameNode(card.lastElementChild);
    if (this.height) {
      this.styles = {
        "height": this.height,
        "object-fit": "cover",
        "width": "100%",
      };
    }
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: { "card-image": true, "top": this.isFirstChild, "bottom": this.isLastChild, "single": this.isOnlyChild } }, index.h("img", { src: this.src, alt: this.alt, style: this.styles }))));
  }
  get hostElement() { return index.getElement(this); }
};
MwCardImage.style = mwCardImageCss;

const mwCardTitleCss = ":host{display:block;display:flex;flex-direction:row;align-items:center;padding:0 var(--mw-component-card-padding-components-x-default) 0 var(--mw-component-card-padding-components-x-default);gap:16px}.card-title .title{font-family:var(--mw-component-card-title-font-family);font-size:var(--mw-component-card-title-font-size);font-weight:var(--mw-component-card-title-font-weight);line-height:var(--mw-component-card-title-line-height)}.card-title .subtitle{font-family:var(--mw-component-card-subtitle-font-family);font-size:var(--mw-component-card-subtitle-font-size);font-weight:var(--mw-component-card-subtitle-font-weight);line-height:var(--mw-component-card-subtitle-line-height);color:var(--mw-component-card-fg-muted)}.card-title .metadata{font-family:var(--mw-component-card-metadata-font-family);font-size:var(--mw-component-card-metadata-font-size);font-weight:var(--mw-component-card-metadata-font-weight);line-height:var(--mw-component-card-metadata-line-height);color:var(--mw-component-card-fg-muted)}";

const MwCardTitle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.text = undefined;
    this.subtitle = undefined;
    this.metadata = undefined;
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "card-title" }, index.h("div", { class: "metadata" }, this.metadata), index.h("div", { class: "title" }, this.text), index.h("div", { class: "subtitle" }, this.subtitle))));
  }
};
MwCardTitle.style = mwCardTitleCss;

const mwCheckboxCss = ".mw-checkbox-container{display:inline-flex;cursor:pointer;align-items:center;gap:var(--mw-component-controls-with-label-gap);margin:var(--mw-component-controls-with-label-padding-y) var(--mw-component-controls-with-label-padding-r) var(--mw-component-controls-with-label-padding-y)\n    var(--mw-component-controls-with-label-padding-l)}.mw-checkbox-container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0;}.mw-checkbox-outer{width:var(--mw-component-size-controls-checkbox-radiobutton-container);height:var(--mw-component-size-controls-checkbox-radiobutton-container);display:flex;justify-content:center;align-items:center}.mw-checkbox{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;width:var(--mw-component-size-controls-checkbox-box);height:var(--mw-component-size-controls-checkbox-box);border-radius:var(--mw-component-checkbox-border-radius);display:flex;justify-content:center;align-items:center}.mw-checkbox-container .mw-checkbox.unselected.enabled{border:var(--mw-component-controls-border-width-unselected) solid var(--mw-component-controls-color-outline-default);background:var(--mw-component-controls-color-bg-unselected)}.mw-checkbox-container .mw-checkbox.unselected.disabled{background:var(--mw-component-controls-color-bg-unselected);border:var(--mw-component-controls-border-width-unselected) solid var(--mw-component-controls-color-outline-disabled)}.mw-checkbox-container:hover .mw-checkbox.unselected.enabled{background:var(--mw-component-controls-color-bg-hover);border:var(--mw-component-controls-border-width-unselected) solid var(--mw-component-controls-color-outline-default)}input:focus+.mw-checkbox.unselected.enabled{background:var(--mw-component-controls-color-bg-focused);border:var(--mw-component-controls-border-width-focused) solid var(--mw-component-controls-color-outline-default)}.mw-checkbox-container:active .mw-checkbox.unselected.enabled{background:var(--mw-component-controls-color-bg-pressed);border:var(--mw-component-controls-border-width-unselected) solid var(--mw-component-controls-color-outline-default)}.mw-checkbox-container .mw-checkbox.selected.enabled{background:var(--mw-component-controls-color-bg-selected);border:var(--mw-component-controls-border-width-selected) solid var(--mw-component-controls-color-outline-default)}.mw-checkbox-container .mw-checkbox.selected.disabled{background:var(--mw-component-controls-color-bg-disabled);border:var(--mw-component-controls-border-width-selected) solid var(--mw-component-controls-color-outline-disabled)}.mw-checkbox-container:hover .mw-checkbox.selected.enabled{background:var(--mw-component-controls-color-bg-hover);border:var(--mw-component-controls-border-width-selected) solid var(--mw-component-controls-color-outline-default)}input:focus+.mw-checkbox.selected.enabled{background:var(--mw-component-controls-color-bg-focused);border:var(--mw-component-controls-border-width-focused) solid var(--mw-component-controls-color-outline-default)}.mw-checkbox-container:active .mw-checkbox.selected.enabled{background:var(--mw-component-controls-color-bg-pressed);border:var(--mw-component-controls-border-width-selected) solid var(--mw-component-controls-color-outline-default)}.mw-checkmark{display:none}.mw-checkmark.selected{display:unset}.mw-checkbox-label{font-family:var(--mw-component-control-label-font-family);font-weight:var(--mw-component-control-label-font-weight);font-size:var(--mw-component-control-label-font-size);line-height:var(--mw-component-control-label-line-height);color:var(--mw-component-controls-color-label-default)}";

const MwCheckbox = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.emitter = index.createEvent(this, "emitter", 4);
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
    return (index.h("div", { "test-id": this.testId, class: "mw-checkbox-container", onClick: this.handleCheck }, index.h("input", { type: "checkbox", checked: this.checked, value: this.value, name: this.name }), index.h("span", { class: "mw-checkbox-outer" }, index.h("span", { class: `mw-checkbox ${this.checked ? "selected" : "unselected"} ${this.disabled ? "disabled" : "enabled"}` }, index.h("mw-icon", { class: `mw-checkmark ${this.checked ? "selected" : "unselected"}`, color: `var(--mw-component-controls-color-fg-default)`, icon: "check", size: "small" }))), index.h("san", { class: "mw-checkbox-label" }, this.label)));
  }
  static get assetsDirs() { return ["./../assets"]; }
};
MwCheckbox.style = mwCheckboxCss;

const mwChipCss = ":host{display:block}.chip{cursor:default;display:flex;white-space:nowrap;overflow:hidden;align-items:center;justify-content:center;width:fit-content;font-family:var(--mw-component-chips-typo-font-family);font-size:var(--mw-component-chips-typo-font-size);line-height:var(--mw-component-chips-typo-line-height);font-weight:var(--mw-component-chips-typo-font-weight);height:32px;min-width:var(--mw-component-size-chips-min-width);border-top-left-radius:var(--mw-component-chips-border-radius);border-top-right-radius:var(--mw-component-chips-border-radius);border-bottom-left-radius:var(--mw-component-chips-border-radius);border-bottom-right-radius:var(--mw-component-chips-border-radius);-webkit-border-top-left-radius:var(--mw-component-chips-border-radius);-webkit-border-top-right-radius:var(--mw-component-chips-border-radius);-webkit-border-bottom-left-radius:var(--mw-component-chips-border-radius);-webkit-border-bottom-right-radius:var(--mw-component-chips-border-radius);gap:var(--mw-component-chips-gap-within);padding:0 var(--mw-component-chips-padding-x);box-shadow:inset 0 0 0 var(--mw-component-chips-border-width-default) var(--mw-component-chips-color-border-default);color:var(--mw-component-chips-color-fg-default);background:var(--mw-component-chips-color-bg-default)}.chip:hover:not(.disabled){color:var(--mw-component-chips-color-fg-hover);background:var(--mw-component-chips-color-bg-hover)}.chip.selected{color:var(--mw-component-chips-color-fg-selected);background:var(--mw-component-chips-color-bg-default);box-shadow:inset 0 0 0 var(--mw-component-chips-border-width-default) var(--mw-component-chips-color-border-selected)}.chip.selected:hover:not(.disabled){color:var(--mw-component-chips-color-fg-selected);background:var(--mw-component-chips-color-bg-hover);box-shadow:inset 0 0 0 var(--mw-component-chips-border-width-default) var(--mw-component-chips-color-border-selected)}.chip.selected:focus:not(.disabled){color:var(--mw-component-chips-color-fg-selected);background:var(--mw-component-chips-color-bg-hover);box-shadow:inset 0 0 0 var(--mw-component-chips-border-width-focused) var(--mw-component-chips-color-border-selected)}.chip.selected:active:not(.disabled){color:var(--mw-component-chips-color-fg-selected);background:var(--mw-component-chips-color-bg-pressed);box-shadow:inset 0 0 0 var(--mw-component-chips-border-width-default) var(--mw-component-chips-color-border-selected)}.chip:focus:not(.selected):not(.disabled){color:var(--mw-component-chips-color-fg-default);background:var(--mw-component-chips-color-bg-hover);box-shadow:inset 0 0 0 var(--mw-component-chips-border-width-focused) var(--mw-component-chips-color-border-default)}.chip:active:not(.selected):not(.disabled){color:var(--mw-component-chips-color-fg-default);background:var(--mw-component-chips-color-bg-pressed)}.chip.disabled{color:var(--mw-component-chips-color-fg-disabled);box-shadow:inset 0 0 0 var(--mw-component-chips-border-width-default) var(--mw-component-chips-color-border-disabled)}";

const MwChip = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.clickEmitter = index.createEvent(this, "mwChipClick", 6);
    this.closeEmitter = index.createEvent(this, "mwChipClose", 6);
    this.handleClose = (event) => {
      event.stopPropagation();
      if (!this.disabled) {
        this.closeEmitter.emit(this.value);
      }
    };
    this.handleClick = (event) => {
      if (this.toggleable)
        this.selected = !this.selected;
      this.clickEmitter.emit(event);
    };
    this.testId = undefined;
    this.icon = undefined;
    this.disabled = undefined;
    this.toggleable = true;
    this.showClose = false;
    this.value = undefined;
    this.selected = false;
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { tabindex: "0", class: {
        chip: true,
        selected: this.selected,
        disabled: this.disabled,
      }, onClick: this.handleClick, "test-id": this.testId }, !!this.icon && index.h("mw-icon", { icon: this.icon, size: "small" }), index.h("slot", null), this.showClose && (index.h("span", { onClick: this.handleClose }, index.h("mw-icon", { icon: "close", color: "currentcolor", size: "small" }))))));
  }
};
MwChip.style = mwChipCss;

class Selection {
  constructor(multiple = false, values = []) {
    this.multiple = multiple;
    this._selection = new Set();
    if (values && values.length) {
      if (multiple) {
        values.forEach(value => this._selection.add(value));
      }
      else {
        this._selection.add(values[0]);
      }
    }
  }
  get selected() {
    return Array.from(this._selection.values());
  }
  select(...values) {
    if (this.multiple) {
      values.forEach(value => this._selection.add(value));
    }
    else {
      this._selection.clear();
      this._selection.add(values[0]);
    }
  }
  deselect(...values) {
    values.forEach(value => this._selection.delete(value));
  }
  setSelection(...values) {
    this._selection = new Set(values);
  }
  clear() {
    this._selection.clear();
  }
  toggle(value) {
    this.isSelected(value) ? this.deselect(value) : this.select(value);
  }
  isSelected(value) {
    return this._selection.has(value);
  }
  hasValues() {
    return !!Array.from(this._selection.values()).length;
  }
}

const mwChipInputCss = ":host{display:flex;align-items:center}.wrapper{display:inline-flex;flex-direction:column;width:100%}.chip-input{display:flex;flex-direction:column;min-width:var(--mw-component-size-text-field-min-width);color:var(--mw-component-text-field-fg-default)}.chip-input.disabled,.chip-input.disabled input{color:var(--mw-component-text-field-fg-disabled)}.chip-input.inline{flex-direction:row;display:flex;align-items:center}.chip-input.inline .input{min-width:var(--mw-component-size-text-field-min-w);width:100%}.chip-input.inline label{display:block;width:var(--mw-component-size-text-field-label-horizontal-width);padding:var(--mw-component-text-field-padding-label-horizontal)}.chip-input .input{display:flex;align-items:center;border-radius:var(--border-radius-standard-md);padding:var(--mw-component-text-field-padding-text-field-y) var(--mw-component-text-field-padding-text-field-x);background:var(--mw-component-text-field-bg-default);box-shadow:inset 0 0 0 var(--mw-component-text-field-default) var(--mw-component-text-field-border-default);box-sizing:border-box;width:100%}.chip-input .input .icon-start{margin-right:var(--mw-component-text-field-gap-horizontal-gap-within)}.chip-input .input .icon-end{margin-left:var(--mw-component-text-field-gap-horizontal-gap-within)}.chip-input .input.has-error{background:var(--mw-component-text-field-bg-error)}.chip-input .input:focus-within{background:var(--mw-component-text-field-bg-hover);box-shadow:inset 0 0 0 var(--mw-component-text-field-focused) var(--mw-component-text-field-border-focused)}.chip-input .input:not(.disabled):hover{background:var(--mw-component-text-field-bg-hover)}.chip-input .input .icon{color:var(--mw-component-text-field-fg-icon-default)}.chip-input .input .focused{color:var(--mw-component-text-field-fg-icon-focused)}.chip-input .input .focused.has-error{color:var(--mw-component-text-field-fg-error)}.chip-input .input input{border:none;padding:0;width:100%;background:transparent;font-family:var(--mw-component-text-field-text-font-family);font-weight:var(--mw-component-text-field-text-font-weight);font-size:var(--mw-component-text-field-text-font-size);line-height:var(--mw-component-text-field-text-line-height)}.chip-input .input input:focus-visible,.chip-input .input input:focus{outline:transparent;border:none;box-shadow:none}.chip-input .input input::placeholder{color:var(--mw-component-text-field-fg-placeholder)}.chip-input .input.has-error{background:var(--mw-component-text-field-bg-error)}.chip-input .input .input-options{flex:1;display:flex;flex-flow:row wrap;gap:var(--mw-component-text-field-gap-horizontal-gap-within)}.chip-input .input .icon-close-multiple{margin-left:var(--mw-component-text-field-gap-horizontal-gap-within);gap:var(--mw-component-text-field-gap-horizontal-gap-within);cursor:pointer;display:flex}.chip-input .input input{flex:1;width:100%;min-width:30px;max-width:100%;height:32px}.helper-text-container{display:flex;justify-content:right;gap:4px}";

const MwChipInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.valueChanged = index.createEvent(this, "valueChanged", 7);
    this.inputChange = index.createEvent(this, "inputChange", 7);
    this._selection = new Selection(true);
    this.onFocus = () => {
      if (!this.disabled) {
        if (this.inputElement)
          this.inputElement.focus();
        this.focused = true;
      }
    };
    this.onBlur = () => {
      this.focused = false;
    };
    this.onRemoveSelection = (value) => {
      this._selection.deselect(value);
      this.onValueChange();
    };
    this.addMultiValue = (value) => {
      var _a;
      if (((_a = value.trim()) === null || _a === void 0 ? void 0 : _a.length) === 0) {
        return;
      }
      if (this.canAddToValues()) {
        this._selection.select(value);
        this.onValueChange();
      }
      this.inputElement.value = "";
      this.handleInputChange();
    };
    this.clearMultiValues = () => {
      this._selection.clear();
      this.onValueChange();
    };
    this.onValueChange = () => {
      this.selected = this._selection.selected;
      this.valueChanged.emit(this.selected);
    };
    this.handleInputChange = () => {
      this.inputChange.emit(this.inputElement.value);
    };
    this.canAddToValues = () => {
      var _a;
      return !this.maximum || ((_a = this.selected) === null || _a === void 0 ? void 0 : _a.length) < this.maximum;
    };
    this.name = undefined;
    this.label = undefined;
    this.value = undefined;
    this.placeholder = undefined;
    this.disabled = false;
    this.maximum = undefined;
    this.helperText = undefined;
    this.hasError = false;
    this.inline = false;
    this.required = false;
    this.optionCounter = false;
    this.selectedChips = undefined;
    this.selected = [];
    this.focused = false;
    this.initialPlaceholder = undefined;
  }
  handleSelectionChange(selected) {
    if (!this.canAddToValues() || !selected) {
      return;
    }
    this._selection.select(...selected);
    this.selected = this._selection.selected;
    if (this.inputElement) {
      this.inputElement.value = "";
    }
  }
  closeEmitterHandler(event) {
    this._selection.deselect(event.detail);
    this.onValueChange();
  }
  handleEnterPress(event) {
    if (!this.focused) {
      return;
    }
    switch (event.key) {
      case "Enter":
        this.addMultiValue(this.inputElement.value);
        break;
      case "Backspace":
        if (this.inputElement.value === "" && this._selection.hasValues()) {
          const indexToRemove = this.selected.length - 1;
          const valueToRemove = this.selected[indexToRemove];
          this._selection.deselect(valueToRemove);
          this.onValueChange();
        }
        break;
    }
  }
  componentWillLoad() {
    this.initialPlaceholder = this.placeholder;
    this.hasIconStartSlot = !!this.hostElement.querySelector("[slot='icon-start']");
    this.hasIconEndSlot = !!this.hostElement.querySelector("[slot='icon-end']");
  }
  connectedCallback() {
    this.handleSelectionChange(this.selectedChips);
  }
  render() {
    var _a;
    const { onFocus, disabled, hasIconStartSlot, hasIconEndSlot, focused, placeholder, onBlur, name, clearMultiValues, selected, required, hasError, inline, helperText, optionCounter, maximum, } = this;
    return (index.h(index.Host, null, index.h("div", { class: "wrapper" }, index.h("div", { class: {
        "chip-input": true,
        "inline": inline,
        "has-error": hasError,
        "disabled": disabled,
      } }, index.h("mw-label", { name: this.name, label: this.label, required: required }), index.h("div", { slot: "anchor", onClick: onFocus, class: {
        "input": true,
        "disabled": disabled,
        "has-error": hasError,
      } }, index.h("span", { class: {
        "icon-start": hasIconStartSlot,
        "focused": focused,
        "has-error": hasError,
      } }, index.h("slot", { name: "icon-start" })), index.h("div", { class: "input-options" }, selected === null || selected === void 0 ? void 0 :
      selected.map(v => (index.h("mw-chip", { key: v, onMwChipClose: () => this.onRemoveSelection(v), showClose: true, value: v, selected: true, toggleable: false, disabled: disabled }, v))), this.canAddToValues() && (index.h("input", { ref: el => (this.inputElement = el), class: {
        "has-error": this.hasError,
        "mw-chip-input": true,
      }, placeholder: ((_a = this.selected) === null || _a === void 0 ? void 0 : _a.length) === 0 ? placeholder : null, onFocus: onFocus, onBlur: onBlur, type: "text", name: name, value: this.value, disabled: disabled, onInput: this.handleInputChange, onChange: this.onValueChange }))), this._selection.hasValues() && (index.h("span", { class: "icon-close-multiple", onClick: clearMultiValues }, index.h("mw-icon", { icon: "close", size: "medium" }))), index.h("div", { class: {
        "icon-end": hasIconEndSlot,
        "focused": focused,
        "has-error": hasError,
      } }, index.h("slot", { name: "icon-end" })))), index.h("div", { class: "helper-text-container" }, index.h("mw-helper-text", { helperText: helperText, hasError: hasError }), this.maximum && optionCounter && index.h("mw-helper-text", { helperText: `${this.selected.length}/${maximum}` })))));
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "selectedChips": ["handleSelectionChange"]
  }; }
};
MwChipInput.style = mwChipInputCss;

const mwDividerCss = ".mw-divider{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;border:0;border-top:var(--mw-component-divider-border-width-default) solid var(--mw-component-divider-fg-default)}.mw-divider.inset{margin:0 var(--mw-component-divider-inset)}";

const MwDivider = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.inset = false;
  }
  render() {
    return index.h("div", { class: `mw-divider ${this.inset && "inset"}` });
  }
};
MwDivider.style = mwDividerCss;

const mwDropdownCss = ":host{display:flex;align-items:center}.wrapper{display:inline-flex;flex-direction:column}.dropdown{display:flex;flex-direction:column;min-width:var(--mw-component-size-text-field-min-width);color:var(--mw-component-text-field-fg-default)}.dropdown.disabled,.dropdown.disabled input{color:var(--mw-component-text-field-fg-disabled)}.dropdown.inline{flex-direction:row;display:flex;align-items:center}.dropdown.inline .input{min-width:var(--mw-component-size-text-field-min-w);width:100%}.dropdown.inline label{display:block;width:var(--mw-component-size-text-field-label-horizontal-width);padding:var(--mw-component-text-field-padding-label-horizontal)}.input{display:flex;align-items:center;border-radius:var(--border-radius-standard-md);padding:var(--mw-component-text-field-padding-text-field-y) var(--mw-component-text-field-padding-text-field-x);background:var(--mw-component-text-field-bg-default);box-shadow:inset 0 0 0 var(--mw-component-text-field-default) var(--mw-component-text-field-border-default)}.input .icon-start{margin-right:var(--mw-component-text-field-gap-horizontal-gap-within)}.input .icon-end{margin-left:var(--mw-component-text-field-gap-horizontal-gap-within)}.input.has-error{background:var(--mw-component-text-field-bg-error)}.input:focus-within{background:var(--mw-component-text-field-bg-hover);box-shadow:inset 0 0 0 var(--mw-component-text-field-focused) var(--mw-component-text-field-border-focused)}.input:not(.disabled):hover{background:var(--mw-component-text-field-bg-hover)}.input .icon{color:var(--mw-component-text-field-fg-icon-default)}.input .focused{color:var(--mw-component-text-field-fg-icon-focused)}.input .focused.has-error{color:var(--mw-component-text-field-fg-error)}.input input{border:none;padding:0;width:100%;background:transparent;font-family:var(--mw-component-text-field-text-font-family);font-weight:var(--mw-component-text-field-text-font-weight);font-size:var(--mw-component-text-field-text-font-size);line-height:var(--mw-component-text-field-text-line-height)}.input input:focus-visible,.input input:focus{outline:transparent;border:none;box-shadow:none}.input input::placeholder{color:var(--mw-component-text-field-fg-placeholder)}.input button{cursor:pointer;border:none;padding:0;width:100%;background:transparent;font-family:var(--mw-component-text-field-text-font-family);font-weight:var(--mw-component-text-field-text-font-weight);font-size:var(--mw-component-text-field-text-font-size);line-height:var(--mw-component-text-field-text-line-height)}.input button:focus-visible,.input button:focus{outline:none;border:none;box-shadow:none}.input button.placeholder{color:var(--mw-component-text-field-fg-placeholder)}.has-error{color:var(--mw-component-text-field-fg-error)}";

const MwDropdown = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.valueChanged = index.createEvent(this, "valueChanged", 5);
    this.onValueChange = (event) => {
      this.value = event.target.value;
      this.valueChanged.emit(this.value);
    };
    this.onFocus = () => {
      this.buttonElement.focus();
      this.focused = true;
    };
    this.onBlur = () => {
      this.focused = false;
    };
    this.value = undefined;
    this.valueLabel = undefined;
    this.name = undefined;
    this.label = undefined;
    this.placeholder = "Placeholder";
    this.helperText = undefined;
    this.hasError = false;
    this.inline = false;
    this.required = false;
    this.disabled = false;
    this.focused = false;
    this.isDropdownOpen = false;
  }
  clickEmitterHandler(event) {
    this.value = event.target.getAttribute("value");
    this.valueLabel = event.target.getAttribute("title");
  }
  stateEmitterHandler(event) {
    this.isDropdownOpen = event.detail;
  }
  componentWillLoad() {
    this.hasIconStartSlot = !!this.host.querySelector("[slot='icon-start']");
    this.hasIconEndSlot = !!this.host.querySelector("[slot='icon-end']");
    this.hasDropDownMenu = !!this.host.querySelector("[slot='dropdown-menu']");
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "wrapper" }, index.h("div", { class: { "dropdown": true, "inline": this.inline, "has-error": this.hasError, "disabled": this.disabled } }, index.h("mw-label", { name: this.name, label: this.label, required: this.required }), index.h("mw-popover", { noPadding: true, closeOnClick: true, open: this.isDropdownOpen }, index.h("div", { slot: "anchor", onClick: this.onFocus, class: { "input": true, "has-error": this.hasError, "disabled": this.disabled } }, index.h("span", { class: {
        "icon-start": this.hasIconStartSlot,
        "focused": this.focused,
        "has-error": this.hasError,
      } }, index.h("slot", { name: "icon-start" })), index.h("button", { class: { "button": true, "has-error": this.hasError, "placeholder": !this.valueLabel }, ref: el => (this.buttonElement = el), name: this.name, value: this.value, disabled: this.disabled, onChange: this.onValueChange, onFocus: this.onFocus, onBlur: this.onBlur }, this.valueLabel ? this.valueLabel : this.placeholder), index.h("span", { class: {
        "icon-end": this.hasIconEndSlot,
        "focused": this.focused,
        "has-error": this.hasError,
      } }, index.h("slot", { name: "icon-end" })), this.hasDropDownMenu && (index.h("span", { class: {
        "icon-end": this.hasDropDownMenu,
        "focused": this.focused,
        "has-error": this.hasError,
      } }, index.h("mw-icon", { icon: this.isDropdownOpen ? "keyboard_arrow_up" : "keyboard_arrow_down", size: "medium" })))), index.h("div", { slot: "content" }, index.h("slot", { name: "dropdown-menu" }))), !this.inline && index.h("mw-helper-text", { helperText: this.helperText, hasError: this.hasError })), this.inline && index.h("mw-helper-text", { helperText: this.helperText, hasError: this.hasError }))));
  }
  get host() { return index.getElement(this); }
};
MwDropdown.style = mwDropdownCss;

const mwHelperTextCss = ":host{display:flex;justify-content:right}.helper-text{align-self:flex-end;align-items:end;padding:var(--mw-component-text-field-padding-helper-text-y) 0;color:var(--mw-component-text-field-fg-helper-text);font-family:var(--mw-component-text-field-helper-text-font-family);font-weight:var(--mw-component-text-field-helper-text-font-weight);font-size:var(--mw-component-text-field-helper-text-font-size);line-height:var(--mw-component-text-field-helper-text-line-height)}.helper-text.has-error{color:var(--mw-component-text-field-fg-error)}.hidden{display:none}";

const MwHelperText = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.helperText = undefined;
    this.hasError = false;
  }
  render() {
    const { helperText, hasError } = this;
    return (index.h(index.Host, null, index.h("span", { class: {
        "hidden": !this.helperText,
        "helper-text": true,
        "has-error": hasError,
      } }, helperText)));
  }
};
MwHelperText.style = mwHelperTextCss;

/**
 * Do not edit directly
 * Generated on Thu, 26 Jan 2023 08:56:41 GMT
 */
const mwComponentSizeAvatarsIconXl = "48px";

/**
 * Do not edit directly
 * Generated on Thu, 26 Jan 2023 08:56:42 GMT
 */
const mwComponentSizeAvatarsIconXs = "12px";
const mwComponentSizeAvatarsIconSm = "16px";
const mwComponentSizeAvatarsIconMd = "24px";
const mwComponentSizeAvatarsIconLg = "32px";

const mwIconCss = "@import url(\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200\");:host{display:flex}.material-symbols-outlined{font-family:\"Material Symbols Outlined\";display:flex;justify-content:center;align-items:center}";

const getOpticalSize = (size) => Number({
  [SizeEnum.X_LARGE]: 48,
  [SizeEnum.LARGE]: 48,
  [SizeEnum.MEDIUM]: 40,
  [SizeEnum.SMALL]: 24,
  [SizeEnum.X_SMALL]: 20,
}[size]);
const getFontSize = (size) => ({
  [SizeEnum.X_LARGE]: mwComponentSizeAvatarsIconXl,
  [SizeEnum.LARGE]: mwComponentSizeAvatarsIconLg,
  [SizeEnum.MEDIUM]: mwComponentSizeAvatarsIconMd,
  [SizeEnum.SMALL]: mwComponentSizeAvatarsIconSm,
  [SizeEnum.X_SMALL]: mwComponentSizeAvatarsIconXs,
}[size]);
const MwIcon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.icon = null;
    this.size = SizeEnum.SMALL;
    this.fill = false;
    this.color = undefined;
    this.weight = 400;
  }
  render() {
    return (index.h("span", { style: {
        "fontSize": getFontSize(this.size),
        "color": this.color,
        "font-variation-settings": `
          'FILL' ${this.fill ? 1 : 0},
          'wght' ${this.weight},
          'GRAD' 0,
          'opsz' ${getOpticalSize(this.size)}`,
      }, class: `material-symbols-outlined ${this.size}` }, this.icon));
  }
  static get assetsDirs() { return ["./assets"]; }
  get el() { return index.getElement(this); }
};
MwIcon.style = mwIconCss;

const codepoints = [
  '10k e951',
  '10mp e952',
  '11mp e953',
  '123 eb8d',
  '12mp e954',
  '13mp e955',
  '14mp e956',
  '15mp e957',
  '16mp e958',
  '17mp e959',
  '18_up_rating f8fd',
  '18mp e95a',
  '19mp e95b',
  '1k e95c',
  '1k_plus e95d',
  '1x_mobiledata efcd',
  '20mp e95e',
  '21mp e95f',
  '22mp e960',
  '23mp e961',
  '24mp e962',
  '2k e963',
  '2k_plus e964',
  '2mp e965',
  '30fps efce',
  '30fps_select efcf',
  '360 e577',
  '3d_rotation e84d',
  '3g_mobiledata efd0',
  '3k e966',
  '3k_plus e967',
  '3mp e968',
  '3p efd1',
  '4g_mobiledata efd2',
  '4g_plus_mobiledata efd3',
  '4k e072',
  '4k_plus e969',
  '4mp e96a',
  '5g ef38',
  '5k e96b',
  '5k_plus e96c',
  '5mp e96d',
  '60fps efd4',
  '60fps_select efd5',
  '6_ft_apart f21e',
  '6k e96e',
  '6k_plus e96f',
  '6mp e970',
  '7k e971',
  '7k_plus e972',
  '7mp e973',
  '8k e974',
  '8k_plus e975',
  '8mp e976',
  '9k e977',
  '9k_plus e978',
  '9mp e979',
  'abc eb94',
  'ac_unit eb3b',
  'access_alarm e855',
  'access_alarms e855',
  'access_time efd6',
  'access_time_filled efd6',
  'accessibility e84e',
  'accessibility_new e92c',
  'accessible e914',
  'accessible_forward e934',
  'account_balance e84f',
  'account_balance_wallet e850',
  'account_box e851',
  'account_circle efd7',
  'account_circle_filled efd7',
  'account_tree e97a',
  'activity_zone e1e6',
  'acute e4cb',
  'ad_units ef39',
  'adb e60e',
  'add e145',
  'add_a_photo e439',
  'add_alarm e856',
  'add_alert e003',
  'add_box e146',
  'add_business e729',
  'add_call f0b7',
  'add_card eb86',
  'add_chart ef3c',
  'add_circle e3ba',
  'add_circle_outline e3ba',
  'add_comment e266',
  'add_home f8eb',
  'add_home_work f8ed',
  'add_ic_call f0b7',
  'add_link e178',
  'add_location e567',
  'add_location_alt ef3a',
  'add_moderator e97d',
  'add_notes e091',
  'add_photo_alternate e43e',
  'add_reaction e1d3',
  'add_road ef3b',
  'add_shopping_cart e854',
  'add_task f23a',
  'add_to_drive e65c',
  'add_to_home_screen e1fe',
  'add_to_photos e39d',
  'add_to_queue e05c',
  'addchart ef3c',
  'adf_scanner eada',
  'adjust e39e',
  'admin_meds e48d',
  'admin_panel_settings ef3d',
  'ads_click e762',
  'agender f888',
  'agriculture ea79',
  'air efd8',
  'air_freshener e2ca',
  'air_purifier_gen e829',
  'airline_seat_flat e630',
  'airline_seat_flat_angled e631',
  'airline_seat_individual_suite e632',
  'airline_seat_legroom_extra e633',
  'airline_seat_legroom_normal e634',
  'airline_seat_legroom_reduced e635',
  'airline_seat_recline_extra e636',
  'airline_seat_recline_normal e637',
  'airline_stops e7d0',
  'airlines e7ca',
  'airplane_ticket efd9',
  'airplanemode_active e53d',
  'airplanemode_inactive e194',
  'airplay e055',
  'airport_shuttle eb3c',
  'airware f154',
  'airwave e29c',
  'alarm e855',
  'alarm_add e856',
  'alarm_off e857',
  'alarm_on e858',
  'album e019',
  'align_horizontal_center e00f',
  'align_horizontal_left e00d',
  'align_horizontal_right e010',
  'align_vertical_bottom e015',
  'align_vertical_center e011',
  'align_vertical_top e00c',
  'all_inbox e97f',
  'all_inclusive eb3d',
  'all_out e90b',
  'allergies e094',
  'alt_route f184',
  'alternate_email e0e6',
  'altitude f873',
  'amend f802',
  'amp_stories ea13',
  'analytics ef3e',
  'anchor f1cd',
  'android e859',
  'animation e71c',
  'announcement e87f',
  'aod efda',
  'aod_tablet f89f',
  'apartment ea40',
  'api f1b7',
  'apk_document f88e',
  'apk_install f88f',
  'app_blocking ef3f',
  'app_registration ef40',
  'app_settings_alt ef41',
  'app_shortcut eae4',
  'approval e982',
  'approval_delegation f84a',
  'apps e5c3',
  'apps_outage e7cc',
  'architecture ea3b',
  'archive e149',
  'area_chart e770',
  'arming_countdown e78a',
  'arrow_back e5c4',
  'arrow_back_ios e5e0',
  'arrow_back_ios_new e2ea',
  'arrow_circle_down f181',
  'arrow_circle_left eaa7',
  'arrow_circle_right eaaa',
  'arrow_circle_up f182',
  'arrow_downward e5db',
  'arrow_drop_down e5c5',
  'arrow_drop_down_circle e5c6',
  'arrow_drop_up e5c7',
  'arrow_forward e5c8',
  'arrow_forward_ios e5e1',
  'arrow_insert f837',
  'arrow_left e5de',
  'arrow_outward f8ce',
  'arrow_right e5df',
  'arrow_right_alt e941',
  'arrow_selector_tool f82f',
  'arrow_upward e5d8',
  'arrows_more_down f8ab',
  'arrows_more_up f8ac',
  'art_track e060',
  'article ef42',
  'aspect_ratio e85b',
  'assessment e85c',
  'assignment e85d',
  'assignment_add f848',
  'assignment_ind e85e',
  'assignment_late e85f',
  'assignment_return e860',
  'assignment_returned e861',
  'assignment_turned_in e862',
  'assist_walker f8d5',
  'assistant e39f',
  'assistant_direction e988',
  'assistant_navigation e989',
  'assistant_photo ea1a',
  'assured_workload eb6f',
  'astrophotography_auto f1d9',
  'astrophotography_off f1da',
  'atm e573',
  'atr ebc7',
  'attach_email ea5e',
  'attach_file e226',
  'attach_file_add f841',
  'attach_money e227',
  'attachment e2bc',
  'attractions ea52',
  'attribution efdb',
  'audio_file eb82',
  'audiotrack e405',
  'auto_activity_zone f8ad',
  'auto_awesome e65f',
  'auto_awesome_mosaic e660',
  'auto_awesome_motion e661',
  'auto_delete ea4c',
  'auto_detect_voice f83e',
  'auto_fix e663',
  'auto_fix_high e663',
  'auto_fix_normal e664',
  'auto_fix_off e665',
  'auto_graph e4fb',
  'auto_mode ec20',
  'auto_read_pause f219',
  'auto_read_play f216',
  'auto_schedule e214',
  'auto_stories e666',
  'autofps_select efdc',
  'autopay f84b',
  'autorenew e863',
  'av_timer e01b',
  'avg_time f813',
  'baby_changing_station f19b',
  'back_hand e764',
  'background_replace f20a',
  'backpack f19c',
  'backspace e14a',
  'backup e864',
  'backup_table ef43',
  'badge ea67',
  'badge_critical_battery f156',
  'bakery_dining ea53',
  'balance eaf6',
  'balcony e58f',
  'ballot e172',
  'bar_chart e26b',
  'barcode e70b',
  'barcode_reader f85c',
  'barcode_scanner e70c',
  'barefoot f871',
  'batch_prediction f0f5',
  'bathroom efdd',
  'bathtub ea41',
  'battery_0_bar ebdc',
  'battery_1_bar ebd9',
  'battery_20 f0a1',
  'battery_2_bar ebe0',
  'battery_30 f0a1',
  'battery_3_bar ebdd',
  'battery_4_bar ebe2',
  'battery_50 f0a1',
  'battery_5_bar ebd4',
  'battery_60 f0a1',
  'battery_6_bar ebd2',
  'battery_80 f0a1',
  'battery_90 f0a1',
  'battery_alert e19c',
  'battery_charging_20 f0a7',
  'battery_charging_30 f0a7',
  'battery_charging_50 f0a7',
  'battery_charging_60 f0a7',
  'battery_charging_80 f0a7',
  'battery_charging_90 f0a7',
  'battery_charging_full f0a7',
  'battery_full f0a1',
  'battery_full_alt f13b',
  'battery_horiz_000 f8ae',
  'battery_horiz_050 f8af',
  'battery_horiz_075 f8b0',
  'battery_low f155',
  'battery_profile e206',
  'battery_saver efde',
  'battery_std f0a1',
  'battery_unknown e1a6',
  'battery_vert_005 f8b1',
  'battery_vert_020 f8b2',
  'battery_vert_050 f8b3',
  'battery_very_low f156',
  'beach_access eb3e',
  'bed efdf',
  'bedroom_baby efe0',
  'bedroom_child efe1',
  'bedroom_parent efe2',
  'bedtime ef44',
  'bedtime_off eb76',
  'beenhere e52d',
  'bento f1f4',
  'bike_scooter ef45',
  'biotech ea3a',
  'blanket e828',
  'blender efe3',
  'blind f8d6',
  'blinds e286',
  'blinds_closed ec1f',
  'block f326',
  'bloodtype efe4',
  'bluetooth e1a7',
  'bluetooth_audio e1aa',
  'bluetooth_connected e1a8',
  'bluetooth_disabled e1a9',
  'bluetooth_drive efe5',
  'bluetooth_searching e1aa',
  'blur_circular e3a2',
  'blur_linear e3a3',
  'blur_medium e84c',
  'blur_off e3a4',
  'blur_on e3a5',
  'blur_short e8cf',
  'body_fat e098',
  'bolt ea0b',
  'book e865',
  'book_online f217',
  'bookmark e8e7',
  'bookmark_add e598',
  'bookmark_added e599',
  'bookmark_border e8e7',
  'bookmark_remove e59a',
  'bookmarks e98b',
  'border_all e228',
  'border_bottom e229',
  'border_clear e22a',
  'border_color e22b',
  'border_horizontal e22c',
  'border_inner e22d',
  'border_left e22e',
  'border_outer e22f',
  'border_right e230',
  'border_style e231',
  'border_top e232',
  'border_vertical e233',
  'boy eb67',
  'branding_watermark e06b',
  'breakfast_dining ea54',
  'breaking_news_alt_1 f0ba',
  'breastfeeding f856',
  'brightness_1 e3fa',
  'brightness_2 f036',
  'brightness_3 e3a8',
  'brightness_4 e3a9',
  'brightness_5 e3aa',
  'brightness_6 e3ab',
  'brightness_7 e3ac',
  'brightness_auto e1ab',
  'brightness_high e1ac',
  'brightness_low e1ad',
  'brightness_medium e1ae',
  'bring_your_own_ip e016',
  'broadcast_on_home f8f8',
  'broadcast_on_personal f8f9',
  'broken_image e3ad',
  'browse_activity f8a5',
  'browse_gallery ebd1',
  'browser_not_supported ef47',
  'browser_updated e7cf',
  'brunch_dining ea73',
  'brush e3ae',
  'bubble_chart e6dd',
  'bug_report e868',
  'build e869',
  'build_circle ef48',
  'bungalow e591',
  'burst_mode e43c',
  'bus_alert e98f',
  'business e7ee',
  'business_center eb3f',
  'business_chip f84c',
  'cabin e589',
  'cable efe6',
  'cached e86a',
  'cake e7e9',
  'cake_add f85b',
  'calculate ea5f',
  'calendar_add_on ef85',
  'calendar_apps_script f0bb',
  'calendar_month ebcc',
  'calendar_today e935',
  'calendar_view_day e936',
  'calendar_view_month efe7',
  'calendar_view_week efe8',
  'call f0d4',
  'call_end f0bc',
  'call_end_alt f0bc',
  'call_made e0b2',
  'call_merge e0b3',
  'call_missed e0b4',
  'call_missed_outgoing e0e4',
  'call_received e0b5',
  'call_split e0b6',
  'call_to_action e06c',
  'camera e3af',
  'camera_alt e412',
  'camera_enhance e8fc',
  'camera_front e3b1',
  'camera_indoor efe9',
  'camera_outdoor efea',
  'camera_rear e3b2',
  'camera_roll e3b3',
  'cameraswitch efeb',
  'campaign ef49',
  'camping f8a2',
  'cancel e888',
  'cancel_presentation e0e9',
  'cancel_schedule_send ea39',
  'candlestick_chart ead4',
  'car_crash ebf2',
  'car_rental ea55',
  'car_repair ea56',
  'card_giftcard e8f6',
  'card_membership e8f7',
  'card_travel e8f8',
  'carpenter f1f8',
  'cases e992',
  'casino eb40',
  'cast e307',
  'cast_connected e308',
  'cast_for_education efec',
  'castle eab1',
  'category e574',
  'celebration ea65',
  'cell_merge f82e',
  'cell_tower ebba',
  'cell_wifi e0ec',
  'center_focus_strong e3b4',
  'center_focus_weak e3b5',
  'chair efed',
  'chair_alt efee',
  'chalet e585',
  'change_circle e2e7',
  'change_history e86b',
  'charger e2ae',
  'charging_station f19d',
  'chart_data e473',
  'chat e0c9',
  'chat_add_on f0f3',
  'chat_apps_script f0bd',
  'chat_bubble e0cb',
  'chat_bubble_outline e0cb',
  'check e5ca',
  'check_box e834',
  'check_box_outline_blank e835',
  'check_circle e86c',
  'check_circle_filled e86c',
  'check_circle_outline e86c',
  'check_indeterminate_small f88a',
  'check_small f88b',
  'checklist e6b1',
  'checklist_rtl e6b3',
  'checkroom f19e',
  'chevron_left e5cb',
  'chevron_right e5cc',
  'child_care eb41',
  'child_friendly eb42',
  'chip_extraction f821',
  'chrome_reader_mode e86d',
  'chromecast_2 f17b',
  'chromecast_device e83c',
  'church eaae',
  'cinematic_blur f853',
  'circle ef4a',
  'circle_notifications e994',
  'clarify f0bf',
  'class e865',
  'clean_hands f21f',
  'cleaning_bucket f8b4',
  'cleaning_services f0ff',
  'clear e5cd',
  'clear_all e0b8',
  'clear_day f157',
  'clear_night f159',
  'climate_mini_split f8b5',
  'clinical_notes e09e',
  'close e5cd',
  'close_fullscreen f1cf',
  'closed_caption e996',
  'closed_caption_disabled f1dc',
  'closed_caption_off e996',
  'cloud f15c',
  'cloud_circle e2be',
  'cloud_done e2bf',
  'cloud_download e2c0',
  'cloud_off e2c1',
  'cloud_queue f15c',
  'cloud_sync eb5a',
  'cloud_upload e2c3',
  'cloudy f15c',
  'cloudy_filled f15c',
  'cloudy_snowing e810',
  'co2 e7b0',
  'co_present eaf0',
  'code e86f',
  'code_blocks f84d',
  'code_off e4f3',
  'coffee efef',
  'coffee_maker eff0',
  'collections e3d3',
  'collections_bookmark e431',
  'color_lens e40a',
  'colorize e3b8',
  'comment e24c',
  'comment_bank ea4e',
  'comments_disabled e7a2',
  'commit eaf5',
  'communication e27c',
  'commute e940',
  'compare e3b9',
  'compare_arrows e915',
  'compass_calibration e57c',
  'component_exchange f1e7',
  'compost e761',
  'compress e94d',
  'computer e31e',
  'confirmation_number e638',
  'connect_without_contact f223',
  'connected_tv e998',
  'connecting_airports e7c9',
  'construction ea3c',
  'contact_emergency f8d1',
  'contact_mail e0d0',
  'contact_page f22e',
  'contact_phone f0c0',
  'contact_phone_filled f0c0',
  'contact_support e94c',
  'contactless ea71',
  'contactless_off f858',
  'contacts e0ba',
  'content_copy e14d',
  'content_cut e14e',
  'content_paste e14f',
  'content_paste_go ea8e',
  'content_paste_off e4f8',
  'content_paste_search ea9b',
  'contrast eb37',
  'control_camera e074',
  'control_point e3ba',
  'control_point_duplicate e3bb',
  'controller_gen e83d',
  'conversion_path f0c1',
  'conveyor_belt f867',
  'cookie eaac',
  'cooking e2b6',
  'cool_to_dry e276',
  'copy_all e2ec',
  'copyright e90c',
  'coronavirus f221',
  'corporate_fare f1d0',
  'cottage e587',
  'countertops f1f7',
  'create f345',
  'create_new_folder e2cc',
  'credit_card e8a1',
  'credit_card_off e4f4',
  'credit_score eff1',
  'crib e588',
  'crisis_alert ebe9',
  'crop e3be',
  'crop_16_9 e3bc',
  'crop_3_2 e3bd',
  'crop_5_4 e3bf',
  'crop_7_5 e3c0',
  'crop_din e3c6',
  'crop_free e3c2',
  'crop_landscape e3c3',
  'crop_original e3f4',
  'crop_portrait e3c5',
  'crop_rotate e437',
  'crop_square e3c6',
  'cruelty_free e799',
  'css eb93',
  'currency_bitcoin ebc5',
  'currency_exchange eb70',
  'currency_franc eafa',
  'currency_lira eaef',
  'currency_pound eaf1',
  'currency_ruble eaec',
  'currency_rupee eaf7',
  'currency_yen eafb',
  'currency_yuan eaf9',
  'curtains ec1e',
  'curtains_closed ec1d',
  'cut f08b',
  'cycle f854',
  'cyclone ebd5',
  'dangerous e99a',
  'dark_mode e51c',
  'dashboard e871',
  'dashboard_customize e99b',
  'data_array ead1',
  'data_exploration e76f',
  'data_object ead3',
  'data_saver_off eff2',
  'data_saver_on eff3',
  'data_thresholding eb9f',
  'data_usage eff2',
  'database f20e',
  'dataset f8ee',
  'dataset_linked f8ef',
  'date_range e916',
  'deblur eb77',
  'decimal_decrease f82d',
  'decimal_increase f82c',
  'deck ea42',
  'dehaze e3c7',
  'delete e872',
  'delete_forever e92b',
  'delete_outline e872',
  'delete_sweep e16c',
  'demography e489',
  'density_large eba9',
  'density_medium eb9e',
  'density_small eba8',
  'dentistry e0a6',
  'departure_board e576',
  'description e873',
  'deselect ebb6',
  'design_services f10a',
  'desk f8f4',
  'desktop_access_disabled e99d',
  'desktop_mac e30b',
  'desktop_windows e30c',
  'details e3c8',
  'detection_and_zone e29f',
  'detector e282',
  'detector_alarm e1f7',
  'detector_battery e204',
  'detector_co e2af',
  'detector_offline e223',
  'detector_smoke e285',
  'detector_status e1e8',
  'developer_board e30d',
  'developer_board_off e4ff',
  'developer_mode e1b0',
  'device_hub e335',
  'device_reset e8b3',
  'device_thermostat e1ff',
  'device_unknown e339',
  'devices e326',
  'devices_fold ebde',
  'devices_other e337',
  'dew_point f879',
  'diagnosis e0a8',
  'dialer_sip e0bb',
  'dialpad e0bc',
  'diamond ead5',
  'difference eb7d',
  'digital_out_of_home f1de',
  'dining eff4',
  'dinner_dining ea57',
  'directions e52e',
  'directions_alt f880',
  'directions_alt_off f881',
  'directions_bike e52f',
  'directions_boat eff5',
  'directions_boat_filled eff5',
  'directions_bus eff6',
  'directions_bus_filled eff6',
  'directions_car eff7',
  'directions_car_filled eff7',
  'directions_off f10f',
  'directions_railway eff8',
  'directions_railway_filled eff8',
  'directions_run e566',
  'directions_subway effa',
  'directions_subway_filled effa',
  'directions_transit effa',
  'directions_transit_filled effa',
  'directions_walk e536',
  'dirty_lens ef4b',
  'disabled_by_default f230',
  'disabled_visible e76e',
  'disc_full e610',
  'discover_tune e018',
  'dishwasher_gen e832',
  'display_settings eb97',
  'diversity_1 f8d7',
  'diversity_2 f8d8',
  'diversity_3 f8d9',
  'diversity_4 f857',
  'dns e875',
  'do_disturb f326',
  'do_disturb_alt f08d',
  'do_disturb_off f329',
  'do_disturb_on f08f',
  'do_not_disturb f08d',
  'do_not_disturb_alt f326',
  'do_not_disturb_off f329',
  'do_not_disturb_on f08f',
  'do_not_disturb_on_total_silence effb',
  'do_not_step f19f',
  'do_not_touch f1b0',
  'dock e30e',
  'docs_add_on f0c2',
  'docs_apps_script f0c3',
  'document_scanner e5fa',
  'domain e7ee',
  'domain_add eb62',
  'domain_disabled e0ef',
  'domain_verification ef4c',
  'done e876',
  'done_all e877',
  'done_outline e92f',
  'donut_large e917',
  'donut_small e918',
  'door_back effc',
  'door_front effd',
  'door_open e77c',
  'door_sensor e28a',
  'door_sliding effe',
  'doorbell efff',
  'doorbell_3p e1e7',
  'doorbell_chime e1f3',
  'double_arrow ea50',
  'downhill_skiing e509',
  'download f090',
  'download_done f091',
  'download_for_offline f000',
  'downloading f001',
  'draft e66d',
  'draft_orders e7b3',
  'drafts e151',
  'drag_handle e25d',
  'drag_indicator e945',
  'draw e746',
  'dresser e210',
  'drive_eta eff7',
  'drive_file_move e675',
  'drive_file_move_outline e675',
  'drive_file_move_rtl e76d',
  'drive_file_rename_outline e9a2',
  'drive_folder_upload e9a3',
  'dry f1b3',
  'dry_cleaning ea58',
  'duo e9a5',
  'dvr e1b2',
  'dynamic_feed ea14',
  'dynamic_form f1bf',
  'e911_avatar f11a',
  'e911_emergency f119',
  'e_mobiledata f002',
  'earbuds f003',
  'earbuds_battery f004',
  'early_on e2ba',
  'east f1df',
  'eco ea35',
  'edgesensor_high f005',
  'edgesensor_low f006',
  'edit f345',
  'edit_attributes e578',
  'edit_calendar e742',
  'edit_document f88c',
  'edit_location e568',
  'edit_location_alt e1c5',
  'edit_note e745',
  'edit_notifications e525',
  'edit_off e950',
  'edit_road ef4d',
  'edit_square f88d',
  'egg eacc',
  'egg_alt eac8',
  'eject e8fb',
  'elderly f21a',
  'elderly_woman eb69',
  'electric_bike eb1b',
  'electric_bolt ec1c',
  'electric_car eb1c',
  'electric_meter ec1b',
  'electric_moped eb1d',
  'electric_rickshaw eb1e',
  'electric_scooter eb1f',
  'electrical_services f102',
  'elevator f1a0',
  'email e159',
  'emergency e1eb',
  'emergency_heat f15d',
  'emergency_home e82a',
  'emergency_recording ebf4',
  'emergency_share ebf6',
  'emoji_emotions ea22',
  'emoji_flags ea1a',
  'emoji_food_beverage ea1b',
  'emoji_nature ea1c',
  'emoji_objects ea24',
  'emoji_people ea1d',
  'emoji_symbols ea1e',
  'emoji_transportation ea1f',
  'empty_dashboard f844',
  'enable f188',
  'energy_program_saving f15f',
  'energy_program_time_used f161',
  'energy_savings_leaf ec1a',
  'engineering ea3d',
  'enhanced_encryption e63f',
  'equalizer e01d',
  'error e001',
  'error_circle_rounded f8b6',
  'error_med e49b',
  'error_outline e001',
  'escalator f1a1',
  'escalator_warning f1ac',
  'euro ea15',
  'euro_symbol e926',
  'ev_charger e56d',
  'ev_shadow ef8f',
  'ev_station e56d',
  'event e878',
  'event_available e614',
  'event_busy e615',
  'event_note e616',
  'event_repeat eb7b',
  'event_seat e903',
  'event_upcoming f238',
  'exclamation f22f',
  'exit_to_app e879',
  'expand e94f',
  'expand_circle_down e7cd',
  'expand_content f830',
  'expand_less e5ce',
  'expand_more e5cf',
  'explicit e01e',
  'explore e87a',
  'explore_off e9a8',
  'export_notes e0ac',
  'exposure e3f6',
  'exposure_neg_1 e3cb',
  'exposure_neg_2 e3cc',
  'exposure_plus_1 e800',
  'exposure_plus_2 e3ce',
  'exposure_zero e3cf',
  'extension e87b',
  'extension_off e4f5',
  'face f008',
  'face_2 f8da',
  'face_3 f8db',
  'face_4 f8dc',
  'face_5 f8dd',
  'face_6 f8de',
  'face_retouching_natural ef4e',
  'face_retouching_off f007',
  'face_unlock f008',
  'fact_check f0c5',
  'factory ebbc',
  'familiar_face_and_zone e21c',
  'family_history e0ad',
  'family_restroom f1a2',
  'fast_forward e01f',
  'fast_rewind e020',
  'fastfood e57a',
  'faucet e278',
  'favorite e87e',
  'favorite_border e87e',
  'fax ead8',
  'featured_play_list e06d',
  'featured_video e06e',
  'feed f009',
  'feedback e87f',
  'female e590',
  'femur f891',
  'femur_alt f892',
  'fence f1f6',
  'festival ea68',
  'fiber_dvr e05d',
  'fiber_manual_record e061',
  'fiber_new e05e',
  'fiber_pin e06a',
  'fiber_smart_record e062',
  'file_copy e173',
  'file_download f090',
  'file_download_done f091',
  'file_download_off e4fe',
  'file_open eaf3',
  'file_present ea0e',
  'file_upload f09b',
  'file_upload_off f886',
  'filter e3d3',
  'filter_1 e3d0',
  'filter_2 e3d1',
  'filter_3 e3d2',
  'filter_4 e3d4',
  'filter_5 e3d5',
  'filter_6 e3d6',
  'filter_7 e3d7',
  'filter_8 e3d8',
  'filter_9 e3d9',
  'filter_9_plus e3da',
  'filter_alt ef4f',
  'filter_alt_off eb32',
  'filter_b_and_w e3db',
  'filter_center_focus e3dc',
  'filter_drama e3dd',
  'filter_frames e3de',
  'filter_hdr e3df',
  'filter_list e152',
  'filter_list_alt e94e',
  'filter_list_off eb57',
  'filter_none e3e0',
  'filter_tilt_shift e3e2',
  'filter_vintage e3e3',
  'finance_chip f84e',
  'find_in_page e880',
  'find_replace e881',
  'fingerprint e90d',
  'fire_extinguisher f1d8',
  'fire_hydrant f1a3',
  'fire_truck f8f2',
  'fireplace ea43',
  'first_page e5dc',
  'fit_screen ea10',
  'fitness_center eb43',
  'flag ea1a',
  'flag_circle eaf8',
  'flag_filled ea1a',
  'flaky ef50',
  'flare e3e4',
  'flash_auto e3e5',
  'flash_off e3e6',
  'flash_on e3e7',
  'flashlight_off f00a',
  'flashlight_on f00b',
  'flatware f00c',
  'flight e539',
  'flight_class e7cb',
  'flight_land e904',
  'flight_takeoff e905',
  'flip e3e8',
  'flip_camera_android ea37',
  'flip_camera_ios ea38',
  'flip_to_back e882',
  'flip_to_front e883',
  'flood ebe6',
  'floor_lamp e21e',
  'flourescent f00d',
  'flowsheet e0ae',
  'fluid e483',
  'fluid_balance f80d',
  'fluid_med f80c',
  'fluorescent f00d',
  'flutter_dash e00b',
  'fmd_bad f00e',
  'fmd_good e55f',
  'foggy e818',
  'folder e2c7',
  'folder_copy ebbd',
  'folder_delete eb34',
  'folder_off eb83',
  'folder_open e2c8',
  'folder_shared e2c9',
  'folder_special e617',
  'folder_zip eb2c',
  'follow_the_signs f222',
  'font_download e167',
  'font_download_off e4f9',
  'food_bank f1f2',
  'foot_bones f893',
  'footprint f87d',
  'forest ea99',
  'fork_left eba0',
  'fork_right ebac',
  'forklift f868',
  'format_align_center e234',
  'format_align_justify e235',
  'format_align_left e236',
  'format_align_right e237',
  'format_bold e238',
  'format_clear e239',
  'format_color_fill e23a',
  'format_color_reset e23b',
  'format_color_text e23c',
  'format_h1 f85d',
  'format_h2 f85e',
  'format_h3 f85f',
  'format_h4 f860',
  'format_h5 f861',
  'format_h6 f862',
  'format_image_left f863',
  'format_image_right f864',
  'format_indent_decrease e23d',
  'format_indent_increase e23e',
  'format_ink_highlighter f82b',
  'format_italic e23f',
  'format_line_spacing e240',
  'format_list_bulleted e241',
  'format_list_bulleted_add f849',
  'format_list_numbered e242',
  'format_list_numbered_rtl e267',
  'format_overline eb65',
  'format_paint e243',
  'format_paragraph f865',
  'format_quote e244',
  'format_shapes e25e',
  'format_size e245',
  'format_strikethrough e246',
  'format_text_clip f82a',
  'format_text_overflow f829',
  'format_text_wrap f828',
  'format_textdirection_l_to_r e247',
  'format_textdirection_r_to_l e248',
  'format_underlined e249',
  'format_underlined_squiggle f885',
  'forms_add_on f0c7',
  'forms_apps_script f0c8',
  'fort eaad',
  'forum e8af',
  'forward f060',
  'forward_10 e056',
  'forward_30 e057',
  'forward_5 e058',
  'forward_to_inbox f187',
  'foundation f200',
  'frame_person f8a6',
  'free_breakfast eb44',
  'free_cancellation e748',
  'front_hand e769',
  'front_loader f869',
  'full_stacked_bar_chart f212',
  'fullscreen e5d0',
  'fullscreen_exit e5d1',
  'function f866',
  'functions e24a',
  'g_mobiledata f010',
  'g_translate e927',
  'gallery_thumbnail f86f',
  'gamepad e30f',
  'games e30f',
  'garage f011',
  'garage_home e82d',
  'garden_cart f8a9',
  'gas_meter ec19',
  'gastroenterology e0f1',
  'gate e277',
  'gavel e90e',
  'generating_tokens e749',
  'genetics e0f3',
  'gesture e155',
  'get_app f090',
  'gif e908',
  'gif_box e7a3',
  'girl eb68',
  'gite e58b',
  'glyphs f8a3',
  'golf_course eb45',
  'google_plus_reshare f060',
  'google_wifi e840',
  'gpp_bad f012',
  'gpp_good f013',
  'gpp_maybe f014',
  'gps_fixed e55c',
  'gps_not_fixed e1b7',
  'gps_off e1b6',
  'grade e885',
  'gradient e3e9',
  'grading ea4f',
  'grain e3ea',
  'graphic_eq e1b8',
  'grass f205',
  'grid_3x3 f015',
  'grid_4x4 f016',
  'grid_goldenratio f017',
  'grid_off e3eb',
  'grid_on e3ec',
  'grid_view e9b0',
  'group ea21',
  'group_add e7f0',
  'group_off e747',
  'group_remove e7ad',
  'group_work e886',
  'grouped_bar_chart f211',
  'groups f233',
  'groups_2 f8df',
  'groups_3 f8e0',
  'h_mobiledata f018',
  'h_plus_mobiledata f019',
  'hail e9b1',
  'hand_bones f894',
  'hand_gesture ef9c',
  'handshake ebcb',
  'handyman f10b',
  'hardware ea59',
  'hd e052',
  'hdr_auto f01a',
  'hdr_auto_select f01b',
  'hdr_enhanced_select ef51',
  'hdr_off e3ed',
  'hdr_off_select f01c',
  'hdr_on e3ee',
  'hdr_on_select f01d',
  'hdr_plus f01e',
  'hdr_strong e3f1',
  'hdr_weak e3f2',
  'headphones f01f',
  'headphones_battery f020',
  'headset f01f',
  'headset_mic e311',
  'headset_off e33a',
  'healing e3f3',
  'health_and_safety e1d5',
  'hearing e023',
  'hearing_disabled f104',
  'heart_broken eac2',
  'heart_minus f883',
  'heart_plus f884',
  'heat_pump ec18',
  'heat_pump_balance e27e',
  'height ea16',
  'help e8fd',
  'help_center f1c0',
  'help_clinic f810',
  'help_outline e8fd',
  'hevc f021',
  'hexagon eb39',
  'hide ef9e',
  'hide_image f022',
  'hide_source f023',
  'high_quality e024',
  'highlight e25f',
  'highlight_off e888',
  'hiking e50a',
  'history e8b3',
  'history_edu ea3e',
  'history_toggle_off f17d',
  'hive eaa6',
  'hls eb8a',
  'hls_off eb8c',
  'holiday_village e58a',
  'home e88a',
  'home_app_logo e295',
  'home_filled e88a',
  'home_health e4b9',
  'home_iot_device e283',
  'home_max f024',
  'home_max_dots e849',
  'home_mini f025',
  'home_pin f14d',
  'home_repair_service f100',
  'home_speaker f11c',
  'home_storage f86c',
  'home_work f030',
  'horizontal_distribute e014',
  'horizontal_rule f108',
  'horizontal_split e947',
  'hot_tub eb46',
  'hotel e549',
  'hotel_class e743',
  'hourglass_bottom ea5c',
  'hourglass_disabled ef53',
  'hourglass_empty e88b',
  'hourglass_full e88c',
  'hourglass_top ea5b',
  'house ea44',
  'house_siding f202',
  'house_with_shield e786',
  'houseboat e584',
  'how_to_reg e174',
  'how_to_vote e175',
  'html eb7e',
  'http e902',
  'https e88d',
  'hub e9f4',
  'humerus f895',
  'humerus_alt f896',
  'humidity_high f163',
  'humidity_low f164',
  'humidity_mid f165',
  'humidity_percentage f87e',
  'hvac f10e',
  'ice_skating e50b',
  'icecream ea69',
  'image e3f4',
  'image_aspect_ratio e3f5',
  'image_not_supported f116',
  'image_search e43f',
  'imagesearch_roller e9b4',
  'imagesmode efa2',
  'import_contacts e0e0',
  'import_export e8d5',
  'important_devices e912',
  'in_home_mode e833',
  'inactive_order e0fc',
  'inbox e156',
  'inbox_customize f859',
  'incomplete_circle e79b',
  'indeterminate_check_box e909',
  'info e88e',
  'infrared f87c',
  'inpatient e0fe',
  'input e890',
  'insert_chart e85c',
  'insert_chart_filled e85c',
  'insert_chart_outlined e85c',
  'insert_comment e24c',
  'insert_drive_file e66d',
  'insert_emoticon ea22',
  'insert_invitation e878',
  'insert_link e250',
  'insert_page_break eaca',
  'insert_photo e3f4',
  'insert_text f827',
  'insights f092',
  'install_desktop eb71',
  'install_mobile eb72',
  'integration_instructions ef54',
  'interests e7c8',
  'interpreter_mode e83b',
  'inventory e179',
  'inventory_2 e1a1',
  'invert_colors e891',
  'invert_colors_off e0c4',
  'ios_share e6b8',
  'iron e583',
  'iso e3f6',
  'javascript eb7c',
  'join f84f',
  'join_full eaeb',
  'join_inner eaf4',
  'join_left eaf2',
  'join_right eaea',
  'kayaking e50c',
  'kebab_dining e842',
  'kettle e2b9',
  'key e73c',
  'key_off eb84',
  'key_visualizer f199',
  'keyboard e312',
  'keyboard_alt f028',
  'keyboard_arrow_down e313',
  'keyboard_arrow_left e314',
  'keyboard_arrow_right e315',
  'keyboard_arrow_up e316',
  'keyboard_backspace e317',
  'keyboard_capslock e318',
  'keyboard_command_key eae7',
  'keyboard_control_key eae6',
  'keyboard_double_arrow_down ead0',
  'keyboard_double_arrow_left eac3',
  'keyboard_double_arrow_right eac9',
  'keyboard_double_arrow_up eacf',
  'keyboard_hide e31a',
  'keyboard_option_key eae8',
  'keyboard_return e31b',
  'keyboard_tab e31c',
  'keyboard_voice e31d',
  'king_bed ea45',
  'kitchen eb47',
  'kitesurfing e50d',
  'lab_panel e103',
  'lab_profile e104',
  'lab_research f80b',
  'label e893',
  'label_important e948',
  'label_important_outline e948',
  'label_off e9b6',
  'label_outline e893',
  'labs e105',
  'lan eb2f',
  'landscape e564',
  'landslide ebd7',
  'language e894',
  'laptop e31e',
  'laptop_chromebook e31f',
  'laptop_mac e320',
  'laptop_windows e321',
  'last_page e5dd',
  'launch e89e',
  'laundry e2a8',
  'layers e53b',
  'layers_clear e53c',
  'lda e106',
  'leaderboard f20c',
  'leak_add e3f8',
  'leak_remove e3f9',
  'legend_toggle f11b',
  'lens e3fa',
  'lens_blur f029',
  'library_add e03c',
  'library_add_check e9b7',
  'library_books e02f',
  'library_music e030',
  'lift_to_talk efa3',
  'light f02a',
  'light_group e28b',
  'light_mode e518',
  'lightbulb e90f',
  'lightbulb_circle ebfe',
  'lightbulb_outline e90f',
  'line_axis ea9a',
  'line_end f826',
  'line_end_arrow f81d',
  'line_end_arrow_notch f81c',
  'line_end_circle f81b',
  'line_end_diamond f81a',
  'line_end_square f819',
  'line_start f825',
  'line_start_arrow f818',
  'line_start_arrow_notch f817',
  'line_start_circle f816',
  'line_start_diamond f815',
  'line_start_square f814',
  'line_style e919',
  'line_weight e91a',
  'linear_scale e260',
  'link e250',
  'link_off e16f',
  'linked_camera e438',
  'liquor ea60',
  'list e896',
  'list_alt e0ee',
  'live_help e0c6',
  'live_tv e63b',
  'living f02b',
  'local_activity e553',
  'local_airport e53d',
  'local_atm e53e',
  'local_bar e540',
  'local_cafe eb44',
  'local_car_wash e542',
  'local_convenience_store e543',
  'local_dining e561',
  'local_drink e544',
  'local_fire_department f33b',
  'local_florist e545',
  'local_gas_station e546',
  'local_grocery_store e8cc',
  'local_hospital e548',
  'local_hotel e549',
  'local_laundry_service e54a',
  'local_library e54b',
  'local_mall e54c',
  'local_movies e8da',
  'local_offer f05b',
  'local_parking e54f',
  'local_pharmacy e550',
  'local_phone f0d4',
  'local_pizza e552',
  'local_play e553',
  'local_police ef56',
  'local_post_office e554',
  'local_printshop e8ad',
  'local_see e557',
  'local_shipping e558',
  'local_taxi e559',
  'location_automation f14f',
  'location_away f150',
  'location_chip f850',
  'location_city e7f1',
  'location_disabled e1b6',
  'location_home f152',
  'location_off e0c7',
  'location_on e55f',
  'location_pin e55f',
  'location_searching e1b7',
  'lock e88d',
  'lock_clock ef57',
  'lock_open e898',
  'lock_outline e88d',
  'lock_person f8f3',
  'lock_reset eade',
  'login ea77',
  'logo_dev ead6',
  'logout e9ba',
  'looks e3fc',
  'looks_3 e3fb',
  'looks_4 e3fd',
  'looks_5 e3fe',
  'looks_6 e3ff',
  'looks_one e400',
  'looks_two e401',
  'loop e863',
  'loupe e402',
  'low_priority e16d',
  'loyalty e89a',
  'lte_mobiledata f02c',
  'lte_plus_mobiledata f02d',
  'luggage f235',
  'lunch_dining ea61',
  'lyrics ec0b',
  'macro_off f8d2',
  'magic_button f136',
  'magnification_large f83d',
  'magnification_small f83c',
  'mail e159',
  'mail_lock ec0a',
  'mail_outline e159',
  'male e58e',
  'man e4eb',
  'man_2 f8e1',
  'man_3 f8e2',
  'man_4 f8e3',
  'manage_accounts f02e',
  'manage_history ebe7',
  'manage_search f02f',
  'map e55b',
  'maps_home_work f030',
  'maps_ugc ef58',
  'margin e9bb',
  'mark_as_unread e9bc',
  'mark_chat_read f18b',
  'mark_chat_unread f189',
  'mark_email_read f18c',
  'mark_email_unread f18a',
  'mark_unread_chat_alt eb9d',
  'markunread e159',
  'markunread_mailbox e89b',
  'masks f218',
  'matter e907',
  'maximize e930',
  'media_bluetooth_off f031',
  'media_bluetooth_on f032',
  'media_link f83f',
  'mediation efa7',
  'medical_information ebed',
  'medical_services f109',
  'medication f033',
  'medication_liquid ea87',
  'meeting_room eb4f',
  'memory e322',
  'menu e5d2',
  'menu_book ea19',
  'menu_open e9bd',
  'merge eb98',
  'merge_type e252',
  'message e0c9',
  'mfg_nest_yale_lock f11d',
  'mic e31d',
  'mic_external_off ef59',
  'mic_external_on ef5a',
  'mic_none e31d',
  'mic_off e02b',
  'microwave f204',
  'microwave_gen e847',
  'military_tech ea3f',
  'minimize e931',
  'minor_crash ebf1',
  'missed_video_call f0ce',
  'missed_video_call_filled f0ce',
  'mixture_med e4c8',
  'mms e618',
  'mobile_friendly e200',
  'mobile_off e201',
  'mobile_screen_share e0e7',
  'mobiledata_off f034',
  'mode f345',
  'mode_comment e253',
  'mode_cool f166',
  'mode_cool_off f167',
  'mode_edit f345',
  'mode_edit_outline f345',
  'mode_fan f168',
  'mode_fan_off ec17',
  'mode_heat f16a',
  'mode_heat_cool f16b',
  'mode_heat_off f16d',
  'mode_night f036',
  'mode_of_travel e7ce',
  'mode_off_on f16f',
  'mode_standby f037',
  'model_training f0cf',
  'monetization_on e263',
  'money e57d',
  'money_off f038',
  'money_off_csred f038',
  'monitor ef5b',
  'monitor_heart eaa2',
  'monitor_weight f039',
  'monitoring f190',
  'monochrome_photos e403',
  'mood ea22',
  'mood_bad e7f3',
  'mop e28d',
  'more e619',
  'more_down f196',
  'more_horiz e5d3',
  'more_time ea5d',
  'more_up f197',
  'more_vert e5d4',
  'mosque eab2',
  'motion_blur f0d0',
  'motion_mode f842',
  'motion_photos_auto f03a',
  'motion_photos_off e9c0',
  'motion_photos_pause f349',
  'motion_photos_paused f349',
  'motion_sensor_active e792',
  'motion_sensor_alert e784',
  'motion_sensor_idle e783',
  'motion_sensor_urgent e78e',
  'motorcycle e91b',
  'mouse e323',
  'move_down eb61',
  'move_to_inbox e168',
  'move_up eb64',
  'movie e404',
  'movie_creation e404',
  'movie_edit f840',
  'movie_filter e43a',
  'moving e501',
  'moving_beds e73d',
  'moving_ministry e73e',
  'mp e9c3',
  'multicooker e293',
  'multiline_chart e6df',
  'multiple_stop f1b9',
  'museum ea36',
  'music_note e405',
  'music_off e440',
  'music_video e063',
  'my_location e55c',
  'nat ef5c',
  'nature e406',
  'nature_people e407',
  'navigate_before e408',
  'navigate_next e409',
  'navigation e55d',
  'near_me e569',
  'near_me_disabled f1ef',
  'nearby_error f03b',
  'nearby_off f03c',
  'nephrology e10d',
  'nest_audio ebbf',
  'nest_cam_floodlight f8b7',
  'nest_cam_indoor f11e',
  'nest_cam_iq f11f',
  'nest_cam_iq_outdoor f120',
  'nest_cam_magnet_mount f8b8',
  'nest_cam_outdoor f121',
  'nest_cam_stand f8b9',
  'nest_cam_wall_mount f8ba',
  'nest_cam_wired_stand ec16',
  'nest_clock_farsight_analog f8bb',
  'nest_clock_farsight_digital f8bc',
  'nest_connect f122',
  'nest_detect f123',
  'nest_display f124',
  'nest_display_max f125',
  'nest_doorbell_visitor f8bd',
  'nest_eco_leaf f8be',
  'nest_farsight_weather f8bf',
  'nest_found_savings f8c0',
  'nest_heat_link_e f126',
  'nest_heat_link_gen_3 f127',
  'nest_hello_doorbell e82c',
  'nest_locator_tag f8c1',
  'nest_mini e789',
  'nest_multi_room f8c2',
  'nest_remote f129',
  'nest_remote_comfort_sensor f12a',
  'nest_secure_alarm f12b',
  'nest_sunblock f8c3',
  'nest_tag f12c',
  'nest_thermostat_e_eu f12d',
  'nest_thermostat_gen_3 f12e',
  'nest_thermostat_sensor f12f',
  'nest_thermostat_sensor_eu f130',
  'nest_thermostat_zirconium_eu f131',
  'nest_true_radiant f8c4',
  'nest_wake_on_approach f8c5',
  'nest_wake_on_press f8c6',
  'nest_wifi_gale f132',
  'nest_wifi_mistral f133',
  'nest_wifi_point e83f',
  'nest_wifi_point_vento f134',
  'nest_wifi_router e841',
  'network_cell e1b9',
  'network_check e640',
  'network_locked e61a',
  'network_ping ebca',
  'network_wifi e1ba',
  'network_wifi_1_bar ebe4',
  'network_wifi_2_bar ebd6',
  'network_wifi_3_bar ebe1',
  'new_label e609',
  'new_releases ef76',
  'newspaper eb81',
  'next_plan ef5d',
  'next_week e16a',
  'nfc e1bb',
  'night_shelter f1f1',
  'night_sight_auto f1d7',
  'night_sight_auto_off f1f9',
  'nightlife ea62',
  'nightlight f03d',
  'nightlight_round f03d',
  'nights_stay ea46',
  'no_accounts f03e',
  'no_adult_content f8fe',
  'no_backpack f237',
  'no_crash ebf0',
  'no_drinks f1a5',
  'no_encryption f03f',
  'no_encryption_gmailerrorred f03f',
  'no_flash f1a6',
  'no_food f1a7',
  'no_luggage f23b',
  'no_meals f1d6',
  'no_meeting_room eb4e',
  'no_photography f1a8',
  'no_sim e1ce',
  'no_stroller f1af',
  'no_transfer f1d5',
  'noise_aware ebec',
  'noise_control_off ebf3',
  'noise_control_on f8a8',
  'nordic_walking e50e',
  'north f1e0',
  'north_east f1e1',
  'north_west f1e2',
  'not_accessible f0fe',
  'not_interested f326',
  'not_listed_location e575',
  'not_started f0d1',
  'note e66d',
  'note_add e89c',
  'note_alt f040',
  'notes e26c',
  'notification_add e399',
  'notification_important e004',
  'notifications e7f5',
  'notifications_active e7f7',
  'notifications_none e7f5',
  'notifications_off e7f6',
  'notifications_paused e7f8',
  'numbers eac7',
  'nutrition e110',
  'offline_bolt e932',
  'offline_pin e90a',
  'offline_share e9c5',
  'oil_barrel ec15',
  'on_device_training ebfd',
  'oncology e114',
  'ondemand_video e63b',
  'online_prediction f0eb',
  'opacity e91c',
  'open_in_browser e89d',
  'open_in_full f1ce',
  'open_in_new e89e',
  'open_in_new_off e4f6',
  'open_with e89f',
  'oral_disease e116',
  'order_approve f812',
  'order_play f811',
  'orthopedics f897',
  'other_admission e47b',
  'other_houses e58c',
  'outbound e1ca',
  'outbox ef5f',
  'outdoor_garden e205',
  'outdoor_grill ea47',
  'outgoing_mail f0d2',
  'outlet f1d4',
  'outlined_flag ea1a',
  'outpatient e118',
  'outpatient_med e119',
  'output ebbe',
  'oven_gen e843',
  'overview e4a7',
  'pacemaker e656',
  'package e48f',
  'padding e9c8',
  'pages e7f9',
  'pageview e8a0',
  'paid f041',
  'palette e40a',
  'pallet f86a',
  'pan_tool e925',
  'pan_tool_alt ebb9',
  'panorama e40b',
  'panorama_fish_eye e40c',
  'panorama_horizontal e40d',
  'panorama_photosphere e9c9',
  'panorama_vertical e40e',
  'panorama_wide_angle e40f',
  'paragliding e50f',
  'park ea63',
  'partly_cloudy_day f172',
  'partly_cloudy_night f174',
  'party_mode e7fa',
  'password f042',
  'pattern f043',
  'pause e034',
  'pause_circle e1a2',
  'pause_circle_filled e1a2',
  'pause_circle_outline e1a2',
  'pause_presentation e0ea',
  'payment e8a1',
  'payments ef63',
  'pedal_bike eb29',
  'pending ef64',
  'pending_actions f1bb',
  'pentagon eb50',
  'people ea21',
  'people_alt ea21',
  'people_outline ea21',
  'percent eb58',
  'pergola e203',
  'perm_camera_mic e8a2',
  'perm_contact_calendar e8a3',
  'perm_data_setting e8a4',
  'perm_device_information e8a5',
  'perm_identity f0d3',
  'perm_media e8a7',
  'perm_phone_msg e8a8',
  'perm_scan_wifi e8a9',
  'person f0d3',
  'person_2 f8e4',
  'person_3 f8e5',
  'person_4 f8e6',
  'person_add ea4d',
  'person_add_alt ea4d',
  'person_add_disabled e9cb',
  'person_filled f0d3',
  'person_off e510',
  'person_outline f0d3',
  'person_pin e55a',
  'person_pin_circle e56a',
  'person_remove ef66',
  'person_search f106',
  'personal_injury e6da',
  'personal_video e333',
  'pest_control f0fa',
  'pest_control_rodent f0fd',
  'pets e91d',
  'phishing ead7',
  'phone f0d4',
  'phone_alt f0d4',
  'phone_android e324',
  'phone_bluetooth_speaker e61b',
  'phone_callback e649',
  'phone_disabled e9cc',
  'phone_enabled e9cd',
  'phone_forwarded e61c',
  'phone_in_talk e61d',
  'phone_in_talk_watchface_indicator f843',
  'phone_iphone e325',
  'phone_locked e61e',
  'phone_missed e61f',
  'phone_paused e620',
  'phonelink e326',
  'phonelink_erase e0db',
  'phonelink_lock e0dc',
  'phonelink_off e327',
  'phonelink_ring e0dd',
  'phonelink_setup ef41',
  'photo e432',
  'photo_album e411',
  'photo_camera e412',
  'photo_camera_back ef68',
  'photo_camera_front ef69',
  'photo_filter e43b',
  'photo_frame f0d9',
  'photo_library e413',
  'photo_size_select_actual e432',
  'photo_size_select_large e433',
  'photo_size_select_small e434',
  'php eb8f',
  'piano e521',
  'piano_off e520',
  'picture_as_pdf e415',
  'picture_in_picture e8aa',
  'picture_in_picture_alt e911',
  'pie_chart f044',
  'pie_chart_filled f044',
  'pie_chart_outline f044',
  'pie_chart_outlined f044',
  'pin f045',
  'pin_drop e55e',
  'pin_end e767',
  'pin_invoke e763',
  'pinch eb38',
  'pinch_zoom_in f1fa',
  'pinch_zoom_out f1fb',
  'pivot_table_chart e9ce',
  'place e55f',
  'place_item f1f0',
  'plagiarism ea5a',
  'play_arrow e037',
  'play_circle e1c4',
  'play_disabled ef6a',
  'play_for_work e906',
  'play_lesson f047',
  'play_pause f137',
  'playlist_add e03b',
  'playlist_add_check e065',
  'playlist_add_check_circle e7e6',
  'playlist_add_circle e7e5',
  'playlist_play e05f',
  'playlist_remove eb80',
  'plumbing f107',
  'plus_one e800',
  'podcasts f048',
  'point_of_sale f17e',
  'policy ea17',
  'poll e85c',
  'polyline ebbb',
  'polymer e8ab',
  'pool eb48',
  'portable_wifi_off f087',
  'portrait e851',
  'post_add ea20',
  'potted_plant f8aa',
  'power e63c',
  'power_input e336',
  'power_off e646',
  'power_rounded f8c7',
  'power_settings_new e8ac',
  'prayer_times f838',
  'precision_manufacturing f049',
  'pregnant_woman e91e',
  'preliminary e7d8',
  'prescriptions e121',
  'present_to_all e0df',
  'preview f1c5',
  'price_change f04a',
  'price_check f04b',
  'print e8ad',
  'print_disabled e9cf',
  'priority e19f',
  'priority_high e645',
  'privacy f148',
  'privacy_tip f0dc',
  'private_connectivity e744',
  'problem e122',
  'process_chart f855',
  'production_quantity_limits e1d1',
  'productivity e296',
  'propane ec14',
  'propane_tank ec13',
  'psychology ea4a',
  'psychology_alt f8ea',
  'public e80b',
  'public_off f1ca',
  'publish e255',
  'published_with_changes f232',
  'pulmonology e124',
  'punch_clock eaa8',
  'push_pin f10d',
  'qr_code ef6b',
  'qr_code_2 e00a',
  'qr_code_scanner f206',
  'query_builder efd6',
  'query_stats e4fc',
  'question_answer e8af',
  'question_mark eb8b',
  'queue e03c',
  'queue_music e03d',
  'queue_play_next e066',
  'quick_phrases e7d1',
  'quickreply ef6c',
  'quiet_time e1f9',
  'quiet_time_active e291',
  'quiz f04c',
  'r_mobiledata f04d',
  'radar f04e',
  'radio e03e',
  'radio_button_checked e837',
  'radio_button_unchecked e836',
  'radiology e125',
  'railway_alert e9d1',
  'rainy f176',
  'ramen_dining ea64',
  'ramp_left eb9c',
  'ramp_right eb96',
  'range_hood e1ea',
  'rate_review e560',
  'raw_off f04f',
  'raw_on f050',
  'read_more ef6d',
  'real_estate_agent e73a',
  'rebase f845',
  'rebase_edit f846',
  'receipt e8b0',
  'receipt_long ef6e',
  'recent_actors e03f',
  'recommend e9d2',
  'record_voice_over e91f',
  'rectangle eb54',
  'recycling e760',
  'redeem e8f6',
  'redo e15a',
  'reduce_capacity f21c',
  'refresh e5d5',
  'remember_me f051',
  'remote_gen e83e',
  'remove e15b',
  'remove_circle f08f',
  'remove_circle_outline f08f',
  'remove_done e9d3',
  'remove_from_queue e067',
  'remove_moderator e9d4',
  'remove_red_eye e8f4',
  'remove_road ebfc',
  'remove_shopping_cart e928',
  'reorder e8fe',
  'repartition f8e8',
  'repeat e040',
  'repeat_on e9d6',
  'repeat_one e041',
  'repeat_one_on e9d7',
  'replay e042',
  'replay_10 e059',
  'replay_30 e05a',
  'replay_5 e05b',
  'replay_circle_filled e9d8',
  'reply e15e',
  'reply_all e15f',
  'report f052',
  'report_gmailerrorred f052',
  'report_off e170',
  'report_problem f083',
  'request_page f22c',
  'request_quote f1b6',
  'reset_image f824',
  'reset_tv e9d9',
  'restart_alt f053',
  'restaurant e56c',
  'restaurant_menu e561',
  'restore e8b3',
  'restore_from_trash e938',
  'restore_page e929',
  'reviews f07c',
  'rheumatology e128',
  'rib_cage f898',
  'rice_bowl f1f5',
  'ring_volume f0dd',
  'ring_volume_filled f0dd',
  'robot f882',
  'rocket eba5',
  'rocket_launch eb9b',
  'roller_shades ec12',
  'roller_shades_closed ec11',
  'roller_skating ebcd',
  'roofing f201',
  'room e55f',
  'room_preferences f1b8',
  'room_service eb49',
  'rotate_90_degrees_ccw e418',
  'rotate_90_degrees_cw eaab',
  'rotate_left e419',
  'rotate_right e41a',
  'roundabout_left eb99',
  'roundabout_right eba3',
  'rounded_corner e920',
  'route eacd',
  'router e328',
  'routine e20c',
  'rowing e921',
  'rss_feed e0e5',
  'rsvp f055',
  'rtt e9ad',
  'rule f1c2',
  'rule_folder f1c9',
  'run_circle ef6f',
  'running_with_errors e51d',
  'rv_hookup e642',
  'safety_check ebef',
  'safety_divider e1cc',
  'sailing e502',
  'salinity f876',
  'sanitizer f21d',
  'satellite e562',
  'satellite_alt eb3a',
  'save e161',
  'save_alt f090',
  'save_as eb60',
  'saved_search ea11',
  'savings e2eb',
  'scale eb5f',
  'scanner e329',
  'scatter_plot e268',
  'scene e2a7',
  'schedule efd6',
  'schedule_send ea0a',
  'schema e4fd',
  'school e80c',
  'science ea4b',
  'score e269',
  'scoreboard ebd0',
  'screen_lock_landscape e1be',
  'screen_lock_portrait e1bf',
  'screen_lock_rotation e1c0',
  'screen_rotation e1c1',
  'screen_rotation_alt ebee',
  'screen_search_desktop ef70',
  'screen_share e0e2',
  'screenshot f056',
  'screenshot_monitor ec08',
  'scuba_diving ebce',
  'sd e9dd',
  'sd_card e623',
  'sd_card_alert f057',
  'sd_storage e623',
  'search e8b6',
  'search_check f800',
  'search_off ea76',
  'security e32a',
  'security_update f072',
  'security_update_good f073',
  'security_update_warning f074',
  'segment e94b',
  'select_all e162',
  'select_check_box f1fe',
  'self_care f86d',
  'self_improvement ea78',
  'sell f05b',
  'send e163',
  'send_and_archive ea0c',
  'send_time_extension eadb',
  'send_to_mobile f05c',
  'sensor_door f1b5',
  'sensor_occupied ec10',
  'sensor_window f1b4',
  'sensors e51e',
  'sensors_off e51f',
  'sentiment_dissatisfied e811',
  'sentiment_extremely_dissatisfied f194',
  'sentiment_neutral e812',
  'sentiment_satisfied e813',
  'sentiment_satisfied_alt e813',
  'sentiment_very_dissatisfied e814',
  'sentiment_very_satisfied e815',
  'set_meal f1ea',
  'settings e8b8',
  'settings_accessibility f05d',
  'settings_account_box f835',
  'settings_alert f143',
  'settings_applications e8b9',
  'settings_backup_restore e8ba',
  'settings_bluetooth e8bb',
  'settings_brightness e8bd',
  'settings_cell e8bc',
  'settings_ethernet e8be',
  'settings_input_antenna e8bf',
  'settings_input_component e8c0',
  'settings_input_composite e8c0',
  'settings_input_hdmi e8c2',
  'settings_input_svideo e8c3',
  'settings_motion_mode f833',
  'settings_night_sight f832',
  'settings_overscan e8c4',
  'settings_panorama f831',
  'settings_phone e8c5',
  'settings_photo_camera f834',
  'settings_power e8c6',
  'settings_remote e8c7',
  'settings_suggest f05e',
  'settings_system_daydream e1c3',
  'settings_voice e8c8',
  'settop_component e2ac',
  'severe_cold ebd3',
  'shape_line f8d3',
  'shapes e602',
  'share e80d',
  'share_location f05f',
  'share_reviews f8a4',
  'sheets_rtl f823',
  'shelves f86e',
  'shield e9e0',
  'shield_moon eaa9',
  'shield_with_heart e78f',
  'shield_with_house e78d',
  'shop e8c9',
  'shop_2 e8ca',
  'shop_two e8ca',
  'shopping_bag f1cc',
  'shopping_basket e8cb',
  'shopping_cart e8cc',
  'shopping_cart_checkout eb88',
  'short_stay e4d0',
  'short_text e261',
  'shortcut f060',
  'show_chart e6e1',
  'shower f061',
  'shuffle e043',
  'shuffle_on e9e1',
  'shutter_speed e43d',
  'sick f220',
  'sign_language ebe5',
  'signal_cellular_0_bar f0a8',
  'signal_cellular_1_bar f0a9',
  'signal_cellular_2_bar f0aa',
  'signal_cellular_3_bar f0ab',
  'signal_cellular_4_bar e1c8',
  'signal_cellular_alt e202',
  'signal_cellular_alt_1_bar ebdf',
  'signal_cellular_alt_2_bar ebe3',
  'signal_cellular_connected_no_internet_0_bar f0ac',
  'signal_cellular_connected_no_internet_4_bar e1cd',
  'signal_cellular_no_sim e1ce',
  'signal_cellular_nodata f062',
  'signal_cellular_null e1cf',
  'signal_cellular_off e1d0',
  'signal_disconnected f239',
  'signal_wifi_0_bar f0b0',
  'signal_wifi_4_bar f065',
  'signal_wifi_4_bar_lock e1e1',
  'signal_wifi_bad f064',
  'signal_wifi_connected_no_internet_4 f064',
  'signal_wifi_off e1da',
  'signal_wifi_statusbar_4_bar f065',
  'signal_wifi_statusbar_not_connected f0ef',
  'signal_wifi_statusbar_null f067',
  'signpost eb91',
  'sim_card e32b',
  'sim_card_alert f057',
  'sim_card_download f068',
  'single_bed ea48',
  'sip f069',
  'skateboarding e511',
  'skeleton f899',
  'skip_next e044',
  'skip_previous e045',
  'skull f89a',
  'sledding e512',
  'slide_library f822',
  'slideshow e41b',
  'slow_motion_video e068',
  'smart_button f1c1',
  'smart_display f06a',
  'smart_outlet e844',
  'smart_screen f06b',
  'smart_toy f06c',
  'smartphone e32c',
  'smoke_free eb4a',
  'smoking_rooms eb4b',
  'sms e625',
  'sms_failed e87f',
  'snippet_folder f1c7',
  'snooze e046',
  'snowboarding e513',
  'snowing e80f',
  'snowmobile e503',
  'snowshoeing e514',
  'soap f1b2',
  'social_distance e1cb',
  'solar_power ec0f',
  'sort e164',
  'sort_by_alpha e053',
  'sos ebf7',
  'sound_detection_dog_barking f149',
  'sound_detection_glass_break f14a',
  'sound_detection_loud_sound f14b',
  'soup_kitchen e7d3',
  'source f1c8',
  'south f1e3',
  'south_america e7e4',
  'south_east f1e4',
  'south_west f1e5',
  'spa eb4c',
  'space_bar e256',
  'space_dashboard e66b',
  'spatial_audio ebeb',
  'spatial_audio_off ebe8',
  'spatial_tracking ebea',
  'speaker e32d',
  'speaker_group e32e',
  'speaker_notes e8cd',
  'speaker_notes_off e92a',
  'speaker_phone e0d2',
  'specific_gravity f872',
  'speech_to_text f8a7',
  'speed e9e4',
  'spellcheck e8ce',
  'splitscreen f06d',
  'spoke e9a7',
  'sports ea30',
  'sports_bar f1f3',
  'sports_baseball ea51',
  'sports_basketball ea26',
  'sports_cricket ea27',
  'sports_esports ea28',
  'sports_football ea29',
  'sports_golf ea2a',
  'sports_gymnastics ebc4',
  'sports_handball ea33',
  'sports_hockey ea2b',
  'sports_kabaddi ea34',
  'sports_martial_arts eae9',
  'sports_mma ea2c',
  'sports_motorsports ea2d',
  'sports_rugby ea2e',
  'sports_score f06e',
  'sports_soccer ea2f',
  'sports_tennis ea32',
  'sports_volleyball ea31',
  'sprinkler e29a',
  'sprint f81f',
  'square eb36',
  'square_foot ea49',
  'ssid_chart eb66',
  'stacked_bar_chart e9e6',
  'stacked_line_chart f22b',
  'stadia_controller f135',
  'stadium eb90',
  'stairs f1a9',
  'star e838',
  'star_border e885',
  'star_border_purple500 e885',
  'star_half e839',
  'star_outline e885',
  'star_purple500 e838',
  'star_rate f0ec',
  'star_rate_half ec45',
  'stars e8d0',
  'start e089',
  'stay_current_landscape e0d3',
  'stay_current_portrait e0d4',
  'stay_primary_landscape e0d5',
  'stay_primary_portrait e0d6',
  'stethoscope f805',
  'stethoscope_arrow f807',
  'stethoscope_check f806',
  'sticky_note_2 f1fc',
  'stop e047',
  'stop_circle ef71',
  'stop_screen_share e0e3',
  'storage e1db',
  'store e8d1',
  'store_mall_directory e8d1',
  'storefront ea12',
  'storm f070',
  'straight eb95',
  'straighten e41c',
  'stream e9e9',
  'streetview e56e',
  'strikethrough_s e257',
  'stroller f1ae',
  'style e41d',
  'styler e273',
  'subdirectory_arrow_left e5d9',
  'subdirectory_arrow_right e5da',
  'subject e8d2',
  'subscript f111',
  'subscriptions e064',
  'subtitles e048',
  'subtitles_off ef72',
  'subway e56f',
  'summarize f071',
  'sunny e81a',
  'sunny_snowing e819',
  'superscript f112',
  'supervised_user_circle e939',
  'supervisor_account e8d3',
  'support ef73',
  'support_agent f0e2',
  'surfing e515',
  'surround_sound e049',
  'swap_calls e0d7',
  'swap_horiz e8d4',
  'swap_horizontal_circle e933',
  'swap_vert e8d5',
  'swap_vertical_circle e8d6',
  'swipe e9ec',
  'swipe_down eb53',
  'swipe_down_alt eb30',
  'swipe_left eb59',
  'swipe_left_alt eb33',
  'swipe_right eb52',
  'swipe_right_alt eb56',
  'swipe_up eb2e',
  'swipe_up_alt eb35',
  'swipe_vertical eb51',
  'switch e1f4',
  'switch_access_shortcut e7e1',
  'switch_access_shortcut_add e7e2',
  'switch_account e9ed',
  'switch_camera e41e',
  'switch_left f1d1',
  'switch_right f1d2',
  'switch_video e41f',
  'swords f889',
  'synagogue eab0',
  'sync e627',
  'sync_alt ea18',
  'sync_disabled e628',
  'sync_lock eaee',
  'sync_problem e629',
  'sync_saved_locally f820',
  'system_security_update f072',
  'system_security_update_good f073',
  'system_security_update_warning f074',
  'system_update f072',
  'system_update_alt e8d7',
  'tab e8d8',
  'tab_unselected e8d9',
  'table f191',
  'table_bar ead2',
  'table_chart e265',
  'table_lamp e1f2',
  'table_restaurant eac6',
  'table_rows f101',
  'table_view f1be',
  'tablet e32f',
  'tablet_android e330',
  'tablet_mac e331',
  'tag e9ef',
  'tag_faces ea22',
  'takeout_dining ea74',
  'tamper_detection_off e82e',
  'tamper_detection_on f8c8',
  'tap_and_play e62b',
  'tapas f1e9',
  'task f075',
  'task_alt e2e6',
  'taxi_alert ef74',
  'team_dashboard e013',
  'temp_preferences_custom f8c9',
  'temp_preferences_eco f8ca',
  'temple_buddhist eab3',
  'temple_hindu eaaf',
  'tenancy f0e3',
  'terminal eb8e',
  'terrain e564',
  'text_decrease eadd',
  'text_fields e262',
  'text_format e165',
  'text_increase eae2',
  'text_rotate_up e93a',
  'text_rotate_vertical e93b',
  'text_rotation_angledown e93c',
  'text_rotation_angleup e93d',
  'text_rotation_down e93e',
  'text_rotation_none e93f',
  'text_snippet f1c6',
  'text_to_speech f1bc',
  'textsms e625',
  'texture e421',
  'theater_comedy ea66',
  'theaters e8da',
  'thermometer e846',
  'thermostat f076',
  'thermostat_auto f077',
  'thermostat_carbon f178',
  'thumb_down e8db',
  'thumb_down_alt e8db',
  'thumb_down_filled e8db',
  'thumb_down_off e8db',
  'thumb_down_off_alt e8db',
  'thumb_up f079',
  'thumb_up_alt f079',
  'thumb_up_filled f079',
  'thumb_up_off f079',
  'thumb_up_off_alt f079',
  'thumbs_up_down e8dd',
  'thunderstorm ebdb',
  'tibia f89b',
  'tibia_alt f89c',
  'time_auto f0e4',
  'time_to_leave eff7',
  'timelapse e422',
  'timeline e922',
  'timer e425',
  'timer_10 e423',
  'timer_10_alt_1 efbf',
  'timer_10_select f07a',
  'timer_3 e424',
  'timer_3_alt_1 efc0',
  'timer_3_select f07b',
  'timer_off e426',
  'tips_and_updates e79a',
  'tire_repair ebc8',
  'title e264',
  'toc e8de',
  'today e8df',
  'toggle_off e9f5',
  'toggle_on e9f6',
  'token ea25',
  'toll e8e0',
  'tonality e427',
  'tools_flat_head f8cb',
  'tools_installation_kit e2ab',
  'tools_ladder e2cb',
  'tools_level e77b',
  'tools_phillips f8cc',
  'tools_pliers_wire_stripper e2aa',
  'tools_power_drill e1e9',
  'tools_wrench f8cd',
  'topic f1c8',
  'tornado e199',
  'total_dissolved_solids f877',
  'touch_app e913',
  'tour ef75',
  'toys e332',
  'toys_fan f887',
  'track_changes e8e1',
  'traffic e565',
  'trail_length eb5e',
  'trail_length_medium eb63',
  'trail_length_short eb6d',
  'train e570',
  'tram e571',
  'transcribe f8ec',
  'transfer_within_a_station e572',
  'transform e428',
  'transgender e58d',
  'transit_enterexit e579',
  'translate e8e2',
  'transportation e21d',
  'travel_explore e2db',
  'trending_down e8e3',
  'trending_flat e8e4',
  'trending_up e8e5',
  'trip_origin e57b',
  'trolley f86b',
  'try f07c',
  'tsunami ebd8',
  'tty f1aa',
  'tune e429',
  'tungsten f00d',
  'turn_left eba6',
  'turn_right ebab',
  'turn_sharp_left eba7',
  'turn_sharp_right ebaa',
  'turn_slight_left eba4',
  'turn_slight_right eb9a',
  'turned_in e8e7',
  'turned_in_not e8e7',
  'tv e333',
  'tv_gen e830',
  'tv_off e647',
  'tv_with_assistant e785',
  'two_wheeler e9f9',
  'type_specimen f8f0',
  'u_turn_left eba1',
  'u_turn_right eba2',
  'ulna_radius f89d',
  'ulna_radius_alt f89e',
  'umbrella f1ad',
  'unarchive e169',
  'undo e166',
  'unfold_less e5d6',
  'unfold_less_double f8cf',
  'unfold_more e5d7',
  'unfold_more_double f8d0',
  'unknown_med eabd',
  'unpublished f236',
  'unsubscribe e0eb',
  'upcoming f07e',
  'update e923',
  'update_disabled e075',
  'upgrade f0fb',
  'upload f09b',
  'upload_file e9fc',
  'urology e137',
  'usb e1e0',
  'usb_off e4fa',
  'vaccines e138',
  'valve e224',
  'vape_free ebc6',
  'vaping_rooms ebcf',
  'variables f851',
  'verified ef76',
  'verified_user f013',
  'vertical_align_bottom e258',
  'vertical_align_center e259',
  'vertical_align_top e25a',
  'vertical_distribute e076',
  'vertical_shades ec0e',
  'vertical_shades_closed ec0d',
  'vertical_split e949',
  'vibration e62d',
  'video_call e070',
  'video_camera_back f07f',
  'video_camera_front f080',
  'video_camera_front_off f83b',
  'video_chat f8a0',
  'video_file eb87',
  'video_label e071',
  'video_library e04a',
  'video_settings ea75',
  'video_stable f081',
  'videocam e04b',
  'videocam_off e04c',
  'videogame_asset e338',
  'videogame_asset_off e500',
  'view_agenda e8e9',
  'view_array e8ea',
  'view_carousel e8eb',
  'view_column e8ec',
  'view_column_2 f847',
  'view_comfy e42a',
  'view_comfy_alt eb73',
  'view_compact e42b',
  'view_compact_alt eb74',
  'view_cozy eb75',
  'view_day e8ed',
  'view_headline e8ee',
  'view_in_ar efc9',
  'view_in_ar_new efc9',
  'view_kanban eb7f',
  'view_list e8ef',
  'view_module e8f0',
  'view_quilt e8f1',
  'view_sidebar f114',
  'view_stream e8f2',
  'view_timeline eb85',
  'view_week e8f3',
  'vignette e435',
  'villa e586',
  'visibility e8f4',
  'visibility_off e8f5',
  'vital_signs e650',
  'vitals e13b',
  'voice_chat e62e',
  'voice_over_off e94a',
  'voicemail e0d9',
  'volcano ebda',
  'volume_down e04d',
  'volume_down_alt e79c',
  'volume_mute e04e',
  'volume_off e04f',
  'volume_up e050',
  'volunteer_activism ea70',
  'voting_chip f852',
  'vpn_key e0da',
  'vpn_key_off eb7a',
  'vpn_lock e62f',
  'vrpano f082',
  'wall_lamp e2b4',
  'wallet f8ff',
  'wallpaper e1bc',
  'ward e13c',
  'warehouse ebb8',
  'warning f083',
  'warning_amber f083',
  'wash f1b1',
  'watch e334',
  'watch_later efd6',
  'watch_off eae3',
  'water f084',
  'water_damage f203',
  'water_do f870',
  'water_drop e798',
  'water_ec f875',
  'water_heater e284',
  'water_lux f874',
  'water_orp f878',
  'water_ph f87a',
  'water_voc f87b',
  'waterfall_chart ea00',
  'waves e176',
  'waving_hand e766',
  'wb_auto e42c',
  'wb_cloudy f15c',
  'wb_incandescent f07d',
  'wb_iridescent f00d',
  'wb_shade ea01',
  'wb_sunny e430',
  'wb_twilight e1c6',
  'wc e63d',
  'weather_snowy e2cd',
  'web e051',
  'web_asset e069',
  'web_asset_off ef47',
  'web_stories e595',
  'webhook eb92',
  'weekend e16b',
  'weight e13d',
  'west f1e6',
  'whatshot e80e',
  'wheelchair_pickup f1ab',
  'where_to_vote e177',
  'widgets e1bd',
  'width_full f8f5',
  'width_normal f8f6',
  'width_wide f8f7',
  'wifi e63e',
  'wifi_1_bar e4ca',
  'wifi_2_bar e4d9',
  'wifi_calling ef77',
  'wifi_calling_1 f0e7',
  'wifi_calling_2 f0e7',
  'wifi_calling_3 f0e7',
  'wifi_channel eb6a',
  'wifi_find eb31',
  'wifi_lock e1e1',
  'wifi_off e648',
  'wifi_password eb6b',
  'wifi_protected_setup f0fc',
  'wifi_tethering e1e2',
  'wifi_tethering_error ead9',
  'wifi_tethering_off f087',
  'wind_power ec0c',
  'window f088',
  'window_closed e77e',
  'window_open e78c',
  'window_sensor e2bb',
  'wine_bar f1e8',
  'woman e13e',
  'woman_2 f8e7',
  'work e943',
  'work_history ec09',
  'work_off e942',
  'work_outline e943',
  'workspace_premium e7af',
  'workspaces e1a0',
  'workspaces_outline e1a0',
  'wounds_injuries e13f',
  'wrap_text e25b',
  'wrong_location ef78',
  'wysiwyg f1c3',
  'yard f089',
  'youtube_activity f85a',
  'youtube_searched_for e8fa',
  'zone_person_alert e781',
  'zone_person_idle e77a',
  'zone_person_urgent e788',
  'zoom_in e8ff',
  'zoom_in_map eb2d',
  'zoom_out e900',
  'zoom_out_map e56b',
];
const icons = codepoints.map(cp => cp.split(' ')[0]);

const mwIconGalleryCss = ":host{display:block}.gallery-filter{margin-bottom:20px}.gallery-toolbar{display:flex;flex-wrap:wrap;gap:20px;align-items:center;justify-content:space-between;margin-bottom:20px}.hint{display:flex;gap:5px;justify-content:start;align-items:center;margin-bottom:20px;color:var(--mw-core-color-neutral-500);font-family:var(--mw-core-font-font-families-body);font-size:var(--mw-core-font-size-sm);line-height:var(--mw-core-font-line-height-sm)}.gallery{max-height:80vh;overflow-y:scroll;display:grid;grid-template-columns:repeat(auto-fill, 112px);-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;row-gap:24px;column-gap:16px}.gallery-item-container{position:relative}.gallery-item{height:128px;width:112px;border-radius:var(--mw-component-card-border-radius)}.gallery-item mw-icon{display:block;font-size:48px;left:50%;position:absolute;top:40px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);max-width:88px;font-size:48px;color:var(--mw-core-color-neutral-500)}.gallery-item-text{font-family:var(--mw-core-font-font-families-body);font-size:var(--mw-core-font-size-sm);line-height:var(--mw-core-font-line-height-sm);color:var(--mw-core-color-neutral-500);text-align:center;box-sizing:border-box;left:50%;padding:0 8px;position:absolute;top:70px;-webkit-transform:translate(-50%);transform:translate(-50%);width:100%}.gallery-item-container:hover{cursor:pointer;background:var(--mw-core-color-neutral-50);border-radius:var(--mw-component-card-border-radius);-webkit-border-radius:var(--mw-component-card-border-radius);-moz-border-radius:var(--mw-component-card-border-radius);box-shadow:inset 0 0 0 var(--mw-component-card-border-width-outlined) var(--mw-component-card-border-outlined)}";

const MwIconGallery = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onInput = (event) => {
      const filterTerm = event.target.value.toLowerCase();
      this.filteredIcons = this.icons.filter(icon => icon.toLowerCase().includes(filterTerm));
    };
    this.copyIconName = (name) => {
      navigator.clipboard
        .writeText(name)
        .then(() => console.info(`Copied icon name "${name}"`))
        .catch(e => console.error("Failed to copy icon name", e));
    };
    this.onToggleFill = () => {
      this.fill = !this.fill;
    };
    this.onWeightChange = (event) => {
      this.weight = event.target.value;
    };
    this.icons = icons;
    this.filteredIcons = [];
    this.fill = false;
    this.weight = 400;
  }
  componentWillLoad() {
    this.filteredIcons = this.icons;
    this.weight = 400;
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "gallery-toolbar" }, index.h("mw-textfield", { class: "gallery-filter", onInput: this.onInput, placeholder: "Type to filter icons", id: "icon-filter" }, index.h("mw-icon", { icon: "search", slot: "icon-start" })), index.h("mw-slider", { inline: true, label: "Weight", onInput: this.onWeightChange, id: "weight", name: "weight", min: 100, max: 700, step: 100, value: this.weight }), index.h("mw-switch", { class: "toggle-fill", label: "filled styles", onInput: this.onToggleFill })), index.h("div", { class: "hint" }, index.h("mw-icon", { icon: "content_copy", size: "small" }), "Click item to copy icon name."), index.h("div", { class: "gallery" }, this.filteredIcons.map(iconName => (index.h("div", { class: `gallery-item-container ${iconName}`, onClick: () => this.copyIconName(iconName) }, index.h("div", { class: "gallery-item" }, index.h("mw-icon", { fill: this.fill, icon: iconName, weight: this.weight, size: "large" }), index.h("p", { class: "gallery-item-text" }, iconName.split("_").join(" ")))))))));
  }
};
MwIconGallery.style = mwIconGalleryCss;

const mwLabelCss = ".mw-label:empty{display:none}.label{padding:0 var(--mw-component-text-field-padding-label-vertical-x);font-family:var(--mw-component-text-field-label-font-family);font-weight:var(--mw-component-text-field-label-font-weight);font-size:var(--mw-component-text-field-label-font-size);line-height:var(--mw-component-text-field-label-line-height)}.required{color:var(--mw-component-text-field-fg-required)}";

const MwLabel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.name = undefined;
    this.label = undefined;
    this.required = false;
  }
  render() {
    const { label, name, required } = this;
    return (index.h(index.Host, { role: "label", class: "mw-label" }, !!label && (index.h("label", { htmlFor: name, class: "label" }, label, required && index.h("span", { class: "required" }, "*")))));
  }
};
MwLabel.style = mwLabelCss;

const mwLinkCss = ".mw-link{font-family:var(--mw-component-link-typo-font-family);font-size:var(--mw-component-link-typo-font-size);font-weight:var(--mw-component-link-typo-font-weight);color:var(--mw-component-link-color-fg-default);text-decoration:none}.mw-link.underline{text-decoration:var(--mw-component-link-typo-text-decoration);text-decoration:underline}.mw-link:hover{color:var(--mw-component-link-color-fg-hover)}.mw-link:focus{color:var(--mw-component-link-color-fg-focused)}.mw-link:active{color:var(--mw-component-link-color-fg-pressed)}";

const MwLink = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.href = undefined;
    this.target = TargetEnum.SELF;
    this.underline = true;
  }
  render() {
    return (index.h("a", { class: `mw-link ${this.underline && "underline"}`, href: this.href, target: this.target }, index.h("slot", null)));
  }
};
MwLink.style = mwLinkCss;

var LoginLayoutEnum;
(function (LoginLayoutEnum) {
  LoginLayoutEnum["START"] = "start";
  LoginLayoutEnum["CENTER"] = "center";
  LoginLayoutEnum["END"] = "end";
})(LoginLayoutEnum || (LoginLayoutEnum = {}));

const mwLoginCss = ":host{display:block;overflow:hidden;width:100%;height:100%}.mw-login{display:grid;position:relative;width:100%;height:100%;box-sizing:border-box;grid-template-areas:\"start end\";grid-template-columns:50% 50%;align-items:center}.mw-login--center{grid-template-areas:\"start center end\";grid-template-columns:30% 40% 30%}.mw-login .mw-login-background{height:100%;max-height:100%}.mw-login .mw-login-background--start{grid-area:end}.mw-login .mw-login-background--end{grid-area:start}.mw-login .mw-login-background__image{width:100%;height:100%;object-fit:cover}.mw-login .mw-login-container{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:var(--mw-component-log-in-content-gap-within);background:var(--mw-component-log-in-bg-default);padding:var(--mw-component-log-in-margin-xy);overflow-y:auto;box-sizing:border-box}.mw-login .mw-login-container--start{grid-area:start}.mw-login .mw-login-container--center{grid-area:center}.mw-login .mw-login-container--end{grid-area:end}.mw-login .mw-login-container>*{display:flex;justify-content:center;width:100%}.mw-login .mw-login-container ::part(button){width:100%}.mw-login .mw-login-container #password::part(icon-end){cursor:pointer}.mw-login .mw-login-container__headline{text-align:center;font-family:var(--mw-component-log-in-title-font-family);font-weight:var(--mw-component-log-in-title-font-weight);font-size:var(--mw-component-log-in-title-font-size);line-height:var(--mw-component-log-in-title-line-height)}.mw-login .mw-login-container__form{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--mw-component-log-in-content-gap-within)}.mw-login .mw-login-container__form #email,.mw-login .mw-login-container__form #password{width:100%}.mw-login .mw-login-container__user-actions{display:flex;align-items:center}.mw-login .mw-login-container__user-actions .spacefiller{flex:1 1 auto}.mw-login .mw-login-container__user-actions mw-link{text-align:right}.mw-login .mw-login-container__sign-up{display:flex;align-items:center;justify-content:center;gap:var(--mw-component-log-in-sign-up-gap-within);font-family:Poppins;font-size:16px;line-height:24px;font-weight:400;}";

const MwLogin = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.submitEmitter = index.createEvent(this, "submitEmitter", 4);
    this.passwordType = "password";
    this.headline = undefined;
    this.layout = LoginLayoutEnum.CENTER;
    this.backgroundImage = undefined;
    this.logo = undefined;
    this.signUpHref = undefined;
    this.forgotPasswordHref = undefined;
    this.togglePasswordType = this.togglePasswordType.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);
  }
  togglePasswordType() {
    this.passwordType = this.passwordType === "text" ? "password" : "text";
  }
  submitLoginForm() {
    const formData = {
      email: "",
      password: "",
    };
    Array.from(this.loginForm.children).forEach((child) => {
      formData[child.name] = child.value;
    });
    this.submitEmitter.emit(formData);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: `mw-login mw-login--${this.layout}` }, this.backgroundImage && this.layout !== LoginLayoutEnum.CENTER && (index.h("div", { class: `mw-login-background mw-login-background--${this.layout}` }, index.h("img", { class: "mw-login-background__image", src: this.backgroundImage }))), index.h("div", { class: `mw-login-container mw-login-container--${this.layout}` }, this.logo && (index.h("div", { class: "mw-login-container__logo" }, index.h("img", { src: this.logo }))), this.headline && index.h("div", { class: "mw-login-container__headline" }, this.headline), index.h("form", { class: "mw-login-container__form", ref: el => (this.loginForm = el) }, index.h("mw-textfield", { id: "email", name: "email", type: "email", label: "Email address", required: true }, index.h("mw-icon", { icon: "mail", slot: "icon-end" })), index.h("mw-textfield", { id: "password", name: "password", type: this.passwordType, label: "Password", required: true, "helper-text": "min. 7 characters, 1 upper case, 1 lower case" }, index.h("mw-icon", { icon: this.passwordType === "text" ? "visibility_off" : "visibility", slot: "icon-end", onClick: this.togglePasswordType }))), index.h("div", { class: "mw-login-container__user-actions" }, index.h("mw-checkbox", { label: "Remember me" }), index.h("span", { class: "spacefiller" }), this.forgotPasswordHref && index.h("mw-link", { href: this.forgotPasswordHref }, "Forgot your password?")), index.h("mw-button", { label: "Log In", onClick: this.submitLoginForm, id: "submit" }), this.signUpHref && (index.h("div", { class: "mw-login-container__sign-up" }, "Dont't have an account?", " ", index.h("mw-link", { href: this.signUpHref, underline: true }, "Sign up")))))));
  }
};
MwLogin.style = mwLoginCss;

const mwMenuCss = ":host{display:block}";

const MwMenu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.testId = undefined;
    this.placement = "bottom-end";
    this.open = false;
  }
  render() {
    return (index.h(index.Host, null, index.h("mw-popover", { testId: this.testId, placement: this.placement, open: this.open, "no-padding": true }, index.h("div", { slot: "anchor" }, index.h("slot", { name: "anchor" })), index.h("div", { slot: "content", class: "menu" }, index.h("slot", null)))));
  }
};
MwMenu.style = mwMenuCss;

const mwMenuItemCss = ":host{display:block}.mw-menu-item{display:flex;flex-direction:column;justify-content:center;gap:var(--mw-component-menu-item-gap-between);padding:0 12px;height:var(--mw-component-size-menu-item-default-h);background:var(--mw-component-menu-item-bg-default);border:var(--mw-component-menu-item-border-width-default) solid var(--mw-component-menu-item-border-default);border-radius:var(--mw-component-menu-item-border-radius)}.mw-menu-item.selected .mw-menu-item-title{color:var(--mw-component-menu-item-fg-selected)}.mw-menu-item.disabled .mw-menu-item-title{color:var(--mw-component-menu-item-fg-disabled)}.mw-menu-item:focus:not(.disabled) .mw-menu-item-title{color:var(--mw-component-menu-item-fg-focused)}.mw-menu-item:focus:not(.disabled){box-shadow:inset 0 0 0 var(--mw-component-menu-item-border-width-focused) var(--mw-component-menu-item-border-focused)}.mw-menu-item:active:not(.disabled) .mw-menu-item-title{color:var(--mw-component-menu-item-fg-pressed)}.mw-menu-item:hover:not(.disabled) .mw-menu-item-title{color:var(--mw-component-menu-item-fg-hover)}.mw-menu-item:hover .mw-menu-item-subtitle,.mw-menu-item:hover .mw-menu-item-title{cursor:default}.mw-menu-item-title{color:var(--mw-component-menu-item-fg-title);font-family:var(--mw-component-menu-item-title-font-family);font-weight:var(--mw-component-menu-item-title-font-weight);line-height:var(--mw-component-menu-item-title-line-height);font-size:var(--mw-component-menu-item-title-font-size)}.mw-menu-item-subtitle{color:var(--mw-component-menu-item-fg-subtitle);font-family:var(--mw-component-menu-item-subtitle-font-family);font-weight:var(--mw-component-menu-item-subtitle-font-weight);line-height:var(--mw-component-menu-item-subtitle-line-height);font-size:var(--mw-component-menu-item-subtitle-font-size)}";

const MwMenuItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.clickEmitter = index.createEvent(this, "mwMenuItemClick", 4);
    this.handleClick = (event) => {
      event.target.blur();
      if (!this.disabled)
        this.clickEmitter.emit(event);
    };
    this.text = undefined;
    this.subtitle = undefined;
    this.disabled = false;
    this.selected = false;
    this.value = undefined;
  }
  componentWillLoad() {
    if (!this.value)
      this.value = this.text;
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { onClick: this.handleClick, tabindex: "0", class: { "mw-menu-item": true, "disabled": this.disabled, "selected": this.selected } }, !!this.text && index.h("div", { class: "mw-menu-item-title" }, this.text), !!this.subtitle && index.h("div", { class: "mw-menu-item-subtitle" }, this.subtitle))));
  }
};
MwMenuItem.style = mwMenuItemCss;

const mwMenuListCss = ":host{display:block}.mw-menu-list{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);background:var(--mw-component-menu-item-bg-default);border-radius:var(--mw-component-menu-item-border-radius);border-width:var(--mw-component-menu-item-border-width-default)}";

const MwMenuList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.testId = undefined;
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { "test-id": this.testId, slot: "content", class: "mw-menu-list" }, index.h("slot", null))));
  }
};
MwMenuList.style = mwMenuListCss;

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


const applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function getUAString() {
  var uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }

  return navigator.userAgent;
}

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  var _ref = isElement(element) ? getWindow(element) : window,
      visualViewport = _ref.visualViewport;

  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


const arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

function getVariation(placement) {
  return placement.split('-')[1];
}

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


const computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


const eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


const flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


const hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


const offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


const popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = offset + overflow[mainSide];
    var max$1 = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


const preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

const mwPopoverCss = ":host{display:block}.mw-popover{position:relative}.mw-popover-content{min-width:180px;width:100%;box-sizing:border-box;margin:12px;visibility:hidden;position:absolute;box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);padding:12px;background:var(--mw-component-menu-item-bg-default);border-radius:var(--mw-component-menu-item-border-radius);border-width:var(--mw-component-menu-item-border-width-default)}.mw-popover-content.no-padding{padding:0;margin:0}.mw-popover-content.open{visibility:visible;position:relative;z-index:999}";

const MwPopover = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.openEmitter = index.createEvent(this, "mwPopoverOpen", 6);
    // @ClickOutside()
    // private toggleIfOpen(): void {
    //   if (this.open && this.dismissable) {
    //     this.open = !this.open;
    //   }
    // }
    this.onClick = (event) => {
      if (!this.disabled) {
        event.preventDefault();
        this.open = !this.open;
        createPopper(this.anchorRef, this.contentRef, {
          placement: this.placement,
        });
      }
    };
    this.closePopoverOnClick = (event) => {
      if (this.closeOnClick && !this.disabled) {
        event.preventDefault();
        this.open = !this.open;
      }
    };
    this.testId = undefined;
    this.open = undefined;
    this.disabled = false;
    this.placement = "bottom";
    this.dismissable = false;
    this.closeOnClick = false;
    this.noPadding = false;
    this.name = "tooltip";
  }
  onOpenChange() {
    this.openEmitter.emit(this.open);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "mw-popover" }, index.h("div", { "aria-describedby": this.name, onClick: this.onClick, ref: el => {
        this.anchorRef = el;
      } }, index.h("slot", { name: "anchor" })), index.h("div", { role: "tooltip", id: this.name, class: { "mw-popover-content": true, "open": this.open, "no-padding": this.noPadding }, ref: el => {
        this.contentRef = el;
      }, onClick: this.closePopoverOnClick }, index.h("slot", { name: "content" })))));
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "open": ["onOpenChange"]
  }; }
};
MwPopover.style = mwPopoverCss;

const mwRadioCss = ".mw-radio-container{display:flex;position:relative;cursor:pointer;align-items:center;padding-top:var(--mw-component-controls-with-label-padding-y);padding-bottom:var(--mw-component-controls-with-label-padding-y);padding-right:var(--mw-component-controls-with-label-padding-r);padding-left:var(--mw-component-controls-with-label-padding-l);gap:var(--mw-component-controls-with-label-gap);}.mw-radio-container:hover{}.mw-radio-container:hover input~.mw-radio{background-color:var(--mw-component-controls-color-bg-hover)}.mw-radio-container:hover input:checked~.mw-radio{background-color:var(--mw-component-controls-color-bg-hover)}.mw-radio-container:active{}.mw-radio-container:active input~.mw-radio{background-color:var(--mw-component-controls-color-bg-pressed)}.mw-radio-container:active input:checked~.mw-radio{background-color:var(--mw-component-controls-color-bg-pressed)}.mw-radio-container:has(input:disabled){cursor:default}.mw-radio-container:has(input:disabled) .mw-radio-label{color:var(--mw-component-controls-color-label-disabled)}.mw-radio-container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0;}.mw-radio-container input:checked~.mw-radio{border-width:var(--mw-component-controls-border-width-selected);background-color:var(--mw-component-controls-color-bg-selected)}.mw-radio-container input:checked~.mw-radio:after{content:\"\";border-radius:var(--border-radius-standard-circle);height:var(--mw-component-size-controls-radiobutton-fill);width:var(--mw-component-size-controls-radiobutton-fill);background-color:var(--mw-component-controls-color-fg-default)}.mw-radio-container input:disabled:checked~.mw-radio{background-color:var(--mw-component-controls-color-bg-disabled);border-width:var(--mw-component-controls-border-width-selected)}.mw-radio-container input:disabled:checked~.mw-radio:after{background-color:var(--mw-component-controls-color-fg-disabled)}.mw-radio-container input:focus~.mw-radio{border:var(--mw-component-controls-border-width-focused) solid var(--mw-component-controls-color-outline-default)}.mw-radio-container input:focus:checked~.mw-radio{background-color:var(--mw-component-controls-color-bg-focused)}.mw-radio-container input:disabled~.mw-radio{border:var(--mw-component-controls-border-width-unselected) solid var(--mw-component-controls-color-outline-disabled);background-color:var(--mw-component-controls-color-bg-unselected)}.mw-radio-container .mw-radio-label{color:var(--mw-component-controls-color-label-default);font-size:var(--mw-semantic-font-font-size-body-regular);line-height:var(--mw-semantic-font-line-height-body-regular);font-family:var(--mw-core-font-font-families-body);font-weight:var(--mw-core-font-weight-body-regular)}.mw-radio-container .mw-radio{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;display:flex;justify-content:center;align-items:center;height:var(--mw-component-size-controls-radiobutton-outline);width:var(--mw-component-size-controls-radiobutton-outline);border:var(--mw-component-controls-border-width-unselected) solid var(--mw-component-controls-color-outline-default);border-radius:var(--border-radius-standard-circle)}";

let radioIds = 0;
const MwRadio = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.radioId = `radio-input-${radioIds++}`;
    this.setSelection = () => {
      const { radioGroup, radioGroupValue, value } = this;
      if (radioGroup) {
        this.checked = radioGroupValue === value;
      }
    };
    this.disabled = undefined;
    this.checked = false;
    this.value = undefined;
    this.name = undefined;
    this.testId = undefined;
    this.label = undefined;
    this.onClick = this.onClick.bind(this);
  }
  get radioGroupValue() {
    const { radioGroup } = this;
    // for some reason the initial value here is defined but "undefined"
    return (radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.value) || radioGroup.getAttribute("value");
  }
  connectedCallback() {
    const radioGroup = (this.radioGroup = this.hostElement.closest("mw-radio-group"));
    if (radioGroup) {
      this.setSelection();
      radioGroup.addEventListener("radioChange", this.setSelection);
    }
  }
  disconnectedCallback() {
    const { radioGroup } = this;
    if (radioGroup) {
      radioGroup.removeEventListener("radioChange", this.setSelection);
      this.radioGroup = null;
    }
  }
  onClick(event) {
    event.preventDefault();
    this.checked = !this.checked;
  }
  render() {
    return (index.h(index.Host, { "test-id": this.testId, class: "mw-radio-container", onClick: this.onClick, "aria-checked": `${this.checked}`, "aria-hidden": this.disabled ? "true" : null, role: "radio" }, index.h("input", { id: this.radioId, type: "radio", value: this.value, name: this.name, checked: this.checked, disabled: this.disabled }), index.h("span", { class: "mw-radio" }), index.h("label", { class: "mw-radio-label", htmlFor: this.radioId }, this.label)));
  }
  get hostElement() { return index.getElement(this); }
};
MwRadio.style = mwRadioCss;

const mwSliderCss = ":host{display:block}.mw-slider,.mw-slider-container{display:flex;width:100%;flex-direction:column;gap:var(--mw-component-slider-with-label-gap-within-y)}.mw-slider.inline{flex-direction:row;display:inline-flex;align-items:center}.mw-slider.inline .mw-slider-label{width:var(--mw-component-size-slider-label-horizontal-width)}.mw-slider.disabled .mw-slider-label{color:var(--mw-component-slider-disabled)}.mw-slider-input-wrapper{position:relative;display:flex;align-items:center;width:100%;gap:12px}.mw-slider-input{width:100%}.mw-slider:not(.disabled):hover #mw-slider-range-value{opacity:1}#mw-slider-range-value{--size:28px;transition:opacity 0.2s ease-in-out;opacity:0;z-index:9999;position:absolute;display:flex;justify-content:center;align-items:center;border-radius:50%;top:calc(-1 * (var(--size) + 4px + var(--mw-component-slider-handle-hover-gap-between)));width:var(--size);height:var(--size);background:var(--mw-component-slider-focus);color:var(--mw-component-slider-fg);transform:translateX(calc(-0.5 * var(--size)));font-family:var(--mw-component-text-field-label-font-family);font-weight:var(--mw-component-text-field-label-font-weight);font-size:var(--mw-component-text-field-label-font-size);line-height:var(--mw-component-text-field-label-line-height)}#mw-slider-range-value:after{content:\"\";position:absolute;width:0;height:0;border-top:10px solid var(--mw-component-slider-focus);border-left:10px solid transparent;border-right:10px solid transparent;top:24px;left:4px}.mw-slider-input-wrapper mw-icon{color:var(--mw-component-slider-icons-default)}.mw-slider-input-wrapper.disabled mw-icon{color:var(--mw-component-slider-disabled)}input[type=range]{-webkit-appearance:none;transition:all ease 100ms;height:var(--thumb-height);border-radius:9999px;appearance:none;transition:all ease 100ms;height:var(--thumb-height);position:relative;background:rgba(255, 255, 255, 0);overflow:hidden;width:100%;color:var(--mw-component-slider-default-active);--thumb-height:var(--mw-component-size-slider-handle);--track-height:var(--mw-component-size-slider-track-h);--track-color:var(--mw-component-slider-default-inactive);--clip-edges:0.125em;}input[type=range]:active{cursor:grabbing}input[type=range]:active::-webkit-slider-thumb{cursor:grabbing;background:var(--mw-component-slider-pressed);color:var(--mw-component-slider-pressed)}input[type=range]:active::-moz-range-thumb,input[type=range]:active::-moz-range-progress{cursor:grabbing;background:var(--mw-component-slider-pressed)}input[type=range]:active::-moz-range-thumb{cursor:grabbing}input[type=range]:focus{outline:none;border:none}input[type=range]:focus::-webkit-slider-thumb{border:var(--mw-core-border-width-sm) solid var(--mw-semantic-color-border-default)}input[type=range]:focus::-moz-range-thumb{background:var(--mw-component-slider-focus)}input[type=range]:hover::-webkit-slider-thumb{cursor:grab;background:var(--mw-component-slider-hover)}input[type=range]:hover::-moz-range-progress,input[type=range]:hover::-moz-range-thumb{cursor:grab;background:var(--mw-component-slider-hover)}input[type=range]:disabled{--track-color:var(--mw-component-slider-disabled-inactive);color:var(--mw-component-slider-disabled);cursor:not-allowed}input[type=range]:disabled::-webkit-slider-thumb{background:var(--mw-component-slider-disabled);color:var(--mw-component-slider-disabled);cursor:not-allowed;pointer-events:none}input[type=range]:disabled::-moz-range-thumb,input[type=range]:disabled::-moz-range-progress{cursor:not-allowed;background:var(--mw-component-slider-disabled)}input[type=range]::-webkit-slider-runnable-track,input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;transition:all ease 100ms;height:var(--thumb-height);border-radius:9999px;position:relative}input[type=range]::-webkit-slider-thumb{--thumb-radius:calc((var(--thumb-height) * 0.5) - 1px);--clip-top:calc((var(--thumb-height) - var(--track-height)) * 0.5 - 0.5px);--clip-bottom:calc(var(--thumb-height) - var(--clip-top));--clip-further:calc(100% + 1px);--box-fill:calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0 100vmax currentColor;width:var(--thumb-width, var(--thumb-height));background:linear-gradient(currentColor 0 0) scroll no-repeat left center/50% calc(var(--track-height) + 1px);background-color:currentColor;box-shadow:var(--box-fill);border-radius:var(--thumb-width, var(--thumb-height));filter:brightness(100%);clip-path:polygon(100% -1px, var(--clip-edges) -1px, 0 var(--clip-top), -100vmax var(--clip-top), -100vmax var(--clip-bottom), 0 var(--clip-bottom), var(--clip-edges) 100%, var(--clip-further) var(--clip-further))}input[type=range]::-webkit-slider-runnable-track{background:linear-gradient(var(--track-color) 0 0) scroll no-repeat center/100% calc(var(--track-height) + 1px)}input[type=range]::-moz-range-track,input[type=range]::-moz-range-thumb{appearance:none;transition:all ease 100ms;height:var(--thumb-height)}input[type=range]::-moz-range-track,input[type=range]::-moz-range-progress{height:calc(var(--track-height) + 1px);border-radius:var(--track-height)}input[type=range]::-moz-range-thumb{background:currentColor;border:0;width:var(--thumb-width, var(--thumb-height));border-radius:var(--thumb-width, var(--thumb-height));cursor:grab}input[type=range]::-moz-range-progress{appearance:none;background:currentColor;transition-delay:30ms}input[type=range]::-moz-range-track{width:100%;background:var(--track-color)}.mw-slider-label{display:block;font-family:var(--mw-component-text-field-label-font-family);font-weight:var(--mw-component-text-field-label-font-weight);font-size:var(--mw-component-text-field-label-font-size);line-height:var(--mw-component-text-field-label-line-height);padding-left:var(--mw-component-slider-padding-label-x);padding-right:var(--mw-component-slider-padding-label-x)}.mw-slider-helper{align-self:flex-end;color:var(--mw-component-text-field-fg-helper-text);font-family:var(--mw-component-text-field-label-font-family);font-weight:var(--mw-component-text-field-label-font-weight);font-size:var(--mw-component-text-field-label-font-size);line-height:var(--mw-component-text-field-label-line-height)}";

const MwSlider = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.updateRangeValuePosition = () => {
      const rangeValueElement = this.host.shadowRoot.querySelector("#mw-slider-range-value");
      const inputElement = this.host.shadowRoot.querySelector(".mw-slider-input input");
      const padding = 21; // magic number to improve positioning
      const range = this.value;
      const step = (inputElement.getBoundingClientRect().width - padding) / this.max;
      rangeValueElement.style.transform = `translateX(${range * step}px)`;
    };
    this.handleInput = (event) => {
      this.value = parseInt(event.target.value);
      this.updateRangeValuePosition();
    };
    this.testId = undefined;
    this.name = undefined;
    this.label = undefined;
    this.helperText = undefined;
    this.startIcon = undefined;
    this.endIcon = undefined;
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.value = 0;
    this.inline = false;
    this.disabled = false;
  }
  componentDidLoad() {
    this.updateRangeValuePosition();
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "mw-slider-container" }, index.h("div", { class: { "mw-slider": true, "inline": this.inline, "disabled": this.disabled }, "test-id": this.testId }, this.label && (index.h("label", { class: "mw-slider-label", htmlFor: this.name }, this.label)), index.h("div", { class: { "mw-slider-input-wrapper": true, "disabled": this.disabled } }, this.startIcon && index.h("mw-icon", { icon: this.startIcon, size: "medium" }), index.h("div", { class: "mw-slider-input" }, index.h("input", { type: "range", onInput: this.handleInput, disabled: this.disabled, id: this.name, step: this.step, name: this.name, min: this.min, max: this.max, value: this.value }), index.h("label", { htmlfor: this.name, id: "mw-slider-range-value" }, this.value)), this.endIcon && index.h("mw-icon", { icon: this.endIcon, size: "medium" })), this.helperText && !this.inline && index.h("div", { class: "mw-slider-helper" }, this.helperText)), this.helperText && this.inline && index.h("div", { class: "mw-slider-helper" }, this.helperText))));
  }
  get host() { return index.getElement(this); }
};
MwSlider.style = mwSliderCss;

const mwSwitchCss = ":host{display:flex;justify-content:flex-start;align-items:center}.label{font-size:16px;font-family:\"Poppins\", sans-serif;margin-left:var(--mw-component-controls-with-label-gap);color:var(--mw-component-controls-color-label-default)}.switch{position:relative;display:inline-block;width:var(--mw-component-size-toggle-switch-default-w);height:var(--mw-component-size-toggle-switch-default-h)}.switch input{opacity:0;width:0;height:0}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:var(--mw-component-controls-color-bg-unselected);-webkit-transition:0.4s;transition:0.4s}input:checked+.slider:before{position:absolute;content:\"\";height:24px;width:24px;left:5px;bottom:2px;background-color:var(--mw-component-controls-color-fg-default);-webkit-transition:0.4s;transition:0.4s;-webkit-transform:translateX(20px);-ms-transform:translateX(20px);transform:translateX(20px)}input:not(:checked)+.slider:before{position:absolute;content:\"\";height:16px;width:16px;left:6px;bottom:6px;background-color:var(--mw-component-controls-color-fg-off);-webkit-transition:0.4s;transition:0.4s}input:active+.slider:before{position:absolute;content:\"\";height:28px;width:28px;left:2px;bottom:2px;background-color:var(--mw-component-controls-color-fg-default);-webkit-transition:0.4s;transition:0.4s}input:not(:checked):not(:disabled):active+.slider:before{position:absolute;content:\"\";height:28px;width:28px;left:2px;bottom:2px;background-color:var(--mw-component-controls-color-fg-off);-webkit-transition:0.4s;transition:0.4s}input:disabled+.slider:before{position:absolute;content:\"\";height:16px;width:16px;left:6px;bottom:6px;background-color:var(--mw-component-controls-color-fg-disabled);-webkit-transition:0.4s;transition:0.4s}input:checked+.slider{background-color:var(--mw-component-controls-color-bg-selected)}input:disabled+.slider{background-color:var(--mw-component-controls-color-bg-disabled)}input:focus:not(:active):not(:disabled)+.slider{box-shadow:inset 0 0 0 var(--mw-component-controls-border-width-focused) var(--mw-component-controls-color-outline-default);background-color:var(--mw-component-controls-color-bg-focused)}input:hover:not(:disabled)+.slider{background-color:var(--mw-component-controls-color-bg-hover)}input:active:not(:disabled)+.slider{background-color:var(--mw-component-controls-color-bg-pressed)}input:not(:checked):not(:disabled)+.slider{box-shadow:inset 0 0 0 var(--mw-component-controls-border-width-unselected) var(--mw-component-controls-color-outline-default)}input:not(:checked):disabled+.slider{box-shadow:inset 0 0 0 var(--mw-component-controls-border-width-unselected) var(--mw-component-controls-color-outline-disabled)}.slider.round{border-radius:34px;-webkit-border-radius:34px}.slider.round:before{border-radius:50%;-webkit-border-radius:50%}";

const MwSwitch = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.emitter = index.createEvent(this, "emitter", 7);
    this.toggleSwitch = (event) => {
      if (!this.disabled) {
        event.target.blur();
        this.checked = !this.checked;
        this.emitter.emit(this.checked);
      }
    };
    this.testId = undefined;
    this.disabled = undefined;
    this.label = undefined;
    this.on = undefined;
    this.off = undefined;
    this.checked = false;
  }
  componentWillLoad() {
    this.hasLabel = !!this.label;
    this.hasOnOffLabel = !!this.on && !!this.off;
  }
  render() {
    return (index.h(index.Host, null, index.h("label", { "test-id": this.testId, class: "switch" }, index.h("input", { disabled: this.disabled, type: "checkbox", onInput: this.toggleSwitch, checked: this.checked }), index.h("span", { class: "slider round" })), this.hasLabel && index.h("span", { class: "label" }, this.label), this.hasOnOffLabel && index.h("span", { class: "label" }, this.checked ? this.on : this.off)));
  }
};
MwSwitch.style = mwSwitchCss;

const mwTabCss = ":host{width:100%;flex-grow:1}.mw-tab{width:100%;box-sizing:border-box;appearance:none;text-decoration:none;border:none;cursor:pointer;height:var(--mw-component-size-tabs-default-h);display:inline-flex;flex-flow:column;padding:0 var(--mw-component-tabs-padding-x);justify-content:center;align-items:center;border-bottom:var(--mw-component-divider-border-width-default) solid var(--mw-component-tabs-bg-default);background:var(--mw-component-tabs-bg-default);color:var(--mw-component-tabs-fg-default);gap:var(--mw-component-tabs-gap-within);font-family:var(--mw-component-tabs-label-font-family);font-weight:var(--mw-component-tabs-label-font-weight);font-size:var(--mw-component-tabs-label-font-size);line-height:var(--mw-component-tabs-label-line-height)}.mw-tab.label-with-icon{height:var(--mw-component-size-tabs-with-icon-h)}.mw-tab.selected{color:var(--mw-component-tabs-fg-selected);border-bottom:var(--mw-component-divider-border-width-default) solid var(--mw-component-tabs-fg-selected)}.mw-tab:active{}.mw-tab:disabled{cursor:unset;color:var(--mw-component-tabs-fg-disabled)}.mw-tab:not(.selected):not(:disabled):hover{background:var(--mw-component-tabs-bg-hover)}";

const MwTab = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.selected = undefined;
    this.icon = undefined;
    this.label = undefined;
    this.disabled = undefined;
  }
  render() {
    return (index.h(index.Host, null, index.h("button", { disabled: this.disabled, class: `mw-tab ${this.icon && this.label ? "label-with-icon" : ""} ${this.selected ? "selected" : ""}` }, this.icon && index.h("mw-icon", { icon: this.icon, size: "small" }), this.label)));
  }
};
MwTab.style = mwTabCss;

const mwTabsCss = ".mw-tabs{display:flex;flex-flow:row;gap:0;width:100%}";

const MwTabs = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.tabsClickEmitter = index.createEvent(this, "tabsClickEmitter", 4);
    this.testId = undefined;
    this.selected = null;
    this.tabs = [];
  }
  handleClick(key) {
    this.selected = key;
    this.tabsClickEmitter.emit({ selected: key });
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
    return (index.h("div", { "test-id": this.testId, class: "mw-tabs" }, this.tabs.map((item, key) => (index.h("mw-tab", { key: key, icon: item.icon, label: item.label, selected: item.selected, disabled: item.disabled, onClick: () => this.handleClick(key) })))));
  }
  get host() { return index.getElement(this); }
};
MwTabs.style = mwTabsCss;

const mwTextareaCss = ":host{display:flex;align-items:center}.wrapper{width:100%;display:inline-flex;flex-direction:column}.textarea-field{display:flex;flex-direction:column;min-width:var(--mw-component-size-text-field-min-width);color:var(--mw-component-text-field-fg-default)}.textarea-field.disabled,.textarea-field.disabled input{color:var(--mw-component-text-field-fg-disabled)}.textarea-field.inline{flex-direction:row;display:flex;align-items:center}.textarea-field.inline .input{min-width:var(--mw-component-size-text-field-min-w);width:100%}.textarea-field.inline label{display:block;width:var(--mw-component-size-text-field-label-horizontal-width);padding:var(--mw-component-text-field-padding-label-horizontal)}.textarea{border-radius:var(--border-radius-standard-md);padding:var(--mw-component-text-field-padding-text-field-y) var(--mw-component-text-field-padding-text-field-x);background:var(--mw-component-text-field-bg-default);box-shadow:inset 0 0 0 var(--mw-component-text-field-default) var(--mw-component-text-field-border-default);border:none;font-family:var(--mw-component-text-field-text-font-family);font-weight:var(--mw-component-text-field-text-font-weight);font-size:var(--mw-component-text-field-text-font-size);line-height:var(--mw-component-text-field-text-line-height);resize:none}.textarea.has-error{background:var(--mw-component-text-field-bg-error)}.textarea:focus-visible,.textarea:focus{outline:transparent;border:none;box-shadow:none}.textarea::placeholder{color:var(--mw-component-text-field-fg-placeholder)}.textarea:focus-within,.textarea:focus-visible{background:var(--mw-component-text-field-bg-hover);box-shadow:inset 0 0 0 var(--mw-component-text-field-focused) var(--mw-component-text-field-border-focused)}.textarea:not(.disabled):hover{background:var(--mw-component-text-field-bg-hover)}.textarea .focused{color:var(--mw-component-text-field-fg-icon-focused)}.textarea .focused.has-error{color:var(--mw-component-text-field-fg-error)}.textarea.resize{resize:both}.has-error{color:var(--mw-component-text-field-fg-default)}";

const MwTextarea = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.inputEmitter = index.createEvent(this, "inputEmitter", 7);
    this.changeEmitter = index.createEvent(this, "changeEmitter", 7);
    this.blurEmitter = index.createEvent(this, "blurEmitter", 7);
    this.onChange = (event) => {
      this.value = event.target.value;
      this.changeEmitter.emit(this.value);
    };
    this.onInput = (event) => {
      this.value = event.target.value;
      this.inputEmitter.emit(this.value);
    };
    this.onBlur = () => {
      this.blurEmitter.emit();
    };
    this.value = undefined;
    this.name = undefined;
    this.label = undefined;
    this.placeholder = undefined;
    this.helperText = undefined;
    this.hasError = false;
    this.required = false;
    this.disabled = false;
    this.readonly = false;
    this.maxlength = undefined;
    this.rows = undefined;
    this.cols = undefined;
    this.form = undefined;
    this.resize = "none";
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "wrapper" }, index.h("div", { class: {
        "textarea-field": true,
        "has-error": this.hasError,
        "disabled": this.disabled,
      } }, index.h("mw-label", { name: this.name, label: this.label, required: this.required }), index.h("textarea", { placeholder: this.placeholder, style: { resize: this.resize }, class: {
        "textarea": true,
        "has-error": this.hasError,
      }, onInput: this.onInput, onChange: this.onChange, onBlur: this.onBlur, name: this.name, value: this.value, disabled: this.disabled, readonly: this.readonly, maxlength: this.maxlength, cols: this.cols, rows: this.rows, form: this.form, required: this.required })), index.h("mw-helper-text", { helperText: this.helperText, hasError: this.hasError }))));
  }
  get hostElement() { return index.getElement(this); }
};
MwTextarea.style = mwTextareaCss;

const mwTextfieldCss = ":host{display:flex;align-items:center}.wrapper{display:inline-flex;flex-direction:column;width:100%}.textfield{display:flex;flex-direction:column;min-width:var(--mw-component-size-text-field-min-width);color:var(--mw-component-text-field-fg-default)}.textfield.disabled,.textfield.disabled input{color:var(--mw-component-text-field-fg-disabled)}.textfield.inline{flex-direction:row;display:flex;align-items:center}.textfield.inline .input{min-width:var(--mw-component-size-text-field-min-w);width:100%}.textfield.inline label{display:block;width:var(--mw-component-size-text-field-label-horizontal-width);padding:var(--mw-component-text-field-padding-label-horizontal)}.input{display:flex;align-items:center;border-radius:var(--border-radius-standard-md);padding:var(--mw-component-text-field-padding-text-field-y) var(--mw-component-text-field-padding-text-field-x);background:var(--mw-component-text-field-bg-default);box-shadow:inset 0 0 0 var(--mw-component-text-field-default) var(--mw-component-text-field-border-default)}.input .icon-start{margin-right:var(--mw-component-text-field-gap-horizontal-gap-within)}.input .icon-end{margin-left:var(--mw-component-text-field-gap-horizontal-gap-within)}.input.has-error{background:var(--mw-component-text-field-bg-error)}.input:focus-within{background:var(--mw-component-text-field-bg-hover);box-shadow:inset 0 0 0 var(--mw-component-text-field-focused) var(--mw-component-text-field-border-focused)}.input:not(.disabled):hover{background:var(--mw-component-text-field-bg-hover)}.input .icon{color:var(--mw-component-text-field-fg-icon-default)}.input .focused{color:var(--mw-component-text-field-fg-icon-focused)}.input .focused.has-error{color:var(--mw-component-text-field-fg-error)}.input input{border:none;padding:0;width:100%;background:transparent;font-family:var(--mw-component-text-field-text-font-family);font-weight:var(--mw-component-text-field-text-font-weight);font-size:var(--mw-component-text-field-text-font-size);line-height:var(--mw-component-text-field-text-line-height)}.input input:focus-visible,.input input:focus{outline:transparent;border:none;box-shadow:none}.input input::placeholder{color:var(--mw-component-text-field-fg-placeholder)}.has-error{color:var(--mw-component-text-field-fg-default)}";

const MwTextfield = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.valueChanged = index.createEvent(this, "valueChanged", 7);
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
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "wrapper" }, index.h("div", { class: {
        "textfield": true,
        "inline": this.inline,
        "has-error": this.hasError,
        "disabled": this.disabled,
      } }, index.h("mw-label", { name: this.name, label: this.label, required: this.required }), index.h("div", { onClick: this.onFocus, class: { "input": true, "has-error": this.hasError, "disabled": this.disabled } }, index.h("span", { class: { "icon-start": this.hasIconStartSlot, "focused": this.focused, "has-error": this.hasError }, part: "icon-start" }, index.h("slot", { name: "icon-start" })), index.h("input", { ref: el => (this.inputElement = el), placeholder: this.placeholder, class: {
        "has-error": this.hasError,
      }, onFocus: this.onFocus, onBlur: this.onBlur, onInput: this.onValueChange, onChange: this.onValueChange, type: this.type, name: this.name, value: this.value, disabled: this.disabled, readOnly: this.readOnly }), index.h("span", { class: { "icon-end": this.hasIconEndSlot, "focused": this.focused, "has-error": this.hasError }, part: "icon-end" }, index.h("slot", { name: "icon-end" }))), !this.inline && index.h("mw-helper-text", { helperText: this.helperText, hasError: this.hasError })), this.inline && index.h("mw-helper-text", { helperText: this.helperText, hasError: this.hasError }))));
  }
  get hostElement() { return index.getElement(this); }
};
MwTextfield.style = mwTextfieldCss;

exports.mw_app_bar = MwAppBar;
exports.mw_app_bar_title = MwAppBarTitle;
exports.mw_autocomplete = MwAutocomplete;
exports.mw_avatar = MwAvatar;
exports.mw_button = MwButton;
exports.mw_card = MwCard;
exports.mw_card_body = MwCardBody;
exports.mw_card_footer = MwCardFooter;
exports.mw_card_header = MwCardHeader;
exports.mw_card_image = MwCardImage;
exports.mw_card_title = MwCardTitle;
exports.mw_checkbox = MwCheckbox;
exports.mw_chip = MwChip;
exports.mw_chip_input = MwChipInput;
exports.mw_divider = MwDivider;
exports.mw_dropdown = MwDropdown;
exports.mw_helper_text = MwHelperText;
exports.mw_icon = MwIcon;
exports.mw_icon_gallery = MwIconGallery;
exports.mw_label = MwLabel;
exports.mw_link = MwLink;
exports.mw_login = MwLogin;
exports.mw_menu = MwMenu;
exports.mw_menu_item = MwMenuItem;
exports.mw_menu_list = MwMenuList;
exports.mw_popover = MwPopover;
exports.mw_radio = MwRadio;
exports.mw_slider = MwSlider;
exports.mw_switch = MwSwitch;
exports.mw_tab = MwTab;
exports.mw_tabs = MwTabs;
exports.mw_textarea = MwTextarea;
exports.mw_textfield = MwTextfield;
