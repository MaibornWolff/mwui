import { Component, Element, Event, EventEmitter, h, Host, Prop, State, Watch } from "@stencil/core";
import { LayoutDirectionEnum } from "../../shared/models/enums/layout-direction.enum";

@Component({
  tag: "mw-checkbox-group",
  styleUrl: "mw-checkbox-group.scss",
  shadow: true,
})
export class MwCheckboxGroup {
  @Element() host: HTMLMwCheckboxGroupElement;
  /**
   * Event emitted when radioGroup value changes (after radio selection)
   */
  @Event({
    bubbles: true,
    cancelable: false,
    composed: false,
  })
  checkboxChange: EventEmitter<{ value?: Array<string | number> }>;
  /**
   * Current value of the checkbox-group; contains the values of all checked children
   */
  @Prop({ mutable: true }) value?: Array<string | number> = [];
  /**
   * Label of parent checkbox
   */
  @Prop() parentLabel?: string;
  /**
   * Dictates the flex direction of the group
   */
  @Prop() direction?: LayoutDirectionEnum = LayoutDirectionEnum.COLUMN;
  /**
   * Dictates whether group should flex-wrap
   */
  @Prop() wrap?: boolean = false;
  @Watch("value")
  valueChanged(value?: Array<string | number>): void {
    this.checkboxChange.emit({ value });
  }

  @State() checkboxes = [];

  @State() indeterminate: boolean;

  @State() checked: boolean;

  componentWillLoad(): void {
    const checkboxes: Element[] = [];
    for (let i = 0; i < this.host.children.length; i++) {
      if (this.host.children[i].tagName === "MW-CHECKBOX") {
        // TODO: Find better way of getting checked checkboxes
        if (this.host.children[i].getAttribute("checked") === "" || this.host.children[i].getAttribute("checked") === "true") {
          this.value = [...this.value, this.host.children[i].getAttribute("value")];
        }
        checkboxes.push(this.host.children[i]);
      }
    }
    this.checkboxes = checkboxes;
    this.checked = this.value.length >= this.checkboxes.length;
    this.indeterminate = this.value.length > 0 && this.value.length < this.checkboxes.length;
  }

  private onClick = (value: string, disabled: boolean): void => {
    if (!disabled) {
      if (this.value.includes(value)) {
        const index = this.value.indexOf(value);
        this.value.splice(index, 1);
        // Force re-render
        this.value = [...this.value];
        for (const checkbox of this.checkboxes) {
          if (checkbox.value === value) checkbox.setAttribute("checked", "false");
        }
      } else {
        this.value = [...this.value, value];
        for (const checkbox of this.checkboxes) {
          if (checkbox.value === value) checkbox.setAttribute("checked", "true");
        }
      }
      this.checked = this.value.length >= this.checkboxes.length;
      this.indeterminate = this.value.length > 0 && this.value.length < this.checkboxes.length;
    }
  };

  private onParentClick = (): void => {
    let checkboxValues = this.value;
    if (this.checked && !this.indeterminate) {
      for (const checkbox of this.checkboxes) {
        checkbox.setAttribute("checked", "false");
      }
      checkboxValues = [];
      this.checked = false;
    } else {
      for (const checkbox of this.checkboxes) {
        if (!this.value.includes(checkbox.value)) {
          checkbox.setAttribute("checked", "true");
          checkboxValues = [...checkboxValues, checkbox.value];
        }
      }
      this.checked = true;
      this.indeterminate = false;
    }
    this.value = checkboxValues;
  };

  render() {
    return (
      <Host role="checkboxgroup">
        <mw-checkbox label={this.parentLabel} checked={this.checked} indeterminate={this.indeterminate} onClick={this.onParentClick}></mw-checkbox>
        <div class={`mw-checkbox-group ${this.direction} ${this.wrap ? "wrap" : ""}`}>
          {this.checkboxes.map((item, key) => (
            <mw-checkbox
              key={key}
              label={item.label}
              disabled={item.disabled}
              checked={this.value.includes(item.value)}
              value={item.value}
              onClick={(): void => this.onClick(item.value, item.disabled)}
            ></mw-checkbox>
          ))}
        </div>
      </Host>
    );
  }
}
