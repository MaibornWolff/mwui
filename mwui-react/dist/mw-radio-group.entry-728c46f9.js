import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-3847b4d2.js';

/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */

const mwRadioGroupCss = ":host{display:block}";

const MwRadioGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.radioChange = createEvent(this, "radioChange", 4);
    this.onClick = (event) => {
      event.preventDefault();
      const selectedRadio = event.target && event.target.closest("mw-radio");
      if (selectedRadio) {
        const currentValue = this.value;
        const newValue = selectedRadio.value;
        if (newValue !== currentValue) {
          this.value = newValue;
        }
      }
    };
    this.value = undefined;
  }
  valueChanged(value) {
    this.radioChange.emit({ value });
  }
  get radios() {
    return Array.from(this.host.querySelectorAll("mw-radio"));
  }
  render() {
    return h(Host, { role: "radiogroup", onClick: this.onClick });
  }
  get host() { return getElement(this); }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
};
MwRadioGroup.style = mwRadioGroupCss;

export { MwRadioGroup as mw_radio_group };
