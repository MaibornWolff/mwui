/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import { r as registerInstance, h, e as Host } from './index-a62bab22.js';
import { S as SizeEnum } from './size.enum-6030db07.js';

const mwAvatarCss = ":host{display:block}.avatar{position:relative;display:flex;align-items:center;justify-content:center;border-radius:50%;-webkit-border-radius:50%;background:var(--mw-component-avatars-color-bg-default);color:var(--mw-component-avatars-color-fg-default)}.avatar.large{width:var(--mw-component-size-avatars-lg);height:var(--mw-component-size-avatars-lg)}.avatar.medium{width:var(--mw-component-size-avatars-md);height:var(--mw-component-size-avatars-md)}.avatar.small{width:var(--mw-component-size-avatars-sm);height:var(--mw-component-size-avatars-sm)}.avatar.x-small{width:var(--mw-component-size-avatars-xs);height:var(--mw-component-size-avatars-xs)}.avatar img{position:absolute;border-radius:50%;-webkit-border-radius:50%}.avatar.large img{width:var(--mw-component-size-avatars-lg);height:var(--mw-component-size-avatars-lg)}.avatar.medium img{width:var(--mw-component-size-avatars-md);height:var(--mw-component-size-avatars-md)}.avatar.small img{width:var(--mw-component-size-avatars-sm);height:var(--mw-component-size-avatars-sm)}.avatar.x-small img{width:var(--mw-component-size-avatars-xs);height:var(--mw-component-size-avatars-xs)}.fallback{position:absolute}.fallback.large{font-family:var(--mw-component-avatars-typo-lg-font-family);font-size:var(--mw-component-avatars-typo-lg-font-size);font-weight:var(--mw-component-avatars-typo-lg-font-weight);line-height:var(--mw-component-avatars-typo-lg-line-height)}.fallback.medium{font-family:var(--mw-component-avatars-typo-md-font-family);font-size:var(--mw-component-avatars-typo-md-font-size);font-weight:var(--mw-component-avatars-typo-md-font-weight);line-height:var(--mw-component-avatars-typo-md-line-height)}.fallback.small{font-family:var(--mw-component-avatars-typo-sm-font-family);font-size:var(--mw-component-avatars-typo-sm-font-size);font-weight:var(--mw-component-avatars-typo-sm-font-weight);line-height:var(--mw-component-avatars-typo-sm-line-height)}.fallback.x-small{font-family:var(--mw-component-avatars-typo-xs-font-family);font-size:var(--mw-component-avatars-typo-xs-font-size);font-weight:var(--mw-component-avatars-typo-xs-font-weight);line-height:var(--mw-component-avatars-typo-xs-line-height)}.icon{position:absolute}";

const MwAvatar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.testId = undefined;
    this.src = undefined;
    this.icon = undefined;
    this.alt = undefined;
    this.size = SizeEnum.MEDIUM;
  }
  render() {
    return (h(Host, null, h("div", { "test-id": this.testId, class: `avatar ${this.size}` }, this.alt && h("div", { class: `fallback ${this.size}` }, this.alt.substring(0, 1)), this.src && h("img", { src: this.src, alt: this.alt }), this.icon && h("mw-icon", { icon: this.icon, size: this.size }))));
  }
};
MwAvatar.style = mwAvatarCss;

export { MwAvatar as mw_avatar };
