import { newSpecPage } from "@stencil/core/testing"
import { h } from "@stencil/core"
import { MwChip } from "./mw-chip"
import { SpecPage } from "@stencil/core/internal"

describe('GIVEN MwChip', () => {
  const setup = async ({ icon, disabled, showClose, selected }: Pick<MwChip, "icon" | "disabled" | "showClose" | "selected"> = {
    selected: false,
  }, text: string = "") => {
    return await newSpecPage({
      components: [MwChip],
      template: () => (
        <mw-chip
          icon={icon}
          disabled={disabled}
          showClose={showClose}
          selected={selected}
        >
          {text}
        </mw-chip>
      ),
    });
  }

  const clickCloseButton = (page: SpecPage) => {
    page.root.shadowRoot
      .querySelector(".chip")
      .querySelector<HTMLButtonElement>("span")
      .click()
  }

  const toggleChip = (page: SpecPage) => {
    page.root.shadowRoot
      .querySelector<HTMLButtonElement>(".chip")
      .click()
  }

  it("SHOULD render MwChip", async () => {
    const page = await setup()
    expect(page.root).toBeTruthy()
  })

  it("SHOULD set selected WHEN value is provided", async () => {
    const page = await setup({
      selected: true,
    })
    expect(page.root.shadowRoot.querySelector(".chip")).toHaveClass("selected")
    expect(page.root.shadowRoot.querySelector(".chip")).not.toHaveClass("disabled")
  })

  it("SHOULD render an icon WHEN icon value is provided", async () => {
    const icon = "some-icon"
    const page = await setup({
      icon,
      selected: false,
    })

    expect(page.root.shadowRoot.querySelector(`mw-icon[icon=${icon}]`)).toBeTruthy()
  })

  it("SHOULD not render an icon WHEN no value is passed", async () => {
    const page = await setup({
      selected: false,
    })

    expect(page.root.shadowRoot.querySelector("mw-icon")).toBeNull()
  })

  it("SHOULD render close icon WHEN showClose is true", async () => {
    const page = await setup({
      selected: false,
      showClose: true,
    })

    expect(page.root.shadowRoot.querySelector("mw-icon[icon='close']")).toBeTruthy()
  })

  it("SHOULD emit an event on showClose click WHEN chip is not disabled", async () => {
    const page = await setup({
      selected: false,
      showClose: true,
      disabled: false,
    })

    const clickMock = page.rootInstance.emitter.emit = jest.fn()
    clickCloseButton(page)

    expect(clickMock).toHaveBeenCalled()
  })

  it("SHOULD not emit an event on showClose click WHEN chip is disabled", async () => {
    const page = await setup({
      selected: false,
      showClose: true,
      disabled: true,
    })

    const clickMock = page.rootInstance.emitter.emit = jest.fn()
    clickCloseButton(page)

    expect(clickMock).not.toHaveBeenCalled()
  })

  it("SHOULD be possible to toggle the chip", async () => {
    const page = await setup({
      selected: false,
    })

    const clickMock = page.rootInstance.emitter.emit = jest.fn()

    toggleChip(page)
    await page.waitForChanges()

    expect(clickMock).toHaveBeenCalled()
    expect(page.root.shadowRoot.querySelector(".chip")).toHaveClass("selected")

    toggleChip(page)
    await page.waitForChanges()

    expect(clickMock).toHaveBeenCalled()
    expect(page.root.shadowRoot.querySelector(".chip")).not.toHaveClass("selected")
  })

  it("SHOULD display slotted content WHEN value is set", async() => {
    const text = "text-in-slotted-content"
    const page = await setup({
      selected: false,
    }, text)
    expect(page.root.innerHTML).toContain(text)
  })
})
