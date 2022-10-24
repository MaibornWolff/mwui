import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { c as css } from './emotion-css.esm.js';
import { g as getFontWeightValue, a as getFontStyle } from './utils.js';

/**
 * Do not edit directly
 * Generated on Mon, 24 Oct 2022 14:19:11 GMT
 */
const s = 12;
const l = 24;
const fontFamiliesDefault = "roboto";
const fontWeightsBold = "Bold";
const fontSize14 = 14;
const buttonButtonFilledDefaultBgColor = "#6b60cd";
const buttonButtonFilledDefaultFgColor = "#ffffff";
const buttonButtonFilledDefaultBorderRadius = "0px";
const buttonButtonFilledHoverBgColor = "#6b60cd";
const buttonButtonFilledHoverFgColor = "#ffffff";
const buttonButtonFilledPressedBgColor = "#7965AF";
const buttonButtonFilledPressedFgColor = "#ffffff";
const buttonButtonFilledDisabledBgColor = "#1f1f1f1f";
const buttonButtonFilledDisabledFgColor = "#1c1b1f61";

const buttonStyles = css `
  font-family: '${fontFamiliesDefault}';
  border: 0;
  padding: ${s}px ${l}px;
  font-weight: ${getFontWeightValue(fontWeightsBold)};
  font-style: ${getFontStyle(fontWeightsBold)};
  color: ${buttonButtonFilledDefaultFgColor};
  font-size: ${fontSize14}px;
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
// TODO: clarify spacing with tokens
const iconStartStyles = css `
  margin-right: ${s}px;
`;
const iconEndStyles = css `
  margin-left: ${s}px;
`;
const TlmButton$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.clickEmitter = createEvent(this, "clickEmitter", 4);
    this.handleClick = () => {
      this.clickEmitter.emit('onClick');
    };
  }
  componentWillLoad() {
    this.hasIconStartSlot = !!this.hostElement.querySelector('[slot="icon-start"]');
    this.hasIconEndSlot = !!this.hostElement.querySelector('[slot="icon-end"]');
  }
  render() {
    return (h("button", { disabled: this.disabled, onClick: this.handleClick, class: buttonStyles, "test-id": this.testId, type: "button" }, this.hasIconStartSlot && (h("span", { class: iconStartStyles }, h("slot", { name: "icon-start" }))), h("slot", null), this.hasIconEndSlot && (h("span", { class: iconEndStyles }, h("slot", { name: "icon-end" })))));
  }
  get hostElement() { return this; }
}, [4, "tlm-button", {
    "testId": [1, "test-id"],
    "disabled": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["tlm-button"];
  components.forEach(tagName => { switch (tagName) {
    case "tlm-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TlmButton$1);
      }
      break;
  } });
}

const TlmButton = TlmButton$1;
const defineCustomElement = defineCustomElement$1;

export { TlmButton, defineCustomElement };
