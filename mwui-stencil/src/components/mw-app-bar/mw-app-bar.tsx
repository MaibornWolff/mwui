import { Component, Host, h, Prop } from "@stencil/core";

export type AppBarPosition = "relative" | "absolute" | "sticky" | "fixed";
@Component({
  tag: "mw-app-bar",
  styleUrl: "mw-app-bar.css",
  shadow: true,
})
export class MwAppBar {
  /**
   * Position of App Bar within viewport
   */
  @Prop() position?: AppBarPosition = "relative";
  render() {
    return (
      <Host>
        <div class={`mw-app-bar ${this.position}`}>
          <slot name="start"></slot>
          <slot name="center"></slot>
          <slot name="end"></slot>
        </div>
      </Host>
    );
  }
}
