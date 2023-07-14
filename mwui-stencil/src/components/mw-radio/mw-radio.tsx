import { Component, Element, h, Host, Prop } from "@stencil/core";
import { Position } from "../../shared/models/enums/position.enum";
let radioIds = 0;

@Component({
  tag: "mw-radio",
  styleUrl: "mw-radio.scss",
  shadow: false,
})
export class MwRadio {
  private radioId = `radio-input-${radioIds++}`;

  @Element() hostElement: HTMLMwRadioElement;
  /**
   * Visually and functionally disable radio button
   */
  @Prop() disabled?: boolean;
  /**
   * Whether the radio button is checked
   */
  @Prop({ mutable: true, reflect: true }) checked?: boolean = false;
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
  /**
   * Dictates on which side of checkbox the label is placed
   */
  @Prop() labelPosition?: Position = "right";

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

  private setSelection = (): void => {
    const { radioGroup, radioGroupValue, value } = this;

    if (radioGroup) {
      this.checked = radioGroupValue === value;
    }
  };

  private onClick(event: Event): void {
    event.preventDefault();
    if (!this.disabled) {
      this.checked = !this.checked;
    }
  }

  private JSXLabel = (
    <label class={`mw-radio-label ${this.disabled ? "disabled" : "enabled"}`} htmlFor={this.radioId}>
      {this.label}
    </label>
  );

  render() {
    return (
      <Host
        test-id={this.testId}
        onClick={this.onClick}
        class={`mw-radio-container ${this.disabled ? "disabled" : "enabled"}`}
        aria-checked={`${this.checked}`}
        aria-hidden={this.disabled ? "true" : null}
        role="radio"
      >
        {this.label && this.labelPosition === "left" && this.JSXLabel}
        <input id={this.radioId} type="radio" value={this.value} name={this.name} checked={this.checked} disabled={this.disabled} />
        <span class="mw-radio-outer">
          <span class="mw-radio"></span>
        </span>
        {this.label && this.labelPosition === "right" && this.JSXLabel}
      </Host>
    );
  }
}
