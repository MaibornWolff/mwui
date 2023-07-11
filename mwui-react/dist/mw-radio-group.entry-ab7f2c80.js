'use strict';

var index = require('./index-39b5736f.js');

/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */

const mwRadioGroupCss = ":host{display:block}";

const MwRadioGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.radioChange = index.createEvent(this, "radioChange", 4);
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
    return index.h(index.Host, { role: "radiogroup", onClick: this.onClick });
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
};
MwRadioGroup.style = mwRadioGroupCss;

exports.mw_radio_group = MwRadioGroup;
