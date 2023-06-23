import { newSpecPage } from "@stencil/core/testing";
import { h } from "@stencil/core";
import { MwCardTitle } from "./mw-card-title";

describe("GIVEN MwCardTitle", () => {
  const setup = async (
    { text, subtitle, metadata }: Partial<Pick<MwCardTitle, "text" | "subtitle" | "metadata">> = {
      text: "",
      subtitle: "",
      metadata: "",
    },
  ) => {
    return await newSpecPage({
      components: [MwCardTitle],
      template: () => <mw-card-title text={text} subtitle={subtitle} metadata={metadata}></mw-card-title>,
    });
  };

  it("SHOULD render MwCardTitle", async () => {
    const page = await setup();
    expect(page.root).toBeTruthy();
  });

  it("SHOULD render title WHEN value is given", async () => {
    const text = "some-title";
    const page = await setup({
      text,
    });
    expect(page.root.shadowRoot.querySelector(".title").innerHTML).toEqual(text);
  });

  it("SHOULD render subtitle WHEN value is given", async () => {
    const subtitle = "some-subtitle";
    const page = await setup({
      subtitle,
    });
    expect(page.root.shadowRoot.querySelector(".subtitle").innerHTML).toEqual(subtitle);
  });

  it("SHOULD render metadata WHEN value is given", async () => {
    const metadata = "just-metadata";
    const page = await setup({
      metadata,
    });
    expect(page.root.shadowRoot.querySelector(".metadata").innerHTML).toEqual(metadata);
  });
});
