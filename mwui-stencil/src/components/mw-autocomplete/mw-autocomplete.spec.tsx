import { SpecPage, newSpecPage } from "@stencil/core/testing";
import { h } from "@stencil/core";
import { MwAutocomplete } from "./mw-autocomplete";

describe("Given MwAutocomplete", () => {
  const defaultProps = {
    name: "some-name",
    label: "some-label",
    required: false,
    selection: [],
  };
  const setup = async ({
    name,
    label,
    placeholder,
    helperText,
    hasError,
    layout,
    required,
    disabled,
    selection,
  }: Pick<MwAutocomplete, "name" | "label" | "placeholder" | "helperText" | "hasError" | "layout" | "required" | "disabled" | "selection"> = defaultProps): Promise<SpecPage> => {
    return await newSpecPage({
      components: [MwAutocomplete],
      template: () => (
        <mw-autcomplete
          name={name}
          label={label}
          placeholder={placeholder}
          helper-text={helperText}
          has-error={hasError}
          layout={layout}
          required={required}
          selection={selection}
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
