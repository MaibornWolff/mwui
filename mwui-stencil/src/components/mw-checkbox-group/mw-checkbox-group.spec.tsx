import { newSpecPage } from "@stencil/core/testing";
import { MwCheckboxGroup } from "./mw-checkbox-group";

describe("mw-checkbox-group", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [MwCheckboxGroup],
      html: `<mw-checkbox-group></mw-checkbox-group>`,
    });
    expect(page.root).toEqualHtml(`
      <mw-checkbox-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mw-checkbox-group>
    `);
  });
});
