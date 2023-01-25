import { newSpecPage } from "@stencil/core/testing"
import { h } from "@stencil/core"
import { MwTab } from "./mw-tab"

describe('GIVEN MwTab', () => {
  const setup = async ({ disabled, label, icon, selected }: Pick<MwTab, "selected" | "label" | "icon" | "disabled"> = {}) => {
    return await newSpecPage({
      components: [MwTab],
      template: () => (
        <mw-tab
          disabled={disabled}
          label={label}
          icon={icon}
          selected={selected}
        ></mw-tab>
      ),
    })
  }

  it("SHOULD render MwTab", async() => {
    const page = await setup()
    expect(page.root).toBeTruthy()
    expect(page.root.shadowRoot.querySelector(".mw-tab")).not.toHaveClass("label-with-icon")
  })

  it("SHOULD have class label-with-icon WHEN icon & label are set", async() => {
    const label = "some-label"
    const icon = "some-icon"
    const page = await setup({
      label,
      icon,
    })
    expect(page.root.shadowRoot.querySelector(".mw-tab")).toHaveClass("label-with-icon")
  })

  it("SHOULD have a label WHEN label is set", async() => {
    const label = "some-label"
    const page = await setup({
      label,
    })
    expect(page.root.shadowRoot.querySelector(".mw-tab").innerHTML).toBe(label)
  })

  it("SHOULD render an icon WHEN icon is set", async() => {
    const icon = "some-icon"
    const page = await setup({
      icon,
    })
    expect(page.root.shadowRoot.querySelector(`mw-icon[icon=${icon}]`)).toBeTruthy()
  })

  it("SHOULD not render an icon WHEN no icon is set", async() => {
    const page = await setup()
    expect(page.root.shadowRoot.querySelector(`mw-icon`)).toBeNull()
  })

  it("SHOULD disable the button WHEN disabled is set", async() => {
    const page = await setup({
      disabled: true,
    })
    expect(page.root.shadowRoot.querySelector(`.mw-tab`).getAttribute("disabled")).toBe("")
  })

  it("SHOULD have class selected WHEN selected is true", async() => {
    const page = await setup({
      selected: true,
    })
    expect(page.root.shadowRoot.querySelector(`.mw-tab`)).toHaveClass("selected")
  })
})
