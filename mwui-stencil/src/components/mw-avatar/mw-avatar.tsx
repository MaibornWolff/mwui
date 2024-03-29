import { Component, Host, Prop, h } from "@stencil/core";
import { Size, SizeEnum } from "../../shared/models/enums/size.enum";

@Component({
  tag: "mw-avatar",
  styleUrl: "mw-avatar.css",
  shadow: true,
})
export class MwAvatar {
  /**
   * Test Id
   */
  @Prop() testId?: string;
  /**
   * Image source
   */
  @Prop() src?: string;
  /**
   * Icon name. Will be ignored if `src` is provided
   */
  @Prop() icon?: string;
  /**
   * Alt text, first letter used as fallback when no src or icon given
   */
  @Prop() alt?: string;
  /**
   * Size variant
   */
  @Prop() size?: Size = SizeEnum.MEDIUM;

  render() {
    return (
      <Host>
        <div test-id={this.testId} class={`avatar ${this.size}`}>
          {this.alt && <div class={`fallback ${this.size}`}>{this.alt.substring(0, 1)}</div>}
          {this.src && <img src={this.src} alt={this.alt} />}
          {this.icon && <mw-icon icon={this.icon} size={this.size}></mw-icon>}
        </div>
      </Host>
    );
  }
}
