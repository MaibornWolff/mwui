import { newSpecPage } from "@stencil/core/testing";
import { MwModalFooter } from "./mw-modal-footer";
import { h } from "@stencil/core";
import { MwButton } from "../mw-button/mw-button";

describe("GIVEN MwModalFooter", () => {
  const setup = async () => {
    return await newSpecPage({
      components: [MwModalFooter],
      template: () => <mw-modal-footer></mw-modal-footer>,
    });
  };

  it("SHOULD render MwModalFooter", async () => {
    const page = await setup();
    expect(page.root).toBeTruthy();
  });

  it("SHOULD render contents in slot WHEN provided", async () => {
    const buttonLabel = "some action";
    const page = await newSpecPage({
      components: [MwModalFooter, MwButton],
      template: () => (
        <mw-modal-footer>
          <mw-button label={buttonLabel}></mw-button>
        </mw-modal-footer>
      ),
    });

    expect(page.root.querySelector("mw-button")).not.toBeNull();
    expect(page.root.querySelector("mw-button").shadowRoot.innerHTML).toContain(buttonLabel);
  });
});
