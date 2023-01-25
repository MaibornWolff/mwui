import { newSpecPage } from "@stencil/core/testing"
import { h } from "@stencil/core"
import { MwMenu } from "./mw-menu"
import { MwPopover } from "../mw-popover/mw-popover"

describe('GIVEN MwMenu', () => {
  const setup = async ({ placement, open }: Pick<MwMenu, "placement" | "open"> = {
    placement: "bottom-end",
    open: false,
  }) => {
    return await newSpecPage({
      components: [MwMenu, MwPopover],
      template: () => (
        <mw-menu
          placement={placement}
          open={open}
        >
          <div slot="anchor">
            anchor-text
          </div>
          <div slot="content">
            content-text
          </div>
        </mw-menu>
      ),
    });
  }

  it("SHOULD render MwMenu", async() => {
    const page = await setup()
    expect(page.root).toBeTruthy()
  })
})
