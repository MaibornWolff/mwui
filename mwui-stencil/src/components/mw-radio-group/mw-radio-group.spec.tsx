import { newSpecPage } from "@stencil/core/testing";
import { MwRadioGroup } from "./mw-radio-group";
import { MwRadio } from "../mw-radio/mw-radio";
import { h } from "@stencil/core";

describe("GIVEN MwRadioGroup", () => {
  const setup = async (
    { disabled, checked, value, name, label }: Pick<MwRadio, "disabled" | "checked" | "value" | "name" | "label"> = {
      value: "",
      name: "",
    },
  ) => {
    return await newSpecPage({
      components: [MwRadio],
      template: () => <mw-radio disabled={disabled} checked={checked} label={label} value={value} name={name}></mw-radio>,
    });
  };
});
