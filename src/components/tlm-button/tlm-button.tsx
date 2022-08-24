import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
import {
  buttonButtonFilledDefaultBgColor,
  buttonButtonFilledDefaultBorderRadius,
  buttonButtonFilledDefaultFgColor,
  buttonButtonFilledDisabledBgColor,
  buttonButtonFilledDisabledFgColor,
  buttonButtonFilledFocusedBgColor,
  buttonButtonFilledFocusedFgColor,
  buttonButtonFilledHoverBgColor,
  buttonButtonFilledHoverFgColor,
  buttonButtonFilledPressedBgColor,
  buttonButtonFilledPressedFgColor,
  fontFamiliesDefault,
  fontSize16,
  xs,
} from '../../../token-farm/dist/js/global';

const buttonStyles = css`
  font-family: ${fontFamiliesDefault};
  border: 0;
  padding: ${xs}px;
  color: ${buttonButtonFilledDefaultFgColor};
  font-size: ${fontSize16};
  border-radius: ${buttonButtonFilledDefaultBorderRadius};
  background-color: ${buttonButtonFilledDefaultBgColor};
  &:hover {
    background-color: ${buttonButtonFilledHoverBgColor};
    color: ${buttonButtonFilledHoverFgColor};
  }
  &:focus {
    background-color: ${buttonButtonFilledFocusedBgColor};
    color: ${buttonButtonFilledFocusedFgColor};
  }
  &:pressed {
    background-color: ${buttonButtonFilledPressedBgColor};
    color: ${buttonButtonFilledPressedFgColor};
  }
  &:disabled {
    background-color: ${buttonButtonFilledDisabledBgColor};
    color: ${buttonButtonFilledDisabledFgColor};
  }
`;

@Component({
  tag: 'tlm-button',
  shadow: false,
})
export class TlmButton {
  /**
   * Unique id for each tlm-button.
   */
  @Prop() buttonId!: string;

  render() {
    return (
      <button class={buttonStyles} id={this.buttonId} type="button">
        <slot></slot>
      </button>
    );
  }
}
