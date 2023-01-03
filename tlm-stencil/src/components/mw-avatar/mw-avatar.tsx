import { Component, Host, Prop, h } from '@stencil/core';
import { css } from '@emotion/css';
import { mwComponentAvatarsTypoLarge } from '../../../../tlm-token-farm/dist/js/MW_component.js';

export type Size = 'large' | 'medium' | 'small' | 'x-small';

@Component({
  tag: 'mw-avatar',
  styleUrl: 'mw-avatar.css',
  shadow: true,
  assetsDirs: ['../assets'],
})
export class MwAvatar {
  /**
   * Image source
   */
  @Prop() src?: string;
  /**
   * Alt text, first letter used as fallback when no src or icon given
   */
  @Prop() alt?: string;
  /**
   * Size variant
   */
  @Prop() size?: Size = 'medium';

  render() {
    return (
      <Host>
        <div class={`avatar ${this.size}`}>
          {this.alt && <div class="fallback">{this.alt.substring(0, 1)}</div>}
          {this.src && <img src={this.src} alt={this.alt} />}
          <slot></slot>
        </div>
      </Host>
    );
  }
}
