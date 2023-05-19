import { newSpecPage } from "@stencil/core/testing";
import { h } from "@stencil/core";
import { MwChipInput } from "./mw-chip-input";

describe("Given MwChipInput", () => {
  const defaultProps = {
    name: "some-name",
    label: "some-label",
    required: false,
    selectedChips: [],
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
    selectedChips,
  }: Pick<MwChipInput, "name" | "label" | "placeholder" | "helperText" | "hasError" | "inline" | "required" | "disabled" | "selectedChips"> = defaultProps) => {
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
          selectedChips={selectedChips}
          disabled={disabled}
        ></mw-chip-input>
      ),
    });
  };

  it("SHOULD render MwChipInput", async () => {
    const page = await setup();

    expect(page.root).toBeTruthy();
  });

  it("SHOULD display selectedChips", async () => {
    const selectedChips = ["chip-1", "chip-2"];
    const page = await setup({
      ...defaultProps,
      selectedChips,
    });

    expect(page.root.querySelectorAll("mw-chip")?.length).toEqual(selectedChips.length);

    selectedChips.forEach(chip => {
      expect(page.root.querySelector(`mw-chip[value=${chip}]`)?.innerHTML).toContain(chip);
    });
  });

  it("SHOULD display selectedChips as disabled WHEN disabled is true", async () => {
    const selectedChips = ["chip-1", "chip-2"];
    const page = await setup({
      ...defaultProps,
      selectedChips,
      disabled: true,
    });

    selectedChips.forEach(chip => {
      expect(page.root.querySelector(`mw-chip[value=${chip}]`)).toHaveAttribute("disabled");
    });
  });

  it("SHOULD create a chip WHEN text is put in and ENTER is pressed", async () => {
    const page = await setup();
    const input = page.root.querySelector<HTMLInputElement>(`input`);
    const value = "foobar";
    page.rootInstance.focused = true;
    input.value = value;

    input.dispatchEvent(
      new (window.window as any).KeyboardEvent("keydown", {
        keyCode: 13,
        bubbles: true,
        cancelable: true,
        key: "Enter",
      }),
    );

    await page.waitForChanges();

    expect(page.root.querySelector(`mw-chip[value=${value}]`)?.innerHTML).toContain(value);
  });

  it("SHOULD delete a chip WHEN backspace is pressed", async () => {
    const selectedChips = ["chip-1", "chip-2"];
    const page = await setup({
      ...defaultProps,
      selectedChips,
    });

    expect(page.root.querySelectorAll("mw-chip")?.length).toEqual(selectedChips.length);

    const input = page.root.querySelector<HTMLInputElement>(`input`);
    page.rootInstance.focused = true;

    input.dispatchEvent(
      new (window.window as any).KeyboardEvent("keydown", {
        keyCode: 8,
        bubbles: true,
        cancelable: true,
        key: "Backspace",
      }),
    );

    await page.waitForChanges();

    expect(page.root.querySelectorAll("mw-chip")?.length).toEqual(selectedChips.length - 1);
  });
});
