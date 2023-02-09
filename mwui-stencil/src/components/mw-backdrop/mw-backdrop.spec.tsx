import { newSpecPage } from "@stencil/core/testing";
import { MwBackdrop } from "./mw-backdrop";
import { h } from "@stencil/core";

describe("GIVEN MwBackdrop", () => {
  const setup = async (
    { backdropDismiss }: Pick<MwBackdrop, "backdropDismiss"> = {
      backdropDismiss: true,
    },
  ) => {
    return await newSpecPage({
      components: [MwBackdrop],
      template: () => <mw-backdrop backdropDismiss={backdropDismiss}></mw-backdrop>,
    });
  };

  it("SHOULD render MwBackdrop", async () => {
    const page = await setup();
    expect(page.root).toBeTruthy();
  });

  it("SHOULD emit a click event WHEN backdropDismiss is true", async () => {
    const page = await setup();
    const clickMock = (page.rootInstance.backdropClick.emit = jest.fn());

    page.root.click();
    expect(clickMock).toHaveBeenCalled();
  });

  it("SHOULD not emit a click event WHEN backdropDismiss is true", async () => {
    const page = await setup({
      backdropDismiss: false,
    });
    const clickMock = (page.rootInstance.backdropClick.emit = jest.fn());

    page.root.click();
    expect(clickMock).not.toHaveBeenCalled();
  });
});
