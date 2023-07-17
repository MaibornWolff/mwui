import { Component, Host, h, Prop, Element, Event, EventEmitter, Watch } from "@stencil/core";

type Direction = "row" | "column" | "row-reverse" | "column-reverse";

@Component({
  tag: "mw-checkbox-group",
  styleUrl: "mw-checkbox-group.css",
  shadow: true,
})
export class MwCheckboxGroup {
  @Element() host: HTMLMwCheckboxGroupElement;
  /**
   * Current value of the checkbox-group
   */
  /**
   * Event emitted when radioGroup value changes (after radio selection)
   */
  @Event({
    bubbles: true,
    cancelable: false,
    composed: false,
  })
  checkboxChange: EventEmitter<{ value?: Array<string | number> }>;
  @Prop({ mutable: true }) value?: Array<string | number>;
  /**
   * Dictates the flex direction of the group
   */
  @Prop() direction?: Direction = "column";
  /**
   * Dictates whether group should flex-wrap
   */
  @Prop() wrap?: boolean = false;
  @Watch("value")
  valueChanged(value?: Array<string | number>): void {
    this.checkboxChange.emit({ value });
  }

  get checkboxes(): Element[] {
    const checkboxes: Element[] = [];
    for (let i = 0; i < this.host.children.length; i++) {
      if (this.host.children[i].className === "mw-checkbox") checkboxes.push(this.host.children[i]);
    }
    return checkboxes;
  }

  render() {
    return <Host class={`mw-checkbox-group ${this.direction} ${this.wrap ? "wrap" : ""}`} role="checkboxgroup"></Host>;
  }
}
