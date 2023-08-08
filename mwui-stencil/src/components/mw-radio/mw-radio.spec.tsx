import { newSpecPage } from "@stencil/core/testing";
import { h } from "@stencil/core";
import { MwRadio } from "./mw-radio";
import { SpecPage } from "@stencil/core/internal";

describe("GIVEN MwRadio", () => {
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

  const getRadioInput = (page: SpecPage): HTMLInputElement | null => {
    return page.root.querySelector(`#${page.rootInstance.radioId}`);
  };

  it("SHOULD render MwRadio", async () => {
    const page = await setup();
    expect(page.root).toBeTruthy();
  });

  it("SHOULD display label WHEN label value is passed", async () => {
    const label = "radio-label-text";
    const page = await setup({
      value: "",
      name: "",
      label,
    });

    expect(page.root.querySelector(".mw-radio-label").innerHTML).toEqual(label);
  });

  it("SHOULD have value set WHEN value is passed", async () => {
    const value = "some-value";
    const page = await setup({
      value,
      name: "",
    });
    expect(getRadioInput(page).getAttribute("value")).toEqual(value);
  });

  it("SHOULD have name set WHEN name is passed", async () => {
    const value = "some-value";
    const name = "some-name";
    const page = await setup({
      value,
      name,
    });
    expect(getRadioInput(page).getAttribute("name")).toEqual(name);
  });

  it("SHOULD not be checked WHEN value is false", async () => {
    const page = await setup({
      value: "",
      name: "",
      checked: false,
    });

    expect(getRadioInput(page)).toEqualAttribute("checked", null);
  });

  it("SHOULD be checked WHEN value is true", async () => {
    const page = await setup({
      value: "",
      name: "",
      checked: true,
    });
    expect(getRadioInput(page)).toEqualAttribute("checked", "");
  });
});
