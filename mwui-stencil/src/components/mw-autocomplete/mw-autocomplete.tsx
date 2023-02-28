import { Component, Event, EventEmitter, Host, Prop, State, h, Element, Listen } from "@stencil/core";
import { AriaRolesEnum } from "../../shared/models/enums/aria-roles.enum";
import { MwChipInputCustomEvent } from "../../components";

@Component({
  tag: "mw-autocomplete",
  styleUrl: "mw-autocomplete.scss",
  shadow: true,
})
export class MwAutocomplete {
  @Element() hostElement: HTMLMwAutocompleteElement;

  /**
   * MwAutocomplete emits an event when its value changes
   */
  @Event({ bubbles: true, composed: false }) valueChanged: EventEmitter<string>;
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
  @Prop() noMatchText?: string = "No matching options";
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
  @Prop() optionCounter?: boolean = false;

  @State() focused = false;
  @State() isDropdownOpen = false;
  @State() initialPlaceholder: string;
  @State() hasMultipleValues: boolean;
  @State() selected: string[] = [];

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

  private onInputChange = (event: MwChipInputCustomEvent<string>): void => {
    this.filterDropdownOptions(event.detail);
    this.isDropdownOpen = true;
  };

  private onFocus = (): void => {
    this.focused = true;
  };

  private onBlur = (): void => {
    this.focused = false;
  };

  private addMultiValue = (value: string): void => {
    if (this.multiple) {
      if (value.trim().length > 0) {
        this.selected = [...this.selected, value];
        this.setItemDisabledState(this.selected);
      }

      this.removeDropdownFilter();
    }
  };

  private setItemDisabledState(selected: string[]): void {
    this.hostElement.querySelectorAll("mw-menu-item").forEach(item => {
      const isDisabled = selected.includes(item.getAttribute("value"));
      item.setAttribute("disabled", `${isDisabled}`);
    });
  }

  private handleChipListValueChange(event: MwChipInputCustomEvent<string[]>): void {
    this.selected = event.detail;
    this.setItemDisabledState(this.selected);
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

            <mw-popover noPadding={true} closeOnClick={true} open={this.isDropdownOpen}>
              {this.multiple ? (
                <mw-chip-input
                  name={this.name}
                  placeholder={this.placeholder}
                  disabled={this.disabled}
                  multipleMaximum={this.multipleMaximum}
                  multipleMaximumText={this.multipleMaximumText}
                  selected={this.selected}
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                  onMwChipListValueChanged={this.handleChipListValueChange.bind(this)}
                  onMwChipListInputChange={this.onInputChange.bind(this)}
                  slot="anchor"
                >
                  <slot name="icon-start" />
                  <slot name="icon-end" />
                  <span
                    class={{
                      "focused": this.focused,
                      "has-error": this.hasError,
                    }}
                    slot="icon-end"
                  >
                    <mw-icon icon={this.isDropdownOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"} size="medium"></mw-icon>
                  </span>
                </mw-chip-input>
              ) : (
                <mw-textfield disabled={this.disabled} type={this.type} value={this.value} name={this.name} placeholder={this.placeholder} slot="anchor">
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
                {!this.multipleMaximum || -1 < this.multipleMaximum ? <slot name="dropdown-menu"></slot> : <div class="maximum-reached">{this.multipleMaximumText}</div>}
                <div ref={el => (this.noMatchDisclaimer = el as HTMLDivElement)} class="no-matches">
                  {this.noMatchText}
                </div>
              </div>
            </mw-popover>

            {this.inline ?? <mw-helper-text helperText={this.helperText} hasError={this.hasError} />}
          </div>

          {!this.inline ?? <mw-helper-text helperText={this.helperText} hasError={this.hasError} />}
        </div>
      </Host>
    );
  }
}
