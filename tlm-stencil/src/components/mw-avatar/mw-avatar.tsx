import { Component, Host, Prop, h } from '@stencil/core';
import { css } from '@emotion/css';
import { getFontWeightValue } from '../../utils/utils';
import {
  mwComponentAvatarsTypoLarge,
  mwComponentAvatarsTypoMedium,
  mwComponentAvatarsTypoSmall,
  mwComponentAvatarsTypoXSmall,
} from '../../../../tlm-token-farm/dist/js/MW_component.js';

const typoLarge = css`
  font-size: ${mwComponentAvatarsTypoLarge.fontSize}px;
  font-family: ${mwComponentAvatarsTypoLarge.fontFamily};
  font-weight: ${getFontWeightValue(mwComponentAvatarsTypoLarge.fontWeight)};
  line-height: ${mwComponentAvatarsTypoLarge.lineHeight}px;
`;

const typoMedium = css`
  font-size: ${mwComponentAvatarsTypoMedium.fontSize}px;
  font-family: ${mwComponentAvatarsTypoMedium.fontFamily};
  font-weight: ${getFontWeightValue(mwComponentAvatarsTypoMedium.fontWeight)};
  line-height: ${mwComponentAvatarsTypoMedium.lineHeight}px;
`;

const typoSmall = css`
  font-size: ${mwComponentAvatarsTypoSmall.fontSize}px;
  font-family: ${mwComponentAvatarsTypoSmall.fontFamily};
  font-weight: ${getFontWeightValue(mwComponentAvatarsTypoSmall.fontWeight)};
  line-height: ${mwComponentAvatarsTypoSmall.lineHeight}px;
`;

const typoXSmall = css`
  font-size: ${mwComponentAvatarsTypoXSmall.fontSize}px;
  font-family: ${mwComponentAvatarsTypoXSmall.fontFamily};
  font-weight: ${getFontWeightValue(mwComponentAvatarsTypoXSmall.fontWeight)};
  line-height: ${mwComponentAvatarsTypoXSmall.lineHeight}px;
`;

export type Size = 'large' | 'medium' | 'small' | 'x-small';

const getTypoStyles = (size: Size) =>
  ({
    'large': typoLarge,
    'medium': typoMedium,
    'small': typoSmall,
    'x-small': typoXSmall,
  }[size]);

@Component({
  tag: 'mw-avatar',
  styleUrl: 'mw-avatar.css',
  shadow: false,
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
        <div test-id={this.testId} class={`avatar ${this.size}`}>
          {this.alt && <div class={`fallback ${getTypoStyles(this.size)}`}>{this.alt.substring(0, 1)}</div>}
          {this.src && <img src={this.src} alt={this.alt} />}
          <slot></slot>
        </div>
      </Host>
    );
  }
}
