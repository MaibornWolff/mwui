import { newSpecPage } from "@stencil/core/testing"
import { h } from "@stencil/core"
import { MwMenuList } from "./mw-menu-list"

describe('GIVEN MwDivider', () => {
  const setup = async (content: string = "") => {
    return await newSpecPage({
      components: [MwMenuList],
      template: () => (
        <mw-menu-list>
          { content }
        </mw-menu-list>
      ),
    });
  }

  it("SHOULD render MwMenuList", async() => {
    const page = await setup()
    expect(page.root).toBeTruthy()
  })

  it("SHOULD render content WHEN value is passed", async() => {
    const content = `<div class="slot-content">lorem ipsum</div>`
    const page = await setup(content)
    expect(page.root.innerHTML).toContain('lorem ipsum')
  })
})
