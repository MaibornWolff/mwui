import { Component, Element, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "mw-card-image",
  styleUrl: "mw-card-image.scss",
  shadow: true,
})
export class MwCardImage {
  @Element() hostElement: HTMLMwCardImageElement;
  // TODO: support more img props, srcset...
  /**
   * Image source
   */
  @Prop() src: string;
  /**
   * Alt text for the image
   */
  @Prop() alt: string;
  /**
   * Height of image
   */
  @Prop() height?: string;

  private isFirstChild: boolean;
  private isLastChild: boolean;
  private isOnlyChild: boolean;
  private styles;

  componentWillLoad(): void {
    const card = this.hostElement.parentNode;
    this.isOnlyChild = card.childElementCount === 1;
    this.isFirstChild = !this.isOnlyChild && this.hostElement.isSameNode(card.firstElementChild);
    this.isLastChild = !this.isOnlyChild && this.hostElement.isSameNode(card.lastElementChild);
    if (this.height) {
      this.styles = {
        "height": this.height,
        "object-fit": "cover",
        "width": "100%",
      };
    }
  }

  render() {
    return (
      <Host>
        <div class={{ "card-image": true, "top": this.isFirstChild, "bottom": this.isLastChild, "single": this.isOnlyChild }}>
          <img src={this.src} alt={this.alt} style={this.styles} />
        </div>
      </Host>
    );
  }
}
