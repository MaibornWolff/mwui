import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "mw-menu-list",
  styleUrl: "mw-menu-list.css",
  shadow: true,
})
export class MwMenuList {
  /**
   * Provide unique identifier for automated testing
   */
  @Prop() testId: string;

  render() {
    return (
      <Host>
        <div test-id={this.testId} slot="content" class="mw-menu-list">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
