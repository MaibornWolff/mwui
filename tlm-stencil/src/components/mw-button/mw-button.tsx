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
  mwComponentButtonPaddingLr,
  mwComponentButtonPaddingTb,
  mwComponentButtonGapBetween,
  mwComponentButtonBorderRadiusDefault,
  mwComponentSizeButtonPrimarySecondaryMinWidth,
  mwComponentButtonBorderWidthSecondaryFocused,
  mwComponentButtonPaddingIconAll,
  letterSpacingButtons,
} from '../../../../tlm-token-farm/dist/js/MW_component.js';

// figma exports percentage value instead of em
// workaround to convert it to float
const letterSpacing = Number(letterSpacingButtons.replace('%', '').trim()) / 100;

const base = css`
  appearance: none;
  text-decoration: none;
  padding: ${mwComponentButtonPaddingTb} ${mwComponentButtonPaddingLr};
  font-family: '${mwComponentButtonTypo.fontFamily}';
  letter-spacing: ${letterSpacing}em;
  line-height: ${mwComponentButtonTypo.lineHeight}px;
  font-weight: ${getFontWeightValue(mwComponentButtonTypo.fontWeight)};
  font-size: ${mwComponentButtonTypo.fontSize}px;
  border-radius: ${mwComponentButtonBorderRadiusDefault}px;
  min-width: ${mwComponentSizeButtonPrimarySecondaryMinWidth};
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

const iconButtonStyles = css`
  padding: ${mwComponentButtonPaddingIconAll};
  min-width: 0px;
`;

const flexStyles = css`
  display: flex;
  align-items: center;
`;

const iconStyles = css`
  display: inline-block;
  height: 18px;
  > span {
    display: inline-block;
    height: 18px;
    width: 18px;
  }
`;

const iconStartStyles = css`
  margin-right: ${mwComponentButtonGapBetween};
  display: inline-block;
  height: 18px;
  > span {
    display: inline-block;
    height: 18px;
    width: 18px;
  }
`;

const iconEndStyles = css`
  margin-left: ${mwComponentButtonGapBetween};
  display: inline-block;
  height: 18px;
  > span {
    display: inline-block;
    height: 18px;
    width: 18px;
  }
`;

export type Target = '_blank' | '_self' | '_parent' | '_top';

@Component({
  tag: 'mw-button',
  shadow: false,
})
export class MWButton {
  @Element() hostElement: HTMLStencilElement;
  /**
   * Must be provided for automated testing
   */
  @Prop() testId!: string;
  /**
   * Visually and functionally disable button
   */
  @Prop() disabled?: boolean;
  /**
   * Label to be displayed
   */
  @Prop() label?: string;
  /**
   * Use secondary button style
   */
  @Prop() secondary?: boolean = false;
  /**
   * If provided the button will act as a link
   */
  @Prop() href?: string;
  /**
   * If using href the target prop can be provided
   */
  @Prop() target?: Target = '_self';
  @Event({
    bubbles: true,
    cancelable: false,
    composed: false,
  })
  clickEmitter: EventEmitter<string>;

  hasIconStartSlot: boolean;
  hasIconEndSlot: boolean;
  hasIcon: boolean;
  hasLabel: boolean;

  componentWillLoad() {
    this.hasIconStartSlot = !!this.hostElement.querySelector('[slot="icon-start"]');
    this.hasIconEndSlot = !!this.hostElement.querySelector('[slot="icon-end"]');
    this.hasIcon = this.hasIconStartSlot || this.hasIconEndSlot;
    this.hasLabel = !!this.label;
  }

  handleClick = (event: PointerEvent) => {
    (event.target as HTMLButtonElement).blur();
    // @ts-ignore
    (event.path[1] as HTMLButtonElement).blur();
    this.clickEmitter.emit('onClick');
  };

  render() {
    if (this.href) {
      return (
        <a href={this.href} target={this.target} class={this.secondary ? secondaryButtonStyles : primaryButtonStyles} test-id={this.testId}>
          {this.hasIconStartSlot && (
            <span class={this.hasLabel ? iconStartStyles : iconStyles}>
              <slot name="icon-start"></slot>
            </span>
          )}
          <span>{this.label}</span>
          {this.hasIconEndSlot && (
            <span class={this.hasLabel ? iconEndStyles : iconStyles}>
              <slot name="icon-end"></slot>
            </span>
          )}
        </a>
      );
    }
    return (
      <button
        disabled={this.disabled}
        onClick={this.handleClick}
        class={`${this.secondary ? secondaryButtonStyles : primaryButtonStyles} ${this.hasIcon && flexStyles} ${!this.hasLabel && iconButtonStyles}`}
        test-id={this.testId}
        type="button"
      >
        {this.hasIconStartSlot && (
          <span class={this.hasLabel ? iconStartStyles : iconStyles}>
            <slot name="icon-start"></slot>
          </span>
        )}
        <span>{this.label}</span>
        {this.hasIconEndSlot && (
          <span class={this.hasLabel ? iconEndStyles : iconStyles}>
            <slot name="icon-end"></slot>
          </span>
        )}
      </button>
    );
  }
}
