import { newSpecPage } from "@stencil/core/testing";
import { MwCardBody } from "./mw-card-body";

describe("GIVEN MwCardBody", () => {
  const setup = async (text = "") => {
    return await newSpecPage({
      components: [MwCardBody],
      html: `
        <mw-card-body>
            ${text}
        </mw-card-body>`,
    });
  };

  it("SHOULD render text in slot", async () => {
    const text = "text to be displayed in slot";
    const page = await setup(text);
    expect(page.root.innerHTML).toContain(text);
  });
});
