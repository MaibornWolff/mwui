import { css } from '@emotion/css';
import { Component, Element, h, Prop } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';

const buttonGroupStyles = css`
  display: flex;
  flex-wrap: wrap;
`;

@Component({
  tag: 'tlm-button-group',
  shadow: false,
})
export class TlmButtonGroup {
  @Element() hostElement: HTMLStencilElement;
  @Prop() testId!: string;

  render() {
    return (
      <div class={buttonGroupStyles} test-id={this.testId}>
        <slot></slot>
      </div>
    );
  }
}
