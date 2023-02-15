import { Component, Event, EventEmitter, Host, Prop, State, h, Element } from "@stencil/core";

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

  @State() focused = false;

  private inputElement: HTMLInputElement;
  private hasIconStartSlot: boolean;
  private hasIconEndSlot: boolean;

  componentWillLoad(): void {
    this.hasIconStartSlot = !!this.hostElement.querySelector("[slot='icon-start']");
    this.hasIconEndSlot = !!this.hostElement.querySelector("[slot='icon-end']");
  }

  private onValueChange = (event: Event): void => {
    this.value = (event.target as HTMLInputElement).value;
    this.valueChanged.emit(this.value);
  };

  private onFocus = (): void => {
    this.inputElement.focus();
    this.focused = true;
  };

  private onBlur = (): void => {
    this.focused = false;
  };

  render() {
    return (
      <Host>
        <div class="wrapper">
          <div
            class={{
              "textfield": true,
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
            <div onClick={this.onFocus} class={{ "input": true, "has-error": this.hasError, "disabled": this.disabled }}>
              <span class={{ "icon-start": this.hasIconStartSlot, "focused": this.focused, "has-error": this.hasError }}>
                <slot name="icon-start"></slot>
              </span>
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
              />
              <span class={{ "icon-end": this.hasIconEndSlot, "focused": this.focused, "has-error": this.hasError }}>
                <slot name="icon-end"></slot>
              </span>
            </div>
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
