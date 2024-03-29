import { Component, Event, EventEmitter, h, Host, Prop } from "@stencil/core";
import { PositionEnum } from "../../shared/models/enums/position.enum";
import { v4 as uuid } from "uuid";

@Component({
  tag: "mw-switch",
  styleUrl: "mw-switch.scss",
  shadow: false,
})
export class MwSwitch {
  private switchId = uuid();
  /**
   * Provide unique identifier for automated testing
   */
  @Prop() testId: string;
  /**
   * Visually and functionally disable switch
   */
  @Prop() disabled?: boolean;
  /**
   * Fixed label to be displayed next to the toggle switch
   */
  @Prop() label?: string;
  /**
   * Dictates on which side of checkbox the label is placed
   */
  @Prop() labelPosition?: PositionEnum = PositionEnum.RIGHT;
  /**
   * Label to be shown when switch state is checked. Overrides label prop
   */
  @Prop() on?: string;
  /**
   * Label to be shown when switch state is unchecked. Overrides label prop
   */
  @Prop() off?: string;
  /**
   * Name of switch input
   */
  @Prop() name?: string;
  /**
   * Switch state
   */
  @Prop({ mutable: true }) checked = false;

  /**
   * MwSwitch emits an event when switch checked state changes
   */
  @Event({
    bubbles: true,
    composed: true,
  })
  emitter: EventEmitter<boolean>;

  private toggleSwitch = (event: Event): void => {
    if (!this.disabled) {
      (event.target as HTMLInputElement).blur();
      this.checked = !this.checked;
      this.emitter.emit(this.checked);
    }
  };

  private hasLabel: boolean;
  private hasOnOffLabel: boolean;

  componentWillLoad(): void {
    this.hasLabel = !!this.label;
    this.hasOnOffLabel = !!this.on && !!this.off;
  }

  private JSXLabel = (label: string) => {
    return (
      <label htmlFor={this.switchId}>
        <span class={`mw-switch-label ${this.disabled ? "disabled" : "enabled"}`}>{label}</span>
      </label>
    );
  };

  render() {
    return (
      <Host
        test-id={this.testId}
        class={`mw-switch-container ${this.disabled ? "disabled" : "enabled"} ${this.labelPosition}`}
        onClick={this.toggleSwitch}
        aria-checked={`${this.checked}`}
        aria-hidden={this.disabled ? "true" : null}
        role="switch"
      >
        {(this.hasLabel || this.hasOnOffLabel) && this.labelPosition === "left" && this.JSXLabel(this.hasOnOffLabel ? (this.checked ? this.on : this.off) : this.label)}
        <span class="switch">
          <input id={this.switchId} disabled={this.disabled} type="checkbox" onInput={this.toggleSwitch} checked={this.checked} name={this.name} />
          <span class="slider round"></span>
        </span>
        {(this.hasLabel || this.hasOnOffLabel) && this.labelPosition === "right" && this.JSXLabel(this.hasOnOffLabel ? (this.checked ? this.on : this.off) : this.label)}
      </Host>
    );
  }
}
