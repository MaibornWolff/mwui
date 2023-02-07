import { newE2EPage } from "@stencil/core/testing";

describe("mw-slider", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<mw-slider></mw-slider>");

    const element = await page.find("mw-slider");
    expect(element).toHaveClass("hydrated");
  });
});
