import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "mw-link",
  styleUrl: "mw-link.css",
  shadow: true,
})
export class MwLink {
  /**
   * URL to where the link should lead
   */
  @Prop() href!: string;

  render() {
    return (
      <a class="mw-link" href={this.href}>
        <slot></slot>
      </a>
    );
  }
}
