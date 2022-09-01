import { Component, Element, Event, EventEmitter, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
import {
  buttonButtonFilledDefaultBgColor,
  buttonButtonFilledDefaultBorderRadius,
  buttonButtonFilledDefaultFgColor,
  buttonButtonFilledDisabledBgColor,
  buttonButtonFilledDisabledFgColor,
  buttonButtonFilledHoverBgColor,
  buttonButtonFilledHoverFgColor,
  buttonButtonFilledPressedBgColor,
  buttonButtonFilledPressedFgColor,
  fontFamiliesDefault,
  fontSize14,
  fontWeightsBold,
  l,
  s,
} from '../../../../tlm-token-farm/dist/js/global';
import { getFontStyle, getFontWeightValue } from '../../utils/utils';
import { HTMLStencilElement } from '@stencil/core/internal';

const buttonStyles = css`
  font-family: '${fontFamiliesDefault}';
  border: 0;
  padding: ${s}px ${l}px;
  font-weight: ${getFontWeightValue(fontWeightsBold)};
  font-style: ${getFontStyle(fontWeightsBold)};
  color: ${buttonButtonFilledDefaultFgColor};
  font-size: ${fontSize14}px;
  border-radius: ${buttonButtonFilledDefaultBorderRadius};
  background-color: ${buttonButtonFilledDefaultBgColor};
  &:hover {
    background-color: ${buttonButtonFilledHoverBgColor};
    color: ${buttonButtonFilledHoverFgColor};
  }
  &:active {
    background-color: ${buttonButtonFilledPressedBgColor};
    color: ${buttonButtonFilledPressedFgColor};
  }
  &:disabled {
    background-color: ${buttonButtonFilledDisabledBgColor};
    color: ${buttonButtonFilledDisabledFgColor};
  }
`;

// TODO: clarify spacing with tokens
const iconStartStyles = css`
  margin-right: ${s}px;
`;

const iconEndStyles = css`
  margin-left: ${s}px;
`;

@Component({
  tag: 'tlm-button',
  shadow: false,
})
export class TlmButton {
  @Element() hostElement: HTMLStencilElement;
  @Prop() testId!: string;
  @Prop() disabled?: boolean;
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
      <button disabled={this.disabled} onClick={this.handleClick} class={buttonStyles} test-id={this.testId} type="button">
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
