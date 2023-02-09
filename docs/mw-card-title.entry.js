/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import { r as registerInstance, h, e as Host } from './index-a62bab22.js';

const mwCardTitleCss = ":host{display:block;display:flex;flex-direction:row;align-items:center;padding:0 var(--mw-component-card-padding-components-x-default) 0 var(--mw-component-card-padding-components-x-default);gap:16px}.card-title .title{font-family:var(--mw-component-card-title-font-family);font-size:var(--mw-component-card-title-font-size);font-weight:var(--mw-component-card-title-font-weight);line-height:var(--mw-component-card-title-line-height)}.card-title .subtitle{font-family:var(--mw-component-card-subtitle-font-family);font-size:var(--mw-component-card-subtitle-font-size);font-weight:var(--mw-component-card-subtitle-font-weight);line-height:var(--mw-component-card-subtitle-line-height);color:var(--mw-component-card-fg-muted)}.card-title .metadata{font-family:var(--mw-component-card-metadata-font-family);font-size:var(--mw-component-card-metadata-font-size);font-weight:var(--mw-component-card-metadata-font-weight);line-height:var(--mw-component-card-metadata-line-height);color:var(--mw-component-card-fg-muted)}";

const MwCardTitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.title = undefined;
    this.subtitle = undefined;
    this.metadata = undefined;
  }
  render() {
    return (h(Host, null, h("div", { class: "card-title" }, h("div", { class: "metadata" }, this.metadata), h("div", { class: "title" }, this.title), h("div", { class: "subtitle" }, this.subtitle))));
  }
};
MwCardTitle.style = mwCardTitleCss;

export { MwCardTitle as mw_card_title };
