import { newSpecPage } from "@stencil/core/testing";
import { MwBackdrop } from "./mw-backdrop";

describe("mw-backdrop", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [MwBackdrop],
      html: `<mw-backdrop></mw-backdrop>`,
    });
    expect(page.root).toEqualHtml(`
      <mw-backdrop>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mw-backdrop>
    `);
  });
});
