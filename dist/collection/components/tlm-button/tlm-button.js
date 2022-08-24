import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
import { buttonButtonFilledDefaultBgColor, buttonButtonFilledDefaultBorderRadius, buttonButtonFilledDefaultFgColor, buttonButtonFilledDisabledBgColor, buttonButtonFilledDisabledFgColor, buttonButtonFilledFocusedBgColor, buttonButtonFilledFocusedFgColor, buttonButtonFilledHoverBgColor, buttonButtonFilledHoverFgColor, buttonButtonFilledPressedBgColor, buttonButtonFilledPressedFgColor, fontFamiliesDefault, fontSize16, xs, } from '../../../token-farm/dist/js/global';
const buttonStyles = css `
  font-family: ${fontFamiliesDefault};
  border: 0;
  padding: ${xs}px;
  color: ${buttonButtonFilledDefaultFgColor};
  font-size: ${fontSize16};
  border-radius: ${buttonButtonFilledDefaultBorderRadius};
  background-color: ${buttonButtonFilledDefaultBgColor};
  &:hover {
    background-color: ${buttonButtonFilledHoverBgColor};
    color: ${buttonButtonFilledHoverFgColor};
  }
  &:focus {
    background-color: ${buttonButtonFilledFocusedBgColor};
    color: ${buttonButtonFilledFocusedFgColor};
  }
  &:pressed {
    background-color: ${buttonButtonFilledPressedBgColor};
    color: ${buttonButtonFilledPressedFgColor};
  }
  &:disabled {
    background-color: ${buttonButtonFilledDisabledBgColor};
    color: ${buttonButtonFilledDisabledFgColor};
  }
`;
export class TlmButton {
  render() {
    return (h("button", { class: buttonStyles, id: this.buttonId, type: "button" },
      h("slot", null)));
  }
  static get is() { return "tlm-button"; }
  static get properties() { return {
    "buttonId": {
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
        "text": "Unique id for each tlm-button."
      },
      "attribute": "button-id",
      "reflect": false
    }
  }; }
}
