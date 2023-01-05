import { Component, Host, Prop, h } from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'mw-card',
  styleUrl: 'mw-card.css',
  shadow: true,
})
export class MwCard {
  @Prop() outlined?: boolean = false;
  @Prop() elevated?: boolean = false;

  render() {
    return (
      <Host>
        <div
          class={classnames('card', {
            outlined: this.outlined,
            elevated: this.elevated,
          })}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
