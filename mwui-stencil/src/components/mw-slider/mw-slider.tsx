import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "mw-slider",
  styleUrl: "mw-slider.css",
  shadow: true,
})
export class MwSlider {
  /**
   * Provide unique identifier for automated testing
   */
  @Prop() testId: string;
  /**
   * Name of range input
   */
  @Prop() name: string;
  /**
   * input label
   */
  @Prop() label?: string;
  /**
   * input helper-text
   */
  @Prop() helperText?: string;
  /**
   * Icon to be displayed to left of the slider
   */
  @Prop() startIcon?: string;
  /**
   * Icon to be displayed to right of the slider
   */
  @Prop() endIcon?: string;
  /**
   * min range value
   */
  @Prop() min = 0;
  /**
   * max range value
   */
  @Prop() max = 100;
  /**
   * step for range value
   */
  @Prop() step = 1;
  /**
   * value of range input
   */
  @Prop({ reflect: true }) value: number;
  /**
   * Display label and input horizonally
   */
  @Prop() inline?: boolean = false;
  /**
   * Disable range input
   */
  @Prop() disabled?: boolean = false;

  render() {
    return (
      <Host>
        <div class="mw-slider-container">
          <div class={{ "mw-slider": true, "inline": this.inline, "disabled": this.disabled }} test-id={this.testId}>
            {this.label && (
              <label class="mw-slider-label" htmlFor={this.name}>
                {this.label}
              </label>
            )}
            <div class="mw-slider-input-wrapper">
              {this.startIcon && <mw-icon icon={this.startIcon} size="medium"></mw-icon>}
              <input class="mw-slider-input" type="range" disabled={this.disabled} id={this.name} name={this.name} min={this.min} max={this.max} value={this.value}></input>
              {this.endIcon && <mw-icon icon={this.endIcon} size="medium"></mw-icon>}
            </div>

            {this.helperText && !this.inline && <div class="mw-slider-helper">{this.helperText}</div>}
          </div>
          {this.helperText && this.inline && <div class="mw-slider-helper">{this.helperText}</div>}
        </div>
      </Host>
    );
  }
}
