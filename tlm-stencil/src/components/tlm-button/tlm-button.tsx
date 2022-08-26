import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
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
  fontSize16,
  xs,
} from '../../../../tlm-token-farm/dist/js/global';

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
  &:active {
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
  @Prop() testId!: string;
  @Prop() disabled?: boolean;
  @Event({
    bubbles: true,
    cancelable: false,
    composed: false,
  })
  clickEmitter: EventEmitter<string>;

  handleClick = () => {
    this.clickEmitter.emit('onClick');
  };

  render() {
    return (
      <button disabled={this.disabled} onClick={this.handleClick} class={buttonStyles} test-id={this.testId} type="button">
        <slot></slot>
      </button>
    );
  }
}
