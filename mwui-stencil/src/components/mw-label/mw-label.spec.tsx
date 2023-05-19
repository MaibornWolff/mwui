import { newSpecPage } from "@stencil/core/testing";
import { MwLabel } from "./mw-label";
import { h } from "@stencil/core";
import { SpecPage } from "@stencil/core/internal";

describe("Given MwLabel", () => {
  const defaultProps = {
    name: "some-name",
    label: "some-label",
    required: false,
  };
  const setup = async ({ name, label, required }: Pick<MwLabel, "label" | "required" | "name"> = defaultProps) => {
    return await newSpecPage({
      components: [MwLabel],
      template: () => <mw-label label={label} name={name} required={required}></mw-label>,
    });
  };

  const getLabel = (page: SpecPage): HTMLLabelElement => {
    return page.root.querySelector(".label");
  };

  it("SHOULD render MwLabel", async () => {
    const page = await setup();
    expect(page.root).toBeDefined();
    expect(getLabel(page).innerHTML).not.toContain("*");
  });

  it("SHOULD display a * WHEN label is required", async () => {
    const page = await setup({
      ...defaultProps,
      required: true,
    });

    expect(getLabel(page).innerHTML).toContain("*");
  });

  it("SHOULD contain label text WHEN passed", async () => {
    const label = "some-label-text";
    const page = await setup({
      ...defaultProps,
      label,
    });

    expect(getLabel(page).innerHTML).toContain(label);
  });
});
