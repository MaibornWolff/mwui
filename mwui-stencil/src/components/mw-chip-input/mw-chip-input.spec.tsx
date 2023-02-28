import { newSpecPage } from "@stencil/core/testing";
import { h } from "@stencil/core";
import { MwChipInput } from "./mw-chip-input";

describe("Given MwChipInput", () => {
  const defaultProps = {
    name: "some-name",
    label: "some-label",
    required: false,
  };
  const setup = async ({
    name,
    label,
    placeholder,
    helperText,
    hasError,
    inline,
    required,
    disabled,
  }: Pick<MwChipInput, "name" | "label" | "placeholder" | "helperText" | "hasError" | "inline" | "required" | "disabled"> = defaultProps) => {
    return await newSpecPage({
      components: [MwChipInput],
      template: () => (
        <mw-chip-input
          name={name}
          label={label}
          placeholder={placeholder}
          helper-text={helperText}
          has-error={hasError}
          inline={inline}
          required={required}
          disabled={disabled}
        ></mw-chip-input>
      ),
    });
  };

  it("SHOULD render MwChipInput", async () => {
    const page = await setup();

    expect(page.root).toBeTruthy();
  });
});
