import { newSpecPage } from "@stencil/core/testing"
import { h } from "@stencil/core"
import { MwLink } from "./mw-link"

describe('GIVEN MwLink', () => {
  const setup = async ({ href }: Pick<MwLink, "href"> = {
    href: "example.com",
  }, text="") => {
    return await newSpecPage({
      components: [MwLink],
      template: () => (
        <mw-link
          href={href}
        >
          {text}
        </mw-link>
      ),
    });
  }

  it("SHOULD render MwLink", async() => {
    const page = await setup()
    expect(page.root).toBeTruthy()
  })

  it("SHOULD set the href WHEN value is provided", async() => {
    const href = "example.com/index.html"
    const page = await setup({
      href,
    })
    expect(page.root.shadowRoot.querySelector(".mw-link").getAttribute("href")).toEqual(href)
  })

  it("SHOULD render slot content WHEN value is provided", async() => {
    const href = "example.com/index.html"
    const text = href
    const page = await setup({
      href,
    }, text)
    expect(page.root.innerHTML).toContain(href)
  })
})
