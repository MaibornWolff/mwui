import { Component, h, Element, Host, Prop, Watch, EventEmitter, Event } from "@stencil/core";

type Direction = "row" | "column" | "row-reverse" | "column-reverse";

@Component({
  tag: "mw-radio-group",
  styleUrl: "mw-radio-group.scss",
})
export class MwRadioGroup {
  @Element() host: HTMLMwRadioGroupElement;

  /**
   * Event emitted when radioGroup value changes (after radio selection)
   */
  @Event({
    bubbles: true,
    cancelable: false,
    composed: false,
  })
  radioChange: EventEmitter<{ value?: string | number }>;
  /**
   * Current value of the radio-group
   */
  @Prop({ mutable: true }) value?: string | number;
  /**
   * Dictates the flex direction of the group
   */
  @Prop() direction?: Direction = "column";
  /**
   * Dictates whether group should flex-wrap
   */
  @Prop() wrap?: boolean = false;
  @Watch("value")
  valueChanged(value?: string | number): void {
    this.radioChange.emit({ value });
  }

  get radios(): HTMLMwRadioElement[] {
    return Array.from(this.host.querySelectorAll("mw-radio"));
  }

  private onClick = (event: Event): void => {
    event.preventDefault();
    const selectedRadio = event.target && (event.target as HTMLElement).closest("mw-radio");

    if (selectedRadio && !selectedRadio.disabled) {
      const currentValue = this.value;
      const newValue = selectedRadio.value;
      if (newValue !== currentValue) {
        this.value = newValue;
      }
    }
  };

  render() {
    return <Host class={`mw-radio-group ${this.direction} ${this.wrap ? "wrap" : ""}`} role="radiogroup" onClick={this.onClick}></Host>;
  }
}
