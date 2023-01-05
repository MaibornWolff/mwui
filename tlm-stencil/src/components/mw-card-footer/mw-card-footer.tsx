
import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mw-card-footer',
  styleUrl: 'mw-card-footer.css',
  shadow: true,
})
export class MwCardFooter {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
