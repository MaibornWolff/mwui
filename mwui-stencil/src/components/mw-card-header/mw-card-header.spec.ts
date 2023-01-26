import { newSpecPage } from "@stencil/core/testing"
import { MwCardHeader } from "./mw-card-header"

describe('GIVEN MwCardHeader', () => {
  const setup = async ({ header, subheader }: Pick<MwCardHeader, "header" | "subheader"> = {
    header: "header-text",
    subheader: "subheader-text",
  }) => {
    return await newSpecPage({
      components: [MwCardHeader],
      html: `
        <mw-card-header
            header="${header}"
            subheader="${subheader}"
        ></mw-card-header>`,
    });
  }

  it("SHOULD render MwCardHeader", async() => {
    const page = await setup()
    expect(page.root).toBeTruthy()
  })

  it("SHOULD render header WHEN values provided", async() => {
    const page = await setup()
    expect(page.root.shadowRoot.querySelector(".header").innerHTML).toContain("header-text")
  })

  it("SHOULD render subheader WHEN subheader value is provided", async() => {
    const page = await setup()
    expect(page.root.shadowRoot.querySelector(".subheader").innerHTML).toContain("subheader-text")
  })
})
