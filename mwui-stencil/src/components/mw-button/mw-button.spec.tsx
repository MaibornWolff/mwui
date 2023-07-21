import { newSpecPage } from "@stencil/core/testing";
import { h } from "@stencil/core";
import { MwButton } from "./mw-button";
import { SpecPage } from "@stencil/core/internal";
import { ButtonSizeEnum } from "./models/enums/button-size.enum";
import { ButtonVariantEnum } from "./models/enums/button-variant.enum";

describe("GIVEN MwButton", () => {
  const setup = async ({ disabled, label, variant, size, href, target }: Pick<MwButton, "disabled" | "label" | "variant" | "size" | "href" | "target"> = {}) => {
    return await newSpecPage({
      components: [MwButton],
      template: () => (
        <mw-button disabled={disabled} label={label} variant={variant} size={size} href={href} target={target}>
          <div slot="icon-start"></div>
          <div slot="icon-end"></div>
        </mw-button>
      ),
    });
  };

  const getButton = (page: SpecPage) => {
    return page.root.shadowRoot.querySelector<HTMLButtonElement>("button[type=button].mw-button");
  };

  it("SHOULD render MwButton", async () => {
    const page = await setup();
    expect(page.root).toBeDefined();
  });

  it("SHOULD display a label WHEN label is provided", async () => {
    const label = "button-label";
    const page = await setup({
      label,
    });
    expect(getButton(page).innerHTML).toContain(label);
  });

  it("SHOULD be disabled WHEN disabled is true", async () => {
    const page = await setup({
      disabled: true,
    });
    const mockClick = (page.rootInstance.clickEmitter.emit = jest.fn());
    const button = getButton(page);
    button.click();

    expect(button.getAttribute("disabled")).toBe("");
    expect(mockClick).not.toHaveBeenCalled();
  });

  it("SHOULD emit an event WHEN disabled is false", async () => {
    const page = await setup({
      disabled: false,
    });
    const mockClick = (page.rootInstance.clickEmitter.emit = jest.fn());
    const button = getButton(page);
    button.click();

    expect(button.getAttribute("disabled")).toBeNull();
    expect(mockClick).toHaveBeenCalled();
  });

  it("SHOULD not have icons slots WHEN none are passed", async () => {
    const page = await newSpecPage({
      components: [MwButton],
      template: () => <mw-button></mw-button>,
    });

    expect(getButton(page).querySelector(".mw-button-icon-start")).toBeNull();
    expect(getButton(page).querySelector(".mw-button-icon-end")).toBeNull();
  });

  describe("SHOULD have size class WHEN size value is passed", () => {
    const testCases = Object.values(ButtonSizeEnum);
    testCases.forEach(size => {
      it(`SHOULD have class ${size}`, async () => {
        const page = await setup({
          size,
          label: "some-label",
        });
        expect(getButton(page)).toHaveClass(`mw-button--${size}`);
        expect(getButton(page).querySelector(".mw-button-icon-start")).toHaveClass(`mw-button-icon-start--${size}`);
        expect(getButton(page).querySelector(".mw-button-icon-end")).toHaveClass(`mw-button-icon-end--${size}`);
      });
    });
  });

  describe("SHOULD have variant class WHEN variant value is passed", () => {
    const testCases = Object.values(ButtonVariantEnum);
    testCases.forEach(variant => {
      it(`SHOULD have class ${variant}`, async () => {
        const page = await setup({
          variant,
        });
        expect(getButton(page)).toHaveClass(`mw-button--${variant}`);
      });
    });
  });
});
