import { newSpecPage } from "@stencil/core/testing";
import { MwAppBarTitle } from "./mw-app-bar-title";
import { h } from "@stencil/core";

describe("GIVEN MwAppBarTitle", () => {
  const setup = async (header = "header-text") => {
    return await newSpecPage({
      components: [MwAppBarTitle],
      template: () => <mw-app-bar-title>{header}</mw-app-bar-title>,
    });
  };

  it("SHOULD render MwAppBarTitle", async () => {
    const page = await setup();
    expect(page.root).toBeTruthy();
  });

  it("SHOULD display heading WHEN value is passed", async () => {
    const header = "some-header-title";
    const page = await setup(header);
    expect(page.root.innerHTML).toContain(header);
  });
});
