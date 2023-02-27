import { newSpecPage } from "@stencil/core/testing";
import { MwChipInput } from "../mw-chip-input";

describe("mw-chip-input", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [MwChipInput],
      html: `<mw-chip-input></mw-chip-input>`,
    });
    expect(page.root).toEqualHtml(`
      <mw-chip-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mw-chip-input>
    `);
  });
});
