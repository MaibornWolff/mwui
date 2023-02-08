import { newSpecPage } from "@stencil/core/testing";
import { MwModalTitle } from "./mw-modal-title";

describe("mw-modal-title", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [MwModalTitle],
      html: `<mw-modal-title></mw-modal-title>`,
    });
    expect(page.root).toEqualHtml(`
      <mw-modal-title>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mw-modal-title>
    `);
  });
});
