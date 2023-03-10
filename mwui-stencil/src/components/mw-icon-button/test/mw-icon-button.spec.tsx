import { newSpecPage } from "@stencil/core/testing";
import { MwIconButton } from "../mw-icon-button";

describe("mw-icon-button", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [MwIconButton],
      html: `<mw-icon-button></mw-icon-button>`,
    });
    expect(page.root).toEqualHtml(`
      <mw-icon-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mw-icon-button>
    `);
  });
});
