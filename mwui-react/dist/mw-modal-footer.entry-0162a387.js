import { r as registerInstance, h, H as Host } from "./index-3359c25c.js";

/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */ const mwModalFooterCss = ':host{display:grid;align-items:center;box-sizing:border-box;grid-template-areas:"start center end";padding-top:var(--mw-component-modal-padding-footer-t-default)}::slotted(*){display:flex;flex-flow:row;align-items:center;gap:var(--mw-component-modal-header-gap-within)}slot[name=start]::slotted(*){grid-area:start}slot[name=center]::slotted(*){grid-area:center}slot[name=end]::slotted(*){grid-area:end;justify-content:end}';

const MwModalFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h(Host, null, h("slot", {
            name: "start"
        }), h("slot", {
            name: "center"
        }), h("slot", {
            name: "end"
        }));
    }
};

MwModalFooter.style = mwModalFooterCss;

export { MwModalFooter as mw_modal_footer };
