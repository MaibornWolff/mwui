'use strict';

var index = require('./index-39b5736f.js');

/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */

const mwBackdropCss = ".backdrop{position:absolute;top:0;left:0;width:100vw;height:100vh;background:var(--mw-component-modal-backdrop);opacity:0.4}";

const MwBackdrop = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.backdropClick = index.createEvent(this, "backdropClick", 7);
    this.backdropDismiss = true;
  }
  onMouseDown(ev) {
    this.emitClick(ev);
  }
  emitClick(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    if (!this.backdropDismiss) {
      return;
    }
    this.backdropClick.emit();
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "backdrop" })));
  }
};
MwBackdrop.style = mwBackdropCss;

exports.mw_backdrop = MwBackdrop;
