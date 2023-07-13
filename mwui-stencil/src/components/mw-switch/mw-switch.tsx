import { Component, Event, EventEmitter, Prop, h } from "@stencil/core";
import { Position } from "../../shared/models/enums/position.enum";
let switchIds = 0;

@Component({
  tag: "mw-switch",
  styleUrl: "mw-switch.scss",
  shadow: true,
})
export class MwSwitch {
  private switchId = `checkbox-input-${switchIds++}`;
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
  @Prop() labelPosition?: Position = "right";
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

  private JSXLabel = (
    <label htmlFor={this.switchId}>
      <span class={`label ${this.disabled && "disabled"}`}>{this.label}</span>
      <span class={`label ${this.disabled && "disabled"}`}>{this.checked ? this.on : this.off}</span>
    </label>
  );

  render() {
    return (
      <div test-id={this.testId} class="mw-switch-container" onClick={this.toggleSwitch} aria-checked={`${this.checked}`} aria-hidden={this.disabled ? "true" : null} role="switch">
        {(this.hasLabel || this.hasOnOffLabel) && this.labelPosition === "left" && this.JSXLabel}
        <span class="switch">
          <input id={this.switchId} disabled={this.disabled} type="checkbox" onInput={this.toggleSwitch} checked={this.checked} name={this.name} />
          <span class="slider round"></span>
        </span>
        {(this.hasLabel || this.hasOnOffLabel) && this.labelPosition === "right" && this.JSXLabel}
      </div>
    );
  }
}
