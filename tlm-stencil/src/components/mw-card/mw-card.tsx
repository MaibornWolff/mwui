import { Component, Host, Prop, h, EventEmitter, Event } from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'mw-card',
  styleUrl: 'mw-card.css',
  shadow: true,
})
export class MwCard {
  @Event({
    bubbles: true,
    cancelable: false,
    composed: false,
  })
  clickEmitter: EventEmitter<string>;

  /**
   * Must be provided for automated testing
   */
  @Prop() testId!: string;
  /**
   * Display outline
   */
  @Prop() outlined?: boolean = false;
  /**
   * Use box-shadow for elevation style
   */
  @Prop() elevated?: boolean = false;

  handleClick = () => {
    this.clickEmitter.emit('onClick');
  };

  render() {
    return (
      <Host>
        <div
          onClick={this.handleClick.bind(this)}
          test-id={this.testId}
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
