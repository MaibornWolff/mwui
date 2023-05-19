import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "mw-label",
  styleUrl: "mw-label.scss",
  shadow: false,
})
export class MwLabel {
  /**
   * Name of input field connected to label
   */
  @Prop() name: string;
  /**
   * Text of the label
   */
  @Prop() label?: string;
  /**
   * Wether or not the input connected to the label is required
   */
  @Prop() required?: boolean = false;

  render() {
    const { label, name, required } = this;
    return (
      <Host role="label" class="mw-label">
        {!!label && (
          <label htmlFor={name} class="label">
            {label}
            {required && <span class="required">*</span>}
          </label>
        )}
      </Host>
    );
  }
}
