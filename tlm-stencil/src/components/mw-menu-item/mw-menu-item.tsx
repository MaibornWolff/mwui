import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mw-menu-item',
  styleUrl: 'mw-menu-item.css',
  shadow: true,
})
export class MwMenuItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
