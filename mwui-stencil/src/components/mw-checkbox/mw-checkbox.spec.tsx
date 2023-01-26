import { newSpecPage } from "@stencil/core/testing"
import { h } from "@stencil/core"
import { MwCheckbox } from "./mw-checkbox"
import { SpecPage } from "@stencil/core/internal"

describe('GIVEN MwCheckbox', () => {
  const setup = async ({ value, name, checked, disabled, label}: Pick<MwCheckbox, "value" | "name" | "checked" | "disabled" | "label"> = {}) => {
    return await newSpecPage({
      components: [MwCheckbox],
      template: () => (
        <mw-checkbox
          value={value}
          name={name}
          checked={checked}
          disabled={disabled}
          label={label}
        ></mw-checkbox>
      ),
    });
  }

  const toggleCheckbox = (page: SpecPage) => {
    page.root.shadowRoot
      .querySelector<HTMLButtonElement>(".mw-checkbox-container")
      .click()
  }

  it("SHOULD render MwCheckbox", async()=> {
    const page = await setup()
    expect(page.root).toBeTruthy()
  })

  it("SHOULD render label WHEN value is given", async()=> {
    const label = "checkbox-label"
    const page = await setup({
      label,
    })
    expect(page.root.shadowRoot.querySelector(".mw-checkbox-label").innerHTML).toEqual(label)
  })

  it("SHOULD set value WHEN value is given", async()=> {
    const value = "checkbox-value"
    const page = await setup({
      value,
    })
    expect(page.root.shadowRoot.querySelector("input").getAttribute("value")).toEqual(value)
  })

  it("SHOULD set value WHEN value is given", async()=> {
    const name = "checkbox-name"
    const page = await setup({
      name,
    })
    expect(page.root.shadowRoot.querySelector("input").getAttribute("name")).toEqual(name)
  })

  it("SHOULD not emit an event WHEN disabled is true", async ()=> {
    const page = await setup({
      disabled: true,
    })

    const clickMock = page.rootInstance.emitter.emit = jest.fn()
    toggleCheckbox(page)

    expect(clickMock).not.toHaveBeenCalled();
    expect(page.root.shadowRoot.querySelector(".mw-checkbox")).toHaveClass("disabled")
  })

  it("SHOULD emit an event WHEN disabled is false", async ()=> {
    const page = await setup({
      disabled: false,
    })

    const clickMock = page.rootInstance.emitter.emit = jest.fn()
    toggleCheckbox(page)

    expect(clickMock).toHaveBeenCalled();
    expect(page.root.shadowRoot.querySelector(".mw-checkbox")).toHaveClass("enabled")
  })

  it("SHOULD set checked WHEN checkBox is toggled", async ()=> {
    const page = await setup({
      disabled: false,
      checked: false,
    })

    // toggle checkbox to selected state
    toggleCheckbox(page)

    await page.waitForChanges()

    expect(page.root.shadowRoot.querySelector(".mw-checkbox")).toHaveClass("selected")
    expect(page.root.shadowRoot.querySelector(".mw-checkmark")).toHaveClass("selected")
    expect(page.root.shadowRoot.querySelector("input").getAttribute("checked")).toEqual("")

    // toggle checkbox to deselected state
    toggleCheckbox(page)

    await page.waitForChanges()
    expect(page.root.shadowRoot.querySelector(".mw-checkbox")).toHaveClass("unselected")
    expect(page.root.shadowRoot.querySelector(".mw-checkmark")).toHaveClass("unselected")
    expect(page.root.shadowRoot.querySelector("input").getAttribute("checked")).toBeNull()

  })
})
