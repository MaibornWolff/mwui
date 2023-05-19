import { newSpecPage } from "@stencil/core/testing";
import { h } from "@stencil/core";
import { MwAutocomplete } from "./mw-autocomplete";

describe("Given MwAutocomplete", () => {
  const defaultProps = {
    name: "some-name",
    label: "some-label",
    required: false,
    selected: [],
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
    selected,
  }: Pick<MwAutocomplete, "name" | "label" | "placeholder" | "helperText" | "hasError" | "inline" | "required" | "disabled" | "selected"> = defaultProps) => {
    return await newSpecPage({
      components: [MwAutocomplete],
      template: () => (
        <mw-autcomplete
          name={name}
          label={label}
          placeholder={placeholder}
          helper-text={helperText}
          has-error={hasError}
          inline={inline}
          required={required}
          selected={selected}
          disabled={disabled}
        ></mw-autcomplete>
      ),
    });
  };

  it("SHOULD render MwAutocomplete", async () => {
    const page = await setup();
    expect(page.root).toBeTruthy();
  });
});
