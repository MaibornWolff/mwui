import { newSpecPage } from "@stencil/core/testing";
import { MwRadioGroup } from "./mw-radio-group";

describe("mw-radio-group", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [MwRadioGroup],
      html: `<mw-radio-group></mw-radio-group>`,
    });
    expect(page.root).toEqualHtml(`
      <mw-radio-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mw-radio-group>
    `);
  });
});
