import { Component, Element, Event, EventEmitter, h, Host, Prop } from "@stencil/core";
import { ButtonSize, ButtonSizeEnum } from "./models/enums/button-size.enum";
import { ButtonVariant, ButtonVariantEnum } from "./models/enums/button-variant.enum";
import { Target, TargetEnum } from "./models/enums/button-target.enum";

@Component({
  tag: "mw-button",
  styleUrl: "./mw-button.scss",
  shadow: true,
})
export class MwButton {
  @Element() hostElement: HTMLMwButtonElement;
  /**
   * Provide unique identifier for automated testing
   */
  @Prop() testId: string;
  /**
   * Visually and functionally disable button
   */
  @Prop() disabled?: boolean;
  /**
   * Label to be displayed
   */
  @Prop() label?: string;
  /**
   * Button variants
   */
  @Prop() variant?: ButtonVariant = ButtonVariantEnum.FILLED;
  /**
   * Button size
   */
  @Prop() size?: ButtonSize = ButtonSizeEnum.MEDIUM;
  /**
   * If provided the button will act as a link
   */
  @Prop() href?: string;
  /**
   * If using href the target prop can be provided
   */
  @Prop() target?: Target = TargetEnum.SELF;

  /**
   * 'onClick' event is fired when clicking the button, unless it is used with a `href` prop.
   */
  @Event({
    bubbles: true,
    cancelable: false,
    composed: false,
  })
  clickEmitter: EventEmitter;

  private hasIconStartSlot: boolean;
  private hasIconEndSlot: boolean;
  private hasLabel: boolean;

  componentWillLoad(): void {
    this.hasIconStartSlot = !!this.hostElement.querySelector("[slot='icon-start']");
    this.hasIconEndSlot = !!this.hostElement.querySelector("[slot='icon-end']");
    this.hasLabel = !!this.label;
  }

  private handleClick = (event: PointerEvent & { path: Array<unknown> }): void => {
    if (this.disabled) {
      return;
    }

    (event.target as HTMLButtonElement).blur();
    if (event.path && Array.isArray(event.path)) {
      (event.path[1] as HTMLButtonElement).blur();
    }
    this.clickEmitter.emit();
  };

  render() {
    const button = (
      <button
        part="button"
        disabled={this.disabled}
        onClick={this.handleClick}
        class={{
          "mw-button": true,
          "mw-button--icon-only": !this.label,
          [`mw-button--${this.variant}`]: true,
          [`mw-button--${this.size}`]: true,
        }}
        test-id={this.testId}
        type="button"
      >
        {this.hasIconStartSlot && (
          <span
            class={{
              "mw-button-icon-start": true,
              [`mw-button-icon-start--${this.size}`]: this.hasLabel,
            }}
          >
            <slot name="icon-start"></slot>
          </span>
        )}
        <span>{this.label}</span>
        {this.hasIconEndSlot && (
          <span
            class={{
              "mw-button-icon-end": true,
              [`mw-button-icon-end--${this.size}`]: this.hasLabel,
            }}
          >
            <slot name="icon-end"></slot>
          </span>
        )}
      </button>
    );

    return <Host>{this.href ? <a href={this.href}>{button}</a> : button}</Host>;
  }
}
