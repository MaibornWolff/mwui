import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'mw-tab',
  styleUrl: 'mw-tab.css',
  shadow: true,
})
export class MwTab {
  @Prop() selected?: boolean;
  @Prop() icon?: string;
  @Prop() label?: string;
  @Prop() disabled?: boolean;
  render() {
    return (
      <Host>
        <button disabled={this.disabled} class={`mw-tab ${this.icon && this.label ? 'label-with-icon' : ''} ${this.selected ? 'selected' : ''}`}>
          {this.icon && <mw-icon icon={this.icon} size="medium"></mw-icon>}
          {this.label}
        </button>
      </Host>
    );
  }
}
