import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mw-divider',
  styleUrl: 'mw-divider.css',
  shadow: true,
})
export class MwDivider {
  /**
   * Whether the divider is a middle-inset
   */
  @Prop() inset?: boolean = false;

  render() {
    return <div class={`mw-divider ${this.inset && 'inset'}`}></div>;
  }
}
