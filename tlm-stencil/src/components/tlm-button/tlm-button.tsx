/*
import { Component, Element, Event, EventEmitter, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
import { getFontWeightValue } from '../../utils/utils';
import { HTMLStencilElement } from '@stencil/core/internal';
import {
  mwComponentButtonPrimaryColorBgDefault,
  mwComponentButtonBorderWidthPrimaryDefault,
  mwComponentButtonPrimaryColorFgDefault,
  mwComponentButtonPrimaryColorBgHover,
  mwComponentButtonPrimaryColorFgHover,
  mwComponentButtonPrimaryColorBgPressed,
  mwComponentButtonPrimaryColorFgFocused,
  mwComponentButtonPrimaryColorBgDisabled,
  mwComponentButtonPrimaryColorFgDisabled,
  mwComponentButtonSecondaryColorFgDisabled,
  mwComponentButtonSecondaryColorFgFocused,
  mwComponentButtonSecondaryColorFgHover,
  mwComponentButtonSecondaryColorBgDefault,
  mwComponentButtonSecondaryColorFgDefault,
  mwComponentButtonBorderWidthSecondaryDefault,
  mwComponentButtonSecondaryColorOutlineHover,
  mwComponentButtonSecondaryColorOutlineDisabled,
  mwComponentButtonSecondaryColorOutlineDefault,
  typographyButtonLargeBold,
  mwComponentButtonSecondaryColorFgPressed,
  mwComponentButtonSecondaryColorOutlinePressed,
  mwComponentButtonPrimaryColorFgPressed,
  mwComponentButtonPrimaryColorBgFocused,
  mwComponentButtonSecondaryColorOutlineFocused,
  mwComponentButtonPrimarySecondaryPaddingLr,
  mwComponentButtonPrimarySecondaryPaddingTb,
  mwComponentButtonPrimarySecondaryGap,
  mwComponentButtonBorderRadiusDefault,
  mwComponentButtonPrimarySecondaryMinWidth,
  mwComponentButtonBorderWidthSecondaryFocused,
} from '../../../../tlm-token-farm/dist/js/MW_component.js';

// figma exports percentage value instead of em
// workaround to convert it to float
const letterSpacing = Number(typographyButtonLargeBold.letterSpacing.replace('%', '').trim()) / 100;

const base = css`
  appearance: none;
  padding: ${mwComponentButtonPrimarySecondaryPaddingTb} ${mwComponentButtonPrimarySecondaryPaddingLr};
  font-family: '${typographyButtonLargeBold.fontFamily}';
  letter-spacing: ${letterSpacing}em;
  line-height: ${typographyButtonLargeBold.lineHeight};
  font-weight: ${getFontWeightValue(typographyButtonLargeBold.fontWeight)};
  font-size: ${typographyButtonLargeBold.fontSize}px;
  border-radius: ${mwComponentButtonBorderRadiusDefault}px;
  min-width: ${mwComponentButtonPrimarySecondaryMinWidth}px;
`;

const primaryButtonStyles = css`
  ${base};
  border: ${mwComponentButtonBorderWidthPrimaryDefault};
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
  color: ${mwComponentButtonSecondaryColorFgDefault};
  background-color: ${mwComponentButtonSecondaryColorBgDefault};
  outline-color: ${mwComponentButtonSecondaryColorOutlineDefault};
  &:hover {
    outline-color: ${mwComponentButtonSecondaryColorOutlineHover};
    color: ${mwComponentButtonSecondaryColorFgHover};
  }
  &:focus {
    outline-color: ${mwComponentButtonSecondaryColorOutlineFocused};
    outline: ${mwComponentButtonBorderWidthSecondaryFocused}px solid;
    outline-offset: ${-2 * mwComponentButtonBorderWidthSecondaryFocused}px;
    color: ${mwComponentButtonSecondaryColorFgFocused};
  }
  &:active {
    outline-color: ${mwComponentButtonSecondaryColorOutlinePressed};
    color: ${mwComponentButtonSecondaryColorFgPressed};
  }
  &:disabled {
    outline-color: ${mwComponentButtonSecondaryColorOutlineDisabled};
    color: ${mwComponentButtonSecondaryColorFgDisabled};
  }
`;

const iconStartStyles = css`
  margin-right: ${mwComponentButtonPrimarySecondaryGap};
`;

const iconEndStyles = css`
  margin-left: ${mwComponentButtonPrimarySecondaryGap};
`;

@Component({
  tag: 'tlm-button',
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
*/
