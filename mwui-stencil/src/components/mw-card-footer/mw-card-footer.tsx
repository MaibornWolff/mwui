import { Component, Host, Prop, h } from "@stencil/core";
import classnames from "classnames";

@Component({
  tag: "mw-card-footer",
  styleUrl: "mw-card-footer.css",
  shadow: true,
})
export class MwCardFooter {
  /**
   * justify-content: center
   */
  @Prop() justifyCenter?: boolean = false;
  /**
   * justify-content: start
   */
  @Prop() justifyStart?: boolean = false;
  /**
   * justify-content: end
   */
  @Prop() justifyEnd?: boolean = false;
  /**
   * justify-content: normal
   */
  @Prop() justifyNormal?: boolean = false;
  /**
   * justify-content: left
   */
  @Prop() justifyLeft?: boolean = false;
  /**
   * justify-content: right
   */
  @Prop() justifyRight?: boolean = false;
  /**
   * justify-content: flex-start
   */
  @Prop() justifyFlexStart?: boolean = false;
  /**
   * justify-content: flex-end
   */
  @Prop() justifyFlexEnd?: boolean = false;
  /**
   * justify-content: space-around
   */
  @Prop() justifySpaceAround?: boolean = false;
  /**
   * justify-content: space-between
   */
  @Prop() justifySpaceBetween?: boolean = false;
  /**
   * justify-content: space-evenly
   */
  @Prop() justifySpaceEvenly?: boolean = false;

  render() {
    return (
      <Host>
        <div
          class={classnames("card-footer", {
            "justify-center": this.justifyCenter,
            "justify-start": this.justifyStart,
            "justify-flex-start": this.justifyFlexStart,
            "justify-flex-end": this.justifyFlexEnd,
            "justify-normal": this.justifyNormal,
            "justify-left": this.justifyLeft,
            "justify-right": this.justifyRight,
            "justify-space-around": this.justifySpaceAround,
            "justify-space-evenly": this.justifySpaceEvenly,
            "justify-space-between": this.justifySpaceBetween,
          })}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
