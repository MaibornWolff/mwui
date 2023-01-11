import { Component, Host, Prop, h } from '@stencil/core';

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

  render() {
    return (
      <Host>
        <mw-popover testId={this.testId}>
          <div slot="anchor"></div>
          <div slot="content" class="menu">
            <slot></slot>
          </div>
        </mw-popover>
      </Host>
    );
  }
}
