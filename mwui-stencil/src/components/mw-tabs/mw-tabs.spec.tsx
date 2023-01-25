import { newSpecPage } from "@stencil/core/testing"
import { h } from "@stencil/core"
import { MwTabs } from "./mw-tabs"
import { MwTab } from "../mw-tab/mw-tab"
import { SpecPage } from "@stencil/core/internal"

describe('GIVEN MwTabs', () => {
  const setup = async ({ selected }: Pick<MwTabs, "selected"> = {
    selected: null,
  }) => {
    return await newSpecPage({
      components: [MwTabs, MwTab],
      template: () => (
        <mw-tabs
          selected={selected}
        >
          <mw-tab></mw-tab>
          <mw-tab></mw-tab>
          <mw-tab></mw-tab>
        </mw-tabs>
      ),
    })
  }

  const getTabByIndex = (page: SpecPage, index: number) => {
    return page.root.querySelector<HTMLButtonElement>(`mw-tab[index=${index}]`)
  }

  it("SHOULD render MwTabs", async() => {
    const page = await setup()
    expect(page.root).toBeTruthy()
  })

  it("SHOULD render three mw-tab in slot", async() => {
    const page = await setup()
    expect(page.root.shadowRoot.querySelectorAll("mw-tab")?.length).toBe(3)
  })

  it("SHOULD preselect second mw-tab", async() => {
    const page = await setup({
      selected: 1,
    })
    expect(getTabByIndex(page, 0).getAttribute("selected")).toBeNull()
    expect(getTabByIndex(page, 1).getAttribute("selected")).toBe("")
    expect(getTabByIndex(page, 2).getAttribute("selected")).toBeNull()
  })
})
