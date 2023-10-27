'use strict';

var index = require('./index-f3b2ad8f.js');

/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */

const mwModalFooterCss = ":host{display:grid;align-items:center;box-sizing:border-box;grid-template-areas:\"start center end\";padding-top:var(--mw-component-modal-padding-footer-t-default)}::slotted(*){display:flex;flex-flow:row;align-items:center;gap:var(--mw-component-modal-header-gap-within)}slot[name=start]::slotted(*){grid-area:start}slot[name=center]::slotted(*){grid-area:center}slot[name=end]::slotted(*){grid-area:end;justify-content:end}";

const MwModalFooter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", { name: "start" }), index.h("slot", { name: "center" }), index.h("slot", { name: "end" })));
  }
};
MwModalFooter.style = mwModalFooterCss;

exports.mw_modal_footer = MwModalFooter;
