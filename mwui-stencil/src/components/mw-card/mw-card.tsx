import { Component, Host, Prop, h, EventEmitter, Event } from "@stencil/core";

@Component({
  tag: "mw-card",
  styleUrl: "mw-card.scss",
  shadow: true,
})
export class MwCard {
  /**
   * Emits an event when MwCard is clicked
   */
  @Event({
    bubbles: true,
    cancelable: false,
    composed: false,
  })
  clickEmitter: EventEmitter;

  /**
   * Provide unique identifier for automated testing
   */
  @Prop() testId: string;
  /**
   * Display outline
   */
  @Prop() outlined?: boolean = false;
  /**
   * Use box-shadow for elevation style
   */
  @Prop() elevated?: boolean = false;

  render() {
    return (
      <Host>
        <div
          onClick={() => this.clickEmitter.emit()}
          test-id={this.testId}
          class={{
            card: true,
            outlined: this.outlined,
            elevated: this.elevated,
          }}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
