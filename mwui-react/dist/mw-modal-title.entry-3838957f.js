import { r as registerInstance, h, H as Host } from "./index-3359c25c.js";

/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */ const mwModalTitleCss = ":host{display:block;padding-bottom:var(--mw-component-modal-padding-b-default);margin-top:calc(-1 * var(--mw-component-modal-padding-components-y-default))}:host .mw-modal-title{display:flex;align-items:center;gap:var(--mw-component-header-gap-within)}:host .mw-modal-title .spacefiller{flex:1 1 auto}:host .mw-modal-title__headline{font-family:var(--mw-component-modal-title-font-family);font-weight:var(--mw-component-modal-title-font-weight);line-height:var(--mw-component-modal-title-line-height);font-size:var(--mw-component-modal-title-font-size)}:host .mw-modal-title__description{font-family:var(--mw-component-modal-description-font-family);font-weight:var(--mw-component-modal-description-font-weight);line-height:var(--mw-component-modal-description-line-height);font-size:var(--mw-component-modal-description-font-size)}:host .mw-modal-title slot[name=icon]{cursor:pointer}";

const MwModalTitle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.headline = undefined;
        this.description = undefined;
    }
    render() {
        return h(Host, null, h("div", {
            class: "mw-modal-title"
        }, h("h2", {
            class: "mw-modal-title__headline"
        }, this.headline), h("span", {
            class: "spacefiller"
        }), h("slot", {
            name: "icon"
        })), !!this.description && h("div", {
            class: "mw-modal-title"
        }, h("div", {
            class: "mw-modal-title__description"
        }, this.description)));
    }
};

MwModalTitle.style = mwModalTitleCss;

export { MwModalTitle as mw_modal_title };
