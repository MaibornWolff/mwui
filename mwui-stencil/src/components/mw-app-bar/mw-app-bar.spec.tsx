import { newSpecPage } from "@stencil/core/testing";
import { h } from "@stencil/core";
import { AppBarPosition, MwAppBar } from "./mw-app-bar";
import { AriaRolesEnum } from "../../shared/models/enums/aria-roles.enum";

describe("GIVEN MwAppBar", () => {
  const setup = async (
    { ariaRole, position }: Pick<MwAppBar, "ariaRole" | "position"> = {
      ariaRole: AriaRolesEnum.NAVIGATION,
      position: "relative",
    },
  ) => {
    return await newSpecPage({
      components: [MwAppBar],
      template: () => <mw-app-bar ariaRole={ariaRole} position={position}></mw-app-bar>,
    });
  };

  it("SHOULD render MwAppBar", async () => {
    const page = await setup();
    expect(page.root).toBeTruthy();
  });

  describe("SHOULD have role defined WHEN role is given", () => {
    const testCases = [AriaRolesEnum.TOOLBAR, AriaRolesEnum.NAVIGATION];
    testCases.forEach(async ariaRole => {
      it(`SHOULD have role ${ariaRole}`, async () => {
        const page = await setup({
          ariaRole,
        });
        expect(page.root.querySelector(".mw-app-bar")).toEqualAttribute("role", ariaRole);
      });
    });
  });

  describe("SHOULD have position defined WHEN position is given", () => {
    const testCases: AppBarPosition[] = ["relative", "absolute", "sticky", "fixed"];
    testCases.forEach(async position => {
      it(`SHOULD have position ${position}`, async () => {
        const page = await setup({
          position,
        });
        expect(page.root.querySelector(".mw-app-bar")).toEqualAttribute("position", position);
      });
    });
  });
});
