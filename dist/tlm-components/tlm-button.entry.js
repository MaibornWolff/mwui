import { r as registerInstance, h } from './index-de76567f.js';

const tlmButtonCss = ":host{display:inline-block}button{font-family:sans-serif;padding:10px;border-radius:30px;border:0;color:white;background:#a100a1;transition:0.2s}button:hover{background:#c500c5}";

const TlmButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("button", { id: this.buttonId, type: "button" }, h("slot", null)));
  }
};
TlmButton.style = tlmButtonCss;

export { TlmButton as tlm_button };
