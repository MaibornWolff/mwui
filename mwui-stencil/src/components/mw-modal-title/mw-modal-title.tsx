import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "mw-modal-title",
  styleUrl: "mw-modal-title.scss",
  shadow: true,
})
export class MwModalTitle {
  /**
   * Dismiss icon that should be displayed
   */
  @Prop() public icon: string | undefined;

  /**
   * Title that should be displayed
   */
  @Prop() public headline: string | undefined;

  /**
   * Description that should be displayed
   */
  @Prop() public description: string | undefined;

  render() {
    return (
      <Host>
        <div class="mw-modal-title">
          <h2 class="mw-modal-title__headline">{this.headline}</h2>
          <span class="spacefiller"></span>
          <slot name="icon" />
        </div>
        {!!this.description && (
          <div class="mw-modal-title">
            <div class="mw-modal-title__description">{this.description}</div>
          </div>
        )}
      </Host>
    );
  }
}
