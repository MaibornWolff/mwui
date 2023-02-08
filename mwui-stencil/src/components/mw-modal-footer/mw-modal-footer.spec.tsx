import { newSpecPage } from "@stencil/core/testing";
import { MwModalFooter } from "./mw-modal-footer";

describe("mw-modal-footer", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [MwModalFooter],
      html: `<mw-modal-footer></mw-modal-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <mw-modal-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mw-modal-footer>
    `);
  });
});
