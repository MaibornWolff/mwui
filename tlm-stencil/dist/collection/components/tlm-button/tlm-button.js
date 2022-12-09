import { h } from '@stencil/core';
import { css } from '@emotion/css';
import { getFontWeightValue } from '../../utils/utils';
import { mwComponentButtonPrimaryColorBgDefault, mwComponentButtonBorderWidthPrimaryDefault, mwComponentButtonPrimaryColorFgDefault, mwComponentButtonPrimaryColorBgHover, mwComponentButtonPrimaryColorFgHover, mwComponentButtonPrimaryColorBgPressed, mwComponentButtonPrimaryColorFgFocused, mwComponentButtonPrimaryColorBgDisabled, mwComponentButtonPrimaryColorFgDisabled, mwComponentButtonSecondaryColorFgDisabled, mwComponentButtonSecondaryColorFgFocused, mwComponentButtonSecondaryColorFgHover, mwComponentButtonSecondaryColorBgDefault, mwComponentButtonSecondaryColorFgDefault, mwComponentButtonBorderWidthSecondaryDefault, mwComponentButtonSecondaryColorOutlineHover, mwComponentButtonSecondaryColorOutlineDisabled, mwComponentButtonSecondaryColorOutlineDefault, typographyButtonLargeBold, mwComponentButtonSecondaryColorFgPressed, mwComponentButtonSecondaryColorOutlinePressed, mwComponentButtonPrimaryColorFgPressed, mwComponentButtonPrimaryColorBgFocused, mwComponentButtonSecondaryColorOutlineFocused, mwComponentButtonPrimarySecondaryPaddingLr, mwComponentButtonPrimarySecondaryPaddingTb, mwComponentButtonPrimarySecondaryGap, mwComponentButtonBorderRadiusDefault, mwComponentButtonPrimarySecondaryMinWidth, mwComponentButtonBorderWidthSecondaryFocused, } from '../../../../tlm-token-farm/dist/js/MW_component.js';
const base = css `
  appearance: none;
  padding: ${mwComponentButtonPrimarySecondaryPaddingTb} ${mwComponentButtonPrimarySecondaryPaddingLr};
  font-family: '${typographyButtonLargeBold.fontFamily}';
  letter-spacing: ${typographyButtonLargeBold.letterSpacing};
  line-height: ${typographyButtonLargeBold.lineHeight};
  font-weight: ${getFontWeightValue(typographyButtonLargeBold.fontWeight)};
  font-size: ${typographyButtonLargeBold.fontSize}px;
  border-radius: ${mwComponentButtonBorderRadiusDefault}px;
  min-width: ${mwComponentButtonPrimarySecondaryMinWidth}px;
`;
const primaryButtonStyles = css `
  ${base};
  border: ${mwComponentButtonBorderWidthPrimaryDefault};
  color: ${mwComponentButtonPrimaryColorFgDefault};
  background-color: ${mwComponentButtonPrimaryColorBgDefault};
  &:hover {
    background-color: ${mwComponentButtonPrimaryColorBgHover};
    color: ${mwComponentButtonPrimaryColorFgHover};
  }
  &:focus {
    background-color: ${mwComponentButtonPrimaryColorBgFocused};
    color: ${mwComponentButtonPrimaryColorFgFocused};
  }
  &:active {
    background-color: ${mwComponentButtonPrimaryColorBgPressed};
    color: ${mwComponentButtonPrimaryColorFgPressed};
  }
  &:disabled {
    background-color: ${mwComponentButtonPrimaryColorBgDisabled};
    color: ${mwComponentButtonPrimaryColorFgDisabled};
  }
`;
const secondaryButtonStyles = css `
  ${base};
  border: 0;
  outline: ${mwComponentButtonBorderWidthSecondaryDefault}px solid;
  outline-offset: ${-2 * mwComponentButtonBorderWidthSecondaryDefault}px;
  color: ${mwComponentButtonSecondaryColorFgDefault};
  background-color: ${mwComponentButtonSecondaryColorBgDefault};
  outline-color: ${mwComponentButtonSecondaryColorOutlineDefault};
  &:hover {
    outline-color: ${mwComponentButtonSecondaryColorOutlineHover};
    color: ${mwComponentButtonSecondaryColorFgHover};
  }
  &:focus {
    outline-color: ${mwComponentButtonSecondaryColorOutlineFocused};
    outline: ${mwComponentButtonBorderWidthSecondaryFocused}px solid;
    outline-offset: ${-2 * mwComponentButtonBorderWidthSecondaryFocused}px;
    color: ${mwComponentButtonSecondaryColorFgFocused};
  }
  &:active {
    outline-color: ${mwComponentButtonSecondaryColorOutlinePressed};
    color: ${mwComponentButtonSecondaryColorFgPressed};
  }
  &:disabled {
    outline-color: ${mwComponentButtonSecondaryColorOutlineDisabled};
    color: ${mwComponentButtonSecondaryColorFgDisabled};
  }
`;
const iconStartStyles = css `
  margin-right: ${mwComponentButtonPrimarySecondaryGap};
`;
const iconEndStyles = css `
  margin-left: ${mwComponentButtonPrimarySecondaryGap};
`;
export class TlmButton {
  constructor() {
    this.handleClick = () => {
      this.clickEmitter.emit('onClick');
    };
  }
  componentWillLoad() {
    this.hasIconStartSlot = !!this.hostElement.querySelector('[slot="icon-start"]');
    this.hasIconEndSlot = !!this.hostElement.querySelector('[slot="icon-end"]');
  }
  render() {
    return (h("button", { disabled: this.disabled, onClick: this.handleClick, class: this.secondary ? secondaryButtonStyles : primaryButtonStyles, "test-id": this.testId, type: "button" }, this.hasIconStartSlot && (h("span", { class: iconStartStyles }, h("slot", { name: "icon-start" }))), h("slot", null), this.hasIconEndSlot && (h("span", { class: iconEndStyles }, h("slot", { name: "icon-end" })))));
  }
  static get is() { return "tlm-button"; }
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
      },
      "secondary": {
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
        "attribute": "secondary",
        "reflect": false
      }
    };
  }
  static get events() {
    return [{
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
      }];
  }
  static get elementRef() { return "hostElement"; }
}
