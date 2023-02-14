import { Component, Element, h, Prop } from "@stencil/core";

@Component({
  tag: "mw-radio",
  styleUrl: "mw-radio.scss",
  shadow: false,
})
export class MwRadio {
  @Element() hostElement: HTMLMwRadioElement;
  /**
   * Visually and functionally disbale radio button
   */
  @Prop() disabled?: boolean;
  /**
   * Whether the radio button is checked
   */
  @Prop({ mutable: false, reflect: true }) checked?: boolean;
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
  /**
   * Label to be displayed
   */
  @Prop() label?: string;

  render() {
    return (
      <label test-id={this.testId} class="mw-radio-container">
        <input id="radio-input" type="radio" value={this.value} name={this.name} checked={this.checked} disabled={this.disabled} />
        <span class="mw-radio"></span>
        <span class="mw-radio-label">{this.label}</span>
      </label>
    );
  }
}
