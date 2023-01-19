import { Component, Element, h, Prop } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';

@Component({
  tag: 'mw-radio-button',
  styleUrl: 'mw-radio-button.css',
  shadow: false,
})
export class MwRadioButton {
  @Element() hostElement: HTMLStencilElement;
  /**
   * Visually and functionally disbale radio button
   */
  @Prop() disabled?: boolean;
  /**
   * Whether the radio button is checked
   */
  @Prop({ mutable: true, reflect: true }) checked?: boolean;
  /**
   * Value of the radio button
   */
  @Prop() value: string;
  /**
   * Analog to HTML 'name' attribute used to group radios for unique selection
   */
  @Prop() name: string;
  /**
   * Should be provided for automated testing
   */
  @Prop() testId: string;

  render() {
    return (
      <label test-id={this.testId} class="mw-radio-button-container">
        <input id="radio-input" type="radio" value={this.value} name={this.name} checked={this.checked} disabled={this.disabled} />
        <span class="mw-radio-button"></span>
        <slot></slot>
      </label>
    );
  }
}
