import { newSpecPage } from "@stencil/core/testing"
import { h } from "@stencil/core"
import { MwTextfield } from "./mw-textfield"

describe('GIVEN MwTabs', () => {
  const setup = async (
    {
      type,
      value,
      name,
      label,
      placeholder,
      helperText,
      hasError,
      inline,
      required,
      disabled,
    }: Pick<MwTextfield, "type" | "value" | "name" | "label" | "placeholder" | "helperText" | "hasError" | "inline" | "required" | "disabled"> = {
    name: "",
  }, slottedContent: string = "") => {
    return await newSpecPage({
      components: [MwTextfield],
      template: () => (
        <mw-textfield
          type={type}
          value={value}
          name={name}
          label={label}
          placeholder={placeholder}
          helperText={helperText}
          hasError={hasError}
          inline={inline}
          required={required}
          disabled={disabled}
        >
          {slottedContent}
        </mw-textfield>
      ),
    })
  }

  it("SHOULD render MwTextfield", async() => {
    const page = await setup()
    expect(page.root).toBeTruthy()
  })

  it("SHOULD set the has-error classes correctly WHEN hasError is true", async() => {
    const className = "has-error"
    const page = await setup({
      name: "",
      hasError: true,
      inline: true,
      helperText: "some-helper-text"
    })
    expect(page.root.shadowRoot.querySelector(".textfield")).toHaveClass(className)
    expect(page.root.shadowRoot.querySelector(".input")).toHaveClass(className)
    expect(page.root.shadowRoot.querySelector("input")).toHaveClass(className)
    expect(page.root.shadowRoot.querySelector(".helper-text")).toHaveClass(className)
  })

  it("SHOULD set the inline class correctly WHEN inline is true", async() => {
    const className = "inline"
    const page = await setup({
      name: "",
      inline: true,
      helperText: "some-helper-text"
    })
    expect(page.root.shadowRoot.querySelector(".textfield")).toHaveClass(className)
  })

  it("SHOULD set the disabled classes correctly WHEN disabled is true", async() => {
    const className = "disabled"
    const page = await setup({
      name: "",
      disabled: true,
    })
    expect(page.root.shadowRoot.querySelector(".textfield")).toHaveClass(className)
    expect(page.root.shadowRoot.querySelector(".input")).toHaveClass(className)
    expect(page.root.shadowRoot.querySelector("input:disabled")).toBeTruthy()
  })

  it("SHOULD set value WHEN value is passed", async() => {
    const value = "some-value"
    const page = await setup({
      name: "",
      value,
    })
    expect(page.root.shadowRoot.querySelector("input").value).toBe(value)
  })

  it("SHOULD set the name WHEN name is passed", async() => {
    const name = "some-name"
    const page = await setup({
      name,
    })
    expect(page.root.shadowRoot.querySelector("input").getAttribute("name")).toBe(name)
  })

  it("SHOULD set the type WHEN type is passed", async() => {
    const type = "password"
    const page = await setup({
      name: "",
      type,
    })
    expect(page.root.shadowRoot.querySelector("input").getAttribute("type")).toBe(type)
  })

  it("SHOULD set the placeholder WHEN placeholder is passed", async() => {
    const placeholder = "placeholder-text"
    const page = await setup({
      name: "",
      placeholder,
    })
    expect(page.root.shadowRoot.querySelector("input").getAttribute("placeholder")).toBe(placeholder)
  })

  it("SHOULD display a * WHEN required is true", async() => {
    const page = await setup({
      name: "",
      required: true,
    })
    expect(page.root.shadowRoot.querySelector(".label").innerHTML).toContain("*")
  })

  it("SHOULD set the label WHEN label is passed", async() => {
    const label = "some-label"
    const page = await setup({
      name: "",
      label,
    })
    expect(page.root.shadowRoot.querySelector(".label").innerHTML).toContain(label)
    expect(page.root.shadowRoot.querySelector(".label").innerHTML).not.toContain("*")
  })

  it("SHOULD set class icon-start WHEN hasIconStartSlot is true", async() => {
    const page = await newSpecPage({
      components: [MwTextfield],
      template: () => (
        <mw-textfield
          name="name"
        >
          <span slot="icon-start">asdf</span>
        </mw-textfield>
      ),
    })

    expect(page.root.shadowRoot.querySelector(".icon-start")).toBeTruthy()
    expect(page.root.shadowRoot.querySelector(".icon-end")).toBeNull()
  })

  it("SHOULD set class icon-start WHEN hasIconEndSlot is true", async() => {
    const page = await newSpecPage({
      components: [MwTextfield],
      template: () => (
        <mw-textfield
          name="name"
        >
          <span slot="icon-end">asdf</span>
        </mw-textfield>
      ),
    })

    expect(page.root.shadowRoot.querySelector(".icon-end")).toBeTruthy()
    expect(page.root.shadowRoot.querySelector(".icon-start")).toBeNull()
  })
})