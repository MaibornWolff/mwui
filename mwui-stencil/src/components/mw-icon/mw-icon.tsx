import { Component, Element, h, Prop } from '@stencil/core';
import { Size } from '../mw-avatar/mw-avatar';

const getOpticalSize = (size: Size) =>
  Number(
    {
      'large': 48,
      'medium': 40,
      'small': 24,
      'x-small': 20,
    }[size],
  );

@Component({
  assetsDirs: ['./assets'],
  tag: 'mw-icon',
  styleUrl: 'mw-icon.css',
  shadow: true,
})
export class LibraryNameIcon {
  @Element() el: HTMLElement;
  /**
   * The icon name to be rendered
   */
  @Prop() icon: string = null;
  /**
   * Size variant
   */
  @Prop() size: Size = 'small';
  /**
   * Use filled styles for icons
   */
  @Prop() fill?: boolean = false;
  /**
   * Icon color
   */
  @Prop() color?: string;
  /**
   * Overwrite stroke color
   */
  @Prop() stroke?: string = 'none';

  render() {
    return (
      <span
        style={{
          'fontSize': `${getOpticalSize(this.size)}px`,
          'color': this.color,
          'font-variation-settings': `
      'FILL' ${this.fill ? 1 : 0},
      'wght' 400,
      'GRAD' 0,
      'opsz' ${getOpticalSize(this.size)}`,
        }}
        class="material-symbols-outlined"
      >
        {this.icon}
      </span>
    );
  }
}
