import { h } from "@stencil/core"
import { newSpecPage } from "@stencil/core/testing"
import { MwCardFooter } from "./mw-card-footer"

describe('GIVEN MwCardFooter', () => {
  const setup = async (
    text: string = "",
    {
       justifyCenter,
       justifyStart,
       justifyFlexStart,
       justifyFlexEnd,
       justifyNormal,
       justifyLeft,
       justifyRight,
       justifySpaceAround,
       justifySpaceEvenly,
       justifySpaceBetween,
  }: Pick<
      MwCardFooter,
      "justifyCenter" | "justifyStart" | "justifyFlexStart" | "justifyFlexEnd" | "justifyNormal" | "justifyLeft" | "justifyRight" | "justifySpaceAround" | "justifySpaceEvenly" | "justifySpaceBetween"
      > = {}) => {
    return await newSpecPage({
      components: [MwCardFooter],
      template: () => (<mw-card-footer
        justifyCenter={justifyCenter}
        justifyStart={justifyStart}
        justifyFlexStart={justifyFlexStart}
        justifyFlexEnd={justifyFlexEnd}
        justifyNormal={justifyNormal}
        justifyLeft={justifyLeft}
        justifyRight={justifyRight}
        justifySpaceAround={justifySpaceAround}
        justifySpaceEvenly={justifySpaceEvenly}
        justifySpaceBetween={justifySpaceBetween}
      >
        ${text}
      </mw-card-footer>),
    });
  }

  it("SHOULD render MwCardFooter", async() => {
    const page = await setup()
    expect(page.root).toBeTruthy()
  })

  it("SHOULD render slot content WHEN value is set", async() => {
    const text = "this is the footer slot text"
    const page = await setup(text)
    expect(page.root.innerHTML).toContain(text)
  })

  describe("SHOULD set justify classes", () => {
    const values = [
      {
        prop: "justifyCenter",
        name: "justify-center",
      },
      {
        prop: "justifyStart",
        name: "justify-start",
      },
      {
        prop: "justifyFlexStart",
        name: "justify-flex-start",
      },
      {
        prop: "justifyFlexEnd",
        name: "justify-flex-end",
      },
      {
        prop: "justifyNormal",
        name: "justify-normal",
      },
      {
        prop: "justifyLeft",
        name: "justify-left",
      },
      {
        prop: "justifyRight",
        name: "justify-right",
      },
      {
        prop: "justifySpaceAround",
        name: "justify-space-around",
      },
      {
        prop: "justifySpaceEvenly",
        name: "justify-space-evenly",
      },
      {
        prop: "justifySpaceBetween",
        name: "justify-space-between",
      },
    ]

    values.forEach(async value => {
      it(`SHOULD display class ${value.name} WHEN ${value.prop} is true`, async() => {
        const page = await setup("", {[value.prop]: true})
        expect(page.root.shadowRoot.querySelector(".card-footer")).toHaveClass(value.name)
      })
    })
  })
})
