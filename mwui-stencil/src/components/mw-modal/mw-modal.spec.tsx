import { newSpecPage } from "@stencil/core/testing";
import { MwModal } from "./mw-modal";

describe("mw-modal", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [MwModal],
      html: `<mw-modal></mw-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <mw-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mw-modal>
    `);
  });
});
