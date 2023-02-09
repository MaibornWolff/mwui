/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import { r as registerInstance, h, e as Host } from './index-a62bab22.js';
import { c as classnames } from './index-ef318cfb.js';

const mwCardFooterCss = ".card-footer{display:flex;justify-content:end;align-items:center;padding:var(--mw-component-card-padding-footer-t-default) var(--mw-component-card-padding-components-x-default) 0 var(--mw-component-card-padding-components-x-default);gap:var(--mw-component-button-sm-gap-between)}.justify-center{justify-content:center}.justify-start{justify-content:start}.justify-end{justify-content:end}.justify-flex-start{justify-content:flex-start}.justify-flex-end{justify-content:flex-end}.justify-space-around{justify-content:space-around}.justify-space-between{justify-content:space-between}.justify-space-evenly{justify-content:space-evenly}.justify-left{justify-content:left}.justify-right{justify-content:right}.justify-normal{justify-content:normal}";

const MwCardFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, null, h("div", { class: classnames("card-footer", {
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
      }) }, h("slot", null))));
  }
};
MwCardFooter.style = mwCardFooterCss;

export { MwCardFooter as mw_card_footer };
