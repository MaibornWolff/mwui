/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import { r as registerInstance, h, e as Host, g as getElement } from './index-a62bab22.js';
import { c as classnames } from './index-ef318cfb.js';

const mwCardImageCss = ":host{display:block}.card-image img{height:100%;border-radius:0}.card-image.top img{margin-top:calc(-1 * var(--mw-component-card-padding-components-y-default));border-top-left-radius:var(--mw-component-card-border-radius);border-top-right-radius:var(--mw-component-card-border-radius)}.card-image.bottom img{border-bottom-left-radius:var(--mw-component-card-border-radius);border-bottom-right-radius:var(--mw-component-card-border-radius);margin-bottom:calc(-1 * var(--mw-component-card-padding-components-y-default) - 4px)}.card-image.single img{border-radius:var(--mw-component-card-border-radius);margin-top:calc(-1 * var(--mw-component-card-padding-components-y-default));margin-bottom:calc(-1 * var(--mw-component-card-padding-components-y-default) - 4px)}";

const MwCardImage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.src = undefined;
    this.alt = undefined;
  }
  componentWillLoad() {
    const card = this.hostElement.parentNode;
    this.isOnlyChild = card.childElementCount === 1;
    this.isFirstChild = !this.isOnlyChild && this.hostElement.isSameNode(card.firstElementChild);
    this.isLastChild = !this.isOnlyChild && this.hostElement.isSameNode(card.lastElementChild);
  }
  render() {
    return (h(Host, null, h("div", { class: classnames("card-image", { top: this.isFirstChild, bottom: this.isLastChild, single: this.isOnlyChild }) }, h("img", { src: this.src, alt: this.alt }))));
  }
  get hostElement() { return getElement(this); }
};
MwCardImage.style = mwCardImageCss;

export { MwCardImage as mw_card_image };
