import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'mw-checkbox',
  styleUrl: 'mw-checkbox.css',
  assetsDirs: ['./../assets'],
  shadow: true,
})
export class MwCheckbox {
  /**
   * Provide unique identifier for automated testing
   */
  @Prop() testId: string;
  /**
   * Value of checkbox input
   */
  @Prop({ mutable: true, reflect: true }) value?: string;
  /**
   * Name of checkbox input
   */
  @Prop() name?: string;
  /**
   * Whether input is checked
   */
  @Prop({ mutable: true, reflect: true }) checked?: boolean = false;
  /**
   * Whether input is disabled
   */
  @Prop() disabled?: boolean = false;
  /**
   * Label to be displayed
   */
  @Prop() label?: string;

  @Event({
    bubbles: true,
    cancelable: false,
    composed: false,
  })
  emitter: EventEmitter;

  handleCheck = () => {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.emitter.emit();
    }
  };

  render() {
    return (
      <div test-id={this.testId} class="mw-checkbox-container" onClick={this.handleCheck}>
        <input type="checkbox" checked={this.checked} value={this.value} name={this.name} />
        <span class={`mw-checkbox ${this.checked ? 'selected' : 'unselected'} ${this.disabled ? 'disabled' : 'enabled'}`}>
          <mw-icon
            class={`mw-checkmark ${this.checked ? 'selected' : 'unselected'}`}
            color={`var(--mw-component-controls-color-fg-default)`}
            icon="check"
            weight={600}
            size="medium"
          ></mw-icon>
        </span>
        <span class="mw-checkbox-label">{this.label}</span>
      </div>
    );
  }
}
