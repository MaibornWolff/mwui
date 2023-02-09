/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import { r as registerInstance, h, e as Host, g as getElement } from './index-a62bab22.js';

const mwSliderCss = ":host{display:block}.mw-slider-container{display:flex;flex-direction:column;width:100%;gap:var(--mw-component-slider-with-label-gap-within-y)}.mw-slider{display:flex;width:100%;flex-direction:column;gap:var(--mw-component-slider-with-label-gap-within-y)}.mw-slider-input-wrapper{position:relative;display:flex;align-items:center;width:100%;gap:12px}.mw-slider-input{width:100%}.mw-slider:not(.disabled):hover #mw-slider-range-value{opacity:1}#mw-slider-range-value{--size:28px;transition:opacity 0.2s ease-in-out;opacity:0;z-index:9999;position:absolute;display:flex;justify-content:center;align-items:center;border-radius:50%;top:calc(-1 * (var(--size) + 4px + var(--mw-component-slider-handle-hover-gap-between)));width:var(--size);height:var(--size);background:var(--mw-component-slider-focus);color:var(--mw-component-slider-fg);transform:translateX(calc(-0.5 * var(--size)));font-family:var(--mw-component-text-field-label-font-family);font-weight:var(--mw-component-text-field-label-font-weight);font-size:var(--mw-component-text-field-label-font-size);line-height:var(--mw-component-text-field-label-line-height)}#mw-slider-range-value:after{content:\"\";position:absolute;width:0;height:0;border-top:10px solid var(--mw-component-slider-focus);border-left:10px solid transparent;border-right:10px solid transparent;top:24px;left:4px}.mw-slider-input-wrapper mw-icon{color:var(--mw-component-slider-icons-default)}.mw-slider-input-wrapper.disabled mw-icon{color:var(--mw-component-slider-disabled)}input[type=\"range\"]{width:100%;color:var(--mw-component-slider-default-active);--thumb-height:var(--mw-component-size-slider-handle);--track-height:var(--mw-component-size-slider-track-h);--track-color:var(--mw-component-slider-default-inactive);--clip-edges:0.125em}input[type=\"range\"]{position:relative;background:#fff0;overflow:hidden}input[type=\"range\"]:active{cursor:grabbing}input[type=\"range\"]:disabled{color:var(--mw-component-slider-disabled);--track-color:var(--mw-component-slider-disabled-inactive);cursor:not-allowed}input[type=\"range\"],input[type=\"range\"]::-webkit-slider-runnable-track,input[type=\"range\"]::-webkit-slider-thumb{-webkit-appearance:none;transition:all ease 100ms;height:var(--thumb-height);border-radius:9999px}input[type=\"range\"]::-webkit-slider-runnable-track,input[type=\"range\"]::-webkit-slider-thumb{position:relative}input[type=\"range\"]::-webkit-slider-thumb{--thumb-radius:calc((var(--thumb-height) * 0.5) - 1px);--clip-top:calc((var(--thumb-height) - var(--track-height)) * 0.5 - 0.5px);--clip-bottom:calc(var(--thumb-height) - var(--clip-top));--clip-further:calc(100% + 1px);--box-fill:calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0 100vmax currentColor;width:var(--thumb-width, var(--thumb-height));background:linear-gradient(currentColor 0 0) scroll no-repeat left center / 50% calc(var(--track-height) + 1px);background-color:currentColor;box-shadow:var(--box-fill);border-radius:var(--thumb-width, var(--thumb-height));filter:brightness(100%);clip-path:polygon(\n    100% -1px,\n    var(--clip-edges) -1px,\n    0 var(--clip-top),\n    -100vmax var(--clip-top),\n    -100vmax var(--clip-bottom),\n    0 var(--clip-bottom),\n    var(--clip-edges) 100%,\n    var(--clip-further) var(--clip-further)\n  )}input[type=\"range\"]:focus{outline:none;border:none}input[type=\"range\"]:focus::-webkit-slider-thumb{border:var(--mw-core-border-width-sm) solid var(--mw-semantic-color-border-default)}input[type=\"range\"]:hover::-webkit-slider-thumb{cursor:grab;background:var(--mw-component-slider-hover)}input[type=\"range\"]:active::-webkit-slider-thumb{cursor:grabbing;background:var(--mw-component-slider-pressed);color:var(--mw-component-slider-pressed)}input[type=\"range\"]::-webkit-slider-runnable-track{background:linear-gradient(var(--track-color) 0 0) scroll no-repeat center / 100% calc(var(--track-height) + 1px)}input[type=\"range\"]:disabled::-webkit-slider-thumb{background:var(--mw-component-slider-disabled);color:var(--mw-component-slider-disabled);cursor:not-allowed}input[type=\"range\"],input[type=\"range\"]::-moz-range-track,input[type=\"range\"]::-moz-range-thumb{appearance:none;transition:all ease 100ms;height:var(--thumb-height)}input[type=\"range\"]::-moz-range-thumb{background:currentColor;border:0;width:var(--thumb-width, var(--thumb-height));border-radius:var(--thumb-width, var(--thumb-height));cursor:grab}input[type=\"range\"]:active::-moz-range-thumb{cursor:grabbing}input[type=\"range\"]::-moz-range-track{width:100%;background:var(--track-color)}input[type=\"range\"]::-moz-range-progress{appearance:none;background:currentColor;transition-delay:30ms}input[type=\"range\"]::-moz-range-track,input[type=\"range\"]::-moz-range-progress{height:calc(var(--track-height) + 1px);border-radius:var(--track-height)}input[type=\"range\"]:hover::-moz-range-progress,input[type=\"range\"]:hover::-moz-range-thumb{cursor:grab;background:var(--mw-component-slider-hover)}input[type=\"range\"]:active::-moz-range-thumb,input[type=\"range\"]:active::-moz-range-progress{cursor:grabbing;background:var(--mw-component-slider-pressed)}input[type=\"range\"]:focus::-moz-range-thumb{background:var(--mw-component-slider-focus)}input[type=\"range\"]:disabled::-moz-range-thumb,input[type=\"range\"]:disabled::-moz-range-progress{cursor:not-allowed;background:var(--mw-component-slider-disabled)}.mw-slider-label{display:block;font-family:var(--mw-component-text-field-label-font-family);font-weight:var(--mw-component-text-field-label-font-weight);font-size:var(--mw-component-text-field-label-font-size);line-height:var(--mw-component-text-field-label-line-height);padding-left:var(--mw-component-slider-padding-label-x);padding-right:var(--mw-component-slider-padding-label-x)}.mw-slider.disabled .mw-slider-label{color:var(--mw-component-slider-disabled)}.mw-slider-helper{align-self:flex-end;color:var(--mw-component-text-field-fg-helper-text);font-family:var(--mw-component-text-field-label-font-family);font-weight:var(--mw-component-text-field-label-font-weight);font-size:var(--mw-component-text-field-label-font-size);line-height:var(--mw-component-text-field-label-line-height)}.mw-slider.inline{flex-direction:row;display:inline-flex;align-items:center}.mw-slider.inline .mw-slider-label{width:var(--mw-component-size-slider-label-horizontal-width)}";

const MwSlider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.updateRangeValuePosition = () => {
      const rangeValueElement = this.host.shadowRoot.querySelector("#mw-slider-range-value");
      const inputElement = this.host.shadowRoot.querySelector(".mw-slider-input input");
      const padding = 21; // magic number to improve positioning
      const range = this.value;
      const step = (inputElement.getBoundingClientRect().width - padding) / this.max;
      rangeValueElement.style.transform = `translateX(${range * step}px)`;
    };
    this.handleInput = (event) => {
      this.value = parseInt(event.target.value);
      this.updateRangeValuePosition();
    };
    this.testId = undefined;
    this.name = undefined;
    this.label = undefined;
    this.helperText = undefined;
    this.startIcon = undefined;
    this.endIcon = undefined;
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.value = 0;
    this.inline = false;
    this.disabled = false;
  }
  componentDidLoad() {
    this.updateRangeValuePosition();
  }
  render() {
    return (h(Host, null, h("div", { class: "mw-slider-container" }, h("div", { class: { "mw-slider": true, "inline": this.inline, "disabled": this.disabled }, "test-id": this.testId }, this.label && (h("label", { class: "mw-slider-label", htmlFor: this.name }, this.label)), h("div", { class: { "mw-slider-input-wrapper": true, "disabled": this.disabled } }, this.startIcon && h("mw-icon", { icon: this.startIcon, size: "medium" }), h("div", { class: "mw-slider-input" }, h("input", { type: "range", onInput: this.handleInput, disabled: this.disabled, id: this.name, name: this.name, min: this.min, max: this.max, value: this.value }), h("label", { htmlfor: this.name, id: "mw-slider-range-value" }, this.value)), this.endIcon && h("mw-icon", { icon: this.endIcon, size: "medium" })), this.helperText && !this.inline && h("div", { class: "mw-slider-helper" }, this.helperText)), this.helperText && this.inline && h("div", { class: "mw-slider-helper" }, this.helperText))));
  }
  get host() { return getElement(this); }
};
MwSlider.style = mwSliderCss;

export { MwSlider as mw_slider };
