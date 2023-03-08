import { newSpecPage } from "@stencil/core/testing";
import { h } from "@stencil/core";
import { MwSwitch } from "./mw-switch";

describe("GIVEN MwSwitch", () => {
  const setup = async (
    { disabled, label, onText, offText, checked }: Pick<MwSwitch, "disabled" | "label" | "onText" | "offText" | "checked"> = {
      checked: false,
    },
  ) => {
    return await newSpecPage({
      components: [MwSwitch],
      template: () => <mw-switch disabled={disabled} label={label} onText={onText} offText={offText} checked={checked}></mw-switch>,
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

    expect(page.root.shadowRoot.querySelector(".label").innerHTML).toEqual(label);
  });

  it("SHOULD render off-text label WHEN value is false", async () => {
    const offText = "off-text";
    const onText = "on-text";
    const page = await setup({
      checked: false,
      offText,
      onText,
    });

    expect(page.root.shadowRoot.querySelector(".label").innerHTML).toEqual(offText);
  });

  it("SHOULD render on-text label WHEN value is true", async () => {
    const offText = "off-text";
    const onText = "on-text";
    const page = await setup({
      checked: true,
      offText,
      onText,
    });

    expect(page.root.shadowRoot.querySelector(".label").innerHTML).toEqual(onText);
  });
});
