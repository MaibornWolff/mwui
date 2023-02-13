import { Component, Element, Event, EventEmitter, h, Host, Prop } from "@stencil/core";
import { filledButtonStyles, flexStyles, ghostButtonStyles, iconButtonStyles, iconEndStyles, iconStartStyles, outlineButtonStyles } from "./mw-button.styles";
import { ButtonSize, ButtonSizeEnum } from "./models/enums/button-size.enum";
import { ButtonVariant, ButtonVariantEnum } from "./models/enums/button-variant.enum";
import { Target, TargetEnum } from "./models/enums/button-target.enum";

const getButtonVariantStyles = (variant: ButtonVariant) =>
  ({
    [ButtonVariantEnum.FILLED]: filledButtonStyles,
    [ButtonVariantEnum.OUTLINE]: outlineButtonStyles,
    [ButtonVariantEnum.GHOST]: ghostButtonStyles,
  }[variant]);

@Component({
  tag: "mw-button",
  styleUrl: "./mw-button.scss",
  shadow: true,
})
export class MWButton {
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
  private hasIcon: boolean;
  private hasLabel: boolean;

  componentWillLoad(): void {
    this.hasIconStartSlot = !!this.hostElement.querySelector("[slot='icon-start']");
    this.hasIconEndSlot = !!this.hostElement.querySelector("[slot='icon-end']");
    this.hasIcon = this.hasIconStartSlot || this.hasIconEndSlot;
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
    if (this.href) {
      return (
        <Host>
          <a href={this.href} target={this.target} class={`${this.variant} ${getButtonVariantStyles(this.variant)} ${this.size}`} test-id={this.testId}>
            {this.hasIconStartSlot && (
              <span class={`mw-button-icon-start ${this.size} ${this.hasLabel ? iconStartStyles : ""}`}>
                <slot name="icon-start"></slot>
              </span>
            )}
            <span>{this.label}</span>
            {this.hasIconEndSlot && (
              <span class={`mw-button-icon-end ${this.size} ${this.hasLabel ? iconEndStyles : ""}`}>
                <slot name="icon-end"></slot>
              </span>
            )}
          </a>
        </Host>
      );
    }
    return (
      <Host>
        <button
          disabled={this.disabled}
          onClick={this.handleClick}
          class={`${this.variant} ${getButtonVariantStyles(this.variant)} ${this.hasIcon && flexStyles} ${!this.hasLabel && iconButtonStyles} ${this.size}`}
          test-id={this.testId}
          type="button"
        >
          {this.hasIconStartSlot && (
            <span class={`mw-button-icon-start ${this.size} ${this.hasLabel ? iconStartStyles : ""}`}>
              <slot name="icon-start"></slot>
            </span>
          )}
          <span>{this.label}</span>
          {this.hasIconEndSlot && (
            <span class={`mw-button-icon-end ${this.size} ${this.hasLabel ? iconEndStyles : ""}`}>
              <slot name="icon-end"></slot>
            </span>
          )}
        </button>
      </Host>
    );
  }
}
