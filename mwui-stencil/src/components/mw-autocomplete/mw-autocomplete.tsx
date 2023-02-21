import { Component, Event, EventEmitter, Host, Prop, State, h, Element, Listen, Watch } from "@stencil/core";

@Component({
  tag: "mw-autocomplete",
  styleUrl: "mw-autocomplete.css",
  shadow: true,
})
export class MwAutocomplete {
  @Element() hostElement: HTMLMwAutocompleteElement;

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
   * Values, when `multiple` is true
   */
  @Prop({ reflect: true, mutable: true }) multipleValues?: Array<string | number> = [];
  @State() focused = false;
  @State() isDropdownOpen = false;
  @State() initialPlaceholder: string;
  @State() hasMultipleValues: boolean;
  @Listen("mwMenuItemClick")
  clickEmitterHandler(event): void {
    const emittedValue = event.target.getAttribute("value");
    if (this.multiple) {
      this.addMultiValue(emittedValue);
    } else {
      this.value = emittedValue;
    }
  }
  @Listen("mwPopoverOpen")
  stateEmitterHandler(event): void {
    this.isDropdownOpen = event.detail;
  }
  @Listen("mwChipClose")
  closeEmitterHandler(event): void {
    const multiValuesCopy = this.multipleValues;
    const indexToRemove = multiValuesCopy.indexOf(event.detail);
    multiValuesCopy.splice(indexToRemove, 1);
    this.hostElement.querySelectorAll(`mw-menu-item[value="${event.detail}"]`).forEach(item => item.setAttribute("disabled", "false"));
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
        multiValuesCopy.splice(indexToRemove, 1);
        this.hostElement.querySelectorAll(`mw-menu-item[value="${valueToRemove}"]`).forEach(item => item.setAttribute("disabled", "false"));
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
    this.filterDropdownOptions();
    this.isDropdownOpen = true;
  };

  private onFocus = (): void => {
    if (this.inputElement) this.inputElement.focus();
    this.focused = true;
  };

  private onBlur = (): void => {
    this.focused = false;
    this.addMultiValue(this.inputElement.value);
  };

  private addMultiValue = (value: string): void => {
    if (this.multiple && (!this.multipleMaximum || this.multipleValues.length < this.multipleMaximum)) {
      if (value.trim().length > 0 && !this.multipleValues.includes(value)) {
        this.multipleValues = [...this.multipleValues, value];
        this.hostElement.querySelectorAll(`mw-menu-item[value="${value}"]`).forEach(item => item.setAttribute("disabled", "true"));
      }
      this.inputElement.value = "";
      this.removeDropdownFilter();
    }
  };

  private clearMultiValues = (): void => {
    for (const value of this.multipleValues) {
      this.hostElement.querySelectorAll(`mw-menu-item[value="${value}"]`).forEach(item => item.setAttribute("disabled", "false"));
    }
    this.multipleValues = [];
  };

  private filterDropdownOptions = (): void => {
    this.hostElement.querySelectorAll("mw-menu-item").forEach(item => {
      if (item.value.toLowerCase().includes(this.inputElement.value.toLowerCase())) {
        item.style.display = "unset";
      } else {
        item.style.display = "none";
      }
    });
  };

  private removeDropdownFilter = (): void => {
    this.hostElement.querySelectorAll("mw-menu-item").forEach(item => {
      item.style.display = "unset";
    });
  };

  render() {
    return (
      <Host>
        <div tabindex="0" class="wrapper">
          <div
            class={{
              "autocomplete": true,
              "inline": this.inline,
              "has-error": this.hasError,
              "disabled": this.disabled,
            }}
          >
            {!!this.label && (
              <label htmlFor={this.name} class="label">
                {this.label}
                {this.required && <span class="required">*</span>}
              </label>
            )}
            {this.hasDropDownMenu ? (
              <mw-popover noPadding={true} closeOnClick={true} open={this.isDropdownOpen}>
                <div slot="anchor" onClick={this.onFocus} class={{ "input": true, "has-error": this.hasError, "disabled": this.disabled }}>
                  <span
                    class={{
                      "icon-start": this.hasIconStartSlot,
                      "focused": this.focused,
                      "has-error": this.hasError,
                    }}
                  >
                    <slot name="icon-start"></slot>
                  </span>
                  <div class="input-options">
                    {this.multipleValues.map(value => (
                      <mw-chip key={value} showClose={true} value={value} selected={true}>
                        {value}
                      </mw-chip>
                    ))}
                    {(!this.multipleMaximum || this.multipleValues.length < this.multipleMaximum) && (
                      <input
                        ref={el => (this.inputElement = el as HTMLInputElement)}
                        placeholder={this.placeholder}
                        class={{
                          "has-error": this.hasError,
                        }}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        onInput={this.onValueChange}
                        onChange={this.onValueChange}
                        type={this.type}
                        name={this.name}
                        value={this.value}
                        disabled={this.disabled}
                        readOnly={this.readOnly}
                      />
                    )}
                  </div>
                  {this.hasMultipleValues && (
                    <span class="icon-close-multiple" onClick={this.clearMultiValues}>
                      <mw-icon icon="close" size="medium"></mw-icon>
                    </span>
                  )}
                  <span
                    class={{
                      "icon-end": this.hasIconEndSlot,
                      "focused": this.focused,
                      "has-error": this.hasError,
                    }}
                  >
                    <slot name="icon-end"></slot>
                  </span>
                  <span
                    class={{
                      "icon-dropdown": this.hasDropDownMenu,
                      "focused": this.focused,
                      "has-error": this.hasError,
                    }}
                  >
                    <mw-icon icon={this.isDropdownOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"} size="medium"></mw-icon>
                  </span>
                </div>
                <div slot="content">
                  <slot name="dropdown-menu"></slot>
                </div>
              </mw-popover>
            ) : (
              <div slot="anchor" onClick={this.onFocus} class={{ "input": true, "has-error": this.hasError, "disabled": this.disabled }}>
                <span
                  class={{
                    "icon-start": this.hasIconStartSlot,
                    "focused": this.focused,
                    "has-error": this.hasError,
                  }}
                >
                  <slot name="icon-start"></slot>
                </span>

                <div class="input-options">
                  {this.multipleValues.map(value => (
                    <mw-chip key={value} showClose={true} value={value} selected={true}>
                      {value}
                    </mw-chip>
                  ))}
                  {(!this.multipleMaximum || this.multipleValues.length < this.multipleMaximum) && (
                    <input
                      ref={el => (this.inputElement = el as HTMLInputElement)}
                      placeholder={this.placeholder}
                      class={{
                        "has-error": this.hasError,
                      }}
                      onFocus={this.onFocus}
                      onBlur={this.onBlur}
                      onInput={this.onValueChange}
                      onChange={this.onValueChange}
                      type={this.type}
                      name={this.name}
                      value={this.value}
                      disabled={this.disabled}
                      readOnly={this.readOnly}
                    />
                  )}
                </div>
                {this.hasMultipleValues && (
                  <span class="icon-close-multiple" onClick={this.clearMultiValues}>
                    <mw-icon icon="close" size="medium"></mw-icon>
                  </span>
                )}
                <span
                  class={{
                    "icon-end": this.hasIconEndSlot,
                    "focused": this.focused,
                    "has-error": this.hasError,
                  }}
                >
                  <slot name="icon-end"></slot>
                </span>
              </div>
            )}
            {this.helperText && !this.inline && (
              <span
                class={{
                  "helper-text": true,
                  "has-error": this.hasError,
                }}
              >
                {this.helperText}
              </span>
            )}
          </div>
          {this.helperText && this.inline && (
            <span
              class={{
                "helper-text": true,
                "has-error": this.hasError,
              }}
            >
              {this.helperText}
            </span>
          )}
        </div>
      </Host>
    );
  }
}
