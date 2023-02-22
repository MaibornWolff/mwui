import { Component, Host, h, Prop, Element, State, Listen, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "mw-dropdown",
  styleUrl: "mw-dropdown.css",
  shadow: true,
})
export class MwDropdown {
  @Element() host: HTMLMwDropdownElement;
  /**
   * MwDropdown emits an event when value changes
   */
  @Event({ bubbles: true, composed: false }) valueChanged: EventEmitter<string>;
  /**
   * input field value
   */
  @Prop({ reflect: true, mutable: true }) value?: string | number;
  /**
   * label of selected input value
   */
  @Prop({ reflect: true, mutable: true }) valueLabel?: string | number;
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
  @Prop() placeholder?: string = "Placeholder";
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
  @State() isDropdownOpen = false;
  @Listen("mwMenuItemClick")
  clickEmitterHandler(event): void {
    this.value = event.target.getAttribute("value");
    this.valueLabel = event.target.getAttribute("title");
  }
  @Listen("mwPopoverOpen")
  stateEmitterHandler(event): void {
    this.isDropdownOpen = event.detail;
  }

  private buttonElement: HTMLButtonElement;
  private hasIconStartSlot: boolean;
  private hasIconEndSlot: boolean;
  private hasDropDownMenu: boolean;

  componentWillLoad(): void {
    this.hasIconStartSlot = !!this.host.querySelector("[slot='icon-start']");
    this.hasIconEndSlot = !!this.host.querySelector("[slot='icon-end']");
    this.hasDropDownMenu = !!this.host.querySelector("[slot='dropdown-menu']");
  }

  private onValueChange = (event: Event): void => {
    this.value = (event.target as HTMLButtonElement).value;
    this.valueChanged.emit(this.value);
  };

  private onFocus = (): void => {
    this.buttonElement.focus();
    this.focused = true;
  };

  private onBlur = (): void => {
    this.focused = false;
  };

  render() {
    return (
      <Host>
        <div class="wrapper">
          <div class={{ "dropdown": true, "inline": this.inline, "has-error": this.hasError, "disabled": this.disabled }}>
            {!!this.label && (
              <label htmlFor={this.name} class="label">
                {this.label}
                {this.required && <span class="required">*</span>}
              </label>
            )}
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
                <button
                  class={{ "button": true, "has-error": this.hasError, "placeholder": !this.valueLabel }}
                  ref={el => (this.buttonElement = el as HTMLButtonElement)}
                  name={this.name}
                  value={this.value}
                  disabled={this.disabled}
                  onChange={this.onValueChange}
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                >
                  {this.valueLabel ? this.valueLabel : this.placeholder}
                </button>
                <span
                  class={{
                    "icon-end": this.hasIconEndSlot,
                    "focused": this.focused,
                    "has-error": this.hasError,
                  }}
                >
                  <slot name="icon-end"></slot>
                </span>
                {this.hasDropDownMenu && (
                  <span
                    class={{
                      "icon-end": this.hasDropDownMenu,
                      "focused": this.focused,
                      "has-error": this.hasError,
                    }}
                  >
                    <mw-icon icon={this.isDropdownOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"} size="medium"></mw-icon>
                  </span>
                )}
              </div>
              <div slot="content">
                <slot name="dropdown-menu"></slot>
              </div>
            </mw-popover>
            {this.helperText && !this.inline && <span class={{ "helper-text": true, "has-error": this.hasError }}>{this.helperText}</span>}
          </div>
          {this.helperText && this.inline && <span class={{ "helper-text": true, "has-error": this.hasError }}>{this.helperText}</span>}
        </div>
      </Host>
    );
  }
}
