import { newSpecPage } from "@stencil/core/testing";
import { MwDropdown } from "../mw-dropdown";

describe("mw-dropdown", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [MwDropdown],
      html: `<mw-dropdown></mw-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <mw-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mw-dropdown>
    `);
  });
});
