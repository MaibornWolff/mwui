import { Component, h, Prop } from "@stencil/core";
import { Target, TargetEnum } from "../mw-button/models/enums/button-target.enum";

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
  /**
   * Target Prop for HTML 'a' tag
   */
  @Prop() target?: Target = TargetEnum.SELF;
  /**
   * Dictates whether link has an underline
   */
  @Prop() underline?: boolean = true;

  render() {
    return (
      <a class={`mw-link ${this.underline && "underline"}`} href={this.href} target={this.target}>
        <slot></slot>
      </a>
    );
  }
}
