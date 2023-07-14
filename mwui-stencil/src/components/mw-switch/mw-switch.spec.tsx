import { newSpecPage } from "@stencil/core/testing";
import { h } from "@stencil/core";
import { MwSwitch } from "./mw-switch";

describe("GIVEN MwSwitch", () => {
  const setup = async (
    { disabled, label, on, off, checked }: Pick<MwSwitch, "disabled" | "label" | "on" | "off" | "checked"> = {
      checked: false,
    },
  ) => {
    return await newSpecPage({
      components: [MwSwitch],
      template: () => <mw-switch disabled={disabled} label={label} on={on} off={off} checked={checked}></mw-switch>,
    });
  };

  it("SHOULD render MwSwitch", async () => {
    const page = await setup();
    expect(page.root).toBeTruthy();
  });

  it("SHOULD render label WHEN value is passed", async () => {
    const label = "label-text";
    const page = await setup({
      checked: false,
      label,
    });

    expect(page.root.querySelector(".mw-switch-label").innerHTML).toEqual(label);
  });

  it("SHOULD render off-text label WHEN value is false", async () => {
    const off = "off-text";
    const on = "on-text";
    const page = await setup({
      checked: false,
      off,
      on,
    });

    expect(page.root.querySelector(".mw-switch-label.on-off").innerHTML).toEqual(off);
  });

  it("SHOULD render on-text label WHEN value is true", async () => {
    const off = "off-text";
    const on = "on-text";
    const page = await setup({
      checked: true,
      off,
      on,
    });

    expect(page.root.querySelector(".mw-switch-label.on-off").innerHTML).toEqual(on);
  });
});
