import { Component, Element, Event, EventEmitter, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
import { getFontWeightValue } from '../../utils/utils';
import { HTMLStencilElement } from '@stencil/core/internal';
import {
  mwComponentButtonBorderWidthFilledFocused,
  mwComponentButtonFilledColorBgDefault,
  mwComponentButtonFilledColorOutlineFocused,
  mwComponentButtonBorderWidthFilledDefault,
  mwComponentButtonFilledColorFgDefault,
  mwComponentButtonFilledColorBgHover,
  mwComponentButtonFilledColorFgHover,
  mwComponentButtonFilledColorBgPressed,
  mwComponentButtonFilledColorFgFocused,
  mwComponentButtonFilledColorBgDisabled,
  mwComponentButtonFilledColorFgDisabled,
  mwComponentButtonFilledColorFgPressed,
  mwComponentButtonFilledColorBgFocused,
  mwComponentButtonBorderWidthOutlineDefault,
  mwComponentButtonOutlineGhostColorFgDisabled,
  mwComponentButtonOutlineGhostColorFgFocused,
  mwComponentButtonOutlineGhostColorFgHover,
  mwComponentButtonOutlineGhostColorBgDefault,
  mwComponentButtonOutlineGhostColorFgDefault,
  mwComponentButtonOutlineGhostColorBorderHover,
  mwComponentButtonOutlineGhostColorBorderDisabled,
  mwComponentButtonOutlineGhostColorBorderDefault,
  mwComponentButtonOutlineGhostColorFgPressed,
  mwComponentButtonOutlineGhostColorBorderPressed,
  mwComponentButtonOutlineGhostColorBorderFocused,
  mwComponentButtonLabelSmallFontFamily,
  mwComponentButtonLabelSmallFontWeight,
  mwComponentButtonLabelSmallLineHeight,
  mwComponentButtonLabelSmallFontSize,
  mwComponentButtonSmPaddingLr,
  mwComponentButtonSmPaddingTb,
  mwComponentButtonSmGapBetween,
  mwComponentButtonSmPaddingIcon,
  mwComponentButtonLabelMediumFontFamily,
  mwComponentButtonLabelMediumFontWeight,
  mwComponentButtonLabelMediumLineHeight,
  mwComponentButtonLabelMediumFontSize,
  mwComponentButtonMdPaddingLr,
  mwComponentButtonMdPaddingTb,
  mwComponentButtonMdGapBetween,
  mwComponentButtonMdPaddingIcon,
  mwComponentButtonLabelLargeFontFamily,
  mwComponentButtonLabelLargeFontWeight,
  mwComponentButtonLabelLargeLineHeight,
  mwComponentButtonLabelLargeFontSize,
  mwComponentButtonLgPaddingLr,
  mwComponentButtonLgPaddingTb,
  mwComponentButtonLgGapBetween,
  mwComponentButtonLgPaddingIcon,
  mwComponentButtonLabelXlargeFontFamily,
  mwComponentButtonLabelXlargeFontWeight,
  mwComponentButtonLabelXlargeLineHeight,
  mwComponentButtonLabelXlargeFontSize,
  mwComponentButtonXlPaddingLr,
  mwComponentButtonXlPaddingTb,
  mwComponentButtonXlGapBetween,
  mwComponentButtonXlPaddingIcon,
  mwComponentSizeButtonFilledOutlineMinWidth,
  mwComponentButtonBorderRadiusDefault,
  mwComponentButtonBorderWidthOutlineFocused,
  letterSpacingButtons,
} from '../../../../tlm-token-farm/dist/js/MW_component.js';

// figma exports percentage value instead of em
// workaround to convert it to float
const letterSpacing = Number(letterSpacingButtons.replace('%', '').trim()) / 100;

const base = css`
  appearance: none;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  letter-spacing: ${letterSpacing}em;
  border-top-left-radius: ${mwComponentButtonBorderRadiusDefault}px;
  border-top-right-radius: ${mwComponentButtonBorderRadiusDefault}px;
  border-bottom-left-radius: ${mwComponentButtonBorderRadiusDefault}px;
  border-bottom-right-radius: ${mwComponentButtonBorderRadiusDefault}px;
  min-width: ${mwComponentSizeButtonFilledOutlineMinWidth};

  &.small {
    padding: ${mwComponentButtonSmPaddingTb} ${mwComponentButtonSmPaddingLr};
    font-family: ${mwComponentButtonLabelSmallFontFamily};
    line-height: ${mwComponentButtonLabelSmallLineHeight}px;
    font-weight: ${getFontWeightValue(mwComponentButtonLabelSmallFontWeight)};
    font-size: ${mwComponentButtonLabelSmallFontSize}px;
  }

  &.medium {
    padding: ${mwComponentButtonMdPaddingTb} ${mwComponentButtonMdPaddingLr};
    font-family: ${mwComponentButtonLabelMediumFontFamily};
    line-height: ${mwComponentButtonLabelMediumLineHeight}px;
    font-weight: ${getFontWeightValue(mwComponentButtonLabelMediumFontWeight)};
    font-size: ${mwComponentButtonLabelMediumFontSize}px;
  }

  &.large {
    padding: ${mwComponentButtonLgPaddingTb} ${mwComponentButtonLgPaddingLr};
    font-family: ${mwComponentButtonLabelLargeFontFamily};
    line-height: ${mwComponentButtonLabelLargeLineHeight}px;
    font-weight: ${getFontWeightValue(mwComponentButtonLabelLargeFontWeight)};
    font-size: ${mwComponentButtonLabelLargeFontSize}px;
  }

  &.x-large {
    padding: ${mwComponentButtonXlPaddingTb} ${mwComponentButtonXlPaddingLr};
    font-family: ${mwComponentButtonLabelXlargeFontFamily};
    line-height: ${mwComponentButtonLabelXlargeLineHeight}px;
    font-weight: ${getFontWeightValue(mwComponentButtonLabelXlargeFontWeight)};
    font-size: ${mwComponentButtonLabelXlargeFontSize}px;
  }
`;

const filledButtonStyles = css`
  ${base};
  border: ${mwComponentButtonBorderWidthFilledDefault};
  color: ${mwComponentButtonFilledColorFgDefault};
  background-color: ${mwComponentButtonFilledColorBgDefault};
  &:hover {
    background-color: ${mwComponentButtonFilledColorBgHover};
    color: ${mwComponentButtonFilledColorFgHover};
  }
  &:focus {
    outline-color: ${mwComponentButtonFilledColorOutlineFocused};
    outline: ${mwComponentButtonBorderWidthFilledFocused} solid;
    outline-offset: ${-2 * mwComponentButtonBorderWidthFilledFocused};
    background-color: ${mwComponentButtonFilledColorBgFocused};
    color: ${mwComponentButtonFilledColorFgFocused};
  }
  &:active {
    background-color: ${mwComponentButtonFilledColorBgPressed};
    color: ${mwComponentButtonFilledColorFgPressed};
  }
  &:disabled {
    background-color: ${mwComponentButtonFilledColorBgDisabled};
    color: ${mwComponentButtonFilledColorFgDisabled};
  }
`;

const outlineButtonStyles = css`
  ${base};
  border: 0;
  outline: ${mwComponentButtonBorderWidthOutlineDefault}px solid;
  outline-offset: ${-2 * mwComponentButtonBorderWidthOutlineDefault}px;
  color: ${mwComponentButtonOutlineGhostColorFgDefault};
  background-color: ${mwComponentButtonOutlineGhostColorBgDefault};
  outline-color: ${mwComponentButtonOutlineGhostColorBorderDefault};
  &:hover {
    outline-color: ${mwComponentButtonOutlineGhostColorBorderHover};
    color: ${mwComponentButtonOutlineGhostColorFgHover};
  }
  &:focus {
    outline: ${mwComponentButtonBorderWidthOutlineFocused}px solid;
    outline-color: ${mwComponentButtonOutlineGhostColorBorderFocused};
    outline-offset: ${-2 * mwComponentButtonBorderWidthOutlineFocused}px;
    color: ${mwComponentButtonOutlineGhostColorFgFocused};
  }
  &:active {
    outline: ${mwComponentButtonBorderWidthOutlineDefault}px solid;
    outline-color: ${mwComponentButtonOutlineGhostColorBorderPressed};
    outline-offset: ${-2 * mwComponentButtonBorderWidthOutlineDefault}px;
    color: ${mwComponentButtonOutlineGhostColorFgPressed};
  }
  &:disabled {
    outline-color: ${mwComponentButtonOutlineGhostColorBorderDisabled};
    color: ${mwComponentButtonOutlineGhostColorFgDisabled};
  }
`;

const ghostButtonStyles = css`
  ${base};
  outline: none;
  border: none;
  color: ${mwComponentButtonOutlineGhostColorFgDefault};
  background-color: ${mwComponentButtonOutlineGhostColorBgDefault};
  &:hover {
    color: ${mwComponentButtonOutlineGhostColorFgHover};
  }
  &:focus {
    outline: ${mwComponentButtonBorderWidthOutlineFocused}px solid;
    outline-color: ${mwComponentButtonOutlineGhostColorBorderFocused};
    outline-offset: ${-2 * mwComponentButtonBorderWidthOutlineFocused}px;
    color: ${mwComponentButtonOutlineGhostColorFgFocused};
  }
  &:active {
    color: ${mwComponentButtonOutlineGhostColorFgPressed};
    outline: none;
  }
  &:disabled {
    color: ${mwComponentButtonOutlineGhostColorFgDisabled};
    outline: none;
  }
`;

const iconButtonStyles = css`
  &.small {
    padding: ${mwComponentButtonSmPaddingIcon};
  }
  &.medium {
    padding: ${mwComponentButtonMdPaddingIcon};
  }
  &.large {
    padding: ${mwComponentButtonLgPaddingIcon};
  }
  &.x-large {
    padding: ${mwComponentButtonXlPaddingIcon};
  }
  min-width: 0px;
`;

const flexStyles = css`
  display: flex;
  align-items: center;
`;

const iconStartStyles = css`
  &.small {
    margin-right: ${mwComponentButtonSmGapBetween};
  }
  &.medium {
    margin-right: ${mwComponentButtonMdGapBetween};
  }
  &.large {
    margin-right: ${mwComponentButtonLgGapBetween};
  }
  &.x-large {
    margin-right: ${mwComponentButtonXlGapBetween};
  }
`;

const iconEndStyles = css`
  &.small {
    margin-left: ${mwComponentButtonSmGapBetween};
  }
  &.medium {
    margin-left: ${mwComponentButtonMdGapBetween};
  }
  &.large {
    margin-left: ${mwComponentButtonLgGapBetween};
  }
  &.x-large {
    margin-left: ${mwComponentButtonXlGapBetween};
  }
`;

const getButtonVariantStyles = (variant: ButtonVariant) =>
  ({
    filled: filledButtonStyles,
    outline: outlineButtonStyles,
    ghost: ghostButtonStyles,
  }[variant]);

export type ButtonVariant = 'filled' | 'outline' | 'ghost';

export type ButtonSize = 'small' | 'medium' | 'large' | 'x-large';

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
   * Button variants
   */
  @Prop() variant?: ButtonVariant = 'filled';
  /**
   * Button size
   */
  @Prop() size?: ButtonSize = 'medium';
  /**
   * If provided the button will act as a link
   */
  @Prop() href?: string;
  /**
   * If using href the target prop can be provided
   */
  @Prop() target?: Target = '_self';
  /**
   * 'onClick' event is fired when clicking the button, unless it is used with a `href` prop.
   */
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
        <a href={this.href} target={this.target} class={`${getButtonVariantStyles(this.variant)} ${this.size}`} test-id={this.testId}>
          {this.hasIconStartSlot && (
            <span class={this.hasLabel ? iconStartStyles : ''}>
              <slot name="icon-start"></slot>
            </span>
          )}
          <span>{this.label}</span>
          {this.hasIconEndSlot && (
            <span class={this.hasLabel ? iconEndStyles : ''}>
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
        class={`${getButtonVariantStyles(this.variant)} ${this.hasIcon && flexStyles} ${!this.hasLabel && iconButtonStyles} ${this.size}`}
        test-id={this.testId}
        type="button"
      >
        {this.hasIconStartSlot && (
          <span class={this.hasLabel ? iconStartStyles : ''}>
            <slot name="icon-start"></slot>
          </span>
        )}
        <span>{this.label}</span>
        {this.hasIconEndSlot && (
          <span class={this.hasLabel ? iconEndStyles : ''}>
            <slot name="icon-end"></slot>
          </span>
        )}
      </button>
    );
  }
}
