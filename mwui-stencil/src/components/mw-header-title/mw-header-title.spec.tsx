import { newSpecPage } from "@stencil/core/testing";
import { MwHeaderTitle } from "./mw-header-title";
import { h } from "@stencil/core";

describe("GIVEN MwHeaderTitle", () => {
  const setup = async (header: string = "header-text") => {
    return await newSpecPage({
      components: [MwHeaderTitle],
      template: () => <mw-header-title>{header}</mw-header-title>,
    });
  };

  it("SHOULD render MwHeaderTitle", async () => {
    const page = await setup();
    expect(page.root).toBeTruthy();
  });

  it("SHOULD display heading WHEN value is passed", async () => {
    const header = "some-header-title";
    const page = await setup(header);
    expect(page.root.innerHTML).toContain(header);
  });
});
