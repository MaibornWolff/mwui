import { r as registerInstance, h, g as getElement } from './index-310f4825.js';

const mwRadioButtonCss = ".container{display:flex;position:relative;cursor:pointer;align-items:center}.container input{display:none}.checkmark{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;display:flex;justify-content:center;align-items:center;height:20px;width:20px;border:2px solid black;border-radius:50%;margin:14px}.container:hover input~.checkmark{background:#ff4c4c}.container:hover input:disabled~.checkmark{background:none}.container input:checked~.checkmark{border:6px solid red}.container.hover input:checked~.checkmark{border:6px solid #ff4c4c;background:none}";

const MwRadioButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("label", { class: "container" }, h("input", { type: "radio", value: this.value, name: this.name, checked: this.checked, disabled: this.disabled }), h("span", { class: "checkmark" }), h("slot", null)));
  }
  get hostElement() { return getElement(this); }
};
MwRadioButton.style = mwRadioButtonCss;

export { MwRadioButton as mw_radio_button };
