import { Component, Host, Prop, h } from '@stencil/core';
import { PopoverPlacement } from '../mw-popover/mw-popover';

@Component({
  tag: 'mw-menu',
  styleUrl: 'mw-menu.css',
  shadow: true,
})
export class MwMenu {
  /**
   * Must be provided for automated testing
   */
  @Prop() testId!: string;
  /**
   * Placement relative to anchor element
   */
  @Prop() placement: PopoverPlacement = 'bottom-end';
  /**
   * Whether the menu is open
   */
  @Prop({ mutable: true, reflect: true }) open: boolean = false;

  render() {
    return (
      <Host>
        <mw-popover testId={this.testId} placement={this.placement} open={this.open} no-padding>
          <div slot="anchor">
            <slot name="anchor"></slot>
          </div>
          <div slot="content" class="menu">
            <slot></slot>
          </div>
        </mw-popover>
      </Host>
    );
  }
}
