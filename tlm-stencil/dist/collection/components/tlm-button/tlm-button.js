import { Component, Event, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
import { buttonButtonFilledDefaultBgColor, buttonButtonFilledDefaultBorderRadius, buttonButtonFilledDefaultFgColor, buttonButtonFilledDisabledBgColor, buttonButtonFilledDisabledFgColor, buttonButtonFilledHoverBgColor, buttonButtonFilledHoverFgColor, buttonButtonFilledPressedBgColor, buttonButtonFilledPressedFgColor, fontFamiliesDefault, fontSize16, l, s, } from '../../../../tlm-token-farm/dist/js/global';
const buttonStyles = css `
  font-family: ${fontFamiliesDefault};
  border: 0;
  padding: ${s}px ${l}px;
  color: ${buttonButtonFilledDefaultFgColor};
  font-size: ${fontSize16};
  border-radius: ${buttonButtonFilledDefaultBorderRadius};
  background-color: ${buttonButtonFilledDefaultBgColor};
  &:hover {
    background-color: ${buttonButtonFilledHoverBgColor};
    color: ${buttonButtonFilledHoverFgColor};
  }
  &:active {
    background-color: ${buttonButtonFilledPressedBgColor};
    color: ${buttonButtonFilledPressedFgColor};
  }
  &:disabled {
    background-color: ${buttonButtonFilledDisabledBgColor};
    color: ${buttonButtonFilledDisabledFgColor};
  }
`;
export class TlmButton {
  constructor() {
    this.handleClick = () => {
      this.clickEmitter.emit('onClick');
    };
  }
  render() {
    return (h("button", { disabled: this.disabled, onClick: this.handleClick, class: buttonStyles, "test-id": this.testId, type: "button" },
      h("slot", null)));
  }
  static get is() { return "tlm-button"; }
  static get properties() { return {
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
    },
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "disabled",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "clickEmitter",
      "name": "clickEmitter",
      "bubbles": true,
      "cancelable": false,
      "composed": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
}
