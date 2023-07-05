import { newSpecPage } from "@stencil/core/testing";
import { MwTextarea } from "./mw-textarea";

describe("mw-textarea", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [MwTextarea],
      html: `<mw-textarea></mw-textarea>`,
    });
    expect(page.root).toEqualHtml(`
      <mw-textarea>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mw-textarea>
    `);
  });
});
