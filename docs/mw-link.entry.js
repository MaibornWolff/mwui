/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import { r as registerInstance, h } from './index-a62bab22.js';
import { T as TargetEnum } from './button-target.enum-405794ff.js';

const mwLinkCss = ".mw-link{font-family:var(--mw-component-link-typo-font-family);font-size:var(--mw-component-link-typo-font-size);font-weight:var(--mw-component-link-typo-font-weight);color:var(--mw-component-link-color-fg-default);text-decoration:none}.mw-link.underline{text-decoration:var(--mw-component-link-typo-text-decoration)}.mw-link:hover{color:var(--mw-component-link-color-fg-hover)}.mw-link:focus{color:var(--mw-component-link-color-fg-focused)}.mw-link:active{color:var(--mw-component-link-color-fg-pressed)}";

const MwLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.href = undefined;
    this.target = TargetEnum.SELF;
    this.underline = true;
  }
  render() {
    return (h("a", { class: `mw-link ${this.underline && "underline"}`, href: this.href, target: this.target }, h("slot", null)));
  }
};
MwLink.style = mwLinkCss;

export { MwLink as mw_link };
