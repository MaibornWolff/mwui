import { Component, h, Host, Prop } from "@stencil/core";

@Component({
  tag: "mw-helper-text",
  styleUrl: "mw-helper-text.scss",
  shadow: true,
})
export class MwHelperText {
  /**
   * Text to be displayed
   */
  @Prop() helperText?: string;

  /**
   * Displays error
   */
  @Prop() hasError? = false;

  render() {
    const { helperText, hasError } = this;
    return (
      <Host>
        <span
          class={{
            "hidden": !this.helperText,
            "helper-text": true,
            "has-error": hasError,
          }}
        >
          {helperText}
        </span>
      </Host>
    );
  }
}
