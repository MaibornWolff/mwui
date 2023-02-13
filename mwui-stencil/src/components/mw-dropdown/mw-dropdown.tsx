import { Component, Host, h, Prop, Element, State, Listen } from "@stencil/core";

@Component({
  tag: "mw-dropdown",
  styleUrl: "mw-dropdown.css",
  shadow: true,
})
export class MwDropdown {
  @Element() host: HTMLMwDropdownElement;
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
  @State() options = [];

  @Listen("clickEmitter")
  clickEmitterHandler(event): void {
    this.value = event.target.getAttribute("value");
  }
  render() {
    return (
      <Host>
        <mw-textfield
          label={this.label}
          name={this.name}
          value={this.value}
          placeholder={this.placeholder}
          helperText={this.helperText}
          hasError={this.hasError}
          inline={this.inline}
          required={this.required}
          disabled={this.disabled}
          readOnly={true}
        >
          <div slot="dropdown-menu">
            <slot></slot>
          </div>
        </mw-textfield>
      </Host>
    );
  }
}
