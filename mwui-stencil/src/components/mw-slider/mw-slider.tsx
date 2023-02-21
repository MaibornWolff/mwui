import { Component, Element, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "mw-slider",
  styleUrl: "mw-slider.scss",
  shadow: true,
})
export class MwSlider {
  @Element() host!: HTMLMwSliderElement;
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
  @Prop({ reflect: true, mutable: true }) value = 0;
  /**
   * Display label and input horizonally
   */
  @Prop() inline?: boolean = false;
  /**
   * Disable range input
   */
  @Prop() disabled?: boolean = false;

  componentDidLoad(): void {
    this.updateRangeValuePosition();
  }

  private updateRangeValuePosition = (): void => {
    const rangeValueElement = this.host.shadowRoot.querySelector("#mw-slider-range-value") as HTMLDivElement;
    const inputElement = this.host.shadowRoot.querySelector(".mw-slider-input input") as HTMLInputElement;

    const padding = 21; // magic number to improve positioning
    const range = this.value;
    const step = (inputElement.getBoundingClientRect().width - padding) / this.max;

    rangeValueElement.style.transform = `translateX(${range * step}px)`;
  };

  private handleInput = (event: Event): void => {
    this.value = parseInt((event.target as HTMLInputElement).value);
    this.updateRangeValuePosition();
  };

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
            <div class={{ "mw-slider-input-wrapper": true, "disabled": this.disabled }}>
              {this.startIcon && <mw-icon icon={this.startIcon} size="medium"></mw-icon>}
              <div class="mw-slider-input">
                <input
                  type="range"
                  onInput={this.handleInput}
                  disabled={this.disabled}
                  id={this.name}
                  step={this.step}
                  name={this.name}
                  min={this.min}
                  max={this.max}
                  value={this.value}
                ></input>
                <label htmlfor={this.name} id="mw-slider-range-value">
                  {this.value}
                </label>
              </div>
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
