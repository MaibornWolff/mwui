import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mw-checkbox',
  styleUrl: 'mw-checkbox.css',
  assetsDirs: ['./../assets'],
  shadow: true,
})
export class MwCheckbox {
  /**
   * Must be provided for automated testing
   */
  @Prop() testId!: string;
  /**
   * Value of checkbox input
   */
  @Prop() value?: string;
  /**
   * Name of checkbox input
   */
  @Prop() name?: string;
  /**
   * Whether input is checked
   */
  @Prop({ mutable: true }) checked?: boolean = false;
  /**
   * Whether input is disabled
   */
  @Prop() disabled?: boolean = false;
  /**
   * Label to be displayed
   */
  @Prop() label?: string;

  handleCheck = () => {
    if (!this.disabled) {
      this.checked = !this.checked;
    }
  };

  render() {
    return (
      <div test-id={this.testId} class="mw-checkbox-container" onClick={this.handleCheck}>
        <input type="checkbox" checked={this.checked} value={this.value} name={this.name} />
        <span class={`mw-checkbox ${this.checked ? 'selected' : 'unselected'} ${this.disabled ? 'disabled' : 'enabled'}`}>
          <mw-icon class={`mw-checkmark ${this.checked ? 'selected' : 'unselected'}`} fill={`var(--mw-component-controls-color-fg-default`} icon="check" size="medium"></mw-icon>
        </span>
        <span class="mw-checkbox-label">{this.label}</span>
      </div>
    );
  }
}
