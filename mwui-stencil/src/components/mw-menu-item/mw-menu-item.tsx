import { Component, Event, EventEmitter, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "mw-menu-item",
  styleUrl: "mw-menu-item.css",
  shadow: true,
})
export class MwMenuItem {
  /**
   * Menu item text
   */
  @Prop() text: string;
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
  @Prop({ mutable: true, reflect: true }) value?: string;
  /**
   * Event is emitted when click menu item. Used internally by other components. Attach listener to click event when using.
   */
  @Event({
    bubbles: true,
    cancelable: false,
    composed: false,
    eventName: "mwMenuItemClick",
  })
  clickEmitter: EventEmitter;

  componentWillLoad(): void {
    if (!this.value) this.value = this.text;
  }

  private handleClick = (event: PointerEvent & { path: unknown[] }): void => {
    (event.target as HTMLButtonElement).blur();
    if (!this.disabled) this.clickEmitter.emit(event);
  };

  render() {
    return (
      <Host>
        <div onClick={this.handleClick} tabindex="0" class={{ "mw-menu-item": true, "disabled": this.disabled, "selected": this.selected }}>
          {!!this.text && <div class="mw-menu-item-title">{this.text}</div>}
          {!!this.subtitle && <div class="mw-menu-item-subtitle">{this.subtitle}</div>}
        </div>
      </Host>
    );
  }
}
