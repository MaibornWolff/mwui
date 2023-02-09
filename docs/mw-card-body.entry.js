/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import { r as registerInstance, h, e as Host } from './index-a62bab22.js';

const mwCardBodyCss = ":host{display:block;padding:0 var(--mw-component-card-padding-components-x-default)}";

const MwCardBody = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
MwCardBody.style = mwCardBodyCss;

export { MwCardBody as mw_card_body };
