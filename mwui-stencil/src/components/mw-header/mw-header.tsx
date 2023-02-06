import { Component, Host, h, Prop } from "@stencil/core";
import { AriaRolesEnum } from "../../shared/models/enums/aria-roles.enum";

@Component({
  tag: "mw-header",
  styleUrl: "mw-header.scss",
  shadow: false,
})
export class MwHeader {
  /***
   * set the role of the header
   */
  @Prop() ariaRole: AriaRolesEnum.NAVIGATION | AriaRolesEnum.TOOLBAR = AriaRolesEnum.NAVIGATION;

  render() {
    return (
      <Host>
        <div class="mw-header" role={this.ariaRole}>
          <div class="mw-header-group mw-header-group--start">
            <slot name="header-group-start"></slot>
          </div>

          <div class="mw-header-group mw-header-group--center">
            <slot name="header-group-center"></slot>
          </div>

          <div class="mw-header-group mw-header-group--end">
            <slot name="header-group-end"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
