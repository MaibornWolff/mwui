/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import { r as registerInstance, f as createEvent, h, e as Host } from './index-a62bab22.js';
import { c as classnames } from './index-ef318cfb.js';

const mwChipCss = ":host{display:block}.chip{cursor:default;display:flex;white-space:nowrap;overflow:hidden;align-items:center;justify-content:center;width:fit-content;font-family:var(--mw-component-chips-typo-font-family);font-size:var(--mw-component-chips-typo-font-size);line-height:var(--mw-component-chips-typo-line-height);font-weight:var(--mw-component-chips-typo-font-weight);height:32px;min-width:var(--mw-component-size-chips-min-width);border-top-left-radius:var(--mw-component-chips-border-radius);border-top-right-radius:var(--mw-component-chips-border-radius);border-bottom-left-radius:var(--mw-component-chips-border-radius);border-bottom-right-radius:var(--mw-component-chips-border-radius);-webkit-border-top-left-radius:var(--mw-component-chips-border-radius);-webkit-border-top-right-radius:var(--mw-component-chips-border-radius);-webkit-border-bottom-left-radius:var(--mw-component-chips-border-radius);-webkit-border-bottom-right-radius:var(--mw-component-chips-border-radius);gap:var(--mw-component-chips-gap-within);padding:0 var(--mw-component-chips-padding-x);box-shadow:inset 0 0 0 var(--mw-component-chips-border-width-default) var(--mw-component-chips-color-border-default);color:var(--mw-component-chips-color-fg-default);background:var(--mw-component-chips-color-bg-default)}.chip:hover:not(.disabled){color:var(--mw-component-chips-color-fg-hover);background:var(--mw-component-chips-color-bg-hover)}.chip.selected{color:var(--mw-component-chips-color-fg-selected);background:var(--mw-component-chips-color-bg-default);box-shadow:inset 0 0 0 var(--mw-component-chips-border-width-default) var(--mw-component-chips-color-border-selected)}.chip.selected:hover:not(.disabled){color:var(--mw-component-chips-color-fg-selected);background:var(--mw-component-chips-color-bg-hover);box-shadow:inset 0 0 0 var(--mw-component-chips-border-width-default) var(--mw-component-chips-color-border-selected)}.chip.selected:focus:not(.disabled){color:var(--mw-component-chips-color-fg-selected);background:var(--mw-component-chips-color-bg-hover);box-shadow:inset 0 0 0 var(--mw-component-chips-border-width-focused) var(--mw-component-chips-color-border-selected)}.chip.selected:active:not(.disabled){color:var(--mw-component-chips-color-fg-selected);background:var(--mw-component-chips-color-bg-pressed);box-shadow:inset 0 0 0 var(--mw-component-chips-border-width-default) var(--mw-component-chips-color-border-selected)}.chip:focus:not(.selected):not(.disabled){color:var(--mw-component-chips-color-fg-default);background:var(--mw-component-chips-color-bg-hover);box-shadow:inset 0 0 0 var(--mw-component-chips-border-width-focused) var(--mw-component-chips-color-border-default)}.chip:active:not(.selected):not(.disabled){color:var(--mw-component-chips-color-fg-default);background:var(--mw-component-chips-color-bg-pressed)}.chip.disabled{color:var(--mw-component-chips-color-fg-disabled);box-shadow:inset 0 0 0 var(--mw-component-chips-border-width-default) var(--mw-component-chips-color-border-disabled)}";

const MwChip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.emitter = createEvent(this, "emitter", 4);
    this.handleClose = (event) => {
      event.stopPropagation();
      if (!this.disabled) {
        this.emitter.emit(event);
      }
    };
    this.handleClick = (event) => {
      this.selected = !this.selected;
      this.emitter.emit(event);
    };
    this.testId = undefined;
    this.icon = undefined;
    this.disabled = undefined;
    this.showClose = false;
    this.selected = false;
  }
  render() {
    return (h(Host, null, h("div", { tabindex: "0", class: classnames("chip", {
        selected: this.selected,
        disabled: this.disabled,
      }), onClick: this.handleClick, "test-id": this.testId }, !!this.icon && h("mw-icon", { icon: this.icon, size: "small" }), h("slot", null), this.showClose && (h("span", { onClick: this.handleClose }, h("mw-icon", { icon: "close", color: "currentcolor", size: "small" }))))));
  }
};
MwChip.style = mwChipCss;

export { MwChip as mw_chip };
