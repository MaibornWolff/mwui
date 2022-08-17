import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'tlm-button',
  styleUrl: 'tlm-button.css',
  shadow: true,
})
export class TlmButton {
  @Prop() buttonId!: string;
  /**
   * Unique id for each tlm-button.
   */

  render() {
    return (
      <button id={this.buttonId} type="button">
        <slot></slot>
      </button>
    );
  }

}
