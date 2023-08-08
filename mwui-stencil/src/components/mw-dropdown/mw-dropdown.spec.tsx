import { newSpecPage } from "@stencil/core/testing";
import { h } from "@stencil/core";
import { MwDropdown } from "./mw-dropdown";

describe("GIVEN MwDropdown", () => {
  const setup = async (
    {
      value,
      name,
      label,
      placeholder,
      helperText,
      hasError,
      layout,
      required,
      disabled,
    }: Pick<MwDropdown, "value" | "name" | "label" | "placeholder" | "helperText" | "hasError" | "layout" | "required" | "disabled"> = {
      name: "",
    },
    slottedContent = "",
  ) => {
    return await newSpecPage({
      components: [MwDropdown],
      template: () => (
        <mw-dropdown
          value={value}
          name={name}
          label={label}
          placeholder={placeholder}
          helperText={helperText}
          hasError={hasError}
          layout={layout}
          required={required}
          disabled={disabled}
        >
          {slottedContent}
        </mw-dropdown>
      ),
    });
  };

  it("SHOULD render MwDropdown", async () => {
    const page = await setup();
    expect(page.root).toBeTruthy();
  });
});
