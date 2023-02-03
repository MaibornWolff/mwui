import { newSpecPage } from "@stencil/core/testing";
import { MwSlider } from "../mw-slider";

describe("mw-slider", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [MwSlider],
      html: `<mw-slider></mw-slider>`,
    });
    expect(page.root).toEqualHtml(`
      <mw-slider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mw-slider>
    `);
  });
});
