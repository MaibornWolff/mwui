import { Component, Event, EventEmitter, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "mw-switch",
  styleUrl: "mw-switch.css",
  shadow: true,
})
export class MwSwitch {
  private checkbox: HTMLInputElement;
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
   * Label to be shown when switch state is checked. Overrides label prop
   */
  @Prop() on?: string;
  /**
   * Label to be shown when switch state is unchecked. Overrides label prop
   */
  @Prop() off?: string;
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

  render() {
    return (
      <Host>
        <label test-id={this.testId} class="switch">
          <input disabled={this.disabled} type="checkbox" onInput={this.toggleSwitch} checked={this.checked} />
          <span class="slider round"></span>
        </label>
        {this.hasLabel && <span class="label">{this.label}</span>}
        {this.hasOnOffLabel && <span class="label">{this.checked ? this.on : this.off}</span>}
      </Host>
    );
  }
}
