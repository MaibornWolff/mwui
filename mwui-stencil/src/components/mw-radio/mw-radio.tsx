import { Component, Element, h, Prop } from "@stencil/core";

@Component({
  tag: "mw-radio",
  styleUrl: "mw-radio.scss",
  shadow: false,
})
export class MwRadio {
  @Element() hostElement: HTMLMwRadioElement | null;
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

  constructor() {
    this.onClick = this.onClick.bind(this);
  }

  private radioGroup: HTMLMwRadioGroupElement | null;

  get radioGroupValue(): any {
    const { radioGroup } = this;

    // for some reason the initial value here is defined but "undefined"
    return radioGroup?.value || radioGroup.getAttribute("value");
  }

  connectedCallback(): void {
    const radioGroup = (this.radioGroup = this.hostElement.closest("mw-radio-group"));
    if (radioGroup) {
      this.setSelection();
      radioGroup.addEventListener("radioChange", this.setSelection);
    }
  }

  disconnectedCallback(): void {
    const { radioGroup } = this;

    if (radioGroup) {
      radioGroup.removeEventListener("radioChange", this.setSelection);
      this.radioGroup = null;
    }
  }

  private setSelection = () => {
    const { radioGroup, radioGroupValue, value } = this;

    if (radioGroup) {
      this.checked = radioGroupValue === value;
    }
  };

  private onClick(event: Event): void {
    event.preventDefault();
    this.checked = !this.checked;
  }

  render() {
    return (
      <div test-id={this.testId} class="mw-radio-container" onClick={this.onClick} aria-checked={`${this.checked}`} aria-hidden={this.disabled ? "true" : null} role="radio">
        <input id="radio-input" type="radio" value={this.value} name={this.name} checked={this.checked} disabled={this.disabled} />
        <span class="mw-radio"></span>
        <label class="mw-radio-label" htmlFor="radio-input">
          {this.label} {this.checked}
        </label>
      </div>
    );
  }
}
