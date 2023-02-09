/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import { r as registerInstance, f as createEvent, h, e as Host } from './index-a62bab22.js';
import { c as classnames } from './index-ef318cfb.js';

const mwCardCss = ":host{display:block}.card{max-width:600px;width:100%;overflow-wrap:break-word;display:flex;flex-direction:column;justify-content:space-between;gap:var(--mw-component-card-padding-components-y-default);padding-top:var(--mw-component-card-padding-components-y-default);padding-bottom:var(--mw-component-card-padding-components-y-default);background:var(--mw-component-card-bg-default);border-radius:var(--mw-component-card-border-radius);-webkit-border-radius:var(--mw-component-card-border-radius);-moz-border-radius:var(--mw-component-card-border-radius);color:var(--mw-component-card-fg-default);border:none;transition:all .4 ease}.card:first-child{margin-top:0 !important}.card.muted{color:var(--mw-component-card-fg-muted)}.card.outlined{border:var(--mw-component-card-border-width-outlined) solid var(--mw-component-card-border-outlined)}.card.elevated{border:none;box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)}";

const MwCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickEmitter = createEvent(this, "clickEmitter", 4);
    this.testId = undefined;
    this.outlined = false;
    this.elevated = false;
  }
  render() {
    return (h(Host, null, h("div", { onClick: () => this.clickEmitter.emit(), "test-id": this.testId, class: classnames("card", {
        outlined: this.outlined,
        elevated: this.elevated,
      }) }, h("slot", null))));
  }
};
MwCard.style = mwCardCss;

export { MwCard as mw_card };
