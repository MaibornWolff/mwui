import { newSpecPage } from "@stencil/core/testing";
import { MwRadioGroup } from "./mw-radio-group";
import { h } from "@stencil/core";
import { MwRadio } from "../mw-radio/mw-radio";
import { SpecPage } from "@stencil/core/internal";

describe("GIVEN MwRadioGroup", () => {
  const setup = async (
    { value }: Pick<MwRadioGroup, "value"> = {
      value: "",
    },
  ) => {
    return await newSpecPage({
      components: [MwRadioGroup, MwRadio],
      template: () => (
        <mw-radio-group value={value}>
          <mw-radio label="one" value="one"></mw-radio>
          <mw-radio label="two" value="two"></mw-radio>
          <mw-radio label="three" value="three"></mw-radio>
        </mw-radio-group>
      ),
    });
  };

  const getRadio = (page: SpecPage, index: number = 0): HTMLInputElement => {
    return page.root.querySelectorAll<HTMLInputElement>("input[type=radio]")[index];
  };

  it("SHOULD render MwRadioGroup", async () => {
    const page = await setup();
    expect(page.root).toBeTruthy();
  });

  it("SHOULD select radios WHEN values are set", async () => {
    let value = "one";

    const page = await setup({
      value,
    });

    expect(getRadio(page, 0)).toHaveAttribute("checked");
    expect(getRadio(page, 1)).not.toHaveAttribute("checked");
    expect(getRadio(page, 2)).not.toHaveAttribute("checked");

    getRadio(page, 1).click();

    expect(page.rootInstance.value).toBe("two");

    await page.waitForChanges();

    expect(getRadio(page, 0)).not.toHaveAttribute("checked");
    expect(getRadio(page, 1)).toHaveAttribute("checked");
    expect(getRadio(page, 2)).not.toHaveAttribute("checked");
  });

  it("SHOULD emit radioChange WHEN value is changed", async () => {
    let value = "one";

    const page = await setup({
      value,
    });

    const clickMock = (page.rootInstance.radioChange.emit = jest.fn());

    getRadio(page, 1).click();
    getRadio(page, 2).click();

    await page.waitForChanges();

    expect(clickMock).toHaveBeenCalledTimes(2);
    expect(page.rootInstance.value).toBe("three");
  });
});
