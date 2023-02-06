import { newSpecPage } from "@stencil/core/testing";
import { h } from "@stencil/core";
import { MwHeader } from "./mw-header";
import { AriaRolesEnum } from "../../shared/models/enums/aria-roles.enum";

describe("GIVEN MwHeader", () => {
  const setup = async (
    { ariaRole }: Pick<MwHeader, "ariaRole"> = {
      ariaRole: AriaRolesEnum.NAVIGATION,
    },
  ) => {
    return await newSpecPage({
      components: [MwHeader],
      template: () => <mw-header ariaRole={ariaRole}></mw-header>,
    });
  };

  it("SHOULD render MwHeader", async () => {
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
        expect(page.root.querySelector(".mw-header")).toEqualAttribute("role", ariaRole);
      });
    });
  });
});
