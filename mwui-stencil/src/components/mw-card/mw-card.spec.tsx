import { h } from "@stencil/core";
import { newSpecPage } from "@stencil/core/testing";
import { MwCard } from "./mw-card";

describe("GIVEN MwCard", () => {
  const setup = async (
    text = "",
    { outlined, elevated }: Pick<MwCard, "outlined" | "elevated"> = {
      outlined: false,
      elevated: false,
    },
  ) => {
    return await newSpecPage({
      components: [MwCard],
      template: () => (
        <mw-card outlined={outlined} elevated={elevated}>
          ${text}
        </mw-card>
      ),
    });
  };

  it("SHOULD render MwCard", async () => {
    const page = await setup();
    expect(page.root).toBeTruthy();
  });

  describe("SHOULD add classes based on properties", () => {
    const testCases = [
      {
        input: {
          outlined: true,
          elevated: false,
        },
        message: "SHOULD have class elevated WHEN elevated is true",
        result: ["outlined"],
      },
      {
        input: {
          outlined: false,
          elevated: true,
        },
        message: "SHOULD have class outlined WHEN elevated is true",
        result: ["elevated"],
      },
      {
        input: {
          outlined: true,
          elevated: true,
        },
        message: "SHOULD have classes elevated & outlined WHEN both are true",
        result: ["elevated", "outlined"],
      },
    ];

    testCases.forEach(testCase => {
      it(testCase.message, async () => {
        const page = await setup("", testCase.input);
        expect(page.root.shadowRoot.querySelector(".card")).toHaveClasses(testCase.result);
      });
    });
  });

  it("SHOULD emit click WHEN clicked", async () => {
    const page = await setup();
    const clickMock = (page.rootInstance.clickEmitter.emit = jest.fn());

    page.root.shadowRoot.querySelector<HTMLMwCardElement>(".card").click();

    expect(clickMock).toHaveBeenCalled();
  });

  it("SHOULD render content in slot WHEN content is provided", async () => {
    const text = "this text should be in slot";
    const page = await setup(text);
    const component = page.root;
    expect(component.innerHTML).toContain(text);
  });
});
