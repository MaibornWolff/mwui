import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "mw-modal-footer",
  styleUrl: "mw-modal-footer.scss",
  shadow: true,
})
export class MwModalFooter {
  render() {
    return (
      <Host>
        <slot name="start"></slot>
        <slot name="center"></slot>
        <slot name="end"></slot>
      </Host>
    );
  }
}
