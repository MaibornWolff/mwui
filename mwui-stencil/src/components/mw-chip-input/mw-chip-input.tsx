import { Component, Element, Event, EventEmitter, h, Listen, Prop, State, Watch } from "@stencil/core";

@Component({
  tag: "mw-chip-input",
  styleUrl: "mw-chip-input.scss",
  shadow: true,
})
export class MwChipInput {
  @Element() hostElement: HTMLMwChipInputElement;

  /**
   * MwAutocomplete emits an event when its value changes
   */
  @Event({ bubbles: true, composed: false }) valueChanged: EventEmitter<string>;
  /**
   * HTML Input type
   */
  @Prop() type?: string = "text";
  /**
   * input field value
   */
  @Prop({ reflect: true, mutable: true }) value?: string | number;
  /**
   * input field name
   */
  @Prop() name: string;
  /**
   * Label to be displayed
   */
  @Prop({ reflect: true }) label?: string;
  /**
   * Placeholder to be displayed
   */
  @Prop({ reflect: true, mutable: true }) placeholder?: string;
  /**
   * HelperText to be displayed. Can be used as hint or error text when combined with `has-error`
   */
  @Prop({ reflect: true }) helperText?: string;
  /**
   * Use to display input and helper-text in error state
   */
  @Prop() hasError?: boolean = false;
  /**
   * Text which is displayed when no dropdown options match the user input
   */
  @Prop() noMatchText?: string = "No matching options";
  /**
   * Display label and input horizontally
   */
  @Prop() inline?: boolean = false;
  /**
   * Mark input as required
   */
  @Prop() required?: boolean = false;
  /**
   * Visually and functionally disabled input
   */
  @Prop() disabled?: boolean = false;
  /**
   * Whether user can't type in input field
   */
  @Prop() readOnly?: boolean = false;
  /**
   * Allows users to enter multiple values into autocomplete
   */
  @Prop() multiple?: boolean = false;
  /**
   * Amount of allowed `multipleValues`
   */
  @Prop() multipleMaximum?: number;
  /**
   * Text which is displayed when maximum amount of options is reached
   */
  @Prop() multipleMaximumText?: string = "Maximum amount of selected options reached";
  /**
   * Values, when `multiple` is true
   */
  @Prop({ reflect: true, mutable: true }) multipleValues?: Array<string | number> = [];
  /**
   * Shows how many options the user has selected as well as the allowed maximum. Only works, if `multipleMaximum` prop is defined.
   */
  @Prop() optionCounter?: boolean = false;

  @State() focused = false;
  @State() isDropdownOpen = false;
  @State() initialPlaceholder: string;
  @State() hasMultipleValues: boolean;

  @Listen("mwChipClose")
  closeEmitterHandler(event): void {
    const multiValuesCopy = this.multipleValues;
    const indexToRemove = multiValuesCopy.indexOf(event.detail);
    multiValuesCopy.splice(indexToRemove, 1);
    // this.hostElement.querySelectorAll(`mw-menu-item[value="${event.detail}"]`).forEach(item => item.setAttribute("disabled", "false"));
    this.multipleValues = [...multiValuesCopy];
  }

  @Listen("keydown", { passive: true })
  handleEnterPress(event: KeyboardEvent): void {
    if (this.multiple && this.focused && event.key === "Enter") {
      this.addMultiValue(this.inputElement.value);
      this.isDropdownOpen = false;
    }
    if (this.multiple && this.focused && event.key === "Backspace") {
      if (this.inputElement.value === "" && this.hasMultipleValues) {
        const multiValuesCopy = this.multipleValues;
        const indexToRemove = this.multipleValues.length - 1;
        const valueToRemove = this.multipleValues[indexToRemove];
        console.log(valueToRemove);
        multiValuesCopy.splice(indexToRemove, 1);
        // this.hostElement.querySelectorAll(`mw-menu-item[value="${valueToRemove}"]`).forEach(item => item.setAttribute("disabled", "false"));
        this.multipleValues = [...multiValuesCopy];
      }
    }
  }

  @Watch("multipleValues")
  onMultipleValueChange(): void {
    if (this.multipleValues.length > 0) {
      this.placeholder = "";
      this.hasMultipleValues = true;
    } else {
      this.placeholder = this.initialPlaceholder;
      this.hasMultipleValues = false;
    }
  }

  private inputElement: HTMLInputElement;
  private hasIconStartSlot: boolean;
  private hasIconEndSlot: boolean;
  private hasDropDownMenu: boolean;

  componentWillLoad(): void {
    this.initialPlaceholder = this.placeholder;
    this.onMultipleValueChange();
    this.hasIconStartSlot = !!this.hostElement.querySelector("[slot='icon-start']");
    this.hasIconEndSlot = !!this.hostElement.querySelector("[slot='icon-end']");
    this.hasDropDownMenu = !!this.hostElement.querySelector("[slot='dropdown-menu']");
  }

  private onValueChange = (event: Event): void => {
    if (!this.multiple) {
      this.value = (event.target as HTMLInputElement).value;
      this.valueChanged.emit(this.value);
    }
  };

  private onFocus = (): void => {
    if (this.inputElement) this.inputElement.focus();
    this.focused = true;
  };

  private onBlur = (): void => {
    this.focused = false;
  };

  private addMultiValue = (value: string): void => {
    if (this.multiple && (!this.multipleMaximum || this.multipleValues.length < this.multipleMaximum)) {
      if (value.trim().length > 0 && !this.multipleValues.includes(value)) {
        this.multipleValues = [...this.multipleValues, value];
        this.hostElement.querySelectorAll(`mw-menu-item[value="${value}"]`).forEach(item => item.setAttribute("disabled", "true"));
      }
      this.inputElement.value = "";
    }
  };

  private clearMultiValues = (): void => {
    for (const value of this.multipleValues) {
      this.hostElement.querySelectorAll(`mw-menu-item[value="${value}"]`).forEach(item => item.setAttribute("disabled", "false"));
    }
    this.multipleValues = [];
  };

  render() {
    const {
      onFocus,
      hasError,
      disabled,
      hasIconStartSlot,
      hasIconEndSlot,
      focused,
      multipleValues,
      multipleMaximum,
      placeholder,
      onBlur,
      onValueChange,
      type,
      readOnly,
      name,
      value,
      hasMultipleValues,
      clearMultiValues,
      hasDropDownMenu,
      isDropdownOpen,
    } = this;

    return (
      <div
        slot="anchor"
        onClick={onFocus}
        class={{
          "input": true,
          "has-error": hasError,
          "disabled": disabled,
        }}
      >
        <span
          class={{
            "icon-start": hasIconStartSlot,
            "focused": focused,
            "has-error": hasError,
          }}
        >
          <slot name="icon-start"></slot>
        </span>
        <div class="input-options">
          {multipleValues.map(v => (
            <mw-chip key={v} showClose={true} value={v} selected={true} toggleable={false}>
              {v}
            </mw-chip>
          ))}
          {(!multipleMaximum || multipleValues.length < multipleMaximum) && (
            <input
              ref={el => (this.inputElement = el as HTMLInputElement)}
              placeholder={placeholder}
              class={{
                "has-error": hasError,
              }}
              onFocus={onFocus}
              onBlur={onBlur}
              onInput={onValueChange}
              onChange={onValueChange}
              type={type}
              name={name}
              value={value}
              disabled={disabled}
              readOnly={readOnly}
            />
          )}
        </div>
        {hasMultipleValues && (
          <span class="icon-close-multiple" onClick={clearMultiValues}>
            <mw-icon icon="close" size="medium"></mw-icon>
          </span>
        )}
        <span
          class={{
            "icon-end": hasIconEndSlot,
            "focused": focused,
            "has-error": hasError,
          }}
        >
          <slot name="icon-end"></slot>
        </span>

        {hasDropDownMenu ?? (
          <span
            class={{
              "icon-dropdown": hasDropDownMenu,
              "focused": focused,
              "has-error": hasError,
            }}
          >
            <mw-icon icon={isDropdownOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"} size="medium"></mw-icon>
          </span>
        )}
      </div>
    );
  }
}
