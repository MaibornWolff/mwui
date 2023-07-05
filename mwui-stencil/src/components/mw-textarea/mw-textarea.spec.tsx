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
          <div class="wrapper">
            <div class="textarea-field">
              <mw-label></mw-label><textarea class="textarea" style="resize: none;"></textarea>
            </div>
            <mw-helper-text></mw-helper-text>
          </div>
        </mock:shadow-root>
      </mw-textarea>
    `);
  });
});
