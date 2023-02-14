import { Component, Event, EventEmitter, Host, Prop, State, h, Element, Listen } from "@stencil/core";
import classnames from "classnames";

@Component({
  tag: "mw-textfield",
  styleUrl: "mw-textfield.css",
  shadow: true,
})
export class MwTextfield {
  @Element() hostElement: HTMLMwTextfieldElement;

  /**
   * MwTextfield emits an event when textfield value changes
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
  @Prop() placeholder?: string;
  /**
   * HelperText to be displayed. Can be used as hint or error text when combined with `has-error`
   */
  @Prop({ reflect: true }) helperText?: string;
  /**
   * Use to display input and helper-text in error state
   */
  @Prop() hasError?: boolean = false;
  /**
   * Display label and input horizonally
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
   * Allows users to enter multiple values into textfield
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
  @Listen("clickEmitter")
  clickEmitterHandler(event): void {
    const emittedValue = event.target.getAttribute("value");
    if (this.multiple) {
      this.addMultiValue(emittedValue, true);
    } else {
      this.value = emittedValue;
    }
  }

  @Listen("openEmitter")
  stateEmitterHandler(event): void {
    console.log("listen", event);
  }

  @Listen("closeEmitter")
  closeEmitterHandler(event): void {
    console.log("listen", event);
  }

  @Listen("keydown")
  handleEnterPress(event: KeyboardEvent): void {
    if (this.multiple && this.focused && event.key === "Enter") this.addMultiValue(this.inputElement.value);
  }

  private isDropdownOpen: boolean;
  private inputElement: HTMLInputElement;
  private hasIconStartSlot: boolean;
  private hasIconEndSlot: boolean;
  private hasDropDownMenu: boolean;

  componentWillLoad(): void {
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
    this.inputElement.focus();
    this.focused = true;
  };

  private onBlur = (): void => {
    this.focused = false;
    this.addMultiValue(this.inputElement.value);
  };

  private addMultiValue = (value: string | number, option = false): void => {
    if (this.multiple) {
      if ((option || this.inputElement.value.trim().length > 0) && !this.multipleValues.includes(value)) {
        if (!this.multipleMaximum || this.multipleValues.length <= this.multipleMaximum) {
          this.multipleValues = [...this.multipleValues, value];
        }
      }
      this.inputElement.value = "";
    }
  };

  render() {
    return (
      <Host>
        <div tabindex="0" class="wrapper">
          <div
            class={classnames("textfield", {
              "inline": this.inline,
              "has-error": this.hasError,
              "disabled": this.disabled,
              "read-only": this.readOnly,
            })}
          >
            {!!this.label && (
              <label htmlFor={this.name} class="label">
                {this.label}
                {this.required && <span class="required">*</span>}
              </label>
            )}
            {this.hasDropDownMenu ? (
              <mw-popover noPadding={true} closeOnClick={true} open={false}>
                <div slot="anchor" onClick={this.onFocus} class={classnames("input", { "has-error": this.hasError, "disabled": this.disabled })}>
                  <span
                    class={classnames({
                      "icon-start": this.hasIconStartSlot,
                      "focused": this.focused,
                      "has-error": this.hasError,
                    })}
                  >
                    <slot name="icon-start"></slot>
                  </span>
                  <div class="input-options">
                    {this.multipleValues.map((value, key) => (
                      <mw-chip key={key} showClose={true}>
                        {value}
                      </mw-chip>
                    ))}

                    <input
                      ref={el => (this.inputElement = el as HTMLInputElement)}
                      placeholder={this.placeholder}
                      class={classnames({
                        "has-error": this.hasError,
                      })}
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
                  </div>
                  <span
                    class={classnames({
                      "icon-end": this.hasIconEndSlot,
                      "focused": this.focused,
                      "has-error": this.hasError,
                    })}
                  >
                    <slot name="icon-end"></slot>
                  </span>
                  <span
                    class={classnames({
                      "icon-end": this.hasDropDownMenu,
                      "focused": this.focused,
                      "has-error": this.hasError,
                    })}
                  >
                    <mw-icon icon={this.isDropdownOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}></mw-icon>
                  </span>
                </div>
                <div slot="content">
                  <slot name="dropdown-menu"></slot>
                </div>
              </mw-popover>
            ) : (
              <div slot="anchor" onClick={this.onFocus} class={classnames("input", { "has-error": this.hasError, "disabled": this.disabled })}>
                <span
                  class={classnames({
                    "icon-start": this.hasIconStartSlot,
                    "focused": this.focused,
                    "has-error": this.hasError,
                  })}
                >
                  <slot name="icon-start"></slot>
                </span>
                <div class="input-options">
                  {this.multipleValues.map((value, key) => (
                    <mw-chip key={key} showClose={true}>
                      {value}
                    </mw-chip>
                  ))}
                  <input
                    ref={el => (this.inputElement = el as HTMLInputElement)}
                    placeholder={this.placeholder}
                    class={classnames({
                      "has-error": this.hasError,
                    })}
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
                </div>

                <span
                  class={classnames({
                    "icon-end": this.hasIconEndSlot,
                    "focused": this.focused,
                    "has-error": this.hasError,
                  })}
                >
                  <slot name="icon-end"></slot>
                </span>
              </div>
            )}
            {this.helperText && !this.inline && (
              <span
                class={classnames("helper-text", {
                  "has-error": this.hasError,
                })}
              >
                {this.helperText}
              </span>
            )}
          </div>
          {this.helperText && this.inline && (
            <span
              class={classnames("helper-text", {
                "has-error": this.hasError,
              })}
            >
              {this.helperText}
            </span>
          )}
        </div>
      </Host>
    );
  }
}
