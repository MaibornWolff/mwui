import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "mw-app-bar-title",
  styleUrl: "mw-app-bar-title.scss",
  shadow: true,
})
export class MwAppBarTitle {
  render() {
    return (
      <Host>
        <div class="mw-app-bar-title">
          <slot />
        </div>
      </Host>
    );
  }
}
