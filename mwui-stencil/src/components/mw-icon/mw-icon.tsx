import { Component, Element, h, Prop } from "@stencil/core";
import { mwComponentSizeAvatarsIconXl } from "@mwui-token-farm/MW_core";
import { mwComponentSizeAvatarsIconLg, mwComponentSizeAvatarsIconMd, mwComponentSizeAvatarsIconSm, mwComponentSizeAvatarsIconXs } from "@mwui-token-farm/MW_component";
import { Size, SizeEnum } from "../../shared/models/enums/size.enum";

const getOpticalSize = (size: Size): number =>
  Number(
    {
      [SizeEnum.X_LARGE]: 48,
      [SizeEnum.LARGE]: 48,
      [SizeEnum.MEDIUM]: 40,
      [SizeEnum.SMALL]: 24,
      [SizeEnum.X_SMALL]: 20,
    }[size],
  );

const getFontSize = (size: Size): string =>
  ({
    [SizeEnum.X_LARGE]: mwComponentSizeAvatarsIconXl,
    [SizeEnum.LARGE]: mwComponentSizeAvatarsIconLg,
    [SizeEnum.MEDIUM]: mwComponentSizeAvatarsIconMd,
    [SizeEnum.SMALL]: mwComponentSizeAvatarsIconSm,
    [SizeEnum.X_SMALL]: mwComponentSizeAvatarsIconXs,
  }[size]);

@Component({
  assetsDirs: ["./assets"],
  tag: "mw-icon",
  styleUrl: "mw-icon.scss",
  shadow: true,
})
export class MwIcon {
  @Element() el: HTMLMwIconElement;
  /**
   * The icon name to be rendered
   */
  @Prop() icon: string = null;
  /**
   * This controls both optical size and font-size. Font-size can be set independently in styles. (Optical) size for the image to look the same at different sizes, the stroke weight (thickness) changes as the icon size scales. Optical size offers a way to automatically adjust the stroke weight when you increase or decrease the symbol size.
   */
  @Prop() size: Size = SizeEnum.SMALL;
  /**
   * Fill gives you the ability to modify the default icon style. A single icon can render both unfilled and filled states.
   */
  @Prop() fill?: boolean = false;
  /**
   * Icon color
   */
  @Prop() color?: string;
  /**
   * Weight defines the symbol’s stroke weight, with a range of weights between thin (100) and bold (700). Weight can also affect the overall size of the symbol.
   */
  @Prop() weight = 400;

  render() {
    return (
      <span
        style={{
          "fontSize": getFontSize(this.size),
          "color": this.color,
          "font-variation-settings": `
          'FILL' ${this.fill ? 1 : 0},
          'wght' ${this.weight},
          'GRAD' 0,
          'opsz' ${getOpticalSize(this.size)}`,
        }}
        class={`material-symbols-outlined ${this.size}`}
      >
        {this.icon}
      </span>
    );
  }
}
