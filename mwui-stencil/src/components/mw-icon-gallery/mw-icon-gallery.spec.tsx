import { MwIcon } from "../mw-icon/mw-icon"
import { newSpecPage } from "@stencil/core/testing"
import { h } from "@stencil/core"
import { MwIconGallery } from "./mw-icon-gallery"
import { SpecPage } from "@stencil/core/internal"
import { icons as iconNames } from '../../../icon-names';
import { MwSwitch } from "../mw-switch/mw-switch"
import { MwTextfield } from "../mw-textfield/mw-textfield"

describe('GIVEN MwIconGallery', () => {
  let page: SpecPage;
  const icons = iconNames.slice(0, 10)

  const setup = async () => {
    return await newSpecPage({
      components: [MwIconGallery, MwIcon, MwSwitch, MwTextfield],
      template: () => (
        <mw-icon-gallery
          icons={icons}
        ></mw-icon-gallery>
      ),
    });
  }

  beforeEach(async() => {
    page = await setup()
  })

  const getGalleryItemContainerByName = (name: string) => {
    return page.root.shadowRoot.querySelector<HTMLButtonElement>(`.gallery-item-container.${name}`)
  }

  it("SHOULD render MwIconGallery", async () => {
    expect(page.root).toBeTruthy()
  })

  it("SHOULD render all icons", async() => {
    expect(page.root.shadowRoot.querySelectorAll(".gallery-item-container")?.length).toBe(icons.length)
  })

  it("SHOULD copy icon name WHEN icon is clicked", async() => {
    const mockIconCopy = page.rootInstance.copyIconName = jest.fn()

    getGalleryItemContainerByName(icons[0]).click()

    expect(mockIconCopy).toHaveBeenCalled()
  })
})
