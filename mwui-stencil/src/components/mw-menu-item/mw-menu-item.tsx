import { Component, Event, EventEmitter, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "mw-menu-item",
  styleUrl: "mw-menu-item.css",
  shadow: true,
})
export class MwMenuItem {
  /**
   * Menu item title
   */
  // eslint-disable-next-line
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
  @Prop({ mutable: false, reflect: true }) selected?: boolean = false;
  /**
   * Value of item
   */
  @Prop() value?: string;
  /**
   * MwMenuItem emits an event when its clicked
   */
  @Event({
    bubbles: true,
    cancelable: false,
    composed: false,
    eventName: "mw-menu-item-click",
  })
  clickEmitter: EventEmitter;

  private handleClick = (event: PointerEvent & { path: unknown[] }): void => {
    (event.target as HTMLButtonElement).blur();
    if (!this.disabled) this.clickEmitter.emit(event);
  };

  render() {
    return (
      <Host>
        <div onClick={this.handleClick} tabindex="0" class={{ "mw-menu-item": true, "disabled": this.disabled, "selected": this.selected }}>
          {!!this.title && <div class="mw-menu-item-title">{this.title}</div>}
          {!!this.subtitle && <div class="mw-menu-item-subtitle">{this.subtitle}</div>}
        </div>
      </Host>
    );
  }
}
