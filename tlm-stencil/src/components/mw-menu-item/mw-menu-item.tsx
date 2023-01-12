import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'mw-menu-item',
  styleUrl: 'mw-menu-item.css',
  shadow: true,
})
export class MwMenuItem {
  /**
   * Menu item title
   */
  @Prop() title: string;
  /**
   * Menu item subtitle
   */
  @Prop() subtitle?: string;
  /**
   * Disabled state
   */
  @Prop() disabled?: boolean = false;
  /**
   * Selected state
   */
  @Prop({ mutable: true, reflect: true }) selected?: boolean = false;

  @Event({
    bubbles: true,
    cancelable: false,
    composed: false,
  })
  clickEmitter: EventEmitter;

  handleClick = (event: PointerEvent) => {
    (event.target as HTMLButtonElement).blur();
    // @ts-ignore
    (event.path[1] as HTMLButtonElement).blur();
    this.clickEmitter.emit();
  };

  render() {
    return (
      <Host>
        <div onClick={this.handleClick} tabindex="0" class={classNames('mw-menu-item', { disabled: this.disabled, selected: this.selected })}>
          {!!this.title && <div class="mw-menu-item-title">{this.title}</div>}
          {!!this.subtitle && <div class="mw-menu-item-subtitle">{this.subtitle}</div>}
        </div>
      </Host>
    );
  }
}
