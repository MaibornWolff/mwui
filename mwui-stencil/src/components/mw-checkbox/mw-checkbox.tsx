import { Component, Event, EventEmitter, h, Host, Prop } from "@stencil/core";
import { Position } from "../../shared/models/enums/position.enum";
let checkboxIds = 0;

@Component({
  tag: "mw-checkbox",
  styleUrl: "mw-checkbox.scss",
  assetsDirs: ["./../assets"],
  shadow: false,
})
export class MwCheckbox {
  private checkboxId = `checkbox-input-${checkboxIds++}`;
  /**
   * Provide unique identifier for automated testing
   */
  @Prop() testId: string;
  /**
   * Value of checkbox input
   */
  @Prop({ mutable: false, reflect: true }) value?: string;
  /**
   * Name of checkbox input
   */
  @Prop() name?: string;
  /**
   * Whether input is checked
   */
  @Prop({ mutable: true, reflect: true }) checked?: boolean = false;
  /**
   * Whether input is set to indeterminate (overwrites check to 'false')
   */
  @Prop({ mutable: true, reflect: true }) indeterminate?: boolean = false;
  /**
   * Whether input is disabled
   */
  @Prop() disabled?: boolean = false;
  /**
   * Label to be displayed
   */
  @Prop() label?: string;
  /**
   * Dictates on which side of checkbox the label is placed
   */
  @Prop() labelPosition?: Position = "right";
  /**
   * MwCheckbox emits an event when checkbox checked state is changed
   */
  @Event({
    bubbles: true,
    cancelable: false,
    composed: false,
  })
  emitter: EventEmitter;

  private handleCheck = (event: Event): void => {
    event.preventDefault();
    if (!this.disabled) {
      this.checked = !this.checked;
      if (this.indeterminate) this.indeterminate = false;
      this.emitter.emit();
    }
  };

  componentWillLoad(): void {
    if (this.indeterminate) this.checked = false;
  }

  private JSXLabel = (
    <label class={`mw-checkbox-label ${this.disabled ? "disabled" : "enabled"}`} htmlFor={this.checkboxId}>
      {this.label}
    </label>
  );

  render() {
    return (
      <Host
        test-id={this.testId}
        class={`mw-checkbox-container ${this.disabled ? "disabled" : "enabled"} ${this.labelPosition}`}
        onClick={this.handleCheck}
        aria-checked={`${this.checked}`}
        aria-hidden={this.disabled ? "true" : null}
        role="checkbox"
      >
        {this.label && this.labelPosition === "left" && this.JSXLabel}
        <input id={this.checkboxId} type="checkbox" checked={this.checked} value={this.value} name={this.name} />
        <span class="mw-checkbox-outer">
          <span class={`mw-checkbox ${this.checked || this.indeterminate ? "selected" : "unselected"} ${this.disabled ? "disabled" : "enabled"}`}>
            <mw-icon
              class={`mw-checkmark ${this.checked || this.indeterminate ? "selected" : "unselected"}`}
              color={`var(--mw-component-controls-color-fg-default)`}
              icon={this.indeterminate ? "check_indeterminate_small" : "check"}
              size="small"
            ></mw-icon>
          </span>
        </span>
        {this.label && this.labelPosition === "right" && this.JSXLabel}
      </Host>
    );
  }
}
