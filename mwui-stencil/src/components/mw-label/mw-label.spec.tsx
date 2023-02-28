import { newSpecPage } from "@stencil/core/testing";
import { MwLabel } from "./mw-label";

describe("mw-label", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [MwLabel],
      html: `<mw-label></mw-label>`,
    });
    expect(page.root).toEqualHtml(`
      <mw-label>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mw-label>
    `);
  });
});
