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
  @Event({ bubbles: true, composed: false }) valueChanged: EventEmitter<string[]>;

  /**
   * Emits an event when value of input changes
   */
  @Event({ bubbles: true, composed: false }) inputChange: EventEmitter<string>;
  /**
   * input field name
   */
  @Prop() name: string;
  /**
   * Label to be displayed
   */
  @Prop({ reflect: true }) label?: string;
  /**
   * input field value
   */
  @Prop({ reflect: true }) value?: string | number;
  /**
   * Placeholder to be displayed
   */
  @Prop({ reflect: true, mutable: false }) placeholder?: string;
  /**
   * Visually and functionally disabled input
   */
  @Prop() disabled?: boolean = false;

  /**
   * Amount of allowed `selected` values
   */
  @Prop() maximum?: number;
  /**
   * Shows how many options the user has selected as well as the allowed maximum. Only works, if `maximum` prop is defined.
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
  @Prop({ reflect: true, mutable: false }) selectedChips: string[];
  @Watch("selectedChips")
  handleSelectionChange(selected: string[]): void {
    if (!this.canAddToValues() || !selected) {
      return;
    }

    this._selection.select(...selected);
    this.selected = this._selection.selected;

    if (this.inputElement) {
      this.inputElement.value = "";
    }
  }

  @State() selected: string[] = [];
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

  connectedCallback(): void {
    this.handleSelectionChange(this.selectedChips);
  }

  private onFocus = (): void => {
    if (!this.disabled) {
      if (this.inputElement) this.inputElement.focus();
      this.focused = true;
    }
  };

  private onBlur = (): void => {
    this.focused = false;
  };

  private addMultiValue = (value: string): void => {
    if (value.trim()?.length === 0) {
      return;
    }

    if (this.canAddToValues()) {
      this._selection.select(value);
      this.onValueChange();
    }

    this.inputElement.value = "";
    this.handleInputChange();
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

  private canAddToValues(): boolean {
    return !this.maximum || this.selected?.length < this.maximum;
  }

  render() {
    const {
      onFocus,
      disabled,
      hasIconStartSlot,
      hasIconEndSlot,
      focused,
      placeholder,
      onBlur,
      name,
      clearMultiValues,
      selected,
      required,
      hasError,
      inline,
      helperText,
      optionCounter,
      maximum,
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
                "input": true,
                "disabled": disabled,
                "has-error": hasError,
              }}
            >
              <span
                class={{
                  "icon-start": hasIconStartSlot,
                  "focused": focused,
                  "has-error": hasError,
                }}
              >
                <slot name="icon-start"></slot>
              </span>
              <div class="input-options">
                {selected?.map(v => (
                  <mw-chip key={v} showClose={true} value={v} selected={true} toggleable={false} disabled={disabled}>
                    {v}
                  </mw-chip>
                ))}
                {this.canAddToValues() && (
                  <input
                    ref={el => (this.inputElement = el as HTMLInputElement)}
                    class={{
                      "has-error": this.hasError,
                      "mw-chip-input": true,
                    }}
                    placeholder={this.selected?.length === 0 ? placeholder : null}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    type="text"
                    name={name}
                    value={this.value}
                    disabled={disabled}
                    onInput={this.handleInputChange}
                    onChange={this.onValueChange}
                  />
                )}
              </div>
              {this._selection.hasValues() && (
                <span class="icon-close-multiple" onClick={clearMultiValues}>
                  <mw-icon icon="close" size="medium"></mw-icon>
                </span>
              )}
              <div
                class={{
                  "icon-end": hasIconEndSlot,
                  "focused": focused,
                  "has-error": hasError,
                }}
              >
                <slot name="icon-end" />
              </div>
            </div>
          </div>
          <div class="helper-text-container">
            <mw-helper-text helperText={helperText} hasError={hasError} />
            {this.maximum && optionCounter && <mw-helper-text helperText={`${this.selected.length}/${maximum}`} />}
          </div>
        </div>
      </Host>
    );
  }
}
