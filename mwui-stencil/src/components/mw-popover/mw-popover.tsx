import { Component, Host, Prop, h, Element } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import { createPopper } from '@popperjs/core';
import classnames from 'classnames';
import { ClickOutside } from 'stencil-click-outside';

export type PopoverPlacement =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end'
  | 'right-start'
  | 'right-end';

@Component({
  tag: 'mw-popover',
  styleUrl: 'mw-popover.css',
  shadow: true,
})
export class MwPopover {
  @Element() hostElement: HTMLStencilElement;
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
  @Prop() placement: PopoverPlacement = 'bottom';
  /**
   * If set to true, the popover can be closed by clicking outside
   */
  @Prop() dismissable?: boolean = false;
  /**
   * disable default padding
   */
  @Prop() noPadding?: boolean = false;
  /**
   * Name used internally to reference anchor and content elements
   */
  @Prop() name?: string = 'tooltip';

  contentRef!: HTMLElement;
  anchorRef!: HTMLElement;

  @ClickOutside()
  toggleIfOpen() {
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
            class={classnames('mw-popover-content', { 'open': this.open, 'no-padding': this.noPadding })}
            ref={el => {
              this.contentRef = el as HTMLElement;
            }}
          >
            <slot name="content"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
