import { newSpecPage } from "@stencil/core/testing";
import { h } from "@stencil/core";
import { SpecPage } from "@stencil/core/internal";
import { MwCheckbox } from "../mw-checkbox/mw-checkbox";
import { MwCheckboxGroup } from "./mw-checkbox-group";

describe("GIVEN MwCheckboxGroup", () => {
  const setup = async (
    { value }: Pick<MwCheckboxGroup, "value"> = {
      value: [],
    },
  ) => {
    return await newSpecPage({
      components: [MwCheckboxGroup, MwCheckbox],
      template: () => (
        <mw-checkbox-group value={value}>
          <mw-checkbox label="one" value="one"></mw-checkbox>
          <mw-checkbox label="two" value="two"></mw-checkbox>
          <mw-checkbox label="three" value="three"></mw-checkbox>
        </mw-checkbox-group>
      ),
    });
  };

  const getCheckbox = (page: SpecPage, index: number = 0): HTMLInputElement => {
    return page.root.shadowRoot.querySelectorAll<HTMLInputElement>("input[type=checkbox]")[index];
  };

  it("SHOULD render MwCheckboxGroup", async () => {
    const page = await setup();
    expect(page.root.shadowRoot).toBeTruthy();
  });

  it("SHOULD select checkboxes WHEN values are set", async () => {
    let value = ["one"];

    const page = await setup({
      value,
    });

    expect(getCheckbox(page, 1)).toHaveAttribute("checked");
    expect(getCheckbox(page, 2)).not.toHaveAttribute("checked");
    expect(getCheckbox(page, 3)).not.toHaveAttribute("checked");

    getCheckbox(page, 1).click();
    getCheckbox(page, 2).click();

    expect(page.rootInstance.value).not.toContain("one");
    expect(page.rootInstance.value).toContain("two");

    await page.waitForChanges();

    expect(getCheckbox(page, 1)).not.toHaveAttribute("checked");
    expect(getCheckbox(page, 2)).toHaveAttribute("checked");
    expect(getCheckbox(page, 3)).not.toHaveAttribute("checked");
  });

  it("SHOULD check all checkboxes when parent checkbox is clicked", async () => {
    let value = [];

    const page = await setup({
      value,
    });

    getCheckbox(page, 0).click();

    await page.waitForChanges();

    expect(page.rootInstance.value).toContain("one");
    expect(page.rootInstance.value).toContain("two");
    expect(page.rootInstance.value).toContain("three");
  });

  it("SHOULD emit checkboxChange WHEN value is changed", async () => {
    let value = ["one"];

    const page = await setup({
      value,
    });

    const clickMock = (page.rootInstance.checkboxChange.emit = jest.fn());

    getCheckbox(page, 1).click();
    getCheckbox(page, 2).click();

    await page.waitForChanges();

    expect(clickMock).toHaveBeenCalledTimes(2);
    expect(page.rootInstance.value).toContain("two");
    expect(page.rootInstance.value).not.toContain("one");
  });
});
