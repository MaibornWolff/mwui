import { Component, h, Element, Host, Prop, Watch } from "@stencil/core";

@Component({
  tag: "mw-radio-group",
  styleUrl: "mw-radio-group.scss",
})
export class MwRadioGroup {
  @Element() host: HTMLMwRadioGroupElement;

  /**
   * current value of the radio-group
   */
  @Prop({ mutable: true }) value?: unknown | null;
  @Watch("value")
  valueChanged(value: unknown | undefined): void {
    // this.setRadioTabindex(value);
    console.log("VALUE CHANGED", value);
    // this.ionChange.emit({ value });
  }

  get radios(): HTMLMwRadioElement[] {
    return Array.from(this.host.querySelectorAll("mw-radio"));
  }

  private onClick = (): void => {
    return;
    //console.log("CLICK");
    //ev.preventDefault();
    //
    //const selectedRadio = ev.target && (ev.target as HTMLElement).closest("mw-radio");
    //console.log(selectedRadio);
    //if (selectedRadio) {
    //  const currentValue = this.value;
    //  const newValue = selectedRadio.value;
    //  if (newValue !== currentValue) {
    //    this.value = newValue;
    //  }
    //}
  };

  render() {
    return <Host role="radiogroup" onClick={this.onClick}></Host>;
  }
}
