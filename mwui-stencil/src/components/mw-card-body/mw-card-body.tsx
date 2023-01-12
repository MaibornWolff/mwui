import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mw-card-body',
  styleUrl: 'mw-card-body.css',
  shadow: true,
})
export class MwCardBody {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
