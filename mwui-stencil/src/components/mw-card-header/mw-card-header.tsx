import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "mw-card-header",
  styleUrl: "mw-card-header.css",
  shadow: true,
})
export class MwCardHeader {
  /**
   * Header to be displayed in mw-card-header
   */
  @Prop() header: string;
  /**
   * Subheader to be displayed in mw-card-header
   */
  @Prop() subheader: string;

  render() {
    return (
      <Host>
        <slot name="icon"></slot>
        <div class="text">
          <div class="header">{this.header}</div>
          <div class="subheader">{this.subheader}</div>
        </div>
      </Host>
    );
  }
}
