import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { c as css } from './emotion-css.esm.js';

const buttonGroupStyles = css `
  display: flex;
  flex-wrap: wrap;
`;
const TlmButtonGroup$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h("div", { class: buttonGroupStyles, "test-id": this.testId }, h("slot", null)));
  }
  get hostElement() { return this; }
}, [4, "tlm-button-group", {
    "testId": [1, "test-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["tlm-button-group"];
  components.forEach(tagName => { switch (tagName) {
    case "tlm-button-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TlmButtonGroup$1);
      }
      break;
  } });
}

const TlmButtonGroup = TlmButtonGroup$1;
const defineCustomElement = defineCustomElement$1;

export { TlmButtonGroup, defineCustomElement };
