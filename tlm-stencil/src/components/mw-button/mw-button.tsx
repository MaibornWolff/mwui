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
  mwComponentButtonLabelSmFontFamily,
  mwComponentButtonLabelSmFontWeight,
  mwComponentButtonLabelSmLineHeight,
  mwComponentButtonLabelSmFontSize,
  mwComponentButtonSmPaddingX,
  mwComponentButtonSmPaddingY,
  mwComponentButtonSmGapBetween,
  mwComponentButtonSmPaddingIcon,
  mwComponentButtonLabelMdFontFamily,
  mwComponentButtonLabelMdFontWeight,
  mwComponentButtonLabelMdLineHeight,
  mwComponentButtonLabelMdFontSize,
  mwComponentButtonMdPaddingX,
  mwComponentButtonMdPaddingY,
  mwComponentButtonMdGapBetween,
  mwComponentButtonMdPaddingIcon,
  mwComponentButtonLabelLgFontFamily,
  mwComponentButtonLabelLgFontWeight,
  mwComponentButtonLabelLgLineHeight,
  mwComponentButtonLabelLgFontSize,
  mwComponentButtonLgPaddingY,
  mwComponentButtonLgPaddingX,
  mwComponentButtonLgGapBetween,
  mwComponentButtonLgPaddingIcon,
  mwComponentButtonLabelXlFontFamily,
  mwComponentButtonLabelXlFontWeight,
  mwComponentButtonLabelXlLineHeight,
  mwComponentButtonLabelXlFontSize,
  mwComponentButtonXlPaddingX,
  mwComponentButtonXlPaddingY,
  mwComponentButtonXlGapBetween,
  mwComponentButtonXlPaddingIcon,
  mwComponentSizeButtonFilledOutlineMinW,
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
  min-width: ${mwComponentSizeButtonFilledOutlineMinW};

  &.small {
    padding: ${mwComponentButtonSmPaddingY} ${mwComponentButtonSmPaddingX};
    font-family: ${mwComponentButtonLabelSmFontFamily};
    line-height: ${mwComponentButtonLabelSmLineHeight}px;
    font-weight: ${getFontWeightValue(mwComponentButtonLabelSmFontWeight)};
    font-size: ${mwComponentButtonLabelSmFontSize}px;
  }

  &.medium {
    padding: ${mwComponentButtonMdPaddingY} ${mwComponentButtonMdPaddingX};
    font-family: ${mwComponentButtonLabelMdFontFamily};
    line-height: ${mwComponentButtonLabelMdLineHeight}px;
    font-weight: ${getFontWeightValue(mwComponentButtonLabelMdFontWeight)};
    font-size: ${mwComponentButtonLabelMdFontSize}px;
  }

  &.large {
    padding: ${mwComponentButtonLgPaddingY} ${mwComponentButtonLgPaddingX};
    font-family: ${mwComponentButtonLabelLgFontFamily};
    line-height: ${mwComponentButtonLabelLgLineHeight}px;
    font-weight: ${getFontWeightValue(mwComponentButtonLabelLgFontWeight)};
    font-size: ${mwComponentButtonLabelLgFontSize}px;
  }

  &.x-large {
    padding: ${mwComponentButtonXlPaddingY} ${mwComponentButtonXlPaddingX};
    font-family: ${mwComponentButtonLabelXlFontFamily};
    line-height: ${mwComponentButtonLabelXlLineHeight}px;
    font-weight: ${getFontWeightValue(mwComponentButtonLabelXlFontWeight)};
    font-size: ${mwComponentButtonLabelXlFontSize}px;
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
    box-shadow: inset 0 0 0 ${mwComponentButtonBorderWidthFilledFocused}px ${mwComponentButtonFilledColorOutlineFocused},
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
  box-shadow: inset 0 0 0 ${mwComponentButtonBorderWidthOutlineDefault}px ${mwComponentButtonOutlineGhostColorBorderDefault},
  color: ${mwComponentButtonOutlineGhostColorFgDefault};
  background-color: ${mwComponentButtonOutlineGhostColorBgDefault};
  &:hover {
    box-shadow: inset 0 0 0 ${mwComponentButtonBorderWidthOutlineDefault}px ${mwComponentButtonOutlineGhostColorBorderHover},
    color: ${mwComponentButtonOutlineGhostColorFgHover};
  }
  &:focus {
    box-shadow: inset 0 0 0 ${mwComponentButtonBorderWidthOutlineFocused}px ${mwComponentButtonOutlineGhostColorBorderFocused},
    color: ${mwComponentButtonOutlineGhostColorFgFocused};
  }
  &:active {
    box-shadow: inset 0 0 0 ${mwComponentButtonBorderWidthOutlineDefault}px ${mwComponentButtonOutlineGhostColorBorderPressed},
    color: ${mwComponentButtonOutlineGhostColorFgPressed};
  }
  &:disabled {
    box-shadow: inset 0 0 0 ${mwComponentButtonBorderWidthOutlineDefault}px ${mwComponentButtonOutlineGhostColorBorderDisabled},
    color: ${mwComponentButtonOutlineGhostColorFgDisabled};
  }
`;

const ghostButtonStyles = css`
  ${base};
  outline: none;
  box-shadow: none;
  border: none;
  color: ${mwComponentButtonOutlineGhostColorFgDefault};
  background-color: ${mwComponentButtonOutlineGhostColorBgDefault};
  &:hover {
    color: ${mwComponentButtonOutlineGhostColorFgHover};
  }
  &:focus {
    box-shadow: inset 0 0 0 ${mwComponentButtonBorderWidthOutlineFocused}px ${mwComponentButtonOutlineGhostColorBorderFocused},
    color: ${mwComponentButtonOutlineGhostColorFgFocused};
  }
  &:active {
    color: ${mwComponentButtonOutlineGhostColorFgPressed};
    box-shadow: none;
  }
  &:disabled {
    color: ${mwComponentButtonOutlineGhostColorFgDisabled};
    box-shadow: none;
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
  clickEmitter: EventEmitter;

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
    this.clickEmitter.emit();
  };

  render() {
    if (this.href) {
      return (
        <a href={this.href} target={this.target} class={`${getButtonVariantStyles(this.variant)} ${this.size}`} test-id={this.testId}>
          {this.hasIconStartSlot && (
            <span class={`${this.size} ${this.hasLabel ? iconStartStyles : ''}`}>
              <slot name="icon-start"></slot>
            </span>
          )}
          <span>{this.label}</span>
          {this.hasIconEndSlot && (
            <span class={`${this.size} ${this.hasLabel ? iconEndStyles : ''}`}>
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
          <span class={`${this.size} ${this.hasLabel ? iconStartStyles : ''}`}>
            <slot name="icon-start"></slot>
          </span>
        )}
        <span>{this.label}</span>
        {this.hasIconEndSlot && (
          <span class={`${this.size} ${this.hasLabel ? iconEndStyles : ''}`}>
            <slot name="icon-end"></slot>
          </span>
        )}
      </button>
    );
  }
}
