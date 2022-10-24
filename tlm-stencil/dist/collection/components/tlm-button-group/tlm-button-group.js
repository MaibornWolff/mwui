import { css } from '@emotion/css';
import { h } from '@stencil/core';
const buttonGroupStyles = css `
  display: flex;
  flex-wrap: wrap;
`;
export class TlmButtonGroup {
  render() {
    return (h("div", { class: buttonGroupStyles, "test-id": this.testId }, h("slot", null)));
  }
  static get is() { return "tlm-button-group"; }
  static get properties() {
    return {
      "testId": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "test-id",
        "reflect": false
      }
    };
  }
  static get elementRef() { return "hostElement"; }
}
