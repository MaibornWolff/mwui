import { newSpecPage } from "@stencil/core/testing";
import { h } from "@stencil/core";
import { MwAppBar } from "./mw-app-bar";
import { AriaRolesEnum } from "../../shared/models/enums/aria-roles.enum";

describe("GIVEN MwAppBar", () => {
  const setup = async (
    { ariaRole }: Pick<MwAppBar, "ariaRole"> = {
      ariaRole: AriaRolesEnum.NAVIGATION,
    },
  ) => {
    return await newSpecPage({
      components: [MwAppBar],
      template: () => <mw-app-bar ariaRole={ariaRole}></mw-app-bar>,
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
        expect(page.root.shadowRoot.querySelector(".mw-app-bar")).toEqualAttribute("role", ariaRole);
      });
    });
  });
});
