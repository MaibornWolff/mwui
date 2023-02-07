import { Component, Host, h, Prop } from "@stencil/core";
import { AriaRolesEnum } from "../../shared/models/enums/aria-roles.enum";

export type AppBarPosition = "relative" | "absolute" | "sticky" | "fixed";
@Component({
  tag: "mw-app-bar",
  styleUrl: "mw-app-bar.css",
  shadow: true,
})
export class MwAppBar {
  /**
   * Set the role of the header
   */
  @Prop() ariaRole?: AriaRolesEnum.NAVIGATION | AriaRolesEnum.TOOLBAR = AriaRolesEnum.NAVIGATION;
  /**
   * Position of App Bar within viewport
   */
  @Prop() position?: AppBarPosition = "relative";
  render() {
    return (
      <Host>
        <div class={`mw-app-bar ${this.position}`} role={this.ariaRole}>
          <slot name="start"></slot>
          <slot name="center"></slot>
          <slot name="end"></slot>
        </div>
      </Host>
    );
  }
}
