import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "mw-icon-button",
  styleUrl: "mw-icon-button.css",
  shadow: true,
})
export class MwIconButton {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
