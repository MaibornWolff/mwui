import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "mw-dropdown",
  styleUrl: "mw-dropdown.css",
  shadow: true,
})
export class MwDropdown {
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
  @Prop() maxWidth?: string;

  render() {
    return (
      <Host style={{ "max-width": this.maxWidth ? this.maxWidth : "auto" }}>
        <mw-textfield
          type={this.type}
          name={this.name}
          label={this.label}
          placeholder={this.placeholder}
          inline={this.inline}
          required={this.required}
          disabled={this.disabled}
        ></mw-textfield>
        <div class="mw-dropdown-menu">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
