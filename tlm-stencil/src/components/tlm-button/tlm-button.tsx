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
  mwComponentButtonPrimarySecondaryPaddingIconAll,
  mwComponentButtonPrimarySecondaryPaddingWithoutIconLr,
  mwComponentButtonPrimarySecondaryPaddingWithoutIconTb,
  mwComponentButtonSecondaryColorFgDisabled,
  mwComponentButtonSecondaryColorFgFocused,
  mwComponentButtonSecondaryColorFgHover,
  mwComponentButtonSecondaryColorBgDefault,
  mwComponentButtonSecondaryColorFgDefault,
  mwComponentButtonBorderWidthSecondaryDefault,
  mwComponentButtonSecondaryColorOutlineHover,
  mwComponentButtonSecondaryColorOutlineDisabled,
  mwComponentButtonSecondaryColorOutlineDefault,
  typographyButtonXLargeBold,
  mwComponentButtonSecondaryColorFgPressed,
  mwComponentButtonSecondaryColorOutlinePressed,
  mwComponentButtonPrimaryColorFgPressed,
  mwComponentButtonPrimaryColorBgFocused,
  mwComponentButtonSecondaryColorOutlineFocused,
} from '../../../../tlm-token-farm/dist/js/MW_component.js';

const base = css`
  appearance: none;
  padding: ${mwComponentButtonPrimarySecondaryPaddingWithoutIconTb} ${mwComponentButtonPrimarySecondaryPaddingWithoutIconLr};
  font-family: '${typographyButtonXLargeBold.fontFamily}';
  letter-spacing: ${typographyButtonXLargeBold.letterSpacing};
  line-height: ${typographyButtonXLargeBold.lineHeight};
  font-weight: ${getFontWeightValue(typographyButtonXLargeBold.fontWeight)};
  font-size: ${typographyButtonXLargeBold.fontSize}px;
  border-radius: 99999px;
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
  border: ${mwComponentButtonBorderWidthSecondaryDefault}px solid;
  color: ${mwComponentButtonSecondaryColorFgDefault};
  background-color: ${mwComponentButtonSecondaryColorBgDefault};
  border-color: ${mwComponentButtonSecondaryColorOutlineDefault};
  &:hover {
    border-color: ${mwComponentButtonSecondaryColorOutlineHover};
    color: ${mwComponentButtonSecondaryColorFgHover};
  }
  &:focus {
    border-color: ${mwComponentButtonSecondaryColorOutlineFocused};
    color: ${mwComponentButtonSecondaryColorFgFocused};
  }
  &:active {
    border-color: ${mwComponentButtonSecondaryColorOutlinePressed};
    color: ${mwComponentButtonSecondaryColorFgPressed};
  }
  &:disabled {
    border: ${mwComponentButtonBorderWidthSecondaryDefault}px solid;
    border-color: ${mwComponentButtonSecondaryColorOutlineDisabled};
    color: ${mwComponentButtonSecondaryColorFgDisabled};
  }
`;

const iconStartStyles = css`
  padding: ${mwComponentButtonPrimarySecondaryPaddingIconAll};
`;

const iconEndStyles = css`
  padding: ${mwComponentButtonPrimarySecondaryPaddingIconAll};
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
