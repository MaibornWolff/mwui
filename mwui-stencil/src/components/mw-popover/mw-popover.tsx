import { Component, Host, Prop, h, Element, Event, EventEmitter, Watch } from "@stencil/core";
import { createPopper } from "@popperjs/core";
import { ClickOutside } from "stencil-click-outside";

export type PopoverPlacement =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end"
  | "left-start"
  | "left-end"
  | "right-start"
  | "right-end";

@Component({
  tag: "mw-popover",
  styleUrl: "mw-popover.css",
  shadow: true,
})
export class MwPopover {
  @Element() hostElement: HTMLMwPopoverElement;
  /**
   * Provide unique identifier for automated testing
   */
  @Prop() testId: string;
  /**
   * Whether the popover is visible
   */
  @Prop({ mutable: true }) open: boolean;
  /**
   * Placement relative to anchor element
   */
  @Prop() placement: PopoverPlacement = "bottom";
  /**
   * If set to true, the popover can be closed by clicking outside
   */
  @Prop() dismissable?: boolean = false;
  /**
   * Closes Popover when user clicks on it
   */
  @Prop() closeOnClick?: boolean = false;
  /**
   * disable default padding
   */
  @Prop() noPadding?: boolean = false;
  /**
   * Name used internally to reference anchor and content elements
   */
  @Prop() name?: string = "tooltip";
  /**
   * MwPopover emits an event when the value of the open prop changes
   */
  @Event({
    bubbles: true,
    cancelable: false,
    composed: true,
    eventName: "mwPopoverOpen",
  })
  openEmitter: EventEmitter;

  private contentRef!: HTMLElement;
  private anchorRef!: HTMLElement;

  @Watch("open")
  onOpenChange(): void {
    this.openEmitter.emit(this.open);
  }

  @ClickOutside()
  toggleIfOpen(): void {
    if (this.open && this.dismissable) {
      this.open = !this.open;
    }
  }

  private onClick = (event: Event) => {
    event.preventDefault();
    this.open = !this.open;

    createPopper(this.anchorRef, this.contentRef, {
      placement: this.placement,
    });
  };
  private closePopoverOnClick = (event: Event) => {
    if (this.closeOnClick) {
      event.preventDefault();
      this.open = !this.open;
    }
  };
  render() {
    return (
      <Host>
        <div class="mw-popover">
          <div
            aria-describedby={this.name}
            onClick={this.onClick}
            ref={el => {
              this.anchorRef = el as HTMLElement;
            }}
          >
            <slot name="anchor"></slot>
          </div>
          <div
            role="tooltip"
            id={this.name}
            class={{ "mw-popover-content": true, "open": this.open, "no-padding": this.noPadding }}
            ref={el => {
              this.contentRef = el as HTMLElement;
            }}
            onClick={this.closePopoverOnClick}
          >
            <slot name="content"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
