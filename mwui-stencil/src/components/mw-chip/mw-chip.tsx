import { Component, Event, EventEmitter, Host, Prop, h } from "@stencil/core";
import classNames from "classnames";

@Component({
  tag: "mw-chip",
  styleUrl: "mw-chip.css",
  shadow: true,
})
export class MwChip {
  /**
   * Provide unique identifier for automated testing
   */
  @Prop() testId: string;
  /**
   * Name identifier of icon to be displayed in chip
   */
  @Prop() icon?: string;
  /**
   * Visually and functionally disable button
   */
  @Prop({ reflect: true }) disabled?: boolean;
  /**
   * Flag whether to show close icon or not
   */
  @Prop() showClose?: boolean = false;
  /**
   * Value of chip
   */
  @Prop() value?: string | number;
  /**
   * Selection state that changes onToggle. Can be set as mutable prop.
   */
  @Prop({ reflect: true, mutable: true }) selected = false;

  /**
   * MwChip emits an event when chip is clicked or chip is closed
   */
  @Event({
    bubbles: true,
    cancelable: false,
    composed: true,
  })
  emitter: EventEmitter;

  private handleClose = (event: Event): void => {
    event.stopPropagation();
    if (!this.disabled) {
      this.emitter.emit(this.value);
    }
  };

  private handleClick = (event: Event): void => {
    this.selected = !this.selected;
    this.emitter.emit(event);
  };

  render() {
    return (
      <Host>
        <div
          tabindex="0"
          class={classNames("chip", {
            selected: this.selected,
            disabled: this.disabled,
          })}
          onClick={this.handleClick}
          test-id={this.testId}
        >
          {!!this.icon && <mw-icon icon={this.icon} size="small"></mw-icon>}
          <slot></slot>
          {this.showClose && (
            <span onClick={this.handleClose}>
              <mw-icon icon="close" color="currentcolor" size="small"></mw-icon>
            </span>
          )}
        </div>
      </Host>
    );
  }
}
