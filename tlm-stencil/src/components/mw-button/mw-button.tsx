import { Component, Element, Event, EventEmitter, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
import { getFontWeightValue } from '../../utils/utils';
import { HTMLStencilElement } from '@stencil/core/internal';
import {
  mwComponentButtonPrimaryColorBgDefault,
  mwComponentButtonBorderWidthPrimaryTextDefault,
  mwComponentButtonPrimaryColorFgDefault,
  mwComponentButtonPrimaryColorBgHover,
  mwComponentButtonPrimaryColorFgHover,
  mwComponentButtonPrimaryColorBgPressed,
  mwComponentButtonPrimaryColorFgFocused,
  mwComponentButtonPrimaryColorBgDisabled,
  mwComponentButtonPrimaryColorFgDisabled,
  mwComponentButtonSecondaryTextColorFgDisabled,
  mwComponentButtonSecondaryTextColorFgFocused,
  mwComponentButtonSecondaryTextColorFgHover,
  mwComponentButtonSecondaryTextColorBgDefault,
  mwComponentButtonSecondaryTextColorFgDefault,
  mwComponentButtonBorderWidthSecondaryDefault,
  mwComponentButtonSecondaryTextColorBorderHover,
  mwComponentButtonSecondaryTextColorBorderDisabled,
  mwComponentButtonSecondaryTextColorBorderDefault,
  mwComponentButtonTypo,
  mwComponentButtonSecondaryTextColorFgPressed,
  mwComponentButtonSecondaryTextColorBorderPressed,
  mwComponentButtonPrimaryColorFgPressed,
  mwComponentButtonPrimaryColorBgFocused,
  mwComponentButtonSecondaryTextColorBorderFocused,
  mwComponentButtonPrimarySecondaryTextPaddingLr,
  mwComponentButtonPrimarySecondaryTextPaddingTb,
  mwComponentButtonPrimarySecondaryTextGap,
  mwComponentButtonBorderRadiusDefault,
  mwComponentSizeButtonPrimarySecondaryMinWidth,
  mwComponentButtonBorderWidthSecondaryFocused,
  letterSpacingButtons,
} from '../../../../tlm-token-farm/dist/js/MW_component.js';

// figma exports percentage value instead of em
// workaround to convert it to float
const letterSpacing = Number(letterSpacingButtons.replace('%', '').trim()) / 100;

const base = css`
  appearance: none;
  padding: ${mwComponentButtonPrimarySecondaryTextPaddingTb} ${mwComponentButtonPrimarySecondaryTextPaddingLr};
  font-family: '${mwComponentButtonTypo.fontFamily}';
  letter-spacing: ${letterSpacing}em;
  line-height: ${mwComponentButtonTypo.lineHeight}px;
  font-weight: ${getFontWeightValue(mwComponentButtonTypo.fontWeight)};
  font-size: ${mwComponentButtonTypo.fontSize}px;
  border-radius: ${mwComponentButtonBorderRadiusDefault}px;
  min-width: ${mwComponentSizeButtonPrimarySecondaryMinWidth}px;
`;

const primaryButtonStyles = css`
  ${base};
  border: ${mwComponentButtonBorderWidthPrimaryTextDefault};
  color: ${mwComponentButtonPrimaryColorFgDefault};
  background-color: ${mwComponentButtonPrimaryColorBgDefault};
  &:hover {
    background-color: ${mwComponentButtonPrimaryColorBgHover};
    color: ${mwComponentButtonPrimaryColorFgHover};
  }
  &:focus {
    background-color: ${mwComponentButtonPrimaryColorBgFocused};
    color: ${mwComponentButtonPrimaryColorFgFocused};
  }
  &:active {
    background-color: ${mwComponentButtonPrimaryColorBgPressed};
    color: ${mwComponentButtonPrimaryColorFgPressed};
  }
  &:disabled {
    background-color: ${mwComponentButtonPrimaryColorBgDisabled};
    color: ${mwComponentButtonPrimaryColorFgDisabled};
  }
`;

const secondaryButtonStyles = css`
  ${base};
  border: 0;
  outline: ${mwComponentButtonBorderWidthSecondaryDefault}px solid;
  outline-offset: ${-2 * mwComponentButtonBorderWidthSecondaryDefault}px;
  color: ${mwComponentButtonSecondaryTextColorFgDefault};
  background-color: ${mwComponentButtonSecondaryTextColorBgDefault};
  outline-color: ${mwComponentButtonSecondaryTextColorBorderDefault};
  &:hover {
    outline-color: ${mwComponentButtonSecondaryTextColorBorderHover};
    color: ${mwComponentButtonSecondaryTextColorFgHover};
  }
  &:focus {
    outline-color: ${mwComponentButtonSecondaryTextColorBorderFocused};
    outline: ${mwComponentButtonBorderWidthSecondaryFocused}px solid;
    outline-offset: ${-2 * mwComponentButtonBorderWidthSecondaryFocused}px;
    color: ${mwComponentButtonSecondaryTextColorFgFocused};
  }
  &:active {
    outline-color: ${mwComponentButtonSecondaryTextColorBorderPressed};
    color: ${mwComponentButtonSecondaryTextColorFgPressed};
  }
  &:disabled {
    outline-color: ${mwComponentButtonSecondaryTextColorBorderDisabled};
    color: ${mwComponentButtonSecondaryTextColorFgDisabled};
  }
`;

const iconStartStyles = css`
  margin-right: ${mwComponentButtonPrimarySecondaryTextGap};
`;

const iconEndStyles = css`
  margin-left: ${mwComponentButtonPrimarySecondaryTextGap};
`;

@Component({
  tag: 'mw-button',
  shadow: false,
})
export class TlmButton {
  @Element() hostElement: HTMLStencilElement;
  @Prop() testId!: string;
  @Prop() disabled?: boolean;
  @Prop() secondary?: boolean;
  @Event({
    bubbles: true,
    cancelable: false,
    composed: false,
  })
  clickEmitter: EventEmitter<string>;

  hasIconStartSlot: boolean;
  hasIconEndSlot: boolean;

  componentWillLoad() {
    this.hasIconStartSlot = !!this.hostElement.querySelector('[slot="icon-start"]');
    this.hasIconEndSlot = !!this.hostElement.querySelector('[slot="icon-end"]');
  }

  handleClick = () => {
    this.clickEmitter.emit('onClick');
  };

  render() {
    return (
      <button disabled={this.disabled} onClick={this.handleClick} class={this.secondary ? secondaryButtonStyles : primaryButtonStyles} test-id={this.testId} type="button">
        {this.hasIconStartSlot && (
          <span class={iconStartStyles}>
            <slot name="icon-start"></slot>
          </span>
        )}
        <slot></slot>
        {this.hasIconEndSlot && (
          <span class={iconEndStyles}>
            <slot name="icon-end"></slot>
          </span>
        )}
      </button>
    );
  }
}
