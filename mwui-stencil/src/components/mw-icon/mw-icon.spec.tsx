import { newSpecPage } from "@stencil/core/testing";
import { h } from "@stencil/core";
import { MwIcon } from "./mw-icon";
import { SizeEnum } from "../../shared/models/enums/size.enum";
import { SpecPage } from "@stencil/core/internal";

describe("GIVEN MwIcon", () => {
  const defaultComponentProperties = {
    icon: "",
    size: SizeEnum.SMALL,
    weight: 400,
  };
  const setup = async (
    { icon, size, fill, color, weight }: Pick<MwIcon, "icon" | "size" | "fill" | "color" | "weight"> = {
      ...defaultComponentProperties,
    },
  ) => {
    return await newSpecPage({
      components: [MwIcon],
      template: () => <mw-icon icon={icon} size={size} fill={fill} color={color} weight={weight}></mw-icon>,
    });
  };

  const getIconContainer = (page: SpecPage) => {
    return page.root.shadowRoot.querySelector(".material-symbols-outlined");
  };

  it("SHOULD render MwIcon", async () => {
    const page = await setup();
    expect(page.root).toBeTruthy();
  });

  it("SHOULD have the color value set WHEN color is provided", async () => {
    const color = "red";
    const page = await setup({
      ...defaultComponentProperties,
      color,
    });

    expect(getIconContainer(page).getAttribute("style")).toContain(`color: ${color}`);
  });

  it("SHOULD have the color value set WHEN color is provided", async () => {
    const weight = 100;
    const page = await setup({
      ...defaultComponentProperties,
      weight,
    });

    expect(getIconContainer(page).getAttribute("style")).toContain(`'wght' ${weight}`);
  });

  describe("SHOULD correct FILL value WHEN fill value is passed", () => {
    const testCases = [
      {
        input: true,
        result: 1,
      },
      {
        input: false,
        result: 0,
      },
    ];
    testCases.forEach(testCase => {
      it(`SHOULD have FILL value ${testCase.result}`, async () => {
        const page = await setup({
          ...defaultComponentProperties,
          fill: testCase.input,
        });
        expect(getIconContainer(page).getAttribute("style")).toContain(`'FILL' ${testCase.result}`);
      });
    });
  });

  describe("SHOULD have size class WHEN size value is passed", () => {
    const testCases = Object.values(SizeEnum);
    testCases.forEach(size => {
      it(`SHOULD have class ${size}`, async () => {
        const page = await setup({
          ...defaultComponentProperties,
          size,
        });
        expect(getIconContainer(page)).toHaveClass(size);
      });
    });
  });
});
