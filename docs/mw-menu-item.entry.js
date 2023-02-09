/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import { r as registerInstance, f as createEvent, h, e as Host } from './index-a62bab22.js';
import { c as classnames } from './index-ef318cfb.js';

const mwMenuItemCss = ":host{display:block}.mw-menu-item{display:flex;flex-direction:column;justify-content:center;gap:var(--mw-component-menu-item-gap-between);padding:0 12px;height:var(--mw-component-size-menu-item-default-h);background:var(--mw-component-menu-item-bg-default);border:var(--mw-component-menu-item-border-width-default) solid var(--mw-component-menu-item-border-default);border-radius:var(--mw-component-menu-item-border-radius)}.mw-menu-item.selected .mw-menu-item-title{color:var(--mw-component-menu-item-fg-selected)}.mw-menu-item.disabled .mw-menu-item-title{color:var(--mw-component-menu-item-fg-disabled)}.mw-menu-item:focus:not(.disabled) .mw-menu-item-title{color:var(--mw-component-menu-item-fg-focused)}.mw-menu-item:focus:not(.disabled){box-shadow:inset 0 0 0 var(--mw-component-menu-item-border-width-focused) var(--mw-component-menu-item-border-focused)}.mw-menu-item:active:not(.disabled) .mw-menu-item-title{color:var(--mw-component-menu-item-fg-pressed)}.mw-menu-item:hover:not(.disabled) .mw-menu-item-title{color:var(--mw-component-menu-item-fg-hover)}.mw-menu-item:hover .mw-menu-item-subtitle,.mw-menu-item:hover .mw-menu-item-title{cursor:default}.mw-menu-item-title{color:var(--mw-component-menu-item-fg-title);font-family:var(--mw-component-menu-item-title-font-family);font-weight:var(--mw-component-menu-item-title-font-weight);line-height:var(--mw-component-menu-item-title-line-height);font-size:var(--mw-component-menu-item-title-font-size)}.mw-menu-item-subtitle{color:var(--mw-component-menu-item-fg-subtitle);font-family:var(--mw-component-menu-item-subtitle-font-family);font-weight:var(--mw-component-menu-item-subtitle-font-weight);line-height:var(--mw-component-menu-item-subtitle-line-height);font-size:var(--mw-component-menu-item-subtitle-font-size)}";

const MwMenuItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickEmitter = createEvent(this, "clickEmitter", 4);
    this.handleClick = (event) => {
      event.target.blur();
      event.path[1].blur();
      this.clickEmitter.emit();
    };
    this.title = undefined;
    this.subtitle = undefined;
    this.disabled = false;
    this.selected = false;
  }
  render() {
    return (h(Host, null, h("div", { onClick: this.handleClick, tabindex: "0", class: classnames("mw-menu-item", { disabled: this.disabled, selected: this.selected }) }, !!this.title && h("div", { class: "mw-menu-item-title" }, this.title), !!this.subtitle && h("div", { class: "mw-menu-item-subtitle" }, this.subtitle))));
  }
};
MwMenuItem.style = mwMenuItemCss;

export { MwMenuItem as mw_menu_item };
