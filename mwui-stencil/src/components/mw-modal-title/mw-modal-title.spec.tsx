import { newSpecPage } from "@stencil/core/testing";
import { h } from "@stencil/core";
import { MwModalTitle } from "./mw-modal-title";
import { MwIcon } from "../mw-icon/mw-icon";

describe("GIVEN MwModalTitle", () => {
  const setup = async (
    { headline, description }: Pick<MwModalTitle, "headline" | "description"> = {
      headline: "some headline",
    },
  ) => {
    return await newSpecPage({
      components: [MwModalTitle],
      template: () => <mw-modal-title headline={headline} description={description}></mw-modal-title>,
    });
  };

  it("SHOULD render MwModalTitle", async () => {
    const page = await setup();
    expect(page.root).toBeTruthy();
  });

  it("SHOULD display the correct headline", async () => {
    const headline = "This title should be displayed";
    const page = await setup({
      headline,
    });

    expect(page.root.shadowRoot.querySelector(".mw-modal-title__headline").innerHTML).toContain(headline);
    expect(page.root.shadowRoot.querySelector(".mw-modal-title__description")).toBeNull();
  });

  it("SHOULD display the description WHEN a description is given", async () => {
    const description = "Some description text";
    const page = await setup({
      headline: "",
      description,
    });

    expect(page.root.shadowRoot.querySelector(".mw-modal-title__description")).not.toBeNull();
    expect(page.root.shadowRoot.querySelector(".mw-modal-title__description").innerHTML).toContain(description);
  });

  it("SHOULD display the icon slot WHEN provided", async () => {
    const headline = "";
    const description = "Some description text";
    const page = await newSpecPage({
      components: [MwModalTitle, MwIcon],
      template: () => (
        <mw-modal-title headline={headline} description={description}>
          <mw-icon icon="close" slot="icon"></mw-icon>
        </mw-modal-title>
      ),
    });

    expect(page.root.querySelector("mw-icon[slot=icon]")).not.toBeNull();
  });
});
