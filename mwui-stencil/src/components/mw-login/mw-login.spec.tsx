import { newSpecPage } from "@stencil/core/testing";
import { MwLogin } from "./mw-login";
import { h } from "@stencil/core";
import { LoginLayoutEnum } from "./models/enums/login-layout.enum";

describe("GIVEN MwLogin", () => {
  const setup = async (
    {
      headline,
      layout,
      logo,
      forgotPasswordHref,
      signUpHref,
      backgroundImage,
    }: Pick<MwLogin, "headline" | "layout" | "backgroundImage" | "logo" | "forgotPasswordHref" | "signUpHref"> = {
      layout: LoginLayoutEnum.CENTER,
    },
  ) => {
    return await newSpecPage({
      components: [MwLogin],
      template: () => (
        <mw-login headline={headline} layout={layout} background-image={backgroundImage} logo={logo} forgotPasswordHref={forgotPasswordHref} signUpHref={signUpHref}></mw-login>
      ),
    });
  };

  it("SHOULD render MwLogin", async () => {
    const page = await setup();
    expect(page.root).toBeTruthy();
  });

  it("SHOULD toggle password type WHEN icon is clicked", async () => {
    const page = await setup();
    const inputTypeToggleButton = page.root.shadowRoot.querySelector<HTMLMwIconElement>("#password mw-icon");

    inputTypeToggleButton.click();

    expect(inputTypeToggleButton).not.toBeNull();
    expect(page.rootInstance.passwordType).toEqual("text");

    inputTypeToggleButton.click();

    expect(page.rootInstance.passwordType).toEqual("password");
  });

  describe("SHOULD display a background image", () => {
    const testCases = [
      {
        input: LoginLayoutEnum.CENTER,
        result: false,
      },
      {
        input: LoginLayoutEnum.END,
        result: true,
      },
      {
        input: LoginLayoutEnum.START,
        result: true,
      },
    ];

    testCases.forEach(testCase => {
      it(`SHOULD ${testCase.result ? "" : "not"} display background image WHEN layout is ${testCase.input}`, async () => {
        const page = await setup({
          layout: testCase.input,
          backgroundImage: "some-url",
        });
        const backgroundContainer = page.root.shadowRoot.querySelector(".mw-login-background");

        if (testCase.result) {
          expect(backgroundContainer).not.toBeNull();
        } else {
          expect(backgroundContainer).toBeNull();
        }
      });
    });
  });

  it("SHOULD display a logo WHEN logo has an URL", async () => {
    const page = await setup({
      layout: LoginLayoutEnum.CENTER,
      logo: "some-logo-url",
    });

    expect(page.root.shadowRoot.querySelector(".mw-login-container__logo")).not.toBeNull();
  });

  it("SHOULD not display a headline WHEN no headline is set", async () => {
    const page = await setup();

    expect(page.root.shadowRoot.querySelector(".mw-login-container__headline")).toBeNull();
  });

  it("SHOULD show forgotPassword WHEN value is defined", async () => {
    const page = await setup({
      layout: LoginLayoutEnum.CENTER,
      forgotPasswordHref: "some-url",
    });

    expect(page.root.shadowRoot.querySelector(".mw-login-container__user-actions mw-link")).not.toBeNull();
  });

  it("SHOULD show signUp WHEN value is defined", async () => {
    const page = await setup({
      layout: LoginLayoutEnum.CENTER,
      signUpHref: "some-url",
    });

    expect(page.root.shadowRoot.querySelector(".mw-login-container__sign-up")).not.toBeNull();
  });

  it("SHOULD emit a submit event WHEN login is done", async () => {
    const page = await setup();
    const clickMock = (page.rootInstance.submitEmitter.emit = jest.fn());
    const submitButton = page.root.shadowRoot.querySelector<HTMLMwButtonElement>("mw-button#submit");

    submitButton.click();

    expect(clickMock).toHaveBeenCalled();
  });
});
