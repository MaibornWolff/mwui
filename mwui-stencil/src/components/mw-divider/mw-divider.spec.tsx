import { newSpecPage } from "@stencil/core/testing"
import { h } from "@stencil/core"
import { MwDivider } from "./mw-divider"

describe('GIVEN MwDivider', () => {
  const setup = async ({ inset }: Pick<MwDivider, "inset"> = {
    inset: false,
  }) => {
    return await newSpecPage({
      components: [MwDivider],
      template: () => (
        <mw-divider
          inset={inset}
        ></mw-divider>
      ),
    });
  }

  it("SHOULD render MwDivider", async() => {
    const page = await setup()
    expect(page.root).toBeTruthy()
  })

  it("SHOULD have class inset WHEN inset is true", async() => {
    const page = await setup({
      inset: true,
    })
    expect(page.root.shadowRoot.querySelector(".mw-divider")).toHaveClass("inset")
  })

  it("SHOULD not have class inset WHEN inset is false", async() => {
    const page = await setup({
      inset: false,
    })
    expect(page.root.shadowRoot.querySelector(".mw-divider")).not.toHaveClass("inset")
  })
})
