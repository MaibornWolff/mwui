import { Component, Element, Event, EventEmitter, h, Host, Listen, Prop, State, Watch } from "@stencil/core";
import { Selection } from "../../utils/selection";

@Component({
  tag: "mw-chip-input",
  styleUrl: "mw-chip-input.scss",
  shadow: false,
})
export class MwChipInput {
  @Element() hostElement: HTMLMwChipInputElement;

  private _selection: Selection<string> = new Selection<string>(true);

  /**
   * Emits an event when its value changes
   */
  @Event({ bubbles: true, composed: false, eventName: "mwChipListValueChanged" }) valueChanged: EventEmitter<string[]>;

  /**
   * Emits an event when value of input changes
   */
  @Event({ bubbles: true, composed: false, eventName: "mwChipListInputChange" }) inputChange: EventEmitter<string>;

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
  @Prop({ reflect: true, mutable: false }) placeholder?: string;
  /**
   * Visually and functionally disabled input
   */
  @Prop() disabled?: boolean = false;
  /**
   * Whether user can't type in input field
   */
  @Prop() readOnly?: boolean = false;

  /**
   * Amount of allowed `multipleValues`
   */
  @Prop() multipleMaximum?: number;
  /**
   * Text which is displayed when maximum amount of options is reached
   */
  @Prop() multipleMaximumText?: string = "Maximum amount of selected options reached";
  /**
   * Shows how many options the user has selected as well as the allowed maximum. Only works, if `multipleMaximum` prop is defined.
   */

  @Prop({ reflect: true }) helperText?: string;
  /**
   * Use to display input and helper-text in error state
   */
  @Prop() hasError?: boolean = false;
  /**
   * Display label and input horizontally
   */
  @Prop() inline?: boolean = false;
  /**
   * Mark input as required
   */
  @Prop() required?: boolean = false;

  /**
   * Amount of currently selected options
   */
  @Prop() optionCounter?: boolean = false;
  /**
   * Currently selected Values
   */
  @Prop() selected: string[];
  @Watch("selected")
  handleSelectionChange(selected: string[]): void {
    this._selection.select(...selected);
    this.inputElement.value = "";
  }

  @State() focused = false;
  @State() initialPlaceholder: string;

  @Listen("mwChipClose")
  closeEmitterHandler(event): void {
    this._selection.deselect(event.detail);
    this.onValueChange();
  }

  @Listen("keydown", { passive: true })
  handleEnterPress(event: KeyboardEvent): void {
    if (!this.focused) {
      return;
    }

    switch (event.key) {
      case "Enter":
        this.addMultiValue(this.inputElement.value);
        break;
      case "Backspace":
        if (this.inputElement.value === "" && this._selection.hasValues()) {
          const indexToRemove = this.selected.length - 1;
          const valueToRemove = this.selected[indexToRemove];

          this._selection.deselect(valueToRemove);
          this.onValueChange();
        }
        break;
      default:
        break;
    }
  }

  private inputElement: HTMLInputElement;
  private hasIconStartSlot: boolean;
  private hasIconEndSlot: boolean;

  componentWillLoad(): void {
    this.initialPlaceholder = this.placeholder;
    this.hasIconStartSlot = !!this.hostElement.querySelector("[slot='icon-start']");
    this.hasIconEndSlot = !!this.hostElement.querySelector("[slot='icon-end']");
  }

  private onFocus = (): void => {
    if (this.inputElement) this.inputElement.focus();
    this.focused = true;
  };

  private onBlur = (): void => {
    this.focused = false;
  };

  private addMultiValue = (value: string): void => {
    if (value.trim()?.length === 0) {
      return;
    }

    if (!this.multipleMaximum || this.selected?.length < this.multipleMaximum) {
      this._selection.select(value);
      this.onValueChange();
    }

    this.inputElement.value = "";
  };

  private clearMultiValues = (): void => {
    this._selection.clear();
    this.onValueChange();
  };

  private onValueChange(): void {
    this.selected = this._selection.selected;
    this.valueChanged.emit(this.selected);
  }

  private handleInputChange(): void {
    this.inputChange.emit(this.inputElement.value);
  }

  render() {
    const {
      onFocus,
      disabled,
      hasIconStartSlot,
      hasIconEndSlot,
      focused,
      multipleMaximum,
      placeholder,
      onBlur,
      readOnly,
      name,
      clearMultiValues,
      selected,
      handleInputChange,
      required,
      hasError,
      inline,
      helperText,
    } = this;

    return (
      <Host>
        <div class="wrapper">
          <div
            class={{
              "chip-input": true,
              "inline": inline,
              "has-error": hasError,
              "disabled": disabled,
            }}
          >
            <mw-label name={this.name} label={this.label} required={required} />

            <div
              slot="anchor"
              onClick={onFocus}
              class={{
                input: true,
                disabled: disabled,
              }}
            >
              <span
                class={{
                  "icon-start": hasIconStartSlot,
                  "focused": focused,
                }}
              >
                <slot name="icon-start"></slot>
              </span>
              <div class="input-options">
                {selected?.map(v => (
                  <mw-chip key={v} showClose={true} value={v} selected={true} toggleable={false}>
                    {v}
                  </mw-chip>
                ))}
                {(!multipleMaximum || selected?.length < multipleMaximum) && (
                  <input
                    ref={el => (this.inputElement = el as HTMLInputElement)}
                    placeholder={placeholder}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    type="text"
                    name={name}
                    disabled={disabled}
                    readOnly={readOnly}
                    onInput={handleInputChange.bind(this)}
                  />
                )}
              </div>

              {this._selection.hasValues() && (
                <span class="icon-close-multiple" onClick={clearMultiValues}>
                  <mw-icon icon="close" size="medium"></mw-icon>
                </span>
              )}
              <span
                class={{
                  "icon-end": hasIconEndSlot,
                  "focused": focused,
                }}
              >
                <slot name="icon-end" />
              </span>
            </div>
            {!inline && <mw-helper-text helperText={helperText} hasError={hasError} />}
          </div>
          {inline && <mw-helper-text helperText={helperText} hasError={hasError} />}
        </div>
      </Host>
    );
  }
}
