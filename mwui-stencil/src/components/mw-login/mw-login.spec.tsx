import { newSpecPage } from "@stencil/core/testing";
import { MwLogin } from "./mw-login";

describe("mw-login", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [MwLogin],
      html: `<mw-login></mw-login>`,
    });
    expect(page.root).toEqualHtml(`
      <mw-login>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mw-login>
    `);
  });
});
