import { Component, Element, Event, EventEmitter, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
import { getFontWeightValue } from '../../utils/utils';
import { HTMLStencilElement } from '@stencil/core/internal';
import {
  mwComponentButtonFilledColorBgDefault,
  mwComponentButtonBorderWidthPrimaryTextDefault,
  mwComponentButtonFilledColorFgDefault,
  mwComponentButtonFilledColorBgHover,
  mwComponentButtonFilledColorFgHover,
  mwComponentButtonFilledColorBgPressed,
  mwComponentButtonFilledColorFgFocused,
  mwComponentButtonFilledColorBgDisabled,
  mwComponentButtonFilledColorFgDisabled,
  mwComponentButtonFilledColorFgPressed,
  mwComponentButtonFilledColorBgFocused,
  mwComponentButtonBorderWidthSecondaryDefault,
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
  mwComponentButtonLabelMediumFontFamily,
  mwComponentButtonLabelMediumFontWeight,
  mwComponentButtonLabelMediumLineHeight,
  mwComponentButtonLabelMediumFontSize,
  mwComponentButtonMdPaddingLr,
  mwComponentButtonMdPaddingTb,
  mwComponentButtonMdGapBetween,
  mwComponentButtonMdPaddingIcon,
  mwComponentSizeButtonFilledOutlineMinWidth,
  mwComponentButtonBorderRadiusDefault,
  mwComponentButtonBorderWidthSecondaryFocused,
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
  padding: ${mwComponentButtonMdPaddingTb} ${mwComponentButtonMdPaddingLr};
  font-family: ${mwComponentButtonLabelMediumFontFamily};
  letter-spacing: ${letterSpacing}em;
  line-height: ${mwComponentButtonLabelMediumLineHeight}px;
  font-weight: ${getFontWeightValue(mwComponentButtonLabelMediumFontWeight)};
  font-size: ${mwComponentButtonLabelMediumFontSize}px;
  border-radius: ${mwComponentButtonBorderRadiusDefault}px;
  min-width: ${mwComponentSizeButtonFilledOutlineMinWidth};
`;

const filledButtonStyles = css`
  ${base};
  border: ${mwComponentButtonBorderWidthPrimaryTextDefault};
  color: ${mwComponentButtonFilledColorFgDefault};
  background-color: ${mwComponentButtonFilledColorBgDefault};
  &:hover {
    background-color: ${mwComponentButtonFilledColorBgHover};
    color: ${mwComponentButtonFilledColorFgHover};
  }
  &:focus {
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

const secondaryButtonStyles = css`
  ${base};
  border: 0;
  outline: ${mwComponentButtonBorderWidthSecondaryDefault}px solid;
  outline-offset: ${-2 * mwComponentButtonBorderWidthSecondaryDefault}px;
  color: ${mwComponentButtonOutlineGhostColorFgDefault};
  background-color: ${mwComponentButtonOutlineGhostColorBgDefault};
  outline-color: ${mwComponentButtonOutlineGhostColorBorderDefault};
  &:hover {
    outline-color: ${mwComponentButtonOutlineGhostColorBorderHover};
    color: ${mwComponentButtonOutlineGhostColorFgHover};
  }
  &:focus {
    outline-color: ${mwComponentButtonOutlineGhostColorBorderFocused};
    outline: ${mwComponentButtonBorderWidthSecondaryFocused}px solid;
    outline-offset: ${-2 * mwComponentButtonBorderWidthSecondaryFocused}px;
    color: ${mwComponentButtonOutlineGhostColorFgFocused};
  }
  &:active {
    outline-color: ${mwComponentButtonOutlineGhostColorBorderPressed};
    color: ${mwComponentButtonOutlineGhostColorFgPressed};
  }
  &:disabled {
    outline-color: ${mwComponentButtonOutlineGhostColorBorderDisabled};
    color: ${mwComponentButtonOutlineGhostColorFgDisabled};
  }
`;

const iconButtonStyles = css`
  padding: ${mwComponentButtonMdPaddingIcon};
  min-width: 0px;
`;

const flexStyles = css`
  display: flex;
  align-items: center;
`;

const iconStartStyles = css`
  margin-right: ${mwComponentButtonMdGapBetween};
`;

const iconEndStyles = css`
  margin-left: ${mwComponentButtonMdGapBetween};
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
        <a href={this.href} target={this.target} class={this.secondary ? secondaryButtonStyles : filledButtonStyles} test-id={this.testId}>
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
        class={`${this.secondary ? secondaryButtonStyles : filledButtonStyles} ${this.hasIcon && flexStyles} ${!this.hasLabel && iconButtonStyles}`}
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
