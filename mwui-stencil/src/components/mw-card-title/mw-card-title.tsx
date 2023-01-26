import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "mw-card-title",
  styleUrl: "mw-card-title.css",
  shadow: true,
})
export class MwCardTitle {
  /**
   * Title to be displayed in mw-card-title
   */
  // eslint-disable-next-line
  @Prop() title: string;
  /**
   * Subtitle to be displayed in mw-card-title
   */
  @Prop() subtitle: string;
  /**
   * Metadata to be displayed in mw-card-title
   */
  @Prop() metadata: string;

  render() {
    return (
      <Host>
        <div class="card-title">
          <div class="metadata">{this.metadata}</div>
          <div class="title">{this.title}</div>
          <div class="subtitle">{this.subtitle}</div>
        </div>
      </Host>
    );
  }
}
