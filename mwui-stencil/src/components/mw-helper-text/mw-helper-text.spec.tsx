import { newSpecPage } from "@stencil/core/testing";
import { h } from "@stencil/core";
import { MwHelperText } from "./mw-helper-text";

describe("Given MwHelperText", () => {
  const defaultProps = {
    helperText: "some-text",
    hasError: false,
  };

  const setup = async ({ helperText, hasError }: Pick<MwHelperText, "hasError" | "helperText"> = defaultProps) => {
    return await newSpecPage({
      components: [MwHelperText],
      template: () => <mw-helper-text helperText={helperText} hasError={hasError}></mw-helper-text>,
    });
  };

  it("SHOULD render MwHelperText", async () => {
    const page = await setup();
    expect(page.root).toBeDefined();
  });

  it("SHOULD add hasError class WHEN hasError is true", async () => {
    const page = await setup({
      ...defaultProps,
      hasError: true,
    });
    expect(page.root.shadowRoot.querySelector(`.helper-text`)).toHaveClass("has-error");
  });

  it("SHOULD display helperText WHEN passed", async () => {
    const helperText = "please don't do it like this";
    const page = await setup({
      ...defaultProps,
      helperText,
    });
    expect(page.root.shadowRoot.innerHTML).toContain(helperText);
  });
});
