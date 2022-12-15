import { r as registerInstance, h, g as getElement } from './index-310f4825.js';

const mwRadioButtonCss = ".container{display:block;position:relative;padding-left:35px;cursor:pointer;font-size:22px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0;margin:0;top:0;left:0;border:none}.checkmark{position:absolute;top:0;left:0;height:25px;width:25px;background-color:#eee;border-radius:50%}.container:hover input~.checkmark{background-color:#ccc}.container:hover input:disabled~.checkmark{background-color:#eee}.container input:checked~.checkmark{background-color:#2196F3}.checkmark:after{content:\"\";position:absolute;display:none}.container input:checked~.checkmark:after{display:block}.container .checkmark:after{top:9px;left:9px;width:7px;height:7px;border-radius:50%;background:white}";

const MwRadioButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("label", { class: "container" }, h("input", { type: "radio", value: this.value, name: this.name, checked: this.checked, disabled: this.disabled }), h("span", { class: "checkmark" }, h("span", { class: "checkmark-dot" })), h("slot", null)));
  }
  get hostElement() { return getElement(this); }
};
MwRadioButton.style = mwRadioButtonCss;

export { MwRadioButton as mw_radio_button };
