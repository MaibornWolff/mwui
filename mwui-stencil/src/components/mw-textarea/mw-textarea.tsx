import { Element, Event, EventEmitter, Prop } from "@stencil/core";
import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "mw-textarea",
  styleUrl: "mw-textarea.scss",
  shadow: true,
})
export class MwTextarea {
  @Element() hostElement: HTMLMwTextareaElement;

  /**
   * input field value
   */
  @Prop({ reflect: true, mutable: true }) value?: string;
  /**
   * input field name
   */
  @Prop() name: string;
  /**
   * Label to be displayed
   */
  @Prop({ reflect: true }) label?: string;
  /**
   * Placeholder to be displayed
   */
  @Prop() placeholder?: string;
  /**
   * HelperText to be displayed. Can be used as hint or error text when combined with `has-error`
   */
  @Prop({ reflect: true }) helperText?: string;
  /**
   * Use to display input and helper-text in error state
   */
  @Prop() hasError?: boolean = false;
  /**
   * Mark input as required
   */
  @Prop() required?: boolean = false;
  /**
   * Visually and functionally disabled input
   */
  @Prop() disabled?: boolean = false;
  /**
   * Whether user can't type in input field
   */
  @Prop() readonly?: boolean = false;
  /**
   * Maximum allowed characters
   */
  @Prop() maxlength?: number;
  /**
   * Visible number of lines
   */
  @Prop() rows?: number;
  /**
   * Visible width of textarea
   */
  @Prop() cols?: number;
  /**
   * formId
   */
  @Prop() form?: string;
  /**
   * enable or disable resizing option of textarea
   */
  @Prop() resize?: "both" | "none" | "horizontal" | "vertical" = "none";

  /**
   * emit input event
   */
  @Event({ bubbles: true, composed: true }) inputEmitter: EventEmitter<string>;
  /**
   * emit change event
   */
  @Event({ bubbles: true, composed: true }) changeEmitter: EventEmitter;
  /**
   * emit blur event
   */
  @Event({ bubbles: true, composed: true }) blurEmitter: EventEmitter;

  private onChange = (event: Event): void => {
    this.value = (event.target as HTMLTextAreaElement).value;
    this.changeEmitter.emit(this.value);
  };

  private onInput = (event: Event): void => {
    this.value = (event.target as HTMLTextAreaElement).value;
    this.inputEmitter.emit(this.value);
  };

  private onBlur = (): void => {
    this.blurEmitter.emit();
  };

  render() {
    return (
      <Host>
        <div class="wrapper">
          <div
            class={{
              "textarea-field": true,
              "has-error": this.hasError,
              "disabled": this.disabled,
            }}
          >
            <mw-label name={this.name} label={this.label} required={this.required} />

            <textarea
              placeholder={this.placeholder}
              style={{ resize: this.resize }}
              class={{
                "textarea": true,
                "has-error": this.hasError,
              }}
              onInput={this.onInput}
              onChange={this.onChange}
              onBlur={this.onBlur}
              name={this.name}
              value={this.value}
              disabled={this.disabled}
              readonly={this.readonly}
              maxlength={this.maxlength}
              cols={this.cols}
              rows={this.rows}
              form={this.form}
              required={this.required}
            />
          </div>
          <mw-helper-text helperText={this.helperText} hasError={this.hasError} />
        </div>
      </Host>
    );
  }
}
