import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mw-card',
  styleUrl: 'mw-card.css',
  shadow: true,
})
export class MwCard {
  render() {
    return (
      <Host>
        <div class="card">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
