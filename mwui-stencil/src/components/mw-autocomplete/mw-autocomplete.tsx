import { Component, Event, EventEmitter, Host, Prop, State, h, Element, Listen, Watch } from "@stencil/core";
import { AriaRolesEnum } from "../../shared/models/enums/aria-roles.enum";
import { MwChipInputCustomEvent, MwTextfieldCustomEvent } from "../../components";

@Component({
  tag: "mw-autocomplete",
  styleUrl: "mw-autocomplete.scss",
  shadow: true,
})
export class MwAutocomplete {
  @Element() hostElement: HTMLMwAutocompleteElement;
  /**
   * Emits an event when its value changes
   */
  @Event({ bubbles: true, composed: false, eventName: "mwAutocompleteValueChanged" }) valueChanged: EventEmitter<string>;
  /**
   * HTML Input type
   */
  @Prop() type?: string = "text";
  /**
   * input field value
   */
  @Prop({ reflect: true, mutable: true }) value?: string | number;
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
   * HelperText to be displayed. Can be used as hint or error text when combined with `has-error`
   */
  @Prop({ reflect: true }) helperText?: string;
  /**
   * Use to display input and helper-text in error state
   */
  @Prop() hasError?: boolean = false;
  /**
   * Text which is displayed when no dropdown options match the user input
   */
  @Prop() noMatchText?: string = "No suggestions found.";
  /**
   * Display label and input horizontally
   */
  @Prop() inline?: boolean = false;
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
  @Prop() readOnly?: boolean = false;
  /**
   * Allows users to enter multiple values into autocomplete
   */
  @Prop() multiple?: boolean = false;
  /**
   * Amount of allowed `selected` options
   */
  @Prop() maximum?: number;
  /**
   * Text which is displayed when maximum amount of options is reached
   */
  @Prop() multipleMaximumText?: string = "You reached the maximum number of options.";
  /**
   * Shows how many options the user has selected as well as the allowed maximum. Only works, if `maximum` prop is defined.
   */
  @Prop() optionCounter?: boolean = false;
  /**
   * Currently selected options
   */
  @Prop({ reflect: true, mutable: false }) selected: string[] = [];
  @Watch("selected")
  onSelectedChange(selected: string[]): void {
    if (!this.canAddToValues()) {
      this.hostElement.querySelectorAll("mw-menu-item").forEach(item => {
        item.setAttribute("disabled", `true`);
      });
    } else {
      this.setItemDisabledState(selected);
    }
  }

  @State() focused = false;
  @State() isDropdownOpen = false;

  @Listen("mwMenuItemClick")
  clickEmitterHandler(event): void {
    const emittedValue = event.target.getAttribute("value");
    if (this.multiple) {
      this.addMultiValue(emittedValue);
    } else {
      this.value = emittedValue;
    }
  }
  @Listen("mwPopoverOpen")
  stateEmitterHandler(event): void {
    this.isDropdownOpen = event.detail;
  }

  private noMatchDisclaimer: HTMLDivElement;
  private hasIconStartSlot: boolean;

  componentWillLoad(): void {
    this.hasIconStartSlot = !!this.hostElement.querySelector("[slot='icon-start']");
  }

  private onInputChange = (event: MwChipInputCustomEvent<string> | MwTextfieldCustomEvent<string>): void => {
    this.filterDropdownOptions(event.detail);
    this.isDropdownOpen = true;
  };

  private onFocus = (): void => {
    if (!this.disabled) this.focused = true;
  };

  private onBlur = (): void => {
    this.focused = false;
  };

  private addMultiValue = (value: string): void => {
    if (!this.multiple || value.trim().length === 0) {
      return;
    }

    this.selected = [...this.selected, value];
    this.removeDropdownFilter();
  };

  private setItemDisabledState(selected: string[]): void {
    this.hostElement.querySelectorAll("mw-menu-item").forEach(item => {
      const isDisabled = selected.includes(item.getAttribute("value"));
      item.setAttribute("disabled", `${isDisabled}`);
    });
  }

  private handleChipListValueChange(event: MwChipInputCustomEvent<string[]>): void {
    this.selected = event.detail;
  }

  private filterDropdownOptions = (value: string): void => {
    let hasNoSuggestions = true;

    this.hostElement.querySelectorAll("mw-menu-item").forEach(item => {
      if (item.value.toLowerCase().includes(value.toLowerCase())) {
        item.style.display = "unset";
        hasNoSuggestions = false;
      } else {
        item.style.display = "none";
      }
    });
    if (hasNoSuggestions) {
      this.noMatchDisclaimer.style.display = "flex";
    } else {
      this.noMatchDisclaimer.style.display = "none";
    }
  };

  private removeDropdownFilter = (): void => {
    this.hostElement.querySelectorAll("mw-menu-item").forEach(item => {
      item.style.display = "unset";
    });
  };

  private canAddToValues(): boolean {
    return !this.maximum || this.selected?.length < this.maximum;
  }

  render() {
    return (
      <Host>
        <div tabindex="0" class="wrapper" role={AriaRolesEnum.COMBOBOX}>
          <div
            class={{
              "autocomplete": true,
              "inline": this.inline,
              "has-error": this.hasError,
              "disabled": this.disabled,
            }}
          >
            <mw-label name={this.name} label={this.label} required={this.required} />
            <mw-popover noPadding={true} closeOnClick={true} open={this.isDropdownOpen} dismissable={this.isDropdownOpen} disabled={this.disabled}>
              {this.multiple ? (
                <mw-chip-input
                  name={this.name}
                  placeholder={this.placeholder}
                  disabled={this.disabled}
                  hasError={this.hasError}
                  maximum={this.maximum}
                  selectedChips={this.selected}
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                  onMwChipListValueChanged={this.handleChipListValueChange.bind(this)}
                  onMwChipListInputChange={this.onInputChange.bind(this)}
                  slot="anchor"
                >
                  {this.hasIconStartSlot && (
                    <div
                      class={{
                        "focused": this.focused,
                        "has-error": this.hasError,
                      }}
                      slot="icon-start"
                    >
                      <slot name="icon-start" />
                    </div>
                  )}
                  <mw-icon slot="icon-end" icon={this.isDropdownOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"} size="medium"></mw-icon>
                </mw-chip-input>
              ) : (
                <mw-textfield
                  disabled={this.disabled}
                  type={this.type}
                  value={this.value}
                  name={this.name}
                  hasError={this.hasError}
                  placeholder={this.placeholder}
                  onMwTextfieldValueChanged={this.onInputChange.bind(this)}
                  slot="anchor"
                >
                  {this.hasIconStartSlot && (
                    <div
                      class={{
                        "focused": this.focused,
                        "has-error": this.hasError,
                      }}
                      slot="icon-start"
                    >
                      <slot name="icon-start" />
                    </div>
                  )}
                  <span
                    class={{
                      "focused": this.focused,
                      "has-error": this.hasError,
                    }}
                    slot="icon-end"
                  >
                    <mw-icon icon={this.isDropdownOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"} size="medium"></mw-icon>
                  </span>
                </mw-textfield>
              )}
              <div slot="content">
                {this.canAddToValues() ? <slot name="dropdown-menu"></slot> : <div class="maximum-reached">{this.multipleMaximumText}</div>}
                <div ref={el => (this.noMatchDisclaimer = el as HTMLDivElement)} class="no-matches">
                  {this.noMatchText}
                </div>
              </div>
            </mw-popover>
          </div>
          <div class="helper-text-container">
            <mw-helper-text helperText={this.helperText} hasError={this.hasError} />
            {this.maximum && this.optionCounter && <mw-helper-text helperText={`${this.selected.length}/${this.maximum}`} />}
          </div>
        </div>
      </Host>
    );
  }
}
