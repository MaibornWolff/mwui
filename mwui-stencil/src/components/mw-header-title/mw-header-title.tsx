import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "mw-header-title",
  styleUrl: "mw-header-title.scss",
  shadow: true,
})
export class MwHeaderTitle {
  render() {
    return (
      <Host>
        <div class="mw-header-title">
          <slot />
        </div>
      </Host>
    );
  }
}
