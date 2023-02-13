import { newSpecPage } from "@stencil/core/testing";
import { MwModal } from "./mw-modal";
import { h } from "@stencil/core";
import { MWButton } from "../mw-button/mw-button";

describe("GIVEN MwModal", () => {
  const setup = async (
    { backdropDismiss }: Pick<MwModal, "backdropDismiss"> = {
      backdropDismiss: true,
    },
  ) => {
    return await newSpecPage({
      components: [MwModal, MWButton],
      template: () => (
        <div>
          <mw-button id="open-modal"></mw-button>
          <mw-button id="dismiss-modal"></mw-button>
          <mw-modal trigger="open-modal" dimiss-trigger="dismiss-trigger" backdropDismiss={backdropDismiss}>
            <div>some text content</div>
          </mw-modal>
        </div>
      ),
    });
  };

  // const openModal = (page: SpecPage) => {
  //   page.body.querySelector<HTMLMwButtonElement>("#open-modal").click()
  // }

  // const dismissModal = (page: SpecPage) => {
  //   page.body.querySelector<HTMLMwButtonElement>("#dismiss-modal").click()
  // }

  it("SHOULD render MwModal", async () => {
    const page = await setup();
    expect(page.body.querySelector("mw-modal")).toBeTruthy();
  });

  /**
   * TODO: i did not find a way to get the children of a MockHTMLDocument
   * So the modal is not properly attached to the document body
   * so either i find a solution here - or i will just mock it completly and test the functionality directly
   */
});
